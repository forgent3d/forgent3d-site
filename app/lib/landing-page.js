/**
 * 首屏图是**零件本身**,不是应用截图。
 *
 * 原来那张 product.webp 是桌面版的窗口截图 —— 底部还留着 "CODE AGENT / Codex · Claude Code ·
 * Cursor CLI" 的启动栏和一条 Windows 路径,而首屏标题说的是"不用装任何东西、云端跑完整个循环",
 * 图和标题在互相拆台;它又是深色的,在浅色站里是唯一一块黑。
 *
 * 换成这枚法兰盖板的等轴渲染(源文件 Motor flange cover plate.step,用 occt-import-js +
 * three.js 离屏渲的,带 alpha,接触阴影是合成的)。理由:660px 宽只放得下两三个能看清的元素,
 * 放不下一整个应用窗口;而"可编辑的真几何、不是一次性 mesh"这件事,靠零件本身证明最直接 ——
 * 螺栓孔、沉台、加强筋、板厚,每一处都是有人填过的数字。
 */
const HERO_PRODUCT_SRCSET =
  "/hero-part-720.webp 720w, /hero-part-1080.webp 1080w, /hero-part-1440.webp 1440w";
export const HERO_PRODUCT_SIZES =
  "(min-width: 1180px) 658px, (min-width: 1024px) calc((100vw - 32px) * 0.58), calc(100vw - 32px)";
export const HERO_PRODUCT_PRELOAD = {
  imageSrcSet: HERO_PRODUCT_SRCSET,
  imageSizes: HERO_PRODUCT_SIZES,
};

/** Kept in sync with the in-product skills guide (app.forgent3d.com/skills). */
export const SKILLS_INSTALL_COMMAND = "npx skills add forgent3d/forgent3d-skills";
export const SKILLS_REPO_URL = "https://github.com/forgent3d/forgent3d-skills";
/** Agents verified against the skills convention. Product names — never translated. */
export const SKILLS_AGENTS = ["Claude Code", "Codex", "Cursor", "Cline", "GitHub Copilot", "Windsurf"];

