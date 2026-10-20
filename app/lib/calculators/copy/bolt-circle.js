// Bolt circle calculator — page copy per language. Numbers in the text are checked by scripts/calculators.test.mjs
// where they are computed (the worked examples), and every standard value names its source in `sources`.
// Evidence: platform repo generator-models/bolt-circle-flange/EVIDENCE.md and docs/generator-seo-research.md §5.0 B3.

const CALC = "/calculators/bolt-circle-calculator";
const GEN = "/generators/bolt-circle-flange-generator";

/** Rows of common bolt circles: [label, D, K, n × hole, bolt, calculator query, generator query]. */
const COMMON = [
  ["EN 1092-1 PN16 DN15", 95, 65, "4 × 14", "M12", "n=4&pcd=65&start=45&screw=M12&fit=coarse&bore=21.3", "PCD=65&HOLES=4&START_ANGLE=45&SCREW=M12&FIT=coarse&OUTER_D=95&BORE_D=21.3"],
  ["EN 1092-1 PN16 DN25", 115, 85, "4 × 14", "M12", "n=4&pcd=85&start=45&screw=M12&fit=coarse&bore=33.7", "PCD=85&HOLES=4&START_ANGLE=45&SCREW=M12&FIT=coarse&OUTER_D=115&BORE_D=33.7"],
  ["EN 1092-1 PN16 DN50", 165, 125, "4 × 18", "M16", "n=4&pcd=125&start=45&screw=M16&fit=coarse&bore=60.3", "PCD=125&HOLES=4&START_ANGLE=45&SCREW=M16&FIT=coarse&OUTER_D=165&BORE_D=60.3"],
  ["EN 1092-1 PN16 DN80", 200, 160, "8 × 18", "M16", "n=8&pcd=160&start=22.5&screw=M16&fit=coarse&bore=88.9", "PCD=160&HOLES=8&START_ANGLE=22.5&SCREW=M16&FIT=coarse&OUTER_D=200&BORE_D=88.9"],
  ["IEC B14 FT65", 80, 65, "4 × M5", "M5", "n=4&pcd=65&start=45&screw=M5&bore=50", "PCD=65&HOLES=4&START_ANGLE=45&SCREW=M5&OUTER_D=80&BORE_D=50"],
  ["IEC B14 FT85", 105, 85, "4 × M6", "M6", "n=4&pcd=85&start=45&screw=M6&bore=70", "PCD=85&HOLES=4&START_ANGLE=45&SCREW=M6&OUTER_D=105&BORE_D=70"],
  ["IEC B14 FT100", 120, 100, "4 × M6", "M6", "n=4&pcd=100&start=45&screw=M6&bore=80", "PCD=100&HOLES=4&START_ANGLE=45&SCREW=M6&OUTER_D=120&BORE_D=80"],
  ["IEC B14 FT130", 160, 130, "4 × M8", "M8", "n=4&pcd=130&start=45&screw=M8&bore=110", "PCD=130&HOLES=4&START_ANGLE=45&SCREW=M8&OUTER_D=160&BORE_D=110"],
];

function commonTable(locale, head, open, make, caption) {
  return {
    head,
    minWidth: 720,
    caption,
    rows: COMMON.map(([label, D, K, holes, , calcQuery, genQuery]) => [
      label,
      String(D),
      String(K),
      holes,
      { text: open, href: `/${locale}${CALC}?${calcQuery}#calculator` },
      { text: make, href: `/${locale}${GEN}?${genQuery}#use-here` },
    ]),
  };
}

/** The worked example's four holes: EN 1092-1 DN50 PN16, K 125, start 45° (r cos 45° = 44.194). */
const DN50_ROWS = [
  ["1", "45", "44.194", "44.194"],
  ["2", "135", "−44.194", "44.194"],
  ["3", "225", "−44.194", "−44.194"],
  ["4", "315", "44.194", "−44.194"],
];

