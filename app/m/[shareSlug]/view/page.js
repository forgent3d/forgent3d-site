import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

/** @deprecated Use `/m/[shareSlug]` for fullscreen 3D. */
export default async function LegacyModelViewRedirect({ params, searchParams }) {
  const { shareSlug } = await params;
  const sp = await searchParams;
  const lang = sp?.lang === "zh" ? "zh" : "en";
  redirect(`/m/${shareSlug}?lang=${lang}`);
}
