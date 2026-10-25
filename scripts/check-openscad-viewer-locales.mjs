#!/usr/bin/env node
// The OpenSCAD viewer page's translations (app/lib/openscad-viewer-copy/<lang>.js, and the cheat sheet's rows in
// app/lib/openscad-cheatsheet.js) against the English. This fails on what a translation must not change and on
// what would leave the page half translated:
//
//   - shape: every language has exactly the English keys, with the same array lengths, and no empty text;
//   - facts: every number in an English text is in its translation (a decimal comma counts as the point);
//   - links: every link in an English text is in its translation, unchanged;
//   (zh was written alongside the English, not translated from it: it is held to the keys only — its keywords and
//   its numbers, "15 万", are its own;)
//   - titles end with " | Forgent3D";
//   - the cheat sheet: every row has a text and an example in every language, and every example is the English
//     code once comments are taken out — a translated example renders exactly what the English one does.
//
// Warnings (exit 0): a title or description longer than search results show.
//
//   node scripts/check-openscad-viewer-locales.mjs
import { CHEATSHEET_ROWS } from "../app/lib/openscad-cheatsheet.js";
import de from "../app/lib/openscad-viewer-copy/de.js";
import en from "../app/lib/openscad-viewer-copy/en.js";
import es from "../app/lib/openscad-viewer-copy/es.js";
import ja from "../app/lib/openscad-viewer-copy/ja.js";
import ko from "../app/lib/openscad-viewer-copy/ko.js";
import zh from "../app/lib/openscad-viewer-copy/zh.js";

const COPIES = { zh, ko, de, ja, es };
// Roughly what a result page shows before cutting: Latin script by characters, CJK by display width (a full-width
// character counts 1, a half-width one ½), as in check-generator-locales.mjs.
const TITLE_MAX = { zh: 40, ko: 40, de: 75, ja: 40, es: 75 };
const DESCRIPTION_MAX = { zh: 120, ko: 120, de: 170, ja: 120, es: 170 };
const FULL_WIDTH = /[ᄀ-ᅟ⺀-〿぀-꓏가-힣豈-﫿︰-﹏＀-｠￠-￦]/u;
const width = (text, lang) =>
  TITLE_MAX[lang] === 40 ? [...text].reduce((w, ch) => w + (FULL_WIDTH.test(ch) ? 1 : 0.5), 0) : text.length;

const numbers = (text) => new Set((String(text).match(/\d+(?:[.,]\d+)?/g) || []).map((n) => n.replace(",", ".")));
const links = (text) =>
  new Set((String(text).match(/https?:\/\/[^\s"'<>)）」]+/g) || []).map((url) => url.replace(/[.,;:!?。、]+$/, "")));
const isText = (v) => typeof v === "string" && v.trim().length > 0;

/**
 * Same keys and array lengths as the English, a text wherever English has one; then numbers and links per text.
 * `keysOnly` (zh) stops at the keys: no array lengths, numbers or links.
 */
function compare(enValue, trValue, where, problems, keysOnly = false) {
  if (Array.isArray(enValue)) {
    if (!Array.isArray(trValue)) return problems.push(`${where}: expected an array`);
    if (keysOnly) return;
    if (trValue.length !== enValue.length) return problems.push(`${where}: ${trValue.length} items, English has ${enValue.length}`);
    enValue.forEach((item, i) => compare(item, trValue[i], `${where}[${i}]`, problems));
  } else if (enValue && typeof enValue === "object") {
    if (!trValue || typeof trValue !== "object") return problems.push(`${where}: expected an object`);
    for (const key of Object.keys(enValue)) compare(enValue[key], trValue[key], `${where}.${key}`, problems, keysOnly);
    for (const key of Object.keys(trValue)) if (!(key in enValue)) problems.push(`${where}.${key}: not an English key`);
  } else if (isText(enValue) ? !isText(trValue) : typeof trValue !== "string") {
    // An empty English cell (the comparison table's corner) stays an empty string.
    problems.push(`${where}: missing text`);
  } else if (!keysOnly) {
    const have = numbers(trValue);
    const lostNumbers = [...numbers(enValue)].filter((n) => !have.has(n));
    if (lostNumbers.length) problems.push(`${where}: numbers ${lostNumbers.join(", ")} are in the English but not here`);
    const haveLinks = links(trValue);
    const lostLinks = [...links(enValue)].filter((url) => !haveLinks.has(url));
    if (lostLinks.length) problems.push(`${where}: links ${lostLinks.join(", ")} are in the English but not here`);
  }
}

/** OpenSCAD code without its comments and the spaces that lined them up: what the renderer sees. */
const geometry = (code) =>
  code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .split("\n")
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .join("\n");

const problems = [];
const warnings = [];

for (const [lang, copy] of Object.entries(COPIES)) {
  compare(en, copy, `${lang}`, problems, lang === "zh");
  if (!copy.title?.endsWith(" | Forgent3D")) problems.push(`${lang}.title: should end with " | Forgent3D"`);
  if (copy.title && width(copy.title, lang) > TITLE_MAX[lang]) warnings.push(`${lang}.title: ${width(copy.title, lang)} wide, results show about ${TITLE_MAX[lang]}`);
  if (copy.description && width(copy.description, lang) > DESCRIPTION_MAX[lang])
    warnings.push(`${lang}.description: ${width(copy.description, lang)} wide, results show about ${DESCRIPTION_MAX[lang]}`);
}

for (const row of CHEATSHEET_ROWS) {
  const enGeometry = geometry(row.code.en);
  for (const lang of Object.keys(COPIES)) {
    if (!isText(row.text[lang])) problems.push(`cheatsheet ${row.id}: no ${lang} text`);
    if (!isText(row.code[lang])) {
      problems.push(`cheatsheet ${row.id}: no ${lang} example`);
      continue;
    }
    if (geometry(row.code[lang]) !== enGeometry) problems.push(`cheatsheet ${row.id}: the ${lang} example differs from the English outside comments`);
    const have = numbers(row.text[lang]);
    const lost = lang === "zh" ? [] : [...numbers(row.text.en)].filter((n) => !have.has(n));
    if (lost.length) problems.push(`cheatsheet ${row.id}: ${lang} text lacks the numbers ${lost.join(", ")}`);
  }
}

for (const warning of warnings) console.log(`warn  ${warning}`);
for (const problem of problems) console.log(`FAIL  ${problem}`);
console.log(problems.length ? `\n${problems.length} problem(s)` : `ok: ${Object.keys(COPIES).join(", ")} match the English; ${CHEATSHEET_ROWS.length} cheat-sheet rows`);
process.exit(problems.length ? 1 : 0);