const SOURCES_COMMON = [
  { label: "Machinery's Reference Series No. 21, “Precision Locating and Dividing Methods”, The Industrial Press, 1914 (Project Gutenberg #69061)", url: "https://www.gutenberg.org/cache/epub/69061/pg69061.txt", note: "the chord rule: divide 360 by twice the number of holes, take the sine, multiply by the circle's diameter" },
  { label: "ASME B16.5 Pipe Flanges and Flanged Fittings, §6.5 Flange Bolt Holes (2003 edition, vendor-hosted copy)", url: "https://www.htpipe.com/d/files/flanges-standard/asme-b16_5.pdf", note: "“pairs of bolt holes shall straddle fitting centerlines”; bolt circle tolerance ±1.5 mm, adjacent holes ±0.8 mm (§7.8)" },
  { label: "EN 1092-1 PN16 flange dimensions — RoyMech table", url: "https://www.roymech.co.uk/Useful_Tables/Flanges/BSEN1092_16_Dimensions.html", note: "D, K, holes for DN10–DN150 (PN10 drills the same up to DN150 — Global Supply Line EN 1092-1 tables)" },
  { label: "Lafert, IEC flange dimensions B14 / B5 (catalogue 2019, p. 29)", url: "https://www.lafertna.com/resources/product_files/pg._29_-_DIMENSIONS-Aluminum_Frame_Single_Phase-3Phase_Flanges_B14__B5_-_LNA_CAT._2019.pdf", note: "FT65 … FT165: bolt circle M, spigot N, outside P, thread S" },
  { label: "ISO 273:1979 clearance holes, as IS 1821:1987 (identical adoption)", url: "https://law.resource.org/pub/in/bis/S01/is.1821.1987.pdf", note: "hole sizes for the screw selector; ISO 273 was last confirmed in 2024" },
  { label: "EN 1993-1-8 (Eurocode 3) Table 3.3, bolt spacing and edge distances — summary by Eurocode Applied", url: "https://eurocodeapplied.com/design/en1993/bolt-design-properties", note: "steel: spacing ≥ 2.2 × hole, edge ≥ 1.2 × hole" },
  { label: "ACRYLITE knowledge base: hole distance from the edge of a plastic sheet", url: "https://www.acrylite.co/resources/knowledge-base/article/how-far-in-should-I-drill-a-hole-from-the-edge-of-acrylic-sheet?category=working-with-acrylite-r", note: "hole centre at least 1.5 × the hole diameter from the edge" },
];

export const keywords = {
  en: ["bolt circle calculator", "bolt hole circle calculator", "bolt circle solver", "pcd calculator", "bolt pattern calculator", "hole spacing calculator"],
  zh: ["螺栓孔分布圆计算", "PCD 孔位坐标计算", "节圆孔位计算", "法兰孔位计算", "法兰盘生成器"],
  de: ["lochkreis berechnen", "lochkreis rechner", "lochkreis tabelle", "lochkreisdurchmesser", "lochkreis"],
};

