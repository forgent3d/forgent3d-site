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
    navLoop: "Workflow",
    navFeatures: "Why Cloud",
    navExplore: "Examples",
    navSkills: "Skills",
    navGenerators: "Generators",
    navCompare: "Two ways in",
    navPricing: "Plans",
    navContact: "Contact",
    navWorkbench: "Open Workbench",
    navWorkbenchShort: "Workbench",
    heroKicker: "CHAT TO MODEL · REAL CAD GEOMETRY",
    heroTitle: "AI CAD agent in the cloud",
    heroSubtitle:
      "Describe a part and Forgent3D writes real, editable CAD code, builds it, and hands you a 3D model — nothing to install.",
    heroTry: "Get started",
    heroGithub: "View GitHub",
    heroX: "Follow on X",
    chipExisting: "Real geometry",
    chipLocal: "No setup",
    chipFree: "Works in your AI IDE",
    chipMotion: "Editable CAD code",
    loopEyebrow: "Workflow",
    loopTitle: "Prompt, run, preview, iterate",
    loopSubtitle:
      "Every round leaves you a model you can keep editing.",
    loopDescribeLabel: "Prompt",
    loopDescribe: "Describe a part, product idea, or mechanism directly in the browser.",
    loopGenerateLabel: "Generate",
    loopGenerate: "The AI writes parametric model code instead of producing a one-shot mesh.",
    loopPreviewLabel: "Build",
    loopPreview: "The geometry is built in the cloud; nothing to install locally.",
    loopVerifyLabel: "Preview",
    loopVerify: "Look at the result in 3D, say what's off, and keep going.",
    featuresEyebrow: "Why Cloud?",
    featuresTitle: "Open a browser and start modelling",
    featuresSubtitle:
      "No environment to set up first — just say what you want to make.",
    featuresModelsTitle: "No CAD Setup",
    featuresModels: "No CAD software, Python kernel, or dependencies to install.",
    featuresAgentsTitle: "From Description to Export",
    featuresAgents: "Describe, build, preview, revise, and export STEP / STL, all on one page.",
    featuresLocalTitle: "Reaches Your AI IDE",
    featuresLocal: "Install the skill and Claude Code, Codex, or Cursor can model too, with models showing up in the same workspace.",
    compareEyebrow: "Two Ways In",
    compareTitle: "Prompt in the browser, or straight from your editor",
    compareSubtitle:
      "Same workspace, same result. Pick whichever door suits you.",
    compareWebTitle: "Forgent3D Cloud",
    compareWebBadge: "Hosted workbench",
    compareInputLabel: "You type",
    compareCopy: "Copy",
    compareCopied: "Copied",
    compareWebPrompt:
      "Motor flange cover plate, 200 × 148 mm — raised centre boss with a through bore and a bolt circle around it, four mounting lugs, one braced with a rib.",
    compareWebItems: [
      "Open a tab and start — nothing to install",
      "Generate, build, and revise without leaving the tab",
      "Edit parameters, sketches, and assemblies directly in the 3D view",
    ],
    compareSkillTitle: "Forgent3D Skill",
    compareSkillBadge: "Runs in your AI IDE",
    compareSkillCta: "Setup guide",
    compareSkillItems: [
      "No CAD kernel or extra dependencies to install",
      "Works with Claude Code, Codex, Cursor, Cline, Copilot, and Windsurf",
      "Model code stays in your repo; the model shows up in your workspace",
    ],
    compareShared: "Either way you get an editable CAD model, not a disposable image.",
    footerTagline: "AI CAD in the cloud, and a skill that brings it to the editor you already use",
    guidesAi3D: "AI 3D Model Generation",
    guidesCodeCad: "Code to 3D Models",
    guidesLocalData: "Cloud & Local Data",
    guidesQuickStart: "Quick Start",
    guidesSkills: "Skills Setup",
    navGallery: "Gallery",
    guidesGallery: "Model Gallery",
    heroPartAlt: "Motor flange cover plate modelled by Forgent3D — bolt circle, central bore, and mounting lugs",
    imagePreviewOpenAria: "Open larger preview",
    imagePreviewDialogAria: "Image preview",
    imagePreviewCloseAria: "Close preview",
  },
  zh: {
    locale: "zh_CN",
    htmlLang: "zh-CN",
    switchLabel: "EN",
    brandSubline: "云端 CAD Agent + Skills",
    navLoop: "工作流",
    navFeatures: "云端价值",
    navExplore: "示例",
    navSkills: "Skills",
    navGenerators: "生成器",
    navCompare: "两种用法",
    navPricing: "方案",
    navContact: "联系我们",
    navWorkbench: "进入工作台",
    navWorkbenchShort: "工作台",
    heroKicker: "对话建模 · 真实 CAD 几何",
    heroTitle: "云端的 AI CAD Agent",
    heroSubtitle:
      "描述一个零件，Forgent3D 就写出真正可编辑的 CAD 代码、构建出几何，给你一个 3D 模型——不用装任何东西。",
    heroTry: "立即开始",
    heroGithub: "查看 GitHub",
    heroX: "在 X 上关注",
    chipExisting: "真实几何",
    chipLocal: "免配置",
    chipFree: "可用在你的 AI IDE",
    chipMotion: "可编辑 CAD 代码",
    loopEyebrow: "工作流",
    loopTitle: "输入需求，运行，预览，继续迭代",
    loopSubtitle: "每一轮拿到的都是能继续改的模型。",
    loopDescribeLabel: "输入",
    loopDescribe: "在浏览器里描述零件、产品想法或机构。",
    loopGenerateLabel: "生成",
    loopGenerate: "AI 写出参数化的模型代码，而不是一次性 mesh。",
    loopPreviewLabel: "构建",
    loopPreview: "几何在云端构建出来，本地不用装任何东西。",
    loopVerifyLabel: "预览",
    loopVerify: "在 3D 里看结果，哪里不对直接说，接着改。",
    featuresEyebrow: "为什么是云端？",
    featuresTitle: "打开浏览器就能建模",
    featuresSubtitle: "不用先搭环境，你只需要说清楚要做什么。",
    featuresModelsTitle: "不用配置 CAD 环境",
    featuresModels: "不用安装 CAD 软件、Python 内核或任何依赖。",
    featuresAgentsTitle: "从描述到导出",
    featuresAgents: "描述、建模、预览、修改、导出 STEP / STL，都在同一个页面里。",
    featuresLocalTitle: "能装进你的 AI IDE",
    featuresLocal: "装上 skill，Claude Code、Codex、Cursor 也能建模，模型出现在同一个工作区。",
    compareEyebrow: "两种用法",
    compareTitle: "在网页发起，或从你的编辑器发起",
    compareSubtitle: "同一个工作区、同样的结果，选一个顺手的入口。",
    compareWebTitle: "Forgent3D 云端",
    compareWebBadge: "托管工作台",
    compareInputLabel: "你输入的",
    compareCopy: "复制",
    compareCopied: "已复制",
    compareWebPrompt:
      "做一个电机法兰盖板，200 × 148 mm——中间凸台开通孔，周围一圈螺栓孔；四个安装耳，其中一个用加强筋撑住。",
    compareWebItems: [
      "开一个标签页就能用，不用装任何东西",
      "生成、构建、修改，都不用离开这个标签页",
      "参数、草图和装配都能在 3D 视图里直接编辑",
    ],
    compareSkillTitle: "Forgent3D Skill",
    compareSkillBadge: "跑在你的 AI IDE 里",
    compareSkillCta: "查看配置指南",
    compareSkillItems: [
      "不用再装 CAD 内核或者别的依赖",
      "支持 Claude Code、Codex、Cursor、Cline、Copilot、Windsurf",
      "模型代码留在你的仓库，模型出现在你的工作区",
    ],
    compareShared: "两种方式做出来的都是可编辑的 CAD 模型，不是一次性图片。",
    footerTagline: "云端 AI CAD，以及把它装进你编辑器的 skill",
    guidesAi3D: "AI 生成三维模型软件",
    guidesCodeCad: "代码生成三维模型软件",
    guidesLocalData: "云端与本地数据",
    guidesQuickStart: "快速开始",
    guidesSkills: "Skills 配置",
    navGallery: "模型库",
    guidesGallery: "模型库",
    heroPartAlt: "Forgent3D 生成的电机法兰盖板:螺栓孔圈、中心轴孔和四个安装耳",
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
  "inline-flex items-center justify-center rounded-md bg-brand px-4 text-sm font-medium text-white! transition-colors hover:bg-brand/90";
export const CHIP_SURFACE =
  "inline-flex items-center justify-center rounded-md border border-border/80 bg-card/60 text-sm font-medium text-muted-foreground backdrop-blur transition-colors hover:border-brand/50 hover:bg-brand/10 hover:text-foreground";
export const BRAND_TINT = "border border-brand/30 bg-brand/10 text-brand-foreground";
export const EYEBROW = "text-xs uppercase tracking-[0.18em] text-muted-foreground/80";
export const CARD_SURFACE = "rounded-xl border border-border/80 bg-card/60";
export const PANEL_SURFACE = "rounded-2xl border border-border/80 bg-card/60 backdrop-blur";
export const SECTION_TITLE = "text-3xl font-semibold tracking-tight text-foreground md:text-4xl";

/** The site header, shared by the homepage and every localized sub-page (app/[locale]/layout.js). */
export function getSiteHeaderHtml(locale) {
  const t = COPY[locale] || COPY.en;
  const navLink =
    "shrink-0 rounded-md px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-brand/10 hover:text-foreground";
  return `
    <!-- 贴顶、透明、滚起来才铺磨砂底 —— 和产品 AppHeader 同一个手势。原来是一枚浮在页面上的
         圆角药丸岛,产品里没有这种东西。高度同样钉死 h-16。 -->
    <header class="site-header sticky top-0 z-30 border-b border-border/60 transition-colors duration-200">
      <div class="mx-auto flex h-16 w-[min(1180px,calc(100vw-32px))] items-center justify-between gap-4">
        <a class="site-brand flex min-w-0 items-center gap-2 text-sm font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground" href="/${locale}" aria-label="Forgent3D Home">
          <!-- 产品头部那一枚,同一个文件、同一个尺寸(h-7 w-7),不再套描边底板。 -->
          <img src="/logo-mark.png" alt="" class="h-7 w-7 shrink-0 object-contain" width="28" height="28" />
          <span class="truncate">Forgent3D</span>
        </a>
        <nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <a class="js-explore-link ${navLink}" href="https://app.forgent3d.com/explore?lang=${locale}">${t.navExplore}</a>
          <a class="${navLink}" href="/${locale}/generators">${t.navGenerators}</a>
          <a class="js-pricing-link ${navLink}" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="${navLink}" href="/${locale}/contact">${t.navContact}</a>
        </nav>
        <div class="site-header-actions flex items-center gap-2">
          <!-- 顶栏这枚是**回去**的门(老用户),首屏那颗才是**开始**的门(新访客)。两颗都用品牌色
               实心按钮时,第一屏上就是同一句话说两遍 —— 所以这里降一档,入口本身留着:首屏 CTA
               滚上去之后,页面上仍旧随时能进工作台。
               降的是 chip 不是纯文字链:左边那排导航是 hidden lg:flex,窄屏下整排都不在,
               一段没有描边的灰字挨着 GitHub/EN 两枚方块,读起来是散落的文本而不是入口。 -->
          <a class="js-workbench-link ${CHIP_SURFACE} h-9 px-3" href="https://app.forgent3d.com?lang=${locale}">
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
  `;
}

export function getLandingPageHtml(locale) {
  const t = COPY[locale] || COPY.en;
  return `
    <!-- 环境层:一片品牌辉光 + 向边缘淡出的网格。和产品的 AmbientBackdrop 是同一张底,
         原来那两道青/紫径向渐变是官网独有的第二套配色,已删。 -->
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div class="ambient-glow absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]"></div>
      <div class="absolute bottom-[-22rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-brand/5 blur-[130px]"></div>
      <div class="grid-field absolute inset-0 opacity-40"></div>
    </div>

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
            <!-- 首屏只留一个动作:云端直接开始。skill 那条路仍在(导航栏、下面的 Skills 一节、
                 /skills 页),但和「不用装任何东西」并排摆在首屏时,两条入口互相抵消 —— 第一眼
                 该只有一件事可做。 -->
            <div class="hero-actions mt-8 flex flex-wrap gap-3">
              <a class="js-try-link ${BRAND_BUTTON} min-h-[44px] px-5" href="https://app.forgent3d.com?lang=${locale}">${t.heroTry}</a>
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
            <!-- 这一行是图的"证词":零件多大、能导出成什么。没有它,上面就只是一张好看的
                 渲染图;有了它,它才是"真几何"这句话的证据。数字取自 STEP 的包围盒。 -->
            <div class="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-xs text-muted-foreground">
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
            <article class="reveal mech-card ${PANEL_SURFACE} p-6"><div class="mini-visual visual-geometry"></div><p class="mt-6 ${EYEBROW}">Loop</p><h3 class="mt-3 text-xl font-semibold text-foreground">${t.featuresAgentsTitle}</h3><p class="mt-3 text-sm leading-6 text-muted-foreground">${t.featuresAgents}</p></article>
            <article class="reveal mech-card ${PANEL_SURFACE} p-6"><div class="mini-visual visual-rebuild"></div><p class="mt-6 ${EYEBROW}">Local</p><h3 class="mt-3 text-xl font-semibold text-foreground">${t.featuresLocalTitle}</h3><p class="mt-3 text-sm leading-6 text-muted-foreground">${t.featuresLocal}</p></article>
          </div>
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
            <article class="reveal flex flex-col rounded-2xl ${BRAND_TINT} p-5 backdrop-blur sm:p-6">
              <p class="${EYEBROW}">${t.compareWebBadge}</p>
              <h3 class="mt-2 text-xl font-semibold text-foreground sm:mt-3 sm:text-2xl">${t.compareWebTitle}</h3>
              <p class="mt-5 ${EYEBROW} sm:mt-6">${t.compareInputLabel}</p>
              <p class="mt-2 rounded-md border border-border/80 bg-background px-3 py-2.5 text-sm leading-6 text-foreground sm:px-4 sm:py-3">${t.compareWebPrompt}</p>
              <ul class="mt-5 space-y-3 text-sm leading-6 text-foreground/80 sm:mt-6 sm:space-y-4">
                ${t.compareWebItems.map((item) => `<li class="border-t border-border/60 pt-3 sm:pt-4">${item}</li>`).join("")}
              </ul>
            </article>
            <article class="reveal flex flex-col ${PANEL_SURFACE} p-5 sm:p-6">
              <p class="${EYEBROW}">${t.compareSkillBadge}</p>
              <h3 class="mt-2 text-xl font-semibold text-foreground sm:mt-3 sm:text-2xl">${t.compareSkillTitle}</h3>
              <p class="mt-5 ${EYEBROW} sm:mt-6">${t.compareInputLabel}</p>
              <div class="mt-2 flex items-stretch gap-2">
                <code class="min-w-0 flex-1 rounded-md border border-border/80 bg-background px-3 py-2.5 font-mono text-[13px] leading-6 break-all text-foreground sm:px-4 sm:py-3 sm:text-sm sm:break-normal">${SKILLS_INSTALL_COMMAND}</code>
                <button
                  class="js-copy-command ${CHIP_SURFACE} min-h-[44px] shrink-0 px-4"
                  type="button"
                  data-copy-value="${SKILLS_INSTALL_COMMAND}"
                  data-copy-label="${t.compareCopy}"
                  data-copied-label="${t.compareCopied}"
                >${t.compareCopy}</button>
              </div>
              <ul class="mt-5 space-y-3 text-sm leading-6 text-muted-foreground sm:mt-6 sm:space-y-4">
                ${t.compareSkillItems.map((item) => `<li class="border-t border-border/60 pt-3 sm:pt-4">${item}</li>`).join("")}
              </ul>
              <a class="js-skills-cta mt-5 inline-flex items-center gap-1 self-start text-sm font-medium text-brand transition-colors hover:text-brand/80 sm:mt-6" href="/${locale}/skills">${t.compareSkillCta} →</a>
            </article>
          </div>
          <p class="reveal mt-4 ${CARD_SURFACE} p-4 text-sm leading-6 text-muted-foreground sm:mt-5 sm:p-5">${t.compareShared}</p>
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
          <a class="transition-colors hover:text-brand" href="/${locale}/skills">${t.navSkills}</a>
          <a class="transition-colors hover:text-brand" href="#compare">${t.navCompare}</a>
          <a class="js-pricing-link transition-colors hover:text-brand" href="/${locale}/pricing">${t.navPricing}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/contact">${t.navContact}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/ai-3d-model-generation">${t.guidesAi3D}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/code-to-parametric-cad">${t.guidesCodeCad}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/local-data">${t.guidesLocalData}</a>
          <a class="transition-colors hover:text-brand" href="/${locale}/quick-start">${t.guidesQuickStart}</a>
          <a class="js-skills-cta transition-colors hover:text-brand" href="/${locale}/skills">${t.guidesSkills}</a>
        </div>
      </footer>
    </div>
  `;
}

export function isSupportedLocale(locale) {
  return locale === "en" || locale === "zh";
}
