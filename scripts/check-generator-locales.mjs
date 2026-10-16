#!/usr/bin/env node
// The generator pages in the languages that have only those pages (app/lib/generator-locales/<lang>.js) are
// translations of the English entries in app/lib/generators.js. This fails on what a translation must not change
// and on what would leave a page half translated:
//
//   - shape: `shared` has exactly the English keys, with the same array lengths; every generator is there with
//     name/title/description/h1/intro, as many whyPoints, faqs, STEP facts and AI FAQs as English, a label and a
//     description for every parameter, and the example's label;
//   - facts: every number in an English text is in its translation (a decimal comma counts as the point);
//   - links: every link of an English text is in its translation, a generator page link with this language's
//     prefix (/de/generators/…) and every other link unchanged;
//   - titles end with " | Forgent3D"; every generator names the search phrases it is written for (`keywords`).
//
// Warnings (exit 0): a long text left in English, a title or description longer than search results show.
//
//   node scripts/check-generator-locales.mjs          # every language
//   node scripts/check-generator-locales.mjs ja       # one
import { GENERATORS, generatorsSharedCopy } from "../app/lib/generators.js";

const LANGS = ["de", "es", "ja"];
// Roughly what a result page shows before cutting: Latin script by characters, Japanese by display width
// (`width`: a full-width character counts 1, a half-width one ½ — "STL / STEP" is narrow on screen).
const TITLE_MAX = { de: 75, es: 75, ja: 40 };
const DESCRIPTION_MAX = { de: 170, es: 170, ja: 120 };
const FULL_WIDTH = /[\u1100-\u115f\u2e80-\u303f\u3040-\ua4cf\uac00-\ud7a3\uf900-\ufaff\ufe30-\ufe4f\uff00-\uff60\uffe0-\uffe6]/u;
const width = (text, lang) => (lang === "ja" ? [...text].reduce((w, ch) => w + (FULL_WIDTH.test(ch) ? 1 : 0.5), 0) : text.length);

const langs = process.argv.slice(2).length ? process.argv.slice(2) : LANGS;
const enShared = generatorsSharedCopy("en");

const numbers = (text) =>
  new Set((String(text).match(/\d+(?:[.,]\d+)?/g) || []).map((n) => n.replace(",", ".")));
