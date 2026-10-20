"use client";

import { centerDistance, nearestStockBelts, pitchDiameter, solveDrive } from "../../lib/calculators/belt";
import { GT2_PLD, GT2_STOCK_TEETH, PULLEY_GENERATOR } from "../../lib/calculators/belt-data";
import { CopyButton, Handoff, NumberField, SelectField, Stat, fmt, plain, useQueryState } from "./ui";

const DEFAULTS = { pitch: "2", z1: 20, z2: 40, mode: "center", c: 150, belt: 200, rpm: 600 };
const KEYS = { pitch: "string", z1: "number", z2: "number", mode: "string", c: "number", belt: "number", rpm: "number" };

/** Two pulleys and the belt round them, to scale, the driver on the left. */
function Drawing({ d1, d2, center, od1, od2, ui }) {
  const r1 = d1 / 2;
  const r2 = d2 / 2;
  const left = -r1 - 6;
  const right = center + r2 + 6;
  const h = Math.max(r1, r2) + 8;
  const w = right - left;
  // Tangent points of the open belt: the spans make angle φ with the line of centres.
  const phi = Math.asin((r2 - r1) / center);
  const nx = -Math.sin(phi);
  const ny = Math.cos(phi);
  // Rounded to 1e-4: the server (Node) and the browser can differ in the last bit of sin / cos, which would be a
  // hydration mismatch on the path attribute.
  const q = (v) => Math.round(v * 1e4) / 1e4;
  const t1 = [q(r1 * nx), q(r1 * ny)];
  const t2 = [q(center + r2 * nx), q(r2 * ny)];
  const b1 = [q(r1 * nx), q(-r1 * ny)];
  const b2 = [q(center + r2 * nx), q(-r2 * ny)];
  const stroke = Math.max(w, 2 * h) / 300;
  return (
    <svg viewBox={`${left} ${-h} ${w} ${2 * h}`} className="h-auto w-full" role="img" aria-label={ui.drawingLabel}>
      <line x1={0} y1={0} x2={center} y2={0} stroke="currentColor" className="text-muted-foreground" strokeWidth={stroke} strokeDasharray={`${stroke * 4} ${stroke * 3}`} />
      <circle cx={0} cy={0} r={od1 / 2} fill="hsl(220 16% 94%)" stroke="currentColor" className="text-muted-foreground" strokeWidth={stroke} />
      <circle cx={center} cy={0} r={od2 / 2} fill="hsl(220 16% 94%)" stroke="currentColor" className="text-muted-foreground" strokeWidth={stroke} />
      <circle cx={0} cy={0} r={stroke * 2} fill="currentColor" className="text-foreground" />
      <circle cx={center} cy={0} r={stroke * 2} fill="currentColor" className="text-foreground" />
      {/* the belt's pitch line: two spans and the two arcs (large arc on the bigger wrap) */}
      <path
        d={`M ${t1[0]} ${t1[1]} L ${t2[0]} ${t2[1]} A ${r2} ${r2} 0 ${r2 >= r1 ? 1 : 0} 0 ${b2[0]} ${b2[1]} L ${b1[0]} ${b1[1]} A ${r1} ${r1} 0 ${r1 > r2 ? 1 : 0} 0 ${t1[0]} ${t1[1]}`}
        fill="none"
        stroke="hsl(192 91% 34%)"
        strokeWidth={stroke * 2.2}
      />
      <text x={center / 2} y={-stroke * 4} fontSize={Math.max(w, 2 * h) / 34} textAnchor="middle" className="fill-foreground font-mono">
        C
      </text>
    </svg>
  );
}

