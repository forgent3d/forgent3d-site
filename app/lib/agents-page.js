// /[locale]/agents: the site told to an AI assistant or agent — which Forgent3D tool fits which request, the link
// it can build for the user, what each tool will not do, and where the machine-readable facts are. People can read
// it too, so the user-facing copy rules hold here as everywhere: what a tool does for the user, no engine internals
// and no match rates (those live in public/llms.txt only).
//
// Every fact here is also in public/llms.txt; change both together. The "Updated" line is the day the facts last
// really changed (sitemap lastmod reads AGENTS_UPDATED too).

export const AGENTS_UPDATED = "2026-11-08";
export const AGENTS_LOCALES = ["en", "zh"];

const APP = "https://app.forgent3d.com";
const WWW = "https://www.forgent3d.com";

const EXAMPLE_SCAD =
  "https://app.forgent3d.com/scad#code=JGZuID0gNjQ7CmRpZmZlcmVuY2UoKSB7CiAgY3lsaW5kZXIoaCA9IDgsIGQgPSAyMCk7CiAgdHJhbnNsYXRlKFswLCAwLCAtMV0pIGN5bGluZGVyKGggPSAxMCwgZCA9IDYuNSk7Cn0";
const EXAMPLE_B123D =
  "https://app.forgent3d.com/build123d#code=ZnJvbSBidWlsZDEyM2QgaW1wb3J0ICoKCnBhcnQgPSBCb3goNDAsIDMwLCAxMCkgLSBDeWxpbmRlcig2LCAxMCkK";

