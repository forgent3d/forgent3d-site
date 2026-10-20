// Tests for the calculator math (app/lib/calculators). Run: npm run test:calculators
//
// The expected values come from published sources, not from the code under test — each case names its source.
import assert from "node:assert/strict";
import { test } from "node:test";

import { beltLength, beltLengthApprox, centerDistance, nearestStockBelts, pitchDiameter, solveDrive, teethInMesh, wrapAngleSmall } from "../app/lib/calculators/belt.js";
import { boltCircle, holeSpacing, ligament, pcdFromSpacing } from "../app/lib/calculators/bolt-circle.js";
import { GT2_STOCK_TEETH } from "../app/lib/calculators/belt-data.js";
import { flangeLinkParams } from "../app/lib/calculators/flange.js";
import { ISO_273, INSERTS } from "../app/lib/calculators/holes-data.js";

const close = (actual, expected, tol, what) =>
  assert.ok(Math.abs(actual - expected) <= tol, `${what}: ${actual} ≠ ${expected} (± ${tol})`);

// ---------------------------------------------------------------- numbers quoted in the page copy

test("copy: bolt circle page's quoted numbers", () => {
  // Machinery's 1914 example: 11 holes on 8 in — they print 2.252 with sin 16.36° rounded; the exact is 2.2539.
  close(holeSpacing(8, 11), 2.252, 0.002, "Machinery 11 on 8");
  close(holeSpacing(8, 11), 2.2539, 0.00005, "unrounded");
  // EN 1092-1 DN50 PN16 worked example.
  const dn50 = boltCircle({ holes: 4, pcd: 125, start: 45 });
  close(dn50[0].x, 44.194, 0.0005, "x1");
  close(holeSpacing(125, 4), 88.388, 0.0005, "pitch");
  close(holeSpacing(125, 4) - 18, 70.4, 0.05, "material between Ø18 holes");
  close((165 - 125) / 2 - 9, 11, 1e-9, "hole to rim");
  // A 31 mm square is a 43.841 mm circle from 45°.
  close(31 * Math.SQRT2, 43.841, 0.0005, "square → PCD");
  close(boltCircle({ holes: 4, pcd: 31 * Math.SQRT2, start: 45 })[0].x, 15.5, 1e-9, "square corner");
  close(1 / Math.sin(Math.PI / 5), 1 / 0.5878, 0.001, "5-hole divisor");
});

test("copy: belt page's quoted numbers, and every quoted belt is on the stock list", () => {
  const r = solveDrive({ z1: 20, z2: 60, pitch: 2, center: 150, rpm: 600 });
  close(r.d1, 12.732, 0.0005, "PD 20");
  close(r.d2, 38.197, 0.0005, "PD 60");
  close((Math.asin((r.d2 - r.d1) / 300) * 180) / Math.PI, 4.869, 0.0005, "φ");
  close(r.length, 381.081, 0.0005, "L");
  close(r.teeth, 190.54, 0.005, "teeth");
  close(r.wrapSmall, 170.26, 0.005, "wrap");
  assert.equal(r.teethInMesh, 9);
  assert.equal(r.outRpm, 200);
  close(r.beltSpeed, 0.4, 1e-12, "m/s");
  assert.ok(Math.abs(r.length - r.approx) < 0.001, "short formula within a thousandth here");
  const d = (z) => pitchDiameter(z, 2);
  close(centerDistance(d(20), d(60), 370), 144.438, 0.0005, "370");
  close(centerDistance(d(20), d(60), 386), 152.468, 0.0005, "386");
  close(centerDistance(d(20), d(60), 400), 159.492, 0.0005, "400");
  close(beltLength(d(20), d(40), 100), 260.41, 0.005, "20/40 @ 100");
  close(centerDistance(d(20), d(40), 258), 98.79, 0.005, "258 (quoted to 2 decimals)");
  close(centerDistance(d(20), d(40), 280), 109.82, 0.005, "280");
  close(centerDistance(d(20), d(20), 200), 80, 1e-9, "200 on 20/20");
  for (const mm of [370, 386, 400, 258, 280, 200]) assert.ok(GT2_STOCK_TEETH.includes(mm / 2), `${mm} mm is on the stock list`);
  // The nearest-belt picker brackets 381.08 with 370 and 386 (and the next ones out).
  const near = nearestStockBelts({ z1: 20, z2: 60, pitch: 2, exactTeeth: r.teeth, stockTeeth: GT2_STOCK_TEETH, count: 1 });
  assert.deepEqual(near.map((b) => b.length), [370, 386]);
});

test("holes data: ISO 273 series grow fine < medium < coarse; inserts sit inside the makers' rules", () => {
  for (const [size, s] of Object.entries(ISO_273)) assert.ok(s.fine < s.medium && s.medium < s.coarse, size);
  for (const r of INSERTS) {
    if (r.od != null) assert.ok(r.hole < r.od, `${r.vendor} ${r.screw}: hole under the knurl`);
    if (r.depth != null) assert.ok(r.depth >= r.L + 0.7, `${r.vendor} ${r.screw}: depth past the insert`);
    // SPIROL: the mating part's clearance hole must be smaller than the insert's pilot (just under its hole) — the
    // page says coarse passes for M2–M6, the sizes the worked example and the boss cover. (M10 coarse = 12.0 = hole.)
    if (["M2", "M2.5", "M3", "M4", "M5", "M6"].includes(r.screw)) assert.ok(ISO_273[r.screw].coarse < r.hole, `${r.screw}: coarse clearance under the insert hole`);
  }
});

