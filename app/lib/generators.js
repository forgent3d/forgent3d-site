// Generator catalog — the single source of truth for /[locale]/generators.
// Each entry drives: the landing page copy (both locales), the parameter table
// (grounded in the de-facto standard customizers: gridfinity-rebuilt-openscad,
// STLGears, ostat/vacuum-hose-adapter, 3dprintgenerator box), the JSON-LD, the
// sitemap rows, and the spec handed to the CAD agents that author each model.
// `modelDir`: the model.py source directory in the platform repo's generator-models/.
// The CTA links to APP_BASE/g/<modelDir>, which the app resolves to that model's share
// page (packages/cloud/lib/generator-models.ts holds the dir -> shareSlug map). Slugs are
// publish artifacts, so they are maintained there, not copied here; an entry with no
// modelDir falls back to the workbench root (the create screen).

import * as deLocale from "./generator-locales/de.js";
import * as esLocale from "./generator-locales/es.js";
import * as jaLocale from "./generator-locales/ja.js";

// NEXT_PUBLIC_APP_BASE points the pages at a local app (http://localhost:3000) for testing; production never sets it.
export const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || "https://app.forgent3d.com";

/** Languages whose ONLY translated pages are the generators: the rest of the site (header links, home, blog,
 *  OpenSCAD pages) stays English for them, and the embedded tool runs in English (the app speaks en and zh).
 *  Each file is merged into GENERATORS below, one generator at a time (see GENERATOR_LOCALES). */
const EXTRA_LOCALE_FILES = { de: deLocale, es: esLocale, ja: jaLocale };

/** The name each language calls itself, for the language row on generator pages. */
export const LOCALE_NAMES = { en: "English", zh: "中文", de: "Deutsch", es: "Español", ja: "日本語" };

/** og:locale per page language. */
export const OG_LOCALES = { en: "en_US", zh: "zh_CN", de: "de_DE", es: "es_ES", ja: "ja_JP" };

/** A row of a gear's common-sizes table: the link parameters, then module, teeth and the pitch, outside and root
 *  diameters of an ISO 53 profile-A gear (tip = m(z + 2), root = m(z − 2.5)). */
function gearSize(module, teeth) {
  return {
    params: { MODULE: module, TEETH: teeth },
    cells: [module, teeth, module * teeth, module * (teeth + 2), module * (teeth - 2.5)],
  };
}

/** A row of the desk grommet's common-sizes table: the link parameters, then hole, flange and cable-opening
 *  diameters at the model's defaults (6 mm rim, 0.3 clearance, 2.4 wall) and the slot. */
function grommetSize(hole, slot) {
  return {
    params: { HOLE_D: hole, SLOT_WIDTH: slot },
    cells: [hole, hole + 12, hole - 0.3 - 4.8, slot],
  };
}

/** A row of the battery holder's cell table: the link parameter, then cell, nominal Ø, bore (Ø + 0.3 clearance) and
 *  pitch (bore + 1.5 wall) at the model's defaults. */
function cellSize(cell, diameter) {
  return { params: { CELL: cell }, cells: [cell, diameter, diameter + 0.3, diameter + 0.3 + 1.5] };
}

/** A row of the pipe clamp's DIN 3015 table: the link parameter, then pipe Ø and the size the model picks with its
 *  STAUFF length, bolt spacing and height. */
function pipeSize(od, size, length, spacing, height) {
  return { params: { PIPE_OD: od }, cells: [od, size, length, spacing, height] };
}

/** A row of the ESP32 case's board table: the link parameter (a unique prefix of the board's name, without the
 *  bracket a link-detector would cut off), then the case at the model's defaults as built with cad-build: outside
 *  size, size over the screw bosses, height with pins down / no pins / jumper wires, and the M3 screw length. The
 *  board's name and data source are in the page's language (`copy.sizes.rows`). */
function espBoard(board, outside, bosses, heights, screw) {
  return { params: { BOARD: board }, cells: [outside, bosses, heights, `4 × M3 × ${screw}`] };
}

