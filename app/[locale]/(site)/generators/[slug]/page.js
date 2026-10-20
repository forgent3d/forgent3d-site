import Link from "next/link";
import { notFound } from "next/navigation";
import {
  APP_BASE,
  GENERATORS,
  OG_LOCALES,
  appLanguage,
  generatorAgentUrl,
  generatorAiEditUrl,
  generatorAppUrl,
  generatorDeepLink,
  generatorSchemaUrl,
  generatorsSharedCopy,
  generatorLocales,
  getGenerator,
  relatedGenerators,
  siteLocale,
} from "../../../../lib/generators";
import { calculatorsForGenerator, calculatorsSharedCopy } from "../../../../lib/calculators";
import { OG_BASE } from "../../../../lib/seo";
import { GeneratorEmbed } from "../../../../components/generator-embed";
import { GeneratorLanguages } from "../../../../components/generator-languages";

export function generateStaticParams() {
  return GENERATORS.flatMap((g) => generatorLocales(g).map((locale) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const generator = getGenerator(slug);
  if (!generator?.copy[locale]) return {};

  const copy = generator.copy[locale];
  const path = `/${locale}/generators/${slug}`;
  return {
    title: copy.title,
    description: copy.description,
    keywords: (generator.keywords[locale] || generator.keywords.en).join(", "),
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(generatorLocales(generator).map((l) => [l, `/${l}/generators/${slug}`])),
        "x-default": `/en/generators/${slug}`,
      },
    },
    openGraph: {
      ...OG_BASE,
      title: copy.title,
      description: copy.description,
      locale: OG_LOCALES[locale],
      type: "website",
      url: path,
    },
  };
}

const linkClass = "text-brand underline-offset-2 transition-colors hover:text-brand/80 hover:underline";

/** A number in a table cell: at most two decimals, with the decimal comma German readers expect. */
function cellNumber(value, locale) {
  const text = String(Math.round(value * 100) / 100);
  return locale === "de" ? text.replace(".", ",") : text;
}

