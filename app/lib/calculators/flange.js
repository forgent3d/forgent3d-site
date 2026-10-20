// The bolt-circle flange generator the bolt circle and clearance-hole calculators hand off to: its slug, its knob
// ranges and the refusal rules of its model.py (platform generator-models/bolt-circle-flange), so a link is only
// offered when the generator will build it — otherwise the page says why, in the same terms as the generator.

import { ISO_273 } from "./holes-data.js";

export const FLANGE_GENERATOR = {
  slug: "bolt-circle-flange-generator",
  modelDir: "bolt-circle-flange",
  screws: ["M2", "M2.5", "M3", "M4", "M5", "M6", "M8", "M10", "M12", "M16"],
  holes: [2, 12],
  pcd: [10, 230],
  outerMax: 250,
  allowance: 0.2, // the generator's HOLE_ALLOWANCE default
  defaultPcd: 65, // its PCD and BORE_D defaults (an IEC FT65 plate)
  defaultBore: 50,
};

/** Recommended outside diameter for a bolt circle: hole centre 1.5 × the hole from the rim (ACRYLITE's rule for
 *  plastic sheet; AISC's minimum for steel is the same 1.5 d), rounded up to 0.5 mm. The generator itself only
 *  insists on 1.0 × (half a hole of plastic outside the hole) and grows a smaller plate to that. */
export function suggestOuterD(pcd, holeD) {
  return Math.ceil((pcd + 3 * holeD) * 2) / 2;
}

/**
 * The generator link's parameters for a bolt circle, or why the generator cannot make it. `notes` are copy keys the
 * widget shows under the link; `blocked` = { key, value } names the copy key of the refusal.
 */
export function flangeLinkParams({ holes, pcd, start, screw, fit = "medium", outerD, boreD = 0 }) {
  const params = {
    PCD: String(Math.round(pcd * 100) / 100),
    HOLES: String(holes),
    START_ANGLE: String(Math.round((((start % 360) + 360) % 360) * 1000) / 1000),
    BORE_D: String(Math.round(boreD * 100) / 100),
  };
  const notes = [];
  if (holes < FLANGE_GENERATOR.holes[0] || holes > FLANGE_GENERATOR.holes[1]) return { params, notes, blocked: { key: "blockedHoles", value: FLANGE_GENERATOR.holes[1] } };
  if (pcd < FLANGE_GENERATOR.pcd[0] || pcd > FLANGE_GENERATOR.pcd[1]) return { params, notes, blocked: { key: "blockedPcd", value: `${FLANGE_GENERATOR.pcd[0]}–${FLANGE_GENERATOR.pcd[1]}` } };
  let hole;
  if (screw && FLANGE_GENERATOR.screws.includes(screw)) {
    params.SCREW = screw;
    params.FIT = fit;
    hole = ISO_273[screw][fit] + FLANGE_GENERATOR.allowance;
  } else {
    // A custom hole or a size the generator does not offer: the generator keeps its default screw, the visitor picks.
    notes.push("noteCustomHole");
    hole = null;
  }
  if (hole != null) {
    const pitch = pcd * Math.sin(Math.PI / holes);
    if (holes > 1 && pitch < Math.max(2.2 * hole, 1.5 * hole)) return { params, notes, blocked: { key: "blockedTooClose", value: screw } };
    if (boreD > 0 && pcd / 2 - boreD / 2 < hole) return { params, notes, blocked: { key: "blockedBore", value: String(Math.floor((pcd - 2 * hole - 0.05) * 10) / 10) } };
    if (pcd + 2 * hole > FLANGE_GENERATOR.outerMax) return { params, notes, blocked: { key: "blockedBed", value: FLANGE_GENERATOR.outerMax } };
  }
  if (outerD) params.OUTER_D = String(Math.min(outerD, FLANGE_GENERATOR.outerMax));
  return { params, notes, blocked: null };
}
