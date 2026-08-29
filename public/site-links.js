window.FORGENT_LINKS = {
  workbench: "https://app.forgent3d.com",
  // 「立即开始」的落点。匿名试用已下线,不再有 /try —— 两个 hook 现在指同一处(工作台根:
  // 访客也能先打字,按下发送才要登录),留着两个是因为埋点分得开(try_clicked vs
  // workbench_clicked):首屏 CTA 和顶栏导航的转化不该混成一个数。
  try: "https://app.forgent3d.com",
  // Header/footer GitHub entry — points at the skills repo, the open-source surface we lead with.
  github: "https://github.com/forgent3d/forgent3d-skills",
  skillsRepo: "https://github.com/forgent3d/forgent3d-skills",
  x: "http://x.com/forgent3d",
  // Desktop app footnote in the footer.
  download: "https://github.com/forgent3d/forgent3d/releases/latest",
};
