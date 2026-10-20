// STEP to STL: /[locale]/step-to-stl. "stp to stl / step to stl / step file to stl / convert step to stl / step to stl
// converter" and the viewer intent that comes first ("stp viewer", "step datei öffnen", "STEPファイル 開く"): someone
// holding a STEP who wants to see it and get an STL for the slicer. The tool is app.forgent3d.com/convert
// (lib/step-tools.js). Copy for en, zh, de, ja — each written for its readers, numbers from SURVEY.

import { SURVEY, formatNumber, stepToolLinks } from "./step-tools";

export const STEP_TO_STL_SLUG = "step-to-stl";

export function stepToStlMoreCards(locale) {
  const t = getStepToStlCopy(locale);
  const links = stepToolLinks(locale);
  return [
    { href: links.stlToStep, title: t.more.stlToStep.title, text: t.more.stlToStep.text },
    { href: links.openscadToStep, title: t.more.openscadToStep.title, text: t.more.openscadToStep.text },
    { href: links.generators, title: t.more.generators.title, text: t.more.generators.text },
  ];
}

function numbers(locale) {
  const n = (v, d = 0) => formatNumber(locale, v, d);
  const s = SURVEY.step;
  return {
    files: n(s.files),
    samples: n(s.samples),
    projects: n(s.projects),
    read: n(s.read),
    failed: n(s.files - s.read),
    watertight: n(s.watertight),
    externalRefs: n(s.externalRefs),
    renamedStl: n(s.renamedStl),
    curvesOnly: n(s.curvesOnly),
    multiBody: n(s.multiBody),
    maxBodies: n(s.maxBodies),
    readMedian: n(s.readMedianS, 2),
    readP90: n(s.readP90S, 1),
    /** "1,888 triangles · 92 KB" in this language */
    preset: (pair, word) => `${n(pair[0])} ${word} · ${n(pair[1])} KB`,
  };
}

function presetRows(locale, word, label) {
  const x = numbers(locale);
  return SURVEY.presets.map((p) => [label(p), x.preset(p.coarse, word), x.preset(p.standard, word), x.preset(p.fine, word)]);
}

