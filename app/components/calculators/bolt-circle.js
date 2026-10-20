"use client";

import { boltCircle, holeSpacing, ligament } from "../../lib/calculators/bolt-circle";
import { FLANGE_GENERATOR, flangeLinkParams, suggestOuterD } from "../../lib/calculators/flange";
import { ISO_273, ISO_273_SIZES } from "../../lib/calculators/holes-data";
import { CopyButton, Handoff, NumberField, SelectField, Stat, fmt, plain, useQueryState } from "./ui";

const DEFAULTS = { n: 6, pcd: 100, start: 0, cx: 0, cy: 0, screw: "M6", fit: "medium", hole: 6.6, bore: 0 };
const KEYS = { n: "number", pcd: "number", start: "number", cx: "number", cy: "number", screw: "string", fit: "string", hole: "number", bore: "number" };
const FITS = ["fine", "medium", "coarse"];

/** The pattern to scale: the bolt circle dashed, every hole at its size and numbered, hole 1 marked, the angle
 *  measured from +X. The flange outline the hand-off would make is drawn faintly behind. */
function Drawing({ points, pcd, holeD, cx, cy, outerD, ui, locale }) {
  const R = Math.max(pcd / 2 + holeD, (outerD || 0) / 2) * 1.12;
  const font = R / 11;
  const stroke = R / 240;
  // SVG y runs down; the drawing is in the usual math frame (y up), so every y is negated.
  return (
    <svg viewBox={`${-R} ${-R} ${2 * R} ${2 * R}`} className="h-auto w-full" role="img" aria-label={ui.drawingLabel}>
      {outerD ? <circle cx={0} cy={0} r={outerD / 2} fill="hsl(220 16% 94%)" stroke="hsl(220 14% 80%)" strokeWidth={stroke} /> : null}
      <line x1={-R} y1={0} x2={R} y2={0} stroke="hsl(220 14% 80%)" strokeWidth={stroke} />
      <line x1={0} y1={-R} x2={0} y2={R} stroke="hsl(220 14% 80%)" strokeWidth={stroke} />
      <text x={R - font * 0.3} y={-font * 0.4} fontSize={font * 0.8} textAnchor="end" className="fill-muted-foreground font-mono">+X</text>
      <text x={font * 0.3} y={-R + font} fontSize={font * 0.8} className="fill-muted-foreground font-mono">+Y</text>
      <circle cx={0} cy={0} r={pcd / 2} fill="none" stroke="hsl(192 91% 34%)" strokeWidth={stroke * 1.5} strokeDasharray={`${stroke * 10} ${stroke * 6}`} />
      {points.map((p) => {
        // Rounded to 1e-4: Node (server render) and the browser can differ in the last bit of sin / cos, and an
        // SVG attribute that differs by 1e-15 is a hydration mismatch.
        const q = (v) => Math.round(v * 1e4) / 1e4;
        const x = q(p.x - cx);
        const y = q(-(p.y - cy));
        const lx = q(x * (1 + (holeD / 2 + font) / (pcd / 2)));
        const ly = q(y * (1 + (holeD / 2 + font) / (pcd / 2)) + font * 0.35);
        return (
          <g key={p.n}>
            <circle cx={x} cy={y} r={holeD / 2} fill={p.n === 1 ? "hsl(192 91% 34%)" : "white"} stroke="hsl(225 18% 12%)" strokeWidth={stroke * 1.5} />
            <text x={lx} y={ly} fontSize={font} textAnchor="middle" className="fill-foreground font-mono">{p.n}</text>
          </g>
        );
      })}
      <text x={-R + font * 0.3} y={R - font * 0.4} fontSize={font * 0.8} textAnchor="start" className="fill-muted-foreground font-mono">
        PCD {fmt(pcd, locale, 3)}
      </text>
    </svg>
  );
}

