// 文章住在 content/blog/<slug>.<locale>.md,头部是几行 `key: value`(title、description、date,可选 updated),
// 正文是 app/lib/markdown.js 认的那个 Markdown 子集。中英各一份、同一个 slug;只有一种语言的文章在另一种语言下不列出。
// 这里不读文件系统:Cloudflare 的 Worker 里没有 content/,Markdown 由 scripts/build-blog-content.mjs 在构建前
// 内联成 blog-content.generated.js(package.json 的 prebuild;生成物也提交进仓库)。

import { BLOG_FILES } from "./blog-content.generated";
import { markdownToText } from "./markdown";

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
  for (const { slug, locale, file, raw } of BLOG_FILES) {
    const { meta, body } = parseFrontmatter(raw, file);
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
