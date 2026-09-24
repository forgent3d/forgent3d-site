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
        "网页里打开就能用。已经在用 AI IDE 的话，装上 skill，在编辑器里也能建模。",
      plans: [
        {
          name: "Forgent3D Agent",
          badge: "网页运行",
          price: "开放试用",
          text: "在浏览器里描述零件，AI 建出可编辑的 3D 模型，接着改、导出。",
          items: ["免安装 CAD 环境", "对话里建模、对话里改", "适合快速验证、演示和团队试用"],
          primary: "立即开始",
          primaryHref: "https://app.forgent3d.com?lang=zh",
          primaryClass: "js-try-link",
          secondary: "联系获取团队方案",
          secondaryHref: `mailto:${CONTACT_EMAIL}`,
        },
        {
          name: "Forgent3D Skill",
          badge: "跑在你的 AI IDE 里",
          price: "免费开源",
          text: "一条命令，让 Claude Code、Codex、Cursor 也能建模，做出来的模型出现在你的工作区。",
          items: [
            "npx skills add forgent3d/forgent3d-skills",
            "模型代码留在你的仓库，可以 Git 管理和审查",
            "本地不用装 CAD 软件或任何依赖",
          ],
          primary: "查看配置指南",
          primaryHref: "/zh/skills",
          primaryClass: "js-skills-cta",
          secondary: "查看源码",
          secondaryHref: "https://github.com/forgent3d/forgent3d-skills",
          secondaryClass: "js-skills-repo-link",
        },
      ],
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
      "Open a tab and start. Already working in an AI IDE? Install the skill and model from your editor too.",
    plans: [
      {
        name: "Forgent3D Agent",
        badge: "Runs in the browser",
        price: "Open beta",
        text: "Describe a part in the browser; the AI builds an editable 3D model you keep revising and export.",
        items: ["No CAD environment setup", "Build and revise by chatting", "Good for quick validation, demos, and team trials"],
        primary: "Get started",
        primaryHref: "https://app.forgent3d.com?lang=en",
        primaryClass: "js-try-link",
        secondary: "Contact for team access",
        secondaryHref: `mailto:${CONTACT_EMAIL}`,
      },
      {
        name: "Forgent3D Skill",
        badge: "Runs in your AI IDE",
        price: "Free and open source",
        text: "One command lets Claude Code, Codex, and Cursor model too, with results showing up in your workspace.",
        items: [
          "npx skills add forgent3d/forgent3d-skills",
          "Model code stays in your repo — versioned and reviewable",
          "No CAD software or dependencies to install locally",
        ],
        primary: "Setup guide",
        primaryHref: "/en/skills",
        primaryClass: "js-skills-cta",
        secondary: "View source",
        secondaryHref: "https://github.com/forgent3d/forgent3d-skills",
        secondaryClass: "js-skills-repo-link",
      },
    ],
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
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
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
                className={`${plan.primaryClass || ""} inline-flex justify-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90`}
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
    </main>
  );
}
