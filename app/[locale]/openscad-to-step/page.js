import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND_BUTTON, isSupportedLocale } from "../../lib/landing-page";
import { getScadCopy, scadAppUrl, scadBreadcrumbSchema, scadMetadata, scadPath } from "../../lib/openscad-to-step";
import { SITE_URL } from "../../lib/seo";
import { BrepTube, MeshTube } from "./tube-figure";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return scadMetadata(locale, "home");
}

export default async function OpenScadToStepPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getScadCopy(locale);
  const t = copy.home;

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.shared.toolName,
    url: `${SITE_URL}${scadPath(locale)}`,
    description: t.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scadBreadcrumbSchema(locale, "home")) }} />

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
      <a className={`js-scad-link ${BRAND_BUTTON} mt-8 min-h-[44px] px-6`} href={scadAppUrl(locale)}>
        {t.cta} →
      </a>
      <p className="mt-5 text-sm text-muted-foreground">
        {t.corpus}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={scadPath(locale, "compat")}>
          {t.corpusLink} →
        </Link>
      </p>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">{t.compareTitle}</h2>
        <figure className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <MeshTube label={t.meshAlt} />
              <p className="mt-5 font-semibold text-foreground">{t.meshLabel}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{t.meshStat}</p>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-card/60 p-6">
              <BrepTube label={t.brepAlt} />
              <p className="mt-5 font-semibold text-foreground">{t.brepLabel}</p>
              <p className="mt-1 font-mono text-xs text-brand">{t.brepStat}</p>
            </div>
          </div>
          <figcaption className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">{t.compareCaption}</figcaption>
        </figure>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-6 space-y-6">
          {t.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 max-w-3xl leading-7 text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-lg font-semibold">{t.moreTitle}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { page: "why", title: copy.why.h1, text: t.moreWhy },
            { page: "compat", title: copy.compat.h1, text: t.moreCompat },
          ].map((card) => (
            <Link
              key={card.page}
              className="group rounded-xl border border-border/80 bg-card/60 p-5 transition-colors hover:border-brand/50"
              href={scadPath(locale, card.page)}
            >
              <h3 className="font-semibold text-foreground group-hover:text-brand">{card.title} →</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
