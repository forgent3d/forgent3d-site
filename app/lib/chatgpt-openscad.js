// ChatGPT OpenSCAD: /[locale]/chatgpt-openscad. "chatgpt openscad / chatgpt to stl / ai openscad code" — someone who
// asked a chat assistant for a 3D model and got OpenSCAD code back. ChatGPT already sends people to the viewer page
// (utm_source=chatgpt.com); this page answers what they came with: see the code, fix it in the chat, get an STL.
// The viewer page keeps "openscad viewer / online"; this one does not chase those words. Copy for both locales.

import { openscadPageCards, openscadPageMetadata, openscadPageSchemas, scadCodeUrl } from "./openscad-pages";

export const CHATGPT_SLUG = "chatgpt-openscad";

/**
 * The page's example, in the style its prompt asks for: sizes as Customizer variables at the top, millimetres, one
 * solid flat on z = 0. Checked with desktop OpenSCAD (renders clean, bbox 80 × 70 × 83 mm). The zh copy is the same
 * code with Chinese comments, so the parameter panel reads in Chinese.
 */
export function chatgptSample(locale) {
  const zh = locale === "zh";
  return `// ${zh ? "手机支架。每个尺寸都是开头的变量，带 Customizer 注释，" : "Phone stand. Every size is a variable at the top with a"}
// ${zh ? "所以会变成滑块。拖一拖试试。" : "Customizer comment, so it shows up as a slider. Drag them."}

/* [${zh ? "支架" : "Stand"}] */
// ${zh ? "靠背与桌面的夹角（度）" : "Back-rest angle from the desk (degrees)"}
angle = 65; // [50:1:80]
// ${zh ? "支架宽度" : "Stand width"}
width = 70; // [50:5:120]
// ${zh ? "壁厚" : "Wall thickness"}
wall = 4; // [3:0.5:8]

/* [${zh ? "手机" : "Phone"}] */
// ${zh ? "手机厚度（含手机壳）" : "Phone thickness, case included"}
phone = 12; // [6:0.5:20]
// ${zh ? "前挡高度" : "Height of the front lip"}
lip = 10; // [4:1:20]

/* [Hidden] */
depth = 80;
rest = 90;
notch = 16;
foot = depth * 0.35;

difference() {
  union() {
    cube([depth, width, wall]); // ${zh ? "底板" : "base"}
    translate([foot, 0, 0]) rotate([0, 90 - angle, 0]) translate([-wall, 0, 0]) cube([wall, width, rest]); // ${zh ? "靠背" : "back rest"}
    translate([foot - phone - wall, 0, 0]) cube([wall, width, wall + lip]); // ${zh ? "前挡" : "front lip"}
  }
  // ${zh ? "前挡上留给充电线的缺口" : "charging-cable notch in the lip"}
  translate([foot - phone - wall - 1, (width - notch) / 2, wall]) cube([wall + 2, notch, lip + 1]);
}`;
}

export function chatgptSampleUrl(locale) {
  return scadCodeUrl(locale, chatgptSample(locale));
}

export function chatgptMetadata(locale) {
  return openscadPageMetadata(locale, CHATGPT_SLUG, getChatgptCopy(locale));
}

export function chatgptSchemas(locale) {
  return openscadPageSchemas(locale, CHATGPT_SLUG, getChatgptCopy(locale));
}

export function chatgptMoreCards(locale) {
  return openscadPageCards(locale, ["openscad-to-stl", "openscad-viewer", "openscad-to-step", "openscad-customizer"], getChatgptCopy(locale).pitches);
}