export const GENERATORS = [
  {
    slug: "gridfinity-bin-generator",
    modelDir: "gridfinity-bin",
    icon: "▦",
    family: "storage",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { GRID_X: "2", GRID_Y: "1", HEIGHT_U: "3", DIV_X: "3", MAGNET_HOLES: "true" }, label: { en: "2 × 1 bin, 3 units tall, three compartments, magnet holes", zh: "2 × 1 格、3U 高、分三格、带磁铁孔" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "The base feet, stacking lip and rounded corners export as exact planes, cylinders and cones — 220 faces for the default 3 × 2 bin, every 45° slope a true cone where it turns a corner.",
        "So the bin can be measured against the Gridfinity spec in CAD, or reworked in Fusion or Onshape without fighting a mesh.",
      ],
      zh: [
        "底脚、堆叠唇和圆角导出为精确的平面、圆柱面和圆锥面——默认 3 × 2 收纳盒共 220 个面，每处 45° 斜面拐角都是真圆锥面。",
        "所以能在 CAD 里对照 Gridfinity 规范量尺寸，也能在 Fusion、Onshape 里接着改，不用跟网格较劲。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a 2 × 1 Gridfinity bin with three compartments and magnet holes?", a: "https://www.forgent3d.com/en/generators/gridfinity-bin-generator?GRID_X=2&GRID_Y=1&HEIGHT_U=3&DIV_X=3&MAGNET_HOLES=true opens exactly that bin (height in 7 mm units). Download STL to print it, or STEP to keep editing in CAD." },
        { q: "Can I add a label shelf or a cut-out for a specific tool?", a: "Press “AI edit” in the generator and describe it (“a 12 mm label shelf along the front”); the AI edits the bin’s model.py and it rebuilds in your browser. For a bigger redesign, copy the bin into your models and keep going with the AI agent." },
      ],
      zh: [
        { q: "怎样做一个分三格、带磁铁孔的 2 × 1 Gridfinity 收纳盒？", a: "https://www.forgent3d.com/zh/generators/gridfinity-bin-generator?GRID_X=2&GRID_Y=1&HEIGHT_U=3&DIV_X=3&MAGNET_HOLES=true 打开就是这只盒子（高度按 7 mm 一个单位）。下载 STL 去打印，或下载 STEP 在 CAD 里接着改。" },
        { q: "能加标签台或者按某把工具开的槽吗？", a: "在生成器里点「AI 修改」描述一下（“前面加一条 12 mm 宽的标签台”），AI 改这只盒子的 model.py，在浏览器里重建。改动大的话，复制到你的模型里，和 AI agent 接着改。" },
      ],
    },
    keywords: {
      en: [
      "gridfinity bin generator",
      "custom gridfinity bins",
      "gridfinity generator online",
      "gridfinity divider bins stl",
    ],
      zh: ["gridfinity生成器", "gridfinity在线生成器", "gridfinity收纳盒 STL", "gridfinity盒子尺寸"],
    },
    params: [
      { key: "GRID_X", default: "3", range: "1 – 8", unit: "u", label: { en: "Grid units X", zh: "格数 X" }, desc: { en: "Bin width in 42 mm Gridfinity units.", zh: "宽度方向占多少个 42 mm 标准格。" } },
      { key: "GRID_Y", default: "2", range: "1 – 8", unit: "u", label: { en: "Grid units Y", zh: "格数 Y" }, desc: { en: "Bin depth in 42 mm Gridfinity units.", zh: "深度方向占多少个 42 mm 标准格。" } },
      { key: "HEIGHT_U", default: "6", range: "2 – 12", unit: "u", label: { en: "Height units", zh: "高度 U" }, desc: { en: "Bin height in standard 7 mm increments.", zh: "高度按 7 mm 标准增量计。" } },
      { key: "DIV_X", default: "1", range: "1 – 6", unit: "", label: { en: "Compartments X", zh: "分隔 X" }, desc: { en: "Number of compartments along the width.", zh: "宽度方向分成几格。" } },
      { key: "DIV_Y", default: "1", range: "1 – 6", unit: "", label: { en: "Compartments Y", zh: "分隔 Y" }, desc: { en: "Number of compartments along the depth.", zh: "深度方向分成几格。" } },
      { key: "STACKING_LIP", default: "True", range: "on / off", unit: "", label: { en: "Stacking lip", zh: "堆叠唇" }, desc: { en: "Top lip so another bin stacks on this one.", zh: "顶部凸唇，让上层收纳盒稳定堆叠。" } },
      { key: "MAGNET_HOLES", default: "False", range: "on / off", unit: "", label: { en: "Magnet holes", zh: "磁铁孔" }, desc: { en: "Ø6 × 2 mm magnet pockets, four per 42 mm grid unit.", zh: "每个底座四角预留 Ø6 × 2 mm 磁铁孔位。" } },
      { key: "SCOOP", default: "True", range: "on / off", unit: "", label: { en: "Scoop", zh: "取物斜坡" }, desc: { en: "Curved front floor so small parts slide out.", zh: "前壁底部做弧面，小零件一拨就出来。" } },
    ],
    copy: {
      en: {
        name: "Gridfinity Bin Generator",
        title: "Gridfinity Bin Generator — Custom Bins with Dividers, Magnets | Forgent3D",
        description:
          "Generate custom Gridfinity bins online: set grid size, height units, dividers, magnet holes and scoop, preview in 3D, then export STL or STEP. Free, no CAD install.",
        h1: "Gridfinity bin generator: custom bins, real CAD underneath",
        intro:
          "Size a Gridfinity bin in 42 mm grid units, add dividers, magnet holes and a scoop, and watch the model rebuild in your browser. Unlike one-shot STL customizers, every bin is parametric CAD code — so when you need something the sliders don't cover, the AI agent edits the same model for you.",
        whyPoints: [
          "True Gridfinity spec: 42 mm pitch, 7 mm height units, stackable lip",
          "Compartments by count; magnet holes (Ø6 × 2 mm) and a scoop at the flip of a switch",
          "Exports clean STL / STEP — printable without supports",
          "Need a label shelf or a custom cutout? Remix it with the AI agent",
        ],
        faqs: [
          {
            q: "What magnets fit the magnet holes?",
            a: "The base pockets are sized for the de-facto Gridfinity standard: Ø6 mm × 2 mm neodymium disc magnets, four per 42 mm grid unit (one near each corner). Glue-in is optional — bins also sit fine on a baseplate without magnets.",
          },
          {
            q: "Do Gridfinity bins print without supports?",
            a: "Yes. The base profile, stacking lip and scoop are all designed within FDM overhang limits. Print bins flat on the bed in PLA or PETG at 0.2 mm layers; no supports and no brim needed on a clean bed.",
          },
          {
            q: "Can I change something the parameters don't cover?",
            a: "Yes — that is the point of Forgent3D. The bin is generated from editable CAD code, so you can copy it into your workspace and ask the AI agent for label tabs, finger slots, custom cutouts or a non-standard footprint.",
          },
        ],
      },
      zh: {
        name: "Gridfinity 收纳盒生成器",
        title: "Gridfinity 收纳盒生成器 — 自定义分隔、磁铁孔在线生成 | Forgent3D",
        description:
          "在线生成自定义 Gridfinity 收纳盒：设置格数、高度、分隔、磁铁孔与取物斜坡，浏览器 3D 预览，导出 STL / STEP。免安装 CAD，免费使用。",
        h1: "Gridfinity 收纳盒生成器：拧参数，底下是真 CAD",
        intro:
          "按 42 mm 标准格设定收纳盒尺寸，加分隔、磁铁孔和取物斜坡，模型在浏览器里实时重建。和一次性 STL 定制器不同，这里每个盒子都是可编辑的参数化 CAD 代码——滑块覆盖不到的需求，让 AI agent 在同一个模型上继续改。",
        whyPoints: [
          "严格遵循 Gridfinity 规范：42 mm 栅距、7 mm 高度单元、可堆叠唇口",
          "隔间按数量设，磁铁孔（Ø6 × 2 mm）和取物斜坡一键开关",
          "导出干净的 STL / STEP，免支撑直接打印",
          "想加标签架或异形挖槽？让 AI 在这个模型上接着改",
        ],
        faqs: [
          {
            q: "磁铁孔适配什么规格的磁铁？",
            a: "底座孔位按 Gridfinity 事实标准设计：Ø6 mm × 2 mm 钕磁铁，每个 42 mm 底格四角各一颗。不装磁铁也能正常放在底板上使用。",
          },
          {
            q: "打印需要支撑吗？",
            a: "不需要。底座轮廓、堆叠唇和取物斜坡都控制在 FDM 悬垂极限内。PLA 或 PETG、0.2 mm 层高、平放打印即可。",
          },
          {
            q: "参数列表覆盖不到的改动怎么办？",
            a: "这正是 Forgent3D 的差异点：生成的盒子是可编辑 CAD 代码。在工作台打开它，让 AI agent 帮你加标签架、指槽、异形挖槽或非标准底格。",
          },
        ],
      },
    },
  },
  {
    slug: "gridfinity-baseplate-generator",
    modelDir: "gridfinity-baseplate",
    icon: "▤",
    family: "storage",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { GRID_X: "5", GRID_Y: "4", MAGNET_HOLES: "true" }, label: { en: "5 × 4 sockets (210 × 168 mm), magnet holes", zh: "5 × 4 格（210 × 168 mm）、带磁铁孔" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Every 42 mm socket’s sloped profile exports as exact planes and cones — 310 faces for the default 4 × 3 plate — so a CAD user can trim the plate to an odd drawer outline instead of remodelling it.",
      ],
      zh: [
        "每个 42 mm 格位的斜面轮廓都导出为精确的平面和圆锥面——默认 4 × 3 底板共 310 个面——在 CAD 里按不规则的抽屉轮廓裁一刀即可，不用重画。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a Gridfinity baseplate for a 220 × 180 mm drawer?", a: "Five by four sockets is 210 × 168 mm: https://www.forgent3d.com/en/generators/gridfinity-baseplate-generator?GRID_X=5&GRID_Y=4. To fill the last few millimetres, press “AI edit” in the generator and ask for a 220 × 180 mm outer border." },
        { q: "My printer bed is smaller than the plate — what now?", a: "Generate it in pieces that fit your bed (for example 3 × 4 and 2 × 4) and lay them side by side in the drawer. Every piece keeps the 42 mm grid, so bins sit across the whole drawer." },
      ],
      zh: [
        { q: "怎样给 220 × 180 mm 的抽屉做 Gridfinity 底板？", a: "5 × 4 格是 210 × 168 mm：https://www.forgent3d.com/zh/generators/gridfinity-baseplate-generator?GRID_X=5&GRID_Y=4。剩下几毫米想填满，就在生成器里点「AI 修改」，让它把外框补到 220 × 180 mm。" },
        { q: "打印机平台比底板小怎么办？", a: "按平台大小分块生成（比如 3 × 4 和 2 × 4），在抽屉里并排一放。每块都守 42 mm 网格，收纳盒在整个抽屉里都能放。" },
      ],
    },
    keywords: {
      en: [
      "gridfinity baseplate generator",
      "custom gridfinity baseplate",
      "gridfinity base plate stl",
    ],
      zh: ["gridfinity底板生成器", "gridfinity底板 STL", "gridfinity baseplate 在线生成"],
    },
    params: [
      { key: "GRID_X", default: "4", range: "1 – 10", unit: "u", label: { en: "Grid units X", zh: "格数 X" }, desc: { en: "Baseplate width in 42 mm units.", zh: "宽度方向 42 mm 格数。" } },
      { key: "GRID_Y", default: "3", range: "1 – 10", unit: "u", label: { en: "Grid units Y", zh: "格数 Y" }, desc: { en: "Baseplate depth in 42 mm units.", zh: "深度方向 42 mm 格数。" } },
      { key: "STYLE", default: "thin", range: "thin / skeletonized", unit: "", label: { en: "Plate style", zh: "底板样式" }, desc: { en: "Thin saves height; skeletonized saves filament.", zh: "thin 最省高度；skeletonized 镂空省料。" } },
      { key: "MAGNET_HOLES", default: "False", range: "on / off", unit: "", label: { en: "Magnet holes", zh: "磁铁孔" }, desc: { en: "Ø6 × 2 mm pockets matching bin magnets.", zh: "与收纳盒对应的 Ø6 × 2 mm 磁铁孔。" } },
      { key: "SCREW_HOLES", default: "False", range: "on / off", unit: "", label: { en: "Screw holes", zh: "螺丝孔" }, desc: { en: "Countersunk M3 holes to fix the plate down.", zh: "沉头 M3 孔，把底板锁在桌面或抽屉里。" } },
    ],
    copy: {
      en: {
        name: "Gridfinity Baseplate Generator",
        title: "Gridfinity Baseplate Generator — Custom Base Plates Online | Forgent3D",
        description:
          "Generate Gridfinity baseplates sized to your drawer: any grid count, thin or skeletonized style, magnet and screw holes. Preview in 3D, export STL or STEP free.",
        h1: "Gridfinity baseplate generator for drawers and desks",
        intro:
          "Pick how many 42 mm grid cells you need, choose a thin or skeletonized profile, and add magnet or screw holes. The baseplate rebuilds live as parametric CAD — and if your drawer needs an odd fill or a cut corner, the AI agent can edit the same model.",
        whyPoints: [
          "Exact Gridfinity socket profile — bins click in with zero slop",
          "Thin style for minimal height, skeletonized to save filament",
          "Magnet (Ø6 × 2 mm) and countersunk M3 screw options",
          "Odd-shaped drawer? Ask the agent to trim the plate to fit",
        ],
        faqs: [
          {
            q: "Which style should I print?",
            a: "Thin is the default: fastest print, lowest height, fine for desks. Choose skeletonized to cut filament use on large plates; add screw holes when the plate lives in a moving drawer.",
          },
          {
            q: "How do I cover a whole drawer?",
            a: "Measure the drawer, divide by 42 mm to get grid counts, and print multiple plates if the drawer exceeds your printer bed. For the remainder gap, copy the model and ask the AI for a custom-width filler strip.",
          },
          {
            q: "Are the sockets compatible with all Gridfinity bins?",
            a: "Yes — the socket profile follows the open Gridfinity spec used by gridfinity-rebuilt and MakerWorld generators, so standard bins from any generator click in.",
          },
        ],
      },
      zh: {
        name: "Gridfinity 底板生成器",
        title: "Gridfinity 底板生成器 — 按抽屉尺寸在线定制 | Forgent3D",
        description:
          "按抽屉尺寸生成 Gridfinity 底板：任意格数、thin / 镂空样式、磁铁孔与螺丝孔。浏览器 3D 预览，免费导出 STL / STEP。",
        h1: "Gridfinity 底板生成器：按抽屉尺寸定制",
        intro:
          "选好需要的 42 mm 格数，挑 thin 或镂空样式，按需加磁铁孔、螺丝孔，底板作为参数化 CAD 实时重建。抽屉尺寸不规整？让 AI agent 在同一个模型上裁边补缝。",
        whyPoints: [
          "精确的 Gridfinity 卡槽轮廓，收纳盒放入零晃动",
          "thin 最省高度，镂空样式大幅省料",
          "磁铁孔（Ø6 × 2 mm）与沉头 M3 螺丝孔可选",
          "异形抽屉可以让 agent 帮你裁切适配",
        ],
        faqs: [
          {
            q: "选哪种底板样式？",
            a: "默认 thin：打印最快、高度最低，桌面用足够。大面积铺抽屉时选镂空样式省料；底板会跟着抽屉移动时建议加螺丝孔固定。",
          },
          {
            q: "怎么铺满整个抽屉？",
            a: "量好抽屉内尺寸，除以 42 mm 得到格数；超出打印机幅面就分几块打印。剩余的边缝可以复制这个模型，让 AI 生成非标准宽度的补条。",
          },
          {
            q: "和所有 Gridfinity 收纳盒兼容吗？",
            a: "兼容。卡槽轮廓遵循 gridfinity-rebuilt 与 MakerWorld 各家生成器共同使用的开放规范，任何标准收纳盒都能放入。",
          },
        ],
      },
    },
  },
  {
    slug: "parametric-box-generator",
    modelDir: "parametric-box",
    icon: "▣",
    family: "storage",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-19",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: {
      params: { INNER_L: "120", INNER_W: "80", INNER_H: "40", LID: "sliding", DIV_X: "3" },
      label: { en: "120 × 80 × 40 mm inside, sliding lid, 3 compartments", zh: "内腔 120 × 80 × 40 mm、滑盖、3 格" },
    },
    // Read off the default part's STEP export (cad-build export, 2026-10-19): faces by surface type.
    step: {
      en: [
        "Box and lid export as two separate solids in one file — 101 exact faces for the default sliding-lid box: 67 planes, 24 cylinders (the rounded corners, the click pegs and their dimples, the finger grooves) and 10 cones (the 45° bottom edge going round the corners).",
        "Open it in CAD to add a logo, a cable notch or mounting holes exactly where they belong, to make an insert that fits the inside, or hand it to a print service that wants STEP.",
      ],
      zh: [
        "盒体和盖子在同一个文件里是两个独立的实体——默认滑盖盒共 101 个精确面：67 个平面，24 个圆柱面（圆角、定位卡点和它的凹窝、拉手指槽），10 个圆锥面（底边 45° 倒角绕过圆角的那一段）。",
        "在 CAD 里打开，就能把 logo、走线缺口或安装孔放到准确的位置，照着内腔做内衬，也能直接交给要 STEP 的打印服务。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a 120 × 80 × 40 mm box with a sliding lid and three compartments?", a: "https://www.forgent3d.com/en/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding&DIV_X=3 — the sizes are the inside of the box. Download STL to print box and lid, or STEP to edit." },
        { q: "How do I make a box that fits a 200 × 100 × 60 mm drawer?", a: "https://www.forgent3d.com/en/generators/parametric-box-generator?SIZE=outside&INNER_L=200&INNER_W=100&INNER_H=60&LID=none&DIV_X=3 — with Sizes set to Outside the numbers are the whole box, so it drops into the drawer; the inside is what the walls leave." },
      ],
      zh: [
        { q: "怎样做一个内腔 120 × 80 × 40 mm、滑盖、分 3 格的盒子？", a: "https://www.forgent3d.com/zh/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding&DIV_X=3 ——尺寸是盒子的内腔。下载 STL 打印盒体和盖子，或下载 STEP 去改。" },
        { q: "怎样做一个刚好放进 200 × 100 × 60 mm 抽屉的收纳盒？", a: "https://www.forgent3d.com/zh/generators/parametric-box-generator?SIZE=outside&INNER_L=200&INNER_W=100&INNER_H=60&LID=none&DIV_X=3 ——「尺寸按」选外形时，数字就是整个盒子的外形，正好放进抽屉；内腔是墙厚之外剩下的。" },
      ],
    },
    keywords: {
      en: [
        "parametric box generator",
        "box generator 3d print",
        "3d print box with slide lid",
        "hinged box generator",
        "box with lid generator",
        "storage box with dividers stl",
        "print in place box generator",
      ],
      zh: ["3d打印收纳盒", "收纳盒生成器", "3d打印盒子怎么做盖子", "滑盖收纳盒", "分格收纳盒", "一体打印铰链盒", "磁吸收纳盒", "可堆叠收纳盒"],
    },
    params: [
      { key: "SIZE", default: "Inside", range: "Inside / Outside", unit: "", label: { en: "Sizes are", zh: "尺寸按" }, desc: { en: "Inside: what has to fit in the box. Outside: the closed box — lid, hinge and latch included — for a drawer or a shelf; take 1–2 mm off the drawer's inside so the box slides in.", zh: "内腔：要放进去的东西。外形：盖好后的整个盒子（含盖、铰链和锁扣），用来放进抽屉或格子；按抽屉内尺寸减 1–2 mm，盒子才推得进去。" } },
      { key: "INNER_L", default: "80", range: "20 – 300", unit: "mm", label: { en: "Length", zh: "长" }, desc: { en: "Inside (or outside) length. The box must fit your printer's bed — pick it below.", zh: "内腔（或外形）长度。盒子要放得进你的打印床——在下面选。" } },
      { key: "INNER_W", default: "50", range: "20 – 300", unit: "mm", label: { en: "Width", zh: "宽" }, desc: { en: "Inside (or outside) width.", zh: "内腔（或外形）宽度。" } },
      { key: "INNER_H", default: "30", range: "10 – 250", unit: "mm", label: { en: "Height", zh: "高" }, desc: { en: "Inside: from the floor to the closed lid (on a hinged box the base — Lid depth adds the lid on top). Outside: the closed box's whole height.", zh: "内腔：从盒底到合上的盖子（铰链盒指盒身深度，盖深另加在上面）。外形：盖好后整个盒子的高度。" } },
      { key: "WALL", default: "2", range: "1.2 – 8", unit: "mm", label: { en: "Wall", zh: "壁厚" }, desc: { en: "2 mm is five 0.4 mm lines. Snap-on, lift-off and magnetic lids keep their groove or lip in the wall and need a little more than 1.2.", zh: "2 mm 约五道 0.4 线宽。卡扣盖、止口盖、磁吸盖的槽或止口在墙里，墙要比 1.2 厚一点。" } },
      { key: "FLOOR", default: "1.6", range: "1.2 – 16", unit: "mm", label: { en: "Floor", zh: "底厚" }, desc: { en: "Eight 0.2 mm layers by default; thicker for heavy contents.", zh: "默认 8 层 0.2 mm；装重物就加厚。" } },
      { key: "CORNER_R", default: "3", range: "0 – 20", unit: "mm", label: { en: "Corner radius", zh: "圆角半径" }, desc: { en: "Outside corners; the inside rounds by this less the wall. The sliding lid rounds with the box.", zh: "外角圆角；内腔圆角为它减去壁厚。滑盖跟着盒子一起倒圆。" } },
      { key: "LID", default: "Sliding", range: "Sliding / Hinged / Lip / Snap-on / Magnetic / None", unit: "", label: { en: "Lid type", zh: "盖子类型" }, desc: { en: "A sliding lid with a click and finger grooves, a hinged lid, a lid that lifts off a lip, a snap-on lid, a lift-off lid held by eight magnets, or none.", zh: "带卡点和指槽的滑盖、铰链翻盖、从止口上直接提起的盖、卡扣盖、八颗磁铁吸住的提起式盖，或者不要盖。" } },
      { key: "CLEARANCE", default: "0.25", range: "0.1 – 0.5", unit: "mm", label: { en: "Fit clearance", zh: "配合间隙" }, desc: { en: "Gap per side between parts that slide or turn. 0.25 suits a tuned printer in PLA; add 0.05–0.1 for PETG. Hinges get 0.1 more, never under 0.3.", zh: "滑动或转动件之间每边的间隙。调好的打印机打 PLA 用 0.25；PETG 加 0.05–0.1。铰链再加 0.1，且不小于 0.3。" } },
      { key: "HINGE", default: "Print-in-place", range: "Print-in-place / Pin / Filament pin", unit: "", label: { en: "Hinge", zh: "铰链" }, desc: { en: "Hinged lid only: printed already assembled, or with a pin you push in — a printed pin or an M3 screw, or a length of 1.75 mm filament.", zh: "仅铰链盖：一体打印好就能转，或者装一根销——打印的销或 M3 螺丝，或者一段 1.75 mm 耗材。" } },
      { key: "LATCH", default: "Clip", range: "Clip / Toolbox clasps / Magnets / None", unit: "", label: { en: "Latch", zh: "锁扣" }, desc: { en: "Hinged lid only. Clip: stands on the box and clicks into the lid; pull its tip out to open — stays shut in a bag (needs the base 11 mm deep inside, and makes the lid at least 6.4). Toolbox clasps: hook over a screw, the firmest; each takes two M3 × 30 screws. Magnets: hold the lid down, lift with a tug. One latch up to 100 mm long, two up to 200, three above.", zh: "仅铰链盖。卡扣：立在盒身上、咔哒扣进盖子，把卡扣尖往外一扳才开——放书包里也不会开（盒身内深至少 11 mm，盖子会自动加深到至少 6.4）。工具箱搭扣：挂在螺丝上，最牢；每个用两颗 M3 × 30 螺丝。磁铁：吸住盖子，一拉就开。100 mm 以下一个锁扣，200 以下两个，再长三个。" } },
      { key: "LID_DEPTH", default: "10", range: "4 – 60", unit: "mm", label: { en: "Lid depth", zh: "盖深" }, desc: { en: "Hinged lid only: how deep the lid is inside — at least 4 mm (deeper on its own where the hinge or the clip needs it), never deeper than the base.", zh: "仅铰链盖：盖子内深——至少 4 mm（铰链或卡扣需要时会自动加深），不超过盒身。" } },
      { key: "MAGNET", default: "6x2 mm", range: "6x2 / 6x3 / 8x2 / 8x3 / 10x2 / 10x3", unit: "", label: { en: "Magnets (diameter × thickness)", zh: "磁铁（直径 × 厚度）" }, desc: { en: "Magnetic lid: eight magnets — four in posts in the box's corners, flush with the lip, four in the lid. Hinged lid's magnet latch: four. 6 × 2 is the Gridfinity magnet; pockets are 0.2 mm over size for a drop of glue.", zh: "磁吸盖：八颗——四颗在盒内四角的立柱顶上、与止口齐平，四颗在盖子里。铰链盖的磁铁锁扣：四颗。6 × 2 就是 Gridfinity 用的磁铁；孔比磁铁大 0.2 mm，点一滴胶固定。" } },
      { key: "DIV_X", default: "1", range: "1 – 12", unit: "", label: { en: "Compartments along the length", zh: "长度方向分格数" }, desc: { en: "Compartments side by side along the length (1 = no dividers). Dividers are 1.6 mm thick, so each compartment is (Length − 1.6 × (count − 1)) ÷ count: 7 in 116 mm are 15.2 mm each.", zh: "沿长度方向并排几格（1 = 不分格）。隔板厚 1.6 mm，每格长 =（内长 − 1.6 ×（格数 − 1））÷ 格数：116 mm 分 7 格，每格 15.2 mm。" } },
      { key: "CELLS_X", default: "", range: "e.g. 1 2 1", unit: "", label: { en: "Relative widths along the length", zh: "长度方向各格宽度比" }, desc: { en: "Uneven compartments: relative widths, one per compartment — 1 2 1 makes the middle one twice as wide. Widths in mm are scaled to fill the inside the same way, so they come out exact when they add up to the length minus 1.6 mm per divider.", zh: "不等宽分格：每格一个相对宽度——1 2 1 就是中间那格是两边的两倍宽。写 mm 数也按同样比例铺满内长，加起来等于内长减去每块隔板 1.6 mm 时，就是精确尺寸。" } },
      { key: "DIV_Y", default: "1", range: "1 – 12", unit: "", label: { en: "Compartments along the width", zh: "宽度方向分格数" }, desc: { en: "Compartments along the width.", zh: "沿宽度方向几格。" } },
      { key: "CELLS_Y", default: "", range: "e.g. 2 1", unit: "", label: { en: "Relative widths along the width", zh: "宽度方向各格宽度比" }, desc: { en: "Uneven compartments along the width, as above.", zh: "宽度方向的不等宽分格，同上。" } },
      { key: "DIV_H", default: "100", range: "20 – 100", unit: "%", label: { en: "Divider height", zh: "隔板高度" }, desc: { en: "Lower dividers make small parts easier to pick out. At 100 % they stop 0.2–0.5 mm under the lid, so small parts cannot hop over — a hinged lid gets ribs on the same lines to close its own depth too.", zh: "隔板矮一点，小零件更好拿。100 % 时停在盖子下面 0.2–0.5 mm，小零件跳不过去——铰链盖里还会在同样位置长出隔条，把盖子自己的深度也隔开。" } },
      { key: "LABEL", default: "", range: "text", unit: "", label: { en: "Label text", zh: "刻字内容" }, desc: { en: "Engraved into the lid so it reads the right way when the lid is shut (an open box carries it on the front), as big as fits: letters up to a third of the inside width tall, smaller for long text. Letters A–Z without accents, numbers and common symbols.", zh: "刻在盖子上，合上盖时读起来是正的（无盖盒刻在正面），能多大就多大：字高最多约内宽的三分之一，字多就缩小。支持英文字母、数字和常用符号。" } },
      { key: "LABEL_STYLE", default: "Engraved", range: "Engraved / Inlay", unit: "", label: { en: "Label style", zh: "刻字方式" }, desc: { en: "Engraved 0.6 mm deep, or an inlay: the letters as a separate part flush in the engraving, in a second colour — for a printer that prints two filaments in one layer (AMS, MMU).", zh: "阴刻 0.6 mm，或者嵌字：字作为单独的零件平嵌在刻槽里，用第二种颜色——要能在同一层打两种耗材的打印机（AMS、MMU）。" } },
      { key: "STACKABLE", default: "off", range: "on / off", unit: "", label: { en: "Stackable", zh: "可堆叠" }, desc: { en: "Open boxes only: the bottom steps in with a 45° shoulder, so it drops into the rim of the box below.", zh: "仅无盖盒：底部内收、带 45° 斜肩，能落进下面那个盒子的口里。" } },
      { key: "BED", default: "256 x 256", range: "180 – 320 (7 printers)", unit: "", label: { en: "Printer bed", zh: "打印床" }, desc: { en: "The lid is laid out beside the box in whichever direction fits, 6 mm apart and 2 mm clear of the bed's edge; if it cannot share the plate it is named “lid (second plate)”. A print-in-place hinged box prints open in one piece, so it has to fit side by side.", zh: "盖子摆在盒子旁边放得下的方向，两件相距 6 mm、离床边 2 mm；放不下就叫「盖子（另起一盘打印）」。一体打印的铰链盒要打开平摊一次打完，所以必须并排放得下。" } },
      { key: "FIT_TEST", default: "off", range: "on / off", unit: "", label: { en: "Fit test print only", zh: "只打试配件" }, desc: { en: "A 40 × 30 mm (inside) box with the same lid, clearance, wall and corners — about twenty minutes of print to check the fit before the real one; glue its magnets in too.", zh: "同样的盖子、间隙、壁厚和圆角做成内腔 40 × 30 mm 的小盒——打二十分钟，先确认配合再打正式的；有磁铁就也装上。" } },
    ],
    copy: {
      en: {
        name: "Parametric Box Generator",
        title: "Parametric Box Generator — Sliding, Hinged or Magnetic Lid, Dividers & Label (STL / STEP) | Forgent3D",
        description:
          "Design a 3D-printable box from the inside out: sliding, hinged, lift-off, snap-on or magnetic lid, compartments (uneven too), an engraved label, one fit clearance and a 20-minute fit test, laid out for your printer's bed. Free STL / STEP.",
        h1: "Parametric box generator: the inside you need, the lid you want, sized for your printer",
        intro:
          "Say what has to fit inside — or how big the closed box may be — and pick a lid: a sliding lid that clicks shut, a hinged lid printed already assembled, a lift-off, snap-on or magnetic lid, or none. Add compartments and a label, set one fit clearance for every lid, rail and hinge, and print a small fit test first. The box rebuilds live as real CAD and every combination is checked: the lid closes clean, the hinge swings clear, the slide clicks home.",
        whyPoints: [
          "Inside or outside sizes — what has to fit in it, or what it has to fit into",
          "One fit clearance for every lid, rail and hinge, and a 20-minute fit-test print",
          "Sliding, hinged, lift-off, snap-on or magnetic lid; compartments, uneven ones too",
          "A label that reads the right way once the lid is shut — engraved or in a second colour",
          "Laid out for your printer's bed: the lid goes where it fits, or on its own plate",
          "Free STL and STEP, no sign-up — and AI edit for anything the options miss",
        ],
        faqs: [
          {
            q: "Which lid should I pick?",
            a: "Sliding for the classic pencil-box feel — it clicks home and has finger grooves to pull it open. Hinged for a box you open often: print-in-place comes off the printer assembled; the pin hinge is the robust choice for big boxes or a printer that fuses hinges. Lift-off for a simple dust cover; for a box that rides in a bag, snap-on or a hinged lid with the clip or toolbox clasps; magnetic for a lift-off lid that pulls down onto eight magnets (it comes off with a tug); none for trays and stackable bins. Lift-off and magnetic lids have a finger notch at the left end, the snap-on lid a thumb tab there.",
          },
          {
            q: "My lid was too tight (or too loose) — what do I change?",
            a: "The fit clearance: the gap per side between parts that slide or turn. 0.25 mm suits a tuned printer in PLA; add 0.05–0.1 for PETG or a printer that over-extrudes, take 0.05 off if the lid rattles. Hinges always get 0.1 more and never less than 0.3. Switch on “Fit test print only” to print a 40 × 30 box with the same lid in about twenty minutes before the long print.",
          },
          {
            q: "Are the sizes inside or outside?",
            a: "Your choice. Inside (the default) is what goes in: Length × Width × Height from the floor to the closed lid. Outside is the whole closed box — lid, hinge barrel and latch included — for a drawer or a shelf: take 1–2 mm off the drawer's inside so the box slides in. On a hinged box, Height is the base and Lid depth adds the lid.",
          },
          {
            q: "The print-in-place hinge came out fused — why?",
            a: "Usually over-extrusion, elephant's foot or fuzzy skin bridging the gap. The hinge gets 0.35 mm at the default clearance; turn fuzzy skin off, never scale the file in the slicer (that changes the gaps — change the size here instead), and if it still fuses raise the clearance or pick the pin hinge (a printed pin, an M3 screw or 1.75 mm filament).",
          },
          {
            q: "Why does it say my box does not fit my printer?",
            a: "Pick your printer's bed. The lid is laid out beside the box in the direction that fits; when the two cannot share one plate the lid is named “lid (second plate)” — split it off in your slicer. A print-in-place hinged box prints open in one piece, so it has to fit side by side, or use the pin hinge.",
          },
          {
            q: "How do I print it?",
            a: "No supports: lids print face down with the label on the bed side, sliding rails and lips are 45°, and every edge on the bed has a small chamfer against elephant's foot. 0.2 mm layers and three or more walls; a brim for boxes over 150 mm in PETG. Press magnets in with a drop of glue and mind the poles — the lid's must attract the box's.",
          },
        ],
      },
      zh: {
        name: "3D打印收纳盒生成器",
        title: "3D打印收纳盒生成器 — 在线定制滑盖、铰链翻盖、磁吸盖、分格、刻字 STL / STEP | Forgent3D",
        description:
          "按要装的东西（或要放进的抽屉）定尺寸，在线生成能直接3D打印的收纳盒：滑盖、铰链翻盖、止口盖、卡扣盖、磁吸盖或无盖；分格（可不等宽）、刻字；一个配合间隙管所有盖子，先打二十分钟的试配件；按你的打印床排版，免费导出 STL / STEP。",
        h1: "3D打印收纳盒生成器：内腔按你要装的，盖子按你要的，排版按你的打印机",
        intro:
          "说清楚要放进什么——或者盖好后的盒子最大能多大——再选盖子：合上会咔哒一声的滑盖、一体打印好就能转的铰链翻盖、止口盖、卡扣盖、磁吸盖，或者不要盖。加上分格和刻字，用一个配合间隙管住所有盖子、导轨和铰链，先打一个小试配件。底下是真 CAD，实时重建，每种组合都验过：盖子合得上不干涉，铰链转得过去，滑盖推到底会卡住。",
        whyPoints: [
          "尺寸按内腔或外形——要装什么，或者要放进哪里",
          "一个配合间隙管所有盖子、导轨和铰链，二十分钟试配件先打一个",
          "滑盖、铰链翻盖、止口盖、卡扣盖、磁吸盖；可分格，也可不等宽",
          "刻字在盖子合上时读起来是正的——阴刻，或者第二种颜色嵌字",
          "按你的打印床排版：盖子摆在放得下的地方，放不下就另起一盘",
          "免费 STL / STEP，无需注册——选项做不到的，点「AI 修改」说一句",
        ],
        faqs: [
          {
            q: "该选哪种盖子？",
            a: "要文具盒那种手感选滑盖——推到底咔哒卡住，盖头有指槽好拉。经常开合选铰链翻盖：一体打印下了打印机就是装好的；盒子大、或者你的机器容易把铰链粘死，就选销轴铰链更稳。只防尘选止口盖；要放书包里带着走，选卡扣盖，或者铰链盖配卡扣或工具箱搭扣；想要提起式又吸得住选磁吸盖（八颗磁铁，一拉就开）；托盘和可堆叠的收纳格选无盖。止口盖和磁吸盖左端有一个抠手的指槽，卡扣盖左端有一个掀盖的拇指片。",
          },
          {
            q: "盖子太紧（或太松）怎么办？",
            a: "改配合间隙：滑动或转动件之间每边的间隙。调好的打印机打 PLA 用 0.25 mm；PETG 或者出料偏多的机器加 0.05–0.1，盖子晃就减 0.05。铰链总是再加 0.1、且不小于 0.3。打开「只打试配件」，二十分钟打一个同样盖子的 40 × 30 小盒，确认了再打正式的。",
          },
          {
            q: "尺寸是内腔还是外形？",
            a: "你来选。内腔（默认）是要放进去的东西：长 × 宽 × 高，高从盒底到合上的盖子。外形是盖好后的整个盒子——含盖子、铰链筒和锁扣——用来放进抽屉或格子：按抽屉内尺寸减 1–2 mm，盒子才推得进去。铰链盒的「高」是盒身，「盖深」另加在上面。",
          },
          {
            q: "一体打印的铰链粘死了，为什么？",
            a: "多半是出料偏多、象脚，或者绒毛表面（fuzzy skin）把缝填上了。默认间隙下铰链有 0.35 mm；关掉绒毛表面，别在切片软件里缩放（缩放会改间隙——要改尺寸就在这里改），还粘就加大间隙，或者换销轴铰链（打印销、M3 螺丝或 1.75 mm 耗材）。",
          },
          {
            q: "为什么提示盒子放不进我的打印机？",
            a: "先选你的打印床。盖子会摆在盒子旁边放得下的方向；两件放不进同一盘时，盖子会叫「盖子（另起一盘打印）」——在切片软件里拆成两个对象分两盘打。一体打印的铰链盒要打开平摊一次打完，所以必须并排放得下，不然就换销轴铰链。",
          },
          {
            q: "怎么打印？",
            a: "不用支撑：盖子朝下打、刻字在贴床那面，滑轨和止口都是 45°，贴床的每条边都有小倒角防象脚。层高 0.2 mm、三圈墙以上；超过 150 mm 的盒子用 PETG 时加个 brim。磁铁点一滴胶压进去，注意磁极——盖子上的要和盒子上的相吸。",
          },
        ],
      },
    },
  },
  {
    slug: "hose-adapter-generator",
    modelDir: "hose-adapter",
    icon: "◎",
    family: "fluid",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { END1_D: "35", END1_MODE: "inner", END2_D: "58", END2_MODE: "outer" }, label: { en: "a 35 mm hose slides into one end; the other end slides into a 58 mm port", zh: "35 mm 的管子插进一端，另一端插进 58 mm 的接口" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 10 exact faces: both sleeves are true cylinders, and the transition and the lead-in lips are true cones — the bore tapers with the outside, so the wall keeps its thickness.",
        "Handy when the adapter is turned on a lathe, or has to line up with a port someone drew in CAD.",
      ],
      zh: [
        "导出为 10 个精确面：两端套管是真圆柱面，过渡段和入口倒角是真圆锥面——内孔随外形一起收，壁厚处处一致。",
        "要上车床加工，或者要和别人在 CAD 里画好的接口对齐时正好用得上。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make an adapter from a 35 mm vacuum hose to a 58 mm dust port?", a: "Decide how each end fits. The hose slides into our end — “inner”, enter the hose’s outside diameter — and our other end slides into the dust port — “outer”, enter the port’s inside diameter: https://www.forgent3d.com/en/generators/hose-adapter-generator?END1_D=35&END1_MODE=inner&END2_D=58&END2_MODE=outer. The fit allowance is added for you." },
        { q: "Can I make it angled, or add a hose barb or a stop flange?", a: "Press “AI edit” in the generator and describe it (“bend 45° in the middle”, “a 3 mm flange at end 2”); the AI edits the adapter’s model.py on the page. For bigger changes, copy it into your models and continue with the AI agent." },
      ],
      zh: [
        { q: "怎样做一个从 35 mm 吸尘器软管到 58 mm 集尘口的转接头？", a: "先想清楚每一端怎么配：软管插进我们这一端——选「内配合」（inner），填软管的外径；我们另一端插进集尘口——选「外配合」（outer），填集尘口的内径：https://www.forgent3d.com/zh/generators/hose-adapter-generator?END1_D=35&END1_MODE=inner&END2_D=58&END2_MODE=outer。配合余量模型已经替你加好。" },
        { q: "能做弯头，或者加倒刺、挡圈吗？", a: "在生成器里点「AI 修改」描述一下（“中间弯 45°”“端 2 加一圈 3 mm 的挡圈”），AI 在页面上改这个转接头的 model.py。改动大的话，复制到你的模型里，和 AI agent 接着改。" },
      ],
    },
    keywords: {
      en: [
      "hose adapter generator",
      "vacuum hose adapter stl",
      "custom pipe adapter 3d print",
      "dust collection adapter generator",
    ],
      zh: ["软管转接头生成器", "吸尘器转接头 3d打印", "软管接头 STL"],
    },
    params: [
      { key: "END1_D", default: "58", range: "10 – 150", unit: "mm", label: { en: "End 1 diameter", zh: "端 1 直径" }, desc: { en: "Diameter of the first port.", zh: "第一端接口直径。" } },
      { key: "END1_MODE", default: "outer", range: "inner / outer", unit: "", label: { en: "End 1 fits", zh: "端 1 配合" }, desc: { en: "outer: the port slides into a hose or socket, and END1_D is the inside diameter of that hose or socket. inner: a hose or pipe slides into the port, and END1_D is the outside diameter of that hose or pipe.", zh: "outer：本端插进软管或接口，END1_D 填软管或接口的内径；inner：软管或管子插进本端，END1_D 填软管或管子的外径。" } },
      { key: "END1_LEN", default: "40", range: "10 – 100", unit: "mm", label: { en: "End 1 length", zh: "端 1 长度" }, desc: { en: "Engagement length of the first port.", zh: "第一端插入长度。" } },
      { key: "END2_D", default: "32", range: "10 – 150", unit: "mm", label: { en: "End 2 diameter", zh: "端 2 直径" }, desc: { en: "Diameter of the second port.", zh: "第二端接口直径。" } },
      { key: "END2_MODE", default: "inner", range: "inner / outer", unit: "", label: { en: "End 2 fits", zh: "端 2 配合" }, desc: { en: "As for end 1, with END2_D.", zh: "同端 1，对应 END2_D。" } },
      { key: "END2_LEN", default: "40", range: "10 – 100", unit: "mm", label: { en: "End 2 length", zh: "端 2 长度" }, desc: { en: "Engagement length of the second port.", zh: "第二端插入长度。" } },
      { key: "TRANSITION", default: "20", range: "5 – 80", unit: "mm", label: { en: "Transition length", zh: "过渡段长度" }, desc: { en: "Length of the tapered section between ports.", zh: "两端之间锥形过渡段的长度。" } },
      { key: "WALL", default: "2.4", range: "1.6 – 4", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "2.4 mm = six perimeters, airtight and stiff.", zh: "2.4 mm 约六圈墙，气密且够硬。" } },
    ],
    copy: {
      en: {
        name: "Hose Adapter Generator",
        title: "Hose Adapter Generator — Custom Vacuum & Dust Adapters (STL) | Forgent3D",
        description:
          "Generate a custom hose adapter online: two ports with inner/outer fit, engagement length, taper and wall thickness. For shop vacs, dust collection, pipes. Free STL / STEP.",
        h1: "Hose adapter generator: connect any two hoses",
        intro:
          "Measure both ends — inside or outside, your choice per port — set engagement lengths and a transition, and get a printable adapter. Shop-vac to tool port, dust collection to bandsaw, pond pump to garden hose: the geometry rebuilds live as real CAD.",
        whyPoints: [
          "Per-port inner/outer measurement — matches how you actually measure a hose",
          "Smooth internal taper keeps airflow up in dust collection runs",
          "Airtight 6-perimeter walls by default, PETG-friendly",
          "Need a bend, a barb or a stop flange? Ask the AI agent",
        ],
        faqs: [
          {
            q: "How do I measure my hose ends correctly?",
            a: "If our end slides INTO a hose or a port, set that end to \"outer\" and enter the inside diameter of what it goes into. If a hose slides INTO our end, set \"inner\" and enter the hose's outside diameter. Add nothing — a 0.2 mm fit allowance is built in.",
          },
          {
            q: "What material should I print adapters in?",
            a: "PETG is the sweet spot: slightly flexible, so tapered ports seat airtight, and it tolerates the heat inside shop-vac hoses. PLA works for light duty; TPU only when you need a stretchy push-fit.",
          },
        ],
      },
      zh: {
        name: "软管转接头生成器",
        title: "软管转接头生成器 — 吸尘/集尘管路转接 STL 在线定制 | Forgent3D",
        description:
          "在线生成软管转接头：两端各自选内径/外径配合、插入长度、锥形过渡与壁厚。适配吸尘器、集尘管路、水管。免费导出 STL / STEP。",
        h1: "软管转接头生成器：任意两根管子接起来",
        intro:
          "把两端量好——每一端都能选按内壁还是外壁配合——设好插入长度和过渡段，就得到能直接打印的转接头。吸尘器接电动工具、集尘管接带锯、水泵接花园水管，几何实时重建，底下是真 CAD。",
        whyPoints: [
          "每端独立选内径/外径配合，跟你实际量管子的方式一致",
          "内壁平滑锥形过渡，集尘管路不损风量",
          "默认六圈墙壁厚，气密且适合 PETG",
          "要弯头、倒刺或限位法兰？交给 AI agent",
        ],
        faqs: [
          {
            q: "怎么量管口才不会做错？",
            a: "我们这一端插进软管或机器的接口里：该端选「外配合」（链接里写 outer），填它要插进去的那个孔的内径。软管插进我们这一端：选「内配合」（inner），填软管的外径。不用自己加补偿，0.2 mm 的配合余量已含在模型里。",
          },
          {
            q: "用什么材料打印？",
            a: "首选 PETG：略有弹性，锥形口能压紧密封，也扛得住吸尘管路的温度。轻负载 PLA 可用；需要弹性插拔时用 TPU。",
          },
        ],
      },
    },
  },
  {
    slug: "funnel-generator",
    modelDir: "funnel",
    icon: "▽",
    family: "fluid",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { MOUTH_D: "120", SPOUT_D: "8", SPOUT_LEN: "30" }, label: { en: "120 mm mouth, 8 mm spout bore, 30 mm spout", zh: "口径 120 mm、出料管内径 8 mm、管长 30 mm" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 15 exact faces: the bowl and its taper into the spout are true cones, the spout and the rim true cylinders.",
        "So the spout can be checked against a bottle neck or a filler port drawn in CAD before anything is printed.",
      ],
      zh: [
        "导出为 15 个精确面：漏斗碗和收向出料管的那段是真圆锥面，出料管和口沿是真圆柱面。",
        "打印之前就能在 CAD 里拿它和瓶口、加注口比一比，看插不插得进。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a funnel for a bottle whose neck opening is 16 mm across?", a: "The spout’s outside is SPOUT_D plus two walls (1.6 mm each by default), so for a 16 mm opening use SPOUT_D=12, which is 15.2 mm outside and leaves room for air to escape: https://www.forgent3d.com/en/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100. Download STL to print it." },
        { q: "Can it have an angled spout, an air vent or a handle?", a: "Press “AI edit” in the generator and describe it; the AI edits the funnel’s model.py on the page and it rebuilds in your browser. A few edits a day are free without signing in." },
      ],
      zh: [
        { q: "怎样做一个能插进内径 16 mm 瓶口的漏斗？", a: "出料管的外径是 SPOUT_D 加两层壁（默认每层 1.6 mm），所以内径 16 mm 的瓶口用 SPOUT_D=12，外径 15.2 mm，还留出排气的缝：https://www.forgent3d.com/zh/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100。下载 STL 去打印。" },
        { q: "能做斜出料口、加排气槽或把手吗？", a: "在生成器里点「AI 修改」描述一下，AI 在页面上改这个漏斗的 model.py，在浏览器里重建。未登录每天也能免费改几次。" },
      ],
    },
    keywords: {
      en: ["funnel generator", "custom funnel stl", "3d printed funnel maker"],
      zh: ["漏斗生成器", "3d打印漏斗", "漏斗 STL"],
    },
    params: [
      { key: "MOUTH_D", default: "90", range: "30 – 200", unit: "mm", label: { en: "Mouth diameter", zh: "口径" }, desc: { en: "Top opening diameter.", zh: "顶部开口直径。" } },
      { key: "SPOUT_D", default: "12", range: "3 – 60", unit: "mm", label: { en: "Spout diameter", zh: "出料口径" }, desc: { en: "Inner diameter of the outlet tube.", zh: "出料管内径。" } },
      { key: "SPOUT_LEN", default: "40", range: "10 – 120", unit: "mm", label: { en: "Spout length", zh: "出料管长" }, desc: { en: "Length of the straight outlet tube.", zh: "直段出料管长度。" } },
      { key: "CONE_H", default: "60", range: "20 – 150", unit: "mm", label: { en: "Cone height", zh: "锥体高度" }, desc: { en: "Height of the conical section.", zh: "锥形段高度，决定坡度。" } },
      { key: "WALL", default: "1.6", range: "1.2 – 3", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "1.6 mm = four perimeters.", zh: "1.6 mm 约四圈墙。" } },
      { key: "HANG_LOOP", default: "True", range: "on / off", unit: "", label: { en: "Hanging loop", zh: "挂环" }, desc: { en: "Rim tab with a hole to hang the funnel.", zh: "沿口挂耳，方便挂起沥干。" } },
    ],
    copy: {
      en: {
        name: "Funnel Generator",
        title: "Funnel Generator — Custom 3D-Printable Funnels (STL) | Forgent3D",
        description:
          "Generate a custom funnel: mouth and spout diameters, cone height, wall thickness and a hanging loop. Fits jars, tanks, oil fills. Free STL / STEP export.",
        h1: "Funnel generator: the exact funnel you can never buy",
        intro:
          "Set the mouth, the spout and the cone height, and get a funnel that actually fits your jar, jerrycan or filament-dry box. It generates as watertight CAD with a smooth interior, plus an optional loop to hang it up to drain.",
        whyPoints: [
          "Spout sized to your container's neck — no more universal funnels that fit nothing",
          "Cone angle follows from your height setting, smooth interior throughout",
          "Optional hanging loop for draining and storage",
          "Need a sieve insert or an offset spout? Remix with the AI agent",
        ],
        faqs: [
          {
            q: "Is a 3D printed funnel food safe?",
            a: "FDM prints have layer grooves that can trap residue, so treat printed funnels as workshop tools by default. For kitchen use, print in PETG, wash promptly, and treat it as a short-lived utensil; where food safety matters, buy a food-grade funnel.",
          },
          {
            q: "How do I stop the funnel glugging?",
            a: "Glugging means air can't escape the container. Make the spout a little narrower than the container neck so air passes beside it, or ask the AI agent to add external ribs on the spout — the classic anti-glug feature.",
          },
          {
            q: "What settings print a leak-free funnel?",
            a: "Three to four perimeters (the default 1.6 mm wall), 0.2 mm layers, and slight over-extrusion or 'iron' the cone if your slicer supports it. PETG at higher temperatures self-seals better than PLA.",
          },
        ],
      },
      zh: {
        name: "漏斗生成器",
        title: "漏斗生成器 — 定制 3D 打印漏斗 STL 在线生成 | Forgent3D",
        description:
          "生成定制漏斗：口径、出料口径、锥体高度、壁厚、挂环全可调，适配瓶罐、油壶、耗材干燥箱。免费导出 STL / STEP。",
        h1: "漏斗生成器：市面上永远买不到的那个尺寸",
        intro:
          "定好口径、出料口和锥体高度，得到正好插进你那个瓶口的漏斗——腌菜罐、机油壶、耗材干燥箱都行。生成的是水密 CAD、内壁平滑，还可以带一个挂环方便沥干收纳。",
        whyPoints: [
          "出料管按你的瓶口定尺寸，告别「万能漏斗」啥也不配",
          "锥角由高度参数自然决定，内壁全程平滑",
          "可选挂环，用完挂起来沥干",
          "要滤网或偏心出料口？让 AI agent 继续改",
        ],
        faqs: [
          {
            q: "3D 打印漏斗能接触食品吗？",
            a: "FDM 打印件层纹会藏残留，默认当工房用具。厨房用请选 PETG、及时清洗、当短命耗材看待；关键用途还是买食品级成品。",
          },
          {
            q: "怎么避免倒液体时「咕嘟」？",
            a: "咕嘟是容器内空气排不出来。让出料管比瓶口略细留出气道，或让 AI agent 在出料管外壁加导气棱——经典的防咕嘟设计。",
          },
          {
            q: "怎么打印才不漏？",
            a: "三到四圈墙（默认 1.6 mm 壁厚）、0.2 mm 层高，切片支持的话对锥面开熨烫。PETG 高温打印比 PLA 更容易自密封。",
          },
        ],
      },
    },
  },
  {
    slug: "spur-gear-generator",
    modelDir: "spur-gear",
    icon: "✱",
    family: "gears",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { MODULE: "1.5", TEETH: "40", BORE_D: "6" }, label: { en: "Module 1.5, 40 teeth, 6 mm bore", zh: "模数 1.5、40 齿、6 mm 轴孔" } },
    // Common sizes, each row a deep link (the copy's `sizes` names the columns).
    sizes: [gearSize(1, 20), gearSize(1, 40), gearSize(1.5, 20), gearSize(1.5, 40), gearSize(2, 15), gearSize(2, 30), gearSize(2.5, 20), gearSize(3, 20)],
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Every tooth flank is one smooth surface: the exact involute, swept through the face width. The default 20-tooth gear exports as 83 faces — 40 flanks, 41 cylindrical faces (tip lands, root fillets, bore) and 2 flat faces — with no facets anywhere.",
        "The teeth are what a hob would cut: an ISO 53 profile-A rack rolled around the blank, so the root keeps the fillet of the rack tip, and pinions under about 17 teeth (at 20°) come out undercut, as real cut pinions do.",
        "Checked against a simulated hob cut: flank shape, tooth thickness and span measurement agree to within a micrometre.",
      ],
      zh: [
        "每个齿面都是一整张光滑曲面：精确的渐开线沿齿宽扫出。默认 20 齿的齿轮导出为 83 个面——40 个齿面、41 个圆柱面（齿顶、齿根圆角、轴孔）、2 个平面——没有一处是小平面拼出来的。",
        "齿形就是滚刀切出来的样子：一把 ISO 53 A 型基本齿条绕齿坯滚切一周，所以齿根带着刀尖留下的圆角，20° 压力角下少于约 17 齿的小齿轮会像真实加工的齿轮一样出现根切。",
        "与模拟滚切的结果逐项对照过：齿面形状、齿厚和公法线长度都在 1 微米以内一致。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a STEP file of a spur gear with module 2 and 30 teeth?", a: "Put the numbers in the link: https://www.forgent3d.com/en/generators/spur-gear-generator?MODULE=2&TEETH=30 opens the generator on exactly that gear. Check it in 3D, then download STEP (or STL). It is free, needs no account, and the file opens directly in SolidWorks, Fusion, FreeCAD or Inventor." },
        { q: "Can it add a keyway, a hub or a set-screw hole?", a: "Not with a slider — with a sentence. Press “AI edit” in the generator and say “add a 3 mm keyway, 1.4 mm deep”: the AI edits the gear’s own model.py (the keyway’s width and depth can become new parameters), the part rebuilds in your browser and exports as usual. A few edits a day are free without signing in." },
      ],
      zh: [
        { q: "怎样拿到模数 2、30 齿直齿轮的 STEP 文件？", a: "把数写进链接：https://www.forgent3d.com/zh/generators/spur-gear-generator?MODULE=2&TEETH=30 打开就是这只齿轮。在 3D 里看一眼，下载 STEP（或 STL）即可。免费、不用注册，文件能直接在 SolidWorks、Fusion、FreeCAD、Inventor 里打开。" },
        { q: "能加键槽、轮毂或顶丝孔吗？", a: "滑块里没有，说一句话就行：在生成器里点「AI 修改」，说「轴孔加一个 3 mm 宽、1.4 mm 深的键槽」。AI 直接改这只齿轮的 model.py（键槽的宽和深还能成为新的可调参数），零件在浏览器里重建，照常导出。未登录每天也能免费改几次。" },
      ],
    },
    keywords: {
      en: [
      "spur gear generator",
      "gear stl generator online",
      "3d printed gear generator module teeth",
    ],
      zh: ["齿轮生成器", "在线齿轮生成器", "齿轮生成器 STEP", "直齿轮 STL", "渐开线齿轮生成"],
    },
    params: [
      { key: "MODULE", default: "2", range: "1 – 5", unit: "mm", label: { en: "Module", zh: "模数" }, desc: { en: "Tooth size; mating gears must share it.", zh: "齿的大小；啮合齿轮模数必须一致。" } },
      { key: "TEETH", default: "20", range: "8 – 120", unit: "", label: { en: "Number of teeth", zh: "齿数" }, desc: { en: "Pitch diameter = module × teeth.", zh: "分度圆直径 = 模数 × 齿数。" } },
      { key: "PRESSURE_ANGLE", default: "20", range: "20 / 25", unit: "°", label: { en: "Pressure angle", zh: "压力角" }, desc: { en: "20° standard; 25° for stubbier, stronger teeth.", zh: "标准 20°；25° 齿更短粗、更抗弯。" } },
      { key: "FACE_WIDTH", default: "10", range: "3 – 40", unit: "mm", label: { en: "Face width", zh: "齿宽" }, desc: { en: "Gear thickness along the axis.", zh: "沿轴向的齿轮厚度。" } },
      { key: "BORE_STYLE", default: "circular", range: "none / circular / hex", unit: "", label: { en: "Bore style", zh: "轴孔样式" }, desc: { en: "Center hole: round shaft or hex socket.", zh: "中心孔：圆轴孔或六角孔。" } },
      { key: "BORE_D", default: "8", range: "2 – 30", unit: "mm", label: { en: "Bore size", zh: "孔径" }, desc: { en: "Shaft diameter, or hex across-flats.", zh: "圆孔直径，或六角对边宽。" } },
    ],
    copy: {
      en: {
        name: "Spur Gear Generator",
        title: "Spur Gear Generator — Involute Gears by Module & Teeth (STL / STEP) | Forgent3D",
        description:
          "Generate involute spur gears online: module, tooth count, pressure angle, face width and bore (round or hex). True involute profile, free STL / STEP export.",
        h1: "Spur gear generator with a true involute profile",
        intro:
          "Set module, tooth count, pressure angle, face width and bore — the generator computes a proper involute tooth profile, not a cosmetic approximation, so printed pairs actually mesh. Because the result is parametric CAD, hubs, keyways and lightening holes are one agent edit away.",
        whyPoints: [
          "Real involute flanks — pairs with matching module mesh correctly",
          "20° or 25° pressure angle, 8 to 120 teeth",
          "Round or hex bore for shafts and standard hardware",
          "Matching rack: the gear rack generator uses the same tooth form",
        ],
        faqs: [
          {
            q: "Which module works for FDM printing?",
            a: "With a 0.4 mm nozzle, stay at module 1 or above; module 1.5–2 is the sweet spot for strong, quiet printed gears. Below module 1 the tooth flanks lose their involute shape to the nozzle radius.",
          },
          {
            q: "How do I make two gears that mesh?",
            a: "Generate both with the same module and pressure angle, any tooth counts you like. Center distance = module × (teeth₁ + teeth₂) / 2. Add 0.1–0.2 mm to that distance for printed backlash.",
          },
          {
            q: "What material and settings for printed gears?",
            a: "PETG for general use, nylon for high wear. Print flat, 100% infill or at least 5 perimeters so the teeth are solid, 0.15 mm layers keep flanks smooth.",
          },
        ],
        sizes: {
          title: "Common sizes",
          intro: "Pitch diameter = module × teeth, outside diameter = module × (teeth + 2), root diameter = module × (teeth − 2.5). Each row opens the generator on that gear.",
          head: ["Module", "Teeth", "Pitch Ø", "Outside Ø", "Root Ø", ""],
          open: "Open",
          note: "Two gears mesh at center distance = module × (teeth₁ + teeth₂) / 2: module 2 with 15 and 30 teeth gives 45 mm.",
        },
      },
      zh: {
        name: "直齿轮生成器",
        title: "在线齿轮生成器 — 渐开线直齿轮，按模数齿数导出 STL / STEP | Forgent3D",
        description:
          "在线齿轮生成器：渐开线直齿轮的模数、齿数、压力角、齿宽、轴孔（圆孔/六角）全可调，真渐开线齿形，免费导出 STL / STEP 文件。",
        h1: "齿轮生成器：在线生成真渐开线直齿轮",
        intro:
          "设定模数、齿数、压力角、齿宽和轴孔，生成器计算真正的渐开线齿廓——不是装饰性的近似齿形，打出来的一对齿轮真的能啮合。生成结果是参数化 CAD：键槽、轮毂、减重孔让 agent 一句话加上。",
        whyPoints: [
          "真渐开线齿面，同模数的一对齿轮正确啮合",
          "压力角 20° / 25°，齿数 8–120",
          "圆孔或六角孔，适配轴与标准件",
          "配套齿条：齿条生成器用的是同一套齿形",
        ],
        faqs: [
          {
            q: "FDM 打印选多大模数？",
            a: "0.4 喷嘴建议模数 ≥ 1；模数 1.5–2 是强度与安静度的甜点区。模数小于 1 时齿面细节会被喷嘴半径抹掉，失去渐开线形状。",
          },
          {
            q: "怎么生成能互相啮合的两个齿轮？",
            a: "两个齿轮用相同的模数和压力角，齿数随意。中心距 = 模数 × (齿数₁ + 齿数₂) / 2，打印件在此基础上加 0.1–0.2 mm 侧隙。",
          },
          {
            q: "齿轮用什么材料和参数打印？",
            a: "通用选 PETG，高磨损选尼龙。平放打印，100% 填充或至少 5 圈墙保证齿是实心的，0.15 mm 层高齿面更光滑。",
          },
        ],
        sizes: {
          title: "常用规格速查",
          intro: "分度圆直径 = 模数 × 齿数，齿顶圆直径 = 模数 × (齿数 + 2)，齿根圆直径 = 模数 × (齿数 − 2.5)。点每一行直接打开那个齿轮。",
          head: ["模数", "齿数", "分度圆 Ø", "齿顶圆 Ø", "齿根圆 Ø", ""],
          open: "打开",
          note: "两个齿轮的中心距 = 模数 × (齿数₁ + 齿数₂) / 2：模数 2、15 齿配 30 齿是 45 mm。",
        },
      },
    },
  },
  {
    slug: "washer-spacer-generator",
    modelDir: "washer-spacer",
    icon: "◌",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { INNER_D: "5.3", OUTER_D: "12", THICKNESS: "2" }, label: { en: "M5 spacer: 5.3 mm hole, 12 mm across, 2 mm thick", zh: "M5 垫片：5.3 mm 孔、外径 12 mm、厚 2 mm" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "A solid of revolution that exports as 8 exact faces: two flat faces, the bore and the rim as true cylinders, and the four 45° chamfers as true cones.",
        "Because the bore is a real cylinder, CAD, CAM and inspection software read its diameter directly — useful when the spacer is turned on a lathe instead of printed.",
      ],
      zh: [
        "回转体，导出为 8 个精确面：上下两个平面，内孔和外圆是真圆柱面，四处 45° 倒角是真圆锥面。",
        "内孔是真圆柱，CAD、CAM 和检测软件能直接读出孔径——垫片要上车床加工而不是打印时正好用得上。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make an M5 spacer 12 mm across and 2 mm thick?", a: "Open https://www.forgent3d.com/en/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 — 5.3 mm is the bore of a standard M5 washer (ISO 7089) — then download STL to print it, or STEP for a machinist." },
        { q: "Can I get a washer with holes around it, a tab or a slot?", a: "Yes. Press “AI edit” in the generator and describe it (“six 3 mm holes on a 22 mm circle”). The AI changes the washer’s model.py on the page, and the new sizes become parameters you can keep turning. A few edits a day are free without signing in." },
      ],
      zh: [
        { q: "怎样做一个外径 12 mm、厚 2 mm 的 M5 垫片？", a: "打开 https://www.forgent3d.com/zh/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 ——5.3 mm 是标准 M5 垫圈（ISO 7089）的内径——下载 STL 去打印，或者下载 STEP 交给机加工。" },
        { q: "能做带一圈孔、带耳或带槽的垫片吗？", a: "能。在生成器里点「AI 修改」，描述一下（“在直径 22 mm 的圆上均布六个 3 mm 孔”）。AI 直接在页面上改这个垫片的 model.py，新加的尺寸会变成还能继续调的参数。未登录每天也能免费改几次。" },
      ],
    },
    keywords: {
      en: [
      "washer generator 3d print",
      "custom spacer stl generator",
      "plastic shim washer 3d printed",
    ],
      zh: ["垫片生成器", "垫圈 STL", "3d打印垫片", "间隔柱 STL"],
    },
    params: [
      { key: "INNER_D", default: "8.4", range: "2 – 60", unit: "mm", label: { en: "Inner diameter", zh: "内径" }, desc: { en: "Bolt clearance: M8 → 8.4 mm.", zh: "螺栓过孔：M8 对应 8.4 mm。" } },
      { key: "OUTER_D", default: "24", range: "6 – 120", unit: "mm", label: { en: "Outer diameter", zh: "外径" }, desc: { en: "Overall washer diameter.", zh: "垫片外径。" } },
      { key: "THICKNESS", default: "3", range: "0.4 – 30", unit: "mm", label: { en: "Thickness", zh: "厚度" }, desc: { en: "From shim-thin to tall spacer tube.", zh: "从薄垫片到高间隔柱都行。" } },
      { key: "CHAMFER", default: "0.4", range: "0 – 2", unit: "mm", label: { en: "Edge chamfer", zh: "边缘倒角" }, desc: { en: "Eases insertion and kills elephant-foot.", zh: "方便装配，也吃掉首层象脚。" } },
    ],
    copy: {
      en: {
        name: "Washer & Spacer Generator",
        title: "Washer & Spacer Generator — Custom Sizes in Seconds (STL / STEP) | Forgent3D",
        description:
          "Generate washers, spacers and shims to exact size: inner diameter, outer diameter, thickness, chamfer. From 0.4 mm shims to tall standoffs. Free STL / STEP.",
        h1: "Washer and spacer generator: exact size, printed in minutes",
        intro:
          "The hardware store never has the size you need. Set inner diameter, outer diameter and thickness — from a 0.4 mm shim to a 30 mm standoff — and print exactly the washer or spacer the assembly calls for.",
        whyPoints: [
          "Bores for M3–M10 bolts from the ISO washer standard, listed below (M8 → 8.4 mm)",
          "One model covers washers, shims, spacers and standoff tubes",
          "Chamfered edges: easy insertion, no elephant-foot cleanup",
          "Need a slot, square bore or shoulder? One agent edit away",
        ],
        faqs: [
          {
            q: "What inner diameter for a given bolt?",
            a: "Standard flat washers (ISO 7089) use the fine clearance series of ISO 273: M3 → 3.2, M4 → 4.3, M5 → 5.3, M6 → 6.4, M8 → 8.4, M10 → 10.5 mm. For an easier fit, take the medium series: M3 → 3.4, M4 → 4.5, M5 → 5.5, M6 → 6.6, M8 → 9, M10 → 11 mm.",
          },
          {
            q: "Are printed washers strong enough?",
            a: "Under a bolt head in static assemblies, absolutely — PETG at 100% infill handles typical clamping loads. Avoid printed washers where temperature, creep under sustained high torque, or electrical conduction matters.",
          },
          {
            q: "How accurate is the printed thickness?",
            a: "Thickness lands on layer multiples: at 0.2 mm layers a 3 mm spacer is exact. For sub-layer precision (e.g. a 1.1 mm shim), print at 0.1 mm layers or ask the agent for a stack of test thicknesses.",
          },
        ],
      },
      zh: {
        name: "垫片/间隔柱生成器",
        title: "垫片间隔柱生成器 — 任意尺寸秒出 STL / STEP | Forgent3D",
        description:
          "按精确尺寸生成垫片、垫圈、间隔柱：内径、外径、厚度、倒角全可调，0.4 mm 薄垫到 30 mm 高柱都行。免费导出 STL / STEP。",
        h1: "垫片/间隔柱生成器：五金店没有的尺寸，打印几分钟",
        intro:
          "五金店永远缺你要的那个尺寸。设好内径、外径、厚度——从 0.4 mm 调整垫片到 30 mm 间隔柱——打印出装配正好需要的那一片。",
        whyPoints: [
          "下方列出 M3–M10 螺栓对应的孔径，取自 ISO 垫圈标准（M8 → 8.4 mm）",
          "一个模型覆盖垫圈、调整垫、间隔柱、支撑管",
          "边缘倒角：好装配，也不用清首层象脚",
          "要长槽、方孔、台阶？让 agent 一句话改",
        ],
        faqs: [
          {
            q: "各种螺栓配多大内径？",
            a: "标准平垫圈（ISO 7089）的内径就是 ISO 273 的精装配系列：M3 → 3.2、M4 → 4.3、M5 → 5.3、M6 → 6.4、M8 → 8.4、M10 → 10.5 mm。想装得松一点就用中等装配系列：M3 → 3.4、M4 → 4.5、M5 → 5.5、M6 → 6.6、M8 → 9、M10 → 11 mm。",
          },
          {
            q: "打印垫片强度够吗？",
            a: "静态装配里压在螺栓头下完全够——PETG 100% 填充承受常规预紧力没问题。高温、长期大扭矩蠕变、导电场合别用打印件。",
          },
          {
            q: "厚度能打多准？",
            a: "厚度落在层高整数倍上最准：0.2 mm 层高下 3 mm 间隔柱是精确的。要 1.1 mm 这类非整层厚度就用 0.1 mm 层高，或让 agent 生成一组阶梯试片。",
          },
        ],
      },
    },
  },
  {
    slug: "tool-tray-generator",
    modelDir: "pocket",
    icon: "▧",
    family: "storage",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { TRAY_L: "200", TRAY_W: "120", TRAY_T: "15", PART_DEPTH: "12" }, label: { en: "200 × 120 mm tray, 15 mm thick, pocket 12 mm deep", zh: "托盘 200 × 120 mm、厚 15 mm、坑深 12 mm" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 23 exact faces: a flat floor and vertical walls, every rounded pocket corner a true cylinder of the radius you set — a CNC router can cut the tray straight from the STEP.",
      ],
      zh: [
        "导出为 23 个精确面：平底、竖直的壁，坑的每个圆角都是你设定半径的真圆柱面——CNC 雕刻机可以直接拿 STEP 加工这块托盘。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "Can the pocket follow my own tool’s outline?", a: "Yes. Drag the eight outline points on the sketch canvas, or press “AI edit” and give it the measurements (“a 150 × 22 mm body with a 40 × 30 mm handle”) and it rewrites the outline. Working from a photo? Copy the tray into your models and give the photo to the AI agent." },
        { q: "How do I make a 200 × 120 mm tray with a 12 mm deep pocket?", a: "https://www.forgent3d.com/en/generators/tool-tray-generator?TRAY_L=200&TRAY_W=120&TRAY_T=15&PART_DEPTH=12 — the tray must be at least 1.5 mm thicker than the pocket is deep, so 12 mm deep needs 13.5 mm or more." },
      ],
      zh: [
        { q: "坑能按我自己工具的轮廓来吗？", a: "能。在草图画布上拖那八个轮廓点；或者点「AI 修改」把尺寸告诉它（“身长 150 × 22 mm，带一个 40 × 30 mm 的把手”），它会重写轮廓。手上只有照片？把托盘复制到你的模型里，把照片交给 AI agent。" },
        { q: "怎样做一个 200 × 120 mm、坑深 12 mm 的托盘？", a: "https://www.forgent3d.com/zh/generators/tool-tray-generator?TRAY_L=200&TRAY_W=120&TRAY_T=15&PART_DEPTH=12 ——托盘要比坑深至少厚 1.5 mm，所以 12 mm 深的坑要 13.5 mm 以上的托盘。" },
      ],
    },
    keywords: {
      en: [
      "tool tray generator",
      "custom toolbox insert stl",
      "shadow foam alternative 3d print",
      "tool drawer organizer stl",
    ],
      zh: ["工具托盘生成器", "工具收纳仿形内衬", "抽屉内衬 3d打印"],
    },
    params: [
      { key: "CORNER_R", default: "2", range: "0 \u2013 8", unit: "mm", label: { en: "Corner radius", zh: "圆角" }, desc: { en: "Your part\u2019s own corner radius: the traced outline is rounded by it before the clearance goes on. A part with truly sharp corners fits only up to 2.4 \u00d7 the clearance (1.2 mm at 0.5); more and the corners bind.", zh: "填零件自己的圆角半径：先按它把描出来的轮廓倒圆，再加余量。真正尖角的零件，最多只能填余量的 2.4 倍（余量 0.5 时是 1.2 mm），再大角上会卡住。" } },
      { key: "CLEARANCE", default: "0.5", range: "0.1 \u2013 3", unit: "mm", label: { en: "Fit clearance", zh: "间隙" }, desc: { en: "Grown around the outline on every side; 0.25 snug, 0.5 drop-in, 1.0 loose.", zh: "沿轮廓四周外扩；0.25 紧配、0.5 好放、1.0 宽松。" } },
      { key: "PART_DEPTH", default: "7", range: "1 \u2013 40", unit: "mm", label: { en: "Pocket depth", zh: "坑深" }, desc: { en: "How deep the part sinks. Clamped so a 1.5 mm floor always remains.", zh: "零件沉多深。自动封顶，底下永远留 1.5 mm。" } },
      { key: "TRAY_L", default: "140", range: "60 \u2013 400", unit: "mm", label: { en: "Tray length X", zh: "托盘长 X" }, desc: { en: "Outer length \u2014 measure the drawer, not the part.", zh: "托盘外长，按抽屉内尺寸量。" } },
      { key: "TRAY_W", default: "100", range: "60 \u2013 300", unit: "mm", label: { en: "Tray width Y", zh: "托盘宽 Y" }, desc: { en: "Outer width of the tray.", zh: "托盘外宽。" } },
      { key: "TRAY_T", default: "10", range: "3 \u2013 60", unit: "mm", label: { en: "Tray thickness", zh: "托盘厚" }, desc: { en: "Must clear the pocket depth plus a 1.5 mm floor.", zh: "要能容下坑深，再留 1.5 mm 底。" } },
    ],
    copy: {
      en: {
        name: "Tool Tray Generator",
        title: "Tool Tray Generator \u2014 Custom Toolbox & Drawer Inserts (STL) | Forgent3D",
        description:
          "Generate a tray whose pocket is cut to your part's own outline, not a rectangle. Drag eight points to your measurements, preview in 3D, export STL or STEP free.",
        h1: "Tool tray generator: the pocket is the tool's outline, not a rectangle",
        intro:
          "Most tray customizers give you rectangles and circles. Here the cavity is the object's own footprint. The pocket below is a body with a tab on it \u2014 eight points carrying the four numbers you would read off a caliper: body length, body width, tab width, tab height \u2014 so dragging them on the sketch canvas turns it into YOUR part. Size the tray to your drawer, set the fit, print it flat.",
        whyPoints: [
          "Eight draggable points, four real dimensions: measure your part, drag, done",
          "Measured outline and fit clearance stay two separate numbers, so a looser fit never reshapes the tool",
          "Pocket depth is clamped so a 1.5 mm floor always survives \u2014 you cannot slice the tray in half by dragging a slider",
          "Prints flat with no supports \u2014 and anything the sliders miss, the AI agent edits on the same model",
        ],
        faqs: [
          {
            q: "The pocket is not shaped like my part. Can I change it?",
            a: "That is the point, and it is eight points to drag. The outline is authored as literal coordinates, so you reshape it on the sketch canvas the way you would sketch on paper \u2014 add or move points for a notch, a step, a second tab \u2014 or hand the agent measurements (or a photo) and ask for a different silhouette outright. The tray, depth and fit stay on the sliders either way.",
          },
          {
            q: "How much clearance should I leave?",
            a: "0.25 mm per side for a snug locating fit, 0.5 mm so the tool drops in one-handed, 1.0 mm if the tray will be handled with gloves. The clearance is added around the outline by the model, so the eight points stay the object's own measurements \u2014 loosening the fit never redraws the shape.",
          },
          {
            q: "Does it print without supports?",
            a: "Yes. A pocket cut down from the top face leaves a flat floor and vertical walls \u2014 nothing overhangs. Print it flat on the bed in PLA or PETG at 0.2 mm layers, no supports and no brim. Keep the depth under about two thirds of the part's height, though, or your fingers cannot grip the part to lift it out.",
          },
        ],
      },
      zh: {
        name: "工具托盘生成器",
        title: "工具托盘生成器 \u2014 工具箱/抽屉异形内衬在线生成 | Forgent3D",
        description:
          "生成一个托盘，槽形就是你零件本身的轮廓，不是矩形。拖八个点改成你量到的尺寸，浏览器 3D 预览，免费导出 STL / STEP。",
        h1: "工具托盘生成器：槽是工具的轮廓，不是一个矩形",
        intro:
          "大多数托盘定制器只能给你矩形和圆。这里的坑是物体自己的轮廓。下面那个坑是个凸字形——带凸台的零件，八个点，装着你拿卡尺量出来的四个数：身长、身宽、凸台宽、凸台高。在草图画布上拖一拖，它就是你那个零件。托盘尺寸按抽屉设，配合拧好，平放开打。",
        whyPoints: [
          "八个可拖的点，四个真实尺寸：量一下、拖一下就完事",
          "量到的轮廓与配合间隙是两个数，放宽间隙永远不会把工具形状改掉",
          "坑深自动封顶，底下永远留 1.5 mm——拖滑块不可能把托盘拖穿",
          "平放打印免支撑；滑块覆盖不到的改动，交给 AI agent 在同一个模型上继续改",
        ],
        faqs: [
          {
            q: "这个槽不是我零件的形状，能换吗？",
            a: "这正是重点，而且只有八个点要拖。轮廓是以具体坐标写在源码里的，你在草图画布上像在纸上画一样改它就行——加点、挪点，缺口、台阶、第二个凸台都能画出来；也可以把尺寸（或一张照片）交给 agent，让它直接换一个轮廓。托盘尺寸、槽深、配合两种做法下都还在滑块上。",
          },
          {
            q: "间隙留多少合适？",
            a: "单边 0.25 mm 是定位紧配，0.5 mm 可以单手一放就进去，戴手套操作就给 1.0 mm。间隙是模型沿轮廓自动外扩的，所以那八个点始终是零件自己的实测尺寸——放宽配合不会重画形状。",
          },
          {
            q: "打印需要支撑吗？",
            a: "不需要。从顶面往下挖的坑，底是平的、壁是竖直的，没有任何悬垂。PLA 或 PETG、0.2 mm 层高、平放打印即可，不用支撑也不用裙边。但坑深别超过零件自身高度的三分之二，否则手指捏不住，拿不出来。",
          },
        ],
      },
    },
  },
  {
    slug: "2020-corner-bracket-generator",
    modelDir: "extrusion-corner-bracket",
    icon: "⌐",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { SLOT: "6", SCREW: "M5", LEG: "30" }, label: { en: "6 mm slot (EU / B-type / V-slot), M5 screws, 30 mm legs", zh: "6 mm 槽（欧标 / B 型 / V 槽）、M5 螺丝、腿长 30 mm" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 40 exact faces: 36 flat faces plus the rounded ends of the two slotted screw holes as true cylinders — real hole axes to mate against when the bracket goes into a frame assembly in CAD.",
      ],
      zh: [
        "导出为 40 个精确面：36 个平面，加上两个长圆孔两端的真圆柱面——放进 CAD 的框架装配里，有真正的孔轴线可以配合。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a 2020 corner bracket for a 6 mm slot with M5 screws and 30 mm legs?", a: "https://www.forgent3d.com/en/generators/2020-corner-bracket-generator?SLOT=6&SCREW=M5&LEG=30 opens exactly that bracket. Download STL to print it (PETG is the usual choice), or STEP for your frame assembly." },
        { q: "Can I get a three-way corner or an angle other than 90°?", a: "Not with the sliders — the bracket follows the cast 20 × 20 × 17 part. Press “AI edit” in the generator and describe the change, or copy the bracket into your models and work it through with the AI agent." },
      ],
      zh: [
        { q: "怎样做 6 mm 槽、M5 螺丝、腿长 30 mm 的 2020 角码？", a: "https://www.forgent3d.com/zh/generators/2020-corner-bracket-generator?SLOT=6&SCREW=M5&LEG=30 打开就是这只角码。下载 STL 去打印（一般用 PETG），或下载 STEP 放进框架装配。" },
        { q: "能做三通角码，或者不是 90° 的角码吗？", a: "滑块里没有——角码照着 20 × 20 × 17 的压铸件做。在生成器里点「AI 修改」描述要改成什么样；或者复制到你的模型里，和 AI agent 慢慢改。" },
      ],
    },
    // Evidence: generator-models/extrusion-corner-bracket/EVIDENCE.md in the platform repo
    // (titles of the top Printables / MakerWorld listings, MakerWorld CN titles, GSC 2026-10-16).
    keywords: {
      en: [
      "2020 corner bracket stl",
      "2020 extrusion corner bracket",
      "v-slot corner bracket 3d print",
      "custom aluminum extrusion bracket generator",
    ],
      zh: ["2020角码", "铝型材角码 STL", "2020铝型材连接件 3d打印"],
    },
    params: [
      { key: "SLOT", default: "6 mm", range: "6 / 5 / 4 mm", unit: "", label: { en: "Rail slot", zh: "型材槽口" }, desc: { en: "6 mm: EU / B-type / V-slot. 5 mm: I-type. 4 mm: China GB.", zh: "6 mm：欧标 / B 型 / V 槽；5 mm：I 型；4 mm：国标。" } },
      { key: "SCREW", default: "M5", range: "M3 / M4 / M5", unit: "", label: { en: "Screw", zh: "螺丝" }, desc: { en: "Clearance holes per ISO 273 medium: 3.4 / 4.5 / 5.5 mm.", zh: "按 ISO 273 中等配合开孔：3.4 / 4.5 / 5.5 mm。" } },
      { key: "LEG", default: "20", range: "20 – 60", unit: "mm", label: { en: "Leg length", zh: "腿长" }, desc: { en: "20 matches the cast 20×20×17 bracket; longer legs add a hole every 20 mm.", zh: "20 对应常见的 20×20×17 压铸角码；腿越长，每 20 mm 多一个孔。" } },
      { key: "WIDTH", default: "17", range: "15 – 20", unit: "mm", label: { en: "Width", zh: "宽度" }, desc: { en: "17 is the cast-bracket width; 20 fills the whole profile face.", zh: "17 是压铸角码的宽度；20 占满型材整个面。" } },
      { key: "THICKNESS", default: "4", range: "2 – 6", unit: "mm", label: { en: "Plate thickness", zh: "板厚" }, desc: { en: "Cast brackets are 3 mm; printed ones are usually 4 mm or more.", zh: "压铸角码 3 mm；打印件一般 4 mm 以上。" } },
      { key: "SLOTTED", default: "on", range: "on / off", unit: "", label: { en: "Slotted holes", zh: "长圆孔" }, desc: { en: "3 mm of travel along the leg to square up the frame.", zh: "沿腿方向 3 mm 调节量，方便把框架调方。" } },
      { key: "TABS", default: "on", range: "on / off", unit: "", label: { en: "Locating tabs", zh: "定位舌" }, desc: { en: "Two 4 mm tabs per leg drop into the slot and stop the bracket turning.", zh: "每条腿两个 4 mm 定位舌卡进槽口，角码不会转。" } },
      { key: "SIDE_WALLS", default: "on", range: "on / off", unit: "", label: { en: "Side walls", zh: "侧墙" }, desc: { en: "Triangular walls on both sides, like the cast bracket.", zh: "两侧三角墙，和压铸角码一样。" } },
    ],
    copy: {
      en: {
        name: "2020 Corner Bracket Generator",
        title: "2020 Corner Bracket Generator — Printable Extrusion Brackets (STL / STEP) | Forgent3D",
        description:
          "Generate a 3D-printable corner bracket for 2020 aluminum extrusion: 6 / 5 / 4 mm slot, M3–M5, leg length, slotted holes, locating tabs, side walls. Free STL and STEP, no CAD install.",
        h1: "2020 corner bracket generator: the cast bracket, printable and resizable",
        intro:
          "Start from the 20 × 20 × 17 cast corner bracket that Adafruit, OpenBuilds and Misumi sell, then make it fit your frame: pick your rail's slot standard and screw, lengthen the legs, thicken the plate. The model rebuilds in your browser as real CAD, so the STEP drops straight into Fusion or FreeCAD.",
        whyPoints: [
          "Fits EU / B-type / V-slot (6 mm), I-type (5 mm) and China GB (4 mm) slots",
          "4 mm locating tabs, the width the cast brackets use — no forcing a tab into a tight slot",
          "Slotted holes with 3 mm of travel to square the frame",
          "Exports STEP as well as STL; anything the sliders don't cover, the AI agent edits",
        ],
        faqs: [
          {
            q: "Which screws and T-nuts do I need?",
            a: "M5 is the standard for 6 mm-slot 2020 (the Misumi, OpenBuilds and Alux brackets all take M5×8 with a slide-in or drop-in T-nut; Misumi also makes M4 versions). With the default 4 mm printed plate, use M5×10 — a cast bracket's 3 mm plate takes M5×8, and printed brackets on MakerWorld list M5×10, or ×12 with a washer.",
          },
          {
            q: "Will the tabs fit my extrusion?",
            a: "The tabs are 4 mm wide, the same as the OpenBuilds and Adafruit cast brackets, so they slide into 6 mm and 5 mm slots with room to spare; a 4 mm GB slot gets a 3.2 mm tab. Tight tabs are the most common complaint about printed brackets — if your rail is unusual, switch the tabs off.",
          },
          {
            q: "What material and settings should I print with?",
            a: "PETG, ASA or ABS — makers report PLA brackets slowly deforming under load. More perimeters beat more infill: 4–5 walls is the common advice. Print it lying on one side wall; nothing needs supports.",
          },
        ],
      },
      zh: {
        name: "2020 角码生成器",
        title: "2020 铝型材角码生成器 — 欧标 / 国标角码 STL / STEP 在线定制 | Forgent3D",
        description:
          "在线生成可 3D 打印的 2020 铝型材角码：6 / 5 / 4 mm 槽口、M3–M5 螺丝、腿长、长圆孔、定位舌、侧墙可调。免费导出 STL 和 STEP，免装 CAD。",
        h1: "2020 角码生成器：压铸角码的打印版，尺寸随你改",
        intro:
          "从 Adafruit、OpenBuilds、米思米都在卖的 20×20×17 压铸角码出发，按你的框架改：选型材槽口标准和螺丝，加长腿、加厚板。模型在浏览器里以真 CAD 实时重建，STEP 可以直接导入 Fusion 或 FreeCAD。",
        whyPoints: [
          "适配欧标 / B 型 / V 槽（6 mm）、I 型（5 mm）和国标（4 mm）槽口",
          "定位舌 4 mm 宽，和压铸角码一样，不用硬塞",
          "长圆孔带 3 mm 调节量，方便把框架调方",
          "除了 STL 还能导 STEP；滑块管不到的，让 AI 接着改",
        ],
        faqs: [
          {
            q: "要配什么螺丝和 T 型螺母？",
            a: "6 mm 槽的 2020 型材标准是 M5（米思米、OpenBuilds、Alux 的角码都用 M5×8 配 T 型螺母，米思米也有 M4 款）。默认 4 mm 打印板用 M5×10——压铸角码 3 mm 板用 M5×8，MakerWorld 上的打印角码标注 M5×10，加垫片用 ×12。",
          },
          {
            q: "定位舌能塞进我的型材吗？",
            a: "定位舌 4 mm 宽，和 OpenBuilds、Adafruit 的压铸角码一致，6 mm 和 5 mm 槽都有余量；国标 4 mm 槽会自动收窄到 3.2 mm。舌太紧是打印角码最常见的抱怨——型材比较特殊的话，直接关掉定位舌。",
          },
          {
            q: "用什么材料、怎么打印？",
            a: "PETG、ASA 或 ABS——有人反馈 PLA 角码受力会慢慢变形。多加墙比多加填充有用，常见建议 4–5 圈墙。侧墙贴床平放打印，不需要支撑。",
          },
        ],
      },
    },
  },
  {
    slug: "pillow-block-bearing-holder-generator",
    modelDir: "bearing-pillow-block",
    icon: "◉",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { BEARING: "6201", SCREW: "M5" }, label: { en: "6201 bearing (12 × 32 × 10), M5 bolts", zh: "6201 轴承（12 × 32 × 10）、M5 螺栓" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 19 exact faces: the bearing seat and the bolt holes are true cylinders, and the lead-in at the open side is a true cone. The seat diameter is exactly the bearing’s outside diameter plus the fit you set.",
      ],
      zh: [
        "导出为 19 个精确面：轴承座孔和螺栓孔是真圆柱面，敞口一侧的导入斜面是真圆锥面。座孔直径正好是轴承外径加上你设的配合量。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a pillow block for a 6201 bearing with M5 bolts?", a: "https://www.forgent3d.com/en/generators/pillow-block-bearing-holder-generator?BEARING=6201&SCREW=M5 — the seat fit defaults to +0.10 mm on the diameter; tune it after one test print." },
        { q: "Can it hold two bearings, or get a grease hole or a set-screw?", a: "Two bearings side by side is a parameter (COUNT=2). For a grease hole or a set-screw, press “AI edit” in the generator and say where; the AI edits the block’s model.py on the page." },
      ],
      zh: [
        { q: "怎样做装 6201 轴承、用 M5 螺栓的轴承座？", a: "https://www.forgent3d.com/zh/generators/pillow-block-bearing-holder-generator?BEARING=6201&SCREW=M5 ——座孔配合默认直径 +0.10 mm，打一个试件后再微调。" },
        { q: "能装两个轴承，或者加注油孔、顶丝吗？", a: "并排装两个轴承是现成的参数（COUNT=2）。注油孔或顶丝就在生成器里点「AI 修改」说要加在哪，AI 在页面上改这个轴承座的 model.py。" },
      ],
    },
    // Evidence: generator-models/bearing-pillow-block/EVIDENCE.md in the platform repo.
    keywords: {
      en: [
      "608 bearing pillow block stl",
      "pillow block bearing holder 3d print",
      "kp08 pillow block replacement",
      "parametric bearing holder generator",
    ],
      zh: ["轴承座生成器", "608轴承座 STL", "KP08轴承座"],
    },
    params: [
      { key: "BEARING", default: "608", range: "623 – 6201, 6800 – 6901", unit: "", label: { en: "Bearing", zh: "轴承" }, desc: { en: "14 common deep-groove bearings, sized from the DIN 625 table.", zh: "14 种常用深沟球轴承，尺寸取自 DIN 625 表。" } },
      { key: "FIT", default: "+0.10", range: "−0.20 – +0.30", unit: "mm", label: { en: "Seat fit", zh: "孔径配合" }, desc: { en: "Added to the bearing OD. +0.10 presses a metal 608 in by hand; negative is a tighter press fit.", zh: "加在轴承外径上。+0.10 手能压进金属 608；负值是更紧的压配。" } },
      { key: "COUNT", default: "1", range: "1 – 2", unit: "", label: { en: "Bearings side by side", zh: "并排轴承数" }, desc: { en: "Two bearings in one block for a stiffer shaft.", zh: "一个座里放两个轴承，轴更稳。" } },
      { key: "LIP", default: "on", range: "on / off", unit: "", label: { en: "Retaining lip", zh: "挡肩" }, desc: { en: "A 2 mm shoulder the outer ring seats against.", zh: "2 mm 挡肩，轴承外圈靠在上面定位。" } },
      { key: "WALL", default: "3", range: "2 – 8", unit: "mm", label: { en: "Wall over bearing", zh: "轴承外壁厚" }, desc: { en: "3 mm is what a KP08 leaves over a 608.", zh: "3 mm 和 KP08 包住 608 的壁厚一样。" } },
      { key: "BASE", default: "5", range: "3 – 8", unit: "mm", label: { en: "Foot thickness", zh: "底脚厚度" }, desc: { en: "KP08 5, KP000 6, KP001 7.", zh: "KP08 为 5，KP000 为 6，KP001 为 7。" } },
      { key: "SCREW", default: "M4", range: "M3 – M6", unit: "", label: { en: "Mounting screw", zh: "安装螺丝" }, desc: { en: "M4 matches the KP08's Ø4.5 holes.", zh: "M4 对应 KP08 的 Ø4.5 孔。" } },
    ],
    copy: {
      en: {
        name: "Pillow Block Bearing Holder Generator",
        title: "Pillow Block Bearing Holder Generator — 608, 625, 6000, 6800 (STL / STEP) | Forgent3D",
        description:
          "Generate a 3D-printable pillow block for 14 standard ball bearings. With a 608 it matches the KP08 footprint (42 mm bolts, 15 mm centre height). Adjustable press fit, lip, wall, foot. Free STL and STEP.",
        h1: "Pillow block generator: a KP08 footprint, any common bearing",
        intro:
          "Pick your bearing — 608, 625, 688, 6000-series, 6800-series — and get a printed pillow block that holds it. With the default 608 it lands on the KP08's mounting holes and centre height, so it drops in where a KP08 was. The seat fit is a slider, because every printer prints holes a little differently.",
        whyPoints: [
          "608 default matches KP08: 55 mm long, 42 mm bolt spacing, 15 mm centre height, M4",
          "14 bearings from the DIN 625 table, one or two side by side",
          "Seat fit from −0.20 to +0.30 mm, a 2 mm retaining lip and a 0.5 mm lead-in",
          "Prints lip face down without supports; exports STEP for your CAD",
        ],
        faqs: [
          {
            q: "What seat fit should I use?",
            a: "Start at the default +0.10 mm: a Printables author found a 22.1 mm seat lets a metal 608 go in and come out without tools. If yours is loose, go tighter — a 2024 study pressed bearings into PETG seats 0.1 and 0.2 mm undersize. Printers differ, so step by 0.05.",
          },
          {
            q: "Can it replace a KP08 pillow block?",
            a: "It matches the KP08 footprint — 42 mm bolt spacing, 15 mm centre height, Ø4.5 holes — so it bolts to the same holes. It holds a plain 608, not the KP08's self-aligning set-screw insert, so line the shafts up carefully.",
          },
          {
            q: "How do I print it and press the bearing in?",
            a: "Print it lip face down in PETG or ABS; makers report PLA blocks cracking on a tight fit. Press the bearing in with a vise or a clamp, not a hammer — the 0.5 mm lead-in helps it start straight.",
          },
        ],
      },
      zh: {
        name: "立式轴承座生成器",
        title: "立式轴承座生成器 — 608 / 625 / 6000 / 6800 轴承座 STL / STEP 在线定制 | Forgent3D",
        description:
          "在线生成可 3D 打印的立式轴承座，支持 14 种常用深沟球轴承。默认 608 与 KP08 安装尺寸一致（孔距 42、中心高 15）。压配间隙、挡肩、壁厚、底脚可调，免费导出 STL 和 STEP。",
        h1: "轴承座生成器：KP08 的安装尺寸，常用轴承都能装",
        intro:
          "选好轴承——608、625、688、6000 系、6800 系——就得到能装它的打印轴承座。默认 608 时，安装孔和中心高和 KP08 完全一致，原来装 KP08 的地方直接换上。孔径配合做成滑块，因为每台打印机打出来的孔都略有偏差。",
        whyPoints: [
          "默认 608 对齐 KP08：长 55 mm、孔距 42 mm、中心高 15 mm、M4 螺丝",
          "14 种 DIN 625 标准轴承，可单装或并排装两个",
          "孔径配合 −0.20 到 +0.30 mm，2 mm 挡肩和 0.5 mm 入口倒角",
          "挡肩面朝下打印免支撑；可导出 STEP 进 CAD",
        ],
        faqs: [
          {
            q: "孔径配合选多少？",
            a: "先用默认的 +0.10 mm：Printables 上有作者实测 22.1 mm 的孔能让金属 608 不用工具装进取出。太松就往紧调——2024 年的一篇研究把轴承压进了比外径小 0.1 和 0.2 mm 的 PETG 孔。每台打印机不同，按 0.05 一档试。",
          },
          {
            q: "能直接替换 KP08 吗？",
            a: "安装尺寸和 KP08 一致——孔距 42、中心高 15、孔径 4.5——螺丝孔能对上。但里面装的是普通 608，不是 KP08 那种带顶丝的调心轴承，装的时候注意把轴对正。",
          },
          {
            q: "怎么打印、怎么压轴承？",
            a: "挡肩面朝下，用 PETG 或 ABS 打印；有人反馈 PLA 轴承座在紧配时开裂。用台钳或夹子把轴承压进去，别用锤子敲——0.5 mm 的入口倒角能帮它对正。",
          },
        ],
      },
    },
  },
  {
    slug: "fan-grill-generator",
    modelDir: "fan-grill",
    icon: "◎",
    family: "electronics",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { FAN: "92", SCREW: "M3" }, label: { en: "92 mm fan (82.5 mm hole spacing), M3 holes", zh: "92 mm 风扇（孔距 82.5 mm）、M3 孔" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Exports as 156 exact faces for the default 120 mm guard: every ring and screw hole a true cylinder, the spokes and the frame flat — real hole positions when the guard goes into an enclosure assembly in CAD.",
      ],
      zh: [
        "默认 120 mm 网罩导出为 156 个精确面：每一圈环和每个螺丝孔都是真圆柱面，辐条和外框是平面——放进机箱的 CAD 装配里，孔位就是真孔位。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a fan guard for a 92 mm fan with M3 screws?", a: "https://www.forgent3d.com/en/generators/fan-grill-generator?FAN=92&SCREW=M3 — the hole spacing (82.5 mm) comes with the fan size. Download STL; it prints flat with no supports." },
        { q: "Can I add a filter slot, a logo or a different pattern?", a: "Press “AI edit” in the generator and describe it; the AI edits the guard’s model.py on the page. Keep the openings large: the rings-and-spokes pattern is there because wire-style guards cost the least airflow." },
      ],
      zh: [
        { q: "怎样给 92 mm 风扇做一个 M3 螺丝孔的防护网？", a: "https://www.forgent3d.com/zh/generators/fan-grill-generator?FAN=92&SCREW=M3 ——孔距（82.5 mm）随风扇尺寸自动给出。下载 STL，平放打印、不用支撑。" },
        { q: "能加滤网卡槽、logo，或者换一种网格吗？", a: "在生成器里点「AI 修改」描述一下，AI 在页面上改这个网罩的 model.py。开口尽量留大：之所以用圆环加辐条，是因为钢丝网式的网罩最不挡风。" },
      ],
    },
    // Evidence: generator-models/fan-grill/EVIDENCE.md in the platform repo.
    keywords: {
      en: [
      "fan grill generator",
      "120mm fan grill stl",
      "parametric fan grill",
      "pc fan cover 3d print",
    ],
      zh: ["风扇网罩生成器", "风扇防护网 STL", "120mm风扇罩 3d打印"],
    },
    params: [
      { key: "FAN", default: "120 mm", range: "25 – 140 mm", unit: "", label: { en: "Fan size", zh: "风扇尺寸" }, desc: { en: "Hole spacing from ARCTIC's drawings (40, 80, 92, 120, 140 mm) and NopSCADlib's measured fan table (25, 30, 50, 60, 70 mm).", zh: "孔距取自 ARCTIC 图纸（40、80、92、120、140 mm）和 NopSCADlib 实测风扇表（25、30、50、60、70 mm）。" } },
      { key: "BAR", default: "1.2", range: "0.8 – 3", unit: "mm", label: { en: "Bar width", zh: "网条宽度" }, desc: { en: "1.2 mm or more prints cleanly from a 0.4 mm nozzle.", zh: "0.4 mm 喷嘴打 1.2 mm 以上最稳。" } },
      { key: "GAP", default: "4.8", range: "2.5 – 12.7", unit: "mm", label: { en: "Max opening width", zh: "最大开口宽度" }, desc: { en: "Rings are spread evenly so no gap is wider than this. 12.7 mm (½ in) is the OSHA limit for fan guards.", zh: "圆环均匀分布，任何缝都不超过这个值。12.7 mm（½ 英寸）是 OSHA 对风扇护网的上限。" } },
      { key: "GRILL_T", default: "1.6", range: "0.8 – 4", unit: "mm", label: { en: "Grill thickness", zh: "网面厚度" }, desc: { en: "The ring layer, printed flat on the bed.", zh: "圆环那一层，贴床平打。" } },
      { key: "STANDOFF", default: "2", range: "0 – 5", unit: "mm", label: { en: "Standoff from fan", zh: "离风扇距离" }, desc: { en: "Space between the rings and the blades; Noctua's steel guards stand 5 mm off.", zh: "圆环和扇叶之间的距离；猫头鹰的钢网离风扇 5 mm。" } },
      { key: "SCREW", default: "auto", range: "auto / fan screw / M4 / M3", unit: "", label: { en: "Screw hole", zh: "螺丝孔" }, desc: { en: "Auto: M2.5 under 30 mm, M3 for 30–40 mm, the 5 mm fan screw from 50 mm.", zh: "自动：30 mm 以下 M2.5，30–40 mm 用 M3，50 mm 起用 5 mm 风扇自攻螺丝。" } },
    ],
    copy: {
      en: {
        name: "Fan Grill Generator",
        title: "Fan Grill Generator — 40 / 80 / 92 / 120 / 140 mm Fan Guards (STL / STEP) | Forgent3D",
        description:
          "Generate a 3D-printable fan grill for 25–140 mm fans: rings and spokes like a wire guard, hole spacing from ARCTIC drawings and measured tables, adjustable bar width, opening and standoff. Free STL and STEP.",
        h1: "Fan grill generator: a wire-guard pattern you can print",
        intro:
          "Pick your fan size and get a printable guard that bolts to it — hole spacing from ARCTIC's drawings and NopSCADlib's measured fan table, a 2 mm standoff from the blades. The pattern copies the steel wire guard on purpose: in wind-tunnel tests wire guards cost almost no airflow, while a half-open honeycomb sheet cost about a fifth of it.",
        whyPoints: [
          "10 sizes, 25 to 140 mm, hole spacing from ARCTIC drawings and measured fan tables",
          "Rings and spokes like a wire guard: the pattern that cost the least airflow in tests",
          "Every opening stays under your limit — 12.7 mm max keeps fingers out",
          "Prints flat with no bridges; exports STEP as well as STL",
        ],
        faqs: [
          {
            q: "Why rings and spokes instead of honeycomb?",
            a: "Because it moves more air and makes less noise. hwcooling measured a wire guard costing 0–2 % of a 120 mm fan's airflow, while a hexagonal sheet half covered in metal cost about 20 % and added 3 dBA. Puget Systems' grill test ranked wire guards best too. Nobody has measured printed grills yet, so treat thinner bars and wider openings as the safer side.",
          },
          {
            q: "Which screws do I use?",
            a: "From 50 mm up, the standard self-tapping fan screw goes through the grill into the fan; the holes are 5 mm, the size of ARCTIC's steel guard eyes. 40 mm and smaller fans use M3 (M2.5 for 25 mm). The grill adds its own thickness, so you need a screw that much longer than a bare fan takes.",
          },
          {
            q: "How should I print it?",
            a: "Flat, ring side down, exactly as it is generated — nothing bridges, so no supports. Keep the bars at 1.2 mm or wider with a 0.4 mm nozzle. Use PETG if the grill sits near a heat source.",
          },
        ],
      },
      zh: {
        name: "风扇网罩生成器",
        title: "风扇网罩生成器 — 4 / 8 / 9 / 12 / 14 cm 风扇防护网 STL / STEP 在线定制 | Forgent3D",
        description:
          "在线生成可 3D 打印的风扇网罩，适配 25–140 mm 风扇：仿钢丝网的圆环加辐条，孔距取自 ARCTIC 图纸和实测风扇表，网条宽度、开口、离风扇距离可调。免费导出 STL 和 STEP。",
        h1: "风扇网罩生成器：能打印的钢丝网罩",
        intro:
          "选好风扇尺寸，就得到能直接拧上去的打印网罩——孔距取自 ARCTIC 图纸和 NopSCADlib 实测风扇表，离扇叶留 2 mm。图案特意仿钢丝网：风洞实测里钢丝网几乎不损风量，而开孔一半的蜂窝板要损失约五分之一。",
        whyPoints: [
          "25 到 140 mm 共 10 种尺寸，孔距取自 ARCTIC 图纸和实测风扇表",
          "仿钢丝网的圆环加辐条：实测风量损失最小的图案",
          "任何开口都不超过你设的上限——12.7 mm 以内手指伸不进去",
          "平放打印没有悬空；除了 STL 还能导 STEP",
        ],
        faqs: [
          {
            q: "为什么用圆环加辐条，不用蜂窝？",
            a: "因为风量更大、噪音更小。hwcooling 实测钢丝网只让 120 mm 风扇损失 0–2% 风量，而一半面积被盖住的蜂窝板损失约 20%，还多了 3 dBA。Puget Systems 的网罩测试也是钢丝网最好。打印网罩目前没人实测过，网条细一点、开口大一点更稳妥。",
          },
          {
            q: "用什么螺丝？",
            a: "50 mm 以上的风扇，用标准风扇自攻螺丝穿过网罩拧进风扇；孔是 5 mm，和 ARCTIC 钢丝网的安装孔一样。40 mm 及以下用 M3（25 mm 用 M2.5）。网罩本身有厚度，螺丝要比直接装风扇的长出这么多。",
          },
          {
            q: "怎么打印？",
            a: "按生成的样子平放、圆环那面朝下——没有悬空，不需要支撑。0.4 mm 喷嘴网条保持 1.2 mm 以上。靠近热源的话用 PETG。",
          },
        ],
      },
    },
  },
  {
    slug: "gear-rack-generator",
    modelDir: "gear-rack",
    icon: "▭",
    family: "gears",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { MODULE: "1.5", TEETH: "40", HOLES: "2" }, label: { en: "Module 1.5, 40 teeth (188.5 mm), 2 mounting holes", zh: "模数 1.5、40 齿（188.5 mm）、2 个安装孔" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The default 15-tooth rack exports as 96 exact faces: every tooth flank is a true plane — the straight-sided ISO 53 rack form — and every root fillet a true cylinder (66 planes, 30 cylinders), so CAD measures the flank angle and the pitch-line height directly.",
        "The length is a whole number of pitches (15 × π × 2 = 94.25 mm) and both ends fall in the middle of a tooth space, as on KHK's SRF and MISUMI's RGEA joinable racks, so two racks butt end to end with the pitch running on.",
      ],
      zh: [
        "默认 15 齿的齿条导出为 96 个精确面：每个齿面都是真平面——ISO 53 直边齿条齿形——每个齿根圆角都是真圆柱面（66 个平面、30 个圆柱面），在 CAD 里能直接量齿形角和节线高度。",
        "长度是整数个齿距（15 × π × 2 = 94.25 mm），两端都落在齿槽正中，和 KHK SRF、米思米 RGEA 可拼接齿条一样，两根齿条首尾相接，齿距照样连续。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a module 2 rack about 200 mm long for a 20-tooth pinion?", a: "200 / (π × 2) rounds down to 31 teeth, 194.78 mm: https://www.forgent3d.com/en/generators/gear-rack-generator?MODULE=2&TEETH=31 — the pinion's centre then sits 18 + 20 = 38 mm above the rack's bottom (pitch-line height + pitch radius). Make the pinion with the spur gear generator at the same module." },
        { q: "Can I join printed racks for a longer run?", a: "Yes: every rack here is a whole number of pitches with both ends mid-space. Butt them, mesh a short piece of rack across the joint to set the pitch — the method KHK and MISUMI give for their racks — then screw or pin both to the base." },
      ],
      zh: [
        { q: "怎样做一根约 200 mm 长、配 20 齿小齿轮的模数 2 齿条？", a: "200 / (π × 2) 向下取整是 31 齿、194.78 mm：https://www.forgent3d.com/zh/generators/gear-rack-generator?MODULE=2&TEETH=31 ——小齿轮中心离齿条底面 18 + 20 = 38 mm（节线高度 + 分度圆半径）。小齿轮用直齿轮生成器、同一个模数来做。" },
        { q: "打印的齿条能拼成更长的吗？", a: "能：这里每根齿条都是整数个齿距、两端在齿槽正中。首尾相接，拿一小段齿条跨着接缝啮合把齿距对准——KHK 和米思米给自家齿条的做法——再把两根都用螺丝或销钉固定到底座上。" },
      ],
    },
    // Evidence: generator-models/gear-rack/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["gear rack generator", "rack and pinion generator", "gear rack stl", "module 1 gear rack 3d print"],
      zh: ["齿条生成器", "齿轮齿条 STL", "模数1齿条", "直齿条 3d打印"],
    },
    params: [
      { key: "MODULE", default: "2", range: "1 – 5", unit: "mm", label: { en: "Module", zh: "模数" }, desc: { en: "Must match the pinion's.", zh: "必须和小齿轮一致。" } },
      { key: "PRESSURE_ANGLE", default: "20", range: "20 / 25", unit: "°", label: { en: "Pressure angle", zh: "压力角" }, desc: { en: "20° on every catalogue rack; 25° only to match a 25° pinion.", zh: "市售齿条都是 20°；25° 只为配 25° 的小齿轮。" } },
      { key: "TEETH", default: "15", range: "2 – 120", unit: "", label: { en: "Number of teeth", zh: "齿数" }, desc: { en: "Length = teeth × π × module; 15 at module 2 is MISUMI's 100 mm stock rack (94.25 mm).", zh: "长度 = 齿数 × π × 模数；模数 2、15 齿就是米思米 100 mm 规格（94.25 mm）。" } },
      { key: "FACE_WIDTH", default: "10", range: "3 – 40", unit: "mm", label: { en: "Face width", zh: "齿宽" }, desc: { en: "At least the pinion's face width.", zh: "不小于小齿轮的齿宽。" } },
      { key: "PITCH_HEIGHT", default: "18", range: "9 – 60", unit: "mm", label: { en: "Height to pitch line", zh: "节线高度" }, desc: { en: "18 at module 2 is the pitch line of a square-section rack (HPC, MISUMI stainless: 9 × module); KHK and MISUMI steel racks use 23.", zh: "模数 2 时 18 是方截面齿条的节线高度（HPC、米思米不锈钢：9 × 模数）；KHK、米思米钢齿条是 23。" } },
      { key: "HOLES", default: "0", range: "0 – 6", unit: "", label: { en: "Mounting holes", zh: "安装孔" }, desc: { en: "Sideways through the face width, evenly spaced, like KHK SRFD racks.", zh: "横穿齿宽、均匀分布，和 KHK SRFD 齿条一样。" } },
      { key: "SCREW", default: "M4", range: "M3 / M4 / M5 / M6", unit: "", label: { en: "Screw", zh: "螺丝" }, desc: { en: "Hole and counterbore sizes from MISUMI's rack tables.", zh: "孔径和沉孔尺寸取自米思米齿条表。" } },
      { key: "COUNTERBORE", default: "on", range: "on / off", unit: "", label: { en: "Counterbored", zh: "沉孔" }, desc: { en: "Sinks the screw heads into the -Y face.", zh: "螺丝头沉进 -Y 侧面。" } },
    ],
    copy: {
      en: {
        name: "Gear Rack Generator",
        title: "Gear Rack Generator — Racks That Mesh With Our Spur Gears (STL / STEP) | Forgent3D",
        description: "Generate a gear rack by module and tooth count: ISO 53 teeth that mesh with our spur gears, whole-pitch ends for joining segments, optional side mounting holes. Free STL / STEP.",
        h1: "Gear rack generator: racks that mesh with the spur gears",
        intro: "Pick your pinion's module and pressure angle, then the number of teeth — the rack is exactly that many pitches long, with both ends in the middle of a tooth space, so printed segments join into a longer run. It uses the ISO 53 tooth form our spur gears are hobbed from, so the pair meshes with the designed 0.2 mm of backlash.",
        whyPoints: [
          "Same ISO 53 tooth form as the spur gear generator — the pair meshes as designed",
          "Whole-pitch length, mid-space ends: segments butt end to end",
          "20 mm tall at module 2 by default, pitch line at 18 as on square-section racks; any height you need",
          "Optional M3–M6 side mounting holes, counterbored like KHK and MISUMI racks",
        ],
        faqs: [
          { q: "Where does the pinion go?", a: "Its centre sits at the rack's pitch-line height plus the pinion's pitch radius (module × teeth / 2): with the defaults, 18 + 20 = 38 mm for a 20-tooth module-2 pinion. That is the mounting distance KHK gives for any rack and pinion." },
          { q: "How long a rack can I print in one piece?", a: "At module 2, 40 teeth (251.33 mm) lying straight on a 256 mm bed, or 53 teeth across its diagonal; 35 teeth (219.91 mm, no room left for a brim) on a 220 mm bed. For a longer run, print segments and join them — the ends are made for it." },
          { q: "Which way up should I print it?", a: "Gear printing guides lay the tooth profile flat on the bed — smooth flanks, strong roots — so print the rack lying on its side; the side mounting holes then come out as clean vertical holes. PETG for a working rack, 4 or more walls." },
        ],
      },
      zh: {
        name: "齿条生成器",
        title: "齿条生成器 — 与直齿轮啮合的齿条，在线导出 STL / STEP | Forgent3D",
        description: "在线齿条生成器：按模数和齿数生成齿条，ISO 53 齿形和直齿轮生成器的齿轮啮合，整齿距端面可拼接，可选侧面安装孔，免费导出 STL / STEP。",
        h1: "齿条生成器：和直齿轮啮合的齿条",
        intro: "选好小齿轮的模数和压力角，再定齿数——齿条正好是这么多个齿距长，两端落在齿槽正中，打印的几段能拼成更长的一根。齿形用的是直齿轮生成器滚齿用的 ISO 53 基本齿条，所以两者按设计的 0.2 mm 侧隙啮合。",
        whyPoints: [
          "和直齿轮生成器同一套 ISO 53 齿形——成对啮合",
          "整齿距长度、端面在齿槽正中：几段首尾相接",
          "默认模数 2 时高 20 mm、节线高 18，和方截面齿条一样；高度随意设",
          "可选 M3–M6 侧面安装孔，像 KHK、米思米齿条一样带沉孔",
        ],
        faqs: [
          { q: "小齿轮装在哪儿？", a: "小齿轮中心在齿条节线高度加上小齿轮分度圆半径（模数 × 齿数 / 2）的位置：默认参数下，20 齿模数 2 的小齿轮是 18 + 20 = 38 mm。这就是 KHK 给齿轮齿条的安装距离。" },
          { q: "一次能打印多长的齿条？", a: "模数 2 时，256 mm 的热床直放 40 齿（251.33 mm），斜放 53 齿；220 mm 的热床 35 齿（219.91 mm，没给 brim 留余地）。要更长就分段打印再拼——端面就是为拼接做的。" },
          { q: "齿条朝哪个方向打印？", a: "齿轮打印指南都是把齿廓平放在热床上——齿面光、齿根结实——所以齿条侧躺着打印；侧面安装孔这时是竖直孔，打得干净。受力的齿条用 PETG，4 圈以上墙。" },
        ],
      },
    },
  },
  {
    slug: "helical-gear-generator",
    modelDir: "helical-gear",
    icon: "✲",
    family: "gears",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { MODULE: "1.5", TEETH: "30", HELIX_ANGLE: "20", HAND: "left" }, label: { en: "Module 1.5, 30 teeth, 20° left-hand helix", zh: "模数 1.5、30 齿、20° 左旋" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Every tooth surface is one smooth B-spline face that follows the helix: the default 20-tooth gear exports as 83 faces — 80 tooth surfaces, the two end faces, and the bore as a true cylinder, cut after the twist so its diameter reads exactly in CAD.",
      ],
      zh: [
        "每个齿面都是一整块沿螺旋线走的光滑 B 样条面：默认 20 齿的齿轮导出为 83 个面——80 个齿面、两个端面，以及一个真圆柱轴孔（扭转之后再开孔，所以在 CAD 里孔径能直接量准）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a pair of helical gears, 15 and 30 teeth, module 2?", a: "Open https://www.forgent3d.com/en/generators/helical-gear-generator?MODULE=2&TEETH=15&HAND=right and https://www.forgent3d.com/en/generators/helical-gear-generator?MODULE=2&TEETH=30&HAND=left — parallel shafts need the same helix angle and opposite hands. At the default 20° they mesh at 2 × (15 + 30) / (2 × cos 20°) = 47.89 mm." },
        { q: "Which helix angle should I use?", a: "Catalogue gears for parallel shafts use 15° (KHK SH) to 21.5° (KHK KHG); printed helical gears sit at 15–30° and print flat without supports. For shafts crossed at 90°, use 45° on both gears with the same hand, as MISUMI and HPC do: https://www.forgent3d.com/en/generators/helical-gear-generator?HELIX_ANGLE=45&FACE_WIDTH=10" },
      ],
      zh: [
        { q: "怎样做一对 15 齿和 30 齿、模数 2 的斜齿轮？", a: "打开 https://www.forgent3d.com/zh/generators/helical-gear-generator?MODULE=2&TEETH=15&HAND=right 和 https://www.forgent3d.com/zh/generators/helical-gear-generator?MODULE=2&TEETH=30&HAND=left ——平行轴要螺旋角相同、旋向相反。默认 20° 时中心距是 2 × (15 + 30) / (2 × cos 20°) = 47.89 mm。" },
        { q: "螺旋角选多大？", a: "平行轴的市售斜齿轮用 15°（KHK SH）到 21.5°（KHK KHG）；打印的斜齿轮多在 15–30°，平放打印不用支撑。两轴 90° 交错时两个齿轮都用 45°、同旋向，米思米和 HPC 就是这样：https://www.forgent3d.com/zh/generators/helical-gear-generator?HELIX_ANGLE=45&FACE_WIDTH=10" },
      ],
    },
    // Evidence: generator-models/helical-gear/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["helical gear generator", "helical gear stl", "3d printed helical gear", "helical gear module helix angle"],
      zh: ["斜齿轮生成器", "斜齿轮 STL", "斜齿轮 3d打印", "斜齿轮 模数 螺旋角"],
    },
    params: [
      { key: "MODULE", default: "2", range: "1 – 5", unit: "mm", label: { en: "Module (normal)", zh: "模数（法向）" }, desc: { en: "Normal module, as KHK SH, MISUMI and Chinese catalogues list it; mating gears share it.", zh: "法向模数，KHK SH、米思米和国内样本都这样标；配对的齿轮要相同。" } },
      { key: "TEETH", default: "20", range: "8 – 40", unit: "", label: { en: "Number of teeth", zh: "齿数" }, desc: { en: "Pitch diameter = module × teeth / cos(helix angle).", zh: "分度圆直径 = 模数 × 齿数 / cos(螺旋角)。" } },
      { key: "PRESSURE_ANGLE", default: "20", range: "20 / 25", unit: "°", label: { en: "Pressure angle (normal)", zh: "压力角（法向）" }, desc: { en: "20° standard.", zh: "标准 20°。" } },
      { key: "HELIX_ANGLE", default: "20", range: "5 – 45", unit: "°", label: { en: "Helix angle", zh: "螺旋角" }, desc: { en: "15–21.5° on catalogue parallel-shaft gears; 45° for shafts crossed at 90°.", zh: "平行轴市售件 15–21.5°；两轴 90° 交错用 45°。" } },
      { key: "HAND", default: "right", range: "right / left", unit: "", label: { en: "Hand", zh: "旋向" }, desc: { en: "Parallel shafts: opposite hands. 90° crossed shafts: the same hand.", zh: "平行轴：旋向相反；90° 交错轴：旋向相同。" } },
      { key: "FACE_WIDTH", default: "20", range: "3 – 40", unit: "mm", label: { en: "Face width", zh: "齿宽" }, desc: { en: "20 at module 2 and 20° spans one axial pitch (overlap ratio ≈ 1), like catalogue gears.", zh: "模数 2、20° 时 20 mm 正好跨一个轴向齿距（重合度 ≈ 1），和市售件一样。" } },
      { key: "BORE_STYLE", default: "circular", range: "none / circular / hex", unit: "", label: { en: "Bore style", zh: "轴孔样式" }, desc: { en: "Round shaft or hex socket.", zh: "圆轴或六角孔。" } },
      { key: "BORE_D", default: "5", range: "2 – 30", unit: "mm", label: { en: "Bore size", zh: "孔径" }, desc: { en: "Shaft diameter, or hex across flats; 5 fits a NEMA 17 motor.", zh: "轴径，或六角对边距；5 mm 配 NEMA 17 电机。" } },
    ],
    copy: {
      en: {
        name: "Helical Gear Generator",
        title: "Helical Gear Generator — Module, Helix Angle & Hand (STL / STEP) | Forgent3D",
        description: "Generate involute helical gears online: normal module, tooth count, helix angle, left or right hand, face width and bore. Hob-generated teeth, free STL / STEP.",
        h1: "Helical gear generator with true involute teeth",
        intro: "Set the normal module, tooth count, helix angle and hand — the generator cuts the tooth across the axis with the same ISO 53 rack as our spur gears, then twists it along the axis, so a left-hand and a right-hand gear with the same module and helix angle mesh on parallel shafts. Helical teeth take up the load gradually, so a pair runs quieter than spur gears.",
        whyPoints: [
          "Normal module and pressure angle — the way KHK SH, MISUMI and Chinese catalogues list them",
          "Left or right hand: parallel shafts take opposite hands, 90° crossed shafts the same hand at 45°",
          "Default face width spans one axial pitch (overlap ratio ≈ 1), like catalogue gears",
          "Round or hex bore, cut as a true cylinder or prism after the twist",
        ],
        faqs: [
          { q: "What centre distance do two helical gears need?", a: "Normal module × (teeth₁ + teeth₂) / (2 × cos helix angle). KHK's own centre-distance table matches it to the hundredth: their SH2-15 with SH2-20 at 15° sit 36.23 mm apart." },
          { q: "Do helical gears print without supports?", a: "Yes: every printed helical and herringbone gear we found that states its settings prints flat on the bed with no supports, at helix angles of 15–30°. Use 4–6 walls, 0.16–0.2 mm layers, PETG or nylon for load." },
          { q: "Why does it stop at 40 teeth?", a: "Each change rebuilds the gear in your browser, and the twisted tooth surfaces add about 0.12 s per tooth to the rest of the build: at 40 teeth the slowest allowed gear takes about 6 s. 8–40 covers pinions and wheels up to Wade's 39-tooth extruder gear; for a bigger wheel, copy the gear into your models and ask the AI agent — it just rebuilds more slowly." },
        ],
      },
      zh: {
        name: "斜齿轮生成器",
        title: "斜齿轮生成器 — 模数、螺旋角、旋向可调，在线导出 STL / STEP | Forgent3D",
        description: "在线斜齿轮生成器：法向模数、齿数、螺旋角、左旋或右旋、齿宽和轴孔都可调，滚齿生成的渐开线齿形，免费导出 STL / STEP。",
        h1: "斜齿轮生成器：真渐开线齿形",
        intro: "设定法向模数、齿数、螺旋角和旋向——生成器在端面用和直齿轮同一根 ISO 53 齿条切出齿形，再沿轴线扭转，所以模数和螺旋角相同、一左一右的两个斜齿轮能在平行轴上啮合。斜齿是逐渐进入啮合的，一对斜齿轮比直齿轮转得更安静。",
        whyPoints: [
          "法向模数和法向压力角——和 KHK SH、米思米、国内样本的标法一致",
          "左旋或右旋：平行轴旋向相反，90° 交错轴同旋向、各 45°",
          "默认齿宽跨一个轴向齿距（重合度 ≈ 1），和市售件一样",
          "圆孔或六角孔，扭转之后按真圆柱 / 棱柱开孔",
        ],
        faqs: [
          { q: "两个斜齿轮的中心距是多少？", a: "法向模数 × (齿数₁ + 齿数₂) / (2 × cos 螺旋角)。KHK 自己的中心距表与之分毫不差：15° 的 SH2-15 配 SH2-20 中心距 36.23 mm。" },
          { q: "斜齿轮打印要支撑吗？", a: "不要：我们找到的写明参数的打印斜齿轮和人字齿轮，都是平放在热床上、不加支撑，螺旋角 15–30°。墙 4–6 圈，层高 0.16–0.2 mm，受力用 PETG 或尼龙。" },
          { q: "为什么齿数最多 40？", a: "每改一次参数，齿轮都在你的浏览器里重建，扭转的齿面在其余构建之外每个齿再加约 0.12 s：40 齿时允许范围内最慢的齿轮约 6 s。8–40 齿覆盖小齿轮和大到 Wade 挤出机 39 齿的大齿轮；要更大的，复制到你的模型里让 AI agent 改——只是重建慢一些。" },
        ],
      },
    },
  },
  {
    slug: "bevel-gear-generator",
    modelDir: "bevel-gear",
    icon: "◭",
    family: "gears",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { TEETH: "15", MATE_TEETH: "30" }, label: { en: "15-tooth pinion of a 1:2 pair (its mate: 30 teeth)", zh: "1:2 一对中的 15 齿小锥齿轮（配 30 齿）" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The default gear exports as 85 exact faces: 40 tooth flanks, and the tip and root lands as 40 true cones that all point at the pitch-cone apex — straight-bevel geometry, not a stack of slices — plus 3 flat faces and the hub and bore as true cylinders.",
      ],
      zh: [
        "默认齿轮导出为 85 个精确面：40 个齿面，齿顶和齿根是 40 个指向节锥顶点的真圆锥面——这就是直齿锥齿轮的几何，不是一层层切片——另有 3 个平面，轮毂和轴孔是真圆柱面。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a pair of 90° bevel gears with a 1:2 ratio?", a: "Make both from the same page: https://www.forgent3d.com/en/generators/bevel-gear-generator?TEETH=15&MATE_TEETH=30 is the pinion and https://www.forgent3d.com/en/generators/bevel-gear-generator?TEETH=30&MATE_TEETH=15 its mate — KHK's stock 1:2 pair. Mount them so their cone apexes meet where the shafts cross." },
        { q: "Can I make miter gears for shafts at 60° or 120°?", a: "Yes, set the shaft angle: https://www.forgent3d.com/en/generators/bevel-gear-generator?SHAFT_ANGLE=60 — KHK sells angular miters at 45°, 60° and 120°, and the generator takes anything from 45° to 120°." },
      ],
      zh: [
        { q: "怎样做一对 90°、传动比 1:2 的锥齿轮？", a: "两个都在同一个页面做：https://www.forgent3d.com/zh/generators/bevel-gear-generator?TEETH=15&MATE_TEETH=30 是小齿轮，https://www.forgent3d.com/zh/generators/bevel-gear-generator?TEETH=30&MATE_TEETH=15 是配对的大齿轮——就是 KHK 的 1:2 现货组合。安装时让两个锥顶重合在两轴交点上。" },
        { q: "能做轴交角 60° 或 120° 的锥齿轮吗？", a: "能，设好轴交角：https://www.forgent3d.com/zh/generators/bevel-gear-generator?SHAFT_ANGLE=60 ——KHK 卖 45°、60°、120° 的非直角伞齿轮，生成器支持 45° 到 120° 之间任意角度。" },
      ],
    },
    // Evidence: generator-models/bevel-gear/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["bevel gear generator", "miter gear stl", "bevel gear stl 3d print", "bevel gear pair module ratio"],
      zh: ["锥齿轮生成器", "伞齿轮 STL", "锥齿轮 3d打印", "直齿锥齿轮 模数 传动比"],
    },
    params: [
      { key: "MODULE", default: "1.5", range: "1 – 3", unit: "mm", label: { en: "Module (large end)", zh: "模数（大端）" }, desc: { en: "Measured at the large end, as KHK and MISUMI list it; both gears share it.", zh: "按大端计，和 KHK、米思米的标法一样；一对齿轮要相同。" } },
      { key: "TEETH", default: "20", range: "12 – 40", unit: "", label: { en: "Number of teeth", zh: "齿数" }, desc: { en: "This gear.", zh: "本齿轮的齿数。" } },
      { key: "MATE_TEETH", default: "20", range: "12 – 60", unit: "", label: { en: "Mating gear teeth", zh: "配对齿轮齿数" }, desc: { en: "The other gear; with the shaft angle it sets both pitch cones.", zh: "另一个齿轮的齿数；和轴交角一起决定两个节锥。" } },
      { key: "SHAFT_ANGLE", default: "90", range: "45 – 120", unit: "°", label: { en: "Shaft angle", zh: "轴交角" }, desc: { en: "Angle between the two shafts.", zh: "两根轴之间的夹角。" } },
      { key: "PRESSURE_ANGLE", default: "20", range: "20 / 25", unit: "°", label: { en: "Pressure angle", zh: "压力角" }, desc: { en: "20° on every catalogue bevel gear.", zh: "市售锥齿轮都是 20°。" } },
      { key: "BORE_STYLE", default: "circular", range: "none / circular / hex", unit: "", label: { en: "Bore style", zh: "轴孔样式" }, desc: { en: "Round shaft or hex socket.", zh: "圆轴或六角孔。" } },
      { key: "BORE_D", default: "8", range: "2 – 20", unit: "mm", label: { en: "Bore size", zh: "孔径" }, desc: { en: "Shaft diameter, or hex across flats; KHK's PM1.5-20 is bored 8.", zh: "轴径，或六角对边距；KHK PM1.5-20 的孔是 8。" } },
      { key: "HUB_LENGTH", default: "13", range: "0 – 30", unit: "mm", label: { en: "Hub length", zh: "轮毂长度" }, desc: { en: "Hub on the back, sized like KHK's PM1.5-20 (Ø26 × 13) but kept just inside the tooth roots: Ø24.1 at the defaults.", zh: "背面轮毂，尺寸参照 KHK PM1.5-20（Ø26 × 13），但收在齿根以内：默认 Ø24.1。" } },
    ],
    copy: {
      en: {
        name: "Bevel Gear Generator",
        title: "Bevel Gear Generator — Miter & Bevel Gear Pairs by Module (STL / STEP) | Forgent3D",
        description: "Generate straight bevel gears online: module, the tooth counts of both gears, shaft angle 45–120°, bore and hub. Miter pairs and 1:2 or 1:3 ratios, free STL / STEP.",
        h1: "Bevel gear generator for miter and bevel gear pairs",
        intro: "Give the module, this gear's tooth count and its mate's, and the shaft angle — the generator sets both pitch cones from them, so the two gears you make meet at a common apex and mesh. The teeth are our spur gears' hob-generated involute, laid on each gear's back cone (Tredgold's method) and running straight to the apex.",
        whyPoints: [
          "Any pair: miters (1:1) or 1:1.5, 1:2, 1:3 — make the mate by swapping the two tooth counts",
          "Shaft angles from 45° to 120°, like KHK's angular miters",
          "Face width a third of the cone distance at most, as KHK sizes them",
          "Back hub and bore like KHK's PM1.5-20; 0.1 mm of backlash per gear",
        ],
        faqs: [
          { q: "How do I mount a pair of bevel gears?", a: "Their pitch cones must share one apex, where the two shafts cross. With the defaults (module 1.5, 20/20 at 90°) the apex sits 15 mm above the gear's large end — 28 mm above the bottom of its 13 mm hub." },
          { q: "Which way up should I print a bevel gear?", a: "On its back — hub down, teeth up — as makers print them; one maker who printed small bevels teeth-down on a ring had teeth shear off. No supports needed; 3–6 walls, PETG for gears that work." },
          { q: "Why does it make one gear at a time?", a: "Each change rebuilds the gear in your browser, and building only the one you are looking at keeps that quick. Both gears come from the same page: swap TEETH and MATE_TEETH for the mate." },
        ],
      },
      zh: {
        name: "锥齿轮生成器",
        title: "锥齿轮生成器 — 伞齿轮、直齿锥齿轮成对设计，在线导出 STL / STEP | Forgent3D",
        description: "在线锥齿轮生成器：模数、两个齿轮的齿数、轴交角 45–120°、轴孔和轮毂都可调。等齿数伞齿轮、1:2、1:3 传动比，免费导出 STL / STEP。",
        h1: "锥齿轮生成器：成对的伞齿轮和直齿锥齿轮",
        intro: "给出模数、本齿轮和配对齿轮的齿数、轴交角——生成器据此算出两个节锥，做出来的两个齿轮锥顶重合、正确啮合。齿形是直齿轮生成器滚齿得到的渐开线，铺在各自的背锥上（Tredgold 法），一直延伸到锥顶。",
        whyPoints: [
          "任意一对：1:1 伞齿轮，或 1:1.5、1:2、1:3——配对齿轮把两个齿数对调即可",
          "轴交角 45° 到 120°，和 KHK 的非直角伞齿轮一样",
          "齿宽不超过锥距的三分之一，和 KHK 的取法一致",
          "背面轮毂和轴孔参照 KHK PM1.5-20；每个齿轮 0.1 mm 侧隙",
        ],
        faqs: [
          { q: "一对锥齿轮怎么装？", a: "两个节锥的锥顶必须重合在两轴交点上。默认参数（模数 1.5、20/20、90°）下，锥顶在齿轮大端上方 15 mm——离 13 mm 轮毂底面 28 mm。" },
          { q: "锥齿轮朝哪个方向打印？", a: "背面朝下——轮毂朝下、齿朝上——大家都这么打；有人把小锥齿轮齿朝下架在垫圈上打，结果齿被剪断。不用支撑；3–6 圈墙，真正受力的用 PETG。" },
          { q: "为什么一次只做一个齿轮？", a: "每改一次参数，齿轮都在你的浏览器里重建，只做眼前这一个就快。两个齿轮都在同一个页面做：把 TEETH 和 MATE_TEETH 对调就是配对的那个。" },
        ],
      },
    },
  },
  {
    slug: "gt2-pulley-generator",
    modelDir: "timing-pulley",
    icon: "◎",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { TEETH: "40", BORE_D: "8" }, label: { en: "40 teeth, 8 mm bore", zh: "40 齿、8 mm 轴孔" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Each of the 20 grooves exports as one smooth extruded face — a spline, not a polygon — and the lands between them as true cylinders at the 12.22 mm outside diameter: 63 faces in all, so CAD measures the outside diameter, the bore and the flange directly.",
      ],
      zh: [
        "20 个齿槽各导出为一整块光滑的拉伸面——样条，不是多边形——齿槽之间的齿顶是外径 12.22 mm 处的真圆柱面：一共 63 个面，在 CAD 里外径、孔径、挡边都能直接量。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a 20-tooth GT2 pulley for a 5 mm motor shaft and a 6 mm belt?", a: "https://www.forgent3d.com/en/generators/gt2-pulley-generator?TEETH=20&BORE_D=5&BELT_WIDTH=6 — 12.22 mm outside diameter like the aluminium ones, flanges, and two M3 set screws in captive nut traps. Download STL to print it flange down, no supports." },
        { q: "My printed pulley is too tight on the belt, or the belt skips. What do I change?", a: "FIT widens every groove: start at 0.2 (droftarts' default) and move 0.1 at a time — https://www.forgent3d.com/en/generators/gt2-pulley-generator?FIT=0.3 — then print the teeth with 0.1–0.16 mm layers, external perimeters first and 4 or more walls." },
      ],
      zh: [
        { q: "怎样做一个配 5 mm 电机轴、6 mm 皮带的 20 齿 GT2 同步轮？", a: "https://www.forgent3d.com/zh/generators/gt2-pulley-generator?TEETH=20&BORE_D=5&BELT_WIDTH=6 ——外径 12.22 mm，和铝同步轮一样，带挡边，两颗 M3 顶丝配内嵌螺母。下载 STL，挡边朝下打印，不用支撑。" },
        { q: "打印的同步轮装皮带太紧，或者皮带跳齿，改哪里？", a: "FIT 会把每个齿槽加宽：从 0.2（droftarts 的默认值）开始，每次调 0.1——https://www.forgent3d.com/zh/generators/gt2-pulley-generator?FIT=0.3 ——齿部用 0.1–0.16 mm 层高、先打外圈、4 圈以上墙。" },
      ],
    },
    // Evidence: generator-models/timing-pulley/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["GT2 pulley generator", "gt2 pulley stl", "timing pulley generator", "20 tooth gt2 pulley 5mm bore"],
      zh: ["同步带轮生成器", "2GT同步轮 STL", "同步轮 3d打印", "2GT 20齿 同步轮"],
    },
    params: [
      { key: "PROFILE", default: "GT2 2 mm", range: "GT2 2 mm / GT2 3 mm", unit: "", label: { en: "Belt profile", zh: "带型" }, desc: { en: "2 mm pitch is the 3D-printer belt.", zh: "2 mm 齿距就是 3D 打印机用的皮带。" } },
      { key: "TEETH", default: "20", range: "16 – 60", unit: "", label: { en: "Number of teeth", zh: "齿数" }, desc: { en: "Outside diameter = teeth × 2 / π − 0.508 (20 teeth: 12.22 mm); one turn moves teeth × 2 mm of belt. Up to 60, MISUMI's largest stock 2GT pulley.", zh: "外径 = 齿数 × 2 / π − 0.508（20 齿：12.22 mm）；转一圈走 齿数 × 2 mm 皮带。最多 60 齿，米思米 2GT 现货最大规格。" } },
      { key: "BELT_WIDTH", default: "6", range: "4 – 15", unit: "mm", label: { en: "Belt width", zh: "带宽" }, desc: { en: "The toothed part is 1 mm wider, as on MISUMI pulleys.", zh: "齿部比皮带宽 1 mm，和米思米同步轮一样。" } },
      { key: "FIT", default: "0.2", range: "−0.1 – 0.3", unit: "mm", label: { en: "Groove fit", zh: "齿槽余量" }, desc: { en: "Widens every groove for printing; move in 0.1 steps.", zh: "为打印加宽每个齿槽；每次调 0.1。" } },
      { key: "FLANGES", default: "both", range: "both / bottom / none", unit: "", label: { en: "Flanges", zh: "挡边" }, desc: { en: "Outside diameter + 5 mm, 1.5 mm thick: they keep the belt on.", zh: "外径 + 5 mm、厚 1.5 mm：防止皮带跑偏脱落。" } },
      { key: "BORE_D", default: "5", range: "2 – 8", unit: "mm", label: { en: "Bore", zh: "孔径" }, desc: { en: "Shaft size; 0.15 mm of print clearance is added. 5 for NEMA 17 motors.", zh: "轴径，另加 0.15 mm 打印余量。NEMA 17 电机用 5。" } },
      { key: "HUB", default: "hub", range: "hub / none", unit: "", label: { en: "Hub", zh: "轮毂" }, desc: { en: "None makes an idler: just the toothed body and flanges.", zh: "选 none 就是惰轮：只有齿部和挡边。" } },
      { key: "SET_SCREWS", default: "2", range: "0 – 2", unit: "", label: { en: "Set screws", zh: "顶丝" }, desc: { en: "In the hub, 90° apart, with captive nut traps; M3 up to a 5 mm bore, M4 above.", zh: "在轮毂上，相隔 90°，带内嵌螺母槽；5 mm 以下孔用 M3，以上用 M4。" } },
    ],
    copy: {
      en: {
        name: "GT2 Pulley Generator",
        title: "GT2 Pulley Generator — Flanges, Hub & Set Screws (STL / STEP) | Forgent3D",
        description: "Generate GT2 timing pulleys for 2 mm or 3 mm belts: any tooth count, belt width, flanges, a 2–8 mm bore and a hub with set screws in captive nuts, plus a groove-fit setting. Free STL / STEP.",
        h1: "GT2 pulley generator for 3D printers and small CNC",
        intro: "Choose the tooth count, belt width and bore — the outside diameter comes out exactly as on aluminium GT2 pulleys (20 teeth: 12.22 mm), with flanges, a hub and two set screws in captive nut traps. Gates doesn't publish the GT2 groove, so each groove is built from the belt's published tooth shape, with a fit setting for your printer.",
        whyPoints: [
          "Outside diameter = pitch diameter − 2 × 0.254, checked against MISUMI, SDP/SI and Adafruit pulleys",
          "Grooves from the published GT2 belt tooth, plus a fit setting you tune 0.1 mm at a time",
          "Flanges at outside diameter + 5, a hub with two set screws 90° apart in captive nuts",
          "Idler mode: no hub, just the toothed body and flanges",
        ],
        faqs: [
          { q: "What is the smallest GT2 pulley worth printing?", a: "This generator goes down to 16 teeth. Below about 20 the belt has few teeth in mesh, and the pulley's tooth tips are only a few tenths of a millimetre wide at any tooth count — about one 0.4 mm line — so many makers print 20 or more." },
          { q: "How do I print a GT2 pulley well?", a: "Flat on the bed, flange down, no supports; 0.1–0.16 mm layers for the teeth, external perimeters first, at least 4 walls. PETG, ABS, ASA or nylon; PLA for light loads only." },
          { q: "What steps/mm does a 20-tooth pulley need?", a: "One turn moves teeth × 2 mm of belt: 40 mm for 20 teeth. A 200-step motor at 16 microsteps makes 3200 steps per turn, so 3200 / 40 = 80 steps/mm." },
        ],
      },
      zh: {
        name: "同步带轮生成器",
        title: "同步带轮生成器 — GT2 同步轮带挡边、轮毂和顶丝，在线导出 STL / STEP | Forgent3D",
        description: "在线同步带轮生成器：GT2 2 mm / 3 mm 带型，齿数、带宽、挡边、2–8 mm 轴孔、带顶丝和内嵌螺母的轮毂都可调，还有齿槽余量设置，免费导出 STL / STEP。",
        h1: "同步带轮生成器：3D 打印机和小型 CNC 用的 GT2 同步轮",
        intro: "选齿数、带宽和孔径——外径和铝制 GT2 同步轮完全一样（20 齿：12.22 mm），带挡边、轮毂和两颗配内嵌螺母的顶丝。Gates 没有公开 GT2 的轮齿槽形，所以每个齿槽按公开的皮带齿形来做，再留一个按你打印机调的余量。",
        whyPoints: [
          "外径 = 节圆直径 − 2 × 0.254，对过米思米、SDP/SI、Adafruit 的同步轮",
          "齿槽按公开的 GT2 皮带齿形做，另有按 0.1 mm 一档调的余量设置",
          "挡边外径 + 5 mm，轮毂上两颗相隔 90° 的顶丝配内嵌螺母",
          "惰轮模式：不要轮毂，只有齿部和挡边",
        ],
        faqs: [
          { q: "GT2 同步轮最小打几齿合适？", a: "这个生成器最小 16 齿。20 齿以下皮带啮合的齿数少，而且不管几齿，轮齿顶都只有零点几毫米宽——差不多一条 0.4 mm 的线——所以很多人打 20 齿以上。" },
          { q: "GT2 同步轮怎么打印效果好？", a: "平放、挡边朝下、不加支撑；齿部用 0.1–0.16 mm 层高、先打外圈、至少 4 圈墙。用 PETG、ABS、ASA 或尼龙；PLA 只适合轻载。" },
          { q: "20 齿同步轮的 steps/mm 是多少？", a: "转一圈走 齿数 × 2 mm 皮带：20 齿是 40 mm。200 步电机 16 细分一圈 3200 步，所以 3200 / 40 = 80 steps/mm。" },
        ],
      },
    },
  },
  {
    slug: "shaft-coupling-generator",
    modelDir: "shaft-coupling",
    icon: "⊜",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { BORE_1: "6.35", BORE_2: "8" }, label: { en: "6.35 mm (1/4\") to 8 mm, clamp", zh: "6.35 mm（1/4\"）转 8 mm，夹紧式" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Exports as 36 exact faces — 27 planes and 9 true cylinders (both bores, the outside, the screw holes and counterbores) — so CAD reads each bore's diameter and the screw positions directly.",
      ],
      zh: [
        "导出为 36 个精确面——27 个平面、9 个真圆柱面（两个孔、外圆、螺丝孔和沉头孔）——在 CAD 里能直接量出两个孔径和螺丝位置。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I print a coupler for a NEMA 17 motor (5 mm) and a T8 lead screw (8 mm)?", a: "https://www.forgent3d.com/en/generators/shaft-coupling-generator?BORE_1=5&BORE_2=8 is exactly that: a rigid 20 × 25 mm clamp coupler with an M3 screw and nut per shaft. Print it standing up in PETG, 4 perimeters, at least 35 % infill." },
        { q: "My printed coupler slips on the motor shaft. What helps?", a: "Print it in PETG rather than PLA (a warm stepper shaft softens PLA at 50–60 °C, PETG at 70–80 °C), use the clamp rather than set screws — or set screws 90° apart: https://www.forgent3d.com/en/generators/shaft-coupling-generator?FASTENING=set-screws — and lower CLEARANCE if the bore is loose. For a D-shaped motor shaft, press “AI edit” and give it your shaft's flat." },
      ],
      zh: [
        { q: "怎样打印一个连接 NEMA 17 电机（5 mm）和 T8 丝杆（8 mm）的联轴器？", a: "https://www.forgent3d.com/zh/generators/shaft-coupling-generator?BORE_1=5&BORE_2=8 就是：20 × 25 mm 的刚性夹紧式联轴器，每根轴一颗 M3 螺丝加螺母。竖着打印，用 PETG，4 圈墙，填充至少 35 %。" },
        { q: "打印的联轴器在电机轴上打滑，怎么办？", a: "用 PETG 别用 PLA（电机轴发热，PLA 50–60 °C 就软，PETG 是 70–80 °C），用夹紧式而不是顶丝——或者顶丝相隔 90°：https://www.forgent3d.com/zh/generators/shaft-coupling-generator?FASTENING=set-screws ——孔松就把 CLEARANCE 调小。电机轴是 D 形的话，点「AI 修改」告诉它你轴上切平面的尺寸。" },
      ],
    },
    // Evidence: generator-models/shaft-coupling/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["shaft coupling generator", "5mm to 8mm coupler stl", "rigid shaft coupler 3d print", "lead screw coupler stl"],
      zh: ["联轴器生成器", "5转8联轴器 STL", "3d打印联轴器", "丝杆联轴器 3d打印"],
    },
    params: [
      { key: "BORE_1", default: "5", range: "3 – 14", unit: "mm", label: { en: "Bore 1 (motor)", zh: "孔 1（电机侧）" }, desc: { en: "5 for a NEMA 17 motor.", zh: "NEMA 17 电机是 5。" } },
      { key: "BORE_2", default: "8", range: "3 – 14", unit: "mm", label: { en: "Bore 2 (lead screw)", zh: "孔 2（丝杆侧）" }, desc: { en: "8 for a T8 lead screw.", zh: "T8 丝杆是 8。" } },
      { key: "CLEARANCE", default: "0.3", range: "0 – 0.6", unit: "mm", label: { en: "Bore clearance", zh: "孔径余量" }, desc: { en: "Added to both bores: printed holes come out small.", zh: "两个孔都加上：打印的孔会偏小。" } },
      { key: "FASTENING", default: "clamp", range: "clamp / set-screws", unit: "", label: { en: "Fastening", zh: "紧固方式" }, desc: { en: "Clamp: a slit and one screw per shaft. Set screws: two per shaft, 90° apart.", zh: "夹紧：开缝，每根轴一颗螺丝。顶丝：每根轴两颗，相隔 90°。" } },
      { key: "LENGTH", default: "25", range: "20 – 40", unit: "mm", label: { en: "Length", zh: "长度" }, desc: { en: "Each shaft goes in half the length.", zh: "每根轴插入一半长度。" } },
      { key: "SCREW", default: "M3", range: "M2.5 / M3 / M4", unit: "", label: { en: "Screw", zh: "螺丝" }, desc: { en: "With a nut in a hex trap; the body grows past 20 mm when bore and screw need it.", zh: "配六角槽里的螺母；孔和螺丝需要时，外径会从 20 mm 加大。" } },
    ],
    copy: {
      en: {
        name: "Shaft Coupling Generator",
        title: "Shaft Coupling Generator — 5 × 8 mm Motor to Lead Screw Couplers (STL / STEP) | Forgent3D",
        description: "Generate rigid shaft couplings: any two bores from 3 to 14 mm, split clamp or set screws, M2.5–M4 with captive nuts, bore clearance for printing. Free STL / STEP.",
        h1: "Shaft coupling generator: rigid couplers for motors and lead screws",
        intro: "Enter the two shaft sizes — 5 mm motor to 8 mm lead screw by default — and get a rigid coupler with a split clamp or set screws, nuts held in printed traps. Rigid on purpose: on a 3D printer's Z axis a flexible coupler can show up as banding, and printed helical beams are too weak to be worth it.",
        whyPoints: [
          "Any two bores from 3 to 14 mm, plus a clearance setting for printed holes",
          "Split clamp like BuildModHack's and Ruland's one-piece couplings, or two set screws 90° apart",
          "Hex nut traps and counterbores sized for M2.5, M3 or M4",
          "20 × 25 mm by default, growing only when the bore and screw need more wall",
        ],
        faqs: [
          { q: "Rigid or flexible coupler?", a: "Rigid for a 3D printer's Z axis: Ooznest notes that a flexible coupler there can reduce print quality, and spiral couplers are not meant to carry the axial load. Flexible couplers make up for misalignment on machines that need it — a printed rigid one does not." },
          { q: "How much bore clearance do I need?", a: "Start at the default +0.3 mm (5.3 for a 5 mm shaft): makers use +0.25–0.4 on small printed holes, PETG a little more than PLA. Too loose and it slips, too tight and it splits." },
          { q: "How should I print it?", a: "Standing up, so the bores print as round vertical holes; 4 perimeters, at least 35 % infill, PETG. No supports needed." },
        ],
      },
      zh: {
        name: "联轴器生成器",
        title: "联轴器生成器 — 5 转 8 mm 电机与丝杆刚性联轴器，在线导出 STL / STEP | Forgent3D",
        description: "在线联轴器生成器：两个孔径 3–14 mm 任选，夹紧式或顶丝式，M2.5–M4 配内嵌螺母，孔径余量方便打印，免费导出 STL / STEP。",
        h1: "联轴器生成器：电机和丝杆用的刚性联轴器",
        intro: "输入两根轴的尺寸——默认 5 mm 电机轴转 8 mm 丝杆——得到一个夹紧式或顶丝式的刚性联轴器，螺母卡在打印出来的槽里。特意做成刚性：3D 打印机的 Z 轴上，弹性联轴器可能带来层纹，打印的螺旋式弹性联轴器又太弱。",
        whyPoints: [
          "两个孔径 3–14 mm 任选，另有打印孔的余量设置",
          "夹紧式（类似 BuildModHack 和 Ruland 一体式），或两颗相隔 90° 的顶丝",
          "六角螺母槽和沉头孔按 M2.5、M3、M4 定尺寸",
          "默认 20 × 25 mm，孔和螺丝需要更厚的壁时才加粗",
        ],
        faqs: [
          { q: "用刚性还是弹性联轴器？", a: "3D 打印机 Z 轴用刚性：Ooznest 提到 Z 轴用弹性联轴器可能降低打印质量，螺旋式联轴器也不是用来承受轴向力的。弹性联轴器是给需要补偿偏心的机器用的——打印的刚性件做不到这一点。" },
          { q: "孔径余量留多少？", a: "从默认的 +0.3 mm 开始（5 mm 轴打 5.3）：小孔大家一般留 +0.25–0.4，PETG 比 PLA 稍多一点。太松会打滑，太紧会裂。" },
          { q: "怎么打印？", a: "竖着打，孔是竖直的圆孔；4 圈墙，填充至少 35 %，用 PETG，不用支撑。" },
        ],
      },
    },
  },
  {
    slug: "desk-grommet-generator",
    modelDir: "desk-grommet",
    icon: "◎",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { HOLE_D: "50", SLOT_WIDTH: "17" }, label: { en: "50 mm hole, 17 mm cable slot", zh: "开孔 50 mm，出线口 17 mm" } },
    // Common hole sizes: 35 / 50 / 60 / 80 saws, 53 in Chinese listings, 2½" (63.5) US desks; slots ≈ a third of the hole.
    sizes: [grommetSize(35, 12), grommetSize(50, 17), grommetSize(53, 18), grommetSize(60, 20), grommetSize(63.5, 21.5), grommetSize(80, 27)],
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Exports as two exact solids, sleeve and cap, with 21 faces — 10 planes, 8 true cylinders (the sleeve, the flange, the bore and the counterbore the cap sits in; the cap's rim, its skirt and the round end of the slot) and 3 cones (the chamfers) — so furniture CAD reads the hole size and the cap seat directly.",
      ],
      zh: [
        "导出为两个精确实体——套管和盖板——共 21 个面：10 个平面、8 个真圆柱面（套管外圆、法兰、内孔和放盖板的沉台，盖板外圆、裙边和出线口的圆头）、3 个圆锥面（倒角）。在家具 CAD 里能直接量出孔径和盖板的位置。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a cable grommet for a 50 mm desk hole?", a: "Open https://www.forgent3d.com/en/generators/desk-grommet-generator?HOLE_D=50&SLOT_WIDTH=17 — a 49.7 mm sleeve for the 50 mm hole, a 62 mm flange and a cap with a 17 mm cable slot. Export STL to print it, or STEP for CAD." },
        { q: "Can I make a blank cover, or a sleeve that reaches through a 25 mm desktop?", a: "Yes: CAP=solid gives a cap without a slot and DEPTH=25 makes the sleeve end flush with the underside — https://www.forgent3d.com/en/generators/desk-grommet-generator?CAP=solid&DEPTH=25. For any desk 16 mm or thicker the default 16 mm sleeve is enough; vendor grommets are made the same way." },
      ],
      zh: [
        { q: "桌子上开的是 50 mm 的孔，怎么做穿线孔盖？", a: "打开 https://www.forgent3d.com/zh/generators/desk-grommet-generator?HOLE_D=50&SLOT_WIDTH=17 就是：套管外径 49.7 mm、法兰 62 mm、盖板带 17 mm 宽的出线口。导出 STL 打印，或者导出 STEP 放进 CAD。" },
        { q: "能做不开口的封盖吗？桌板 25 mm 厚，套管能正好穿透吗？", a: "可以：CAP=solid 是不开口的盖板，DEPTH=25 让套管正好和桌板底面齐平——https://www.forgent3d.com/zh/generators/desk-grommet-generator?CAP=solid&DEPTH=25 。桌板 16 mm 以上的话，套管深度保持默认的 16 就够，成品孔盖也是这么做的。" },
      ],
    },
    // Evidence: generator-models/desk-grommet/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["desk grommet generator", "cable grommet stl", "60mm desk grommet", "desk cable hole cover"],
      zh: ["穿线孔盖生成器", "电脑桌穿线孔盖 3d打印", "50mm 穿线孔盖", "桌面线孔盖 STL"],
    },
    params: [
      { key: "HOLE_D", default: "60", range: "30 – 100", unit: "mm", label: { en: "Hole diameter", zh: "开孔直径" }, desc: { en: "The drilled hole as measured, not the saw size.", zh: "实测的孔径，不是开孔器的标称尺寸。" } },
      { key: "DEPTH", default: "16", range: "8 – 45", unit: "mm", label: { en: "Sleeve depth", zh: "套管深度" }, desc: { en: "How far the sleeve reaches below the desktop; at most the desk thickness.", zh: "套管伸到桌面以下的长度，不超过桌板厚度。" } },
      { key: "RIM", default: "6", range: "3 – 15", unit: "mm", label: { en: "Rim overhang", zh: "法兰外沿" }, desc: { en: "How far the flange laps past the hole on each side.", zh: "法兰每边盖过孔边的宽度。" } },
      { key: "CLEARANCE", default: "0.3", range: "0 – 1", unit: "mm", label: { en: "Fit clearance", zh: "配合余量" }, desc: { en: "How much smaller than the hole the sleeve comes out.", zh: "套管比孔小多少。" } },
      { key: "CAP", default: "slot", range: "slot / solid / none", unit: "", label: { en: "Cap", zh: "盖板" }, desc: { en: "With a cable slot, solid, or no cap.", zh: "带出线口、无口封盖，或不要盖。" } },
      { key: "SLOT_WIDTH", default: "20", range: "10 – 40", unit: "mm", label: { en: "Slot width", zh: "出线口宽度" }, desc: { en: "At most two thirds of the hole; a third is typical.", zh: "最多为孔径的三分之二，常见是三分之一。" } },
    ],
    copy: {
      en: {
        name: "Desk Grommet Generator",
        title: "Desk Grommet Generator — Cable Hole Covers, 30–100 mm (STL / STEP) | Forgent3D",
        description: "Generate a desk cable grommet for your hole: a press-fit sleeve and a flush cap with a cable slot, a solid cap or no cap. Enter the measured hole, 30–100 mm. Free STL / STEP.",
        h1: "Desk grommet generator: a sleeve and cap for any desk cable hole",
        intro: "Measure the drilled hole — 60 mm by default — and get the two pieces vendors sell as a grommet set: a flanged sleeve that presses into the hole and a cap that drops in flush with the flange, with a U-slot for the cables, a solid top or no cap at all. Set the sleeve depth to suit the desktop, then export STL to print or STEP for furniture CAD.",
        whyPoints: [
          "Any measured hole from 30 to 100 mm, with a clearance setting for the press fit",
          "Cap with a cable slot, solid cap or sleeve only — the cap sits flush, as on Mockett, Häfele and Sugatsune sets",
          "Sleeve depth 8–45 mm: 16 mm suits any desk 16 mm or thicker, or match it to your desktop",
          "Both parts lie flat the way they print: no supports",
        ],
        faqs: [
          { q: "What size do I enter: the hole saw or the hole?", a: "The hole as measured. Saws cut a little oversize — one printed “70 mm” grommet turned out to fit a 65 mm hole — so put a caliper across the hole and enter that. The sleeve comes out 0.3 mm under it by default." },
          { q: "How tight should the sleeve be?", a: "Makers aim 0.2–0.5 mm under the hole so the sleeve slides in without forcing; the default is 0.3. If it won't go in, raise the clearance by 0.1; if it falls out, lower it by 0.1. A hole that came out oversize can still be saved with a thin bead of sealant around the sleeve." },
          { q: "How should I print it?", a: "As the parts lie: the sleeve flange-down and the cap top-down, both without supports. PLA is what most printed grommets use; ABS or PETG give a slightly grippier press fit. Use some infill — around 15 % rather than 0 % — since the cap takes repeated pulls of cables." },
        ],
        sizes: {
          title: "Common hole sizes",
          intro: "Flange = hole + 12 mm (a 6 mm rim each side); the cable opening is the sleeve's bore, hole − 5.1 mm at the default clearance and 2.4 mm wall; slots are about a third of the hole, as on vendor caps. Each row opens the generator on that size.",
          head: ["Hole Ø", "Flange Ø", "Opening Ø", "Slot", ""],
          open: "Open",
          note: "35, 50, 60 and 80 mm are the common hole-saw sizes; Chinese listings name 50 mm most often, then 53 mm, and 63.5 mm (2½\") is common on US office desks.",
        },
      },
      zh: {
        name: "穿线孔盖生成器",
        title: "穿线孔盖生成器 — 电脑桌开孔 30–100 mm 任意尺寸，在线导出 STL / STEP | Forgent3D",
        description: "在线生成电脑桌穿线孔盖：输入实测开孔直径（30–100 mm），得到压入式套管和齐平的盖板，盖板可选带出线口、无口封盖或不要盖，免费导出 STL / STEP。",
        h1: "穿线孔盖生成器：任意开孔尺寸的套管和盖板",
        intro: "量好桌面上的开孔——默认 60 mm——得到成套的两件：带法兰、压进孔里的套管，和放进去与法兰齐平的盖板。盖板可以带 U 形出线口、做成无口封盖，或者不要盖。套管深度按桌板调，导出 STL 拿去打印，或者导出 STEP 放进家具设计里。",
        whyPoints: [
          "实测开孔 30–100 mm 任意尺寸，另有压入配合的余量设置",
          "带出线口的盖、无口封盖或只要套管——盖板和法兰齐平，和 Mockett、海福乐、Sugatsune 的成品一样",
          "套管深度 8–45 mm：16 mm 适合 16 mm 以上的任何桌板，也可以设成桌板厚度",
          "两件都按打印的姿态平放，不用支撑",
        ],
        faqs: [
          { q: "填开孔器的尺寸还是孔的尺寸？", a: "填实测的孔。开孔器切出来的孔往往偏大——有人把标着 70 mm 的打印孔盖装进了 65 mm 的孔——所以用卡尺量一下孔再填。套管默认比孔小 0.3 mm。" },
          { q: "套管要多紧？", a: "做孔盖的人一般让套管比孔小 0.2–0.5 mm，能推进去又不用硬塞，默认 0.3。推不进去就把余量加 0.1，会掉出来就减 0.1。孔开大了，也可以在套管外面打一圈薄薄的密封胶。" },
          { q: "怎么打印？", a: "按模型里的姿态打：套管法兰朝下，盖板正面朝下，都不用支撑。打印的孔盖大多用 PLA；想让套管压得更紧一点可以用 ABS 或 PETG。填充别用 0 %，15 % 左右，盖板要经得起反复拽线。" },
        ],
        sizes: {
          title: "常用开孔尺寸速查",
          intro: "法兰外径 = 孔径 + 12 mm（每边 6 mm）；出线的通孔是套管内径，默认余量和 2.4 mm 壁厚下 = 孔径 − 5.1 mm；出线口宽度取孔径的三分之一左右，和成品盖板一样。点每一行直接打开那个尺寸。",
          head: ["开孔 Ø", "法兰 Ø", "通孔 Ø", "出线口", ""],
          open: "打开",
          note: "35、50、60、80 mm 是最常见的开孔器尺寸；国内商品标题里最多的是 50 mm，也常见 53 mm；美国办公桌常见 63.5 mm（2½ 英寸）。",
        },
      },
    },
  },
  {
    slug: "18650-battery-holder-generator",
    modelDir: "battery-holder",
    icon: "▤",
    family: "electronics",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { CELL: "21700", LAYOUT: "staggered" }, label: { en: "21700 cells, staggered (honeycomb)", zh: "21700 电芯，错位（蜂窝）排列" } },
    // The three cell formats at the default clearance (0.3) and wall (1.5): bore = Ø + 0.3, pitch = bore + 1.5.
    sizes: [cellSize(18650, 18.4), cellSize(21700, 21.5), cellSize(26650, 26.4)],
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Each 3 × 5 plate exports as one exact solid of 188 faces — 158 planes and 30 true cylinders (the 15 cell bores and the 15 strip windows) — so pitch, bore and window read directly in CAD when you lay out the pack around it.",
      ],
      zh: [
        "每块 3 × 5 的支架导出为一个精确实体，188 个面：158 个平面、30 个真圆柱面（15 个电芯孔和 15 个镍片窗口）。在 CAD 里围着它排电池组时，间距、孔径和窗口都能直接量。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I print cell holders for a 3S5P 18650 pack?", a: "Open https://www.forgent3d.com/en/generators/18650-battery-holder-generator?ROWS=3&COLS=5 — a top and a bottom plate for 15 cells on the common 20.2 mm pitch, Ø18.7 bores and 8 mm channels for the nickel strip. Print both, press the cells into one and turn the other over onto them." },
        { q: "My pack is bigger than 3 × 5. Can I make one plate for 13S4P?", a: "One plate holds at most 3 × 5 cells; print several. With FRAME=0 the plates end exactly half a pitch past the outer cells, so they butt together on the same pitch: https://www.forgent3d.com/en/generators/18650-battery-holder-generator?ROWS=3&COLS=5&FRAME=0" },
      ],
      zh: [
        { q: "怎样打印 3 串 5 并 18650 电池组的支架？", a: "打开 https://www.forgent3d.com/zh/generators/18650-battery-holder-generator?ROWS=3&COLS=5 就是：15 节电芯的上下两片支架，常见的 20.2 mm 间距、Ø18.7 孔，外侧带 8 mm 宽的镍片槽。两片都打，电芯压进一片，另一片翻过来扣上。" },
        { q: "电池组比 3 × 5 大，能做 13 串 4 并的一整片吗？", a: "一片最多 3 × 5 节，大的电池组打几片拼起来。FRAME=0 时每片的边缘正好在最外一排电芯外半个间距，几片并排还是同一个间距：https://www.forgent3d.com/zh/generators/18650-battery-holder-generator?ROWS=3&COLS=5&FRAME=0" },
      ],
    },
    // Evidence: generator-models/battery-holder/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["18650 battery holder generator", "18650 cell spacer stl", "21700 battery holder 3d print", "battery pack cell holder parametric"],
      zh: ["18650 电池支架生成器", "18650 支架 3d打印", "21700 电池支架 STL", "电池组 拼接支架 错位"],
    },
    params: [
      { key: "CELL", default: "18650", range: "18650 / 21700 / 26650", unit: "", label: { en: "Cell", zh: "电芯" }, desc: { en: "18.4 / 21.5 / 26.4 mm nominal diameter.", zh: "标称直径 18.4 / 21.5 / 26.4 mm。" } },
      { key: "CLEARANCE", default: "0.3", range: "0 – 0.6", unit: "mm", label: { en: "Bore clearance", zh: "孔径余量" }, desc: { en: "Added to the cell diameter: 18.7 mm bores for 18650.", zh: "加在电芯直径上：18650 的孔是 18.7 mm。" } },
      { key: "LAYOUT", default: "square", range: "square / staggered", unit: "", label: { en: "Layout", zh: "排列" }, desc: { en: "Square grid, or staggered (honeycomb) rows shifted half a pitch.", zh: "方阵，或隔排错开半个间距的错位（蜂窝）排列。" } },
      { key: "ROWS", default: "3", range: "1 – 3", unit: "", label: { en: "Rows", zh: "行数" }, desc: { en: "Up to 3 per plate; print several plates for bigger packs.", zh: "每片最多 3 行，大电池组打几片。" } },
      { key: "COLS", default: "5", range: "1 – 5", unit: "", label: { en: "Columns", zh: "列数" }, desc: { en: "Up to 5 per plate.", zh: "每片最多 5 列。" } },
      { key: "WALL", default: "1.5", range: "1 – 3", unit: "mm", label: { en: "Wall between cells", zh: "孔间壁厚" }, desc: { en: "1.5 gives the common 20.2 mm pitch for 18650.", zh: "1.5 时 18650 是常见的 20.2 mm 间距。" } },
      { key: "WIRE_HOLES", default: "off", range: "on / off", unit: "", label: { en: "Balance-wire holes", zh: "均衡线孔" }, desc: { en: "Ø3 holes between cells for BMS leads.", zh: "电芯之间 Ø3 的孔，走 BMS 均衡线。" } },
      { key: "HEIGHT", default: "10", range: "5 – 40", unit: "mm", label: { en: "Holder height", zh: "支架高度" }, desc: { en: "How deep each cell sits in the plate.", zh: "电芯插进支架的深度。" } },
      { key: "FRAME", default: "0", range: "0 – 3", unit: "mm", label: { en: "Outer frame", zh: "外框" }, desc: { en: "0 lets plates butt together on the pitch.", zh: "0 时几片可以按同一间距拼接。" } },
      { key: "END", default: "open", range: "open / closed", unit: "", label: { en: "End", zh: "端面" }, desc: { en: "Open with a lip for spot welding, or a closed floor for storage.", zh: "开口带挡边（点焊用），或封底（收纳用）。" } },
      { key: "LIP", default: "3", range: "1.5 – 4", unit: "mm", label: { en: "Lip overlap", zh: "挡边宽度" }, desc: { en: "How far the lip laps over the cell end; the rest is the strip window.", zh: "挡边压住电芯端面的宽度，中间留给镍片。" } },
      { key: "STRIP_WIDTH", default: "8", range: "0 – 10", unit: "mm", label: { en: "Strip channel width", zh: "镍片槽宽" }, desc: { en: "0.8 mm deep channels for 7–8 mm nickel strip; 0 for a flat face.", zh: "0.8 mm 深的槽，放 7–8 mm 宽的镍片；0 为平面。" } },
    ],
    copy: {
      en: {
        name: "18650 Battery Holder Generator",
        title: "18650 Battery Holder Generator — Cell Spacers for DIY Packs (STL / STEP) | Forgent3D",
        description: "Generate 18650, 21700 or 26650 cell holders for spot-welded packs: square or staggered, nickel-strip channels, balance-wire holes, top and bottom plates. Free STL / STEP.",
        h1: "18650 battery holder generator: cell spacers for building packs",
        intro: "Pick the cell and the grid — 3 × 5 18650 cells by default — and get the pair of plates a pack is built in: each cell sits in a bore with a lip on the outside, the lip leaves a window for the nickel strip and an 8 mm channel guides the strip across the plate. The bottom plate is laid out so it lines up when you turn it over onto the cells.",
        whyPoints: [
          "18650, 21700 and 26650 cells, square grid or staggered (honeycomb) rows",
          "20.2 mm pitch by default, the common bracket and pre-punched strip pitch, never under 1 mm between cells",
          "Channels for 7–8 mm nickel strip, optional balance-wire holes, open for welding or closed for storage",
          "Plates tile on the pitch for packs bigger than one plate",
        ],
        faqs: [
          { q: "Which filament should I print it in?", a: "PETG, ASA or ABS. Cells are allowed to discharge at up to 60 °C ambient with the can reaching 75 °C, and printed PLA starts to give at about 60 °C — fine for storage, not inside a working pack." },
          { q: "Why can't I set the 19 mm pitch some staggered holders use?", a: "Samsung's cell datasheets ask for more than 1 mm between cells, and a 19 mm pitch leaves about half that. The smallest wall here (1 mm plus the bore clearance) keeps that spacing; the default 20.2 mm also matches the pre-punched nickel strip sold for that pitch." },
          { q: "How do the two plates go together?", a: "Press the cells into one plate, lip side out, then turn the second plate over onto the other ends: it is generated as the mirror image, so the bores line up even for staggered layouts with an even number of rows." },
        ],
        sizes: {
          title: "Cell formats",
          intro: "Bore = cell diameter + 0.3 mm clearance; pitch = bore + 1.5 mm wall, both at the defaults. Each row opens the generator for that cell.",
          head: ["Cell", "Cell Ø", "Bore Ø", "Pitch", ""],
          open: "Open",
          note: "Cells vary by maker: 18650s run 18.4–18.6 mm at most, protected cells wider. Raise the clearance if yours don't go in.",
        },
      },
      zh: {
        name: "18650 电池支架生成器",
        title: "18650 电池支架生成器 — 电池组拼接支架，方阵或错位，在线导出 STL / STEP | Forgent3D",
        description: "在线生成 18650 / 21700 / 26650 电池支架：方阵或错位（蜂窝）排列，镍片槽、均衡线孔，上下两片，适合点焊组装电池组，免费导出 STL / STEP。",
        h1: "18650 电池支架生成器：组装电池组用的电芯支架",
        intro: "选电芯和排数——默认 3 × 5 节 18650——得到组装电池组用的上下两片支架：每节电芯插进一个孔，外侧有挡边，挡边中间留出镍片窗口，8 mm 宽的槽引着镍片走过整片。下面那片按翻过来扣上的方向生成，孔位正好对上。",
        whyPoints: [
          "18650、21700、26650 电芯，方阵或错位（蜂窝）排列",
          "默认 20.2 mm 间距，和常见支架、预冲孔镍片一致；电芯间距始终大于 1 mm",
          "7–8 mm 镍片槽、可选均衡线孔，开口点焊用或封底收纳用",
          "超过一片的电池组可以几片按间距拼接",
        ],
        faqs: [
          { q: "用什么材料打？", a: "PETG、ASA 或 ABS。电芯允许在 60 °C 环境下放电、外壳到 75 °C，打印的 PLA 在 60 °C 左右就开始变软——收纳可以，放进工作中的电池组不行。" },
          { q: "为什么不能设成有些错位支架的 19 mm 间距？", a: "三星的电芯规格书要求电芯之间留 1 mm 以上，19 mm 间距只剩一半左右。这里最小的壁厚（1 mm 加上孔径余量）保证这个间距；默认的 20.2 mm 也正好对上按这个间距预冲孔的镍片。" },
          { q: "两片怎么装？", a: "把电芯压进一片（挡边朝外），另一片翻过来扣在电芯另一端：它是按镜像生成的，错位排列、偶数行时孔位也对得上。" },
        ],
        sizes: {
          title: "电芯规格",
          intro: "孔径 = 电芯直径 + 0.3 mm 余量；间距 = 孔径 + 1.5 mm 壁厚，都按默认值。点每一行打开那种电芯。",
          head: ["电芯", "电芯 Ø", "孔 Ø", "间距", ""],
          open: "打开",
          note: "不同厂家的电芯直径不一样：18650 最大 18.4–18.6 mm，带保护板的更粗。塞不进去就把余量调大。",
        },
      },
    },
  },
  {
    slug: "pipe-clamp-generator",
    modelDir: "pipe-clamp",
    icon: "⊓",
    family: "fluid",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { TYPE: "saddle", PIPE_OD: "25" }, label: { en: "Two-hole saddle for a 25 mm pipe", zh: "25 mm 管子用的骑马卡" } },
    // DIN 3015-1 size per pipe, picked by the model's rule (STAUFF table; a bore that leaves < 0.5 mm beside the M6
    // hole moves up a size), at the default 0.4 clearance.
    sizes: [pipeSize(12, 1, 37, 20, 27), pipeSize(16, 2, 42, 26, 33), pipeSize(20, 3, 50, 33, 36), pipeSize(25, 3, 50, 33, 36), pipeSize(32, 4, 59, 40, 42), pipeSize(40, 5, 71, 52, 58), pipeSize(50, 6, 86, 66, 66), pipeSize(63, 7, 121, 94, 93)],
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "A DIN 3015 jaw exports as one exact solid of 10 faces — 7 planes and 3 true cylinders (the half bore and the two M6 holes) — the same jaw twice in the file. The saddle is 18 faces: 12 planes, 4 cylinders and 2 cones for the countersinks.",
      ],
      zh: [
        "一块 DIN 3015 夹块导出为一个精确实体，10 个面：7 个平面、3 个真圆柱面（半圆孔和两个 M6 孔），文件里是同一块用两次。骑马卡是 18 个面：12 个平面、4 个圆柱面、2 个沉头锥面。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a DIN 3015 clamp for a 20 mm tube?", a: "Open https://www.forgent3d.com/en/generators/pipe-clamp-generator?PIPE_OD=20 — the two plastic jaws of a size 3 light-series clamp: 50 × 30 mm, M6 bolts 33 mm apart, a 20.4 mm bore. The steel cover and weld plates and the bolts are bought parts; export STEP to place it in CAD." },
        { q: "I need a two-hole strap for 25 mm conduit with M4 screws.", a: "https://www.forgent3d.com/en/generators/pipe-clamp-generator?TYPE=saddle&PIPE_OD=25&SCREW=M4 — a U strap 25 mm wide with countersunk M4 holes in both tabs. It prints on its side so the layers run around the arch." },
      ],
      zh: [
        { q: "20 mm 的管子，怎么做一个 DIN 3015 管夹？", a: "打开 https://www.forgent3d.com/zh/generators/pipe-clamp-generator?PIPE_OD=20 就是：3 号轻型塑料管夹的上下两块夹块，50 × 30 mm，两个 M6 螺栓孔中心距 33 mm，孔径 20.4 mm。钢制盖板、焊接底板和螺栓是外购件；导出 STEP 可以直接放进 CAD。" },
        { q: "25 mm 的线管，要一个 M4 螺丝固定的骑马卡。", a: "https://www.forgent3d.com/zh/generators/pipe-clamp-generator?TYPE=saddle&PIPE_OD=25&SCREW=M4 ：25 mm 宽的 U 形管卡，两边耳片各一个 M4 沉头孔。侧放打印，层纹顺着拱形走。" },
      ],
    },
    // Evidence: generator-models/pipe-clamp/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["pipe clamp generator", "din 3015 pipe clamp stl", "pipe saddle clamp 3d print", "two hole pipe strap stl"],
      zh: ["管夹生成器", "DIN 3015 塑料管夹 STEP", "液压管夹 3d打印", "骑马卡 管夹 STL"],
    },
    params: [
      { key: "PIPE_OD", default: "20", range: "6 – 101.6", unit: "mm", label: { en: "Pipe outside diameter", zh: "管外径" }, desc: { en: "Measure the pipe; for DIN 3015 it picks the clamp size.", zh: "量管子外径；DIN 3015 款按它选规格。" } },
      { key: "TYPE", default: "din3015", range: "din3015 / saddle", unit: "", label: { en: "Clamp type", zh: "管夹类型" }, desc: { en: "DIN 3015-1 plastic clamp jaws, or a two-hole saddle strap.", zh: "DIN 3015-1 塑料管夹夹块，或两孔骑马卡。" } },
      { key: "CLEARANCE", default: "0.4", range: "0 – 1", unit: "mm", label: { en: "Bore clearance", zh: "孔径余量" }, desc: { en: "Added to the pipe diameter; plastic pipe often measures a little over nominal.", zh: "加在管外径上；塑料管实测常比标称略大。" } },
      { key: "WIDTH", default: "25", range: "12 – 40", unit: "mm", label: { en: "Strap width (saddle)", zh: "管卡宽度（骑马卡）" }, desc: { en: "Along the pipe.", zh: "沿管子方向的宽度。" } },
      { key: "TAB", default: "14", range: "12 – 30", unit: "mm", label: { en: "Tab length (saddle)", zh: "耳片长度（骑马卡）" }, desc: { en: "Each screw tab beyond the arch.", zh: "拱形两侧每个螺丝耳片的长度。" } },
      { key: "SCREW", default: "M4", range: "M3 / M4 / M5", unit: "", label: { en: "Screw (saddle)", zh: "螺丝（骑马卡）" }, desc: { en: "ISO 273 medium clearance holes.", zh: "按 ISO 273 中等系列开过孔。" } },
      { key: "COUNTERSINK", default: "on", range: "on / off", unit: "", label: { en: "Countersunk holes (saddle)", zh: "沉头孔（骑马卡）" }, desc: { en: "Seats for ISO 10642 countersunk heads.", zh: "按 ISO 10642 沉头螺钉做沉孔。" } },
    ],
    copy: {
      en: {
        name: "Pipe Clamp Generator",
        title: "Pipe Clamp Generator — DIN 3015 Clamps & Saddle Straps (STL / STEP) | Forgent3D",
        description: "Pipe clamps for 6–101.6 mm pipe: DIN 3015-1 plastic clamp jaws sized from the standard table, or a two-hole saddle strap with countersunk holes. Free STL / STEP.",
        h1: "Pipe clamp generator: DIN 3015 clamp jaws and two-hole saddles",
        intro: "Enter the pipe's outside diameter — 20 mm by default — and get either the plastic jaws of a DIN 3015-1 light-series clamp, sized from the standard's table with M6 bolt holes, or a one-piece two-hole saddle strap for screwing a pipe or conduit to a wall. The DIN jaws stand apart by the standard's tension clearance, so tightening the bolts grips the pipe.",
        whyPoints: [
          "DIN 3015-1 sizes 1–8 picked from the pipe diameter: body length, bolt spacing and height from STAUFF's table",
          "Two-hole saddle strap with ISO 273 holes and ISO 10642 countersinks for M3–M5",
          "Bore clearance for pipe that measures over nominal",
          "Exact STEP for plant and machine CAD, STL for printing",
        ],
        faqs: [
          { q: "What do I need besides the printed jaws?", a: "A DIN 3015-1 clamp is the two jaws between a steel cover plate on top and a weld plate (or rail) underneath, held by two M6 bolts; size 3 uses M6 × 40. The plates and bolts are standard bought parts — the generator makes the plastic jaws." },
          { q: "How far apart should the clamps be?", a: "HYDAC's recommended spacing for light-series clamps grows with the pipe: 1.0 m up to 12.7 mm, 1.2 m to 22 mm, 1.5 m to 32 mm, 2.0 m to 38 mm, 2.7 m to 57 mm, 3.0 m to 75 mm." },
          { q: "Why is there a gap between the two jaws?", a: "That is DIN 3015's tension clearance (0.4–0.8 mm by size on STAUFF's bodies): the jaws touch the pipe before they touch each other, so tightening the bolts clamps the pipe. Leave it — don't sand the faces flat." },
        ],
        sizes: {
          title: "DIN 3015 sizes for common pipes",
          intro: "The size the generator picks at the default 0.4 mm clearance, with the jaw-pair length, M6 bolt spacing and height from STAUFF's table (all 30 mm wide). Each row opens the generator on that pipe.",
          head: ["Pipe Ø", "Size", "Length", "Bolt spacing", "Height", ""],
          open: "Open",
          note: "PPR water pipe: 20 (½\"), 25 (¾\"), 32 (1\"); a bore that would leave under 0.5 mm of plastic beside a bolt hole moves up one size.",
        },
      },
      zh: {
        name: "管夹生成器",
        title: "管夹生成器 — DIN 3015 塑料管夹与骑马卡，管外径 6–101.6 mm，在线导出 STL / STEP | Forgent3D",
        description: "在线生成管夹：管外径 6–101.6 mm 任意，DIN 3015-1 轻型塑料管夹按标准表选规格，或两孔骑马卡带沉头螺丝孔，水管、PVC 管、液压油管都能用，免费导出 STL / STEP。",
        h1: "管夹生成器：DIN 3015 塑料管夹和两孔骑马卡",
        intro: "输入管子外径——默认 20 mm——得到 DIN 3015-1 轻型管夹的两块塑料夹块（按标准表定尺寸，带 M6 螺栓孔），或者一体的两孔骑马卡，把水管、线管固定到墙上。DIN 夹块之间按标准留出预紧间隙，拧紧螺栓就夹住管子。",
        whyPoints: [
          "DIN 3015-1 的 1–8 号规格按管径自动选：夹块长度、螺栓间距和高度按 STAUFF 的标准表",
          "两孔骑马卡：按 ISO 273 开螺丝过孔、按 ISO 10642 做 M3–M5 沉头",
          "孔径余量，应对实测比标称略大的管子",
          "精确 STEP 给管路、设备 CAD 用，STL 拿去打印",
        ],
        faqs: [
          { q: "除了打印的夹块，还需要什么？", a: "一套 DIN 3015-1 管夹是两块夹块，上面一块钢制盖板，下面焊接底板（或导轨），用两颗 M6 螺栓穿起来，3 号用 M6 × 40。盖板、底板和螺栓都是标准外购件，生成器做的是塑料夹块。" },
          { q: "管夹隔多远装一个？", a: "HYDAC 给轻型管夹的推荐间距随管径变大：12.7 mm 以下 1.0 m，到 22 mm 1.2 m，到 32 mm 1.5 m，到 38 mm 2.0 m，到 57 mm 2.7 m，到 75 mm 3.0 m。" },
          { q: "两块夹块之间为什么有缝？", a: "这是 DIN 3015 的预紧间隙（STAUFF 按规格 0.4–0.8 mm）：夹块先碰到管子、再碰到彼此，所以拧紧螺栓能把管子夹紧。别把接合面磨平。" },
        ],
        sizes: {
          title: "常用管径对应的 DIN 3015 规格",
          intro: "默认 0.4 mm 余量下生成器选的规格，以及 STAUFF 标准表里的夹块总长、M6 螺栓间距和高度（宽度都是 30 mm）。点每一行直接打开那种管径。",
          head: ["管 Ø", "规格", "长度", "螺栓间距", "高度", ""],
          open: "打开",
          note: "PPR 水管：20（4 分）、25（6 分）、32（1 寸）；孔边离螺栓孔不到 0.5 mm 塑料时，自动换大一号。",
        },
      },
    },
  },
  {
    slug: "hex-bit-holder-generator",
    modelDir: "bit-holder",
    icon: "⬡",
    family: "storage",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { MOUNT: "wall", COLUMNS: "8", ROWS: "3" }, label: { en: "24 bits on a wall / pegboard plate", zh: "24 个批头的挂墙（洞洞板）款" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The default 20-bit block exports as one exact solid of 270 faces, 266 of them planes — every hexagon wall and entry chamfer is a true flat face, so CAD measures the across-flats size and the hole pitch directly. The Gridfinity version adds the cylinders and cones of the standard feet (320 faces).",
      ],
      zh: [
        "默认 20 孔的块导出为一个精确实体，270 个面，其中 266 个是平面——每个六角孔的孔壁和入口倒角都是真平面，在 CAD 里能直接量出对边尺寸和孔距。Gridfinity 款多了标准底脚的圆柱面和圆锥面（共 320 个面）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a Gridfinity holder for 1/4\" screwdriver bits?", a: "Open https://www.forgent3d.com/en/generators/hex-bit-holder-generator?MOUNT=gridfinity — 20 upright hex holes spread over a 2 × 1 Gridfinity block with the same feet as our Gridfinity bins, so it drops into a standard baseplate. Change COLUMNS and ROWS for more or fewer bits." },
        { q: "My printed bit holder is too tight (or too loose). What do I change?", a: "The hole clearance: printers differ, and holes that worked for other makers range from 6.25 to about 6.9 mm across flats for 6.35 mm bits. Print a three-hole tester first — https://www.forgent3d.com/en/generators/hex-bit-holder-generator?COLUMNS=3&ROWS=1&CLEARANCE=0.05 — and move CLEARANCE in 0.05 mm steps until a bit holds." },
      ],
      zh: [
        { q: "怎样做一个放 1/4 英寸批头的 Gridfinity 收纳块？", a: "打开 https://www.forgent3d.com/zh/generators/hex-bit-holder-generator?MOUNT=gridfinity 就是：20 个竖直的六角孔，均匀铺在 2 × 1 的 Gridfinity 块上，底脚和我们的 Gridfinity 收纳盒一样，能直接放进标准底板。要多放少放就改 COLUMNS 和 ROWS。" },
        { q: "打出来的批头孔太紧（或太松），改哪个参数？", a: "改孔的余量：每台打印机不一样，别人用着合适的孔，对 6.35 mm 的批头从 6.25 到 6.9 mm 左右（对边）都有。先打一个三孔的试块——https://www.forgent3d.com/zh/generators/hex-bit-holder-generator?COLUMNS=3&ROWS=1&CLEARANCE=0.05 ——按 0.05 mm 一档调 CLEARANCE，直到批头插得稳。" },
      ],
    },
    // Evidence: generator-models/bit-holder/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["hex bit holder generator", "screwdriver bit holder stl", "gridfinity bit holder", "1/4 hex bit organizer 3d print"],
      zh: ["批头收纳生成器", "批头收纳 3d打印", "螺丝刀批头收纳 Gridfinity", "六角批头架 STL"],
    },
    params: [
      { key: "BIT_SIZE", default: "1/4in", range: "4mm / 1/4in / 5/16in", unit: "", label: { en: "Bit shank", zh: "批头柄" }, desc: { en: "Hex shank across flats per ISO 1173: 3.96 / 6.35 / 7.93 mm.", zh: "六角柄对边，按 ISO 1173：3.96 / 6.35 / 7.93 mm。" } },
      { key: "CLEARANCE", default: "0.15", range: "-0.1 – 0.6", unit: "mm", label: { en: "Hole clearance", zh: "孔余量" }, desc: { en: "Added across flats; 0.15 is the median of published holders.", zh: "加在对边上；0.15 是公开设计的中位数。" } },
      { key: "DEPTH", default: "10", range: "6 – 20", unit: "mm", label: { en: "Hole depth", zh: "孔深" }, desc: { en: "How deep each bit sits, over a 2 mm floor.", zh: "批头插入的深度，下面是 2 mm 的底。" } },
      { key: "COLUMNS", default: "5", range: "1 – 10", unit: "", label: { en: "Columns", zh: "列数" }, desc: { en: "Bits per row.", zh: "每排的批头数。" } },
      { key: "ROWS", default: "4", range: "1 – 8", unit: "", label: { en: "Rows", zh: "排数" }, desc: { en: "Up to 80 bits in one block.", zh: "一块最多 80 个批头。" } },
      { key: "GAP", default: "2", range: "1.2 – 6", unit: "mm", label: { en: "Wall between holes", zh: "孔间壁厚" }, desc: { en: "More gap = easier to grip a bit.", zh: "间隔越大，越好捏住批头。" } },
      { key: "PATTERN", default: "square", range: "square / staggered", unit: "", label: { en: "Pattern", zh: "排列" }, desc: { en: "Square grid or staggered (honeycomb) rows.", zh: "方阵或错位（蜂窝）排列。" } },
      { key: "MOUNT", default: "none", range: "none / gridfinity / wall", unit: "", label: { en: "Mount", zh: "安装方式" }, desc: { en: "Free-standing, Gridfinity feet, or a screw plate on the 25 mm pegboard pitch.", zh: "直接摆放、Gridfinity 底脚，或按 25 mm 洞洞板孔距的挂墙板。" } },
    ],
    copy: {
      en: {
        name: "Hex Bit Holder Generator",
        title: "Hex Bit Holder Generator — 1/4\" Bit Organizer, Gridfinity or Wall (STL / STEP) | Forgent3D",
        description: "A holder for 1/4\", 4 mm or 5/16\" hex bits: up to 80 upright hex holes with a fit clearance, free-standing, on Gridfinity feet or as a pegboard plate. Free STL / STEP.",
        h1: "Hex bit holder generator: a block of hex holes for screwdriver bits",
        intro: "Choose the bit size and the grid — 20 1/4\" bits by default — and get a block of upright hex holes sized from the ISO 1173 shank, 10 mm deep with an entry chamfer. Stand it on the bench, drop it into a Gridfinity baseplate, or screw it to the wall or a pegboard. The hole clearance is a setting because printers differ.",
        whyPoints: [
          "1/4\" (6.35), 4 mm and 5/16\" hex shanks, holes sized from ISO 1173",
          "Up to 10 × 8 bits, square or staggered, with an adjustable wall between holes",
          "Gridfinity feet identical to our Gridfinity bins, or a wall plate on the 25 mm pegboard pitch",
          "Prints upright as it stands, no supports",
        ],
        faqs: [
          { q: "How tight will the bits sit?", a: "That depends on your printer: holes that held bits for other makers range from 6.25 to about 6.9 mm across flats, and one maker found 6.5 mm too loose. The default is 6.35 + 0.15 = 6.5. Print a small block first and move the clearance in 0.05 mm steps." },
          { q: "Will long power bits fit?", a: "Yes. Insert bits are 25 mm long and power bits 50, 70 or 90 mm (Bosch, Wiha, Vessel, DeWalt), but they share the same 1/4\" hex shank, so they sit in the same holes — the long ones just stand taller." },
          { q: "What screws hold the wall version?", a: "Countersunk wood screws of about 3.5 mm (#6): the plate has 3.9 mm holes with 8.3 mm countersinks, 25 mm apart to match pegboard." },
        ],
      },
      zh: {
        name: "批头收纳生成器",
        title: "批头收纳生成器 — 1/4 英寸六角批头收纳块，可做 Gridfinity 或挂墙款，在线导出 STL / STEP | Forgent3D",
        description: "在线生成批头收纳块：1/4 英寸、4 mm、5/16 英寸六角批头，竖直六角孔，方阵或错位，最多 80 个，可直接摆放、加 Gridfinity 底脚或做挂墙/洞洞板款，孔余量可调，免费导出 STL / STEP。",
        h1: "批头收纳生成器：放螺丝刀批头的六角孔块",
        intro: "选批头规格和排数——默认 20 个 1/4 英寸批头——得到一块竖直六角孔的收纳块，孔按 ISO 1173 的六角柄尺寸做，10 mm 深，带入口倒角。可以摆在桌上、放进 Gridfinity 底板，或者用螺丝挂到墙上、洞洞板上。孔的余量可调，因为每台打印机都不一样。",
        whyPoints: [
          "1/4 英寸（6.35）、4 mm、5/16 英寸六角柄，孔按 ISO 1173 定尺寸",
          "最多 10 × 8 个，方阵或错位，孔间壁厚可调",
          "Gridfinity 底脚和我们的 Gridfinity 收纳盒一致，或按 25 mm 洞洞板孔距做挂墙板",
          "按摆放的姿态直接打印，不用支撑",
        ],
        faqs: [
          { q: "批头插进去松紧怎么样？", a: "取决于你的打印机：别人用着合适的孔，对边从 6.25 到 6.9 mm 左右都有，也有人觉得 6.5 mm 太松。默认是 6.35 + 0.15 = 6.5。先打一个小块试试，按 0.05 mm 一档调余量。" },
          { q: "长的电动批头能放吗？", a: "能。短批头长 25 mm，电动批头 50、70、90 mm（博世、Wiha、Vessel、得伟），但六角柄都是同一个 1/4 英寸，插进同样的孔，只是露出来更高。" },
          { q: "挂墙款用什么螺丝？", a: "3.5 mm 左右的沉头木螺丝：挂板上是 3.9 mm 的孔、8.3 mm 的沉头，孔距 25 mm，对得上洞洞板。" },
        ],
      },
    },
  },
  {
    slug: "spool-holder-generator",
    modelDir: "spool-holder",
    icon: "◍",
    family: "hardware",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { SPOOL_D: "250", SPOOL_W: "110" }, label: { en: "Roller stand for 3 kg spools (Ø250 × 110)", zh: "3 kg 料盘用的滚轮架（Ø250 × 110）" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Exports as three exact solids — side frame, roller and spacer, placed as often as the stand needs them — with 33 faces: 19 planes, 12 true cylinders (the bearing pockets, axle and guard holes, the rollers) and 2 cones (the pocket lead-ins).",
      ],
      zh: [
        "导出为三种精确实体——侧板、滚轮、垫圈，按需要的数量摆放——共 33 个面：19 个平面、12 个真圆柱面（轴承孔、轴孔和防跳杆孔、滚轮）、2 个圆锥面（轴承孔的入口倒角）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a roller spool holder for 1 kg spools?", a: "Open https://www.forgent3d.com/en/generators/spool-holder-generator?SPOOL_D=200&SPOOL_W=70 — two side frames and two rollers with 608 bearings in their ends; a Ø200 × 70 spool rests on its rims at the geometry measured on Lattenberg's widely printed roller holder. You add four 608 bearings, M8 threaded rod with nuts for the axles and a Ø22 rod as the guard bar." },
        { q: "Can it make wall brackets for a rod that holds several spools?", a: "Yes: https://www.forgent3d.com/en/generators/spool-holder-generator?TYPE=wall&ROD_D=16 gives two brackets for a 16 mm rod, its centre far enough from the wall for a Ø200 spool. Pick a rod that passes your spools' hub holes — 1 kg spools have 50–72 mm holes, but 5–8 kg spools only 32–36 mm." },
      ],
      zh: [
        { q: "怎么做一个放 1 kg 料盘的滚轮料架？", a: "打开 https://www.forgent3d.com/zh/generators/spool-holder-generator?SPOOL_D=200&SPOOL_W=70 就是：两块侧板、两根两端装 608 轴承的滚轮，Ø200 × 70 的料盘靠两边料盘沿压在滚轮上，几何按打印量很大的 Lattenberg 滚轮架实测。另外准备 4 个 608 轴承、M8 螺纹杆和螺母当轴，一根 Ø22 的杆当防跳杆。" },
        { q: "能做挂墙的支架、用一根杆挂好几盘吗？", a: "可以：https://www.forgent3d.com/zh/generators/spool-holder-generator?TYPE=wall&ROD_D=16 是一对放 16 mm 杆的挂墙支架，杆中心离墙的距离够挂 Ø200 的料盘。杆要穿得过料盘中孔——1 kg 料盘的孔是 50–72 mm，5–8 kg 的只有 32–36 mm。" },
      ],
    },
    // Evidence: generator-models/spool-holder/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["spool holder generator", "filament spool holder stl", "spool roller holder 608 bearing", "wall mounted spool holder 3d print"],
      zh: ["料盘架生成器", "耗材架 3d打印", "料盘支架 608 轴承", "挂墙料盘架 STL"],
    },
    params: [
      { key: "TYPE", default: "rollers", range: "rollers / wall", unit: "", label: { en: "Holder type", zh: "料架类型" }, desc: { en: "A roller stand, or wall brackets for a rod.", zh: "滚轮架，或挂一根杆的挂墙支架。" } },
      { key: "SPOOL_D", default: "200", range: "120 – 300", unit: "mm", label: { en: "Largest spool diameter", zh: "最大料盘直径" }, desc: { en: "1 kg spools are about 195–203 mm, 3 kg about 250, 5 kg 300.", zh: "1 kg 料盘约 195–203 mm，3 kg 约 250，5 kg 300。" } },
      { key: "SPOOL_W", default: "70", range: "40 – 170", unit: "mm", label: { en: "Widest spool", zh: "最宽料盘" }, desc: { en: "1 kg spools are 57–69 mm wide.", zh: "1 kg 料盘宽 57–69 mm。" } },
      { key: "BEARING", default: "608", range: "608 / 626 / 6001", unit: "", label: { en: "Bearing", zh: "轴承" }, desc: { en: "Two per roller, pressed into its ends.", zh: "每根滚轮两端各压一个。" } },
      { key: "BEARING_FIT", default: "0.2", range: "-0.1 – 0.4", unit: "mm", label: { en: "Bearing pocket fit", zh: "轴承孔余量" }, desc: { en: "Added to the bearing's outside diameter.", zh: "加在轴承外径上。" } },
      { key: "COUNT", default: "1", range: "1 – 4", unit: "", label: { en: "Spools side by side", zh: "并排料盘数" }, desc: { en: "Bays in one stand.", zh: "一个料架放几盘。" } },
      { key: "ROD_D", default: "22", range: "8 – 32", unit: "mm", label: { en: "Rod diameter", zh: "杆直径" }, desc: { en: "The guard bar (rollers) or the spool rod (wall).", zh: "防跳杆（滚轮架）或挂料盘的杆（挂墙）。" } },
      { key: "ROD_FIT", default: "0.2", range: "0 – 0.6", unit: "mm", label: { en: "Rod hole fit", zh: "杆孔余量" }, desc: { en: "Added to the rod diameter.", zh: "加在杆直径上。" } },
    ],
    copy: {
      en: {
        name: "Spool Holder Generator",
        title: "Spool Holder Generator — Filament Roller Stands & Wall Brackets (STL / STEP) | Forgent3D",
        description: "A filament spool holder sized to your spools: a roller stand on 608 bearings with a guard bar, 1–5 kg spools, up to four side by side, or wall rod brackets. Free STL / STEP.",
        h1: "Spool holder generator: roller stands and wall brackets sized to your spools",
        intro: "Enter the largest and widest spool you use — Ø200 × 70 mm by default — and get a roller stand: the spool rests on its rims on two rollers turning on 608 bearings, never touching the hub hole that varies most between brands, and a guard bar stops a nearly empty spool from climbing off. Or get a pair of wall brackets for a rod. The rollers sit at the geometry measured on Lattenberg's popular holder.",
        whyPoints: [
          "Roller spacing and height worked out from the spool size: a Ø200 spool sits at 42.5°, as on Lattenberg's holder",
          "608, 626 or 6001 bearings in the roller ends, on bought threaded rod — no printed axles to snap",
          "Guard bar against a near-empty spool lifting off",
          "One to four spools side by side, or wall brackets for a rod",
        ],
        faqs: [
          { q: "What do I need besides the printed parts?", a: "For one roller stand: four bearings (two per roller), two threaded rods with nuts as axles (M8 for 608), and a rod or dowel for the guard bar. Printed axles were left out on purpose — users of printed-pin holders report them breaking." },
          { q: "Which filament and settings should I print it with?", a: "The popular wall-rod brackets are printed in PETG; roller stands are commonly printed with 4–5 walls and 15–25 % infill, and one maker's 3-wall, 20 % holder broke straight away. Print the wall brackets on their side as laid out: printed upright, the layers can snap under a full spool's weight." },
          { q: "Will small and large spools both fit?", a: "The stand carries everything from the largest spool you enter down to a derived smallest one (about Ø150 at the default Ø200), so a 1 kg spool also fits a 3–5 kg stand. For 250–500 g mini spools, set the spool diameter to the mini size." },
        ],
      },
      zh: {
        name: "料盘架生成器",
        title: "料盘架生成器 — 3D 打印耗材滚轮料架与挂墙支架，按料盘尺寸生成，在线导出 STL / STEP | Forgent3D",
        description: "在线生成料盘架：608 轴承滚轮架带防跳杆，适合 1–5 kg 料盘，最多并排四盘；或一对挂墙杆支架。按你的料盘尺寸生成，免费导出 STL / STEP。",
        h1: "料盘架生成器：按料盘尺寸做的滚轮料架和挂墙支架",
        intro: "输入你用的最大、最宽的料盘——默认 Ø200 × 70 mm——得到一个滚轮料架：料盘靠两边的盘沿压在两根装 608 轴承的滚轮上，完全不碰各家尺寸最不统一的中孔；防跳杆挡住快用完的料盘，不让它被拽下滚轮。也可以生成一对挂墙杆支架。滚轮的位置按打印量很大的 Lattenberg 料架实测。",
        whyPoints: [
          "滚轮间距和高度按料盘尺寸算：Ø200 的料盘压在 42.5° 的位置，和 Lattenberg 的料架一样",
          "608、626 或 6001 轴承装在滚轮两端，套在外购的螺纹杆上——没有会断的打印轴",
          "防跳杆，防止快用完的料盘被拽起",
          "一到四盘并排，或挂墙杆支架",
        ],
        faqs: [
          { q: "除了打印件还需要什么？", a: "一个滚轮架：4 个轴承（每根滚轮两个），两根带螺母的螺纹杆当轴（608 用 M8），一根杆或木棍当防跳杆。特意没用打印的轴——用打印轴的料架，有用户反映轴会断。" },
          { q: "用什么材料、什么参数打？", a: "热门的挂墙杆支架用 PETG 打；滚轮架常见 4–5 圈墙、15–25 % 填充，有人用 3 圈墙、20 % 打的料架一装上就断了。挂墙支架按模型里的姿态侧着打：竖着打的话，满盘的重量可能把层间压断。" },
          { q: "大小料盘都能放吗？", a: "料架能放从你填的最大料盘到一个推算出的最小料盘（默认 Ø200 时约 Ø150），所以 1 kg 的料盘也能放在 3–5 kg 的料架上。250–500 g 的小料盘，就把料盘直径设成小料盘的尺寸。" },
        ],
      },
    },
  },
  {
    slug: "shelf-bracket-generator",
    modelDir: "shelf-bracket",
    icon: "◺",
    family: "home",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { SHELF_D: "250", SCREW: "5 mm", WIDTH: "30", BAR_T: "16" }, label: { en: "Heavy bracket for a 250 mm shelf, 5 mm screws", zh: "250 mm 深层板用的加厚支架，5 mm 螺丝" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Exports as one exact solid of 32 faces: 20 planes, 8 true cylinders (the four screw holes, the screwdriver access hole through the brace and the window's rounded corners) and 4 cones (the countersinks).",
      ],
      zh: [
        "导出为一个精确实体，32 个面：20 个平面、8 个真圆柱面（四个螺丝孔、斜撑上的起子通孔、镂空的圆角）、4 个圆锥面（沉头）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I 3D print a bracket for a 20 cm deep shelf?", a: "Open https://www.forgent3d.com/en/generators/shelf-bracket-generator?SHELF_D=200 — a wall bracket with a diagonal brace, 190 mm arm and 142.5 mm wall leg, two countersunk 4 mm screws into the wall and two up into the board, each with a straight 12 mm path for the screwdriver. Print it lying on its side as exported." },
        { q: "My shelf is an 18 mm board, 195 mm deep, and I don't want screws in it.", a: "https://www.forgent3d.com/en/generators/shelf-bracket-generator?FIXING=Front%20lip&SHELF_D=195 — the arm ends in a 10 mm lip and the 195 mm board drops in between the wall and the lip with 1 mm to spare; only the wall screws remain." },
      ],
      zh: [
        { q: "20 cm 深的层板，怎么 3D 打印一个三角支架？", a: "打开 https://www.forgent3d.com/zh/generators/shelf-bracket-generator?SHELF_D=200 就是：带斜撑的墙上支架，托臂 190 mm、贴墙腿 142.5 mm，两颗 4 mm 沉头螺丝进墙、两颗从下往上拧进层板，每颗螺丝都留了 12 mm 的直通起子路径。按导出的姿态侧放打印。" },
        { q: "层板是 18 mm 厚、195 mm 深的板子，不想在板上打螺丝。", a: "https://www.forgent3d.com/zh/generators/shelf-bracket-generator?FIXING=Front%20lip&SHELF_D=195 ：托臂末端有 10 mm 高的挡边，195 mm 的板子直接放进墙和挡边之间，留 1 mm 余量；只剩进墙的螺丝。" },
      ],
    },
    // Evidence: generator-models/shelf-bracket/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["shelf bracket generator", "3d printed shelf bracket", "shelf support bracket stl", "wall shelf bracket with brace"],
      zh: ["层板三角支架生成器", "墙上三角支架 3d打印", "层板托 STL", "搁板支架"],
    },
    params: [
      { key: "SHELF_D", default: "200", range: "100 – 250", unit: "mm", label: { en: "Shelf depth", zh: "层板深度" }, desc: { en: "The board, front to back. 8 and 10 inch brackets sell the most; 250 still fits a 256 mm bed.", zh: "板子前后的深度。市售以 8、10 英寸（约 20、25 cm）最多；250 还能放进 256 mm 的打印平台。" } },
      { key: "FIXING", default: "Screws from below", range: "Screws from below / Front lip", unit: "", label: { en: "Shelf fixing", zh: "层板固定方式" }, desc: { en: "Two screws up into the board, or a lip the board drops in behind (made for exactly this depth; 7 mm longer than it).", zh: "两颗螺丝从下往上拧进板子，或者用前端挡边把板子卡在里面（按这个深度做，支架比板深长 7 mm）。" } },
      { key: "SCREW", default: "4 mm", range: "4 mm / 5 mm", unit: "", label: { en: "Wood screw", zh: "木螺丝" }, desc: { en: "Countersunk wood screws, US #8 or #10.", zh: "沉头木螺丝，对应美标 #8 / #10。" } },
      { key: "WIDTH", default: "25", range: "18 – 40", unit: "mm", label: { en: "Bracket width", zh: "支架宽度" }, desc: { en: "Along the wall; 25 like most printed brackets.", zh: "沿墙方向的宽度；25 和多数打印支架一样。" } },
      { key: "BAR_T", default: "12", range: "8 – 18", unit: "mm", label: { en: "Bar thickness", zh: "杆件厚度" }, desc: { en: "The leg, arm and brace. Thicker for heavier loads; small brackets with thick bars become a solid gusset.", zh: "贴墙腿、托臂和斜撑的厚度。承重大就加厚；小支架配粗杆件时自动变成实心三角。" } },
    ],
    copy: {
      en: {
        name: "Shelf Bracket Generator",
        title: "Shelf Bracket Generator — Wall Shelf Brackets with a Brace (STL / STEP) | Forgent3D",
        description: "A 3D printable wall shelf bracket sized to your board: 100–250 mm shelves, a diagonal brace, countersunk 4 or 5 mm screws you can actually reach, or a front lip. Free STL / STEP.",
        h1: "Shelf bracket generator: wall brackets sized to your shelf",
        intro: "Enter your shelf board's depth — 200 mm by default — and get a wall bracket with a diagonal brace. The arm stops 10 mm behind the board's front like commercial brackets, the wall leg is three quarters of the arm, and two countersunk screws go into the wall and two up into the board, each with a straight path for the screwdriver. Or pick a front lip: a board of exactly that depth drops in behind it, with no screws in the shelf.",
        whyPoints: [
          "Arm and wall leg follow the shelf depth, in the proportions of commercial brackets (Knape & Vogt, Everbilt)",
          "Every screw is reachable: a straight 12 mm screwdriver path, the upper wall screw through a hole in the brace",
          "Screws up into the board, or a front lip the board drops in behind",
          "Exported lying on its side, the way it should be printed",
        ],
        faqs: [
          { q: "Which way should I print it?", a: "On its side, exactly as exported, so every layer holds the whole bracket. Printed standing, the layers run across a leg: one maker's three standing brackets broke within five minutes under 2.5 kg, and in CNC Kitchen's tests hooks printed standing held only about half the load of the same hooks printed lying down." },
          { q: "Which filament and screws?", a: "Countersunk wood screws, 4 mm (#8) or 5 mm (#10). Brackets cracking while the screws are tightened is the most common complaint on popular printed brackets; one user notes that PETG resists splitting. Prefer PETG, and stop tightening when the head sits flush." },
          { q: "How much weight will it hold?", a: "We don't give a number: none of the printed shelf brackets we found has a defined load test, and the result depends on filament, walls, infill and screws. Raise the bar thickness for heavy shelves, and load-test your print before trusting it." },
        ],
      },
      zh: {
        name: "层板三角支架生成器",
        title: "层板三角支架生成器 — 墙上搁板托架，按板深在线生成，导出 STL / STEP | Forgent3D",
        description: "在线生成可 3D 打印的墙上层板三角支架：100–250 mm 深的层板，带斜撑，4 或 5 mm 沉头螺丝、每颗都拧得到，或用前端挡边免打螺丝。免费导出 STL / STEP。",
        h1: "层板三角支架生成器：按层板深度做的墙上支架",
        intro: "输入层板的深度——默认 200 mm——得到一个带斜撑的墙上支架：托臂和市售支架一样比板子前沿短 10 mm，贴墙腿是托臂的四分之三，两颗沉头螺丝进墙、两颗从下往上拧进板子，每颗都留了直通的起子路径。也可以选前端挡边：同样深度的板子直接放进去，板上不用打螺丝。",
        whyPoints: [
          "托臂和贴墙腿按层板深度算，比例和市售支架（Knape & Vogt、Everbilt）一致",
          "每颗螺丝都拧得到：留 12 mm 的直通起子路径，上面那颗进墙螺丝从斜撑上的孔里拧",
          "螺丝从下往上固定层板，或用前端挡边卡住",
          "导出时就是侧放的姿态，直接按这个方向打印",
        ],
        faqs: [
          { q: "应该怎么摆着打印？", a: "按导出的姿态侧放，让每一层都是一整个支架。竖着打的话层纹横穿支架腿：有人竖着打的三个支架挂 2.5 kg 不到五分钟就全断了；CNC Kitchen 的测试里，竖着打的挂钩只扛得住侧放打印的一半左右。" },
          { q: "用什么材料、什么螺丝？", a: "沉头木螺丝，4 mm（美标 #8）或 5 mm（#10）。热门打印支架下最常见的抱怨是拧螺丝时支架裂开，有用户说 PETG 不容易裂。优先用 PETG，螺丝头和表面齐平就别再拧。" },
          { q: "能承重多少？", a: "我们不写承重数字：找到的打印层板支架都没有正规的承重测试，结果取决于材料、墙数、填充和螺丝。层板重就加厚杆件，打印出来先试挂再放心用。" },
        ],
      },
    },
  },
  {
    slug: "pegboard-hook-generator",
    modelDir: "pegboard-hook",
    icon: "⌐",
    family: "home",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { BOARD: "US pegboard 1/4 in holes (1/4 in board)", REACH: "50" }, label: { en: "50 mm hook for US 1/4 in pegboard", zh: "美标 1/4 英寸洞洞板用的 50 mm 挂钩" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The default Skådis-compatible hook exports as one exact solid of 25 faces: 21 planes and 4 true cylinders (the round tabs that sit in the slot ends). On round-hole boards the curled peg adds cones.",
      ],
      zh: [
        "默认的兼容 Skådis 挂钩导出为一个精确实体，25 个面：21 个平面、4 个真圆柱面（卡在长孔两端的圆形挂脚）。圆孔洞洞板的弯插脚会多出圆锥面。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a 3D printed hook for standard 1/4 inch pegboard?", a: "Open https://www.forgent3d.com/en/generators/pegboard-hook-generator?BOARD=US%20pegboard%201%2F4&REACH=50 — a 50 mm hook whose upper peg passes through the board and curls down behind it, with a short lower peg in the hole below. The pegs are sized for the real 9/32 in (7.1 mm) holes of 1/4 in hardboard, which is why hooks made for 25 mm metric boards feel loose there." },
        { q: "I need a wide double hook for a Skådis-style board.", a: "https://www.forgent3d.com/en/generators/pegboard-hook-generator?STYLE=Double%20hook&REACH=40&TIP=8 — two hook arms one slot pitch (40 mm) apart on a shared back plate, each hanging from two slots by round tabs that drop into the slot bottoms. Push it straight in, let it drop, lift it off the same way." },
      ],
      zh: [
        { q: "孔距 25 mm、6 mm 圆孔的金属洞洞板，怎么做双钩？", a: "打开 https://www.forgent3d.com/zh/generators/pegboard-hook-generator?BOARD=6%20mm%20holes%2025&STYLE=Double%20hook 就是：两只钩并排、间隔一个孔距，上插脚穿过板子后往下弯，下面一个短插脚插在下一排孔里。先量一下自己的板：国内圆孔板的孔距有 16、25、26、30、32 mm 好几种。" },
        { q: "宜家 Skådis 那种长孔洞洞板，挂钩怎么打印？", a: "默认就是：https://www.forgent3d.com/zh/generators/pegboard-hook-generator?REACH=30&TIP=10 ，兼容 5 mm 厚的 Skådis 式长孔板，两个圆形挂脚穿过上下两个长孔，往下一落就卡在长孔底部，取下时原路抬起。挂钩侧放打印，层纹顺着钩臂走。" },
      ],
    },
    // Evidence: generator-models/pegboard-hook/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["pegboard hook generator", "pegboard hooks 3d print", "skadis compatible hook stl", "1/4 inch pegboard hook"],
      zh: ["洞洞板挂钩生成器", "洞洞板挂钩 3d打印", "宜家洞洞板挂钩", "圆孔洞洞板挂钩 孔距25"],
    },
    params: [
      { key: "BOARD", default: "Skadis-compatible slots (5 mm board)", range: "8 boards: slotted, US round-hole, metric round-hole", unit: "", label: { en: "Board", zh: "洞洞板" }, desc: { en: "Sets hole shape, hole size, pitch and board thickness together: Skådis-style slots (5 mm board or 1.2 mm metal), US 1/4 in and 3/16 in pegboard, US metal pegboard, 6 mm holes on 25 or 16 mm grids, 5 mm holes on 25 mm.", zh: "一次定好孔形、孔径、孔距和板厚：Skådis 式长孔（5 mm 板或 1.2 mm 金属板）、美标 1/4 和 3/16 英寸洞洞板、美标金属洞洞板、6 mm 圆孔孔距 25 或 16 mm、5 mm 圆孔孔距 25 mm。" } },
      { key: "CLEARANCE", default: "0.4", range: "0 – 1", unit: "mm", label: { en: "Fit clearance", zh: "配合余量" }, desc: { en: "Taken off the pegs and tabs; half of it widens the gap the board sits in. Raise it if the hook won't seat.", zh: "从插脚和挂脚上减掉；一半加到卡板的缝上。挂不进去就调大。" } },
      { key: "STYLE", default: "Single hook", range: "Single hook / Double hook", unit: "", label: { en: "Style", zh: "款式" }, desc: { en: "The double hook repeats the hook one hole pitch along the board.", zh: "双钩沿板子隔一个孔距再放一只钩。" } },
      { key: "REACH", default: "30", range: "10 – 100", unit: "mm", label: { en: "Reach", zh: "钩长" }, desc: { en: "Inside depth from the back plate to the tip.", zh: "从背板到钩尖的内侧深度。" } },
      { key: "TIP", default: "10", range: "0 – 25", unit: "mm", label: { en: "Tip height", zh: "钩尖高度" }, desc: { en: "How far the tip turns up; 0 for a straight peg.", zh: "钩尖往上翘多高；0 就是直杆。" } },
    ],
    copy: {
      en: {
        name: "Pegboard Hook Generator",
        title: "Pegboard Hook Generator — Hooks for Skådis-Style & 1/4 in Pegboards (STL / STEP) | Forgent3D",
        description: "3D printable pegboard hooks sized to your board: Skådis-compatible slots, US 1/4 in and 3/16 in pegboard, metal pegboard, 6 mm holes on 25 or 16 mm grids. Set reach and tip, single or double. Free STL / STEP.",
        h1: "Pegboard hook generator: hooks that fit your board",
        intro: "Pick your board — Skådis-compatible slots by default, or US or metric round-hole pegboard — and set how far the hook reaches and how high its tip turns up. The hook hangs from two openings one above the other, so it doesn't fall off when you take a tool down; nothing snaps or twists, it goes on and lifts off the same way. Hole size, pitch and board thickness come from board makers' specs and the most-printed hooks for each board.",
        whyPoints: [
          "Eight board types, from Skådis-style slots to US 1/4 in hardboard and 1.2 mm metal boards",
          "Pegs sized to the real hole, e.g. 9/32 in on 1/4 in pegboard, with a fit clearance you can tune",
          "Two anchors one above the other, so the hook stays put when you lift a tool off",
          "Single or double hook, reach 10–100 mm",
        ],
        faqs: [
          { q: "The hook is too tight, or it wobbles. What do I change?", a: "Boards vary: Skådis-style boards measure 4.5–5.5 mm thick, and metal boards are 1.2–1.7 mm. Raise the fit clearance if the hook won't seat; one popular designer widened the board gap to 5.2 mm so it slid onto 5 mm boards. If it wobbles on a thin metal board, pick the metal board in the list: hooks made for 5 mm boards are loose on 1.2 mm metal." },
          { q: "Why are hooks for metric pegboards loose in my US pegboard?", a: "US \"1/4 inch\" pegboard actually has 9/32 in (7.1 mm) holes, while metric boards often have 6 mm holes. Users of a popular metric hook set report scaling it up 6.5% for US boards. Pick the US board here and the pegs are sized for its holes." },
          { q: "How should I print it, and in what?", a: "Lay it on its side so the layers run along the arm — makers report flat-printed hooks are far stronger than upright ones. Several prefer PETG over PLA; PETG also prints slightly looser, so you may need less clearance. Skådis is an IKEA trademark; these hooks are compatible, not IKEA products." },
        ],
      },
      zh: {
        name: "洞洞板挂钩生成器",
        title: "洞洞板挂钩生成器 — 宜家 Skådis 式长孔、圆孔洞洞板挂钩在线定制，导出 STL / STEP | Forgent3D",
        description: "在线生成可 3D 打印的洞洞板挂钩：兼容 Skådis 长孔板、6 mm 圆孔孔距 25 / 16 mm 金属板、美标 1/4 英寸洞洞板等 8 种板子，钩长、钩尖可调，单钩双钩。免费导出 STL / STEP。",
        h1: "洞洞板挂钩生成器：按你的板子做的挂钩",
        intro: "选你的洞洞板——默认是兼容 Skådis 的长孔板，也可以选国内常见的 6 mm 圆孔板或美标洞洞板——再定钩长和钩尖翘多高。挂钩挂在上下两个孔里，取工具时不会跟着掉下来；不靠卡扣、不用拧，怎么挂上去就怎么取下来。孔径、孔距和板厚取自板材规格和每种板上打印最多的挂钩。",
        whyPoints: [
          "8 种板子：Skådis 式长孔板、6 mm 圆孔孔距 25 / 16 mm 金属板、美标 1/4 英寸板等",
          "插脚按真实孔径做，配合余量可调",
          "上下两个孔同时受力，取工具时挂钩不跟着掉",
          "单钩或双钩，钩长 10–100 mm",
        ],
        faqs: [
          { q: "挂钩太紧插不进去，或者晃，怎么调？", a: "板子厚度不一：Skådis 式板实测 4.5–5.5 mm，金属板 1.2–1.7 mm。插不进去就把配合余量调大——有热门作者把卡板的缝加到 5.2 mm，才完美卡进 5 mm 的板。挂在薄金属板上晃，就在列表里选金属板：给 5 mm 板做的挂钩，挂在 1 mm 左右的金属板上会松垮。" },
          { q: "我的圆孔板孔距不是 25 mm 怎么办？", a: "先量一下：国内圆孔洞洞板的孔距有 16、25、26、30、32 mm 好几种，评论区里常有人发现自己的板是 26 mm。列表里有 16 和 25 mm 两种 6 mm 孔的板；别的孔距可以点「AI 修改」，让 AI 把孔距改成你的。" },
          { q: "怎么打印、用什么材料？", a: "侧放打印，让层纹顺着钩臂走——有作者说平放打印的挂钩比竖着打的结实得多。不少人推荐 PETG 而不是 PLA；PETG 打出来略松一点，余量可以调小。Skådis 是宜家的商标，这里的挂钩只是兼容，不是宜家产品。" },
        ],
      },
    },
  },
  {
    slug: "raspberry-pi-case-generator",
    modelDir: "dev-board-enclosure",
    icon: "▭",
    family: "electronics",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-21",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { BOARD: "Raspberry Pi 4 Model B", WALL: "2.4", PORT_CLEARANCE: "0.8" }, label: { en: "Pi 4 case with thicker walls and roomier port openings", zh: "树莓派 4B 外壳：加厚外壁、接口开孔放宽" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The Raspberry Pi 5 case exports as two exact solids, base and lid, with 196 faces: 160 planes, 32 true cylinders (standoffs, lid pillars, screw holes and pilots, rounded corners) and 4 cones (the countersinks under the floor).",
      ],
      zh: [
        "树莓派 5 外壳导出为两个精确实体（底壳和上盖），共 196 个面：160 个平面、32 个真圆柱面（支撑柱、上盖压柱、螺丝孔和底孔、圆角）、4 个圆锥面（底板下的沉头）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a 3D printable case for a Raspberry Pi 4?", a: "Open https://www.forgent3d.com/en/generators/raspberry-pi-case-generator?BOARD=Raspberry%20Pi%204%20Model%20B — a two-part case laid out from the official mechanical drawing: every port gets an opening, the GPIO header a slot in the lid, and four M2.5 × 12 countersunk screws go up through the floor and the board into pillars in the lid, so the same screws hold the board and close the case." },
        { q: "Can it make an Arduino Uno case without the vents?", a: "Yes: https://www.forgent3d.com/en/generators/raspberry-pi-case-generator?BOARD=Arduino%20Uno%20R3&VENTS=false — USB-B and DC jack openings sized for the plugs, header slots in the lid, closed with four M3 × 16 screws. For the Uno R4 Minima or WiFi pick that board instead; one of its holes sits too close to the DC jack for a pillar, so it gets a locating pin and three screws." },
      ],
      zh: [
        { q: "树莓派 4B 的外壳怎么 3D 打印？", a: "打开 https://www.forgent3d.com/zh/generators/raspberry-pi-case-generator?BOARD=Raspberry%20Pi%204%20Model%20B 就是：按官方机械图做的上下两件式外壳，每个接口都开好孔，GPIO 排针在上盖开槽，四颗 M2.5 × 12 沉头螺丝从底下穿过底板和电路板拧进上盖的压柱——同一组螺丝既固定板子又合上外壳。" },
        { q: "Arduino Uno 的外壳，不要散热孔可以吗？", a: "可以：https://www.forgent3d.com/zh/generators/raspberry-pi-case-generator?BOARD=Arduino%20Uno%20R3&VENTS=false ，USB-B 和 DC 插座按插头大小开孔，上盖留排针槽，四颗 M3 × 16 螺丝合上。Uno R4 Minima / WiFi 请选对应的板子：它有一个孔离 DC 插座太近放不下压柱，改成定位销，用三颗螺丝。" },
      ],
    },
    // Evidence: generator-models/dev-board-enclosure/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["raspberry pi case generator", "raspberry pi 5 case stl", "raspberry pi 4 case 3d print", "arduino uno case stl"],
      zh: ["树莓派外壳生成器", "树莓派5外壳 3d打印", "树莓派4b外壳 STL", "arduino外壳", "开发板外壳"],
    },
    params: [
      { key: "BOARD", default: "Raspberry Pi 5", range: "Pi 5 / Pi 4 B / Pi 3 B+ / Pi Zero 2 W / Uno R3 / Uno R4", unit: "", label: { en: "Board", zh: "开发板" }, desc: { en: "Board outline, mounting holes and every connector come from the official drawings and STEP files.", zh: "板框、安装孔和每个接口都取自官方机械图和 STEP 文件。" } },
      { key: "WALL", default: "2", range: "1.2 – 3", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "2 mm like the most-printed cases.", zh: "2 mm，和打印最多的几款外壳一样。" } },
      { key: "PORT_CLEARANCE", default: "0.5", range: "0.2 – 1.5", unit: "mm", label: { en: "Port clearance", zh: "接口开孔余量" }, desc: { en: "Kept all round each connector. Raise it for bulky HDMI, audio or DC plugs.", zh: "每个接口四周留的余量。HDMI、音频、DC 插头粗，就调大。" } },
      { key: "HEADER_SLOTS", default: "on", range: "on / off", unit: "", label: { en: "Header slots in the lid", zh: "上盖排针开槽" }, desc: { en: "A slot over the GPIO / Arduino headers for jumper wires.", zh: "在 GPIO / Arduino 排针上方开槽，方便接杜邦线。" } },
      { key: "VENTS", default: "on", range: "on / off", unit: "", label: { en: "Lid vents", zh: "上盖散热孔" }, desc: { en: "Slot vents over the processor.", zh: "处理器上方的条形散热孔。" } },
    ],
    copy: {
      en: {
        name: "Raspberry Pi & Arduino Case Generator",
        title: "Raspberry Pi Case Generator — Pi 5, Pi 4, Zero & Arduino Uno Cases (STL / STEP) | Forgent3D",
        description: "A 3D printable case for your board: Raspberry Pi 5, 4 B, 3 B+, Zero 2 W or Arduino Uno R3 / R4, with every port opening placed from the official drawings and a screwed lid. Free STL / STEP.",
        h1: "Raspberry Pi and Arduino case generator: openings placed from the official drawings",
        intro: "Pick your board — Raspberry Pi 5 by default — and get a two-part case laid out from the board's official mechanical drawing or STEP file. Every connector gets an opening open to the split line, so the lid drops over the ports; USB-C and micro-USB openings are sized for the plug, not just the socket. The board's own screws hold it on standoffs and close the lid, so there's no friction lid to work loose.",
        whyPoints: [
          "Six boards, every hole and port from the official drawings: Pi 5, Pi 4 B, Pi 3 B+, Pi Zero 2 W, Arduino Uno R3 and R4",
          "Openings sized for USB plugs, with a clearance you can raise for bulky HDMI or DC plugs",
          "Screwed lid: the board's mounting screws close the case",
          "Slots over the headers, vents over the processor, the SD card reachable from outside",
        ],
        faqs: [
          { q: "Which screws do I need?", a: "Raspberry Pi boards: four M2.5 × 12 countersunk screws. Arduino Uno R3: four M3 × 16; the Uno R4 takes three plus a printed locating pin. They go up through the floor, the standoffs and the board into pillars in the lid. Friction-fit lids are the most common complaint on popular printed cases (\"the lid is a bit loose\"), so this one is screwed." },
          { q: "Will my cables fit?", a: "USB-C and micro-USB openings are sized for the plug overmold given in the USB specifications — a frequent complaint about cases with socket-sized openings is that micro-HDMI cables don't fit. HDMI, audio and DC plugs have no standard size: if yours is bulky, raise the port clearance." },
          { q: "Which filament for a Raspberry Pi 5?", a: "PETG or better: one maker reports a Pi 5 softened a PLA base. Keep the lid vents on. The case also leaves 0.5 mm all round the board, because cases that hug the PCB have cracked boards during assembly." },
          { q: "Is there a case for an ESP32 DevKit?", a: "Yes, on its own page: the ESP32 Case Generator, linked under “More generators” below. Espressif's DevKitC boards have no mounting holes and on the clone boards the hole positions disagree from one source to the next, so that generator holds each of its 15 ESP32 boards — DevKit V1, DevKitC, S3, C3 SuperMini, XIAO, ESP32-CAM and more — by its outline instead of with screws through the board. Raspberry Pi and Arduino are trademarks of their owners; this generator makes compatible cases and is not affiliated with them." },
        ],
      },
      zh: {
        name: "树莓派 / Arduino 外壳生成器",
        title: "树莓派外壳生成器 — 树莓派 5 / 4B / Zero 与 Arduino 开发板外壳，接口自动开孔，导出 STL / STEP | Forgent3D",
        description: "在线生成可 3D 打印的开发板外壳：树莓派 5、4B、3B+、Zero 2 W，Arduino Uno R3 / R4，接口开孔按官方机械图定位，螺丝固定上盖。免费导出 STL / STEP。",
        h1: "树莓派 / Arduino 外壳生成器：接口开孔按官方机械图定位",
        intro: "选你的开发板——默认树莓派 5——得到按官方机械图或 STEP 文件做的上下两件式外壳。每个接口都开成通到分模线的缺口，上盖直接扣下去；USB-C 和 micro-USB 的开孔按插头大小做，不只是按插座。板子自己的安装螺丝把它固定在支撑柱上、同时合上上盖，不会有松掉的摩擦盖。",
        whyPoints: [
          "六种板子，孔位和接口全部取自官方图纸：树莓派 5、4B、3B+、Zero 2 W，Arduino Uno R3 和 R4",
          "开孔按 USB 插头大小，HDMI、DC 插头粗可以调大余量",
          "螺丝固定上盖：板子的安装螺丝同时合上外壳",
          "排针上方开槽、处理器上方散热孔，SD 卡从外面就能插拔",
        ],
        faqs: [
          { q: "需要什么螺丝？", a: "树莓派：四颗 M2.5 × 12 沉头螺丝。Arduino Uno R3：四颗 M3 × 16；Uno R4 用三颗，外加一个打印的定位销。螺丝从底下穿过底板、支撑柱和电路板，拧进上盖的压柱。热门打印外壳下最常见的抱怨是摩擦盖松（「盖子有点松」），所以这里用螺丝。" },
          { q: "线插得进去吗？", a: "USB-C 和 micro-USB 的开孔按 USB 规范里的插头外壳尺寸做——按插座大小开孔的外壳，常有人反映 micro-HDMI 线插不进去。HDMI、音频、DC 插头没有统一尺寸：你的插头粗，就把接口开孔余量调大。" },
          { q: "树莓派 5 用什么材料打？", a: "PETG 或更耐热的材料：有人反映树莓派 5 把 PLA 底壳烤软了。散热孔保持打开。外壳四周给板子留了 0.5 mm——贴着电路板做的外壳，有人装的时候把板子压裂了。" },
          { q: "有 ESP32 开发板的外壳吗？", a: "有，在单独的一页：ESP32 外壳生成器，见下方「更多生成器」。乐鑫的 DevKitC 板没有安装孔，兼容板的孔位在不同来源之间对不上，所以那个生成器按外形卡住它支持的 15 款 ESP32 开发板——DevKit V1、DevKitC、S3、C3 SuperMini、XIAO、ESP32-CAM 等——不靠穿过电路板的螺丝。树莓派和 Arduino 是其各自所有者的商标，这个生成器做的是兼容外壳，与它们没有关联。" },
        ],
      },
    },
  },
  {
    slug: "esp32-case-generator",
    modelDir: "esp32-case",
    icon: "▤",
    family: "electronics",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-21",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part. Board and choice
    // values are unique prefixes without brackets (a link-detector cuts a trailing ")"), which the app accepts.
    example: {
      params: { BOARD: "ESP32-DevKitC V4", PINS: "Jumper", WIRE_EXIT: "Slot", EARS: "true" },
      label: { en: "DevKitC V4 case with room for jumper wires, a wire slot and wall-mount ears", zh: "DevKitC V4 外壳：板下插得下杜邦线，端面出线槽，带安装耳" },
    },
    // The 15 boards at the defaults, each row a deep link; built with cad-build 2026-10-21 (the copy's `sizes`
    // names the columns and gives each board's name and data source in the page's language).
    sizes: [
      espBoard("ESP32 DevKit V1", "58.6 × 33.1", "65.5 × 40.0", "21.6 / 17.1 / 33.6", 16),
      espBoard("ESP32-DevKitC V4", "60.9 × 32.5", "67.8 × 39.5", "21.6 / 17.1 / 33.6", 16),
      espBoard("ESP32-S3-DevKitC-1", "75.8 × 30.0", "82.7 × 37.4", "21.6 / 17.1 / 33.6", 16),
      espBoard("YD-ESP32-S3", "70.0 × 32.5", "76.9 × 39.5", "20.5 / 17.1 / 32.5", 16),
      espBoard("ESP32-C3 SuperMini", "30.6 × 22.6", "37.6 × 29.5", "21.0 / 17.1 / 33.0", 16),
      espBoard("ESP32-C6-DevKitC-1", "64.8 × 30.0", "71.7 × 40.2", "21.0 / 17.1 / 33.0", 16),
      espBoard("ESP32-C3-DevKitM-1", "50.9 × 30.0", "57.9 × 36.9", "21.6 / 17.1 / 33.6", 16),
      espBoard("Waveshare ESP32-S3-Zero", "30.1 × 22.6", "37.0 × 29.5", "20.6 / 17.1 / 32.6", 16),
      espBoard("Seeed XIAO ESP32S3", "27.7 × 22.4", "34.7 × 29.3", "20.2 / 17.1 / 32.2", 16),
      espBoard("Seeed XIAO ESP32S3 Sense", "30.9 × 22.4", "37.8 × 29.3", "22.5 / 17.1 / 34.5", 16),
      espBoard("Seeed XIAO ESP32C6", "27.6 × 22.4", "34.5 × 29.3", "20.2 / 17.1 / 32.2", 16),
      espBoard("Seeed XIAO ESP32C3", "27.6 × 22.4", "34.5 × 29.3", "20.2 / 17.1 / 32.2", 16),
      espBoard("Arduino Nano ESP32", "49.8 × 22.4", "56.7 × 29.3", "20.8 / 17.1 / 32.8", 16),
      espBoard("LilyGO T-Display-S3", "67.4 × 30.5", "74.3 × 37.5", "20.6 / 17.1 / 32.6", 16),
      espBoard("ESP32-CAM", "47.1 × 31.6", "54.0 × 38.5", "23.7 / 21.1 / 35.7", 20),
    ],
    // Read off the STEP export (cad-build export, 2026-10-21): faces by surface type.
    step: {
      en: [
        "The default case (ESP32 DevKit V1) exports as two exact solids, base and lid, with 149 faces: 121 planes, 24 true cylinders (the screw clearance holes and pilots, the corner bosses, the button poke holes, the pocket corners) and 4 cones (the countersinks for the M3 heads), and no spline surfaces. CAD reads every opening, pocket wall and screw hole straight off the file — the place to start if you want to add a mount or a cut-out of your own.",
        "The ESP32-CAM case is 159 faces: 126 planes, 29 cylinders and 4 cones.",
      ],
      zh: [
        "默认外壳（ESP32 DevKit V1）导出为两个精确实体（底壳和上盖），共 149 个面：121 个平面、24 个真圆柱面（螺丝过孔和底孔、四角螺丝柱、按键孔、卡槽圆角）、4 个圆锥面（M3 沉头），没有样条曲面。每个开孔、卡槽壁和螺丝孔在 CAD 里都能直接量出来——要自己加安装座或开孔，就从这份 STEP 开始。",
        "ESP32-CAM 外壳是 159 个面：126 个平面、29 个圆柱面、4 个圆锥面。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I get a 3D printed case for an ESP32-CAM?", a: "Open https://www.forgent3d.com/en/generators/esp32-case-generator?BOARD=ESP32-CAM — a two-part case for the AI-Thinker ESP32-CAM: a slot over the lens (9 to 10.5 mm from the SD end, which covers the lens positions of three sources), a window for the flash LED, the microSD card in and out through the end wall, a floor hole for the reset button and a wire slot, because the board is powered through its pins. It is 54.0 × 38.5 mm over the screw bosses and 23.7 mm tall, closed with four M3 × 20 countersunk screws. Print it in PETG; the flash LED softened a PLA case in one user's report. The ESP32-CAM-MB programmer base is not supported." },
        { q: "Can I get an ESP32 DevKit case that screws to a wall, with a cable gland?", a: "Yes: https://www.forgent3d.com/en/generators/esp32-case-generator?BOARD=ESP32%20DevKit%20V1&WIRE_EXIT=PG7&EARS=true — the 30-pin DOIT DevKit V1 case with a 12.8 mm hole for a PG7 cable gland in the far end wall, room inside for locknuts up to 19.05 mm across flats, and two ears with M3 countersunk holes on the long sides, 39.1 mm apart. The lid grows to hold the locknut: 23.6 mm tall, four M3 × 20 screws. With its vents and screwed seam it is not a sealed or waterproof case." },
      ],
      zh: [
        { q: "ESP32-CAM 的外壳怎么 3D 打印？", a: "打开 https://www.forgent3d.com/zh/generators/esp32-case-generator?BOARD=ESP32-CAM 就是：安信可 ESP32-CAM 的上下两件式外壳——镜头上方开槽（离 SD 卡那端 9 到 10.5 mm，覆盖三个来源给的镜头位置），闪光灯开窗，microSD 卡从端面插拔，底部开复位键孔，还有出线槽，因为这块板靠排针供电。螺丝柱外廓 54.0 × 38.5 mm，高 23.7 mm，四颗 M3 × 20 沉头螺丝合上。请用 PETG 打印：有用户反映闪光灯把 PLA 外壳烤软了。不支持 ESP32-CAM-MB 下载底板。" },
        { q: "想要一个能用螺丝挂墙、带 PG7 防水接头孔的 ESP32 DevKit 外壳？", a: "可以：https://www.forgent3d.com/zh/generators/esp32-case-generator?BOARD=ESP32%20DevKit%20V1&WIRE_EXIT=PG7&EARS=true ——30 针 DOIT DevKit V1 外壳，远端端面开 12.8 mm 的 PG7 防水接头孔，内部留出对边最大 19.05 mm 的锁紧螺母空间；两条长边各有一个带 M3 沉头孔的安装耳，孔距 39.1 mm。为放下锁紧螺母，上盖会加高：总高 23.6 mm，用四颗 M3 × 20 螺丝。外壳有散热孔和螺丝合缝，本身不密封、不防水。" },
      ],
    },
    // Evidence: generator-models/esp32-case/EVIDENCE.md in the platform repo (§5: 外壳 is the Chinese term).
    keywords: {
      en: ["esp32 case", "esp32 case generator", "esp32 3d printed case", "esp32 case stl", "esp32 cam case", "esp32 enclosure", "esp32 mount"],
      zh: ["esp32外壳", "ESP32 外壳生成器", "esp32-cam外壳", "ESP32-S3 外壳", "esp32外壳 3d打印", "开发板外壳"],
    },
    params: [
      { key: "BOARD", default: "ESP32 DevKit V1", range: "15 boards (table below)", unit: "", label: { en: "Board", zh: "开发板" }, desc: { en: "The 30-pin DOIT DevKit V1 by default: the most-downloaded ESP32 cases on MakerWorld are for these DevKit boards. Each board's outline, pins, antenna, connectors and buttons come from its own data, listed in the table below.", zh: "默认 30 针 DOIT DevKit V1：MakerWorld 上下载最多的 ESP32 外壳都是给这类 DevKit 板做的。每块板的外形、排针、天线、接口和按键都取自它自己的数据，见下表。" } },
      { key: "PINS", default: "Pins soldered", range: "pins down / no pins / jumper wires", unit: "", label: { en: "Under the board", zh: "板下空间" }, desc: { en: "Pins pointing down is how most boards are sold; their tips reach 8.54 mm below the board, and the base leaves 1 mm more. Jumper wires adds room for 14 mm Dupont housings and a 5 mm wire bend. No pins gives the flattest case.", zh: "多数板子出厂就焊好排针、针脚朝下；针尖最深到板下 8.54 mm，底壳再多留 1 mm。选杜邦线，就再给 14 mm 长的杜邦头和 5 mm 的线弯留空间。不焊排针，外壳最薄。" } },
      { key: "FIT", default: "0.3", range: "0.1 – 1", unit: "mm", label: { en: "Fit clearance", zh: "装配间隙" }, desc: { en: "Gap per side between the board and its pocket. 0.3 is the padding of the YAPP case library's ESP32-CAM box; users of tighter cases scale them 101–110 % to get clone boards in. Raise it if your board is a little bigger.", zh: "板子和卡槽之间每边的间隙。0.3 取自 YAPP 外壳库 ESP32-CAM 盒子的余量；用紧的外壳时，有人放大到 101–110 % 才装得下兼容板。你的板子偏大就调大。" } },
      { key: "WALL", default: "2", range: "1.2 – 3", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "2 mm like the popular cases (YAPP 2.0, the open-source C3 SuperMini case 2); 1.2 is three 0.4 mm perimeters.", zh: "2 mm，和热门外壳一样（YAPP 2.0、开源的 C3 SuperMini 外壳 2）；1.2 是三圈 0.4 mm 的外墙。" } },
      { key: "ROOM", default: "2", range: "0 – 15", unit: "mm", label: { en: "Room past the antenna", zh: "天线端留空" }, desc: { en: "Free space past the module's antenna end, across the full width. Popular cases leave 0.3–1 mm and users asked for 1–2 more; 15 is the clearance Espressif recommends round the antenna inside a housing.", zh: "模组天线那一端外面留的空，整个宽度都空。热门外壳只留 0.3–1 mm，有用户要求再多 1–2 mm；15 是乐鑫建议外壳内天线周围留的净空。" } },
      { key: "WIRE_EXIT", default: "None", range: "none / slot / PG7", unit: "", label: { en: "Wire exit", zh: "出线口" }, desc: { en: "In the far end wall: a 5.5 mm slot from the floor to the split (three 20 AWG wires, Dupont housings pass), or a 12.8 mm hole for a PG7 cable gland with room inside for its locknut. The ESP32-CAM always gets the slot: it is powered through its pins.", zh: "开在远端端面：从底到分模线的 5.5 mm 槽（三根 20 AWG 线，杜邦头也能穿过），或 12.8 mm 的 PG7 防水接头孔，内部留出锁紧螺母的位置。ESP32-CAM 总是带出线槽：它靠排针供电。" } },
      { key: "EARS", default: "off", range: "on / off", unit: "", label: { en: "Mounting ears", zh: "安装耳" }, desc: { en: "Two 3 mm ears at floor level on the long sides, each with an M3 countersunk hole, for a wall or a panel. Off by default, so the case stands on a desk with nothing sticking out.", zh: "两条长边贴地各一个 3 mm 厚的安装耳，带 M3 沉头孔，用来固定在墙上或面板上。默认关，放在桌上没有凸出的部分。" } },
      { key: "VENTS", default: "on", range: "on / off", unit: "", label: { en: "Lid vents", zh: "上盖散热孔" }, desc: { en: "2 mm slots across the lid, kept clear of the ribs, windows and poke holes. On by default: an ESP32-CAM user reports that the flash LED \"heats very much\".", zh: "上盖上横向的 2 mm 条形孔，避开压筋、开窗和按键孔。默认开：有 ESP32-CAM 用户反映闪光灯「发热很厉害」。" } },
    ],
    copy: {
      en: {
        name: "ESP32 Case Generator",
        title: "ESP32 Case Generator — 3D Printed Cases for DevKit, S3, C3, XIAO & ESP32-CAM (STL) | Forgent3D",
        description: "A 3D printed case for your ESP32 board: 15 boards from the DOIT DevKit V1 and Espressif DevKitC to the C3 SuperMini, XIAO and ESP32-CAM, held by the board's outline, with room for header pins or jumper wires and a screwed lid. Free STL, exact STEP.",
        h1: "ESP32 case generator: a 3D printed case for 15 ESP32 boards, held by the board's outline",
        intro: "Pick your board — the 30-pin DOIT ESP32 DevKit V1 by default — and get a two-part case: a base the board drops into and a lid whose ribs stop 0.3 mm above the module shield and the USB shell, closed by four M3 countersunk screws from the top. The board is held by its outline, not its mounting holes: Espressif's DevKitC boards have none, and on the DOIT clones the hole positions differ by up to 1.4 mm from one source to the next. Say whether the header pins point down, the board is bare or jumper wires stay plugged in, and the base gets that much room underneath.",
        whyPoints: [
          "15 boards: DOIT DevKit V1, ESP32-DevKitC V4, the ESP32-S3, C6 and C3 DevKits, YD-ESP32-S3, C3 SuperMini, S3-Zero, four Seeed XIAO, Arduino Nano ESP32, LilyGO T-Display-S3 and ESP32-CAM",
          "Held in a pocket that follows the board's outline with 0.3 mm a side and pressed down by ribs in the lid — no pegs to cut off",
          "Room underneath for soldered pins or for female jumper wires, set by one choice",
          "USB openings sized for the plug, poke holes over the buttons, openings for the camera, the display and the SD card where the board has them",
          "Optional wire slot or PG7 cable gland hole, wall-mount ears and lid vents",
        ],
        sizes: {
          title: "The 15 boards and their cases",
          intro: "Each case at the defaults (fit 0.3, wall 2, room past the antenna 2, no wire exit), in mm; the height is base and lid together with the pins pointing down / no pins / jumper wires. A board is in the list only when its geometry is real: vendor CAD (STEP or DXF) that we measured, an official drawing, or, for clone boards, at least two independent sources that agree — with the pocket covering the spread between them. Each row opens the generator on that board.",
          head: ["Board", "Board data from", "Case outside", "Over the screw bosses", "Height", "Screws", ""],
          rows: [
            ["ESP32 DevKit V1 (DOIT 30-pin)", "Clone board: a full STEP with every part, outline from five sources (51.4–52.0 × 27.9–28.5); the pocket covers the spread"],
            ["ESP32-DevKitC V4 (38-pin)", "Espressif dimension DXF and PCB layout (nothing under the board); connector heights from other boards' STEPs"],
            ["ESP32-S3-DevKitC-1", "Espressif dimension DXF and PCB layout (nothing under the board); connector heights from other boards' STEPs"],
            ["YD-ESP32-S3 (N16R8 44-pin)", "The maker's drawing and an independent STEP, which agree; the USB-C openings cover both"],
            ["ESP32-C3 SuperMini", "Clone board: seller drawing and a community STEP; the pocket takes boards up to 1.5 mm longer"],
            ["ESP32-C6-DevKitC-1", "Espressif dimension DXF and PCB layout (nothing under the board); connector heights from other boards' STEPs"],
            ["ESP32-C3-DevKitM-1", "Espressif dimension DXF and PCB layout (nothing under the board); connector heights from other boards' STEPs"],
            ["Waveshare ESP32-S3-Zero", "Waveshare drawing and STEP"],
            ["Seeed XIAO ESP32S3", "Seeed STEP and DXF (external u.FL antenna)"],
            ["Seeed XIAO ESP32S3 Sense", "Seeed STEP of the camera stack; the camera pokes 3.76 mm through the lid; no microSD opening (the slot is not in the STEP)"],
            ["Seeed XIAO ESP32C6", "Seeed's own STEP and KiCad PCB"],
            ["Seeed XIAO ESP32C3", "Community STEP checked against Seeed's KiCad PCB; PCB thickness not published, the case assumes 1.25"],
            ["Arduino Nano ESP32", "Arduino STEP and datasheet"],
            ["LilyGO T-Display-S3", "LilyGO PCB and full STEP; window over the display glass"],
            ["ESP32-CAM (AI-Thinker)", "Ai-Thinker drawing and a community STEP; the pocket covers the 40–40.5 length spread"],
          ],
          open: "Open",
          note: "Where a board's PCB thickness is not published, the case assumes 1.6 mm, the top of the measured range: a thinner board sits a little lower and gets up to about 0.7 mm of play under the ribs, it is never crushed. With a PG7 gland the lid grows to hold the locknut and the screws can get longer (DevKit V1: M3 × 20, 23.6 mm tall).",
        },
        faqs: [
          { q: "Why does the board sit in a pocket instead of on pegs or screws?", a: "Espressif's DevKitC boards have no mounting holes, and on the DOIT clones the hole positions differ by up to 1.4 mm between sources. On the most-downloaded ESP32 case on MakerWorld, at least 12 comments say they had to cut the pegs out. So the pocket follows the board's outline with 0.3 mm a side, the board rests on pads where its underside is free, and ribs under the lid hold it down. If your clone is a little bigger, raise the fit clearance — users of other cases scale them 101–110 %." },
          { q: "Will it fit with the header pins soldered on, or with jumper wires plugged in?", a: "Most boards are sold with the pins soldered pointing down, so that is the default: the pin tips reach 8.54 mm below the board and the base leaves 1 mm more. \"Not enough room underneath for Dupont connector cables\" is a common complaint on other cases — choose \"Jumper wires on the pins\" and the base makes room for 14 mm Dupont housings and a 5 mm wire bend (33.6 mm tall on a DevKit V1). XIAO, C3 SuperMini, S3-Zero, Nano ESP32 and T-Display-S3 boards are sold without headers fitted; \"No pins\" gives the flattest case." },
          { q: "Does the case hurt Wi-Fi?", a: "We have not measured it, and the page makes no claim about the signal. Espressif's hardware design guidelines recommend at least 15 mm of clearance round a PCB antenna inside a housing, in all directions, and say the end product should be tested for throughput and range. \"Room past the antenna\" goes up to 15 mm past the antenna end, across the full width (an ESP32-S3-DevKitC-1 case grows from 75.8 to 88.8 mm); the sides stay at the pocket wall. In about 1,000 comments on popular ESP32 cases we found no complaint about reception; the antenna complaints were about the board not fitting." },
          { q: "Which screws and which filament?", a: "Four M3 countersunk screws (ISO 10642 / DIN 7991) go down through the lid into self-tapping pilots in the base: M3 × 16 for every board except the ESP32-CAM, which takes M3 × 20 (a PG7 gland can lengthen them too). The generator picks the shortest standard length that leaves 6 mm of thread in the base. Print like the top-listed cases: PLA or PETG, 0.2 mm layers, no supports — the base floor-down and the lid ceiling-down, as they lie on the plate; the only bridges are over the vents and windows. Use PETG for the ESP32-CAM." },
          { q: "Does the ESP32-CAM case fit the CAM-MB programmer base?", a: "No. There is no CAD file or drawing of the ESP32-CAM-MB, only retail sizes that disagree (40 × 27 × 10, 39.8 × 27, 40 × 25), so the case is for the bare board powered through its pins, and it always has a wire slot for those wires. Program the board on the MB base outside the case." },
          { q: "Why isn't my ESP32 board in the list?", a: "A board goes in only when its geometry is real: vendor CAD, an official drawing, or two independent sources that agree. Left out for now: the 38-pin USB-C clones (no CAD, lengths from 48.26 to 51 mm), the USB-C version of the DOIT DevKit V1, the ESP32-S3 SuperMini, NodeMCU-32S, the LOLIN mini boards (connectors not dimensioned), the original LilyGO T-Display and the Freenove and M5Stack camera boards. Pick the closest board and use “AI edit” to change it. ESP32 is a trademark of Espressif Systems and the board names belong to their makers; this generator makes compatible cases and is not affiliated with them." },
          { q: "Has this case been printed and tested?", a: "Not yet. The 11 boards that have a vendor or community STEP file (all but the four Espressif DevKits, which come as DXF drawings) were placed in their cases with zero overlap with base and lid, and 14 automated checks pass on every board and pin mode — but no case has been printed. Still to check on real prints: the 0.3 mm fit on each board, whether the ribs leave a thin board rattling (a dab of hot glue is the users' own fix), the M3 screws self-tapping in printed pilots, reaching the buttons with a paperclip, the ESP32-CAM lens slot, flash window and SD card, the XIAO Sense camera window, the T-Display-S3 glass rim, real plugs in the openings, the PG7 gland, and Wi-Fi through the case." },
        ],
      },
      zh: {
        name: "ESP32 外壳生成器",
        title: "ESP32 外壳生成器 — DevKit、S3、C3、XIAO、ESP32-CAM 开发板 3D 打印外壳，导出 STL | Forgent3D",
        description: "在线生成可 3D 打印的 ESP32 外壳：DOIT DevKit V1、乐鑫 DevKitC、C3 SuperMini、XIAO、ESP32-CAM 等 15 款开发板，按板子外形卡住，排针或杜邦线留足空间，螺丝固定上盖。免费导出 STL，另有精确 STEP。",
        h1: "ESP32 外壳生成器：15 款 ESP32 开发板的 3D 打印外壳，按板子外形卡住",
        intro: "选你的开发板——默认 30 针 DOIT ESP32 DevKit V1——得到上下两件式外壳：板子放进底壳的卡槽，上盖的压筋停在模组屏蔽罩和 USB 外壳上方 0.3 mm，四颗 M3 沉头螺丝从上面拧紧。板子靠外形固定，不靠安装孔：乐鑫的 DevKitC 板没有安装孔，DOIT 兼容板的孔位在不同来源之间能差 1.4 mm。再选排针朝下、不焊排针还是插着杜邦线，底壳就在板下留出对应的空间。",
        whyPoints: [
          "15 款板子：DOIT DevKit V1、ESP32-DevKitC V4、ESP32-S3 / C6 / C3 官方 DevKit、YD-ESP32-S3、C3 SuperMini、S3-Zero、四款 Seeed XIAO、Arduino Nano ESP32、LilyGO T-Display-S3、ESP32-CAM",
          "按板子外形做卡槽、每边 0.3 mm，上盖压筋压住——没有要剪掉的定位柱",
          "板下空间一项选好：已焊排针，或插着杜邦线",
          "USB 开孔按插头大小，按键上方开孔，有摄像头、屏幕、SD 卡的板子就开对应的窗",
          "可选出线槽或 PG7 防水接头孔、安装耳、上盖散热孔",
        ],
        sizes: {
          title: "15 款开发板和它们的外壳",
          intro: "每款外壳都按默认值（间隙 0.3、壁厚 2、天线端留空 2、无出线口），单位 mm；高度是底壳加上盖，依次为排针朝下 / 不焊排针 / 插杜邦线。只有几何数据是真的板子才进列表：我们实测过的厂商 CAD（STEP 或 DXF）、官方图纸，或者兼容板至少两个互相独立且一致的来源——卡槽覆盖它们之间的差异。点每一行直接打开那块板的外壳。",
          head: ["开发板", "板子数据来源", "外壳外廓", "螺丝柱外廓", "高度", "螺丝", ""],
          rows: [
            ["ESP32 DevKit V1（DOIT 30 针）", "兼容板：含全部元件的 STEP，外形取五个来源（51.4–52.0 × 27.9–28.5），卡槽覆盖这个范围"],
            ["ESP32-DevKitC V4（38 针）", "乐鑫尺寸 DXF 和 PCB 布局图（板底无元件）；接口高度取自其他板子的 STEP"],
            ["ESP32-S3-DevKitC-1", "乐鑫尺寸 DXF 和 PCB 布局图（板底无元件）；接口高度取自其他板子的 STEP"],
            ["YD-ESP32-S3（N16R8 44 针）", "厂家图纸和一份独立的 STEP，两者一致；USB-C 开孔同时覆盖两者"],
            ["ESP32-C3 SuperMini", "兼容板：卖家图纸和社区 STEP；卡槽能放下长 1.5 mm 以内的板子"],
            ["ESP32-C6-DevKitC-1", "乐鑫尺寸 DXF 和 PCB 布局图（板底无元件）；接口高度取自其他板子的 STEP"],
            ["ESP32-C3-DevKitM-1", "乐鑫尺寸 DXF 和 PCB 布局图（板底无元件）；接口高度取自其他板子的 STEP"],
            ["微雪 ESP32-S3-Zero", "微雪图纸和 STEP"],
            ["Seeed XIAO ESP32S3", "Seeed STEP 和 DXF（外接 u.FL 天线）"],
            ["Seeed XIAO ESP32S3 Sense", "Seeed 摄像头组件 STEP；摄像头从上盖伸出 3.76 mm；不开 microSD 口（STEP 里没有卡槽）"],
            ["Seeed XIAO ESP32C6", "Seeed 官方 STEP 和 KiCad PCB"],
            ["Seeed XIAO ESP32C3", "社区 STEP，已对照 Seeed KiCad PCB；板厚未公布，外壳按 1.25 做"],
            ["Arduino Nano ESP32", "Arduino STEP 和规格书"],
            ["LilyGO T-Display-S3", "LilyGO PCB 和整板 STEP；屏幕玻璃上方开窗"],
            ["ESP32-CAM（安信可）", "安信可图纸和社区 STEP；卡槽覆盖 40–40.5 的长度差异"],
          ],
          open: "打开",
          note: "板厚没有公布的板子，外壳按 1.6 mm 做，即实测范围的上限：薄一些的板子会稍低，压筋下最多约 0.7 mm 的晃动，但绝不会压坏板子。选 PG7 防水接头时，上盖加高放锁紧螺母，螺丝可能变长（DevKit V1：M3 × 20，高 23.6 mm）。",
        },
        faqs: [
          { q: "为什么板子放在卡槽里，而不是用定位柱或螺丝固定？", a: "乐鑫的 DevKitC 板没有安装孔，DOIT 兼容板的孔位在不同来源之间能差 1.4 mm。MakerWorld 上下载最多的 ESP32 外壳，至少 12 条评论说得把定位柱剪掉。所以卡槽按板子外形做、每边留 0.3 mm，板子底面空着的地方有支撑垫，上盖下的压筋把它压住。你的兼容板偏大一点，就把装配间隙调大——用别的外壳时，有人要放大到 101–110 %。" },
          { q: "焊了排针、或者插着杜邦线，装得下吗？", a: "多数板子出厂就焊好排针、针脚朝下，所以这是默认：针尖到板下 8.54 mm，底壳再多留 1 mm。别的外壳下常见的抱怨是「板下没地方插杜邦线」——选「排针上插杜邦线」，底壳会给 14 mm 长的杜邦头和 5 mm 的线弯留出空间（DevKit V1 总高 33.6 mm）。XIAO、C3 SuperMini、S3-Zero、Nano ESP32、T-Display-S3 出厂没有焊排针；选「不焊排针」外壳最薄。" },
          { q: "外壳会影响 Wi-Fi 吗？", a: "我们没有测过，页面也不对信号做任何承诺。乐鑫的硬件设计指南建议：外壳内 PCB 天线四周各方向至少留 15 mm 净空，并且成品要实测吞吐量和通信距离。「天线端留空」最多能在天线那一端外面留 15 mm，整个宽度都空（ESP32-S3-DevKitC-1 的外壳从 75.8 mm 长到 88.8 mm）；两侧仍是卡槽壁。在热门 ESP32 外壳的约 1,000 条评论里，我们没找到抱怨信号的；和天线有关的抱怨都是板子装不进去。" },
          { q: "用什么螺丝、什么材料？", a: "四颗 M3 沉头螺丝（ISO 10642 / DIN 7991）从上盖往下拧进底壳的自攻底孔：除 ESP32-CAM 用 M3 × 20 外，其他板子都是 M3 × 16（加 PG7 防水接头也可能变长）。生成器会选在底壳里留够 6 mm 螺纹的最短标准长度。和热门外壳一样打：PLA 或 PETG、0.2 mm 层高、不用支撑——底壳底面朝下、上盖顶面朝下，就按打印板上摆好的方向；只有散热孔和开窗处是搭桥。ESP32-CAM 请用 PETG。" },
          { q: "ESP32-CAM 外壳能连 CAM-MB 下载底板一起装吗？", a: "不能。ESP32-CAM-MB 没有 CAD 文件也没有图纸，只有互相对不上的商品尺寸（40 × 27 × 10、39.8 × 27、40 × 25），所以外壳是给单独一块、靠排针供电的板子做的，并且总带出线槽走这几根线。烧录请在外壳外面插 MB 底板进行。" },
          { q: "为什么没有我的 ESP32 板子？", a: "只有几何数据是真的板子才进列表：厂商 CAD、官方图纸，或两个互相独立且一致的来源。暂时没有：38 针 USB-C 兼容板（没有 CAD，长度 48.26 到 51 mm 不等）、USB-C 版 DOIT DevKit V1、ESP32-S3 SuperMini、NodeMCU-32S、LOLIN mini 系列（接口没标尺寸）、初代 LilyGO T-Display，以及 Freenove、M5Stack 的摄像头板。可以选最接近的板子，再用「AI 修改」改成你的。ESP32 是乐鑫科技的商标，各板子名称归其厂商所有；这个生成器做的是兼容外壳，与它们没有关联。" },
          { q: "这个外壳实际打印验证过吗？", a: "还没有。有厂商或社区 STEP 文件的 11 块板（除四款乐鑫 DevKit，它们只有 DXF 图纸）都放进外壳里检查过，和底壳、上盖零干涉；每块板、每种板下空间都过了 14 项自动检查——但还没有实际打印。还要在实物上确认：每块板 0.3 mm 间隙的松紧；薄板在压筋下会不会晃（用户自己的办法是点一点热熔胶）；M3 螺丝在打印底孔里自攻；回形针能不能按到按键；ESP32-CAM 的镜头槽、闪光灯窗和 SD 卡；XIAO Sense 的摄像头窗；T-Display-S3 的玻璃压边；真插头插进开孔；PG7 防水接头；以及隔着外壳的 Wi-Fi。" },
        ],
      },
    },
  },
  {
    slug: "wall-hook-generator",
    modelDir: "wall-hook",
    icon: "ʃ",
    family: "home",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { HOOKS: "4", DEPTH: "20", TIP: "10", WIDTH: "15" }, label: { en: "Key rack: four small hooks in a row", zh: "钥匙挂架：一排四个小钩" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "The default screw-mounted hook exports as one exact solid of 16 faces: 8 planes, 6 true cylinders (the screw holes and the hook's rounded inside and tip) and 2 cones (the countersinks).",
      ],
      zh: [
        "默认的螺丝固定挂钩导出为一个精确实体，16 个面：8 个平面、6 个真圆柱面（螺丝孔、钩内弧和圆头钩尖）、2 个圆锥面（沉头）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "Can I 3D print a towel hook that sticks on without drilling?", a: "Yes: https://www.forgent3d.com/en/generators/wall-hook-generator?MOUNT=Adhesive%20strip%2019&STYLE=Double&DEPTH=25 — two stacked hooks on a back plate sized for a large 3M Command strip (19 × 69 mm), with the pull tab left free below. 3M rates the large strip at 5 lb and says it is not for wet rooms, so hang the towel outside the shower." },
        { q: "I need a hook that hangs over a 40 mm door.", a: "https://www.forgent3d.com/en/generators/wall-hook-generator?MOUNT=Over%20a%2040%20mm%20door&STYLE=Double — a 3 mm strap goes over the door top with 0.8 mm of clearance, and two hooks hang on the inside. Check the gap above your door first: a strap that is too thick stops the door closing, the most common complaint about printed over-door hooks." },
      ],
      zh: [
        { q: "不打孔，能 3D 打印一个粘墙上的毛巾挂钩吗？", a: "可以：https://www.forgent3d.com/zh/generators/wall-hook-generator?MOUNT=Adhesive%20strip%2019&STYLE=Double&DEPTH=25 ，上下两个钩，背板按 3M Command 大号无痕胶条（19 × 69 mm）做，拉条留在下面。3M 给大号胶条标的承重是 5 磅（约 2.3 kg），并说明不适合潮湿环境，所以别装在淋浴间里。" },
        { q: "门厚 40 mm，要一个挂在门后的挂钩。", a: "https://www.forgent3d.com/zh/generators/wall-hook-generator?MOUNT=Over%20a%2040%20mm%20door&STYLE=Double ：3 mm 厚的挂带跨过门顶，留 0.8 mm 余量，门内侧挂两个钩。先看看门顶和门框之间的缝：挂带太厚门就关不上，这是打印门后挂钩最常见的抱怨。" },
      ],
    },
    // Evidence: generator-models/wall-hook/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["wall hook generator", "3d printed wall hook", "command strip hook stl", "over door hook 3d print"],
      zh: ["墙面挂钩生成器", "挂钩 3d打印", "免打孔挂钩 STL", "门后挂钩"],
    },
    params: [
      { key: "MOUNT", default: "Screws 4 mm (#8)", range: "3 screw sizes / 2 adhesive strips / 4 door thicknesses", unit: "", label: { en: "Mount", zh: "安装方式" }, desc: { en: "Countersunk 3.5, 4 or 5 mm screws; a Command Medium (16 × 46) or Large (19 × 69) strip; or over a 19 mm cabinet door or a 35, 40 or 45 mm door.", zh: "3.5、4、5 mm 沉头螺丝；3M Command 中号（16 × 46）或大号（19 × 69）胶条；或挂在 19 mm 柜门、35 / 40 / 45 mm 门上。" } },
      { key: "STYLE", default: "Single hook", range: "Single hook / Double hook (stacked)", unit: "", label: { en: "Style", zh: "款式" }, desc: { en: "One J, or two stacked on one plate.", zh: "一个 J 形钩，或一块背板上下两个钩。" } },
      { key: "HOOKS", default: "1", range: "1 – 5", unit: "", label: { en: "Hooks in a row", zh: "一排钩数" }, desc: { en: "Side by side on one plate: a key or coat rack.", zh: "一块背板上并排几个：钥匙架、衣帽架。" } },
      { key: "DEPTH", default: "30", range: "10 – 100", unit: "mm", label: { en: "Depth", zh: "钩深" }, desc: { en: "Inside depth from the plate to the tip.", zh: "从背板到钩尖的内侧深度。" } },
      { key: "TIP", default: "15", range: "0 – 40", unit: "mm", label: { en: "Tip height", zh: "钩尖上翘高度" }, desc: { en: "How far the tip turns up; 0 for a straight peg.", zh: "钩尖往上翘多高；0 就是直杆。" } },
      { key: "WIDTH", default: "20", range: "12 – 40", unit: "mm", label: { en: "Width", zh: "宽度" }, desc: { en: "Widened automatically when a screw head or a strip needs more.", zh: "螺丝头或胶条放不下时自动加宽。" } },
      { key: "THICKNESS", default: "6", range: "4 – 12", unit: "mm", label: { en: "Thickness", zh: "厚度" }, desc: { en: "Of the plate and the J; thicker for heavy bags and tools.", zh: "背板和钩身的厚度；挂重包、工具就加厚。" } },
    ],
    copy: {
      en: {
        name: "Wall Hook Generator",
        title: "Wall Hook Generator — Screw, Adhesive Strip & Over-Door Hooks (STL / STEP) | Forgent3D",
        description: "3D printable wall hooks: screw-mounted with countersunk holes, sized for Command adhesive strips, or over a cabinet or room door. Single, double or a row of up to five. Free STL / STEP.",
        h1: "Wall hook generator: screw, adhesive or over-door hooks",
        intro: "Choose how the hook mounts — countersunk screws, a 3M Command strip, or over a door of your thickness — then set its depth, tip and width. The screw holes sit above the hook so a screwdriver reaches them; the adhesive plate is sized to 3M's own strip dimensions with the pull tab left free; the door strap fits the door with 0.8 mm to spare. One hook, two stacked, or a row of up to five.",
        whyPoints: [
          "Three ways to mount: countersunk screws, Command Medium or Large strips, over a 19–45 mm door",
          "Screw holes above the hook, reachable with a screwdriver, with plastic left under the countersink against splitting",
          "Single, stacked double, or up to five in a row for keys and coats",
          "Exported to print on its side, so the layers run along the hook",
        ],
        faqs: [
          { q: "Which way do I print it?", a: "On its side, so the layers run around the J. In CNC Kitchen's tests the same hooks printed standing broke at half the load or less, splitting between layers. For heavy loads use PETG or ASA and more walls; printed over-door hooks in PLA are reported splitting at the top corner." },
          { q: "How much does the adhesive version hold?", a: "As much as the strip: 3M rates Command Large strips at 5 lb and Medium at 3 lb, not for wet rooms. Press the plate on firmly, wait an hour before hanging anything, and remove the strip by stretching it straight down along the wall, never by pulling it toward you. Makers report the tape lets go before the plastic does." },
          { q: "The screw split the hook. What now?", a: "Overtightened or oversized screws splitting the plate is the most common complaint about printed wall hooks. The holes here are ISO 273 clearance holes with countersinks for standard wood-screw heads and 3 mm of plastic below; stop when the head sits flush. Command is a 3M trademark; the adhesive version is made to fit its strips." },
        ],
      },
      zh: {
        name: "墙面挂钩生成器",
        title: "墙面挂钩生成器 — 螺丝固定、免打孔胶条、门后挂钩在线定制，导出 STL / STEP | Forgent3D",
        description: "在线生成可 3D 打印的墙面挂钩：沉头螺丝固定、按 3M Command 免打孔胶条尺寸做，或挂在柜门、房门上。单钩、双钩或一排最多五个。免费导出 STL / STEP。",
        h1: "墙面挂钩生成器：螺丝、免打孔胶条或挂门安装",
        intro: "先选安装方式——沉头螺丝、3M Command 无痕胶条，或按你的门厚挂在门上——再定钩深、钩尖和宽度。螺丝孔在钩的上方，起子拧得到；胶条背板按 3M 官方的胶条尺寸做，拉条留在外面；挂门款给门厚留 0.8 mm 余量。单钩、上下双钩，或一排最多五个。",
        whyPoints: [
          "三种安装：沉头螺丝、Command 中号 / 大号胶条、挂 19–45 mm 的门",
          "螺丝孔在钩的上方，起子拧得到；沉头下面留够塑料，防止拧裂",
          "单钩、上下双钩，或一排最多五个，挂钥匙、挂衣服",
          "导出时就是侧放的打印姿态，层纹顺着钩身走",
        ],
        faqs: [
          { q: "应该怎么摆着打印？", a: "侧放，让层纹沿着 J 形钩身绕一圈。CNC Kitchen 的测试里，同样的挂钩竖着打，承重只有侧放的一半甚至更少，都是从层间裂开。挂重物用 PETG 或 ASA、多加几圈墙；有人反映 PLA 打的门后挂钩在门顶转角处裂开。" },
          { q: "胶条款能挂多重？", a: "取决于胶条：3M 给 Command 大号胶条标 5 磅（约 2.3 kg）、中号 3 磅（约 1.4 kg），不适合潮湿环境。背板用力压实，等一小时再挂东西；拆的时候捏住拉条贴着墙面往下慢慢拉长，别往外扯。有作者反映，先松开的往往是胶条而不是塑料件。" },
          { q: "拧螺丝把挂钩拧裂了怎么办？", a: "螺丝拧太紧或太粗把背板撑裂，是打印墙面挂钩最常见的抱怨。这里的孔按 ISO 273 开过孔、按标准木螺丝头做沉头，沉头下面留 3 mm 塑料；螺丝头和表面齐平就别再拧。Command 是 3M 的商标，胶条款只是按它的胶条尺寸做。" },
        ],
      },
    },
  },
  {
    slug: "phone-stand-generator",
    modelDir: "phone-stand",
    icon: "◿",
    family: "home",
    // Last real change to this page's copy (sitemap lastmod) — move it only when the text changes.
    updated: "2026-10-17",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { THICKNESS: "14", ANGLE: "65", REST_HEIGHT: "30" }, label: { en: "For a phone in a thick case, a little more upright", zh: "厚壳手机用，角度更直一点" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-17): faces by surface type.
    step: {
      en: [
        "Exports as one exact solid of 33 faces: 27 planes and 6 true cylinders (the two rounded bends at the top and the four recesses for rubber feet).",
      ],
      zh: [
        "导出为一个精确实体，33 个面：27 个平面、6 个真圆柱面（顶部两道折弯圆角和四个防滑垫凹槽）。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I 3D print a phone stand I can charge in while it's upright?", a: "Open https://www.forgent3d.com/en/generators/phone-stand-generator?THICKNESS=12&REST_HEIGHT=35&WIDTH=80 — the ledge sits 35 mm above the desk so a USB-C plug fits under a portrait phone, a gap in the front lip leaves the port free, and the cable leaves through an opening at the back that the whole plug passes through. Set THICKNESS to your phone measured over its case." },
        { q: "Can the same stand hold a tablet in a thick case?", a: "Yes: https://www.forgent3d.com/en/generators/phone-stand-generator?DEVICE=Tablet%2C%20landscape&THICKNESS=16&WIDTH=100 — the backrest is sized for a tablet held landscape (179.5 mm, an 11-inch iPad's width) and the ledge takes 16 mm with the case. Stands of this shape are sold for tablets the same way, with a wider ledge." },
      ],
      zh: [
        { q: "竖着放、一边充电一边看的手机支架怎么打印？", a: "打开 https://www.forgent3d.com/zh/generators/phone-stand-generator?THICKNESS=12&REST_HEIGHT=35&WIDTH=80 就是：托板离桌 35 mm，竖放时 USB-C 插头能插在手机下面，前唇中间有豁口让出充电口，线从背后的出线孔走，整个插头都能穿过去。THICKNESS 填手机带壳的厚度。" },
        { q: "同一个支架能放带厚壳的平板吗？", a: "可以：https://www.forgent3d.com/zh/generators/phone-stand-generator?DEVICE=Tablet%2C%20landscape&THICKNESS=16&WIDTH=100 ，靠背按平板横放的尺寸做（179.5 mm，11 英寸 iPad 的宽度），托板放得下带壳 16 mm 厚的平板。市面上这种形状的平板支架也是这样，只是托板更宽。" },
      ],
    },
    // Evidence: generator-models/phone-stand/EVIDENCE.md in the platform repo.
    keywords: {
      en: ["phone stand generator", "customizable phone stand stl", "desk phone stand 3d print", "phone stand with charging slot"],
      zh: ["手机支架生成器", "桌面手机支架 3d打印", "手机平板支架 STL", "懒人支架"],
    },
    params: [
      { key: "DEVICE", default: "Phone, portrait", range: "Phone portrait / Phone landscape / Tablet landscape", unit: "", label: { en: "Holds", zh: "放置方式" }, desc: { en: "Sizes the backrest: 163.3 mm for a large phone upright, 77.9 sideways, 179.5 for a tablet.", zh: "决定靠背长度：大屏手机竖放按 163.3 mm、横放 77.9，平板 179.5。" } },
      { key: "THICKNESS", default: "11", range: "5 – 17", unit: "mm", label: { en: "Phone thickness with case", zh: "手机厚度（含壳）" }, desc: { en: "Measure over the case: a phone in a MagSafe case is about 11, a rugged case up to 17.", zh: "带壳量：手机加 MagSafe 壳约 11，加三防壳最厚到 17。" } },
      { key: "ANGLE", default: "60", range: "45 – 75", unit: "°", label: { en: "Viewing angle", zh: "观看角度" }, desc: { en: "How far the phone leans back from the desk.", zh: "手机相对桌面后仰的角度。" } },
      { key: "REST_HEIGHT", default: "25", range: "18 – 50", unit: "mm", label: { en: "Phone rest height", zh: "手机托离桌高度" }, desc: { en: "Raise it so a charging plug fits under a portrait phone.", zh: "竖放充电时调高，让插头能插在手机下面。" } },
      { key: "WIDTH", default: "60", range: "50 – 120", unit: "mm", label: { en: "Stand width", zh: "支架宽度" }, desc: { en: "Wider for tablets.", zh: "放平板就加宽。" } },
      { key: "CABLE", default: "on", range: "on / off", unit: "", label: { en: "Charging cable slot", zh: "充电线口" }, desc: { en: "An opening at the back for the cable, big enough for the plug to pass.", zh: "背后的出线孔，插头能整个穿过。" } },
    ],
    copy: {
      en: {
        name: "Phone Stand Generator",
        title: "Phone Stand Generator — Desk Phone & Tablet Stands with a Charging Slot (STL / STEP) | Forgent3D",
        description: "A 3D printable desk phone stand sized to your phone in its case: viewing angle 45–75°, ledge height for charging, a cable opening the plug fits through, portrait, landscape or tablet. Free STL / STEP.",
        h1: "Phone stand generator: a desk stand that fits your phone and its case",
        intro: "Enter your phone's thickness measured over its case — 11 mm by default — pick the viewing angle and how high the ledge sits, and get a one-piece A-frame stand like the most-downloaded printed ones. The backrest is long enough to support the phone past its middle, a gap in the front lip leaves the charging port and the bottom of the screen free, and the cable leaves through an opening at the back that the plug passes through.",
        whyPoints: [
          "The ledge fits your phone in its case, not a bare phone",
          "Ledge height for charging upright, with a cable opening the plug passes through",
          "Backrest sized to the device, portrait, landscape or tablet, so it doesn't tip backwards",
          "Recesses for four 8 mm rubber feet so it stays put on the desk",
        ],
        faqs: [
          { q: "My phone in its case doesn't fit the stand I printed.", a: "That is the most common complaint about printed phone stands, and the \"for thicker phones\" versions of popular stands are downloaded more than the originals. Measure your phone over its case and enter that; the ledge adds 1 mm of clearance." },
          { q: "How do I charge it while it stands?", a: "Keep the cable slot on and raise the rest height until your plug fits under the phone; bent plugs need less. The rear opening is larger than the USB-C plug keep-out Apple specifies (12.45 × 6.60 mm), so the plug passes through it, and the gap in the lip leaves the port and the bottom of the screen free for swiping." },
          { q: "How do I print it?", a: "Lay it on its side in the slicer, so the profile is on the bed: no supports, and the layers run along the bends. Stick four 8 mm silicone feet into the recesses underneath if it slides on your desk." },
        ],
      },
      zh: {
        name: "手机支架生成器",
        title: "手机支架生成器 — 桌面手机 / 平板支架，带充电线口，按带壳厚度在线生成，导出 STL / STEP | Forgent3D",
        description: "在线生成可 3D 打印的桌面手机支架：按手机带壳厚度做卡槽，观看角度 45–75°，托板高度可调方便充电，出线孔插头能穿过，竖放、横放、平板都行。免费导出 STL / STEP。",
        h1: "手机支架生成器：按你的手机和手机壳做的桌面支架",
        intro: "输入手机带壳的厚度——默认 11 mm——再选观看角度和托板高度，得到一个和下载量最高的打印款一样的一体 A 字支架。靠背长到能托住手机的一大半，前唇中间留豁口让出充电口和屏幕下沿，充电线从背后的出线孔走，插头能整个穿过去。",
        whyPoints: [
          "卡槽按带壳的厚度做，不是按裸机",
          "托板高度可调，竖放也能边充边用，出线孔插头穿得过",
          "靠背按设备尺寸做，竖放、横放、平板都不往后翻",
          "底面留四个 8 mm 防滑垫凹槽，在桌上不打滑",
        ],
        faqs: [
          { q: "打出来的支架，带壳的手机放不进去？", a: "这是打印手机支架最常见的抱怨，热门支架的「厚手机版」下载量甚至超过原版。带壳量手机厚度填进去，卡槽会再加 1 mm 余量。" },
          { q: "放在支架上怎么充电？", a: "打开充电线口，把托板调高到插头能插在手机下面；弯头插头可以调低一些。背后的出线孔比苹果规定的 USB-C 插头避让区（12.45 × 6.60 mm）大，插头能穿过去；前唇的豁口让出充电口，也方便从屏幕底部上滑。" },
          { q: "怎么打印？", a: "在切片软件里侧放，让侧面轮廓贴着平台：不用支撑，层纹顺着折弯走。在桌上打滑的话，在底面凹槽里贴四个 8 mm 硅胶垫。" },
        ],
      },
    },
  },
];

