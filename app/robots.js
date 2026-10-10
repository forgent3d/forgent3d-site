// 全站放开抓取。AI 助手的爬虫单独点名:它们各有自己的 UA,一些站点默认拦,这里明确写 allow 是说
// 「openscad-to-step 那页写给 AI 看的链接格式,就是要被你们读到」。以后若给某条路径加 disallow,别顺手把这些一起拦了。
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "DuckAssistBot",
  "meta-externalagent",
  "Amazonbot",
  "cohere-ai",
  "CCBot",
];

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: "https://www.forgent3d.com/sitemap.xml",
    host: "https://www.forgent3d.com",
  };
}
