const HERO_PRODUCT_SRCSET =
  "/product-720.webp 720w, /product-1080.webp 1080w, /product-1440.webp 1440w, /product.webp 2354w";
const HERO_PRODUCT_SIZES = "(min-width: 1024px) 58vw, calc(100vw - 32px)";

const COPY = {
  en: {
    locale: "en_US",
    htmlLang: "en",
    switchLabel: "中",
    brandSubline: "Agent + open-source desktop",
    navLoop: "Agent",
    navDemo: "Demo",
    navFeatures: "Why Web",
    navCompare: "Compare",
    navPricing: "Plans",
    navContact: "Contact",
    navDownload: "Desktop",
    navWorkbench: "Open Workbench",
    navWorkbenchShort: "Workbench",
    heroKicker: "MANAGED CAD SANDBOX · HOSTED AI AGENT · OPEN-SOURCE DESKTOP",
    heroTitle: "AI CAD agent in the browser",
    heroSubtitle:
      "Try ideas in the browser without installing a CAD environment. When a model becomes a real project, move to the open-source desktop app for local files and deeper control.",
    heroTry: "Try without login",
    heroDemo: "Watch Demo",
    heroDownload: "Get Desktop App",
    heroGithub: "View GitHub",
    heroX: "Follow on X",
    chipExisting: "Hosted agent",
    chipLocal: "No setup",
    chipFree: "Open-source desktop",
    chipMotion: "Editable CAD code",
    loopEyebrow: "Agent Workflow",
    loopTitle: "Prompt, run, preview, iterate",
    loopSubtitle:
      "Web focuses on rapid validation and managed execution: less setup, faster feedback, same editable CAD code.",
    loopDescribeLabel: "Prompt",
    loopDescribe: "Describe a part, product idea, or mechanism directly in the browser.",
    loopGenerateLabel: "Agent",
    loopGenerate: "The hosted agent writes editable CAD code instead of producing a one-shot mesh.",
    loopPreviewLabel: "Sandbox",
    loopPreview: "Forgent3D runs the CAD code in a prepared browser environment.",
    loopVerifyLabel: "Preview",
    loopVerify: "Inspect the 3D result, then let the agent revise against errors, geometry, and feedback.",
    screenshotsEyebrow: "Demo",
    screenshotsTitle: "Agent-generated CAD, not one-shot images",
    screenshotsSubtitle:
      "The same core loop works across Web and Desktop: generate code, build real geometry, inspect the result, and keep iterating.",
    screenshotInputTitle: "Describe the model",
    screenshotInputDesc: "A natural-language prompt starts the modeling loop without turning the result into a disposable image.",
    screenshotPlanTitle: "Agent plans editable parts",
    screenshotPlanDesc: "The agent breaks the request into concrete CAD steps that can be reviewed and revised.",
    screenshotGenerateTitle: "Generate real geometry",
    screenshotGenerateDesc: "Model code becomes inspectable 3D geometry: parts, frames, holes, mounts, and constraints.",
    screenshotAssemblyTitle: "Preview and revise",
    screenshotAssemblyDesc: "Use the preview, dimensions, build status, and screenshots to guide the next agent revision.",
    featuresEyebrow: "Why Web?",
    featuresTitle: "Web is the hosted agent service",
    featuresSubtitle:
      "The desktop app can be more complete and open source; Web is valuable because it removes setup, dependency management, and agent orchestration work.",
    featuresModelsTitle: "No CAD Setup",
    featuresModels: "Run Python CAD generation without installing kernels, build tooling, or local project scaffolding first.",
    featuresAgentsTitle: "Hosted Agent Loop",
    featuresAgents: "The browser product packages prompt, code generation, execution, preview, and revision into one guided flow.",
    featuresLocalTitle: "Open-Source Desktop",
    featuresLocal: "Use the full local workbench when you need private files, deeper control, or integration with Codex, Claude Code, and Cursor.",
    compareEyebrow: "Product Paths",
    compareTitle: "Web validates fast. Desktop gives full local control.",
    compareSubtitle:
      "They do not need to compete: Web is for quick exploration and hosted execution; Desktop gives advanced users complete local control.",
    compareWebTitle: "Forgent3D Web",
    compareWebBadge: "Hosted agent",
    compareWebItems: [
      "CAD dependencies ready to run in the browser",
      "Built-in agent flow for prompt, code, build, preview, and revision",
      "Best for quick trials, demos, teaching, sharing, and zero-setup exploration",
    ],
    compareDesktopTitle: "Forgent3D Desktop",
    compareDesktopBadge: "Open-source local workbench",
    compareDesktopItems: [
      "Full local app for advanced projects and private files",
      "Works with Codex, Claude Code, Cursor, and your own project structure",
      "Best for deeper engineering workflows, local control, and open-source trust",
    ],
    compareShared: "Both paths keep the important promise: editable CAD code and real 3D preview, not disposable images.",
    footerTagline: "Hosted Agent plus full open-source desktop for editable AI CAD",
    guidesAi3D: "AI 3D Model Generation",
    guidesCodeCad: "Code to 3D Models",
    guidesLocalData: "Cloud & Local Data",
    guidesQuickStart: "Quick Start",
    navGallery: "Gallery",
    guidesGallery: "Model Gallery",
    imagePreviewOpenAria: "Open larger preview",
    imagePreviewDialogAria: "Image preview",
    imagePreviewCloseAria: "Close preview",
  },
  zh: {
    locale: "zh_CN",
    htmlLang: "zh-CN",
    switchLabel: "EN",
    brandSubline: "Agent + 开源桌面版",
    navLoop: "Agent",
    navDemo: "演示",
    navFeatures: "Web 价值",
    navCompare: "版本对比",
    navPricing: "方案",
    navContact: "联系我们",
    navDownload: "桌面版",
    navWorkbench: "进入工作台",
    navWorkbenchShort: "工作台",
    heroKicker: "托管 CAD 沙盒 · 内置 AI agent · 开源桌面版",
    heroTitle: "浏览器里的 AI CAD agent",
    heroSubtitle:
      "不用安装 CAD 环境，直接在网页里让 Agent 生成并预览模型。项目需要本地文件和深度控制时，再进入开源桌面版。",
    heroTry: "免登录试用",
    heroDemo: "观看演示",
    heroDownload: "下载桌面版",
    heroGithub: "查看 GitHub",
    heroX: "在 X 上关注",
    chipExisting: "托管 agent",
    chipLocal: "免配置",
    chipFree: "开源桌面版",
    chipMotion: "可编辑 CAD 代码",
    loopEyebrow: "Agent 工作流",
    loopTitle: "输入需求，运行，预览，继续迭代",
    loopSubtitle: "Web 聚焦快速验证和托管运行：少配置、更快反馈，同时保留可编辑 CAD 代码。",
    loopDescribeLabel: "输入",
    loopDescribe: "在浏览器里描述零件、产品想法或机构。",
    loopGenerateLabel: "Agent",
    loopGenerate: "托管 agent 生成可编辑 CAD 代码，而不是一次性 mesh。",
    loopPreviewLabel: "Sandbox",
    loopPreview: "Forgent3D 在准备好的网页环境中运行 CAD 代码和构建流程。",
    loopVerifyLabel: "预览",
    loopVerify: "查看真实 3D 结果，再让 agent 根据错误、几何和反馈继续修改。",
    screenshotsEyebrow: "演示",
    screenshotsTitle: "Agent 生成的是 CAD，不是一次性图片",
    screenshotsSubtitle:
      "同一条核心链路可以跑在 Web 和 Desktop：生成代码、构建真实几何、查看结果、继续迭代。",
    screenshotInputTitle: "描述模型需求",
    screenshotInputDesc: "用自然语言开启建模流程，结果不是只能看的图片。",
    screenshotPlanTitle: "Agent 规划可编辑零件",
    screenshotPlanDesc: "agent 把需求拆成具体 CAD 步骤，后续可以审查和修改。",
    screenshotGenerateTitle: "生成真实几何",
    screenshotGenerateDesc: "模型代码变成可检查的 3D 几何：零件、机架、孔位、安装结构和约束。",
    screenshotAssemblyTitle: "预览并修正",
    screenshotAssemblyDesc: "用预览、尺寸、构建状态和截图指导下一轮 agent 修改。",
    featuresEyebrow: "为什么需要 Web？",
    featuresTitle: "Web 是托管 agent 服务",
    featuresSubtitle: "桌面版可以更完整、开源；Web 的价值是省掉安装、依赖管理和 agent 编排。",
    featuresModelsTitle: "不用配置 CAD 环境",
    featuresModels: "不用先安装 Python CAD 内核、构建工具和项目脚手架，就能运行 CAD 生成。",
    featuresAgentsTitle: "内置 Agent 闭环",
    featuresAgents: "浏览器产品把 prompt、代码生成、运行、预览和修正组织成一条完整流程。",
    featuresLocalTitle: "开源桌面版",
    featuresLocal: "需要私有文件、深度控制，或连接 Codex、Claude Code、Cursor 时，使用完整本地工作台。",
    compareEyebrow: "产品路径",
    compareTitle: "Web 快速验证，Desktop 完整本地控制",
    compareSubtitle: "两者不必互相打架：Web 负责快速探索和托管运行，Desktop 给高级用户完整本地控制。",
    compareWebTitle: "Forgent3D Web",
    compareWebBadge: "托管 Agent",
    compareWebItems: [
      "CAD 依赖和构建环境已经准备好，可直接在网页里运行",
      "内置从 prompt、代码、构建、预览到修正的 agent 流程",
      "适合快速试用、演示、教学、分享和零配置探索",
    ],
    compareDesktopTitle: "Forgent3D Desktop",
    compareDesktopBadge: "开源本地工作台",
    compareDesktopItems: [
      "完整本地应用，适合高级项目和私有文件",
      "连接 Codex、Claude Code、Cursor 和你自己的项目结构",
      "适合更深的工程工作流、本地控制和开源信任",
    ],
    compareShared: "两条路径保留同一个关键承诺：可编辑 CAD 代码和真实 3D 预览，而不是一次性图片。",
    footerTagline: "托管 Agent + 完整开源桌面版，用于可编辑 AI CAD",
    guidesAi3D: "AI 生成三维模型软件",
    guidesCodeCad: "代码生成三维模型软件",
    guidesLocalData: "云端与本地数据",
    guidesQuickStart: "快速开始",
    navGallery: "模型库",
    guidesGallery: "模型库",
    imagePreviewOpenAria: "放大查看",
    imagePreviewDialogAria: "图片预览",
    imagePreviewCloseAria: "关闭预览",
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
            <span class="block font-mono text-[11px] text-slate-400">${t.brandSubline}</span>
          </span>
        </a>
        <nav class="hidden items-center gap-5 font-mono text-xs text-slate-400 lg:flex" aria-label="Primary">
          <a class="transition hover:text-cyanx" href="#agent-loop">${t.navLoop}</a>
          <a class="transition hover:text-cyanx" href="#compare">${t.navCompare}</a>
          <a class="js-pricing-link transition hover:text-cyanx" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="transition hover:text-cyanx" href="/${locale}/contact">${t.navContact}</a>
        </nav>
        <div class="flex items-center gap-3">
          <a
            class="js-workbench-link inline-flex h-10 items-center justify-center rounded-full border border-cyanx/55 bg-cyanx/12 px-4 text-sm font-bold text-white shadow-[0_0_28px_rgba(117,220,255,0.16)] transition hover:-translate-y-0.5 hover:border-cyanx/80 hover:bg-cyanx/20"
            href="https://app.forgent3d.com?lang=${locale}"
          >
            <span class="sm:hidden">${t.navWorkbenchShort}</span>
            <span class="hidden sm:inline">${t.navWorkbench}</span>
          </a>
          <a
            class="js-github-link inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 transition hover:-translate-y-0.5 hover:border-cyanx/50"
            href="#"
            aria-label="${t.heroGithub}"
            title="${t.heroGithub}"
          >
            <img src="https://github.githubassets.com/favicons/favicon.png" width="16" height="16" alt="GitHub" loading="lazy" decoding="async" class="brightness-0 invert opacity-90" />
          </a>
          <button class="js-lang-toggle rounded-full border border-line bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-cyanx/50 hover:text-white" type="button" aria-label="Switch language">${t.switchLabel}</button>
        </div>
      </header>

      <main id="top" lang="${t.htmlLang}">
        <section class="grid min-h-[calc(100vh-80px)] items-center gap-10 pt-5 pb-16 lg:gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:pt-6 lg:pb-20">
          <div class="min-h-[520px]">
            <p class="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">${t.heroKicker}</p>
            <h1 class="max-w-[15ch] text-[clamp(1.9rem,5.2vw,3.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white text-balance">
              ${t.heroTitle}
            </h1>
            <p class="mt-5 max-w-xl text-base leading-7 text-slate-300">${t.heroSubtitle}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a class="js-try-link inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5" href="https://app.forgent3d.com/try?lang=${locale}">${t.heroTry}</a>
              <a class="js-download-link inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50" href="https://github.com/forgent3d/forgent3d/releases/latest">${t.heroDownload}</a>
              <a class="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-line bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-cyanx/50 hover:text-white" href="#screenshots">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                ${t.heroDemo}
              </a>
            </div>
          </div>

          <div class="relative min-h-[520px] lg:min-h-[620px]">
            <button
              class="js-hero-preview-trigger absolute inset-2 overflow-hidden rounded-[2.2rem] border border-cyanx/35 bg-slate-900 p-1.5 shadow-panel transition hover:border-cyanx/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx/70"
              type="button"
              aria-label="${t.imagePreviewOpenAria}"
              data-preview-src="/product.webp"
              data-preview-fallback="/product-1080.png"
              data-preview-alt="Forgent3D product UI"
            >
              <picture>
                <source srcset="${HERO_PRODUCT_SRCSET}" sizes="${HERO_PRODUCT_SIZES}" type="image/webp" />
                <img src="/product-1080.png" alt="Forgent3D product UI" width="2354" height="1422" class="h-full w-full object-contain object-center brightness-110 contrast-[1.04]" loading="eager" decoding="async" fetchpriority="high" />
              </picture>
            </button>
          </div>
        </section>

        <section class="reveal py-20" id="agent-loop">
          <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">${t.loopEyebrow}</p>
              <h2 class="max-w-2xl text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.loopTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-400">${t.loopSubtitle}</p>
          </div>
          <div class="grid gap-4 md:grid-cols-4">
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">01</span><h3 class="mt-8 text-xl font-bold">${t.loopDescribeLabel}</h3><p class="mt-2 text-sm text-slate-500">${t.loopDescribe}</p></article>
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">02</span><h3 class="mt-8 text-xl font-bold">${t.loopGenerateLabel}</h3><p class="mt-2 text-sm text-slate-500">${t.loopGenerate}</p></article>
            <article class="rounded-3xl border border-cyanx/40 bg-cyanx/[0.06] p-5 shadow-glow backdrop-blur"><span class="font-mono text-xs text-signal">03</span><h3 class="mt-8 text-xl font-bold">${t.loopPreviewLabel}</h3><p class="mt-2 text-sm text-slate-300">${t.loopPreview}</p></article>
            <article class="rounded-3xl border border-line bg-white/[0.03] p-5 backdrop-blur"><span class="font-mono text-xs text-cyanx">04</span><h3 class="mt-8 text-xl font-bold">${t.loopVerifyLabel}</h3><p class="mt-2 text-sm text-slate-500">${t.loopVerify}</p></article>
          </div>
        </section>

        <section class="py-12 md:py-16 lg:py-20" id="screenshots">
          <div class="reveal mb-5 flex flex-col justify-between gap-3 md:mb-6 md:flex-row md:items-end md:gap-4">
            <div>
              <p class="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-cyanx md:mb-3">${t.screenshotsEyebrow}</p>
              <h2 class="max-w-3xl text-2xl font-bold tracking-[-0.05em] text-white md:text-3xl lg:text-4xl">${t.screenshotsTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-400">${t.screenshotsSubtitle}</p>
          </div>
          <div class="reveal rounded-[2.25rem] border border-line bg-slate-950/55 p-3 shadow-panel backdrop-blur-xl md:p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article class="overflow-hidden rounded-2xl border border-line bg-white/[0.02]">
                <button
                  type="button"
                  class="js-hero-preview-trigger group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-0 bg-[#050b14] p-0 text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx/70"
                  aria-label="${t.imagePreviewOpenAria}: ${t.screenshotInputTitle}"
                  data-preview-src="/screenshots/input.webp"
                  data-preview-fallback="/screenshots/input.png"
                  data-preview-alt="${t.screenshotInputTitle}"
                >
                  <picture>
                    <source srcset="/screenshots/input.webp" type="image/webp" />
                    <img src="/screenshots/input.png" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" aria-hidden="true" />
                  </picture>
                </button>
                <div class="p-4">
                  <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">01</p>
                  <h3 class="mt-2 text-lg font-bold text-white">${t.screenshotInputTitle}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-400">${t.screenshotInputDesc}</p>
                </div>
              </article>
              <article class="overflow-hidden rounded-2xl border border-line bg-white/[0.02]">
                <button
                  type="button"
                  class="js-hero-preview-trigger group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-0 bg-[#050b14] p-0 text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx/70"
                  aria-label="${t.imagePreviewOpenAria}: ${t.screenshotPlanTitle}"
                  data-preview-src="/screenshots/plan.webp"
                  data-preview-fallback="/screenshots/plan.png"
                  data-preview-alt="${t.screenshotPlanTitle}"
                >
                  <picture>
                    <source srcset="/screenshots/plan.webp" type="image/webp" />
                    <img src="/screenshots/plan.png" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" aria-hidden="true" />
                  </picture>
                </button>
                <div class="p-4">
                  <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">02</p>
                  <h3 class="mt-2 text-lg font-bold text-white">${t.screenshotPlanTitle}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-400">${t.screenshotPlanDesc}</p>
                </div>
              </article>
              <article class="overflow-hidden rounded-2xl border border-line bg-white/[0.02]">
                <button
                  type="button"
                  class="js-hero-preview-trigger group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-0 bg-[#050b14] p-0 text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx/70"
                  aria-label="${t.imagePreviewOpenAria}: ${t.screenshotGenerateTitle}"
                  data-preview-src="/screenshots/generate-parts.webp"
                  data-preview-fallback="/screenshots/generate_parts.png"
                  data-preview-alt="${t.screenshotGenerateTitle}"
                >
                  <picture>
                    <source srcset="/screenshots/generate-parts.webp" type="image/webp" />
                    <img src="/screenshots/generate_parts.png" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" aria-hidden="true" />
                  </picture>
                </button>
                <div class="p-4">
                  <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">03</p>
                  <h3 class="mt-2 text-lg font-bold text-white">${t.screenshotGenerateTitle}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-400">${t.screenshotGenerateDesc}</p>
                </div>
              </article>
              <article class="overflow-hidden rounded-2xl border border-line bg-white/[0.02]">
                <button
                  type="button"
                  class="js-hero-preview-trigger group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden border-0 bg-[#050b14] p-0 text-left transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanx/70"
                  aria-label="${t.imagePreviewOpenAria}: ${t.screenshotAssemblyTitle}"
                  data-preview-src="/screenshots/assembly.webp"
                  data-preview-fallback="/screenshots/assembly.png"
                  data-preview-alt="${t.screenshotAssemblyTitle}"
                >
                  <picture>
                    <source srcset="/screenshots/assembly.webp" type="image/webp" />
                    <img src="/screenshots/assembly.png" alt="" class="pointer-events-none absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" aria-hidden="true" />
                  </picture>
                </button>
                <div class="p-4">
                  <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">04</p>
                  <h3 class="mt-2 text-lg font-bold text-white">${t.screenshotAssemblyTitle}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-400">${t.screenshotAssemblyDesc}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section class="py-20" id="features">
          <div class="reveal mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">${t.featuresEyebrow}</p>
              <h2 class="max-w-2xl text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.featuresTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-400">${t.featuresSubtitle}</p>
          </div>
          <div class="grid gap-4 lg:grid-cols-3">
            <article class="reveal mech-card rounded-[2rem] border border-cyanx/30 bg-slate-950/55 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-evidence"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Models</p><h3 class="mt-3 text-2xl font-bold">${t.featuresModelsTitle}</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresModels}</p></article>
            <article class="reveal mech-card rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-geometry"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Agents</p><h3 class="mt-3 text-2xl font-bold">${t.featuresAgentsTitle}</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresAgents}</p></article>
            <article class="reveal mech-card rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl"><div class="mini-visual visual-rebuild"></div><p class="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-cyanx">Local</p><h3 class="mt-3 text-2xl font-bold">${t.featuresLocalTitle}</h3><p class="mt-3 text-sm leading-6 text-slate-400">${t.featuresLocal}</p></article>
          </div>
        </section>

        <section class="py-20" id="compare">
          <div class="reveal mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">${t.compareEyebrow}</p>
              <h2 class="max-w-3xl text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">${t.compareTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-400">${t.compareSubtitle}</p>
          </div>
          <div class="grid gap-4 lg:grid-cols-2">
            <article class="reveal rounded-[2rem] border border-cyanx/30 bg-cyanx/[0.06] p-6 shadow-panel backdrop-blur-xl">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">${t.compareWebBadge}</p>
              <h3 class="mt-3 text-3xl font-bold text-white">${t.compareWebTitle}</h3>
              <ul class="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                ${t.compareWebItems.map((item) => `<li class="border-t border-line pt-4">${item}</li>`).join("")}
              </ul>
            </article>
            <article class="reveal rounded-[2rem] border border-line bg-slate-950/45 p-6 shadow-panel backdrop-blur-xl">
              <p class="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">${t.compareDesktopBadge}</p>
              <h3 class="mt-3 text-3xl font-bold text-white">${t.compareDesktopTitle}</h3>
              <ul class="mt-6 space-y-4 text-sm leading-6 text-slate-300">
                ${t.compareDesktopItems.map((item) => `<li class="border-t border-line pt-4">${item}</li>`).join("")}
              </ul>
            </article>
          </div>
          <p class="reveal mt-5 rounded-2xl border border-line bg-white/[0.03] p-5 text-sm leading-6 text-slate-300">${t.compareShared}</p>
        </section>

      </main>

      <div class="hero-preview-lightbox js-hero-preview-lightbox" aria-hidden="true">
        <button class="hero-preview-backdrop js-hero-preview-close" type="button" aria-label="${t.imagePreviewCloseAria}"></button>
        <div class="hero-preview-panel" role="dialog" aria-modal="true" aria-label="${t.imagePreviewDialogAria}">
          <button class="hero-preview-close js-hero-preview-close" type="button" aria-label="${t.imagePreviewCloseAria}">✕</button>
          <picture>
            <source class="js-hero-preview-source" type="image/webp" />
            <img class="js-hero-preview-image" alt="Forgent3D product UI" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>

      <footer class="flex flex-col justify-between gap-5 border-t border-line py-8 text-sm text-slate-500 md:flex-row">
        <p><strong class="text-slate-200">Forgent3D</strong> / <span>${t.footerTagline}</span></p>
        <div class="flex flex-wrap gap-5 font-mono text-xs">
          <a class="hover:text-cyanx" href="#agent-loop">${t.navLoop}</a>
          <a class="hover:text-cyanx" href="#screenshots">${t.navDemo}</a>
          <a class="hover:text-cyanx" href="#features">${t.navFeatures}</a>
          <a class="hover:text-cyanx" href="#compare">${t.navCompare}</a>
          <a class="js-pricing-link hover:text-cyanx" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="hover:text-cyanx" href="/${locale}/contact">${t.navContact}</a>
          <a class="hover:text-cyanx" href="/${locale}/ai-3d-model-generation">${t.guidesAi3D}</a>
          <a class="hover:text-cyanx" href="/${locale}/code-to-parametric-cad">${t.guidesCodeCad}</a>
          <a class="hover:text-cyanx" href="/${locale}/local-data">${t.guidesLocalData}</a>
          <a class="hover:text-cyanx" href="/${locale}/quick-start">${t.guidesQuickStart}</a>
          <!-- <a class="hover:text-cyanx" href="/${locale}/gallery">${t.guidesGallery}</a> -->
        </div>
      </footer>
    </div>
  `;
}

export function isSupportedLocale(locale) {
  return locale === "en" || locale === "zh";
}
