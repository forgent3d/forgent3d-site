import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";
import {
  fetchPublishedModels,
  formatPublishedAt,
  kindLabel,
} from "../../lib/cad-agent";

export const dynamic = "force-dynamic";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "模型库 | Forgent3D",
      description:
        "浏览 Forgent3D 用户分享的参数化 CAD 模型：零件、装配与 MJCF，可预览并下载模型包。",
      ogLocale: "zh_CN",
      h1: "模型库",
      intro: "由 Forgent3D 桌面端发布的公开模型快照。点击卡片查看详情、参数与下载链接。",
      empty: "还没有已发布的模型。在桌面端打开模型后，使用 Share 即可发布到此处。",
      viewModel: "查看模型",
    };
  }

  return {
    title: "Model Gallery | Forgent3D",
    description:
      "Browse parametric CAD models shared from Forgent3D: parts, assemblies, and MJCF snapshots with previews and downloads.",
    ogLocale: "en_US",
    h1: "Model Gallery",
    intro:
      "Public model snapshots published from the Forgent3D desktop app. Open a card for details, parameters, and downloads.",
    empty: "No published models yet. Open a model in the desktop app and use Share to publish here.",
    viewModel: "View model",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/gallery`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/gallery",
        zh: "/zh/gallery",
        "x-default": "/en/gallery",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export default async function GalleryPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);
  const data = await fetchPublishedModels({ limit: 48 });
  const items = data?.items ?? [];

  return (
    <main className="mx-auto w-[min(1180px,calc(100vw-32px))] py-16 text-slate-100">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyanx">Gallery</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>

      {items.length === 0 ? (
        <p className="mt-12 rounded-2xl border border-line bg-slate-950/55 px-6 py-8 text-slate-400">
          {copy.empty}
        </p>
      ) : (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.shareSlug}
              href={`/m/${item.shareSlug}?lang=${locale}&from=gallery`}
              className="group overflow-hidden rounded-[1.5rem] border border-line bg-slate-950/55 shadow-panel backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyanx/40"
            >
              <div className="aspect-[4/3] bg-[#050b14]">
                {item.previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.previewUrl}
                    alt={item.title}
                    className="h-full w-full object-contain p-3 transition group-hover:brightness-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
                    {kindLabel(item.kind, locale)}
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyanx">
                  {kindLabel(item.kind, locale)}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-cyanx">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">{item.description}</p>
                )}
                <p className="mt-4 font-mono text-xs text-slate-500">
                  {formatPublishedAt(item.publishedAt, locale) || copy.viewModel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