export const copy = {
  en: {
    name: "Bolt Circle Calculator",
    title: "Bolt Circle Calculator — Hole Coordinates, Drawing & Printable Flange | Forgent3D",
    description:
      "Bolt circle (PCD) calculator: number of holes, diameter and start angle give every hole's X / Y, the spacing between holes and a drawing to scale — then open the flange with those holes as STL or STEP.",
    h1: "Bolt circle calculator",
    intro:
      "Enter how many holes, the bolt circle diameter (PCD) and where hole 1 sits: you get each hole's X / Y, the pitch between neighbours and the plastic left between them, drawn to scale. Then make the part — the same pattern opens in the flange generator, ready to print or to send as a STEP.",
    card: "Hole X / Y for N holes on a PCD, the pitch between them and a drawing — then a printable flange with exactly those holes.",
    ui: {
      holes: "Number of holes",
      pcd: "Bolt circle diameter (PCD)",
      start: "Angle of hole 1",
      startHint: "From +X (3 o'clock), counter-clockwise. 12 o'clock = 90°.",
      screw: "Screw",
      customHole: "Other hole size…",
      holeD: "Hole diameter",
      fit: "Clearance hole (ISO 273)",
      fit_fine: "Fine",
      fit_medium: "Medium",
      fit_coarse: "Coarse",
      fitHint: "Medium is the usual series; coarse for loose alignment (pipe flanges sit near it).",
      cx: "Centre X",
      cy: "Centre Y",
      angleStep: "Angle between holes",
      spacing: "Hole-to-hole pitch",
      spacingNote: "Centre to centre, neighbouring holes: PCD × sin(180° / N).",
      across: "Widest across",
      acrossEven: "Opposite holes: equals the PCD.",
      acrossOdd: "Odd count: no hole is opposite another, so this is less than the PCD.",
      ligament: "Plastic between holes",
      ligamentNote: "Pitch minus the Ø{d} hole.",
      ligamentWarn: "Less than half a hole between neighbours — the flange generator refuses this; use fewer holes, a smaller screw or a larger circle.",
      drawingLabel: "Bolt circle drawing to scale with numbered holes",
      tableTitle: "Hole coordinates",
      copy: "Copy table",
      copied: "Copied",
      colHole: "Hole",
      colAngle: "Angle",
      tableNote: "Millimetres from the centre you entered, 3 decimals. The copied table is tab-separated: it pastes into a spreadsheet or a CAD sketch table.",
      handoffTitle: "Make the part",
      handoffBody: "The flange generator builds a round plate with exactly this pattern — outside Ø {od} mm suggested (hole centres 1.5 holes from the rim), your centre bore, holes at the clearance size you chose. Download STL to print or STEP for CAD.",
      handoffFlange: "Open this pattern as a flange",
      bore: "Centre bore for the part",
      boreHint: "0 = no centre hole. A pipe, spigot or shaft goes through it.",
      noteCustomHole: "The generator makes ISO 273 holes for M2–M16; pick the screw there.",
      blockedHoles: "the generator makes 2–{v} holes.",
      blockedPcd: "the generator takes bolt circles of {v} mm.",
      blockedTooClose: "{v} holes this close would overlap in the generator (it keeps 2.2 holes between centres); use fewer holes or a larger circle.",
      blockedBore: "the bore would cut into the holes — keep it at most {v} mm.",
      blockedBed: "the plate would be wider than the {v} mm the generator prints.",
    },
    sections: [
      {
        id: "how",
        title: "How the coordinates are calculated",
        body: [
          "Every hole sits on a circle of radius r = PCD / 2 around the centre. Hole 1 is at the start angle; the others follow counter-clockwise, 360° / N apart. The X and Y of each hole are plain trigonometry, worked out exactly — there is nothing to approximate.",
          "The pitch between two neighbouring holes is the chord of that circle. The rule is old: Machinery's 1914 reference on locating holes says to divide 360 by twice the number of holes, find the sine of that angle and multiply by the circle's diameter.",
        ],
        formula: "θi = start + (i − 1) · 360° / N          (i = 1 … N)\nxi = cx + (PCD / 2) · cos θi\nyi = cy + (PCD / 2) · sin θi\n\npitch (neighbours)   = PCD · sin(180° / N)\nholes k apart        = PCD · sin(k · 180° / N)\nPCD from a pitch     = pitch / sin(180° / N)",
        after: [
          "Check: Machinery's own example puts 11 holes on an 8-inch circle — 8 × sin(16.36°) = 2.252 in between neighbours. The calculator gives 2.2539 in with the unrounded angle (180° / 11 = 16.3636°).",
        ],
      },
      {
        id: "example",
        title: "Worked example: an EN 1092-1 DN50 PN16 flange",
        body: [
          "A DN50 PN16 flange has 4 holes of Ø18 for M16 bolts on a 125 mm bolt circle, 165 mm outside (EN 1092-1 tables). Pipe flanges place the holes so that they straddle the centre lines — for 4 holes the first one is at 45°. With PCD 125, N 4 and a start of 45°, r = 62.5 and every coordinate is 62.5 × cos 45° = 44.194 mm:",
        ],
        tables: [{ head: ["Hole", "Angle (°)", "X (mm)", "Y (mm)"], rows: DN50_ROWS, minWidth: 360 }],
        after: [
          "Neighbouring holes are 125 × sin 45° = 88.388 mm apart and opposite holes 125 mm. With Ø18 holes that leaves 70.4 mm of material between neighbours and (165 − 125) / 2 − 9 = 11 mm from each hole to the rim. Open it: the DN50 row in the table below fills in all of this, and its second link makes the flange.",
        ],
      },
      {
        id: "start-angle",
        title: "Where does hole 1 go?",
        body: [
          "On pipe flanges the holes are not on the centre lines: ASME B16.5 §6.5 says “pairs of bolt holes shall straddle fitting centerlines”. For 4 holes that puts hole 1 at 45°, for 8 holes at 22.5°, for 12 at 15° — half the angle between holes. Motor flanges are drawn the same way.",
          "This calculator, like most CAD, measures angles counter-clockwise from the +X axis (3 o'clock). If your drawing counts from 12 o'clock, add 90°; if it counts clockwise, use 360° minus its angle.",
        ],
      },
      {
        id: "common",
        title: "Common bolt circles",
        body: [
          "Pipe flanges (EN 1092-1, PN10 and PN16 drill alike up to DN150) and IEC B14 motor face flanges, where the flange code is the bolt circle. Each row opens in the calculator, or straight into the flange generator.",
        ],
        tables: [],
        tableArgs: ["Flange", "D outside", "K bolt circle", "Holes", "Calculator", "Part"],
      },
      {
        id: "part",
        title: "From the numbers to a part",
        body: [
          "The flange generator is the same pattern as parametric CAD: bolt circle, number of holes and start angle as here, a screw size that sets an ISO 273 clearance hole (plus a print allowance), an outside diameter, a centre bore, an optional hub for a pipe or shaft, and counterbores for socket head screws. It exports STEP with exact cylinders for every hole, so a machinist or a CAD program reads the pattern directly.",
          "It refuses what would not hold together, and says what to change: less than half a hole of plastic to the rim, the bore or the next hole, or neighbours closer than 2.2 holes centre to centre (Eurocode 3's minimum for steel). An outside diameter that is too small simply grows to fit.",
        ],
      },
    ],
    faqs: [
      { q: "What is a bolt circle?", a: "The circle through the centres of a ring of bolt holes, given by its diameter — the bolt circle diameter, BCD, or pitch circle diameter, PCD. With the number of holes and where the first one sits, it fixes every hole: that is all this calculator needs." },
      { q: "How do I measure the bolt circle of a part I have?", a: "With an even number of holes, measure from the centre of one hole to the centre of the opposite one: that is the PCD. With an odd number, measure between neighbouring centres (outer edge to outer edge minus one hole diameter works with calipers) and divide by sin(180° / N) — for 5 holes, by 0.5878." },
      { q: "How do I turn a square hole pattern into a bolt circle?", a: "Four holes on a square of side a lie on a circle of diameter a × √2, starting at 45°. A 31 mm square is a 43.841 mm bolt circle with holes at 45°, 135°, 225° and 315°." },
      { q: "How far from the edge should the holes be?", a: "For printed plastic plates, put the hole centre at least 1.5 hole diameters from the edge — ACRYLITE's rule for plastic sheet, and AISC's minimum for steel; the outside diameter this page suggests follows it. The flange generator's hard limit is half a hole of plastic to the rim, which is about what steel pipe flanges keep (EN 1092-1 DN15: 8 mm beside a 14 mm hole)." },
      { q: "Does it work in inches?", a: "The coordinates do — enter the PCD in inches and read X / Y in inches. The screw sizes and the flange generator are metric: for a part, enter millimetres." },
      { q: "Which clearance hole for the bolts?", a: "ISO 273 gives three series per screw (fine, medium, coarse — M6: 6.4 / 6.6 / 7.0). The clearance hole chart beside this page lists them all, plus how much a printed hole needs on top." },
    ],
    sources: SOURCES_COMMON,
  },
  zh: {
    name: "螺栓孔分布圆计算器",
    title: "螺栓孔分布圆计算器 — PCD 孔位坐标、图纸，直接生成法兰盘 STL / STEP | Forgent3D",
    description:
      "螺栓孔分布圆（PCD）在线计算：输入孔数、分布圆直径和起始角，得到每个孔的 X / Y 坐标、孔间距和按比例画的图——再一键做成带这些孔的法兰盘，导出 STL 或 STEP。",
    h1: "螺栓孔分布圆计算器",
    intro:
      "输入孔数、分布圆直径（PCD）和 1 号孔的位置，得到每个孔的 X / Y、相邻孔中心距和孔间剩下的材料，并按比例画出来。然后直接做零件——同样的孔位在法兰盘生成器里打开，可以打印，也可以导出 STEP 发给加工。",
    card: "N 个孔均布在 PCD 上：每个孔的 X / Y、孔距和图纸——然后一键生成带这组孔的可打印法兰盘。",
    ui: {
      holes: "孔数",
      pcd: "分布圆直径（PCD）",
      start: "1 号孔角度",
      startHint: "从 +X（3 点钟方向）起，逆时针。12 点钟 = 90°。",
      screw: "螺丝",
      customHole: "其他孔径…",
      holeD: "孔径",
      fit: "通孔（ISO 273）",
      fit_fine: "精装配",
      fit_medium: "中等装配",
      fit_coarse: "粗装配",
      fitHint: "一般用中等装配；对中要求低用粗装配（管法兰的孔接近粗装配）。",
      cx: "圆心 X",
      cy: "圆心 Y",
      angleStep: "孔间夹角",
      spacing: "相邻孔中心距",
      spacingNote: "相邻两孔中心之间：PCD × sin(180° / N)。",
      across: "最远两孔距离",
      acrossEven: "对孔距离，等于 PCD。",
      acrossOdd: "奇数孔没有正对的孔，所以小于 PCD。",
      ligament: "孔间剩余材料",
      ligamentNote: "中心距减去 Ø{d} 孔径。",
      ligamentWarn: "相邻孔之间不到半个孔径——法兰盘生成器会拒绝；减少孔数、换小螺丝或加大分布圆。",
      drawingLabel: "按比例绘制的分布圆孔位图，孔已编号",
      tableTitle: "孔位坐标",
      copy: "复制表格",
      copied: "已复制",
      colHole: "孔",
      colAngle: "角度",
      tableNote: "单位毫米，相对你输入的圆心，保留 3 位小数。复制的是制表符分隔的表，可以直接粘贴到表格软件或 CAD 草图里。",
      handoffTitle: "做成零件",
      handoffBody: "法兰盘生成器用这组孔位做一块圆形法兰盘——建议外径 Ø {od} mm（孔中心离外缘 1.5 倍孔径），加上你的中心孔，孔径按你选的通孔系列。下载 STL 去打印，或 STEP 进 CAD。",
      handoffFlange: "用这组孔位生成法兰盘",
      bore: "零件的中心孔",
      boreHint: "0 = 不开中心孔。管子、止口或轴从这里穿过。",
      noteCustomHole: "生成器按 ISO 273 做 M2–M16 的通孔，请在生成器里选螺丝。",
      blockedHoles: "生成器能做 2–{v} 个孔。",
      blockedPcd: "生成器的分布圆范围是 {v} mm。",
      blockedTooClose: "{v} 的孔这么密，在生成器里会重叠（孔中心距至少 2.2 倍孔径）；减少孔数或加大分布圆。",
      blockedBore: "中心孔会切到螺栓孔——最大 {v} mm。",
      blockedBed: "法兰盘会超过生成器能打印的 {v} mm。",
    },
    sections: [
      {
        id: "how",
        title: "坐标怎么算",
        body: [
          "每个孔都在以圆心为中心、半径 r = PCD / 2 的圆上。1 号孔在起始角，其余孔逆时针依次排列，间隔 360° / N。每个孔的 X、Y 就是三角函数，精确计算，没有任何近似。",
          "相邻两孔的中心距是这个圆的弦长。这条规则由来已久：1914 年 Machinery 出版的孔位定位手册写道——用 360 除以孔数的两倍，取这个角的正弦，再乘以分布圆直径。",
        ],
        formula: "θi = 起始角 + (i − 1) · 360° / N          (i = 1 … N)\nxi = cx + (PCD / 2) · cos θi\nyi = cy + (PCD / 2) · sin θi\n\n相邻孔中心距       = PCD · sin(180° / N)\n相隔 k 个孔的距离  = PCD · sin(k · 180° / N)\n由孔距反求 PCD     = 孔距 / sin(180° / N)",
        after: [
          "验算：Machinery 手册自己的例子是 8 英寸圆上 11 个孔——8 × sin(16.36°) = 2.252 英寸。本计算器用不取整的角度（180° / 11 = 16.3636°）得到 2.2539 英寸。",
        ],
      },
      {
        id: "example",
        title: "算例：EN 1092-1 DN50 PN16 法兰",
        body: [
          "DN50 PN16 法兰：4 个 Ø18 孔配 M16 螺栓，分布圆 125 mm，外径 165 mm（EN 1092-1 尺寸表）。管法兰的孔要骑在中心线两侧——4 个孔时 1 号孔在 45°。PCD 125、4 孔、起始角 45°，r = 62.5，每个坐标都是 62.5 × cos 45° = 44.194 mm：",
        ],
        tables: [{ head: ["孔", "角度 (°)", "X (mm)", "Y (mm)"], rows: DN50_ROWS, minWidth: 360 }],
        after: [
          "相邻孔中心距 125 × sin 45° = 88.388 mm，对孔 125 mm。Ø18 孔之间剩 70.4 mm 材料；孔到外缘剩 (165 − 125) / 2 − 9 = 11 mm。在下面常用规格表里点 DN50 那一行，计算器会自动填好，第二个链接直接生成法兰盘。",
        ],
      },
      {
        id: "start-angle",
        title: "1 号孔放在哪里？",
        body: [
          "管法兰的孔不在中心线上：ASME B16.5 第 6.5 条规定“成对的螺栓孔应骑在管件中心线两侧”。4 个孔时 1 号孔在 45°，8 个孔在 22.5°，12 个孔在 15°——正好是孔间夹角的一半。电机法兰的图纸也这样画。",
          "本计算器和大多数 CAD 一样，从 +X 轴（3 点钟方向）开始逆时针量角度。如果你的图纸从 12 点钟开始，加 90°；如果是顺时针计数，用 360° 减去它的角度。",
        ],
      },
      {
        id: "common",
        title: "常用分布圆",
        body: [
          "管法兰（EN 1092-1，DN150 以内 PN10 和 PN16 钻孔相同）和 IEC B14 电机端面法兰（法兰代号就是分布圆直径）。每一行都能在计算器里打开，或直接在法兰盘生成器里生成。",
        ],
        tables: [],
        tableArgs: ["法兰", "外径 D", "分布圆 K", "孔", "计算器", "零件"],
      },
      {
        id: "part",
        title: "从数字到零件",
        body: [
          "法兰盘生成器是同一组孔位的参数化 CAD：分布圆、孔数和起始角与这里一致，螺丝规格决定 ISO 273 通孔（加打印余量），还有外径、中心孔、可选的轮毂（插管或轴）和内六角螺丝的沉头孔。导出的 STEP 里每个孔都是精确圆柱面，加工师傅或 CAD 软件可以直接读出孔位。",
          "做不成的组合它会拒绝并告诉你改什么：孔到外缘、中心孔或相邻孔之间不到半个孔径的材料，或者相邻孔中心距小于 2.2 倍孔径（欧标 3 对钢结构的最小值）。外径不够时会自动加大。",
        ],
      },
    ],
    faqs: [
      { q: "什么是螺栓孔分布圆？", a: "穿过一圈螺栓孔中心的圆，用直径表示——分布圆直径，也叫节圆直径、PCD。再知道孔数和 1 号孔的位置，每个孔的位置就确定了：本计算器只需要这些。" },
      { q: "手上的零件怎么量分布圆？", a: "偶数孔：量一个孔中心到正对孔中心，就是 PCD。奇数孔：量相邻两孔中心距（用卡尺量两孔外缘再减一个孔径），再除以 sin(180° / N)——5 个孔就除以 0.5878。" },
      { q: "方形孔位怎么换算成分布圆？", a: "边长 a 的正方形四个角的孔，在直径 a × √2 的圆上，从 45° 开始。31 mm 方孔距就是 43.841 mm 分布圆，孔在 45°、135°、225°、315°。" },
      { q: "孔离边缘多远合适？", a: "打印的塑料板，孔中心离边缘至少 1.5 倍孔径——这是 ACRYLITE 对塑料板的建议，也是 AISC 对钢的最小值；本页建议的外径就按这条算。法兰盘生成器的硬下限是孔到外缘留半个孔径的材料，和钢制管法兰差不多（EN 1092-1 DN15：14 mm 孔旁边留 8 mm）。" },
      { q: "能用英寸吗？", a: "坐标可以——PCD 输入英寸，X / Y 就是英寸。螺丝规格和法兰盘生成器是公制的：要做零件请用毫米。" },
      { q: "螺栓孔开多大？", a: "ISO 273 每个螺丝有三档（精装配、中等装配、粗装配——M6：6.4 / 6.6 / 7.0）。旁边的通孔尺寸表全都列了，还说明打印的孔要多留多少。" },
    ],
    sources: SOURCES_COMMON,
  },
  de: {
    name: "Lochkreis-Rechner",
    title: "Lochkreis-Rechner: Lochkreis berechnen, Koordinaten & Tabelle | Forgent3D",
    description:
      "Lochkreis berechnen: Lochanzahl, Durchmesser und Startwinkel ergeben X / Y jeder Bohrung, die Teilung und eine Zeichnung – dann den Flansch als STL oder STEP.",
    h1: "Lochkreis-Rechner",
    intro:
      "Geben Sie die Lochanzahl, den Lochkreisdurchmesser (LK) und die Lage der Bohrung 1 ein: Sie erhalten X / Y jeder Bohrung, die Teilung zwischen benachbarten Bohrungen und den Steg, der dazwischen stehen bleibt, maßstäblich gezeichnet. Dann bauen Sie das Teil – dasselbe Lochbild öffnet sich im Flansch-Generator, fertig zum Drucken oder als STEP zum Weitergeben.",
    card: "X / Y für N Bohrungen auf einem Lochkreis, die Teilung und eine Zeichnung – dann ein druckbarer Flansch mit genau diesen Bohrungen.",
    ui: {
      holes: "Anzahl der Bohrungen",
      pcd: "Lochkreisdurchmesser (LK)",
      start: "Winkel der Bohrung 1",
      startHint: "Ab +X (3 Uhr), gegen den Uhrzeigersinn. 12 Uhr = 90°.",
      screw: "Schraube",
      customHole: "Anderer Bohrungsdurchmesser …",
      holeD: "Bohrungsdurchmesser",
      fit: "Durchgangsbohrung (ISO 273)",
      fit_fine: "Fein",
      fit_medium: "Mittel",
      fit_coarse: "Grob",
      fitHint: "Mittel ist die übliche Reihe; grob für lockere Ausrichtung (Rohrflansche liegen nahe daran).",
      cx: "Mittelpunkt X",
      cy: "Mittelpunkt Y",
      angleStep: "Winkel zwischen den Bohrungen",
      spacing: "Teilung (Lochabstand)",
      spacingNote: "Mitte zu Mitte, benachbarte Bohrungen: LK × sin(180° / N).",
      across: "Größter Abstand",
      acrossEven: "Gegenüberliegende Bohrungen: gleich dem Lochkreisdurchmesser.",
      acrossOdd: "Ungerade Anzahl: Keine Bohrung liegt einer anderen gegenüber, daher kleiner als der Lochkreisdurchmesser.",
      ligament: "Steg zwischen den Bohrungen",
      ligamentNote: "Teilung minus Bohrung Ø{d}.",
      ligamentWarn: "Weniger als eine halbe Bohrung Material zwischen Nachbarn – das lehnt der Flansch-Generator ab; nehmen Sie weniger Bohrungen, eine kleinere Schraube oder einen größeren Lochkreis.",
      drawingLabel: "Maßstäbliche Zeichnung des Lochkreises mit nummerierten Bohrungen",
      tableTitle: "Koordinaten der Bohrungen",
      copy: "Tabelle kopieren",
      copied: "Kopiert",
      colHole: "Bohrung",
      colAngle: "Winkel",
      tableNote: "Millimeter ab dem eingegebenen Mittelpunkt, 3 Nachkommastellen. Die kopierte Tabelle ist tabulatorgetrennt: Sie lässt sich in eine Tabellenkalkulation oder eine Tabelle in der CAD-Skizze einfügen.",
      handoffTitle: "Das Teil erzeugen",
      handoffBody: "Der Flansch-Generator baut eine runde Platte mit genau diesem Lochbild – vorgeschlagen sind außen Ø {od} mm (Bohrungsmitten 1,5 Bohrungsdurchmesser vom Rand), dazu Ihre Mittelbohrung und Bohrungen in der gewählten Reihe der Durchgangsbohrung. STL zum Drucken oder STEP für das CAD herunterladen.",
      handoffFlange: "Dieses Lochbild als Flansch öffnen",
      bore: "Mittelbohrung des Teils",
      boreHint: "0 = keine Mittelbohrung. Ein Rohr, ein Zentrierbund oder eine Welle geht hindurch.",
      noteCustomHole: "Der Generator bohrt nach ISO 273 für M2–M16; wählen Sie die Schraube dort.",
      blockedHoles: "der Generator macht 2–{v} Bohrungen.",
      blockedPcd: "der Generator nimmt Lochkreise von {v} mm.",
      blockedTooClose: "{v}-Bohrungen so dicht beieinander würden sich im Generator überschneiden (er hält 2,2 Bohrungsdurchmesser Mittenabstand); nehmen Sie weniger Bohrungen oder einen größeren Lochkreis.",
      blockedBore: "die Mittelbohrung würde in die Schraubenbohrungen schneiden – höchstens {v} mm.",
      blockedBed: "die Platte wäre breiter als die {v} mm, die der Generator druckt.",
    },
    sections: [
      {
        id: "how",
        title: "So werden die Koordinaten berechnet",
        body: [
          "Jede Bohrung liegt auf einem Kreis mit dem Radius r = LK / 2 um den Mittelpunkt. Bohrung 1 sitzt beim Startwinkel, die übrigen folgen gegen den Uhrzeigersinn im Abstand von 360° / N. X und Y jeder Bohrung sind reine Trigonometrie und werden exakt berechnet – angenähert wird hier nichts.",
          "Die Teilung zwischen zwei benachbarten Bohrungen ist die Sehne dieses Kreises. Die Regel ist alt: Das Nachschlagewerk von Machinery zum Anreißen von Bohrungen aus dem Jahr 1914 sagt, man teile 360 durch die doppelte Lochanzahl, nehme den Sinus dieses Winkels und multipliziere ihn mit dem Kreisdurchmesser.",
        ],
        formula: "θi = Start + (i − 1) · 360° / N          (i = 1 … N)\nxi = cx + (LK / 2) · cos θi\nyi = cy + (LK / 2) · sin θi\n\nTeilung (Nachbarn)         = LK · sin(180° / N)\nk Bohrungen auseinander    = LK · sin(k · 180° / N)\nLK aus der Teilung         = Teilung / sin(180° / N)",
        after: [
          "Probe: Machinerys eigenes Beispiel setzt 11 Bohrungen auf einen Kreis von 8 Zoll – 8 × sin(16,36°) = 2,252 in zwischen Nachbarn. Der Rechner ergibt mit dem ungerundeten Winkel (180° / 11 = 16,3636°) 2,2539 in.",
        ],
      },
      {
        id: "example",
        title: "Rechenbeispiel: Flansch EN 1092-1 DN50 PN16",
        body: [
          "Ein Flansch DN50 PN16 hat 4 Bohrungen Ø18 für M16-Schrauben auf einem Lochkreis von 125 mm, außen 165 mm (Maßtabellen der EN 1092-1). Bei Rohrflanschen liegen die Bohrungen paarweise beiderseits der Mittellinien – bei 4 Bohrungen sitzt die erste bei 45°. Mit LK 125, N 4 und Start 45° ist r = 62,5, und jede Koordinate beträgt 62,5 × cos 45° = 44,194 mm:",
        ],
        tables: [{ head: ["Bohrung", "Winkel (°)", "X (mm)", "Y (mm)"], rows: DN50_ROWS.map((row) => row.map((v) => v.replace(".", ","))), minWidth: 360 }],
        after: [
          "Benachbarte Bohrungen liegen 125 × sin 45° = 88,388 mm auseinander, gegenüberliegende 125 mm. Bei Bohrungen Ø18 bleiben 70,4 mm Material zwischen Nachbarn und (165 − 125) / 2 − 9 = 11 mm von jeder Bohrung bis zum Rand. Zum Ausprobieren: Die Zeile DN50 in der Tabelle unten trägt das alles ein, und ihr zweiter Link erzeugt den Flansch.",
        ],
      },
      {
        id: "start-angle",
        title: "Wohin kommt Bohrung 1?",
        body: [
          "Bei Rohrflanschen liegen die Bohrungen nicht auf den Mittellinien: ASME B16.5 §6.5 verlangt, dass die Schraubenlöcher paarweise beiderseits der Mittellinien liegen („pairs of bolt holes shall straddle fitting centerlines“). Bei 4 Bohrungen kommt Bohrung 1 damit auf 45°, bei 8 auf 22,5°, bei 12 auf 15° – den halben Winkel zwischen zwei Bohrungen. Motorflansche werden genauso gezeichnet.",
          "Dieser Rechner misst Winkel wie die meisten CAD-Programme gegen den Uhrzeigersinn ab der +X-Achse (3 Uhr). Zählt Ihre Zeichnung ab 12 Uhr, addieren Sie 90°; zählt sie im Uhrzeigersinn, nehmen Sie 360° minus ihren Winkel.",
        ],
      },
      {
        id: "common",
        title: "Lochkreis-Tabelle: gängige Lochkreise",
        body: [
          "Rohrflansche (EN 1092-1; PN10 und PN16 sind bis DN150 gleich gebohrt) und IEC-Motorflansche B14, bei denen die Flanschgröße der Lochkreis ist. Jede Zeile öffnet sich im Rechner oder direkt im Flansch-Generator.",
        ],
        tables: [],
        tableArgs: ["Flansch", "D außen", "K Lochkreis", "Bohrungen", "Rechner", "Teil"],
      },
      {
        id: "part",
        title: "Von den Zahlen zum Bauteil",
        body: [
          "Der Flansch-Generator ist dasselbe Lochbild als parametrisches CAD: Lochkreis, Lochanzahl und Startwinkel wie hier, eine Schraubengröße, die eine Durchgangsbohrung nach ISO 273 festlegt (plus Druckaufmaß), ein Außendurchmesser, eine Mittelbohrung, optional eine Nabe für ein Rohr oder eine Welle und Zylindersenkungen für Zylinderschrauben mit Innensechskant. Er exportiert STEP mit exakten Zylindern für jede Bohrung, sodass ein Zerspaner oder ein CAD-Programm das Lochbild direkt übernimmt.",
          "Was nicht hält, lehnt er ab und sagt, was zu ändern ist: weniger als eine halbe Bohrung Kunststoff zum Rand, zur Mittelbohrung oder zur nächsten Bohrung, oder Nachbarn, deren Mittenabstand unter 2,2 Bohrungsdurchmessern liegt (das Minimum des Eurocode 3 für Stahl). Ein zu kleiner Außendurchmesser wächst einfach mit.",
        ],
      },
    ],
    faqs: [
      { q: "Was ist ein Lochkreis?", a: "Der Kreis durch die Mittelpunkte eines Kranzes von Schraubenbohrungen, angegeben durch seinen Durchmesser – den Lochkreisdurchmesser (LK), im Englischen bolt circle diameter (BCD) oder pitch circle diameter (PCD). Zusammen mit der Lochanzahl und der Lage der ersten Bohrung legt er jede Bohrung fest: Mehr braucht dieser Rechner nicht." },
      { q: "Wie messe ich den Lochkreis an einem vorhandenen Teil?", a: "Bei gerader Lochanzahl messen Sie von der Mitte einer Bohrung zur Mitte der gegenüberliegenden: Das ist der Lochkreisdurchmesser. Bei ungerader Anzahl messen Sie zwischen benachbarten Mitten (mit dem Messschieber: Außenkante bis Außenkante minus ein Bohrungsdurchmesser) und teilen durch sin(180° / N) – bei 5 Bohrungen durch 0,5878." },
      { q: "Wie wird aus einem quadratischen Lochbild ein Lochkreis?", a: "Vier Bohrungen auf einem Quadrat mit der Seitenlänge a liegen auf einem Kreis mit dem Durchmesser a × √2, beginnend bei 45°. Ein Quadrat von 31 mm ergibt einen Lochkreis von 43,841 mm mit Bohrungen bei 45°, 135°, 225° und 315°." },
      { q: "Wie weit vom Rand sollen die Bohrungen liegen?", a: "Bei gedruckten Kunststoffplatten die Bohrungsmitte mindestens 1,5 Bohrungsdurchmesser vom Rand – die Regel von ACRYLITE für Kunststoffplatten und das Minimum der AISC für Stahl; der Außendurchmesser, den diese Seite vorschlägt, folgt ihr. Die harte Grenze des Flansch-Generators ist eine halbe Bohrung Kunststoff bis zum Rand – etwa so viel, wie Rohrflansche aus Stahl lassen (EN 1092-1 DN15: 8 mm neben einer 14-mm-Bohrung)." },
      { q: "Geht das auch in Zoll?", a: "Die Koordinaten ja – geben Sie den Lochkreis in Zoll ein und lesen Sie X / Y in Zoll ab. Die Schraubengrößen und der Flansch-Generator sind metrisch: Für ein Bauteil geben Sie Millimeter ein." },
      { q: "Welche Durchgangsbohrung für die Schrauben?", a: "ISO 273 nennt je Schraube drei Reihen (fein, mittel, grob – M6: 6,4 / 6,6 / 7,0). Die Tabelle der Durchgangsbohrungen neben dieser Seite listet sie alle auf, dazu, wie viel eine gedruckte Bohrung zusätzlich braucht." },
    ],
    sources: SOURCES_COMMON,
  },
};

