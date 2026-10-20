// Reference data for the clearance-hole and heat-set-insert calculator. Every row names its source; the page lists
// them with versions (app/lib/calculators/copy/holes.js) and the platform repo's docs/generator-seo-research.md §5.0
// B3 ledger keeps the evidence.

/**
 * ISO 273:1979 "Fasteners — Clearance holes for bolts and screws" (confirmed 2024, still current; adopted as
 * EN 20273 / DIN EN 20273). Fine = H12, medium = H13, coarse = H14 tolerance classes (for information in the
 * standard). Values read from IS 1821:1987, the Indian Standard "identical with ISO 273-1979"
 * (law.resource.org/pub/in/bis/S01/is.1821.1987.pdf, table p. 6), cross-checked against de.wikipedia
 * "Durchgangsbohrung" (Tabellenbuch Metall) and Albany County Fasteners' ISO 273 chart: all three agree on every row.
 * (Some charts online give M12 13 / 14 / 15 and M16 17 / 18 / 19 — those are not ISO 273.)
 */
export const ISO_273 = {
  "M1.6": { fine: 1.7, medium: 1.8, coarse: 2.0 },
  M2: { fine: 2.2, medium: 2.4, coarse: 2.6 },
  "M2.5": { fine: 2.7, medium: 2.9, coarse: 3.1 },
  M3: { fine: 3.2, medium: 3.4, coarse: 3.6 },
  "M3.5": { fine: 3.7, medium: 3.9, coarse: 4.2 },
  M4: { fine: 4.3, medium: 4.5, coarse: 4.8 },
  M5: { fine: 5.3, medium: 5.5, coarse: 5.8 },
  M6: { fine: 6.4, medium: 6.6, coarse: 7.0 },
  M8: { fine: 8.4, medium: 9.0, coarse: 10.0 },
  M10: { fine: 10.5, medium: 11.0, coarse: 12.0 },
  M12: { fine: 13.0, medium: 13.5, coarse: 14.5 },
  M14: { fine: 15.0, medium: 15.5, coarse: 16.5 },
  M16: { fine: 17.0, medium: 17.5, coarse: 18.5 },
  M20: { fine: 21.0, medium: 22.0, coarse: 24.0 },
  M24: { fine: 25.0, medium: 26.0, coarse: 28.0 },
};

export const ISO_273_SIZES = Object.keys(ISO_273);

/**
 * Heat-set (thermal) inserts for plastic, by vendor, as each vendor publishes them. Straight holes. Each row:
 * screw, vendor key, variant, insert length L, insert (knurl) OD, hole Ø, minimum blind-hole depth, minimum wall.
 * `depth` is the vendor's own rule worked out (CNC Kitchen and ruthex: "min. L + 1 mm"; PEM and McMaster list it).
 *
 * - cnc:     CNC Kitchen store, "Dimensions & Design Guidelines — METRIC SIZE INSERTS" (table image of 2026-04-10;
 *            M1.6 and M6 short from their product drawings). Note M4 5.7 / M5 6.5 / M6 8.1 — older copies of the table
 *            (still on some resellers) say 5.6 / 6.4 / 8.0.
 * - ruthex:  ruthex.de size table ("GRÖßE", image of 2025-05-27).
 * - pem:     PennEngineering PEM SI® "Threaded inserts for plastics" bulletin © 2012, type IUTB (brass, straight wall);
 *            hole tolerance +0.08 / −0; M3 checked against the current pemnet.com catalogue (unchanged).
 * - mcmaster: McMaster-Carr "Heat-Set Threaded Inserts for Plastic", brass, metric (read 2026-10-20): a MAXIMUM hole
 *            diameter; "minimum material thickness" only on some product pages (94459A140 M3, 94459A220 M6).
 * Minimum wall: CNC Kitchen and ruthex give W per size; PEM's guideline is a wall of ½–1 × the insert OD (a boss of
 * 2 × OD) — the industrial optimum, not a printed-part minimum.
 */
