# Forgent3D 官网产品文档

> 这份文档描述官网 (www.forgent3d.com) 讲什么、怎么讲。改了官网叙事就改这里；
> 过时的定位文档比没有更糟。产品本身的技术口径在 platform 仓库的 CLAUDE.md 与 docs/。

## 1. 产品定位

### 一句话定位

Forgent3D 是云端的 AI CAD agent：描述一个零件，它写出真正可编辑的参数化 CAD 代码、
构建出真实几何，交给你一个可以继续改的 3D 模型。

### 更短的官网口号

代码就是模型。

### 英文辅助口号

Code is Model.

### 两个入口，一套引擎

官网只讲两条路径，且必须讲清楚它们不是两个产品：

1. **云端 Agent**（app.forgent3d.com）— 打开标签页就能用，CAD 内核和构建环境已经跑着。
2. **Forgent3D Skill**（`npx skills add forgent3d/forgent3d-skills`）— 让用户已经在用的
   AI agent（Claude Code、Codex、Cursor…）拥有同一个 CAD agent；模型代码留在用户自己的
   仓库，构建仍在云端，结果落回同一个工作区。

同一个 agent、同一套 CAD 引擎、同一个工作区。区别只在于**从哪里发起、代码留在哪里**。

### 面向用户

- 正在用 Claude Code、Codex、Cursor 等 AI 编程工具，希望它们也能做 CAD 的开发者。
- 想用参数、代码和版本管理 3D 模型，而不是靠鼠标记忆操作步骤的工程师。
- 需要快速把一个零件想法变成可验证几何的产品原型 / 硬件创作者。
- 不想为了试一个想法先装 Python CAD 内核、编译工具链和一堆依赖的人。

### 产品边界

Forgent3D 不是传统参数化 CAD 软件的完整替代品。它的价值是把 AI 生成、真实几何构建、
自动校验和可编辑预览连成一个更短的建模闭环。

## 2. 官网信息架构

### 站点地图

```text
/[locale]                        首页（单页滚动）
/[locale]/skills                 Skills 落地页（安装、支持的 agent、流程、示例 prompt）
/[locale]/quick-start            快速开始（网页入口 + skill 入口）
/[locale]/pricing                方案（云端 Agent / Forgent3D Skill 两张卡）
/[locale]/local-data             云端与本地数据边界
/[locale]/ai-3d-model-generation SEO 落地页
/[locale]/code-to-parametric-cad SEO 落地页
/[locale]/contact                联系我们
/m/[shareSlug]                   公开模型分享页（含 details / view）
```

locale 只有 `en` 和 `zh`，两边文案必须同时更新——文案住在各页的 `getCopy(locale)`，
首页住在 `app/lib/landing-page.js` 的 `COPY`。

### 首页区块顺序

```text
[Nav]     Agent | Skills | 两种用法 | 方案 | 联系我们 | 进入工作台 | GitHub | 语言

[Hero]    左：标题 + 副标题 + 三个 CTA（登录 / 安装 Skill / 观看演示）
          右：产品界面大图（可点开灯箱）

[Agent Loop]   输入 → Agent → Sandbox → 预览（四张卡，第三张高亮）

[Demo]         四张真实产品截图：描述需求 / 规划零件 / 生成几何 / 预览修正

[Why Cloud]    不用配置 CAD 环境 | 内置 Agent 闭环 | 能装进你的 AI IDE

[Skills]       安装命令（可复制）+ 已验证 agent chips + 三步流程 + 配置指南入口

[Compare]      Forgent3D 云端  vs  Forgent3D Skill  + 共同承诺

[Footer]       导航 + 指南链接 + 一条灰色的「开源桌面版」链接
```

### 各区块要说的话

**Hero** — 3 秒内说清两件事：这是云端 AI CAD agent；如果你已经有 agent，一条命令就能接上。

**Agent Loop** — 强调「不是一次性 mesh」：agent 写的是可编辑 CAD 代码，跑在准备好的云端环境里。

**Demo** — 用真实截图证明上一段不是吹的。四步与 Loop 区一一对应。

**Why Cloud** — 云端的价值不是「更方便」，而是**环境已经跑着**：内核、构建工具、agent 编排
都在服务端，用户只带设计意图来。第三张卡负责把话头递给 Skills。

