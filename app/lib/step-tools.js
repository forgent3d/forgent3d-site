// The STEP ↔ STL converter's two landing pages: /[locale]/step-to-stl (someone holding a STEP who needs an STL for
// the slicer — and who often first just wants to see what is in the file: "stp viewer", "step datei öffnen") and
// /[locale]/stl-to-step (someone holding an STL who needs a STEP for their CAD tool). One tool in the app
// (app.forgent3d.com/convert, platform docs/step-tools.md): the file is read, meshed or rebuilt by OpenCascade in
// the visitor's browser and never uploaded. Each page owns its keywords; they link each other and the OpenSCAD → STEP
// page (the honest answer to "how do I get a REAL STEP").
//
// Four languages, from the keyword data (platform docs/generator-seo-research.md §1.10–1.11, §5.0 B1/B2): en and zh,
// de (stl in step umwandeln 590/10, step datei öffnen 590/24) and ja (stl step 変換 260/9). The rest of the site is
// en/zh only: a de / ja page links to the English home and OpenSCAD pages, and the app runs in English for them.
// Every number on the pages comes from the survey in docs/step-tools.md §4 — change them there first.

import { OG_BASE, SITE_URL } from "./seo";

/**
 * The converter run over real files on 2026-10-20 (platform docs/step-tools.md §4 — the same WebAssembly the browser
 * runs, driven from node). Every page quotes these; re-measure there first, then change them here.
 */
export const SURVEY = {
  step: {
    files: 255,
    samples: 55,
    projects: 200,
    read: 240,
    watertight: 237,
    externalRefs: 11,
    renamedStl: 2,
    curvesOnly: 2,
    multiBody: 110,
    maxBodies: 505,
    readMedianS: 0.09,
    readP90S: 1.2,
  },
  // [file, size, faces, coarse triangles / KB, standard, fine] — presets: coarse 0.2 mm / 30°, standard 0.05 mm / 15°, fine 0.01 mm / 5°
  presets: [
    { name: "io1-cm-214 (CAx-IF)", size: "31 × 88 × 88 mm", faces: 29, coarse: [1888, 92], standard: [5454, 266], fine: [25752, 1258] },
    { name: "as1-oc-214 (CAx-IF, 18 bodies)", size: "200 × 150 × 84 mm", faces: 160, coarse: [4736, 231], standard: [8584, 419], fine: [24288, 1186] },
    { name: "MAINBODY_BACK (CAx-IF)", size: "140 × 146 × 146 mm", faces: 31, coarse: [7232, 353], standard: [27234, 1330], fine: [106952, 5222] },
  ],
  stl: {
    files: 310,
    generators: 135,
    prusa: 45,
    samples: 10,
    projects: 120,
    converted: 303,
    closedIn: 237,
    solidsOut: 232,
    volumeMaxPct: "0.0006",
    facesMedianPct: 31,
    medianS: 0.4,
    p90S: 4.5,
    bar: { triangles: 2812, faces: 719, stlKB: 137, stepMB: 1.1 },
    scan: { triangles: 117694, faces: 69143, stepMB: 84, seconds: 15 },
    // the 7 not converted, said per language
    failures: {
      en: "The 7 not converted were refused up front, with that reason: after merging they still had over 100,000 faces (six keyboard keycap sets of 180,000–280,000 triangles and a lampshade), whose STEP would pass 100 MB.",
      zh: "没转的 7 个在动手前就被拒绝并说明了原因：合并平面后仍超过 100,000 个面（6 套 18 万到 28 万三角面的键帽和一个灯罩），STEP 会超过 100 MB。",
      de: "Die 7 nicht umgewandelten wurden vorab mit Begründung abgelehnt: Auch nach dem Zusammenfassen blieben über 100.000 Flächen (sechs Tastenkappen-Sätze mit 180.000–280.000 Dreiecken und ein Lampenschirm); ihre STEP wäre über 100 MB groß.",
      ja: "変換しなかった7個は、処理の前に理由を示して断りました。平面をまとめても10万面を超え（18万〜28万三角形のキーキャップ6セットとランプシェード1個）、STEPが100 MBを超えるためです。",
    },
  },
};

export const STEP_TOOL_LOCALES = ["en", "zh", "de", "ja"];

const NUMBER_LOCALES = { en: "en-US", zh: "zh-CN", de: "de-DE", ja: "ja-JP" };

/** A number as this page's readers write it (1,234 / 1.234; 0.16 / 0,16). */
export function formatNumber(locale, value, digits = 0) {
  return new Intl.NumberFormat(NUMBER_LOCALES[locale], { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(value);
}
export const STEP_TOOL_SLUGS = ["step-to-stl", "stl-to-step"];

export const LOCALE_NAMES = { en: "English", zh: "中文", de: "Deutsch", ja: "日本語" };
const OG_LOCALES = { en: "en_US", zh: "zh_CN", de: "de_DE", ja: "ja_JP" };

/** The app's converter. The app speaks en and zh; `from` only sets the empty page's wording (the file decides the direction). */
export const APP_CONVERT_URL = "https://app.forgent3d.com/convert";

export function isStepToolLocale(locale) {
  return STEP_TOOL_LOCALES.includes(locale);
}

/** The rest of the site (home, OpenSCAD pages, generators index) in this page's language, or in English. */
export function siteLocale(locale) {
  return locale === "zh" ? "zh" : "en";
}

export function convertAppUrl(locale, from) {
  return `${APP_CONVERT_URL}?from=${from}&lang=${siteLocale(locale)}`;
}

export function stepToolPath(locale, slug) {
  return `/${locale}/${slug}`;
}

/** `t` is the page's copy: title, description, keywords, toolName. Social card: public/og/<slug>-<locale>.png. */
export function stepToolMetadata(locale, slug, t) {
  const path = stepToolPath(locale, slug);
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(STEP_TOOL_LOCALES.map((l) => [l, stepToolPath(l, slug)])),
        "x-default": stepToolPath("en", slug),
      },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: `/og/${slug}-${locale}.png`, width: 1200, height: 630, alt: t.toolName }],
      title: t.title,
      description: t.description,
      locale: OG_LOCALES[locale],
      type: "website",
      url: path,
    },
  };
}

/** WebApplication + HowTo (the page's steps) + FAQPage + BreadcrumbList. */
export function stepToolSchemas(locale, slug, t) {
  const url = `${SITE_URL}${stepToolPath(locale, slug)}`;
  const home = siteLocale(locale);
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: t.toolName,
      url,
      description: t.description,
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires WebAssembly and WebGL",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: t.features.map((f) => f.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: t.stepsTitle,
      step: t.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: home === "zh" ? "首页" : "Home", item: `${SITE_URL}/${home}` },
        { "@type": "ListItem", position: 2, name: t.toolName, item: url },
      ],
    },
  ];
}

/** The other pages a STEP / STL page points to, in this language where they exist. */
export function stepToolLinks(locale) {
  const site = siteLocale(locale);
  return {
    stepToStl: stepToolPath(locale, "step-to-stl"),
    stlToStep: stepToolPath(locale, "stl-to-step"),
    openscadToStep: `/${site}/openscad-to-step`,
    generators: `/${locale === "de" || locale === "ja" ? locale : site}/generators`,
    home: `/${site}`,
  };
}
