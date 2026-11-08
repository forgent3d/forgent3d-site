import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_BASE, SITE_URL } from "../lib/seo";
import { STL_TO_CAD_LOCALES, STL_TO_CAD_UPDATED, getStlToCadCopy } from "../lib/stl-to-cad";

/** The four /stl-to-<cad> pages (lib/stl-to-cad.js): one component, the copy per program. */
export function stlToCadStaticParams() {
  return STL_TO_CAD_LOCALES.map((locale) => ({ locale }));
}

export function stlToCadMetadata(slug, locale) {
  if (!STL_TO_CAD_LOCALES.includes(locale)) return {};
  const t = getStlToCadCopy(slug, locale);
  const path = `/${locale}/${slug}`;
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: path, languages: { en: `/en/${slug}`, zh: `/zh/${slug}`, "x-default": `/en/${slug}` } },
    openGraph: { ...OG_BASE, title: t.title, description: t.description, type: "article", url: path },
  };
}

const card = "rounded-2xl border border-border/80 bg-card/60 p-6";

export function StlToCadPage({ slug, locale }) {
  if (!STL_TO_CAD_LOCALES.includes(locale)) notFound();
  const t = getStlToCadCopy(slug, locale);
  const url = `${SITE_URL}/${locale}/${slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: t.stepsTitle,
      description: t.description,
      url,
      dateModified: STL_TO_CAD_UPDATED,
      step: t.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <main className="mx-auto w-[min(920px,calc(100vw-32px))] py-16 text-foreground">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{t.kicker}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{t.h1}</h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.answer}</p>
      <a
        className="js-stl-to-step-link mt-8 inline-flex rounded-md bg-brand px-6 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90"
        href={t.ctaHref}
        data-track={`stl-to-cad-${slug}`}
      >
        {t.cta} →
      </a>

      <section className={`mt-12 ${card}`}>
        <h2 className="text-xl font-semibold">{t.nativeTitle}</h2>
        <p className="mt-3 leading-7 text-muted-foreground">{t.native}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.stepsTitle}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.steps.map((s, i) => (
            <article key={s.title} className={card}>
              <p className="font-mono text-xs text-brand">0{i + 1}</p>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.editTitle}</h2>
        <p className="mt-3 leading-7 text-muted-foreground">{t.edit}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.compareTitle}</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border/80">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border/80 bg-card/60 text-xs text-muted-foreground">
                {t.compareHead.map((h, i) => <th key={i} className={`px-4 py-3 ${i === 2 ? "text-foreground" : ""}`}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {t.compare.map((row) => (
                <tr key={row[0]} className="border-b border-border/60 last:border-b-0">
                  {row.map((cell, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-foreground" : i === 2 ? "text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-5 space-y-5">
          {t.faqs.map((f) => (
            <article key={f.q}>
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" id="ai">
        <h2 className="text-2xl font-semibold">{t.aiTitle}</h2>
        <p className="mt-3 break-words text-sm leading-6 text-muted-foreground">{t.ai}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold">{t.moreTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {t.more.map((m) => (
            <Link key={m.href} className="rounded-md border border-border/80 px-4 py-2 text-sm text-foreground hover:border-brand/50 hover:text-brand" href={m.href}>
              {m.label} →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