// Merge each extra language's file into the entries: copy, parameter labels and descriptions, the example's
// label, the STEP facts, the AI FAQs and the search phrases the page is written for (`keywords`). Numbers, keys
// and links stay the English entry's.
//
// A generator is in a language once its `copy` is translated. One the file does not have yet (a new generator,
// written in en and zh) is simply missing from that language — its index lists the rest — and a parameter the
// translation lacks shows its English label: neither takes any page offline. scripts/check-generator-locales.mjs
// is what insists on complete, current translations.
for (const [locale, file] of Object.entries(EXTRA_LOCALE_FILES)) {
  if (!file.shared) continue;
  for (const g of GENERATORS) {
    const t = file.generators?.[g.slug];
    if (!t?.copy) continue;
    g.copy[locale] = t.copy;
    for (const p of g.params) {
      p.label[locale] = t.params?.[p.key]?.label || p.label.en;
      p.desc[locale] = t.params?.[p.key]?.desc || p.desc.en;
    }
    if (g.example) g.example.label[locale] = t.example || g.example.label.en;
    if (g.step && t.step) g.step[locale] = t.step;
    if (g.aiFaqs && t.aiFaqs) g.aiFaqs[locale] = t.aiFaqs;
    if (t.keywords) g.keywords[locale] = t.keywords;
  }
}

