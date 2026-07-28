import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Cloud & Local Data：Forgent3D 云端与 skill 如何处理数据",
      description:
        "了解 Forgent3D 云端 Agent 与本地 skill 的数据边界：模型代码放在哪里、构建在哪里跑、结果存在哪里。",
      ogLocale: "zh_CN",
      kicker: "Cloud & Local Data",
      h1: "云端负责构建，代码可以留在你自己的仓库",
      intro:
        "Forgent3D 有两个入口：在网页里直接用云端 Agent，或者装上 skill 让本地 agent 发起。两者跑的是同一套 CAD 引擎，区别只在于模型代码从哪里来、留在哪里。",
      sections: [
        {
          title: "云端 Agent 如何处理数据",
          items: [
            "prompt、生成的模型代码、构建产物和 3D 预览都保存在你的 Forgent3D 工作区里。",
            "CAD 内核和构建环境已经准备好，你不用在本地装任何依赖。",
            "模型默认私有，只有你显式分享或设为公开时才会出现在模型库里。",
          ],
        },
        {
          title: "本地 skill 如何处理数据",
          items: [
            "模型代码由你本地的 agent 写在你自己的仓库里，可以 Git 管理、审查和长期维护。",
            "构建和几何测量仍然发生在云端，构建结果和 3D 链接落回同一个工作区。",
            "适合已经在 Claude Code、Codex、Cursor 里工作、希望模型代码和其他源码放在一起的人。",
          ],
        },
        {
          title: "如何选择",
          items: [
            "想最快看到结果、做演示或分享，直接用云端 Agent。",
            "希望模型代码留在自己仓库里，和项目其他代码一起维护，用 skill。",
            "涉及敏感设计时，先确认要不要把它交给任何托管服务；如果你还接了外部 AI 工具，也要检查它们的上下文上传、隐私和保留策略。",
          ],
        },
      ],
      ctaTitle: "先跑一遍完整链路",
      ctaText: "登录后在云端生成第一个模型；想让本地 agent 也会建模，再装上 skill。",
      ctaLink: "查看快速开始",
    };
  }

  return {
    title: "Cloud & Local Data: How the Forgent3D Cloud and Skill Handle Data",
    description:
      "Understand the data boundary between the Forgent3D cloud agent and the local skill: where model code lives, where builds run, and where results are stored.",
    ogLocale: "en_US",
    kicker: "Cloud & Local Data",
    h1: "Builds run in the cloud; model code can live in your own repo",
    intro:
      "Forgent3D has two entry points: prompt the cloud agent in the browser, or let your local agent drive it through the skill. Both run the same CAD engine — the difference is where the model code comes from and where it stays.",
    sections: [
      {
        title: "How the cloud agent handles data",
        items: [
          "Prompts, generated model code, build output, and 3D previews live in your Forgent3D workspace.",
          "The CAD kernel and build environment are already running, so nothing is installed on your machine.",
          "Models are private by default and only appear in the public library when you explicitly share or publish them.",
        ],
      },
      {
        title: "How the local skill handles data",
        items: [
          "Your local agent writes the model code inside your own repository, where it can be versioned, reviewed, and maintained.",
          "Builds and geometry measurement still run in the cloud, and the built result plus its 3D link land in the same workspace.",
          "It fits people already working in Claude Code, Codex, or Cursor who want model code to sit next to the rest of their source.",
        ],
      },
      {
        title: "How to choose",
        items: [
          "Use the cloud agent when you want the fastest result, a demo, or something to share.",
          "Use the skill when model code should live in your repository alongside the rest of the project.",
          "For sensitive designs, decide first whether they should go to any hosted service; if you also connect external AI tools, review their context sharing, privacy, and retention settings.",
        ],
      },
    ],
    ctaTitle: "Run the loop once, end to end",
    ctaText: "Sign in and generate your first model in the cloud, then install the skill if you want your local agent to model too.",
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