const COPY = {
  en: {
    locale: "en_US",
    htmlLang: "en",
    switchLabel: "中",
    brandSubline: "Cloud CAD agent + skills",
    navLoop: "Agent",
    navFeatures: "Why Cloud",
    navSkills: "Skills",
    navGenerators: "Generators",
    navCompare: "Two ways in",
    navPricing: "Plans",
    navContact: "Contact",
    navWorkbench: "Open Workbench",
    navWorkbenchShort: "Workbench",
    heroKicker: "CLOUD CAD SANDBOX · HOSTED AI AGENT · SKILL FOR YOUR OWN AGENT",
    heroTitle: "AI CAD agent in the cloud",
    heroSubtitle:
      "Describe a part and the agent writes real, editable CAD code, builds it, and hands you a 3D model — nothing to install. Already have Claude Code, Codex, or Cursor? One command gives them the same CAD agent.",
    heroTry: "Sign in to start",
    heroSkills: "Install the skill",
    heroGithub: "View GitHub",
    heroX: "Follow on X",
    chipExisting: "Hosted agent",
    chipLocal: "No setup",
    chipFree: "Works in your AI IDE",
    chipMotion: "Editable CAD code",
    loopEyebrow: "Agent Workflow",
    loopTitle: "Prompt, run, preview, iterate",
    loopSubtitle:
      "The cloud runs the whole loop: less setup, faster feedback, and editable CAD code at the end of it.",
    loopDescribeLabel: "Prompt",
    loopDescribe: "Describe a part, product idea, or mechanism directly in the browser.",
    loopGenerateLabel: "Agent",
    loopGenerate: "The hosted agent writes editable CAD code instead of producing a one-shot mesh.",
    loopPreviewLabel: "Sandbox",
    loopPreview: "Forgent3D runs the CAD code in a prepared cloud environment.",
    loopVerifyLabel: "Preview",
    loopVerify: "Inspect the 3D result, then let the agent revise against errors, geometry, and feedback.",
    featuresEyebrow: "Why Cloud?",
    featuresTitle: "The CAD environment is already running",
    featuresSubtitle:
      "Kernels, build tooling, and the agent loop are hosted, so the only thing you bring is the design intent.",
    featuresModelsTitle: "No CAD Setup",
    featuresModels: "Run Python CAD generation without installing kernels, build tooling, or local project scaffolding first.",
    featuresAgentsTitle: "Hosted Agent Loop",
    featuresAgents: "Prompt, code generation, execution, preview, and revision are packaged into one guided flow.",
    featuresLocalTitle: "Reaches Your AI IDE",
    featuresLocal: "Install the skill and Claude Code, Codex, or Cursor gets the same CAD agent, with results landing in your cloud workspace.",
    skillsEyebrow: "Skills",
    skillsTitle: "Give your own agent a CAD tool",
    skillsSubtitle:
      "Already coding with an AI agent? One command teaches it to model, verify its own geometry, and hand back a 3D link.",
    skillsCommandLabel: "Install",
    skillsCopy: "Copy",
    skillsCopied: "Copied",
    skillsAgentsLabel: "Verified on",
    skillsStep1Title: "Ask for a part",
    skillsStep1Body: "Describe what you want; the agent writes the model code.",
    skillsStep2Title: "It checks its own work",
    skillsStep2Body: "After every edit it builds and measures the result, so a wrong shape gets caught before it reaches you.",
    skillsStep3Title: "It lands in your workspace",
    skillsStep3Body: "You get a 3D link — editable in the browser, shareable, versioned.",
    skillsCta: "Skills setup guide",
    compareEyebrow: "Two Ways In",
    compareTitle: "Prompt in the browser, or from the agent you already use",
    compareSubtitle:
      "Same agent, same CAD engine, same workspace. Pick the door that matches how you already work.",
    compareWebTitle: "Forgent3D Cloud",
    compareWebBadge: "Hosted workbench",
    compareInputLabel: "You type",
    compareWebPrompt:
      "Motor flange cover plate, 200 × 148 mm — raised centre boss with a through bore and a bolt circle around it, four mounting lugs, one braced with a rib.",
    compareWebItems: [
      "CAD dependencies ready to run — open a tab and start",
      "Built-in agent flow for prompt, code, build, preview, and revision",
      "Edit parameters, sketches, and assemblies directly in the 3D view",
    ],
    compareSkillTitle: "Forgent3D Skill",
    compareSkillBadge: "Runs in your AI IDE",
    compareSkillItems: [
      "No CAD kernel or extra dependencies to install",
      "Works with Claude Code, Codex, Cursor, Cline, Copilot, and Windsurf",
      "Model code stays in your repo; the built result lands in your workspace",
    ],
    compareShared: "Both paths keep the important promise: editable CAD code and real 3D geometry, not disposable images.",
    footerTagline: "Cloud AI CAD agent, and a skill that brings it to your own agent",
    footerDesktopNote: "Open-source desktop app",
    guidesAi3D: "AI 3D Model Generation",
    guidesCodeCad: "Code to 3D Models",
    guidesLocalData: "Cloud & Local Data",
    guidesQuickStart: "Quick Start",
    guidesSkills: "Skills Setup",
    navGallery: "Gallery",
    guidesGallery: "Model Gallery",
    heroPartName: "Motor flange cover plate — built by the agent from a prompt",
    heroPartAlt: "Motor flange cover plate modelled by the Forgent3D agent — bolt circle, central bore, and mounting lugs",
    imagePreviewOpenAria: "Open larger preview",
    imagePreviewDialogAria: "Image preview",
    imagePreviewCloseAria: "Close preview",
  },
  zh: {
    locale: "zh_CN",
    htmlLang: "zh-CN",
    switchLabel: "EN",
    brandSubline: "云端 CAD agent + skills",
    navLoop: "Agent",
    navFeatures: "云端价值",
    navSkills: "Skills",
    navGenerators: "生成器",
    navCompare: "两种用法",
    navPricing: "方案",
    navContact: "联系我们",
    navWorkbench: "进入工作台",
    navWorkbenchShort: "工作台",
    heroKicker: "云端 CAD 沙盒 · 内置 AI agent · 可装进你自己的 agent",
    heroTitle: "云端的 AI CAD agent",
    heroSubtitle:
      "描述一个零件，agent 就写出真正可编辑的 CAD 代码、构建出几何，给你一个 3D 模型——不用装任何东西。已经在用 Claude Code、Codex、Cursor？一条命令就能让它们拥有同一个 CAD agent。",
    heroTry: "登录后开始使用",
    heroSkills: "安装 Skill",
    heroGithub: "查看 GitHub",
    heroX: "在 X 上关注",
    chipExisting: "托管 agent",
    chipLocal: "免配置",
    chipFree: "可用在你的 AI IDE",
    chipMotion: "可编辑 CAD 代码",
    loopEyebrow: "Agent 工作流",
    loopTitle: "输入需求，运行，预览，继续迭代",
    loopSubtitle: "整条链路都跑在云端：少配置、更快反馈，最后拿到的仍是可编辑 CAD 代码。",
    loopDescribeLabel: "输入",
    loopDescribe: "在浏览器里描述零件、产品想法或机构。",
    loopGenerateLabel: "Agent",
    loopGenerate: "托管 agent 生成可编辑 CAD 代码，而不是一次性 mesh。",
    loopPreviewLabel: "Sandbox",
    loopPreview: "Forgent3D 在准备好的云端环境中运行 CAD 代码和构建流程。",
    loopVerifyLabel: "预览",
    loopVerify: "查看真实 3D 结果，再让 agent 根据错误、几何和反馈继续修改。",
    featuresEyebrow: "为什么是云端？",
    featuresTitle: "CAD 环境已经跑起来了",
    featuresSubtitle: "内核、构建工具和 agent 闭环都在云端，你只需要带上设计意图。",
    featuresModelsTitle: "不用配置 CAD 环境",
    featuresModels: "不用先安装 Python CAD 内核、构建工具和项目脚手架，就能运行 CAD 生成。",
    featuresAgentsTitle: "内置 Agent 闭环",
    featuresAgents: "prompt、代码生成、运行、预览和修正被组织成一条完整流程。",
    featuresLocalTitle: "能装进你的 AI IDE",
    featuresLocal: "装上 skill，Claude Code、Codex、Cursor 就拥有同一个 CAD agent，结果直接落回云端工作区。",
    skillsEyebrow: "Skills",
    skillsTitle: "让你自己的 agent 会做 CAD",
    skillsSubtitle: "已经在用 AI agent 写代码？一条命令，它就学会建模、自己校验几何，并把 3D 链接交给你。",
    skillsCommandLabel: "安装",
    skillsCopy: "复制",
    skillsCopied: "已复制",
    skillsAgentsLabel: "已验证",
    skillsStep1Title: "让 agent 写零件",
    skillsStep1Body: "说清楚你要什么，它来写模型代码。",
    skillsStep2Title: "它自己验证",
    skillsStep2Body: "每次改完都会构建并测量，形状不对在你看到之前它就发现了。",
    skillsStep3Title: "结果落回工作区",
    skillsStep3Body: "你拿到一条 3D 链接——可以在浏览器里继续编辑、分享、留版本。",
    skillsCta: "查看 Skills 配置指南",
    compareEyebrow: "两种用法",
    compareTitle: "在网页里输入需求，或者从你已经在用的 agent 发起",
    compareSubtitle: "同一个 agent、同一套 CAD 引擎、同一个工作区。选一个符合你现有习惯的入口。",
    compareWebTitle: "Forgent3D 云端",
    compareWebBadge: "托管工作台",
    compareInputLabel: "你输入的",
    compareWebPrompt:
      "做一个电机法兰盖板，200 × 148 mm——中间凸台开通孔，周围一圈螺栓孔；四个安装耳，其中一个用加强筋撑住。",
    compareWebItems: [
      "CAD 依赖和构建环境已经准备好，开一个标签页就能用",
      "内置从 prompt、代码、构建、预览到修正的 agent 流程",
      "参数、草图和装配都能在 3D 视图里直接编辑",
    ],
    compareSkillTitle: "Forgent3D Skill",
    compareSkillBadge: "跑在你的 AI IDE 里",
    compareSkillItems: [
      "不用再装 CAD 内核或者别的依赖",
      "支持 Claude Code、Codex、Cursor、Cline、Copilot、Windsurf",
      "模型代码留在你的仓库，构建结果落到云端工作区",
    ],
    compareShared: "两条路径保留同一个关键承诺：可编辑 CAD 代码和真实 3D 几何，而不是一次性图片。",
    footerTagline: "云端 AI CAD agent，以及把它装进你自己 agent 的 skill",
    footerDesktopNote: "开源桌面版",
    guidesAi3D: "AI 生成三维模型软件",
    guidesCodeCad: "代码生成三维模型软件",
    guidesLocalData: "云端与本地数据",
    guidesQuickStart: "快速开始",
    guidesSkills: "Skills 配置",
    navGallery: "模型库",
    guidesGallery: "模型库",
    heroPartName: "电机法兰盖板 —— agent 按需求建出来的",
    heroPartAlt: "Forgent3D agent 建出的电机法兰盖板:螺栓孔圈、中心轴孔和四个安装耳",
    imagePreviewOpenAria: "放大查看",
    imagePreviewDialogAria: "图片预览",
    imagePreviewCloseAria: "关闭预览",
  },
};