/** Every language with generator pages: en and zh, plus each extra language with its shared copy and at least
 *  one translated generator. */
export const GENERATOR_LOCALES = ["en", "zh", ...Object.keys(EXTRA_LOCALE_FILES).filter((l) => GENERATORS.some((g) => g.copy[l]))];

export function isGeneratorLocale(locale) {
  return GENERATOR_LOCALES.includes(locale);
}

/** The languages this generator's page exists in. */
export function generatorLocales(generator) {
  return GENERATOR_LOCALES.filter((l) => generator.copy[l]);
}

/** The generators with a page in this language. */
export function generatorsIn(locale) {
  return GENERATORS.filter((g) => g.copy[locale]);
}

/** The language of everything around the generator pages (header, home, OpenSCAD pages, blog): en or zh. */
export function siteLocale(locale) {
  return locale === "zh" ? "zh" : "en";
}

/** The app's interface language for a page language: the app has en and zh. */
export function appLanguage(locale) {
  return locale === "zh" ? "zh" : "en";
}

export function getGenerator(slug) {
  return GENERATORS.find((g) => g.slug === slug) || null;
}

export function generatorAppUrl(generator, locale) {
  const lang = appLanguage(locale);
  if (generator.modelDir) return `${APP_BASE}/g/${generator.modelDir}?lang=${lang}`;
  return `${APP_BASE}?lang=${lang}`;
}