// The common-bolt-circles table needs the page language for its links, so it is filled in here.
for (const [locale, c] of Object.entries(copy)) {
  const section = c.sections.find((s) => s.id === "common");
  const [h0, h1, h2, h3, h4, h5] = section.tableArgs;
  const open = locale === "zh" ? "在计算器里打开" : locale === "de" ? "Im Rechner öffnen" : "Open";
  const make = locale === "zh" ? "生成法兰盘" : locale === "de" ? "Flansch erzeugen" : "Make it";
  const caption = locale === "zh"
    ? "孔为标准值；生成器按所选螺丝做 ISO 273 通孔。链接里的中心孔是管子外径 / 止口直径本身，要套上去请加打印余量。"
    : locale === "de"
      ? "Bohrungen laut Norm; der Generator bohrt nach ISO 273 für die gewählte Schraube. Die Mittelbohrung in den Links ist der Rohr- bzw. Zentrier-Ø selbst — für eine Passung darüber das Druckaufmaß addieren."
      : "Holes as the standards give them; the generator makes the ISO 273 hole for the chosen screw. The centre bore in the links is the pipe OD or spigot Ø itself — add your print allowance to slip over it.";
  section.tables = [commonTable(locale, [h0, h1, h2, h3, h4, h5], open, make, caption)];
  delete section.tableArgs;
}
