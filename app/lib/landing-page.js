const COPY = {
  en: {
    locale: "en_US",
    htmlLang: "en",
    switchLabel: "中",
    heroTitle: "From prompt to parametric CAD",
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
    heroTitle: "从 Prompt 到参数化 CAD",
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
          <span class="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-cyanx/25 bg-cyanx/10 shadow-glow">
            <img src="/apple-touch-icon.png" alt="Forgent3D icon" class="h-full w-full object-cover" />
          </span>
          <span class="leading-tight">
            <strong class="block text-sm">Forgent3D</strong>
            <span class="block font-mono text-[11px] text-slate-400">agent sees CAD</span>
          </span>
        </a>
        <nav class="hidden items-center gap-6 font-mono text-xs text-slate-400 md:flex" aria-label="Primary">
          <a class="transition hover:text-cyanx" href="#agent-loop">Agent Loop</a>
          <a class="transition hover:text-cyanx" href="#features">Features</a>
          <a class="transition hover:text-cyanx" href="#download">Download</a>
        </nav>
        <div class="flex items-center gap-3">
          <button class="js-lang-toggle rounded-full border border-line bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-cyanx/50 hover:text-white" type="button" aria-label="Switch language">${t.switchLabel}</button>
        </div>
      </header>

      <main id="top" lang="${t.htmlLang}">
        <section class="grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:py-20">
          <div class="reveal">
            <p class="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyanx">AI CAD Previewer / local MCP</p>
            <h1 class="max-w-[12ch] text-[clamp(2.2rem,6.8vw,5rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white text-balance">
              ${t.heroTitle}
            </h1>
            <p class="mt-6 max-w-md text-lg leading-8 text-slate-300">${t.heroSubtitle}</p>
            <div class="mt-6 flex max-w-xl flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300">
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.20509 8.76514V6.50548C9.20509 6.31517 9.27649 6.17237 9.44293 6.07733L13.9861 3.46091C14.6046 3.10416 15.342 2.93772 16.103 2.93772C18.9573 2.93772 20.7651 5.14986 20.7651 7.50457C20.7651 7.67101 20.7651 7.86132 20.7412 8.05164L16.0316 5.29243C15.7462 5.12599 15.4607 5.12599 15.1753 5.29243L9.20509 8.76514ZM19.8136 17.566V12.1665C19.8136 11.8334 19.6708 11.5955 19.3854 11.4291L13.4152 7.95637L15.3656 6.83836C15.5321 6.74332 15.6749 6.74332 15.8413 6.83836L20.3845 9.45477C21.6928 10.216 22.5728 11.8334 22.5728 13.4032C22.5728 15.2108 21.5025 16.8759 19.8136 17.5657V17.566ZM7.80173 12.8088L5.8513 11.6671C5.68486 11.5721 5.61346 11.4293 5.61346 11.239V6.00616C5.61346 3.46114 7.56389 1.53436 10.2042 1.53436C11.2033 1.53436 12.1307 1.86746 12.9159 2.46205L8.2301 5.17374C7.94475 5.34018 7.80196 5.57801 7.80196 5.91112V12.809L7.80173 12.8088ZM12 15.2349L9.20509 13.6651V10.3352L12 8.76537L14.7947 10.3352V13.6651L12 15.2349ZM13.7958 22.4659C12.7967 22.4659 11.8693 22.1328 11.0841 21.5382L15.7699 18.8265C16.0553 18.6601 16.198 18.4223 16.198 18.0892V11.1912L18.1723 12.3329C18.3388 12.4279 18.4102 12.5707 18.4102 12.7611V17.9939C18.4102 20.5389 16.4359 22.4657 13.7958 22.4657V22.4659ZM8.15848 17.1617L3.61528 14.5453C2.30696 13.784 1.42701 12.1667 1.42701 10.5969C1.42701 8.76537 2.52115 7.12417 4.20987 6.43431V11.8575C4.20987 12.1906 4.35266 12.4284 4.63802 12.5948L10.5846 16.0437L8.63415 17.1617C8.46771 17.2567 8.32492 17.2567 8.15848 17.1617ZM7.897 21.0626C5.20919 21.0626 3.23488 19.0407 3.23488 16.5432C3.23488 16.3529 3.25875 16.1626 3.2824 15.9723L7.96817 18.684C8.25352 18.8504 8.53911 18.8504 8.82447 18.684L14.7947 15.2351V17.4948C14.7947 17.6851 14.7233 17.8279 14.5568 17.9229L10.0136 20.5394C9.39518 20.8961 8.6578 21.0626 7.89677 21.0626H7.897ZM13.7958 23.8929C16.6739 23.8929 19.0762 21.8475 19.6235 19.1358C22.2874 18.4459 24 15.9484 24 13.4034C24 11.7383 23.2865 10.121 22.002 8.95546C22.121 8.45591 22.1924 7.95637 22.1924 7.45705C22.1924 4.05573 19.4331 1.51048 16.2458 1.51048C15.6037 1.51048 14.9852 1.60553 14.3668 1.81971C13.2963 0.773101 11.8215 0.107117 10.2042 0.107117C7.32606 0.107117 4.92383 2.15259 4.37653 4.86428C1.7126 5.55414 0 8.05164 0 10.5967C0 12.2617 0.713506 13.8791 1.99795 15.0446C1.87904 15.5441 1.80764 16.0437 1.80764 16.543C1.80764 19.9443 4.56685 22.4896 7.75421 22.4896C8.39632 22.4896 9.01478 22.3945 9.63324 22.1803C10.7035 23.2269 12.1783 23.8929 13.7958 23.8929Z"></path>
                </svg>
                Codex
              </span>
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">
                <img src="https://www.anthropic.com/favicon.ico" width="12" height="12" alt="Claude" loading="lazy" decoding="async" />
                Claude Code
              </span>
              <span class="inline-flex items-center gap-2 rounded-full border border-cyanx/30 bg-cyanx/10 px-3 py-2">
                <img src="https://cursor.com/favicon.ico" width="12" height="12" alt="Cursor" loading="lazy" decoding="async" />
                Cursor
              </span>
            </div>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a class="js-download-link inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-6 py-4 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5" href="#download">${t.heroDownload}</a>
              <a class="js-github-link inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-6 py-4 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyanx/50" href="#download"><img src="https://github.githubassets.com/favicons/favicon.png" width="14" height="14" alt="GitHub" loading="lazy" decoding="async" class="brightness-0 invert opacity-90" />${t.heroGithub}</a>
            </div>
          </div>

          <div class="reveal relative min-h-[560px]">
            <div class="absolute inset-5 rounded-[2.2rem] border border-cyanx/20 bg-slate-950/55 shadow-panel backdrop-blur-xl">
              <div class="absolute inset-0 rounded-[2.2rem] blueprint-grid"></div>
              <div class="scanline absolute inset-x-0 top-0 h-28"></div>
              <div class="mechanical-core absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2">
                <span class="gear-ring"></span>
                <span class="gear-bridge"></span>
                <span class="axis axis-x"></span>
                <span class="axis axis-y"></span>
                <span class="axis axis-z"></span>
              </div>
              <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-line bg-slate-950/70 px-4 py-3 font-mono text-xs text-slate-400">
                <span>runner://workspace/flange</span>
                <strong class="text-signal">rebuild_model ok</strong>
              </div>
            </div>

            <div class="absolute right-0 top-0 w-64 rounded-3xl border border-line bg-slate-950/80 p-4 font-mono text-xs shadow-panel backdrop-blur-xl">
              <div class="mb-4 flex items-center gap-2 text-slate-500">
                <span class="h-2 w-2 rounded-full bg-red-400"></span>
                <span class="h-2 w-2 rounded-full bg-amber-300"></span>
                <span class="h-2 w-2 rounded-full bg-signal"></span>
                <span class="ml-2">agent bridge</span>
              </div>
              <div class="space-y-3">
                <p class="flex justify-between gap-4"><span>clients</span><strong class="text-cyanx">4 ready</strong></p>
                <p class="flex justify-between gap-4"><span>rebuild_model</span><strong class="text-signal">ok</strong></p>
                <p class="flex justify-between gap-4"><span>screenshot_model</span><strong class="text-cyanx">iso</strong></p>
                <p class="flex justify-between gap-4"><span>get_model_info</span><strong class="text-cyanx">bbox</strong></p>
              </div>
            </div>

            <div class="absolute bottom-0 left-0 w-[min(360px,82%)] rounded-3xl border border-line bg-slate-950/80 p-4 font-mono text-xs text-slate-300 shadow-panel backdrop-blur-xl">
              <p class="mb-3 text-slate-500">models/bracket/part.py</p>
              <pre class="overflow-hidden leading-6"><code>prompt = "motor bracket"
result = build_part(params)

agent.verify(
  rebuild=True,
  screenshot="iso",
  bbox=True,
)</code></pre>
            </div>

            <div class="absolute bottom-24 right-6 rounded-2xl border border-line bg-slate-950/75 p-4 font-mono text-xs shadow-panel backdrop-blur-xl">
              <p class="text-slate-500">bbox</p>
              <strong class="text-white">84 x 84 x 18 mm</strong>
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
          <a class="hover:text-cyanx" href="#agent-loop">Agent Loop</a>
          <a class="hover:text-cyanx" href="#features">Features</a>
          <a class="hover:text-cyanx" href="/${locale}/ai-3d-model-generation">${t.guidesAi3D}</a>
          <a class="hover:text-cyanx" href="/${locale}/code-to-parametric-cad">${t.guidesCodeCad}</a>
        </div>
      </footer>
    </div>
  `;
}

export function isSupportedLocale(locale) {
  return locale === "en" || locale === "zh";
}
