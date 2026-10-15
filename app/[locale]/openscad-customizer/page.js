import { notFound } from "next/navigation";
import { JsonLd, OpenScadExamples, OpenScadFaq, OpenScadHero, OpenScadMore, OpenScadSteps, OpenScadTable } from "../../components/openscad-page";
import { isSupportedLocale } from "../../lib/landing-page";
import { customizerMetadata, customizerMoreCards, customizerSchemas, getCustomizerCopy } from "../../lib/openscad-customizer";
import { scadAppUrl } from "../../lib/openscad-pages";
import { scadExampleUrl } from "../../lib/openscad-to-step";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return customizerMetadata(locale);
}

export default async function OpenScadCustomizerPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = getCustomizerCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <JsonLd schemas={customizerSchemas(locale)} />
      <OpenScadHero
        h1={t.h1}
        intro={t.intro}
        cta={{ className: "js-scad-customizer-link", href: scadAppUrl(locale), label: t.cta }}
        secondary={{ className: "js-scad-example-link", href: scadExampleUrl(locale, "parametric-box"), label: t.exampleCta, example: "parametric-box" }}
      />
      <OpenScadSteps title={t.stepsTitle} steps={t.steps} />
      <OpenScadTable
        title={t.syntaxTitle}
        intro={t.syntaxIntro}
        head={t.syntaxHead}
        rows={t.syntaxCode.map((code, index) => [code, t.syntax[index]])}
        mono
      />
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{t.syntaxNote}</p>

      <section className="mt-16 rounded-2xl border border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold">{t.builtinsTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.builtinsText}</p>
      </section>

      <OpenScadExamples locale={locale} title={t.examplesTitle} intro={t.examplesIntro} openLabel={t.exampleOpen} examples={t.examples} />
      <OpenScadTable title={t.compareTitle} head={t.compareHead} rows={t.compare} />
      <OpenScadFaq title={t.faqTitle} faqs={t.faqs} />
      <OpenScadMore title={t.moreTitle} cards={customizerMoreCards(locale)} />
    </main>
  );
}
