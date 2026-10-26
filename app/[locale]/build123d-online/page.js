import Link from "next/link";
import { notFound } from "next/navigation";
import { articleCards } from "../../lib/blog";
import { BRAND_BUTTON, SKILLS_INSTALL_COMMAND, isSupportedLocale } from "../../lib/landing-page";
import {
  B123D_EXAMPLES,
  B123D_LINK_FORMAT,
  B123D_SAMPLE,
  b123dAppUrl,
  b123dExampleUrl,
  b123dMetadata,
  b123dSampleUrl,
  b123dSchemas,
  getB123dCopy,
} from "../../lib/build123d-online";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return b123dMetadata(locale);
}

export default async function Build123dOnlinePage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = getB123dCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      {b123dSchemas(locale).map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a className={`js-b123d-link ${BRAND_BUTTON} min-h-[44px] px-6`} href={b123dAppUrl(locale)}>
          {t.cta} →
        </a>
        {/* Not .js-b123d-link: public/script.js rewrites that class's href to the bare tool URL, which would drop #code=.
            The colour sits on an inner span: public/styles.css's a { color: inherit } beats text-brand on the <a>. */}
        <a className="js-b123d-code-link group text-sm font-medium" href={b123dSampleUrl(locale)} target="_blank" rel="noreferrer" data-example="sample">
          <span className="text-brand transition-colors group-hover:text-brand/80">{t.sampleCta} →</span>
        </a>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.featuresTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {t.features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Not .js-b123d-link either (it would drop ?example=): the cards carry their own class and click event. */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.examplesTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.examplesIntro}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {B123D_EXAMPLES.map((name) => {
            const example = t.examples[name];
            return (
              <a
                key={name}
                className="js-b123d-example-link group overflow-hidden rounded-xl border border-border/80 bg-card transition-colors hover:border-brand/50"
                href={b123dExampleUrl(locale, name)}
                target="_blank"
                rel="noreferrer"
                data-example={name}
              >
                <img className="block aspect-[4/3] w-full border-b border-border/60 object-cover" src={`/build123d-examples/${name}.webp`} alt={example.alt} width={800} height={600} decoding="async" />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-brand">{example.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{example.text}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.exampleOpen} →</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.sampleTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.sampleHint}</p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm text-foreground">
          <code>{B123D_SAMPLE}</code>
        </pre>
        <a className={`js-b123d-code-link ${BRAND_BUTTON} mt-4 min-h-[44px] px-6`} href={b123dSampleUrl(locale)} target="_blank" rel="noreferrer" data-example="sample">
          {t.sampleCta} →
        </a>
      </section>

      {/* 兼容性一节照 platform docs/build123d-preview-launch.md §3 写:边界一条条说清,不讲引擎怎么实现(10-26 裁定) */}
      <section className="mt-16" id="compatibility">
        <h2 className="text-2xl font-semibold">{t.runsTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.runsIntro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-brand/30 bg-card/60 p-6">
            <h3 className="font-semibold text-foreground">{t.runsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              {t.runs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <h3 className="font-semibold text-foreground">{t.limitsLabel}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
              {t.limits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.compareTitle}</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border/80">
          <table className="w-full text-sm">
            <thead className="bg-card/60 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
              <tr>
                {t.compareHead.map((head, index) => (
                  <th key={index} className="px-4 py-3 font-medium">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.map((row) => (
                <tr key={row[0]} className="border-t border-border/60">
                  <th scope="row" className="px-4 py-3 text-left font-medium text-foreground">{row[0]}</th>
                  <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                  <td className="px-4 py-3 text-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 给 AI 助手(和搜索引擎)看的一节:格式、规则、提示词都是纯文本,LLM 抓到就能照着写链接;public/llms.txt 同步 */}
      <section className="mt-16 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6" id="open-from-link">
        <h2 className="text-2xl font-semibold">{t.linkTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.linkText}</p>
        <p className="mt-6 text-sm font-semibold text-foreground">{t.linkFormatLabel}</p>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-border/80 bg-background/70 p-4 font-mono text-sm text-foreground">
          <code>{B123D_LINK_FORMAT}</code>
        </pre>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          {t.linkRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold text-foreground">{t.linkPromptLabel}</p>
        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-xl border border-border/80 bg-background/70 p-4 font-mono text-sm text-foreground">
          <code>{t.linkPrompt}</code>
        </pre>
      </section>

      <section className="mt-16 rounded-2xl border border-border/80 bg-card/60 p-6" id="skill">
        <h2 className="text-2xl font-semibold">{t.skillTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.skillText}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-md border border-border/80 bg-background px-4 py-3 font-mono text-sm text-foreground">
            {SKILLS_INSTALL_COMMAND}
          </code>
          <button
            className="js-copy-command inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md border border-border/80 bg-card/60 px-5 text-sm font-semibold text-foreground transition-colors hover:border-brand/50"
            type="button"
            data-copy-value={SKILLS_INSTALL_COMMAND}
            data-copy-source="build123d-online"
            data-copy-label={t.skillCopy}
            data-copied-label={t.skillCopied}
          >
            {t.skillCopy}
          </button>
        </div>
        <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          {t.skillBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="js-skills-cta group mt-5 inline-block text-sm" href={`/${locale}/skills`}>
          <span className="text-brand transition-colors group-hover:text-brand/80">{t.skillMore} →</span>
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-6 space-y-6">
          {t.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 max-w-3xl leading-7 text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold">{t.moreTitle}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            { href: `/${locale}/generators`, title: t.moreGeneratorsTitle, text: t.moreGenerators },
            { href: `/${locale}/openscad-viewer`, title: t.viewerLink, text: t.moreViewer },
            { href: `/${locale}/code-to-parametric-cad`, title: t.moreCodeCadTitle, text: t.moreCodeCad },
            ...articleCards(locale, ["cad-ir"], t.articleKicker),
          ].map((card) => (
            <Link key={card.href} className="group rounded-xl border border-border/80 bg-card/60 p-5 transition-colors hover:border-brand/50" href={card.href}>
              {card.kicker && <p className="mb-1 font-mono text-xs text-muted-foreground">{card.kicker}</p>}
              <h3 className="font-semibold text-foreground group-hover:text-brand">{card.title} →</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
