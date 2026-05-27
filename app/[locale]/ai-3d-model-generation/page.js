import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "AI 生成三维模型软件：Agent 与开源桌面版 | Forgent3D",
      description:
        "Forgent3D Agent 不用安装 CAD 环境，就能在网页里生成、运行、预览可编辑 3D CAD；Forgent3D Desktop 开源，适合本地项目。",
      ogLocale: "zh_CN",
      h1: "AI 生成三维模型，需要可运行 CAD 代码和真实预览",
      intro:
        "Forgent3D 不把 AI 3D 停在一次性图片或不可控 mesh。Agent 让你在网页里生成和运行 CAD；Desktop 开源，适合私有和复杂项目。",
      points: [
        "Agent 免安装 CAD 环境，直接在网页里运行生成结果",
        "Desktop 开源，适合私有文件、复杂工程和长期迭代",
        "生成结果是可重建、可修改、可检查的 CAD 代码，而不是一次性图片",
        "适合需要反复修改的机械零件、产品原型、装配和可运动模型工作流",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "Forgent3D 是 AI 模型服务吗？",
          a: "Forgent3D Agent 用于快速跑通网页生成、预览和迭代；Forgent3D Desktop 是开源本地工作台。",
        },
        {
          q: "模型数据会上传到云端吗？",
          a: "使用 Agent 时，CAD 生成和构建会在网页环境中运行。使用 Desktop 时，模型代码、预览缓存、截图和验证结果可以保留在你的本地项目中。",
        },
        {
          q: "AI 生成三维模型为什么需要验证？",
          a: "因为生成结果需要确认是否能构建、尺寸是否合理、视图是否符合预期。Forgent3D 把这些反馈变成 agent 可读取的信息，减少凭感觉修改。",
        },
      ],
    };
  }

  return {
    title: "AI 3D Model Generation with Agent and Open-Source Desktop | Forgent3D",
    description:
      "Forgent3D Agent generates, runs, and previews editable 3D CAD in the browser without CAD setup. Forgent3D Desktop is open source for local projects.",
    ogLocale: "en_US",
    h1: "AI 3D model generation needs runnable CAD code and real preview",
    intro:
      "Forgent3D does not stop at disposable images or uncontrolled meshes. Agent lets you generate and run CAD in the browser; Desktop is open source and fits private or complex projects.",
    points: [
      "Use Agent to run generated CAD in the browser without installing a CAD environment",
      "Use Desktop for private files, complex engineering, and long-running local iteration",
      "Generate rebuildable, editable, inspectable CAD code instead of one-shot images",
      "Works for iterative mechanical parts, product prototypes, assemblies, and motion-ready model workflows",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is Forgent3D an AI model service?",
        a: "Forgent3D Agent quickly validates ideas through browser execution, preview, and iteration. Forgent3D Desktop is the open-source local workbench.",
      },
      {
        q: "Does model data upload to the cloud?",
        a: "When you use Agent, CAD generation and builds run in a prepared browser environment. When you use Desktop, model code, preview artifacts, screenshots, and validation results can stay in your local project.",
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
