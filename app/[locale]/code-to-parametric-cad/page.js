import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "代码生成三维模型软件：Agent 与开源桌面版 | Forgent3D",
      description:
        "Forgent3D Agent 在网页里运行 AI 生成的 CAD 代码；Forgent3D Desktop 开源，适合把模型作为可维护资产长期迭代。",
      ogLocale: "zh_CN",
      h1: "代码生成三维模型，让模型成为可验证的资产",
      intro:
        "当模型由代码生成，它就可以被 Git 管理、被审查、被复用，也可以被 AI agent 持续修改。Forgent3D Agent 省掉网页试用前的环境配置；Forgent3D Desktop 承接复杂本地项目。",
      bullets: [
        "Agent 适合快速试用、演示和分享，把 prompt、代码、构建、预览放进浏览器流程",
        "Desktop 适合私有文件、复杂装配和长期迭代，模型代码与构建反馈可以保留在本地项目中",
        "agent 可以读取真实三维反馈，再修正尺寸、结构和生成逻辑",
        "适合机械零件、产品原型、装配结构和可运动模型的持续迭代",
      ],
    };
  }

  return {
    title: "Code to 3D Models with Agent and Open-Source Desktop | Forgent3D",
    description:
      "Forgent3D Agent runs AI-generated CAD code in the browser. Forgent3D Desktop is open source for maintainable model code and local projects.",
    ogLocale: "en_US",
    h1: "Code-generated 3D models should be verifiable assets",
    intro:
      "When models are generated as code, they can be versioned, reviewed, reused, and improved by agents. Forgent3D Agent removes setup for browser trials; Forgent3D Desktop carries the workflow into local projects.",
    bullets: [
      "Use Agent for quick trials, demos, and sharing with prompt, code, build, and preview in the browser",
      "Use Desktop for private files, complex assemblies, and long-running iteration with model code and build feedback in your local project",
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
      <a className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <h1 className="mt-10 text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
      <ul className="mt-8 space-y-3 text-slate-200">
        {copy.bullets.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </main>
  );
}
