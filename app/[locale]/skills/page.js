import { notFound } from "next/navigation";
import {
  isSupportedLocale,
  SKILLS_AGENTS,
  SKILLS_INSTALL_COMMAND,
  SKILLS_REPO_URL,
} from "../../lib/landing-page";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "Forgent3D Skills：让 Claude Code、Codex、Cursor 会做 CAD | Forgent3D",
      description:
        "一条命令给你的本地 agent 装上 Forgent3D skill：它写模型代码、自己构建校验几何，并把可编辑的 3D 模型交回云端工作区。",
      ogLocale: "zh_CN",
      kicker: "Skills",
      h1: "让你已经在用的 agent 会做 CAD",
      intro:
        "Forgent3D skill 把云端的 CAD agent 装进你的 AI IDE。你照常在 Claude Code、Codex 或 Cursor 里提需求，它写 build123d 方言的模型代码、构建并测量几何，最后给你一条可编辑的 3D 链接。",
      installTitle: "安装",
      installHint: "一条命令，在你想建模的目录里执行。",
      installNote: "装完即用，不需要再装 CAD 内核或其他依赖。",
      copy: "复制",
      copied: "已复制",
      agentsTitle: "支持的 agent",
      agentsHint: "任何支持 skills 约定的 agent 都可以。已验证：",
      flowTitle: "怎么用",
      steps: [
        {
          label: "01",
          title: "让 agent 写零件",
          text: "说清楚你要什么——尺寸、孔位、配合关系。agent 写出参数化模型代码，而不是一次性 mesh。",
        },
        {
          label: "02",
          title: "它自己验证",
          text: "每次改完都会构建并测量结果，形状不对、构建失败，在你看到之前它就发现并修掉了。",
        },
        {
          label: "03",
          title: "结果落回工作区",
          text: "它给你一条 3D 链接，打开就是你自己的模型：可以在浏览器里继续调参数、编辑草图、分享和留版本。",
        },
      ],
      whyTitle: "为什么值得装",
      why: [
        "模型代码留在你的仓库里，可以 Git 管理、审查和复用。",
        "构建和几何测量跑在云端，本地不用装 Python CAD 内核和构建工具。",
        "做出来的模型直接出现在 Forgent3D 工作区，和网页里生成的模型完全一样，可以继续编辑。",
        "不想用包管理器？clone 仓库自己 vendor 一份，让 agent 读里面的 skill 也可以。",
      ],
      promptTitle: "可以直接给 agent 的提示",
      prompt:
        "用 Forgent3D skill 做一个电机安装支架：底板 80×60×6mm，四个 M4 沉头孔，立面上开一个 φ22 的轴孔。做完给我 3D 链接。",
      manualTitle: "手动安装",
      manualText: "想自己 vendor 一份？clone 仓库，让 agent 读里面的 skill。",
      repoLink: "在 GitHub 查看",
      ctaTitle: "也可以直接在浏览器里用",
      ctaText: "不想接自己的 agent？登录 Forgent3D，同一个 CAD agent 在网页里就能用。",
      ctaLink: "登录后开始使用",
      quickStartLink: "查看快速开始",
      home: "← 返回首页",
    };
  }

  return {
    title: "Forgent3D Skills: CAD for Claude Code, Codex, and Cursor | Forgent3D",
    description:
      "One command installs the Forgent3D skill into your local agent: it writes model code, builds and measures its own geometry, and hands back an editable 3D model.",
    ogLocale: "en_US",
    kicker: "Skills",
    h1: "Give the agent you already use a CAD tool",
    intro:
      "The Forgent3D skill puts the cloud CAD agent inside your AI IDE. Ask for a part the way you normally would in Claude Code, Codex, or Cursor: it writes build123d-dialect model code, builds and measures the geometry, and hands you an editable 3D link.",
    installTitle: "Install",
    installHint: "One command, run where you want to build models.",
    installNote: "That's it — no CAD kernel or extra dependencies to install.",
    copy: "Copy",
    copied: "Copied",
    agentsTitle: "Works with",
    agentsHint: "Any agent that supports the skills convention. Verified on:",
    flowTitle: "How it works",
    steps: [
      {
        label: "01",
        title: "Ask for a part",
        text: "Describe what you want — dimensions, hole patterns, fits. The agent writes parametric model code, not a one-shot mesh.",
      },
      {
        label: "02",
        title: "It checks its own work",
        text: "After every edit it builds and measures the result, so a failed build or a wrong shape gets caught and fixed before it reaches you.",
      },
      {
        label: "03",
        title: "It lands in your workspace",
        text: "You get a 3D link. Open it and the model is yours: tweak parameters, edit sketches, share it, keep versions.",
      },
    ],
    whyTitle: "Why install it",
    why: [
      "Model code stays in your repo — versioned, reviewable, reusable.",
      "Builds and geometry measurement run in the cloud, so there is no Python CAD kernel or build toolchain to install locally.",
      "Models land in your Forgent3D workspace, identical to ones generated in the browser and just as editable.",
      "Prefer not to use a package manager? Clone the repository and point your agent at the skill directly.",
    ],
    promptTitle: "Prompt you can give your agent",
    prompt:
      "Use the Forgent3D skill to build a motor mount bracket: 80x60x6mm base plate, four M4 counterbored holes, and a 22mm shaft bore in the upright face. Give me the 3D link when it builds.",
    manualTitle: "Manual install",
    manualText: "Prefer to vendor it? Clone the repository and point your agent at the skill.",
    repoLink: "View on GitHub",
    ctaTitle: "Or just use it in the browser",
    ctaText: "Not wiring up your own agent? Sign in to Forgent3D and the same CAD agent runs in a browser tab.",
    ctaLink: "Sign in to start",
    quickStartLink: "Open Quick Start",
    home: "← Back home",
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
      <a className="inline-flex rounded-md border border-border/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80 hover:border-brand/50" href={`/${locale}`}>
        {copy.home}
      </a>
      <p className="mt-10 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
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
            data-copy-label={copy.copy}
            data-copied-label={copy.copied}
          >
            {copy.copy}
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{copy.installNote}</p>
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

      <section className="mt-6 rounded-2xl border border-brand/30 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold text-foreground">{copy.promptTitle}</h2>
        <pre className="mt-5 overflow-x-auto rounded-md border border-border/80 bg-background p-5 text-sm leading-6 text-muted-foreground">
          <code>{copy.prompt}</code>
        </pre>
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
            className="js-try-link inline-flex justify-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand/90"
            href={`https://app.forgent3d.com/try?lang=${locale}`}
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
