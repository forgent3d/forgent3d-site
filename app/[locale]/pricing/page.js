import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";

const CONTACT_EMAIL = "barry@forgent3d.com";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "方案 | Forgent3D",
      description:
        "了解 Forgent3D Agent 和开源桌面版的使用方式。Agent 适合免配置网页试用和快速验证，团队使用可联系 Forgent3D。",
      ogLocale: "zh_CN",
      kicker: "Plans",
      h1: "选择适合你的 Forgent3D 工作流",
      intro:
        "Agent 适合免配置网页试用和快速验证。Desktop 开源，适合私有项目、本地文件和深度控制。",
      plans: [
        {
          name: "Forgent3D Agent",
          badge: "网页运行",
          price: "早期访问",
          text: "在浏览器里输入需求，让托管 agent 生成 CAD 代码、运行构建并预览真实 3D 结果。",
          items: ["免安装 CAD 环境", "内置 agent 生成与修正流程", "适合快速验证、演示和团队试用"],
          primary: "免登录试用",
          primaryHref: "https://app.forgent3d.com/try",
          primaryClass: "js-try-link",
          secondary: "联系获取团队方案",
          secondaryHref: `mailto:${CONTACT_EMAIL}`,
        },
        {
          name: "Forgent3D Desktop",
          badge: "开源本地工作台",
          price: "免费开源",
          text: "完整桌面版适合本地项目、私有文件和与 Codex、Claude Code、Cursor 的深度工作流。",
          items: ["完整本地控制", "模型代码和构建结果留在项目目录", "适合复杂装配和长期迭代"],
          primary: "下载桌面版",
          primaryHref: "#",
          primaryClass: "js-download-link",
          secondary: "查看源码",
          secondaryHref: "#",
          secondaryClass: "js-github-link",
        },
      ],
      contactTitle: "需要更高额度、团队试用或合作？",
      contactText: `发邮件到 ${CONTACT_EMAIL}，告诉我们你的使用场景。`,
      contactAction: CONTACT_EMAIL,
    };
  }

  return {
    title: "Plans | Forgent3D",
    description:
      "Explore Forgent3D Agent and the open-source desktop workflow. Agent is for zero-setup browser trials and rapid validation; teams can contact Forgent3D.",
    ogLocale: "en_US",
    kicker: "Pricing",
    h1: "Choose the Forgent3D workflow that fits your project",
    intro:
      "Agent is for zero-setup browser trials and rapid validation. Desktop is open source and fits private projects, local files, and deeper control.",
    plans: [
      {
        name: "Forgent3D Agent",
        badge: "Runs in the browser",
        price: "Early access",
        text: "Prompt in the browser, let the hosted agent generate CAD code, run builds, and preview real 3D results.",
        items: ["No CAD environment setup", "Built-in agent generation and revision loop", "Good for quick validation, demos, and team trials"],
        primary: "Try without login",
        primaryHref: "https://app.forgent3d.com/try",
        primaryClass: "js-try-link",
        secondary: "Contact for team access",
        secondaryHref: `mailto:${CONTACT_EMAIL}`,
      },
      {
        name: "Forgent3D Desktop",
        badge: "Open-source local workbench",
        price: "Free and open source",
        text: "The full desktop app fits local projects, private files, and deeper workflows with Codex, Claude Code, and Cursor.",
        items: ["Complete local control", "Model code and build output stay in your project", "Good for complex assemblies and long-running iteration"],
        primary: "Download Desktop",
        primaryHref: "#",
        primaryClass: "js-download-link",
        secondary: "View source",
        secondaryHref: "#",
        secondaryClass: "js-github-link",
      },
    ],
    contactTitle: "Need higher limits, team access, or a partnership?",
    contactText: `Email ${CONTACT_EMAIL} and tell us what you are building.`,
    contactAction: CONTACT_EMAIL,
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/pricing`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        en: "/en/pricing",
        zh: "/zh/pricing",
        "x-default": "/en/pricing",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export default async function PricingPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();

  const copy = getCopy(locale);

  return (
    <main className="mx-auto w-[min(1080px,calc(100vw-32px))] py-16 text-slate-100">
      <a className="inline-flex rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cyanx hover:border-cyanx/50" href={`/${locale}`}>
        {locale === "zh" ? "← 返回首页" : "← Back home"}
      </a>
      <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-cyanx">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">{copy.h1}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {copy.plans.map((plan) => (
          <article key={plan.name} className="rounded-[2rem] border border-line bg-slate-950/50 p-6 shadow-panel">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyanx">{plan.badge}</p>
            <h2 className="mt-4 text-3xl font-bold text-white">{plan.name}</h2>
            <p className="mt-3 text-2xl font-semibold text-signal">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{plan.text}</p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
              {plan.items.map((item) => (
                <li key={item} className="border-t border-line pt-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className={`${plan.primaryClass || ""} inline-flex justify-center rounded-full bg-gradient-to-r from-cyanx to-violetx px-5 py-3 text-sm font-bold text-slate-950 shadow-glow`}
                href={plan.primaryHref}
              >
                {plan.primary}
              </a>
              <a
                className={`${plan.secondaryClass || ""} inline-flex justify-center rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50`}
                href={plan.secondaryHref}
              >
                {plan.secondary}
              </a>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-[2rem] border border-cyanx/30 bg-cyanx/[0.06] p-6">
        <h2 className="text-2xl font-semibold text-white">{copy.contactTitle}</h2>
        <p className="mt-3 text-slate-300">{copy.contactText}</p>
        <a className="mt-5 inline-flex rounded-full border border-line px-5 py-3 text-sm font-bold text-white hover:border-cyanx/50" href={`mailto:${CONTACT_EMAIL}`}>
          {copy.contactAction}
        </a>
      </section>
    </main>
  );
}
