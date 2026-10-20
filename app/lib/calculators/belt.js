// Two-pulley open belt drive: the exact geometry, both ways. Pure functions, no DOM — the calculator page and
// scripts/calculators.test.mjs both import this file.
//
// Every length is a PITCH length (along the belt's tension members), every diameter a PITCH diameter: that is how
// belts are sold (a "GT2 200 mm" closed belt has 100 teeth at 2 mm) and how the manufacturers' design manuals write
// the formulas (Gates, SDP/SI — sources on the page and in docs/generator-seo-research.md §5.0 B3).

/** Pitch diameter of a timing pulley: the circumference at the pitch line is teeth × pitch. */
export function pitchDiameter(teeth, pitch) {
  return (teeth * pitch) / Math.PI;
}

/**
 * Exact pitch length of an open belt around two pulleys of pitch diameters D ≥ d at centre distance C:
 *   L = 2·C·cos φ + π·(D + d)/2 + φ·(D − d),  φ = asin((D − d) / (2·C))
 * φ is the angle the straight spans make with the line of centres; the large pulley is wrapped π + 2φ and the
 * small one π − 2φ. Null when C cannot carry a belt at all (C ≤ (D − d)/2).
 */
export function beltLength(d1, d2, center) {
  const D = Math.max(d1, d2);
  const d = Math.min(d1, d2);
  const s = (D - d) / (2 * center);
  if (!(center > 0) || s >= 1) return null;
  const phi = Math.asin(s);
  return 2 * center * Math.cos(phi) + (Math.PI * (D + d)) / 2 + phi * (D - d);
}

/** The common approximation, L ≈ 2C + π(D + d)/2 + (D − d)²/(4C): shown beside the exact value for comparison. */
export function beltLengthApprox(d1, d2, center) {
  return 2 * center + (Math.PI * (d1 + d2)) / 2 + (d1 - d2) ** 2 / (4 * center);
}

/**
 * Exact centre distance for a belt of pitch length L: the inverse of beltLength, solved numerically. L grows
 * strictly with C (dL/dC = 2·cos φ > 0), so bisection on [(D − d)/2, L/2] always converges; 200 halvings take the
 * bracket below 1e-12 mm. Null when the belt is too short to go round both pulleys.
 */
export function centerDistance(d1, d2, length) {
  const D = Math.max(d1, d2);
  const d = Math.min(d1, d2);
  let lo = (D - d) / 2;
  // At the lower bound the spans are tangent-to-tangent with φ = 90°: L = π·D (the belt wraps the large pulley only).
  const minLength = Math.PI * D;
  if (!(length > minLength)) return null;
  let hi = length / 2;
  for (let i = 0; i < 200 && hi - lo > 1e-12; i += 1) {
    const mid = (lo + hi) / 2;
    if (beltLength(D, d, mid) < length) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/** Angle of wrap on the small pulley, degrees: 180 − 2φ. */
export function wrapAngleSmall(d1, d2, center) {
  const D = Math.max(d1, d2);
  const d = Math.min(d1, d2);
  return 180 - (2 * Math.asin((D - d) / (2 * center)) * 180) / Math.PI;
}

/** Teeth in mesh on the small pulley: its tooth count times the share of its circumference the belt wraps,
 *  rounded down (a tooth only counts when it is fully engaged). */
export function teethInMesh(smallTeeth, wrapDeg) {
  return Math.floor((smallTeeth * wrapDeg) / 360 + 1e-9);
}

/**
 * The whole drive from the calculator's inputs.
 * `z1` drives (the motor pulley), `z2` is driven; `rpm` is the speed of the driver.
 */
export function solveDrive({ z1, z2, pitch, center, rpm }) {
  const d1 = pitchDiameter(z1, pitch);
  const d2 = pitchDiameter(z2, pitch);
  const length = beltLength(d1, d2, center);
  if (length == null) return null;
  const smallTeeth = Math.min(z1, z2);
  const wrap = wrapAngleSmall(d1, d2, center);
  return {
    d1,
    d2,
    length,
    approx: beltLengthApprox(d1, d2, center),
    teeth: length / pitch,
    ratio: z2 / z1,
    wrapSmall: wrap,
    teethInMesh: teethInMesh(smallTeeth, wrap),
    outRpm: rpm > 0 ? (rpm * z1) / z2 : null,
    beltSpeed: rpm > 0 ? (z1 * pitch * rpm) / 60000 : null, // m/s: one turn moves z1 · pitch mm of belt
  };
}

/** Closed belts are whole numbers of teeth: the stock belt lengths (in teeth) nearest to `exactTeeth`, each with the
 *  exact centre distance it gives. `stockTeeth` is the list of tooth counts actually sold. */
export function nearestStockBelts({ z1, z2, pitch, exactTeeth, stockTeeth, count = 2 }) {
  const d1 = pitchDiameter(z1, pitch);
  const d2 = pitchDiameter(z2, pitch);
  const sorted = [...stockTeeth].sort((a, b) => a - b);
  const below = sorted.filter((t) => t <= exactTeeth + 1e-9).slice(-count);
  const above = sorted.filter((t) => t > exactTeeth + 1e-9).slice(0, count);
  return [...below, ...above]
    .map((teeth) => ({ teeth, length: teeth * pitch, center: centerDistance(d1, d2, teeth * pitch) }))
    .filter((row) => row.center != null);
}
