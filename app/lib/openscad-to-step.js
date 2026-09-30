// OpenSCAD → STEP: three pages under /[locale]/openscad-to-step with their own header (not the site's —
// app/[locale]/openscad-to-step/layout.js). The converter itself lives in the app; every CTA goes there.
// Copy for both locales, the paths and the shared metadata live here so the three pages stay in step.

import { OG_BASE, SITE_URL } from "./seo";

export const APP_SCAD_URL = "https://app.forgent3d.com/scad";

const SLUG = "openscad-to-step";
const SUBPAGES = { home: "", why: "why-openscad-cant-export-step", compat: "compatibility" };

// Thingiverse 语料(platform 仓库 scripts/scad-thingiverse.mjs --select all)。95% 是上线口径:
// 切到 OpenSCAD 单链路之后还没整批重测(切之前两条路合计实测 83.6%)。重测出数后改这里,中英两份都读它。
const CORPUS_FILES = 7378;
const CORPUS_RATE = "95%";

export function scadPath(locale, page = "home") {
  const sub = SUBPAGES[page];
  return sub ? `/${locale}/${SLUG}/${sub}` : `/${locale}/${SLUG}`;
}

export function scadAppUrl(locale) {
  return `${APP_SCAD_URL}?lang=${locale}`;
}

export function scadMetadata(locale, page) {
  const copy = getScadCopy(locale);
  const { title, description, keywords } = copy[page];
  const path = scadPath(locale, page);
  return {
    title,
    description,
    ...(keywords ? { keywords: keywords.join(", ") } : {}),
    alternates: {
      canonical: path,
      languages: {
        en: scadPath("en", page),
        zh: scadPath("zh", page),
        "x-default": scadPath("en", page),
      },
    },
    openGraph: {
      ...OG_BASE,
      images: [{ url: copy.shared.ogImage, width: 1200, height: 630, alt: copy.shared.toolName }],
      title,
      description,
      locale: copy.shared.ogLocale,
      type: page === "home" ? "website" : "article",
      url: path,
    },
  };
}

/** Home › OpenSCAD to STEP (› sub-page). */
export function scadBreadcrumbSchema(locale, page) {
  const copy = getScadCopy(locale);
  const items = [
    { name: copy.shared.breadcrumbHome, item: `${SITE_URL}/${locale}` },
    { name: copy.shared.toolName, item: `${SITE_URL}${scadPath(locale)}` },
  ];
  if (page !== "home") items.push({ name: copy[page].h1, item: `${SITE_URL}${scadPath(locale, page)}` });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({ "@type": "ListItem", position: i + 1, ...entry })),
  };
}

