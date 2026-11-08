import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

// Pages as Markdown (scripts/build-markdown.mjs writes public/<path>.md at build time; /en/agents.md is served as a
// static file and never reaches here). Two things happen here, for page paths under a locale only:
// - a request that asks for Markdown (`Accept: text/markdown`, as some AI fetchers send) gets the .md instead of HTML;
// - every HTML page points at its .md in a Link header, so a crawler that reads headers finds it.
//
// The .md is read straight from the Workers static assets (the ASSETS binding). Not NextResponse.rewrite: on the
// deployed worker a rewrite to a public file lands in the Next router, which has no such page and answers 404 —
// `wrangler dev` serves it, production did not (11-08, every Accept: text/markdown request got a 404 page). Anything
// that goes wrong here falls back to the HTML page, never to an error.
const PAGE = /^\/(en|zh|de|es|ja|ko)(\/[a-z0-9-]+)*\/?$/;

function wantsMarkdown(accept) {
  if (!/text\/markdown/i.test(accept)) return false;
  // Listed before text/html (or without it): the client prefers Markdown.
  return !/text\/html/i.test(accept.split(/text\/markdown/i)[0]);
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!PAGE.test(pathname)) return NextResponse.next();
  const md = `${pathname.replace(/\/$/, "")}.md`;

  if (wantsMarkdown(request.headers.get("accept") || "")) {
    try {
      const { env } = await getCloudflareContext({ async: true });
      const asset = await env.ASSETS.fetch(new URL(md, request.url));
      if (asset.ok) {
        const headers = new Headers(asset.headers);
        headers.set("Content-Type", "text/markdown; charset=utf-8");
        headers.set("Vary", "Accept");
        return new Response(asset.body, { status: 200, headers });
      }
    } catch {
      // No binding (next dev) or the asset fetch failed: serve the HTML page as before.
    }
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  response.headers.append("Link", `<${md}>; rel="alternate"; type="text/markdown"`);
  return response;
}

export const config = {
  matcher: ["/(en|zh|de|es|ja|ko)", "/(en|zh|de|es|ja|ko)/:path*"],
};
