// Clearance hole & heat-set insert hole calculator — page copy per language. The tables are built from
// app/lib/calculators/holes-data.js (every row sourced there); the text cites the same documents in `sources`.
// Evidence: platform repo docs/generator-seo-research.md §5.0 B3 (holes evidence pack summarised there).

import { INSERTS, INSERT_VENDORS, ISO_273 } from "../holes-data.js";

const num = (v, locale) => (v == null ? "—" : locale === "de" ? String(v).replace(".", ",") : String(v));

function isoTable(locale, head, caption) {
  return {
    head,
    caption,
    minWidth: 420,
    rows: Object.entries(ISO_273).map(([size, s]) => [size, num(s.fine, locale), num(s.medium, locale), num(s.coarse, locale)]),
  };
}

function insertTable(locale, head, variants, caption) {
  return {
    head,
    caption,
    minWidth: 720,
    rows: INSERTS.map((r) => [
      `${r.screw} · ${INSERT_VENDORS[r.vendor].name}${r.variant === "standard" ? "" : ` · ${variants[r.variant] || r.variant}`}`,
      num(r.L, locale),
      num(r.od, locale),
      `${r.max ? "≤ " : ""}${num(r.hole, locale)}`,
      r.depth != null ? `≥ ${num(r.depth, locale)}` : "—",
      r.wall != null ? num(r.wall, locale) : "—",
    ]),
  };
}

const SOURCES = [
  { label: "ISO 273:1979 Fasteners — Clearance holes for bolts and screws (iso.org: confirmed 2024, current)", url: "https://www.iso.org/standard/4183.html", note: "adopted as EN 20273 / DIN EN 20273; fine H12, medium H13, coarse H14" },
  { label: "IS 1821:1987, identical with ISO 273:1979 (Bureau of Indian Standards, public copy)", url: "https://law.resource.org/pub/in/bis/S01/is.1821.1987.pdf", note: "the table the clearance values are read from" },
  { label: "Wikipedia (de): Durchgangsbohrung", url: "https://de.wikipedia.org/wiki/Durchgangsbohrung", note: "same values, M1–M24; medium is the preferred series" },
  { label: "Albany County Fasteners, Clearance Hole Chart — Metric Series (ISO 273)", url: "https://www.albanycountyfasteners.com/media/6b/b8/g0/1764944339/clearance-hole-chart.pdf", note: "same values; close / normal / loose" },
  { label: "CNC Kitchen, heat-set inserts — Dimensions & Design Guidelines, metric (store table of 2026-04-10)", url: "https://cnckitchen.store/products/heat-set-insert-m3-x-5-7-100-pieces", note: "L, insert Ø, hole Ø, minimum wall; blind hole ≥ L + 1 mm, straight" },
  { label: "CNC Kitchen, Tips & Tricks for Heat-Set Inserts (2021-10-01)", url: "https://www.cnckitchen.com/blog/tipps-amp-tricks-fr-gewindeeinstze-im-3d-druck-3awey", note: "straight holes, ~1 mm deeper, iron 10–20 °C above print temperature, melt ~90 % then press flush" },
  { label: "ruthex threaded inserts — size table (2025-05-27)", url: "https://ruthex.de/collections/gewindeeinsatze/products/ruthex-gewindeeinsatz-m3-100-stuck-rx-m3x5-7-messing-gewindebuchsen", note: "d1 / d2 / d3 hole / L / min. wall; hole depth L + 1 mm min" },
  { label: "PEM SI® Threaded Inserts for Plastics bulletin, © 2012 PennEngineering (copy hosted by LulzBot)", url: "https://download.lulzbot.com/TAZ/1.0/hardware/mechanical/spec_sheets/sidata.pdf", note: "IUTB straight inserts: hole +0.08 / −0, minimum depth; wall ½–1 × insert Ø, boss 2 × insert Ø. M3 checked on the current pemnet.com catalogue" },
  { label: "McMaster-Carr, Heat-Set Threaded Inserts for Plastic (metric, brass; read 2026-10-20)", url: "https://www.mcmaster.com/products/heat-set-inserts/system-of-measurement~metric/heat-set-threaded-inserts-for-plastic-1~~/", note: "“for max. hole dia.”; minimum material thickness on 94459A140 (M3) and 94459A220 (M6)" },
  { label: "SPIROL white paper, How to Design the Proper Hole for Heat / Ultrasonic Inserts (© 2022)", url: "https://www.spirol.com/resources/white-papers/how-to-design-the-proper-hole-for-heat-ultrasonic-inserts/", note: "depth ≥ insert length + 2 pitches; mating hole larger than the screw, smaller than the insert's pilot" },
  { label: "nophead (Chris Palmer), Polyholes, HydraRaptor blog (Feb 2011)", url: "https://hydraraptor.blogspot.com/2011/02/polyholes.html", note: "why printed holes come out small; n = max(round(2d), 3) sides, r = (d/2) / cos(180°/n)" },
  { label: "Bambu Lab Wiki, XY Hole / Contour compensation (edited 2026-05-08)", url: "https://wiki.bambulab.com/en/software/bambu-studio/xy-hole-contour-compensation", note: "compensation ships at 0; their uncompensated M6 test hole printed 5.9; calibrate per filament" },
  { label: "creative3dp press-fit calculator", url: "https://tools.creative3dp.com/tools/press-fit-calculator/", note: "printed holes come out about 0.2 mm small" },
];

export const keywords = {
  en: ["clearance hole chart", "metric clearance hole chart", "m3 clearance hole", "heat set insert hole size", "m3 heat set insert hole size", "iso 273"],
  zh: ["螺丝通孔尺寸", "螺栓通孔 ISO 273", "热熔螺母孔径", "热熔铜螺母开孔尺寸", "M3 通孔"],
  // Semrush DE 2026-10-20: Durchgangsbohrung 320 / KD 9, Durchgangsbohrung M6 / M8 / M4 / M5 / M3 210 / 210 / 140 / 110 / 90,
  // Durchgangsloch M3 140, Gewindeeinsatz 3D Druck 260 / 10, Einschmelzmuttern 140 / 8, ruthex Gewindeeinsatz 210.
  de: ["durchgangsbohrung", "durchgangsbohrung m6", "durchgangsbohrung m3", "durchgangsloch m3", "gewindeeinsatz 3d druck", "einschmelzmuttern", "ruthex gewindeeinsatz"],
  // Semrush JP 2026-10-20: キリ穴 590 / KD 8, ボルト穴径 210 / 22, バカ穴 寸法 110 / 7, インサートナット 下穴 210 / 10,
  // インサートナット 熱圧入 110 / 6 (ヒートセットインサート: no data).
  ja: ["キリ穴", "ボルト穴径", "バカ穴 寸法", "インサートナット 下穴", "インサートナット 熱圧入", "ISO 273"],
};

