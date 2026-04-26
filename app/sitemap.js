const base = "https://www.forgent3d.com";

export default function sitemap() {
  return [
    { url: `${base}/en`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/zh`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/en/ai-3d-model-generation`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/zh/ai-3d-model-generation`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/en/code-to-parametric-cad`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/zh/code-to-parametric-cad`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
