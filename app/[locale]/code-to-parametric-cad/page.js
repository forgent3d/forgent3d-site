import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "代码生成三维模型软件：Code to Parametric CAD 工作流 | Forgent3D",
      description:
        "面向开发者的代码生成三维模型方案：通过 Prompt 与代码协同生成参数化 CAD，并用几何证据校验结果，适合 AI 生成三维模型与 CAD 建模协作。",
      ogLocale: "zh_CN",
      h1: "代码生成三维模型：从代码到参数化 CAD 软件工作流",
      intro:
        "这个流程专为 coding agents 设计，让 AI 输出不止是代码片段，而是可验证、可迭代的 CAD 结果，覆盖代码生成三维模型与 AI CAD 开发流程。",
      bullets: [
        "支持 Codex / Claude Code / Cursor 的代码生成三维模型工作流",
        "每次改动都有重建与几何检查，提升 AI 生成三维模型可控性",
        "更适合机械零件、夹具、法兰等参数化 CAD 场景",
      ],
    };
  }

  return {
    title: "Code to Parametric CAD: Generate 3D Models from Code | Forgent3D",
    description:
      "A developer-first code-to-parametric-CAD workflow: generate 3D models from prompts and code, then verify geometry with evidence-driven checks.",
    ogLocale: "en_US",
    h1: "Code to parametric CAD for reliable 3D generation",
    intro:
      "Move from raw code output to verifiable CAD artifacts with rebuild status, screenshots, and geometry checks.",
    bullets: [
      "Built for Codex / Claude Code / Cursor coding loops",
      "Evidence-backed CAD verification on each iteration",
      "Ideal for brackets, fixtures, flanges, and other parametric parts",
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