export function getChatgptCopy(locale) {
  if (locale === "zh") {
    return {
      toolName: "AI 写的 OpenSCAD 转 STL",
      openTool: "打开预览器",
      credit:
        "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件。Forgent3D 在浏览器里运行它，与 OpenSCAD 项目以及 OpenAI、DeepSeek 等 AI 公司都没有隶属关系。",
      title: "ChatGPT、DeepSeek 写的 OpenSCAD 代码怎么变成 STL：在线预览、修错、导出 | Forgent3D",
      description:
        "让 ChatGPT、DeepSeek、豆包画个 3D 模型，拿到的往往是一段 OpenSCAD 代码？贴进来：真正的 OpenSCAD 在浏览器里渲染，报错带行号可以直接贴回对话，尺寸变成滑块，一键导出 STL。免费，不用登录。",
      keywords: ["ChatGPT OpenSCAD", "DeepSeek OpenSCAD", "AI 生成 OpenSCAD", "ChatGPT 3D 模型", "ChatGPT 生成 STL", "AI 3D 打印模型", "OpenSCAD 代码运行", "豆包 OpenSCAD", "OpenSCAD 代码转 STL"],
      h1: "AI 写了一段 OpenSCAD 代码？看效果、修错、导出 STL",
      intro:
        "让 ChatGPT、DeepSeek、豆包、Kimi 帮你做一个能 3D 打印的零件，拿到的往往不是文件，而是一段 OpenSCAD 代码。把它贴进来：真正的 OpenSCAD 在你的浏览器里一秒左右渲染出来；有错会标出行号，原样贴回对话就行；尺寸变成滑块；最后导出 STL 给切片软件。不用安装，不用登录。",
      cta: "贴代码",
      sampleCta: "打开一个现成的例子",
      whyTitle: "为什么拿到的是代码，不是模型",
      whyText:
        "聊天 AI 只会写文字，而 OpenSCAD 正好用文字描述 3D 模型，所以「帮我做个 3D 模型」它通常就回你一段 OpenSCAD。代码要在 OpenSCAD 里跑一遍才变成形状，而 AI 自己从来看不到这个形状——所以第一版常常差一点。这个页面补上的就是这一步：先看到零件，再准确告诉 AI 改哪里。",
      stepsTitle: "从对话到打印出来",
      steps: [
        { title: "让 AI 写 OpenSCAD", text: "说清零件做什么用，关键尺寸用毫米给出。让它把每个尺寸写成文件开头的变量（下面的提示词就是这么要求的），之后调尺寸不用再来回问。" },
        { title: "贴到这里", text: "打开预览器，把代码贴进编辑框；或者让 AI 直接给一个预览链接，点开就行。代码一改，半秒后重新渲染。" },
        { title: "改掉不对的地方", text: "错误和警告显示在编辑框下面，带行号，比如 model.scad:12:5。原样复制给 AI，或者直接描述哪里不对：「挂钩高了 10 mm」。" },
        { title: "用滑块微调", text: "带 Customizer 注释的变量会变成滑块和下拉框。拖一下，代码里那个值就跟着改，你打印的版本就是你能贴回对话的版本。" },
        { title: "导出 STL", text: "一键存下和屏幕上一样的二进制 STL，拖进 PrusaSlicer、Cura、OrcaSlicer 或 Bambu Studio。要进 CAD 软件？同一页还能导 STEP。" },
      ],
      promptTitle: "能直接打印的 OpenSCAD，这样问",
      promptIntro: "复制到对话里，把空填上。每一行都有用：毫米、滑块、平放在热床上的一个实体、不许编造函数。",
      prompt: [
        "用 OpenSCAD 写一个 ___。",
        "- 单位是毫米。",
        "- 每个尺寸都写成文件开头的变量，带 Customizer 注释，比如 width = 60; // [20:1:150]",
        "- 做成一个实体，底面平放在 z = 0 的热床上，尽量避免需要支撑的悬空。",
        "- 只用原生 OpenSCAD：不用库，不要调用代码里没定义的模块。",
        "- 可选：再给我一个 Forgent3D 预览链接，https://app.forgent3d.com/scad#code=<把代码 encodeURIComponent 之后放这里>",
      ].join("\n"),
      sampleTitle: "照这个写法的例子",
      sampleHint: "按上面的要求写的一个手机支架：尺寸都在开头，分组给 Customizer。打开它，拖滑块，导出 STL。",
      problemsTitle: "代码跑出来不对的时候",
      problemsIntro: "AI 写的 OpenSCAD 出问题，基本就这几种。下面是你会看到什么、该跟 AI 说什么。",
      problems: [
        { title: "警告「Ignoring unknown module」，或者少了一块", text: "代码调用了原生 OpenSCAD 没有的东西：rounded_cube()、fillet() 这类函数常常是 AI 编出来的。警告里写着是哪一行。让 AI 改用 cube()、cylinder()、hull() 或 minkowski() 来做这一块。" },
        { title: "库里的函数找不到", text: "BOSL2 和 MCAD 已经内置，但代码里还得先载入：用 cuboid() 要在开头写 include <BOSL2/std.scad>。漏了就补上这一行。" },
        { title: "零件悬空、重叠，或者方向反了", text: "多半是 translate() 或 rotate() 的正负号、坐标轴写错了。转动视角找到那个零件，告诉 AI 它在哪、应该在哪：「挂钩比底板高了 10 mm，而且朝后」。" },
        { title: "「… was assigned on line … but was overwritten」", text: "OpenSCAD 的变量在一个作用域里只取最后一次赋值，循环里也不会像 Python 那样累加。让 AI 直接把值算出来：用函数或列表推导。" },
        { title: "渲染半天出不来", text: "minkowski() 和很高的 $fn 会让计算量成倍增加。先点「停止」，调试时把 $fn 调低，导出前再调回去。" },
      ],
      bridgeTitle: "宁愿描述零件，也不想调代码？",
      bridgeText:
        "ChatGPT 写 OpenSCAD 时看不到结果。Forgent3D 的 AI CAD agent 会先把零件建出来、量尺寸、看截图，确认过了才交给你；给你的是能继续改的参数化模型，能导出 STEP 和 STL。它写的是自己的 CAD 代码，不是 OpenSCAD。",
      bridgeCta: "试试 AI CAD agent",
      featureList: ["真正的 OpenSCAD", "报错带行号", "Customizer 滑块", "导出 STL 和 STEP"],
      faqTitle: "常见问题",
      faqs: [
        { q: "ChatGPT 能直接生成 STL 文件吗？", a: "普通对话里它给的是代码。开了代码执行时，它有时能用 Python 写出 STL，但下载之前你还是看不到零件。OpenSCAD 代码加上这个预览器，几秒就能看到、调整、重新导出。" },
        { q: "DeepSeek、豆包、Kimi、Claude 写的代码也行吗？", a: "行。不管谁写的 OpenSCAD 代码都能跑。" },
        { q: "代码会发到服务器吗？", a: "不会。OpenSCAD 在你的浏览器里运行；#code= 链接里的代码也只留在浏览器里。" },
        { q: "用的是哪个版本的 OpenSCAD？", a: "OpenSCAD 2025 年的开发版快照，带 Manifold 几何内核，编译成 WebAssembly 运行。MCAD、BOSL2、Write.scad 已经内置。" },
        { q: "能帮我改模型吗？", a: "这个页面只负责显示和导出代码做出来的东西；要改，就改代码，或把要求贴回对话。Forgent3D 的 AI CAD agent 能按描述建零件，但它写的是自己的 CAD 代码，不是 OpenSCAD。" },
        { q: "要钱吗？", a: "免费。不用注册，不用安装。" },
      ],
      moreTitle: "相关工具",
      pitches: {
        "openscad-to-stl": "手里是 .scad 文件，不是对话里的代码？直接转 STL。",
        "openscad-viewer": "预览器怎么用：F5 配色、多文件项目、链接里带代码。",
        "openscad-to-step": "要放进 Fusion、SolidWorks？导出真正的 B-rep STEP。",
        "openscad-customizer": "定制别人的模型？加载文件夹，拖滑块。",
      },
    };
  }

  return {
    toolName: "ChatGPT OpenSCAD to STL",
    openTool: "Open the viewer",
    credit:
      "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Forgent3D runs it in the browser and is not affiliated with the OpenSCAD project, OpenAI, Anthropic or Google.",
    title: "ChatGPT OpenSCAD Code to STL — See, Fix and Print It Online | Forgent3D",
    description:
      "Asked ChatGPT for a 3D model and got OpenSCAD code? Paste it here: real OpenSCAD renders it in your browser, errors show their line numbers to paste back, sizes become sliders, and one click exports STL. Free, no sign-up.",
    keywords: [
      "chatgpt openscad",
      "chatgpt to stl",
      "chatgpt stl file",
      "chatgpt 3d model",
      "chatgpt 3d printing",
      "openscad code from chatgpt",
      "ai openscad code",
      "claude openscad",
      "gemini openscad",
    ],
    h1: "ChatGPT wrote OpenSCAD code? See it, fix it, print it",
    intro:
      "Ask ChatGPT — or Claude, Gemini, Copilot — for a 3D-printable part and you usually get OpenSCAD code, not a file. Paste that code here. Real OpenSCAD renders it in your browser in about a second, shows any error with its line number so you can paste it straight back into the chat, turns the sizes into sliders and exports an STL for your slicer. No install, no sign-up.",
    cta: "Paste your code",
    sampleCta: "Open a ready-made example",
    whyTitle: "Why you get code instead of a model",
    whyText:
      "Chat assistants write text, and OpenSCAD describes a 3D model as text, so it is how they usually answer “make me a 3D model”. The code still has to run in OpenSCAD to become a shape, and the assistant never sees that shape — which is why the first version is often a little off. This page is the missing step: see the part, then tell the assistant exactly what to change.",
    stepsTitle: "From chat to printed part",
    steps: [
      { title: "Ask for OpenSCAD", text: "Say what the part is for and give the key sizes in millimetres. Ask for every size as a variable at the top — the prompt below does that — so you can adjust it without another round trip." },
      { title: "Paste it here", text: "Open the viewer and paste the code into the editor, or ask the assistant for a preview link and click it. The model renders half a second after the code changes." },
      { title: "Fix what's off", text: "Errors and warnings appear under the editor with their line number, like model.scad:12:5. Copy them into the chat as they are, or say what looks wrong: “the hook is 10 mm too high”." },
      { title: "Tune it with sliders", text: "Variables with Customizer comments become sliders and drop-downs. Moving one rewrites that value in the code, so the version you print is the version you can paste back." },
      { title: "Export STL", text: "One click saves a binary STL of exactly what is on screen for PrusaSlicer, Cura, OrcaSlicer or Bambu Studio. Need it in CAD software? Export STEP from the same page." },
    ],
    promptTitle: "A prompt that gets printable OpenSCAD",
    promptIntro: "Copy it into the chat and fill in the blank. Every line is there for a reason: millimetres, sliders, one solid flat on the bed, and no made-up helpers.",
    prompt: [
      "Write OpenSCAD code for ___.",
      "- Units are millimetres.",
      "- Put every size in a variable at the top with a Customizer comment, e.g. width = 60; // [20:1:150]",
      "- One solid that sits flat on the print bed at z = 0; avoid overhangs that need supports.",
      "- Plain OpenSCAD only: no libraries, and no modules you have not defined in the code.",
      "- Optional: give me a Forgent3D preview link, https://app.forgent3d.com/scad#code=<the code, encodeURIComponent-encoded>",
    ].join("\n"),
    sampleTitle: "An example in that style",
    sampleHint: "A phone stand written that way: sizes at the top, grouped for the Customizer. Open it, drag the sliders, export the STL.",
    problemsTitle: "When the code doesn't come out right",
    problemsIntro: "AI-written OpenSCAD goes wrong in a handful of familiar ways. Here is what you will see and what to tell the assistant.",
    problems: [
      { title: "“Ignoring unknown module” — or a part is missing", text: "The code calls something plain OpenSCAD doesn't have: rounded_cube(), fillet() and similar helpers are often made up. The warning names the line. Ask the assistant to build that part from cube(), cylinder(), hull() or minkowski() instead." },
      { title: "A library function isn't found", text: "BOSL2 and MCAD are built in, but the code still has to load them: cuboid() needs include <BOSL2/std.scad> at the top. If that line is missing, add it." },
      { title: "Parts float, overlap or point the wrong way", text: "Usually a translate() or rotate() with the wrong sign or axis. Turn the view to find the part, then say where it is and where it should be: “the hook sits 10 mm above the plate and faces backwards”." },
      { title: "“… was assigned on line … but was overwritten”", text: "OpenSCAD keeps the last assignment of a variable in each scope, and loops do not update it the way Python does. Ask for the value to be computed directly, with a function or a list comprehension." },
      { title: "Rendering takes forever", text: "minkowski() and a high $fn multiply the work. Press Stop, lower $fn while you iterate, and raise it again just before you export." },
    ],
    bridgeTitle: "Rather describe the part than debug code?",
    bridgeText:
      "ChatGPT writes OpenSCAD without ever seeing the result. Forgent3D's AI CAD agent builds the part, measures it and looks at snapshots of it before you see it, then gives you an editable parametric model with STEP and STL export. It writes its own CAD code, not OpenSCAD.",
    bridgeCta: "Try the AI CAD agent",
    featureList: ["Real OpenSCAD", "Errors with line numbers", "Customizer sliders", "STL and STEP export"],
    faqTitle: "FAQ",
    faqs: [
      { q: "Can ChatGPT make an STL file directly?", a: "In a normal chat it answers with code. With code execution it can sometimes write an STL through Python, but you still can't see the part before you download it. OpenSCAD code plus this viewer lets you see it, adjust it and export again in seconds." },
      { q: "Does it work with code from Claude, Gemini, Copilot or DeepSeek?", a: "Yes. It runs any OpenSCAD code, whoever wrote it." },
      { q: "Is my code sent anywhere?", a: "No. OpenSCAD runs inside your browser; code in a #code= link stays in the browser too." },
      { q: "Which version of OpenSCAD runs the code?", a: "A 2025 development snapshot of OpenSCAD with the Manifold geometry kernel, compiled to WebAssembly. MCAD, BOSL2 and Write.scad are built in." },
      { q: "Can it change the model for me?", a: "This page shows and exports what the code makes; to change it, edit the code or paste your request back into the chat. Forgent3D's AI CAD agent can build parts from a description, but it writes its own CAD code rather than OpenSCAD." },
      { q: "Is it free?", a: "Yes. No sign-up and nothing to install." },
    ],
    moreTitle: "Related",
    pitches: {
      "openscad-to-stl": "Have a .scad file rather than code in a chat? Convert it to STL.",
      "openscad-viewer": "How the viewer works: the F5 colours, projects, code in a link.",
      "openscad-to-step": "Want the part in Fusion or SolidWorks? Export real B-rep STEP.",
      "openscad-customizer": "Customizing someone else's model? Load the folder and use the sliders.",
    },
  };
}
