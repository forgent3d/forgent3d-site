// Data behind the GT2 belt length calculator. Every number names its source (docs/generator-seo-research.md §5.0 B3
// in the platform repo keeps the evidence).

/** Pitch line differential per side (pitch diameter − outside diameter = 2 × PLD): GT2 2 mm 0.254, GT2 3 mm 0.381 —
 *  the values the timing-pulley generator uses (platform generator-models/timing-pulley/EVIDENCE.md: Misumi,
 *  Ondrives, SDP/SI, Adafruit). */
export const GT2_PLD = { 2: 0.254, 3: 0.381 };

/** The GT2 pulley generator the calculator hands off to: its slug and the limits of its knobs (model.py: TEETH
 *  range=16..60; flanges are outside diameter + 5 across). A link outside the range would be refused. */
export const PULLEY_GENERATOR = { slug: "gt2-pulley-generator", minTeeth: 16, maxTeeth: 60, flangeOver: 5 };

/**
 * Closed (endless) GT2 2 mm belts that are actually sold, in teeth (length = teeth × 2 mm):
 * - ondrives: Ondrives 2GT-4 / 2GT-6 closed belts, "Timing Pulleys & Belts" GT catalogue pp. 7–8 (product information
 *   updated April 2017; copy hosted by the distributor Amironic) — the manufacturer list, 4 and 6 mm wide.
 * - vxb: VXB "GT2 closed loop timing belt 2GT 6mm", available lengths as listed on 2026-10-20 — the hobby lengths
 *   3D printers use (a retailer, not a maker).
 */
const ONDRIVES = [154, 176, 182, 188, 210, 258, 282, 290, 302, 320, 322, 332, 340, 346, 358, 360, 370, 386, 420, 426, 430, 444, 448, 460, 478, 484, 486, 506, 544, 600, 616, 630];
const VXB = [110, 112, 122, 158, 200, 280, 300, 400, 610, 852];

export const GT2_STOCK = [...new Set([...ONDRIVES, ...VXB])]
  .sort((a, b) => a - b)
  .map((mm) => ({ teeth: mm / 2, sources: [ONDRIVES.includes(mm) && "Ondrives", VXB.includes(mm) && "VXB"].filter(Boolean) }));

export const GT2_STOCK_TEETH = GT2_STOCK.map((b) => b.teeth);

export const GT2_STOCK_URLS = {
  Ondrives: "https://amironic.co.il/wp-content/uploads/GT-Miniature-Timing-Pulleys-Belts.pdf",
  VXB: "https://vxb.com/products/gt2-closed-loop-timing-belt-2gt-6mm-synchronous-dr",
};

/** The stock section's text and table caption per language (the table itself is built from GT2_STOCK). */
export const GT2_STOCK_SOURCE = {
  text: {
    en: [
      "A closed belt is a whole number of teeth, so its length is always an even number of millimetres — but not every even length is made. These are the lengths two sellers list: Ondrives' closed 2GT belts (the manufacturer's catalogue, 4 and 6 mm wide) and the 6 mm closed loops VXB sells for 3D printers. The calculator picks its nearest belts from this list.",
      "Longer than these, or a length nobody stocks: use an open belt cut to length and clamped, as printer X/Y axes do.",
    ],
    zh: [
      "闭口带是整数齿，所以长度总是偶数毫米——但不是每个偶数长度都有货。下面是两家列出的长度：Ondrives 的 2GT 闭口带（厂家目录，4 mm 和 6 mm 宽），以及 VXB 给 3D 打印机卖的 6 mm 闭口带。计算器就从这张表里挑最接近的带。",
      "比这些更长，或者没人备货的长度：用开口带按长度剪、两头夹住，打印机的 X/Y 轴就是这样。",
    ],
    de: [
      "Ein geschlossener Riemen hat eine ganze Zahl von Zähnen, seine Länge ist also immer eine gerade Zahl von Millimetern – aber nicht jede gerade Länge wird hergestellt. Dies sind die Längen, die zwei Anbieter führen: die geschlossenen 2GT-Riemen von Ondrives (Herstellerkatalog, 4 und 6 mm breit) und die 6 mm breiten geschlossenen Riemen, die VXB für 3D-Drucker verkauft. Der Rechner wählt die nächsten Riemen aus dieser Liste.",
      "Länger als diese oder eine Länge, die niemand führt: Nehmen Sie einen offenen Riemen (Meterware), auf Länge geschnitten und eingeklemmt, wie an den X/Y-Achsen von Druckern.",
    ],
    ja: [
      "エンドレスベルトは歯数が整数なので、長さはいつも偶数のmmになります。ただし、偶数の長さがすべて作られているわけではありません。ここに載せたのは2社が掲載している長さで、Ondrivesの2GTエンドレスベルト（メーカーのカタログ、幅4mmと6mm）と、VXBが3Dプリンター向けに販売している幅6mmのエンドレスベルトです。計算ツールは、この一覧から近いベルトを選びます。",
      "これより長い場合や、どこも在庫していない長さには、オープンベルトを必要な長さに切って両端を固定してください。プリンターのX/Y軸と同じ方法です。",
    ],
  },
  caption: {
    en: "Ondrives: GT catalogue pp. 7–8 (April 2017). VXB: listing read 2026-10-20 (retailer).",
    zh: "Ondrives：GT 目录第 7–8 页（2017 年 4 月）。VXB：2026-10-20 读取的商品页（零售商）。",
    de: "Ondrives: GT-Katalog S. 7–8 (April 2017). VXB: Angebot gelesen am 2026-10-20 (Händler).",
    ja: "Ondrives：GTカタログ 7〜8ページ（2017年4月）。VXB：2026-10-20に参照した商品ページ（小売店）。",
  },
};
