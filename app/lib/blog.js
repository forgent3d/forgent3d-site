// 文章住在 content/blog/<slug>.<locale>.md,头部是几行 `key: value`(title、description、date,可选 updated),
// 正文是 app/lib/markdown.js 认的那个 Markdown 子集。中英各一份、同一个 slug;只有一种语言的文章在另一种语言下不列出。
// 构建时读磁盘(generateStaticParams),运行时不碰文件系统。

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { markdownToText } from "./markdown";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const LOCALES = ["en", "zh"];

function parseFrontmatter(raw, file) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) throw new Error(`${file}: no front matter`);
  const meta = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  for (const required of ["title", "description", "date"]) {
    if (!meta[required]) throw new Error(`${file}: front matter needs ${required}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`${file}: date must be YYYY-MM-DD`);
  return { meta, body: match[2].trim() };
}

let cache = null;

/** Every post, every locale: { slug, locale, title, description, date, updated?, body, words }. */
function loadAll() {
  if (cache) return cache;
  const posts = [];
  for (const file of readdirSync(CONTENT_DIR)) {
    const match = /^([a-z0-9-]+)\.(en|zh)\.md$/.exec(file);
    if (!match) continue;
    const [, slug, locale] = match;
    const { meta, body } = parseFrontmatter(readFileSync(path.join(CONTENT_DIR, file), "utf8"), file);
    const text = markdownToText(body);
    posts.push({
      slug,
      locale,
      title: meta.title,
      description: meta.description,
      date: meta.date,
      ...(meta.updated ? { updated: meta.updated } : {}),
      body,
      // a reading-time figure: Chinese counts characters, English words
      words: locale === "zh" ? text.replace(/\s/g, "").length : text.split(/\s+/).length,
    });
  }
  cache = posts;
  return posts;
}

/** The posts of one locale, newest first. */
export function listPosts(locale) {
  return loadAll()
    .filter((post) => post.locale === locale)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
}

export function getPost(locale, slug) {
  return loadAll().find((post) => post.locale === locale && post.slug === slug) ?? null;
}

/** The locales a slug exists in: hreflang only points at pages that are there. */
export function postLocales(slug) {
  return LOCALES.filter((locale) => getPost(locale, slug));
}

export function blogPath(locale, slug) {
  return slug ? `/${locale}/blog/${slug}` : `/${locale}/blog`;
}

/** Minutes to read, never 0. */
export function readingMinutes(post) {
  return Math.max(1, Math.round(post.words / (post.locale === "zh" ? 400 : 220)));
}

export function formatDate(date, locale) {
  const [y, m, d] = date.split("-").map(Number);
  if (locale === "zh") return `${y} 年 ${m} 月 ${d} 日`;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
