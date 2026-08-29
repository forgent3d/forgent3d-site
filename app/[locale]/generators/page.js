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
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <Link
        className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50"
        href={`/${locale}`}
      >
        {t.backHome}
      </Link>
      <h1 className="mt-10 text-4xl font-bold tracking-tight md:text-5xl">{t.catalogH1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.catalogIntro}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {GENERATORS.map((g) => (
          <Link
            key={g.slug}
            className="group rounded-2xl border border-line bg-slate-950/40 p-5 transition hover:border-cyanx/50"
            href={`/${locale}/generators/${g.slug}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl text-cyanx" aria-hidden>
                {g.icon}
              </span>
              <h2 className="text-lg font-semibold text-white group-hover:text-cyanx">
                {g.copy[locale].name}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{g.copy[locale].description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
