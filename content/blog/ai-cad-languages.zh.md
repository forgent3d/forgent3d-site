---
title: AI 写 CAD 该用哪种代码：build123d、CadQuery、OpenSCAD、KCL、FeatureScript 与传统 CAD API 横评
description: 按 AI 生成能力比较 build123d、CadQuery、OpenSCAD、KCL、FeatureScript 和 SolidWorks、Fusion 等传统 CAD API：公开评测数据、同一个零件的六种写法、闭环和几何上限。
date: 2026-10-30
---

先说结论：让大模型写 CAD，成败主要看三件事——模型见过多少这种代码，代码怎么指代已经建出来的面和边，AI 能不能自己把代码跑起来、量出结果。按这三条排，build123d 和 CadQuery 目前最适合 AI：Python 写、B-rep 内核、能在本地无头运行；Hugging Face 的 CADGenBench 上，截至 2026-10-30 前十名里写明工具的全是 build123d。OpenSCAD 最容易跑通，天花板也最低；KCL 的语言设计最照顾 AI，但语料少、运行要靠厂商的云；FeatureScript 和传统 CAD 的 API 本来就不是为「从零写一个零件」设计的。

人用 CAD 是边点边看，选哪个面是眼睛告诉手的。模型只有文本，它写下「在顶面打个孔」的时候看不见顶面。所以 AI 建模其实是一个循环：写代码，交给内核执行，把结果渲染出来、量一量，再把图和报错喂回给模型去改。下面每一节对应这个循环里的一环。

![AI 建模是一个循环，差距最大的一环是「量」](/blog/ai-cad-languages/loop-zh.png)

利益相关：我在做 Forgent3D，一个基于 build123d 的 AI CAD 平台，也支持 OpenSCAD。我们为什么让 AI 写代码而不是直接生成网格，写在[《代码就是模型》](/zh/blog/code-is-model)里；文中涉及我们自己的地方会单独说明。

## 六种 CAD 代码方案速览

六种方案里，只有 build123d 和 CadQuery 能在自己的机器上免费、无界面地算出 B-rep（可导出 STEP 的精确几何）；OpenSCAD 只产出网格；KCL、FeatureScript 和传统 CAD API 的几何都得在厂商的程序或云端里算。

