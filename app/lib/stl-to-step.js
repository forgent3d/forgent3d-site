// STL to STEP: /[locale]/stl-to-step. "stl to step / stl to step converter / convert stl to step / stl to stp",
// "stl in step umwandeln", "STL STEP 変換": someone holding a mesh who needs a STEP for a CAD tool. Half the search
// results are forum threads; the honest answer is ours to give: a mesh becomes a FACETED solid (flat areas merged into
// planes, nothing curved recovered), and a real STEP comes from the source. The tool is app.forgent3d.com/convert
// (lib/step-tools.js). Copy for en, zh, de, ja — numbers from SURVEY.

import { SURVEY, formatNumber, stepToolLinks } from "./step-tools";

export const STL_TO_STEP_SLUG = "stl-to-step";

export function stlToStepMoreCards(locale) {
  const t = getStlToStepCopy(locale);
  const links = stepToolLinks(locale);
  return [
    { href: links.openscadToStep, title: t.more.openscadToStep.title, text: t.more.openscadToStep.text },
    { href: links.stepToStl, title: t.more.stepToStl.title, text: t.more.stepToStl.text },
    { href: links.generators, title: t.more.generators.title, text: t.more.generators.text },
  ];
}

function numbers(locale) {
  const n = (v, d = 0) => formatNumber(locale, v, d);
  const s = SURVEY.stl;
  return {
    files: n(s.files),
    generators: n(s.generators),
    prusa: n(s.prusa),
    samples: n(s.samples),
    projects: n(s.projects),
    converted: n(s.converted),
    failed: n(s.files - s.converted),
    closedIn: n(s.closedIn),
    solidsOut: n(s.solidsOut),
    openIn: n(s.converted - s.closedIn),
    failedClosed: n(s.closedIn - s.solidsOut),
    volumePct: s.volumeMaxPct,
    facesPct: n(s.facesMedianPct),
    medianS: n(s.medianS, 1),
    p90S: n(s.p90S, 1),
    bar: { tri: n(s.bar.triangles), faces: n(s.bar.faces), stlKB: n(s.bar.stlKB), stepMB: n(s.bar.stepMB, 1) },
    scan: { tri: n(s.scan.triangles), faces: n(s.scan.faces), stepMB: n(s.scan.stepMB), seconds: n(s.scan.seconds) },
    maxTriangles: n(2_000_000),
  };
}

