import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "代码生成三维模型软件：云端 Agent 与 Skills | Forgent3D",
      description:
        "Forgent3D 用 AI 写出可编辑的 CAD 代码；装上 skill，Claude Code、Codex、Cursor 也能建模，模型代码留在你的仓库里长期维护。",
      ogLocale: "zh_CN",
      h1: "代码生成三维模型，模型能像代码一样管理",
      intro:
        "当模型由代码生成，它就可以被 Git 管理、被审查、被复用，也可以被 AI agent 持续修改。Forgent3D 在网页里直接能用，不用配置；装上 skill，你已经在用的 agent 也能建模。",
      bullets: [
        "网页版适合快速试用、演示和分享，描述、建模、预览、修改都在一个页面里",
        "Skill 适合已经在 AI IDE 里工作的人：模型代码留在自己的仓库，构建仍跑在云端",
        "尺寸都是参数，改一个数整个模型跟着变",
        "适合机械零件、产品原型、装配结构和可运动模型的持续迭代",
      ],
    };
  }

  return {
    title: "Code to 3D Models with a Cloud Agent and Skills | Forgent3D",
    description:
      "Forgent3D runs AI-generated CAD code in the cloud. Install the skill and Claude Code, Codex, or Cursor can maintain model code as a long-lived asset.",
    ogLocale: "en_US",
    h1: "Code-generated 3D models you manage like code",
    intro:
      "When models are generated as code, they can be versioned, reviewed, reused, and improved by agents. Forgent3D works in the browser with nothing to set up, and the skill lets the agent you already use model too.",
    bullets: [
      "Use the browser for quick trials, demos, and sharing — describe, build, preview, and revise on one page",
      "Use the skill when you already work in an AI IDE: model code stays in your repo while builds run in the cloud",
      "Every dimension is a parameter — change one number and the whole model follows",
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
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>
      <ul className="mt-8 space-y-3 text-foreground">
        {copy.bullets.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </main>
  );
}
