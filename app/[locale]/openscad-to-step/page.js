import Link from "next/link";
import { notFound } from "next/navigation";
import { isSupportedLocale } from "../../lib/landing-page";
import { OG_BASE, SITE_URL } from "../../lib/seo";

const SLUG = "openscad-to-step";
const APP_SCAD_URL = "https://app.forgent3d.com/scad";

// Thingiverse 语料(platform 仓库 scripts/scad-thingiverse.mjs --select all)。95% 是上线口径:
// 切到 OpenSCAD 单链路之后还没整批重测(切之前两条路合计实测 83.6%)。重测出数后改这里,中英两份都读它。
const CORPUS_FILES = 7378;
const CORPUS_RATE = "95%";

function getCopy(locale) {
  if (locale === "zh") {
    return {
      title: "OpenSCAD 转 STEP 在线工具：真正的 B-rep，免费、浏览器里直接转 | Forgent3D",
      description:
        "把 .scad 转成真正的 B-rep STEP：圆柱是圆柱、孔是孔，不是三角网格。在浏览器里运行，支持 include/use 多文件项目，免费、无需注册。",
      keywords: ["OpenSCAD 转 STEP", "scad 转 step", "OpenSCAD 导出 STEP", "scad 文件转换", "OpenSCAD STEP 在线转换"],
      ogLocale: "zh_CN",
      ogImage: "/og/openscad-to-step-zh.png",
      breadcrumbHome: "首页",
      name: "OpenSCAD 转 STEP",
      kicker: "免费工具 · 无需注册 · 在浏览器里运行",
      h1: "OpenSCAD 转 STEP：导出真正的 B-rep，不是网格",
      intro:
        "OpenSCAD 只能导出网格。把 .scad 文件或整个项目文件夹拖进来，就能得到带真平面、真圆柱、真孔的 STEP 文件——Fusion、SolidWorks、Onshape、FreeCAD 和 CAM 软件都能直接测量、选取、加工。全程在浏览器里运行，文件不会离开你的电脑。",
      cta: "转换 .scad 文件",
      ctaHow: "怎么用",
      facts: [
        { value: CORPUS_RATE, label: `的 Thingiverse 真实 .scad 文件（共 ${CORPUS_FILES} 份）能直接转换` },
        { value: "0", label: "次上传：OpenSCAD 和 CAD 内核都跑在你的浏览器标签页里" },
        { value: "免费", label: "转换和导出都免费，不用注册" },
      ],
      compareTitle: "网格 STEP 与 B-rep STEP",
      meshLabel: "网格包成的 STEP",
      meshStat: "256 个三角面",
      meshAlt: "网格版管子：顶面和侧面都由三角形拼成",
      brepLabel: "Forgent3D 导出的 B-rep STEP",
      brepStat: "4 个面：2 个平面、2 个圆柱面",
      brepAlt: "B-rep 版管子：顶面是一个平面圆环，内外壁各是一个光滑圆柱面",
      compareCaption:
        "同一根管子，$fn = 32。网格 STEP 里，内孔是 32 条平面窄条：CAD 选不中这个孔、量不出直径，CAM 也识别不了。B-rep STEP 里，它就是一个半径精确的圆柱面。",
      whyTitle: "为什么 OpenSCAD 给不了你 STEP",
      whyText:
        "OpenSCAD 把每个模型都算成三角面——它的 3D 导出只有 STL、3MF、OFF、AMF。STEP 精确描述曲面，机加工厂、注塑厂、CAM 刀路和参数化 CAD 要的都是它。常见的几种绕法，各有代价：",
      workarounds: [
        {
          title: "FreeCAD 的 OpenSCAD 工作台",
          text: "要在本地装好 FreeCAD 和 OpenSCAD。它没法原生重建的操作（很多情况下包括 hull() 和 minkowski()）会以网格形式导回来，导出的 STEP 只有一部分是实体。",
        },
        {
          title: "网格转 STEP 工具",
          text: "把每个三角形包成一个平面。文件哪里都能打开，但本质还是网格：没有圆柱，孔选不中，成千上万个面让 CAM 卡死。",
        },
        {
          title: "照着尺寸重新建模",
          text: "在 CAD 软件里按尺寸重画一遍。结果精确，但每个零件要几个小时——.scad 一改又得重来。",
        },
      ],
      howTitle: "怎么用",
      steps: [
        {
          title: "拖入文件",
          text: "打开转换器，拖入 .scad 文件；有 include/use 的话直接拖整个文件夹，路径解析和你本机完全一样。多个文件时选一下入口文件。",
        },
        {
          title: "OpenSCAD 解析，我们的内核建模",
          text: "OpenSCAD 本体（编译成 WebAssembly）执行你的代码，我们的 CAD 内核再把每个图元和布尔运算重建成精确几何，并在 3D 视图里显示零件和尺寸。",
        },
        {
          title: "导出 STEP",
          text: "下载 STEP 文件，在 Fusion、SolidWorks、Onshape、FreeCAD 里打开，或直接发给加工厂。",
        },
      ],
      exactTitle: "哪些能精确转换",
      exact: [
        {
          lead: "完整的语言。",
          text: "执行代码的就是 OpenSCAD 本体：module、function、循环、列表推导、include 和 use 全都支持。在 OpenSCAD 里能跑的，这里的理解方式完全一样。",
        },
        {
          lead: "真曲面。",
          text: "圆、圆柱、球、圆锥一律转成精确的解析曲面，不受 $fn 影响。$fn 小于等于 12 时保留你要的多边形——$fn = 6 的六角螺母还是六角。",
        },
        {
          lead: "实体与布尔运算。",
          text: "union、difference、intersection、linear_extrude、rotate_extrude、offset、mirror 和任意变换都重建成实体，不做三角化。",
        },
        {
          lead: "常用库内置。",
          text: "MCAD、Write.scad 和 Thingiverse 的 build_plate 开箱即用，和桌面版 OpenSCAD 一样，不用随项目打包。",
        },
        {
          lead: "多文件项目。",
          text: "include 和 use 按你真实的文件夹结构解析。缺文件会直接报错停下，而不是悄悄导出一个少了一块的零件。",
        },
      ],
      limitsTitle: "目前的限制",
      limitsIntro: "转换做不到精确的地方都会明确告诉你，不会悄悄近似。",
      limits: [
        "hull() 和 minkowski() 对常见形状是精确的；没有精确解的情况会做近似，构建时给出告警并写明面片数。",
        "带 twist 的 linear_extrude 没有精确的 B-rep 形式，按平面小面拼出来，和 OpenSCAD 自己的做法一样。",
        "数值经过 OpenSCAD 的 CSG 输出，只保留 6 位有效数字——100 mm 的零件上约 0.0005 mm。",
        "text() 使用内置的 DejaVu Sans 字体，文字可能和你电脑上的字体略有差别。",
        "暂不支持 import() 外部 STL / DXF / SVG 文件、surface() 和 projection(cut = false)，构建会报错并指出是哪一项。",
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "OpenSCAD 转 STEP 免费吗？", a: "免费。转换 .scad 文件、导出 STEP 都不收费，也不需要注册账号。" },
        {
          q: "我的 .scad 文件会上传到服务器吗？",
          a: "不会。OpenSCAD 和 CAD 内核都以 WebAssembly 的形式跑在你的浏览器里，文件只保存在当前标签页的内存中，不会发送给 Forgent3D。第一次转换要下载 OpenSCAD（约 3 MB），所以会多等几秒。",
        },
        {
          q: "为什么不直接从 OpenSCAD 导出 STL？",
          a: "3D 打印用 STL 就够了。但 CNC 加工、注塑、找加工厂报价、在 CAD 里继续改，都需要 STEP：STL 只有三角面，孔没有直径，曲面没有曲率。",
        },
        {
          q: "Thingiverse、Printables 上下载的模型能转吗？",
          a: `大多数可以。我们用 Thingiverse 上的 ${CORPUS_FILES} 份 .scad 文件做测试，${CORPUS_RATE} 能直接转换。把下载的整个文件夹拖进来，被 include 的文件才会一起带上。`,
        },
        {
          q: "转出来的 STEP 还能编辑吗？",
          a: "可以按几何编辑：在任何 CAD 软件里测量、倒圆角、挖槽、推拉面都行。STEP 不带 OpenSCAD 的参数，要改参数就改 .scad 再转一次。",
        },
        {
          q: "SolidWorks、Fusion、FreeCAD 能打开吗？",
          a: "STEP 是所有主流 CAD / CAM 软件都支持的通用格式。导出的文件是带解析曲面的实体，孔和圆柱面导入后就是可以选取、标注的圆柱面。",
        },
      ],
      ctaTitle: "转换你的第一个 .scad 文件",
      ctaText: "免费、无需注册、不用安装任何东西。",
      ctaButton: "打开转换器",
      relatedTitle: "相关",
      relatedGenerators: "不想写 OpenSCAD？试试现成的 3D 打印生成器",
      relatedCodeCad: "代码生成三维模型",
      credit:
        "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件。Forgent3D 在你的浏览器里运行它来读取 .scad 文件，与 OpenSCAD 项目没有隶属关系。",
    };
  }

  return {
    title: "OpenSCAD to STEP Converter — Real B-rep, Free, In-Browser | Forgent3D",
    description:
      "Convert .scad files to real B-rep STEP: true cylinders and holes, not a triangle mesh. Runs in your browser, handles include/use projects. Free, no sign-up.",
    keywords: [
      "openscad to step",
      "openscad export step",
      "scad to step converter",
      "convert openscad to step",
      "openscad step file",
      "openscad brep",
    ],
    ogLocale: "en_US",
    ogImage: "/og/openscad-to-step-en.png",
    breadcrumbHome: "Home",
    name: "OpenSCAD to STEP",
    kicker: "Free tool · No sign-up · Runs in your browser",
    h1: "OpenSCAD to STEP converter — real B-rep, not a mesh",
    intro:
      "OpenSCAD only exports meshes. Drop in a .scad file or a whole project folder and get a STEP file with true planes, cylinders and holes — geometry that Fusion, SolidWorks, Onshape, FreeCAD and CAM software can measure, select and machine. It all runs in your browser, so your files never leave your machine.",
    cta: "Convert a .scad file",
    ctaHow: "How it works",
    facts: [
      { value: CORPUS_RATE, label: `of ${CORPUS_FILES.toLocaleString("en-US")} real Thingiverse .scad files convert` },
      { value: "0", label: "files uploaded — OpenSCAD and the CAD kernel run in your tab" },
      { value: "Free", label: "to convert and export, no account needed" },
    ],
    compareTitle: "Mesh STEP vs. B-rep STEP",
    meshLabel: "Mesh wrapped in STEP",
    meshStat: "256 triangular faces",
    meshAlt: "Mesh tube: the top and walls are made of triangles",
    brepLabel: "Forgent3D B-rep STEP",
    brepStat: "4 faces: 2 planes, 2 cylinders",
    brepAlt: "B-rep tube: the top is one flat ring, each wall is one smooth cylinder",
    compareCaption:
      "The same tube at $fn = 32. In a mesh STEP the bore is 32 flat strips: CAD can't select it as a hole or measure its diameter, and CAM can't recognise it. In a B-rep STEP it is one cylindrical face with an exact radius.",
    whyTitle: "Why OpenSCAD can't give you a STEP file",
    whyText:
      "OpenSCAD turns every model into triangles — its 3D exports are STL, 3MF, OFF and AMF. STEP describes surfaces exactly, and that is what machine shops, injection molders, CAM toolpaths and parametric CAD expect. The usual ways around it all cost you something:",
    workarounds: [
      {
        title: "FreeCAD's OpenSCAD workbench",
        text: "Needs FreeCAD and OpenSCAD installed locally. Operations it can't rebuild natively — hull() and minkowski() in many cases — come back as meshes, so the STEP is only partly solid.",
      },
      {
        title: "Mesh-to-STEP converters",
        text: "They wrap each triangle in a planar face. The file opens anywhere, but it is still a mesh: no cylinders, no holes to select, thousands of faces for CAM to choke on.",
      },
      {
        title: "Remodel it by hand",
        text: "Rebuild the part in a CAD program from your dimensions. Exact, but it takes hours per part — and starts over every time the .scad changes.",
      },
    ],
    howTitle: "How it works",
    steps: [
      {
        title: "Drop in your files",
        text: "Open the converter and drop in a .scad file — or the whole folder, so include and use resolve exactly as they do on your machine. Pick the entry file if there is more than one.",
      },
      {
        title: "OpenSCAD reads, our kernel builds",
        text: "OpenSCAD itself, compiled to WebAssembly, evaluates your code. Our CAD kernel then rebuilds every primitive and boolean as exact geometry and shows you the part in 3D with its dimensions.",
      },
      {
        title: "Export STEP",
        text: "Download the STEP file and open it in Fusion, SolidWorks, Onshape or FreeCAD — or send it straight to a machine shop.",
      },
    ],
    exactTitle: "What converts exactly",
    exact: [
      {
        lead: "The whole language.",
        text: "It is the real OpenSCAD evaluating your code — modules, functions, loops, list comprehensions, include and use. If it runs in OpenSCAD, it is read the same way here.",
      },
      {
        lead: "True curves.",
        text: "Circles, cylinders, spheres and cones become exact analytic surfaces, whatever $fn says. A low $fn (12 or less) is kept as the polygon you asked for — a $fn = 6 hex nut stays a hex.",
      },
      {
        lead: "Solids and booleans.",
        text: "union, difference, intersection, linear_extrude, rotate_extrude, offset, mirror and arbitrary transforms are rebuilt as solids, not tessellated.",
      },
      {
        lead: "Common libraries built in.",
        text: "MCAD, Write.scad and Thingiverse's build_plate are available the way they are in a desktop OpenSCAD install — no need to bundle them.",
      },
      {
        lead: "Multi-file projects.",
        text: "include and use resolve against your real folder layout. A missing file stops the build with an error instead of quietly exporting a part with a piece missing.",
      },
    ],
    limitsTitle: "Current limits",
    limitsIntro: "Where the conversion isn't exact, it tells you — no silent approximations.",
    limits: [
      "hull() and minkowski() are exact for common shapes. Where no exact form exists the result is approximated, and the build warns you with the facet count.",
      "linear_extrude with twist has no exact B-rep form, so it is built from flat facets — the same way OpenSCAD builds it.",
      "Numbers pass through OpenSCAD's CSG output at 6 significant digits — about 0.0005 mm on a 100 mm part.",
      "text() uses a bundled DejaVu Sans font, so lettering can differ slightly from the font on your computer.",
      "import() of external STL, DXF or SVG files, surface() and projection(cut = false) aren't supported yet; the build stops with an error that names them.",
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Is the OpenSCAD to STEP converter free?",
        a: "Yes. Converting .scad files and exporting STEP is free and does not need an account.",
      },
      {
        q: "Are my .scad files uploaded to a server?",
        a: "No. OpenSCAD and the CAD kernel both run in your browser as WebAssembly. Your files are held in memory in the tab and are never sent to Forgent3D. The first conversion downloads OpenSCAD (about 3 MB), so it takes a few seconds longer.",
      },
      {
        q: "Why not just export STL from OpenSCAD?",
        a: "STL is fine for 3D printing. For CNC machining, injection molding, a manufacturer's quote or further work in CAD you need STEP: an STL has only triangles, so a hole has no diameter and a curved face has no curvature.",
      },
      {
        q: "Does it work with models from Thingiverse or Printables?",
        a: `Usually, yes. We test against ${CORPUS_FILES.toLocaleString("en-US")} .scad files from Thingiverse, and ${CORPUS_RATE} of them convert. Drop in the whole downloaded folder so the files they include come along.`,
      },
      {
        q: "Can I edit the STEP file afterwards?",
        a: "Yes, as geometry: measure it, fillet edges, cut pockets or push and pull faces in any CAD program. A STEP file carries no OpenSCAD parameters, so for parametric changes edit the .scad and convert again.",
      },
      {
        q: "Does the STEP open in SolidWorks, Fusion and FreeCAD?",
        a: "STEP is the neutral format every major CAD and CAM package imports. The exported file contains solids with analytic faces, so holes and round faces come in as cylinders you can select and dimension.",
      },
    ],
    ctaTitle: "Convert your first .scad file",
    ctaText: "Free, no sign-up, nothing to install.",
    ctaButton: "Open the converter",
    relatedTitle: "Related",
    relatedGenerators: "Rather not write OpenSCAD? Try the 3D print generators",
    relatedCodeCad: "Code to 3D models",
    credit:
      "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Forgent3D runs it in your browser to read .scad files and is not affiliated with the OpenSCAD project.",
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};

  const copy = getCopy(locale);
  const path = `/${locale}/${SLUG}`;
  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords.join(", "),
    alternates: {
      canonical: path,
      languages: {
        en: `/en/${SLUG}`,
        zh: `/zh/${SLUG}`,
        "x-default": `/en/${SLUG}`,
      },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: copy.ogImage, width: 1200, height: 630, alt: copy.name }],
      title: copy.title,
      description: copy.description,
      locale: copy.ogLocale,
      type: "website",
      url: path,
    },
  };
}

