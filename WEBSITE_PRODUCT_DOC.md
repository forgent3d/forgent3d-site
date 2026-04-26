# Forgent3D 官网产品文档

## 1. 产品定位

### 一句话定位

Forgent3D 是面向 AI 时代的代码驱动 CAD 预览器：用 build123d / CadQuery 写模型代码，在桌面端实时重建、预览、截图和验证三维几何。

### 更短的官网口号

代码就是模型。

### 英文辅助口号

Code is Model.

### 面向用户

Forgent3D 适合这些人：

- 正在用 Cursor、Claude、Codex 等 AI 编程工具生成 CAD 代码的开发者。
- 希望用 Python、Git 和可复用参数管理 3D 模型的工程师。
- 想让 AI 代理不只“写代码”，还可以通过重建、量测、截图验证几何结果的创作者。
- 喜欢代码工作流，但不想每次都手动运行脚本、找导出文件、切换查看器的用户。

### 产品边界

Forgent3D 不是传统参数化 CAD 软件的完整替代品。它的核心价值是把 AI 编程、Python CAD、实时预览和本地 MCP 验证连接成一个更短的建模闭环。

## 2. 官网信息架构

建议首页采用单页滚动结构，先讲清楚“它解决什么问题”，再展示“它怎么工作”，最后给出下载和开源入口。

### Section 1: 首屏 Hero

目标：3 秒内让用户明白这是一个 AI + CAD + 代码预览工具。

主标题：

> 用代码生成真实 3D 模型

副标题：

> Forgent3D 把 build123d / CadQuery 模型代码实时重建为可预览的三维几何，并通过本地 MCP 工具让 AI 代理完成重建、截图和几何验证。

短标签：

- Code is Model
- AI CAD Previewer
- build123d / CadQuery
- Local MCP Workflow

CTA：

- 主按钮：下载 Forgent3D
- 次按钮：查看 GitHub

首屏视觉：

左侧放标题、简介和按钮。右侧展示一个深色 3D 视口：中间是机械零件模型，旁边浮动三张小卡片，分别写着 `rebuild_model ok`、`screenshot_model iso`、`get_model_info bbox`。这能直接传达“模型不是图片，而是可验证的几何结果”。

### Section 2: 痛点

标题：

> AI 会写 CAD 代码，但它需要看见结果

正文：

> 让 AI 生成 Python CAD 代码很快，但真正的建模反馈往往断在下一步：你需要手动运行脚本、处理环境错误、导出文件、打开查看器，再把结果描述给 AI。Forgent3D 把这些步骤收进一个本地桌面工作流，让代码、预览和验证保持同步。

要点：

- 不再把 PNG/JPG 当作 CAD 交付物。
- 不再依赖猜测判断模型是否构建成功。
- 不再在编辑器、终端、导出目录和查看器之间反复切换。

### Section 3: 工作流

标题：

> 从一句需求到可验证模型

步骤文案：

1. 在 AI IDE 里描述你想要的零件，例如齿轮、支架、外壳或装配结构。
2. AI 在 `models/<name>/part.py` 或 `asm.py` 中生成 build123d / CadQuery 代码。
3. Forgent3D 重建模型并生成可预览缓存。
4. 通过本地 MCP 工具，AI 可以读取构建结果、截图和模型信息。
5. 你在 3D 视口中检查结果，继续迭代参数和结构。

页面呈现：

用一条横向流程线展示：

Prompt -> Python CAD Code -> Rebuild -> 3D Preview -> MCP Evidence -> Iterate

其中 `MCP Evidence` 可以高亮，用来形成产品差异化。

### Section 4: 核心功能

标题：

> 为 AI CAD 工作流做的桌面预览器

功能文案：

#### 实时重建与预览

保存模型代码后，Forgent3D 负责触发重建并刷新 3D 预览。你关注参数、结构和设计意图，工具负责把代码变成可查看的几何。

#### 支持 Python CAD 内核

围绕 build123d 和 CadQuery 工作流设计，模型源码以 `part.py` / `asm.py` 管理，并通过全局 `result` 输出几何对象。

#### 本地 MCP 验证闭环

内置 `aicad` MCP 服务，提供 `rebuild_model`、`get_model_info`、`screenshot_model` 和 `list_models` 等工具。AI 代理可以基于真实构建结果继续迭代，而不是凭空猜测模型是否正确。

