import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "AI 生成三维模型软件：从 Prompt 到参数化 CAD | Forgent3D",
      description:
        "了解 AI 生成三维模型与代码生成三维模型的工程化流程：从 Prompt 到参数化 CAD，结合几何验证、bbox 与截图证据，提升 CAD 建模可靠性。",
      ogLocale: "zh_CN",
      h1: "AI 生成三维模型软件，如何落地到参数化 CAD？",
      intro:
        "Forgent3D 帮你把文本提示转成可验证的参数化 CAD 结果，覆盖 AI 生成三维模型、代码生成三维模型与工程 CAD 建模场景，适用于 Codex、Claude Code、Cursor 等 coding agents。",
      points: [
        "Prompt -> 参数化 CAD，而不是不可编辑网格，适合 AI 生成三维模型工作流",
        "每次生成都附带几何证据（截图、bbox、状态），便于 CAD 结果验证",
        "适合代码生成三维模型、AI CAD 建模与工程迭代流程",
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "AI 生成三维模型和普通网格生成有什么区别？",
          a: "普通网格更偏展示，而参数化 CAD 更适合代码生成三维模型后的编辑、复用与制造流程。",
        },
        {
          q: "如何验证 AI 生成三维模型或 CAD 的结果是否正确？",
          a: "建议引入几何证据链：重建状态、截图视图和尺寸边界框（bbox）进行自动校验，提升 AI CAD 建模可靠性。",
        },
      ],
    };
  }

  return {
    title: "AI 3D Model Generation: From Prompt to Parametric CAD | Forgent3D",
    description:
      "Learn a production workflow for AI 3D model generation: prompt-to-parametric CAD with verifiable geometry evidence, screenshots, and bbox checks.",
    ogLocale: "en_US",
    h1: "AI 3D model generation, built for engineering workflows",
    intro:
      "Forgent3D turns prompts into verifiable parametric CAD outputs for Codex, Claude Code, Cursor, and other coding agents.",
    points: [
      "Prompt -> parametric CAD, not just display meshes",
      "Geometry evidence on every run (screenshots, bbox, status)",
      "Built for code-to-3D modeling and iteration loops",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "How is AI 3D model generation different from mesh generation?",
        a: "Mesh output is great for visualization, while parametric CAD is better for editable, reusable, and manufacturable workflows.",
      },
      {
        q: "How do I verify AI-generated CAD outputs?",
        a: "Use geometry evidence such as rebuild status, screenshots, and bounding-box checks to validate each iteration automatically.",
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
