// DRAFT — not wired to any route. The /stl-to-step rewrite for the day the STL import that rebuilds real surfaces
// ships (platform branch feat/stl-to-code; public facts in platform docs/step-to-code.md §8). Until then the live page
// (lib/stl-to-step.js) stays: it describes the browser converter, which is true today.
//
// 11-08: the routes table below still has the import as the real-surface route; once /convert ships the wasm
// stl2cad, rewrite it so /convert (no sign-in, no upload, real surfaces) is the main route and the import is the
// next step.
//
// To launch: fill every FACTS entry from §8 (each TBD below is a §8 row still marked 待定 on 11-08), settle OPEN
// QUESTIONS with the user, add zh / de / ja, then point app/[locale]/stl-to-step/page.js at getStlToStepV2Copy.
// assertFactsSettled() throws while any entry is TBD, so wiring it in early fails the build instead of shipping
// placeholders.
//
// OPEN QUESTIONS (for the user, 11-08):
// 1. What the page sells. The import's output is an editable model (recognised bodies as code, the rest as a
//    real-surface STEP inside it). "Change the hole to 8 mm" is the strongest reason to pick us over stl2step.ai,
//    but it is the STEP → code capability the user chose not to promote yet. Variant A (below) sells real surfaces
//    plus continuing in Forgent3D; variant B adds "sizes you can change" and needs that decision reversed.
// 2. ~~Whether the STEP can be downloaded on its own~~ — 11-08 user: yes.
// Decided 11-08: variant A (real surfaces + keep working in Forgent3D); B stays here unused until the user decides to
// promote STEP → code.

const TBD = Symbol("TBD");

export const FACTS = {
  surfaces: TBD, // which surface types come back, e.g. "planes, cylinders, cones, spheres, tori and B-splines"
  formats: "STL and 3MF", // §8: 定
  maxFileMB: 50, // §8: 50 MB, same as import
  maxTriangles: TBD, // §8: 三角形 / 内存上限待 runner 测量
  typicalTime: TBD, // §8: 待 mesh-recon-bench
  stepDownload: true, // 11-08 用户定：STEP 可以单独下载(§8 待同步)
  account: "sign-in", // §8: 导入要登录 (the import; /convert needs none)
  cost: TBD, // §8: 额度未定 (the conversion calls no LLM)
  benchmark: TBD, // { set, parts, metric, value, csv? } or null to publish no number
  // 11-08 user: stl2cad goes to the browser — /convert (wasm) becomes the main route: no sign-in, no upload, real
  // surfaces; the signed-in import is "keep working in Forgent3D". Both TBD until §8 says they can be said publicly.
  convertRealSurfaces: TBD, // true once /convert ships the wasm stl2cad
  convertLimits: TBD, // triangles / time in the browser, from the wasm measurement
};

export function assertFactsSettled() {
  const open = Object.entries(FACTS).filter(([, v]) => v === TBD).map(([k]) => k);
  if (open.length) throw new Error(`stl-to-step v2: facts still TBD in platform docs/step-to-code.md §8: ${open.join(", ")}`);
}

/** English copy, variant A (real surfaces + keep working in Forgent3D). `${…}` reads FACTS once they are settled. */
export function getStlToStepV2Copy(locale, variant = "A" /* 11-08 user: A */) {
  assertFactsSettled();
  const f = FACTS;
  if (locale !== "en") throw new Error("stl-to-step v2 draft: only English is written so far");
  const editable = variant === "B";
  return {
    title: "STL to STEP with Real CAD Surfaces — Online Converter | Forgent3D",
    description: `Convert STL or 3MF to STEP with real CAD surfaces: holes come back as cylinders, flat areas as planes. ${f.typicalTime}. Plus a free in-browser converter that never uploads your file.`,
    h1: "STL to STEP with real surfaces: holes come back as cylinders",
    intro: `An STL is triangles. Most converters wrap them as they are, so a round hole stays a ring of flat strips. Import the STL into Forgent3D and it recognises the surfaces the part was made of — ${f.surfaces} — and rebuilds them as a STEP solid${editable ? " whose main sizes you can change" : ""}.`,
    routesTitle: "Two ways to convert",
    routesHead: ["", "Import into Forgent3D", "Quick converter"],
    routes: [
      ["Curved surfaces", `Recognised: ${f.surfaces}`, "Flat areas merged into planes; curves stay faceted"],
      ["A round hole", "A cylinder with its diameter", "A ring of flat strips"],
      ["Input", `${f.formats}, up to ${f.maxFileMB} MB (${f.maxTriangles} triangles)`, "STL, up to 2,000,000 triangles"],
      ["Time", f.typicalTime, "Seconds"],
      ["Where it runs", "On Forgent3D's servers", "In your browser; the file is never uploaded"],
      ["Account", "Sign-in required", "None"],
      ["Output", f.stepDownload ? "STEP download, and the part in your Forgent3D models" : "The part in your Forgent3D models", "STEP download"],
    ],
    afterTitle: "After the conversion",
    after: [
      f.stepDownload ? { title: "Open it in your CAD program", text: "Import the STEP into SolidWorks, Fusion 360, Onshape or FreeCAD as a solid; the recognised faces select and measure like any CAD face." } : null,
      { title: "Keep working in Forgent3D", text: editable ? "Change the main sizes in the parameter panel, or ask the agent: \"make the bore 8 mm\", \"add two M4 holes\"." : "Ask the agent to build on it: a mating part, a bracket that fits, holes added where you need them." },
    ].filter(Boolean),
    cadTitle: "Importing the STEP into your CAD program",
    cad: [
      { name: "SolidWorks", text: "File → Open, choose STEP (*.step; *.stp). Import Diagnostics can heal faces if it reports any." },
      { name: "Fusion 360", text: "Upload the STEP in the Data Panel (or File → Open → Open from my computer). It arrives as a body you can press-pull and fillet." },
      { name: "Onshape", text: "Import it from the Documents page, or with the + menu inside a document; the STEP becomes a part in a Part Studio." },
      { name: "FreeCAD", text: "File → Import; the STEP opens as a Part solid in the Part and PartDesign workbenches." },
    ],
    faqTitle: "FAQ",
    faqs: [
      { q: "How do I convert STL to STEP with real surfaces?", a: `Sign in to Forgent3D, open Import in your models and drop the STL or 3MF. ${f.typicalTime}. ${f.stepDownload ? "Download the STEP, or keep working on the part in Forgent3D." : "The part opens in Forgent3D to keep working on."}` },
      { q: "Does it recover the original design's dimensions?", a: editable ? "It recovers the surfaces, and the main sizes become parameters you can change. The original file's feature history is not in an STL and does not come back." : "It recovers the surfaces — a hole is a cylinder again with its diameter — but not the original feature history, which an STL never stored." },
      { q: "Is my file uploaded?", a: "For the import, yes: the conversion runs on Forgent3D's servers and the part is stored in your models, private to you. If the file must not leave your computer, use the quick converter, which runs in the browser but keeps curved areas faceted." },
      { q: "What about scans?", a: "TBD with §8: say what the import does with scanned meshes only when it has been measured." },
      { q: "STL to STP or STL to STEP — the same?", a: "Yes. .stp and .step are two extensions of one format (ISO 10303-21)." },
    ],
  };
}
