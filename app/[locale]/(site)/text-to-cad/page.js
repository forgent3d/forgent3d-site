import Link from "next/link";
import { notFound } from "next/navigation";
import { TEXT_TO_CAD_LOCALES, TEXT_TO_CAD_UPDATED, getTextToCadCopy } from "../../../lib/text-to-cad";
import { OG_BASE, SITE_URL } from "../../../lib/seo";

export function generateStaticParams() {
  return TEXT_TO_CAD_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!TEXT_TO_CAD_LOCALES.includes(locale)) return {};
  const copy = getTextToCadCopy(locale);
  const path = `/${locale}/text-to-cad`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: path, languages: { en: "/en/text-to-cad", zh: "/zh/text-to-cad", "x-default": "/en/text-to-cad" } },
    openGraph: { ...OG_BASE, title: copy.title, description: copy.description, locale: copy.ogLocale, type: "website", url: path },
  };
}

function schemas(copy, locale) {
  const url = `${SITE_URL}/${locale}/text-to-cad`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Forgent3D",
      url,
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      description: copy.description,
      featureList: copy.steps.map((s) => s.title),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: copy.pricing.join(" ") },
      dateModified: TEXT_TO_CAD_UPDATED,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}

const card = "rounded-2xl border border-border/80 bg-card/60 p-6";

export default async function TextToCadPage({ params }) {
  const { locale } = await params;
  if (!TEXT_TO_CAD_LOCALES.includes(locale)) notFound();
  const copy = getTextToCadCopy(locale);

  return (
    <main className="mx-auto w-[min(1000px,calc(100vw-32px))] py-16 text-foreground">
      {schemas(copy, locale).map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          className="js-try-link inline-flex justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90"
          href={copy.ctaHref}
          data-track="text-to-cad-start"
        >
          {copy.cta} →
        </a>
        <Link
          className="inline-flex justify-center rounded-md border border-border/80 px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/50"
          href={copy.secondaryHref}
          data-track="text-to-cad-generators"
        >
          {copy.secondaryCta}
        </Link>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{copy.ctaNote}</p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.stepsTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {copy.steps.map((step, i) => (
            <article key={step.title} className={card}>
              <p className="font-mono text-xs text-brand">0{i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.compareTitle}</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border/80">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                {copy.compareHead.map((head, i) => (
                  <th key={i} className={`px-4 py-3 ${i === 1 ? "text-foreground" : ""}`}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.compareRows.map((row) => (
                <tr key={row[0]} className="border-b border-border/60 last:border-b-0">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-foreground" : i === 1 ? "text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <div className={card}>
          <h2 className="text-xl font-semibold">{copy.goodTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
            {copy.good.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className={card}>
          <h2 className="text-xl font-semibold">{copy.notGoodTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
            {copy.notGood.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.examplesTitle}</h2>
        <p className="mt-2 text-muted-foreground">{copy.examplesNote}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {copy.examples.map((e) => (
            <li key={e.href}>
              <a className="block rounded-xl border border-border/80 bg-card/60 px-4 py-3 text-sm text-foreground transition-colors hover:border-brand/50 hover:text-brand" href={e.href} data-track="text-to-cad-example">
                {e.name} →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.pricingTitle}</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {copy.pricing.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="mt-4 inline-block text-sm text-brand hover:text-brand/80" href={`/${locale}/pricing`}>{copy.pricingLink} →</Link>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.otherTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {copy.other.map((o) => (
            <Link key={o.href} className={`${card} transition-colors hover:border-brand/50`} href={o.href}>
              <h3 className="font-semibold text-foreground">{o.title} →</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{o.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
        <div className="mt-5 space-y-5">
          {copy.faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-1 max-w-3xl text-muted-foreground">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16" id="ai">
        <h2 className="text-2xl font-semibold">{copy.aiTitle}</h2>
        <p className="mt-3 max-w-3xl break-words text-sm leading-6 text-muted-foreground">{copy.ai}</p>
      </section>
    </main>
  );
}
