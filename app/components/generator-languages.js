import Link from "next/link";
import { LOCALE_NAMES } from "../lib/generators";

/** The same page in every language it exists in (`locales`), each named in its own language; the current one
 *  is not a link. The header's toggle only knows en ↔ zh. */
export function GeneratorLanguages({ locale, locales, path, className = "" }) {
  return (
    <nav
      aria-label="Language"
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground ${className}`}
    >
      {locales.map((l) =>
        l === locale ? (
          <span key={l} lang={l} aria-current="page" className="text-foreground">
            {LOCALE_NAMES[l]}
          </span>
        ) : (
          <Link key={l} lang={l} hrefLang={l} href={`/${l}${path}`} className="transition-colors hover:text-brand">
            {LOCALE_NAMES[l]}
          </Link>
        ),
      )}
    </nav>
  );
}
