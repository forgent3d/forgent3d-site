# Forgent3D 官网

www.forgent3d.com。Next.js App Router，通过 `@opennextjs/cloudflare` 部署到 Cloudflare Workers。

官网讲什么、怎么讲，见 `WEBSITE_PRODUCT_DOC.md`——改了叙事就改那份文档。

## 文件结构

- `app/[locale]/(site)/page.js`: 首页（`en` / `zh`），内容由 `app/lib/landing-page.js` 渲染
- `app/lib/landing-page.js`: 首页全部文案（`COPY`）+ HTML 模板 + skills 常量
- `app/[locale]/(site)/{skills,quick-start,pricing,local-data,contact,...}/page.js`: 子页面，文案在各自的 `getCopy(locale)`；
  `(site)/layout.js` 给它们和首页挂同一条顶栏（路由组，不进 URL）
- `app/[locale]/openscad-to-step/`: OpenSCAD → STEP 的三页（首页 / why / compatibility），**自带顶栏**，不走 `(site)`；
  文案、路径、metadata 在 `app/lib/openscad-to-step.js`
- `app/m/[shareSlug]/`: 公开模型分享页（3D 全屏 / 详情），数据来自 cad-agent
- `app/lib/cad-agent.js`: 已发布模型 API 客户端
- `app/robots.js` / `app/sitemap.js`: robots 与 sitemap（新增页面记得补 sitemap）
- `app/globals.css`: Tailwind v4 样式与设计 token
- `public/site-links.js`: 外链配置（工作台 / GitHub / skills 仓库 / 桌面版 Release）
- `public/script.js`: 语言切换、外链注入、PostHog 埋点、图片灯箱、命令复制
- `wrangler.jsonc` / `open-next.config.ts`: Cloudflare 部署配置

文案是中英双份，改一处必须同时改另一处。

## 本地开发

```bash
pnpm install
pnpm dev
```

官网默认 `http://localhost:4173`。模型 Gallery 和 `/m/*` 会请求 cad-agent
（默认 `https://agent.forgent3d.com`，本地可用 `CAD_AGENT_API_URL` 覆盖到
`http://localhost:3000`）。端口见 `.env.development`。

## 构建与预览

```bash
pnpm build     # next build
pnpm preview   # wrangler dev，跑构建产物
```

## 部署到 Cloudflare Workers

```bash
npx wrangler login
pnpm deploy    # opennextjs-cloudflare build && deploy
```

自定义域名在 Cloudflare 控制台给这个 Worker 加域名路由。

## 新增页面清单

1. 在 `app/[locale]/(site)/<slug>/page.js` 里写 `getCopy(locale)`（中英两份）、
   `generateStaticParams`、`generateMetadata`（canonical + hreflang；`openGraph` 里展开
   `app/lib/seo.js` 的 `OG_BASE`，否则这一页分享出去没有卡片图）。
2. 在 `app/sitemap.js` 补 `/en/<slug>` 和 `/zh/<slug>`。
3. 需要的话在 `app/lib/landing-page.js` 的 footer / nav 里加链接，并在两个 locale 的
   `COPY` 里加对应文案键。
4. 新的 CTA 加 `js-*` class，并在 `public/script.js` 的埋点表里补一条事件。
