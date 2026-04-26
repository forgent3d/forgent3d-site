const COPY = {
  en: {
    locale: "en_US",
    htmlLang: "en",
    switchLabel: "中",
    heroTitleLine1: "From prompt to",
    heroTitleLine2: "parametric CAD",
    heroSubtitle:
      "Connect Codex, Claude Code, and Cursor to turn prompts into verifiable parametric CAD geometry.",
    heroDownload: "Download Forgent3D",
    heroGithub: "View GitHub",
    loopTitle: "Stop editing CAD by guesswork",
    loopSubtitle: "Make every agent change grounded in geometry evidence returned by tools.",
    loopWrite: "Generate CAD code",
    loopRebuild: "Build real geometry",
    loopRead: "Screenshots / bbox / status",
    loopIterate: "Tune and iterate",
    featuresTitle: "Three evidence signals for agents",
    featuresGeometry: "See real geometry instead of guessing.",
    featuresRebuild: "Save code and rebuild instantly.",
    featuresEvidence: "Readable screenshots, bbox, and status.",
    casesTitle: "Code-first mechanical modeling",
    casesPartTitle: "Mechanical parts",
    casesPartDesc: "Brackets / flanges / fixtures",
    casesParamTitle: "Parametric prototypes",
    casesParamDesc: "Iterate dimensions and hole patterns",
    casesAiTitle: "AI modeling",
    casesAiDesc: "Align outputs with evidence",
    ctaTitle: "Let agents start seeing models",
    ctaDownload: "Download latest release",
    ctaSource: "View source code",
    footerTagline: "CAD evidence for Codex, Claude Code, Cursor",
    guidesAi3D: "AI 3D SEO Page",
    guidesCodeCad: "Code to CAD Page",
  },
  zh: {
    locale: "zh_CN",
    htmlLang: "zh-CN",
    switchLabel: "EN",
    heroTitleLine1: "从 Prompt 到",
    heroTitleLine2: "参数化 CAD",
    heroSubtitle:
      "连接 Codex、Claude Code、Cursor，将文本提示转为可验证的参数化 CAD 几何结果，支持 AI 生成三维模型与代码生成三维模型工作流。",
    heroDownload: "下载 Forgent3D",
    heroGithub: "查看 GitHub",
    loopTitle: "不再凭感觉改 CAD",
    loopSubtitle: "让 agent 每次修改都基于工具返回的几何证据。",
    loopWrite: "生成 CAD 代码",
    loopRebuild: "构建真实模型",
    loopRead: "截图 / bbox / 状态",
    loopIterate: "继续调参数",
    featuresTitle: "给 agent 的三种证据",
    featuresGeometry: "看到真实模型，不再猜测。",
    featuresRebuild: "保存代码，立即重建。",
    featuresEvidence: "截图、bbox、状态可读取。",
    casesTitle: "代码开始的机械建模",
    casesPartTitle: "机械零件",
    casesPartDesc: "支架 / 法兰 / 夹具",
    casesParamTitle: "参数原型",
    casesParamDesc: "尺寸和孔位可迭代",
    casesAiTitle: "AI 建模",
    casesAiDesc: "用证据对齐结果",
    ctaTitle: "让 agent 开始看见模型",
    ctaDownload: "下载最新版本",
    ctaSource: "查看源码",
    footerTagline: "为 Codex、Claude Code、Cursor 提供 CAD 几何证据",
    guidesAi3D: "AI 生成三维模型软件",
    guidesCodeCad: "代码生成三维模型软件",
  },
};

