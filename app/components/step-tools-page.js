import Link from "next/link";
import { BRAND_BUTTON } from "../lib/landing-page";
import { LOCALE_NAMES, STEP_TOOL_LOCALES, stepToolLinks, stepToolPath } from "../lib/step-tools";

/**
 * The STEP ↔ STL pages' own header and footer (lib/step-tools.js), the look of the OpenSCAD pages
 * (components/openscad-page.js — their section components are reused as they are; they hold no words): whoever
 * searched for a converter wants the tool, not the AI CAD agent's navigation. Four languages, so the language
 * control is the list of them, each in its own language (the site's en ↔ zh toggle knows two).
 */
export function StepToolChrome({ locale, slug, copy, cta, children }) {
  const links = stepToolLinks(locale);
  return (
    <>
      <header className="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
        <div className="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <a className="shrink-0" href={links.home} aria-label="Forgent3D">
              <img src="/logo-mark.png" alt="" className="h-7 w-7 object-contain" width="28" height="28" />
            </a>
            <span className="h-5 w-px shrink-0 bg-border" aria-hidden />
            <Link className="truncate text-sm font-semibold text-foreground" href={stepToolPath(locale, slug)}>
              {copy.toolName}
            </Link>
          </div>
          <div className="site-header-actions flex shrink-0 items-center gap-2">
            <a className={`${cta.className} ${BRAND_BUTTON} h-9`} href={cta.href}>
              {cta.label}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="mx-auto w-[min(960px,calc(100vw-32px))] border-t border-border/60 py-8 text-xs leading-5 text-muted-foreground">
        <nav aria-label="Language" className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono">
          {STEP_TOOL_LOCALES.map((l) =>
            l === locale ? (
              <span key={l} lang={l} aria-current="page" className="text-foreground">
                {LOCALE_NAMES[l]}
              </span>
            ) : (
              <Link key={l} lang={l} hrefLang={l} href={stepToolPath(l, slug)} className="transition-colors hover:text-brand">
                {LOCALE_NAMES[l]}
              </Link>
            ),
          )}
        </nav>
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-brand" href={links.home}>
            {copy.footer.home}
          </a>
          <Link className="transition-colors hover:text-brand" href={slug === "step-to-stl" ? links.stlToStep : links.stepToStl}>
            {slug === "step-to-stl" ? copy.footer.stlToStep : copy.footer.stepToStl}
          </Link>
          <Link className="transition-colors hover:text-brand" href={links.openscadToStep}>
            {copy.footer.openscadToStep}
          </Link>
          <Link className="transition-colors hover:text-brand" href={links.generators}>
            {copy.footer.generators}
          </Link>
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground/80">
          {copy.footer.credit}{" "}
          <a className="underline underline-offset-2 hover:text-brand" href="https://dev.opencascade.org" rel="noreferrer" target="_blank">
            Open CASCADE Technology
          </a>
          {" · "}
          <a className="underline underline-offset-2 hover:text-brand" href={`https://app.forgent3d.com/licenses?lang=${locale === "zh" ? "zh" : "en"}`}>
            {copy.footer.licences}
          </a>
        </p>
      </footer>
    </>
  );
}

/** Measured facts: a short lead, then each number with what it counts. The page's own evidence, not a claim. */
export function StepToolFacts({ title, intro, facts, note }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{intro}</p>}
      <dl className={`mt-6 grid gap-4 sm:grid-cols-2 ${facts.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-2xl border border-border/80 bg-card/60 p-5">
            <dt className="text-sm text-muted-foreground">{fact.label}</dt>
            <dd className="mt-1 font-mono text-2xl font-semibold text-foreground">{fact.value}</dd>
            {fact.detail && <dd className="mt-2 text-sm leading-6 text-muted-foreground">{fact.detail}</dd>}
          </div>
        ))}
      </dl>
      {note && <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{note}</p>}
    </section>
  );
}
