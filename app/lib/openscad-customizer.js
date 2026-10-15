// OpenSCAD Customizer: /[locale]/openscad-customizer. "openscad customizer / thingiverse customizer (alternative) /
// customize scad file" — someone with someone else's customizable model who wants their own size. Same tool in the app
// (/scad): OpenSCAD itself reports the Customizer parameters (platform packages/scad-transpile/src/params.ts) and a
// knob writes the new value back into the .scad. Nothing on this page states how Thingiverse's own Customizer behaves;
// it only names it, as what visitors search for. Copy for both locales.

import { openscadPageCards, openscadPageMetadata, openscadPageSchemas } from "./openscad-pages";

export const CUSTOMIZER_SLUG = "openscad-customizer";

export function customizerMetadata(locale) {
  return openscadPageMetadata(locale, CUSTOMIZER_SLUG, getCustomizerCopy(locale));
}

export function customizerSchemas(locale) {
  return openscadPageSchemas(locale, CUSTOMIZER_SLUG, getCustomizerCopy(locale));
}

export function customizerMoreCards(locale) {
  return openscadPageCards(locale, ["openscad-to-stl", "openscad-viewer", "openscad-to-step", "chatgpt-openscad"], getCustomizerCopy(locale).pitches);
}

// The syntax table's left column is code, the same in both languages.
const SYNTAX = [
  "width = 60; // [20:150]",
  "wall = 2; // [1:0.5:5]",
  'shape = "round"; // [round, square, hex]',
  "holes = 4; // [2:Two, 4:Four, 6:Six]",
  "lid = true;",
  'label = "Tools";',
  "size = [40, 30, 20];",
  "// Lid clearance (mm)",
  "/* [Lid] */",
  "/* [Hidden] */",
];

