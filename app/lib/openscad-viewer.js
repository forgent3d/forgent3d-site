// OpenSCAD viewer: one page under /[locale]/openscad-viewer with its own header (app/[locale]/openscad-viewer/layout.js),
// the sibling of openscad-to-step. Same tool in the app (/scad), a different search intent: "openscad viewer / online /
// preview / open a .scad file" wants to SEE the model, not a STEP. The two pages link each other and must not chase
// the same keywords. Copy for both locales, the path and the metadata live here.

import { APP_SCAD_URL, SCAD_EXAMPLES, scadExampleUrl, scadPath } from "./openscad-to-step";
import { OG_BASE, SITE_URL } from "./seo";

export { SCAD_EXAMPLES, scadExampleUrl };

const SLUG = "openscad-viewer";

export function viewerPath(locale) {
  return `/${locale}/${SLUG}`;
}

export function viewerAppUrl(locale) {
  return `${APP_SCAD_URL}?lang=${locale}`;
}

/** The page's own example, opened from a link so the visitor lands on the preview with code in it. */
export const VIEWER_SAMPLE = `// A bracket: a plate with two slots and a stiffening rib
$fn = 48;
difference() {
  union() {
    cube([60, 30, 4]);
    translate([0, 0, 4]) cube([60, 4, 16]);
  }
  for (x = [12, 48]) translate([x, 17, -1]) hull() {
    cylinder(h = 6, d = 5);
    translate([0, 6, 0]) cylinder(h = 6, d = 5);
  }
}
%translate([-5, -5, 0]) cube([70, 40, 1]); // the sheet it mounts on, shown only
#translate([30, 2, 10]) rotate([-90, 0, 0]) cylinder(h = 4, d = 3); // a pin, highlighted`;

export function viewerSampleUrl(locale) {
  return `${APP_SCAD_URL}?lang=${locale}#code=${Buffer.from(VIEWER_SAMPLE, "utf8").toString("base64url")}`;
}

export function viewerMetadata(locale) {
  const t = getViewerCopy(locale);
  const path = viewerPath(locale);
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: { en: viewerPath("en"), zh: viewerPath("zh"), "x-default": viewerPath("en") },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: t.ogImage, width: 1200, height: 630, alt: t.toolName }],
      title: t.title,
      description: t.description,
      locale: t.ogLocale,
      type: "website",
      url: path,
    },
  };
}

export function viewerSchemas(locale) {
  const t = getViewerCopy(locale);
  const url = `${SITE_URL}${viewerPath(locale)}`;
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
        name: "Open OpenSCAD code in the viewer",
        target: { "@type": "EntryPoint", urlTemplate: `${APP_SCAD_URL}#code={code}` },
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
        { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: t.toolName, item: url },
      ],
    },
  ];
}

