import Link from "next/link";
import { notFound } from "next/navigation";
import { articleCards } from "../../lib/blog";
import { BRAND_BUTTON, SKILLS_INSTALL_COMMAND, isSupportedLocale } from "../../lib/landing-page";
import { SCAD_LINK_FORMAT, scadPath } from "../../lib/openscad-to-step";
import {
  SCAD_EXAMPLES,
  VIEWER_SAMPLE,
  getViewerCopy,
  scadExampleUrl,
  viewerAppUrl,
  viewerMetadata,
  viewerSampleUrl,
  viewerSchemas,
} from "../../lib/openscad-viewer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return viewerMetadata(locale);
}

export default async function OpenScadViewerPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const t = getViewerCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      {viewerSchemas(locale).map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a className={`js-scad-viewer-link ${BRAND_BUTTON} min-h-[44px] px-6`} href={viewerAppUrl(locale)}>
          {t.cta} →
        </a>
        {/* Not .js-scad-viewer-link: public/script.js rewrites that class's href to the bare tool URL, which would drop #code=. */}
        <a className="js-scad-code-link text-sm font-medium text-brand transition-colors hover:text-brand/80" href={viewerSampleUrl(locale)} target="_blank" rel="noreferrer">
          {t.sampleCta} →
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

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.sampleCta}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.sampleHint}</p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm text-foreground">
          <code>{VIEWER_SAMPLE}</code>
        </pre>
        <a className={`js-scad-code-link ${BRAND_BUTTON} mt-4 min-h-[44px] px-6`} href={viewerSampleUrl(locale)} target="_blank" rel="noreferrer">
          {t.sampleCta} →
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">{t.examplesTitle}</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">{t.examplesIntro}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {SCAD_EXAMPLES.map((name) => {
            const example = t.examples[name];
            return (
              <a
                key={name}
                className="js-scad-example-link group overflow-hidden rounded-xl border border-border/80 bg-card transition-colors hover:border-brand/50"
                href={scadExampleUrl(locale, name)}
                target="_blank"
                rel="noreferrer"
                data-example={name}
              >
                <img className="block aspect-[4/3] w-full border-b border-border/60 object-cover" src={`/scad-examples/${name}.webp`} alt={example.alt} width={800} height={600} decoding="async" />
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

      {/* 给 AI 助手(和搜索引擎)看的一节,「从链接打开」的完整版放这页:让 AI 写了代码想看效果的人是预览器的来意。
          格式、规则、提示词都是纯文本,LLM 抓到就能照着写链接;转换器页同名锚点只留格式一行,链到这里。 */}
      <section className="mt-16 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6" id="open-from-link">
        <h2 className="text-2xl font-semibold">{t.linkTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{t.linkText}</p>
        <p className="mt-6 text-sm font-semibold text-foreground">{t.linkFormatLabel}</p>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-border/80 bg-background/70 p-4 font-mono text-sm text-foreground">
          <code>{SCAD_LINK_FORMAT}</code>
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

      {/* 用 agent 的人:同一个工具,装到 Claude Code / Codex 里。只给一条安装命令(skill 自己判断走 OpenSCAD 还是参数化模型),
          STEP 的归属说清楚:skill 出的是 OpenSCAD 的网格,STEP 在链接打开的页面上。复制按钮带 data-copy-source,埋点分得出来源页。 */}
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
            data-copy-source="openscad-viewer"
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
        <Link className="js-skills-cta mt-5 inline-block text-sm text-brand transition-colors hover:text-brand/80" href={`/${locale}/skills`}>
          {t.skillMore} →
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
            { href: scadPath(locale), title: t.converterLink, text: t.moreConverter },
            { href: scadPath(locale, "compat"), title: `${t.converterLink} · ${locale === "zh" ? "兼容性" : "compatibility"}`, text: t.moreCompat },
            ...articleCards(locale, ["openscad-preview-online", "openscad-green-faces"], t.articleKicker),
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
