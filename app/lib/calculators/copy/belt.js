// GT2 belt length calculator — page copy per language. The worked-example numbers are re-computed by
// scripts/calculators.test.mjs; the stock-belt table is built from app/lib/calculators/belt-data.js.
// Evidence: platform repo docs/generator-seo-research.md §5.0 B3.

import { GT2_STOCK, GT2_STOCK_SOURCE, GT2_STOCK_URLS } from "../belt-data.js";

const GEN = "/generators/gt2-pulley-generator";

const SOURCES = [
  { label: "Gates PowerGrip GT2 Belt Drive Design Manual (The Gates Rubber Company, © 2000), Engineering section II-2, I-11 – I-13, II-7, II-9", url: "https://static.chipdip.ru/lib/569/DOC010569405.pdf", note: "exact and approximate length formulas (6, 7), the approximate centre-distance formula (8), teeth in mesh, installation and tensioning allowances; drive selection tables used as test data" },
  { label: "Ondrives, Timing Belts and Pulleys — Technical (updated March 2024)", url: "https://www.ondrives.com/images/uploaded/Timing_Pulleys_Belts_Technical.pdf", note: "pitch circle d0 = z·t/π, belt length for i = 1 and i ≠ 1, belt speed, teeth in mesh, pre-tension" },
  { label: "Ondrives, Timing Pulleys & Belts — GT catalogue (product information updated April 2017; distributor copy, Amironic)", url: GT2_STOCK_URLS.Ondrives, note: "closed 2GT belts 2GT-4 / 2GT-6, pp. 7–8: the manufacturer's stock lengths" },
  { label: "VXB, GT2 closed loop timing belt 2GT 6 mm (read 2026-10-20)", url: GT2_STOCK_URLS.VXB, note: "the closed loops sold for 3D printers: 110 … 852 mm (a retailer)" },
  { label: "Forgent3D GT2 pulley generator — evidence pack (Misumi, Ondrives, SDP/SI, Adafruit outside diameters)", url: "https://www.forgent3d.com/en/generators/gt2-pulley-generator", note: "pitch line differential 0.254 mm (2 mm) / 0.381 mm (3 mm) for the outside diameter" },
];

export const keywords = {
  en: ["belt length calculator", "gt2 belt length calculator", "timing belt length calculator", "pulley calculator", "timing belt calculator", "gt2 belt calculator"],
  zh: ["同步带长度计算", "同步带周长计算", "GT2 同步带长度", "同步带中心距计算", "同步带轮计算"],
  // Semrush DE 2026-10-20: Zahnriemen berechnen 170 / KD 10, Riemenlänge berechnen 70 / 9, GT2 Riemen 110 / 7,
  // GT2 Zahnriemen 110 / 6, Zahnriemenlänge berechnen 30, Zahnriemen Rechner 20.
  de: ["zahnriemen berechnen", "riemenlänge berechnen", "gt2 riemen", "gt2 zahnriemen", "zahnriemenlänge berechnen", "zahnriemen rechner"],
  // Semrush JP 2026-10-20: タイミングベルト 選定 170 / KD 13, タイミングベルト 長さ 計算 50 / 13, タイミングベルト 計算 20,
  // ベルト長さ 計算 20, gt2 ベルト 20 (the Japanese pulley page targets タイミングプーリー 1,000).
  ja: ["タイミングベルト 長さ 計算", "タイミングベルト 選定", "タイミングベルト 計算", "ベルト長さ 計算", "GT2 ベルト"],
};

function stockTable(head, caption) {
  return { head, caption, minWidth: 360, rows: GT2_STOCK.map((b) => [`${b.teeth * 2} mm`, String(b.teeth), b.sources.join(", ")]) };
}