export function BoltCircleCalculator({ locale, ui }) {
  const [s, set] = useQueryState(DEFAULTS, KEYS);
  const n = Math.round(s.n);
  const custom = s.screw === "custom";
  const fit = FITS.includes(s.fit) ? s.fit : "medium";
  const holeD = custom ? s.hole : ISO_273[s.screw]?.[fit] ?? s.hole;
  const points = boltCircle({ holes: n, pcd: s.pcd, start: s.start, cx: s.cx, cy: s.cy });
  const spacing = holeSpacing(s.pcd, n);
  const web = ligament(s.pcd, n, holeD);
  const across = n % 2 === 0 ? s.pcd : holeSpacing(s.pcd, n, Math.floor(n / 2));
  const outerD = suggestOuterD(s.pcd, holeD);
  const f = (v, d = 3) => fmt(v, locale, d);

  const tsv = () =>
    [[ui.colHole, ui.colAngle, "X", "Y"].join("\t"), ...points.map((p) => [p.n, plain(p.angle, 4), plain(p.x), plain(p.y)].join("\t"))].join("\n");

  const handoff = flangeLinkParams({ holes: n, pcd: s.pcd, start: s.start, screw: custom ? null : s.screw, fit, outerD, boreD: s.bore });
  const links = [
    {
      label: ui.handoffFlange,
      href: `/${locale}/generators/${FLANGE_GENERATOR.slug}?${new URLSearchParams(handoff.params)}#use-here`,
      target: FLANGE_GENERATOR.slug,
      note: handoff.notes.map((key) => ui[key]).filter(Boolean).join(" "),
      // A numeric value in the page's own decimal format ("52,4" on a German page); a range or a screw name as is.
      blocked: handoff.blocked
        ? ui[handoff.blocked.key].replace("{v}", Number.isFinite(Number(handoff.blocked.value)) ? f(Number(handoff.blocked.value), 1) : handoff.blocked.value)
        : null,
    },
  ];

  return (
    <div className="rounded-2xl border border-border/80 bg-card/40 p-5 md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField id="bc-n" label={ui.holes} value={s.n} onChange={set("n")} min={2} max={360} step={1} />
        <NumberField id="bc-pcd" label={ui.pcd} value={s.pcd} onChange={set("pcd")} min={0.1} max={100000} unit="mm" />
        <NumberField id="bc-start" label={ui.start} value={s.start} onChange={set("start")} min={-360} max={360} unit="°" hint={ui.startHint} />
        <SelectField
          id="bc-screw"
          label={ui.screw}
          value={s.screw}
          onChange={set("screw")}
          options={[...ISO_273_SIZES.map((size) => ({ value: size, label: size })), { value: "custom", label: ui.customHole }]}
        />
        {custom ? (
          <NumberField id="bc-hole" label={ui.holeD} value={s.hole} onChange={set("hole")} min={0.1} max={1000} unit="mm" />
        ) : (
          <SelectField id="bc-fit" label={ui.fit} value={fit} onChange={set("fit")} options={FITS.map((v) => ({ value: v, label: `${ui[`fit_${v}`]} — Ø${f(ISO_273[s.screw]?.[v], 2)}` }))} hint={ui.fitHint} />
        )}
        <NumberField id="bc-cx" label={ui.cx} value={s.cx} onChange={set("cx")} unit="mm" />
        <NumberField id="bc-cy" label={ui.cy} value={s.cy} onChange={set("cy")} unit="mm" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label={ui.angleStep} value={`${f(360 / n, 4)}°`} />
        <Stat label={ui.spacing} value={`${f(spacing)} mm`} note={ui.spacingNote} />
        <Stat label={ui.across} value={`${f(across)} mm`} note={n % 2 === 0 ? ui.acrossEven : ui.acrossOdd} />
        <Stat label={ui.ligament} value={`${f(web, 2)} mm`} note={web < holeD * 0.5 ? ui.ligamentWarn : ui.ligamentNote.replace("{d}", f(holeD, 2))} warn={web < holeD * 0.5} />
      </div>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-border/80 bg-card p-3">
          <Drawing points={points} pcd={s.pcd} holeD={holeD} cx={s.cx} cy={s.cy} outerD={outerD} ui={ui} locale={locale} />
        </div>
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-foreground">{ui.tableTitle}</h3>
            <CopyButton text={tsv} label={ui.copy} done={ui.copied} track={{ calculator: "bolt-circle" }} />
          </div>
          <div className="mt-3 max-h-[420px] overflow-auto rounded-xl border border-border/80">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="sticky top-0 bg-card">
                <tr className="border-b border-border/80 text-xs text-muted-foreground">
                  <th className="px-3 py-2 font-medium">{ui.colHole}</th>
                  <th className="px-3 py-2 font-medium">{ui.colAngle}</th>
                  <th className="px-3 py-2 font-medium">X</th>
                  <th className="px-3 py-2 font-medium">Y</th>
                </tr>
              </thead>
              <tbody>
                {points.map((p) => (
                  <tr key={p.n} className="border-b border-border/60 font-mono last:border-b-0">
                    <td className="px-3 py-1.5 text-foreground">{p.n}</td>
                    <td className="px-3 py-1.5 text-muted-foreground">{f(p.angle, 4)}°</td>
                    <td className="px-3 py-1.5 text-foreground">{f(p.x)}</td>
                    <td className="px-3 py-1.5 text-foreground">{f(p.y)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{ui.tableNote}</p>
        </div>
      </div>

      <Handoff title={ui.handoffTitle} body={ui.handoffBody.replace("{od}", f(outerD, 1))} links={links} calculator="bolt-circle">
        <div className="max-w-xs">
          <NumberField id="bc-bore" label={ui.bore} value={s.bore} onChange={set("bore")} min={0} max={220} unit="mm" hint={ui.boreHint} />
        </div>
      </Handoff>
    </div>
  );
}
