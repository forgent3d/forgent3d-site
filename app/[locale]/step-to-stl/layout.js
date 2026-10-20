import { StepToolChrome } from "../../components/step-tools-page";
import { convertAppUrl, isStepToolLocale } from "../../lib/step-tools";
import { STEP_TO_STL_SLUG, getStepToStlCopy } from "../../lib/step-to-stl";

/** Its own header, like the OpenSCAD pages. The button records click_step_to_stl (public/script.js). */
export default async function StepToStlLayout({ children, params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) return children;
  const t = getStepToStlCopy(locale);
  return (
    <StepToolChrome
      locale={locale}
      slug={STEP_TO_STL_SLUG}
      copy={t}
      cta={{ className: "js-step-to-stl-link", href: convertAppUrl(locale, "step"), label: t.openTool }}
    >
      {children}
    </StepToolChrome>
  );
}
