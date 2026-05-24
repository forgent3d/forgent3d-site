import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { GlbViewer } from "../../components/glb-viewer";
import { ModelOverlayPanel } from "../../components/model-overlay-panel";
import {
  fetchPublishedModel,
  formatPublishedAt,
  kindLabel,
  resolveGlbUrl,
} from "../../lib/cad-agent";

export const dynamic = "force-dynamic";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      moreDetails: "完整详情",
      hint: "拖拽旋转 · 滚轮缩放",
      loadingModel: "加载模型中…",
      loadModelError: "模型加载失败",
      published: "发布于",
      showInfo: "信息",
      hideInfo: "收起",
    };
  }
  return {
    moreDetails: "Full details",
    hint: "Drag to rotate · Scroll to zoom",
    loadingModel: "Loading model…",
    loadModelError: "Failed to load model",
    published: "Published",
    showInfo: "Info",
    hideInfo: "Hide",
  };
}

export async function generateMetadata({ params }) {
  const { shareSlug } = await params;
  const model = await fetchPublishedModel(shareSlug);
  if (!model) return { title: "Model not found | Forgent3D" };

  const description =
    model.description ||
    `${kindLabel(model.kind, "en")} shared from Forgent3D — ${model.sourceModelName}`;

  return {
    title: `${model.title} | Forgent3D`,
    description,
    openGraph: {
      title: model.title,
      description,
      type: "article",
      url: `/m/${shareSlug}`,
      ...(model.previewUrl ? { images: [{ url: model.previewUrl }] } : {}),
    },
  };
}

export default async function SharedModelPage({ params, searchParams }) {
  const { shareSlug } = await params;
  const sp = await searchParams;
  const locale = sp?.lang === "zh" ? "zh" : "en";
  const fromGallery = sp?.from === "gallery";
  const t = getCopy(locale);

  const model = await fetchPublishedModel(shareSlug);
  if (!model) notFound();

  const glbSrc = await resolveGlbUrl(model);
  const detailsHref = `/m/${shareSlug}/details?lang=${locale}${fromGallery ? "&from=gallery" : ""}`;

  if (!glbSrc) {
    redirect(detailsHref);
  }

  const publishedAt = formatPublishedAt(model.publishedAt, locale);

  return (
    <main className="fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden bg-[#050b14] text-slate-100">
      <div className="absolute inset-0 z-0">
        <GlbViewer
          src={glbSrc}
          poster={model.previewUrl || undefined}
          alt={model.title}
          fullscreen
          className="h-full w-full"
          loadingLabel={t.loadingModel}
          errorLabel={t.loadModelError}
        />
      </div>

      <ModelOverlayPanel showLabel={t.showInfo} hideLabel={t.hideInfo}>
        <span className="inline-block rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
          {kindLabel(model.kind, locale)}
        </span>

        <h1 className="mt-4 text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl">
          {model.title}
        </h1>

        {model.description && (
          <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-300 md:line-clamp-none">
            {model.description}
          </p>
        )}

        {publishedAt && (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
            {t.published} {publishedAt}
          </p>
        )}

        <div className="mt-auto border-t border-line/60 pt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyanx/80">
            {t.hint}
          </p>
          <Link
            href={detailsHref}
            className="mt-3 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400 transition hover:text-cyanx"
          >
            {t.moreDetails} →
          </Link>
        </div>
      </ModelOverlayPanel>
    </main>
  );
}
