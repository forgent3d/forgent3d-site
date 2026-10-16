import { getSiteHeaderHtml } from "../../lib/landing-page";
import { isGeneratorLocale, siteLocale } from "../../lib/generators";

/** One header for the homepage and every sub-page. `contents` keeps the wrapper out of layout, so the
 *  header stays `sticky` against the page rather than against a div exactly its own height. */
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      {/* Languages with only the generator pages translated (de, es, ja) get the English header, whose
          Generators link stays in their language. Every other page under them 404s, as before. */}
      {isGeneratorLocale(locale) ? (
        <div className="contents" dangerouslySetInnerHTML={{ __html: getSiteHeaderHtml(siteLocale(locale), locale) }} />
      ) : null}
      {children}
    </>
  );
}
