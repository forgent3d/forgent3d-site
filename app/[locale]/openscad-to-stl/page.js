import { notFound } from "next/navigation";
import { JsonLd, OpenScadCards, OpenScadExamples, OpenScadFaq, OpenScadHero, OpenScadMore, OpenScadSteps, OpenScadTable } from "../../components/openscad-page";
import { isSupportedLocale } from "../../lib/landing-page";
import { scadAppUrl } from "../../lib/openscad-pages";
import { scadExampleUrl } from "../../lib/openscad-to-step";
import { getStlCopy, stlMetadata, stlMoreCards, stlSchemas } from "../../lib/openscad-to-stl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return stlMetadata(locale);
}

export default async function OpenScadToStlPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = getStlCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <JsonLd schemas={stlSchemas(locale)} />
      <OpenScadHero
        h1={t.h1}
        intro={t.intro}
        cta={{ className: "js-scad-stl-link", href: scadAppUrl(locale), label: t.cta }}
        secondary={{ className: "js-scad-example-link", href: scadExampleUrl(locale, "parametric-box"), label: t.exampleCta, example: "parametric-box" }}
      />
      <OpenScadSteps title={t.stepsTitle} steps={t.steps} />
      <OpenScadCards title={t.featuresTitle} cards={t.features} />
      <OpenScadExamples locale={locale} title={t.examplesTitle} intro={t.examplesIntro} openLabel={t.exampleOpen} examples={t.examples} />
      <OpenScadTable title={t.compareTitle} head={t.compareHead} rows={t.compare} />
      <OpenScadFaq title={t.faqTitle} faqs={t.faqs} />
      <OpenScadMore title={t.moreTitle} cards={stlMoreCards(locale)} />
    </main>
  );
}
