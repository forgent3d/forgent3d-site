import { CALCULATORS, CALCULATOR_LOCALES, calculatorLocales } from "./lib/calculators";
import { GENERATORS, GENERATOR_LOCALES, generatorLocales } from "./lib/generators";
import { listPosts } from "./lib/blog";
import { STEP_TOOL_LOCALES, STEP_TOOL_SLUGS } from "./lib/step-tools";
import { VIEWER_LOCALES } from "./lib/openscad-viewer";

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
  ["/openscad-to-stl", "weekly", 0.85, "2026-10-15"],
  ["/openscad-customizer", "weekly", 0.85, "2026-10-15"],
  ["/chatgpt-openscad", "weekly", 0.85, "2026-10-15"],
  ["/build123d-online", "weekly", 0.9, "2026-10-26"],
  ["/blog", "weekly", 0.7, "2026-10-30"],
  ["/ai-3d-model-generation", "weekly", 0.8, "2026-09-30"],
  ["/code-to-parametric-cad", "weekly", 0.8, "2026-09-30"],
  ["/pricing", "weekly", 0.75, "2026-09-30"],
  ["/contact", "weekly", 0.7, "2026-09-30"],
  ["/local-data", "weekly", 0.7, "2026-09-30"],
  ["/quick-start", "weekly", 0.7, "2026-09-30"],
];

// The generator pages exist in more languages than the rest of the site: the index in every GENERATOR_LOCALES
// language, each generator in the languages it is translated into. Each carries its own `updated`
// (app/lib/generators.js): the day its copy last really changed.
const GENERATOR_ROUTES = [
  ["/generators", "weekly", 0.85, "2026-10-16", GENERATOR_LOCALES],
  ...GENERATORS.map((g) => [`/generators/${g.slug}`, "weekly", 0.8, g.updated, generatorLocales(g)]),
  // Calculators: each in the languages its copy has; the index in every language that has one.
  ["/calculators", "weekly", 0.75, CALCULATORS.map((c) => c.updated).sort().at(-1), CALCULATOR_LOCALES],
  ...CALCULATORS.map((c) => [`/calculators/${c.slug}`, "weekly", 0.8, c.updated, calculatorLocales(c)]),
];

// The STEP ↔ STL pages (app/lib/step-tools.js) are in en, zh, de and ja.
const STEP_TOOL_ROUTES = STEP_TOOL_SLUGS.map((slug) => [`/${slug}`, "weekly", 0.85, "2026-10-20", STEP_TOOL_LOCALES]);

// The OpenSCAD viewer (app/lib/openscad-viewer.js) is in six languages; en and zh last changed on 10-17, the
// translations went up on 10-25.
const VIEWER_ROUTES = [
  ["/openscad-viewer", "weekly", 0.9, "2026-10-17", ["en", "zh"]],
  ["/openscad-viewer", "weekly", 0.9, "2026-10-25", VIEWER_LOCALES.filter((l) => l !== "en" && l !== "zh")],
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
    ...[...GENERATOR_ROUTES, ...STEP_TOOL_ROUTES, ...VIEWER_ROUTES].flatMap(([path, changeFrequency, priority, lastModified, locales]) =>
      locales.map((locale) => ({ url: `${base}/${locale}${path}`, lastModified, changeFrequency, priority })),
    ),
    ...posts,
  ];
}
