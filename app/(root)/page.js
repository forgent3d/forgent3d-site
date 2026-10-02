import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ZH_REGIONS = new Set(["CN", "HK", "MO", "TW"]);

function detectLocale(countryCode, acceptLanguage) {
  const normalizedCountry = (countryCode || "").toUpperCase();
  if (ZH_REGIONS.has(normalizedCountry)) {
    return "zh";
  }

  const normalizedLang = (acceptLanguage || "").toLowerCase();
  if (normalizedLang.startsWith("zh") || normalizedLang.includes(",zh")) {
    return "zh";
  }

  return "en";
}

export default async function HomePage() {
  const headerStore = await headers();
  const countryCode = headerStore.get("cf-ipcountry");
  const acceptLanguage = headerStore.get("accept-language");
  const locale = detectLocale(countryCode, acceptLanguage);
  redirect(`/${locale}`);
}
