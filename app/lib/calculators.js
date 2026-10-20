// Calculator pages (/[locale]/calculators/<slug>) — the single source of truth for them, as generators.js is for the
// generator pages. Rule for a calculator here (docs/generator-seo-research.md §5.0 B3 in the platform repo): it ENDS
// IN A PART — every result hands off to a generator or a catalog component with the values filled in. A calculator
// that only prints a table does not belong on this site.
//
// The math lives in app/lib/calculators/*.js (tested by scripts/calculators.test.mjs), the reference data next to it
// with its sources, the page text per language in app/lib/calculators/copy/<calculator>.js. A calculator exists in a
// language when its copy has that language — chosen per calculator from the keyword data, not all at once.

import * as beltCopy from "./calculators/copy/belt.js";
import * as boltCircleCopy from "./calculators/copy/bolt-circle.js";
import * as holesCopy from "./calculators/copy/holes.js";

export const CALCULATORS = [
  {
    slug: "bolt-circle-calculator",
    widget: "bolt-circle",
    icon: "◌",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-20",
    // Generator pages it hands off to (and that link back here).
    generators: ["bolt-circle-flange-generator"],
    keywords: boltCircleCopy.keywords,
    copy: boltCircleCopy.copy,
  },
  {
    slug: "clearance-hole-chart",
    widget: "holes",
    icon: "⌀",
    updated: "2026-10-20",
    generators: ["bolt-circle-flange-generator", "shaft-coupling-generator", "pillow-block-bearing-holder-generator"],
    // The catalog component the insert half hands off to (app /c/heat-set-boss).
    component: { dir: "heat-set-boss", name: { en: "Heat-set insert boss", zh: "热熔螺母柱", de: "Dom für Gewindeeinsätze", ja: "インサートナット用ボス" } },
    keywords: holesCopy.keywords,
    copy: holesCopy.copy,
  },
  {
    slug: "gt2-belt-length-calculator",
    widget: "belt",
    icon: "◎",
    updated: "2026-10-20",
    generators: ["gt2-pulley-generator"],
    keywords: beltCopy.keywords,
    copy: beltCopy.copy,
  },
];

/** Every language with at least one calculator page. */
export const CALCULATOR_LOCALES = ["en", "zh", "de", "es", "ja"].filter((l) => CALCULATORS.some((c) => c.copy[l]));

export function calculatorLocales(calculator) {
  return CALCULATOR_LOCALES.filter((l) => calculator.copy[l]);
}

export function calculatorsIn(locale) {
  return CALCULATORS.filter((c) => c.copy[locale]);
}

export function getCalculator(slug) {
  return CALCULATORS.find((c) => c.slug === slug) || null;
}

/** The calculators that hand off to this generator, for the link block on its page (in that page's language). */
export function calculatorsForGenerator(generatorSlug, locale) {
  return CALCULATORS.filter((c) => c.generators.includes(generatorSlug) && c.copy[locale]);
}

const SHARED = {
  en: {
    breadcrumbHome: "Home",
    indexH1: "Engineering calculators",
    indexTitle: "Engineering Calculators for 3D Printing — Bolt Circle, Clearance Holes, GT2 Belts | Forgent3D",
    indexDescription:
      "Free calculators that end in a part: bolt circle coordinates to a printable flange, ISO 273 clearance and heat-set insert holes to a boss or bracket, GT2 belt length to the pulleys. STL / STEP.",
    indexIntro:
      "Each calculator does the arithmetic and then makes the part: the result opens a parametric generator with the numbers already filled in, so the next step is an STL to print or a STEP for CAD, not a table to retype.",
    endsIn: "Hands off to:",
    faqTitle: "FAQ",
    sourcesTitle: "Sources",
    sourcesIntro: "Every number on this page comes from these documents (the version or the date we read them is given).",
    relatedTitle: "Make the part",
    allGenerators: "All generators",
    forGeneratorTitle: "Calculators for this part",
  },
  zh: {
    breadcrumbHome: "首页",
    indexH1: "工程计算器",
    indexTitle: "工程计算器 — 螺栓孔分布圆、过孔与热熔螺母孔径、GT2 同步带长度 | Forgent3D",
    indexDescription:
      "算完直接出零件的免费计算器：分布圆坐标 → 可打印法兰，ISO 273 过孔与热熔螺母孔 → 螺母柱和支架，GT2 带长 → 同步带轮。导出 STL / STEP。",
    indexIntro:
      "每个计算器算完就做零件：结果直接打开参数化生成器、数值已经填好，下一步是去打印的 STL 或进 CAD 的 STEP，而不是一张要重新抄一遍的表。",
    endsIn: "直接生成：",
    faqTitle: "常见问题",
    sourcesTitle: "出处",
    sourcesIntro: "本页每个数字都来自下面这些文件（注明了版本或我们读到的日期）。",
    relatedTitle: "做成零件",
    allGenerators: "全部生成器",
    forGeneratorTitle: "配套计算器",
  },
  de: {
    breadcrumbHome: "Home",
    indexH1: "Technische Rechner",
    indexTitle: "Rechner für 3D-Druck & Konstruktion — Lochkreis, Durchgangsbohrung, Zahnriemen | Forgent3D",
    indexDescription:
      "Kostenlose Rechner, die mit einem Bauteil enden: Lochkreis-Koordinaten zum druckbaren Flansch, Durchgangsbohrung nach ISO 273 und Gewindeeinsatz-Bohrung zum Dom, GT2-Riemenlänge zu den Zahnriemenscheiben.",
    indexIntro:
      "Jeder Rechner rechnet und baut dann das Teil: Das Ergebnis öffnet einen parametrischen Generator mit den Werten schon eingetragen — als Nächstes kommt eine STL zum Drucken oder eine STEP für das CAD, keine Tabelle zum Abtippen.",
    endsIn: "Führt weiter zu:",
    faqTitle: "Häufige Fragen",
    sourcesTitle: "Quellen",
    sourcesIntro: "Jede Zahl auf dieser Seite stammt aus diesen Dokumenten (mit Ausgabe oder dem Datum, an dem wir sie gelesen haben).",
    relatedTitle: "Das Teil erzeugen",
    allGenerators: "Alle Generatoren",
    forGeneratorTitle: "Rechner zu diesem Teil",
  },
  ja: {
    breadcrumbHome: "ホーム",
    indexH1: "設計計算ツール",
    indexTitle: "設計計算ツール — キリ穴・インサートナット下穴、タイミングベルト長さ | Forgent3D",
    indexDescription:
      "計算したらそのまま部品になる無料ツール。ISO 273 のキリ穴とインサートナット下穴からボス・ブラケットへ、GT2 ベルト長さからタイミングプーリーへ。STL / STEP 出力。",
    indexIntro:
      "どのツールも計算のあとに部品を作ります。結果から数値入力済みのパラメトリック生成器が開くので、次の一歩は印刷用の STL か CAD 用の STEP です。表を書き写す必要はありません。",
    endsIn: "そのまま作れる部品：",
    faqTitle: "よくある質問",
    sourcesTitle: "出典",
    sourcesIntro: "このページの数値はすべて以下の資料によります（版、または参照日を記載）。",
    relatedTitle: "部品を作る",
    allGenerators: "生成器の一覧",
    forGeneratorTitle: "この部品の計算ツール",
  },
};

export function calculatorsSharedCopy(locale) {
  return SHARED[locale] || SHARED.en;
}
