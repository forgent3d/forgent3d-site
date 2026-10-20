import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, OpenScadCards, OpenScadFaq, OpenScadHero, OpenScadMore, OpenScadSteps, OpenScadTable } from "../../components/openscad-page";
import { StepToolFacts } from "../../components/step-tools-page";
import { STEP_TOOL_LOCALES, convertAppUrl, isStepToolLocale, stepToolLinks, stepToolMetadata, stepToolSchemas } from "../../lib/step-tools";
import { STL_TO_STEP_SLUG, getStlToStepCopy, stlToStepMoreCards } from "../../lib/stl-to-step";

export function generateStaticParams() {
  return STEP_TOOL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) return {};
  return stepToolMetadata(locale, STL_TO_STEP_SLUG, getStlToStepCopy(locale));
}

export default async function StlToStepPage({ params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) notFound();
  const t = getStlToStepCopy(locale);
  const links = stepToolLinks(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <JsonLd schemas={stepToolSchemas(locale, STL_TO_STEP_SLUG, t)} />
      <OpenScadHero h1={t.h1} intro={t.intro} cta={{ className: "js-stl-to-step-link", href: convertAppUrl(locale, "stl"), label: t.cta }} />
      {/* the page's position, before anything else: what a mesh can and cannot become, and where a real STEP comes from */}
      <section className="mt-10 max-w-3xl rounded-2xl border border-brand/30 bg-card/60 p-6">
        <h2 className="text-lg font-semibold">{t.truthTitle}</h2>
        <p className="mt-2 leading-7 text-muted-foreground">{t.truth}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {t.realStep}{" "}
          <Link className="text-brand transition-colors hover:text-brand/80" href={links.openscadToStep}>
            {t.realStepScad} →
          </Link>{" "}
          <Link className="text-brand transition-colors hover:text-brand/80" href={links.generators}>
            {t.realStepGenerators} →
          </Link>
        </p>
      </section>
      <OpenScadSteps title={t.stepsTitle} steps={t.steps} />
      <StepToolFacts title={t.factsTitle} intro={t.factsIntro} facts={t.facts} note={t.factsNote} />
      <OpenScadCards title={t.featuresTitle} cards={t.features} />
      <OpenScadTable title={t.compareTitle} intro={t.compareIntro} head={t.compareHead} rows={t.compare} />
      <OpenScadFaq title={t.faqTitle} faqs={t.faqs} />
      <p className="mt-10 text-sm text-muted-foreground">
        {t.otherWay}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={links.stepToStl}>
          {t.otherWayLink} →
        </Link>
      </p>
      <OpenScadMore title={t.moreTitle} cards={stlToStepMoreCards(locale)} />
    </main>
  );
}