export const INSERTS = [
  { screw: "M1.6", vendor: "cnc", variant: "standard", L: 2.5, od: 2.5, hole: 2.2, depth: 3.5, wall: 1.3 },
  { screw: "M2", vendor: "cnc", variant: "standard", L: 3.0, od: 3.6, hole: 3.2, depth: 4.0, wall: 1.3 },
  { screw: "M2", vendor: "ruthex", variant: "standard", L: 4.0, od: 3.6, hole: 3.2, depth: 5.0, wall: 1.3 },
  { screw: "M2", vendor: "pem", variant: "IUTB", L: 4.0, od: 3.73, hole: 3.23, depth: 4.76, wall: null },
  { screw: "M2.5", vendor: "cnc", variant: "standard", L: 4.0, od: 4.6, hole: 4.0, depth: 5.0, wall: 1.6 },
  { screw: "M2.5", vendor: "ruthex", variant: "standard", L: 5.7, od: 4.6, hole: 4.0, depth: 6.7, wall: 1.6 },
  { screw: "M2.5", vendor: "pem", variant: "IUTB", L: 5.74, od: 4.55, hole: 4.01, depth: 6.5, wall: null },
  { screw: "M3", vendor: "cnc", variant: "standard", L: 5.7, od: 4.6, hole: 4.0, depth: 6.7, wall: 1.6 },
  { screw: "M3", vendor: "cnc", variant: "short", L: 3.0, od: 4.6, hole: 4.0, depth: 4.0, wall: 1.6 },
  { screw: "M3", vendor: "cnc", variant: "voron", L: 4.0, od: 5.0, hole: 4.4, depth: 5.0, wall: 1.6 },
  { screw: "M3", vendor: "ruthex", variant: "standard", L: 5.7, od: 4.6, hole: 4.0, depth: 6.7, wall: 1.6 },
  { screw: "M3", vendor: "ruthex", variant: "short", L: 4.0, od: 4.6, hole: 4.0, depth: 5.0, wall: 1.6 },
  { screw: "M3", vendor: "ruthex", variant: "voron", L: 4.0, od: 5.0, hole: 4.4, depth: 5.0, wall: 1.3 },
  { screw: "M3", vendor: "pem", variant: "IUTB", L: 5.74, od: 4.55, hole: 4.01, depth: 6.5, wall: null },
  { screw: "M3", vendor: "mcmaster", variant: "standard", L: 5.7, od: null, hole: 4.0, depth: 6.5, wall: null, max: true },
  { screw: "M4", vendor: "cnc", variant: "standard", L: 8.1, od: 6.3, hole: 5.7, depth: 9.1, wall: 2.1 },
  { screw: "M4", vendor: "cnc", variant: "short", L: 4.0, od: 6.3, hole: 5.7, depth: 5.0, wall: 2.1 },
  { screw: "M4", vendor: "ruthex", variant: "standard", L: 8.1, od: 6.3, hole: 5.6, depth: 9.1, wall: 2.1 },
  { screw: "M4", vendor: "ruthex", variant: "short", L: 4.0, od: 6.3, hole: 5.6, depth: 5.0, wall: 2.1 },
  { screw: "M4", vendor: "pem", variant: "IUTB", L: 8.15, od: 6.17, hole: 5.67, depth: 8.91, wall: null },
  { screw: "M4", vendor: "mcmaster", variant: "standard", L: 8.2, od: null, hole: 5.6, depth: null, wall: null, max: true },
  { screw: "M5", vendor: "cnc", variant: "standard", L: 9.5, od: 7.1, hole: 6.5, depth: 10.5, wall: 2.6 },
  { screw: "M5", vendor: "cnc", variant: "short", L: 5.8, od: 7.1, hole: 6.5, depth: 6.8, wall: 2.6 },
  { screw: "M5", vendor: "ruthex", variant: "standard", L: 9.5, od: 7.1, hole: 6.4, depth: 10.5, wall: 2.6 },
  { screw: "M5", vendor: "ruthex", variant: "short", L: 5.8, od: 7.1, hole: 6.4, depth: 6.8, wall: 2.6 },
  { screw: "M5", vendor: "pem", variant: "IUTB", L: 9.52, od: 6.93, hole: 6.43, depth: 10.28, wall: null },
  { screw: "M5", vendor: "mcmaster", variant: "standard", L: 9.5, od: null, hole: 6.5, depth: null, wall: null, max: true },
  { screw: "M6", vendor: "cnc", variant: "standard", L: 12.7, od: 8.7, hole: 8.1, depth: 13.7, wall: 3.3 },
  { screw: "M6", vendor: "cnc", variant: "short", L: 6.8, od: 8.7, hole: 8.1, depth: 7.8, wall: 3.3 },
  { screw: "M6", vendor: "ruthex", variant: "standard", L: 12.7, od: 8.7, hole: 8.0, depth: 13.7, wall: 3.3 },
  { screw: "M6", vendor: "ruthex", variant: "short", L: 6.8, od: 8.7, hole: 8.0, depth: 7.8, wall: 3.3 },
  { screw: "M6", vendor: "pem", variant: "IUTB", L: 12.7, od: 8.69, hole: 8.03, depth: 13.46, wall: null },
  { screw: "M6", vendor: "mcmaster", variant: "standard", L: 12.7, od: null, hole: 8.0, depth: 13.5, wall: null, max: true },
  { screw: "M8", vendor: "cnc", variant: "standard", L: 12.7, od: 10.2, hole: 9.7, depth: 13.7, wall: 4.5 },
  { screw: "M8", vendor: "ruthex", variant: "standard", L: 12.7, od: 10.1, hole: 9.6, depth: 13.7, wall: 4.5 },
  { screw: "M8", vendor: "mcmaster", variant: "standard", L: 12.7, od: null, hole: 9.6, depth: null, wall: null, max: true },
  { screw: "M10", vendor: "cnc", variant: "standard", L: 12.7, od: 12.6, hole: 12.0, depth: 13.7, wall: 6.0 },
  { screw: "M10", vendor: "ruthex", variant: "standard", L: 12.7, od: 12.6, hole: 12.0, depth: 13.7, wall: 6.0 },
];

