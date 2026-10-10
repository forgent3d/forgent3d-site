import Link from "next/link";
import { BRAND_BUTTON, CHIP_SURFACE, isSupportedLocale } from "../../lib/landing-page";
import { scadPath } from "../../lib/openscad-to-step";
import { getViewerCopy, viewerAppUrl, viewerPath } from "../../lib/openscad-viewer";

/**
 * OpenSCAD viewer 自带顶栏,和 openscad-to-step 那组一样的理由:搜 "openscad viewer / online" 进来的人要的是
 * 预览器,不是 AI CAD agent 的导航。顶栏只留品牌(回首页)、工具名、语言切换和进预览器的按钮;转换器那组页面的
 * 入口在正文和页脚。沿用 .site-header 的贴顶 + 滚动磨砂(public/script.js)。
 */
export default async function OpenScadViewerLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return children;
  const t = getViewerCopy(locale);

  return (
    <>
      <header className="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
        <div className="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <a className="shrink-0" href={`/${locale}`} aria-label="Forgent3D">
              <img src="/logo-mark.png" alt="" className="h-7 w-7 object-contain" width="28" height="28" />
            </a>
            <span className="h-5 w-px shrink-0 bg-border" aria-hidden />
            <Link className="truncate text-sm font-semibold text-foreground" href={viewerPath(locale)}>
              {t.toolName}
            </Link>
          </div>
          <div className="site-header-actions flex shrink-0 items-center gap-2">
            <button className={`js-lang-toggle ${CHIP_SURFACE} h-9 px-3 font-mono text-xs`} type="button" aria-label="Switch language">
              {t.switchLabel}
            </button>
            <a className={`js-scad-viewer-link ${BRAND_BUTTON} h-9`} href={viewerAppUrl(locale)}>
              {t.openViewer}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="mx-auto w-[min(960px,calc(100vw-32px))] border-t border-border/60 py-8 text-xs leading-5 text-muted-foreground">
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-brand" href={`/${locale}`}>{t.homeLink}</a>
          <Link className="transition-colors hover:text-brand" href={scadPath(locale)}>{t.converterLink}</Link>
          <Link className="transition-colors hover:text-brand" href={`/${locale}/generators`}>{t.generatorsLink}</Link>
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground/80">
          {t.credit}{" "}
          <a className="underline underline-offset-2 hover:text-brand" href="https://openscad.org" rel="noreferrer" target="_blank">
            openscad.org
          </a>
        </p>
      </footer>
    </>
  );
}
