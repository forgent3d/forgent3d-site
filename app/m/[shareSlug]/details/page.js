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
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-slate-100">
      <div className="mb-8">
        <Link
          href={`/${locale}/gallery`}
          className="font-mono text-xs uppercase tracking-[0.18em] text-cyanx transition hover:text-white"
        >
          ← {t.backGallery}
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
          {kindLabel(model.kind, locale)}
        </span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{model.title}</h1>
      {model.description && (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{model.description}</p>
      )}
      {publishedAt && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
          {t.published} {publishedAt}
        </p>
      )}

      {glbSrc ? (
        <div className="mt-10">
          <Link
            href={modelHref}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-6 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
          >
            {t.view3d} →
          </Link>
        </div>
      ) : (
        <>
          {model.previewUrl && (
            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-line bg-slate-950/55 p-3 shadow-panel backdrop-blur-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={model.previewUrl}
                alt={`Preview of ${model.title}`}
                className="mx-auto block max-h-[420px] w-full object-contain"
              />
            </div>
          )}
          <p className="mt-4 rounded-2xl border border-line/80 bg-slate-950/55 px-5 py-4 text-sm leading-7 text-slate-400">
            {t.noGlb}
          </p>
        </>
      )}

      {model.archiveUrl && (
        <section className="mt-10 overflow-hidden rounded-2xl border border-line bg-slate-950/55 p-6 shadow-panel backdrop-blur-xl">
          <h2 className="text-xl font-semibold">{t.downloadHow}</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-400">
            {t.downloadSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a
            href={model.archiveUrl}
            download={`${model.sourceModelName}.${archiveExt}`}
            className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5"
          >
            ↓ {t.download}
          </a>
        </section>
      )}

      {modelParams && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">{t.parameters}</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-slate-950/55">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {Object.entries(modelParams).map(([key, val], i) => (
                  <tr key={key} className={i > 0 ? "border-t border-line" : undefined}>
                    <td className="w-[40%] px-4 py-3 text-slate-400">{key}</td>
                    <td className="px-4 py-3 font-mono text-slate-200">{String(val)}</td>
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
          <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-slate-950/55">
            {parts.map((part, i) => (
              <div
                key={part.name}
                className={`flex flex-wrap items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <span className="font-medium text-slate-100">{part.name}</span>
                <span className="ml-auto font-mono text-xs text-slate-500">{part.path}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-14 border-t border-line pt-6 text-sm text-slate-500">
        <p>
          {t.model}:{" "}
          <code className="font-mono text-slate-400">{model.sourceModelName}</code>
          {model.manifest?.kernel && (
            <>
              {" "}
              · {t.kernel}:{" "}
              <code className="font-mono text-slate-400">{model.manifest.kernel}</code>
            </>
          )}
        </p>
      </footer>
    </main>
  );
}
