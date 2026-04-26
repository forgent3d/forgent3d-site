export const metadata = {
  metadataBase: new URL("https://www.forgent3d.com"),
  title: "Forgent3D",
  description:
    "AI CAD preview and verification for coding agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Forgent3D, coding agent, AI CAD, build123d, CadQuery, MCP, 3D preview"
        />
        <meta name="theme-color" content="#050b14" />
        <meta property="og:title" content="Forgent3D" />
        <meta
          property="og:description"
          content="From prompt to parametric CAD with verifiable geometry for coding agents."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `tailwind.config={theme:{extend:{fontFamily:{display:["Space Grotesk","Avenir Next","Segoe UI","sans-serif"],mono:["IBM Plex Mono","SFMono-Regular","monospace"]},colors:{void:"#050b14",panel:"rgba(8, 18, 32, 0.72)",line:"rgba(117, 220, 255, 0.18)",cyanx:"#75dcff",violetx:"#9b7cff",signal:"#62f7b0"},boxShadow:{glow:"0 0 80px rgba(117, 220, 255, 0.18)",panel:"0 30px 90px rgba(0, 0, 0, 0.42)"}}}};`,
          }}
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="bg-void font-display text-slate-100 antialiased">
        {children}
        <script src="/site-links.js"></script>
        <script src="/script.js"></script>
      </body>
    </html>
  );
}
