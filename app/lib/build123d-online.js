// build123d online: one page under /[locale]/build123d-online with its own header (app/[locale]/build123d-online/layout.js),
// built like the OpenSCAD viewer page. The tool is the app's /build123d, which is noindex — this page is what ranks.
// Head term "build123d" 720/38 and rising (platform docs/generator-seo-research.md §1.9); someone typing it plus
// online / playground / in browser wants to run a script without installing Python and OCP, or to see what an AI
// wrote. The path, the metadata, the copy (en / zh) and the numbers live here.
//
// Say what the page does, not how the engine works (10-26 user decision): no CPython, no match rates, no gate numbers
// on the page. What does stay (back on 10-31, after the 10-26 cut also took it out): that the engine is Forgent3D's and
// compatible with the build123d API, said once in the FAQ ("same as running build123d locally?", answered with the
// measured numbers in COMPAT — 10-31, user's call: real numbers show how close it is) and once in the footer credit
// ("an independent project that's compatible with its API"). Worded as what we are, not as what we
// aren't: build123d's maintainers read this page too and it must agree with what we tell them, but "we implemented its
// API / are not affiliated" reads as defensive. Engine internals (CPython, the gate's thresholds) stay off the page.

import { OG_BASE, SITE_URL } from "./seo";

export const APP_B123D_URL = "https://app.forgent3d.com/build123d";

// How close to build123d itself, measured against real build123d 0.13 ("the same part": volume, surface area and
// bounding box within 1%). The cadbench corpus of AI-written scripts (1040, said as "about 1,000"), 99.04% in the platform
// gate run 40181427126 (10-24; platform docs/build123d-preview-launch.md §2 B1). The page gives this one number, plainly
// (user's call 10-31); public/llms.txt carries it with the other corpora — change both when a new gate run moves it.
const COMPAT = { aiScripts: { en: "about 1,000", zh: "约 1000" }, aiSamePct: "99", measured: { en: "October 2026", zh: "2026 年 10 月" } };

const SLUG = "build123d-online";

export function b123dPath(locale) {
  return `/${locale}/${SLUG}`;
}

export function b123dAppUrl(locale) {
  return `${APP_B123D_URL}?lang=${locale}`;
}

// The example cards open /build123d?example=<name> already built. Names are the keys of platform
// packages/cloud/lib/build123d-examples.ts (add-only there): add an example there and ship it first, then its name
// here, its copy in both languages (examples) and public/build123d-examples/<name>.webp. Thumbnails: the example
// with `# forgent3d: script` appended, `cad-build snapshot --view iso --bare --size 1200`, cropped to the part,
// centred on white at 4:3, 800×600 webp (the same look as public/scad-examples/).
export const B123D_EXAMPLES = ["mounting-plate", "enclosure", "pipe-flange"];

export function b123dExampleUrl(locale, name) {
  return `${APP_B123D_URL}?example=${encodeURIComponent(name)}&lang=${locale}`;
}

// The page's own sample, opened from a #code= link: algebra mode (the examples are builder mode), plain comments
// instead of #@ so it shows that any AI-written script's constants become sliders. Built 10-26 on real build123d
// 0.13 and on the app's engine: 1491.57 mm³, 12 × 12 × 15 mm on both.
export const B123D_SAMPLE = `"""M3 standoff with a hex nut pocket underneath. World Z-up, mm; it stands on Z=0."""
from build123d import *
from ocp_vscode import show

OD = 12.0  # outer diameter
HEIGHT = 15.0
BORE = 3.4  # M3 clearance hole
NUT_AF = 5.7  # nut across flats, plus clearance
NUT_DEPTH = 3.0

standoff = Cylinder(OD / 2, HEIGHT, align=(Align.CENTER, Align.CENTER, Align.MIN))
standoff -= Cylinder(BORE / 2, HEIGHT, align=(Align.CENTER, Align.CENTER, Align.MIN))
standoff -= extrude(RegularPolygon(NUT_AF / 2, 6, major_radius=False), amount=NUT_DEPTH)
top_outer = standoff.edges().group_by(Axis.Z)[-1].sort_by(SortBy.RADIUS)[-1]
standoff = chamfer(top_outer, 0.8)

show(standoff)
`;

