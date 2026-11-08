// After `next build`: every prerendered page → public/<path>.md, plus public/llms-full.txt (every English page in
// one file). The same page an assistant would fetch as HTML, as plain Markdown: tool pages are mostly an embedded
// tool and a lot of markup, and an AI fetcher reads the text far better without them (stl2step.ai does the same).
//
// Served as static assets at the page's own path plus ".md" (/en/agents.md, /en.md for a locale home); middleware.js
// answers `Accept: text/markdown` with them and points every page at its .md in a Link header. Generated, never
// edited and never committed (.gitignore): `pnpm build` runs this after `next build`, before OpenNext copies public/.
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import TurndownService from "turndown";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const appDir = path.join(root, ".next", "server", "app");
const publicDir = path.join(root, "public");
const SITE = "https://www.forgent3d.com";
const LOCALES = new Set(["en", "zh", "de", "es", "ja", "ko"]);

/** Every prerendered page: .next/server/app/<locale>/…/<name>.html (the locale home is <locale>.html). */
function prerendered(dir, rel = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const relPath = rel ? `${rel}/${entry}` : entry;
    if (statSync(full).isDirectory()) out.push(...prerendered(full, relPath));
    else if (entry.endsWith(".html")) out.push(relPath.slice(0, -".html".length));
  }
  return out;
}

const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
// Not text: scripts and JSON-LD, styles, icons, the embedded tool's frame and its placeholder button.
turndown.remove(["script", "style", "noscript", "svg", "iframe", "button", "form", "template"]);
// Links stay absolute, so the file reads the same wherever it is quoted.
turndown.addRule("absoluteLinks", {
  filter: (node) => node.nodeName === "A" && node.getAttribute("href"),
  replacement: (content, node) => {
    const text = content.trim();
    let href = node.getAttribute("href");
    if (href.startsWith("/")) href = SITE + href;
    if (!text) return "";
    const link = text === href ? `<${href}>` : `[${text}](${href})`;
    // A link right before another element (a language row, a breadcrumb) would run into it.
    return node.nextSibling?.nodeType === 1 ? `${link} ` : link;
  },
});
// A span laid out as its own line (`block`, e.g. a parameter's link name under its label) keeps a gap in text.
turndown.addRule("blockSpans", {
  filter: (node) => node.nodeName === "SPAN" && /(^|\s)block(\s|$)/.test(node.getAttribute("class") || ""),
  replacement: (content) => ` ${content.trim()} `,
});
// Table cells hold one line each in Markdown; turndown leaves tables as HTML otherwise.
turndown.addRule("tables", {
  filter: "table",
  replacement: (_content, node) => {
    // The DOM turndown runs on in node (domino) has getElementsByTagName but no querySelectorAll on elements.
    const rows = Array.from(node.getElementsByTagName("tr")).map((tr) =>
      Array.from(tr.childNodes).filter((c) => c.nodeName === "TH" || c.nodeName === "TD").map((cell) => turndown.turndown(cell.innerHTML).replace(/\s*\n+\s*/g, " ").replace(/\|/g, "\\|").trim()),
    );
    if (!rows.length) return "";
    const width = Math.max(...rows.map((r) => r.length));
    const line = (r) => `| ${[...r, ...Array(width - r.length).fill("")].join(" | ")} |`;
    return `\n\n${line(rows[0])}\n| ${Array(width).fill("---").join(" | ")} |\n${rows.slice(1).map(line).join("\n")}\n\n`;
  },
});

function pageMarkdown(html, url) {
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? "";
  const description = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? "";
  const main = /<main[\s>][\s\S]*<\/main>/.exec(html)?.[0];
  if (!main) return null;
  const body = turndown
    .turndown(main)
    // "-   " → "- ", and list items whose copy already starts with "- " (the pages draw their own dash).
    .replace(/^(\s*)-   (?:\\- )?/gm, "$1- ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  return `---\ntitle: ${JSON.stringify(decode(title))}\ndescription: ${JSON.stringify(decode(description))}\nurl: ${url}\n---\n\n${body}\n`;
}

// Fresh each build: a page that was removed must not keep a stale .md.
for (const locale of LOCALES) rmSync(path.join(publicDir, locale), { recursive: true, force: true });
for (const locale of LOCALES) rmSync(path.join(publicDir, `${locale}.md`), { force: true });

const pages = prerendered(appDir).filter((p) => LOCALES.has(p.split("/")[0])).sort();
const english = [];
let written = 0;
for (const page of pages) {
  const url = `${SITE}/${page}`;
  const md = pageMarkdown(readFileSync(path.join(appDir, `${page}.html`), "utf8"), url);
  if (!md) continue;
  const out = path.join(publicDir, `${page}.md`);
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, md);
  written += 1;
  if (page === "en" || page.startsWith("en/")) english.push(md);
}

const llms = readFileSync(path.join(publicDir, "llms.txt"), "utf8");
const header = `# Forgent3D — every English page in one file\n\n> The summary and the facts per tool are in ${SITE}/llms.txt; this file is the full text of every public English page, generated at build time. Any page is also available alone as Markdown: add .md to its path (${SITE}/en/agents.md) or send Accept: text/markdown.\n\n`;
writeFileSync(path.join(publicDir, "llms-full.txt"), header + english.join("\n\n---\n\n"));
console.log(`[markdown] ${written} pages → public/<path>.md; ${english.length} English pages → public/llms-full.txt (${Math.round((header.length + english.join("").length) / 1024)} KB); llms.txt ${llms.length} chars`);
