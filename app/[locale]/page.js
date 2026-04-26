import { notFound } from "next/navigation";
import { getLandingPageHtml, isSupportedLocale } from "../lib/landing-page";

function getSeoCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D | 从 Prompt 到参数化 CAD",
      description:
        "Forgent3D 面向 Codex、Claude Code、Cursor 与 CLI coding agents，将 Prompt 转为可验证的参数化 CAD 几何结果。",
      ogLocale: "zh_CN",
    };
  }

  return {
    title: "Forgent3D | From Prompt to Parametric CAD",
    description:
      "Forgent3D turns prompts into verifiable parametric CAD geometry for Codex, Claude Code, Cursor, and CLI coding agents.",
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
