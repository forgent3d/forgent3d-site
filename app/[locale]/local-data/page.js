import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Local Data：本地 AI CAD 工作流如何处理数据 | Forgent3D",
      description:
        "了解 Forgent3D 的本地数据工作流：模型代码、构建结果、截图和验证信息留在本机，配合现有 AI agent 完成三维模型预览与验证。",
      ogLocale: "zh_CN",
      kicker: "Local Data",
      h1: "模型数据留在你的本地项目里",
      intro:
        "Forgent3D 的核心价值不是把模型上传到云端生成，而是在你的电脑上连接 AI agent、模型代码、三维预览和验证结果。这样，私有设计、实验项目和开源模型都能使用同一套本地反馈闭环。",
      sections: [
        {
          title: "哪些数据在本地",
          items: [
            "模型源码保存在你的项目目录中，便于 Git 管理、审查和复用。",
            "构建产物、预览缓存、截图和验证结果由本机工作流生成。",
            "agent 读取的是本地工具返回的状态、尺寸、截图路径和错误信息。",
          ],
        },
        {
          title: "为什么这对 AI 建模重要",
          items: [
            "agent 不需要靠你手动描述截图或错误日志，可以直接读取验证反馈。",
            "每次修改都能基于真实构建结果继续迭代，减少凭感觉修模型。",
            "复杂零件、装配结构和可运动模型可以保留在同一个本地工程里演进。",
          ],
        },
        {
          title: "你仍然需要注意",
          items: [
            "Forgent3D 负责本地预览与验证；你使用的外部 AI 工具可能有自己的上下文上传和隐私设置。",
            "如果项目包含敏感模型或商业设计，请同时检查 Codex、Claude Code、Cursor 等工具的隐私配置。",
            "建议把模型、截图和导出文件纳入清晰的项目目录与 .gitignore 规则。",
          ],
        },
      ],
      ctaTitle: "想直接试一下？",
      ctaText: "从 Quick Start 开始，把本地项目连接到你已有的 AI agent。",
      ctaLink: "查看快速开始",
    };
  }

  return {
    title: "Local Data: How Forgent3D Handles AI CAD Workflow Data",
    description:
      "Learn how Forgent3D keeps model code, build output, screenshots, and verification data in your local project while working with existing AI agents.",
    ogLocale: "en_US",
    kicker: "Local Data",
    h1: "Model data stays in your local project",
    intro:
      "Forgent3D is not built around uploading models to a cloud generator. It connects AI agents, model code, 3D preview, and verification results on your own machine, so private designs, experiments, and open-source models can share the same local feedback loop.",
    sections: [
      {
        title: "What stays local",
        items: [
          "Model source files live in your project folder, ready for Git, review, and reuse.",
          "Build artifacts, preview caches, screenshots, and validation results are produced by the local workflow.",
          "Agents read local tool feedback such as status, dimensions, screenshot paths, and error messages.",
        ],
      },
      {
        title: "Why this matters for AI modeling",
        items: [
          "Agents do not need you to manually describe screenshots or error logs when local feedback is available.",
          "Each change can be based on real build output instead of guesswork.",
          "Complex parts, assemblies, and motion-ready models can evolve inside the same local engineering project.",
        ],
      },
      {
        title: "What you should still check",
        items: [
          "Forgent3D handles local preview and verification; external AI tools may have their own context sharing and privacy settings.",
          "For sensitive models or commercial designs, also review the privacy settings in Codex, Claude Code, Cursor, or any agent you use.",
          "Keep model files, screenshots, and exports organized with clear project folders and .gitignore rules.",
        ],
      },
    ],
    ctaTitle: "Want to try it now?",
    ctaText: "Start with Quick Start and connect a local project to the AI agent you already use.",
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
      <a className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx" href={`/${locale}`}>
        Forgent3D
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