| 方案 | 语言 | 几何内核与输出 | 在哪里运行 | 许可 | 版本（2026-10） |
| --- | --- | --- | --- | --- | --- |
| [build123d](https://github.com/gumyr/build123d) | Python 库 | OCCT，B-rep，导出 STEP | 本地 pip 安装，可无头运行 | Apache-2.0 | 0.13.0 |
| [CadQuery](https://github.com/CadQuery/cadquery) | Python 库 | OCCT，B-rep，导出 STEP | 本地 pip / conda，可无头运行 | Apache-2.0 | 2.8.0 |
| [OpenSCAD](https://openscad.org) | 自有的函数式语言 | 网格布尔（新版可切 Manifold 后端），导出 STL / 3MF，没有 STEP | 桌面程序与命令行，也有 wasm 版 | GPL | 稳定版 + 开发快照 |
| [KCL](https://zoo.dev/docs/kcl-lang) | Zoo 的自有语言 | Zoo 自研几何引擎，B-rep，导出 STEP | Zoo Design Studio 或 API，几何在 Zoo 云端算 | 语言与客户端开源（MIT），引擎闭源 | KCL 3.0，Design Studio 1.5.3 |
| [FeatureScript](https://cad.onshape.com/FsDoc/) | Onshape 的自有语言 | Parasolid，B-rep | 只在 Onshape 云里 | 标准库源码公开，平台商业 | 随 Onshape 更新 |
| 传统 CAD API | SolidWorks 用 VBA / C#，Fusion 用 Python / C++，NX 用 C++ / Python 等 | 各家内核（Parasolid、ShapeManager 等），B-rep | 装好、授权好的桌面程序；SolidWorks 只有 Windows 版 | 商业 | — |

这张表已经决定了一半的结果：AI 要反复「写、跑、看」，跑一次的成本、能不能在服务器上批量跑、产物是不是精确几何，都由这几列定了。

## 公开评测：AI 用哪种 CAD 语言做得最好

目前最硬的一份数据是 Hugging Face 的 [CADGenBench](https://huggingface.co/spaces/HuggingAI4Engineering/CADGenBench)。截至 2026-10-30，它的验证榜前十里，名字写明了建模工具的提交全部用 build123d，没有一个用 CadQuery、OpenSCAD 或 KCL。第一名是 build123d-mcp 加 Claude Opus 5.5，总分 0.830。

这份卷子很接近真实工作：49 道题给一张工程图让 AI 建模，32 道题给一个 STEP 和一句修改要求（「把叶轮从 7 片改成 5 片」）。交回来的必须是 STEP，先查是不是封闭合法的实体，不合法直接零分；再按形状（占 0.4）、配合特征能不能装进同一个夹具（0.4）、孔和腔的个数（0.2）打分。OpenSCAD 只出网格，连这份卷子都交不了。

但分数不全是语言给的。同一个模型、同样写 build123d，换一套工具链就能差出一截（下图）。官方基线已经会把渲染图喂回给模型；[build123d-mcp](https://pypi.org/project/build123d-mcp/) 多给的是量体积和包围盒、找孔、和输入文件做对比、导出前校验这些工具。差距主要来自「量」，而不是「看」。

![同一模型接上 build123d-mcp 后，CADGenBench 生成题分数提高 4 到 24 个百分点](/blog/ai-cad-languages/chart-zh.png)

读这张图要打两个折扣。三组的基线不完全相同，build123d-mcp 本身也在这几个月里不断更新；而且 agent 评测本来就抖，我们自己的评测里同一配置重跑一次能摆动 16 个点（[记录在这里](/zh/blog/eval-variance)）。+4、+7 这样的差值要谨慎看，Opus 5 的 +23.5 才算明确。图中分数取自 BenchLM 2026-10-28 的快照，前十与排行榜原页一致。

其他公开结果：

| 来源 | 比了哪些语言 | 测了什么 | 结果 |
| --- | --- | --- | --- |
| [ModelRift 博客](https://modelrift.com/blog/cadquery-vs-openscad/)（2026-09，厂商） | OpenSCAD、CadQuery | Claude Opus 5 在 Claude Code 里做 3 个打印件 | 两边都做出来了。OpenSCAD 报错 2 次、几何悄悄错 5 次；CadQuery 报错 5 次、悄悄错 4 次。CadQuery 能在代码里断言尺寸，OpenSCAD 侧只能另写 STL 解析器 |
| [GrandpaCAD 博客](https://grandpacad.com/en/blog/openscad-vs-cadquery-vs-build123d)（厂商） | OpenSCAD、CadQuery、build123d | 同一个 gemini-3.5-flash、同一组提示 | OpenSCAD 每次生成约 0.4 个代码错误，build123d 1.4 到 1.7 个，多是方法名写错、参数顺序错 |
| [Text2CAD-Bench](https://arxiv.org/abs/2605.18430)（2026-05，论文） | CadQuery 对比命令序列 | 600 条文字描述，7 个通用大模型 | 写成 CadQuery 代码明显更好；换成命令序列后 DeepSeek-V3.2 的无效率从 13.3% 涨到 67.3% |
| [BenchCAD](https://arxiv.org/abs/2605.10865)（2026-05，论文） | CadQuery | 17,900 个工业零件，看图写代码 | 前沿模型能跑通但形状对不上：Claude Opus 4.7 执行率 94.0%，IoU 只有 0.274；专门训练的 2B 小模型 IoU 0.752。约 64% 的「成功」编辑悄悄改坏了别的特征 |
| [CadQueryEval](https://github.com/danwahl/cadqueryeval)（社区，2026-09 归档） | CadQuery | 25 道文字题，和参考 STL 比 | 已有四个模型 25 题全对，题目被做满了 |

表面上两类结果矛盾：厂商博客说 OpenSCAD 错得少，CADGenBench 前排却全是 build123d。其实它们量的是两件事。GrandpaCAD 数的是代码能不能跑，做的是 3D 打印小件；CADGenBench 量的是几何对不对、装不装得上。做机械零件，比的是后一件。

还要提醒一句：CADGenBench 的题目是公开的（答案不公开），榜上好几行是同一位作者反复迭代工具后的提交，最高分更像上限，不是普通用法的水平。

## 模型见过多少：语料与语法稳定性

OpenSCAD 和 Python 系（CadQuery、build123d）在语料上占便宜，KCL 和 FeatureScript 最吃亏。但语料决定的是第一版代码能不能跑，不决定最后的零件对不对。

- **OpenSCAD**：Thingiverse、Printables 和 GitHub 上十几年的存量，语法多年没大变，关键字只有几十个。模型很少编出不存在的函数。不足是语料以打印小件为主，机械零件的写法见得少。
- **CadQuery**：沾 Python 的光，循环、函数、数学都是模型最熟的东西。学术界几乎都拿它做数据集，[CAD-Recode](https://arxiv.org/abs/2412.14042) 一篇就合成了一百万段 CadQuery 程序。
- **build123d**：同样是 Python，但更年轻，公开代码比 CadQuery 少，API 还在 0.x 阶段。两者方法名又相似，模型容易串用，这正是 GrandpaCAD 看到的错法：方法名不存在、参数顺序错、在错的对象上调用。
- **KCL**：出现才两三年，语法已经大改过两轮。先是位置参数全部改成关键字参数，2026 年的 KCL 3.0 又把草图换成带约束求解的 sketch block，文件头要声明 `@settings(kclVersion = 3.0)`。通用模型记住的多半是旧写法，只能现查文档。
- **FeatureScript**：公开代码主要是 Onshape 标准库和社区自定义特征，量很小。Onshape 在 2026-09 推出的 [FeatureScript MCP Server](https://www.onshape.com/en/blog/featurescript-mcp-server-use-cases-text-code-cad) 走的是生成、运行、调试、再改的循环，而不是指望模型一次写对。
- **传统 API**：SolidWorks 的 VBA 宏在论坛上数量很多，但大多是录宏录出来的：`SelectByID2` 加坐标、`Sketch1`、`Boss-Extrude1`。模型从中学到的是怎么复现某人当时的点击，不是怎么表达设计。Fusion 的 Python API 规整一些，样例也齐。

API 不稳定的代价，在 AI 场景里会被放大：人升级后看一眼变更日志就行，模型却要等下一轮训练。靠提示词或工具把当前版本的文档递给模型，是每个语言都绕不开的活。

## 怎么指代已有的面和边：同一个零件的六种写法

同一个零件：60×40×10 的板，顶面四条边倒 R2，中心打 Ø10 通孔。六种写法最大的差别，在怎么说出「顶面那四条边」。这是 AI 写 CAD 最容易错的地方，因为模型看不到它要选的东西。

### build123d

```python
from build123d import *

plate = Box(60, 40, 10)
top_edges = plate.edges().group_by(Axis.Z)[-1]   # 按 Z 分组，最高一组 = 顶面四条边
plate = fillet(top_edges, radius=2)
plate -= Cylinder(radius=5, height=10)
```

选择就是一句普通的 Python 表达式：取全部边，按 Z 分组，取最高的一组。中间结果是变量，AI 可以先 `print(len(top_edges))` 确认选中 4 条再往下走。这段代码我们在 build123d 0.13.0 上跑过，体积 23,046 mm³。

### CadQuery

```python
import cadquery as cq

plate = (
    cq.Workplane("XY").box(60, 40, 10)
    .faces(">Z").edges().fillet(2)
    .faces(">Z").workplane().hole(10)
)
```

`">Z"` 这种字符串选择器很短，模型也见得多。代价是整条链共享一个隐式的栈：`.workplane()` 的原点落在哪、`.hole()` 打在哪，取决于上一步留下了什么。链一长，模型就容易搞错当前栈上是什么。

### OpenSCAD

```openscad
include <BOSL2/std.scad>
$fn = 64;

difference() {
    cuboid([60, 40, 10], rounding = 2, edges = TOP);  // 顶面四条边倒圆
    cyl(d = 10, h = 12);                              // 中心通孔
}
```

OpenSCAD 根本不选边。倒圆要么靠 BOSL2 这类库做成参数（`edges = TOP`），要么自己用 `hull`、`minkowski` 拼。好处是不存在选错边；坏处是库没覆盖的情况，比如给布尔之后才出现的交线倒圆，基本做不了。这段在 OpenSCAD（Manifold 后端）上渲染出 474 个三角面，体积和 build123d 版几乎一样，但圆角是折线拼的。

### KCL

```kcl
@settings(defaultLengthUnit = mm, kclVersion = 3.0)

profile = sketch(on = XY) {
  front = line(start = [var -30mm, var -20mm], end = [var 30mm, var -20mm])
  right = line(start = [var 30mm, var -20mm], end = [var 30mm, var 20mm])
  back = line(start = [var 30mm, var 20mm], end = [var -30mm, var 20mm])
  left = line(start = [var -30mm, var 20mm], end = [var -30mm, var -20mm])
}
plateRegion = region(segments = [profile.left, profile.front])
plate = extrude(plateRegion, length = 10mm, tagEnd = $top)

rounded = fillet(
  plate,
  edges = [
    { sideFaces = [plateRegion.tags.front, plate.faces.top] },
    { sideFaces = [plateRegion.tags.right, plate.faces.top] },
    { sideFaces = [plateRegion.tags.back, plate.faces.top] },
    { sideFaces = [plateRegion.tags.left, plate.faces.top] }
  ],
  radius = 2mm,
)
// 中心孔用 hole::hole(...) 或 subtract(...)，从略
```

KCL 用标签指代：给草图里的线起名，拉伸时给顶面起名，再用「哪两个面夹着的边」说出一条边。名字是写代码的人自己起的，不依赖几何计算，对模型很友好。代价是啰嗦：四条边写四遍，而且建草图时就得想好以后要引用什么。写法按 Zoo 当前文档的 KCL 3.0 示例改写，没有实际运行。

### FeatureScript

```featurescript
annotation { "Feature Type Name" : "Plate" }
export const plate = defineFeature(function(context is Context, id is Id, definition is map)
    precondition {}
    {
        fCuboid(context, id + "box", {
                "corner1" : vector(-30, -20, 0) * millimeter,
                "corner2" : vector(30, 20, 10) * millimeter
        });
        // 顶面 = box 生成的面里，落在 z = 10 平面上的那个
        const top = qCoincidesWithPlane(qCreatedBy(id + "box", EntityType.FACE),
                plane(vector(0, 0, 10) * millimeter, vector(0, 0, 1)));
        opFillet(context, id + "fillet", { "entities" : top, "radius" : 2 * millimeter });
        fCylinder(context, id + "pin", {
                "bottomCenter" : vector(0, 0, 0) * millimeter,
                "topCenter" : vector(0, 0, 10) * millimeter,
                "radius" : 5 * millimeter
        });
        opBoolean(context, id + "cut", {
                "tools" : qCreatedBy(id + "pin", EntityType.BODY),
                "targets" : qCreatedBy(id + "box", EntityType.BODY),
                "operationType" : BooleanOperationType.SUBTRACTION
        });
    }, {});
```

FeatureScript 用查询（query）指代：「box 这一步生成的、落在 z = 10 平面上的面」。查询说的是来历加条件，上游参数改了也能找回同一个面，这是 Onshape 参数化稳定的原因。但它是为写「特征」设计的：先定义一个 feature，再到 Part Studio 里用，id、单位、context 这些仪式让代码长了一倍。文件头和 import 从略，函数签名已对照 FsDoc 核对。

### 传统 CAD API（以 SolidWorks VBA 为例）

```vb
' SolidWorks VBA 宏（节选）。API 的长度单位是米
Set part = swApp.NewPart
part.Extension.SelectByID2 "Front Plane", "PLANE", 0, 0, 0, False, 0, Nothing, 0
part.SketchManager.InsertSketch True
part.SketchManager.CreateCenterRectangle 0, 0, 0, 0.03, 0.02, 0
part.SketchManager.CreateCircleByRadius 0, 0, 0, 0.005
part.FeatureManager.FeatureExtrusion2 True, False, False, 0, 0, 0.01, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False
' 选顶面四条边：报一个落在边上的空间坐标
part.Extension.SelectByID2 "", "EDGE", 0, 0.02, 0.01, False, 1, Nothing, 0
part.Extension.SelectByID2 "", "EDGE", 0, -0.02, 0.01, True, 1, Nothing, 0
part.Extension.SelectByID2 "", "EDGE", 0.03, 0, 0.01, True, 1, Nothing, 0
part.Extension.SelectByID2 "", "EDGE", -0.03, 0, 0.01, True, 1, Nothing, 0
' 然后调用 FeatureFillet3，又是十几个位置参数
```

传统 API 是界面操作的自动化：先选中再执行，选的方式是界面里的名字（`Front Plane`）或一个空间坐标。模型要自己算出边上某一点的坐标；尺寸一改坐标没跟着改，就会选到别的东西，或什么都没选中，而报错只是一个 `False`。Fusion 的 API 好一些：拉伸特征直接给出 `endFaces`、`sideFaces`，可以顺着特征拿面，思路接近 FeatureScript。

### 小结

对 AI 来说，好的指代要满足三条：写在代码里，不靠界面状态；运行时能检查选中了什么；尺寸改了还成立。build123d、CadQuery、KCL、FeatureScript 都基本做到，差别在写起来多费劲、出错时多难查。OpenSCAD 绕开了这个问题，坐标点选三条都不占。

## 能不能自己跑、自己量：AI 的反馈闭环

这一环拉开的差距最大。CADGenBench 上，Claude Opus 5 用 Mecado 的基线工具链时生成题得 36.1%，接上能量尺寸的 build123d-mcp 后得 59.6%。ModelRift 的实验也得出一样的结论：量壁厚、量间隙这类数值检查比看渲染图可靠，渲染图没抓到任何要紧的错。

| 方案 | 能否本地无头运行 | 出错时长什么样 | 能否在代码里量结果 |
| --- | --- | --- | --- |
| build123d | 能，装一个 Python 包 | Python 堆栈指到行；内核失败时只有 OCCT 的一句话 | 能，体积、包围盒、面、边、距离都是对象属性 |
| CadQuery | 能 | 同上，长链里更难定位是哪一步 | 能 |
| OpenSCAD | 能，一个命令行程序 | 语法错有行号；几何几乎不报错，错了也照样出网格 | 不能，只能 `echo` 自己的变量 |
| KCL | 语言能本地解析，几何要连 Zoo 的引擎 | 引擎返回的错误 | 要走 Zoo 的接口 |
| FeatureScript | 不能，只在 Onshape 里跑 | 特征报错，在 Onshape 里看 | 能（`evVolume`、`evBox3d` 等），但只在 Onshape 里 |
| 传统 API | 要开着一份授权的桌面程序 | 多半是返回 `False` 或空对象 | 能，同样要开着程序 |

做 AI 产品时，「无头」这一列决定成本。一个对话要重建几十次，一天就是成千上万次：build123d、CadQuery、OpenSCAD 可以扔进容器并发跑；KCL 和 FeatureScript 每次都要请求厂商的服务；SolidWorks 连 Linux 容器都进不去。

「量」这一列决定质量。OpenSCAD 的布尔运算在网格上做，几乎总能出结果，所以错误是「安静」的：孔偏了 2 mm，代码照样跑通，模型也没法在代码里问「这个孔的中心在哪」。B-rep 的倒角过大会直接失败，报错虽然不好读（ModelRift 遇到的是一句 `BRep_API: command not done`），至少把问题暴露出来了。

B-rep 也有安静的错：ModelRift 的螺纹件里，CadQuery 的 `union()` 悄悄丢掉了芯部圆柱，体积只有应有的 68%，形体却仍然「合法」。能抓到它的，恰恰是一句体积断言。

我们给自己的 agent 做了哪些「量」的工具，各自回答什么问题，写在[《一个会自己量尺寸的 CAD agent》](/zh/blog/agent-that-measures)里。

## 几何能力的上限：网格还是 B-rep

AI 能写出什么零件，上限由内核定。OpenSCAD 交的是网格，做 3D 打印够用，进不了机加工和装配流程；其余五种都是 B-rep，能导出 STEP。

| 方案 | 几何表示 | 任意边倒圆 / 倒角 | 导出 STEP | 备注 |
| --- | --- | --- | --- | --- |
| build123d | B-rep（OCCT） | 能 | 能 | 抽壳、放样、扫掠、螺纹库都有；OCCT 的倒圆和布尔不如 Parasolid 稳 |
| CadQuery | B-rep（OCCT） | 能 | 能 | 同上，另有带约束求解的装配 |
| OpenSCAD | 三角网格 | 不能，靠库参数或 `hull` / `minkowski` 拼 | 不能 | 曲面都是折面，精度由 `$fn` 定 |
| KCL | B-rep（Zoo 自研引擎） | 能 | 能 | 引擎还在快速迭代 |
| FeatureScript | B-rep（Parasolid） | 能 | 能，经 Onshape 导出 | 内核最成熟；装配在 Onshape 里做，不归 FeatureScript 管 |
| 传统 API | B-rep（Parasolid、ShapeManager 等） | 能 | 能 | 钣金、焊件、曲面、工程图一应俱全 |

网格的限制不只是「导不出 STEP」。做机加工的人要在 CAM 里选圆柱面定孔、选平面定基准，网格里只有三角形；圆孔在网格里是一圈小平面，配合公差也没法标。利益相关：我们做了一个[把 OpenSCAD 转成 STEP 的工具](/zh/openscad-to-step)，BOSL2 的倒圆能还原成真正的圆柱面和圆环面，但螺纹、斜齿轮这类只能仍是折面。

传统 CAD 的优势也在这里：钣金展开、焊件清单、带公差的二维工程图，这些制造环节真正要的东西，代码 CAD 目前都弱。AI 如果能稳定地驱动 SolidWorks 或 NX，拿到的是整套工具链；问题是前两节说的指代和闭环。

## 生成之后谁来改：人怎么接手

AI 很少一次做对，实际用法是人改一个数、AI 接着改，来回几轮。所以代码和界面能不能双向同步，和生成能力本身一样影响能不能用。

- **传统 CAD**：AI 通过 API 建出来的是原生特征树，工程师打开就能像自己建的一样改。这是传统 API 最大的优势。反过来就难了：人改过之后，AI 要重新读懂特征树和里面的名字，才能接着改。
- **FeatureScript**：生成的自定义特征出现在 Onshape 的特征列表里，`precondition` 里声明的参数会自动变成对话框，改参数不用碰代码。参数之外的改动，还是得回到代码。
- **KCL**：Zoo Design Studio 是双向的，在界面里点选做的修改会写回 KCL，改代码界面也跟着变。这是 KCL 在设计上最照顾人机协作的地方。
- **OpenSCAD**：Customizer 把顶层变量变成滑块和下拉框，人能改的只有 AI 预留的参数，剩下的都是代码。
- **build123d / CadQuery**：没有自带的编辑界面，ocp_vscode、CQ-editor 只能看不能点选写回。对会 Python 的工程师不成问题，对只用鼠标的人是门槛。

代码是唯一真源、界面修改写回代码的方案，人和 AI 来回交接最顺；传统 CAD 是 AI 交给人容易，人再交回给 AI 难。利益相关：补 build123d 这块短板正是 [Forgent3D](/zh/build123d-online) 在做的事，从源码推出一份逐步的说明书和参数面板，在界面里改的数会写回代码。

## 逐个结论

五个维度放在一起，做机械零件时 build123d 最均衡，做打印小件时 OpenSCAD 最省事。

| 方案 | 语料 | 指代几何 | 自己跑、自己量 | 几何上限 | 人接手 | 适合 |
| --- | --- | --- | --- | --- | --- | --- |
| build123d | 中 | 强 | 强 | 强 | 弱 | 要 STEP 的机械零件；AI 产品的后端 |
| CadQuery | 强 | 中，隐式栈容易乱 | 强 | 强 | 弱 | 研究；已有 CadQuery 代码的团队 |
| OpenSCAD | 强 | 不选，靠库参数 | 中，能跑不能量 | 弱，网格 | 中，Customizer | 3D 打印件、参数化小件 |
| KCL | 弱 | 强 | 中，几何在云端 | 中 | 强，双向编辑 | 已在用 Zoo 的人 |
| FeatureScript | 弱 | 强 | 中，只在 Onshape | 强 | 中，参数对话框 | Onshape 用户写可复用的特征 |
| 传统 API | 中，多为录宏 | 弱 | 弱 | 强 | 交给人强，交回 AI 弱 | 在既有 SolidWorks / Fusion 流程里做自动化 |

### build123d：目前 AI 生成机械零件的最好选择

CADGenBench 前排几乎都是它。对象是显式的，选择是 Python 表达式，结果能在代码里量、能断言，正好对上 AI 的闭环。短板是模型常写错方法名，所以要把当前版本的 API 参考和量尺寸的工具一起交给模型。

### CadQuery：模型最熟的 B-rep 代码

学术数据集和基准几乎都用它，第一版代码的成功率有保障。主要的坑是链式写法的隐式栈。CADGenBench 前十里没有它，可能只是没人拿它提交，不足以说明它更弱。

### OpenSCAD：最容易跑通，天花板最低

语法小、语料多、渲染快，小模型也能写对，所以做消费级 AI 打印工具的厂商都偏爱它。代价是网格输出、没有任意边倒圆、结果量不了，零件一要进制造或装配就到头了。

### KCL：为 AI 设计的语言，卡在语料和云上

标签式指代和双向编辑都是对的方向。但通用模型几乎没见过它，语法还在变，几何又必须在 Zoo 的云里算，在 Zoo 自己的产品之外很难用起来。KCL 的设计取舍，我们在[《给语言模型用的 CAD IR》](/zh/blog/cad-ir)里谈得更细。

### FeatureScript：写特征，不写零件

它的查询系统最稳，Parasolid 内核最强，但它是给 Onshape 扩展新特征的语言。让 AI 写一个「按标准生成螺纹」的可复用特征很合适，让它从零做一个支架就绕远了。

### 传统 CAD API：能交给工程师，难交回 AI

单会话同步调用、Linux 容器进不去、靠坐标点选，让它做 AI 产品的后端很吃力。合适的用法是在已有流程里做自动化：批量导出、改属性、按模板生成系列件，市面上已有不少 SolidWorks 和 Fusion 的 MCP 服务在做这件事。

## 结语：做 AI CAD，先修闭环

语言决定起点，闭环决定终点。落到做法上是四条：

1. 选能在本地无头运行、产出 B-rep 的方案，今天就是 build123d 或 CadQuery。
2. 把「量」交给模型：体积、包围盒、孔的位置、和参考件的差异，都比渲染图有用。
3. 把当前版本的 API 文档放进上下文，别指望模型记得。
4. 让人能接手，并且人的修改能回到代码里，AI 才能接着改。

等通用模型见过足够多的 KCL 和 FeatureScript，这个排序可能会变；闭环这一条不会。

## 常见问题

### AI 生成 CAD 用哪种语言最好？

要 STEP、要做机械零件，用 build123d：截至 2026-10，CADGenBench 前排的提交几乎都用它。只做 3D 打印小件，OpenSCAD 最容易一次跑通。

### build123d 和 CadQuery 哪个更适合 AI？

两者用同一个内核（OCCT）。CadQuery 语料更多，第一版代码更容易跑；build123d 的对象和选择更显式，方便 AI 在中途检查，公开基准上的最好成绩也来自 build123d。

### OpenSCAD 能导出 STEP 吗？

本身不能，它只产出三角网格（STL、3MF 等）。要 STEP 只能借助转换工具，螺纹这类曲面转出来仍是折面；几种办法的对比见[《OpenSCAD 怎么导出 STEP》](/zh/blog/openscad-to-step-guide)。

### ChatGPT、Claude 能直接写 SolidWorks 宏吗？

能写，也常常能跑，但选面选边靠坐标和界面名字，尺寸一改就容易选错；而且得开着一份授权的 SolidWorks 才能执行和验证。

### KCL 是什么？

Zoo 公司为自家 CAD 设计的建模语言。几何在 Zoo 云端的引擎里计算，可以在 Zoo Design Studio 里和界面双向编辑。

### FeatureScript 能用来让 AI 建模吗？

能，Onshape 在 2026-09 推出了 FeatureScript MCP Server。但它更适合生成可复用的自定义特征，而不是一次性的零件。

## 来源

- [CADGenBench 排行榜](https://huggingface.co/spaces/HuggingAI4Engineering/CADGenBench)（2026-10-30 查看）与[代码仓库](https://github.com/huggingface/cadgenbench)
- [BenchLM 的 CADGenBench 生成题快照](https://benchlm.ai/md/benchmarks/cadgenbenchgeneration.md)（2026-10-28）
- [build123d-mcp](https://pypi.org/project/build123d-mcp/)
- [Text2CAD-Bench](https://arxiv.org/abs/2605.18430)、[BenchCAD](https://arxiv.org/abs/2605.10865)、[CAD-Recode](https://arxiv.org/abs/2412.14042)
- [ModelRift：CadQuery vs OpenSCAD](https://modelrift.com/blog/cadquery-vs-openscad/)、[GrandpaCAD：OpenSCAD vs CadQuery vs Build123d](https://grandpacad.com/en/blog/openscad-vs-cadquery-vs-build123d)
- [CadQueryEval](https://github.com/danwahl/cadqueryeval)
- [Onshape：FeatureScript MCP Server](https://www.onshape.com/en/blog/featurescript-mcp-server-use-cases-text-code-cad)、[FeatureScript 标准库文档](https://cad.onshape.com/FsDoc/library.html)
- [KCL fillet 文档（KCL 3.0）](https://zoo.dev/docs/kcl-std/functions/std-solid-fillet)、[Zoo Design Studio 发布记录](https://github.com/KittyCAD/modeling-app/releases)
- 版本号：[build123d](https://pypi.org/project/build123d/)、[CadQuery](https://pypi.org/project/cadquery/)（PyPI，2026-10-30 查看）