export const copy = {
  en: {
    name: "Clearance Hole & Heat-Set Insert Chart",
    title: "Metric Clearance Hole Chart & Heat-Set Insert Hole Sizes (ISO 273) | Forgent3D",
    description:
      "ISO 273 clearance holes M1.6–M24 (fine, medium, coarse), what to add for a 3D-printed hole, and heat-set insert hole Ø, depth and wall from CNC Kitchen, ruthex, PEM and McMaster — then make the boss or bracket.",
    h1: "Clearance hole and heat-set insert hole chart",
    intro:
      "Pick a metric screw: you get its ISO 273 clearance hole in all three series, the size to model for a printed hole, and the hole for a heat-set insert from each maker's own table — hole Ø, depth and minimum wall. Then make the part: an insert boss, or a flange or bracket with those holes.",
    card: "ISO 273 fine / medium / coarse for M1.6–M24, the printed-hole allowance, and insert holes by vendor — then the boss or bracket.",
    ui: {
      screw: "Screw",
      allowance: "Printed-hole allowance",
      allowanceHint: "Added to the hole you model. 0.2 is a starting point, not a standard — measure your printer.",
      clearanceTitle: "{s} clearance hole (ISO 273)",
      copy: "Copy",
      copied: "Copied",
      colSeries: "Series",
      colPrinted: "Model for printing",
      fit_fine: "Fine",
      fit_medium: "Medium",
      fit_coarse: "Coarse",
      printed: "Model Ø{d} for a printed hole",
      fitUse_fine: "Holes that locate the part.",
      fitUse_medium: "The usual choice.",
      fitUse_coarse: "Loose alignment; also the fallback for an uncalibrated printer.",
      insertTitle: "{s} heat-set insert holes",
      colVendor: "Insert",
      colLength: "Length L",
      colOd: "Insert Ø",
      colHole: "Hole Ø",
      colDepth: "Blind depth",
      colWall: "Min. wall",
      variant_standard: "standard",
      variant_short: "short",
      variant_voron: "Voron M3×5×4",
      variant_IUTB: "IUTB",
      pemWall: "½–1 × insert Ø",
      insertNote: "Straight holes. Depth: CNC Kitchen and ruthex say L + 1 mm for a blind hole (a through hole works too); PEM's table is about L + 0.8. McMaster gives a maximum hole. Wall: the makers' minimum; PEM's industrial guideline is ½–1 × the insert Ø.",
      noInserts: "No maker's table lists an insert this size.",
      handoffTitle: "Make the part",
      handoffBody: "Open a part with these holes already in it — the insert boss, or a part bolted through with this screw.",
      handoffBoss: "{s} insert boss (standard length)",
      handoffBossShort: "{s} insert boss (short insert)",
      handoffBossNote: "Opens the heat-set boss in the app: two bosses and a lid with clearance holes. Its hole table is ruthex's (M4 5.6, M5 6.4, M6 8.0).",
      handoffFlange: "Flange with {s} holes",
      handoffFlangeNote: "ISO 273 medium plus your allowance: Ø{d}.",
      handoffCoupling: "Shaft coupling with {s} clamp screws",
      handoffPillow: "Pillow block with {s} mounting holes",
      handoffNone: "No part yet",
      handoffNoneWhy: "none of the generators takes this screw size.",
    },
    sections: [
      {
        id: "iso-273",
        title: "Metric clearance holes: the full ISO 273 table",
        body: [
          "ISO 273 gives three clearance holes for every metric screw. Fine (H12) is for holes that also locate the part; medium (H13) is the usual series and the one most charts mean when they give one value; coarse (H14) leaves room for misalignment. The standard dates from 1979 and was last confirmed in 2024, unchanged; Europe adopted it as EN 20273 (DIN EN 20273 in Germany).",
          "The values below are read from IS 1821:1987, the Indian Standard that is identical to ISO 273, and agree on every row with the German Wikipedia table and Albany County Fasteners' chart. Some charts online give M12 as 13 / 14 / 15 and M16 as 17 / 18 / 19 — those are not ISO 273.",
        ],
        tables: [],
        tableKind: "iso",
      },
      {
        id: "printed",
        title: "Printed holes: how much to add",
        body: [
          "A hole printed exactly at the ISO size usually comes out small. nophead's Polyholes post lists why: the STL's flat facets sit inside the circle, and the nozzle cuts the corner on every small curve. How much depends on the printer, the filament and whether the hole is vertical — so no standard gives a number.",
          "What the sources do say: creative3dp's press-fit calculator puts printed holes about 0.2 mm small; Bambu Lab's own uncompensated M6 test hole printed 5.9; slicers ship their hole compensation at 0 and tell you to calibrate per filament. So the allowance here starts at 0.2 mm and is yours to change. Print one hole, try the screw, and set what you measured. If you would rather not calibrate, use the coarse series: it is already 0.2 (M3) to 0.4 mm (M6) larger than medium.",
        ],
      },
      {
        id: "inserts",
        title: "Heat-set insert holes from the makers' own tables",
        body: [
          "Heat-set inserts go into a straight hole a little smaller than their knurl; the iron melts the plastic around them. Each maker publishes its hole, and they do not all agree: CNC Kitchen's current table (April 2026) gives M4 5.7, M5 6.5 and M6 8.1, while ruthex — and older copies of CNC Kitchen's table still on some reseller pages — give 5.6, 6.4 and 8.0. PEM's industrial IUTB inserts have the same size and specify 5.67, 6.43 and 8.03 mm, +0.08. Use the table of the insert you bought.",
          "Depth: at least the insert length plus 1 mm for a blind hole (CNC Kitchen, ruthex), so the insert never bottoms out; SPIROL's rule for industrial parts is the length plus two thread pitches. Tapered inserts are different parts: they need an 8° tapered hole (McMaster, PEM), never a straight one.",
        ],
        tables: [],
        tableKind: "inserts",
      },
      {
        id: "example",
        title: "Worked example: a lid screwed onto an M3 insert",
        body: [
          "Base: a CNC Kitchen M3 × 5.7 insert needs a Ø4.0 hole at least 6.7 mm deep and 1.6 mm of wall — the Forgent3D insert boss makes it Ø7 outside (the insert's 4.6 knurl plus 1.2 mm a side). Lid: the M3 screw passes through an ISO 273 medium hole, Ø3.4, modelled at 3.6 with the 0.2 allowance.",
          "One more check from SPIROL: the lid's hole must be bigger than the screw but smaller than the insert's pilot end (3.9 for this insert), or the screw can pull the insert out. 3.6 passes.",
        ],
      },
      {
        id: "install",
        title: "Installing them",
        list: [
          "Iron temperature: 10–20 °C above your printing temperature (CNC Kitchen: about 225 °C for PLA, 245 °C for PETG, 265 °C for ABS); ruthex says 10–15 °C above.",
          "Press it about 90 % of the way with the iron, then push it flush with a flat tool and hold a few seconds while the plastic sets (CNC Kitchen).",
          "Print the hole vertical where you can: it comes out round and the insert seats square.",
          "In resin prints, don't melt: glue the insert with thick CA (CNC Kitchen).",
        ],
      },
    ],
    faqs: [
      { q: "What size hole for an M3 heat-set insert?", a: "Ø4.0 for the standard M3 × 5.7 insert (CNC Kitchen, ruthex; McMaster's maximum is 4.0; PEM 4.01 +0.08), at least 6.7 mm deep for a blind hole. The Voron-style M3 × 5 × 4 insert is wider: Ø4.4." },
      { q: "What is the clearance hole for an M3 screw?", a: "ISO 273: 3.2 fine, 3.4 medium, 3.6 coarse. For a printed part, model 3.4 plus what your printer loses — 3.6 is a common starting point." },
      { q: "Close, normal or loose fit — which one?", a: "Normal (ISO medium) unless you have a reason: close (fine) when the screws also locate the part, loose (coarse) when several holes have to line up with something you can't adjust, and for printed holes on an uncalibrated printer." },
      { q: "Should the insert hole be tapered?", a: "Not for the common printed-part inserts: CNC Kitchen says the hole should be straight, and so do ruthex's and McMaster's straight-insert pages. Only tapered inserts take a tapered hole, at 8° included." },
      { q: "How far from the edge can an insert go?", a: "Keep at least the maker's minimum wall around the hole — 1.6 mm for M3, 2.1 for M4, 2.6 for M5, 3.3 for M6 (CNC Kitchen, ruthex). PEM's guideline for moulded parts is far more: a wall of ½ to 1 × the insert diameter." },
      { q: "Do heat-set inserts work in PLA and PETG?", a: "Yes — the makers list PLA, PETG, ABS and other thermoplastics, with the iron 10–20 °C hotter than you print that material." },
    ],
    sources: SOURCES,
  },
  zh: {
    name: "螺丝通孔与热熔螺母孔径表",
    title: "螺丝通孔尺寸表（ISO 273）与热熔螺母孔径 — 精/中等/粗装配，3D 打印孔径余量 | Forgent3D",
    description:
      "ISO 273 螺丝通孔 M1.6–M24（精装配、中等装配、粗装配），3D 打印孔要加多少，以及 CNC Kitchen、ruthex、PEM、McMaster 各家热熔螺母的孔径、孔深和最小壁厚——再直接生成螺母柱或法兰。",
    h1: "螺丝通孔与热熔螺母孔径表",
    intro:
      "选一个公制螺丝：得到 ISO 273 三档通孔、打印时该画多大，以及按各厂家自己的表给出的热熔螺母孔——孔径、孔深和最小壁厚。然后直接做零件：热熔螺母柱，或者带这组孔的法兰盘、支架。",
    card: "M1.6–M24 的 ISO 273 精 / 中 / 粗三档通孔、打印孔余量、各家热熔螺母孔径——再生成螺母柱或法兰。",
    ui: {
      screw: "螺丝",
      allowance: "打印孔余量",
      allowanceHint: "加在建模的孔径上。0.2 是起点，不是标准——请按你的打印机实测。",
      clearanceTitle: "{s} 通孔（ISO 273）",
      copy: "复制",
      copied: "已复制",
      colSeries: "系列",
      colPrinted: "打印时建模",
      fit_fine: "精装配",
      fit_medium: "中等装配",
      fit_coarse: "粗装配",
      printed: "打印孔建模 Ø{d}",
      fitUse_fine: "孔兼作定位时用。",
      fitUse_medium: "一般就用这档。",
      fitUse_coarse: "对位要求低；打印机没校准时也可以用它兜底。",
      insertTitle: "{s} 热熔螺母孔",
      colVendor: "螺母",
      colLength: "长度 L",
      colOd: "螺母外径",
      colHole: "孔径",
      colDepth: "盲孔深度",
      colWall: "最小壁厚",
      variant_standard: "标准",
      variant_short: "短款",
      variant_voron: "Voron M3×5×4",
      variant_IUTB: "IUTB",
      pemWall: "½–1 × 螺母外径",
      insertNote: "直孔。深度：CNC Kitchen 和 ruthex 要求盲孔 ≥ L + 1 mm（通孔也可以）；PEM 的表约为 L + 0.8。McMaster 给的是最大孔径。壁厚：厂家给的最小值；PEM 的工业建议是 ½–1 倍螺母外径。",
      noInserts: "没有厂家的表里有这个规格的热熔螺母。",
      handoffTitle: "做成零件",
      handoffBody: "打开一个已经带这些孔的零件——热熔螺母柱，或者用这颗螺丝穿过固定的零件。",
      handoffBoss: "{s} 热熔螺母柱（标准长度）",
      handoffBossShort: "{s} 热熔螺母柱（短款螺母）",
      handoffBossNote: "在 app 里打开热熔螺母柱：两根螺母柱和一块带通孔的盖板。它用的是 ruthex 的孔径（M4 5.6、M5 6.4、M6 8.0）。",
      handoffFlange: "带 {s} 孔的法兰盘",
      handoffFlangeNote: "ISO 273 中等装配加上你的余量：Ø{d}。",
      handoffCoupling: "用 {s} 夹紧螺丝的联轴器",
      handoffPillow: "用 {s} 安装孔的轴承座",
      handoffNone: "暂无零件",
      handoffNoneWhy: "目前没有生成器用这个规格的螺丝。",
    },
    sections: [
      {
        id: "iso-273",
        title: "公制螺丝通孔：完整 ISO 273 表",
        body: [
          "ISO 273 给每个公制螺丝三档通孔。精装配（H12）用于孔兼作定位；中等装配（H13）是常用档，大多数只给一个数的表说的就是它；粗装配（H14）给对位误差留余地。这个标准是 1979 年的，2024 年最近一次复审确认、内容未变；欧洲采用为 EN 20273（德国 DIN EN 20273）。",
          "下表数值取自 IS 1821:1987（与 ISO 273 完全相同的印度标准），与德文维基百科和 Albany County Fasteners 的表逐行一致。网上有些表把 M12 写成 13 / 14 / 15、M16 写成 17 / 18 / 19——那不是 ISO 273。",
        ],
        tables: [],
        tableKind: "iso",
      },
      {
        id: "printed",
        title: "打印的孔：要加多少",
        body: [
          "按 ISO 尺寸原样打印的孔，通常会偏小。nophead 的 Polyholes 一文列了原因：STL 的多边形小平面落在圆的里面，喷嘴走小圆弧时又会抄近路。偏多少取决于打印机、耗材和孔是不是竖直的——所以没有哪个标准给得出一个数。",
          "资料能说明的是：creative3dp 的压配计算器说打印孔大约小 0.2 mm；拓竹自己的 M6 测试孔不补偿时打出来是 5.9；切片软件的孔补偿默认都是 0，并让你按耗材校准。所以这里的余量从 0.2 mm 起，由你来改：先打一个孔试螺丝，再填实测值。不想校准的话，就用粗装配——它本来就比中等装配大 0.2（M3）到 0.4 mm（M6）。",
        ],
      },
      {
        id: "inserts",
        title: "热熔螺母孔：各厂家自己的表",
        body: [
          "热熔螺母（热熔铜螺母、滚花螺母）装进比滚花略小的直孔里，烙铁把周围的塑料熔开。每家都公布自己的孔径，而且并不一致：CNC Kitchen 现行的表（2026 年 4 月）是 M4 5.7、M5 6.5、M6 8.1；ruthex——以及部分经销商页面上 CNC Kitchen 的旧表——是 5.6、6.4、8.0。尺寸相同的 PEM 工业级 IUTB 螺母要求 5.67、6.43、8.03 mm（+0.08）。买的是哪家，就用哪家的表。",
          "深度：盲孔至少螺母长度加 1 mm（CNC Kitchen、ruthex），螺母不会顶到孔底；SPIROL 对工业零件的规则是长度加两个螺距。锥形热熔螺母是另一种零件：要配 8° 的锥孔（McMaster、PEM），不能用直孔。",
        ],
        tables: [],
        tableKind: "inserts",
      },
      {
        id: "example",
        title: "算例：盖板用螺丝锁到 M3 热熔螺母上",
        body: [
          "底座：CNC Kitchen M3 × 5.7 热熔螺母要 Ø4.0 孔、深度至少 6.7 mm、壁厚至少 1.6 mm——Forgent3D 的热熔螺母柱外径做成 Ø7（螺母滚花 4.6 加每边 1.2 mm）。盖板：M3 螺丝穿过 ISO 273 中等装配孔 Ø3.4，加 0.2 余量建模为 3.6。",
          "再按 SPIROL 检查一项：盖板的孔要比螺丝大，但要比螺母的导向端小（这款是 3.9），否则螺丝会把螺母拔出来。3.6 符合。",
        ],
      },
      {
        id: "install",
        title: "怎么装",
        list: [
          "烙铁温度：比打印温度高 10–20 °C（CNC Kitchen：PLA 约 225 °C，PETG 245 °C，ABS 265 °C）；ruthex 说高 10–15 °C。",
          "用烙铁压进约 90 %，再用平头工具压平，按住几秒等塑料凝固（CNC Kitchen）。",
          "尽量让孔竖直打印：孔是圆的，螺母装进去是正的。",
          "光固化树脂件不要烫：用粘稠的 CA 胶粘（CNC Kitchen）。",
        ],
      },
    ],
    faqs: [
      { q: "M3 热熔螺母开多大的孔？", a: "标准 M3 × 5.7 螺母开 Ø4.0（CNC Kitchen、ruthex；McMaster 最大 4.0；PEM 4.01 +0.08），盲孔深度至少 6.7 mm。Voron 用的 M3 × 5 × 4 更粗：Ø4.4。" },
      { q: "M3 螺丝的通孔多大？", a: "ISO 273：精装配 3.2、中等装配 3.4、粗装配 3.6。打印件按 3.4 加上你的打印机缩掉的量建模——3.6 是常见的起点。" },
      { q: "精装配、中等装配、粗装配怎么选？", a: "没有特别理由就用中等装配；螺丝兼作定位用精装配；多个孔要对上不能调的东西，或者打印机没校准，用粗装配。" },
      { q: "热熔螺母的孔要做成锥孔吗？", a: "常见的打印件用热熔螺母不用：CNC Kitchen 明确说孔要直，ruthex 和 McMaster 的直筒螺母也是直孔。只有锥形螺母才配锥孔，夹角 8°。" },
      { q: "热熔螺母离边缘多近？", a: "孔周围至少留厂家给的最小壁厚——M3 1.6 mm、M4 2.1、M5 2.6、M6 3.3（CNC Kitchen、ruthex）。PEM 对注塑件的建议要大得多：壁厚 ½ 到 1 倍螺母外径。" },
      { q: "PLA、PETG 能用热熔螺母吗？", a: "能——厂家列了 PLA、PETG、ABS 等热塑性材料，烙铁比该材料的打印温度高 10–20 °C。" },
    ],
    sources: SOURCES,
  },
  ja: {
    name: "キリ穴・インサートナット下穴径表",
    title: "キリ穴・ボルト穴径表（ISO 273）とインサートナット熱圧入の下穴径 | Forgent3D",
    description:
      "ISO 273のキリ穴（ボルト穴径）M1.6〜M24を精・中・粗の3系列で。3Dプリントの穴に足す量と、CNC Kitchen・ruthex・PEM・McMasterのインサートナット下穴径・深さ・肉厚も。そのままボスやブラケットを作成。",
    h1: "キリ穴（ボルト穴径）とインサートナット下穴の寸法表",
    intro:
      "メートルネジを選ぶと、ISO 273の3系列すべてのキリ穴（いわゆるバカ穴）、印刷する穴でモデル化すべき寸法、そして各メーカー自身の表によるインサートナット（熱圧入）の下穴――下穴径、深さ、最小肉厚――がわかります。続けて部品も作れます。インサートナット用ボス、またはその穴が開いたフランジやブラケットです。",
    card: "M1.6〜M24のISO 273精・中・粗のキリ穴、印刷穴の補正量、メーカー別のインサートナット下穴。そのままボスやブラケットへ。",
    ui: {
      screw: "ネジ",
      allowance: "印刷穴の補正量",
      allowanceHint: "モデル上の穴径に足す値です。0.2は出発点で、規格値ではありません。お使いのプリンターで実測してください。",
      clearanceTitle: "{s}のキリ穴（ISO 273）",
      copy: "コピー",
      copied: "コピーしました",
      colSeries: "系列",
      colPrinted: "印刷用のモデル寸法",
      fit_fine: "精（fine）",
      fit_medium: "中（medium）",
      fit_coarse: "粗（coarse）",
      printed: "印刷する穴はφ{d}でモデル化",
      fitUse_fine: "部品の位置決めも兼ねる穴に。",
      fitUse_medium: "ふつうはこれ。",
      fitUse_coarse: "位置合わせがラフでよいときに。キャリブレーションしていないプリンターの逃げ道にも。",
      insertTitle: "{s}インサートナットの下穴",
      colVendor: "インサート",
      colLength: "長さ L",
      colOd: "外径",
      colHole: "下穴径",
      colDepth: "止まり穴深さ",
      colWall: "最小肉厚",
      variant_standard: "標準",
      variant_short: "ショート",
      variant_voron: "Voron M3×5×4",
      variant_IUTB: "IUTB",
      pemWall: "外径の½〜1倍",
      insertNote: "下穴はストレート。深さ：CNC Kitchenとruthexは止まり穴でL + 1mm（貫通穴でも可）、PEMの表はおよそL + 0.8です。McMasterは最大穴径を示しています。肉厚：メーカーの最小値。PEMの工業用ガイドラインでは外径の½〜1倍です。",
      noInserts: "このサイズのインサートは、どのメーカーの表にも載っていません。",
      handoffTitle: "部品を作る",
      handoffBody: "この穴がすでに入った部品を開きます。インサートナット用ボスか、このネジで締結する部品です。",
      handoffBoss: "{s}インサートナット用ボス（標準長さ）",
      handoffBossShort: "{s}インサートナット用ボス（ショートタイプ）",
      handoffBossNote: "アプリでインサートナット用ボスを開きます。ボス2本と、キリ穴付きのフタです。下穴径はruthexの表によります（M4 5.6、M5 6.4、M6 8.0）。",
      handoffFlange: "{s}の穴付きフランジ",
      handoffFlangeNote: "ISO 273の中（medium）に補正量を足して φ{d}。",
      handoffCoupling: "{s}のクランプネジで留めるカップリング",
      handoffPillow: "{s}の取付穴付きピローブロック",
      handoffNone: "対応する部品はまだありません",
      handoffNoneWhy: "このサイズのネジを使うジェネレーターがありません。",
    },
    sections: [
      {
        id: "iso-273",
        title: "メートルネジのキリ穴：ISO 273の全サイズ表",
        body: [
          "ISO 273は、メートルネジ1サイズごとに3種類のキリ穴を定めています。精（fine、H12）は部品の位置決めも兼ねる穴用、中（medium、H13）が標準の系列で、値を1つしか載せていない表はたいていこれを指します。粗（coarse、H14）は位置ずれを逃がす余裕のある穴です。規格の制定は1979年で、直近では2024年に内容を変えずに確認されています。欧州ではEN 20273（ドイツではDIN EN 20273）として採用されています。日本のJIS B 1001「ボルト穴径及びざぐり径」はISO 273を基にした規格（MOD）ですが、等級の分け方や値がこの表と同じとは限りません。JISで指示された図面ではJISの表で確かめてください。",
          "下の値は、ISO 273と同一のインド規格IS 1821:1987から読み取ったもので、ドイツ語版WikipediaとAlbany County Fastenersの表とも全行で一致します。ネット上にはM12を13 / 14 / 15、M16を17 / 18 / 19とする表もありますが、それはISO 273の値ではありません。",
        ],
        tables: [],
        tableKind: "iso",
      },
      {
        id: "printed",
        title: "3Dプリントの穴：どれだけ足すか",
        body: [
          "ISOの寸法どおりにモデル化した穴は、印刷するとたいてい小さく仕上がります。nopheadのPolyholesの記事がその理由を挙げています。STLの平らなファセットは円の内側に収まり、小さな曲線ではノズルが角を内側にショートカットするからです。どれだけ小さくなるかはプリンター、フィラメント、穴が垂直かどうかで変わるため、数値を示した規格はありません。",
          "資料から言えるのは次のことです。creative3dpの圧入計算ツールは、印刷した穴はおよそ0.2mm小さくなるとしています。Bambu Lab自身の補正なしのM6テスト穴は5.9に仕上がりました。スライサーの穴補正は初期値0で、フィラメントごとにキャリブレーションするよう案内されています。そこでこのページの補正量は0.2mmから始め、値はご自身で変えてください。穴を1つ印刷してネジを通してみて、実測した値を入れます。キャリブレーションしたくなければ粗（coarse）系列を使ってください。もともと中（medium）より0.2（M3）〜0.4mm（M6）大きい穴です。",
        ],
      },
      {
        id: "inserts",
        title: "インサートナットの下穴：各メーカー自身の表から",
        body: [
          "熱圧入するインサートナットは、ローレットより少し小さいストレートの下穴に入れ、はんだごての熱で周りの樹脂を溶かして埋め込みます。下穴径は各メーカーが公表していますが、すべてが一致するわけではありません。CNC Kitchenの現行の表（2026年4月）はM4 5.7、M5 6.5、M6 8.1。ruthexと、一部の販売店ページに残るCNC Kitchenの旧版の表は5.6、6.4、8.0です。同じサイズのPEMの工業用IUTBインサートは5.67、6.43、8.03mm（+0.08）を指定しています。買ったインサートのメーカーの表を使ってください。",
          "深さ：止まり穴ならインサートの長さ＋1mm以上（CNC Kitchen、ruthex）。これでインサートが穴底に当たりません。工業部品向けのSPIROLのルールは、長さ＋ねじピッチ2山分です。テーパー型のインサートは別の部品で、8°のテーパー穴が必要です（McMaster、PEM）。ストレート穴には使いません。",
        ],
        tables: [],
        tableKind: "inserts",
      },
      {
        id: "example",
        title: "計算例：M3インサートナットにフタをネジ留めする",
        body: [
          "ベース側：CNC KitchenのM3 × 5.7インサートには、φ4.0、深さ6.7mm以上の下穴と1.6mmの肉厚が必要です。Forgent3Dのインサートナット用ボスは外径をφ7にしています（インサートのローレット4.6に片側1.2mm）。フタ側：M3ネジはISO 273の中（medium）のキリ穴φ3.4を通ります。補正量0.2を足して3.6でモデル化します。",
          "SPIROLに沿ってもう1つ確認します。フタの穴はネジより大きく、かつインサートのパイロット端（このインサートでは3.9）より小さくしないと、ネジでインサートが引き抜かれるおそれがあります。3.6なら条件を満たします。",
        ],
      },
      {
        id: "install",
        title: "取り付け方",
        list: [
          "はんだごての温度：印刷温度より10〜20°C高く（CNC Kitchen：PLAは約225°C、PETGは245°C、ABSは265°C）。ruthexは10〜15°C高く、としています。",
          "はんだごてで90%ほどまで押し込み、残りは平らな工具で面一まで押して、樹脂が固まるまで数秒押さえます（CNC Kitchen）。",
          "できれば穴は垂直方向に印刷します。穴が真円に仕上がり、インサートがまっすぐ座ります。",
          "レジン（光造形）のプリントでは溶かさず、粘度の高い瞬間接着剤（CA）で接着します（CNC Kitchen）。",
        ],
      },
    ],
    faqs: [
      { q: "M3のインサートナットの下穴は何mm？", a: "標準のM3 × 5.7インサートならφ4.0（CNC Kitchen、ruthex。McMasterの最大穴径は4.0、PEMは4.01 +0.08）で、止まり穴なら深さ6.7mm以上です。Voron用のM3 × 5 × 4インサートは太く、φ4.4です。" },
      { q: "M3ネジのキリ穴は何mm？", a: "ISO 273では精3.2、中3.4、粗3.6です。印刷する部品なら、3.4にプリンターで小さくなる分を足してモデル化します。3.6がよくある出発点です。" },
      { q: "精・中・粗（close / normal / loose）はどれを選べばいい？", a: "特に理由がなければ中（ISOのmedium）。ネジで部品の位置決めもするなら精（fine）。複数の穴を調整のきかない相手に合わせるとき、またキャリブレーションしていないプリンターで印刷する穴には粗（coarse）です。" },
      { q: "インサートナットの下穴はテーパーにすべき？", a: "3Dプリント部品で一般的なインサートなら不要です。CNC Kitchenは穴をストレートにするよう述べていて、ruthexやMcMasterのストレート型インサートのページも同じです。テーパー穴にするのはテーパー型インサートだけで、夾角8°です。" },
      { q: "インサートナットは縁からどこまで近づけられる？", a: "穴の周りに、少なくともメーカーの最小肉厚を残してください。M3は1.6mm、M4は2.1、M5は2.6、M6は3.3です（CNC Kitchen、ruthex）。PEMの成形品向けガイドラインはずっと大きく、インサート外径の½〜1倍の肉厚です。" },
      { q: "インサートナットはPLAやPETGに使える？", a: "使えます。メーカーはPLA、PETG、ABSなどの熱可塑性樹脂を挙げています。はんだごては、その材料の印刷温度より10〜20°C高くします。" },
    ],
    sources: SOURCES,
  },
  de: {
    name: "Durchgangsbohrung & Gewindeeinsatz-Tabelle",
    title: "Durchgangsbohrung M1,6–M24 (ISO 273) & Gewindeeinsatz 3D-Druck | Forgent3D",
    description:
      "Durchgangsbohrung M1,6–M24 nach ISO 273 (fein, mittel, grob), Aufmaß für den 3D-Druck, Bohrloch, Tiefe, Wand für Gewindeeinsätze (CNC Kitchen, ruthex, PEM, McMaster).",
    h1: "Durchgangsbohrungen und Bohrlöcher für Gewindeeinsätze: Tabelle",
    intro:
      "Wählen Sie eine metrische Schraube: Sie erhalten ihre Durchgangsbohrung nach ISO 273 in allen drei Reihen, das Maß, das Sie für eine gedruckte Bohrung konstruieren, und das Bohrloch für einen Gewindeeinsatz (Einschmelzmutter) aus der Tabelle des jeweiligen Herstellers – Bohrungs-Ø, Tiefe und Mindestwandstärke. Dann bauen Sie das Teil: einen Dom für den Gewindeeinsatz oder einen Flansch oder Halter mit diesen Bohrungen.",
    card: "ISO 273 fein / mittel / grob für M1,6–M24, das Aufmaß für gedruckte Bohrungen und Bohrlöcher für Gewindeeinsätze je Hersteller – dann Dom oder Halter.",
    ui: {
      screw: "Schraube",
      allowance: "Aufmaß für gedruckte Bohrungen",
      allowanceHint: "Wird zur konstruierten Bohrung addiert. 0,2 ist ein Startwert, keine Norm – messen Sie an Ihrem Drucker nach.",
      clearanceTitle: "Durchgangsbohrung {s} (ISO 273)",
      copy: "Kopieren",
      copied: "Kopiert",
      colSeries: "Reihe",
      colPrinted: "Für den Druck konstruieren",
      fit_fine: "Fein",
      fit_medium: "Mittel",
      fit_coarse: "Grob",
      printed: "Für eine gedruckte Bohrung Ø{d} konstruieren",
      fitUse_fine: "Für Bohrungen, die das Teil zugleich positionieren.",
      fitUse_medium: "Die übliche Wahl.",
      fitUse_coarse: "Lockere Ausrichtung; auch die Rückfallebene für einen nicht kalibrierten Drucker.",
      insertTitle: "Bohrlöcher für Gewindeeinsätze {s}",
      colVendor: "Gewindeeinsatz",
      colLength: "Länge L",
      colOd: "Ø Einsatz",
      colHole: "Ø Bohrung",
      colDepth: "Tiefe Sackloch",
      colWall: "Mindestwand",
      variant_standard: "Standard",
      variant_short: "kurz",
      variant_voron: "Voron M3×5×4",
      variant_IUTB: "IUTB",
      pemWall: "½–1 × Ø Einsatz",
      insertNote: "Gerade Bohrungen. Tiefe: CNC Kitchen und ruthex nennen L + 1 mm für ein Sackloch (eine Durchgangsbohrung geht auch); die Tabelle von PEM liegt bei etwa L + 0,8. McMaster gibt einen Höchstdurchmesser der Bohrung an. Wand: die Mindestwerte der Hersteller; die Industrie-Richtlinie von PEM ist ½–1 × Ø des Einsatzes.",
      noInserts: "Keine Herstellertabelle führt einen Gewindeeinsatz dieser Größe.",
      handoffTitle: "Das Teil erzeugen",
      handoffBody: "Öffnen Sie ein Teil, in dem diese Bohrungen schon sitzen – den Dom für den Gewindeeinsatz oder ein Teil, das mit dieser Schraube verschraubt wird.",
      handoffBoss: "Dom für Gewindeeinsatz {s} (Standardlänge)",
      handoffBossShort: "Dom für Gewindeeinsatz {s} (kurzer Einsatz)",
      handoffBossNote: "Öffnet den Dom für Gewindeeinsätze in der App: zwei Dome und ein Deckel mit Durchgangsbohrungen. Seine Bohrungstabelle ist die von ruthex (M4 5,6, M5 6,4, M6 8,0).",
      handoffFlange: "Flansch mit Bohrungen für {s}",
      handoffFlangeNote: "ISO 273 mittel plus Ihr Aufmaß: Ø{d}.",
      handoffCoupling: "Wellenkupplung mit Klemmschrauben {s}",
      handoffPillow: "Stehlager mit Befestigungsbohrungen für {s}",
      handoffNone: "Noch kein Teil",
      handoffNoneWhy: "keiner der Generatoren nimmt diese Schraubengröße.",
    },
    sections: [
      {
        id: "iso-273",
        title: "Metrische Durchgangsbohrungen: die vollständige Tabelle nach ISO 273",
        body: [
          "ISO 273 nennt für jede metrische Schraube drei Durchgangsbohrungen. Fein (H12) ist für Bohrungen, die das Teil zugleich positionieren; mittel (H13) ist die übliche Reihe und die, die die meisten Tabellen meinen, wenn sie nur einen Wert angeben; grob (H14) lässt Spiel für Versatz. Die Norm stammt von 1979 und wurde zuletzt 2024 unverändert bestätigt; Europa hat sie als EN 20273 übernommen (in Deutschland DIN EN 20273).",
          "Die Werte unten stammen aus IS 1821:1987, der indischen Norm, die mit ISO 273 identisch ist, und stimmen in jeder Zeile mit der Tabelle der deutschen Wikipedia und der von Albany County Fasteners überein. Manche Tabellen im Netz geben M12 mit 13 / 14 / 15 und M16 mit 17 / 18 / 19 an – das ist nicht ISO 273.",
        ],
        tables: [],
        tableKind: "iso",
      },
      {
        id: "printed",
        title: "Gedruckte Bohrungen: wie viel Aufmaß",
        body: [
          "Eine Bohrung, die genau im ISO-Maß gedruckt wird, fällt meist zu klein aus. Der Beitrag „Polyholes“ von nophead nennt die Gründe: Die ebenen Facetten der STL liegen innerhalb des Kreises, und die Düse kürzt an jeder kleinen Rundung den Weg ab. Wie viel, hängt vom Drucker, vom Filament und davon ab, ob die Bohrung senkrecht steht – deshalb nennt keine Norm einen Wert.",
          "Was die Quellen sagen: Der Presspassungsrechner von creative3dp setzt gedruckte Bohrungen etwa 0,2 mm zu klein an; die unkompensierte M6-Testbohrung von Bambu Lab selbst kam mit 5,9 aus dem Drucker; Slicer liefern ihre Lochkompensation mit 0 aus und raten, je Filament zu kalibrieren. Das Aufmaß hier beginnt daher bei 0,2 mm, und Sie stellen es selbst ein. Drucken Sie eine Bohrung, probieren Sie die Schraube und tragen Sie ein, was Sie gemessen haben. Wer nicht kalibrieren will, nimmt die grobe Reihe: Sie ist schon 0,2 (M3) bis 0,4 mm (M6) größer als mittel.",
        ],
      },
      {
        id: "inserts",
        title: "Bohrlöcher für Gewindeeinsätze aus den Tabellen der Hersteller",
        body: [
          "Gewindeeinsätze zum Einschmelzen sitzen in einer geraden Bohrung, die etwas kleiner als ihre Rändelung ist; der Lötkolben schmilzt den Kunststoff um sie herum auf. Jeder Hersteller veröffentlicht sein Bohrloch, und die Werte stimmen nicht alle überein: Die aktuelle Tabelle von CNC Kitchen (April 2026) nennt M4 5,7, M5 6,5 und M6 8,1, während ruthex – und ältere Fassungen der CNC-Kitchen-Tabelle, die noch auf manchen Händlerseiten stehen – 5,6, 6,4 und 8,0 angeben. Die industriellen IUTB-Einsätze von PEM haben dieselbe Größe und verlangen 5,67, 6,43 und 8,03 mm, +0,08. Nehmen Sie die Tabelle des Einsatzes, den Sie gekauft haben.",
          "Tiefe: mindestens die Länge des Einsatzes plus 1 mm für ein Sackloch (CNC Kitchen, ruthex), damit der Einsatz nie auf dem Grund aufsitzt; die Regel von SPIROL für Industrieteile ist die Länge plus zwei Gewindesteigungen. Konische Einsätze sind andere Teile: Sie brauchen eine konische Bohrung mit 8° (McMaster, PEM), nie eine gerade.",
        ],
        tables: [],
        tableKind: "inserts",
      },
      {
        id: "example",
        title: "Rechenbeispiel: ein Deckel, auf einen M3-Gewindeeinsatz geschraubt",
        body: [
          "Unterteil: Ein Einsatz M3 × 5,7 von CNC Kitchen braucht eine Bohrung Ø4,0, mindestens 6,7 mm tief, und 1,6 mm Wand – der Dom von Forgent3D bekommt außen Ø7 (die Rändelung des Einsatzes mit 4,6 plus 1,2 mm je Seite). Deckel: Die M3-Schraube geht durch eine Durchgangsbohrung ISO 273 mittel, Ø3,4, mit dem Aufmaß von 0,2 als 3,6 konstruiert.",
          "Noch eine Prüfung nach SPIROL: Die Bohrung im Deckel muss größer als die Schraube sein, aber kleiner als das Führungsende des Einsatzes (3,9 bei diesem Einsatz), sonst kann die Schraube den Einsatz herausziehen. 3,6 erfüllt das.",
        ],
      },
      {
        id: "install",
        title: "Einsetzen",
        list: [
          "Temperatur des Lötkolbens: 10–20 °C über Ihrer Drucktemperatur (CNC Kitchen: etwa 225 °C für PLA, 245 °C für PETG, 265 °C für ABS); ruthex nennt 10–15 °C darüber.",
          "Den Einsatz mit dem Lötkolben zu etwa 90 % einsetzen, dann mit einem flachen Werkzeug bündig drücken und ein paar Sekunden halten, bis der Kunststoff fest ist (CNC Kitchen).",
          "Die Bohrung möglichst senkrecht drucken: Sie wird rund, und der Einsatz sitzt gerade.",
          "In Resin-Drucken nicht einschmelzen: Den Einsatz mit dickflüssigem Sekundenkleber (CA) einkleben (CNC Kitchen).",
        ],
      },
    ],
    faqs: [
      { q: "Wie groß muss das Bohrloch für einen M3-Gewindeeinsatz sein?", a: "Ø4,0 für den Standard-Einsatz M3 × 5,7 (CNC Kitchen, ruthex; das Höchstmaß bei McMaster ist 4,0; PEM 4,01 +0,08), mindestens 6,7 mm tief für ein Sackloch. Der Einsatz M3 × 5 × 4 im Voron-Stil ist breiter: Ø4,4." },
      { q: "Wie groß ist die Durchgangsbohrung für eine M3-Schraube?", a: "ISO 273: 3,2 fein, 3,4 mittel, 3,6 grob. Für ein gedrucktes Teil konstruieren Sie 3,4 plus das, was Ihr Drucker verliert – 3,6 ist ein üblicher Startwert." },
      { q: "Fein, mittel oder grob – welche Reihe?", a: "Mittel, solange nichts dagegen spricht: fein, wenn die Schrauben das Teil zugleich positionieren; grob, wenn mehrere Bohrungen zu etwas passen müssen, das sich nicht verstellen lässt, und für gedruckte Bohrungen auf einem nicht kalibrierten Drucker." },
      { q: "Muss das Bohrloch für den Gewindeeinsatz konisch sein?", a: "Nicht bei den üblichen Einsätzen für Druckteile: CNC Kitchen sagt, die Bohrung soll gerade sein, ebenso die Seiten von ruthex und McMaster zu geraden Einsätzen. Nur konische Einsätze bekommen eine konische Bohrung, mit 8° Kegelwinkel." },
      { q: "Wie nah an den Rand darf ein Gewindeeinsatz?", a: "Lassen Sie um die Bohrung mindestens die Mindestwandstärke des Herstellers – 1,6 mm für M3, 2,1 für M4, 2,6 für M5, 3,3 für M6 (CNC Kitchen, ruthex). Die Richtlinie von PEM für Spritzgussteile verlangt weit mehr: eine Wand von ½ bis 1 × Ø des Einsatzes." },
      { q: "Funktionieren Gewindeeinsätze in PLA und PETG?", a: "Ja – die Hersteller nennen PLA, PETG, ABS und andere Thermoplaste, mit dem Lötkolben 10–20 °C heißer als die Drucktemperatur des jeweiligen Materials." },
    ],
    sources: SOURCES,
  },
};

