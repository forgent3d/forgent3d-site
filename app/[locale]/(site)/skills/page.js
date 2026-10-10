import { notFound } from "next/navigation";
import {
  isSupportedLocale,
  SKILLS_AGENTS,
  SKILLS_INSTALL_COMMAND,
  SKILLS_REPO_URL,
} from "../../../lib/landing-page";
import { OG_BASE } from "../../../lib/seo";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D Skills：让 Claude Code、Codex、Cursor 会做 CAD | Forgent3D",
      description:
        "一条命令给你的本地 agent 装上 Forgent3D skill，它就能建模，做出来的模型直接出现在你的 Forgent3D 工作区。",
      ogLocale: "zh_CN",
      kicker: "Skills",
      h1: "让你已经在用的 agent 会做 CAD",
      intro:
        "装上 Forgent3D skill，你照常在 Claude Code、Codex 或 Cursor 里提需求。它按你的要求选路线：写一个可编辑的参数化模型，或者直接写 OpenSCAD。两条路都不用在本地装任何东西。",
      installTitle: "安装",
      installHint: "一条命令，在你想建模的目录里执行。",
      installNote: "装完即用：CAD 内核和 OpenSCAD 都随 skill 的命令行工具一起来，不用再装别的。",
      copy: "复制",
      copied: "已复制",
      routesTitle: "两条路线，它自己选",
      routesHint: "有 .scad 或提到 OpenSCAD 就走 OpenSCAD；要装配、要量尺寸、要以后在浏览器里接着改就写参数化模型。你也可以直接说要哪种。",
      routes: [
        {
          title: "参数化模型",
          badge: "build123d 方言",
          when: "适合：尺寸以后要改、零件之间有配合或运动、要直接拿到真正的 STEP、要在浏览器里接着编辑。",
          gets: "引擎构建并测量——孔径和孔位、每个平面在哪、壁厚——导出 STEP，模型出现在你的 Forgent3D 工作区。",
          prompt: "用 Forgent3D skill 做一个电机安装支架：底板 80×60×6mm，四个 M4 沉头孔，立面上开一个 φ22 的轴孔。",
        },
        {
          title: "OpenSCAD",
          badge: ".scad",
          when: "适合：你已经在用 OpenSCAD、手里有 .scad 文件、用 BOSL2 或 Customizer 参数。",
          gets: "真正的 OpenSCAD 在本机渲染，agent 读回包围盒、体积和 echo() 的数，截图检查，导 STL / 3MF 去打印，再给你一个带代码的链接——那一页能导 STEP。",
          prompt: "用 Forgent3D skill，在 OpenSCAD 里写一个带盖的收纳盒：内腔 80×50×30mm，壁厚 2mm，盖子松紧做成 Customizer 参数，给我预览链接。",
        },
      ],
      promptLabel: "可以直接给 agent 的提示",
      agentsTitle: "支持的 agent",
      agentsHint: "任何支持 skill 的 agent 都可以。已验证：",
      flowTitle: "怎么用",
      steps: [
        {
          label: "01",
          title: "让 agent 写零件",
          text: "说清楚你要什么——尺寸、孔位、配合关系。要 OpenSCAD 就提一句，它照你的语言写。",
        },
        {
          label: "02",
          title: "它会构建、测量、看一眼",
          text: "每次改完都构建或渲染、读回尺寸、截一张三视图自己核对。",
        },
        {
          label: "03",
          title: "拿到的东西",
          text: "参数化模型出现在你的工作区，可以继续调参数、编辑草图、分享、留版本；OpenSCAD 零件是一个带代码的链接，打开就能拖参数、导 STEP 或 STL。",
        },
      ],
      whyTitle: "为什么值得装",
      why: [
        "模型代码留在你的仓库里，可以 Git 管理、审查和复用。",
        "本地不用装 CAD 软件、OpenSCAD 或任何依赖。",
        "参数化模型直接出现在 Forgent3D 工作区，和网页里生成的模型完全一样，可以继续编辑；OpenSCAD 零件的代码在链接里，不上传。",
        "不想用包管理器？把仓库克隆下来，让 agent 直接读里面的 skill 也可以。",
      ],
      manualTitle: "手动安装",
      manualText: "把仓库克隆下来，让 agent 直接读里面的 skill。",
      repoLink: "在 GitHub 查看",
      ctaTitle: "也可以直接在浏览器里用",
      ctaText: "不想接自己的 agent？登录 Forgent3D，在网页里一样能建模。",
      ctaLink: "立即开始",
      quickStartLink: "查看快速开始",
    };
  }

  return {
    title: "Forgent3D Skills: CAD for Claude Code, Codex, and Cursor | Forgent3D",
    description:
      "One command installs the Forgent3D skill into your local agent. It can then model, and what it makes shows up in your Forgent3D workspace.",
    ogLocale: "en_US",
    kicker: "Skills",
    h1: "Give the agent you already use a CAD tool",
    intro:
      "Install the Forgent3D skill and ask for a part the way you normally would in Claude Code, Codex or Cursor. It picks the route from what you ask: an editable parametric model, or plain OpenSCAD. Nothing to install locally either way.",
    installTitle: "Install",
    installHint: "One command, run where you want to build models.",
    installNote: "That's it: the CAD kernel and OpenSCAD ship inside the skill's command-line tool.",
    copy: "Copy",
    copied: "Copied",
    routesTitle: "Two routes — it picks",
    routesHint: "A .scad file or a mention of OpenSCAD means the OpenSCAD route; assemblies, measured dimensions and parts you will keep editing in the browser mean a parametric model. Or just say which you want.",
    routes: [
      {
        title: "Parametric model",
        badge: "build123d dialect",
        when: "For parts whose dimensions will change, parts that fit or move against each other, a real STEP straight away, or editing on in the browser.",
        gets: "The engine builds and measures it — bore sizes and positions, where every flat face sits, wall thickness — exports STEP, and the model lands in your Forgent3D workspace.",
        prompt: "Use the Forgent3D skill to build a motor mount bracket: 80x60x6mm base plate, four M4 counterbored holes, and a 22mm shaft bore in the upright face.",
      },
      {
        title: "OpenSCAD",
        badge: ".scad",
        when: "For when you already work in OpenSCAD, have a .scad in hand, or use BOSL2 and Customizer parameters.",
        gets: "The real OpenSCAD renders it on your machine; the agent reads back bounding box, volume and echo() values, checks a snapshot, exports STL / 3MF for printing, and hands you a link that carries the code — that page exports STEP.",
        prompt: "Use the Forgent3D skill to write an OpenSCAD box with a lid: 80x50x30mm cavity, 2mm walls, lid fit as a Customizer parameter, and give me the preview link.",
      },
    ],
    promptLabel: "Prompt you can give your agent",
    agentsTitle: "Works with",
    agentsHint: "Any agent that supports skills. Verified on:",
    flowTitle: "How it works",
    steps: [
      {
        label: "01",
        title: "Ask for a part",
        text: "Describe what you want — dimensions, hole patterns, fits. Say OpenSCAD if that is what you want, and it writes in your language.",
      },
      {
        label: "02",
        title: "It builds, measures and looks",
        text: "After every edit it builds or renders, reads the dimensions back and checks a three-view snapshot itself.",
      },
      {
        label: "03",
        title: "What you get",
        text: "A parametric model lands in your workspace: tweak parameters, edit sketches, share it, keep versions. An OpenSCAD part is a link that carries the code: open it, drag the parameters, export STEP or STL.",
      },
    ],
    whyTitle: "Why install it",
    why: [
      "Model code stays in your repo — versioned, reviewable, reusable.",
      "No CAD software, no OpenSCAD, no dependencies to install locally.",
      "Parametric models land in your Forgent3D workspace, identical to ones generated in the browser and just as editable; an OpenSCAD part's code travels in its link, nothing is uploaded.",
      "Prefer not to use a package manager? Clone the repository and point your agent at the skill directly.",
    ],
    manualTitle: "Manual install",
    manualText: "Clone the repository and point your agent at the skill.",
    repoLink: "View on GitHub",
    ctaTitle: "Or just use it in the browser",
    ctaText: "Not wiring up your own agent? Sign in to Forgent3D and model right in the browser.",
    ctaLink: "Get started",
    quickStartLink: "Open Quick Start",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/skills`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/skills",
        zh: "/zh/skills",
        "x-default": "/en/skills",
      },
    },
    openGraph: {
      ...OG_BASE,
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "article",
      url: path,
    },
  };
}

export default async function SkillsPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <section className="mt-12 rounded-2xl border border-brand/30 bg-card/60 p-6 shadow-panel">
        <h2 className="text-2xl font-semibold text-foreground">{copy.installTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.installHint}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap rounded-md border border-border/80 bg-background px-4 py-3 font-mono text-sm text-foreground">
            {SKILLS_INSTALL_COMMAND}
          </code>
          <button
            className="js-copy-command inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md border border-border/80 bg-card/60 px-5 text-sm font-semibold text-foreground transition-colors hover:border-brand/50"
            type="button"
            data-copy-value={SKILLS_INSTALL_COMMAND}
            data-copy-source="skills"
            data-copy-label={copy.copy}
            data-copied-label={copy.copied}
          >
            {copy.copy}
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{copy.installNote}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.routesTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{copy.routesHint}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {copy.routes.map((route) => (
            <article key={route.title} className="flex flex-col rounded-2xl border border-border/80 bg-card/60 p-6">
              <span className="font-mono text-xs text-brand">{route.badge}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{route.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{route.when}</p>
              <p className="mt-3 text-sm leading-6 text-foreground/80">{route.gets}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">{copy.promptLabel}</p>
              <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-md border border-border/80 bg-background p-4 text-sm leading-6 text-muted-foreground">
                <code>{route.prompt}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.agentsTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.agentsHint}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SKILLS_AGENTS.map((agent) => (
            <li key={agent} className="rounded-md border border-border/80 bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
              {agent}
            </li>
          ))}
        </ul>
      </section>

      <h2 className="mt-12 text-2xl font-semibold text-foreground">{copy.flowTitle}</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {copy.steps.map((step) => (
          <article key={step.label} className="rounded-2xl border border-border/80 bg-card/60 p-6">
            <span className="font-mono text-xs text-brand">{step.label}</span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.whyTitle}</h2>
        <ul className="mt-5 space-y-3 text-muted-foreground">
          {copy.why.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-dashed border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.manualTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.manualText}</p>
        <a
          className="js-skills-repo-link mt-5 inline-flex rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50"
          href={SKILLS_REPO_URL}
          target="_blank"
          rel="noreferrer"
        >
          {copy.repoLink}
        </a>
      </section>

      <section className="mt-12 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.ctaTitle}</h2>
        <p className="mt-3 text-muted-foreground">{copy.ctaText}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            className="js-try-link inline-flex justify-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-white! transition-colors hover:bg-brand/90"
            href={`https://app.forgent3d.com?lang=${locale}`}
          >
            {copy.ctaLink}
          </a>
          <a
            className="inline-flex justify-center rounded-md border border-border/80 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand/50"
            href={`/${locale}/quick-start`}
          >
            {copy.quickStartLink}
          </a>
        </div>
      </section>
    </main>
  );
}
