import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "快速开始：登录即用，或装进你自己的 agent | Forgent3D",
      description:
        "登录 Forgent3D Agent，在云端生成并预览 CAD；或者装上 skill，让 Claude Code、Codex、Cursor 直接建模。",
      ogLocale: "zh_CN",
      kicker: "快速开始",
      h1: "登录就能开始，也可以从你自己的 agent 开始",
      intro:
        "登录就能在网页里建模，不用装任何东西。已经在用 AI IDE 的话，装上 Forgent3D skill，在编辑器里也能建模。",
      tryLink: "立即开始",
      skillsLink: "安装 Skill",
      steps: [
        {
          label: "01",
          title: "登录",
          text: "用邮箱、Google 或 GitHub 登录，进入工作台。",
        },
        {
          label: "02",
          title: "描述你要的零件",
          text: "描述零件、产品想法或机构，AI 建出可编辑的 3D 模型，哪里不对接着说。",
        },
        {
          label: "03",
          title: "想在自己的 agent 里做，就装 skill",
          text: "一条 npx skills add forgent3d/forgent3d-skills，Claude Code、Codex、Cursor 就能建模，模型出现在同一个工作区。",
        },
      ],
      promptTitle: "可以直接试的一句话",
      prompt:
        "一块 L 型支架：两边各 80 mm，宽 60 mm，厚 5 mm，每边两个 M6 孔，内角 5 mm 圆角。",
      checklistTitle: "从网页开始，还是从 skill 开始",
      checklist: [
        "想最快看到结果、做演示或分享，直接用网页。",
        "已经在 Claude Code、Codex、Cursor 里写代码，装 skill，让模型代码留在你的仓库。",
        "两种方式做出来的模型都在同一个工作区，可以随时换。",
        "先从简单零件开始，再尝试装配或可运动模型。",
      ],
      localDataLink: "了解云端与本地数据",
    };
  }

  return {
    title: "Quick Start: Sign In, or Run It From Your Own Agent | Forgent3D",
    description:
      "Sign in to Forgent3D Agent to generate and preview CAD in the cloud, or install the skill so Claude Code, Codex, and Cursor can build models.",
    ogLocale: "en_US",
    kicker: "Quick Start",
    h1: "Sign in and start, or start from the agent you already use",
    intro:
      "Sign in and model in the browser, with nothing to install. Already working in an AI IDE? Install the Forgent3D skill and model from your editor too.",
    tryLink: "Get started",
    skillsLink: "Install the skill",
    steps: [
      {
        label: "01",
        title: "Sign in",
        text: "Sign in with email, Google, or GitHub to open the workbench.",
      },
      {
        label: "02",
        title: "Describe the part",
        text: "Describe a part, product idea, or mechanism. The AI builds an editable 3D model; say what's off and keep going.",
      },
      {
        label: "03",
        title: "Prefer your own agent? Install the skill",
        text: "One npx skills add forgent3d/forgent3d-skills and Claude Code, Codex, or Cursor can model too — models show up in the same workspace.",
      },
    ],
    promptTitle: "A prompt to try",
    prompt:
      "An L bracket: two 80 mm legs, 60 mm wide, 5 mm thick, two M6 holes per leg, 5 mm inside fillet.",
    checklistTitle: "Start in the browser, or start from the skill",
    checklist: [
      "Use the browser for the fastest result, demos, and sharing.",
      "Install the skill if you already write code in Claude Code, Codex, or Cursor and want model code to live in your repo.",
      "Either way, models end up in the same workspace — you can switch any time.",
      "Start with a simple part before trying assemblies or motion-ready models.",
    ],
    localDataLink: "Read about cloud and local data",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/quick-start`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/quick-start",
        zh: "/zh/quick-start",
        "x-default": "/en/quick-start",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "article",
      url: path,
    },
  };
}

export default async function QuickStartPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a className="js-try-link inline-flex rounded-md bg-brand px-5 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90" href={`https://app.forgent3d.com?lang=${locale}`}>
          {copy.tryLink}
        </a>
        <a className="js-skills-cta inline-flex rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50" href={`/${locale}/skills`}>
          {copy.skillsLink}
        </a>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {copy.steps.map((step) => (
          <article key={step.label} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <span className="font-mono text-xs text-brand">{step.label}</span>
            <h2 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </article>
        ))}
      </div>
      <section className="mt-12 rounded-2xl border border-brand/30 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.promptTitle}</h2>
        <pre className="mt-5 overflow-x-auto rounded-md border border-border/80 bg-background p-5 text-sm leading-6 text-muted-foreground">
          <code>{copy.prompt}</code>
        </pre>
      </section>
      <section className="mt-12 rounded-2xl border border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.checklistTitle}</h2>
        <ul className="mt-5 space-y-3 text-muted-foreground">
          {copy.checklist.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <a className="mt-6 inline-flex rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50" href={`/${locale}/local-data`}>
          {copy.localDataLink}
        </a>
      </section>
    </main>
  );
}
