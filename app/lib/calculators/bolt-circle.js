// Bolt circle (pitch circle diameter, PCD) geometry. Pure functions — the calculator page and
// scripts/calculators.test.mjs import this file.
//
// Convention, the same as the flange generator's model.py (generator-models/bolt-circle-flange): angles in degrees,
// measured counter-clockwise from the +X axis (3 o'clock) seen from above; hole 1 sits at the start angle and the
// others follow counter-clockwise, equally spaced. A first hole at 12 o'clock is a start angle of 90°.

const DEG = Math.PI / 180;

/** Coordinates of N equally spaced holes on a circle of diameter `pcd` around (cx, cy). Values that are zero within
 *  floating-point noise come back as exactly 0 (cos 90° is 6e-17, not 0). */
export function boltCircle({ holes, pcd, start = 0, cx = 0, cy = 0 }) {
  const r = pcd / 2;
  const step = 360 / holes;
  const clean = (v) => (Math.abs(v) < 1e-9 ? 0 : v);
  return Array.from({ length: holes }, (_, i) => {
    const angle = (((start + i * step) % 360) + 360) % 360;
    return {
      n: i + 1,
      angle,
      x: clean(cx + r * Math.cos(angle * DEG)),
      y: clean(cy + r * Math.sin(angle * DEG)),
    };
  });
}

/** Straight-line distance between two holes `k` positions apart on the circle: PCD · sin(k · 180° / N).
 *  k = 1 is the pitch between neighbours, the number to check against the hole size. */
export function holeSpacing(pcd, holes, k = 1) {
  return pcd * Math.sin((k * 180 * DEG) / holes);
}

/** Plastic left between two neighbouring holes of diameter `holeD` (the ligament). Negative = the holes overlap. */
export function ligament(pcd, holes, holeD) {
  return holeSpacing(pcd, holes) - holeD;
}

/** The PCD that gives neighbouring holes a centre-to-centre `spacing`: the inverse of holeSpacing(…, 1). */
export function pcdFromSpacing(spacing, holes) {
  return spacing / Math.sin((180 * DEG) / holes);
}