/** The generator with its AI edit box already open (app: `?intent=edit`). */
export function generatorAiEditUrl(generator, locale) {
  return `${generatorAppUrl(generator, locale)}&intent=edit`;
}

/** Remix straight into the visitor's models, landing in the workspace next to the AI agent (app: `?intent=ai`). */
export function generatorAgentUrl(generator, locale) {
  return `${generatorAppUrl(generator, locale)}&intent=ai`;
}

/** The generator's parameters as JSON, derived from its model.py by the app (`/api/generators/<modelDir>`). */
export function generatorSchemaUrl(generator) {
  return `${APP_BASE}/api/generators/${generator.modelDir}`;
}


/** This landing page with `generator.example`'s values in the query: it opens the embedded generator on that part.
 *  The knob names are the model.py constants, so the same query works on the app's /g/ URL. */
export function generatorDeepLink(generator, locale) {
  const query = new URLSearchParams(generator.example?.params || {}).toString();
  return `https://www.forgent3d.com/${locale}/generators/${generator.slug}${query ? `?${query}` : ""}`;
}

/** Where "More generators" looks after the page's own family: the nearest kind of part, never the whole catalog. */
const RELATED_FAMILIES = { gears: ["hardware"], hardware: ["gears"], storage: [], fluid: ["hardware"], home: ["storage"], electronics: ["hardware"] };