test("flange hand-off: offered exactly when the generator's rules allow it", () => {
  assert.equal(flangeLinkParams({ holes: 4, pcd: 65, start: 45, screw: "M5", boreD: 50 }).blocked, null);
  assert.equal(flangeLinkParams({ holes: 24, pcd: 200, start: 0, screw: "M5" }).blocked.key, "blockedHoles");
  assert.equal(flangeLinkParams({ holes: 12, pcd: 40, start: 0, screw: "M5" }).blocked.key, "blockedTooClose");
  const bore = flangeLinkParams({ holes: 4, pcd: 65, start: 45, screw: "M8", boreD: 50 }).blocked;
  assert.equal(bore.key, "blockedBore");
  assert.equal(bore.value, "46.5"); // the generator's own refusal says "at most 46.5 mm"
  assert.equal(flangeLinkParams({ holes: 4, pcd: 230, start: 0, screw: "M16" }).blocked.key, "blockedBed");
  assert.equal(flangeLinkParams({ holes: 4, pcd: 65, start: -45, screw: "M5" }).params.START_ANGLE, "315");
});

// ---------------------------------------------------------------- bolt circle

test("bolt circle: 4 holes on PCD 100 from 0° land on the axes", () => {
  const pts = boltCircle({ holes: 4, pcd: 100 });
  assert.deepEqual(pts.map((p) => [p.angle, p.x, p.y]), [[0, 50, 0], [90, 0, 50], [180, -50, 0], [270, 0, -50]]);
});

test("bolt circle: 6 holes, PCD 50 — the 30-60-90 coordinates (r cos 60° = 12.5, r sin 60° = 21.6506)", () => {
  const pts = boltCircle({ holes: 6, pcd: 50 });
  close(pts[1].x, 12.5, 1e-9, "x2");
  close(pts[1].y, 25 * Math.sqrt(3) / 2, 1e-9, "y2");
  close(pts[1].y, 21.6506, 1e-4, "y2 to 4 places");
  close(pts[3].x, -25, 1e-9, "x4");
});

test("bolt circle: start angle and centre offset", () => {
  // 3 holes from 90° (first hole at 12 o'clock) around (10, 20), PCD 40.
  const pts = boltCircle({ holes: 3, pcd: 40, start: 90, cx: 10, cy: 20 });
  assert.deepEqual(pts.map((p) => p.angle), [90, 210, 330]);
  close(pts[0].x, 10, 1e-9, "x1");
  close(pts[0].y, 40, 1e-9, "y1");
  close(pts[1].x, 10 - 20 * Math.cos(30 * Math.PI / 180), 1e-9, "x2");
  close(pts[1].y, 20 - 10, 1e-9, "y2");
  // Angles wrap into 0–360.
  assert.deepEqual(boltCircle({ holes: 4, pcd: 10, start: 300 }).map((p) => p.angle), [300, 30, 120, 210]);
});

test("bolt circle: EN 1092-1 DN50 PN16 — 4 holes on K 125: neighbours 88.39 apart", () => {
  // K = 125 for DN50 PN10/16 (EN 1092-1 table; same on every flange chart). Chord = K · sin 45°.
  close(holeSpacing(125, 4), 125 * Math.SQRT1_2, 1e-9, "spacing");
  close(holeSpacing(125, 4, 2), 125, 1e-9, "across");
  close(ligament(125, 4, 18), 125 * Math.SQRT1_2 - 18, 1e-9, "ligament");
});

test("bolt circle: spacing and PCD are inverses", () => {
  for (const n of [3, 5, 8, 12]) close(pcdFromSpacing(holeSpacing(73.2, n), n), 73.2, 1e-9, `n=${n}`);
});

test("bolt circle: every hole lies on the circle, equally spaced", () => {
  const pts = boltCircle({ holes: 7, pcd: 66, start: 13 });
  for (const p of pts) close(Math.hypot(p.x, p.y), 33, 1e-9, `r of hole ${p.n}`);
  for (let i = 0; i < pts.length; i += 1) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    close(Math.hypot(a.x - b.x, a.y - b.y), holeSpacing(66, 7), 1e-9, `chord ${i}`);
  }
});

// ---------------------------------------------------------------- belt

test("belt: pitch diameter of a 20-tooth GT2 pulley is 12.732 mm (40 / π)", () => {
  close(pitchDiameter(20, 2), 12.7324, 1e-4, "PD");
});

test("belt: equal pulleys — L = 2C + z·p exactly, and back", () => {
  const d = pitchDiameter(20, 2);
  close(beltLength(d, d, 80), 2 * 80 + 40, 1e-9, "L");
  close(centerDistance(d, d, 200), 80, 1e-9, "C");
});

