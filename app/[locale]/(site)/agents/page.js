import { notFound } from "next/navigation";
import { AGENTS_LOCALES, getAgentsCopy } from "../../../lib/agents-page";
import { OG_BASE, SITE_URL } from "../../../lib/seo";

export function generateStaticParams() {
  return AGENTS_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!AGENTS_LOCALES.includes(locale)) return {};
  const copy = getAgentsCopy(locale);
  const path = `/${locale}/agents`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: { en: "/en/agents", zh: "/zh/agents", "x-default": "/en/agents" },
      types: { "text/plain": "/llms.txt" },
    },
    openGraph: { ...OG_BASE, title: copy.title, description: copy.description, locale: copy.ogLocale, type: "website", url: path },
  };
}

function jsonLd(copy, locale) {
  const url = `${SITE_URL}/${locale}/agents`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: copy.h1,
    description: copy.description,
    url,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    dateModified: copy.updated.replace(/^\D+/, ""),
    publisher: { "@type": "Organization", name: "Forgent3D", url: SITE_URL },
    about: copy.tools.map((tool) => ({ "@type": "SoftwareApplication", name: tool.name, url: tool.url, applicationCategory: "DesignApplication" })),
  };
}

/** Inline `code` spans written with backticks in the copy. */
function Rich({ text }) {
  return text.split(/(`[^`]+`)/).map((part, i) =>
    part.startsWith("`") ? (
      <code key={i} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-foreground">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}

export default async function AgentsPage({ params }) {
  const { locale } = await params;
  if (!AGENTS_LOCALES.includes(locale)) notFound();
  const copy = getAgentsCopy(locale);

  return (
    <main className="mx-auto w-[min(920px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(copy, locale)) }} />
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{copy.updated}</p>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <h2 className="mt-14 text-2xl font-semibold">{copy.toolsTitle}</h2>
      <div className="mt-6 space-y-5">
        {copy.tools.map((tool) => (
          <section key={tool.id} id={tool.id} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <h3 className="text-xl font-semibold">
              <a className="hover:text-brand" href={tool.url}>
                {tool.name}
              </a>
            </h3>
            <dl className="mt-4 space-y-3 text-sm leading-6">
              {["when", "give", "not"].map((key) => (
                <div key={key}>
                  <dt className="font-medium text-foreground">{copy.labels[key]}</dt>
                  <dd className="text-muted-foreground">
                    <Rich text={tool[key]} />
                  </dd>
                </div>
              ))}
              <div>
                <dt className="font-medium text-foreground">{copy.labels.link}</dt>
                <dd className="break-all font-mono text-xs text-muted-foreground">
                  <a className="hover:text-brand" href={tool.link}>
                    {tool.link}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        ))}
      </div>

      <h2 id="links" className="mt-14 text-2xl font-semibold">{copy.linksTitle}</h2>
      <div className="mt-6 space-y-6">
        {copy.links.map((link) => (
          <section key={link.title}>
            <h3 className="text-lg font-semibold">{link.title}</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg border border-border/80 bg-muted/60 p-3 font-mono text-xs">{link.code}</pre>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{link.text}</p>
          </section>
        ))}
      </div>

      <h2 id="facts" className="mt-14 text-2xl font-semibold">{copy.factsTitle}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
        {copy.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>

      <h2 id="resources" className="mt-14 text-2xl font-semibold">{copy.resourcesTitle}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
        {copy.resources.map((r) => (
          <li key={r.href}>
            <a className="font-mono text-foreground hover:text-brand" href={r.href}>
              {r.label}
            </a>
            {" — "}
            {r.text}
          </li>
        ))}
      </ul>

      <h2 id="cite" className="mt-14 text-2xl font-semibold">{copy.citeTitle}</h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy.cite}</p>
    </main>
  );
}
