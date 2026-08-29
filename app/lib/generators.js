// Generator catalog — the single source of truth for /[locale]/generators.
// Each entry drives: the landing page copy (both locales), the parameter table
// (grounded in the de-facto standard customizers: gridfinity-rebuilt-openscad,
// STLGears, ostat/vacuum-hose-adapter, 3dprintgenerator box), the JSON-LD, the
// sitemap rows, and the spec handed to the CAD agents that author each model.
// `shareSlug`: filled in once the model is published on app.forgent3d.com;
// until then the CTA falls back to the workbench /try entry.

export const APP_BASE = "https://app.forgent3d.com";

export const GENERATORS = [
  {
    slug: "gridfinity-bin-generator",
    shareSlug: "vpKi8MpjP0",
    icon: "▦",
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
          "Exports clean STL / STEP / 3MF — printable without supports",
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
          "导出干净的 STL / STEP / 3MF，免支撑直接打印",
          "想加标签架或异形挖槽？交给 AI agent 继续 remix",
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
    shareSlug: "hJ8B0CnJnl",
    icon: "▤",
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
            a: "Measure the drawer, divide by 42 mm to get grid counts, and print multiple plates if the drawer exceeds your printer bed. For the remainder gap, remix the model and ask the agent for a custom-width filler strip.",
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
            a: "量好抽屉内尺寸，除以 42 mm 得到格数；超出打印机幅面就分几块打印。剩余的边缝可以 remix 模型，让 agent 生成非标准宽度的补条。",
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
    shareSlug: "qeAqTOXRG6",
    icon: "▣",
    keywords: [
      "parametric box generator",
      "3d printed box with lid stl",
      "custom storage box generator",
    ],
    params: [
      { key: "INNER_L", default: "80", range: "20 – 250", unit: "mm", label: { en: "Inner length", zh: "内长" }, desc: { en: "Interior length — size it to what goes inside.", zh: "内腔长度，按要装的东西量。" } },
      { key: "INNER_W", default: "50", range: "20 – 250", unit: "mm", label: { en: "Inner width", zh: "内宽" }, desc: { en: "Interior width.", zh: "内腔宽度。" } },
      { key: "INNER_H", default: "30", range: "10 – 150", unit: "mm", label: { en: "Inner height", zh: "内高" }, desc: { en: "Interior height under the lid.", zh: "盖下内腔高度。" } },
      { key: "WALL", default: "2.0", range: "1.2 – 4", unit: "mm", label: { en: "Wall thickness", zh: "壁厚" }, desc: { en: "2 mm ≈ 5 perimeters with a 0.4 nozzle.", zh: "0.4 喷嘴下 2 mm 约为 5 圈墙。" } },
      { key: "WITH_LID", default: "True", range: "on / off", unit: "", label: { en: "Fitted lid", zh: "配盖" }, desc: { en: "Friction-fit lid printed as a second body.", zh: "摩擦配合的盖子，作为第二个零件打印。" } },
      { key: "LID_FIT", default: "0.2", range: "0.1 – 0.4", unit: "mm", label: { en: "Lid clearance", zh: "盖配合间隙" }, desc: { en: "Per-side clearance; 0.2 suits most printers.", zh: "单边间隙，多数打印机 0.2 合适。" } },
      { key: "CORNER_R", default: "4", range: "0 – 12", unit: "mm", label: { en: "Corner radius", zh: "圆角半径" }, desc: { en: "Outside corner rounding.", zh: "外轮廓圆角。" } },
    ],
    copy: {
      en: {
        name: "Parametric Box Generator",
        title: "Parametric Box Generator — Custom Box with Fitted Lid (STL) | Forgent3D",
        description:
          "Generate a custom 3D-printable storage box with a friction-fit lid: exact inner dimensions, wall thickness, lid clearance and corner radius. Export STL / STEP free.",
        h1: "Parametric box generator: exact inner size, fitted lid",
        intro:
          "Enter the inner dimensions of what you need to store — the box is generated around them, with wall thickness, corner rounding and a friction-fit lid whose clearance you control. It rebuilds live as real CAD, so hinges, latches or compartments are one AI edit away.",
        whyPoints: [
          "Dimensions are interior by default — size to the thing, not the print",
          "Tunable lid clearance so the fit matches your printer",
          "Rounded corners and clean walls, no supports needed",
          "Want a hinge, latch or dividers? Remix with the AI agent",
        ],
        faqs: [
          {
            q: "What lid clearance should I use?",
            a: "Start at 0.2 mm per side for a snug friction fit on a well-tuned printer. If the lid binds, step to 0.3; for a loose dust-cover fit, 0.4. Re-generate and print just the lid to dial it in.",
          },
          {
            q: "How thick should the walls be?",
            a: "2 mm is a good default — with a 0.4 mm nozzle that is about five perimeters, strong enough for everyday storage boxes. Go 3–4 mm for boxes that get sat on, stepped on or screwed into.",
          },
          {
            q: "Can I add hinges, a latch or compartments?",
            a: "Yes. The generated box is editable CAD code — open it in the Forgent3D workbench and ask the agent for a print-in-place hinge, a snap latch or internal dividers.",
          },
        ],
      },
      zh: {
        name: "参数化盒子生成器",
        title: "参数化盒子生成器 — 定制带盖收纳盒 STL 在线生成 | Forgent3D",
        description:
          "生成自定义 3D 打印收纳盒：按内腔尺寸建模，壁厚、盖子配合间隙、圆角全可调。浏览器预览，免费导出 STL / STEP。",
        h1: "参数化盒子生成器：按内腔尺寸建模，盖子配合可调",
        intro:
          "直接输入要装的东西的尺寸——盒子围绕内腔生成，壁厚、圆角、摩擦配合盖的间隙都由你控制，实时重建。底下是真 CAD 代码：铰链、卡扣、分隔这些进阶需求，交给 AI agent 一句话改出来。",
        whyPoints: [
          "默认按内腔尺寸建模——量东西，不用倒推外壳",
          "盖子间隙可调，配合松紧适配你的打印机",
          "圆角外壳、干净墙面，免支撑打印",
          "要铰链、卡扣、分隔？让 AI agent 继续改",
        ],
        faqs: [
          {
            q: "盖子间隙设多少合适？",
            a: "调校良好的打印机从单边 0.2 mm 开始，是紧实的摩擦配合；偏紧就 0.3，想要松盖防尘用 0.4。只重打盖子就能快速试出手感。",
          },
          {
            q: "壁厚选多少？",
            a: "默认 2 mm：0.4 喷嘴下约五圈墙，日常收纳强度足够。要承重、踩踏或打螺丝的盒子用 3–4 mm。",
          },
          {
            q: "能加铰链、卡扣或分隔吗？",
            a: "可以。生成的盒子是可编辑 CAD 代码——在工作台打开，让 agent 加一体打印铰链、卡扣或内部分隔。",
          },
        ],
      },
    },
  },
  {
    slug: "hose-adapter-generator",
    shareSlug: "dMM29PhU66",
    icon: "◎",
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
            a: "For a port the hose slides OVER, measure the hose's inner diameter and set that end to \"outer\" fit. For a port that slides INTO a hose or machine, measure the receiving hole's diameter and use \"inner\" fit. Add nothing — print tolerance is built in.",
          },
          {
            q: "What material should I print adapters in?",
            a: "PETG is the sweet spot: slightly flexible, so tapered ports seat airtight, and it tolerates the heat inside shop-vac hoses. PLA works for light duty; TPU only when you need a stretchy push-fit.",
          },
          {
            q: "Can I make an angled or barbed adapter?",
            a: "The generator covers straight tapered adapters. For a 45° bend, hose barbs or a stop flange, open the model in the workbench and ask the AI agent — it edits the same parametric CAD.",
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
            a: "软管套在接头外面：量软管内径，该端选「外壁配合」。接头插进软管或机器口：量接收孔直径，选「内壁配合」。不用自己加补偿，打印公差已含在模型里。",
          },
          {
            q: "用什么材料打印？",
            a: "首选 PETG：略有弹性，锥形口能压紧密封，也扛得住吸尘管路的温度。轻负载 PLA 可用；需要弹性插拔时用 TPU。",
          },
          {
            q: "能做弯头或带倒刺的接头吗？",
            a: "生成器覆盖直线锥形转接。45° 弯头、软管倒刺、限位法兰这类变体，在工作台打开模型让 AI agent 改——还是同一份参数化 CAD。",
          },
        ],
      },
    },
  },
  {
    slug: "funnel-generator",
    shareSlug: "LxyR3nENRh",
    icon: "▽",
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
    shareSlug: "UAaAjPHvCD",
    icon: "✱",
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
        title: "Spur Gear Generator — Involute Gears by Module & Teeth (STL) | Forgent3D",
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
    shareSlug: "Pitsf1uupN",
    icon: "◌",
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
        title: "Washer & Spacer Generator — Custom Sizes in Seconds (STL) | Forgent3D",
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
        title: "垫片间隔柱生成器 — 任意尺寸秒出 STL | Forgent3D",
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
];

