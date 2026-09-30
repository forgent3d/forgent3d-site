window.FORGENT_LINKS = {
  workbench: "https://app.forgent3d.com",
  // 「立即开始」的落点。匿名试用已下线,不再有 /try —— 两个 hook 现在指同一处(工作台根:
  // 访客也能先打字,按下发送才要登录),留着两个是因为埋点分得开(try_clicked vs
  // workbench_clicked):首屏 CTA 和顶栏导航的转化不该混成一个数。
  try: "https://app.forgent3d.com",
  // OpenSCAD → STEP 转换器(/[locale]/openscad-to-step/* 的 CTA)。app 里的路径要是改了,这里和
  // app/lib/openscad-to-step.js 的 APP_SCAD_URL 一起改:那边是服务端渲染进 HTML 的 href(爬虫看到的),这里只在运行时覆盖它。
  scad: "https://app.forgent3d.com/scad",
  // Header/footer GitHub entry — points at the skills repo, the open-source surface we lead with.
  github: "https://github.com/forgent3d/forgent3d-skills",
  skillsRepo: "https://github.com/forgent3d/forgent3d-skills",
  x: "http://x.com/forgent3d",
  // Desktop app footnote in the footer.
  download: "https://github.com/forgent3d/forgent3d/releases/latest",
};
