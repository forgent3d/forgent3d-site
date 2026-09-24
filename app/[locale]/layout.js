import { getSiteHeaderHtml, isSupportedLocale } from "../lib/landing-page";

/** One header for the homepage and every sub-page. `contents` keeps the wrapper out of layout, so the
 *  header stays `sticky` against the page rather than against a div exactly its own height. */
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  return (
    <>
      {isSupportedLocale(locale) ? (
        <div className="contents" dangerouslySetInnerHTML={{ __html: getSiteHeaderHtml(locale) }} />
      ) : null}
      {children}
    </>
  );
}