// ── The mesh-vs-B-rep figure ────────────────────────────────────────────────────────────────────
// One tube (outer r 2 : inner r 1) in an oblique view, drawn twice from the same numbers. The mesh
// panel draws exactly what OpenSCAD's STL of it holds at $fn = 32: 32 quads per wall and 64 triangles
// per annulus, 4 × 64 = 256 triangles — the count in the caption. The B-rep panel is the same outline
// as true ellipses: two planar rings and two cylinders.

const TUBE = { cx: 160, cy: 52, rx: 120, ry: 44, irx: 60, iry: 22, h: 132, fn: 32 };

const round1 = (v) => Math.round(v * 10) / 10;

/** Ring vertices; index i sits at angle 2πi/n, so 0..n/2 is the front (lower) half on screen. */
function ring(rx, ry, dy = 0) {
  return Array.from({ length: TUBE.fn }, (_, i) => {
    const a = (2 * Math.PI * i) / TUBE.fn;
    return [round1(TUBE.cx + rx * Math.cos(a)), round1(TUBE.cy + dy + ry * Math.sin(a))];
  });
}

const polyPath = (points) => `M${points.map((p) => p.join(",")).join("L")}Z`;

function MeshTube({ label }) {
  const { fn, h } = TUBE;
  const half = fn / 2;
  const top = ring(TUBE.rx, TUBE.ry);
  const bottom = ring(TUBE.rx, TUBE.ry, h);
  const inner = ring(TUBE.irx, TUBE.iry);
  const front = top.slice(0, half + 1);
  const frontBottom = bottom.slice(0, half + 1);
  const line = (a, b, key) => <line key={key} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />;

  return (
    <svg viewBox="0 0 320 236" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <clipPath id="scad-mesh-hole">
          <path d={polyPath(inner)} />
        </clipPath>
      </defs>
      <path className="fill-muted" d={polyPath([...front, ...frontBottom.slice().reverse()])} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75">
        {front.map((p, i) => line(p, frontBottom[i], `v${i}`))}
        {front.slice(0, half).map((p, i) => line(p, frontBottom[i + 1], `d${i}`))}
      </g>
      <polyline className="fill-none stroke-muted-foreground/70" strokeWidth="1" points={frontBottom.map((p) => p.join(",")).join(" ")} />
      <path className="fill-foreground/10" d={polyPath(inner)} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75" clipPath="url(#scad-mesh-hole)">
        {inner.slice(half).map((p, i) => line(p, [p[0], p[1] + h], `w${i}`))}
      </g>
      <path className="fill-card stroke-muted-foreground/70" strokeWidth="1" fillRule="evenodd" d={`${polyPath(top)}${polyPath(inner)}`} />
      <g className="stroke-muted-foreground/45" strokeWidth="0.75">
        {top.map((p, i) => line(p, inner[i], `r${i}`))}
        {top.map((p, i) => line(p, inner[(i + 1) % fn], `t${i}`))}
      </g>
    </svg>
  );
}

function BrepTube({ label }) {
  const { cx, cy, rx, ry, irx, iry, h } = TUBE;
  const ellipse = (erx, ery, y) => `M${cx + erx},${y}A${erx},${ery} 0 1 1 ${cx - erx},${y}A${erx},${ery} 0 1 1 ${cx + erx},${y}Z`;
  const side = `M${cx + rx},${cy}A${rx},${ry} 0 0 1 ${cx - rx},${cy}L${cx - rx},${cy + h}A${rx},${ry} 0 0 0 ${cx + rx},${cy + h}Z`;

  return (
    <svg viewBox="0 0 320 236" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <linearGradient id="scad-brep-side" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-brand)" stopOpacity="0.22" />
          <stop offset="0.45" stopColor="var(--color-brand)" stopOpacity="0.06" />
          <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="scad-brep-bore" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-brand)" stopOpacity="0.08" />
          <stop offset="1" stopColor="var(--color-brand)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d={side} fill="url(#scad-brep-side)" />
      <path className="fill-none stroke-brand" strokeWidth="1.5" d={`M${cx - rx},${cy}L${cx - rx},${cy + h}A${rx},${ry} 0 0 0 ${cx + rx},${cy + h}L${cx + rx},${cy}`} />
      <path d={ellipse(irx, iry, cy)} fill="url(#scad-brep-bore)" />
      <path className="fill-card stroke-brand" strokeWidth="1.5" fillRule="evenodd" d={`${ellipse(rx, ry, cy)}${ellipse(irx, iry, cy)}`} />
    </svg>
  );
}