const TABLE_HEADS = {
  en: { iso: ["Screw", "Fine (H12)", "Medium (H13)", "Coarse (H14)"], isoCaption: "Millimetres. ISO 273:1979 via IS 1821:1987.", inserts: ["Insert", "Length L", "Insert Ø", "Hole Ø", "Blind depth", "Min. wall"], insertsCaption: "Millimetres, from each maker's table (sources below). “≤” = McMaster's maximum hole. PEM gives no minimum wall per size." },
  zh: { iso: ["螺丝", "精装配 (H12)", "中等装配 (H13)", "粗装配 (H14)"], isoCaption: "单位毫米。ISO 273:1979，取自 IS 1821:1987。", inserts: ["螺母", "长度 L", "螺母外径", "孔径", "盲孔深度", "最小壁厚"], insertsCaption: "单位毫米，取自各厂家的表（出处见下）。“≤”为 McMaster 的最大孔径。PEM 不按规格给最小壁厚。" },
  de: { iso: ["Schraube", "fein (H12)", "mittel (H13)", "grob (H14)"], isoCaption: "Millimeter. ISO 273:1979 nach IS 1821:1987.", inserts: ["Gewindeeinsatz", "Länge L", "Ø Einsatz", "Ø Bohrung", "Tiefe Sackloch", "Mindestwand"], insertsCaption: "Millimeter, aus der Tabelle des jeweiligen Herstellers (Quellen unten). „≤“ = Höchstmaß bei McMaster. PEM nennt keine Mindestwand je Größe." },
  ja: { iso: ["ネジ", "精 fine (H12)", "中 medium (H13)", "粗 coarse (H14)"], isoCaption: "単位mm。ISO 273:1979（IS 1821:1987による）。", inserts: ["インサート", "長さ L", "外径", "下穴径", "止まり穴深さ", "最小肉厚"], insertsCaption: "単位mm。各メーカーの表による（出典は下記）。「≤」はMcMasterの最大穴径。PEMはサイズ別の最小肉厚を示していません。" },
};

/** Fill the reference tables into each language's sections (they need the language for labels and decimals). */
export function fillTables() {
  for (const [locale, c] of Object.entries(copy)) {
    const heads = TABLE_HEADS[locale] || TABLE_HEADS.en;
    for (const section of c.sections) {
      if (section.tableKind === "iso") section.tables = [isoTable(locale, heads.iso, heads.isoCaption)];
      if (section.tableKind === "inserts") section.tables = [insertTable(locale, heads.inserts, { short: c.ui.variant_short, voron: c.ui.variant_voron }, heads.insertsCaption)];
      delete section.tableKind;
    }
  }
}
fillTables();
