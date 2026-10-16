#!/usr/bin/env node
// Each generator page's parameter table (app/lib/generators.js `params`) is hand-written copy; the parameters
// themselves are the `#@` knobs of the model.py in the platform repo, which the app serves as JSON
// (/api/generators/<modelDir>, derived on request). This compares the two and fails on drift: a knob the page
// does not list, a listed key that is no longer a knob, a different default, a different range.
//
//   node scripts/check-generator-params.mjs                    # against https://app.forgent3d.com
//   APP_BASE=http://localhost:3000 node scripts/check-generator-params.mjs
//
// Display wording is allowed to differ: `on/off` for booleans, a choice named by its start ("6 mm" for
// "6 mm slot (EU / B-type / V-slot)"), "20 / 25" for a two-stop range.
import { GENERATORS } from "../app/lib/generators.js";

const appBase = process.env.APP_BASE || "https://app.forgent3d.com";

const BOOL = { on: true, off: false, true: true, false: false };

function sameDefault(site, knob) {
  const text = String(site).trim().toLowerCase();
  if (knob.type === "number") return Number(text.replace("−", "-")) === Number(knob.default);
  if (knob.type === "bool") return BOOL[text] === knob.default;
  const want = String(knob.default).toLowerCase();
  return want === text || want.startsWith(text);
}

function sameRange(site, knob) {
  const numbers = String(site).replace(/[−–]/g, (c) => (c === "−" ? "-" : " ")).match(/[-+]?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  if (numbers.length < 2) return false;
  return numbers[0] === knob.min && numbers[numbers.length - 1] === knob.max;
}

let failed = 0;
for (const g of GENERATORS) {
  if (!g.modelDir) continue;
  const res = await fetch(`${appBase}/api/generators/${g.modelDir}`);
  if (!res.ok) {
    console.log(`✗ ${g.slug}: ${appBase}/api/generators/${g.modelDir} answered ${res.status}`);
    failed += 1;
    continue;
  }
  const schema = await res.json();
  const knobs = new Map(schema.params.map((knob) => [knob.key, knob]));
  const problems = [];
  for (const row of g.params) {
    const knob = knobs.get(row.key);
    if (!knob) {
      problems.push(`${row.key} is listed but is not a knob`);
      continue;
    }
    if (!sameDefault(row.default, knob)) problems.push(`${row.key} default: page ${row.default}, model ${knob.default}`);
    if (knob.type === "number" && !sameRange(row.range, knob)) problems.push(`${row.key} range: page "${row.range}", model ${knob.min}..${knob.max}`);
  }
  const listed = new Set(g.params.map((row) => row.key));
  for (const key of knobs.keys()) if (!listed.has(key)) problems.push(`${key} is a knob the page does not list`);
  if (problems.length) failed += 1;
  console.log(`${problems.length ? "✗" : "✓"} ${g.slug}${problems.map((p) => `\n    ${p}`).join("")}`);
}
process.exit(failed ? 1 : 0);
