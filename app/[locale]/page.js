import { notFound } from "next/navigation";
import { getLandingPageHtml, isSupportedLocale } from "../lib/landing-page";

function getSeoCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D | 浏览器里的 AI CAD agent 与开源桌面版",
      description:
        "Forgent3D 让你不用安装 CAD 环境，就能在网页里让 Agent 生成、运行和预览可编辑 3D CAD；桌面版开源，适合本地项目和深度控制。",
      ogLocale: "zh_CN",
    };
  }

  return {
    title: "Forgent3D | Browser AI CAD Agent and Open-Source Desktop",
    description:
      "Forgent3D lets an Agent generate, run, and preview editable 3D CAD in the browser without CAD setup. The open-source desktop app fits local projects and deeper control.",
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
