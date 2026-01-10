# 艺创AI (Artaigc) 设计系统规范 v2.0

## 1. 核心理念 (Core Philosophy)

本设计系统基于 **"Enterprise Minimalist" (企业级极简)** 理念构建，融合了 **Linear (线性美学)** 与 **Bento Grid (几何秩序)** 的设计精髓。我们的目标是打造一个**专业、克制、高可用**的用户界面，服务于复杂的AI系统与数据展示需求。

### 设计原则
*   **内容至上 (Content First)**: 极致的减法设计，去除一切非功能性装饰，让信息成为主角。
*   **几何秩序 (Geometric Order)**: 严格遵循 8px 网格系统与 Bento 布局，构建理性、稳固的视觉结构。
*   **线性层级 (Linear Hierarchy)**: 摒弃弥散阴影，使用高精度的边框 (`border`) 与微弱的背景色差来定义空间层级，确保在任何屏幕上的清晰度。
*   **克制交互 (Restrained Motion)**: 交互反馈应迅速且细腻（如 200ms ease-out），避免过度炫技，强调工具的掌控感。

## 2. 视觉基础 (Visual Foundation)

### 2.1 色彩系统 (Color System)

采用语义化变量管理色彩，底层使用 RGB 值以支持透明度通道 (`/alpha`) 修改。

| 语义变量 | CSS变量 (RGB) | Light Mode | Dark Mode | 用途说明 |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `--bg-background` | `#FFFFFF` | `#0A0A0A` | 页面底层背景 |
| **Surface** | `--bg-surface` | `#FAFAFA` | `#171717` | 卡片、侧边栏、浮层背景 |
| **Border** | `--border-default`| `#E5E5E5` | `#262626` | 默认边框，用于分割区域 |
| **Primary** | `--color-brand` | `#2563EB` | `#3B82F6` | 品牌主色 (Blue 600/500) |
| **Text Main** | N/A (Tailwind) | `neutral-900`| `neutral-100`| 主要标题、正文 |
| **Text Muted** | N/A (Tailwind) | `neutral-600`| `neutral-400`| 次要信息、说明文案 |

### 2.2 排版系统 (Typography)

全站采用 **Inter** (西文) 与 **系统默认无衬线字体** (中文) 组合。字号使用 `clamp()` 函数实现流体响应，同时通过文本颜色建立清晰的视觉层级。

*   **Display**: `clamp(32px, 2.5vw + 1rem, 48px)` - 首页/着陆页主标题
*   **H1**: `clamp(28px, 2vw + 0.5rem, 36px)` - 页面标题
*   **H2**: `clamp(24px, 1.5vw + 0.5rem, 30px)` - 模块标题
*   **Body**: `16px` - 标准正文，行高 `1.6`
*   **Small**: `14px` - 辅助信息、标签
*   **Tiny**: `12px` - 说明注脚
*   **颜色层级建议**:
    *   标题类文本: 浅色模式 `text-neutral-900`，深色模式 `dark:text-neutral-100`
    *   正文内容: 浅色模式 `text-neutral-800`，深色模式 `dark:text-neutral-200`
    *   次级说明: 浅色模式 `text-neutral-500/600`，深色模式 `dark:text-neutral-400`

### 2.3 状态与反馈 (States & Feedback)

所有交互元素必须具备完整的状态定义，确保用户操作的可预期性。

| 状态 | 视觉表现 | 适用场景 |
| :--- | :--- | :--- |
| **Default** | 标准样式 | 初始状态 |
| **Hover** | 背景色变深/浅 5% 或边框颜色加深 | 鼠标悬停 |
| **Active** | 缩放 98% 或 背景色变深 10% | 点击按下 |
| **Disabled** | Opacity 50%, `cursor-not-allowed`, 去除交互 | 不可用/权限不足 |
| **Locked** | 模糊遮罩 (Blur-sm), 锁图标, 引导升级行动点 | **未缴纳/高级功能** |

## 3. 组件规范 (Component Specs)

### 3.1 容器与卡片 (Bento Cards)

*   **结构**: `.bento-card`
*   **圆角**: `rounded-none` (PC端默认) 或 `rounded-sm` (2px)
*   **边框**: 1px Solid `border-border`
*   **装饰**: 可选角落 L 型标记 (`.corner-marker`) 增强科技感
*   **锁定态**: 叠加 `backdrop-blur-[2px]` 层，中心展示 Lock Icon。

### 3.2 按钮 (Buttons)

*   **高度**: `40px` (常规), `32px` (小)
*   **Primary**: `bg-brand-600 text-white hover:bg-brand-700 rounded-none`
*   **Secondary**: `border border-border hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-none`
*   **Ghost**: `hover:bg-neutral-100 text-neutral-600 dark:text-neutral-400 rounded-sm`

### 3.3 输入框 (Inputs)

*   **风格**: 极简边框风格，无背景或极淡背景。
*   **Focus**: `ring-1 ring-brand-500 border-brand-500` (无扩散阴影)
*   **Error**: `border-red-500 text-red-500`

## 4. 布局模式 (Layout Patterns)

### 4.1 Bento Grid 仪表盘

适用于功能入口、数据概览。

```html
<div class="bento-grid grid-cols-1 md:grid-cols-4">
  <!-- 核心数据卡片 -->
  <div class="md:col-span-2 md:row-span-2 bento-card">...</div>
  <!-- 锁定功能卡片 -->
  <div class="bento-card relative group">
     <div class="absolute inset-0 bg-surface/80 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
       <icon class="lock" />
       <button>Upgrade</button>
     </div>
     <div class="content opacity-50">...</div>
  </div>
</div>
```

## 5. 开发速查 (Dev Cheatsheet)

*   **Utility Classes**:
    *   `.container-custom`: 最大宽度 1920px 的响应式容器
    *   `.text-balance`: 标题平衡换行
    *   `.bento-card-interactive`: 可点击卡片预设
*   **Icons**: 使用 Material Icons，统一 `20px` 或 `24px`。

