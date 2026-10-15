// OpenSCAD to STL: /[locale]/openscad-to-stl. "openscad to stl / scad to stl / convert scad file" — someone holding a
// .scad (often a download) who only wants a file for the slicer. Same tool in the app as the viewer and the STEP
// converter (/scad); the button that matters there is “Export STL”: the preview's own triangles, written as binary STL
// (platform packages/scad-transpile/src/stl.ts — `%` left out, 2D not exported, no colours). Copy for both locales.

import { openscadPageCards, openscadPageMetadata, openscadPageSchemas } from "./openscad-pages";

export const STL_SLUG = "openscad-to-stl";

export function stlMetadata(locale) {
  return openscadPageMetadata(locale, STL_SLUG, getStlCopy(locale));
}

export function stlSchemas(locale) {
  return openscadPageSchemas(locale, STL_SLUG, getStlCopy(locale));
}

export function stlMoreCards(locale) {
  return openscadPageCards(locale, ["openscad-to-step", "openscad-customizer", "chatgpt-openscad", "openscad-viewer"], getStlCopy(locale).pitches);
}

export function getStlCopy(locale) {
  if (locale === "zh") {
    return {
      toolName: "OpenSCAD 转 STL",
      openTool: "打开转换器",
      credit:
        "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件。Forgent3D 在浏览器里运行它，把 .scad 文件转成 STL，与 OpenSCAD 项目没有隶属关系。",
      title: "OpenSCAD 转 STL 在线工具：不装软件，浏览器里把 .scad 转成 STL | Forgent3D",
      description:
        "在浏览器里把 .scad 文件转成 STL：真正的 OpenSCAD 渲染模型，Customizer 参数变成滑块，一键导出二进制 STL 给切片软件。不用安装、不用登录、文件不上传。",
      keywords: ["OpenSCAD 转 STL", "scad 转 stl", "scad 文件转 stl", "scad 转 stl 在线", "OpenSCAD 导出 STL", "scad 转换 stl", "scad 文件转换", "OpenSCAD 在线转换"],
      h1: "OpenSCAD 转 STL 在线：不装 OpenSCAD，也能把 .scad 转成 STL",
      intro:
        "下载了一个 .scad 文件，只想要一个切片软件能打开的文件？拖进来就行。真正的 OpenSCAD 在你的浏览器里渲染它，Customizer 参数变成滑块，点「导出 STL」存下网格——和桌面版渲染（F6）后导出的是同一批三角面。不用安装，不用登录，文件不离开你的电脑。",
      cta: "转换 .scad 文件",
      exampleCta: "用示例试一下",
      stepsTitle: "怎么把 .scad 转成 STL",
      steps: [
        { title: "打开转换器", text: "页面一打开就开始载入 OpenSCAD 本体，第一次要等几秒；之后大多数模型一秒内渲染完。" },
        { title: "放进文件", text: "把 .scad 文件拖到页面上，或把代码贴进编辑框。文件里有 include <…> 或 use <…> 的，把整个文件夹拖进来，被引用的文件才会一起带上。MCAD、BOSL2、Write.scad 已经内置。" },
        { title: "调参数", text: "写了 Customizer 注释的变量会变成滑块、下拉框和勾选框。每改一次，半秒后重新渲染。" },
        { title: "导出 STL", text: "点「导出 STL」，得到和屏幕上一模一样的二进制 STL，直接拖进 PrusaSlicer、Cura、OrcaSlicer 或 Bambu Studio。" },
      ],
      featuresTitle: "STL 里是什么",
      features: [
        { title: "OpenSCAD 自己的网格", text: "STL 就是 OpenSCAD 对你文件的渲染结果，按三角面原样写出，中间没有会改变形状的转换。和桌面版 F6 渲染后导出的一样。" },
        { title: "圆有多圆，看 $fn", text: "圆形由 $fn（或 $fa、$fs）决定分成多少段，和桌面版一样。想打印得更圆滑，在文件开头加一行 $fn = 96; 再导一次。" },
        { title: "只导要打印的部分", text: "% 背景物体不导出，# 高亮的照常导出，color() 会丢掉：STL 没有通用的颜色写法。顶层的所有物体都在同一个文件里。" },
        { title: "尺寸照写的来", text: "STL 不存单位。OpenSCAD 模型按惯例用毫米写，切片软件也按毫米读 STL，所以代码里的 40 就是热床上的 40 mm。" },
      ],
      examplesTitle: "手边没有文件？先转一个试试",
      examplesIntro: "点开就渲染好了。改个参数，再点「导出 STL」。不用登录。",
      exampleOpen: "打开并导出",
      examples: {
        "pipe-flange": { title: "对焊法兰", text: "回转截面加一圈螺栓孔：导出前把 $fn 调高，孔更圆。", alt: "对焊法兰的等轴测图：圆盘上八个螺栓孔，中间是锥形颈部和通孔" },
        "spur-gears": { title: "一对啮合齿轮", text: "两个文件：入口文件 use 了 lib/ 下的齿轮库，大多数下载来的项目都是这样。", alt: "一大一小两个啮合直齿轮的等轴测图，各带一个中心孔" },
        "parametric-box": { title: "带盖参数化盒子", text: "用滑块调尺寸、壁厚和盖子松紧；导出的 STL 里有盒子也有盖子。", alt: "圆角盒子和它的盖子并排摆放、开口朝上的等轴测图" },
      },
      compareTitle: "和桌面版 OpenSCAD 比",
      compareHead: ["", "桌面版 OpenSCAD", "这个页面"],
      compare: [
        ["安装", "下载安装包", "打开网页就能用"],
        ["拿到 STL", "先渲染（F6），再「文件 → 导出 → 导出为 STL」", "边改边渲染，点一下「导出 STL」"],
        ["include / use 的项目", "打开入口文件", "拖进文件夹"],
        ["其他格式", "3MF、OFF、AMF、DXF、SVG 等", "STEP（精确 B-rep），给 CAD 软件用"],
        ["在哪里运行", "你的电脑", "你的浏览器，文件不上传"],
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "要钱吗？", a: "免费。不用注册，转多少个文件都行。" },
        { q: "文件会上传吗？", a: "不会。OpenSCAD 在你的浏览器标签页里运行，STL 也在那里生成，文件内容不离开你的电脑。" },
        { q: "导出的 STL 为什么一棱一棱的？", a: "圆分成几段由 $fn、$fa、$fs 决定，和桌面版一样。在文件开头（或圆形物体上）把 $fn 调高，大多数打印 96 就够了，然后重新导出。" },
        { q: "文件里有 include、use，或者用到了 STL、PNG、字体文件，该拖什么？", a: "拖整个文件夹。文件按 OpenSCAD 一样的相对路径查找；import() 和 surface() 读的数据文件（STL、OFF、OBJ、AMF、DXF、SVG、DAT、PNG）和 .ttf / .otf 字体都会一起带上。MCAD、BOSL2、Write.scad 和 Thingiverse 的 build_plate.scad 已经内置。" },
        { q: "能导 3MF、DXF、SVG 吗？", a: "这里不行：这个页面导出 STL，以及给 CAD 软件用的 STEP。2D 设计（没有 linear_extrude 或 rotate_extrude 的）没有 STL；DXF、SVG 导出暂时还没有。" },
        { q: "多大的模型能转？", a: "大多数文件一两秒就渲染完。展平后（循环展开后）超过 15 万个节点的模型在浏览器里跑不动，页面会直接告诉你。耗时的渲染随时可以停。" },
        { q: "我要给 Fusion、SolidWorks 用的 STEP，不是 STL。", a: "用「OpenSCAD 转 STEP」：同一个工具把模型重建成精确的 B-rep，圆柱和平面都是真的，不是三角面。" },
      ],
      moreTitle: "相关工具",
      pitches: {
        "openscad-to-step": "要 CAD 文件？同一个工具导出真正的 B-rep STEP。",
        "openscad-customizer": "定制 Thingiverse 上的模型？加载文件夹，拖滑块。",
        "chatgpt-openscad": "ChatGPT、DeepSeek 写了 OpenSCAD 代码？看效果、修错、导 STL。",
        "openscad-viewer": "只想看看？在线预览 .scad，配色和桌面版 F5 一样。",
      },
    };
  }

  return {
    toolName: "OpenSCAD to STL",
    openTool: "Open the converter",
    credit:
      "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Forgent3D runs it in the browser to turn .scad files into STL and is not affiliated with the OpenSCAD project.",
    title: "OpenSCAD to STL Online — Convert .scad Files Without Installing | Forgent3D",
    description:
      "Convert .scad files to STL in your browser. Real OpenSCAD renders the model, Customizer parameters become sliders, and one click saves a binary STL for your slicer. No install, no sign-up, nothing uploaded.",
    keywords: [
      "openscad to stl",
      "scad to stl",
      "convert scad to stl",
      "scad to stl converter",
      "scad to stl online",
      "openscad export stl",
      "scad file to stl",
      "openscad stl online",
    ],
    h1: "OpenSCAD to STL online: convert .scad files without installing OpenSCAD",
    intro:
      "Downloaded a .scad file and only need something your slicer can open? Drop it here. Real OpenSCAD renders it in your browser, its Customizer parameters become sliders, and “Export STL” saves the mesh — the same triangles desktop OpenSCAD writes after a render. No install, no sign-up, and the file never leaves your computer.",
    cta: "Convert a .scad file",
    exampleCta: "Try it on an example",
    stepsTitle: "How to convert a .scad file to STL",
    steps: [
      { title: "Open the converter", text: "The page loads OpenSCAD itself as it opens, which takes a few seconds the first time; after that most models render in a second or less." },
      { title: "Add the file", text: "Drop the .scad file onto the page, or paste its code into the editor. If it includes other files (include <…> or use <…>), drop the whole folder so they come along. MCAD, BOSL2 and Write.scad are built in." },
      { title: "Set the parameters", text: "Variables marked up for the Customizer appear as sliders, drop-downs and checkboxes. Each change re-renders the model half a second later." },
      { title: "Export STL", text: "Click “Export STL” and you get a binary STL of exactly what is on screen, ready for PrusaSlicer, Cura, OrcaSlicer or Bambu Studio." },
    ],
    featuresTitle: "What ends up in the STL",
    features: [
      { title: "OpenSCAD's own mesh", text: "The STL is OpenSCAD's render of your file, written out triangle for triangle — no conversion in between that could change the shape. It is what desktop OpenSCAD exports after F6." },
      { title: "Curves as fine as $fn says", text: "Round shapes have as many segments as $fn (or $fa and $fs) give them, as on the desktop. For a smoother print, put something like $fn = 96; at the top of the file and export again." },
      { title: "Only the part you print", text: "% background objects are left out, # highlighted ones are exported like any other part, and color() is dropped: STL has no standard place for it. Everything at the top level goes into one file." },
      { title: "Sizes come through as written", text: "STL stores no units. OpenSCAD models are written in millimetres by convention and slicers read STL as millimetres, so a 40 in the code is 40 mm on the bed." },
    ],
    examplesTitle: "No file at hand? Convert one of these",
    examplesIntro: "Each opens already rendered. Change a parameter, then press “Export STL”. No sign-up.",
    exampleOpen: "Open and export",
    examples: {
      "pipe-flange": { title: "Weld-neck flange", text: "A revolved profile with a bolt circle: raise $fn for rounder holes before you export.", alt: "Isometric view of a weld-neck flange: eight bolt holes around a tapered hub with a bore" },
      "spur-gears": { title: "Meshing spur gears", text: "Two files: the entry uses a gear library in lib/, which is how most downloaded projects look.", alt: "Isometric view of a small and a large spur gear in mesh, each with a centre bore" },
      "parametric-box": { title: "Parametric box with lid", text: "Set the size, wall and lid fit with the sliders; the STL holds both the box and the lid.", alt: "Isometric view of a rounded box and its lid side by side, open side up" },
    },
    compareTitle: "Compared with desktop OpenSCAD",
    compareHead: ["", "Desktop OpenSCAD", "This page"],
    compare: [
      ["Install", "Download and install", "Open a web page"],
      ["Getting the STL", "Render (F6), then File → Export → Export as STL", "It renders as you go; one “Export STL” click"],
      ["Projects with include / use", "Open the entry file", "Drop the folder"],
      ["Other formats", "3MF, OFF, AMF, DXF, SVG and more", "STEP (exact B-rep) for CAD software"],
      ["Where it runs", "On your computer", "In your browser; the file is not uploaded"],
    ],
    faqTitle: "FAQ",
    faqs: [
      { q: "Is it free?", a: "Yes. There is no sign-up and no limit on how many files you convert." },
      { q: "Are my files uploaded?", a: "No. OpenSCAD runs inside your browser tab and writes the STL there too; the contents of your files never leave your computer." },
      { q: "Why does my STL look faceted?", a: "Curves get as many segments as $fn, $fa and $fs allow, exactly as on the desktop. Set a higher $fn at the top of the file or on the round shapes (96 is plenty for most prints) and export again." },
      { q: "The file uses include, use, or an STL / PNG / font file. What do I drop?", a: "The whole folder. Files are looked up by the same relative paths OpenSCAD uses; data files read by import() or surface() (STL, OFF, OBJ, AMF, DXF, SVG, DAT, PNG) and .ttf / .otf fonts come along. MCAD, BOSL2, Write.scad and Thingiverse's build_plate.scad are built in." },
      { q: "Can I get 3MF, DXF or SVG instead?", a: "Not here: this page exports STL, and STEP for CAD software. A 2D design (one without linear_extrude or rotate_extrude) has no STL, and DXF / SVG export is not available yet." },
      { q: "How large a model can it handle?", a: "Most files render in a second or two. A model that flattens to more than 150,000 nodes (loops unrolled) is beyond the in-browser build, and the page says so. A long render can be stopped at any time." },
      { q: "I need a STEP file for Fusion or SolidWorks, not an STL.", a: "Use OpenSCAD to STEP: the same tool rebuilds the model as exact B-rep, with true cylinders and planes instead of triangles." },
    ],
    moreTitle: "Related",
    pitches: {
      "openscad-to-step": "Need a CAD file instead? The same tool exports real B-rep STEP.",
      "openscad-customizer": "Customizing a Thingiverse model? Load the folder and use the sliders.",
      "chatgpt-openscad": "Got OpenSCAD code from ChatGPT? See it, fix it, export STL.",
      "openscad-viewer": "Just looking? Preview .scad files with the desktop F5 colours.",
    },
  };
}
