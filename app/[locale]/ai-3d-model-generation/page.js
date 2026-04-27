import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "AI 生成三维模型软件：本地预览与验证 | Forgent3D",
      description:
        "Forgent3D 让 Codex、Claude Code、Cursor 等已有 AI agent 在本机生成、预览和验证三维模型。开源免费，数据留在本地，适合工程化 AI 3D 工作流。",
      ogLocale: "zh_CN",
      h1: "AI 生成三维模型，需要真实预览和本地验证",
      intro:
        "Forgent3D 不是又一个封闭的云端生成器。它连接你已经在用的 Codex、Claude Code、Cursor 等 AI 编程工具，在本机把模型想法变成可查看、可重建、可验证的三维结果。",
      points: [
        "继续使用已有 AI agent，无需购买或切换到新的专用 AI 生成服务",
        "模型代码、构建结果、截图和验证信息都在本地项目中完成",
        "每次生成都可以预览真实三维结果，并读取尺寸、截图和构建状态",
        "适合需要反复修改的机械零件、产品原型、装配和可运动模型工作流",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "Forgent3D 是新的 AI 模型服务吗？",
          a: "不是。Forgent3D 更像本地预览与验证工作台，配合 Codex、Claude Code、Cursor 等已有 agent 使用，让它们能基于真实三维反馈继续改模型。",
        },
        {
          q: "模型数据会上传到云端吗？",
          a: "核心工作流在本机完成。模型代码、预览缓存、截图和验证结果留在你的本地项目中，适合私有设计、实验和开源协作。",
        },
        {
          q: "AI 生成三维模型为什么需要验证？",
          a: "因为生成结果需要确认是否能构建、尺寸是否合理、视图是否符合预期。Forgent3D 把这些反馈变成 agent 可读取的信息，减少凭感觉修改。",
        },
      ],
    };
  }

  return {
    title: "AI 3D Model Generation with Local Preview and Verification | Forgent3D",
    description:
      "Forgent3D helps Codex, Claude Code, Cursor, and other existing AI agents generate, preview, and verify 3D models locally. Free, open source, and built for local data.",
    ogLocale: "en_US",
    h1: "AI 3D model generation needs real preview and local verification",
    intro:
      "Forgent3D is not another closed cloud generator. It connects the coding agents you already use to a local preview and verification loop, so model ideas become rebuildable, inspectable 3D results.",
    points: [
      "Keep using Codex, Claude Code, Cursor, or another agent without switching to a new AI service",
      "Keep model code, build output, screenshots, and validation data in your local project",
      "Preview real 3D results and let agents read dimensions, screenshots, and build status",
      "Works for iterative mechanical parts, product prototypes, assemblies, and motion-ready model workflows",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is Forgent3D a new AI model service?",
        a: "No. Forgent3D is a local preview and verification workbench for the agents you already use, such as Codex, Claude Code, and Cursor.",
      },
      {
        q: "Does model data upload to the cloud?",
        a: "The core workflow runs locally. Model code, preview artifacts, screenshots, and validation results stay in your project on your machine.",
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
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
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
