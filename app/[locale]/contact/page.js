import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

const CONTACT_EMAIL = "barry@forgent3d.com";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "联系我们 | Forgent3D",
      description:
        "联系 Forgent3D，咨询云端 Agent、Skills 接入、团队试用或合作相关问题。",
      ogLocale: "zh_CN",
      kicker: "Contact",
      h1: "联系我们",
      intro:
        "如果你想试用 Agent、把 skill 接进团队的 AI 工作流、了解团队使用方式，或讨论 AI CAD 场景，可以直接发邮件。",
      emailLabel: "邮箱",
      responseTitle: "适合联系的情况",
      items: [
        "Agent 试用、额度或团队使用",
        "Skills 接入、反馈和功能建议",
        "AI CAD、agent 工作流或集成合作",
      ],
      action: "发送邮件",
      home: "返回首页",
    };
  }

  return {
    title: "Contact | Forgent3D",
    description:
      "Contact Forgent3D about the cloud Agent, skills setup, team trials, or partnerships.",
    ogLocale: "en_US",
    kicker: "Contact",
    h1: "Contact us",
    intro:
      "Email us if you want to try Agent, wire the skill into your team's AI workflow, discuss team usage, or explore AI CAD workflows.",
    emailLabel: "Email",
    responseTitle: "Good reasons to reach out",
    items: [
      "Agent trials, limits, or team usage",
      "Skills setup, feedback, and feature requests",
      "AI CAD, agent workflow, or integration partnerships",
    ],
    action: "Send email",
    home: "Back home",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/contact`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/contact",
        zh: "/zh/contact",
        "x-default": "/en/contact",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(920px,calc(100vw-32px))] py-16 text-foreground">
      <a className="inline-flex rounded-md border border-border/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80 hover:border-brand/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <section className="mt-12 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6 shadow-panel">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.emailLabel}</p>
        <a className="mt-3 block break-words text-2xl font-semibold text-foreground md:text-3xl" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <a className="mt-6 inline-flex rounded-md bg-brand px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90" href={`mailto:${CONTACT_EMAIL}`}>
          {copy.action}
        </a>
      </section>

      <section className="mt-10 rounded-2xl border border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.responseTitle}</h2>
        <ul className="mt-5 space-y-3 text-muted-foreground">
          {copy.items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <a className="mt-6 inline-flex rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50" href={`/${locale}`}>
          {copy.home}
        </a>
      </section>
    </main>
  );
}