export function b123dSampleUrl(locale) {
  return `${b123dAppUrl(locale)}#code=${Buffer.from(B123D_SAMPLE, "utf8").toString("base64url")}`;
}

// The app's /build123d reads #code= with the same decoder as /scad (platform packages/scad-transpile/src/link.ts);
// public/llms.txt carries the same format and rules — change the three together.
export const B123D_LINK_FORMAT = `${APP_B123D_URL}#code=<CODE>`;

export function b123dMetadata(locale) {
  const t = getB123dCopy(locale);
  const path = b123dPath(locale);
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: { en: b123dPath("en"), zh: b123dPath("zh"), "x-default": b123dPath("en") },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: `/og/${SLUG}-${locale}.png`, width: 1200, height: 630, alt: t.toolName }],
      title: t.title,
      description: t.description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      url: path,
    },
  };
}

export function b123dSchemas(locale) {
  const t = getB123dCopy(locale);
  const url = `${SITE_URL}${b123dPath(locale)}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: t.toolName,
      url,
      description: t.description,
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires WebAssembly and WebGL",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: t.features.map((f) => f.title),
      potentialAction: {
        "@type": "ViewAction",
        name: "Open build123d code in the browser",
        target: { "@type": "EntryPoint", urlTemplate: `${APP_B123D_URL}#code={code}` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: locale === "zh" ? "首页" : "Home", item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: t.toolName, item: url },
      ],
    },
  ];
}