#### 面向代码项目

模型放在清晰的项目目录中，适合 Git 管理、代码审查、参数化复用和 AI 协作。

#### 截图与导出

支持从模型预览中生成常用视角截图，并围绕 BREP 缓存与导出流程组织预览体验。

### Section 5: AI IDE 集成

标题：

> 让 AI 代理拥有 CAD 反馈

正文：

> Forgent3D 不只是查看器。它会为不同 AI 编程环境生成项目规则和 MCP 配置，让代理知道模型源码在哪里、如何重建、如何截图，以及什么时候应该停止猜测并请求真实工具反馈。

卡片文案：

- Cursor：在项目规则中约定模型结构、验证方式和最终交付。
- Claude / Codex / 其他代理：通过项目说明和 MCP 入口接入同一套本地验证流程。
- 本地优先：模型代码、构建结果和截图都发生在你的机器上。

### Section 6: 使用场景

标题：

> 适合从代码开始的 3D 建模

场景：

#### 机械零件草图

用自然语言描述支架、法兰、外壳、夹具等结构，让 AI 生成参数化初稿，再通过预览快速调整。

#### 参数化产品原型

把尺寸、孔位、厚度、倒角等设计变量保留在代码顶部，让模型可以持续迭代，而不是停留在一次性生成结果。

#### AI 建模实验

测试不同 LLM 对 CAD 代码的生成能力，通过本地重建和截图快速判断结果质量。

#### 开源硬件与教育

用代码解释模型结构，让学习者同时看到参数、几何逻辑和最终三维形态。

### Section 7: 开源与下载

标题：

> 开源、可下载、可本地运行

正文：

> Forgent3D 采用 MIT 协议开源。你可以从 GitHub Releases 下载最新版本，也可以在本地运行源码并参与改进。

CTA：

- 下载最新版本
- Star on GitHub
- 查看快速开始

注意文案：

> 当前版本仍在快速迭代中。不同平台和 Python CAD 环境的支持能力会持续完善，具体以 Release 页面和项目说明为准。

## 3. 首页完整文案草案

### Hero

主标题：

> 用代码生成真实 3D 模型

副标题：

> Forgent3D 是 AI 时代的代码驱动 CAD 预览器。用 build123d / CadQuery 编写模型代码，在桌面端实时重建和预览，并让 AI 代理通过本地 MCP 工具验证几何结果。

按钮：

- 下载 Forgent3D
- 查看 GitHub

辅助说明：

> Code is Model. 让模型成为可以版本管理、可以审查、可以被 AI 迭代的代码。

### 痛点区

标题：

> AI 写出了 CAD 代码，然后呢？

正文：

> 生成代码只是第一步。真正重要的是：它能不能构建？尺寸对不对？视图里看起来像不像？Forgent3D 把重建、预览、截图和模型信息暴露给本地工具，让 AI CAD 工作流从“生成”进入“验证”。

### 功能区

标题：

> 一个窗口，连接代码、模型和 AI

功能短句：

- 写 Python CAD 代码，马上看到 3D 结果。
- 用 build123d / CadQuery 管理真实几何，而不是图片占位。
- 通过 MCP 工具让 AI 读取构建状态、模型信息和截图。
- 用项目规则约定模型结构，让代理按正确方式生成和修复代码。
- 保持本地工作流，适合实验、原型和开源项目。

### 工作流区

标题：

> 你的新建模循环

正文：

> 描述需求，生成模型代码，重建预览，读取证据，继续迭代。Forgent3D 把这条链路固定下来，让每一次修改都有明确反馈。

步骤：

1. Tell: 描述你想要的模型。
2. Code: AI 生成参数化 Python CAD。
3. Build: Forgent3D 重建几何。
4. See: 在桌面端查看 3D 预览。
5. Verify: AI 通过 MCP 获取截图和模型信息。
6. Iterate: 基于真实结果继续修改。

### MCP 区

标题：

> 给 AI 的 CAD 工具箱

正文：

> Forgent3D 内置本地 MCP 服务。代理可以调用工具列出模型、触发重建、获取边界盒和面数、生成指定视角截图。这样，AI 不需要凭感觉判断模型是否正确，它可以先看结果，再继续建模。

工具展示：

