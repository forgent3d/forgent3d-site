import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

const CONTACT_EMAIL = "barry@forgent3d.com";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "联系我们 | Forgent3D",
      description:
        "联系 Forgent3D，咨询使用、skill 接入、团队使用或合作相关问题。",
      ogLocale: "zh_CN",
      kicker: "联系",
      h1: "联系我们",
      intro:
        "使用上的问题、团队使用、skill 接入或合作，都可以直接发邮件。",
      emailLabel: "邮箱",
      responseTitle: "适合联系的情况",
      items: [
        "额度或团队使用",
        "Skills 接入、反馈和功能建议",
        "集成或合作",
      ],
      action: "发送邮件",
    };
  }

  return {
    title: "Contact | Forgent3D",
    description:
      "Contact Forgent3D about using it, skill setup, team usage, or partnerships.",
    ogLocale: "en_US",
    kicker: "Contact",
    h1: "Contact us",
    intro:
      "Questions about using it, team usage, skill setup, or partnerships — just email us.",
    emailLabel: "Email",
    responseTitle: "Good reasons to reach out",
    items: [
      "Limits or team usage",
      "Skills setup, feedback, and feature requests",
      "Integrations or partnerships",
    ],
    action: "Send email",
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
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <section className="mt-12 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6 shadow-panel">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.emailLabel}</p>
        <a className="mt-3 block break-words text-2xl font-semibold text-foreground md:text-3xl" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <a className="mt-6 inline-flex rounded-md bg-brand px-5 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90" href={`mailto:${CONTACT_EMAIL}`}>
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
      </section>
    </main>
  );
}
