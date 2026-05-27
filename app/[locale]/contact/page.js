import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

const CONTACT_EMAIL = "barry@forgent3d.com";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "联系我们 | Forgent3D",
      description:
        "联系 Forgent3D，咨询 Agent、团队试用、合作或开源桌面版相关问题。",
      ogLocale: "zh_CN",
      kicker: "Contact",
      h1: "联系我们",
      intro:
        "如果你想试用 Agent、了解团队使用方式、讨论 AI CAD 场景，或反馈桌面版问题，可以直接发邮件。",
      emailLabel: "邮箱",
      responseTitle: "适合联系的情况",
      items: [
        "Agent 试用、额度或团队使用",
        "AI CAD、agent 工作流或集成合作",
        "开源桌面版反馈、问题和功能建议",
      ],
      action: "发送邮件",
      home: "返回首页",
    };
  }

  return {
    title: "Contact | Forgent3D",
    description:
      "Contact Forgent3D about Agent, team trials, partnerships, or the open-source desktop app.",
    ogLocale: "en_US",
    kicker: "Contact",
    h1: "Contact us",
    intro:
      "Email us if you want to try Agent, discuss team usage, explore AI CAD workflows, or share feedback about the desktop app.",
    emailLabel: "Email",
    responseTitle: "Good reasons to reach out",
    items: [
      "Agent trials, limits, or team usage",
      "AI CAD, agent workflow, or integration partnerships",
      "Open-source desktop feedback, issues, and feature requests",
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
    <main className="mx-auto w-[min(920px,calc(100vw-32px))] py-16 text-slate-100">
      <a className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">{copy.kicker}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>

      <section className="mt-12 rounded-[2rem] border border-cyanx/30 bg-cyanx/[0.06] p-6 shadow-panel">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">{copy.emailLabel}</p>
        <a className="mt-3 block break-words text-3xl font-bold text-white md:text-5xl" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <a className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow" href={`mailto:${CONTACT_EMAIL}`}>
          {copy.action}
        </a>
      </section>

      <section className="mt-10 rounded-[2rem] border border-line bg-white/[0.03] p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.responseTitle}</h2>
        <ul className="mt-5 space-y-3 text-slate-300">
          {copy.items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <a className="mt-6 inline-flex rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50" href={`/${locale}`}>
          {copy.home}
        </a>
      </section>
    </main>
  );
}
