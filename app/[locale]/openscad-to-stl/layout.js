import { OpenScadPageChrome } from "../../components/openscad-page";
import { isSupportedLocale } from "../../lib/landing-page";
import { scadAppUrl } from "../../lib/openscad-pages";
import { STL_SLUG, getStlCopy } from "../../lib/openscad-to-stl";

/** Its own header, like every OpenSCAD page (components/openscad-page.js). The button records click_openscad_to_stl. */
export default async function OpenScadToStlLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return children;
  const t = getStlCopy(locale);

  return (
    <OpenScadPageChrome
      locale={locale}
      slug={STL_SLUG}
      toolName={t.toolName}
      cta={{ className: "js-scad-stl-link", href: scadAppUrl(locale), label: t.openTool }}
      credit={t.credit}
    >
      {children}
    </OpenScadPageChrome>
  );
}
