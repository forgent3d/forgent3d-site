import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "AI 生成三维模型软件：云端 Agent 与 Skills | Forgent3D",
      description:
        "Forgent3D 不用安装 CAD 环境，就能在云端生成、运行、预览可编辑 3D CAD；装上 skill，Claude Code、Codex、Cursor 也能建模。",
      ogLocale: "zh_CN",
      h1: "AI 生成三维模型，需要可运行 CAD 代码和真实预览",
      intro:
        "Forgent3D 不把 AI 3D 停在一次性图片或不可控 mesh。云端 Agent 让你直接生成和运行 CAD；装上 skill，你已经在用的 AI agent 也能走同一条链路。",
      points: [
        "免安装 CAD 环境，生成结果直接在云端运行",
        "装上 skill，Claude Code、Codex、Cursor 就能建模，模型代码留在你的仓库",
        "生成结果是可重建、可修改、可检查的 CAD 代码，而不是一次性图片",
        "适合需要反复修改的机械零件、产品原型、装配和可运动模型工作流",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "Forgent3D 是 AI 模型服务吗？",
          a: "Forgent3D 是一个云端 CAD agent：它生成可运行的模型代码、构建真实几何并给你可编辑的 3D 结果。装上 skill 后，同一个 agent 也能从你本地的 AI IDE 里发起。",
        },
        {
          q: "模型数据会上传到云端吗？",
          a: "CAD 生成和构建跑在云端，模型和预览保存在你的 Forgent3D 工作区，默认私有。用 skill 时，模型代码由本地 agent 写在你自己的仓库里，构建仍在云端完成。",
        },
        {
          q: "AI 生成三维模型为什么需要验证？",
          a: "因为生成结果需要确认是否能构建、尺寸是否合理、视图是否符合预期。Forgent3D 把这些反馈变成 agent 可读取的信息，减少凭感觉修改。",
        },
      ],
    };
  }

  return {
    title: "AI 3D Model Generation with a Cloud Agent and Skills | Forgent3D",
    description:
      "Forgent3D generates, runs, and previews editable 3D CAD in the cloud without CAD setup. Install the skill and Claude Code, Codex, or Cursor can model too.",
    ogLocale: "en_US",
    h1: "AI 3D model generation needs runnable CAD code and real preview",
    intro:
      "Forgent3D does not stop at disposable images or uncontrolled meshes. The cloud agent generates and runs real CAD, and the skill lets the AI agent you already use run the same loop.",
    points: [
      "Run generated CAD in the cloud without installing a CAD environment",
      "Install the skill so Claude Code, Codex, or Cursor can model, with code staying in your repo",
      "Generate rebuildable, editable, inspectable CAD code instead of one-shot images",
      "Works for iterative mechanical parts, product prototypes, assemblies, and motion-ready model workflows",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is Forgent3D an AI model service?",
        a: "Forgent3D is a cloud CAD agent: it writes runnable model code, builds real geometry, and gives you an editable 3D result. With the skill installed, the same agent can be driven from your local AI IDE.",
      },
      {
        q: "Does model data upload to the cloud?",
        a: "Generation and builds run in the cloud, and models and previews live in your Forgent3D workspace, private by default. With the skill, your local agent writes model code into your own repository while builds still run in the cloud.",
      },
      {
        q: "Why does AI 3D generation need verification?",
        a: "Generated models still need to build correctly, match expected dimensions, and look right from useful views. Forgent3D turns that feedback into information agents can read before they iterate.",
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
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <a className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <h1 className="mt-10 text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
      <ul className="mt-8 space-y-3 text-slate-200">
        {copy.points.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
        <div className="mt-4 space-y-5">
          {copy.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-white">{faq.q}</h3>
              <p className="mt-1 text-slate-300">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
