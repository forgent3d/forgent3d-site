import Script from "next/script";

import { PageEnhancer } from "../components/page-enhancer";
import { OG_BASE, SITE_URL } from "../lib/seo";

import "../globals.css";

const DEFAULT_DESCRIPTION =
  "Cloud AI CAD agent for editable 3D models, plus a skill that brings it to Claude Code, Codex, and Cursor.";

// og 标签只走 metadata(这里 + 各页 generateMetadata),不在 <head> 里手写 <meta>:手写的那几条排在页面
// 自己的前面,只取第一个 og:title 的抓取端(X、Slack、微信)上,每个子页分享出去都叫 "Forgent3D"。
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Forgent3D",
  description: DEFAULT_DESCRIPTION,
  openGraph: { ...OG_BASE, type: "website", title: "Forgent3D", description: DEFAULT_DESCRIPTION },
  twitter: { card: "summary_large_image" },
};

/**
 * 根布局放在 [locale] 下,<html lang> 才能跟着语言走:放在 app/ 顶层时拿不到 locale,zh 页一直标成 en
 * (Bing、浏览器翻译条和读屏都看这个)。只负责跳转的 "/" 在 app/(root) 有自己的最小根布局。
 */
export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Forgent3D, AI CAD, agent skills, Claude Code, Codex, Cursor, build123d, parametric CAD, 3D preview"
        />
        <meta name="theme-color" content="#f9fafb" />
        {/* 产品和官网共用同一枚 logo-mark.png(来自 forgent3d-platform/packages/cloud/public)。
            官网原来用的是另一版带描边底板的图标,和产品头部对不上。 */}
        <link rel="icon" type="image/png" href="/logo-mark.png" />
        <link rel="apple-touch-icon" href="/logo-mark.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        <PageEnhancer />
        {/* next/script(afterInteractive)代替裸 <script>:注水后按顺序注入,
            site-links.js 先挂上 window.FORGENT_LINKS,script.js 再读。 */}
        <Script src="/site-links.js" strategy="afterInteractive" />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
