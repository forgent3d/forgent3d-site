import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "AI 生成三维模型软件：云端 Agent 与 Skills | Forgent3D",
      description:
        "Forgent3D 不用安装 CAD 环境，就能在云端生成、运行、预览可编辑 3D CAD；装上 skill，Claude Code、Codex、Cursor 也能建模。",
      ogLocale: "zh_CN",
      h1: "AI 生成三维模型，生成的是能继续改的 CAD",
      intro:
        "Forgent3D 生成的不是一次性图片或改不动的网格，而是尺寸能改、能导出 STEP / STL 的 CAD 模型。网页里直接用；装上 skill，你已经在用的 AI agent 也能建模。",
      points: [
        "不用安装 CAD 软件，打开浏览器就能用",
        "装上 skill，Claude Code、Codex、Cursor 就能建模，模型代码留在你的仓库",
        "生成的是可编辑的 CAD 模型，而不是一次性图片",
        "适合需要反复修改的机械零件、产品原型、装配和可运动模型工作流",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "Forgent3D 是 AI 模型服务吗？",
          a: "Forgent3D 是用对话做 CAD 的工具：你描述零件，它建出可编辑的 3D 模型。装上 skill 后，也能在你本地的 AI IDE 里用。",
        },
        {
          q: "模型数据会上传到云端吗？",
          a: "模型在云端构建，保存在你的 Forgent3D 工作区，默认私有。用 skill 时，模型代码写在你自己的仓库里。",
        },
        {
          q: "生成的模型能直接用吗？",
          a: "能导出 STEP / STL 直接打印或进其他 CAD。第一版不满意的地方，接着说要怎么改，或者直接调尺寸。",
        },
      ],
    };
  }

  return {
    title: "AI 3D Model Generation with a Cloud Agent and Skills | Forgent3D",
    description:
      "Forgent3D generates, runs, and previews editable 3D CAD in the cloud without CAD setup. Install the skill and Claude Code, Codex, or Cursor can model too.",
    ogLocale: "en_US",
    h1: "AI 3D model generation that gives you editable CAD",
    intro:
      "Forgent3D doesn't give you a disposable image or a mesh you can't edit. It builds a CAD model whose dimensions you can change and export as STEP / STL. Use it in the browser, or install the skill so the AI agent you already use can model too.",
    points: [
      "No CAD software to install — open a browser and start",
      "Install the skill so Claude Code, Codex, or Cursor can model, with code staying in your repo",
      "Get an editable CAD model instead of a one-shot image",
      "Works for iterative mechanical parts, product prototypes, assemblies, and motion-ready model workflows",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is Forgent3D an AI model service?",
        a: "Forgent3D is CAD by conversation: describe a part and it builds an editable 3D model. With the skill installed, you can use it from your local AI IDE too.",
      },
      {
        q: "Does model data upload to the cloud?",
        a: "Models are built in the cloud and stored in your Forgent3D workspace, private by default. With the skill, model code is written into your own repository.",
      },
      {
        q: "Can I use the generated model directly?",
        a: "Export STEP / STL to print it or take it into other CAD. If the first version isn't right, say what to change or adjust the dimensions yourself.",
      },
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
  const path = `/${locale}/ai-3d-model-generation`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/ai-3d-model-generation",
        zh: "/zh/ai-3d-model-generation",
        "x-default": "/en/ai-3d-model-generation",
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

export default async function Ai3DModelGenerationPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Forgent3D",
    applicationCategory: "CADApplication",
    operatingSystem: "Windows, macOS, Linux",
    description: copy.description,
    url: `https://www.forgent3d.com/${locale}/ai-3d-model-generation`,
  };

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>
      <ul className="mt-8 space-y-3 text-foreground">
        {copy.points.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
        <div className="mt-4 space-y-5">
          {copy.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