**Skills** — 官网唯一需要出现命令行的地方。命令必须可一键复制（`.js-copy-command`），
已验证 agent 列表照抄产品内 `skills-guide.tsx`，不要各写一份。

**Compare** — 两栏不是「基础版 vs 高级版」，而是两扇门。副标题必须点明「同一个 agent、
同一套 CAD 引擎、同一个工作区」，避免用户以为要二选一。

## 3. 品牌语气

### 应该强调

- 真实几何和可编辑代码，而不是图片或不可控 mesh。
- agent 会自己验证：每次改完都构建并测量，形状不对在用户看到之前就发现。
- 免配置：没有内核要装，没有依赖要修。
- 模型是资产：可以调参数、编辑草图、分享、留版本。
- 已经在用 AI IDE 的人，不需要换工具，只需要装一个 skill。

### 避免

- 不写「替代 SolidWorks / Fusion / CATIA」。
- 不写「全自动生成工业级 CAD」。
- 不写「支持所有模型 / 所有格式」。
- 不把两条入口写成互相竞争，或写成「简化版 / 完整版」。
- 不在首页堆技术名词（OCCT、BREP、SceneIR 这些留给文档）。

### 桌面版怎么提

开源桌面版仍然存在，官网上按**脚注**处理：footer 里一条低对比度链接，指向 GitHub Releases，
保留原有 `js-download-link` 埋点。不在导航、hero、功能区、对比区、方案页里出现，也不写
「不再维护」之类的话——只是不再是主线叙事。

例外：`/m/[shareSlug]/details` 的模型包使用说明和 `/[locale]/gallery` 的来源说明仍然写桌面端，
因为那些压缩包**确实**是桌面端项目目录结构，改成 skills 说法会误导下载的人。

## 4. 视觉与展现形式

### 整体风格

深色工程风，不做泛 AI SaaS 质感。关键词：

- 深色背景（`#050b14` 系）+ 径向渐变光晕 + 网格底纹
- 青色 `cyanx` 主色，紫色 `violetx` 作渐变副色，`signal` 作状态强调
- 圆角 2rem 的面板卡片、`backdrop-blur`、细线边框 `border-line`
- 等宽字体（IBM Plex Mono）承载 eyebrow、序号、命令行和 chip

### 实现约定

- 首页是模板字符串拼 HTML（`getLandingPageHtml`），用 Tailwind class；子页面是正常 JSX。
- 所有外链和埋点通过 class hook 接：`js-try-link`、`js-workbench-link`、`js-skills-cta`、
  `js-skills-repo-link`、`js-pricing-link`、`js-github-link`、`js-download-link`、`js-copy-command`。
  链接真值集中在 `public/site-links.js`，行为在 `public/script.js`。
- 安装命令、skills 仓库地址、已验证 agent 列表是 `app/lib/landing-page.js` 里的导出常量
  （`SKILLS_INSTALL_COMMAND` / `SKILLS_REPO_URL` / `SKILLS_AGENTS`），首页和 `/skills` 共用一份。
- 图片一律 webp + 回退 png，配 `srcset/sizes`；hero 图 preload。
- 移动端优先验证：hero 区、Skills 命令行（横向滚动不要顶破页面）、对比区两栏堆叠。

### 埋点事件

`homepage_viewed`、`try_clicked`、`click_pricing`、`click_skills`、`click_skills_repo`、
`copy_skills_command`、`click_download_desktop`、`click_github`。新增 CTA 就补一条，
别复用语义不符的事件名。

## 5. 上线与迭代建议

已完成：首屏、Agent 闭环、真实截图 Demo、Why Cloud、Skills 区块与落地页、两种用法对比、
方案页、数据边界页、两个 SEO 落地页。

后续可以补：

- Skills 落地页加一段真实终端录屏或对话截图（现在只有文字流程）。
- 模型库（`/[locale]/gallery`）目前在导航和 sitemap 里都是注释状态，等公开模型够多再放出来。
- 案例页：一个零件从 prompt 到可下载 STEP 的完整过程。
- 团队 / 额度方案说明，目前统一走联系邮箱。
