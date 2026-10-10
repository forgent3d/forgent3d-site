import Link from "next/link";
import { notFound } from "next/navigation";
import { articleCards } from "../../lib/blog";
import { BRAND_BUTTON, SKILLS_INSTALL_COMMAND, isSupportedLocale } from "../../lib/landing-page";
import {
  APP_SCAD_URL,
  SCAD_EXAMPLES,
  SCAD_LINK_FORMAT,
  getScadCopy,
  scadAppUrl,
  scadBreadcrumbSchema,
  scadExampleUrl,
  scadMetadata,
  scadPath,
} from "../../lib/openscad-to-step";
import { SITE_URL } from "../../lib/seo";
import { BrepTube, MeshTube } from "./tube-figure";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return scadMetadata(locale, "home");
}

export default async function OpenScadToStepPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getScadCopy(locale);
  const t = copy.home;

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.shared.toolName,
    url: `${SITE_URL}${scadPath(locale)}`,
    description: t.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    // 机器可读的「带代码打开」入口,和下面 linkTitle 那一节说的是同一个格式
    potentialAction: {
      "@type": "ViewAction",
      name: "Open OpenSCAD code in the converter",
      target: { "@type": "EntryPoint", urlTemplate: `${APP_SCAD_URL}#code={code}` },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scadBreadcrumbSchema(locale, "home")) }} />

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{t.intro}</p>
      <a className={`js-scad-link ${BRAND_BUTTON} mt-8 min-h-[44px] px-6`} href={scadAppUrl(locale)}>
        {t.cta} →
      </a>
      <p className="mt-5 text-sm text-muted-foreground">
        {t.corpus}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={scadPath(locale, "compat")}>
          {t.corpusLink} →
        </Link>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {copy.shared.viewerHint}{" "}
        <Link className="text-brand transition-colors hover:text-brand/80" href={`/${locale}/openscad-viewer`}>
          {copy.shared.viewerLink} →
        </Link>
      </p>

      {/* Not .js-scad-link: public/script.js rewrites that class's href to the bare converter URL,
          which would drop ?example=. These carry their own class and click event. */}
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
                <img
                  className="block aspect-[4/3] w-full border-b border-border/60 object-cover"
                  src={`/scad-examples/${name}.webp`}
                  alt={example.alt}
                  width={800}
                  height={600}
                  decoding="async"
                />
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

      {/* 「从链接打开」只留一句话和格式:完整版(规则、提示词)在预览器页的同名一节 —— 让 AI 写了代码想看效果的人是那页的来意,
          搜 openscad to step 进来的人手里已经有 .scad。锚点 #open-from-link 留着,AI 聊天里引用过这个地址。 */}
      <section className="mt-20" id="open-from-link">
        <h2 className="text-2xl font-semibold">{t.linkTitle}</h2>
        <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{t.linkText}</p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border/80 bg-card/60 p-4 font-mono text-sm text-foreground">
          <code>{SCAD_LINK_FORMAT}</code>
        </pre>
        <Link className="mt-4 inline-block text-sm text-brand transition-colors hover:text-brand/80" href={`/${locale}/openscad-viewer#open-from-link`}>
          {t.linkMore} →
        </Link>
      </section>

      {/* 用 agent 的人:同一个工具,装到 Claude Code / Codex 里。只给一条安装命令(skill 自己判断走 OpenSCAD 还是参数化模型),
          STEP 的归属说清楚:skill 出的是 OpenSCAD 的网格,STEP 在链接打开的页面上。复制按钮带 data-copy-source,埋点分得出来源页。 */}
      <section className="mt-20 rounded-2xl border border-border/80 bg-card/60 p-6" id="skill">
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
            data-copy-source="openscad-to-step"
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

      <section className="mt-20">
        <h2 className="text-2xl font-semibold">{t.compareTitle}</h2>
        <figure className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <MeshTube label={t.meshAlt} />
              <p className="mt-5 font-semibold text-foreground">{t.meshLabel}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{t.meshStat}</p>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-card/60 p-6">
              <BrepTube label={t.brepAlt} />
              <p className="mt-5 font-semibold text-foreground">{t.brepLabel}</p>
              <p className="mt-1 font-mono text-xs text-brand">{t.brepStat}</p>
            </div>
          </div>
          <figcaption className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">{t.compareCaption}</figcaption>
        </figure>
      </section>

      <section className="mt-20">
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

      <section className="mt-20">
        <h2 className="text-lg font-semibold">{t.moreTitle}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { href: scadPath(locale, "why"), title: copy.why.h1, text: t.moreWhy },
            { href: scadPath(locale, "compat"), title: copy.compat.h1, text: t.moreCompat },
            ...articleCards(locale, ["openscad-to-step-guide"], t.articleKicker),
          ].map((card) => (
            <Link
              key={card.href}
              className="group rounded-xl border border-border/80 bg-card/60 p-5 transition-colors hover:border-brand/50"
              href={card.href}
            >
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
