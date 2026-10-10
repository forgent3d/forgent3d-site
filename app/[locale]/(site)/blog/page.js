import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../../lib/landing-page";
import { blogPath, formatDate, listPosts, readingMinutes } from "../../../lib/blog";
import { OG_BASE } from "../../../lib/seo";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "文章 | Forgent3D",
      description: "关于 OpenSCAD、参数化 CAD 和把 CAD 搬进浏览器的文章：我们做了什么、踩了什么坑、从真实文件里学到了什么。",
      ogLocale: "zh_CN",
      kicker: "文章",
      h1: "文章",
      intro: "我们做 Forgent3D 时写下的东西：OpenSCAD 的细节、把 CAD 内核搬进浏览器的过程、从几千个真实 .scad 文件里学到的事。不定期更新。",
      minutes: (n) => `约 ${n} 分钟`,
      empty: "还没有文章。",
    };
  }
  return {
    title: "Articles | Forgent3D",
    description: "Notes on OpenSCAD, parametric CAD and running CAD in the browser: what we built, what broke, and what thousands of real .scad files taught us.",
    ogLocale: "en_US",
    kicker: "Articles",
    h1: "Articles",
    intro: "Things we wrote down while building Forgent3D: OpenSCAD details, the road to running a CAD kernel in the browser, and what a few thousand real .scad files taught us. Updated when there is something to say.",
    minutes: (n) => `${n} min read`,
    empty: "Nothing here yet.",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  const copy = getCopy(locale);
  const path = blogPath(locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: path, languages: { en: blogPath("en"), zh: blogPath("zh"), "x-default": blogPath("en") } },
    openGraph: { ...OG_BASE, title: copy.title, description: copy.description, locale: copy.ogLocale, type: "website", url: path },
  };
}

export default async function BlogIndexPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getCopy(locale);
  const posts = listPosts(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>
      <div className="mt-12 space-y-4">
        {posts.length === 0 && <p className="text-muted-foreground">{copy.empty}</p>}
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-border/80 bg-card/60 p-6 transition-colors hover:border-brand/50">
            <p className="font-mono text-xs text-muted-foreground/80">
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time> · {copy.minutes(readingMinutes(post))}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">
              <Link className="transition-colors hover:text-brand" href={blogPath(locale, post.slug)}>{post.title}</Link>
            </h2>
            <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