/** Same family first, then the related families, at most `max` — a link block that stays small as the catalog grows.
 *  Only generators with a page in `locale`. */
export function relatedGenerators(generator, locale, max = 4) {
  const others = generatorsIn(locale).filter((g) => g.slug !== generator.slug);
  const order = [generator.family, ...(RELATED_FAMILIES[generator.family] || [])];
  const picked = [];
  for (const family of order) {
    for (const g of others) if (g.family === family && !picked.includes(g)) picked.push(g);
  }
  return picked.slice(0, max);
}

// UI copy shared by the /generators index and every landing page.
export function generatorsSharedCopy(locale) {
  const extra = EXTRA_LOCALE_FILES[locale];
  if (extra && isGeneratorLocale(locale)) return { ...baseSharedCopy("en"), ...extra.shared };
  return baseSharedCopy(locale);
}

function baseSharedCopy(locale) {
  if (locale === "zh") {
    return {
      catalogLabel: "生成器",
      catalogTitle: "3D 打印生成器 — 参数化模型在线定制 | Forgent3D",
      catalogDescription:
        "免费的在线 3D 打印生成器合集：Gridfinity 收纳盒与底板、带盖收纳盒（滑盖、铰链、磁吸、分格）、软管转接头、漏斗、直齿轮、斜齿轮、锥齿轮、齿条、GT2 同步带轮、联轴器、垫片、工具托盘、2020 型材角码、轴承座、风扇网罩、穿线孔盖、18650 电池支架、管夹、批头收纳、料盘架、树莓派 / Arduino 外壳、ESP32 外壳、洞洞板挂钩、层板三角支架、墙面挂钩、手机支架。调参数、3D 预览、导出 STL / STEP。",
      catalogH1: "3D 打印生成器",
      catalogIntro:
        "每个生成器都是一份真实的参数化 CAD 模型：拧参数实时重建，导出 STL / STEP；参数覆盖不到的需求，交给 AI agent 在同一个模型上继续改。",
      openApp: "打开生成器",
      paramsTitle: "可调参数",
      paramsIntro: "以下参数在生成器里逐项可调，每次修改都会重建真实几何——不是缩放网格。",
      thParam: "参数",
      thDefault: "默认",
      thRange: "范围",
      thDesc: "说明",
      howTitle: "怎么用",
      howSteps: [
        "打开生成器，模型在浏览器里完成首次构建（无需安装任何软件）。",
        "在参数面板里调整尺寸与选项，几何实时重建、随时 3D 预览。",
        "导出 STL / STEP 去打印；或让 AI agent 在同一模型上加参数外的特征。",
      ],
      faqTitle: "常见问题",
      sharedFaqs: [
        {
          q: "生成的模型可以商用吗？",
          a: "可以。用生成器做出来的模型和导出的 STL / STEP 文件归你所有：自己打印、出售打印件、在产品里使用都没有限制，也不需要署名 Forgent3D。",
        },
      ],
      licenseNote: "生成的模型可以商用，无需署名。",
      aiEditCta: "用 AI 修改",
      embedTitle: "直接在这里用",
      embedIntro: "真正的生成器就在你的浏览器里运行：调好参数，点下载按钮导出 STEP 或 STL。不用安装，不用注册。",
      embedLoad: "在这里打开生成器",
      embedNote: "第一次打开会下载约 20 MB 的 CAD 内核。",
      paramsLinkNote: "每个参数都能写进网址，一个链接就能打开你要的那一件。",
      stepTitle: "STEP 文件里是什么",
      stepCommon:
        "STEP AP214，毫米单位，精确 B-rep——能直接在 SolidWorks、Fusion、FreeCAD、Onshape、Inventor 里打开，也能直接交给 CNC 报价。打印用的 STL 也一样能导。",
      compareTitle: "和其他做法比",
      compareHead: ["", "本生成器", "常见在线 STL 生成器", "厂商 CAD 模型库"],
      compareRows: [
        ["范围内任意尺寸", "可以", "可以", "只有目录规格"],
        ["精确曲面的 STEP", "有", "多数只给 STL 网格", "有"],
        ["滑块覆盖不到的改动", "页面上「AI 修改」", "不行", "不行"],
        ["下载要注册", "不用", "多数不用", "常常要"],
      ],
      aiTitle: "让 AI 接着改",
      aiLinkTitle: "把数写进链接",
      aiLinkBody:
        "每个参数都是网址参数，下面这个链接打开的就是示例那一件。ChatGPT、Claude、豆包这类助手照着参数表就能写出这样的链接——参数表（名称、单位、范围）在：",
      aiEditTitle: "在页面上用 AI 改",
      aiEditBody:
        "在生成器里点「AI 修改」，说要改什么——加键槽、开孔、换个形状。AI 直接改零件的 model.py，在你的浏览器里重建，改坏了能撤销。未登录每天也能免费改几次；要保存、要多轮修改，就复制到你的模型里，交给 AI agent。",
      aiWorkspaceTitle: "在工作台里接着改",
      aiWorkspaceBody:
        "改动大、要改好几轮、或者要长期留着：复制到你的模型（免费注册），Forgent3D 的 AI agent 读这份 model.py、改它、重建并自己检查结果。",
      aiWorkspaceCta: "复制并用 AI agent 继续",
      schemaLabel: "参数表（JSON）",
      exampleLabel: "示例",
      featureList: ["参数化：每个尺寸都能调", "导出 STEP（AP214）和 STL", "在浏览器里运行，免安装", "用 AI 修改零件源码", "网址可携带参数值"],
      relatedTitle: "更多生成器",
      scadPrompt: "已经有自己的 .scad 文件？",
      scadLink: "OpenSCAD 转 STEP",
      viewerLink: "在浏览器里预览",
      breadcrumbHome: "首页",
    };
  }
  return {
    catalogLabel: "Generators",
    catalogTitle: "3D Print Generators — Free Parametric Model Makers | Forgent3D",
    catalogDescription:
      "Free online 3D print generators: Gridfinity bins and baseplates, parametric boxes, hose adapters, funnels, spur, helical and bevel gears, gear racks, GT2 pulleys, shaft couplings, washers, tool trays, 2020 extrusion corner brackets, bearing pillow blocks, fan grills, desk grommets, 18650 battery holders, pipe clamps, hex bit holders, spool holders, Raspberry Pi and Arduino cases, ESP32 cases, pegboard hooks, shelf brackets, wall hooks and phone stands. Tune parameters, preview in 3D, export STL / STEP.",
    catalogH1: "3D print generators",
    catalogIntro:
      "Every generator here is a real parametric CAD model: tune the parameters and it rebuilds live, export STL / STEP — and for anything beyond the sliders, the AI agent edits the same model.",
    openApp: "Open the generator",
    paramsTitle: "Parameters you can tune",
    paramsIntro:
      "Each parameter below rebuilds real geometry on every change — this is parametric CAD, not a scaled mesh.",
    thParam: "Parameter",
    thDefault: "Default",
    thRange: "Range",
    thDesc: "What it does",
    howTitle: "How it works",
    howSteps: [
      "Open the generator — the model builds right in your browser, nothing to install.",
      "Tune dimensions and options in the parameter panel; the geometry rebuilds live in 3D.",
      "Export STL / STEP for printing — or ask the AI agent for features beyond the sliders.",
    ],
    faqTitle: "FAQ",
    sharedFaqs: [
      {
        q: "Can I sell prints made with these generators?",
        a: "Yes. Models you generate and the STL / STEP files you export are yours: print them, sell the prints, or use them in a product. No attribution to Forgent3D is required.",
      },
    ],
    licenseNote: "Models you generate are yours to use commercially, no attribution required.",
    aiEditCta: "Edit with AI",
    embedTitle: "Use it right here",
    embedIntro: "The real generator runs in your browser: set the parameters, then download STEP or STL. Nothing to install, no sign-up.",
    embedLoad: "Open the generator here",
    embedNote: "The first open downloads the CAD engine (about 20 MB).",
    paramsLinkNote: "Every parameter can go in the page's link, so one link opens exactly the part you want.",
    stepTitle: "What's in the STEP file",
    stepCommon:
      "STEP AP214 in millimetres, exact B-rep — it opens directly in SolidWorks, Fusion, FreeCAD, Onshape or Inventor, and goes straight into a CNC quote form. STL for the slicer is one click too.",
    compareTitle: "How it compares",
    compareHead: ["", "This generator", "Typical online STL generator", "Vendor CAD library"],
    compareRows: [
      ["Any size within the range", "Yes", "Yes", "Catalog sizes only"],
      ["STEP with exact surfaces", "Yes", "Usually an STL mesh only", "Yes"],
      ["Changes the sliders don't cover", "“AI edit” on the page", "No", "No"],
      ["Account needed to download", "No", "Usually no", "Often"],
    ],
    aiTitle: "Let AI change it",
    aiLinkTitle: "Put the numbers in the link",
    aiLinkBody:
      "Every parameter is a link parameter; the link below opens the example part. ChatGPT, Claude or any assistant can write one like it from the parameter list (names, units, ranges) at:",
    aiEditTitle: "Edit with AI on the page",
    aiEditBody:
      "Press “AI edit” in the generator and say what to change — a keyway, holes, a different shape. The AI edits the part's model.py and it rebuilds in your browser, with undo. A few edits a day are free without signing in; to keep the result or go further, copy it into your models and continue with the AI agent.",
    aiWorkspaceTitle: "Keep going in your workspace",
    aiWorkspaceBody:
      "For bigger changes, several rounds, or a part you want to keep: copy it into your models (free account). The Forgent3D AI agent reads the model.py, edits it, rebuilds it and checks the result itself.",
    aiWorkspaceCta: "Copy and continue with the AI agent",
    schemaLabel: "parameter list (JSON)",
    exampleLabel: "Example",
    featureList: ["Parametric: every dimension adjustable", "STEP (AP214) and STL export", "Runs in the browser, no install", "AI edit of the part's source", "Links carry parameter values"],
    relatedTitle: "More generators",
    scadPrompt: "Already have your own .scad file?",
    scadLink: "Convert OpenSCAD to STEP",
    viewerLink: "Preview it in the browser",
    breadcrumbHome: "Home",
  };
}
