import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GENERATOR_LOCALES,
  OG_LOCALES,
  generatorsIn,
  generatorsSharedCopy,
  isGeneratorLocale,
  siteLocale,
} from "../../../lib/generators";
import { OG_BASE } from "../../../lib/seo";
import { GeneratorLanguages } from "../../../components/generator-languages";

export function generateStaticParams() {
  return GENERATOR_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isGeneratorLocale(locale)) return {};
  const t = generatorsSharedCopy(locale);
  const path = `/${locale}/generators`;
  return {
    title: t.catalogTitle,
    description: t.catalogDescription,
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(GENERATOR_LOCALES.map((l) => [l, `/${l}/generators`])),
        "x-default": "/en/generators",
      },
    },
    openGraph: {
      ...OG_BASE,
      title: t.catalogTitle,
      description: t.catalogDescription,
      locale: OG_LOCALES[locale],
      type: "website",
      url: path,
    },
  };
}

export default async function GeneratorsIndexPage({ params }) {
  const { locale } = await params;
  if (!isGeneratorLocale(locale)) notFound();
  const t = generatorsSharedCopy(locale);
  const generators = generatorsIn(locale);
  // The OpenSCAD pages exist in en and zh only.
  const site = siteLocale(locale);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: generators.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.copy[locale].name,
      url: `https://www.forgent3d.com/${locale}/generators/${g.slug}`,
    })),
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <GeneratorLanguages locale={locale} locales={GENERATOR_LOCALES} path="/generators" className="mb-8 justify-end" />
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.catalogH1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.catalogIntro}</p>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t.licenseNote}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {generators.map((g) => (
          <Link
            key={g.slug}
            className="group rounded-xl border border-border/80 bg-card/60 p-5 transition-colors hover:border-brand/50"
            href={`/${locale}/generators/${g.slug}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl text-brand" aria-hidden>
                {g.icon}
              </span>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-brand">
                {g.copy[locale].name}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{g.copy[locale].description}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        {t.scadPrompt}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={`/${site}/openscad-to-step`}>
          {t.scadLink} →
        </Link>
        {" · "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={`/${site}/openscad-viewer`}>
          {t.viewerLink} →
        </Link>
      </p>
    </main>
  );
}
