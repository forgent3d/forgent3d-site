"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * public/script.js wires the page's DOM (scroll reveals, copy buttons, link rewrites) once, on the full
 * page load. A client-side navigation swaps in DOM it has never seen — the homepage's `.reveal`
 * sections then stay at opacity 0 below the fold. Re-run its page init after every route change; on
 * the first load the script is not there yet and runs itself.
 */
export function PageEnhancer() {
  const pathname = usePathname();
  useEffect(() => {
    window.forgentInitPage?.();
  }, [pathname]);
  return null;
}