export default async function OpenScadToStepPage({ params }) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  const copy = getCopy(locale);
  const pageUrl = `${SITE_URL}/${locale}/${SLUG}`;
  const appUrl = `${APP_SCAD_URL}?lang=${locale}`;

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.name,
    url: pageUrl,
    description: copy.description,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires WebAssembly",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: copy.breadcrumbHome, item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: copy.name, item: pageUrl },
    ],
  };

  const primaryButton =
    "js-scad-link inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand px-6 text-sm font-medium text-white! transition-colors hover:bg-brand/90";

  return (
    <main className="mx-auto w-[min(960px,calc(100vw-32px))] py-16 text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="flex items-center gap-2 font-mono text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link className="transition-colors hover:text-brand" href={`/${locale}`}>{copy.breadcrumbHome}</Link>
        <span aria-hidden>/</span>
        <span className="text-foreground">{copy.name}</span>
      </nav>

      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">{copy.kicker}</p>
      <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">{copy.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.intro}</p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a className={primaryButton} href={appUrl}>
          {copy.cta} →
        </a>
        <a
          className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-border/80 px-6 text-sm font-medium text-foreground transition-colors hover:border-brand/50"
          href="#how"
        >
          {copy.ctaHow}
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {copy.facts.map((fact) => (
          <div key={fact.label} className="rounded-xl border border-border/80 bg-card/60 p-5">
            <p className="font-mono text-2xl font-semibold text-brand">{fact.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{fact.label}</p>
          </div>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.compareTitle}</h2>
        <figure className="mt-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-5">
              <MeshTube label={copy.meshAlt} />
              <p className="mt-4 font-semibold text-foreground">{copy.meshLabel}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{copy.meshStat}</p>
            </div>
            <div className="rounded-2xl border border-brand/30 bg-card/60 p-5">
              <BrepTube label={copy.brepAlt} />
              <p className="mt-4 font-semibold text-foreground">{copy.brepLabel}</p>
              <p className="mt-1 font-mono text-xs text-brand">{copy.brepStat}</p>
            </div>
          </div>
          <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{copy.compareCaption}</figcaption>
        </figure>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.whyTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{copy.whyText}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copy.workarounds.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold">{copy.howTitle}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copy.steps.map((step, i) => (
            <article key={step.title} className="rounded-2xl border border-border/80 bg-card/60 p-6">
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.exactTitle}</h2>
        <ul className="mt-5 space-y-4">
          {copy.exact.map((item) => (
            <li key={item.lead} className="max-w-3xl leading-7 text-muted-foreground">
              <strong className="font-semibold text-foreground">{item.lead}</strong> {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl border border-dashed border-border/80 bg-card/60 p-6">
        <h2 className="text-2xl font-semibold">{copy.limitsTitle}</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy.limitsIntro}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
          {copy.limits.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">{copy.faqTitle}</h2>
        <div className="mt-5 space-y-6">
          {copy.faqs.map((faq) => (
            <article key={faq.q}>
              <h3 className="font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 max-w-3xl leading-7 text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-brand/30 bg-brand/[0.06] p-6">
        <h2 className="text-2xl font-semibold">{copy.ctaTitle}</h2>
        <p className="mt-3 text-muted-foreground">{copy.ctaText}</p>
        <a className={`${primaryButton} mt-5`} href={appUrl}>
          {copy.ctaButton} →
        </a>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold">{copy.relatedTitle}</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center rounded-md border border-border/80 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            href={`/${locale}/generators`}
          >
            {copy.relatedGenerators}
          </Link>
          <Link
            className="inline-flex items-center rounded-md border border-border/80 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            href={`/${locale}/code-to-parametric-cad`}
          >
            {copy.relatedCodeCad}
          </Link>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-muted-foreground/80">
          {copy.credit}{" "}
          <a className="underline underline-offset-2 hover:text-brand" href="https://openscad.org" rel="noreferrer" target="_blank">
            openscad.org
          </a>
        </p>
      </section>
    </main>
  );
}
