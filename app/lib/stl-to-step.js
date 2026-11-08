// STL to STEP: /[locale]/stl-to-step. "stl to step / stl to step converter / convert stl to step / stl to stp",
// "stl in step umwandeln", "STL STEP 変換": someone holding a mesh who needs a STEP for a CAD tool. Since 11-08 (platform
// PR #131) the converter recognises the surfaces in the browser — planes, cylinders, cones, spheres, tori, extruded
// profiles, fillets, free-form faces — checks the STEP before handing it over, and falls back to planar faces when that
// fails; free, no sign-up, nothing uploaded. Numbers from RECOGNITION (lib/step-tools.js). The tool is app.forgent3d.com/convert
// (lib/step-tools.js). Copy for en, zh, de, ja.

import { RECOGNITION, formatNumber, stepToolLinks } from "./step-tools";
import { stlVsStepCard } from "./stl-vs-step";

export const STL_TO_STEP_SLUG = "stl-to-step";

export function stlToStepMoreCards(locale) {
  const t = getStlToStepCopy(locale);
  const links = stepToolLinks(locale);
  return [
    { href: links.openscadToStep, title: t.more.openscadToStep.title, text: t.more.openscadToStep.text },
    { href: links.stepToStl, title: t.more.stepToStl.title, text: t.more.stepToStl.text },
    { href: links.generators, title: t.more.generators.title, text: t.more.generators.text },
    stlVsStepCard(locale),
  ].filter(Boolean);
}

