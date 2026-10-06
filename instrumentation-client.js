import posthog from "posthog-js";

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_TOKEN;

if (posthogToken) {
  posthog.init(posthogToken, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    defaults: "2026-01-30",
    autocapture: false,
    // 标准 $pageview(带 $referrer / utm,PostHog Web Analytics 读它):搜索进来看完就走的人只有它看得见,
    // CTA 点击只数到点了的人。history_change 让 App Router 客户端跳转也记一次。
    capture_pageview: "history_change",
    capture_performance: false,
    loaded: (client) => {
      window.posthog = client;
      window.dispatchEvent(new Event("posthog:ready"));
    },
  });
}
