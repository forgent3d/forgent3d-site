const DEFAULT_AGENT_URL = "https://agent.forgent3d.com";

export function getCadAgentApiUrl() {
  return (process.env.CAD_AGENT_API_URL || DEFAULT_AGENT_URL).replace(/\/+$/, "");
}

export async function fetchPublishedModels({ limit = 24, offset = 0 } = {}) {
  const base = getCadAgentApiUrl();
  const res = await fetch(`${base}/api/published-models?limit=${limit}&offset=${offset}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function fetchPublishedModel(shareSlug) {
  const base = getCadAgentApiUrl();
  const res = await fetch(`${base}/api/published-models/${encodeURIComponent(shareSlug)}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) return null;
  return res.json();
}

export const KIND_LABELS = {
  en: {
    part: "Part",
    assembly: "Assembly",
    mjcf: "MJCF Assembly",
  },
  zh: {
    part: "零件",
    assembly: "装配体",
    mjcf: "MJCF 装配",
  },
};

export function kindLabel(kind, locale = "en") {
  const labels = KIND_LABELS[locale] || KIND_LABELS.en;
  return labels[kind] || kind;
}

/** Candidate GLB URLs (API glbUrl, glbKey, or same folder as preview.png → model.glb). */
export function glbUrlCandidates(model) {
  if (!model) return [];
  const seen = new Set();
  const out = [];
  const push = (url) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    out.push(url);
  };

  push(model.glbUrl);
  if (model.glbKey) {
    const key = String(model.glbKey).replace(/^\/+/, "");
    push(`${getCadAgentApiUrl()}/api/s3/${key}`);
  }
  if (model.previewUrl) {
    const derived = model.previewUrl.replace(
      /\/preview\.(png|webp|jpe?g)(\?.*)?$/i,
      "/model.glb$2",
    );
    if (derived !== model.previewUrl) push(derived);
  }
  return out;
}

/** First reachable GLB URL, or null if none exist yet. */
export async function resolveGlbUrl(model) {
  for (const url of glbUrlCandidates(model)) {
    try {
      const res = await fetch(url, { method: "HEAD", cache: "no-store" });
      if (res.ok) return url;
    } catch {
      /* try next candidate */
    }
  }
  return null;
}

/** Params shown in the UI (hide internal __viewer keys). */
export function manifestDisplayParams(manifest) {
  const params = manifest?.params;
  if (!params || typeof params !== "object") return null;
  const entries = Object.entries(params).filter(([key]) => !key.startsWith("__"));
  return entries.length > 0 ? Object.fromEntries(entries) : null;
}

export function formatPublishedAt(value, locale = "en") {
  if (!value) return null;
  try {
    return new Date(value).toLocaleString(locale === "zh" ? "zh-CN" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}