/**
 * 外观语言的**共用片段**,和产品里的 `lib/ui-surface.ts` 一一对应 —— 官网和产品是同一个东西的
 * 两个入口,主按钮、芯片、卡片不该长成两副样子。要改调子就改这几个常量,别在模板里就地另写。
 *
 * 圆角只有两档:**控件一律 rounded-md**(按钮、语言开关、导航项、标签),**表面**才 rounded-xl /
 * rounded-2xl。原来整站的 rounded-full 胶囊 + 青紫渐变 + 辉光是营销页做派,产品里一处都没有。
 */
export const BRAND_BUTTON =
  "inline-flex items-center justify-center rounded-md bg-brand px-4 text-sm font-medium text-background transition-colors hover:bg-brand/90";
export const CHIP_SURFACE =
  "inline-flex items-center justify-center rounded-md border border-border/80 bg-card/60 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:border-brand/50 hover:bg-brand/10 hover:text-foreground";
export const BRAND_TINT = "border border-brand/30 bg-brand/10 text-brand-foreground";
export const EYEBROW = "text-xs uppercase tracking-[0.18em] text-muted-foreground/80";
export const CARD_SURFACE = "rounded-xl border border-border/80 bg-card/60";
export const PANEL_SURFACE = "rounded-2xl border border-border/80 bg-card/60 backdrop-blur";
export const SECTION_TITLE = "text-3xl font-semibold tracking-tight text-foreground md:text-4xl";