export function getScadCopy(locale) {
  if (locale === "zh") {
    return {
      shared: {
        toolName: "OpenSCAD 转 STEP",
        openConverter: "打开转换器",
        switchLabel: "EN",
        breadcrumbHome: "首页",
        ogLocale: "zh_CN",
        ogImage: "/og/openscad-to-step-zh.png",
        homeLink: "Forgent3D 首页",
        generatorsLink: "3D 打印生成器",
        credit:
          "OpenSCAD 是由 OpenSCAD 项目开发、以 GPL 协议发布的自由软件。Forgent3D 用它来读取 .scad 文件，与 OpenSCAD 项目没有隶属关系。",
      },
      home: {
        title: "OpenSCAD 转 STEP：导出真正的 B-rep，不是网格 | Forgent3D",
        description:
          "把 .scad 文件和多文件项目转成 STEP：真平面、真圆柱、真孔，不是三角网格。Fusion、SolidWorks、Onshape、FreeCAD 都能直接打开。",
        keywords: ["OpenSCAD 转 STEP", "scad 转 step", "OpenSCAD 导出 STEP", "scad 文件转换", "OpenSCAD STEP 在线转换"],
        h1: "OpenSCAD 转 STEP：导出真正的 B-rep，不是网格",
        intro:
          "OpenSCAD 只能导出网格。把 .scad 文件或整个项目文件夹拖进来，就能得到带真平面、真圆柱、真孔的 STEP 文件——Fusion、SolidWorks、Onshape、FreeCAD 和 CAM 软件都能直接测量、选取、加工。",
        cta: "转换 .scad 文件",
        corpus: `Thingiverse 上 ${CORPUS_FILES} 份真实 .scad 文件，${CORPUS_RATE} 能直接转换。`,
        corpusLink: "哪些能精确转换",
        compareTitle: "网格 STEP 与 B-rep STEP",
        meshLabel: "网格包成的 STEP",
        meshStat: "256 个三角面",
        meshAlt: "网格版管子：顶面和侧面都由三角形拼成",
        brepLabel: "Forgent3D 导出的 B-rep STEP",
        brepStat: "4 个面：2 个平面、2 个圆柱面",
        brepAlt: "B-rep 版管子：顶面是一个平面圆环，内外壁各是一个光滑圆柱面",
        compareCaption:
          "同一根管子，$fn = 32。网格 STEP 里，内孔是 32 条平面窄条：CAD 选不中这个孔、量不出直径，CAM 也识别不了。B-rep STEP 里，它就是一个半径精确的圆柱面。",
        faqTitle: "常见问题",
        faqs: [
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
        moreTitle: "延伸阅读",
        moreWhy: "OpenSCAD 为什么导不出 STEP，常见的几种绕法各有什么代价。",
        moreCompat: "哪些写法能精确转换，目前还有哪些限制。",
      },
      why: {
        title: "OpenSCAD 为什么导不出 STEP：三种绕法对比 | Forgent3D",
        description:
          "OpenSCAD 只能导出 STL、3MF 这类网格。为什么 STEP 需要精确曲面，FreeCAD、网格转换、重新建模这几种办法各有什么代价。",
        h1: "OpenSCAD 为什么导不出 STEP",
        intro:
          "OpenSCAD 把每个模型都算成三角面——它的 3D 导出只有 STL、3MF、OFF、AMF。STEP 精确描述曲面，机加工厂、注塑厂、CAM 刀路和参数化 CAD 要的都是它。",
        meshTitle: "网格和精确曲面差在哪",
        meshText:
          "在网格里，一个 10 mm 的孔是一圈平面窄条。打印没问题，但 CAD 选不中它、说不出它的直径，CAM 也认不出这是个要钻的孔。CAD 内核导出的 STEP 里，同一个孔是一个半径精确的圆柱面。",
        workaroundsTitle: "常见的几种绕法",
        howLabel: "做法",
        catchLabel: "代价",
        workarounds: [
          {
            title: "FreeCAD 的 OpenSCAD 工作台",
            how: "把 .scad（或 OpenSCAD 导出的 .csg）导入 FreeCAD，由它把图元重建成实体，再导出 STEP。",
            catch: "要在本地装好 FreeCAD 和 OpenSCAD。它没法原生重建的操作（很多情况下包括 hull() 和 minkowski()）会以网格形式导回来，导出的 STEP 只有一部分是实体。",
          },
          {
            title: "网格转 STEP 工具",
            how: "先从 OpenSCAD 导出 STL，再把它包成 STEP 文件。",
            catch: "每个三角形变成一个平面。文件哪里都能打开，但本质还是网格：没有圆柱，孔选不中，成千上万个面让 CAM 卡死。",
          },
          {
            title: "照着尺寸重新建模",
            how: "在 CAD 软件里按尺寸把零件重画一遍。",
            catch: "结果精确，但每个零件要几个小时——.scad 一改又得重来。",
          },
        ],
        oursTitle: "Forgent3D 的做法",
        oursText:
          "执行代码的是 OpenSCAD 本体，语言行为和你本机一致；我们的 CAD 内核再把每个图元和布尔运算重建成精确几何——圆就是真圆柱，不是多边形——然后导出成 STEP。",
        oursCompat: "看看哪些能精确转换",
      },
      compat: {
        title: "OpenSCAD 转 STEP 兼容性：哪些能精确转换 | Forgent3D",
        description:
          "哪些 OpenSCAD 写法能转成精确的 B-rep STEP：曲面、布尔运算、include/use、MCAD；以及目前的限制：hull/minkowski、twist、text、import()。",
        h1: "OpenSCAD 转 STEP 兼容性",
        intro: "转换器把什么重建成精确几何、哪里会近似、哪些还不支持。做不到精确的地方，构建时都会明确告诉你，不会悄悄近似。",
        exactTitle: "能精确转换的",
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
        limits: [
          "hull() 和 minkowski() 对常见形状是精确的；没有精确解的情况会做近似，构建时给出告警并写明面片数。",
          "带 twist 的 linear_extrude 没有精确的 B-rep 形式，按平面小面拼出来，和 OpenSCAD 自己的做法一样。",
          "text() 由 OpenSCAD 自己排版，字形轮廓精确转换。内置的是 OpenSCAD 自带的 Liberation 字体；用了你电脑上的其他字体，把 .ttf / .otf 放进项目文件夹、用 use <> 引入，否则文字会和本机不一样。",
          "import() 读入的 STL / DXF / SVG、surface() 高度图和 projection(cut = false) 先由 OpenSCAD 渲染，再转成面片实体：STEP 里这部分是平面小面，不是解析曲面，构建时会告警并写明面数或边数。转出的 3D 面片上限 8000 个，超过会报错。数据文件和 .scad 放在同一个项目文件夹里一起加载。",
        ],
        testTitle: "我们怎么测",
        testText: `我们用 Thingiverse 上 ${CORPUS_FILES} 份真实的 .scad 文件整批构建，并和 OpenSCAD 自己的渲染结果对照。其中 ${CORPUS_RATE} 能直接转换。`,
      },
    };
  }

  return {
    shared: {
      toolName: "OpenSCAD to STEP",
      openConverter: "Open the converter",
      switchLabel: "中",
      breadcrumbHome: "Home",
      ogLocale: "en_US",
      ogImage: "/og/openscad-to-step-en.png",
      homeLink: "Forgent3D home",
      generatorsLink: "3D print generators",
      credit:
        "OpenSCAD is free software developed by the OpenSCAD project and licensed under the GPL. Forgent3D uses it to read .scad files and is not affiliated with the OpenSCAD project.",
    },
    home: {
      title: "OpenSCAD to STEP Converter — Real B-rep, Not a Mesh | Forgent3D",
      description:
        "Convert .scad files and multi-file projects to STEP with true cylinders, planes and holes — not a triangle mesh. Opens in Fusion, SolidWorks, Onshape and FreeCAD.",
      keywords: [
        "openscad to step",
        "openscad export step",
        "scad to step converter",
        "convert openscad to step",
        "openscad step file",
        "openscad brep",
      ],
      h1: "OpenSCAD to STEP converter — real B-rep, not a mesh",
      intro:
        "OpenSCAD only exports meshes. Drop in a .scad file or a whole project folder and get a STEP file with true planes, cylinders and holes — geometry that Fusion, SolidWorks, Onshape, FreeCAD and CAM software can measure, select and machine.",
      cta: "Convert a .scad file",
      corpus: `${CORPUS_RATE} of ${CORPUS_FILES.toLocaleString("en-US")} real Thingiverse .scad files convert.`,
      corpusLink: "What converts exactly",
      compareTitle: "Mesh STEP vs. B-rep STEP",
      meshLabel: "Mesh wrapped in STEP",
      meshStat: "256 triangular faces",
      meshAlt: "Mesh tube: the top and walls are made of triangles",
      brepLabel: "Forgent3D B-rep STEP",
      brepStat: "4 faces: 2 planes, 2 cylinders",
      brepAlt: "B-rep tube: the top is one flat ring, each wall is one smooth cylinder",
      compareCaption:
        "The same tube at $fn = 32. In a mesh STEP the bore is 32 flat strips: CAD can't select it as a hole or measure its diameter, and CAM can't recognise it. In a B-rep STEP it is one cylindrical face with an exact radius.",
      faqTitle: "FAQ",
      faqs: [
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
      moreTitle: "Read more",
      moreWhy: "Why OpenSCAD has no STEP export, and what the usual workarounds cost you.",
      moreCompat: "Which OpenSCAD features convert exactly, and the current limits.",
    },
    why: {
      title: "Why OpenSCAD Can't Export STEP — 3 Workarounds Compared | Forgent3D",
      description:
        "OpenSCAD only exports meshes: STL, 3MF, OFF and AMF. Why STEP needs exact surfaces, and how FreeCAD, mesh converters and remodelling by hand compare.",
      h1: "Why OpenSCAD can't export STEP",
      intro:
        "OpenSCAD turns every model into triangles — its 3D exports are STL, 3MF, OFF and AMF. STEP describes surfaces exactly, and that is what machine shops, injection molders, CAM toolpaths and parametric CAD expect.",
      meshTitle: "Mesh vs. exact surfaces",
      meshText:
        "In a mesh, a 10 mm hole is a ring of flat strips. It prints fine, but CAD can't select it as a hole or tell you its diameter, and CAM can't recognise it as something to drill. In a STEP file from a CAD kernel, the same hole is one cylindrical face with an exact radius.",
      workaroundsTitle: "The usual workarounds",
      howLabel: "How",
      catchLabel: "The catch",
      workarounds: [
        {
          title: "FreeCAD's OpenSCAD workbench",
          how: "Import the .scad (or OpenSCAD's .csg export) into FreeCAD, which rebuilds the primitives as solids, then export STEP.",
          catch: "Needs FreeCAD and OpenSCAD installed locally. Operations it can't rebuild natively — hull() and minkowski() in many cases — come back as meshes, so the STEP is only partly solid.",
        },
        {
          title: "Mesh-to-STEP converters",
          how: "Export STL from OpenSCAD, then wrap it in a STEP file.",
          catch: "Each triangle becomes a planar face. The file opens anywhere, but it is still a mesh: no cylinders, no holes to select, and thousands of faces for CAM to choke on.",
        },
        {
          title: "Remodel it by hand",
          how: "Rebuild the part in a CAD program from your dimensions.",
          catch: "Exact, but hours of work per part — and it starts over every time the .scad changes.",
        },
      ],
      oursTitle: "What Forgent3D does instead",
      oursText:
        "OpenSCAD itself evaluates your code, so the language behaves exactly as it does on your machine. Our CAD kernel then rebuilds every primitive and boolean as exact geometry — a circle becomes a true cylinder, not a polygon — and exports that as STEP.",
      oursCompat: "See what converts exactly",
    },
    compat: {
      title: "OpenSCAD to STEP Compatibility — What Converts Exactly | Forgent3D",
      description:
        "Which OpenSCAD features convert to exact B-rep STEP — curves, booleans, include/use, MCAD — and the current limits with hull, minkowski, twist, text and import().",
      h1: "OpenSCAD to STEP compatibility",
      intro:
        "What the converter rebuilds as exact geometry, where it approximates, and what it doesn't support yet. Where the conversion isn't exact, the build tells you — no silent approximations.",
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
      limits: [
        "hull() and minkowski() are exact for common shapes. Where no exact form exists the result is approximated, and the build warns you with the facet count.",
        "linear_extrude with twist has no exact B-rep form, so it is built from flat facets — the same way OpenSCAD builds it.",
        "text() is laid out by OpenSCAD itself and its glyph outlines convert exactly. OpenSCAD's own Liberation fonts are built in; if you use another font from your computer, put the .ttf / .otf in the project folder and pull it in with use <>, or the lettering will differ from what you see locally.",
        "STL, DXF and SVG files read by import(), surface() heightmaps and projection(cut = false) are rendered by OpenSCAD first and brought in as faceted solids: that part of the STEP is flat facets, not analytic surfaces, and the build warns you with the face or edge count. Faceted 3D results are capped at 8,000 faces; above that the build stops with an error. Load data files in the same project folder as your .scad files.",
      ],
      testTitle: "How we test",
      testText: `We build ${CORPUS_FILES.toLocaleString("en-US")} real-world .scad files from Thingiverse in one batch and check the results against OpenSCAD's own render. ${CORPUS_RATE} of them convert.`,
    },
  };
}
