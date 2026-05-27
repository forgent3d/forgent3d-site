import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Quick Start：先免登录试用，再进入桌面版 | Forgent3D",
      description:
        "打开 Forgent3D Agent 免登录试用网页 CAD 生成与预览；需要完整本地控制时，再下载开源桌面版。",
      ogLocale: "zh_CN",
      kicker: "Quick Start",
      h1: "30 秒免登录试用，严肃项目用桌面版",
      intro:
        "Forgent3D Agent 是最快入口：不用安装 CAD 环境，直接在网页里生成、运行和预览模型。桌面版开源，适合私有项目和深度工程工作流。",
      tryLink: "免登录试用",
      desktopLink: "下载开源桌面版",
      steps: [
        {
          label: "01",
          title: "打开网页试用",
          text: "进入浏览器里的 Forgent3D Agent，不需要登录就可以先跑通一次托管 CAD 生成流程。",
        },
        {
          label: "02",
          title: "让 agent 生成 CAD",
          text: "描述零件、产品想法或机构，agent 会生成可编辑 CAD 代码，并在准备好的网页环境中运行。",
        },
        {
          label: "03",
          title: "需要完整控制时切到桌面版",
          text: "当模型进入私有项目、复杂工程或长期迭代阶段，下载开源桌面版，把工作流放回本地项目。",
        },
      ],
      promptTitle: "可以直接给 Agent 的提示",
      prompt:
        "Create a simple mechanical bracket model. Generate editable CAD code, run it, preview the model, and revise it until the geometry matches the request.",
      checklistTitle: "选择 Web 还是 Desktop",
      checklist: [
        "想快速试用、演示或分享，优先用 Agent。",
        "想处理私有文件、复杂项目或完整本地控制，使用 Desktop。",
        "Web 的价值是托管运行和更少配置；Desktop 的价值是完整开源和本地控制。",
        "先从简单零件开始，再尝试装配或可运动模型。",
      ],
      localDataLink: "了解云端与本地数据",
    };
  }

  return {
    title: "Quick Start: Try Without Login, Then Use Desktop for Full Control | Forgent3D",
    description:
      "Try Forgent3D Agent in the browser without login, then use the open-source desktop app when you need full local control.",
    ogLocale: "en_US",
    kicker: "Quick Start",
    h1: "Try without login in 30 seconds, use Desktop for serious projects",
    intro:
      "Forgent3D Agent is the fastest front door: no CAD environment setup, just generate, run, and preview models in the browser. Desktop is open source and fits private projects and deeper engineering workflows.",
    tryLink: "Try without login",
    desktopLink: "Download Desktop",
    steps: [
      {
        label: "01",
        title: "Open the browser trial",
        text: "Start with Forgent3D Agent in the browser. You can run the hosted CAD generation loop before creating an account.",
      },
      {
        label: "02",
        title: "Let the agent generate CAD",
        text: "Describe a part, product idea, or mechanism. The agent writes editable CAD code and runs it in a prepared browser environment.",
      },
      {
        label: "03",
        title: "Move to Desktop when you need full control",
        text: "When the model becomes private, complex, or long-lived, use the open-source desktop app and keep the workflow inside your local project.",
      },
    ],
    promptTitle: "Prompt you can give the Agent",
    prompt:
      "Create a simple mechanical bracket model. Generate editable CAD code, run it, preview the model, and revise it until the geometry matches the request.",
    checklistTitle: "Choose Web or Desktop",
    checklist: [
      "Use Agent first for quick trials, demos, sharing, and zero-setup exploration.",
      "Use Desktop for private files, complex projects, and full local control.",
      "Web focuses on hosted execution and less setup; Desktop provides complete open-source local control.",
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
        <a className="js-try-link inline-flex rounded-full bg-linear-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow" href="https://app.forgent3d.com/try">
          {copy.tryLink}
        </a>
        <a className="js-download-link inline-flex rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50" href="#">
          {copy.desktopLink}
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