export const copy = {
  en: {
    name: "GT2 Belt Length Calculator",
    title: "GT2 Belt Length Calculator — Exact Length, Centre Distance & Pulleys | Forgent3D",
    description:
      "Timing belt length calculator for GT2: two pulley tooth counts and a centre distance give the exact belt length, the nearest closed belts with their centre distances, or the other way round — then make the pulleys.",
    h1: "GT2 belt length calculator",
    intro:
      "Enter the two pulleys' tooth counts and how far apart their shafts are: you get the exact belt length, the closed belts you can buy nearest to it and the centre distance each one sets — or start from a belt you have and get the exact centre distance. Ratio, speed and teeth in mesh come with it, and the pulleys open in the GT2 pulley generator.",
    card: "Exact GT2 belt length from two tooth counts and a centre distance, or the centre distance for a belt — then the pulleys.",
    ui: {
      pitch: "Belt",
      z1: "Driving pulley (teeth)",
      z2: "Driven pulley (teeth)",
      rpm: "Driving speed",
      teethHint: "Whole teeth.",
      modeLabel: "What do you know?",
      modeCenter: "Centre distance → belt",
      modeBelt: "Belt → centre distance",
      beltInput: "Closed belt length",
      beltInputHint: "{teeth} teeth.",
      beltNotWhole: "A closed belt is a whole number of {p} mm teeth.",
      centerInput: "Centre distance (shaft to shaft)",
      centerDistance: "Centre distance",
      exactNote: "Exact, solved from the length equation.",
      beltLength: "Belt pitch length",
      approxNote: "The short formula gives {v} mm.",
      beltTeeth: "Belt teeth",
      wholeTeethNote: "A closed belt needs a whole number: see the stock belts below.",
      ratio: "Ratio",
      outRpm: "Driven pulley: {rpm} rpm",
      teethInMesh: "Teeth in mesh (small pulley)",
      meshWarn: "Fewer than 6 — Gates' ratings assume 6 or more; use a larger pulley or a longer centre distance.",
      wrap: "Belt wraps {deg}° of it.",
      pitchDiameters: "Pitch Ø (mm)",
      odNote: "Outside Ø {a} / {b} mm.",
      beltSpeed: "Belt speed",
      clearance: "Pulleys too close",
      tooClose: "The two pulleys' flanges (outside Ø + 5) would touch.",
      drawingLabel: "The two pulleys and the belt drawn to scale",
      stockTitle: "Nearest closed belts",
      stockIntro: "Closed GT2 belts come in whole teeth; each sets its own centre distance.",
      copy: "Copy",
      copied: "Copied",
      colBelt: "Belt",
      colTeeth: "Teeth",
      colCenter: "Centre distance",
      colChange: "Change",
      noStock3: "Stock closed belts are listed for the 2 mm pitch only.",
      beltTooShort: "Too short to go round both pulleys: at least {min} mm.",
      centerTooShort: "The pulleys overlap at this centre distance.",
      colQuantity: "Quantity",
      colValue: "Value (mm)",
      stockBelt: "Closed belt",
      handoffTitle: "Make the pulleys",
      handoffBody: "Each pulley opens in the GT2 pulley generator with its tooth count filled in — set the bore and belt width there, then download STL to print or STEP.",
      handoffPulley: "{z}-tooth GT2 pulley",
      handoffPulleyNote: "Outside Ø {od} mm.",
      handoffOutOfRange: "the pulley generator makes {min}–{max} teeth.",
    },
    sections: [
      {
        id: "formula",
        title: "The exact belt length — and why not the short formula",
        body: [
          "A belt round two pulleys is two straight spans and two arcs. With the pitch diameters D (large) and d (small) — tooth count × pitch / π — and the centre distance C, the spans leave the line of centres at an angle φ. Gates' design manual prints both the exact length (its formula 7) and the common short one (formula 6). This calculator uses the exact one.",
          "Going back from a belt to a centre distance has no closed form. Gates gives an approximate formula (8) and says the exact centre distance is found by iterating between the two; this calculator solves the exact equation numerically (bisection to 10⁻¹² mm), so both directions agree to the last digit.",
        ],
        formula: "d = z · p / π                       (pitch diameter; GT2: p = 2 or 3 mm)\nφ = asin((D − d) / 2C)\nL = 2C · cos φ + π (D + d) / 2 + φ (D − d)      exact (Gates formula 7, φ in radians)\nL ≈ 2C + 1.57 (D + d) + (D − d)² / 4C           approximate (Gates formula 6)\nC ≈ [K + √(K² − 32 (D − d)²)] / 16,  K = 4L − 6.28 (D + d)   approximate (Gates formula 8)\nteeth in mesh = z_small · (180° − 2φ) / 360°",
        after: [
          "How far apart are they? For a 20 → 60 tooth drive at 150 mm the two lengths differ by less than a thousandth of a millimetre; at 45 mm on 16 → 60 teeth the short formula is off by more. The calculator shows both. Checked against Gates' 5 mm drive selection tables (8 rows, both directions, to the tables' 0.01 in).",
        ],
      },
      {
        id: "example",
        title: "Worked example: a 20-tooth motor pulley driving 60 teeth, 150 mm apart",
        body: [
          "Pitch diameters 40 / π = 12.732 mm and 120 / π = 38.197 mm; φ = asin(25.465 / 300) = 4.869°. The exact length is 381.081 mm — 190.54 teeth, so no closed belt fits exactly. The nearest belts sold are 370 mm (185 teeth), which sets the shafts 144.438 mm apart, and 386 mm (193 teeth), 152.468 mm — pick the one your adjustment can reach, or move the shafts to suit.",
          "Ratio 1 : 3: a motor at 600 rpm turns the 60-tooth pulley at 200 rpm, and the belt moves 20 × 2 mm × 600 / 60 = 0.4 m/s. The belt wraps 170.26° of the small pulley, so 9 of its 20 teeth are in mesh — Gates' manual rates belts on at least 6.",
        ],
      },
      {
        id: "stock",
        title: "Closed GT2 belt lengths",
        body: [],
        tables: [],
        tableKind: "stock",
      },
      {
        id: "tension",
        title: "Leave room to fit and tension the belt",
        body: [
          "Gates' manual (section II-9) gives the centre distance a drive needs to move: less to slip a belt on, more to tension it over its life. For belts of 125–250 mm, 0.8 mm each way; 250–500 mm, 1.0 mm in and 0.8 mm out; 500–1000 mm, 1.8 mm in and 0.8 out — more again if you have to go over flanged pulleys.",
          "A fixed centre distance is for light motion only: Gates wants it held within 0.05–0.08 mm, and recommends an idler on the slack side when the shafts can't move. On a 3D printer that is the usual belt tensioner.",
        ],
      },
    ],
    faqs: [
      { q: "How do I calculate a timing belt's length?", a: "Two spans plus two arcs: L = 2C·cos φ + π(D + d)/2 + φ(D − d), with φ = asin((D − d)/2C) and D, d the pitch diameters (teeth × pitch / π). For equal pulleys it is simply 2C + teeth × pitch." },
      { q: "What GT2 belt for 20 and 40 teeth at 100 mm?", a: "260.41 mm — 130.2 teeth. The nearest closed belts sold are 258 mm (129 teeth), which puts the shafts 98.79 mm apart, and 280 mm (140 teeth), 109.82 mm." },
      { q: "What centre distance does a 200 mm GT2 belt give on two 20-tooth pulleys?", a: "Exactly 80 mm: with equal pulleys C = (L − z·p) / 2 = (200 − 40) / 2." },
      { q: "Closed loop or open belt?", a: "A closed (endless) belt has no joint and comes only in whole teeth, so the centre distance follows the belt. An open belt is cut to length and clamped — what 3D-printer X/Y axes use, where the belt's ends are fixed to the carriage." },
      { q: "How tight should the belt be?", a: "Ondrives: tight enough that the slack side stays taut under the highest load — any sag or flap means too little. Gates measures it by the force to deflect the span 1/64 in per inch of span." },
      { q: "What steps/mm does a GT2 pulley give?", a: "One turn moves teeth × 2 mm of belt: 40 mm on 20 teeth. A 200-step motor at 16 microsteps makes 3200 steps a turn: 3200 / 40 = 80 steps/mm." },
    ],
    sources: SOURCES,
  },
  zh: {
    name: "GT2 同步带长度计算器",
    title: "GT2 同步带长度计算器 — 精确周长、中心距与同步轮 | Forgent3D",
    description:
      "GT2 同步带长度在线计算：输入两个同步轮齿数和中心距，得到精确带长、最接近的闭口带及各自的中心距；也能由带长反求中心距——再直接生成同步轮。",
    h1: "GT2 同步带长度计算器",
    intro:
      "输入两个同步轮的齿数和两轴的距离：得到精确的同步带长度、能买到的最接近的闭口带、以及每条带对应的中心距——或者从手上的一条带出发，求出精确中心距。传动比、转速和啮合齿数一并给出，两个同步轮可以直接在 GT2 同步带轮生成器里打开。",
    card: "两个齿数加中心距算出 GT2 精确带长，或由带长求中心距——再生成同步轮。",
    ui: {
      pitch: "带型",
      z1: "主动轮（齿数）",
      z2: "从动轮（齿数）",
      rpm: "主动轮转速",
      teethHint: "整数齿。",
      modeLabel: "已知什么？",
      modeCenter: "中心距 → 带长",
      modeBelt: "带长 → 中心距",
      beltInput: "闭口带长度",
      beltInputHint: "{teeth} 齿。",
      beltNotWhole: "闭口带是整数个 {p} mm 齿。",
      centerInput: "中心距（轴到轴）",
      centerDistance: "中心距",
      exactNote: "精确值，由带长方程求解。",
      beltLength: "带节线长度",
      approxNote: "近似公式算出 {v} mm。",
      beltTeeth: "带齿数",
      wholeTeethNote: "闭口带必须是整数齿：见下面的现货带。",
      ratio: "传动比",
      outRpm: "从动轮：{rpm} rpm",
      teethInMesh: "啮合齿数（小轮）",
      meshWarn: "少于 6 个——Gates 的额定值按 6 个以上算；换大一点的轮或加大中心距。",
      wrap: "皮带包角 {deg}°。",
      pitchDiameters: "节圆直径 (mm)",
      odNote: "外径 {a} / {b} mm。",
      beltSpeed: "带速",
      clearance: "两轮太近",
      tooClose: "两个同步轮的挡边（外径 + 5）会碰到。",
      drawingLabel: "按比例绘制的两个同步轮和皮带",
      stockTitle: "最接近的闭口带",
      stockIntro: "GT2 闭口带只有整数齿；每条带对应一个中心距。",
      copy: "复制",
      copied: "已复制",
      colBelt: "皮带",
      colTeeth: "齿数",
      colCenter: "中心距",
      colChange: "变化",
      noStock3: "现货闭口带只列了 2 mm 齿距。",
      beltTooShort: "太短，绕不过两个轮：至少 {min} mm。",
      centerTooShort: "这个中心距下两个轮重叠了。",
      colQuantity: "项目",
      colValue: "数值 (mm)",
      stockBelt: "闭口带",
      handoffTitle: "生成同步轮",
      handoffBody: "每个同步轮都在 GT2 同步带轮生成器里打开、齿数已填好——在那里设孔径和带宽，下载 STL 打印或 STEP。",
      handoffPulley: "{z} 齿 GT2 同步轮",
      handoffPulleyNote: "外径 {od} mm。",
      handoffOutOfRange: "同步带轮生成器能做 {min}–{max} 齿。",
    },
    sections: [
      {
        id: "formula",
        title: "精确带长——为什么不用近似公式",
        body: [
          "绕在两个轮上的皮带是两段直线加两段圆弧。设节圆直径 D（大轮）、d（小轮）——齿数 × 齿距 / π——中心距 C，直线段与中心连线的夹角为 φ。Gates 设计手册同时给出精确公式（公式 7）和常用的近似公式（公式 6）。本计算器用精确公式。",
          "由带长反求中心距没有解析解。Gates 给了近似公式（公式 8），并说精确中心距要在两个公式之间迭代求得；本计算器直接数值求解精确方程（二分法到 10⁻¹² mm），两个方向的结果一致到最后一位。",
        ],
        formula: "d = z · p / π                       （节圆直径；GT2：p = 2 或 3 mm）\nφ = asin((D − d) / 2C)\nL = 2C · cos φ + π (D + d) / 2 + φ (D − d)      精确（Gates 公式 7，φ 用弧度）\nL ≈ 2C + 1.57 (D + d) + (D − d)² / 4C           近似（Gates 公式 6）\nC ≈ [K + √(K² − 32 (D − d)²)] / 16，K = 4L − 6.28 (D + d)   近似（Gates 公式 8）\n啮合齿数 = 小轮齿数 · (180° − 2φ) / 360°",
        after: [
          "差多少？20 → 60 齿、中心距 150 mm 时两者差不到千分之一毫米；16 → 60 齿、45 mm 时近似公式差得更多。计算器两个都显示。已对照 Gates 5 mm 选型表验算（8 行，两个方向，精确到表的 0.01 英寸）。",
        ],
      },
      {
        id: "example",
        title: "算例：20 齿电机轮带 60 齿，中心距 150 mm",
        body: [
          "节圆直径 40 / π = 12.732 mm 和 120 / π = 38.197 mm；φ = asin(25.465 / 300) = 4.869°。精确带长 381.081 mm——190.54 齿，没有正好的闭口带。有货的最接近的是 370 mm（185 齿），对应中心距 144.438 mm，和 386 mm（193 齿），对应 152.468 mm——选调节范围够得着的那条，或者按带调整轴距。",
          "传动比 1 : 3：电机 600 rpm 时 60 齿轮转 200 rpm，带速 20 × 2 mm × 600 / 60 = 0.4 m/s。皮带包住小轮 170.26°，20 个齿里有 9 个啮合——Gates 手册的额定值按至少 6 个算。",
        ],
      },
      {
        id: "stock",
        title: "GT2 闭口带长度",
        body: [],
        tables: [],
        tableKind: "stock",
      },
      {
        id: "tension",
        title: "给装带和张紧留余量",
        body: [
          "Gates 手册（II-9 节）给出了中心距需要的调节量：装带时要缩短，张紧和长期使用要能拉长。125–250 mm 的带，两个方向各 0.8 mm；250–500 mm，缩 1.0 mm、拉 0.8 mm；500–1000 mm，缩 1.8 mm、拉 0.8 mm——要越过带挡边的轮还要更多。",
          "固定中心距只适合轻载传动：Gates 要求误差控制在 0.05–0.08 mm，轴不能动时建议在松边加张紧轮。3D 打印机上就是常见的皮带张紧器。",
        ],
      },
    ],
    faqs: [
      { q: "同步带长度怎么算？", a: "两段直线加两段圆弧：L = 2C·cos φ + π(D + d)/2 + φ(D − d)，其中 φ = asin((D − d)/2C)，D、d 为节圆直径（齿数 × 齿距 / π）。两轮相同时就是 2C + 齿数 × 齿距。" },
      { q: "20 齿和 40 齿、中心距 100 mm 用多长的 GT2 带？", a: "260.41 mm——130.2 齿。有货的最接近的闭口带是 258 mm（129 齿），对应中心距 98.79 mm，和 280 mm（140 齿），对应 109.82 mm。" },
      { q: "两个 20 齿轮配 200 mm 的 GT2 带，中心距多少？", a: "正好 80 mm：两轮相同时 C = (L − z·p) / 2 = (200 − 40) / 2。" },
      { q: "闭口带还是开口带？", a: "闭口（环形）带没有接头、只有整数齿，所以中心距跟着带走。开口带按长度剪、两头夹住——3D 打印机的 X/Y 轴用的就是开口带，两端固定在滑车上。" },
      { q: "皮带要多紧？", a: "Ondrives：紧到最大负载时松边仍然绷直——一有下垂或抖动就是太松。Gates 用把跨距压下（每英寸跨距 1/64 英寸）所需的力来量。" },
      { q: "GT2 同步轮的 steps/mm 是多少？", a: "转一圈走 齿数 × 2 mm 皮带：20 齿是 40 mm。200 步电机 16 细分一圈 3200 步：3200 / 40 = 80 steps/mm。" },
    ],
    sources: SOURCES,
  },
  de: {
    name: "GT2-Zahnriemen-Rechner",
    title: "Zahnriemen berechnen: GT2-Riemenlänge & Achsabstand exakt | Forgent3D",
    description:
      "GT2-Zahnriemen berechnen: Zähnezahlen und Achsabstand ergeben die exakte Riemenlänge und die nächsten geschlossenen Riemen – oder umgekehrt. Dann die Riemenscheiben.",
    h1: "GT2-Zahnriemen-Rechner: Riemenlänge und Achsabstand",
    intro:
      "Geben Sie die Zähnezahlen der beiden Riemenscheiben ein und wie weit ihre Wellen auseinanderliegen: Sie erhalten die exakte Riemenlänge, die geschlossenen Riemen, die es am nächsten daran zu kaufen gibt, und den Achsabstand, den jeder davon ergibt – oder Sie gehen von einem vorhandenen Riemen aus und erhalten den exakten Achsabstand. Übersetzung, Drehzahl und Zähne im Eingriff kommen dazu, und die Riemenscheiben öffnen sich im GT2-Riemenscheiben-Generator.",
    card: "Exakte GT2-Riemenlänge aus zwei Zähnezahlen und einem Achsabstand oder der Achsabstand zu einem Riemen – dann die Riemenscheiben.",
    ui: {
      pitch: "Riemen",
      z1: "Antriebsscheibe (Zähne)",
      z2: "Abtriebsscheibe (Zähne)",
      rpm: "Drehzahl Antrieb",
      teethHint: "Ganze Zähne.",
      modeLabel: "Was ist bekannt?",
      modeCenter: "Achsabstand → Riemen",
      modeBelt: "Riemen → Achsabstand",
      beltInput: "Länge des geschlossenen Riemens",
      beltInputHint: "{teeth} Zähne.",
      beltNotWhole: "Ein geschlossener Riemen hat eine ganze Zahl von {p}-mm-Zähnen.",
      centerInput: "Achsabstand (Welle zu Welle)",
      centerDistance: "Achsabstand",
      exactNote: "Exakt, aus der Längengleichung gelöst.",
      beltLength: "Wirklänge des Riemens",
      approxNote: "Die Näherungsformel ergibt {v} mm.",
      beltTeeth: "Zähne des Riemens",
      wholeTeethNote: "Ein geschlossener Riemen braucht eine ganze Zahl: siehe die lieferbaren Riemen unten.",
      ratio: "Übersetzung",
      outRpm: "Abtriebsscheibe: {rpm} U/min",
      teethInMesh: "Zähne im Eingriff (kleine Scheibe)",
      meshWarn: "Weniger als 6 – die Nennwerte von Gates setzen 6 oder mehr voraus; nehmen Sie eine größere Riemenscheibe oder einen größeren Achsabstand.",
      wrap: "Umschlingungswinkel: {deg}°.",
      pitchDiameters: "Teilkreis-Ø (mm)",
      odNote: "Außen-Ø {a} / {b} mm.",
      beltSpeed: "Riemengeschwindigkeit",
      clearance: "Riemenscheiben zu nah",
      tooClose: "Die Bordscheiben der beiden Riemenscheiben (Außen-Ø + 5) würden sich berühren.",
      drawingLabel: "Die beiden Riemenscheiben und der Riemen, maßstäblich gezeichnet",
      stockTitle: "Nächste geschlossene Riemen",
      stockIntro: "Geschlossene GT2-Riemen gibt es nur mit ganzen Zähnen; jeder ergibt seinen eigenen Achsabstand.",
      copy: "Kopieren",
      copied: "Kopiert",
      colBelt: "Riemen",
      colTeeth: "Zähne",
      colCenter: "Achsabstand",
      colChange: "Änderung",
      noStock3: "Lieferbare geschlossene Riemen sind nur für 2 mm Teilung aufgeführt.",
      beltTooShort: "Zu kurz, um beide Riemenscheiben zu umschlingen: mindestens {min} mm.",
      centerTooShort: "Bei diesem Achsabstand überschneiden sich die Riemenscheiben.",
      colQuantity: "Größe",
      colValue: "Wert (mm)",
      stockBelt: "Geschlossener Riemen",
      handoffTitle: "Die Riemenscheiben erzeugen",
      handoffBody: "Jede Riemenscheibe öffnet sich im GT2-Riemenscheiben-Generator mit eingetragener Zähnezahl – dort Bohrung und Riemenbreite einstellen, dann STL zum Drucken oder STEP herunterladen.",
      handoffPulley: "GT2-Riemenscheibe mit {z} Zähnen",
      handoffPulleyNote: "Außen-Ø {od} mm.",
      handoffOutOfRange: "der Riemenscheiben-Generator macht {min}–{max} Zähne.",
    },
    sections: [
      {
        id: "formula",
        title: "Die exakte Riemenlänge – und warum nicht die Näherungsformel",
        body: [
          "Ein Riemen um zwei Riemenscheiben besteht aus zwei geraden Trumen und zwei Bögen. Mit den Teilkreisdurchmessern D (groß) und d (klein) – Zähnezahl × Teilung / π – und dem Achsabstand C verlassen die Trume die Verbindungslinie der Mittelpunkte unter einem Winkel φ. Das Konstruktionshandbuch von Gates gibt sowohl die exakte Länge (seine Formel 7) als auch die gängige Näherung (Formel 6) an. Dieser Rechner verwendet die exakte.",
          "Vom Riemen zurück zum Achsabstand gibt es keine geschlossene Lösung. Gates nennt eine Näherungsformel (8) und schreibt, dass sich der exakte Achsabstand durch Iterieren zwischen beiden ergibt; dieser Rechner löst die exakte Gleichung numerisch (Bisektion bis 10⁻¹² mm), sodass beide Richtungen bis auf die letzte Stelle übereinstimmen.",
        ],
        formula: "d = z · p / π                       (Teilkreisdurchmesser; GT2: p = 2 oder 3 mm)\nφ = asin((D − d) / 2C)\nL = 2C · cos φ + π (D + d) / 2 + φ (D − d)      exakt (Gates Formel 7, φ im Bogenmaß)\nL ≈ 2C + 1,57 (D + d) + (D − d)² / 4C           Näherung (Gates Formel 6)\nC ≈ [K + √(K² − 32 (D − d)²)] / 16;  K = 4L − 6,28 (D + d)   Näherung (Gates Formel 8)\nZähne im Eingriff = z_klein · (180° − 2φ) / 360°",
        after: [
          "Wie weit liegen sie auseinander? Bei einem Trieb 20 → 60 Zähne auf 150 mm unterscheiden sich die beiden Längen um weniger als ein tausendstel Millimeter; bei 45 mm mit 16 → 60 Zähnen liegt die Näherung weiter daneben. Der Rechner zeigt beide. Geprüft an den Auswahltabellen von Gates für 5 mm Teilung (8 Zeilen, beide Richtungen, auf die 0,01 in der Tabellen genau).",
        ],
      },
      {
        id: "example",
        title: "Rechenbeispiel: Motorscheibe mit 20 Zähnen treibt 60 Zähne, 150 mm Achsabstand",
        body: [
          "Teilkreisdurchmesser 40 / π = 12,732 mm und 120 / π = 38,197 mm; φ = asin(25,465 / 300) = 4,869°. Die exakte Länge ist 381,081 mm – 190,54 Zähne, also passt kein geschlossener Riemen genau. Die nächsten lieferbaren Riemen sind 370 mm (185 Zähne), womit die Wellen 144,438 mm auseinanderliegen, und 386 mm (193 Zähne), 152,468 mm – nehmen Sie den, den Ihre Verstellung erreicht, oder setzen Sie die Wellen passend.",
          "Übersetzung 1 : 3: Ein Motor mit 600 U/min dreht die Scheibe mit 60 Zähnen mit 200 U/min, und der Riemen läuft mit 20 × 2 mm × 600 / 60 = 0,4 m/s. Der Umschlingungswinkel an der kleinen Scheibe beträgt 170,26°, also sind 9 ihrer 20 Zähne im Eingriff – das Handbuch von Gates legt seine Nennwerte für mindestens 6 aus.",
        ],
      },
      {
        id: "stock",
        title: "Längen geschlossener GT2-Zahnriemen",
        body: [],
        tables: [],
        tableKind: "stock",
      },
      {
        id: "tension",
        title: "Platz zum Auflegen und Spannen des Riemens lassen",
        body: [
          "Das Handbuch von Gates (Abschnitt II-9) nennt, wie weit sich der Achsabstand eines Triebs verstellen lassen muss: kürzer zum Auflegen des Riemens, länger, um ihn über seine Lebensdauer zu spannen. Für Riemen von 125–250 mm je 0,8 mm in beide Richtungen; 250–500 mm 1,0 mm nach innen und 0,8 mm nach außen; 500–1000 mm 1,8 mm nach innen und 0,8 nach außen – noch mehr, wenn der Riemen über Scheiben mit Bordscheiben gelegt werden muss.",
          "Ein fester Achsabstand taugt nur für leichte Bewegungen: Gates verlangt ihn auf 0,05–0,08 mm genau und empfiehlt eine Spannrolle im Leertrum, wenn sich die Wellen nicht verschieben lassen. Beim 3D-Drucker ist das der übliche Riemenspanner.",
        ],
      },
    ],
    faqs: [
      { q: "Wie berechne ich die Länge eines Zahnriemens?", a: "Zwei Trume plus zwei Bögen: L = 2C·cos φ + π(D + d)/2 + φ(D − d), mit φ = asin((D − d)/2C) und D, d den Teilkreisdurchmessern (Zähne × Teilung / π). Bei gleichen Riemenscheiben ist es einfach 2C + Zähne × Teilung." },
      { q: "Welcher GT2-Riemen für 20 und 40 Zähne bei 100 mm?", a: "260,41 mm – 130,2 Zähne. Die nächsten lieferbaren geschlossenen Riemen sind 258 mm (129 Zähne), womit die Wellen 98,79 mm auseinanderliegen, und 280 mm (140 Zähne), 109,82 mm." },
      { q: "Welchen Achsabstand ergibt ein GT2-Riemen von 200 mm auf zwei Riemenscheiben mit 20 Zähnen?", a: "Genau 80 mm: Bei gleichen Scheiben ist C = (L − z·p) / 2 = (200 − 40) / 2." },
      { q: "Geschlossener oder offener Zahnriemen?", a: "Ein geschlossener (endloser) Riemen hat keine Verbindungsstelle und gibt es nur mit ganzen Zähnen, also richtet sich der Achsabstand nach dem Riemen. Ein offener Riemen (Meterware) wird auf Länge geschnitten und eingeklemmt – so bei den X/Y-Achsen von 3D-Druckern, wo die Riemenenden am Schlitten befestigt sind." },
      { q: "Wie straff muss der Riemen sein?", a: "Ondrives: so straff, dass das Leertrum unter der höchsten Last gespannt bleibt – jedes Durchhängen oder Flattern heißt, er ist zu locker. Gates misst es über die Kraft, die das Trum um 1/64 in je Zoll Trumlänge durchdrückt." },
      { q: "Wie viele Schritte/mm ergibt eine GT2-Riemenscheibe?", a: "Eine Umdrehung bewegt Zähne × 2 mm Riemen: 40 mm bei 20 Zähnen. Ein Motor mit 200 Schritten macht bei 16 Mikroschritten 3200 Schritte pro Umdrehung: 3200 / 40 = 80 Schritte/mm." },
    ],
    sources: SOURCES,
  },
  ja: {
    name: "GT2タイミングベルト長さ計算ツール",
    title: "タイミングベルト長さ計算（GT2）｜軸間距離とプーリー歯数から選定 | Forgent3D",
    description:
      "GT2タイミングベルトの長さ計算。2つのプーリーの歯数と軸間距離から、厳密なベルト長さ、近い長さの市販エンドレスベルトとその軸間距離を求めます。ベルトからの逆算も。そのままプーリーを作成。",
    h1: "GT2タイミングベルトの長さ計算",
    intro:
      "2つのプーリーの歯数と軸間距離を入れると、厳密なベルト長さ、それに近い市販のエンドレスベルト、そのベルトごとの軸間距離がわかります。手持ちのベルトから始めて、厳密な軸間距離を求めることもできます。速比、回転数、かみ合い歯数も同時に表示し、2つのプーリーはGT2プーリージェネレーターでそのまま開けます。",
    card: "2つの歯数と軸間距離からGT2ベルトの厳密な長さを、またはベルトから軸間距離を。そのままプーリーへ。",
    ui: {
      pitch: "ベルト",
      z1: "駆動側プーリー（歯数）",
      z2: "従動側プーリー（歯数）",
      rpm: "駆動側の回転数",
      teethHint: "歯数は整数。",
      modeLabel: "わかっている値は？",
      modeCenter: "軸間距離 → ベルト",
      modeBelt: "ベルト → 軸間距離",
      beltInput: "エンドレスベルトの長さ",
      beltInputHint: "{teeth}歯。",
      beltNotWhole: "エンドレスベルトの長さは、{p}mmピッチの歯が整数個になる値だけです。",
      centerInput: "軸間距離（軸中心から軸中心まで）",
      centerDistance: "軸間距離",
      exactNote: "長さの式を解いた厳密値です。",
      beltLength: "ベルトのピッチ周長",
      approxNote: "略算式では{v}mm。",
      beltTeeth: "ベルト歯数",
      wholeTeethNote: "エンドレスベルトは歯数が整数のものだけです。下の市販ベルトを見てください。",
      ratio: "速比",
      outRpm: "従動側プーリー：{rpm} rpm",
      teethInMesh: "かみ合い歯数（小プーリー）",
      meshWarn: "6歯未満です。Gatesの定格は6歯以上が前提です。大きいプーリーにするか、軸間距離を長くしてください。",
      wrap: "ベルトの巻き付け角は{deg}°。",
      pitchDiameters: "ピッチ円直径（mm）",
      odNote: "外径 {a} / {b} mm。",
      beltSpeed: "ベルト速度",
      clearance: "プーリーが近すぎます",
      tooClose: "2つのプーリーのフランジ（外径＋5）がぶつかります。",
      drawingLabel: "2つのプーリーとベルトの縮尺図",
      stockTitle: "近い長さのエンドレスベルト",
      stockIntro: "GT2のエンドレスベルトは歯数が整数で、ベルトごとに軸間距離が決まります。",
      copy: "コピー",
      copied: "コピーしました",
      colBelt: "ベルト",
      colTeeth: "歯数",
      colCenter: "軸間距離",
      colChange: "差",
      noStock3: "市販のエンドレスベルトは2mmピッチのみ掲載しています。",
      beltTooShort: "短すぎて両方のプーリーに掛かりません。{min}mm以上必要です。",
      centerTooShort: "この軸間距離ではプーリーどうしが重なります。",
      colQuantity: "項目",
      colValue: "値（mm）",
      stockBelt: "エンドレスベルト",
      handoffTitle: "プーリーを作る",
      handoffBody: "どちらのプーリーも、歯数を入力した状態でGT2プーリージェネレーターが開きます。そこで軸穴とベルト幅を設定し、印刷用のSTLかSTEPをダウンロードしてください。",
      handoffPulley: "{z}歯 GT2プーリー",
      handoffPulleyNote: "外径 {od} mm。",
      handoffOutOfRange: "プーリージェネレーターで作れるのは{min}〜{max}歯です。",
    },
    sections: [
      {
        id: "formula",
        title: "ベルト長さの厳密式――略算式を使わない理由",
        body: [
          "2つのプーリーに掛けたベルトは、2本の直線部と2つの円弧でできています。ピッチ円直径をD（大）、d（小）（歯数×ピッチ÷π）、軸間距離をCとすると、直線部は中心線に対して角度φだけ傾きます。Gatesの設計マニュアルには、厳密な長さの式（式7）と、よく使われる略算式（式6）の両方が載っています。この計算ツールは厳密式を使います。",
          "ベルト長さから軸間距離への逆算は、式の形では解けません。Gatesは近似式（式8）を示し、厳密な軸間距離は2つの式の間で反復計算して求めるとしています。この計算ツールは厳密式を数値的に解く（二分法で10⁻¹² mmまで）ので、どちらの方向でも最後の桁まで一致します。",
        ],
        formula: "d = z · p / π                       （ピッチ円直径。GT2：p = 2または3 mm）\nφ = asin((D − d) / 2C)\nL = 2C · cos φ + π (D + d) / 2 + φ (D − d)      厳密式（Gates 式7、φはラジアン）\nL ≈ 2C + 1.57 (D + d) + (D − d)² / 4C           略算式（Gates 式6）\nC ≈ [K + √(K² − 32 (D − d)²)] / 16、K = 4L − 6.28 (D + d)   近似式（Gates 式8）\nかみ合い歯数 = 小プーリーの歯数 · (180° − 2φ) / 360°",
        after: [
          "差はどのくらい？歯数20 → 60、軸間距離150mmなら、2つの式の差は1000分の1mm未満です。歯数16 → 60で45mmだと、略算式の誤差はもっと大きくなります。計算ツールは両方を表示します。Gatesの5mmピッチの選定表と照合済みです（8行、両方向、表の単位0.01インチまで）。",
        ],
      },
      {
        id: "example",
        title: "計算例：20歯のモーター側プーリーで60歯を駆動、軸間距離150mm",
        body: [
          "ピッチ円直径は40 / π = 12.732mmと120 / π = 38.197mm、φ = asin(25.465 / 300) = 4.869°。厳密なベルト長さは381.081mmで、190.54歯にあたるため、ぴったりのエンドレスベルトはありません。市販品で近いのは370mm（185歯）で軸間距離144.438mm、386mm（193歯）で152.468mmです。調整範囲で届くほうを選ぶか、軸の位置をベルトに合わせてください。",
          "速比は1 : 3。モーターが600 rpmなら60歯のプーリーは200 rpmで回り、ベルト速度は20 × 2mm × 600 / 60 = 0.4 m/sです。ベルトは小プーリーに170.26°巻き付き、20歯のうち9歯がかみ合います。Gatesのマニュアルは、かみ合い歯数6以上を前提に定格を定めています。",
        ],
      },
      {
        id: "stock",
        title: "GT2エンドレスベルトの長さ",
        body: [],
        tables: [],
        tableKind: "stock",
      },
      {
        id: "tension",
        title: "ベルトの取り付けとテンション調整の余裕を残す",
        body: [
          "Gatesのマニュアル（II-9節）は、軸間距離をどれだけ動かせる必要があるかを示しています。ベルトを掛けるときは縮め、長く使う間のテンション調整には広げます。125〜250mmのベルトなら両方向に0.8mm、250〜500mmなら縮める側1.0mm・広げる側0.8mm、500〜1000mmなら縮める側1.8mm・広げる側0.8mm。フランジ付きプーリーを越えて掛ける場合は、さらに必要です。",
          "軸間距離を固定にしてよいのは軽い伝動だけです。Gatesは誤差を0.05〜0.08mm以内に収めるよう求め、軸を動かせない場合は緩み側にアイドラーを付けることを勧めています。3Dプリンターでいえば、おなじみのベルトテンショナーです。",
        ],
      },
    ],
    faqs: [
      { q: "タイミングベルトの長さはどう計算しますか？", a: "直線部2本と円弧2つの和です。L = 2C·cos φ + π(D + d)/2 + φ(D − d)、ここでφ = asin((D − d)/2C)、D、dはピッチ円直径（歯数×ピッチ÷π）です。2つのプーリーが同じなら、単純に2C＋歯数×ピッチになります。" },
      { q: "歯数20と40、軸間距離100mmには、どのGT2ベルト？", a: "260.41mm、130.2歯です。市販のエンドレスベルトで近いのは258mm（129歯）で軸間距離98.79mm、280mm（140歯）で109.82mmです。" },
      { q: "20歯のプーリー2つに200mmのGT2ベルトを掛けると、軸間距離は？", a: "ちょうど80mmです。プーリーが同じなら、C = (L − z·p) / 2 = (200 − 40) / 2。" },
      { q: "エンドレスベルトとオープンベルト、どちらを使う？", a: "エンドレス（無端）ベルトは継ぎ目がなく、歯数が整数のものしかないので、軸間距離はベルトに合わせて決まります。オープンベルトは必要な長さに切って両端を固定するもので、3DプリンターのX/Y軸はこちらを使い、ベルトの両端をキャリッジに固定しています。" },
      { q: "ベルトはどのくらい張ればいい？", a: "Ondrivesによれば、最大負荷のときも緩み側がぴんと張っている程度に。たるみやばたつきがあれば張りが足りません。Gatesは、スパン1インチあたり1/64インチたわませるのに必要な力で測ります。" },
      { q: "GT2プーリーのsteps/mmは？", a: "1回転でベルトが歯数×2mm進みます。20歯なら40mm。200ステップのモーターを16マイクロステップで駆動すると1回転3200ステップなので、3200 / 40 = 80 steps/mmです。" },
    ],
    sources: SOURCES,
  },
};

const STOCK_HEADS = {
  en: ["Belt length", "Teeth", "Listed by"],
  zh: ["带长", "齿数", "出处"],
  de: ["Riemenlänge", "Zähne", "Gelistet von"],
  ja: ["ベルト長さ", "歯数", "掲載元"],
};

/** Fill the stock-belt section (intro text + table) into every language from belt-data.js. */
export function fillStock() {
  for (const [locale, c] of Object.entries(copy)) {
    const section = c.sections.find((s) => s.tableKind === "stock");
    if (!section) continue;
    if (!section.body.length && GT2_STOCK_SOURCE.text[locale]) section.body = GT2_STOCK_SOURCE.text[locale];
    section.tables = GT2_STOCK.length ? [stockTable(STOCK_HEADS[locale] || STOCK_HEADS.en, GT2_STOCK_SOURCE.caption[locale] || GT2_STOCK_SOURCE.caption.en)] : [];
    delete section.tableKind;
  }
}
fillStock();

export { GEN as PULLEY_PAGE };
