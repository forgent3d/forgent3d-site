import { OpenScadPageChrome } from "../../components/openscad-page";
import { CHATGPT_SLUG, getChatgptCopy } from "../../lib/chatgpt-openscad";
import { isSupportedLocale } from "../../lib/landing-page";
import { scadAppUrl } from "../../lib/openscad-pages";

/** Its own header, like every OpenSCAD page (components/openscad-page.js). The button records click_chatgpt_openscad. */
export default async function ChatgptOpenScadLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return children;
  const t = getChatgptCopy(locale);

  return (
    <OpenScadPageChrome
      locale={locale}
      slug={CHATGPT_SLUG}
      toolName={t.toolName}
      cta={{ className: "js-scad-chatgpt-link", href: scadAppUrl(locale), label: t.openTool }}
      credit={t.credit}
    >
      {children}
    </OpenScadPageChrome>
  );
}
