import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../../lib/landing-page";
import {
  GENERATORS,
  generatorAppUrl,
  generatorsSharedCopy,
  getGenerator,
} from "../../../lib/generators";

export function generateStaticParams() {
  return ["en", "zh"].flatMap((locale) =>
    GENERATORS.map((g) => ({ locale, slug: g.slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!isSupportedLocale(locale)) return {};
  const generator = getGenerator(slug);
  if (!generator) return {};

  const copy = generator.copy[locale];
  const path = `/${locale}/generators/${slug}`;
  return {
    title: copy.title,
    description: copy.description,
    keywords: generator.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: {
        en: `/en/generators/${slug}`,
        zh: `/zh/generators/${slug}`,
        "x-default": `/en/generators/${slug}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      url: path,
    },
  };
}

export default async function GeneratorLandingPage({ params }) {
  const { locale, slug } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const generator = getGenerator(slug);
  if (!generator) notFound();

  const copy = generator.copy[locale];
  const t = generatorsSharedCopy(locale);
  const appUrl = generatorAppUrl(generator, locale);
  const related = GENERATORS.filter((g) => g.slug !== slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.name,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: copy.description,
    url: `https://www.forgent3d.com/${locale}/generators/${slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `https://www.forgent3d.com/${locale}` },
      { "@type": "ListItem", position: 2, name: t.catalogH1, item: `https://www.forgent3d.com/${locale}/generators` },
      { "@type": "ListItem", position: 3, name: copy.name, item: `https://www.forgent3d.com/${locale}/generators/${slug}` },
    ],
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="flex items-center gap-2 font-mono text-xs text-slate-400" aria-label="Breadcrumb">
        <Link className="transition hover:text-cyanx" href={`/${locale}`}>{t.breadcrumbHome}</Link>
        <span aria-hidden>/</span>
        <Link className="transition hover:text-cyanx" href={`/${locale}/generators`}>{t.catalogH1}</Link>
        <span aria-hidden>/</span>
        <span className="text-slate-200">{copy.name}</span>
      </nav>

      <h1 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          className="inline-flex rounded-full bg-cyanx px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 transition hover:brightness-110"
          href={appUrl}
          data-track="generator-open"
          data-generator={generator.slug}
        >
          {t.openApp} →
        </a>
        <a
          className="inline-flex rounded-full border border-line px-6 py-3 font-mono text-sm uppercase tracking-[0.12em] text-cyanx transition hover:border-cyanx/50"
          href={appUrl}
          data-track="generator-remix"
          data-generator={generator.slug}
        >
          {t.remixApp}
        </a>
      </div>

      <ul className="mt-10 space-y-3 text-slate-200">
        {copy.whyPoints.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.paramsTitle}</h2>
        <p className="mt-2 max-w-3xl text-slate-300">{t.paramsIntro}</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-slate-950/60 font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                <th className="px-4 py-3">{t.thParam}</th>
                <th className="px-4 py-3">{t.thDefault}</th>
                <th className="px-4 py-3">{t.thRange}</th>
                <th className="px-4 py-3">{t.thDesc}</th>
              </tr>
            </thead>
            <tbody>
              {generator.params.map((p) => (
                <tr key={p.key} className="border-b border-line/60 last:border-b-0">
                  <td className="px-4 py-3 font-medium text-white">{p.label[locale]}</td>
                  <td className="px-4 py-3 font-mono text-slate-300">
                    {p.default}
                    {p.unit ? ` ${p.unit}` : ""}
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-300">{p.range}</td>
                  <td className="px-4 py-3 text-slate-300">{p.desc[locale]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.howTitle}</h2>
        <ol className="mt-4 space-y-3 text-slate-300">
          {t.howSteps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="font-mono text-cyanx">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-4 space-y-5">
          {copy.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-white">{faq.q}</h3>
              <p className="mt-1 max-w-3xl text-slate-300">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.relatedTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {related.map((g) => (
            <Link
              key={g.slug}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs text-slate-300 transition hover:border-cyanx/50 hover:text-cyanx"
              href={`/${locale}/generators/${g.slug}`}
            >
              <span aria-hidden>{g.icon}</span>
              {g.copy[locale].name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
