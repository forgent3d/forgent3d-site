import { StlToCadPage, stlToCadMetadata, stlToCadStaticParams } from "../../../components/stl-to-cad-page";

const SLUG = "stl-to-fusion-360";

export function generateStaticParams() {
  return stlToCadStaticParams();
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return stlToCadMetadata(SLUG, locale);
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <StlToCadPage slug={SLUG} locale={locale} />;
}
