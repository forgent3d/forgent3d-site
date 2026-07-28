import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "代码生成三维模型软件：云端 Agent 与 Skills | Forgent3D",
      description:
        "Forgent3D 在云端运行 AI 生成的 CAD 代码；装上 skill，Claude Code、Codex、Cursor 也能把模型作为可维护资产长期迭代。",
      ogLocale: "zh_CN",
      h1: "代码生成三维模型，让模型成为可验证的资产",
      intro:
        "当模型由代码生成，它就可以被 Git 管理、被审查、被复用，也可以被 AI agent 持续修改。Forgent3D 把 CAD 环境放在云端，省掉全部配置；装上 skill，你已经在用的 agent 也能走同一条链路。",
      bullets: [
        "云端 Agent 适合快速试用、演示和分享，把 prompt、代码、构建、预览连成一条流程",
        "Skill 适合已经在 AI IDE 里工作的人：模型代码留在自己的仓库，构建仍跑在云端",
        "agent 可以读取真实三维反馈，再修正尺寸、结构和生成逻辑",
        "适合机械零件、产品原型、装配结构和可运动模型的持续迭代",
      ],
    };
  }

  return {
    title: "Code to 3D Models with a Cloud Agent and Skills | Forgent3D",
    description:
      "Forgent3D runs AI-generated CAD code in the cloud. Install the skill and Claude Code, Codex, or Cursor can maintain model code as a long-lived asset.",
    ogLocale: "en_US",
    h1: "Code-generated 3D models should be verifiable assets",
    intro:
      "When models are generated as code, they can be versioned, reviewed, reused, and improved by agents. Forgent3D keeps the CAD environment in the cloud so there is nothing to set up, and the skill lets the agent you already use run the same loop.",
    bullets: [
      "Use the cloud agent for quick trials, demos, and sharing, with prompt, code, build, and preview in one flow",
      "Use the skill when you already work in an AI IDE: model code stays in your repo while builds run in the cloud",
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
