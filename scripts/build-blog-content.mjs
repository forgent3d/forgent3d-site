// content/blog/*.md → app/lib/blog-content.generated.js。文章页和 sitemap 在 Cloudflare 的 Worker 里跑,那里没有
// 文件系统,所以 Markdown 在构建前内联成一个模块(package.json 的 prebuild),生成物也提交进仓库 —— 部署端不跑
// prebuild 也照样有。改了 content/blog 之后跑一次 `npm run build`(或直接 `node scripts/build-blog-content.mjs`)。
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "content", "blog");
const out = path.join(root, "app", "lib", "blog-content.generated.js");

const files = readdirSync(dir).filter((file) => /^[a-z0-9-]+\.(en|zh)\.md$/.test(file)).sort();
const entries = files.map((file) => {
  const [, slug, locale] = /^([a-z0-9-]+)\.(en|zh)\.md$/.exec(file);
  return { slug, locale, file, raw: readFileSync(path.join(dir, file), "utf8") };
});
const body = entries.map((e) => `  { slug: ${JSON.stringify(e.slug)}, locale: ${JSON.stringify(e.locale)}, file: ${JSON.stringify(e.file)}, raw: ${JSON.stringify(e.raw)} },`).join("\n");
writeFileSync(out, `// 由 scripts/build-blog-content.mjs 从 content/blog/*.md 生成 —— 不要手改,改 .md 再跑一次构建。\nexport const BLOG_FILES = [\n${body}\n];\n`);
console.log(`[blog] ${entries.length} files → app/lib/blog-content.generated.js`);