const links = (text) =>
  new Set((String(text).match(/https?:\/\/[^\s"'<>)）」]+/g) || []).map((url) => url.replace(/[.,;:!?。、]+$/, "")));
const localized = (url, lang) => url.replace(/^(https:\/\/www\.forgent3d\.com)\/en\/generators(?=[/?#]|$)/, `$1/${lang}/generators`);
const flat = (value) => (Array.isArray(value) ? value.map(flat).join("\n") : value && typeof value === "object" ? Object.values(value).map(flat).join("\n") : String(value ?? ""));
const isText = (v) => typeof v === "string" && v.trim().length > 0;

function sameShape(en, tr, where, problems) {
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return problems.push(`${where}: expected an array`);
    if (tr.length !== en.length) return problems.push(`${where}: ${tr.length} items, English has ${en.length}`);
    en.forEach((item, i) => sameShape(item, tr[i], `${where}[${i}]`, problems));
  } else if (en && typeof en === "object") {
    if (!tr || typeof tr !== "object") return problems.push(`${where}: expected an object`);
    for (const key of Object.keys(en)) sameShape(en[key], tr[key], `${where}.${key}`, problems);
    for (const key of Object.keys(tr)) if (!(key in en)) problems.push(`${where}.${key}: not an English key`);
  } else if (isText(en) ? !isText(tr) : typeof tr !== "string") {
    // An empty English cell (the comparison table's corner) stays an empty string.
    problems.push(`${where}: missing text`);
  }
}

/** The facts of one English text that its translation has to carry. */
function sameFacts(en, tr, where, lang, problems, warnings) {
  const enText = flat(en);
  const trText = flat(tr);
  const have = numbers(trText);
  const missing = [...numbers(enText)].filter((n) => !have.has(n));
  if (missing.length) problems.push(`${where}: numbers missing: ${missing.join(", ")}`);
  const trLinks = links(trText);
  for (const url of links(enText)) {
    const want = localized(url, lang);
    if (!trLinks.has(want)) problems.push(`${where}: link missing: ${want}`);
  }
  for (const url of trLinks) if (/www\.forgent3d\.com\/en\/generators/.test(url)) problems.push(`${where}: links the English page: ${url}`);
  if (enText.length > 40 && trText.trim() === enText.trim()) warnings.push(`${where}: same as English`);
  if (lang === "ja" && enText.length > 40 && !/[぀-ヿ一-鿿]/.test(trText)) warnings.push(`${where}: no Japanese in it`);
}

let failed = 0;
for (const lang of langs) {
  const file = await import(`../app/lib/generator-locales/${lang}.js`);
  const problems = [];
  const warnings = [];

  if (!file.shared) problems.push("shared: missing");
  else {
    sameShape(enShared, file.shared, "shared", problems);
    for (const key of Object.keys(enShared)) sameFacts(enShared[key], file.shared[key], `shared.${key}`, lang, problems, warnings);
  }

  const byslug = file.generators || {};
  for (const slug of Object.keys(byslug)) if (!GENERATORS.some((g) => g.slug === slug)) problems.push(`${slug}: not a generator`);
  for (const g of GENERATORS) {
    const t = byslug[g.slug];
    if (!t) {
      problems.push(`${g.slug}: missing`);
      continue;
    }
    sameShape(g.copy.en, t.copy, `${g.slug}.copy`, problems);
    for (const key of Object.keys(g.copy.en)) sameFacts(g.copy.en[key], t.copy?.[key], `${g.slug}.copy.${key}`, lang, problems, warnings);
    if (isText(t.copy?.title) && !t.copy.title.endsWith(" | Forgent3D")) problems.push(`${g.slug}.copy.title: must end with " | Forgent3D"`);
    if (isText(t.copy?.title) && width(t.copy.title, lang) > TITLE_MAX[lang]) warnings.push(`${g.slug}.copy.title: ${width(t.copy.title, lang)} wide (results show about ${TITLE_MAX[lang]})`);
    if (isText(t.copy?.description) && width(t.copy.description, lang) > DESCRIPTION_MAX[lang]) warnings.push(`${g.slug}.copy.description: ${width(t.copy.description, lang)} wide (results show about ${DESCRIPTION_MAX[lang]})`);

    if (!Array.isArray(t.keywords) || !t.keywords.length || !t.keywords.every(isText)) problems.push(`${g.slug}.keywords: needs the search phrases`);

    const keys = new Set(g.params.map((p) => p.key));
    for (const key of Object.keys(t.params || {})) if (!keys.has(key)) problems.push(`${g.slug}.params.${key}: not a parameter`);
    for (const p of g.params) {
      const row = t.params?.[p.key];
      if (!isText(row?.label) || !isText(row?.desc)) problems.push(`${g.slug}.params.${p.key}: needs label and desc`);
      else sameFacts([p.label.en, p.desc.en], [row.label, row.desc], `${g.slug}.params.${p.key}`, lang, problems, warnings);
    }

    if (g.example) {
      if (!isText(t.example)) problems.push(`${g.slug}.example: missing`);
      else sameFacts(g.example.label.en, t.example, `${g.slug}.example`, lang, problems, warnings);
    }
    for (const field of ["step", "aiFaqs"]) {
      if (!g[field]?.en) continue;
      sameShape(g[field].en, t[field], `${g.slug}.${field}`, problems);
      sameFacts(g[field].en, t[field], `${g.slug}.${field}`, lang, problems, warnings);
    }
  }

  if (problems.length) failed += 1;
  console.log(`${problems.length ? "✗" : "✓"} ${lang}: ${problems.length} problems, ${warnings.length} warnings`);
  for (const p of problems) console.log(`    ✗ ${p}`);
  for (const w of warnings) console.log(`    ! ${w}`);
}
process.exit(failed ? 1 : 0);