export function getLandingPageHtml(locale) {
  const t = COPY[locale] || COPY.en;
  return `
    <div class="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(117,220,255,0.18),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(155,124,255,0.22),transparent_24%),linear-gradient(180deg,#07111f_0%,#050b14_58%,#03070d_100%)]"></div>
    <div class="fixed inset-0 -z-10 grid-field opacity-70"></div>

    <div class="mx-auto w-[min(1180px,calc(100vw-32px))]">
      <header class="sticky top-4 z-30 mt-4 flex items-center justify-between gap-4 rounded-full border border-line bg-slate-950/55 px-4 py-3 shadow-panel backdrop-blur-xl">
        <a class="flex items-center gap-3" href="#top" aria-label="Forgent3D Home">
          <span class="grid h-11 w-11 place-items-center rounded-2xl border border-cyanx/25 bg-cyanx/10 font-mono text-xs font-bold tracking-[0.18em] text-cyanx shadow-glow">F3D</span>
          <span class="leading-tight">
            <strong class="block text-sm">Forgent3D</strong>
            <span class="block font-mono text-[11px] text-slate-400">agent sees CAD</span>
          </span>
        </a>
        <nav class="hidden items-center gap-6 font-mono text-xs text-slate-400 md:flex" aria-label="Primary">
          <a class="transition hover:text-cyanx" href="#agents">Agents</a>
          <a class="transition hover:text-cyanx" href="#agent-loop">Agent Loop</a>
          <a class="transition hover:text-cyanx" href="#features">Features</a>
          <a class="transition hover:text-cyanx" href="#download">Download</a>
        </nav>
        <div class="flex items-center gap-3">
          <button class="js-lang-toggle rounded-full border border-line bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-cyanx/50 hover:text-white" type="button" aria-label="Switch language">${t.switchLabel}</button>
          <a class="js-github-link font-mono text-xs text-slate-300 transition hover:text-white" href="#download">GitHub</a>
        </div>
      </header>

      <main id="top" lang="${t.htmlLang}">
        <section class="grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
          <div class="reveal">
            <p class="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyanx">AI CAD Previewer / local MCP</p>
            <h1 class="max-w-[16ch] text-5xl font-bold leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              <span class="block">${t.heroTitleLine1}</span>
              <span class="block">${t.heroTitleLine2}</span>
            </h1>
            <p class="mt-6 max-w-md text-lg leading-8 text-slate-300">${t.heroSubtitle}</p>
            <div class="mt-6 flex max-w-xl flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300">
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">Codex</span>
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">Claude Code</span>
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">Cursor</span>
            </div>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a class="js-download-link inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-6 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5" href="#download">${t.heroDownload}</a>
              <a class="js-github-link inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-6 py-4 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyanx/50" href="#download">${t.heroGithub}</a>
            </div>
          </div>
        </section>

        <section class="reveal py-20" id="agent-loop">
          <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">Agent Loop</p>
              <h2 class="max-w-2xl text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.loopTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-400">${t.loopSubtitle}</p>
          </div>
          <div class="grid gap-4 md:grid-cols-4">
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">01</span><h3 class="mt-8 text-xl font-bold">Write</h3><p class="mt-2 text-sm text-slate-500">${t.loopWrite}</p></article>
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">02</span><h3 class="mt-8 text-xl font-bold">Rebuild</h3><p class="mt-2 text-sm text-slate-500">${t.loopRebuild}</p></article>
            <article class="rounded-3xl border border-cyanx/40 bg-cyanx/[0.06] p-5 shadow-glow backdrop-blur"><span class="font-mono text-xs text-signal">03</span><h3 class="mt-8 text-xl font-bold">Read</h3><p class="mt-2 text-sm text-slate-300">${t.loopRead}</p></article>
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">04</span><h3 class="mt-8 text-xl font-bold">Iterate</h3><p class="mt-2 text-sm text-slate-500">${t.loopIterate}</p></article>
          </div>
        </section>

        <section class="py-20" id="features">
          <div class="reveal mb-8">
            <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">Core Signals</p>
            <h2 class="text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.featuresTitle}</h2>
          </div>
          <div class="grid gap-4 lg:grid-cols-3">
            <article class="reveal mech-card rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-geometry"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Geometry</p><h3 class="mt-3 text-2xl font-bold">Agent sees geometry</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresGeometry}</p></article>
            <article class="reveal mech-card rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-rebuild"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Rebuild</p><h3 class="mt-3 text-2xl font-bold">Rebuild on save</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresRebuild}</p></article>
            <article class="reveal mech-card rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-evidence"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Evidence</p><h3 class="mt-3 text-2xl font-bold">Evidence for iteration</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresEvidence}</p></article>
          </div>
        </section>

        <section class="py-20">
          <div class="reveal mb-8">
            <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">Use Cases</p>
            <h2 class="text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.casesTitle}</h2>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            <article class="reveal rounded-[2rem] border border-line bg-white/[0.03] p-6"><div class="case-icon case-part"></div><h3 class="mt-5 text-xl font-bold">${t.casesPartTitle}</h3><p class="mt-2 text-sm text-slate-500">${t.casesPartDesc}</p></article>
            <article class="reveal rounded-[2rem] border border-line bg-white/[0.03] p-6"><div class="case-icon case-param"></div><h3 class="mt-5 text-xl font-bold">${t.casesParamTitle}</h3><p class="mt-2 text-sm text-slate-500">${t.casesParamDesc}</p></article>
            <article class="reveal rounded-[2rem] border border-line bg-white/[0.03] p-6"><div class="case-icon case-agent"></div><h3 class="mt-5 text-xl font-bold">${t.casesAiTitle}</h3><p class="mt-2 text-sm text-slate-500">${t.casesAiDesc}</p></article>
          </div>
        </section>

        <section class="py-20" id="download">
          <div class="reveal overflow-hidden rounded-[2.25rem] border border-cyanx/30 bg-gradient-to-br from-cyanx/10 via-white/[0.03] to-violetx/10 p-8 shadow-panel md:p-12">
            <p class="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">Open Source</p>
            <h2 class="max-w-2xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">${t.ctaTitle}</h2>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a class="js-download-link inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5" href="#">${t.ctaDownload}</a>
              <a class="js-github-link inline-flex items-center justify-center rounded-full border border-line bg-slate-950/50 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5" href="#">${t.ctaSource}</a>
            </div>
          </div>
        </section>
      </main>

      <footer class="flex flex-col justify-between gap-5 border-t border-line py-8 text-sm text-slate-500 md:flex-row">
        <p><strong class="text-slate-200">Forgent3D</strong> / <span>${t.footerTagline}</span></p>
        <div class="flex gap-5 font-mono text-xs">
          <a class="hover:text-cyanx" href="#agents">Agents</a>
          <a class="hover:text-cyanx" href="#agent-loop">Agent Loop</a>
          <a class="hover:text-cyanx" href="#features">Features</a>
          <a class="hover:text-cyanx" href="/${locale}/ai-3d-model-generation">${t.guidesAi3D}</a>
          <a class="hover:text-cyanx" href="/${locale}/code-to-parametric-cad">${t.guidesCodeCad}</a>
          <a class="js-github-link hover:text-cyanx" href="#download">GitHub</a>
        </div>
      </footer>
    </div>
  `;
}

export function isSupportedLocale(locale) {
  return locale === "en" || locale === "zh";
}
