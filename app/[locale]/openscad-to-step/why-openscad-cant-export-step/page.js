import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND_BUTTON, isSupportedLocale } from "../../../lib/landing-page";
import { getScadCopy, scadAppUrl, scadBreadcrumbSchema, scadMetadata, scadPath } from "../../../lib/openscad-to-step";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return scadMetadata(locale, "why");
}

export default async function WhyOpenScadCantExportStepPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getScadCopy(locale);
  const t = copy.why;

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scadBreadcrumbSchema(locale, "why")) }} />

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.meshTitle}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{t.meshText}</p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.workaroundsTitle}</h2>
        <div className="mt-6 space-y-4">
          {t.workarounds.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <dl className="mt-4 grid gap-3 text-sm leading-6 sm:grid-cols-[6rem_1fr]">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/80 sm:pt-1">{t.howLabel}</dt>
                <dd className="text-muted-foreground">{item.how}</dd>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/80 sm:pt-1">{t.catchLabel}</dt>
                <dd className="text-muted-foreground">{item.catch}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6">
        <h2 className="text-2xl font-semibold">{t.oursTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.oursText}</p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a className={`js-scad-link ${BRAND_BUTTON} min-h-[44px] px-6`} href={scadAppUrl(locale)}>
            {copy.shared.openConverter} →
          </a>
          <Link className="text-sm text-brand transition-colors hover:text-brand/80" href={scadPath(locale, "compat")}>
            {t.oursCompat} →
          </Link>
        </div>
      </section>
    </main>
  );
}