export function BeltCalculator({ locale, ui }) {
  const [s, set] = useQueryState(DEFAULTS, KEYS);
  const pitch = Number(s.pitch) === 3 ? 3 : 2;
  const pld = GT2_PLD[pitch];
  const d1 = pitchDiameter(s.z1, pitch);
  const d2 = pitchDiameter(s.z2, pitch);
  const od1 = d1 - 2 * pld;
  const od2 = d2 - 2 * pld;
  // In "belt" mode the visitor has a closed belt of `belt` mm and wants the centre distance it sets.
  const center = s.mode === "belt" ? centerDistance(d1, d2, s.belt) : s.c;
  const drive = center != null ? solveDrive({ z1: s.z1, z2: s.z2, pitch, center, rpm: s.rpm }) : null;
  const stock = drive && pitch === 2 ? nearestStockBelts({ z1: s.z1, z2: s.z2, pitch, exactTeeth: drive.teeth, stockTeeth: GT2_STOCK_TEETH, count: 2 }) : [];
  // The generator's flanges are OD + 5 across: closer than that, the two pulleys collide.
  const minCenter = (od1 + od2) / 2 + PULLEY_GENERATOR.flangeOver;
  const tooClose = center != null && center < minCenter;
  const belt = s.mode === "belt" ? s.belt : null;
  const beltTeethOk = belt == null || Math.abs(belt / pitch - Math.round(belt / pitch)) < 1e-9;
  const n = (v, d = 3) => fmt(v, locale, d);

  const pulleyLink = (z) => {
    const params = new URLSearchParams({ TEETH: String(z) });
    if (pitch === 3) params.set("PROFILE", "GT2 3 mm");
    const inRange = z >= PULLEY_GENERATOR.minTeeth && z <= PULLEY_GENERATOR.maxTeeth;
    return {
      label: ui.handoffPulley.replace("{z}", String(z)),
      href: `/${locale}/generators/${PULLEY_GENERATOR.slug}?${params}#use-here`,
      target: PULLEY_GENERATOR.slug,
      note: ui.handoffPulleyNote.replace("{od}", n(z * pitch / Math.PI - 2 * pld, 2)),
      blocked: inRange ? null : ui.handoffOutOfRange.replace("{min}", PULLEY_GENERATOR.minTeeth).replace("{max}", PULLEY_GENERATOR.maxTeeth),
    };
  };
  const links = s.z1 === s.z2 ? [pulleyLink(s.z1)] : [pulleyLink(s.z1), pulleyLink(s.z2)];

  const tsv = () =>
    [
      [ui.colQuantity, ui.colValue].join("\t"),
      [ui.pitchDiameters, `${plain(d1)} / ${plain(d2)}`].join("\t"),
      [ui.centerDistance, center != null ? plain(center) : ""].join("\t"),
      [ui.beltLength, drive ? plain(drive.length) : ""].join("\t"),
      [ui.beltTeeth, drive ? plain(drive.teeth, 3) : ""].join("\t"),
      ...stock.map((row) => [`${ui.stockBelt} ${row.length} mm (${row.teeth})`, plain(row.center)].join("\t")),
    ].join("\n");

  return (
    <div className="rounded-2xl border border-border/80 bg-card/40 p-5 md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField id="belt-pitch" label={ui.pitch} value={String(pitch)} onChange={set("pitch")} options={[{ value: "2", label: "GT2 2 mm" }, { value: "3", label: "GT2 3 mm" }]} />
        <NumberField id="belt-z1" label={ui.z1} value={s.z1} onChange={set("z1")} min={8} max={400} step={1} hint={ui.teethHint} />
        <NumberField id="belt-z2" label={ui.z2} value={s.z2} onChange={set("z2")} min={8} max={400} step={1} hint={ui.teethHint} />
        <NumberField id="belt-rpm" label={ui.rpm} value={s.rpm} onChange={set("rpm")} min={0} max={100000} unit="rpm" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="radiogroup" aria-label={ui.modeLabel}>
        {[
          ["center", ui.modeCenter],
          ["belt", ui.modeBelt],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={s.mode === value}
            onClick={() => set("mode")(value)}
            className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${s.mode === value ? "border-brand bg-brand text-white" : "border-border text-muted-foreground hover:border-brand/50"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {s.mode === "belt" ? (
          <NumberField id="belt-length" label={ui.beltInput} value={s.belt} onChange={set("belt")} min={20} max={20000} unit="mm" hint={beltTeethOk ? ui.beltInputHint.replace("{teeth}", n(s.belt / pitch, 2)) : ui.beltNotWhole.replace("{p}", String(pitch))} />
        ) : (
          <NumberField id="belt-c" label={ui.centerInput} value={s.c} onChange={set("c")} min={1} max={10000} unit="mm" />
        )}
      </div>

      {drive ? (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {s.mode === "belt" ? (
              <Stat label={ui.centerDistance} value={`${n(center)} mm`} note={ui.exactNote} />
            ) : (
              <Stat label={ui.beltLength} value={`${n(drive.length)} mm`} note={ui.approxNote.replace("{v}", n(drive.approx))} />
            )}
            <Stat label={ui.beltTeeth} value={n(drive.teeth, 2)} note={s.mode === "belt" ? null : ui.wholeTeethNote} />
            <Stat label={ui.ratio} value={`1 : ${n(drive.ratio, 4)}`} note={drive.outRpm != null ? ui.outRpm.replace("{rpm}", n(drive.outRpm, 1)) : null} />
            <Stat
              label={ui.teethInMesh}
              value={String(drive.teethInMesh)}
              note={drive.teethInMesh < 6 ? ui.meshWarn : ui.wrap.replace("{deg}", n(drive.wrapSmall, 1))}
              warn={drive.teethInMesh < 6}
            />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label={ui.pitchDiameters} value={`${n(d1)} / ${n(d2)}`} note={ui.odNote.replace("{a}", n(od1, 2)).replace("{b}", n(od2, 2))} />
            <Stat label={ui.beltSpeed} value={drive.beltSpeed != null ? `${n(drive.beltSpeed, 2)} m/s` : "—"} />
            {tooClose ? <Stat label={ui.clearance} value={`${n(center, 1)} < ${n(minCenter, 1)} mm`} note={ui.tooClose} warn /> : null}
          </div>

          <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-border/80 bg-card p-3">
              <Drawing d1={d1} d2={d2} center={center} od1={od1} od2={od2} ui={ui} />
            </div>
            {pitch === 2 ? (
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-foreground">{ui.stockTitle}</h3>
                  <CopyButton text={tsv} label={ui.copy} done={ui.copied} track={{ calculator: "belt" }} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{ui.stockIntro}</p>
                <div className="mt-3 overflow-x-auto rounded-xl border border-border/80">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                        <th className="px-3 py-2 font-medium">{ui.colBelt}</th>
                        <th className="px-3 py-2 font-medium">{ui.colTeeth}</th>
                        <th className="px-3 py-2 font-medium">{ui.colCenter}</th>
                        <th className="px-3 py-2 font-medium">{ui.colChange}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stock.map((row) => (
                        <tr key={row.teeth} className="border-b border-border/60 font-mono last:border-b-0">
                          <td className="px-3 py-2 text-foreground">{row.length} mm</td>
                          <td className="px-3 py-2 text-muted-foreground">{row.teeth}</td>
                          <td className="px-3 py-2 text-foreground">{n(row.center, 2)}</td>
                          <td className="px-3 py-2 text-muted-foreground">{row.center - center >= 0 ? "+" : ""}{n(row.center - center, 2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">{ui.noStock3}</p>
            )}
          </div>
        </>
      ) : (
        <p className="mt-6 text-sm text-red-600">{s.mode === "belt" ? ui.beltTooShort.replace("{min}", n(Math.PI * Math.max(d1, d2), 1)) : ui.centerTooShort}</p>
      )}

      <Handoff title={ui.handoffTitle} body={ui.handoffBody} links={links} calculator="belt" />
    </div>
  );
}
