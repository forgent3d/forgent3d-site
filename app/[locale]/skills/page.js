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
        "一条命令给你的本地 agent 装上 Forgent3D skill，它就能建模，做出来的模型直接出现在你的 Forgent3D 工作区。",
      ogLocale: "zh_CN",
      kicker: "Skills",
      h1: "让你已经在用的 agent 会做 CAD",
      intro:
        "装上 Forgent3D skill，你照常在 Claude Code、Codex 或 Cursor 里提需求，它就能写出可编辑的 CAD 模型，打开就能在浏览器里看、接着改。",
      installTitle: "安装",
      installHint: "一条命令，在你想建模的目录里执行。",
      installNote: "装完即用，不需要再装 CAD 内核或其他依赖。",
      copy: "复制",
      copied: "已复制",
      agentsTitle: "支持的 agent",
      agentsHint: "任何支持 skill 的 agent 都可以。已验证：",
      flowTitle: "怎么用",
      steps: [
        {
          label: "01",
          title: "让 agent 写零件",
          text: "说清楚你要什么——尺寸、孔位、配合关系。它写出参数化模型，尺寸以后都能改。",
        },
        {
          label: "02",
          title: "它会构建和测量",
          text: "每次改完都会构建并测量。",
        },
        {
          label: "03",
          title: "模型出现在你的工作区",
          text: "打开就是你自己的模型：可以在浏览器里继续调参数、编辑草图、分享和留版本。",
        },
      ],
      whyTitle: "为什么值得装",
      why: [
        "模型代码留在你的仓库里，可以 Git 管理、审查和复用。",
        "本地不用装 CAD 软件或任何依赖。",
        "做出来的模型直接出现在 Forgent3D 工作区，和网页里生成的模型完全一样，可以继续编辑。",
        "不想用包管理器？把仓库克隆下来，让 agent 直接读里面的 skill 也可以。",
      ],
      promptTitle: "可以直接给 agent 的提示",
      prompt:
        "用 Forgent3D skill 做一个电机安装支架：底板 80×60×6mm，四个 M4 沉头孔，立面上开一个 φ22 的轴孔。",
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
      "Install the Forgent3D skill and ask for a part the way you normally would in Claude Code, Codex, or Cursor. It writes an editable CAD model you can open in the browser and keep working on.",
    installTitle: "Install",
    installHint: "One command, run where you want to build models.",
    installNote: "That's it — no CAD kernel or extra dependencies to install.",
    copy: "Copy",
    copied: "Copied",
    agentsTitle: "Works with",
    agentsHint: "Any agent that supports skills. Verified on:",
    flowTitle: "How it works",
    steps: [
      {
        label: "01",
        title: "Ask for a part",
        text: "Describe what you want — dimensions, hole patterns, fits. It writes a parametric model whose dimensions you can change later.",
      },
      {
        label: "02",
        title: "It builds and measures",
        text: "It builds and measures after every edit.",
      },
      {
        label: "03",
        title: "It lands in your workspace",
        text: "Open it and the model is yours: tweak parameters, edit sketches, share it, keep versions.",
      },
    ],
    whyTitle: "Why install it",
    why: [
      "Model code stays in your repo — versioned, reviewable, reusable.",
      "No CAD software or dependencies to install locally.",
      "Models land in your Forgent3D workspace, identical to ones generated in the browser and just as editable.",
      "Prefer not to use a package manager? Clone the repository and point your agent at the skill directly.",
    ],
    promptTitle: "Prompt you can give your agent",
    prompt:
      "Use the Forgent3D skill to build a motor mount bracket: 80x60x6mm base plate, four M4 counterbored holes, and a 22mm shaft bore in the upright face.",
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
