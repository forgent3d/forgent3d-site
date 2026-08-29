import { notFound } from "next/navigation";
import {
  getLandingPageHtml,
  HERO_PRODUCT_PRELOAD,
  isSupportedLocale,
} from "../lib/landing-page";

function getSeoCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D | 云端 AI CAD Agent，也能装进 Claude Code、Codex、Cursor",
      description:
        "Forgent3D 让你不用安装 CAD 环境，就能在云端生成、运行和预览可编辑 3D CAD；一条命令装上 skill，你的 AI IDE 也会做 CAD。",
      ogLocale: "zh_CN",
    };
  }

  return {
    title: "Forgent3D | Cloud AI CAD Agent, and a Skill for Your AI IDE",
    description:
      "Forgent3D generates, runs, and previews editable 3D CAD in the cloud with no setup. One command installs the skill so Claude Code, Codex, or Cursor can build models too.",
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

  return (
    <>
      <link
        rel="preload"
        as="image"
        imageSrcSet={HERO_PRODUCT_PRELOAD.imageSrcSet}
        imageSizes={HERO_PRODUCT_PRELOAD.imageSizes}
        fetchPriority="high"
      />
      <div dangerouslySetInnerHTML={{ __html: getLandingPageHtml(locale) }} />
    </>
  );
}
