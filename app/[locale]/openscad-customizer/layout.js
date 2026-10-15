import { OpenScadPageChrome } from "../../components/openscad-page";
import { isSupportedLocale } from "../../lib/landing-page";
import { CUSTOMIZER_SLUG, getCustomizerCopy } from "../../lib/openscad-customizer";
import { scadAppUrl } from "../../lib/openscad-pages";

/** Its own header, like every OpenSCAD page (components/openscad-page.js). The button records click_openscad_customizer. */
export default async function OpenScadCustomizerLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return children;
  const t = getCustomizerCopy(locale);

  return (
    <OpenScadPageChrome
      locale={locale}
      slug={CUSTOMIZER_SLUG}
      toolName={t.toolName}
      cta={{ className: "js-scad-customizer-link", href: scadAppUrl(locale), label: t.openTool }}
      credit={t.credit}
    >
      {children}
    </OpenScadPageChrome>
  );
}