export default async function GeneratorLandingPage({ params }) {
  const { locale, slug } = await params;
  const generator = getGenerator(slug);
  // Also the guard on the language: only en, zh and the translated languages have copy.
  if (!generator?.copy[locale]) notFound();

  const copy = generator.copy[locale];
  const t = generatorsSharedCopy(locale);
  // Home and the OpenSCAD pages exist in en and zh only: a de / es / ja page links to the English ones.
  const site = siteLocale(locale);
  const appUrl = generatorAppUrl(generator, locale);
  const aiEditUrl = generatorAiEditUrl(generator, locale);
  const deepLink = generatorDeepLink(generator, locale);
  const schemaUrl = generatorSchemaUrl(generator);
  const agentUrl = generatorAgentUrl(generator, locale);
  const related = relatedGenerators(generator, locale);
  const faqs = [...copy.faqs, ...(generator.aiFaqs?.[locale] || []), ...t.sharedFaqs];
  const stepFacts = generator.step?.[locale] || [];
  // Calculators that end in this part (app/lib/calculators.js), in this page's language.
  const calculators = calculatorsForGenerator(generator.slug, locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: copy.description,
    featureList: t.featureList,
    url: `https://www.forgent3d.com/${locale}/generators/${slug}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `https://www.forgent3d.com/${site}` },
      { "@type": "ListItem", position: 2, name: t.catalogH1, item: `https://www.forgent3d.com/${locale}/generators` },
      { "@type": "ListItem", position: 3, name: copy.name, item: `https://www.forgent3d.com/${locale}/generators/${slug}` },
    ],
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link className="transition-colors hover:text-brand" href={`/${site}`}>{t.breadcrumbHome}</Link>
          <span aria-hidden>/</span>
          <Link className="transition-colors hover:text-brand" href={`/${locale}/generators`}>{t.catalogH1}</Link>
          <span aria-hidden>/</span>
          <span className="text-foreground">{copy.name}</span>
        </nav>
        <GeneratorLanguages locale={locale} locales={generatorLocales(generator)} path={`/generators/${slug}`} />
      </div>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          className="inline-flex rounded-md bg-brand px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white! transition-colors hover:bg-brand/90"
          href={appUrl}
          data-track="generator-open"
          data-generator={generator.slug}
        >
          {t.openApp} →
        </a>
        <a
          className="inline-flex rounded-md border border-border/80 px-6 py-3 font-mono text-sm uppercase tracking-[0.18em] text-brand transition-colors hover:border-brand/50"
          href={aiEditUrl}
          data-track="generator-ai-edit"
          data-generator={generator.slug}
        >
          {t.aiEditCta}
        </a>
      </div>

      <section className="mt-12" aria-labelledby="use-here">
        <h2 id="use-here" className="text-2xl font-semibold">{t.embedTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.embedIntro}</p>
        <div className="mt-5">
          <GeneratorEmbed
            appBase={APP_BASE}
            modelDir={generator.modelDir}
            slug={generator.slug}
            locale={locale}
            appLanguage={appLanguage(locale)}
            name={copy.name}
            labels={{ load: t.embedLoad, note: t.embedNote }}
          />
        </div>
      </section>

      <ul className="mt-12 space-y-3 text-foreground">
        {copy.whyPoints.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.paramsTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.paramsIntro}</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-card/60 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-4 py-3">{t.thParam}</th>
                <th className="px-4 py-3">{t.thDefault}</th>
                <th className="px-4 py-3">{t.thRange}</th>
                <th className="px-4 py-3">{t.thDesc}</th>
              </tr>
            </thead>
            <tbody>
              {generator.params.map((p) => (
                <tr key={p.key} className="border-b border-border/60 last:border-b-0">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {p.label[locale]}
                    {/* The link parameter: the constant's name in model.py, which is what a deep link sets. */}
                    <span className="mt-0.5 block font-mono text-[11px] font-normal text-muted-foreground">{p.key}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">
                    {p.default}
                    {p.unit ? ` ${p.unit}` : ""}
                  </td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{p.range}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.desc[locale]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {generator.example ? (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
            {t.paramsLinkNote}{" "}
            {locale === "zh" || locale === "ja"
              ? `${t.exampleLabel}（${generator.example.label[locale]}）：`
              : `${t.exampleLabel} (${generator.example.label[locale]}):`}
            <a className={`${linkClass} mt-1 block break-all font-mono text-xs`} href={deepLink}>{deepLink}</a>
          </p>
        ) : null}
      </section>

      {generator.sizes && copy.sizes ? (
        <section className="mt-14" id="sizes">
          <h2 className="text-2xl font-semibold">{copy.sizes.title}</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">{copy.sizes.intro}</p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-card/60 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.sizes.head.map((head, i) => (
                    <th key={i} className="px-4 py-3">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generator.sizes.map((row) => {
                  // The row's values in this page's own link: the embedded generator opens on that part.
                  const query = new URLSearchParams(Object.entries(row.params).map(([k, v]) => [k, String(v)])).toString();
                  return (
                    <tr key={query} className="border-b border-border/60 last:border-b-0">
                      {row.cells.map((value, i) => (
                        <td key={i} className={`px-4 py-3 font-mono ${i < 2 ? "text-foreground" : "text-muted-foreground"}`}>
                          {cellNumber(value, locale)}
                        </td>
                      ))}
                      <td className="px-4 py-3">
                        <a className={linkClass} href={`?${query}#use-here`} data-track="generator-size" data-generator={generator.slug}>
                          {copy.sizes.open} →
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">{copy.sizes.note}</p>
        </section>
      ) : null}

      {calculators.length ? (
        <section className="mt-14" id="calculators">
          <h2 className="text-2xl font-semibold">{calculatorsSharedCopy(locale).forGeneratorTitle}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {calculators.map((c) => (
              <Link
                key={c.slug}
                className="group rounded-xl border border-border/80 bg-card/60 p-4 transition-colors hover:border-brand/50"
                href={`/${locale}/calculators/${c.slug}`}
                data-track="generator-calculator"
                data-generator={generator.slug}
              >
                <span className="flex items-center gap-2 font-semibold text-foreground group-hover:text-brand">
                  <span className="text-brand" aria-hidden>{c.icon}</span>
                  {c.copy[locale].name}
                </span>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">{c.copy[locale].card}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {stepFacts.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">{t.stepTitle}</h2>
          <ul className="mt-4 max-w-3xl space-y-3 text-muted-foreground">
            {stepFacts.map((fact) => (
              <li key={fact}>- {fact}</li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">{t.stepCommon}</p>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.compareTitle}</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                {t.compareHead.map((head, i) => (
                  <th key={i} className={`px-4 py-3 ${i === 1 ? "text-foreground" : ""}`}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compareRows.map((row) => (
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

      <section className="mt-14" id="ai">
        <h2 className="text-2xl font-semibold">{t.aiTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-border/80 bg-card/60 p-5">
            <h3 className="font-semibold text-foreground">{t.aiLinkTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {t.aiLinkBody}{" "}
              <a className={`${linkClass} break-all font-mono text-xs`} href={schemaUrl}>{t.schemaLabel}</a>
            </p>
            {generator.example ? (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t.exampleLabel}:{" "}
                <a className={`${linkClass} break-all font-mono text-xs`} href={deepLink}>{deepLink}</a>
              </p>
            ) : null}
          </article>
          <article className="rounded-xl border border-border/80 bg-card/60 p-5">
            <h3 className="font-semibold text-foreground">{t.aiEditTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.aiEditBody}</p>
            <a
              className={`${linkClass} mt-3 inline-block text-sm`}
              href={aiEditUrl}
              data-track="generator-ai-edit"
              data-generator={generator.slug}
            >
              {t.aiEditCta} →
            </a>
          </article>
          <article className="rounded-xl border border-border/80 bg-card/60 p-5">
            <h3 className="font-semibold text-foreground">{t.aiWorkspaceTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.aiWorkspaceBody}</p>
            <a
              className={`${linkClass} mt-3 inline-block text-sm`}
              href={agentUrl}
              data-track="generator-agent"
              data-generator={generator.slug}
            >
              {t.aiWorkspaceCta} →
            </a>
          </article>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.howTitle}</h2>
        <ol className="mt-4 space-y-3 text-muted-foreground">
          {t.howSteps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="font-mono text-brand">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-4 space-y-5">
          {faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 max-w-3xl break-words text-muted-foreground">{faq.a}</p>
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
              className="inline-flex items-center gap-2 rounded-md border border-border/80 px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
              href={`/${locale}/generators/${g.slug}`}
            >
              <span aria-hidden>{g.icon}</span>
              {g.copy[locale].name}
            </Link>
          ))}
          <Link
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs text-brand transition-colors hover:text-brand/80"
            href={`/${locale}/generators`}
          >
            {t.catalogH1} →
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {t.scadPrompt}{" "}
          <Link className="text-brand transition-colors hover:text-brand/80" href={`/${site}/openscad-to-step`}>
            {t.scadLink} →
          </Link>
          {" · "}
          <Link className="text-brand transition-colors hover:text-brand/80" href={`/${site}/openscad-viewer`}>
            {t.viewerLink} →
          </Link>
        </p>
      </section>
    </main>
  );
}