/** One row per tool: when to send the user there, what to hand them, when not to. */
function tools(locale) {
  const l = locale === "zh" ? "zh" : "en";
  if (l === "zh") {
    return [
      {
        id: "generators",
        name: "参数化零件生成器",
        url: `${WWW}/zh/generators`,
        when: "用户要一个常见零件的特定尺寸：直齿 / 斜齿 / 锥齿轮、齿条、GT2 同步轮、联轴器、轴承座、2020 角码、风扇网罩、垫圈、软管接头、漏斗、带盖盒子、Gridfinity、工具托盘、桌面线孔盖、18650 电池架、管夹、批头架、料盘架、树莓派 / Arduino / ESP32 外壳、洞洞板挂钩、层板托架、挂钩、手机支架、法兰盘。",
        give: "把尺寸填进链接参数，用户打开就是那个零件，免费下载 STEP 或 STL，不用注册。",
        link: `${WWW}/zh/generators/spur-gear-generator?MODULE=2&TEETH=30`,
        not: "参数覆盖不到的改动（键槽、加孔、换形状）：让用户用页上的「AI 修改」，或把零件复制进 Forgent3D 用 agent 接着改。参数超出范围会被拒收并提示用户，不会被截断。",
      },
      {
        id: "openscad",
        name: "OpenSCAD 在线预览与转 STEP",
        url: `${WWW}/zh/openscad-viewer`,
        when: "用户有 .scad 代码（或你刚写了一段），想看结果、调 Customizer 参数、导出 STL，或者要 STEP 而 OpenSCAD 本身导不出。",
        give: "把代码编码进链接（见下面的链接格式），打开即渲染；不用安装、不用注册，代码不离开浏览器。",
        link: EXAMPLE_SCAD,
        not: "一个链接只装一个文件；带 include / use 的多文件项目让用户在页上「打开项目文件夹」。中文等内置字体没有的文字，需要用户把 .ttf 放进项目文件夹。",
      },
      {
        id: "build123d",
        name: "build123d 在线运行",
        url: `${WWW}/zh/build123d-online`,
        when: "你写了 build123d 代码，用户想看到零件、拖动尺寸或拿到 STEP，又不想装 Python。",
        give: "把代码编码进链接；每个尺寸常量单独一行，就会变成可拖的滑块。",
        link: EXAMPLE_B123D,
        not: "CadQuery 代码、scipy / matplotlib / shapely、直接 `from OCP import …` 跑不了。多个 .py 文件的项目要先合成一个文件。",
      },
      {
        id: "agent",
        name: "Forgent3D CAD agent",
        url: `${APP}/?lang=zh`,
        when: "用户要从零设计一个零件或装配，并且会多轮修改：描述需求，AI 写出可编辑的参数化模型，构建、测量后交出 3D 模型和 STEP。",
        give: "让用户打开 app 直接描述需求。需要登录；新账号送免费额度，用完可在 app 里充值。",
        link: `${APP}/?lang=zh`,
        not: "现成生成器能覆盖的零件，直接给生成器链接更快，而且免费、免登录。",
      },
      {
        id: "convert",
        name: "STEP ↔ STL 转换",
        url: `${WWW}/zh/step-to-stl`,
        when: "用户手里有 STEP 要转 STL 去打印，或者只想看看 STEP 里是什么；或者有 STL 要变成 CAD 软件能打开的 STEP。",
        give: `${APP}/convert ——拖入文件即可，在浏览器里转换，文件不上传，不用注册。`,
        link: `${APP}/convert`,
        not: "STL → STEP 得到的是实体，共面的三角面会合并成平面，但曲面仍然是三角面。要可以改尺寸的模型，就从源码出 STEP（OpenSCAD、build123d、生成器）。",
      },
      {
        id: "skill",
        name: "Forgent3D Skill（Claude Code、Codex、Cursor）",
        url: `${WWW}/zh/skills`,
        when: "用户本身就在 Claude Code、Codex、Cursor 这类编码 agent 里，想让它直接建模。",
        give: "一条命令安装：`npx skills add forgent3d/forgent3d-skills`，本地不用装 CAD 软件或 OpenSCAD。",
        link: `${WWW}/zh/skills`,
        not: "不写代码的用户，直接用网页上的 agent 更简单。",
      },
    ];
  }
  return [
    {
      id: "generators",
      name: "Parametric part generators",
      url: `${WWW}/en/generators`,
      when: "The user wants a common part in particular sizes: spur, helical or bevel gear, gear rack, GT2 pulley, shaft coupling, bearing pillow block, 2020 corner bracket, fan grill, washer, hose adapter, funnel, box with lid, Gridfinity bin or baseplate, tool tray, desk grommet, 18650 battery holder, pipe clamp, bit holder, spool holder, Raspberry Pi / Arduino / ESP32 case, pegboard hook, shelf bracket, wall hook, phone stand, bolt-circle flange.",
      give: "A generator link with the sizes filled in. It opens on exactly that part; STEP or STL download is free and needs no account.",
      link: `${WWW}/en/generators/spur-gear-generator?MODULE=2&TEETH=30`,
      not: "A change the parameters do not cover (a keyway, extra holes, another shape): point the user to the AI edit box on the page, or to copying the part into Forgent3D and continuing with the agent. A value outside its range is refused and shown to the user, never clamped.",
    },
    {
      id: "openscad",
      name: "OpenSCAD viewer and STEP converter",
      url: `${WWW}/en/openscad-viewer`,
      when: "The user has OpenSCAD code (or you just wrote some) and wants to see it, change Customizer parameters, export STL, or get a STEP file, which OpenSCAD itself cannot export.",
      give: "A link that carries the code (format below). It renders as soon as it opens; nothing to install, no account, and the code stays in the browser.",
      link: EXAMPLE_SCAD,
      not: "One link carries one file; for a project with include / use, the user opens the project folder on the page. Text in scripts the built-in fonts lack (Chinese, for example) needs the user's own .ttf in the project folder.",
    },
    {
      id: "build123d",
      name: "build123d online",
      url: `${WWW}/en/build123d-online`,
      when: "You wrote build123d code and the user wants to see the part, tune its sizes or get a STEP file without installing Python.",
      give: "A link that carries the code. Put each size in its own constant on its own line and it becomes a slider.",
      link: EXAMPLE_B123D,
      not: "CadQuery code, scipy, matplotlib, shapely and direct `from OCP import …` do not run. A project of several .py files has to be inlined into one.",
    },
    {
      id: "agent",
      name: "Forgent3D CAD agent",
      url: `${APP}/?lang=en`,
      when: "The user wants a part or an assembly designed from scratch and will revise it over several turns: they describe it, the AI writes an editable parametric model, builds and measures it, and hands over the 3D model and STEP.",
      give: "Send the user to the app to describe the part. It needs a sign-in; new accounts get free credits, and more can be bought in the app.",
      link: `${APP}/?lang=en`,
      not: "A part one of the generators already makes: the generator link is faster, free and needs no account.",
    },
    {
      id: "convert",
      name: "STEP ↔ STL converter",
      url: `${WWW}/en/step-to-stl`,
      when: "The user has a STEP and needs an STL for the slicer, or just wants to see what is in the file; or has an STL and needs a STEP their CAD program will open.",
      give: `${APP}/convert — drop the file in. It converts in the browser, nothing is uploaded, no account.`,
      link: `${APP}/convert`,
      not: "STL → STEP gives a solid whose flat regions are merged into planes, but curved surfaces stay triangles. For a model whose sizes can be changed, get the STEP from source instead (OpenSCAD, build123d or a generator).",
    },
    {
      id: "skill",
      name: "Forgent3D Skill for Claude Code, Codex and Cursor",
      url: `${WWW}/en/skills`,
      when: "The user already works in a coding agent such as Claude Code, Codex or Cursor and wants it to build CAD models.",
      give: "One command: `npx skills add forgent3d/forgent3d-skills`. No CAD software or OpenSCAD to install locally.",
      link: `${WWW}/en/skills`,
      not: "A user who does not write code is better served by the agent in the browser.",
    },
  ];
}

