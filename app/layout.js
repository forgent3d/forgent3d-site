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
        <meta name="theme-color" content="#050b14" />
        <meta property="og:title" content="Forgent3D" />
        <meta
          property="og:description"
          content="Generate editable CAD in the cloud without any setup, or install the skill and let Claude Code, Codex, or Cursor build the model for you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void font-display text-slate-100 antialiased">
        {children}
        <script src="/site-links.js"></script>
        <script src="/script.js"></script>
      </body>
    </html>
  );
}
