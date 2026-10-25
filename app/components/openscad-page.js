import Link from "next/link";
import { BRAND_BUTTON, CHIP_SURFACE } from "../lib/landing-page";
import { SCAD_EXAMPLES, scadExampleUrl } from "../lib/openscad-to-step";
import { openscadPageLinks, openscadPagePath } from "../lib/openscad-pages";

/**
 * The parts the newer OpenSCAD landing pages (lib/openscad-pages.js) are built from. Same look as openscad-viewer:
 * a header of their own — whoever searched for a converter wants the tool, not the AI CAD agent's navigation — and
 * plain sections under it. Copy comes in from each page's module; nothing here holds words.
 */

/**
 * Brand (home), the page's tool name, the language switch and one button into the app. `cta.className` is the
 * page's js-* hook: public/script.js rewrites its href and records its click event.
 */
export function OpenScadPageChrome({ locale, slug, toolName, cta, credit, children }) {
  return (
    <>
      <header className="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
        <div className="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <a className="shrink-0" href={`/${locale}`} aria-label="Forgent3D">
              <img src="/logo-mark.png" alt="" className="h-7 w-7 object-contain" width="28" height="28" />
            </a>
            <span className="h-5 w-px shrink-0 bg-border" aria-hidden />
            <Link className="truncate text-sm font-semibold text-foreground" href={openscadPagePath(locale, slug)}>
              {toolName}
            </Link>
          </div>
          <div className="site-header-actions flex shrink-0 items-center gap-2">
            <button className={`js-lang-toggle ${CHIP_SURFACE} h-9 px-3 font-mono text-xs`} type="button" aria-label="Switch language">
              {locale === "zh" ? "EN" : "中"}
            </button>
            <a className={`${cta.className} ${BRAND_BUTTON} h-9`} href={cta.href}>
              {cta.label}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="mx-auto w-[min(960px,calc(100vw-32px))] border-t border-border/60 py-8 text-xs leading-5 text-muted-foreground">
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-brand" href={`/${locale}`}>{locale === "zh" ? "Forgent3D 首页" : "Forgent3D home"}</a>
          {openscadPageLinks(locale, slug).map((link) => (
            <Link key={link.href} className="transition-colors hover:text-brand" href={link.href}>{link.label}</Link>
          ))}
          <Link className="transition-colors hover:text-brand" href={`/${locale}/generators`}>{locale === "zh" ? "3D 打印生成器" : "3D print generators"}</Link>
        </div>
        <OpenScadCredit locale={locale} credit={credit} />
      </footer>
    </>
  );
}

/**
 * The footer's word on OpenSCAD: whose it is and its licence (the page's `credit`), openscad.org, and the app's
 * /licenses — the one place that names the exact fork commit we run and links its source (GPL), so the link here
 * never goes stale. Every OpenSCAD page's footer ends with this, including the two with layouts of their own.
 * `licences` is the link's label in a language beyond en / zh (the viewer's); the app page itself is en or zh.
 */
export function OpenScadCredit({ locale, credit, licences }) {
  return (
    <p className="mt-4 max-w-3xl text-muted-foreground/80">
      {credit}{" "}
      <a className="underline underline-offset-2 hover:text-brand" href="https://openscad.org" rel="noreferrer" target="_blank">
        openscad.org
      </a>
      {" · "}
      <a className="underline underline-offset-2 hover:text-brand" href={`https://app.forgent3d.com/licenses?lang=${locale === "zh" ? "zh" : "en"}`}>
        {licences ?? (locale === "zh" ? "我们运行的构建：许可证与源码" : "Licences and source of the build we run")}
      </a>
    </p>
  );
}

export function JsonLd({ schemas }) {
  return schemas.map((schema, index) => (
    <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  ));
}

/** h1, intro, the primary button into the app and an optional second, quieter link. */
export function OpenScadHero({ h1, intro, cta, secondary }) {
  return (
    <>
      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a className={`${cta.className} ${BRAND_BUTTON} min-h-[44px] px-6`} href={cta.href}>
          {cta.label} →
        </a>
        {secondary && (
          <a
            className={`${secondary.className} text-sm font-medium text-brand transition-colors hover:text-brand/80`}
            href={secondary.href}
            target="_blank"
            rel="noreferrer"
            data-example={secondary.example}
          >
            {secondary.label} →
          </a>
        )}
      </div>
    </>
  );
}

export function OpenScadSteps({ title, steps }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function OpenScadCards({ title, intro, cards }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <h3 className="font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * The app's built-in examples (openscad-to-step.js SCAD_EXAMPLES), each opening /scad?example=<name> already built.
 * `examples[name]` is this page's title / text / alt for it; .js-scad-example-link records click_scad_example.
 */
export function OpenScadExamples({ locale, title, intro, openLabel, examples, names = SCAD_EXAMPLES }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>
      <div className={`mt-6 grid gap-4 ${names.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {names.map((name) => {
          const example = examples[name];
          return (
            <a
              key={name}
              className="js-scad-example-link group overflow-hidden rounded-xl border border-border/80 bg-card transition-colors hover:border-brand/50"
              href={scadExampleUrl(locale, name)}
              target="_blank"
              rel="noreferrer"
              data-example={name}
            >
              <img className="block aspect-[4/3] w-full border-b border-border/60 object-cover" src={`/scad-examples/${name}.webp`} alt={example.alt} width={800} height={600} decoding="async" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-brand">{example.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{example.text}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{openLabel} →</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

/** `head` is the column titles (the first is the row-label column); each row is [label, left, right]. */
export function OpenScadTable({ title, intro, head, rows, mono = false }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80">
        <table className="w-full text-sm">
          <thead className="bg-card/60 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
            <tr>
              {head.map((cell, index) => (
                <th key={index} className="px-4 py-3 font-medium">{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-border/60">
                <th scope="row" className={`px-4 py-3 text-left font-medium text-foreground ${mono ? "font-mono text-xs sm:whitespace-nowrap" : ""}`}>{row[0]}</th>
                {row.slice(1).map((cell, index) => (
                  <td key={index} className={`px-4 py-3 ${index === row.length - 2 ? "text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function OpenScadFaq({ title, faqs }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <article key={faq.q}>
            <h3 className="font-semibold text-foreground">{faq.q}</h3>
            <p className="mt-1 max-w-3xl leading-7 text-muted-foreground">{faq.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OpenScadMore({ title, cards }) {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link key={card.href} className="group rounded-xl border border-border/80 bg-card/60 p-5 transition-colors hover:border-brand/50" href={card.href}>
            {card.kicker && <p className="mb-1 font-mono text-xs text-muted-foreground">{card.kicker}</p>}
            <h3 className="font-semibold text-foreground group-hover:text-brand">{card.title} →</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