export function getStlToStepCopy(locale) {
  const n = (v, d = 0) => formatNumber(locale, v, d);
  const e = RECOGNITION.example;
  const x = {
    maxRecognise: n(RECOGNITION.maxTriangles),
    maxTriangles: n(2_000_000),
    tri: n(e.triangles),
    faces: n(e.faces),
    cyl: n(e.cylinders),
    planes: n(e.planes),
    extr: n(e.extrusions),
    facets: n(e.facets),
    vol: locale === "de" ? e.volumePct.replace(".", ",") : e.volumePct,
    sec: n(e.seconds),
  };

  if (locale === "zh") {
    return {
      toolName: "STL 转 STEP",
      openTool: "打开转换器",
      title: "STL 转 STEP 在线（STL 转 STP）—— 还原真实曲面，免费、不用注册、不上传 | Forgent3D",
      description:
        "在浏览器里把 STL 转成带真实 CAD 曲面的 STEP：孔还原成有直径的圆柱，平面、圆锥、球面、圆环面、圆角和自由曲面都识别出来。转出的实体先核对再交给你。免费、不用注册、文件不上传。",
      keywords: ["STL 转 STEP", "stl 转 step 在线", "stl 转 stp", "stl 转换 step", "stl 转 step 曲面", "网格转实体", "stl 转实体", "stl 转 step 免费"],
      h1: "STL 转 STEP：还原真实曲面，孔回来是圆柱",
      intro:
        "把 STL 拖进来。转换器从三角面里识别出零件原来的曲面——平面、圆柱、圆锥、球面、圆环面、拉伸面、圆角和自由曲面——拼成 CAD 软件能打开的实体，核对过再给你下载 STEP。全在你的浏览器里完成，文件不上传，不用注册。",
      cta: "转换 STL",
      truthTitle: "转出来的是什么",
      truth:
        "STL 只有三角面。转换器在三角面里找出零件原来的曲面：平的区域还原成平面，孔和凸台还原成有确定直径的圆柱面，圆角、锥面、球面也一样；实在找不到曲面的地方，保留成小平面。结果是一个实体，Fusion、SolidWorks、FreeCAD、Onshape 都能打开、测量、切削和打孔。原设计的特征树和草图从来不在 STL 里，转不回来：要改尺寸的参数化模型，还是从源头导出。",
      realStep: "要可以改参数的模型，从源头导出 STEP：",
      realStepScad: "OpenSCAD 转 STEP",
      realStepGenerators: "参数化生成器（可导出 STEP）",
      otherWay: "要反过来？",
      otherWayLink: "STEP 转 STL",
      stepsTitle: "STL 怎么转 STEP",
      steps: [
        { title: "打开转换器", text: "不用注册。第一次访问下载约 10 MB 的 WebAssembly，浏览器缓存后下次直接用。" },
        { title: "拖入 STL", text: `二进制或 ASCII 都行。${x.maxRecognise} 个三角面以内做曲面识别：小零件几秒，大零件一两分钟。` },
        { title: "看报告", text: "按曲面类型列出面数（多少个圆柱、平面……）、是不是实体、STL 与 STEP 的体积，左边视图里转动查看。" },
        { title: "下载 STEP", text: "Fusion、SolidWorks、FreeCAD、Onshape 等 CAD 软件都能导入。" },
      ],
      factsTitle: "一个零件的实测",
      factsIntro: `我们自己生成器的一个零件（一块带六个圆孔和刻字的板），${x.tri} 个三角面，在 Chrome 里转换：`,
      facts: [
        { label: "STEP 面数", value: x.faces, detail: `${x.cyl} 个圆柱面（六个孔）、${x.planes} 个平面、${x.extr} 个拉伸面（刻的字），另有 ${x.facets} 个没有曲面能拟合的小平面。` },
        { label: "结果", value: "1 个实体", detail: "通过 OpenCascade 的有效性检查。" },
        { label: "STL 与 STEP 的体积差", value: `${x.vol}%`, detail: "曲面贴着三角面的弦，而不是三角面本身，所以会差一点；超过 1% 的结果不会交给你。" },
        { label: "用时", value: `${x.sec} 秒`, detail: "含第一次启动转换器。" },
      ],
      factsNote: "",
      featuresTitle: "转换器做了什么",
      features: [
        { title: "识别真实曲面", text: "平面、圆柱、圆锥、球面、圆环面，以及拉伸面、圆角和自由曲面；孔回来是有直径的圆柱，不是一圈窄条。" },
        { title: "核对过才交给你", text: "转出的 STEP 要读得回来、实体数对、通过有效性检查、体积和 STL 相差不超过 1%，四项都过才用。" },
        { title: "不行就照实说", text: `超过 ${x.maxRecognise} 个三角面，或识别没得到可用的实体时，改成按平面重建（共面三角面合成平面），并在报告里说明原因。` },
        { title: "修好导出的毛病", text: "方向反了的三角面翻正、里外翻了的实体翻过来、相差极小的顶点合上、零面积的细长三角面去掉，都在报告里计数。" },
        { title: "同一个文件，同一个结果", text: "转换不受电脑快慢影响：同一个 STL 在任何电脑上转出的 STEP 都一样。" },
        { title: "文件不出浏览器", text: "在你的浏览器里运行，页面没有上传功能。不用注册，不保存任何东西。" },
      ],
      compareTitle: "转出来的 STEP 和从源头导出的 STEP",
      compareIntro: "同一个零件，两种 STEP 的差别：",
      compareHead: ["", "由 STL 转出的 STEP", "从 CAD 源头导出的 STEP"],
      compare: [
        ["一个孔", "一个圆柱面，直径按网格还原", "一个圆柱面，直径就是设计值"],
        ["平面", "每块一个平面", "每块一个平面"],
        ["圆角、自由曲面", "大多识别出来，个别地方保留小平面", "真正的曲面"],
        ["改孔的大小", "在 CAD 里用直接建模改面", "改特征或参数"],
        ["特征树和草图", "没有", "有"],
        ["适合", "进 CAD 测量、改面、开孔、做配合件，CNC 加工", "所有用途"],
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "STL 怎么转成 STEP？", a: "打开转换器，拖入 STL，看一眼报告，点「下载 STEP」。转换器会识别出平面、圆柱等曲面，并核对体积和有效性。在 FreeCAD 或 Fusion 里也能把网格转成实体，但得到的是一个三角面一个面，孔不是圆柱。" },
        { q: "转出来的孔是圆柱吗？", a: `是。孔和凸台还原成有确定直径的圆柱面，在 CAD 里可以直接选中、量直径、做配合。上面那块板的六个孔都回来了。` },
        { q: "STL 转 STEP 能得到原来的 CAD 模型吗？", a: "曲面能还原，原来的特征树、草图和参数不能：它们从来没有存进 STL。转出的实体可以在 CAD 里用直接建模改面、开孔；要改参数的模型，得回到做这个零件的 CAD 文件或源码。" },
        { q: "CAD 软件能打开转出来的 STEP 吗？", a: "能。Fusion、SolidWorks、FreeCAD、Onshape 等都能导入；交给你之前，我们已经用 OpenCascade 把它读回来，核对过实体数、有效性和体积。" },
        { q: "转出来的是实体吗？", a: "STL 封闭（每条边正好两个三角面）就是实体。STL 有洞时写成开放曲面，报告里会说有多少条开口边；先用切片软件或 Meshmixer 修好网格再转，就能得到实体。" },
        { q: "最大能转多大的 STL？", a: `${x.maxRecognise} 个三角面以内做曲面识别；再大的按平面重建，最多 ${x.maxTriangles} 个三角面。扫描件这类网格先减面，识别更快也更准。` },
        { q: "要多久？", a: "小零件几秒，一万多个三角面的零件半分钟左右，自由曲面多的大零件一两分钟。转换时可以随时停止。" },
        { q: "STL 文件会被上传吗？", a: "不会。转换在你浏览器里的 WebAssembly 中完成，页面没有上传。我们只收到匿名计数（面数、用时），收不到文件和文件名。" },
        { q: "STL 转 STP 和转 STEP 一样吗？", a: "一样。.stp 和 .step 是同一种格式（ISO 10303-21）的两个扩展名，下载后把扩展名改成 .stp 也可以。" },
      ],
      moreTitle: "相关",
      more: {
        openscadToStep: { title: "OpenSCAD 转 STEP", text: "从源码出可以改参数的 STEP。手里有 .scad 就别从 STL 转。" },
        stepToStl: { title: "STEP 转 STL", text: "反方向：查看 STEP，按选定精度转成 STL，检查网格是否封闭。" },
        generators: { title: "3D 打印生成器", text: "齿轮、盒子、支架等参数化零件，在线调参数，直接导出 STEP。" },
      },
      footer: {
        home: "Forgent3D 首页",
        stlToStep: "STL 转 STEP",
        stepToStl: "STEP 转 STL",
        openscadToStep: "OpenSCAD 转 STEP",
        generators: "3D 打印生成器",
        credit: "曲面识别和 STEP 由 Forgent3D 自己的转换器完成；读回核对用 Open CASCADE Technology（LGPL 2.1）。都编译成 WebAssembly 在浏览器里运行。",
        licences: "我们运行的构建：许可证与源码",
      },
    };
  }

  if (locale === "de") {
    return {
      toolName: "STL in STEP umwandeln",
      openTool: "Konverter öffnen",
      title: "STL in STEP umwandeln – mit echten CAD-Flächen, kostenlos, ohne Anmeldung, ohne Upload | Forgent3D",
      description:
        "STL im Browser in STEP mit echten CAD-Flächen umwandeln: Bohrungen kommen als Zylinder mit Durchmesser zurück, dazu Ebenen, Kegel, Kugeln, Tori, Rundungen und Freiformflächen. Der Volumenkörper wird geprüft, bevor Sie ihn bekommen. Kostenlos, ohne Anmeldung, ohne Upload.",
      keywords: ["STL in STEP umwandeln", "STL in STEP konvertieren", "STL zu STEP", "STL in STP umwandeln", "STL STEP Konverter", "Netz in Volumenkörper", "STL in STEP umwandeln kostenlos", "STL in CAD umwandeln"],
      h1: "STL in STEP umwandeln: echte Flächen, Bohrungen als Zylinder",
      intro:
        "Ziehen Sie eine STL hierher. Der Konverter erkennt in den Dreiecken die ursprünglichen Flächen des Teils – Ebenen, Zylinder, Kegel, Kugeln, Tori, Extrusionen, Rundungen und Freiformflächen –, baut daraus einen Volumenkörper, den Ihre CAD-Software öffnet, und prüft ihn, bevor Sie die STEP herunterladen. Alles im Browser, ohne Upload, ohne Anmeldung.",
      cta: "STL umwandeln",
      truthTitle: "Was dabei herauskommt",
      truth:
        "Eine STL besteht nur aus Dreiecken. Der Konverter findet darin die Flächen, aus denen das Teil gemacht war: Ebene Bereiche werden Ebenen, Bohrungen und Zapfen Zylinder mit festem Durchmesser, ebenso Rundungen, Kegel und Kugeln; wo keine Fläche passt, bleiben kleine ebene Facetten. Das Ergebnis ist ein Volumenkörper, den Fusion, SolidWorks, FreeCAD und Onshape öffnen, vermessen, schneiden und bohren. Feature-Baum und Skizzen der ursprünglichen Konstruktion standen nie in der STL und kommen nicht zurück: Für ein parametrisches Modell exportieren Sie aus der Quelle.",
      realStep: "Ein Modell mit Parametern? Exportieren Sie die STEP aus der Quelle:",
      realStepScad: "OpenSCAD to STEP",
      realStepGenerators: "Parametrische Generatoren (mit STEP-Export)",
      otherWay: "Andersherum?",
      otherWayLink: "STEP in STL umwandeln",
      stepsTitle: "So wandeln Sie STL in STEP um",
      steps: [
        { title: "Konverter öffnen", text: "Ohne Anmeldung. Der erste Besuch lädt etwa 10 MB WebAssembly, die der Browser behält." },
        { title: "STL hineinziehen", text: `Binär oder ASCII. Bis ${x.maxRecognise} Dreiecke werden Flächen erkannt: kleine Teile in Sekunden, große in ein, zwei Minuten.` },
        { title: "Bericht lesen", text: "Flächen nach Art (wie viele Zylinder, Ebenen …), Volumenkörper oder offene Fläche, Volumen von STL und STEP; links das Teil zum Drehen." },
        { title: "STEP herunterladen", text: "Fusion, SolidWorks, FreeCAD, Onshape und andere CAD-Programme importieren sie." },
      ],
      factsTitle: "Ein Teil, gemessen",
      factsIntro: `Ein Teil aus unseren eigenen Generatoren (eine Platte mit sechs Bohrungen und Gravur), ${x.tri} Dreiecke, in Chrome umgewandelt:`,
      facts: [
        { label: "Flächen in der STEP", value: x.faces, detail: `${x.cyl} Zylinder (die sechs Bohrungen), ${x.planes} Ebenen, ${x.extr} Extrusionen (die Gravur) und ${x.facets} kleine Facetten, wo keine Fläche passte.` },
        { label: "Ergebnis", value: "1 Volumenkörper", detail: "Besteht die Gültigkeitsprüfung von OpenCascade." },
        { label: "Volumenunterschied STL → STEP", value: `${x.vol} %`, detail: "Die Flächen liegen auf den Sehnen der Dreiecke, nicht auf den Dreiecken; ein Ergebnis über 1 % wird nicht ausgegeben." },
        { label: "Dauer", value: `${x.sec} s`, detail: "Einschließlich des ersten Starts des Konverters." },
      ],
      factsNote: "",
      featuresTitle: "Was der Konverter macht",
      features: [
        { title: "Echte Flächen erkennen", text: "Ebenen, Zylinder, Kegel, Kugeln, Tori sowie Extrusionen, Rundungen und Freiformflächen; eine Bohrung kommt als Zylinder mit Durchmesser zurück, nicht als Ring aus Streifen." },
        { title: "Geprüft, bevor Sie ihn bekommen", text: "Die STEP muss sich zurücklesen lassen, die richtige Zahl Volumenkörper haben, gültig sein und im Volumen höchstens 1 % von der STL abweichen." },
        { title: "Ehrlich, wenn es nicht geht", text: `Über ${x.maxRecognise} Dreiecken, oder wenn die Erkennung keinen brauchbaren Körper ergibt, wird mit ebenen Flächen aufgebaut, und der Bericht sagt warum.` },
        { title: "Exportfehler repariert", text: "Falsch orientierte Dreiecke umgedreht, umgestülpte Körper gewendet, fast gleiche Ecken verbunden, Splitter ohne Fläche entfernt – im Bericht gezählt." },
        { title: "Gleiche Datei, gleiches Ergebnis", text: "Die Umwandlung hängt nicht von der Geschwindigkeit des Rechners ab: Dieselbe STL ergibt überall dieselbe STEP." },
        { title: "Die Datei bleibt bei Ihnen", text: "Läuft in Ihrem Browser; die Seite lädt nichts hoch. Ohne Anmeldung, nichts gespeichert." },
      ],
      compareTitle: "STEP aus der STL oder STEP aus der Quelle",
      compareIntro: "Dasselbe Teil, zwei Arten von STEP:",
      compareHead: ["", "STEP aus einer STL", "STEP aus der CAD-Quelle"],
      compare: [
        ["Eine Bohrung", "Ein Zylinder, Durchmesser aus dem Netz", "Ein Zylinder, Durchmesser wie konstruiert"],
        ["Ebene Flächen", "Je eine Ebene", "Je eine Ebene"],
        ["Rundungen, Freiform", "Meist erkannt, vereinzelt Facetten", "Echte Flächen"],
        ["Bohrung vergrößern", "Im CAD per Direktmodellierung", "Feature oder Parameter ändern"],
        ["Feature-Baum und Skizzen", "Keine", "Vorhanden"],
        ["Geeignet für", "Messen, Flächen ändern, Bohren, Gegenstücke, CNC", "Alles"],
      ],
      faqTitle: "Häufige Fragen",
      faqs: [
        { q: "Wie wandle ich STL in STEP um?", a: "Konverter öffnen, STL hineinziehen, Bericht ansehen, „STEP herunterladen“ klicken. Der Konverter erkennt Ebenen, Zylinder und weitere Flächen und prüft Volumen und Gültigkeit. FreeCAD und Fusion machen aus einem Netz ebenfalls einen Körper, aber mit einer Fläche pro Dreieck, und eine Bohrung ist dann kein Zylinder." },
        { q: "Ist eine Bohrung danach ein Zylinder?", a: "Ja. Bohrungen und Zapfen kommen als Zylinder mit festem Durchmesser zurück, die Sie im CAD auswählen, vermessen und für Passungen nutzen können. Bei der Platte oben kamen alle sechs Bohrungen zurück." },
        { q: "Bekomme ich aus STL in STEP das ursprüngliche CAD-Modell zurück?", a: "Die Flächen ja, Feature-Baum, Skizzen und Parameter nicht: Sie standen nie in der STL. Den Körper können Sie im CAD per Direktmodellierung ändern und bohren; für ein parametrisches Modell braucht man die CAD-Datei oder den Quelltext." },
        { q: "Öffnet meine CAD-Software die STEP?", a: "Ja. Fusion, SolidWorks, FreeCAD, Onshape und andere importieren sie; bevor Sie sie bekommen, haben wir sie mit OpenCascade zurückgelesen und Körper, Gültigkeit und Volumen geprüft." },
        { q: "Ist das Ergebnis ein Volumenkörper?", a: "Wenn die STL geschlossen ist (jede Kante gehört zu genau zwei Dreiecken), ja. Hat die STL Löcher, wird sie als offene Fläche geschrieben, und der Bericht nennt die offenen Kanten; reparieren Sie das Netz vorher im Slicer oder in Meshmixer." },
        { q: "Wie groß darf die STL sein?", a: `Bis ${x.maxRecognise} Dreiecke werden Flächen erkannt; größere werden mit ebenen Flächen aufgebaut, bis ${x.maxTriangles} Dreiecke. Scans vorher reduzieren: Die Erkennung wird schneller und genauer.` },
        { q: "Wie lange dauert es?", a: "Kleine Teile ein paar Sekunden, ein Teil mit gut zehntausend Dreiecken etwa eine halbe Minute, große mit viel Freiform ein, zwei Minuten. Sie können jederzeit abbrechen." },
        { q: "Wird meine STL hochgeladen?", a: "Nein. Die Umwandlung läuft als WebAssembly in Ihrem Browser; die Seite hat keinen Upload. Bei uns kommen nur anonyme Zahlen an (Flächen, Dauer), nie die Datei oder ihr Name." },
        { q: "STL in STP oder STL in STEP – dasselbe?", a: "Ja. .stp und .step sind zwei Endungen desselben Formats (ISO 10303-21); Sie können die Datei in .stp umbenennen." },
      ],
      moreTitle: "Weiterlesen",
      more: {
        openscadToStep: { title: "OpenSCAD to STEP", text: "Eine STEP mit Parametern aus dem Quelltext. Wer eine .scad hat, wandelt nicht die STL um (Seite auf Englisch)." },
        stepToStl: { title: "STEP in STL umwandeln", text: "Die andere Richtung: STEP ansehen, mit gewählter Genauigkeit vernetzen, auf Dichtheit prüfen." },
        generators: { title: "3D-Druck-Generatoren", text: "Zahnräder, Boxen, Halter und mehr: Parameter online einstellen, direkt als STEP exportieren." },
      },
      footer: {
        home: "Forgent3D (Englisch)",
        stlToStep: "STL in STEP umwandeln",
        stepToStl: "STEP in STL umwandeln",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3D-Druck-Generatoren",
        credit: "Flächenerkennung und STEP: der eigene Konverter von Forgent3D; zurückgelesen und geprüft mit Open CASCADE Technology (LGPL 2.1). Beides läuft als WebAssembly im Browser.",
        licences: "Lizenzen und Quelltext des verwendeten Builds",
      },
    };
  }

  if (locale === "ja") {
    return {
      toolName: "STL→STEP 変換",
      openTool: "変換ツールを開く",
      title: "STLをSTEPに変換（STL→STP）― 本物のCAD曲面に、無料・登録不要・アップロード不要 | Forgent3D",
      description:
        "ブラウザでSTLを本物のCAD曲面を持つSTEPに変換。穴は直径のある円柱に戻り、平面、円錐、球、トーラス、フィレット、自由曲面も認識します。ソリッドは確認してからお渡しします。無料・登録不要・アップロードなし。",
      keywords: ["STL STEP 変換", "STLをSTEPに変換", "STL STP 変換", "STL STEP 変換 フリー", "STL STEP 変換 オンライン", "メッシュ ソリッド 変換", "STL ソリッド化", "STL CAD 変換"],
      h1: "STLをSTEPに変換：本物の曲面、穴は円柱に戻る",
      intro:
        "STLをドロップしてください。三角形の中から部品の元の曲面――平面、円柱、円錐、球、トーラス、押し出し面、フィレット、自由曲面――を見つけ出し、CADで開けるソリッドに組み立て、確認してからSTEPをダウンロードできるようにします。すべてブラウザの中で、アップロードも登録も不要です。",
      cta: "STLを変換する",
      truthTitle: "何ができるのか",
      truth:
        "STLは三角形の集まりです。変換ツールはその中から部品の元の曲面を見つけます。平らな部分は平面に、穴やボスは直径の決まった円柱に、フィレットや円錐、球も同様に戻ります。合う曲面がない所は小さな平面のまま残ります。結果はソリッドで、Fusion、SolidWorks、FreeCAD、Onshape で開いて計測、カット、穴あけができます。元の設計のフィーチャーツリーやスケッチはSTLに入ったことがなく、戻りません。パラメトリックなモデルが必要なら元データから書き出してください。",
      realStep: "パラメータで変えられるモデルなら、元データからSTEPを書き出してください：",
      realStepScad: "OpenSCAD to STEP（英語）",
      realStepGenerators: "パラメトリック・ジェネレーター（STEP書き出し可）",
      otherWay: "逆方向は",
      otherWayLink: "STEP→STL 変換",
      stepsTitle: "STLをSTEPに変換する手順",
      steps: [
        { title: "変換ツールを開く", text: "登録不要。初回は約10 MBのWebAssemblyをダウンロードし、ブラウザに保存されます。" },
        { title: "STLをドロップ", text: `バイナリでもASCIIでも可。${x.maxRecognise}三角形まで曲面を認識します。小さな部品は数秒、大きな部品は1〜2分です。` },
        { title: "レポートを確認", text: "曲面の種類ごとの面数（円柱、平面……）、ソリッドかどうか、STLとSTEPの体積。左のビューで回して確認できます。" },
        { title: "STEPをダウンロード", text: "Fusion、SolidWorks、FreeCAD、Onshape などのCADで読み込めます。" },
      ],
      factsTitle: "ひとつの部品での実測",
      factsIntro: `私たちのジェネレーターで作った部品（穴6つと刻印のあるプレート）、${x.tri}三角形をChromeで変換：`,
      facts: [
        { label: "STEPの面数", value: x.faces, detail: `円柱${x.cyl}面（6つの穴）、平面${x.planes}面、押し出し面${x.extr}面（刻印）、ほかに合う曲面のない小さな平面${x.facets}面。` },
        { label: "結果", value: "ソリッド1つ", detail: "OpenCascade の妥当性チェックを通っています。" },
        { label: "STLとSTEPの体積差", value: `${x.vol}%`, detail: "曲面は三角形そのものではなく、三角形の弦の上に乗るため少し差が出ます。1%を超える結果はお渡ししません。" },
        { label: "所要時間", value: `${x.sec}秒`, detail: "変換ツールの初回起動を含みます。" },
      ],
      factsNote: "",
      featuresTitle: "このツールが行うこと",
      features: [
        { title: "本物の曲面を認識", text: "平面、円柱、円錐、球、トーラス、押し出し面、フィレット、自由曲面。穴は帯の輪ではなく、直径のある円柱に戻ります。" },
        { title: "確認してからお渡し", text: "STEPが読み戻せること、ソリッドの数、妥当性、STLとの体積差1%以内――4つすべてを満たしたものだけを使います。" },
        { title: "できないときは正直に", text: `${x.maxRecognise}三角形を超える場合や、認識で使えるソリッドが得られない場合は平面で組み直し、理由をレポートに書きます。` },
        { title: "書き出しの不具合を修正", text: "向きの逆な三角形、裏返ったボディ、ごくわずかにずれた頂点、面積のない細い三角形を直し、レポートで件数を示します。" },
        { title: "同じファイルなら同じ結果", text: "変換結果はパソコンの速さに左右されません。同じSTLならどのパソコンでも同じSTEPになります。" },
        { title: "ファイルは手元に", text: "ブラウザの中で動き、アップロード機能はありません。登録不要、何も保存しません。" },
      ],
      compareTitle: "STLから作ったSTEPと元データから書き出したSTEP",
      compareIntro: "同じ部品で、2種類のSTEPの違い：",
      compareHead: ["", "STLから作ったSTEP", "CADの元データから書き出したSTEP"],
      compare: [
        ["穴", "円柱面、直径はメッシュから復元", "円柱面、直径は設計値"],
        ["平面", "1つずつ平面", "1つずつ平面"],
        ["フィレット・自由曲面", "大部分は認識、一部は小平面", "本物の曲面"],
        ["穴の大きさを変える", "CADのダイレクトモデリングで", "フィーチャーやパラメータを変更"],
        ["フィーチャーツリーとスケッチ", "なし", "あり"],
        ["向いている用途", "計測、面の修正、穴あけ、相手部品の設計、CNC", "すべて"],
      ],
      faqTitle: "よくある質問",
      faqs: [
        { q: "STLをSTEPに変換するには？", a: "変換ツールを開き、STLをドロップして、レポートを確認し「STEPをダウンロード」を押すだけです。平面や円柱などの曲面を認識し、体積と妥当性も確認します。FreeCADやFusionでもメッシュをソリッドにできますが、三角形1つが1面になり、穴は円柱になりません。" },
        { q: "変換後の穴は円柱ですか？", a: "はい。穴やボスは直径の決まった円柱面に戻り、CADで選択して直径を測ったり、はめ合いに使ったりできます。上のプレートでは6つの穴がすべて戻りました。" },
        { q: "STLをSTEPにすると元のCADモデルに戻りますか？", a: "曲面は戻りますが、フィーチャーツリー、スケッチ、パラメータは戻りません。STLに保存されたことがないからです。ソリッドはCADのダイレクトモデリングで面を変えたり穴をあけたりできます。パラメトリックなモデルが必要なら、元のCADファイルやソースに戻る必要があります。" },
        { q: "CADでSTEPを開けますか？", a: "はい。Fusion、SolidWorks、FreeCAD、Onshape などで読み込めます。お渡しする前に OpenCascade で読み戻し、ボディ数、妥当性、体積を確認しています。" },
        { q: "結果はソリッドですか？", a: "STLが閉じていれば（すべての辺がちょうど2つの三角形に共有されていれば）ソリッドです。穴のあるSTLは開いたサーフェスとして書き出し、開いた辺の数をレポートします。先にスライサーやMeshmixerで修正してください。" },
        { q: "どのくらいの大きさまで変換できますか？", a: `${x.maxRecognise}三角形までは曲面を認識し、それより大きいものは平面で組み直します（最大${x.maxTriangles}三角形）。スキャンデータは先にポリゴンを減らすと、速く正確になります。` },
        { q: "どのくらい時間がかかりますか？", a: "小さな部品は数秒、1万三角形ほどの部品で30秒前後、自由曲面の多い大きな部品で1〜2分です。途中で止めることもできます。" },
        { q: "STLはアップロードされますか？", a: "いいえ。変換はブラウザ内のWebAssemblyで行われ、ページにアップロード機能はありません。届くのは匿名の数値（面の数、所要時間）だけで、ファイルやファイル名は届きません。" },
        { q: "STL→STPとSTL→STEPは同じですか？", a: "同じです。.stpと.stepは同じ形式（ISO 10303-21）の2つの拡張子で、ダウンロード後に.stpへ名前を変えても構いません。" },
      ],
      moreTitle: "関連ページ",
      more: {
        openscadToStep: { title: "OpenSCAD to STEP", text: "ソースからパラメータを持つSTEPを。.scad があるならSTLから変換しないでください（英語ページ）。" },
        stepToStl: { title: "STEP→STL 変換", text: "逆方向。STEPを表示し、選んだ精度でSTLにし、メッシュが閉じているかを確認します。" },
        generators: { title: "3Dプリント用ジェネレーター", text: "平歯車、ボックス、ブラケットなど。パラメータを調整してSTEPで書き出せます。" },
      },
      footer: {
        home: "Forgent3D（英語）",
        stlToStep: "STL→STEP 変換",
        stepToStl: "STEP→STL 変換",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3Dプリント用ジェネレーター",
        credit: "曲面認識とSTEPは Forgent3D 独自の変換エンジン、読み戻しの確認は Open CASCADE Technology（LGPL 2.1）。どちらもWebAssemblyでブラウザ内で動きます。",
        licences: "使用しているビルドのライセンスとソース",
      },
    };
  }

  return {
    toolName: "STL to STEP",
    openTool: "Open the converter",
    title: "STL to STEP Converter Online with Real CAD Surfaces — Free, No Sign-up, No Upload | Forgent3D",
    description:
      "Convert STL to STEP with real CAD surfaces in your browser: holes come back as cylinders with their diameter, plus planes, cones, spheres, tori, fillets and free-form faces. The solid is checked before you get it. Free, no sign-up, never uploaded.",
    keywords: ["stl to step", "stl to step converter", "convert stl to step", "stl to stp", "stl to step online", "stl to step free", "stl to step with surfaces", "mesh to step", "stl to solid"],
    h1: "STL to STEP with real surfaces: holes come back as cylinders",
    intro:
      "Drop an STL. The converter finds the surfaces the part was made of in its triangles — planes, cylinders, cones, spheres, tori, extruded profiles, fillets and free-form faces — builds them into a solid your CAD program opens, and checks it before you download the STEP. All in your browser: nothing is uploaded, no sign-up.",
    cta: "Convert an STL",
    truthTitle: "What you get",
    truth:
      "An STL is only triangles. The converter finds the surfaces the part was made of: flat areas become planes, holes and bosses cylinders with a definite diameter, and fillets, cones and spheres likewise; where no surface fits, small flat facets stay. The result is a solid Fusion, SolidWorks, FreeCAD and Onshape open, measure, cut and drill. The original design's feature tree and sketches were never in the STL and do not come back: for a parametric model, export from the source.",
    realStep: "Need a model with parameters? Export the STEP from the source:",
    realStepScad: "OpenSCAD to STEP",
    realStepGenerators: "Parametric generators (STEP export)",
    otherWay: "Going the other way?",
    otherWayLink: "STEP to STL",
    stepsTitle: "How to convert STL to STEP",
    steps: [
      { title: "Open the converter", text: "No sign-up. The first visit downloads about 10 MB of WebAssembly, which your browser keeps." },
      { title: "Drop the STL", text: `Binary or ASCII. Up to ${x.maxRecognise} triangles the surfaces are recognised: seconds for a small part, a minute or two for a large one.` },
      { title: "Read the report", text: "Faces by kind (how many cylinders, planes…), solid or open surface, the STL's and the STEP's volume; the part on the left to turn around." },
      { title: "Download the STEP", text: "Fusion, SolidWorks, FreeCAD, Onshape and other CAD programs import it." },
    ],
    factsTitle: "One part, measured",
    factsIntro: `A part from our own generators (a plate with six holes and engraved numbers), ${x.tri} triangles, converted in Chrome:`,
    facts: [
      { label: "faces in the STEP", value: x.faces, detail: `${x.cyl} cylinders (the six holes), ${x.planes} planes, ${x.extr} extruded profiles (the engraving), and ${x.facets} small flat facets where no surface fitted.` },
      { label: "result", value: "1 solid", detail: "Passes OpenCascade's validity check." },
      { label: "volume difference, STL to STEP", value: `${x.vol}%`, detail: "The surfaces sit on the triangles' chords, not on the triangles, so it differs a little; a result off by more than 1% is not handed over." },
      { label: "time", value: `${x.sec} s`, detail: "Including the converter's first start." },
    ],
    factsNote: "",
    featuresTitle: "What the converter does",
    features: [
      { title: "Recognises real surfaces", text: "Planes, cylinders, cones, spheres and tori, plus extruded profiles, fillets and free-form faces; a hole comes back as a cylinder with its diameter, not a ring of strips." },
      { title: "Checked before you get it", text: "The STEP must read back, have the right number of solids, be valid, and enclose the STL's volume within 1% — all four, or it is not used." },
      { title: "Honest when it can't", text: `Past ${x.maxRecognise} triangles, or when recognition gives no usable solid, the mesh is rebuilt with planar faces and the report says why.` },
      { title: "Export errors repaired", text: "Triangles wound the wrong way, inside-out bodies, corners a hair apart and zero-area slivers are fixed, each counted in the report." },
      { title: "Same file, same result", text: "The conversion does not depend on how fast your computer is: the same STL gives the same STEP everywhere." },
      { title: "The file stays with you", text: "It runs in your browser; the page uploads nothing. No sign-up, nothing stored." },
    ],
    compareTitle: "A STEP from the STL, or a STEP from the source",
    compareIntro: "The same part, two kinds of STEP:",
    compareHead: ["", "STEP made from an STL", "STEP exported from the CAD source"],
    compare: [
      ["A hole", "A cylinder, its diameter recovered from the mesh", "A cylinder, its diameter as designed"],
      ["Flat faces", "One plane each", "One plane each"],
      ["Fillets, free-form", "Mostly recognised, facets in places", "Real surfaces"],
      ["Make a hole bigger", "In CAD, by direct modelling", "Change the feature or parameter"],
      ["Feature tree and sketches", "None", "Yes"],
      ["Good for", "Measuring, editing faces, drilling, mating parts, CNC", "Everything"],
    ],
    faqTitle: "FAQ",
    faqs: [
      { q: "How do I convert STL to STEP?", a: "Open the converter, drop the STL, read the report and click Download STEP. It recognises planes, cylinders and other surfaces and checks the volume and validity. FreeCAD and Fusion also turn a mesh into a solid, but with one face per triangle, so a hole is not a cylinder." },
      { q: "Is a hole a cylinder afterwards?", a: "Yes. Holes and bosses come back as cylinders with a definite diameter that you can select, measure and use for fits in CAD. All six holes of the plate above came back." },
      { q: "Does converting STL to STEP give me back the original CAD model?", a: "The surfaces, yes; the feature tree, sketches and parameters, no: they were never stored in the STL. You can edit the solid's faces and drill it in CAD by direct modelling; for a parametric model you need the CAD file or source the part was made from." },
      { q: "Will my CAD software open the converted STEP?", a: "Yes. Fusion, SolidWorks, FreeCAD, Onshape and others import it; before you get it we read it back with OpenCascade and checked its solids, validity and volume." },
      { q: "Is the result a solid?", a: "When the STL is closed (every edge shared by exactly two triangles), yes. When it has holes, it is written as an open surface and the report gives the number of open edges; repair the mesh in your slicer or Meshmixer first." },
      { q: "What is the largest STL I can convert?", a: `Surfaces are recognised up to ${x.maxRecognise} triangles; larger meshes are rebuilt with planar faces, up to ${x.maxTriangles} triangles. Decimate scans first: recognition gets faster and better.` },
      { q: "How long does it take?", a: "A few seconds for a small part, about half a minute for one of ten thousand or so triangles, a minute or two for a large part with a lot of free-form surface. You can stop it at any time." },
      { q: "Is my STL uploaded?", a: "No. The conversion runs in WebAssembly in your browser; the page has no upload. All that reaches us are anonymous counts (faces, time taken), never the file or its name." },
      { q: "STL to STP or STL to STEP — the same?", a: "Yes. .stp and .step are two extensions of one format (ISO 10303-21); you can rename the download to .stp." },
    ],
    moreTitle: "Related",
    more: {
      openscadToStep: { title: "OpenSCAD to STEP", text: "A STEP with parameters from source code. If you have the .scad, don't convert the STL." },
      stepToStl: { title: "STEP to STL", text: "The other direction: view a STEP, mesh it at the accuracy you choose, check the mesh is closed." },
      generators: { title: "3D print generators", text: "Gears, boxes, brackets and more: set the parameters online and export STEP directly." },
    },
    footer: {
      home: "Forgent3D home",
      stlToStep: "STL to STEP",
      stepToStl: "STEP to STL",
      openscadToStep: "OpenSCAD to STEP",
      generators: "3D print generators",
      credit: "Surface recognition and the STEP: Forgent3D's own converter; read back and checked with Open CASCADE Technology (LGPL 2.1). Both run as WebAssembly in your browser.",
      licences: "Licences and source of the build we run",
    },
  };
}
