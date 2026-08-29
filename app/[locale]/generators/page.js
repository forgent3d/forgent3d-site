import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";
import { GENERATORS, generatorsSharedCopy } from "../../lib/generators";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  const t = generatorsSharedCopy(locale);
  const path = `/${locale}/generators`;
  return {
    title: t.catalogTitle,
    description: t.catalogDescription,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/generators",
        zh: "/zh/generators",
        "x-default": "/en/generators",
      },
    },
    openGraph: {
      title: t.catalogTitle,
      description: t.catalogDescription,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      url: path,
    },
  };
}

export default async function GeneratorsIndexPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = generatorsSharedCopy(locale);

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: GENERATORS.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.copy[locale].name,
      url: `https://www.forgent3d.com/${locale}/generators/${g.slug}`,
    })),
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <Link
        className="inline-flex rounded-md border border-border/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80 hover:border-brand/50"
        href={`/${locale}`}
      >
        {t.backHome}
      </Link>
      <h1 className="mt-10 text-3xl font-semibold tracking-tight md:text-4xl">{t.catalogH1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.catalogIntro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {GENERATORS.map((g) => (
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
    </main>
  );
}