export const INSERT_VENDORS = {
  cnc: { name: "CNC Kitchen", url: "https://cnckitchen.store/products/heat-set-insert-m3-x-5-7-100-pieces", version: "table of 2026-04-10" },
  ruthex: { name: "ruthex", url: "https://ruthex.de/collections/gewindeeinsatze/products/ruthex-gewindeeinsatz-m3-100-stuck-rx-m3x5-7-messing-gewindebuchsen", version: "size table of 2025-05-27" },
  pem: { name: "PEM SI® IUTB", url: "https://catalog.pemnet.com/item/ht-wall-thru-threaded-inserts-types-iuta-iutb-iutc/-staking-insert-straight-wall-thru-threaded-metric/iutb-m3?plpver=10", version: "bulletin © 2012" },
  mcmaster: { name: "McMaster-Carr", url: "https://www.mcmaster.com/products/heat-set-inserts/system-of-measurement~metric/heat-set-threaded-inserts-for-plastic-1~~/", version: "read 2026-10-20" },
};

/** The sizes the insert table covers. */
export const INSERT_SIZES = [...new Set(INSERTS.map((r) => r.screw))];

/**
 * The catalog component the insert half hands off to — app /c/heat-set-boss (platform
 * catalog/components/fasteners/heat-set-boss): its SCREW choices and its LENGTH ("standard" / "short"; short exists
 * for M3 / M4 / M5). Its hole table is the ruthex / McMaster one (M4 5.6, M5 6.4, M6 8.0) and its lengths CNC Kitchen's.
 */
export const HEAT_SET_BOSS = { dir: "heat-set-boss", screws: ["M2", "M2.5", "M3", "M4", "M5", "M6"], short: ["M3", "M4", "M5"] };

/** Starting allowance for printed clearance holes, mm — not a standard (the page's "printed holes" section says why). */
export const PRINT_ALLOWANCE = 0.2;
