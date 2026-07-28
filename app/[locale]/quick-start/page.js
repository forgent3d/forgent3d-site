import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Quick Start：登录即用，或装进你自己的 agent | Forgent3D",
      description:
        "登录 Forgent3D Agent，在云端生成并预览 CAD；或者装上 skill，让 Claude Code、Codex、Cursor 直接建模。",
      ogLocale: "zh_CN",
      kicker: "Quick Start",
      h1: "登录就能开始，也可以从你自己的 agent 开始",
      intro:
        "Forgent3D Agent 是最快入口：不用安装 CAD 环境，直接在云端生成、运行和预览模型。已经在用 AI IDE 的话，装上 Forgent3D skill，同一个 CAD agent 就在你的终端里。",
      tryLink: "登录后开始使用",
      skillsLink: "安装 Skill",
      steps: [
        {
          label: "01",
          title: "登录云端 Agent",
          text: "登录后进入 Forgent3D Agent，开始托管的 CAD 生成流程。",
        },
        {
          label: "02",
          title: "让 agent 生成 CAD",
          text: "描述零件、产品想法或机构，agent 会生成可编辑 CAD 代码，并在准备好的云端环境中运行。",
        },
        {
          label: "03",
          title: "想在自己的 agent 里做，就装 skill",
          text: "一条 npx skills add forgent3d/forgent3d-skills，Claude Code、Codex、Cursor 就能建模，结果照样落到同一个工作区。",
        },
      ],
      promptTitle: "可以直接给 Agent 的提示",
      prompt:
        "Create a simple mechanical bracket model. Generate editable CAD code, run it, preview the model, and revise it until the geometry matches the request.",
      checklistTitle: "从网页开始，还是从 skill 开始",
      checklist: [
        "想最快看到结果、做演示或分享，直接用网页里的 Agent。",
        "已经在 Claude Code、Codex、Cursor 里写代码，装 skill，让模型代码留在你的仓库。",
        "两条路径跑的是同一个 agent 和同一套 CAD 引擎，模型都落在同一个工作区，可以随时换。",
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
      "Forgent3D Agent is the fastest front door: no CAD environment setup, just generate, run, and preview models in the cloud. Already working in an AI IDE? Install the Forgent3D skill and the same CAD agent runs in your terminal.",
    tryLink: "Sign in to start",
    skillsLink: "Install the skill",
    steps: [
      {
        label: "01",
        title: "Sign in to the cloud Agent",
        text: "Sign in to Forgent3D Agent, then start the hosted CAD generation loop.",
      },
      {
        label: "02",
        title: "Let the agent generate CAD",
        text: "Describe a part, product idea, or mechanism. The agent writes editable CAD code and runs it in a prepared cloud environment.",
      },
      {
        label: "03",
        title: "Prefer your own agent? Install the skill",
        text: "One npx skills add forgent3d/forgent3d-skills and Claude Code, Codex, or Cursor can model too — results land in the same workspace.",
      },
    ],
    promptTitle: "Prompt you can give the Agent",
    prompt:
      "Create a simple mechanical bracket model. Generate editable CAD code, run it, preview the model, and revise it until the geometry matches the request.",
    checklistTitle: "Start in the browser, or start from the skill",
    checklist: [
      "Use the browser Agent for the fastest result, demos, and sharing.",
      "Install the skill if you already write code in Claude Code, Codex, or Cursor and want model code to live in your repo.",
      "Both paths run the same agent and the same CAD engine, and models land in the same workspace — you can switch any time.",
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
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <a className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a className="js-try-link inline-flex rounded-full bg-linear-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow" href={`https://app.forgent3d.com/try?lang=${locale}`}>
          {copy.tryLink}
        </a>
        <a className="js-skills-cta inline-flex rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50" href={`/${locale}/skills`}>
          {copy.skillsLink}
        </a>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {copy.steps.map((step) => (
          <article key={step.label} className="rounded-[2rem] border border-line bg-white/[0.03] p-6">
            <span className="font-mono text-xs text-cyanx">{step.label}</span>
            <h2 className="mt-8 text-2xl font-semibold text-white">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
          </article>
        ))}
      </div>
      <section className="mt-12 rounded-[2rem] border border-cyanx/30 bg-slate-950/60 p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.promptTitle}</h2>
        <pre className="mt-5 overflow-x-auto rounded-2xl border border-line bg-void p-5 text-sm leading-6 text-slate-300">
          <code>{copy.prompt}</code>
        </pre>
      </section>
      <section className="mt-12 rounded-[2rem] border border-line bg-white/[0.03] p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.checklistTitle}</h2>
        <ul className="mt-5 space-y-3 text-slate-300">
          {copy.checklist.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <a className="mt-6 inline-flex rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50" href={`/${locale}/local-data`}>
          {copy.localDataLink}
        </a>
      </section>
    </main>
  );
}
