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

// NEXT_PUBLIC_APP_BASE points the pages at a local app (http://localhost:3000) for testing; production never sets it.
export const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || "https://app.forgent3d.com";

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
    keywords: [
      "gridfinity bin generator",
      "custom gridfinity bins",
      "gridfinity generator online",
      "gridfinity divider bins stl",
    ],
    params: [
      { key: "GRID_X", default: "3", range: "1 – 8", unit: "u", label: { en: "Grid units X", zh: "格数 X" }, desc: { en: "Bin width in 42 mm Gridfinity units.", zh: "宽度方向占多少个 42 mm 标准格。" } },
      { key: "GRID_Y", default: "2", range: "1 – 8", unit: "u", label: { en: "Grid units Y", zh: "格数 Y" }, desc: { en: "Bin depth in 42 mm Gridfinity units.", zh: "深度方向占多少个 42 mm 标准格。" } },
      { key: "HEIGHT_U", default: "6", range: "2 – 12", unit: "u", label: { en: "Height units", zh: "高度 U" }, desc: { en: "Bin height in standard 7 mm increments.", zh: "高度按 7 mm 标准增量计。" } },
      { key: "DIV_X", default: "1", range: "1 – 6", unit: "", label: { en: "Compartments X", zh: "分隔 X" }, desc: { en: "Number of compartments along the width.", zh: "宽度方向分成几格。" } },
      { key: "DIV_Y", default: "1", range: "1 – 6", unit: "", label: { en: "Compartments Y", zh: "分隔 Y" }, desc: { en: "Number of compartments along the depth.", zh: "深度方向分成几格。" } },
      { key: "STACKING_LIP", default: "True", range: "on / off", unit: "", label: { en: "Stacking lip", zh: "堆叠唇" }, desc: { en: "Top lip so another bin stacks on this one.", zh: "顶部凸唇，让上层收纳盒稳定堆叠。" } },
      { key: "MAGNET_HOLES", default: "False", range: "on / off", unit: "", label: { en: "Magnet holes", zh: "磁铁孔" }, desc: { en: "Ø6 × 2 mm magnet pockets in every base corner.", zh: "每个底座四角预留 Ø6 × 2 mm 磁铁孔位。" } },
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
          "Dividers, magnet holes (Ø6 × 2 mm) and scoop as simple toggles",
          "Exports clean STL / STEP — printable without supports",
          "Need a label shelf or a custom cutout? Remix it with the AI agent",
        ],
        faqs: [
          {
            q: "What magnets fit the magnet holes?",
            a: "The base pockets are sized for the de-facto Gridfinity standard: Ø6 mm × 2 mm neodymium disc magnets, one per 42 mm base corner. Glue-in is optional — bins also sit fine on a baseplate without magnets.",
          },
          {
            q: "Do Gridfinity bins print without supports?",
            a: "Yes. The base profile, stacking lip and scoop are all designed within FDM overhang limits. Print bins flat on the bed in PLA or PETG at 0.2 mm layers; no supports and no brim needed on a clean bed.",
          },
          {
            q: "Can I change something the parameters don't cover?",
            a: "Yes — that is the point of Forgent3D. The bin is generated from editable CAD code, so you can open it in the workbench and ask the AI agent for label tabs, finger slots, custom cutouts or a non-standard footprint.",
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
          "分隔、磁铁孔（Ø6 × 2 mm）、取物斜坡都是一键开关",
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
    keywords: [
      "gridfinity baseplate generator",
      "custom gridfinity baseplate",
      "gridfinity base plate stl",
    ],
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
    updated: "2026-10-16",
    // A deep link: these values in the page URL (or the app's /g/ URL) open exactly this part.
    example: { params: { INNER_L: "120", INNER_W: "80", INNER_H: "40", LID: "sliding" }, label: { en: "120 × 80 × 40 mm inside, sliding lid", zh: "内腔 120 × 80 × 40 mm、抽拉盖" } },
    // Read off the default part's STEP export (cad-build export, 2026-10-16): faces by surface type.
    step: {
      en: [
        "Box and lid export as separate solids in one file — 101 exact faces for the default hinged box, the rounded corners and the hinge knuckles as true cylinders.",
        "Open it in CAD to put a logo, a cable notch or mounting holes exactly where they belong, or hand it to a print service that wants STEP.",
      ],
      zh: [
        "盒体和盖子在同一个文件里是两个独立的实体——默认铰链盒共 101 个精确面，圆角和铰链转节都是真圆柱面。",
        "在 CAD 里打开，就能把 logo、走线缺口或安装孔放到准确的位置，也能直接交给要 STEP 的打印服务。",
      ],
    },
    // Questions people put to an AI assistant; each answer carries a working deep link.
    aiFaqs: {
      en: [
        { q: "How do I make a 120 × 80 × 40 mm box with a sliding lid?", a: "https://www.forgent3d.com/en/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding — the sizes are the inside of the box. Download STL to print box and lid, or STEP to edit." },
        { q: "Can I add dividers or a label slot?", a: "Yes: press “AI edit” in the generator and say it (“two dividers across the width”, “a label slot on the front”). The AI edits the box’s model.py on the page; copy it into your models to keep it and to continue with the AI agent." },
      ],
      zh: [
        { q: "怎样做一个内腔 120 × 80 × 40 mm、抽拉盖的盒子？", a: "https://www.forgent3d.com/zh/generators/parametric-box-generator?INNER_L=120&INNER_W=80&INNER_H=40&LID=sliding ——尺寸是盒子的内腔。下载 STL 打印盒体和盖子，或下载 STEP 去改。" },
        { q: "能加隔板或标签槽吗？", a: "能：在生成器里点「AI 修改」说一句（“沿宽度方向加两块隔板”“正面加一个标签槽”）。AI 在页面上改这个盒子的 model.py；要留下来、要接着让 AI agent 改，就复制到你的模型里。" },
      ],
    },
    keywords: [
      "parametric box generator",
      "3d printed box with lid stl",
      "custom storage box generator",
    ],
    params: [
      { key: "INNER_L", default: "80", range: "25 – 250", unit: "mm", label: { en: "Inner length", zh: "内长" }, desc: { en: "Interior length — size it to what goes inside.", zh: "内腔长度，按要装的东西量。" } },
      { key: "INNER_W", default: "50", range: "25 – 250", unit: "mm", label: { en: "Inner width", zh: "内宽" }, desc: { en: "Interior width.", zh: "内腔宽度。" } },
      { key: "INNER_H", default: "30", range: "16 – 150", unit: "mm", label: { en: "Inner height", zh: "内高" }, desc: { en: "Interior height of the box, floor to rim.", zh: "盒体内腔高度，从底到口沿。" } },
      { key: "WALL", default: "2.4", range: "2 – 4", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "2.4 mm is about six perimeters with a 0.4 mm nozzle.", zh: "0.4 喷嘴下 2.4 mm 约为六圈墙。" } },
      { key: "LID", default: "hinged", range: "hinged / snap / lip / sliding / none", unit: "", label: { en: "Lid type", zh: "盖子类型" }, desc: { en: "A hinged lid, a snap-on lid, a lid that drops over a lip, one that slides along dovetail rails, or none.", zh: "铰链翻盖、卡扣盖、压在止口上的盖、沿燕尾导轨抽拉的盖，或者不要盖。" } },
      { key: "HINGE", default: "print-in-place", range: "print-in-place / pin", unit: "", label: { en: "Hinge", zh: "铰链" }, desc: { en: "Hinged lid only: printed already assembled, or with a separate pin.", zh: "仅铰链盖：一体打印好就能转，或者用单独的销轴。" } },
      { key: "LATCH", default: "clip", range: "clip / toolbox / magnet / none", unit: "", label: { en: "Latch", zh: "锁扣" }, desc: { en: "Hinged lid only: a snap clip, toolbox-style clasps, magnets, or none.", zh: "仅铰链盖：卡扣、工具箱式搭扣、磁铁，或者不要。" } },
      { key: "LID_DEPTH", default: "10", range: "4 – 40", unit: "mm", label: { en: "Hinged lid depth", zh: "翻盖深度" }, desc: { en: "Hinged lid only: how deep the lid is.", zh: "仅铰链盖：盖子有多深。" } },
      { key: "CORNER_R", default: "4", range: "0 – 12", unit: "mm", label: { en: "Corner radius", zh: "圆角半径" }, desc: { en: "Outside corner rounding (the sliding lid keeps square corners so it can slide out).", zh: "外轮廓圆角（抽拉盖保持直角，才抽得出来）。" } },
    ],
    copy: {
      en: {
        name: "Parametric Box Generator",
        title: "Parametric Box Generator — Hinged, Snap-On or Sliding Lid Boxes (STL) | Forgent3D",
        description:
          "Generate a custom 3D-printable box from its inside size, with a hinged lid (print-in-place or pin hinge; clip, toolbox or magnet latch), a snap-on, lip or sliding lid, or none. Preview in 3D, export STL or STEP free.",
        h1: "Parametric box generator: exact inside size, five kinds of lid",
        intro:
          "Enter the inside dimensions of what you need to store and pick a lid: a hinged lid that comes off the printer already assembled, a snap-on or drop-over lid, a lid that slides along dovetail rails, or none. The box rebuilds live as real CAD — anything the options miss, like dividers or a label slot, is one AI edit away.",
        whyPoints: [
          "Dimensions are the inside — size it to the thing, not the print",
          "Hinged lid with a print-in-place hinge, or a separate pin",
          "Clip, toolbox clasp or magnet latch on the hinged lid",
          "Dividers, a label slot, a cable notch? Press “AI edit” and say it",
        ],
        faqs: [
          {
            q: "Which lid should I pick?",
            a: "The hinged lid with the print-in-place hinge for a box you open often — it comes off the printer assembled. Snap-on for a lid that must stay shut when the box is carried, the lip lid for a dust cover you lift off, the sliding lid for a pencil-box feel (it keeps square corners so it can slide out), and none for an open tray.",
          },
          {
            q: "How thick should the walls be?",
            a: "The default 2.4 mm is about six perimeters with a 0.4 mm nozzle — stiff enough for everyday storage. Go to 3–4 mm for boxes that get carried full or screwed to a wall.",
          },
        ],
      },
      zh: {
        name: "参数化盒子生成器",
        title: "参数化盒子生成器 — 铰链盖、卡扣盖、抽拉盖收纳盒 STL 在线生成 | Forgent3D",
        description:
          "按内腔尺寸生成 3D 打印收纳盒：铰链翻盖（一体打印铰链或销轴；卡扣、工具箱搭扣或磁铁锁扣）、卡扣盖、止口盖、抽拉盖，或不要盖。浏览器 3D 预览，免费导出 STL / STEP。",
        h1: "参数化盒子生成器：按内腔尺寸建模，五种盖子任选",
        intro:
          "输入要装的东西的尺寸，再选一种盖子：一体打印、下了打印机就能转的铰链翻盖，卡扣盖或压在止口上的盖，沿燕尾导轨抽拉的盖，或者干脆不要盖。底下是真 CAD，实时重建——选项覆盖不到的隔板、标签槽，点「AI 修改」说一句就行。",
        whyPoints: [
          "尺寸是内腔——量东西，不用倒推外壳",
          "铰链盖可以一体打印，也可以用单独的销轴",
          "铰链盖配卡扣、工具箱式搭扣或磁铁锁扣",
          "要隔板、标签槽、走线缺口？点「AI 修改」说一句",
        ],
        faqs: [
          {
            q: "该选哪种盖子？",
            a: "经常开合的盒子选铰链盖加一体打印铰链——下了打印机就是装好的。装满了要拎着走、盖子必须扣牢就选卡扣盖；只是防尘、掀开就用止口盖；想要文具盒那种手感选抽拉盖（它保持直角才抽得出来）；敞口托盘就不要盖。",
          },
          {
            q: "壁厚选多少？",
            a: "默认 2.4 mm：0.4 喷嘴下约六圈墙，日常收纳够硬。装满了要拎、或者要拧在墙上的盒子用 3–4 mm。",
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
    keywords: [
      "hose adapter generator",
      "vacuum hose adapter stl",
      "custom pipe adapter 3d print",
      "dust collection adapter generator",
    ],
    params: [
      { key: "END1_D", default: "58", range: "10 – 150", unit: "mm", label: { en: "End 1 diameter", zh: "端 1 直径" }, desc: { en: "Diameter of the first port.", zh: "第一端接口直径。" } },
      { key: "END1_MODE", default: "outer", range: "inner / outer", unit: "", label: { en: "End 1 fits", zh: "端 1 配合" }, desc: { en: "Whether END1_D is measured inside or outside the hose.", zh: "该直径量的是软管内壁还是外壁。" } },
      { key: "END1_LEN", default: "40", range: "10 – 100", unit: "mm", label: { en: "End 1 length", zh: "端 1 长度" }, desc: { en: "Engagement length of the first port.", zh: "第一端插入长度。" } },
      { key: "END2_D", default: "32", range: "10 – 150", unit: "mm", label: { en: "End 2 diameter", zh: "端 2 直径" }, desc: { en: "Diameter of the second port.", zh: "第二端接口直径。" } },
      { key: "END2_MODE", default: "inner", range: "inner / outer", unit: "", label: { en: "End 2 fits", zh: "端 2 配合" }, desc: { en: "Inside or outside measurement for end 2.", zh: "端 2 直径按内壁或外壁。" } },
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
        { q: "How do I make a funnel that fits a bottle with a 16 mm neck?", a: "The spout’s outside is SPOUT_D plus two walls (1.6 mm each by default), so for a 16 mm neck use SPOUT_D=12: https://www.forgent3d.com/en/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100. Download STL to print it." },
        { q: "Can it have an angled spout, an air vent or a handle?", a: "Press “AI edit” in the generator and describe it; the AI edits the funnel’s model.py on the page and it rebuilds in your browser. A few edits a day are free without signing in." },
      ],
      zh: [
        { q: "怎样做一个能插进 16 mm 瓶口的漏斗？", a: "出料管的外径是 SPOUT_D 加两层壁（默认每层 1.6 mm），所以 16 mm 的瓶口用 SPOUT_D=12：https://www.forgent3d.com/zh/generators/funnel-generator?SPOUT_D=12&MOUTH_D=100。下载 STL 去打印。" },
        { q: "能做斜出料口、加排气槽或把手吗？", a: "在生成器里点「AI 修改」描述一下，AI 在页面上改这个漏斗的 model.py，在浏览器里重建。未登录每天也能免费改几次。" },
      ],
    },
    keywords: ["funnel generator", "custom funnel stl", "3d printed funnel maker"],
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
            a: "FDM prints have layer grooves that can trap residue, so treat printed funnels as workshop tools by default. For kitchen use, print in PETG, wash promptly, and treat it as a short-lived utensil — or use it as a mold reference and buy food-grade for critical use.",
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
    keywords: [
      "spur gear generator",
      "gear stl generator online",
      "3d printed gear generator module teeth",
    ],
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
          "Need a keyway, hub or matching rack? Ask the AI agent",
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
      },
      zh: {
        name: "直齿轮生成器",
        title: "直齿轮生成器 — 按模数齿数生成渐开线齿轮 STL | Forgent3D",
        description:
          "在线生成渐开线直齿轮：模数、齿数、压力角、齿宽、轴孔（圆孔/六角）全可调。真渐开线齿形，免费导出 STL / STEP。",
        h1: "直齿轮生成器：真渐开线齿形",
        intro:
          "设定模数、齿数、压力角、齿宽和轴孔，生成器计算真正的渐开线齿廓——不是装饰性的近似齿形，打出来的一对齿轮真的能啮合。生成结果是参数化 CAD：键槽、轮毂、减重孔让 agent 一句话加上。",
        whyPoints: [
          "真渐开线齿面，同模数的一对齿轮正确啮合",
          "压力角 20° / 25°，齿数 8–120",
          "圆孔或六角孔，适配轴与标准件",
          "要键槽、轮毂或配套齿条？交给 AI agent",
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
        { q: "How do I make an M5 spacer 12 mm across and 2 mm thick?", a: "Open https://www.forgent3d.com/en/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 — 5.3 mm is the standard M5 clearance hole — then download STL to print it, or STEP for a machinist." },
        { q: "Can I get a washer with holes around it, a tab or a slot?", a: "Yes. Press “AI edit” in the generator and describe it (“six 3 mm holes on a 22 mm circle”). The AI changes the washer’s model.py on the page, and the new sizes become parameters you can keep turning. A few edits a day are free without signing in." },
      ],
      zh: [
        { q: "怎样做一个外径 12 mm、厚 2 mm 的 M5 垫片？", a: "打开 https://www.forgent3d.com/zh/generators/washer-spacer-generator?INNER_D=5.3&OUTER_D=12&THICKNESS=2 ——5.3 mm 是 M5 的标准通孔——下载 STL 去打印，或者下载 STEP 交给机加工。" },
        { q: "能做带一圈孔、带耳或带槽的垫片吗？", a: "能。在生成器里点「AI 修改」，描述一下（“在直径 22 mm 的圆上均布六个 3 mm 孔”）。AI 直接在页面上改这个垫片的 model.py，新加的尺寸会变成还能继续调的参数。未登录每天也能免费改几次。" },
      ],
    },
    keywords: [
      "washer generator 3d print",
      "custom spacer stl generator",
      "plastic shim washer 3d printed",
    ],
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
          "Metric bolt cheat-sheet built into the defaults (M8 → 8.4 mm bore)",
          "One model covers washers, shims, spacers and standoff tubes",
          "Chamfered edges: easy insertion, no elephant-foot cleanup",
          "Need a slot, square bore or shoulder? One agent edit away",
        ],
        faqs: [
          {
            q: "What inner diameter for a given bolt?",
            a: "Use the bolt's nominal size plus clearance: M3 → 3.4, M4 → 4.5, M5 → 5.5, M6 → 6.6, M8 → 8.4, M10 → 10.5 mm. For a snug locating fit, subtract 0.2 mm from those and ream with the bolt.",
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
          "默认值内置公制螺栓速查（M8 → 内径 8.4 mm）",
          "一个模型覆盖垫圈、调整垫、间隔柱、支撑管",
          "边缘倒角：好装配，也不用清首层象脚",
          "要长槽、方孔、台阶？让 agent 一句话改",
        ],
        faqs: [
          {
            q: "各种螺栓配多大内径？",
            a: "公称直径加过孔余量：M3 → 3.4、M4 → 4.5、M5 → 5.5、M6 → 6.6、M8 → 8.4、M10 → 10.5 mm。想要定位紧配合就各减 0.2 mm，用螺栓自攻到位。",
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
    example: { params: { TRAY_W: "200", TRAY_L: "120", TRAY_T: "15", PART_DEPTH: "12" }, label: { en: "200 × 120 mm tray, 15 mm thick, pocket 12 mm deep", zh: "托盘 200 × 120 mm、厚 15 mm、坑深 12 mm" } },
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
        { q: "How do I make a 200 × 120 mm tray with a 12 mm deep pocket?", a: "https://www.forgent3d.com/en/generators/tool-tray-generator?TRAY_W=200&TRAY_L=120&TRAY_T=15&PART_DEPTH=12 — the tray must be at least 1.5 mm thicker than the pocket is deep, so 12 mm deep needs 13.5 mm or more." },
      ],
      zh: [
        { q: "坑能按我自己工具的轮廓来吗？", a: "能。在草图画布上拖那八个轮廓点；或者点「AI 修改」把尺寸告诉它（“身长 150 × 22 mm，带一个 40 × 30 mm 的把手”），它会重写轮廓。手上只有照片？把托盘复制到你的模型里，把照片交给 AI agent。" },
        { q: "怎样做一个 200 × 120 mm、坑深 12 mm 的托盘？", a: "https://www.forgent3d.com/zh/generators/tool-tray-generator?TRAY_W=200&TRAY_L=120&TRAY_T=15&PART_DEPTH=12 ——托盘要比坑深至少厚 1.5 mm，所以 12 mm 深的坑要 13.5 mm 以上的托盘。" },
      ],
    },
    keywords: [
      "tool tray generator",
      "custom toolbox insert stl",
      "shadow foam alternative 3d print",
      "tool drawer organizer stl",
    ],
    params: [
      { key: "CORNER_R", default: "2", range: "0 \u2013 8", unit: "mm", label: { en: "Corner radius", zh: "圆角" }, desc: { en: "Rounds every corner of the traced outline \u2014 a sharp-cornered part still gets a printable inside corner.", zh: "把描出来的轮廓每个角倒圆，尖角零件也能得到能打的内角。" } },
      { key: "CLEARANCE", default: "0.5", range: "0.1 \u2013 3", unit: "mm", label: { en: "Fit clearance", zh: "间隙" }, desc: { en: "Grown around the outline on every side; 0.25 snug, 0.5 drop-in, 1.0 loose.", zh: "沿轮廓四周外扩；0.25 紧配、0.5 好放、1.0 宽松。" } },
      { key: "PART_DEPTH", default: "7", range: "1 \u2013 40", unit: "mm", label: { en: "Pocket depth", zh: "坑深" }, desc: { en: "How deep the part sinks. Clamped so a 1.5 mm floor always remains.", zh: "零件沉多深。自动封顶，底下永远留 1.5 mm。" } },
      { key: "TRAY_W", default: "140", range: "60 \u2013 400", unit: "mm", label: { en: "Tray length X", zh: "托盘长 X" }, desc: { en: "Outer length \u2014 measure the drawer, not the part.", zh: "托盘外长，按抽屉内尺寸量。" } },
      { key: "TRAY_L", default: "100", range: "60 \u2013 300", unit: "mm", label: { en: "Tray width Y", zh: "托盘宽 Y" }, desc: { en: "Outer width of the tray.", zh: "托盘外宽。" } },
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
    keywords: [
      "2020 corner bracket stl",
      "2020 extrusion corner bracket",
      "v-slot corner bracket 3d print",
      "custom aluminum extrusion bracket generator",
    ],
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
            a: "M5 is the standard for 6 mm-slot 2020 (Misumi, OpenBuilds and Alux all use M5×8 with a slide-in or drop-in T-nut). With the default 4 mm printed plate, use M5×10 — a cast bracket's 3 mm plate takes M5×8, and printed brackets on MakerWorld list M5×10, or ×12 with a washer.",
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
            a: "6 mm 槽的 2020 型材标准是 M5（米思米、OpenBuilds、Alux 都用 M5×8 配 T 型螺母）。默认 4 mm 打印板用 M5×10——压铸角码 3 mm 板用 M5×8，MakerWorld 上的打印角码标注 M5×10，加垫片用 ×12。",
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
    keywords: [
      "608 bearing pillow block stl",
      "pillow block bearing holder 3d print",
      "kp08 pillow block replacement",
      "parametric bearing holder generator",
    ],
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
          "608 default matches KP08: 55 long, 42 mm bolt spacing, 15 mm centre height, M4",
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
          "默认 608 对齐 KP08：长 55、孔距 42、中心高 15、M4 螺丝",
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
    family: "hardware",
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
    keywords: [
      "fan grill generator",
      "120mm fan grill stl",
      "parametric fan grill",
      "pc fan cover 3d print",
    ],
    params: [
      { key: "FAN", default: "120 mm", range: "25 – 140 mm", unit: "", label: { en: "Fan size", zh: "风扇尺寸" }, desc: { en: "Hole spacing from ARCTIC's drawings (40–140) and NopSCADlib's measured fan table.", zh: "孔距取自 ARCTIC 图纸（40–140）和 NopSCADlib 实测风扇表。" } },
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
          "Generate a 3D-printable fan grill for 25–140 mm fans: rings and spokes like a wire guard, the hole spacing from manufacturer drawings, adjustable bar width, opening and standoff. Free STL and STEP.",
        h1: "Fan grill generator: a wire-guard pattern you can print",
        intro:
          "Pick your fan size and get a printable guard that bolts to it — hole spacing from ARCTIC's drawings, a 2 mm standoff from the blades. The pattern copies the steel wire guard on purpose: in wind-tunnel tests wire guards cost almost no airflow, while a half-open honeycomb sheet cost about a fifth of it.",
        whyPoints: [
          "10 sizes, 25 to 140 mm, with hole spacing from manufacturer drawings",
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
          "在线生成可 3D 打印的风扇网罩，适配 25–140 mm 风扇：仿钢丝网的圆环加辐条，孔距取自厂家图纸，网条宽度、开口、离风扇距离可调。免费导出 STL 和 STEP。",
        h1: "风扇网罩生成器：能打印的钢丝网罩",
        intro:
          "选好风扇尺寸，就得到能直接拧上去的打印网罩——孔距取自 ARCTIC 图纸，离扇叶留 2 mm。图案特意仿钢丝网：风洞实测里钢丝网几乎不损风量，而开孔一半的蜂窝板要损失约五分之一。",
        whyPoints: [
          "25 到 140 mm 共 10 种尺寸，孔距取自厂家图纸",
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
];

export function getGenerator(slug) {
  return GENERATORS.find((g) => g.slug === slug) || null;
}

export function generatorAppUrl(generator, locale) {
  if (generator.modelDir) return `${APP_BASE}/g/${generator.modelDir}?lang=${locale}`;
  return `${APP_BASE}?lang=${locale}`;
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
const RELATED_FAMILIES = { gears: ["hardware"], hardware: ["gears"], storage: [], fluid: ["hardware"] };

/** Same family first, then the related families, at most `max` — a link block that stays small as the catalog grows. */
export function relatedGenerators(generator, max = 4) {
  const others = GENERATORS.filter((g) => g.slug !== generator.slug);
  const order = [generator.family, ...(RELATED_FAMILIES[generator.family] || [])];
  const picked = [];
  for (const family of order) {
    for (const g of others) if (g.family === family && !picked.includes(g)) picked.push(g);
  }
  return picked.slice(0, max);
}

// UI copy shared by the /generators index and every landing page.
export function generatorsSharedCopy(locale) {
  if (locale === "zh") {
    return {
      catalogLabel: "生成器",
      catalogTitle: "3D 打印生成器 — 参数化模型在线定制 | Forgent3D",
      catalogDescription:
        "免费的在线 3D 打印生成器合集：Gridfinity 收纳盒与底板、参数化盒子、软管转接头、漏斗、齿轮、垫片、工具托盘、2020 型材角码、轴承座、风扇网罩。调参数、3D 预览、导出 STL / STEP。",
      catalogH1: "3D 打印生成器",
      catalogIntro:
        "每个生成器都是一份真实的参数化 CAD 模型：拧参数实时重建，导出 STL / STEP；参数覆盖不到的需求，交给 AI agent 在同一个模型上继续改。",
      openApp: "打开生成器",
      remixApp: "用 AI 继续改",
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
      "Free online 3D print generators: Gridfinity bins and baseplates, parametric boxes, hose adapters, funnels, gears, washers, tool trays, 2020 extrusion corner brackets, bearing pillow blocks and fan grills. Tune parameters, preview in 3D, export STL / STEP.",
    catalogH1: "3D print generators",
    catalogIntro:
      "Every generator here is a real parametric CAD model: tune the parameters and it rebuilds live, export STL / STEP — and for anything beyond the sliders, the AI agent edits the same model.",
    openApp: "Open the generator",
    remixApp: "Remix with AI",
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
