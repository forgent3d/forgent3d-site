"use client";

import { APP_BASE, appLanguage } from "../../lib/app-base";
import { FLANGE_GENERATOR } from "../../lib/calculators/flange";
import { HEAT_SET_BOSS, INSERTS, INSERT_VENDORS, ISO_273, ISO_273_SIZES, PRINT_ALLOWANCE } from "../../lib/calculators/holes-data";
import { CopyButton, Handoff, NumberField, SelectField, fmt, plain, useQueryState } from "./ui";

const DEFAULTS = { screw: "M3", allow: PRINT_ALLOWANCE };
const KEYS = { screw: "string", allow: "number" };
const SERIES = [
  ["fine", "H12"],
  ["medium", "H13"],
  ["coarse", "H14"],
];
// Generators whose screw choice the hand-off can set, with the screws they offer (their model.py SCREW choices).
const COUPLING = { slug: "shaft-coupling-generator", screws: ["M2.5", "M3", "M4"] };
const PILLOW = { slug: "pillow-block-bearing-holder-generator", screws: ["M3", "M4", "M5", "M6"] };

export function HoleCalculator({ locale, ui }) {
  const [s, set] = useQueryState(DEFAULTS, KEYS);
  const screw = ISO_273[s.screw] ? s.screw : "M3";
  const iso = ISO_273[screw];
  const inserts = INSERTS.filter((r) => r.screw === screw);
  const f = (v, d = 2) => fmt(v, locale, d);

  const tsv = () =>
    [
      [ui.colSeries, "ISO 273", ui.colPrinted].join("\t"),
      ...SERIES.map(([k, h]) => [`${ui[`fit_${k}`]} (${h})`, plain(iso[k], 2), plain(iso[k] + s.allow, 2)].join("\t")),
      "",
      [ui.colVendor, ui.colLength, ui.colOd, ui.colHole, ui.colDepth, ui.colWall].join("\t"),
      ...inserts.map((r) => [`${INSERT_VENDORS[r.vendor].name} ${ui[`variant_${r.variant}`] || r.variant}`, r.L, r.od ?? "", `${r.max ? "≤ " : ""}${r.hole}`, r.depth ?? "", r.wall ?? ""].join("\t")),
    ].join("\n");

  const links = [];
  if (HEAT_SET_BOSS.screws.includes(screw)) {
    const lang = appLanguage(locale);
    links.push({
      label: ui.handoffBoss.replace("{s}", screw),
      href: `${APP_BASE}/c/${HEAT_SET_BOSS.dir}?SCREW=${encodeURIComponent(screw)}&LENGTH=standard&lang=${lang}`,
      target: HEAT_SET_BOSS.dir,
      note: ui.handoffBossNote,
    });
    if (HEAT_SET_BOSS.short.includes(screw)) {
      links.push({
        label: ui.handoffBossShort.replace("{s}", screw),
        href: `${APP_BASE}/c/${HEAT_SET_BOSS.dir}?SCREW=${encodeURIComponent(screw)}&LENGTH=short&lang=${lang}`,
        target: HEAT_SET_BOSS.dir,
      });
    }
  }
  if (FLANGE_GENERATOR.screws.includes(screw)) {
    const allow = Math.min(0.6, Math.max(0, s.allow));
    // The generator's default plate (65 mm bolt circle, Ø50 bore) leaves room for holes up to M6; larger holes get the
    // largest bore that still keeps half a hole of plastic to them (the generator's own rule).
    const hole = iso.medium + allow;
    const bore = Math.min(FLANGE_GENERATOR.defaultBore, Math.floor((FLANGE_GENERATOR.defaultPcd - 2 * hole - 0.05) * 10) / 10);
    links.push({
      label: ui.handoffFlange.replace("{s}", screw),
      href: `/${locale}/generators/${FLANGE_GENERATOR.slug}?SCREW=${encodeURIComponent(screw)}&FIT=medium&HOLE_ALLOWANCE=${allow}${bore < FLANGE_GENERATOR.defaultBore ? `&BORE_D=${bore}` : ""}#use-here`,
      target: FLANGE_GENERATOR.slug,
      note: ui.handoffFlangeNote.replace("{d}", f(iso.medium + allow)),
    });
  }
  if (COUPLING.screws.includes(screw)) {
    links.push({ label: ui.handoffCoupling.replace("{s}", screw), href: `/${locale}/generators/${COUPLING.slug}?SCREW=${encodeURIComponent(screw)}#use-here`, target: COUPLING.slug });
  }
  if (PILLOW.screws.includes(screw)) {
    links.push({ label: ui.handoffPillow.replace("{s}", screw), href: `/${locale}/generators/${PILLOW.slug}?SCREW=${encodeURIComponent(screw)}#use-here`, target: PILLOW.slug });
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card/40 p-5 md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectField id="h-screw" label={ui.screw} value={screw} onChange={set("screw")} options={ISO_273_SIZES.map((v) => ({ value: v, label: v }))} />
        <NumberField id="h-allow" label={ui.allowance} value={s.allow} onChange={set("allow")} min={0} max={1} unit="mm" hint={ui.allowanceHint} />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-foreground">{ui.clearanceTitle.replace("{s}", screw)}</h3>
        <CopyButton text={tsv} label={ui.copy} done={ui.copied} track={{ calculator: "holes" }} />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {SERIES.map(([k, h]) => (
          <div key={k} className={`rounded-xl border p-4 ${k === "medium" ? "border-brand/50 bg-card" : "border-border/80 bg-card/60"}`}>
            <div className="text-xs text-muted-foreground">{ui[`fit_${k}`]} · {h}</div>
            <div className="mt-1 font-mono text-2xl font-semibold text-foreground">Ø{f(iso[k])}</div>
            <div className="mt-1 text-xs text-muted-foreground">{ui.printed.replace("{d}", f(iso[k] + s.allow))}</div>
            <div className="mt-2 text-xs text-muted-foreground">{ui[`fitUse_${k}`]}</div>
          </div>
        ))}
      </div>

      <h3 className="mt-8 font-semibold text-foreground">{ui.insertTitle.replace("{s}", screw)}</h3>
      {inserts.length ? (
        <>
          <div className="mt-3 overflow-x-auto rounded-xl border border-border/80">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                  <th className="px-3 py-2 font-medium">{ui.colVendor}</th>
                  <th className="px-3 py-2 font-medium">{ui.colLength}</th>
                  <th className="px-3 py-2 font-medium">{ui.colOd}</th>
                  <th className="px-3 py-2 font-medium">{ui.colHole}</th>
                  <th className="px-3 py-2 font-medium">{ui.colDepth}</th>
                  <th className="px-3 py-2 font-medium">{ui.colWall}</th>
                </tr>
              </thead>
              <tbody>
                {inserts.map((r) => (
                  <tr key={`${r.vendor}-${r.variant}`} className="border-b border-border/60 last:border-b-0">
                    <td className="px-3 py-2 text-foreground">
                      <a className="hover:text-brand hover:underline" href={INSERT_VENDORS[r.vendor].url} rel="nofollow noopener" target="_blank">{INSERT_VENDORS[r.vendor].name}</a>
                      <span className="text-muted-foreground"> · {ui[`variant_${r.variant}`] || r.variant}</span>
                    </td>
                    <td className="px-3 py-2 font-mono text-muted-foreground">{f(r.L)}</td>
                    <td className="px-3 py-2 font-mono text-muted-foreground">{r.od != null ? f(r.od) : "—"}</td>
                    <td className="px-3 py-2 font-mono font-semibold text-foreground">{r.max ? "≤ " : ""}Ø{f(r.hole)}</td>
                    <td className="px-3 py-2 font-mono text-muted-foreground">{r.depth != null ? `≥ ${f(r.depth)}` : "—"}</td>
                    <td className="px-3 py-2 font-mono text-muted-foreground">{r.wall != null ? f(r.wall) : ui.pemWall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">{ui.insertNote}</p>
        </>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">{ui.noInserts}</p>
      )}

      <Handoff title={ui.handoffTitle} body={ui.handoffBody} links={links.length ? links : [{ label: ui.handoffNone, blocked: ui.handoffNoneWhy }]} calculator="holes" />
    </div>
  );
}
