import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../../../lib/landing-page";
import { blogPath, formatDate, getPost, listPosts, postLocales, readingMinutes } from "../../../../lib/blog";
import { markdownToText, renderMarkdown } from "../../../../lib/markdown";
import { OG_BASE, SITE_URL } from "../../../../lib/seo";

const COPY = {
  en: { back: "All articles", minutes: (n) => `${n} min read`, updated: "updated", more: "More articles" },
  zh: { back: "全部文章", minutes: (n) => `约 ${n} 分钟`, updated: "更新于", more: "更多文章" },
};

export function generateStaticParams() {
  return ["en", "zh"].flatMap((locale) => listPosts(locale).map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  if (!isSupportedLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return {};
  const path = blogPath(locale, slug);
  const locales = postLocales(slug);
  const languages = Object.fromEntries(locales.map((l) => [l, blogPath(l, slug)]));
  if (locales.includes("en")) languages["x-default"] = blogPath("en", slug);
  return {
    title: `${post.title} | Forgent3D`,
    description: post.description,
    alternates: { canonical: path, languages },
    openGraph: {
      ...OG_BASE,
      title: post.title,
      description: post.description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "article",
      url: path,
      publishedTime: post.date,
      ...(post.updated ? { modifiedTime: post.updated } : {}),
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();
  const t = COPY[locale];
  const others = listPosts(locale).filter((item) => item.slug !== slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    mainEntityOfPage: `${SITE_URL}${blogPath(locale, slug)}`,
    author: { "@type": "Organization", name: "Forgent3D", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Forgent3D", url: SITE_URL },
    articleBody: markdownToText(post.body),
  };

  return (
    <main className="mx-auto w-[min(820px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
        <Link className="transition-colors hover:text-brand" href={blogPath(locale)}>{t.back}</Link>
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{post.title}</h1>
      <p className="mt-4 font-mono text-xs text-muted-foreground/80">
        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        {post.updated && <> · {t.updated} <time dateTime={post.updated}>{formatDate(post.updated, locale)}</time></>}
        {" · "}
        {t.minutes(readingMinutes(post))}
      </p>
      <article className="mt-8 text-[1.02rem]">{renderMarkdown(post.body, slug)}</article>
      {others.length > 0 && (
        <section className="mt-16 border-t border-border/60 pt-8">
          <h2 className="text-lg font-semibold">{t.more}</h2>
          <ul className="mt-4 space-y-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link className="text-brand transition-colors hover:text-brand/80" href={blogPath(locale, item.slug)}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