export function getGenerator(slug) {
  return GENERATORS.find((g) => g.slug === slug) || null;
}

export function generatorAppUrl(generator, locale) {
  if (generator.shareSlug) return `${APP_BASE}/m/${generator.shareSlug}?lang=${locale}`;
  return `${APP_BASE}/try?lang=${locale}`;
}

// UI copy shared by the /generators index and every landing page.
export function generatorsSharedCopy(locale) {
  if (locale === "zh") {
    return {
      catalogLabel: "生成器",
      catalogTitle: "3D 打印生成器 — 参数化模型在线定制 | Forgent3D",
      catalogDescription:
        "免费的在线 3D 打印生成器合集：Gridfinity 收纳盒与底板、参数化盒子、软管转接头、漏斗、齿轮、垫片。调参数、3D 预览、导出 STL / STEP。",
      catalogH1: "3D 打印生成器",
      catalogIntro:
        "每个生成器都是一份真实的参数化 CAD 模型：拧参数实时重建，导出 STL / STEP / 3MF；参数覆盖不到的需求，交给 AI agent 在同一个模型上继续改。",
      openApp: "打开生成器",
      openAppPending: "正在开发",
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
        "导出 STL / STEP / 3MF 去打印；或让 AI agent 在同一模型上加参数外的特征。",
      ],
      faqTitle: "常见问题",
      relatedTitle: "更多生成器",
      backHome: "← 返回首页",
      breadcrumbHome: "首页",
    };
  }
  return {
    catalogLabel: "Generators",
    catalogTitle: "3D Print Generators — Free Parametric Model Makers | Forgent3D",
    catalogDescription:
      "Free online 3D print generators: Gridfinity bins and baseplates, parametric boxes, hose adapters, funnels, gears and washers. Tune parameters, preview in 3D, export STL / STEP.",
    catalogH1: "3D print generators",
    catalogIntro:
      "Every generator here is a real parametric CAD model: tune the parameters and it rebuilds live, export STL / STEP / 3MF — and for anything beyond the sliders, the AI agent edits the same model.",
    openApp: "Open the generator",
    openAppPending: "Coming soon",
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
      "Export STL / STEP / 3MF for printing — or ask the AI agent for features beyond the sliders.",
    ],
    faqTitle: "FAQ",
    relatedTitle: "More generators",
    backHome: "← Back home",
    breadcrumbHome: "Home",
  };
}
