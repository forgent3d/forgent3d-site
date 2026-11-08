import { NextResponse } from "next/server";

// Pages as Markdown (scripts/build-markdown.mjs writes public/<path>.md at build time; /en/agents.md is served as a
// static file and never reaches here). Two things happen here, for page paths under a locale only:
// - a request that asks for Markdown (`Accept: text/markdown`, as some AI fetchers send) gets the .md instead of HTML;
// - every HTML page points at its .md in a Link header, so a crawler that reads headers finds it.
// Pages that are not prerendered (none today) have no .md; the rewrite then 404s, which is the honest answer.
const PAGE = /^\/(en|zh|de|es|ja|ko)(\/[a-z0-9-]+)*\/?$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (!PAGE.test(pathname)) return NextResponse.next();
  const md = `${pathname.replace(/\/$/, "")}.md`;

  const accept = request.headers.get("accept") || "";
  if (/text\/markdown/i.test(accept) && !/text\/html/i.test(accept.split(/text\/markdown/i)[0])) {
    const response = NextResponse.rewrite(new URL(md, request.url));
    response.headers.set("Vary", "Accept");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  response.headers.append("Link", `<${md}>; rel="alternate"; type="text/markdown"`);
  return response;
}

export const config = {
  matcher: ["/(en|zh|de|es|ja|ko)", "/(en|zh|de|es|ja|ko)/:path*"],
};