export function getB123dCopy(locale) {
  if (locale === "zh") {
    return {
      toolName: "build123d 在线",
      openEditor: "打开编辑器",
      homeLink: "Forgent3D 首页",
      viewerLink: "OpenSCAD 在线预览",
      generatorsLink: "3D 打印生成器",
      skillsLink: "Forgent3D Skill",
      credit:
        "build123d 是 gumyr 与社区贡献者开发、以 Apache-2.0 协议发布的开源 Python CAD 库。Forgent3D 是独立项目，兼容它的 API，让 build123d 脚本直接在浏览器里运行。",
      licences: "浏览器里运行的开源组件：许可证与源码",
      title: "build123d 在线：在浏览器里运行 build123d 代码、导出 STEP | Forgent3D",
      description:
        "在线运行 build123d：贴一段脚本或打开一个链接，就能看到零件，拖滑块改参数，导出 STEP / STL。不用安装，不用注册。",
      keywords: [
        "build123d 在线",
        "build123d 在线运行",
        "build123d 预览",
        "build123d 导出 STEP",
        "build123d 教程 例子",
        "Python CAD 在线",
        "浏览器 Python CAD",
        "AI 生成 build123d 代码预览",
      ],
      h1: "build123d 在线：在浏览器里运行 build123d 代码",
      intro:
        "把 build123d 脚本贴进来，或者打开一个带代码的链接，浏览器里直接建出零件。代码里的尺寸常量变成滑块，拖一下就重建；满意了导出 STEP 或 STL。不用装 Python 和 OCP，不用注册，代码不上传。",
      cta: "打开 build123d 编辑器",
      sampleCta: "带示例代码打开",
      featuresTitle: "你能得到什么",
      features: [
        {
          title: "脚本照原样跑",
          text: "builder 模式与代数模式、选择器、Locations、joints——build123d 0.13 的写法照常能用，numpy、bd_warehouse、sympy 照常 import。",
        },
        {
          title: "精确几何，导出 STEP / STL",
          text: "建出的是真正的实体，不是网格：真平面、真圆柱、真孔。右下角一键导出 STEP（Fusion、SolidWorks、Onshape、FreeCAD 直接打开）或 STL（给切片软件）。",
        },
        {
          title: "常量就是滑块",
          text: "用 #@ 声明的旋钮，或者——没声明时——模块顶层的每个数字常量，都会变成参数卡里的滑块。拖动时改的是代码里那一行的数字，然后重建。",
        },
        {
          title: "一句话让 AI 改",
          text: "「孔改成 M4」「盖子松一点」：AI 改代码、浏览器重建，建不出来的不收，可撤销。未登录每天 2 次；存进「我的模型」后可以交给 AI agent 接着做。",
        },
        {
          title: "报错标在你的代码行上",
          text: "出错时说的是你自己代码里的第几行，并标在编辑器上，一键交给 AI 修。在 build123d 里能跑、这里却报错或形状不对的，点「报告问题」发给我们。",
        },
        {
          title: "代码放进链接",
          text: "「复制链接」把当前代码放进网址，谁打开都看到同一个零件。ChatGPT、Claude 替你写了 build123d，也可以让它直接给这样的链接。",
        },
      ],
      examplesTitle: "手边没有脚本？先试试这几个",
      examplesIntro: "点开就在浏览器里建好；拖参数卡里的滑块改尺寸，然后导出 STEP。不用登录。",
      exampleOpen: "打开并导出 STEP",
      examples: {
        "mounting-plate": {
          title: "安装板",
          text: "圆角矩形板，四角沉头孔。GridLocations 排孔，fillet 只挑竖直的边。",
          alt: "安装板的等轴测图：圆角矩形薄板，四个角各有一个沉头孔",
        },
        enclosure: {
          title: "带盖外壳",
          text: "offset 抽壳出开口盒子，盖子带一圈插进盒口的唇边，配合间隙是参数。",
          alt: "电子外壳的等轴测图：开口朝上的圆角盒子，旁边是带内唇的盖子",
        },
        "pipe-flange": {
          title: "管道法兰",
          text: "PolarLocations 排一圈螺栓孔，按半径挑出内孔上沿倒角。",
          alt: "管道法兰的等轴测图：圆盘上六个螺栓孔，中间是带通孔的凸台",
        },
      },
      sampleTitle: "一段 AI 常写的那种脚本",
      sampleHint:
        "代数模式，一行一个常量，没有 #@——打开后 OD、HEIGHT 这几个常量就是滑块。",
      runsTitle: "能跑什么、不能跑什么",
      runsIntro: "能跑的和目前跑不了的，一条条列在这里。做不到的写法会直接报错并说明原因。",
      runsLabel: "能跑的",
      runs: [
        "build123d 0.13 的 API：BuildPart / BuildSketch / BuildLine 与代数模式、选择器与过滤、Locations 系列、joints，以及继承 build123d 类的写法。",
        "from build123d import *、from ocp_vscode import show 原样能用。结果取 show() 给的对象，没有就取 export_* 的对象，再没有就取最后一个 3D 变量。",
        "numpy、bd_warehouse（螺纹、紧固件、齿轮、管件）、sympy，以及 Python 标准库。",
        "Forgent3D 自己的 model.py（from cadkit import …）也能直接打开。",
      ],
      limitsLabel: "目前的限制",
      limits: [
        "CadQuery、scipy、matplotlib、shapely 不可用，直接 from OCP import … 大多也不行；报错里会给出改法。",
        "export_step、export_stl 这类调用不会真写文件，导出用页面上的按钮。",
        "Text() 用的是内置字体，和你本地排出来的字不一样；指定 font_path= 或写中日韩文字会报错。",
        "个别脚本会建出略有不同的形状而不报错，拿去加工前请核对尺寸。",
        "一个链接只带一个文件：import 你项目里别的 .py 会找不到，把它内联进来。",
      ],
      compareTitle: "和本机装 build123d 比",
      compareHead: ["", "本机 build123d", "这一页"],
      compare: [
        ["安装", "pip install build123d（连带 OCP / OpenCASCADE 的 wheel）", "打开一个网页"],
        ["看模型", "ocp_vscode / VS Code 插件", "页面自带"],
        ["改参数", "改数字、再运行一遍", "滑块，写回代码里的数字"],
        ["分享", "发 .py 文件", "一个带代码的链接"],
        ["导出", "代码里调 export_step() / export_stl()", "页面上的 STEP / STL 按钮"],
        ["第三方库", "pip 能装的都行", "numpy、bd_warehouse、sympy"],
      ],
      linkTitle: "从链接打开 build123d 代码（给 AI 助手和脚本用）",
      linkText:
        "把代码放进网址，编辑器打开就载入它、立刻构建——不用文件，不用登录。它是为 AI 助手准备的：ChatGPT、Gemini、Claude 替你写了 build123d，让它顺手给一个 Forgent3D 预览链接，点开就是真实几何，能拖参数、能导 STEP。上面的「带示例代码打开」就是这样一个链接。",
      linkFormatLabel: "链接格式",
      linkRules: [
        "<CODE> 是 Python 源码，百分号编码（encodeURIComponent 的结果）或 UTF-8 的 base64 / base64url 都行，编辑器自己分辨。",
        "放在 # 后面：# 后面的内容浏览器不会发给服务器，也没有长度限制。很短的代码也可以用 ?code=。",
        "一个链接带一个文件；numpy、bd_warehouse 照常 import。加 ?lang=en 或 ?lang=zh 指定界面语言。",
        "编辑器里的「复制链接」按钮，会把当前的代码变成这样一个链接。",
      ],
      linkPromptLabel: "可以这样问 AI",
      linkPrompt:
        "用 build123d 写一个 ___，尺寸一行一个常量，再给我一个 Forgent3D 预览链接：https://app.forgent3d.com/build123d#code=<代码，用 encodeURIComponent 编码>",
      skillTitle: "用 Claude Code 或 Codex？装 Forgent3D skill",
      skillText:
        "一条命令，agent 就能在你的仓库里写参数化的 build123d 模型，在本机用 Forgent3D 的 CAD 引擎构建：读回包围盒和体积、自己看三视图、导出 STEP / STL。不用装 Python 和 OCP。",
      skillBullets: [
        "模型代码留在你自己的仓库里，跟着 git 走。",
        "想给别人看，就让它给一个预览链接，打开就是这个编辑器。",
        "同一个 skill 也写 OpenSCAD，按你要的东西自己选路线。",
      ],
      skillCopy: "复制",
      skillCopied: "已复制",
      skillMore: "Skills 页",
      faqTitle: "常见问题",
      faqs: [
        {
          q: "不装 Python，能在线运行 build123d 吗？",
          a: "能。打开编辑器，贴代码或打开带代码的链接，浏览器里直接建出零件；拖参数、导出 STEP / STL 都在页面上完成。不用安装，不用注册。",
        },
        {
          q: "和在本机跑 build123d 一样吗？",
          a: `几乎一样。这里跑的是 Forgent3D 兼容 build123d 0.13 API 的引擎，所以不用装 Python 就能直接跑你的脚本。拿 build123d 0.13 本体逐份对照，${COMPAT.aiScripts.zh} 份 AI 写的脚本里 ${COMPAT.aiSamePct}% 建出一样的零件（${COMPAT.measured.zh}）。碰到不一样的，点「报告问题」发给我们。`,
        },
        {
          q: "脚本要改吗？ocp_vscode 的 show() 怎么办？",
          a: "一般不用改。from ocp_vscode import show 和 show(...) 原样能用：show 给的对象就是要显示的零件；没有 show 就取 export_step 之类导出的对象，再没有就取最后一个 3D 变量。export_* 不会真写文件，导出用页面上的按钮。",
        },
        {
          q: "能用 numpy、bd_warehouse 吗？CadQuery 呢？",
          a: "numpy、bd_warehouse、sympy 和 Python 标准库都能 import。CadQuery、scipy、matplotlib、shapely 不行，直接 from OCP import … 大多也不行；报错里会说该怎么改。",
        },
        {
          q: "代码会上传到服务器吗？",
          a: "不会。构建和导出都在你的浏览器里完成，链接里 # 后面的代码也不会发给服务器。只有你主动用「AI 修改」或「报告问题」（勾着附上代码）时，代码才会发给我们。",
        },
        {
          q: "ChatGPT、Claude 写的 build123d 代码，怎么最快看到结果？",
          a: "贴进编辑器，或者让 AI 直接给一个 https://app.forgent3d.com/build123d#code=<代码> 形式的链接，点开就是建好的零件。",
        },
        {
          q: "导出的 STEP 能在 SolidWorks、Fusion、FreeCAD 里打开吗？",
          a: "能。导出的是实体，孔和圆柱面导入后就是可以选取、标注的圆柱面，不是三角网格。",
        },
      ],
      moreTitle: "延伸阅读",
      moreViewer: "写 OpenSCAD 的话：真 OpenSCAD 在浏览器里渲染，同样能导 STEP。",
      moreGeneratorsTitle: "3D 打印生成器",
      moreGenerators: "齿轮、轴承座、支架、盒子……每个都是一份 build123d 模型，在浏览器里改尺寸、导出 STEP。",
      moreCodeCadTitle: "代码驱动的参数化 CAD",
      moreCodeCad: "让 AI agent 写参数化 CAD 代码、自己构建并核对，交给你能继续改的模型。",
      articleKicker: "文章",
    };
  }

  return {
    toolName: "build123d online",
    openEditor: "Open the editor",
    homeLink: "Forgent3D home",
    viewerLink: "OpenSCAD online viewer",
    generatorsLink: "3D print generators",
    skillsLink: "Forgent3D Skill",
    credit:
      "build123d is an open-source Python CAD library by gumyr and contributors, licensed under Apache-2.0. Forgent3D is an independent project that's compatible with its API and runs build123d scripts right in your browser.",
    licences: "Open-source components in the browser build: licences and source",
    title: "build123d Online — Run build123d Code in Your Browser, Export STEP | Forgent3D",
    description:
      "Run build123d online: paste a script or open a link, see the part, drag its parameters as sliders and export STEP or STL. No install, no sign-up.",
    keywords: [
      "build123d online",
      "build123d playground",
      "run build123d in browser",
      "build123d viewer",
      "build123d editor online",
      "build123d to step",
      "build123d examples",
      "python cad online",
      "preview build123d code from chatgpt",
    ],
    h1: "build123d online — run build123d code in your browser",
    intro:
      "Paste a build123d script, or open a link that carries one, and it builds right in your browser. The size constants in your code become sliders that rebuild as you drag; when it's right, export STEP or STL. No Python or OCP to install, no sign-up, and your code is not uploaded.",
    cta: "Open the build123d editor",
    sampleCta: "Open with sample code",
    featuresTitle: "What you get",
    features: [
      {
        title: "Your script, as written",
        text: "Builder and algebra mode, selectors, Locations, joints — build123d 0.13 code runs as you wrote it, and numpy, bd_warehouse and sympy import as usual.",
      },
      {
        title: "Exact geometry, STEP and STL export",
        text: "It builds real solids, not meshes: true planes, cylinders and holes. One click exports STEP (opens in Fusion, SolidWorks, Onshape and FreeCAD) or STL (for your slicer).",
      },
      {
        title: "Constants become sliders",
        text: "Knobs declared with #@ — or, without any, every number constant at module level — appear as sliders. Dragging one rewrites that number in your code and rebuilds.",
      },
      {
        title: "Change it in a sentence",
        text: "“Make the holes M4”, “loosen the lid”: the AI edits the code, your browser rebuilds it, and an edit that doesn't build is not applied. Two a day without an account; save the part to My models and the AI agent can carry on with it.",
      },
      {
        title: "Errors on your own line",
        text: "A failure names the line in your code and marks it in the editor, with one click to have the AI fix it. Code that runs in build123d but fails or builds a different shape here goes to us with “Report a problem”.",
      },
      {
        title: "Code in the link",
        text: "“Copy link” puts the current code into the URL, so whoever opens it sees the same part. When ChatGPT or Claude writes build123d for you, ask it for such a link.",
      },
    ],
    examplesTitle: "No script at hand? Start with one of these",
    examplesIntro: "Each opens already built in your browser. Drag the sliders to resize it, then export STEP. No sign-up.",
    exampleOpen: "Open and export STEP",
    examples: {
      "mounting-plate": {
        title: "Mounting plate",
        text: "A rounded plate with four countersunk holes: GridLocations places them, fillet picks only the vertical edges.",
        alt: "Isometric view of a mounting plate: a thin rounded rectangle with a countersunk hole in each corner",
      },
      enclosure: {
        title: "Enclosure with lid",
        text: "offset shells an open box; the lid has a lip that slips inside, with the clearance as a parameter.",
        alt: "Isometric view of an electronics enclosure: a rounded open box and, beside it, a lid with an inner lip",
      },
      "pipe-flange": {
        title: "Pipe flange",
        text: "PolarLocations places the bolt circle; the bore's top edge is chamfered, picked by radius.",
        alt: "Isometric view of a pipe flange: a disc with six bolt holes around a hub with a bore",
      },
    },
    sampleTitle: "The kind of script an AI writes",
    sampleHint:
      "Algebra mode, one constant per line, no #@ — open it and OD, HEIGHT and the rest are sliders.",
    runsTitle: "What runs and what doesn't",
    runsIntro: "Here is exactly where the edges are. Code that can't run fails with an error that says why.",
    runsLabel: "Runs",
    runs: [
      "The build123d 0.13 API: BuildPart / BuildSketch / BuildLine and algebra mode, selectors and filters, the Locations family, joints, and classes that subclass build123d's.",
      "from build123d import * and from ocp_vscode import show work as written. The result is what you pass to show(); without one, what you export; failing that, the last 3D object.",
      "numpy, bd_warehouse (threads, fasteners, gears, pipes), sympy and the Python standard library.",
      "Forgent3D's own model.py (from cadkit import …) opens as well.",
    ],
    limitsLabel: "Current limits",
    limits: [
      "CadQuery, scipy, matplotlib and shapely are not available, and most direct from OCP import … isn't either; the error says what to do instead.",
      "export_step, export_stl and the like write no file — use the page's export buttons.",
      "Text() uses a built-in font, so lettering differs from what you get locally; font_path= and Chinese, Japanese or Korean text raise an error.",
      "A few scripts build a slightly different shape without an error. Check the dimensions before you make the part.",
      "A link carries one file: importing another .py from your project fails — inline it.",
    ],
    compareTitle: "Compared with build123d on your machine",
    compareHead: ["", "build123d locally", "This page"],
    compare: [
      ["Install", "pip install build123d (pulls the OCP / OpenCASCADE wheels)", "Open a web page"],
      ["Viewer", "ocp_vscode / the VS Code extension", "Built in"],
      ["Parameters", "Change the number, run again", "Sliders that rewrite the number"],
      ["Sharing", "Send the .py", "One link with the code in it"],
      ["Export", "export_step() / export_stl() in your code", "STEP and STL buttons"],
      ["Libraries", "Anything pip installs", "numpy, bd_warehouse, sympy"],
    ],
    linkTitle: "Open build123d code from a link (for AI assistants and scripts)",
    linkText:
      "Put the code in the URL and the editor opens with it loaded and built — no file, no sign-up. It is made for AI assistants: when ChatGPT, Gemini or Claude writes build123d for you, ask it for a Forgent3D preview link. Whoever opens it sees the real geometry, can drag the parameters and export STEP. The “Open with sample code” button above is such a link.",
    linkFormatLabel: "Link format",
    linkRules: [
      "<CODE> is the Python source, either percent-encoded (what encodeURIComponent produces) or base64 / base64url UTF-8. The editor tells them apart.",
      "Put it after #: the fragment never leaves the browser, so the code is not sent to our server and there is no length limit. ?code= works too for short snippets.",
      "One link carries one file; numpy and bd_warehouse import as usual. Add ?lang=en or ?lang=zh to pick the interface language.",
      "The “Copy link” button in the editor turns the code you have open into such a link.",
    ],
    linkPromptLabel: "Prompt to try",
    linkPrompt:
      "Write build123d code for a ___ with one constant per line for the sizes, and give me a Forgent3D preview link: https://app.forgent3d.com/build123d#code=<the code, encodeURIComponent-encoded>",
    skillTitle: "Using Claude Code or Codex? Install the Forgent3D skill",
    skillText:
      "One command, and the agent writes parametric build123d models in your repository and builds them on your machine with Forgent3D's CAD engine: it reads back the bounding box and volume, checks a three-view snapshot itself and exports STEP / STL. No Python or OCP install.",
    skillBullets: [
      "The model code stays in your own repository, under git.",
      "To show someone, ask it for a preview link — it opens in this editor.",
      "The same skill also writes OpenSCAD; it picks the route from what you ask.",
    ],
    skillCopy: "Copy",
    skillCopied: "Copied",
    skillMore: "Skills page",
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Can I run build123d online without installing Python?",
        a: "Yes. Open the editor, paste code or open a link that carries it, and it builds the part in your browser; dragging parameters and exporting STEP or STL happen on the page. No install, no sign-up.",
      },
      {
        q: "Is it the same as running build123d locally?",
        a: `Almost always. Scripts here run on Forgent3D's engine, which is compatible with the build123d 0.13 API, so there's nothing to install. Checked script by script against build123d 0.13 itself, ${COMPAT.aiSamePct}% of ${COMPAT.aiScripts.en} AI-written scripts build the same part (${COMPAT.measured.en}). If yours doesn't, send it with “Report a problem”.`,
      },
      {
        q: "Do I need to change my script? What about show() from ocp_vscode?",
        a: "Usually not. from ocp_vscode import show and show(...) work as written: whatever you show is the part on screen. Without show, the object you pass to export_step and friends is used, and failing that the last 3D object. export_* calls write no file; use the export buttons on the page.",
      },
      {
        q: "Can I use numpy and bd_warehouse? And CadQuery?",
        a: "numpy, bd_warehouse, sympy and the Python standard library import as usual. CadQuery, scipy, matplotlib and shapely don't, and most direct from OCP import … doesn't either; the error tells you what to change.",
      },
      {
        q: "Is my code uploaded to a server?",
        a: "No. Building and exporting happen in your browser, and code after # in a link is not sent to the server. Code reaches us only when you use AI edit, or Report a problem with “Attach the code” ticked.",
      },
      {
        q: "How do I quickly see build123d code written by ChatGPT or Claude?",
        a: "Paste it into the editor, or ask the assistant for a link of the form https://app.forgent3d.com/build123d#code=<code> — it opens with the part already built.",
      },
      {
        q: "Does the exported STEP open in SolidWorks, Fusion and FreeCAD?",
        a: "Yes. It contains solids, so holes and round faces come in as cylinders you can select and dimension, not a triangle mesh.",
      },
    ],
    moreTitle: "Read more",
    moreViewer: "Writing OpenSCAD instead? Real OpenSCAD renders in the browser and exports STEP too.",
    moreGeneratorsTitle: "3D print generators",
    moreGenerators: "Gears, bearing blocks, brackets, boxes… each a build123d model you resize in the browser and export as STEP.",
    moreCodeCadTitle: "Code to parametric CAD",
    moreCodeCad: "An AI agent writes parametric CAD code, builds and checks it, and hands you a model you can keep changing.",
    articleKicker: "Article",
  };
}
