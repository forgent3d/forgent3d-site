import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Quick Start：用现有 AI agent 开始本地 3D 建模 | Forgent3D",
      description:
        "用 Forgent3D 快速连接 Codex、Claude Code、Cursor 等已有 AI agent，在本机生成、预览和验证三维模型。",
      ogLocale: "zh_CN",
      kicker: "Quick Start",
      h1: "三步跑通本地 AI CAD 验证闭环",
      intro:
        "Forgent3D 的第一目标是让你尽快看到结果：下载桌面端，打开本地模型项目，然后让已有 AI agent 生成模型并读取验证反馈。",
      steps: [
        {
          label: "01",
          title: "下载并打开 Forgent3D",
          text: "从最新 Release 下载桌面端，打开后选择或创建一个模型项目目录。这个目录会保存模型代码、构建结果和截图。",
        },
        {
          label: "02",
          title: "连接你已有的 AI agent",
          text: "继续使用 Codex、Claude Code、Cursor 或其他 AI 编程工具。让 agent 在项目中生成模型代码，并按照本地项目结构组织文件。",
        },
        {
          label: "03",
          title: "预览、验证、继续迭代",
          text: "保存模型后在 Forgent3D 中重建预览。agent 可以读取构建状态、截图和尺寸信息，再基于真实结果继续修改。",
        },
      ],
      promptTitle: "可以直接给 agent 的提示",
      prompt:
        "Create a simple mechanical bracket model in this project. After generating the model code, use the local Forgent3D verification tools to rebuild it, capture a screenshot, read dimensions, and revise the model until the result matches the request.",
      checklistTitle: "第一次使用建议检查",
      checklist: [
        "项目目录能被你的 AI IDE 打开。",
        "模型文件、截图和缓存目录有清晰命名。",
        "外部 AI 工具的隐私和上下文设置符合你的项目要求。",
        "先从简单零件开始，再尝试装配或可运动模型。",
      ],
      localDataLink: "了解本地数据工作流",
    };
  }

  return {
    title: "Quick Start: Local AI CAD Modeling with Existing Agents | Forgent3D",
    description:
      "Quickly connect Forgent3D with Codex, Claude Code, Cursor, and other existing AI agents to generate, preview, and verify 3D models locally.",
    ogLocale: "en_US",
    kicker: "Quick Start",
    h1: "Run the local AI CAD verification loop in three steps",
    intro:
      "Forgent3D is designed to get you to a visible result quickly: download the desktop app, open a local model project, then let your existing AI agent generate models and read verification feedback.",
    steps: [
      {
        label: "01",
        title: "Download and open Forgent3D",
        text: "Install the latest desktop release, then choose or create a local model project folder. This folder stores model code, build output, and screenshots.",
      },
      {
        label: "02",
        title: "Connect the AI agent you already use",
        text: "Keep working with Codex, Claude Code, Cursor, or another coding agent. Ask it to generate model code in the project and follow the local project structure.",
      },
      {
        label: "03",
        title: "Preview, verify, and iterate",
        text: "After saving a model, rebuild and preview it in Forgent3D. The agent can read build status, screenshots, and dimensions before revising the model again.",
      },
    ],
    promptTitle: "Prompt you can give an agent",
    prompt:
      "Create a simple mechanical bracket model in this project. After generating the model code, use the local Forgent3D verification tools to rebuild it, capture a screenshot, read dimensions, and revise the model until the result matches the request.",
    checklistTitle: "First-run checklist",
    checklist: [
      "The project folder can be opened by your AI IDE.",
      "Model files, screenshots, and cache folders have clear names.",
      "External AI tool privacy and context settings match your project requirements.",
      "Start with a simple part before trying assemblies or motion-ready models.",
    ],
    localDataLink: "Read about local data",
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
      <a className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx" href={`/${locale}`}>
        Forgent3D
      </a>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
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
