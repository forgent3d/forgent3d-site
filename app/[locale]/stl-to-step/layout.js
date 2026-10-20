import { StepToolChrome } from "../../components/step-tools-page";
import { convertAppUrl, isStepToolLocale } from "../../lib/step-tools";
import { STL_TO_STEP_SLUG, getStlToStepCopy } from "../../lib/stl-to-step";

/** Its own header, like the OpenSCAD pages. The button records click_stl_to_step (public/script.js). */
export default async function StlToStepLayout({ children, params }) {
  const { locale } = await params;
  if (!isStepToolLocale(locale)) return children;
  const t = getStlToStepCopy(locale);
  return (
    <StepToolChrome
      locale={locale}
      slug={STL_TO_STEP_SLUG}
      copy={t}
      cta={{ className: "js-stl-to-step-link", href: convertAppUrl(locale, "stl"), label: t.openTool }}
    >
      {children}
    </StepToolChrome>
  );
}