export function getLandingPageHtml(locale) {
  const t = COPY[locale] || COPY.en;
  const navLink =
    "shrink-0 rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-brand/10 hover:text-foreground";
  return `
    <!-- 环境层:一片品牌辉光 + 向边缘淡出的网格。和产品的 AmbientBackdrop 是同一张底,
         原来那两道青/紫径向渐变是官网独有的第二套配色,已删。 -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div class="ambient-glow absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]"></div>
      <div class="absolute bottom-[-22rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-brand/5 blur-[130px]"></div>
      <div class="grid-field absolute inset-0 opacity-40"></div>
    </div>

    <!-- 贴顶、透明、滚起来才铺磨砂底 —— 和产品 AppHeader 同一个手势。原来是一枚浮在页面上的
         圆角药丸岛,产品里没有这种东西。高度同样钉死 h-16。 -->
    <header class="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
      <div class="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
        <a class="site-brand flex min-w-0 items-center gap-2 text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground" href="#top" aria-label="Forgent3D Home">
          <!-- 产品头部那一枚,同一个文件、同一个尺寸(h-7 w-7),不再套描边底板。 -->
          <img src="/logo-mark.png" alt="" class="h-7 w-7 shrink-0 object-contain" width="28" height="28" />
          <span class="truncate">Forgent3D</span>
        </a>
        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <a class="${navLink}" href="#agent-loop">${t.navLoop}</a>
          <a class="${navLink}" href="#skills">${t.navSkills}</a>
          <a class="${navLink}" href="#compare">${t.navCompare}</a>
          <a class="${navLink}" href="/${locale}/generators">${t.navGenerators}</a>
          <a class="js-pricing-link ${navLink}" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="${navLink}" href="/${locale}/contact">${t.navContact}</a>
        </nav>
        <div class="site-header-actions flex items-center gap-2">
          <a class="js-workbench-link ${BRAND_BUTTON} h-9" href="https://app.forgent3d.com?lang=${locale}">
            <span class="sm:hidden">${t.navWorkbenchShort}</span>
            <span class="hidden sm:inline">${t.navWorkbench}</span>
          </a>
          <a
            class="site-github-link js-github-link ${CHIP_SURFACE} h-9 w-9"
            href="#"
            aria-label="${t.heroGithub}"
            title="${t.heroGithub}"
          >
            <img src="https://github.githubassets.com/favicons/favicon.png" width="16" height="16" alt="GitHub" loading="lazy" decoding="async" class="brightness-0 opacity-60" />
          </a>
          <button class="js-lang-toggle ${CHIP_SURFACE} h-9 px-3 font-mono text-xs" type="button" aria-label="Switch language">${t.switchLabel}</button>
        </div>
      </div>
    </header>

    <div class="landing-page mx-auto w-[min(1180px,calc(100vw-32px))]">
      <main id="top" lang="${t.htmlLang}">
        <!-- 首屏不再撑满一整屏:浅色底下,原来那个 min-h-[100vh] + 两列各 520/620px 的固定高
             留出的是一大片什么都没有的白,深色时看不出来而已。现在高度由内容自己决定。 -->
        <section class="hero-section grid items-center gap-10 pt-10 pb-16 lg:gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:pt-16 lg:pb-24">
          <div class="hero-copy">
            <p class="mobile-kicker mb-4 ${EYEBROW}">${t.heroKicker}</p>
            <h1 class="hero-title max-w-[15ch] text-[clamp(1.9rem,5.2vw,3.5rem)] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
              ${t.heroTitle}
            </h1>
            <p class="mt-5 max-w-xl text-base leading-7 text-muted-foreground">${t.heroSubtitle}</p>
            <div class="hero-actions mt-8 flex flex-wrap gap-3">
              <a class="js-try-link ${BRAND_BUTTON} min-h-[44px] px-5" href="https://app.forgent3d.com/try?lang=${locale}">${t.heroTry}</a>
              <a class="js-skills-cta ${CHIP_SURFACE} min-h-[44px] px-5" href="/${locale}/skills">${t.heroSkills}</a>
            </div>
          </div>

          <div class="hero-visual relative">
            <!-- 零件直接落在页面底色上:不套卡片、不描边。它自带接触阴影,再加一圈边框就又变成
                 "一张贴上来的图"了。 -->
            <button
              class="hero-preview-card js-hero-preview-trigger block w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="button"
              aria-label="${t.imagePreviewOpenAria}"
              data-preview-src="/hero-part-1440.webp"
              data-preview-fallback="/hero-part-1080.png"
              data-preview-alt="${t.heroPartAlt}"
            >
              <picture>
                <source srcset="${HERO_PRODUCT_SRCSET}" sizes="${HERO_PRODUCT_SIZES}" type="image/webp" />
                <img src="/hero-part-1080.png" alt="${t.heroPartAlt}" width="2566" height="1710" class="block w-full" loading="eager" decoding="async" fetchpriority="high" />
              </picture>
            </button>
            <!-- 这一行是图的"证词":零件叫什么、多大、能导出成什么。没有它,上面就只是一张好看的
                 渲染图;有了它,它才是"真几何"这句话的证据。数字取自 STEP 的包围盒。 -->
            <div class="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>${t.heroPartName}</span>
              <span class="font-mono">200 × 148 × 45 mm · STEP / STL / GLB</span>
            </div>
          </div>
        </section>

        <section class="landing-section reveal py-20" id="agent-loop">
          <div class="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mobile-kicker mb-3 ${EYEBROW}">${t.loopEyebrow}</p>
              <h2 class="max-w-2xl ${SECTION_TITLE}">${t.loopTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-muted-foreground">${t.loopSubtitle}</p>
          </div>
          <div class="grid gap-4 md:grid-cols-4">
            <article class="${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">01</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.loopDescribeLabel}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.loopDescribe}</p></article>
            <article class="${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">02</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.loopGenerateLabel}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.loopGenerate}</p></article>
            <!-- 当前/重点那一张用品牌淡底,和产品里选中态、领域徽标是同一档(BRAND_TINT),不再加辉光。 -->
            <article class="rounded-xl ${BRAND_TINT} p-5"><span class="font-mono text-xs text-brand">03</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.loopPreviewLabel}</h3><p class="mt-2 text-sm leading-6 text-foreground/80">${t.loopPreview}</p></article>
            <article class="${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">04</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.loopVerifyLabel}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.loopVerify}</p></article>
          </div>
        </section>

        <section class="landing-section py-20" id="features">
          <div class="reveal mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mobile-kicker mb-3 ${EYEBROW}">${t.featuresEyebrow}</p>
              <h2 class="max-w-2xl ${SECTION_TITLE}">${t.featuresTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-muted-foreground">${t.featuresSubtitle}</p>
          </div>
          <div class="grid gap-4 lg:grid-cols-3">
            <article class="reveal mech-card ${PANEL_SURFACE} p-6"><div class="mini-visual visual-evidence"></div><p class="mt-6 ${EYEBROW}">Models</p><h3 class="mt-3 text-xl font-semibold text-foreground">${t.featuresModelsTitle}</h3><p class="mt-3 text-sm leading-6 text-muted-foreground">${t.featuresModels}</p></article>
            <article class="reveal mech-card ${PANEL_SURFACE} p-6"><div class="mini-visual visual-geometry"></div><p class="mt-6 ${EYEBROW}">Agents</p><h3 class="mt-3 text-xl font-semibold text-foreground">${t.featuresAgentsTitle}</h3><p class="mt-3 text-sm leading-6 text-muted-foreground">${t.featuresAgents}</p></article>
            <article class="reveal mech-card ${PANEL_SURFACE} p-6"><div class="mini-visual visual-rebuild"></div><p class="mt-6 ${EYEBROW}">Local</p><h3 class="mt-3 text-xl font-semibold text-foreground">${t.featuresLocalTitle}</h3><p class="mt-3 text-sm leading-6 text-muted-foreground">${t.featuresLocal}</p></article>
          </div>
        </section>

        <section class="landing-section py-20" id="skills">
          <div class="reveal mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mobile-kicker mb-3 ${EYEBROW}">${t.skillsEyebrow}</p>
              <h2 class="max-w-2xl ${SECTION_TITLE}">${t.skillsTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-muted-foreground">${t.skillsSubtitle}</p>
          </div>
          <div class="reveal ${PANEL_SURFACE} p-6">
            <p class="${EYEBROW}">${t.skillsCommandLabel}</p>
            <div class="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <code class="min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-md border border-border/80 bg-background px-4 py-3 font-mono text-sm text-foreground">${SKILLS_INSTALL_COMMAND}</code>
              <button
                class="js-copy-command ${CHIP_SURFACE} min-h-[44px] shrink-0 px-5"
                type="button"
                data-copy-value="${SKILLS_INSTALL_COMMAND}"
                data-copy-label="${t.skillsCopy}"
                data-copied-label="${t.skillsCopied}"
              >${t.skillsCopy}</button>
            </div>
            <p class="mt-5 ${EYEBROW}">${t.skillsAgentsLabel}</p>
            <ul class="mt-3 flex flex-wrap gap-2">
              ${SKILLS_AGENTS.map((agent) => `<li class="rounded-md border border-border/80 bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">${agent}</li>`).join("")}
            </ul>
          </div>
          <div class="mt-4 grid gap-4 md:grid-cols-3">
            <article class="reveal ${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">01</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.skillsStep1Title}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.skillsStep1Body}</p></article>
            <article class="reveal ${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">02</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.skillsStep2Title}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.skillsStep2Body}</p></article>
            <article class="reveal ${CARD_SURFACE} p-5"><span class="font-mono text-xs text-brand">03</span><h3 class="mt-5 text-lg font-semibold text-foreground">${t.skillsStep3Title}</h3><p class="mt-2 text-sm leading-6 text-muted-foreground">${t.skillsStep3Body}</p></article>
          </div>
          <a class="js-skills-cta reveal mt-5 ${CHIP_SURFACE} min-h-[44px] px-5" href="/${locale}/skills">${t.skillsCta}</a>
        </section>

        <section class="landing-section py-20" id="compare">
          <div class="reveal mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p class="mobile-kicker mb-3 ${EYEBROW}">${t.compareEyebrow}</p>
              <h2 class="max-w-3xl ${SECTION_TITLE}">${t.compareTitle}</h2>
            </div>
            <p class="max-w-sm text-sm leading-6 text-muted-foreground">${t.compareSubtitle}</p>
          </div>
          <div class="grid gap-4 lg:grid-cols-2">
<!-- 两张卡各自先摆出**真实的输入**,再摆声明。
                 原来是不对称的:Skill 那边第一条就是能读能复制的 npx skills add …,而 Cloud 那边
                 只有一句"开个标签页就能开始"——读者能验证右边,验证不了左边。同一个方框、同一个
                 位置,一边是你打的那句话、一边是你敲的那条命令,这个视觉上的押韵就是这一节的论点。
                 输入框的差别只有字体:命令是等宽的,prompt 是正文字体——它不是代码,别用 mono。 -->
            <article class="reveal rounded-2xl ${BRAND_TINT} p-6 backdrop-blur">
              <p class="${EYEBROW}">${t.compareWebBadge}</p>
              <h3 class="mt-3 text-2xl font-semibold text-foreground">${t.compareWebTitle}</h3>
              <p class="mt-6 ${EYEBROW}">${t.compareInputLabel}</p>
              <p class="mt-2 rounded-md border border-border/80 bg-background px-4 py-3 text-sm leading-6 text-foreground">${t.compareWebPrompt}</p>
              <ul class="mt-6 space-y-4 text-sm leading-6 text-foreground/80">
                ${t.compareWebItems.map((item) => `<li class="border-t border-border/60 pt-4">${item}</li>`).join("")}
              </ul>
            </article>
            <article class="reveal ${PANEL_SURFACE} p-6">
              <p class="${EYEBROW}">${t.compareSkillBadge}</p>
              <h3 class="mt-3 text-2xl font-semibold text-foreground">${t.compareSkillTitle}</h3>
              <p class="mt-6 ${EYEBROW}">${t.compareInputLabel}</p>
              <p class="mt-2 overflow-x-auto rounded-md border border-border/80 bg-background px-4 py-3 font-mono text-sm leading-6 whitespace-nowrap text-foreground">${SKILLS_INSTALL_COMMAND}</p>
              <ul class="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
                ${t.compareSkillItems.map((item) => `<li class="border-t border-border/60 pt-4">${item}</li>`).join("")}
              </ul>
            </article>
          </div>
          <p class="reveal mt-5 ${CARD_SURFACE} p-5 text-sm leading-6 text-muted-foreground">${t.compareShared}</p>
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

      <footer class="flex flex-col justify-between gap-5 border-t border-border/60 py-8 text-sm text-muted-foreground md:flex-row">
        <p><strong class="font-medium text-foreground">Forgent3D</strong> / <span>${t.footerTagline}</span></p>
        <div class="flex flex-wrap gap-5 text-xs">
          <a class="transition-colors hover:text-brand" href="#agent-loop">${t.navLoop}</a>
          <a class="transition-colors hover:text-brand" href="#features">${t.navFeatures}</a>
          <a class="transition-colors hover:text-brand" href="#skills">${t.navSkills}</a>
          <a class="transition-colors hover:text-brand" href="#compare">${t.navCompare}</a>
          <a class="js-pricing-link transition-colors hover:text-brand" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/contact">${t.navContact}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/ai-3d-model-generation">${t.guidesAi3D}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/code-to-parametric-cad">${t.guidesCodeCad}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/local-data">${t.guidesLocalData}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/quick-start">${t.guidesQuickStart}</a>
          <a class="js-skills-cta transition-colors hover:text-brand" href="/${locale}/skills">${t.guidesSkills}</a>
          <a class="js-download-link text-muted-foreground/60 transition-colors hover:text-muted-foreground" href="https://github.com/forgent3d/forgent3d/releases/latest">${t.footerDesktopNote}</a>
          <!-- <a class="transition-colors hover:text-brand" href="/${locale}/gallery">${t.guidesGallery}</a> -->
        </div>
      </footer>
    </div>
  `;
}

export function isSupportedLocale(locale) {
  return locale === "en" || locale === "zh";
}
