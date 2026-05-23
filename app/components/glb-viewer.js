"use client";

import { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

/**
 * Lightweight GLB preview via @google/model-viewer (bundled from npm).
 */
export function GlbViewer({
  src,
  poster,
  alt = "3D model",
  className = "",
  fullscreen = false,
  loadingLabel = "Loading model…",
  errorLabel = "Failed to load model",
}) {
  const viewerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src) return;

    setLoading(true);
    setProgress(0);
    setFailed(false);

    const el = viewerRef.current;
    if (!el) return;

    const onLoad = () => {
      setLoading(false);
      setProgress(100);
    };

    const onProgress = (event) => {
      const total = event.detail?.totalProgress ?? 0;
      setProgress(Math.min(100, Math.round(total * 100)));
      if (total >= 1) setLoading(false);
    };

    const onError = () => {
      setLoading(false);
      setFailed(true);
    };

    el.addEventListener("load", onLoad);
    el.addEventListener("progress", onProgress);
    el.addEventListener("error", onError);

    if (el.loaded) {
      onLoad();
    }

    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("progress", onProgress);
      el.removeEventListener("error", onError);
    };
  }, [src]);

  if (!src) return null;

  const shellClass = fullscreen
    ? `relative h-full w-full bg-[#050b14] ${className}`
    : `relative overflow-hidden rounded-[1.75rem] border border-line bg-[#050b14] shadow-panel backdrop-blur-xl ${className}`;

  const viewerHeight = fullscreen ? "100%" : "min(70vh, 520px)";

  return (
    <div className={shellClass}>
      {loading && !failed && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050b14]/92 backdrop-blur-sm"
          aria-live="polite"
          aria-busy="true"
        >
          <div
            className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-cyanx"
            aria-hidden
          />
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
            {loadingLabel}
          </p>
          <div className="mt-4 h-1 w-36 overflow-hidden rounded-full bg-line/40">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyanx to-violetx transition-[width] duration-200"
              style={{ width: `${Math.max(progress, 8)}%` }}
            />
          </div>
        </div>
      )}

      {failed && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050b14]/92 px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">
            {errorLabel}
          </p>
        </div>
      )}

      {/* @ts-expect-error model-viewer web component */}
      <model-viewer
        ref={viewerRef}
        src={src}
        poster={poster || undefined}
        alt={alt}
        camera-controls
        touch-action="pan-y"
        auto-rotate
        shadow-intensity="0.85"
        exposure="1"
        environment-image="neutral"
        interaction-prompt="auto"
        style={{
          width: "100%",
          height: viewerHeight,
          "--poster-color": "#050b14",
        }}
      />
    </div>
  );
}