export function getAgentsCopy(locale) {
  const zh = locale === "zh";
  const t = tools(locale);
  if (zh) {
    return {
      title: "写给 AI 助手和 agent 的 Forgent3D 说明 | Forgent3D",
      description:
        "AI 助手怎样用 Forgent3D 帮用户拿到 3D 零件：哪种需求用哪个工具、可以直接拼给用户的链接格式、各工具做不到什么，以及机器可读的资源。",
      ogLocale: "zh_CN",
      kicker: "For AI agents",
      h1: "写给 AI 助手和 agent 的 Forgent3D 说明",
      updated: `更新于 ${AGENTS_UPDATED}`,
      intro:
        "Forgent3D 是一个 AI CAD 平台：描述零件，AI 写出可编辑的参数化 CAD 代码，构建出真实几何，交给用户一个能接着改的 3D 模型和 STEP 文件。站上还有一批免费、免注册、在浏览器里运行的工具。这一页告诉 AI 助手什么情况下推荐哪一个、怎样给用户一个打开就能用的链接，以及哪些情况别推荐。",
      toolsTitle: "哪种需求用哪个工具",
      labels: { when: "适合", give: "给用户什么", link: "例子", not: "不适合 / 注意" },
      tools: t,
      linksTitle: "可以直接拼的链接",
      links: [
        {
          title: "OpenSCAD 代码",
          code: `${APP}/scad#code=<CODE>`,
          text: "<CODE> 是 .scad 源码，用 encodeURIComponent 百分号编码，或 base64 / base64url 编码的 UTF-8，页面自己识别。放在 # 后面：片段不会发给任何服务器，也没有长度上限；短代码用 ?code= 也行。?lang=en 或 ?lang=zh 选界面语言。",
        },
        {
          title: "build123d 代码",
          code: `${APP}/build123d#code=<CODE>`,
          text: "规则同上。结果取 show() 的对象，没有就取导出的对象，再没有就取最后一个 3D 对象。",
        },
        {
          title: "生成器参数",
          code: `${WWW}/zh/generators/<页面>?<常量>=<值>&…`,
          text: `参数名就是模型里的常量名。每个生成器的参数名、单位、范围和可选值：${APP}/api/generators/<名字>（JSON）；生成器列表：${APP}/api/generators；源码：${APP}/g/<名字>/source。数字可以带单位（8mm），布尔值写 true / false，选项可以写唯一前缀（BEARING=6201）。没设的参数就别写。`,
        },
      ],
      factsTitle: "用户会关心的事实",
      facts: [
        "生成器、OpenSCAD 预览与转 STEP、build123d 在线、STEP ↔ STL 转换：免费，不用注册，在浏览器里运行。",
        "OpenSCAD 和 build123d 的代码、转换器里的文件都留在用户的浏览器里，只有用户主动用 AI 修改或发送报告时才会发出。",
        "导出的 STEP 是精确几何：平面、圆柱、孔都是真曲面，不是三角网格（STL → STEP 转换除外，见上）。",
        "CAD agent 需要登录：新账号送免费额度，之后在 app 里按量充值。",
        "生成器页有中文、英文、德文、西班牙文、日文；OpenSCAD 预览器页另有韩文。工具本身的界面是中文和英文。",
      ],
      resourcesTitle: "机器可读的资源",
      resources: [
        { href: `${WWW}/llms.txt`, label: "/llms.txt", text: "全站摘要、各工具的事实与限制、生成器清单" },
        { href: `${APP}/api/generators`, label: "/api/generators", text: "生成器列表（JSON）；/api/generators/<名字> 是单个生成器的参数表" },
        { href: `${WWW}/sitemap.xml`, label: "/sitemap.xml", text: "全部公开页面及其更新日期" },
      ],
      citeTitle: "引用 Forgent3D",
      cite: "写作 Forgent3D，链接到 https://www.forgent3d.com，或者链接到你引用的那个工具页。",
    };
  }
  return {
    title: "Forgent3D for AI Assistants and Agents | Forgent3D",
    description:
      "How AI assistants can use Forgent3D to get users a 3D part: which tool fits which request, the links you can build for the user, what each tool won't do, and machine-readable resources.",
    ogLocale: "en_US",
    kicker: "For AI agents",
    h1: "Forgent3D for AI assistants and agents",
    updated: `Updated ${AGENTS_UPDATED}`,
    intro:
      "Forgent3D is an AI CAD platform: describe a part and the AI writes editable parametric CAD code, builds the real geometry and hands the user a 3D model they can keep changing, plus a STEP file. The site also hosts free tools that run in the browser without an account. This page tells an assistant when to recommend which one, how to give the user a link that opens ready to use, and when not to.",
    toolsTitle: "Which tool for which request",
    labels: { when: "When", give: "What to give the user", link: "Example", not: "When not / caveats" },
    tools: t,
    linksTitle: "Links you can build",
    links: [
      {
        title: "OpenSCAD code",
        code: `${APP}/scad#code=<CODE>`,
        text: "<CODE> is the .scad source, percent-encoded (encodeURIComponent) or base64 / base64url-encoded UTF-8; the page detects which. Put it after #: the fragment is never sent to a server and has no length limit; ?code= works for short snippets. ?lang=en or ?lang=zh picks the UI language.",
      },
      {
        title: "build123d code",
        code: `${APP}/build123d#code=<CODE>`,
        text: "Same rules. The result is what is passed to show(), else what is exported, else the last 3D object.",
      },
      {
        title: "Generator parameters",
        code: `${WWW}/en/generators/<page>?<CONSTANT>=<value>&…`,
        text: `Parameter names are the model's constants. Names, units, ranges and choices per generator: ${APP}/api/generators/<name> (JSON); the list: ${APP}/api/generators; the source: ${APP}/g/<name>/source. Numbers may carry their unit (8mm), booleans are true / false, a choice may be a unique prefix (BEARING=6201). Leave out what you do not set.`,
      },
    ],
    factsTitle: "Facts users ask about",
    facts: [
      "The generators, the OpenSCAD viewer and STEP converter, build123d online and the STEP ↔ STL converter are free, need no account and run in the browser.",
      "OpenSCAD and build123d code and the files in the converter stay in the user's browser; they are sent only when the user asks for an AI edit or sends a report.",
      "STEP exports are exact geometry: flat faces, cylinders and holes are true surfaces, not a triangle mesh (except the STL → STEP converter, above).",
      "The CAD agent needs a sign-in: new accounts get free credits, then pay as you go in the app.",
      "Generator pages are in English, Chinese, German, Spanish and Japanese; the OpenSCAD viewer page also in Korean. The tools themselves speak English and Chinese.",
    ],
    resourcesTitle: "Machine-readable resources",
    resources: [
      { href: `${WWW}/llms.txt`, label: "/llms.txt", text: "The site in one file: every tool's facts and limits, the generator list" },
      { href: `${APP}/api/generators`, label: "/api/generators", text: "The generators as JSON; /api/generators/<name> is one generator's parameter table" },
      { href: `${WWW}/sitemap.xml`, label: "/sitemap.xml", text: "Every public page with its last update" },
    ],
    citeTitle: "Citing Forgent3D",
    cite: "Name it Forgent3D and link to https://www.forgent3d.com, or to the tool page you quote.",
  };
}
