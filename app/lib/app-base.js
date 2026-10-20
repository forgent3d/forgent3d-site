// The app's origin. NEXT_PUBLIC_APP_BASE points the pages at a local app (http://localhost:3000) for testing;
// production never sets it. Its own module so client components (the calculators) can read it without importing
// the whole generator catalog.
export const APP_BASE = process.env.NEXT_PUBLIC_APP_BASE || "https://app.forgent3d.com";

/** The app's interface language for a page language: the app has en and zh. */
export function appLanguage(locale) {
  return locale === "zh" ? "zh" : "en";
}
