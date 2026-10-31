import Link from "next/link";
import { BRAND_BUTTON, CHIP_SURFACE, isSupportedLocale } from "../../lib/landing-page";
import { b123dAppUrl, b123dPath, getB123dCopy } from "../../lib/build123d-online";

/**
 * build123d 在线页自带顶栏,不用站点那条(app/[locale]/(site)/layout.js),同 OpenSCAD 那几页:搜 "build123d online"
 * 进来的人要的是编辑器,不是 AI CAD agent 的导航。顶栏只留品牌(回首页)、工具名、语言切换和进 app /build123d 的按钮
 * (.js-b123d-link,public/script.js 改写 href、记 click_build123d_online)。页脚写明 build123d 是谁的、我们是自己实现的。
 */
export default async function Build123dOnlineLayout({ children, params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return children;
  const t = getB123dCopy(locale);

  return (
    <>
      <header className="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
        <div className="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <a className="shrink-0" href={`/${locale}`} aria-label="Forgent3D">
              <img src="/logo-mark.png" alt="" className="h-7 w-7 object-contain" width="28" height="28" />
            </a>
            <span className="h-5 w-px shrink-0 bg-border" aria-hidden />
            <Link className="truncate text-sm font-semibold text-foreground" href={b123dPath(locale)}>
              {t.toolName}
            </Link>
          </div>
          <div className="site-header-actions flex shrink-0 items-center gap-2">
            <button className={`js-lang-toggle ${CHIP_SURFACE} h-9 px-3 font-mono text-xs`} type="button" aria-label="Switch language">
              {locale === "zh" ? "EN" : "中"}
            </button>
            <a className={`js-b123d-link ${BRAND_BUTTON} h-9`} href={b123dAppUrl(locale)}>
              {t.openEditor}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="mx-auto w-[min(960px,calc(100vw-32px))] border-t border-border/60 py-8 text-xs leading-5 text-muted-foreground">
        <div className="flex flex-wrap gap-5">
          <a className="transition-colors hover:text-brand" href={`/${locale}`}>{t.homeLink}</a>
          <Link className="transition-colors hover:text-brand" href={`/${locale}/generators`}>{t.generatorsLink}</Link>
          <Link className="transition-colors hover:text-brand" href={`/${locale}/openscad-viewer`}>{t.viewerLink}</Link>
          <Link className="js-skills-cta transition-colors hover:text-brand" href={`/${locale}/skills`}>{t.skillsLink}</Link>
        </div>
        <p className="mt-4 max-w-3xl text-muted-foreground/80">
          {t.credit}{" "}
          <a className="underline underline-offset-2 hover:text-brand" href="https://github.com/gumyr/build123d" rel="noreferrer" target="_blank">
            github.com/gumyr/build123d
          </a>
          {" · "}
          <a className="underline underline-offset-2 hover:text-brand" href={`https://app.forgent3d.com/licenses?lang=${locale}`}>
            {t.licences}
          </a>
        </p>
      </footer>
    </>
  );
}
