export const SITE_URL = "https://www.forgent3d.com";

/**
 * Spread into every page's `openGraph`. Next merges metadata per top-level key: a page that sets
 * `openGraph` replaces the layout's whole object, so a card image left only in the layout is dropped
 * on every page that has its own title. PNG, not SVG — X, Facebook and LinkedIn don't render SVG cards.
 */
export const OG_BASE = {
  siteName: "Forgent3D",
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Forgent3D" }],
};
