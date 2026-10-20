import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CALCULATORS,
  calculatorLocales,
  calculatorsSharedCopy,
  getCalculator,
} from "../../../../lib/calculators";
import { GENERATORS, OG_LOCALES, siteLocale } from "../../../../lib/generators";
import { OG_BASE } from "../../../../lib/seo";
import { GeneratorLanguages } from "../../../../components/generator-languages";
import { CalculatorWidget } from "../../../../components/calculators/widget";

export function generateStaticParams() {
  return CALCULATORS.flatMap((c) => calculatorLocales(c).map((locale) => ({ locale, slug: c.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const calculator = getCalculator(slug);
  const copy = calculator?.copy[locale];
  if (!copy) return {};
  const path = `/${locale}/calculators/${slug}`;
  return {
    title: copy.title,
    description: copy.description,
    keywords: (calculator.keywords[locale] || calculator.keywords.en).join(", "),
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(calculatorLocales(calculator).map((l) => [l, `/${l}/calculators/${slug}`])),
        "x-default": `/en/calculators/${slug}`,
      },
    },
    openGraph: { ...OG_BASE, title: copy.title, description: copy.description, locale: OG_LOCALES[locale], type: "website", url: path },
  };
}

const linkClass = "text-brand underline-offset-2 transition-colors hover:text-brand/80 hover:underline";

/** A reference table: `head` labels, `rows` of cells. A cell is text, or { text, href } for a link. */
function RefTable({ table }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth: table.minWidth || 480 }}>
        {table.caption ? <caption className="caption-bottom px-4 py-3 text-left text-xs text-muted-foreground">{table.caption}</caption> : null}
        <thead>
          <tr className="border-b border-border/80 bg-card/60 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {table.head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-b border-border/60 last:border-b-0">
              {row.map((cell, i) => (
                <td key={i} className={`px-4 py-2.5 ${i === 0 ? "font-medium text-foreground" : "font-mono text-muted-foreground"}`}>
                  {cell && typeof cell === "object" ? (
                    <a className={linkClass} href={cell.href}>{cell.text}</a>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function CalculatorPage({ params }) {
  const { locale, slug } = await params;
  const calculator = getCalculator(slug);
  const copy = calculator?.copy[locale];
  if (!copy) notFound();
  const t = calculatorsSharedCopy(locale);
  const site = siteLocale(locale);
  const url = `https://www.forgent3d.com/${locale}/calculators/${slug}`;
  // The generators this calculator hands off to, where they have a page in this language.
  const generators = calculator.generators
    .map((s) => GENERATORS.find((g) => g.slug === s))
    .filter((g) => g?.copy[locale]);
  const others = CALCULATORS.filter((c) => c.slug !== slug && c.copy[locale]);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: copy.name,
      applicationCategory: "EngineeringApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: copy.description,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: copy.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `https://www.forgent3d.com/${site}` },
        { "@type": "ListItem", position: 2, name: t.indexH1, item: `https://www.forgent3d.com/${locale}/calculators` },
        { "@type": "ListItem", position: 3, name: copy.name, item: url },
      ],
    },
  ];

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link className="transition-colors hover:text-brand" href={`/${site}`}>{t.breadcrumbHome}</Link>
          <span aria-hidden>/</span>
          <Link className="transition-colors hover:text-brand" href={`/${locale}/calculators`}>{t.indexH1}</Link>
          <span aria-hidden>/</span>
          <span className="text-foreground">{copy.name}</span>
        </nav>
        <GeneratorLanguages locale={locale} locales={calculatorLocales(calculator)} path={`/calculators/${slug}`} />
      </div>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <section className="mt-10" id="calculator" aria-label={copy.name}>
        <CalculatorWidget widget={calculator.widget} locale={locale} ui={copy.ui} />
      </section>

      {copy.sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-14">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {(section.body || []).map((p, i) => (
            <p key={i} className="mt-3 max-w-3xl leading-7 text-muted-foreground">{p}</p>
          ))}
          {section.formula ? (
            <pre className="mt-4 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm leading-6 text-foreground">{section.formula}</pre>
          ) : null}
          {(section.list || []).length ? (
            <ul className="mt-4 max-w-3xl space-y-2 text-muted-foreground">
              {section.list.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          ) : null}
          {(section.tables || []).map((table, i) => (
            <RefTable key={i} table={table} />
          ))}
          {(section.after || []).map((p, i) => (
            <p key={i} className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{p}</p>
          ))}
        </section>
      ))}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-4 space-y-5">
          {copy.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 max-w-3xl break-words text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" id="sources">
        <h2 className="text-2xl font-semibold">{t.sourcesTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{t.sourcesIntro}</p>
        <ol className="mt-4 max-w-3xl list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          {copy.sources.map((s) => (
            <li key={s.url + s.label}>
              <a className={linkClass} href={s.url} rel="nofollow noopener" target="_blank">{s.label}</a>
              {s.note ? ` — ${s.note}` : ""}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.relatedTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {generators.map((g) => (
            <Link
              key={g.slug}
              className="inline-flex items-center gap-2 rounded-md border border-border/80 px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
              href={`/${locale}/generators/${g.slug}`}
            >
              <span aria-hidden>{g.icon}</span>
              {g.copy[locale].name}
            </Link>
          ))}
          {others.map((c) => (
            <Link
              key={c.slug}
              className="inline-flex items-center gap-2 rounded-md border border-border/80 px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
              href={`/${locale}/calculators/${c.slug}`}
            >
              <span aria-hidden>{c.icon}</span>
              {c.copy[locale].name}
            </Link>
          ))}
          <Link className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs text-brand transition-colors hover:text-brand/80" href={`/${locale}/generators`}>
            {t.allGenerators} →
          </Link>
        </div>
      </section>
    </main>
  );
}
