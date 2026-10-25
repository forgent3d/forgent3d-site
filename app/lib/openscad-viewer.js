// OpenSCAD viewer: one page under /[locale]/openscad-viewer with its own header (app/[locale]/openscad-viewer/layout.js),
// the sibling of openscad-to-step. Same tool in the app (/scad), a different search intent: "openscad viewer / online /
// preview / open a .scad file" wants to SEE the model, not a STEP. The two pages link each other and must not chase
// the same keywords. The path, the metadata and the languages live here; the copy, one file per language, in
// openscad-viewer-copy/.
//
// Its head term is "openscad在线" / "openscad online" (Bing's query data: platform docs/generator-seo-research.md §1.9),
// so the titles lead with it, and the page carries what someone who wants to use OpenSCAD online can use on landing:
// the cheat sheet (openscad-cheatsheet.js), every row a link that opens its example rendered.
//
// Six languages: en and zh like the rest of the site, plus ko, de, ja and es — the OpenSCAD head term has its own
// volume in each (Semrush 10-20: 오픈scad 14,800, de 6,600, es 2,900, jp 1,900 a month; platform
// docs/generator-seo-research.md §1.11, A4). Only this page is translated: from a ko / de / ja / es page the other
// OpenSCAD pages and the home page are the English ones, and say so; the app speaks English to them.

import { APP_SCAD_URL, SCAD_EXAMPLES, scadExampleUrl, scadPath } from "./openscad-to-step";
import { OG_BASE, SITE_URL } from "./seo";
import de from "./openscad-viewer-copy/de";
import en from "./openscad-viewer-copy/en";
import es from "./openscad-viewer-copy/es";
import ja from "./openscad-viewer-copy/ja";
import ko from "./openscad-viewer-copy/ko";
import zh from "./openscad-viewer-copy/zh";

export { SCAD_EXAMPLES, scadExampleUrl };

const COPY = { en, zh, ko, de, ja, es };

export const VIEWER_LOCALES = ["en", "zh", "ko", "de", "ja", "es"];

/** Each language named in itself, for the footer's language list. */
export const VIEWER_LOCALE_NAMES = { en: "English", zh: "中文", ko: "한국어", de: "Deutsch", ja: "日本語", es: "Español" };

export function isViewerLocale(locale) {
  return VIEWER_LOCALES.includes(locale);
}

/** The rest of the site (home, the other OpenSCAD pages, skills) and the app speak en and zh; the others get English. */
export function viewerSiteLocale(locale) {
  return locale === "zh" ? "zh" : "en";
}

const SLUG = "openscad-viewer";

export function viewerPath(locale) {
  return `/${locale}/${SLUG}`;
}

export function viewerAppUrl(locale) {
  return `${APP_SCAD_URL}?lang=${viewerSiteLocale(locale)}`;
}

/** The page's own example, opened from a link so the visitor lands on the preview with code in it. */
export const VIEWER_SAMPLE = `// A bracket: a plate with two slots and a stiffening rib
$fn = 48;
difference() {
  union() {
    cube([60, 30, 4]);
    translate([0, 0, 4]) cube([60, 4, 16]);
  }
  for (x = [12, 48]) translate([x, 17, -1]) hull() {
    cylinder(h = 6, d = 5);
    translate([0, 6, 0]) cylinder(h = 6, d = 5);
  }
}
%translate([-5, -5, 0]) cube([70, 40, 1]); // the sheet it mounts on, shown only
#translate([30, 2, 10]) rotate([-90, 0, 0]) cylinder(h = 4, d = 3); // a pin, highlighted`;

export function viewerSampleUrl(locale) {
  return `${APP_SCAD_URL}?lang=${viewerSiteLocale(locale)}#code=${Buffer.from(VIEWER_SAMPLE, "utf8").toString("base64url")}`;
}

export function viewerMetadata(locale) {
  const t = getViewerCopy(locale);
  const path = viewerPath(locale);
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: { ...Object.fromEntries(VIEWER_LOCALES.map((l) => [l, viewerPath(l)])), "x-default": viewerPath("en") },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: t.ogImage, width: 1200, height: 630, alt: t.toolName }],
      title: t.title,
      description: t.description,
      locale: t.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export function viewerSchemas(locale) {
  const t = getViewerCopy(locale);
  const url = `${SITE_URL}${viewerPath(locale)}`;
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
      potentialAction: {
        "@type": "ViewAction",
        name: "Open OpenSCAD code in the viewer",
        target: { "@type": "EntryPoint", urlTemplate: `${APP_SCAD_URL}#code={code}` },
      },
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
        { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_URL}/${viewerSiteLocale(locale)}` },
        { "@type": "ListItem", position: 2, name: t.toolName, item: url },
      ],
    },
  ];
}

/** This page's copy (app/lib/openscad-viewer-copy/<locale>.js). */
export function getViewerCopy(locale) {
  return COPY[locale] ?? COPY.en;
}
