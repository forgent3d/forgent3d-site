import { notFound } from "next/navigation";
import { BRAND_BUTTON, isSupportedLocale } from "../../../lib/landing-page";
import { getScadCopy, scadAppUrl, scadBreadcrumbSchema, scadMetadata } from "../../../lib/openscad-to-step";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return scadMetadata(locale, "compat");
}

export default async function OpenScadCompatibilityPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getScadCopy(locale);
  const t = copy.compat;

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scadBreadcrumbSchema(locale, "compat")) }} />

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.exactTitle}</h2>
        <ul className="mt-6 space-y-5">
          {t.exact.map((item) => (
            <li key={item.lead} className="max-w-3xl leading-7 text-muted-foreground">
              <strong className="font-semibold text-foreground">{item.lead}</strong> {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-2xl border border-dashed border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold">{t.limitsTitle}</h2>
        <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
          {t.limits.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.testTitle}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">{t.testText}</p>
        <a className={`js-scad-link ${BRAND_BUTTON} mt-8 min-h-[44px] px-6`} href={scadAppUrl(locale)}>
          {copy.shared.openConverter} →
        </a>
      </section>
    </main>
  );
}
