"use client";

import { useCallback, useEffect, useState } from "react";

/** Query keys owned by the page; every other key may be a knob value of the generator (the app decides). */
const PAGE_KEYS = new Set(["lang", "view", "embed", "intent"]);
const isPageKey = (key) => PAGE_KEYS.has(key.toLowerCase()) || key.toLowerCase().startsWith("utm_");

function knobEntries(search) {
  return [...new URLSearchParams(search).entries()].filter(([key]) => !isPageKey(key));
}

/**
 * The generator itself, on its landing page: the app's /g/<modelDir> in an iframe (embed mode — the app
 * opens remix, sign-in and AI edit in a tab of their own, see cloud components/catalog/catalog-model-view.tsx).
 *
 * Until the visitor asks for it, it is a still (the generator's thumbnail) with one button: the CAD engine
 * behind it is a ~20 MB download, and most people who land here read first. A link that already carries
 * knob values (`?MODULE=2&TEETH=30`, the deep link an AI assistant hands out) is a request for that very
 * part, so it opens at once, with those values passed through.
 *
 * While it is open, every tuning in the generator is posted back (`forgent3d:generator-params`) and the
 * page's own URL follows, so the address bar always links to the part on screen.
 */
export function GeneratorEmbed({ appBase, modelDir, slug, locale, appLanguage, name, labels }) {
  const [src, setSrc] = useState(null);

  const open = useCallback(
    (how) => {
      const url = new URL(`/g/${encodeURIComponent(modelDir)}`, appBase);
      url.searchParams.set("embed", "1");
      url.searchParams.set("lang", appLanguage);
      for (const [key, value] of knobEntries(window.location.search)) url.searchParams.set(key, value);
      setSrc(url.toString());
      window.posthog?.capture?.("generator_embed_open", { generator: slug, how, locale });
    },
    [appBase, modelDir, slug, locale, appLanguage],
  );

  useEffect(() => {
    if (knobEntries(window.location.search).length) open("deeplink");
  }, [open]);

  useEffect(() => {
    if (!src) return undefined;
    const appOrigin = new URL(appBase).origin;
    const onMessage = (event) => {
      if (event.origin !== appOrigin) return;
      const data = event.data;
      if (!data || data.type !== "forgent3d:generator-params" || data.generator !== modelDir) return;
      const url = new URL(window.location.href);
      for (const key of [...url.searchParams.keys()]) if (!isPageKey(key)) url.searchParams.delete(key);
      for (const [key, value] of Object.entries(data.params || {})) url.searchParams.set(key, String(value));
      if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [src, appBase, modelDir]);

  if (src) {
    return (
      <iframe
        src={src}
        title={name}
        allow="clipboard-write"
        className="block h-[min(78vh,720px)] w-full rounded-xl border border-border/80 bg-card"
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/80 bg-card/60">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${appBase}/g/${encodeURIComponent(modelDir)}/thumb`}
        alt={name}
        loading="lazy"
        decoding="async"
        className="mx-auto block h-[min(52vh,420px)] w-full object-contain p-6"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-4 pb-6 pt-16 text-center">
        <button
          type="button"
          onClick={() => open("click")}
          className="inline-flex rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand/90"
        >
          {labels.load}
        </button>
        <p className="text-xs text-muted-foreground">{labels.note}</p>
      </div>
    </div>
  );
}
