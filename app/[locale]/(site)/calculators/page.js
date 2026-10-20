import Link from "next/link";
import { notFound } from "next/navigation";
import { CALCULATOR_LOCALES, calculatorsIn, calculatorsSharedCopy } from "../../../lib/calculators";
import { GENERATORS, OG_LOCALES, siteLocale } from "../../../lib/generators";
import { OG_BASE } from "../../../lib/seo";
import { GeneratorLanguages } from "../../../components/generator-languages";

export function generateStaticParams() {
  return CALCULATOR_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!CALCULATOR_LOCALES.includes(locale)) return {};
  const t = calculatorsSharedCopy(locale);
  const path = `/${locale}/calculators`;
  return {
    title: t.indexTitle,
    description: t.indexDescription,
    alternates: {
      canonical: path,
      languages: { ...Object.fromEntries(CALCULATOR_LOCALES.map((l) => [l, `/${l}/calculators`])), "x-default": "/en/calculators" },
    },
    openGraph: { ...OG_BASE, title: t.indexTitle, description: t.indexDescription, locale: OG_LOCALES[locale], type: "website", url: path },
  };
}

/** The calculators, each with the part it ends in: the index is the list of hand-offs, not a page of its own words. */
export default async function CalculatorsIndexPage({ params }) {
  const { locale } = await params;
  if (!CALCULATOR_LOCALES.includes(locale)) notFound();
  const t = calculatorsSharedCopy(locale);
  const calculators = calculatorsIn(locale);
  const site = siteLocale(locale);
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: calculators.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.copy[locale].name,
      url: `https://www.forgent3d.com/${locale}/calculators/${c.slug}`,
    })),
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link className="transition-colors hover:text-brand" href={`/${site}`}>{t.breadcrumbHome}</Link>
          <span aria-hidden>/</span>
          <span className="text-foreground">{t.indexH1}</span>
        </nav>
        <GeneratorLanguages locale={locale} locales={CALCULATOR_LOCALES} path="/calculators" />
      </div>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{t.indexH1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.indexIntro}</p>

      <div className="mt-10 grid gap-4">
        {calculators.map((c) => {
          const copy = c.copy[locale];
          const targets = c.generators.map((s) => GENERATORS.find((g) => g.slug === s)).filter((g) => g?.copy[locale]);
          return (
            <article key={c.slug} className="rounded-xl border border-border/80 bg-card/60 p-5">
              <Link className="group flex items-center gap-3" href={`/${locale}/calculators/${c.slug}`}>
                <span className="text-2xl text-brand" aria-hidden>{c.icon}</span>
                <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-brand">{copy.name}</h2>
              </Link>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.card}</p>
              {targets.length ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  {t.endsIn}{" "}
                  {targets.map((g, i) => (
                    <span key={g.slug}>
                      {i ? ", " : ""}
                      <Link className="text-brand hover:underline" href={`/${locale}/generators/${g.slug}`}>{g.copy[locale].name}</Link>
                    </span>
                  ))}
                  {c.component ? (
                    <>
                      {targets.length ? ", " : ""}
                      <span className="text-foreground">{c.component.name[locale] || c.component.name.en}</span>
                    </>
                  ) : null}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </main>
  );
}