test("belt: exact length ≥ approximation's input sanity, and inverse round-trips", () => {
  const d1 = pitchDiameter(16, 2);
  const d2 = pitchDiameter(60, 2);
  for (const c of [45, 60, 100, 250, 600]) {
    const L = beltLength(d1, d2, c);
    close(centerDistance(d1, d2, L), c, 1e-9, `C=${c}`);
    // The approximation drops terms of order (D − d)^4 / C^3: close at long centres, off at short ones.
    assert.ok(Math.abs(beltLengthApprox(d1, d2, c) - L) < (c > 200 ? 0.01 : 1), `approx at C=${c}`);
  }
});

// Gates PowerGrip GT2 Drive Design Manual (The Gates Rubber Co., ©2000), 5 mm pitch Drive Selection Tables, printed
// pp. 16 and 24: centre distance in inches, 2 decimals, for a belt (teeth × 5 mm) round two sprockets. The tables
// are Gates' own solution of the length equation; they are printed to 0.01 in and not always rounded half-up, so the
// tolerance is 0.01 in (0.254 mm). Same geometry as 2 mm GT2, only the pitch differs.
const GATES_5M = [
  // [z1, z2, belt teeth, C in inches, page]
  [18, 18, 60, 4.13, 16],
  [18, 18, 120, 10.04, 16],
  [20, 20, 80, 5.91, 16],
  [20, 45, 60, 2.59, 24],
  [20, 45, 80, 4.61, 24],
  [20, 45, 100, 6.59, 24],
  [20, 45, 120, 8.58, 24],
  [19, 44, 60, 2.69, 24],
];

test("belt: belt length → centre distance matches Gates' 5 mm drive tables", () => {
  for (const [z1, z2, teeth, inches, page] of GATES_5M) {
    const c = centerDistance(pitchDiameter(z1, 5), pitchDiameter(z2, 5), teeth * 5);
    close(c / 25.4, inches, 0.0101, `${z1}/${z2} × ${teeth} T (Gates p. ${page})`);
  }
});

test("belt: centre distance → belt length goes back to Gates' belt within the table's resolution", () => {
  for (const [z1, z2, teeth, inches, page] of GATES_5M) {
    const L = beltLength(pitchDiameter(z1, 5), pitchDiameter(z2, 5), inches * 25.4);
    // dL/dC ≤ 2, so 0.01 in of rounding in C is at most 0.51 mm of belt.
    close(L, teeth * 5, 0.51, `${z1}/${z2} × ${teeth} T (Gates p. ${page})`);
  }
});

test("belt: Gates' approximate centre-distance formula (Formula 8) stays within 0.1 mm of the exact one here", () => {
  // C = [K + √(K² − 32(D − d)²)] / 16, K = 4L − 6.28(D + d) — Gates calls it approximate.
  const D = pitchDiameter(45, 5);
  const d = pitchDiameter(20, 5);
  const L = 300;
  const K = 4 * L - 6.28 * (D + d);
  const approx = (K + Math.sqrt(K * K - 32 * (D - d) ** 2)) / 16;
  const exact = centerDistance(D, d, L);
  assert.ok(Math.abs(approx - exact) < 0.1, `${approx} vs ${exact}`);
  assert.ok(Math.abs(approx - exact) > 1e-4, "the approximation is not the exact solution");
});

test("belt: teeth in mesh agree with Gates' formula (0.5 − (D − d)/(6C))·Ng to within one tooth", () => {
  const z1 = 20;
  const z2 = 60;
  for (const c of [60, 100, 200]) {
    const D = pitchDiameter(z2, 2);
    const d = pitchDiameter(z1, 2);
    const gates = (0.5 - (D - d) / (6 * c)) * z1;
    const ours = (z1 * wrapAngleSmall(D, d, c)) / 360;
    assert.ok(Math.abs(gates - ours) < 0.2, `C=${c}: ${gates} vs ${ours}`);
  }
});

test("belt: impossible geometry returns null", () => {
  assert.equal(beltLength(40, 10, 10), null); // C ≤ (D − d)/2
  assert.equal(centerDistance(40, 10, 100), null); // shorter than π·D
});

test("belt: wrap angle and teeth in mesh", () => {
  const d = pitchDiameter(20, 2);
  close(wrapAngleSmall(d, d, 100), 180, 1e-9, "equal pulleys wrap 180°");
  assert.equal(teethInMesh(20, 180), 10);
  const r = solveDrive({ z1: 20, z2: 60, pitch: 2, center: 100, rpm: 600 });
  assert.equal(r.ratio, 3);
  assert.equal(r.outRpm, 200);
  close(r.beltSpeed, (20 * 2 * 600) / 60000, 1e-12, "belt speed m/s");
});

test("belt: nearest stock belts bracket the exact length", () => {
  const rows = nearestStockBelts({ z1: 20, z2: 20, pitch: 2, exactTeeth: 101.3, stockTeeth: [55, 79, 100, 101, 140, 150, 200], count: 2 });
  assert.deepEqual(rows.map((r) => r.teeth), [100, 101, 140, 150]);
  close(rows[0].center, (200 - 40) / 2, 1e-9, "C for 100 teeth");
});
