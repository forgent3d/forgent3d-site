import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

const CONTACT_EMAIL = "barry@forgent3d.com";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "方案 | Forgent3D",
      description:
        "了解 Forgent3D 的两种用法：云端 Agent 免配置直接用，或装上 skill 让你自己的 AI agent 建模。团队使用可联系 Forgent3D。",
      ogLocale: "zh_CN",
      kicker: "Plans",
      h1: "选择适合你的 Forgent3D 工作流",
      intro:
        "云端 Agent 免配置、打开就能用。已经在用 AI IDE 的话，装上 skill，同一个 CAD agent 就跑在你的终端里。",
      plans: [
        {
          name: "Forgent3D Agent",
          badge: "网页运行",
          price: "开放试用",
          text: "在浏览器里输入需求，让托管 agent 生成 CAD 代码、运行构建并预览真实 3D 结果。",
          items: ["免安装 CAD 环境", "内置 agent 生成与修正流程", "适合快速验证、演示和团队试用"],
          primary: "登录后开始使用",
          primaryHref: "https://app.forgent3d.com/try?lang=zh",
          primaryClass: "js-try-link",
          secondary: "联系获取团队方案",
          secondaryHref: `mailto:${CONTACT_EMAIL}`,
        },
        {
          name: "Forgent3D Skill",
          badge: "跑在你的 AI IDE 里",
          price: "免费开源",
          text: "一条命令，让 Claude Code、Codex、Cursor 拥有同一个 CAD agent：它写模型、自己校验，结果落回你的工作区。",
          items: [
            "npx skills add forgent3d/forgent3d-skills",
            "模型代码留在你的仓库，可以 Git 管理和审查",
            "构建和几何测量仍跑在云端，本地不用装 CAD 内核",
          ],
          primary: "查看配置指南",
          primaryHref: "/zh/skills",
          primaryClass: "js-skills-cta",
          secondary: "查看源码",
          secondaryHref: "https://github.com/forgent3d/forgent3d-skills",
          secondaryClass: "js-skills-repo-link",
        },
      ],
      contactTitle: "需要更高额度、团队试用或合作？",
      contactText: `发邮件到 ${CONTACT_EMAIL}，告诉我们你的使用场景。`,
      contactAction: CONTACT_EMAIL,
    };
  }

  return {
    title: "Plans | Forgent3D",
    description:
      "Two ways to use Forgent3D: the zero-setup cloud agent, or the skill that lets your own AI agent build models. Teams can contact Forgent3D.",
    ogLocale: "en_US",
    kicker: "Pricing",
    h1: "Choose the Forgent3D workflow that fits your project",
    intro:
      "The cloud agent needs no setup — open a tab and start. Already working in an AI IDE? Install the skill and the same CAD agent runs in your terminal.",
    plans: [
      {
        name: "Forgent3D Agent",
        badge: "Runs in the browser",
        price: "Open beta",
        text: "Prompt in the browser, let the hosted agent generate CAD code, run builds, and preview real 3D results.",
        items: ["No CAD environment setup", "Built-in agent generation and revision loop", "Good for quick validation, demos, and team trials"],
        primary: "Sign in to start",
        primaryHref: "https://app.forgent3d.com/try?lang=en",
        primaryClass: "js-try-link",
        secondary: "Contact for team access",
        secondaryHref: `mailto:${CONTACT_EMAIL}`,
      },
      {
        name: "Forgent3D Skill",
        badge: "Runs in your AI IDE",
        price: "Free and open source",
        text: "One command gives Claude Code, Codex, and Cursor the same CAD agent: it writes the model, checks its own geometry, and returns the result to your workspace.",
        items: [
          "npx skills add forgent3d/forgent3d-skills",
          "Model code stays in your repo — versioned and reviewable",
          "Builds and measurement still run in the cloud, so there is no local CAD kernel to install",
        ],
        primary: "Setup guide",
        primaryHref: "/en/skills",
        primaryClass: "js-skills-cta",
        secondary: "View source",
        secondaryHref: "https://github.com/forgent3d/forgent3d-skills",
        secondaryClass: "js-skills-repo-link",
      },
    ],
    contactTitle: "Need higher limits, team access, or a partnership?",
    contactText: `Email ${CONTACT_EMAIL} and tell us what you are building.`,
    contactAction: CONTACT_EMAIL,
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/pricing`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/pricing",
        zh: "/zh/pricing",
        "x-default": "/en/pricing",
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

export default async function PricingPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(1080px,calc(100vw-32px))] py-16 text-foreground">
      <a className="inline-flex rounded-md border border-border/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80 hover:border-brand/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {copy.plans.map((plan) => (
          <article key={plan.name} className="rounded-2xl border border-border/80 bg-card/60 p-6 shadow-panel">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{plan.badge}</p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">{plan.name}</h2>
            <p className="mt-3 text-2xl font-semibold text-brand">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.text}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
              {plan.items.map((item) => (
                <li key={item} className="border-t border-border/80 pt-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className={`${plan.primaryClass || ""} inline-flex justify-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90`}
                href={plan.primaryHref}
              >
                {plan.primary}
              </a>
              <a
                className={`${plan.secondaryClass || ""} inline-flex justify-center rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50`}
                href={plan.secondaryHref}
              >
                {plan.secondary}
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.contactTitle}</h2>
        <p className="mt-3 text-muted-foreground">{copy.contactText}</p>
        <a className="mt-5 inline-flex rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50" href={`mailto:${CONTACT_EMAIL}`}>
          {copy.contactAction}
        </a>
      </section>
    </main>
  );
}
