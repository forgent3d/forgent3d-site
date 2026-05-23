"use client";

import { useState } from "react";

/**
 * Fullscreen model info panel: always visible on md+, collapsible on mobile.
 */
export function ModelOverlayPanel({ showLabel, hideLabel, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto absolute left-3 top-3 z-30 flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-line bg-slate-950/90 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-cyanx shadow-panel backdrop-blur-xl transition hover:border-cyanx/40 md:hidden"
        aria-expanded={open}
        aria-controls="model-info-panel"
      >
        {open ? (
          <>
            <span aria-hidden className="text-base leading-none">
              ×
            </span>
            <span>{hideLabel}</span>
          </>
        ) : (
          <>
            <span aria-hidden className="text-base leading-none">
              ⓘ
            </span>
            <span>{showLabel}</span>
          </>
        )}
      </button>

      {open && (
        <button
          type="button"
          className="pointer-events-auto absolute inset-0 z-10 bg-black/45 md:hidden"
          onClick={() => setOpen(false)}
          aria-label={hideLabel}
        />
      )}

      <aside
        id="model-info-panel"
        className={`absolute left-3 right-3 top-16 z-20 max-md:transition-all max-md:duration-300 md:left-4 md:right-auto md:top-4 md:max-w-[min(360px,38vw)] ${
          open
            ? "max-md:translate-y-0 max-md:opacity-100"
            : "max-md:pointer-events-none max-md:-translate-y-3 max-md:opacity-0"
        } md:translate-y-0 md:opacity-100`}
      >
        <div className="pointer-events-auto flex max-h-[min(60dvh,calc(100dvh-5.5rem))] flex-col overflow-y-auto rounded-2xl border border-line bg-slate-950/88 p-5 shadow-panel backdrop-blur-xl md:max-h-[min(72dvh,calc(100dvh-5rem))]">
          {children}
        </div>
      </aside>
    </div>
  );
}
