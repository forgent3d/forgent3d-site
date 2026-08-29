import Script from "next/script";

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.forgent3d.com"),
  title: "Forgent3D",
  description:
    "Cloud AI CAD agent for editable 3D models, plus a skill that brings it to Claude Code, Codex, and Cursor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Forgent3D, AI CAD, agent skills, Claude Code, Codex, Cursor, build123d, parametric CAD, 3D preview"
        />
        <meta name="theme-color" content="#f9fafb" />
        <meta property="og:title" content="Forgent3D" />
        <meta
          property="og:description"
          content="Generate editable CAD in the cloud without any setup, or install the skill and let Claude Code, Codex, or Cursor build the model for you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:locale" content="en_US" />
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
        {/* next/script(afterInteractive)代替裸 <script>:注水后按顺序注入,
            site-links.js 先挂上 window.FORGENT_LINKS,script.js 再读。 */}
        <Script src="/site-links.js" strategy="afterInteractive" />
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
