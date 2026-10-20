"use client";

import { useEffect, useRef, useState } from "react";

/** A number for display: at most `digits` decimals, trailing zeros dropped, the page language's decimal mark. */
export function fmt(value, locale, digits = 3) {
  if (value == null || !Number.isFinite(value)) return "—";
  const tag = { zh: "zh-CN", de: "de-DE", ja: "ja-JP" }[locale] || "en-US";
  return new Intl.NumberFormat(tag, { maximumFractionDigits: digits, useGrouping: false }).format(value);
}

/** The same number for a copied table or a link: a plain decimal point, whatever the page language. */
export function plain(value, digits = 4) {
  return String(Math.round(value * 10 ** digits) / 10 ** digits);
}

/** Parse what a visitor typed: a decimal comma counts as a point ("12,5"). NaN when it is not a number. */
export function parseNumber(text) {
  const n = Number(String(text).trim().replace(",", "."));
  return String(text).trim() === "" ? NaN : n;
}

/**
 * A number input that keeps what the visitor is typing (an empty field, "12,") while reporting only valid numbers
 * upward. `min`/`max` bound what counts as valid; outside them the field shows its hint in red.
 */
export function NumberField({ id, label, value, onChange, min, max, step = "any", unit, hint }) {
  const [text, setText] = useState(String(value));
  const last = useRef(value);
  useEffect(() => {
    // A change from outside (a preset, the URL) replaces the text; the visitor's own typing does not loop back.
    if (value !== last.current) {
      last.current = value;
      setText(String(value));
    }
  }, [value]);
  const n = parseNumber(text);
  const bad = !Number.isFinite(n) || (min != null && n < min) || (max != null && n > max);
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-foreground">{label}</span>
      <span className="mt-1 flex items-center gap-2">
        <input
          id={id}
          inputMode="decimal"
          className={`w-full min-w-0 rounded-md border bg-card px-3 py-2 font-mono text-sm text-foreground outline-none focus:border-brand ${bad ? "border-red-500" : "border-border"}`}
          value={text}
          step={step}
          onChange={(e) => {
            setText(e.target.value);
            const v = parseNumber(e.target.value);
            if (Number.isFinite(v) && (min == null || v >= min) && (max == null || v <= max)) {
              last.current = v;
              onChange(v);
            }
          }}
        />
        {unit ? <span className="shrink-0 font-mono text-xs text-muted-foreground">{unit}</span> : null}
      </span>
      {hint ? <span className={`mt-1 block text-xs ${bad ? "text-red-600" : "text-muted-foreground"}`}>{hint}</span> : null}
    </label>
  );
}

export function SelectField({ id, label, value, onChange, options, hint }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-sm font-medium text-foreground">{label}</span>
      <select
        id={id}
        className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-brand"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {hint ? <span className="mt-1 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

/** Copies `text()` to the clipboard; the label turns into `done` for a moment. */
export function CopyButton({ text, label, done, track }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-border/80 px-3 py-1.5 font-mono text-xs text-brand transition-colors hover:border-brand/50"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text());
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
          if (track) window.posthog?.capture?.("calculator_copy", track);
        } catch {
          // No clipboard (insecure context, denied): the table is on screen to select by hand.
        }
      }}
    >
      {copied ? done : label}
    </button>
  );
}

/** One result: a label and a value, big. */
export function Stat({ label, value, note, warn }) {
  return (
    <div className="rounded-xl border border-border/80 bg-card/60 p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className={`mt-1 font-mono text-xl font-semibold ${warn ? "text-red-600" : "text-foreground"}`}>{value}</div>
      {note ? <div className={`mt-1 text-xs ${warn ? "text-red-600" : "text-muted-foreground"}`}>{note}</div> : null}
    </div>
  );
}

/**
 * The hand-off: where the numbers become a part. Each link opens a generator (its landing page, which embeds the
 * tool and opens it on these values) or a catalog component in the app. A link whose values the generator would
 * refuse is shown with the reason instead.
 */
export function Handoff({ title, body, links, calculator, children }) {
  return (
    <div className="mt-8 rounded-2xl border border-brand/40 bg-card p-5 md:p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {body ? <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{body}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) =>
          link.blocked ? (
            <p key={link.label} className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{link.label}</span> — {link.blocked}
            </p>
          ) : (
            <div key={link.label} className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                className="inline-flex rounded-md bg-brand px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white! transition-colors hover:bg-brand/90"
                href={link.href}
                onClick={() => window.posthog?.capture?.("calculator_handoff", { calculator, target: link.target, href: link.href })}
              >
                {link.label} →
              </a>
              {link.note ? <span className="text-xs text-muted-foreground">{link.note}</span> : null}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/** Read the page's query once (a shared link carries the inputs) and keep it in step with the inputs after that. */
export function useQueryState(defaults, keys) {
  const [state, setState] = useState(defaults);
  const ready = useRef(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const next = { ...defaults };
    for (const [key, kind] of Object.entries(keys)) {
      const raw = q.get(key);
      if (raw == null) continue;
      if (kind === "number") {
        const n = parseNumber(raw);
        if (Number.isFinite(n)) next[key] = n;
      } else {
        next[key] = raw;
      }
    }
    setState(next);
    ready.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!ready.current) return;
    const url = new URL(window.location.href);
    for (const key of Object.keys(keys)) {
      if (state[key] === defaults[key]) url.searchParams.delete(key);
      else url.searchParams.set(key, String(state[key]));
    }
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  const set = (key) => (value) => setState((s) => ({ ...s, [key]: value }));
  return [state, set];
}
