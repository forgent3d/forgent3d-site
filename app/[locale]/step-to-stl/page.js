import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, OpenScadCards, OpenScadFaq, OpenScadHero, OpenScadMore, OpenScadSteps, OpenScadTable } from "../../components/openscad-page";
import { StepToolFacts } from "../../components/step-tools-page";
import { STEP_TOOL_LOCALES, convertAppUrl, isStepToolLocale, stepToolMetadata, stepToolSchemas } from "../../lib/step-tools";
import { STEP_TO_STL_SLUG, getStepToStlCopy, stepToStlMoreCards } from "../../lib/step-to-stl";

export function generateStaticParams() {
  return STEP_TOOL_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) return {};
  return stepToolMetadata(locale, STEP_TO_STL_SLUG, getStepToStlCopy(locale));
}

export default async function StepToStlPage({ params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) notFound();
  const t = getStepToStlCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <JsonLd schemas={stepToolSchemas(locale, STEP_TO_STL_SLUG, t)} />
      <OpenScadHero h1={t.h1} intro={t.intro} cta={{ className: "js-step-to-stl-link", href: convertAppUrl(locale, "step"), label: t.cta }} />
      <p className="mt-5 text-sm text-muted-foreground">
        {t.otherWay}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={`/${locale}/stl-to-step`}>
          {t.otherWayLink} →
        </Link>
      </p>
      <OpenScadSteps title={t.stepsTitle} steps={t.steps} />
      <StepToolFacts title={t.factsTitle} intro={t.factsIntro} facts={t.facts} note={t.factsNote} />
      <OpenScadTable title={t.presetsTitle} intro={t.presetsIntro} head={t.presetsHead} rows={t.presets} />
      <OpenScadCards title={t.featuresTitle} cards={t.features} />
      <OpenScadTable title={t.compareTitle} intro={t.compareIntro} head={t.compareHead} rows={t.compare} />
      <OpenScadFaq title={t.faqTitle} faqs={t.faqs} />
      <OpenScadMore title={t.moreTitle} cards={stepToStlMoreCards(locale)} />
    </main>
  );
}