export function getStlToStepCopy(locale) {
  const x = numbers(locale);
  const failures = SURVEY.stl.failures;

  if (locale === "zh") {
    return {
      toolName: "STL 转 STEP",
      openTool: "打开转换器",
      title: "STL 转 STEP 在线工具（STL 转 STP）—— 免费、如实、不上传 | Forgent3D",
      description:
        "在浏览器里把 STL 转成 STEP：焊接三角面、修复导出错误、把平面合成整面、重建成 CAD 能打开的实体，并告诉你转出来的是什么。免费、不用注册、文件不上传。",
      keywords: ["STL 转 STEP", "stl 转 step 在线", "stl 转 stp", "stl 转换 step", "stl 文件转 step", "网格转实体", "stl 转实体", "stl 转 step 免费"],
      h1: "STL 转 STEP：网格能变成的最好样子，也只能到这一步",
      intro:
        "把 STL 拖进来。转换器焊接三角面、修好导出程序留下的毛病，把每一块平的区域合成一个平面，再建成 CAD 软件能打开的实体——全在你的浏览器里，文件不上传。然后告诉你转出来的是什么：多少个面、是实体还是开放曲面、体积和 STL 还对不对得上。",
      cta: "转换 STL",
      truthTitle: "STL 转 STEP 能做什么、不能做什么",
      truth:
        "STL 只有三角面。做它用的圆柱、圆角和草图都不在文件里，任何转换器都放不回去。你得到的是一个由平面拼成的实体：网格平的地方是整块平面，弯的地方是一条条窄平面。Fusion、SolidWorks、FreeCAD、Onshape 会把它当实体打开，可以切、挖槽、在平面之间测量——但孔仍是一圈窄条，不是能改直径的孔。",
      realStep: "要带真圆柱、真孔的 STEP，就从模型的源头导出：",
      realStepScad: "OpenSCAD 转 STEP",
      realStepGenerators: "参数化生成器（可导出 STEP）",
      otherWay: "要反过来？",
      otherWayLink: "STEP 转 STL",
      stepsTitle: "STL 怎么转 STEP",
      steps: [
        { title: "打开转换器", text: "不用注册。第一次访问下载约 8 MB 的 WebAssembly，浏览器缓存后下次直接用。" },
        { title: "拖入 STL", text: `二进制或 ASCII 的 STL 都行，最多 ${x.maxTriangles} 个三角面。` },
        { title: "看报告", text: "合并前后的面数、实体还是开放曲面、STL 与 STEP 的体积，以及修了哪些毛病，一项项列出来。左边视图里看得到合并出来的平面。" },
        { title: "下载 STEP", text: "AP242 格式，Fusion、SolidWorks、FreeCAD、Onshape 等现在的 CAD 软件都能导入。" },
      ],
      factsTitle: `用 ${x.files} 个真实 STL 测过`,
      factsIntro: `测试集：我们生成器打印验证套件里的 ${x.generators} 个 STL，Prusa i3 MK3 的 ${x.prusa} 个打印件（OpenSCAD 导出），OpenCascade 自带的 ${x.samples} 个样例网格，以及 GitHub 上公开 CAD 项目的 ${x.projects} 个 STL。30 MB 以内的 STEP 都再读回来核对。`,
      facts: [
        { label: "转换成功", value: `${x.converted} / ${x.files}`, detail: failures.zh },
        { label: "封闭网格成了有效实体", value: `${x.solidsOut} / ${x.closedIn}`, detail: `这 ${x.solidsOut} 个实体都通过 OpenCascade 的有效性检查，从 STEP 读回来实体数和面数不变。其余 ${x.failedClosed} 个网格自相交，写成了封闭曲面而不冒充实体；另有 ${x.openIn} 个网格本身有洞，照实写成开放曲面。` },
        { label: "STL 与 STEP 的最大体积差", value: `${x.volumePct}%`, detail: "所有实体里差得最多的一个。只合并真正共面的三角面（在零件尺寸的百万分之一以内），所以形状不会变。" },
        { label: "STEP 面数 / STL 三角面数（中位数）", value: `${x.facesPct}%`, detail: "打印件的平面每块合成一个面；曲面保留原来的小面。" },
      ],
      factsNote: `STEP 文件会很大：每个面都要连同它的边完整写出。${x.bar.stlKB} KB 的测试条（${x.bar.tri} 个三角面 → ${x.bar.faces} 个面）转出 ${x.bar.stepMB} MB 的 STEP；${x.scan.tri} 个三角面的扫描头像转出 ${x.scan.stepMB} MB，写了 ${x.scan.seconds} 秒。这已经省掉了每条边在每个面上的二维副本（普通导出里占 40–60%）。`,
      featuresTitle: "转换器做了什么",
      features: [
        { title: "只修拓扑，不动几何", text: "方向反了的三角面翻正、里外翻了的实体翻过来、相差极小的顶点合上、零面积的细长三角面去掉、两个相贴实体共用的边拆开——每一项都在报告里计数。" },
        { title: "平的区域合成一个面", text: "共面的相邻三角面合并，面上的孔保留为孔。只认真正的平面（零件尺寸的百万分之一以内），不会把曲面压平。" },
        { title: "是实体才叫实体", text: "有洞的网格写成开放曲面，报告里明说；绝不把它标成实体。" },
        { title: "空心零件保留空腔", text: "内层壳体成为从外面实体里挖掉的空腔，体积照样对得上。" },
        { title: "体积核对", text: "每次转换都给出 STL 的体积和 STEP 的体积，一眼看出有没有变形。" },
        { title: "文件不出浏览器", text: "在你的浏览器里运行，页面没有上传功能。不用注册，不保存任何东西。" },
      ],
      compareTitle: "网格转出的 STEP 和从源头导出的 STEP",
      compareIntro: "同一个零件，两种 STEP 的差别：",
      compareHead: ["", "由 STL 转出的 STEP", "从 CAD 源头导出的 STEP"],
      compare: [
        ["一个孔", "一圈平的窄条（STL 里有几段就几条）", "一个圆柱面，直径精确"],
        ["平面", "每块一个平面", "每块一个平面"],
        ["改孔的大小", "改不了，只能重画", "改特征或参数"],
        ["圆角", "一排窄小面", "真正的圆角面"],
        ["文件大小", "大（小零件也是几 MB）", "小（几十 KB）"],
        ["适合", "加孔、切割、围着它设计配合件、CAM 粗加工", "所有用途"],
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "STL 怎么转成 STEP？",
          a: "打开转换器，拖入 STL，看一眼报告，点「下载 STEP」。在 FreeCAD 里是 Part 工作台「从网格创建形状」、再「转换为实体」、最后导出 STEP；在 Fusion 里是插入网格后用「转换网格」。这里不用装软件，还会告诉你转出来的是不是实体。",
        },
        {
          q: "为什么 STL 转 STEP 得不到真正的 CAD 模型？",
          a: "因为 STL 里只有三角面：圆柱已经变成了一圈平面，圆角变成了一排窄面，原来的尺寸和特征都没有存进去。转换只能把这些三角面整理成一个干净的实体，没法推测出原来的设计。要可编辑的模型，得回到做这个零件的 CAD 文件或源码。",
        },
        {
          q: "CAD 软件能打开转出来的 STEP 吗？",
          a: "能。文件是标准的 AP242，Fusion、SolidWorks、FreeCAD、Onshape 等都能导入；我们把 30 MB 以内的每个都用 OpenCascade 读回来核对过实体数和体积。面数上万的文件在任何 CAD 里都会比较卡。",
        },
        {
          q: "为什么 STEP 比 STL 大那么多？",
          a: "STL 每个三角面 50 字节；STEP 要把每个面写成平面、边环、边、顶点几层实体，我们测的每个面约 1.2–1.5 KB。我们已经把可以推导出的二维边副本省掉了，文件比普通导出小 40–60%，但大网格的 STEP 仍然很大。",
        },
        {
          q: "能在转出来的 STEP 里改孔的大小吗？",
          a: "不能：孔是一圈平面，不是一个圆柱特征。可以在 CAD 里把那一圈面删掉、重新打孔；更省事的是从源头改——如果零件来自 OpenSCAD 或我们的生成器，改参数再导出 STEP 就行。",
        },
        {
          q: "转出来的是实体吗？",
          a: "STL 封闭（每条边正好两个三角面）就是实体，并通过 OpenCascade 的有效性检查。STL 有洞时写成开放曲面，报告里会说有多少条开口边；先用切片软件或 Meshmixer 修好网格再转，就能得到实体。",
        },
        {
          q: "最大能转多大的 STL？",
          a: `${x.maxTriangles} 个三角面。扫描件、雕塑这类有机网格几乎没有平面可合并，几万个三角面就会产生几十 MB 的 STEP，先减面再转更好用。`,
        },
        { q: "STL 文件会被上传吗？", a: "不会。转换在你浏览器里、单独源上的 WebAssembly 中完成，页面没有上传。我们只收到匿名计数（面数、用时），收不到文件和文件名。" },
        { q: "STL 转 STP 和转 STEP 一样吗？", a: "一样。.stp 和 .step 是同一种格式（ISO 10303-21）的两个扩展名，下载后把扩展名改成 .stp 也可以。" },
      ],
      moreTitle: "相关",
      more: {
        openscadToStep: { title: "OpenSCAD 转 STEP", text: "从源码出真正的 STEP：圆柱和孔是真曲面。手里有 .scad 就别从 STL 转。" },
        stepToStl: { title: "STEP 转 STL", text: "反方向：查看 STEP，按选定精度转成 STL，检查网格是否封闭。" },
        generators: { title: "3D 打印生成器", text: "齿轮、盒子、支架等参数化零件，在线调参数，直接导出 STEP。" },
      },
      footer: {
        home: "Forgent3D 首页",
        stlToStep: "STL 转 STEP",
        stepToStl: "STEP 转 STL",
        openscadToStep: "OpenSCAD 转 STEP",
        generators: "3D 打印生成器",
        credit: "STEP 由 Open CASCADE Technology（LGPL 2.1）生成，编译成 WebAssembly 在浏览器里运行；Forgent3D 与 Open Cascade 公司没有隶属关系。",
        licences: "我们运行的构建：许可证与源码",
      },
    };
  }

  if (locale === "de") {
    return {
      toolName: "STL in STEP umwandeln",
      openTool: "Konverter öffnen",
      title: "STL in STEP umwandeln – online, kostenlos, ehrlich, ohne Upload | Forgent3D",
      description:
        "STL im Browser in STEP umwandeln: Dreiecke verschweißen, Exportfehler reparieren, ebene Bereiche zu Flächen zusammenfassen, als Volumenkörper aufbauen – und sehen, was dabei herauskommt. Kostenlos, ohne Anmeldung, ohne Upload.",
      keywords: ["STL in STEP umwandeln", "STL in STEP konvertieren", "STL zu STEP", "STL in STP umwandeln", "STL STEP Konverter", "Netz in Volumenkörper", "STL in STEP umwandeln kostenlos", "STL in CAD umwandeln"],
      h1: "STL in STEP umwandeln: das Beste, was aus einem Netz werden kann – und nicht mehr",
      intro:
        "Ziehen Sie eine STL hierher. Der Konverter verschweißt die Dreiecke, repariert, was der Exporter falsch gemacht hat, fasst jeden ebenen Bereich zu einer einzigen Fläche zusammen und baut einen Volumenkörper, den Ihre CAD-Software öffnet – in Ihrem Browser, ohne Upload. Danach sehen Sie, was herausgekommen ist: wie viele Flächen, Volumenkörper oder offene Fläche, und ob das Volumen noch zur STL passt.",
      cta: "STL umwandeln",
      truthTitle: "Was STL in STEP leisten kann – und was nicht",
      truth:
        "Eine STL besteht nur aus Dreiecken. Zylinder, Rundungen und die Skizze, aus der das Teil entstand, stehen nicht darin, und kein Konverter kann sie zurückholen. Sie erhalten einen facettierten Volumenkörper: ebene Flächen, wo das Netz eben war, schmale ebene Streifen, wo es gekrümmt war. Fusion, SolidWorks, FreeCAD und Onshape öffnen ihn als Volumenkörper, den Sie schneiden, mit Taschen versehen und zwischen ebenen Flächen messen können – eine Bohrung bleibt aber ein Ring aus Streifen, keine Bohrung, deren Durchmesser Sie ändern können.",
      realStep: "Sie brauchen eine STEP mit echten Zylindern? Exportieren Sie sie aus der Quelle des Modells:",
      realStepScad: "OpenSCAD to STEP",
      realStepGenerators: "Parametrische Generatoren (mit STEP-Export)",
      otherWay: "Andersherum?",
      otherWayLink: "STEP in STL umwandeln",
      stepsTitle: "So wandeln Sie STL in STEP um",
      steps: [
        { title: "Konverter öffnen", text: "Ohne Anmeldung. Beim ersten Besuch werden etwa 8 MB WebAssembly geladen und im Browser behalten." },
        { title: "STL hineinziehen", text: `Binär oder ASCII, bis ${x.maxTriangles} Dreiecke.` },
        { title: "Bericht lesen", text: "Flächen vor und nach dem Zusammenfassen, Volumenkörper oder offene Fläche, Volumen von STL und STEP und was repariert wurde – Punkt für Punkt. Die zusammengefassten Flächen sehen Sie in der Ansicht." },
        { title: "STEP herunterladen", text: "Im Format AP242, das Fusion, SolidWorks, FreeCAD, Onshape und andere aktuelle CAD-Programme importieren." },
      ],
      factsTitle: `Getestet mit ${x.files} echten STL-Dateien`,
      factsIntro: `Testmenge: ${x.generators} STL aus dem Druck-Prüfset unserer Generatoren, ${x.prusa} Druckteile des Prusa i3 MK3 (aus OpenSCAD exportiert), ${x.samples} Beispielnetze von OpenCascade und ${x.projects} STL aus öffentlichen CAD-Projekten auf GitHub. Jede STEP bis 30 MB wurde zur Kontrolle wieder eingelesen.`,
      facts: [
        { label: "umgewandelt", value: `${x.converted} / ${x.files}`, detail: failures.de },
        { label: "geschlossene Netze wurden gültige Volumenkörper", value: `${x.solidsOut} / ${x.closedIn}`, detail: `Diese ${x.solidsOut} Volumenkörper bestehen die Gültigkeitsprüfung von OpenCascade und werden aus der STEP mit gleicher Körper- und Flächenzahl zurückgelesen. Die übrigen ${x.failedClosed} Netze durchdringen sich selbst und wurden als geschlossene Fläche geschrieben, nicht als Volumenkörper ausgegeben; weitere ${x.openIn} Netze hatten Löcher und wurden als offene Fläche geschrieben.` },
        { label: "größte Volumenabweichung STL ↔ STEP", value: `${x.volumePct.replace(".", ",")} %`, detail: "Über alle Volumenkörper. Zusammengefasst werden nur wirklich koplanare Dreiecke (innerhalb eines Millionstels der Teilegröße), die Form ändert sich nicht." },
        { label: "Flächen der STEP / Dreiecke der STL (Median)", value: `${x.facesPct} %`, detail: "Die ebenen Flächen eines Druckteils werden je zu einer; gekrümmte Bereiche behalten ihre Facetten." },
      ],
      factsNote: `STEP-Dateien werden groß: Jede Fläche wird mit ihren Kanten vollständig geschrieben. Der ${x.bar.stlKB}-KB-Teststab (${x.bar.tri} Dreiecke → ${x.bar.faces} Flächen) ergibt ${x.bar.stepMB} MB STEP; ein Scan mit ${x.scan.tri} Dreiecken ${x.scan.stepMB} MB nach ${x.scan.seconds} s. Die 2D-Kopien jeder Kante auf jeder Fläche (40–60 % eines normalen Exports) lassen wir dabei schon weg.`,
      featuresTitle: "Was der Konverter macht",
      features: [
        { title: "Topologie reparieren, Geometrie nicht verändern", text: "Falsch orientierte Dreiecke werden umgedreht, nach innen gekehrte Körper gewendet, haarscharf getrennte Ecken verbunden, Dreiecke ohne Fläche entfernt, Kanten zweier sich berührender Körper getrennt – jeder Punkt wird im Bericht gezählt." },
        { title: "Ebene Bereiche werden eine Fläche", text: "Koplanare Nachbardreiecke werden zusammengefasst, Löcher in einer Fläche bleiben Löcher. Nur echte Ebenen (innerhalb eines Millionstels der Teilegröße), nichts wird plattgedrückt." },
        { title: "Volumenkörper nur, wenn es einer ist", text: "Ein Netz mit Löchern wird als offene Fläche geschrieben, und der Bericht sagt es; es wird nie als Volumenkörper ausgegeben." },
        { title: "Hohlteile behalten ihren Hohlraum", text: "Eine innere Hülle wird zum Hohlraum, der aus dem umgebenden Körper ausgeschnitten wird – das Volumen stimmt weiterhin." },
        { title: "Volumenkontrolle", text: "Zu jeder Umwandlung stehen das Volumen der STL und das der STEP nebeneinander." },
        { title: "Die Datei bleibt bei Ihnen", text: "Läuft in Ihrem Browser, die Seite lädt nichts hoch. Keine Anmeldung, nichts wird gespeichert." },
      ],
      compareTitle: "STEP aus einem Netz oder STEP aus der Quelle",
      compareIntro: "Dasselbe Teil, zwei Arten von STEP:",
      compareHead: ["", "STEP aus einer STL", "STEP aus der CAD-Quelle"],
      compare: [
        ["Eine Bohrung", "Ein Ring aus ebenen Streifen (so viele, wie die STL hatte)", "Eine Zylinderfläche mit exaktem Durchmesser"],
        ["Ebene Flächen", "Je eine ebene Fläche", "Je eine ebene Fläche"],
        ["Bohrung vergrößern", "Nicht möglich – neu zeichnen", "Feature oder Parameter ändern"],
        ["Rundungen", "Reihen schmaler Facetten", "Echte Rundungsflächen"],
        ["Dateigröße", "Groß (auch bei kleinen Teilen MB)", "Klein (einige zehn KB)"],
        ["Geeignet für", "Bohrungen ergänzen, schneiden, Gegenstücke anpassen, CAM-Schruppen", "Alles"],
      ],
      faqTitle: "Häufige Fragen",
      faqs: [
        {
          q: "Wie wandle ich STL in STEP um?",
          a: "Konverter öffnen, STL hineinziehen, den Bericht ansehen und „STEP herunterladen“ klicken. In FreeCAD geht es über die Part-Workbench „Form aus Netz erzeugen“, dann „In Volumenkörper umwandeln“ und den STEP-Export; in Fusion über „Netz einfügen“ und „Netz konvertieren“. Hier müssen Sie nichts installieren und sehen sofort, ob ein Volumenkörper herauskam.",
        },
        {
          q: "Warum wird aus STL in STEP kein richtiges CAD-Modell?",
          a: "Weil eine STL nur Dreiecke enthält: Zylinder sind schon zu einem Ring ebener Flächen geworden, Rundungen zu Reihen schmaler Flächen, Maße und Features wurden nie gespeichert. Eine Umwandlung kann die Dreiecke nur zu einem sauberen Volumenkörper ordnen, nicht die ursprüngliche Konstruktion erraten. Für ein bearbeitbares Modell braucht man die CAD-Datei oder den Quelltext, aus dem das Teil entstand.",
        },
        {
          q: "Öffnet meine CAD-Software die umgewandelte STEP?",
          a: "Ja. Es ist eine normale AP242-Datei, die Fusion, SolidWorks, FreeCAD, Onshape und andere importieren; jede bis 30 MB haben wir mit OpenCascade wieder eingelesen und Körperzahl und Volumen geprüft. Dateien mit zehntausenden Flächen sind in jedem CAD-Programm träge.",
        },
        {
          q: "Warum ist die STEP so viel größer als die STL?",
          a: "Eine STL braucht 50 Byte pro Dreieck; eine STEP schreibt jede Fläche als Ebene, Kantenzug, Kanten und Punkte – in unseren Tests etwa 1,2 bis 1,5 KB pro Fläche. Die ableitbaren 2D-Kopien der Kanten lassen wir weg (40–60 % kleiner als ein normaler Export), große Netze ergeben trotzdem große STEP-Dateien.",
        },
        {
          q: "Kann ich in der umgewandelten STEP eine Bohrung vergrößern?",
          a: "Nein: Die Bohrung ist ein Ring aus ebenen Flächen, kein Zylinder-Feature. Im CAD können Sie die Flächen löschen und neu bohren; einfacher ist es an der Quelle – stammt das Teil aus OpenSCAD oder einem unserer Generatoren, ändern Sie den Parameter und exportieren erneut als STEP.",
        },
        {
          q: "Ist das Ergebnis ein Volumenkörper?",
          a: "Wenn die STL geschlossen ist (jede Kante gehört zu genau zwei Dreiecken), ja – und er besteht die Gültigkeitsprüfung von OpenCascade. Hat die STL Löcher, wird eine offene Fläche geschrieben und der Bericht nennt die Zahl der offenen Kanten; reparieren Sie das Netz zuerst im Slicer oder in Meshmixer.",
        },
        {
          q: "Wie groß darf die STL sein?",
          a: `Bis ${x.maxTriangles} Dreiecke. Organische Netze wie Scans oder Skulpturen haben kaum ebene Flächen – schon einige zehntausend Dreiecke ergeben eine STEP von mehreren zehn MB; vorher zu reduzieren lohnt sich.`,
        },
        { q: "Wird meine STL hochgeladen?", a: "Nein. Die Umwandlung läuft in WebAssembly in Ihrem Browser, auf einem eigenen Ursprung; die Seite hat keinen Upload. Bei uns kommen nur anonyme Zahlen an (Flächen, Dauer), nie die Datei oder ihr Name." },
        { q: "STL in STP oder in STEP – ist das dasselbe?", a: "Ja. .stp und .step sind zwei Endungen desselben Formats (ISO 10303-21); Sie können die heruntergeladene Datei auch in .stp umbenennen." },
      ],
      moreTitle: "Weiterlesen",
      more: {
        openscadToStep: { title: "OpenSCAD to STEP", text: "Eine echte STEP aus dem Quelltext: Zylinder und Bohrungen als echte Flächen. Wer eine .scad hat, wandelt nicht die STL um (Seite auf Englisch)." },
        stepToStl: { title: "STEP in STL umwandeln", text: "Die andere Richtung: STEP ansehen, mit gewählter Genauigkeit vernetzen, auf Dichtheit prüfen." },
        generators: { title: "3D-Druck-Generatoren", text: "Zahnräder, Boxen, Halter und mehr: Parameter online einstellen, direkt als STEP exportieren." },
      },
      footer: {
        home: "Forgent3D (Englisch)",
        stlToStep: "STL in STEP umwandeln",
        stepToStl: "STEP in STL umwandeln",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3D-Druck-Generatoren",
        credit: "Die STEP wird mit Open CASCADE Technology (LGPL 2.1) erzeugt, kompiliert zu WebAssembly; Forgent3D ist mit Open Cascade nicht verbunden.",
        licences: "Lizenzen und Quelltext des verwendeten Builds",
      },
    };
  }

  if (locale === "ja") {
    return {
      toolName: "STL→STEP 変換",
      openTool: "変換ツールを開く",
      title: "STLをSTEPに変換（STL→STP）― 無料・アップロード不要、結果を正直に表示 | Forgent3D",
      description:
        "ブラウザでSTLをSTEPに変換。三角形を溶接し、書き出しの不具合を直し、平らな部分を1枚の面にまとめ、CADで開けるソリッドを組み立てて、何ができたかを表示します。無料・登録不要・アップロードなし。",
      keywords: ["STL STEP 変換", "STLをSTEPに変換", "STL STP 変換", "STL STEP 変換 フリー", "STL STEP 変換 オンライン", "メッシュ ソリッド 変換", "STL ソリッド化", "STL CAD 変換"],
      h1: "STLをSTEPに変換：メッシュがなれる最良の形、ただしそれ以上ではない",
      intro:
        "STLをドロップしてください。三角形を溶接し、書き出しソフトが残した不具合を直し、平らな部分をそれぞれ1枚の平面にまとめて、CADで開けるソリッドを組み立てます――すべてブラウザの中で、ファイルはアップロードしません。そのうえで、何ができたかを表示します：面の数、ソリッドか開いたサーフェスか、体積がSTLと合っているか。",
      cta: "STLを変換する",
      truthTitle: "STL→STEP 変換でできること、できないこと",
      truth:
        "STLは三角形の集まりです。元になった円柱やフィレット、スケッチはファイルに入っておらず、どの変換ツールでも取り戻せません。得られるのは平面で組んだソリッドです。メッシュが平らな所は1枚の平面に、曲がっている所は細い平面の帯になります。Fusion、SolidWorks、FreeCAD、Onshape ではソリッドとして開け、カットやポケット、平面間の計測ができます――ただし穴は帯の輪のままで、直径を変えられる穴ではありません。",
      realStep: "本物の円柱を持つSTEPが必要なら、モデルの元データから書き出してください：",
      realStepScad: "OpenSCAD to STEP（英語）",
      realStepGenerators: "パラメトリック・ジェネレーター（STEP書き出し可）",
      otherWay: "逆方向は",
      otherWayLink: "STEP→STL 変換",
      stepsTitle: "STLをSTEPに変換する手順",
      steps: [
        { title: "変換ツールを開く", text: "登録不要。初回は約8 MBのWebAssemblyを読み込み、ブラウザに保存されます。" },
        { title: "STLをドロップ", text: `バイナリでもASCIIでも、最大${x.maxTriangles}三角形まで。` },
        { title: "レポートを見る", text: "まとめる前後の面数、ソリッドか開いたサーフェスか、STLとSTEPの体積、直した不具合を一つずつ表示します。まとめた平面はビューで確認できます。" },
        { title: "STEPをダウンロード", text: "AP242形式。Fusion、SolidWorks、FreeCAD、Onshape など現行のCADで読み込めます。" },
      ],
      factsTitle: `実際のSTL ${x.files}個でテスト`,
      factsIntro: `テストセット：当社ジェネレーターの印刷検証キットのSTL ${x.generators}個、Prusa i3 MK3 の印刷部品${x.prusa}個（OpenSCADから書き出し）、OpenCascade 付属のサンプルメッシュ${x.samples}個、GitHub上の公開CADプロジェクトのSTL ${x.projects}個。30 MB以下のSTEPはすべて読み戻して確認しました。`,
      facts: [
        { label: "変換できた数", value: `${x.converted} / ${x.files}`, detail: failures.ja },
        { label: "閉じたメッシュが有効なソリッドに", value: `${x.solidsOut} / ${x.closedIn}`, detail: `この${x.solidsOut}個は OpenCascade の妥当性チェックを通り、STEPから読み戻してもボディ数・面数が変わりませんでした。残る${x.failedClosed}個は自己交差しているため、ソリッドと偽らず閉じたサーフェスとして書き出しました。ほかに${x.openIn}個はメッシュ自体に穴があり、開いたサーフェスとして書き出しています。` },
        { label: "STLとSTEPの体積差（最大）", value: `${x.volumePct}%`, detail: "全ソリッド中で最も差が大きかったもの。部品サイズの100万分の1以内で同一平面にある三角形だけをまとめるので、形は変わりません。" },
        { label: "STEPの面数 / STLの三角形数（中央値）", value: `${x.facesPct}%`, detail: "印刷部品の平面はそれぞれ1枚にまとまり、曲面は元の小面のまま残ります。" },
      ],
      factsNote: `STEPファイルは大きくなります。面ごとにエッジまで含めて書き出すためです。${x.bar.stlKB} KBのテスト用バー（${x.bar.tri}三角形 → ${x.bar.faces}面）は${x.bar.stepMB} MBのSTEPに、${x.scan.tri}三角形のスキャンデータは${x.scan.stepMB} MB（書き出し${x.scan.seconds}秒）になりました。これでも、各面上のエッジの2Dコピー（通常の書き出しの40〜60%）は省いています。`,
      featuresTitle: "このツールが行うこと",
      features: [
        { title: "トポロジーだけを直し、形は動かさない", text: "向きが逆の三角形の反転、裏返ったボディの反転、ごくわずかに離れた頂点の結合、面積ゼロの細い三角形の除去、接している2ボディが共有するエッジの分離――どれもレポートに件数を表示します。" },
        { title: "平らな部分は1枚の面に", text: "同一平面の隣り合う三角形をまとめ、面の中の穴は穴のまま残します。本当に平らなもの（部品サイズの100万分の1以内）だけで、曲面をつぶすことはありません。" },
        { title: "ソリッドは本当にソリッドのときだけ", text: "穴のあるメッシュは開いたサーフェスとして書き出し、レポートでそう伝えます。ソリッドと偽ることはありません。" },
        { title: "中空部品の空洞はそのまま", text: "内側のシェルは外側のソリッドからくり抜いた空洞になり、体積も合ったままです。" },
        { title: "体積チェック", text: "変換ごとにSTLの体積とSTEPの体積を並べて表示します。" },
        { title: "ファイルは手元から出ない", text: "ブラウザの中で動き、ページにアップロード機能はありません。登録不要、何も保存しません。" },
      ],
      compareTitle: "メッシュから作ったSTEPと元データから書き出したSTEP",
      compareIntro: "同じ部品でも、STEPの中身はこれだけ違います：",
      compareHead: ["", "STLから作ったSTEP", "CADの元データから書き出したSTEP"],
      compare: [
        ["穴", "平らな帯の輪（STLにあった分割数のまま）", "正確な直径の円柱面1枚"],
        ["平面", "それぞれ1枚の平面", "それぞれ1枚の平面"],
        ["穴径の変更", "できない――描き直す", "フィーチャーやパラメータを変更"],
        ["フィレット", "細い小面の列", "本物の丸み面"],
        ["ファイルサイズ", "大きい（小さな部品でも数MB）", "小さい（数十KB）"],
        ["向いている用途", "穴の追加、カット、相手部品の設計、CAMの荒加工", "すべて"],
      ],
      faqTitle: "よくある質問",
      faqs: [
        {
          q: "STLをSTEPに変換するには？",
          a: "変換ツールを開き、STLをドロップして、レポートを確認し「STEPをダウンロード」を押すだけです。FreeCADならPartワークベンチの「メッシュからシェイプを作成」→「ソリッドに変換」→STEPで書き出し、Fusionなら「メッシュを挿入」して「メッシュを変換」。ここではインストール不要で、ソリッドになったかどうかもすぐ分かります。",
        },
        {
          q: "STLをSTEPにしても本物のCADモデルにならないのはなぜ？",
          a: "STLには三角形しかないからです。円柱はすでに平面の輪に、フィレットは細い面の列になり、寸法やフィーチャーは最初から保存されていません。変換でできるのは三角形をきれいなソリッドに整えることまでで、元の設計を推測することはできません。編集できるモデルが必要なら、その部品を作ったCADファイルやソースに戻る必要があります。",
        },
        {
          q: "変換したSTEPはCADソフトで開けますか？",
          a: "開けます。標準的なAP242ファイルで、Fusion、SolidWorks、FreeCAD、Onshape などが読み込めます。私たちは30 MB以下のSTEPをすべて OpenCascade で読み戻し、ボディ数と体積を確認しました。面数が数万になるファイルは、どのCADでも動作が重くなります。",
        },
        {
          q: "STEPがSTLよりずっと大きいのはなぜ？",
          a: "STLは三角形1つにつき50バイトですが、STEPは面ごとに平面・エッジループ・エッジ・頂点を書くため、今回のテストでは1面あたり約1.2〜1.5 KBかかりました。導出できるエッジの2Dコピーは省いており（通常の書き出しより40〜60%小さい）、それでも大きなメッシュのSTEPは大きくなります。",
        },
        {
          q: "変換したSTEPで穴の大きさを変えられますか？",
          a: "変えられません。穴は平面の輪で、円柱のフィーチャーではないからです。CADでその面を削除して穴を開け直すことはできますが、元データで直す方が簡単です。部品が OpenSCAD や当社のジェネレーター由来なら、パラメータを変えてSTEPを書き出し直してください。",
        },
        {
          q: "結果はソリッドになりますか？",
          a: "STLが閉じていれば（どのエッジもちょうど2つの三角形に共有されていれば）ソリッドになり、OpenCascade の妥当性チェックも通ります。STLに穴がある場合は開いたサーフェスとして書き出し、開いたエッジの数をレポートに表示します。先にスライサーや Meshmixer でメッシュを修復してから変換してください。",
        },
        {
          q: "どのくらい大きなSTLまで変換できますか？",
          a: `${x.maxTriangles}三角形までです。スキャンデータや彫刻のような有機的なメッシュは平面がほとんどないため、数万三角形でも数十MBのSTEPになります。先にポリゴン数を減らすのがおすすめです。`,
        },
        { q: "STLファイルはアップロードされますか？", a: "されません。変換はブラウザ内の独立したオリジンで動くWebAssemblyで行い、ページにアップロード機能はありません。私たちに届くのは匿名の数値（面数、所要時間）だけで、ファイルやファイル名は届きません。" },
        { q: "STL→STPとSTL→STEPは同じですか？", a: "同じです。.stp と .step は同じ形式（ISO 10303-21）の2つの拡張子で、ダウンロードしたファイルを .stp に名前変更しても構いません。" },
      ],
      moreTitle: "関連ページ",
      more: {
        openscadToStep: { title: "OpenSCAD to STEP", text: "ソースから本物のSTEPを。円柱や穴が本物の曲面になります。.scad があるならSTLから変換しないでください（英語ページ）。" },
        stepToStl: { title: "STEP→STL 変換", text: "逆方向。STEPを表示し、選んだ精度でSTLにし、メッシュが閉じているかを確認します。" },
        generators: { title: "3Dプリント用ジェネレーター", text: "平歯車、ボックス、ブラケットなど。パラメータを調整してSTEPで書き出せます。" },
      },
      footer: {
        home: "Forgent3D（英語）",
        stlToStep: "STL→STEP 変換",
        stepToStl: "STEP→STL 変換",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3Dプリント用ジェネレーター",
        credit: "STEPは Open CASCADE Technology（LGPL 2.1）をWebAssemblyにコンパイルして生成しています。Forgent3D は Open Cascade 社とは関係ありません。",
        licences: "使用しているビルドのライセンスとソース",
      },
    };
  }

  return {
    toolName: "STL to STEP",
    openTool: "Open the converter",
    title: "STL to STEP Converter Online (STL to STP) — Free, Honest, No Upload | Forgent3D",
    description:
      "Convert STL to STEP in your browser: triangles welded, export errors repaired, flat areas merged into faces, rebuilt as a solid your CAD tool opens — and a report of what came out. Free, no sign-up, never uploaded.",
    keywords: ["stl to step", "stl to step converter", "convert stl to step", "stl to stp", "stl to step online", "stl to step free", "mesh to step", "stl to solid"],
    h1: "STL to STEP: the best a mesh can become, and no more",
    intro:
      "Drop an STL. The converter welds the triangles, repairs what the exporter got wrong, merges every flat area into one face and builds a solid your CAD tool can open — in your browser, without uploading the file. Then it tells you what came out: how many faces, solid or open surface, and whether the volume still matches the STL.",
    cta: "Convert an STL",
    truthTitle: "What STL to STEP can and cannot do",
    truth:
      "An STL is triangles. The cylinders, fillets and sketch the part was made from are not in it, and no converter can put them back. What you get is a faceted solid: flat faces where the mesh was flat, narrow flat strips where it was curved. Fusion, SolidWorks, FreeCAD and Onshape open it as a solid you can cut, pocket and measure between flat faces — but a hole is still a ring of strips, not a hole whose diameter you can change.",
    realStep: "Need a STEP with true cylinders? Export it from the model's source:",
    realStepScad: "OpenSCAD to STEP",
    realStepGenerators: "Parametric generators (STEP export)",
    otherWay: "Going the other way?",
    otherWayLink: "STEP to STL",
    stepsTitle: "How to convert STL to STEP",
    steps: [
      { title: "Open the converter", text: "No sign-up. The first visit downloads about 8 MB of WebAssembly, which your browser keeps." },
      { title: "Drop the STL", text: `Binary or ASCII, up to ${x.maxTriangles} triangles.` },
      { title: "Read the report", text: "Faces before and after merging, solid or open surface, the STL's and the STEP's volume, and what was repaired — item by item. The merged faces show in the view." },
      { title: "Download the STEP", text: "AP242, which Fusion, SolidWorks, FreeCAD, Onshape and other current CAD tools import." },
    ],
    factsTitle: `Tested on ${x.files} real STL files`,
    factsIntro: `The set: ${x.generators} STLs from our generators' print verification kit, ${x.prusa} printed parts of the Prusa i3 MK3 (exported from OpenSCAD), ${x.samples} OpenCascade sample meshes and ${x.projects} STLs from public CAD projects on GitHub. Every STEP up to 30 MB was read back to check it.`,
    facts: [
      { label: "converted", value: `${x.converted} / ${x.files}`, detail: failures.en },
      { label: "closed meshes that became valid solids", value: `${x.solidsOut} / ${x.closedIn}`, detail: `These ${x.solidsOut} pass OpenCascade's validity check and read back from the STEP with the same bodies and faces. The other ${x.failedClosed} intersect themselves and were written as closed surfaces rather than called solids; ${x.openIn} more meshes had holes and were written as open surfaces.` },
      { label: "largest volume difference, STL to STEP", value: `${x.volumePct}%`, detail: "Over every solid. Only truly coplanar triangles are merged (within a millionth of the part's size), so the shape does not move." },
      { label: "STEP faces per STL triangle (median)", value: `${x.facesPct}%`, detail: "A printed part's flat faces become one face each; curved areas keep their facets." },
    ],
    factsNote: `STEP files are big: each face is written out in full, with its edges. The ${x.bar.stlKB} KB test bar (${x.bar.tri} triangles → ${x.bar.faces} faces) makes a ${x.bar.stepMB} MB STEP; a ${x.scan.tri}-triangle scan makes ${x.scan.stepMB} MB in ${x.scan.seconds} s. That is already without the 2D copy of every edge on every face (40–60% of a plain export).`,
    featuresTitle: "What the converter does",
    features: [
      { title: "Repairs the topology, never moves the geometry", text: "Triangles wound the wrong way are turned around, inside-out bodies flipped, corners a hair apart joined, zero-area slivers taken out, edges shared by two touching bodies split — each one counted in the report." },
      { title: "Flat areas become one face", text: "Coplanar neighbouring triangles merge, and holes in a face stay holes. Only true planes (within a millionth of the part's size): nothing curved is flattened." },
      { title: "A solid only when it is one", text: "A mesh with holes is written as an open surface and the report says so; it is never labelled a solid." },
      { title: "Hollow parts keep their hollows", text: "An inner shell becomes a cavity cut from the solid around it, and the volume still matches." },
      { title: "A volume check", text: "Every conversion shows the STL's volume next to the STEP's." },
      { title: "The file stays with you", text: "It runs in your browser; the page uploads nothing. No sign-up, nothing stored." },
    ],
    compareTitle: "A STEP from a mesh, or a STEP from the source",
    compareIntro: "The same part, two kinds of STEP:",
    compareHead: ["", "STEP made from an STL", "STEP exported from the CAD source"],
    compare: [
      ["A hole", "A ring of flat strips (as many as the STL had)", "One cylindrical face with its exact diameter"],
      ["Flat faces", "One planar face each", "One planar face each"],
      ["Make a hole bigger", "Not possible — redraw it", "Change the feature or parameter"],
      ["Fillets", "Rows of narrow facets", "True rounded faces"],
      ["File size", "Large (MB even for small parts)", "Small (tens of KB)"],
      ["Good for", "Adding holes, cutting, designing mating parts around it, CAM roughing", "Everything"],
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "How do I convert STL to STEP?",
        a: "Open the converter, drop the STL, read the report and click Download STEP. In FreeCAD the same takes the Part workbench's Create shape from mesh, then Convert to solid, then a STEP export; in Fusion, Insert Mesh and Convert Mesh. Here nothing has to be installed, and you see straight away whether you got a solid.",
      },
      {
        q: "Why can't converting STL to STEP give me a real CAD model?",
        a: "Because an STL holds only triangles: the cylinders have already become rings of flat faces, the fillets rows of narrow ones, and the dimensions and features were never stored. A conversion can only tidy the triangles into a clean solid; it cannot guess the original design. For an editable model you need the CAD file or source code the part was made from.",
      },
      {
        q: "Will my CAD software open the converted STEP?",
        a: "Yes. It is a standard AP242 file, which Fusion, SolidWorks, FreeCAD, Onshape and others import; we read every one up to 30 MB back with OpenCascade and checked its bodies and volume. Files with tens of thousands of faces are sluggish in any CAD tool.",
      },
      {
        q: "Why is the STEP so much bigger than the STL?",
        a: "An STL takes 50 bytes per triangle; a STEP writes every face as a plane, an edge loop, edges and vertices — about 1.2 to 1.5 KB per face in our tests. We leave out the 2D edge copies importers can derive (40–60% smaller than a plain export), and a big mesh still makes a big STEP.",
      },
      {
        q: "Can I change the size of a hole in the converted STEP?",
        a: "No: the hole is a ring of flat faces, not a cylinder feature. In CAD you can delete those faces and drill again; it is easier at the source — if the part comes from OpenSCAD or one of our generators, change the parameter and export the STEP again.",
      },
      {
        q: "Is the result a solid?",
        a: "When the STL is closed (every edge shared by exactly two triangles), yes, and it passes OpenCascade's validity check. When the STL has holes, it is written as an open surface and the report gives the number of open edges; repair the mesh in your slicer or Meshmixer first.",
      },
      {
        q: "What is the largest STL I can convert?",
        a: `${x.maxTriangles} triangles. Organic meshes — scans, sculptures — have almost no flat faces to merge, so even a few tens of thousands of triangles make a STEP of tens of megabytes; decimate first.`,
      },
      { q: "Is my STL uploaded?", a: "No. The conversion runs in WebAssembly in your browser, on an origin of its own; the page has no upload. All that reaches us are anonymous counts (faces, time taken), never the file or its name." },
      { q: "STL to STP or STL to STEP — the same?", a: "Yes. .stp and .step are two extensions of one format (ISO 10303-21); you can rename the download to .stp." },
    ],
    moreTitle: "Related",
    more: {
      openscadToStep: { title: "OpenSCAD to STEP", text: "A real STEP from source code: cylinders and holes as true surfaces. If you have the .scad, don't convert the STL." },
      stepToStl: { title: "STEP to STL", text: "The other direction: view a STEP, mesh it at the accuracy you choose, check the mesh is closed." },
      generators: { title: "3D print generators", text: "Gears, boxes, brackets and more: set the parameters online and export STEP directly." },
    },
    footer: {
      home: "Forgent3D home",
      stlToStep: "STL to STEP",
      stepToStl: "STEP to STL",
      openscadToStep: "OpenSCAD to STEP",
      generators: "3D print generators",
      credit: "The STEP is written by Open CASCADE Technology (LGPL 2.1), compiled to WebAssembly; Forgent3D is not affiliated with Open Cascade.",
      licences: "Licences and source of the build we run",
    },
  };
}
