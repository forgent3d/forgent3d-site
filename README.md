# Forgent3D 官网

这个仓库是一个面向 Cloudflare Workers 静态资源部署的单页官网。

## 文件结构

- `public/index.html`: 官网首页
- `public/styles.css`: 页面样式
- `public/script.js`: 轻量交互和滚动动效
- `public/site-links.js`: GitHub / 下载链接配置
- `wrangler.jsonc`: Cloudflare Workers 静态资源配置

## 本地预览

先把链接配置改成真实地址：

```js
// public/site-links.js
window.FORGENT_LINKS = {
  github: "https://github.com/your-org/forgent3d",
  download: "https://github.com/your-org/forgent3d/releases/latest"
};
```

优先用 Cloudflare 的本地开发环境：

```bash
npx wrangler dev
```

如果 `wrangler dev` 在你的机器上因为本地运行时问题启动失败，可以先用静态服务器预览页面：

```bash
python3 -m http.server 4173 -d public
```

然后打开 `http://localhost:4173`。

如果你只想快速打开静态文件，也可以直接访问 `public/index.html`。

## 部署到 Cloudflare Workers

1. 登录 Cloudflare：

```bash
npx wrangler login
```

2. 部署：

```bash
npx wrangler deploy
```

3. 如果要绑定自定义域名，在 Cloudflare 控制台为这个 Worker 添加域名路由即可。

## 上线前建议修改

- `public/site-links.js` 中的 GitHub 和 Release 地址
- `public/robots.txt` 中的 `Sitemap` 域名
- `public/sitemap.xml` 中的站点 URL
- `public/og-image.svg`，如果你后续有真实产品截图，可以替换成更强的分享图
