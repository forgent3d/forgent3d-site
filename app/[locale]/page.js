import { notFound } from "next/navigation";
import { getLandingPageHtml, isSupportedLocale } from "../lib/landing-page";

function getSeoCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D | 用现有 AI agent 生成真实 3D 模型",
      description:
        "Forgent3D 连接 Codex、Claude Code、Cursor 等已有 AI agent，在本机生成、预览和验证真实三维模型。免费开源，数据留在本地。",
      ogLocale: "zh_CN",
    };
  }

  return {
    title: "Forgent3D | Generate Real 3D Models with Existing AI Agents",
    description:
      "Forgent3D connects Codex, Claude Code, Cursor, and other existing AI agents to generate, preview, and verify real 3D models locally. Free, open source, and local-first.",
    ogLocale: "en_US",
  };
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const seo = getSeoCopy(locale);
  const path = `/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        zh: "/zh",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: seo.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocalizedPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: getLandingPageHtml(locale) }} />;
}
