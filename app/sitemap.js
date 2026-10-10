import { GENERATORS } from "./lib/generators";
import { listPosts } from "./lib/blog";

const base = "https://www.forgent3d.com";

// lastModified:只在页面正文真改了的时候往后挪。Google 只信一直准的 lastmod,别图省事写成构建时间
// (每次部署全站都「刚改过」,等于没写)。
const ROUTES = [
  // [路径, changeFrequency, priority, lastModified]
  ["", "weekly", 1.0, "2026-09-30"],
  ["/skills", "weekly", 0.85, "2026-10-10"],
  ["/openscad-to-step", "weekly", 0.9, "2026-10-10"],
  ["/openscad-to-step/why-openscad-cant-export-step", "monthly", 0.7, "2026-09-30"],
  ["/openscad-to-step/compatibility", "monthly", 0.7, "2026-09-30"],
  ["/openscad-viewer", "weekly", 0.9, "2026-10-10"],
  ["/blog", "weekly", 0.7, "2026-10-10"],
  ["/generators", "weekly", 0.85, "2026-09-30"],
  ...GENERATORS.map((g) => [`/generators/${g.slug}`, "weekly", 0.8, "2026-09-30"]),
  ["/ai-3d-model-generation", "weekly", 0.8, "2026-09-30"],
  ["/code-to-parametric-cad", "weekly", 0.8, "2026-09-30"],
  ["/pricing", "weekly", 0.75, "2026-09-30"],
  ["/contact", "weekly", 0.7, "2026-09-30"],
  ["/local-data", "weekly", 0.7, "2026-09-30"],
  ["/quick-start", "weekly", 0.7, "2026-09-30"],
];

export default function sitemap() {
  // 文章的 lastmod 是文章头部的 updated(没有就是 date),改正文时记得改它
  const posts = ["en", "zh"].flatMap((locale) =>
    listPosts(locale).map((post) => ({ url: `${base}/${locale}/blog/${post.slug}`, lastModified: post.updated || post.date, changeFrequency: "monthly", priority: 0.6 })),
  );
  return [
    ...ROUTES.flatMap(([path, changeFrequency, priority, lastModified]) =>
      ["en", "zh"].map((locale) => ({ url: `${base}/${locale}${path}`, lastModified, changeFrequency, priority })),
    ),
    ...posts,
  ];
}