- `rebuild_model`: 构建当前模型并返回成功状态与错误信息。
- `get_model_info`: 读取边界盒、面数和缓存状态。
- `screenshot_model`: 生成 iso / front / side / top 等视角截图。
- `list_models`: 获取项目中的模型列表和当前模型。

### 收尾 CTA

标题：

> 开始用代码建模

正文：

> 下载 Forgent3D，把你的 AI IDE、Python CAD 代码和本地 3D 预览连接起来。

按钮：

- 下载最新版本
- 查看源码

## 4. 视觉与展现形式

### 整体风格

建议使用深色科技风，但不要做成泛 AI SaaS 质感。Forgent3D 的核心是工程工具，所以视觉应更接近“代码编辑器 + CAD 视口 + 构建反馈”。

关键词：

- 深色背景
- 高对比代码高亮
- 线框 / BREP / 机械零件
- 绿色构建成功状态
- 蓝紫色 AI 辅助光效
- 少量网格和坐标轴元素

### 首页首屏布局

左侧：

- Logo
- 主标题
- 副标题
- 两个 CTA
- 一行技术标签

右侧：

- 大尺寸 3D preview mockup
- 左下角代码片段卡片
- 右上角 MCP tool result 卡片
- 底部状态条：`rebuild_model: ok`

### 推荐动效

首屏动效：

- 代码卡片里高亮参数变化，例如 `hole_count = 6` 变成 `hole_count = 8`。
- 3D 模型轻微旋转，展示它是真实可查看对象。
- MCP 卡片依次出现：Build OK、Screenshot Saved、BBox Read。

工作流区动效：

- 横向流程线随滚动点亮。
- 从 Prompt 到 Preview 的每一步出现一个小状态反馈。

功能区动效：

- 每张功能卡片 hover 时显示对应工具输出，例如构建日志、截图视角、边界盒信息。

### 可视化素材建议

优先展示这些模型：

- 法兰盘：能体现参数化、孔阵列和机械感。
- 支架：能体现孔位、厚度、倒角和工程用途。
- 小型外壳：能体现装配感和真实产品原型。
- 齿轮：适合作为 AI CAD 的直观符号，但不要只用齿轮，避免显得像玩具 demo。

### 页面结构草图

```text
[Nav]
Logo | Product | Workflow | MCP | Download | GitHub

[Hero]
Left: headline + copy + CTA
Right: 3D viewport mockup + code card + MCP result card

[Pain]
"AI wrote CAD code. Now verify it."

[Workflow]
Prompt -> Code -> Rebuild -> Preview -> MCP Evidence -> Iterate

[Features]
Realtime Preview | Python CAD Kernels | Local MCP | Project Rules | Screenshots

[Use Cases]
Mechanical parts | Parametric prototypes | AI experiments | Education

[Open Source CTA]
Download | GitHub | MIT License
```

## 5. 品牌语气

### 应该强调

- 真实几何，而不是图片。
- 本地工作流，而不是云端黑箱。
- AI 可以验证，而不是只会猜。
- 代码可管理、可复用、可审查。
- 适合快速原型、实验和开源协作。

### 避免夸大

- 不写“替代 SolidWorks / Fusion / CATIA”。
- 不写“全自动生成工业级 CAD”。
- 不写“无需任何环境即可支持所有模型”。
- 不写“全平台正式发布”，除非发布流程已经覆盖。
- 不把 MCP 写成云服务能力，它是本地工具闭环。

## 6. 推荐最终首页标题组合

### 版本 A：开发者友好

> Code is Model

> Forgent3D connects Python CAD code, real-time 3D preview, and local MCP validation for AI-assisted modeling.

### 版本 B：中文主站

> 代码就是模型

> 用 AI 生成 Python CAD，在桌面端实时预览，并通过本地工具验证真实几何。

### 版本 C：更产品化

> AI CAD 的本地预览与验证工作台

> 从一句需求到可查看、可重建、可迭代的三维模型。

## 7. 上线建议

第一版官网不需要做得很重。建议优先完成：

1. 一个清楚的首屏。
2. 一张真实产品截图或高保真 mockup。
3. 一个 6 步工作流图。
4. 一个 MCP 验证区。
5. 下载和 GitHub CTA。

后续再补：

- Quick Start 文档。
- 示例模型 Gallery。
- Cursor / Claude / Codex 接入教程。
- build123d 和 CadQuery 的分开示例。
- Release notes 和已知限制。
