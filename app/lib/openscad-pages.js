// The OpenSCAD landing pages: one tool in the app (/scad), one page per thing people type into a search box.
// openscad-viewer (see a model) and openscad-to-step (a CAD file) came first and keep their own modules; the three
// below share this one: openscad-to-stl (a file for the slicer), openscad-customizer (someone else's customizable
// model) and chatgpt-openscad (code an AI assistant wrote). Each page owns its keywords — none of them chases another
// page's — and every page's footer links all the others.

import { scadAppUrl } from "./openscad-to-step";
import { VIEWER_LOCALES } from "./openscad-viewer";
import { OG_BASE, SITE_URL } from "./seo";

export { scadAppUrl };

const PAGES = ["openscad-viewer", "openscad-to-step", "openscad-to-stl", "openscad-customizer", "chatgpt-openscad"];

// The languages a page is in. Only the viewer has more than en and zh (openscad-viewer.js); from a ko / de / ja / es
// page the others link to English, and their labels below say so.
const PAGE_LOCALES = { "openscad-viewer": VIEWER_LOCALES };
const pageLocales = (slug) => PAGE_LOCALES[slug] ?? ["en", "zh"];

const LABELS = {
  en: {
    "openscad-viewer": "OpenSCAD online viewer",
    "openscad-to-step": "OpenSCAD to STEP",
    "openscad-to-stl": "OpenSCAD to STL",
    "openscad-customizer": "OpenSCAD Customizer",
    "chatgpt-openscad": "ChatGPT OpenSCAD to STL",
  },
  zh: {
    "openscad-viewer": "OpenSCAD 在线预览",
    "openscad-to-step": "OpenSCAD 转 STEP",
    "openscad-to-stl": "OpenSCAD 转 STL",
    "openscad-customizer": "OpenSCAD 在线定制",
    "chatgpt-openscad": "AI 写的 OpenSCAD 转 STL",
  },
  ko: {
    "openscad-viewer": "OpenSCAD 온라인 뷰어",
    "openscad-to-step": "OpenSCAD → STEP (영어)",
    "openscad-to-stl": "OpenSCAD → STL (영어)",
    "openscad-customizer": "OpenSCAD Customizer (영어)",
    "chatgpt-openscad": "ChatGPT OpenSCAD → STL (영어)",
  },
  de: {
    "openscad-viewer": "OpenSCAD Online-Viewer",
    "openscad-to-step": "OpenSCAD to STEP (Englisch)",
    "openscad-to-stl": "OpenSCAD to STL (Englisch)",
    "openscad-customizer": "OpenSCAD Customizer (Englisch)",
    "chatgpt-openscad": "ChatGPT OpenSCAD to STL (Englisch)",
  },
  ja: {
    "openscad-viewer": "OpenSCAD オンラインビューア",
    "openscad-to-step": "OpenSCAD to STEP（英語）",
    "openscad-to-stl": "OpenSCAD to STL（英語）",
    "openscad-customizer": "OpenSCAD Customizer（英語）",
    "chatgpt-openscad": "ChatGPT OpenSCAD to STL（英語）",
  },
  es: {
    "openscad-viewer": "Visor OpenSCAD online",
    "openscad-to-step": "OpenSCAD to STEP (en inglés)",
    "openscad-to-stl": "OpenSCAD to STL (en inglés)",
    "openscad-customizer": "OpenSCAD Customizer (en inglés)",
    "chatgpt-openscad": "ChatGPT OpenSCAD to STL (en inglés)",
  },
};

export function openscadPagePath(locale, slug) {
  return `/${locale}/${slug}`;
}

/** Footer links: every OpenSCAD page but `except`, the one being shown — in this language where it exists, else in English. */
export function openscadPageLinks(locale, except) {
  return PAGES.filter((slug) => slug !== except).map((slug) => ({
    href: openscadPagePath(pageLocales(slug).includes(locale) ? locale : "en", slug),
    label: LABELS[locale][slug],
  }));
}

/** "Related" cards for a page body: `slugs` in the order given, each with the page's own one-line pitch. */
export function openscadPageCards(locale, slugs, pitches) {
  return slugs.map((slug) => ({ href: openscadPagePath(locale, slug), title: LABELS[locale][slug], text: pitches[slug] }));
}

/** Code in a link: the app's /scad opens `#code=<base64url>` with the code loaded and built (openscad-to-step.js SCAD_LINK_FORMAT). */
export function scadCodeUrl(locale, code) {
  return `${scadAppUrl(locale)}#code=${Buffer.from(code, "utf8").toString("base64url")}`;
}

/** `t` is the page's copy: title, description, keywords, toolName. The social card is public/og/<slug>-<locale>.png. */
export function openscadPageMetadata(locale, slug, t) {
  const path = openscadPagePath(locale, slug);
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: { en: openscadPagePath("en", slug), zh: openscadPagePath("zh", slug), "x-default": openscadPagePath("en", slug) },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: `/og/${slug}-${locale}.png`, width: 1200, height: 630, alt: t.toolName }],
      title: t.title,
      description: t.description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      url: path,
    },
  };
}

/** WebApplication + HowTo (the page's steps) + FAQPage + BreadcrumbList, from the page's copy (`featureList`, else its feature cards' titles). */
export function openscadPageSchemas(locale, slug, t) {
  const url = `${SITE_URL}${openscadPagePath(locale, slug)}`;
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
      featureList: t.featureList ?? t.features.map((f) => f.title),
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
        { "@type": "ListItem", position: 1, name: locale === "zh" ? "首页" : "Home", item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: t.toolName, item: url },
      ],
    },
  ];
}
