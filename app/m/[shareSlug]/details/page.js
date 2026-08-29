import Link from "next/link";
import { notFound } from "next/navigation";
import {
  fetchPublishedModel,
  formatPublishedAt,
  kindLabel,
  manifestDisplayParams,
  resolveGlbUrl,
} from "../../../lib/cad-agent";

export const dynamic = "force-dynamic";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      backGallery: "返回模型库",
      download: "下载模型包",
      downloadHow: "如何使用模型包",
      downloadSteps: [
        "下载并解压 ZIP 压缩包。",
        "将解压后的 models/、.aicad/ 等内容复制到 Forgent3D 桌面端的项目文件夹中（保持与本地项目相同的目录结构）。",
        "在客户端打开该项目并选择此模型，即可导出 STEP、STL 等格式。",
      ],
      view3d: "打开 3D 预览",
      noGlb:
        "暂无 3D 预览（GLB 未上传）。请在桌面端重新 Share，并确认发布日志中有 “GLB generated”。",
      parameters: "参数",
      parts: "零件",
      published: "发布于",
      model: "模型",
      kernel: "内核",
    };
  }

  return {
    backGallery: "Back to gallery",
    download: "Download model archive",
    downloadHow: "How to use the archive",
    downloadSteps: [
      "Download and unzip the archive.",
      "Copy the extracted folders (e.g. models/, .aicad/) into your Forgent3D desktop project folder, keeping the same layout as a local project.",
      "Open that project in the desktop app, select this model, and export STEP, STL, or other supported formats.",
    ],
    view3d: "Open 3D preview",
    noGlb:
      "No 3D preview yet (GLB was not uploaded). Re-share from the desktop app and confirm the log shows “GLB generated”.",
    parameters: "Parameters",
    parts: "Parts",
    published: "Published",
    model: "Model",
    kernel: "Kernel",
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
    title: `${model.title} — Details | Forgent3D`,
    description,
    openGraph: {
      title: model.title,
      description,
      type: "article",
      url: `/m/${shareSlug}/details`,
      ...(model.previewUrl ? { images: [{ url: model.previewUrl }] } : {}),
    },
  };
}

export default async function SharedModelDetailsPage({ params, searchParams }) {
  const { shareSlug } = await params;
  const sp = await searchParams;
  const locale = sp?.lang === "zh" ? "zh" : "en";
  const fromGallery = sp?.from === "gallery";
  const t = getCopy(locale);

  const model = await fetchPublishedModel(shareSlug);
  if (!model) notFound();

  const publishedAt = formatPublishedAt(model.publishedAt, locale);
  const glbSrc = await resolveGlbUrl(model);
  const modelParams = manifestDisplayParams(model.manifest);
  const parts = model.manifest?.parts;
  const archiveName = model.archiveUrl?.match(/\.(\w+)(?:\?|$)/)?.[1];
  const archiveExt = archiveName || "zip";
  const modelHref = `/m/${shareSlug}?lang=${locale}`;

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      {fromGallery && (
        <div className="mb-8">
          <Link
            href={`/${locale}/gallery`}
            className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            ← {t.backGallery}
          </Link>
        </div>
      )}

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-md border border-border/80 bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {kindLabel(model.kind, locale)}
        </span>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{model.title}</h1>
      {model.description && (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{model.description}</p>
      )}
      {publishedAt && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t.published} {publishedAt}
        </p>
      )}

      {glbSrc ? (
        <div className="mt-10">
          <Link
            href={modelHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90"
          >
            {t.view3d} →
          </Link>
        </div>
      ) : (
        <>
          {model.previewUrl && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-3 shadow-panel backdrop-blur-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={model.previewUrl}
                alt={`Preview of ${model.title}`}
                className="mx-auto block max-h-[420px] w-full object-contain"
              />
            </div>
          )}
          <p className="mt-4 rounded-md border border-border/80 bg-card/60 px-5 py-4 text-sm leading-7 text-muted-foreground">
            {t.noGlb}
          </p>
        </>
      )}

      {model.archiveUrl && (
        <section className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-6 shadow-panel backdrop-blur-xl">
          <h2 className="text-xl font-semibold">{t.downloadHow}</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
            {t.downloadSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a
            href={model.archiveUrl}
            download={`${model.sourceModelName}.${archiveExt}`}
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90"
          >
            ↓ {t.download}
          </a>
        </section>
      )}

      {modelParams && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">{t.parameters}</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-border/80 bg-card/60">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {Object.entries(modelParams).map(([key, val], i) => (
                  <tr key={key} className={i > 0 ? "border-t border-border/80" : undefined}>
                    <td className="w-[40%] px-4 py-3 text-muted-foreground">{key}</td>
                    <td className="px-4 py-3 font-mono text-foreground">{String(val)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {parts && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            {t.parts} ({parts.length})
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-border/80 bg-card/60">
            {parts.map((part, i) => (
              <div
                key={part.name}
                className={`flex flex-wrap items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-border/80" : ""}`}
              >
                <span className="font-medium text-foreground">{part.name}</span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{part.path}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-14 border-t border-border/80 pt-6 text-sm text-muted-foreground">
        <p>
          {t.model}:{" "}
          <code className="font-mono text-muted-foreground">{model.sourceModelName}</code>
          {model.manifest?.kernel && (
            <>
              {" "}
              · {t.kernel}:{" "}
              <code className="font-mono text-muted-foreground">{model.manifest.kernel}</code>
            </>
          )}
        </p>
      </footer>
    </main>
  );
}
