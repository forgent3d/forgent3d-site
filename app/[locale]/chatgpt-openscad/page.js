import { notFound } from "next/navigation";
import { JsonLd, OpenScadCards, OpenScadFaq, OpenScadHero, OpenScadMore, OpenScadSteps } from "../../components/openscad-page";
import { chatgptMetadata, chatgptMoreCards, chatgptSample, chatgptSampleUrl, chatgptSchemas, getChatgptCopy } from "../../lib/chatgpt-openscad";
import { BRAND_BUTTON, isSupportedLocale } from "../../lib/landing-page";
import { scadAppUrl } from "../../lib/openscad-pages";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return chatgptMetadata(locale);
}

export default async function ChatgptOpenScadPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = getChatgptCopy(locale);
  const sampleUrl = chatgptSampleUrl(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <JsonLd schemas={chatgptSchemas(locale)} />
      {/* The sample link is .js-scad-code-link, not this page's CTA class: public/script.js rewrites the CTA's href to
          the bare tool URL, which would drop #code=. */}
      <OpenScadHero
        h1={t.h1}
        intro={t.intro}
        cta={{ className: "js-scad-chatgpt-link", href: scadAppUrl(locale), label: t.cta }}
        secondary={{ className: "js-scad-code-link", href: sampleUrl, label: t.sampleCta }}
      />

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.whyTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.whyText}</p>
      </section>

      <OpenScadSteps title={t.stepsTitle} steps={t.steps} />

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.promptTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.promptIntro}</p>
        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm text-foreground">
          <code>{t.prompt}</code>
        </pre>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.sampleTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.sampleHint}</p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm text-foreground">
          <code>{chatgptSample(locale)}</code>
        </pre>
        <a className={`js-scad-code-link ${BRAND_BUTTON} mt-4 min-h-[44px] px-6`} href={sampleUrl} target="_blank" rel="noreferrer">
          {t.sampleCta} →
        </a>
      </section>

      <OpenScadCards title={t.problemsTitle} intro={t.problemsIntro} cards={t.problems} />

      {/* The way into the AI CAD agent: .js-try-link is the site's "start" hook (try_clicked, with this page's path). */}
      <section className="mt-16 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6">
        <h2 className="text-2xl font-semibold">{t.bridgeTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.bridgeText}</p>
        <a className={`js-try-link ${BRAND_BUTTON} mt-5 min-h-[44px] px-6`} href="https://app.forgent3d.com">
          {t.bridgeCta} →
        </a>
      </section>

      <OpenScadFaq title={t.faqTitle} faqs={t.faqs} />
      <OpenScadMore title={t.moreTitle} cards={chatgptMoreCards(locale)} />
    </main>
  );
}
