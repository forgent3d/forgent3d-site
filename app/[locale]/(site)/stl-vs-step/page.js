import Link from "next/link";
import { notFound } from "next/navigation";
import { STL_VS_STEP_LOCALES, STL_VS_STEP_UPDATED, getStlVsStepCopy } from "../../../lib/stl-vs-step";
import { OG_BASE, SITE_URL } from "../../../lib/seo";

export function generateStaticParams() {
  return STL_VS_STEP_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!STL_VS_STEP_LOCALES.includes(locale)) return {};
  const copy = getStlVsStepCopy(locale);
  const path = `/${locale}/stl-vs-step`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: path, languages: { en: "/en/stl-vs-step", zh: "/zh/stl-vs-step", "x-default": "/en/stl-vs-step" } },
    openGraph: { ...OG_BASE, title: copy.title, description: copy.description, type: "article", url: path },
  };
}

const card = "rounded-2xl border border-border/80 bg-card/60 p-6";
const linkClass = "text-brand underline-offset-2 hover:text-brand/80 hover:underline";

export default async function StlVsStepPage({ params }) {
  const { locale } = await params;
  if (!STL_VS_STEP_LOCALES.includes(locale)) notFound();
  const copy = getStlVsStepCopy(locale);
  const url = `${SITE_URL}/${locale}/stl-vs-step`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "Article", headline: copy.h1, description: copy.description, url, dateModified: STL_VS_STEP_UPDATED, inLanguage: locale === "zh" ? "zh-CN" : "en", publisher: { "@type": "Organization", name: "Forgent3D", url: SITE_URL } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: copy.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];

  return (
    <main className="mx-auto w-[min(920px,calc(100vw-32px))] py-16 text-foreground">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{copy.answer}</p>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.tableTitle}</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                {copy.tableHead.map((h, i) => <th key={i} className="px-4 py-3">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {copy.table.map((row) => (
                <tr key={row[0]} className="border-b border-border/60 last:border-b-0">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.exampleTitle}</h2>
        <p className="mt-4 leading-7 text-muted-foreground">{copy.example}</p>
        <p className="mt-3 leading-7 text-muted-foreground">{copy.example2}</p>
        <p className="mt-3 text-sm text-muted-foreground/80">{copy.exampleSource}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.chooseTitle}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {copy.choose.map((c) => (
            <article key={c.when} className={card}>
              <h3 className="font-semibold text-foreground">{c.when}</h3>
              <p className="mt-1 font-mono text-sm text-brand">{c.use}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.convertTitle}</h2>
        <div className="mt-5 space-y-4">
          {copy.convert.map((c) => (
            <article key={c.title} className={card}>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {c.text}{" "}
                <Link className={linkClass} href={c.link.href}>{c.link.label} →</Link>
                {c.link2 ? (
                  <>
                    {" · "}
                    <Link className={linkClass} href={c.link2.href}>{c.link2.label} →</Link>
                  </>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.othersTitle}</h2>
        <dl className="mt-4 space-y-3">
          {copy.others.map(([name, text]) => (
            <div key={name}>
              <dt className="font-mono text-sm font-semibold text-foreground">{name}</dt>
              <dd className="text-sm leading-6 text-muted-foreground">{text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
        <div className="mt-5 space-y-5">
          {copy.faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" id="ai">
        <h2 className="text-2xl font-semibold">{copy.aiTitle}</h2>
        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">{copy.ai}</p>
      </section>
    </main>
  );
}
