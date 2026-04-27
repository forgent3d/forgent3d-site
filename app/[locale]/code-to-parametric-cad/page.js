import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "代码生成三维模型软件：本地 AI CAD 工作流 | Forgent3D",
      description:
        "Forgent3D 让 Codex、Claude Code、Cursor 等已有 agent 生成可维护的模型代码，并在本地完成三维预览、验证和迭代。免费开源，数据留在本机。",
      ogLocale: "zh_CN",
      h1: "代码生成三维模型，让模型成为可验证的资产",
      intro:
        "当模型由代码生成，它就可以被 Git 管理、被审查、被复用，也可以被 AI agent 持续修改。Forgent3D 把代码、三维预览和本地验证连接起来，让 agent 不只输出片段，还能根据真实结果继续修正。",
      bullets: [
        "继续使用 Codex / Claude Code / Cursor 等已有 AI 编程工具，不绑定新的云端生成器",
        "模型代码、构建反馈、截图和验证结果保留在本地项目中",
        "agent 可以读取真实三维反馈，再修正尺寸、结构和生成逻辑",
        "适合机械零件、产品原型、装配结构和可运动模型的持续迭代",
      ],
    };
  }

  return {
    title: "Code to 3D Models with Local AI CAD Verification | Forgent3D",
    description:
      "Forgent3D helps Codex, Claude Code, Cursor, and other existing agents generate maintainable model code, then preview and verify 3D results locally. Free, open source, and local-first.",
    ogLocale: "en_US",
    h1: "Code-generated 3D models should be verifiable assets",
    intro:
      "When models are generated as code, they can be versioned, reviewed, reused, and improved by agents. Forgent3D connects that code to local 3D preview and verification, so agents can revise against real results instead of guessing.",
    bullets: [
      "Keep using Codex / Claude Code / Cursor and other existing coding agents without adopting a new cloud generator",
      "Keep model code, build feedback, screenshots, and validation results inside your local project",
      "Let agents read real 3D feedback before they adjust dimensions, structure, and generation logic",
      "Works for mechanical parts, product prototypes, assemblies, and motion-ready model iteration",
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
  const path = `/${locale}/code-to-parametric-cad`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/code-to-parametric-cad",
        zh: "/zh/code-to-parametric-cad",
        "x-default": "/en/code-to-parametric-cad",
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

export default async function CodeToParametricCadPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
      <ul className="mt-8 space-y-3 text-slate-200">
        {copy.bullets.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </main>
  );
}
