import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Cloud & Local Data：Forgent3D Agent 与 Desktop 如何处理数据",
      description:
        "了解 Forgent3D Agent 与 Forgent3D Desktop 的数据边界，按项目敏感度选择合适工作流。",
      ogLocale: "zh_CN",
      kicker: "Cloud & Local Data",
      h1: "Agent 快速试用，Desktop 给完整本地控制",
      intro:
        "Forgent3D 现在有两条路径：Agent 适合免配置试用、演示和快速验证；Desktop 开源，适合私有模型、复杂项目和长期工程工作流。",
      sections: [
        {
          title: "Agent 如何处理数据",
          items: [
            "Agent 会在网页环境中运行 CAD 生成和构建流程。",
            "它的价值是免安装、依赖已准备好、agent 流程内置，适合快速验证想法。",
            "不要把 Web 描述成完整桌面版的替代品；它是省配置、可托管、适合快速验证的浏览器入口。",
          ],
        },
        {
          title: "Desktop 如何处理数据",
          items: [
            "桌面版开源，模型代码、构建产物、截图和验证结果保存在你的项目目录。",
            "它适合私有设计、专业模型、复杂装配、长期迭代和需要接入 Codex、Claude Code、Cursor 的工作流。",
            "开源桌面版提供透明度和可控性：高级用户可以检查、扩展和本地掌控整个流程。",
          ],
        },
        {
          title: "如何选择",
          items: [
            "想让用户最快理解产品价值，用 Agent。",
            "想处理敏感文件或需要完整工程控制，用 Desktop。",
            "如果你使用外部 AI 工具，也要检查它们自己的上下文上传、隐私和保留策略。",
          ],
        },
      ],
      ctaTitle: "先从 Agent 体验",
      ctaText: "免登录试一次托管 agent；当项目需要本地控制时，再下载开源桌面版。",
      ctaLink: "查看快速开始",
    };
  }

  return {
    title: "Cloud & Local Data: How Forgent3D Agent and Desktop Handle Data",
    description:
      "Understand the data boundary between Forgent3D Agent and Forgent3D Desktop.",
    ogLocale: "en_US",
    kicker: "Cloud & Local Data",
    h1: "Agent is for quick trials. Desktop gives full local control.",
    intro:
      "Forgent3D now has two paths: Agent is for zero-setup trials, demos, sharing, and rapid validation; Desktop is open source and fits private models, complex projects, and long-running engineering workflows.",
    sections: [
      {
        title: "How Agent handles data",
        items: [
          "Agent runs CAD generation and builds in a prepared browser environment.",
          "Its value is zero setup, prepared dependencies, and a built-in agent flow for fast idea validation.",
          "Do not position Web as a complete replacement for Desktop; it is the convenient hosted browser entry point for rapid validation.",
        ],
      },
      {
        title: "How Desktop handles data",
        items: [
          "Desktop is open source. Model code, build output, screenshots, and verification data live in your project folder.",
          "It fits private designs, commercial models, complex assemblies, long-running iteration, and workflows with Codex, Claude Code, or Cursor.",
          "The open-source desktop app provides transparency and control for advanced users who need to inspect, extend, and own the local workflow.",
        ],
      },
      {
        title: "How to choose",
        items: [
          "Use Agent when you want users to understand the product value quickly.",
          "Use Desktop for sensitive files or workflows that need complete engineering control.",
          "If you connect external AI tools, also review their context sharing, privacy, and retention settings.",
        ],
      },
    ],
    ctaTitle: "Start with the Agent",
    ctaText: "Try the hosted agent without login, then move to the open-source desktop app when the project needs local control.",
    ctaLink: "Open Quick Start",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/local-data`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/local-data",
        zh: "/zh/local-data",
        "x-default": "/en/local-data",
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

export default async function LocalDataPage({ params }) {
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
      <div className="mt-12 grid gap-5">
        {copy.sections.map((section) => (
          <section key={section.title} className="rounded-[2rem] border border-line bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {section.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <section className="mt-12 rounded-[2rem] border border-cyanx/30 bg-cyanx/[0.06] p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.ctaTitle}</h2>
        <p className="mt-3 text-slate-300">{copy.ctaText}</p>
        <a className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950" href={`/${locale}/quick-start`}>
          {copy.ctaLink}
        </a>
      </section>
    </main>
  );
}