export function getCustomizerCopy(locale) {
  if (locale === "zh") {
    return {
      toolName: "OpenSCAD 在线定制",
      openTool: "打开定制器",
      credit:
        "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件；Thingiverse 是其所有者的商标。Forgent3D 在浏览器里运行 OpenSCAD，与 OpenSCAD 项目和 Thingiverse 都没有隶属关系。",
      title: "OpenSCAD Customizer 在线：浏览器里定制 Thingiverse 的 .scad 模型 | Forgent3D",
      description:
        "在浏览器里定制 Thingiverse 等网站下载的 .scad 模型：真正的 OpenSCAD 读取 Customizer 注释，变成滑块、下拉框和勾选框，改完立刻重新渲染，导出 STL。不用账号，文件不上传。",
      keywords: ["OpenSCAD Customizer", "OpenSCAD 在线定制", "Thingiverse Customizer", "Thingiverse 定制模型", "Thingiverse Customizer 替代", "scad 在线改参数", "OpenSCAD 参数化", "可定制 3D 打印模型"],
      h1: "OpenSCAD Customizer 在线：在浏览器里定制 Thingiverse 的 .scad 模型",
      intro:
        "在 Thingiverse 或别的网站找到一个可定制的模型，想改成自己的尺寸？把它的文件加载进来就行。真正的 OpenSCAD 读取代码里的 Customizer 注释，给你滑块、下拉框和勾选框；每改一次都在你的浏览器里重新渲染，导出的 STL 就是你看到的样子。不用账号，不用排队，文件不离开你的电脑。",
      cta: "打开定制器",
      exampleCta: "试试可定制的盒子",
      stepsTitle: "四步定制一个 Thingiverse 模型",
      steps: [
        { title: "下载文件", text: "在模型页面下载全部文件并解压。可定制的模型都带着 .scad 文件；把一起下载的文件都留在同一个文件夹里。" },
        { title: "加载文件夹", text: "打开定制器，点「加载项目文件夹」，或者把文件夹拖到页面上。有好几个 .scad 文件的，在入口列表里选主文件。" },
        { title: "改参数", text: "参数按作者分好的组排列。每改一次，半秒后重新渲染。" },
        { title: "导出 STL", text: "存下和屏幕上一样的二进制 STL，照常切片。想在 CAD 里接着改，同一页还能导 STEP。" },
      ],
      syntaxTitle: "认得哪些 Customizer 写法",
      syntaxIntro: "参数由 OpenSCAD 自己读取，规则和桌面版 OpenSCAD 的 Customizer 一样，所以大多数为 Thingiverse Customizer 写的文件拿来就能用。",
      syntaxHead: ["在 .scad 里写", "得到"],
      syntax: [
        "20 到 150 的滑块",
        "步长 0.5 的滑块",
        "下拉框",
        "带标签的下拉框",
        "勾选框",
        "文本框",
        "每个数一个输入框",
        "变量正上方的注释行就是它的标签",
        "开始一个分组（Thingiverse 上是一个标签页）",
        "之后的变量都不显示",
      ],
      syntaxNote: "只有文件开头、第一个 module 之前直接赋值的变量才算参数，和桌面版的规则一样。",
      builtinsTitle: "Thingiverse 常用的辅助文件已经内置",
      builtinsText:
        "很多可定制模型会载入 Thingiverse 的 utils/build_plate.scad、刻字用的 Write.scad，或者做齿轮、螺丝的 MCAD。这些都已经内置，BOSL2 也是，所以这类文件不用到处找库。",
      examplesTitle: "手边没有模型？先从这几个开始",
      examplesIntro: "点开就渲染好了，参数都在面板里。改完导出 STL。不用登录。",
      exampleOpen: "打开并定制",
      examples: {
        "parametric-box": { title: "带盖参数化盒子", text: "「盒子」和「盖子」两组参数：尺寸、壁厚、圆角、盖子高度和松紧。", alt: "圆角盒子和它的盖子并排摆放、开口朝上的等轴测图" },
        "spur-gears": { title: "一对啮合齿轮", text: "齿数、模数、孔径都是参数；齿轮库放在入口文件旁边的 lib/ 里。", alt: "一大一小两个啮合直齿轮的等轴测图，各带一个中心孔" },
        "pipe-flange": { title: "对焊法兰", text: "法兰、管子、螺栓三组参数：改螺栓数量，孔会沿圆周重新排好。", alt: "对焊法兰的等轴测图：圆盘上八个螺栓孔，中间是锥形颈部和通孔" },
      },
      compareTitle: "和桌面版 OpenSCAD 的 Customizer 比",
      compareHead: ["", "桌面版 OpenSCAD", "这个页面"],
      compare: [
        ["安装", "下载安装包", "打开网页就能用"],
        ["参数面板", "窗口 → Customizer", "和模型一起打开"],
        ["改了参数之后", "开着自动预览时更新预览", "半秒后重新渲染"],
        ["保存参数", "存成 .json 参数集", "直接写回 .scad 代码"],
        ["导出", "STL、3MF、OFF、AMF 等", "STL，以及给 CAD 软件用的 STEP"],
      ],
      featureList: ["Customizer 滑块、下拉框、勾选框", "多文件项目", "Thingiverse 辅助文件内置", "导出 STL 和 STEP"],
      faqTitle: "常见问题",
      faqs: [
        { q: "这是 Thingiverse 的 Customizer 吗？", a: "不是。这是一个独立的工具，在你的浏览器里运行真正的 OpenSCAD。和 Thingiverse 没有关系，也不需要 Thingiverse 账号。" },
        { q: "Printables、MakerWorld 上的可定制模型能用吗？", a: "能，只要模型是带 Customizer 注释的 .scad 文件；从哪个网站下载的都一样。" },
        { q: "文件会上传吗？", a: "不会。OpenSCAD 在你的浏览器标签页里运行，文件和你选的参数都留在你的电脑上。" },
        { q: "改好的参数能保存吗？", a: "选的值会直接写进 .scad 代码，浏览器会为你下次打开保留这份代码。单文件的模型，点「复制链接」能把改好的代码放进一个链接，收藏或分享都行。" },
        { q: "能载入桌面版的参数集（.json）吗？", a: "暂时不能。用滑块设值就好，值会直接写进代码。" },
        { q: "模型要用到 STL、PNG 或字体文件，能行吗？", a: "能，把它们放在要加载的文件夹里。import() 和 surface() 能读 STL、OFF、OBJ、AMF、DXF、SVG、DAT 和 PNG，文件夹里的 .ttf / .otf 字体也能用。浏览器会保留 .scad 文件，但不保留这些数据文件，下次要再加载一次文件夹。" },
        { q: "要钱吗？", a: "免费。不用注册，没有次数限制。" },
      ],
      moreTitle: "相关工具",
      pitches: {
        "openscad-to-stl": "拿到的 .scad 没有 Customizer 注释？直接转成 STL。",
        "openscad-viewer": "在线预览任何 .scad，配色和桌面版 F5 一样。",
        "openscad-to-step": "要放进 CAD 软件？导出真正的 B-rep STEP。",
        "chatgpt-openscad": "ChatGPT、DeepSeek 写了 OpenSCAD 代码？看效果、修错、导 STL。",
      },
      syntaxCode: SYNTAX,
    };
  }

  return {
    toolName: "OpenSCAD Customizer",
    openTool: "Open the customizer",
    credit:
      "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Thingiverse is a trademark of its owner. Forgent3D runs OpenSCAD in the browser and is not affiliated with the OpenSCAD project or Thingiverse.",
    title: "OpenSCAD Customizer Online — Customize Thingiverse .scad Files in Your Browser | Forgent3D",
    description:
      "Customize .scad files from Thingiverse and elsewhere in your browser. Real OpenSCAD reads the Customizer comments, turns them into sliders, drop-downs and checkboxes, re-renders as you change them and exports STL. No account, nothing uploaded.",
    keywords: [
      "openscad customizer",
      "openscad customizer online",
      "thingiverse customizer",
      "thingiverse customizer alternative",
      "thingiverse customizer not working",
      "customize scad file online",
      "customizable thingiverse model",
      "openscad parameters online",
    ],
    h1: "OpenSCAD Customizer online: customize Thingiverse .scad files in your browser",
    intro:
      "Found a customizable model on Thingiverse — or anywhere else — and want it in your own size? Load its files here. Real OpenSCAD reads the Customizer comments in the code and gives you sliders, drop-downs and checkboxes; every change re-renders in your browser, and the STL you export is exactly what you see. No account, no waiting in a queue, and the files never leave your computer.",
    cta: "Open the customizer",
    exampleCta: "Try a customizable box",
    stepsTitle: "Customize a Thingiverse model in four steps",
    steps: [
      { title: "Download the files", text: "On the model's page, download all of its files and unzip them. A customizable model comes with its .scad file; keep everything that came with it in one folder." },
      { title: "Load the folder", text: "Open the customizer and click “Load project folder”, or drag the folder onto the page. If there are several .scad files, pick the main one in the entry list." },
      { title: "Change the parameters", text: "The parameters appear in the groups the author set up. Each change re-renders the model half a second later." },
      { title: "Export STL", text: "Save a binary STL of exactly what is on screen and slice it as usual. STEP is one click away if you want to keep working in CAD." },
    ],
    syntaxTitle: "Which Customizer comments it understands",
    syntaxIntro: "OpenSCAD itself reads the parameters, by the same rules as the Customizer in desktop OpenSCAD, so most files written for Thingiverse's Customizer work as they are.",
    syntaxHead: ["In the .scad", "You get"],
    syntax: [
      "A slider from 20 to 150",
      "A slider in steps of 0.5",
      "A drop-down",
      "A drop-down with labels",
      "A checkbox",
      "A text box",
      "One box per number",
      "The comment line just above a variable becomes its label",
      "Starts a group (a tab on Thingiverse)",
      "Nothing after it is shown",
    ],
    syntaxNote: "Only plain values assigned at the top of the file, before the first module, become parameters — the same rule as desktop OpenSCAD.",
    builtinsTitle: "Thingiverse's helpers are built in",
    builtinsText:
      "Many customizable models load Thingiverse's utils/build_plate.scad, Write.scad for lettering, or MCAD for gears and fasteners. All of them are built in, and so is BOSL2, so these files work without hunting for the libraries.",
    examplesTitle: "No model at hand? Start with one of these",
    examplesIntro: "Each opens already rendered, with its parameters in the panel. Change them, then export the STL. No sign-up.",
    exampleOpen: "Open and customize",
    examples: {
      "parametric-box": { title: "Parametric box with lid", text: "Two groups, Box and Lid: size, wall, corner radius, lid height and fit.", alt: "Isometric view of a rounded box and its lid side by side, open side up" },
      "spur-gears": { title: "Meshing spur gears", text: "Tooth counts, module and bores as parameters; the gear library sits in lib/ beside the entry file.", alt: "Isometric view of a small and a large spur gear in mesh, each with a centre bore" },
      "pipe-flange": { title: "Weld-neck flange", text: "Flange, pipe and bolt groups: change the bolt count and the holes respace around the circle.", alt: "Isometric view of a weld-neck flange: eight bolt holes around a tapered hub with a bore" },
    },
    compareTitle: "Compared with the Customizer in desktop OpenSCAD",
    compareHead: ["", "Desktop OpenSCAD", "This page"],
    compare: [
      ["Install", "Download and install", "Open a web page"],
      ["Parameter panel", "Window → Customizer", "Opens with the model"],
      ["When a value changes", "The preview updates if automatic preview is on", "It re-renders half a second later"],
      ["Saving your values", "Parameter sets in a .json file", "Written into the .scad itself"],
      ["Export", "STL, 3MF, OFF, AMF and more", "STL, and STEP for CAD software"],
    ],
    featureList: ["Customizer sliders, drop-downs and checkboxes", "Multi-file projects", "Thingiverse helpers built in", "STL and STEP export"],
    faqTitle: "FAQ",
    faqs: [
      { q: "Is this Thingiverse's Customizer?", a: "No. It is an independent tool that runs real OpenSCAD in your browser. Thingiverse is not involved, and you need no Thingiverse account." },
      { q: "Do customizable models from Printables or MakerWorld work?", a: "Yes, if the model comes as a .scad file with Customizer comments; where you downloaded it does not matter." },
      { q: "Are my files uploaded?", a: "No. OpenSCAD runs inside your browser tab; the files and the values you pick stay on your computer." },
      { q: "Can I keep my settings?", a: "The values you pick are written into the .scad code, and the browser keeps the code for your next visit. For a single-file model, “Copy link” puts the customized code into a link you can bookmark or share." },
      { q: "Can I load a parameter set (.json) from desktop OpenSCAD?", a: "Not yet. Set the values with the sliders; they are written into the code itself." },
      { q: "The model needs STL, PNG or font files. Do those work?", a: "Yes: keep them in the folder you load. import() and surface() read STL, OFF, OBJ, AMF, DXF, SVG, DAT and PNG files, and .ttf / .otf fonts in the folder can be used. The browser keeps the .scad files between visits but not these data files, so load the folder again next time." },
      { q: "Is it free?", a: "Yes. No sign-up and no limits." },
    ],
    moreTitle: "Related",
    pitches: {
      "openscad-to-stl": "Got a .scad without Customizer comments? Convert it straight to STL.",
      "openscad-viewer": "Preview any .scad file with the desktop F5 colours.",
      "openscad-to-step": "Need the part in CAD software? Export real B-rep STEP.",
      "chatgpt-openscad": "Got OpenSCAD code from ChatGPT? See it, fix it, export STL.",
    },
    syntaxCode: SYNTAX,
  };
}