export function getStepToStlCopy(locale) {
  const x = numbers(locale);

  if (locale === "zh") {
    return {
      toolName: "STEP 转 STL",
      openTool: "打开转换器",
      title: "STEP 转 STL 在线工具（STP 转 STL）& STEP 在线查看 —— 免费、不上传 | Forgent3D",
      description:
        "在浏览器里打开 STEP / STP 文件：3D 查看零件、量尺寸，按你选的精度转成 STL，下载前先看到三角面数、文件大小和网格是否封闭。免费、不用注册、文件不上传。",
      keywords: ["STEP 转 STL", "stp 转 stl", "step 文件转 stl", "step 转 stl 在线", "STEP 在线查看", "stp 查看器", "step 文件怎么打开", "step 转换 stl"],
      h1: "STEP 转 STL 在线转换，顺便当 STEP 查看器用",
      intro:
        "把 .step 或 .stp 文件拖进来。OpenCascade（FreeCAD 用的那个几何内核）就在你的浏览器里读它：先看 3D 模型、尺寸和体积，再选网格精度，下载切片软件能打开的 STL。下载前就能看到三角面数、文件大小，以及每个实体的网格是否封闭。文件不会离开你的电脑。",
      cta: "打开转换器",
      otherWay: "要反过来，把网格转成 CAD 文件？",
      otherWayLink: "STL 转 STEP",
      stepsTitle: "STEP 怎么转 STL",
      steps: [
        { title: "打开转换器", text: "不用注册。第一次访问会下载约 8 MB 的 WebAssembly（CAD 内核和 STEP 读取器），浏览器会缓存，下次直接用。" },
        { title: "拖入 STEP 文件", text: "任何 CAD 软件导出的 .step / .stp 都行：AP203、AP214、AP242，单个零件或整个装配体。单位统一换算成毫米——切片软件默认就按毫米读 STL。" },
        { title: "先看，再选精度", text: "可以旋转、点面和边量尺寸。选「粗 / 标准 / 精细」，或者自己填允许的最大偏差和角度，三角面数和文件大小随之更新。" },
        { title: "下载 STL", text: "所有实体放在一个二进制 STL 里，或者每个实体一个 STL 打成 zip。直接拖进拓竹 Bambu Studio、OrcaSlicer、PrusaSlicer 或 Cura。" },
      ],
      factsTitle: `用 ${x.files} 个真实 STEP 文件测过`,
      factsIntro: `测试集是 ${x.samples} 个 CAx-IF 与 OpenCascade 官方样例，加上 GitHub 上公开 CAD 项目里的 ${x.projects} 个 STEP（每个项目最多两个，最大 23 MB）。跑的是和你浏览器里同一份 WebAssembly。`,
      facts: [
        {
          label: "读出并网格化",
          value: `${x.read} / ${x.files}`,
          detail: `没读出的 ${x.failed} 个都给出了原因：${x.externalRefs} 个是零件放在别的文件里的装配体（转换器会列出它引用的文件名），${x.renamedStl} 个是改了扩展名的 STL，${x.curvesOnly} 个只有草图曲线。`,
        },
        {
          label: "每个实体的 STL 都封闭",
          value: `${x.watertight} / ${x.read}`,
          detail: "标准精度下。剩下三个照实报告：一个锥面 OpenCascade 的网格器怎么都剖分不了，一个本来就不是实体的曲面，一个实体有 29 条真开口边。",
        },
        {
          label: "读一个文件的时间（中位数）",
          value: `${x.readMedian} 秒`,
          detail: `90% 在 ${x.readP90} 秒以内；网格化并写出 STL 的中位数约 0.05 秒。最大的 23 MB、5,654 个面，6 秒读完。`,
        },
      ],
      factsNote: `多实体文件很常见：${x.read} 个里有 ${x.multiBody} 个，最多一个文件 ${x.maxBodies} 个实体。`,
      presetsTitle: "精度怎么影响 STL",
      presetsIntro:
        "「粗」= 0.2 mm / 30°，「标准」= 0.05 mm / 15°，「精细」= 0.01 mm / 5°：分别是三角面离真实曲面的最大距离，和沿曲线相邻三角面之间的最大转角。下面是三个 CAx-IF 测试件：",
      presetsHead: ["零件", "粗", "标准", "精细"],
      presets: presetRows(locale, "个三角面", (p) => `${p.name.replace("bodies", "个实体")} · ${p.size}，${formatNumber(locale, p.faces)} 个面`),
      featuresTitle: "转换器对你的 STEP 做了什么",
      features: [
        { title: "先是查看器", text: "实体数、面数、外形尺寸和体积都从精确几何读出来，不经过网格。点一个面就量它，点两个就量它们之间的距离。" },
        { title: "精度看得见", text: "把视图切到「STL 三角面」，看到的就是你要下载的那批三角形。改精度，数量和大小跟着变。" },
        { title: "逐个实体检查是否封闭", text: "按 STL 文件里的样子逐条边检查每个实体的网格。两个面在文件自身容差内相接、网格化后差了一丝的，会被合上；还开着的边当场计数告诉你。" },
        { title: "装配体", text: "所有实体按装配位置放进一个 STL；也可以每个实体单独一个 STL（zip），方便分开打印。" },
        { title: "转不了就说清楚", text: "只引用别的文件的装配体、改了名字的 STL、只有曲线的文件——转换器会说是哪一种，而不是给你一个空 STL。" },
        { title: "文件不出浏览器", text: "文件由浏览器里、另一个独立源上的 WebAssembly 读取，页面没有任何上传。不用注册，不保存任何东西。" },
      ],
      compareTitle: "STEP 和 STL 哪个好？",
      compareIntro: "两者干的不是一件事。把 STEP 留作原始文件，要打印时再导出 STL。",
      compareHead: ["", "STEP（.step / .stp）", "STL"],
      compare: [
        ["存的是什么", "精确曲面：平面、圆柱、样条，连同边和实体", "只有三角面，没有单位、没有颜色"],
        ["曲线", "孔是真正的圆柱，放多大都是圆", "孔是一圈平的小面，多少段取决于导出精度"],
        ["编辑", "任何 CAD 软件都能打开、改特征、精确测量", "很难改，本来就是拿去打印的"],
        ["谁来读", "CAD（Fusion、SolidWorks、FreeCAD、Onshape）、CNC / CAM", "所有切片软件和 3D 打印流程"],
        ["大小", "小：我们测试用的 40 × 20 × 6 mm 支架只有 66 KB", "随精度变大：同一个支架 67 KB 到 1.6 MB"],
      ],
      faqTitle: "常见问题",
      faqs: [
        {
          q: "STEP 文件怎么转成 STL？",
          a: "打开转换器，拖入 .step 或 .stp 文件，在查看器里确认零件，选一个精度（大多数打印用「标准」就够），点「下载 STL」。在 FreeCAD 里要选中实体后「文件 → 导出」选 STL；在 Fusion 里是右键实体「另存为网格」。这里什么都不用装。",
        },
        {
          q: "STEP 和 STL 哪个更好？",
          a: "做设计，STEP 更好：它保留精确几何，CAD 软件能测量、能修改。打印时切片软件要的是三角面，所以最后一步再转成 STL。反过来从 STL 转回去，精确几何是回不来的——这也是为什么要留着 STEP。",
        },
        {
          q: "3D 打印选什么精度？",
          a: "「标准」（0.05 mm、15°）比 0.4 mm 喷嘴和 0.1–0.2 mm 层高能打出来的细节更细，打出来看不到小面。大面积的光滑曲面用「精细」，快速试打用「粗」。我们测的几个件，「精细」的 STL 是「标准」的 3 到 8 倍大。",
        },
        {
          q: "没有 CAD 软件能打开 STEP 文件吗？",
          a: "能。转换器本身就是 STEP 查看器：拖进文件就能看 3D 模型、实体数、外形尺寸和体积，点面和边可以量尺寸，不用下载任何东西。",
        },
        {
          q: "我的 STEP 文件会被上传吗？",
          a: "不会。文件由编译成 WebAssembly 的 OpenCascade 在你的浏览器里读取和网格化，运行在单独的源上，页面没有上传功能。我们只收到匿名的计数（用了多久、多少三角面），永远收不到文件本身或文件名。",
        },
        {
          q: "为什么 STEP 打开后什么都没有？",
          a: "最常见的是装配体被存成了多个文件：顶层文件只列出零件和零件文件在哪。转换器会告诉你它引用了哪些文件——打开那些零件文件，或者在 CAD 软件里把装配体导出成单个 STEP。",
        },
        {
          q: "为什么我的 STL 不封闭？",
          a: "STEP 里本来就没闭合的曲面体，或者网格器剖分不了的面，都会在 STL 上留下洞。转换器按实体统计开口边，切片之前你就知道；小缝切片软件会自己补，缺一整个面最好回 CAD 软件里修。",
        },
        { q: "STP 和 STEP 有什么区别？", a: "没有区别：两者都是 ISO 10303-21 文件，.stp 只是短一点的扩展名。AP203、AP214、AP242 是格式的不同版本，转换器都能读。" },
        { q: "导出的 STL 是什么单位？", a: "毫米。STEP 文件自带单位，读取时英寸或米都会换算成毫米——切片软件默认就把 STL 当作毫米。" },
      ],
      moreTitle: "相关",
      more: {
        stlToStep: { title: "STL 转 STEP", text: "反方向：把网格合成平面、重建成实体，并如实说明它是什么、不是什么。" },
        openscadToStep: { title: "OpenSCAD 转 STEP", text: "从源码出真正的 STEP：圆柱和孔是真曲面，不是三角面。" },
        generators: { title: "3D 打印生成器", text: "齿轮、盒子、支架等参数化零件，在线调参数，直接导出 STL 或 STEP。" },
      },
      footer: {
        home: "Forgent3D 首页",
        stlToStep: "STL 转 STEP",
        stepToStl: "STEP 转 STL",
        openscadToStep: "OpenSCAD 转 STEP",
        generators: "3D 打印生成器",
        credit: "STEP 的读取与网格化由 Open CASCADE Technology（LGPL 2.1）完成，编译成 WebAssembly 在浏览器里运行；Forgent3D 与 Open Cascade 公司没有隶属关系。",
        licences: "我们运行的构建：许可证与源码",
      },
    };
  }

  if (locale === "de") {
    return {
      toolName: "STEP in STL umwandeln",
      openTool: "Konverter öffnen",
      title: "STEP in STL umwandeln – online & kostenlos, mit STEP-Viewer, ohne Upload | Forgent3D",
      description:
        "STEP- oder STP-Datei im Browser öffnen, das Bauteil in 3D ansehen und als STL mit frei wählbarer Genauigkeit herunterladen. Kostenlos, ohne Anmeldung, die Datei wird nicht hochgeladen.",
      keywords: ["STEP in STL umwandeln", "STP in STL umwandeln", "STEP Datei öffnen", "STEP Viewer online", "STEP zu STL", "STEP STL Konverter", "STP Datei öffnen", "STEP in STL konvertieren"],
      h1: "STEP in STL umwandeln – und die STEP-Datei vorher ansehen",
      intro:
        "Ziehen Sie eine .step- oder .stp-Datei hierher. OpenCascade – der Geometriekern, auf dem auch FreeCAD aufbaut – liest sie direkt in Ihrem Browser: Sie sehen das Bauteil in 3D mit Abmessungen und Volumen, wählen die Feinheit der Vernetzung und laden eine STL für Ihren Slicer herunter. Vor dem Download sehen Sie Dreiecksanzahl, Dateigröße und ob das Netz jedes Körpers geschlossen ist. Die Datei verlässt Ihren Rechner nicht.",
      cta: "Konverter öffnen",
      otherWay: "Sie brauchen es andersherum, vom Netz zur CAD-Datei?",
      otherWayLink: "STL in STEP umwandeln",
      stepsTitle: "So wandeln Sie eine STEP-Datei in STL um",
      steps: [
        { title: "Konverter öffnen", text: "Ohne Anmeldung. Beim ersten Besuch lädt der Browser etwa 8 MB WebAssembly (CAD-Kern und STEP-Leser) und behält sie für das nächste Mal." },
        { title: "STEP-Datei hineinziehen", text: "Eine .step oder .stp aus beliebiger CAD-Software – AP203, AP214 oder AP242, Einzelteil oder ganze Baugruppe. Die Einheiten werden in Millimeter umgerechnet, davon gehen Slicer bei STL aus." },
        { title: "Ansehen, dann Genauigkeit wählen", text: "Drehen, Flächen und Kanten anklicken und messen. Grob, Standard oder Fein wählen – oder die zulässige Abweichung und den Winkel selbst eintragen; Dreiecksanzahl und Dateigröße passen sich an." },
        { title: "STL herunterladen", text: "Eine binäre STL mit allen Körpern oder eine STL pro Körper als ZIP. Direkt in PrusaSlicer, Bambu Studio, OrcaSlicer oder Cura ziehen." },
      ],
      factsTitle: `Getestet mit ${x.files} echten STEP-Dateien`,
      factsIntro: `Testmenge: die ${x.samples} Beispieldateien von CAx-IF und OpenCascade sowie ${x.projects} STEP-Dateien aus öffentlichen CAD-Projekten auf GitHub (höchstens zwei pro Projekt, bis 23 MB) – mit derselben WebAssembly, die in Ihrem Browser läuft.`,
      facts: [
        {
          label: "geöffnet und vernetzt",
          value: `${x.read} / ${x.files}`,
          detail: `Die ${x.failed}, die sich nicht öffnen ließen, bekamen jeweils einen Grund: ${x.externalRefs} Baugruppen, deren Teile in anderen Dateien liegen (der Konverter nennt diese Dateien), ${x.renamedStl} umbenannte STL-Dateien, ${x.curvesOnly} Skizzen nur mit Kurven.`,
        },
        {
          label: "geschlossene STL für jeden Körper",
          value: `${x.watertight} / ${x.read}`,
          detail: "Bei Standard-Genauigkeit. Die übrigen drei werden angezeigt statt verschwiegen: eine Kegelfläche, die der OpenCascade-Vernetzer nicht trianguliert, eine Fläche, die nie ein Volumenkörper war, ein Körper mit 29 offenen Kanten.",
        },
        {
          label: "Lesezeit pro Datei (Median)",
          value: `${x.readMedian} s`,
          detail: `90 % unter ${x.readP90} s; Vernetzen und Schreiben der STL im Median etwa 0,05 s. Die größte Datei (23 MB, 5.654 Flächen) war nach 6 s gelesen.`,
        },
      ],
      factsNote: `Mehrkörper-Dateien sind häufig: ${x.multiBody} der ${x.read}, bis zu ${x.maxBodies} Körper in einer Datei.`,
      presetsTitle: "Wie die Genauigkeit die STL verändert",
      presetsIntro:
        "Grob = 0,2 mm / 30°, Standard = 0,05 mm / 15°, Fein = 0,01 mm / 5°: der größte Abstand einer Facette zur echten Fläche und der größte Knick zwischen benachbarten Facetten entlang einer Kurve. Drei CAx-IF-Testteile:",
      presetsHead: ["Teil", "Grob", "Standard", "Fein"],
      presets: presetRows(locale, "Dreiecke", (p) => `${p.name.replace("bodies", "Körper")} · ${p.size.replace(/ × /g, " × ")}, ${formatNumber(locale, p.faces)} Flächen`),
      featuresTitle: "Was der Konverter mit Ihrer STEP-Datei macht",
      features: [
        { title: "Zuerst ein Viewer", text: "Körper, Flächen, Außenmaße und Volumen kommen aus der exakten Geometrie, nicht aus einem Netz. Eine Fläche anklicken misst sie, zwei anklicken misst den Abstand." },
        { title: "Genauigkeit sichtbar", text: "Schalten Sie die Ansicht auf „STL-Facetten“ und Sie sehen genau die Dreiecke, die Sie herunterladen. Genauigkeit ändern – Anzahl und Größe folgen." },
        { title: "Dichtheit je Körper geprüft", text: "Jedes Netz wird Kante für Kante so geprüft, wie es in der STL steht. Flächen, die sich innerhalb der Toleranz der Datei treffen, aber haarscharf nebeneinander vernetzt werden, werden verbunden; was offen bleibt, wird gezählt und angezeigt." },
        { title: "Baugruppen", text: "Alle Körper in ihrer Einbaulage in einer STL – oder jeder Körper als eigene STL im ZIP, praktisch zum getrennten Drucken." },
        { title: "Klare Fehlermeldungen", text: "Eine STEP, die nur auf andere Dateien verweist, eine umbenannte STL, eine Datei nur mit Kurven: Der Konverter sagt, was vorliegt, statt eine leere STL zu liefern." },
        { title: "Die Datei bleibt bei Ihnen", text: "Gelesen wird sie von WebAssembly auf einem eigenen Ursprung in Ihrem Browser; die Seite lädt nichts hoch. Keine Anmeldung, nichts wird gespeichert." },
      ],
      compareTitle: "STEP oder STL – was ist besser?",
      compareIntro: "Beide haben verschiedene Aufgaben. Behalten Sie die STEP als Original und erzeugen Sie zum Drucken jeweils eine STL.",
      compareHead: ["", "STEP (.step, .stp)", "STL"],
      compare: [
        ["Inhalt", "Exakte Flächen – Ebenen, Zylinder, Splines – mit Kanten und Volumenkörpern", "Nur Dreiecke, ohne Einheit, ohne Farben"],
        ["Rundungen", "Eine Bohrung ist ein echter Zylinder, bei jeder Vergrößerung", "Eine Bohrung ist ein Ring aus ebenen Facetten; wie viele, hängt von der Export-Genauigkeit ab"],
        ["Bearbeiten", "In jeder CAD-Software öffnen, Features ändern, exakt messen", "Kaum bearbeitbar, gedacht zum Drucken"],
        ["Wer liest es", "CAD (Fusion, SolidWorks, FreeCAD, Onshape), CNC/CAM", "Jeder Slicer, jeder 3D-Druck-Workflow"],
        ["Größe", "Klein: unser Testhalter (40 × 20 × 6 mm) hat 66 KB", "Wächst mit der Genauigkeit: derselbe Halter 67 KB bis 1,6 MB"],
      ],
      faqTitle: "Häufige Fragen",
      faqs: [
        {
          q: "Wie wandle ich eine STEP-Datei in STL um?",
          a: "Konverter öffnen, die .step- oder .stp-Datei hineinziehen, das Teil im Viewer prüfen, eine Genauigkeit wählen (Standard reicht für die meisten Drucke) und „STL herunterladen“ klicken. In FreeCAD geht das über Körper auswählen und „Datei → Exportieren“ als STL, in Fusion per Rechtsklick auf den Körper „Als Netz speichern“. Hier müssen Sie nichts installieren.",
        },
        {
          q: "Ist STEP besser als STL?",
          a: "Zum Konstruieren ja: STEP enthält die exakte Geometrie, CAD-Software kann sie messen und ändern. Der Slicer braucht Dreiecke, also wird am Ende in STL umgewandelt. Der Rückweg holt die exakte Geometrie nicht zurück – deshalb ist die STEP die Datei, die man aufhebt.",
        },
        {
          q: "Welche Genauigkeit für den 3D-Druck?",
          a: "Standard (0,05 mm, 15°) ist feiner, als eine 0,4-mm-Düse bei 0,1–0,2 mm Schichthöhe wiedergeben kann – die Facetten sieht man im Druck nicht. Fein lohnt sich bei großen glatten Rundungen, Grob für schnelle Tests. In unseren Tests war die STL bei Fein 3- bis 8-mal so groß wie bei Standard.",
        },
        {
          q: "Wie öffne ich eine STEP-Datei ohne CAD-Programm?",
          a: "Mit diesem Konverter: Er ist zugleich ein STEP-Viewer. Datei hineinziehen und Sie sehen das Teil in 3D, die Körper, Außenmaße und das Volumen; Flächen und Kanten lassen sich anklicken und messen – ohne etwas herunterzuladen.",
        },
        {
          q: "Wird meine STEP-Datei hochgeladen?",
          a: "Nein. Sie wird von OpenCascade, kompiliert zu WebAssembly, in Ihrem Browser auf einem eigenen Ursprung gelesen und vernetzt; die Seite hat keinen Upload. Bei uns kommen nur anonyme Zahlen an (Dauer, Dreiecksanzahl), nie die Datei oder ihr Name.",
        },
        {
          q: "Warum ist meine STEP-Datei nach dem Öffnen leer?",
          a: "Meist ist es eine Baugruppe, die als mehrere Dateien gespeichert wurde: Die oberste Datei listet nur die Teile und wo sie liegen. Der Konverter zeigt, auf welche Dateien sie verweist – öffnen Sie diese oder exportieren Sie die Baugruppe in Ihrer CAD-Software als eine einzige STEP.",
        },
        {
          q: "Warum ist meine STL nicht wasserdicht?",
          a: "Eine Fläche in der STEP, die nie geschlossen war, oder eine Fläche, die der Vernetzer nicht triangulieren kann, hinterlässt ein Loch. Der Konverter zählt offene Kanten pro Körper, damit Sie es vor dem Slicen wissen; kleine Spalten schließt der Slicer selbst, eine fehlende Fläche repariert man besser im CAD.",
        },
        { q: "STP oder STEP – wo ist der Unterschied?", a: "Es gibt keinen: Beides sind ISO-10303-21-Dateien, .stp ist nur die kürzere Endung. AP203, AP214 und AP242 sind Versionen des Schemas; der Konverter liest alle drei." },
        { q: "In welcher Einheit ist die STL?", a: "In Millimetern. STEP-Dateien tragen ihre Einheit mit; Zoll oder Meter werden beim Lesen in Millimeter umgerechnet – davon gehen Slicer bei STL aus." },
      ],
      moreTitle: "Weiterlesen",
      more: {
        stlToStep: { title: "STL in STEP umwandeln", text: "Die andere Richtung: ebene Bereiche zu Flächen zusammengefasst, als Volumenkörper aufgebaut – und ehrlich gesagt, was dabei herauskommt." },
        openscadToStep: { title: "OpenSCAD to STEP", text: "Eine echte STEP aus dem Quelltext: Zylinder und Bohrungen als echte Flächen (Seite auf Englisch)." },
        generators: { title: "3D-Druck-Generatoren", text: "Zahnräder, Boxen, Halter und mehr: Parameter online einstellen, direkt als STL oder STEP exportieren." },
      },
      footer: {
        home: "Forgent3D (Englisch)",
        stlToStep: "STL in STEP umwandeln",
        stepToStl: "STEP in STL umwandeln",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3D-Druck-Generatoren",
        credit: "STEP wird von Open CASCADE Technology (LGPL 2.1) gelesen und vernetzt, kompiliert zu WebAssembly; Forgent3D ist mit Open Cascade nicht verbunden.",
        licences: "Lizenzen und Quelltext des verwendeten Builds",
      },
    };
  }

  if (locale === "ja") {
    return {
      toolName: "STEP→STL 変換",
      openTool: "変換ツールを開く",
      title: "STEPをSTLに変換（STP→STL）＆STEPビューア ― 無料・アップロード不要 | Forgent3D",
      description:
        "STEP / STPファイルをブラウザで開き、3Dで確認して寸法を測り、好きな精度でSTLに変換。ダウンロード前に三角形数・ファイルサイズ・メッシュが閉じているかが分かります。無料・登録不要・ファイルはアップロードされません。",
      keywords: ["STEP STL 変換", "STP STL 変換", "STEPファイル 開く", "STEP ビューア", "STEP ビューワー オンライン", "STEPをSTLに変換", "STEP STL 変換 フリー", "STP ファイル 開く"],
      h1: "STEPをSTLに変換、その前にSTEPビューアで確認",
      intro:
        ".step / .stp ファイルをドロップしてください。FreeCADも使っている形状カーネル OpenCascade が、あなたのブラウザの中で読み込みます。部品を3Dで見て寸法と体積を確かめ、メッシュの細かさを選んで、スライサーで開けるSTLをダウンロード。ダウンロードの前に、三角形の数、ファイルサイズ、各ボディのメッシュが閉じているかが表示されます。ファイルがパソコンの外に出ることはありません。",
      cta: "変換ツールを開く",
      otherWay: "逆に、メッシュをCADファイルにしたいときは",
      otherWayLink: "STL→STEP 変換",
      stepsTitle: "STEPをSTLに変換する手順",
      steps: [
        { title: "変換ツールを開く", text: "登録は不要です。初回は約8 MBのWebAssembly（CADカーネルとSTEPリーダー）を読み込み、ブラウザに保存されるので次回からはすぐ使えます。" },
        { title: "STEPファイルをドロップ", text: "どのCADから書き出した .step / .stp でも構いません。AP203・AP214・AP242、単体部品でもアセンブリでも。単位はミリメートルに換算されます（スライサーはSTLをmmとして読みます）。" },
        { title: "確認してから精度を選ぶ", text: "回転させ、面やエッジをクリックして寸法を測れます。「粗い・標準・細かい」を選ぶか、許容する最大偏差と角度を入力すると、三角形数とファイルサイズがその場で変わります。" },
        { title: "STLをダウンロード", text: "全ボディをまとめた1つのバイナリSTL、またはボディごとのSTLをZIPで。Bambu Studio、PrusaSlicer、OrcaSlicer、Curaにそのままドロップできます。" },
      ],
      factsTitle: `実際のSTEPファイル${x.files}個でテスト`,
      factsIntro: `CAx-IF と OpenCascade のサンプル${x.samples}個に、GitHub上の公開CADプロジェクトのSTEP${x.projects}個（1プロジェクト最大2個、最大23 MB）を加えたセットです。ブラウザで動くのと同じWebAssemblyで実行しました。`,
      facts: [
        {
          label: "読み込み・メッシュ化できた数",
          value: `${x.read} / ${x.files}`,
          detail: `開けなかった${x.failed}個には、すべて理由が表示されました：部品を別ファイルに置いたアセンブリが${x.externalRefs}個（参照先のファイル名を表示）、拡張子を .step に変えただけのSTLが${x.renamedStl}個、曲線だけのスケッチが${x.curvesOnly}個。`,
        },
        {
          label: "全ボディのSTLが閉じていた数",
          value: `${x.watertight} / ${x.read}`,
          detail: "「標準」精度での結果。残りの3個も隠さず表示します：OpenCascade のメッシャーが分割できない円すい面、もともとソリッドではないサーフェス、開いたエッジが29本あるボディ。",
        },
        {
          label: "1ファイルの読み込み時間（中央値）",
          value: `${x.readMedian} 秒`,
          detail: `90%が${x.readP90}秒以内。メッシュ化とSTL書き出しは中央値で約0.05秒。最大の23 MB・5,654面のファイルも6秒で読めました。`,
        },
      ],
      factsNote: `マルチボディのファイルはよくあります：${x.read}個中${x.multiBody}個、多いものは1ファイルに${x.maxBodies}ボディ。`,
      presetsTitle: "精度でSTLはどう変わるか",
      presetsIntro:
        "「粗い」= 0.2 mm / 30°、「標準」= 0.05 mm / 15°、「細かい」= 0.01 mm / 5°。それぞれ、三角形と本来の曲面との最大距離、曲線に沿って隣り合う三角形の最大の折れ角です。CAx-IF のテスト部品3つでの結果：",
      presetsHead: ["部品", "粗い", "標準", "細かい"],
      presets: presetRows(locale, "三角形", (p) => `${p.name.replace("bodies", "ボディ")} · ${p.size}、${formatNumber(locale, p.faces)}面`),
      featuresTitle: "このツールがSTEPに対して行うこと",
      features: [
        { title: "まずビューアとして", text: "ボディ数、面数、外形寸法、体積は、メッシュではなく正確な形状から読み取ります。面をクリックすればその面を、2つクリックすれば間の距離を測れます。" },
        { title: "精度が目に見える", text: "表示を「STLの三角形」に切り替えると、これからダウンロードする三角形そのものが見えます。精度を変えれば、数とサイズも追従します。" },
        { title: "ボディごとに閉じているか確認", text: "STLファイルに書かれる形のまま、各ボディのメッシュをエッジ単位で検査します。ファイル自身の公差内で接している面がメッシュ化でわずかにずれた箇所は閉じ、それでも開いているエッジは数を表示します。" },
        { title: "アセンブリ", text: "全ボディを組み付け位置のまま1つのSTLに。ボディごとに別々のSTL（ZIP）にもでき、部品を分けて印刷するときに便利です。" },
        { title: "失敗の理由をはっきり", text: "他のファイルを参照するだけのSTEP、名前を変えただけのSTL、曲線しかないファイル――空のSTLを渡すのではなく、どれに当たるかを表示します。" },
        { title: "ファイルは手元から出ない", text: "ブラウザ内の独立したオリジン上で動くWebAssemblyが読み込みます。ページにアップロード機能はありません。登録不要、何も保存しません。" },
      ],
      compareTitle: "STEPとSTL、どちらがいい？",
      compareIntro: "役割が違います。STEPを元データとして残し、印刷するたびにSTLを書き出すのが基本です。",
      compareHead: ["", "STEP（.step / .stp）", "STL"],
      compare: [
        ["中身", "正確な曲面（平面・円柱・スプライン）とエッジ、ソリッド", "三角形のみ。単位も色もない"],
        ["曲線", "穴はどれだけ拡大しても本物の円柱", "穴は平らな小面の輪。何分割かは書き出し精度次第"],
        ["編集", "どのCADでも開けて、フィーチャーの変更や正確な計測ができる", "ほぼ編集できない。印刷するためのデータ"],
        ["読むソフト", "CAD（Fusion、SolidWorks、FreeCAD、Onshape）、CNC / CAM", "すべてのスライサーと3Dプリントの流れ"],
        ["サイズ", "小さい：テスト用の40 × 20 × 6 mmのブラケットで66 KB", "精度とともに増える：同じブラケットで67 KB〜1.6 MB"],
      ],
      faqTitle: "よくある質問",
      faqs: [
        {
          q: "STEPファイルをSTLに変換するには？",
          a: "変換ツールを開き、.step か .stp をドロップし、ビューアで部品を確認して精度を選び（ほとんどの印刷は「標準」で十分）、「STLをダウンロード」を押すだけです。FreeCADならボディを選んで「ファイル → エクスポート」でSTL、Fusionならボディを右クリックして「メッシュとして保存」。ここでは何もインストールする必要がありません。",
        },
        {
          q: "STEPとSTL、どちらが優れていますか？",
          a: "設計にはSTEPです。正確な形状を持っているので、CADで測ったり変更したりできます。スライサーは三角形を必要とするので、印刷の直前にSTLへ変換します。逆向きに変換しても正確な形状は戻らない――だからこそSTEPを残しておくのです。",
        },
        {
          q: "3Dプリントにはどの精度がいいですか？",
          a: "「標準」（0.05 mm・15°）は、0.4 mmノズルと0.1〜0.2 mmの積層ピッチで再現できるより細かいので、印刷物に小面は出ません。大きくなめらかな曲面には「細かい」、試し刷りには「粗い」を。今回のテストでは「細かい」のSTLは「標準」の3〜8倍の大きさでした。",
        },
        {
          q: "CADソフトがなくてもSTEPファイルを開けますか？",
          a: "開けます。この変換ツールはSTEPビューアでもあります。ファイルをドロップすれば部品を3Dで表示し、ボディ数・外形寸法・体積が分かり、面やエッジをクリックして測れます。何もダウンロードする必要はありません。",
        },
        {
          q: "STEPファイルはアップロードされますか？",
          a: "されません。WebAssemblyにコンパイルした OpenCascade が、ブラウザ内の独立したオリジンで読み込みとメッシュ化を行い、ページにアップロード機能はありません。私たちに届くのは匿名の数値（かかった時間や三角形数）だけで、ファイルやファイル名は届きません。",
        },
        {
          q: "STEPを開いても何も表示されないのはなぜ？",
          a: "多くは、アセンブリが複数のファイルに分けて保存されているケースです。最上位のファイルには部品の一覧と置き場所しかありません。ツールは参照先のファイル名を表示するので、そちらを開くか、CADでアセンブリを1つのSTEPとして書き出してください。",
        },
        {
          q: "STLが閉じていない（ウォータータイトでない）のはなぜ？",
          a: "STEP内でもともと閉じていないサーフェスや、メッシャーが分割できない面があると、STLに穴が残ります。ツールはボディごとに開いたエッジの数を表示するので、スライス前に分かります。小さなすき間はスライサーが自動で埋めますが、面が丸ごと欠けている場合はCAD側で直すのがおすすめです。",
        },
        { q: "STPとSTEPの違いは？", a: "違いはありません。どちらも ISO 10303-21 のファイルで、.stp は短い拡張子なだけです。AP203・AP214・AP242 はスキーマのバージョンで、3つとも読めます。" },
        { q: "STLの単位は？", a: "ミリメートルです。STEPファイルは単位を持っており、インチやメートルは読み込み時にmmへ換算されます（スライサーはSTLをmmとして扱います）。" },
      ],
      moreTitle: "関連ページ",
      more: {
        stlToStep: { title: "STL→STEP 変換", text: "逆方向。平らな部分を面にまとめてソリッドを組み、何ができて何ができないかを正直に表示します。" },
        openscadToStep: { title: "OpenSCAD to STEP", text: "ソースから本物のSTEPを。円柱や穴が三角形ではなく本物の曲面になります（英語ページ）。" },
        generators: { title: "3Dプリント用ジェネレーター", text: "平歯車、ボックス、ブラケットなど。パラメータをオンラインで調整し、STLやSTEPで書き出せます。" },
      },
      footer: {
        home: "Forgent3D（英語）",
        stlToStep: "STL→STEP 変換",
        stepToStl: "STEP→STL 変換",
        openscadToStep: "OpenSCAD to STEP",
        generators: "3Dプリント用ジェネレーター",
        credit: "STEPの読み込みとメッシュ化は Open CASCADE Technology（LGPL 2.1）をWebAssemblyにコンパイルして行っています。Forgent3D は Open Cascade 社とは関係ありません。",
        licences: "使用しているビルドのライセンスとソース",
      },
    };
  }

  return {
    toolName: "STEP to STL",
    openTool: "Open the converter",
    title: "STEP to STL Converter Online (STP to STL) & STEP Viewer — Free, No Upload | Forgent3D",
    description:
      "Convert STEP or STP files to STL in your browser: see the part in 3D, pick the accuracy, check that the mesh is closed, download. Free, no sign-up, the file is never uploaded.",
    keywords: ["step to stl", "stp to stl", "step file to stl", "convert step to stl", "step to stl converter", "stp viewer", "step viewer online", "step file viewer", "how to convert step file to stl"],
    h1: "STEP to STL converter and STEP viewer, in your browser",
    intro:
      "Drop a .step or .stp file. OpenCascade — the geometry kernel FreeCAD is built on — reads it here, in your browser: you see the part in 3D with its size and volume, choose how finely to mesh it, and download an STL your slicer opens. Before you download you see the triangle count, the file size and whether every body's mesh is closed. The file never leaves your computer.",
    cta: "Open the converter",
    otherWay: "Need the other direction, from a mesh to a CAD file?",
    otherWayLink: "STL to STEP",
    stepsTitle: "How to convert a STEP file to STL",
    steps: [
      { title: "Open the converter", text: "No sign-up. The first visit downloads about 8 MB of WebAssembly (the CAD kernel and its STEP reader); your browser keeps it for next time." },
      { title: "Drop the STEP file", text: "A .step or .stp from any CAD tool — AP203, AP214 or AP242, a part or a whole assembly. Units are converted to millimetres, which is what slicers assume for an STL." },
      { title: "Look at it, then pick the accuracy", text: "Rotate it; click faces and edges to measure them. Choose Coarse, Standard or Fine, or type the largest deviation and angle you accept; the triangle count and file size update." },
      { title: "Download the STL", text: "One binary STL with every body, or one STL per body in a zip. Drop it into PrusaSlicer, Bambu Studio, OrcaSlicer or Cura." },
    ],
    factsTitle: `Tested on ${x.files} real STEP files`,
    factsIntro: `The set: the ${x.samples} CAx-IF and OpenCascade sample files, plus ${x.projects} STEP files from public CAD projects on GitHub (two per project at most, up to 23 MB) — run with the same WebAssembly your browser runs.`,
    facts: [
      {
        label: "opened and meshed",
        value: `${x.read} / ${x.files}`,
        detail: `The ${x.failed} that did not open each got a reason: ${x.externalRefs} assemblies that keep their parts in other files (the converter names those files), ${x.renamedStl} STL files renamed .step, ${x.curvesOnly} sketches with curves only.`,
      },
      {
        label: "closed STL for every body",
        value: `${x.watertight} / ${x.read}`,
        detail: "At the Standard setting. The other three are reported, not hidden: a cone face OpenCascade's mesher cannot triangulate, a surface that never was a solid, one body with 29 open edges.",
      },
      {
        label: "median time to read a file",
        value: `${x.readMedian} s`,
        detail: `90% under ${x.readP90} s; meshing and writing the STL took a median 0.05 s. The largest file, 23 MB with 5,654 faces, read in 6 s.`,
      },
    ],
    factsNote: `Multi-body files are common: ${x.multiBody} of the ${x.read}, with up to ${x.maxBodies} bodies in one file.`,
    presetsTitle: "How the accuracy changes the STL",
    presetsIntro:
      "Coarse is 0.2 mm / 30°, Standard 0.05 mm / 15°, Fine 0.01 mm / 5°: the largest distance between a facet and the true surface, and the largest turn between neighbouring facets along a curve. Three CAx-IF test parts:",
    presetsHead: ["Part", "Coarse", "Standard", "Fine"],
    presets: presetRows(locale, "triangles", (p) => `${p.name} · ${p.size}, ${formatNumber(locale, p.faces)} faces`),
    featuresTitle: "What the converter does with your STEP",
    features: [
      { title: "A viewer first", text: "Bodies, faces, overall size and volume come from the exact geometry, before any mesh. Click a face to measure it, or two to measure between them." },
      { title: "Accuracy you can see", text: "Switch the view to STL facets and you see the very triangles you are about to download. Change the accuracy and the count and size follow." },
      { title: "A closed-mesh check per body", text: "Every body's mesh is checked edge by edge, as the STL file will hold it. Faces that meet within the file's own tolerance but mesh a hair apart are joined; whatever is still open is counted on screen." },
      { title: "Assemblies", text: "All bodies in one STL in their assembled positions, or each body as its own STL in a zip — handy for printing parts separately." },
      { title: "Failures that say why", text: "A STEP that only references other files, a renamed STL, a file with only curves: the converter tells you which, instead of handing you an empty STL." },
      { title: "The file stays with you", text: "It is read by WebAssembly on an origin of its own in your browser; the page uploads nothing. No sign-up, nothing stored." },
    ],
    compareTitle: "Is STEP better than STL?",
    compareIntro: "They do different jobs. Keep the STEP as the master copy and make an STL whenever you print.",
    compareHead: ["", "STEP (.step, .stp)", "STL"],
    compare: [
      ["What it stores", "Exact surfaces — planes, cylinders, splines — with edges and solids", "Triangles only: no units, no colours"],
      ["Curves", "A hole is a true cylinder at any zoom", "A hole is a ring of flat facets; how many depends on the export accuracy"],
      ["Editing", "Open in any CAD tool, change features, measure exactly", "Hard to edit; made to be printed"],
      ["Who reads it", "CAD (Fusion, SolidWorks, FreeCAD, Onshape), CNC / CAM", "Every slicer and 3D printing workflow"],
      ["Size", "Small: our 40 × 20 × 6 mm test bracket is 66 KB", "Grows with accuracy: the same bracket is 67 KB to 1.6 MB"],
    ],
    faqTitle: "FAQ",
    faqs: [
      {
        q: "How do I convert a STEP file to STL?",
        a: "Open the converter, drop the .step or .stp file, check the part in the viewer, choose an accuracy (Standard suits most prints) and click Download STL. In FreeCAD the same is selecting the body and File → Export as STL; in Fusion, right-click the body and Save As Mesh. Here nothing has to be installed.",
      },
      {
        q: "Is STEP better than STL?",
        a: "For design, yes: STEP keeps the exact geometry, so a CAD tool can measure and change it. A slicer needs triangles, so you convert to STL at the end. Converting back does not bring the exact geometry back — which is why the STEP is the file to keep.",
      },
      {
        q: "What accuracy should I use for 3D printing?",
        a: "Standard (0.05 mm, 15°) is finer than a 0.4 mm nozzle at a 0.1–0.2 mm layer height can reproduce, so the facets do not show in the print. Use Fine for large, smooth curves and Coarse for quick tests. In our tests the Fine STL was 3 to 8 times the size of the Standard one.",
      },
      {
        q: "Can I open a STEP file without CAD software?",
        a: "Yes — the converter is also a STEP viewer. Drop the file to see the part in 3D, its bodies, overall size and volume, and click faces and edges to measure them. You do not have to download anything.",
      },
      {
        q: "Is my STEP file uploaded?",
        a: "No. It is read and meshed by OpenCascade compiled to WebAssembly, running in your browser on an origin of its own; the page has no upload. All that reaches us are anonymous counts (how long it took, how many triangles), never the file or its name.",
      },
      {
        q: "Why does my STEP file open with no geometry?",
        a: "Most often it is an assembly saved as several files: the top file only lists its parts and where they are. The converter shows which files it refers to — open those, or export the assembly from your CAD tool as a single STEP file.",
      },
      {
        q: "Why is my STL not watertight?",
        a: "A surface body in the STEP that was never closed, or a face the mesher cannot triangulate, leaves a hole. The converter counts open edges per body so you know before slicing; slicers close small gaps themselves, a missing face is better fixed in the CAD tool.",
      },
      { q: "STP or STEP — what is the difference?", a: "None: both are ISO 10303-21 files, and .stp is the same format with a shorter extension. AP203, AP214 and AP242 are versions of the schema; the converter reads all three." },
      { q: "What units is the STL in?", a: "Millimetres. A STEP file carries its unit, and inches or metres are converted to millimetres when it is read — the unit every slicer assumes for an STL." },
    ],
    moreTitle: "Related",
    more: {
      stlToStep: { title: "STL to STEP", text: "The other direction: flat areas merged into faces, rebuilt as a solid — and an honest account of what that is." },
      openscadToStep: { title: "OpenSCAD to STEP", text: "A real STEP from source code: cylinders and holes as true surfaces, not triangles." },
      generators: { title: "3D print generators", text: "Gears, boxes, brackets and more: set the parameters online and export STL or STEP." },
    },
    footer: {
      home: "Forgent3D home",
      stlToStep: "STL to STEP",
      stepToStl: "STEP to STL",
      openscadToStep: "OpenSCAD to STEP",
      generators: "3D print generators",
      credit: "STEP is read and meshed by Open CASCADE Technology (LGPL 2.1), compiled to WebAssembly; Forgent3D is not affiliated with Open Cascade.",
      licences: "Licences and source of the build we run",
    },
  };
}