export function getViewerCopy(locale) {
  if (locale === "zh") {
    return {
      toolName: "OpenSCAD 在线预览",
      openViewer: "打开预览器",
      switchLabel: "EN",
      breadcrumbHome: "首页",
      ogLocale: "zh_CN",
      ogImage: "/og/openscad-viewer-zh.png",
      homeLink: "Forgent3D 首页",
      converterLink: "OpenSCAD 转 STEP",
      generatorsLink: "3D 打印生成器",
      credit:
        "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件。Forgent3D 在浏览器里运行它来预览 .scad 文件，与 OpenSCAD 项目没有隶属关系。",
      title: "OpenSCAD 在线预览：浏览器里直接看 .scad 模型，不用安装 | Forgent3D",
      description:
        "在线预览 OpenSCAD 代码和 .scad 文件：真正的 OpenSCAD 在浏览器里运行，边写边渲染，color()、% 和 # 和桌面版 F5 一样。不用安装、不用登录、不上传。",
      keywords: ["OpenSCAD 在线预览", "OpenSCAD 在线查看器", "在线运行 OpenSCAD", "scad 文件预览", "OpenSCAD 网页版", "OpenSCAD 浏览器", "打开 scad 文件"],
      h1: "OpenSCAD 在线预览：浏览器里直接看 .scad 模型",
      intro:
        "把代码贴进来，或者拖进一个 .scad 文件、整个项目文件夹：真正的 OpenSCAD 在你的浏览器里运行，停下来半秒就渲染出来。color()、% 背景、# 高亮和桌面版按 F5 看到的一样。不用安装，不用登录，文件不上传。",
      cta: "打开预览器",
      sampleCta: "带着示例代码打开",
      sampleHint: "点开就是这段代码，已经渲染好；改一行，半秒后重画。",
      featuresTitle: "你会得到什么",
      features: [
        { title: "真正的 OpenSCAD", text: "不是模仿语法的解释器，是 OpenSCAD 本体（2025 开发版，Manifold 内核）编译成 WebAssembly 在浏览器里跑。module、function、递归、列表推导、include 和 use 都和桌面版一样。" },
        { title: "边写边看", text: "停下输入半秒就重新渲染，不用点按钮。参数面板读 Customizer 注释，拖滑块就重建并写回源码。" },
        { title: "和 F5 一样的画面", text: "color() 跟着布尔运算走到面上；被 difference 减掉的面显示成绿色；% 画成半透明灰，# 画成半透明粉。$preview 为 true。" },
        { title: "多文件项目", text: "拖进整个文件夹，include 和 use 按真实目录解析。MCAD、Write.scad、BOSL2 内置，用到就自动挂载。文字用 OpenSCAD 自带的 Liberation 字体，也可以把 .ttf 放进项目。" },
        { title: "链接里带代码", text: "「复制链接」把当前代码塞进网址，打开就是这个模型。AI 助手写的代码也能这样给你一个预览链接。" },
        { title: "顺手导出 STEP", text: "预览满意了，同一个页面能把模型重建成真正的 B-rep STEP，给 Fusion、SolidWorks、FreeCAD 继续用。这是预览器之外的东西，见「OpenSCAD 转 STEP」。" },
      ],
      examplesTitle: "手边没有 .scad 文件？先试试这几个",
      examplesIntro: "点开就在浏览器里渲染好；拖参数面板里的滑块改尺寸。不用登录。",
      exampleOpen: "打开预览",
      examples: {
        "pipe-flange": { title: "对焊法兰", text: "回转截面、锥形颈部、一圈螺栓孔。", alt: "对焊法兰的等轴测图：圆盘上八个螺栓孔，中间是锥形颈部和通孔" },
        "spur-gears": { title: "一对啮合齿轮", text: "入口文件 use 了 lib/ 下的渐开线齿轮库：多文件项目按原样解析。", alt: "一大一小两个啮合直齿轮的等轴测图，各带一个中心孔" },
        "parametric-box": { title: "带盖参数化盒子", text: "尺寸、壁厚、圆角、盖子松紧都是 Customizer 参数，拖滑块就重建。", alt: "圆角盒子和它的盖子并排摆放、开口朝上的等轴测图" },
      },
      compareTitle: "和桌面版 OpenSCAD 比",
      compareHead: ["", "桌面版 OpenSCAD", "这个预览器"],
      compare: [
        ["安装", "下载安装包", "打开网页就能用"],
        ["执行代码的", "OpenSCAD", "同一个 OpenSCAD，编译成 WebAssembly"],
        ["预览画面", "F5：OpenCSG", "Manifold 的真几何，配色沿用 F5 的约定"],
        ["多文件项目", "打开入口文件", "拖进文件夹"],
        ["分享", "发文件", "一个带代码的链接"],
        ["导出", "STL / 3MF / OFF / AMF", "STEP（真 B-rep），STL 还没有"],
        ["动画 $t", "有", "没有"],
      ],
      linkTitle: "从链接打开代码（给 AI 助手和脚本）",
      linkText:
        "把代码放进网址，预览器打开就载入它、立刻渲染：不用文件、不用登录。这是给 AI 助手准备的：ChatGPT、Gemini、Claude 替你写了 OpenSCAD，让它顺手附上一个 Forgent3D 预览链接，点开就是渲染好的模型，能拖参数，满意了还能导 STEP。上面「带着示例代码打开」那颗按钮就是这样一个链接。",
      linkFormatLabel: "链接格式",
      linkRules: [
        "<CODE> 是 .scad 源码：百分号编码的原文（encodeURIComponent 的结果）或 base64 / base64url 的 UTF-8 都行，预览器自己识别。",
        "放在 # 后面：片段不会离开浏览器，代码不经过我们的服务器，也没有长度限制。短代码也可以写成 ?code=。",
        "一个链接带一个文件。include / use 多文件的项目走「加载项目文件夹」；MCAD、BOSL2 这些内置库从链接打开也能用。",
        "预览器里的「复制链接」按钮，把当前打开的代码变成这样一个链接。",
      ],
      linkPromptLabel: "给 AI 的提示词",
      linkPrompt: "写一个 OpenSCAD 的 ___，并给我一个 Forgent3D 预览链接：https://app.forgent3d.com/scad#code=<把代码 encodeURIComponent 之后放这里>",
      faqTitle: "常见问题",
      faqs: [
        { q: "这是真的 OpenSCAD 吗？", a: "是。执行代码的就是 OpenSCAD 本体（2025 年的开发版快照，带 Manifold 几何内核），编译成 WebAssembly 在你的浏览器里运行。语言行为、内置库、Customizer 注释都和桌面版一样。" },
        { q: "为什么孔的内壁是绿色的？", a: "这是 OpenSCAD 预览（F5）的约定：被 difference() 减掉的物体留下的面用「背面色」显示，默认配色里是绿色。预览器照着这个约定画，color() 过的物体仍按自己的颜色显示。" },
        { q: "能打开 Thingiverse、Printables 上下载的 .scad 文件吗？", a: "能。把下载的整个文件夹拖进来，被 include 的文件才会一起带上。MCAD、Write.scad 和 BOSL2 已经内置。" },
        { q: "我的代码会上传到服务器吗？", a: "不会。OpenSCAD 在你的浏览器里运行，.scad 文件不上传；链接里 # 后面的代码也不会发给服务器。" },
        { q: "多大的模型跑得动？", a: "一般模型一秒以内。展平后超过 15 万个节点的模型（把循环展开后）在浏览器里跑不动，会直接告诉你。耗时的渲染随时可以停。" },
        { q: "预览和导出的 STEP 有什么区别？", a: "预览是 OpenSCAD 自己的渲染，圆是 $fn 个面片。导出 STEP 时由 CAD 内核把每个图元和布尔运算重建成精确几何，圆就是真圆柱。颜色只在预览里，STEP 不带。" },
        { q: "ChatGPT、Gemini 写的 OpenSCAD 代码怎么快速看效果？", a: "贴进预览器，或者让它直接给一个 https://app.forgent3d.com/scad#code=<代码> 形式的链接，点开就是渲染好的模型。" },
      ],
      moreTitle: "延伸阅读",
      moreConverter: "预览满意了要 STEP：同一个工具，真正的 B-rep，Fusion、SolidWorks、FreeCAD 都能打开。",
      moreCompat: "哪些 OpenSCAD 写法能精确转成 STEP，目前还有哪些限制。",
      articleKicker: "文章",
    };
  }

  return {
    toolName: "OpenSCAD Viewer",
    openViewer: "Open the viewer",
    switchLabel: "中",
    breadcrumbHome: "Home",
    ogLocale: "en_US",
    ogImage: "/og/openscad-viewer-en.png",
    homeLink: "Forgent3D home",
    converterLink: "OpenSCAD to STEP",
    generatorsLink: "3D print generators",
    credit:
      "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Forgent3D runs it in the browser to preview .scad files and is not affiliated with the OpenSCAD project.",
    title: "OpenSCAD Viewer Online — Preview .scad Files in Your Browser | Forgent3D",
    description:
      "Preview OpenSCAD code and .scad files online: real OpenSCAD runs in your browser and renders as you type, with color(), % and # as in the desktop F5 preview. No install, no sign-up, nothing uploaded.",
    keywords: [
      "openscad viewer",
      "openscad online",
      "openscad preview online",
      "open scad file online",
      "openscad in browser",
      "run openscad online",
      "scad file viewer",
      "openscad web",
    ],
    h1: "OpenSCAD viewer online — preview .scad files in your browser",
    intro:
      "Paste code, or drop in a .scad file or a whole project folder: real OpenSCAD runs in your browser and renders the model half a second after you stop typing. color(), % background and # highlight look as they do when you press F5 on the desktop. No install, no sign-up, and nothing is uploaded.",
    cta: "Open the viewer",
    sampleCta: "Open with sample code",
    sampleHint: "It opens with this code already rendered; change a line and it redraws half a second later.",
    featuresTitle: "What you get",
    features: [
      { title: "Real OpenSCAD", text: "Not a look-alike interpreter: OpenSCAD itself (a 2025 development snapshot with the Manifold kernel) compiled to WebAssembly. Modules, functions, recursion, list comprehensions, include and use behave exactly as on the desktop." },
      { title: "Renders as you type", text: "Half a second after the last keystroke the model is redrawn — no button. The parameter panel reads Customizer comments; drag a slider and the value is written back into the source." },
      { title: "The F5 look", text: "color() follows the geometry through booleans; faces cut by a difference() show in green; % draws translucent grey and # translucent pink. $preview is true." },
      { title: "Multi-file projects", text: "Drop the folder and include / use resolve against your real layout. MCAD, Write.scad and BOSL2 are built in and mounted when used. Text is shaped with OpenSCAD's own Liberation fonts; put a .ttf in the project for others." },
      { title: "Code in the link", text: "“Copy link” puts the current code into the URL, so whoever opens it sees the model. An AI assistant can hand you such a preview link for the code it writes." },
      { title: "STEP export on the side", text: "Happy with the preview? The same page rebuilds the model as real B-rep STEP for Fusion, SolidWorks and FreeCAD. That is the converter, beyond the viewer — see OpenSCAD to STEP." },
    ],
    examplesTitle: "No .scad file at hand? Start with one of these",
    examplesIntro: "Each opens already rendered in your browser. Drag the Customizer sliders to resize it. No sign-up.",
    exampleOpen: "Open the preview",
    examples: {
      "pipe-flange": { title: "Weld-neck flange", text: "A revolved profile with a tapered hub and a bolt circle.", alt: "Isometric view of a weld-neck flange: eight bolt holes around a tapered hub with a bore" },
      "spur-gears": { title: "Meshing spur gears", text: "The entry file uses an involute gear library in lib/ — multi-file projects resolve as they are.", alt: "Isometric view of a small and a large spur gear in mesh, each with a centre bore" },
      "parametric-box": { title: "Parametric box with lid", text: "Size, wall, corner radius and lid fit are Customizer parameters; drag a slider and it rebuilds.", alt: "Isometric view of a rounded box and its lid side by side, open side up" },
    },
    compareTitle: "Compared with desktop OpenSCAD",
    compareHead: ["", "Desktop OpenSCAD", "This viewer"],
    compare: [
      ["Install", "Download an installer", "Open a web page"],
      ["What runs your code", "OpenSCAD", "The same OpenSCAD, compiled to WebAssembly"],
      ["Preview", "F5: OpenCSG", "Real geometry from Manifold, coloured by the F5 conventions"],
      ["Multi-file projects", "Open the entry file", "Drop the folder"],
      ["Sharing", "Send the file", "One link with the code in it"],
      ["Export", "STL / 3MF / OFF / AMF", "STEP (real B-rep); STL not yet"],
      ["Animation ($t)", "Yes", "No"],
    ],
    linkTitle: "Open code from a link (for AI assistants and scripts)",
    linkText:
      "Put the code in the URL and the viewer opens with it loaded and rendered — no file, no sign-up. It is made for AI assistants: when ChatGPT, Gemini or Claude writes OpenSCAD for you, ask it for a Forgent3D preview link. Whoever opens it sees the model rendered, can drag the parameters and, once happy, export STEP. The “Open with sample code” button above is such a link.",
    linkFormatLabel: "Link format",
    linkRules: [
      "<CODE> is the .scad source, either percent-encoded (what encodeURIComponent produces) or base64 / base64url UTF-8. The viewer tells them apart.",
      "Put it after #: the fragment never leaves the browser, so the code is not sent to our server and there is no length limit. ?code= works too for short snippets.",
      "One link carries one file. Projects with include / use go through “Load project folder”; MCAD, BOSL2 and the other built-in libraries work from a link.",
      "The “Copy link” button in the viewer turns the code you have open into such a link.",
    ],
    linkPromptLabel: "Prompt to try",
    linkPrompt: "Write OpenSCAD for a ___ and give me a Forgent3D preview link: https://app.forgent3d.com/scad#code=<the code, encodeURIComponent-encoded>",
    faqTitle: "FAQ",
    faqs: [
      { q: "Is this real OpenSCAD?", a: "Yes. The code is executed by OpenSCAD itself — a 2025 development snapshot with the Manifold geometry kernel — compiled to WebAssembly and running in your browser. The language, the bundled libraries and the Customizer comments behave as on the desktop." },
      { q: "Why are the walls of a hole green?", a: "That is OpenSCAD's own preview (F5) convention: faces left behind by an object subtracted with difference() are drawn in the “back face” colour, green in the default scheme. The viewer keeps the convention; an object with its own color() keeps that colour." },
      { q: "Can I open .scad files downloaded from Thingiverse or Printables?", a: "Yes. Drop in the whole downloaded folder so the files it includes come along. MCAD, Write.scad and BOSL2 are built in." },
      { q: "Is my code uploaded to a server?", a: "No. OpenSCAD runs in your browser and the .scad files are never uploaded; code after # in a link is not sent to the server either." },
      { q: "How large a model can it handle?", a: "A typical model renders in under a second. A model that flattens to more than 150,000 nodes (loops unrolled) is beyond the in-browser build and says so. A long render can be stopped at any time." },
      { q: "How does the preview differ from the exported STEP?", a: "The preview is OpenSCAD's own render, with circles as $fn facets. For the STEP export a CAD kernel rebuilds every primitive and boolean as exact geometry, so a circle is a true cylinder. Colours exist only in the preview; a STEP carries none." },
      { q: "How do I quickly see OpenSCAD code written by ChatGPT or Gemini?", a: "Paste it into the viewer, or ask the assistant for a link of the form https://app.forgent3d.com/scad#code=<code> — it opens with the model already rendered." },
    ],
    moreTitle: "Read more",
    moreConverter: "Happy with the preview and need a STEP? The same tool, real B-rep, opens in Fusion, SolidWorks and FreeCAD.",
    moreCompat: "Which OpenSCAD features convert exactly to STEP, and the current limits.",
    articleKicker: "Article",
  };
}
