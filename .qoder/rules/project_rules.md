# 艺创AI项目结构分析

## 项目概述

艺创AI是一个基于Astro框架开发的AI服务平台网站，主要用于展示和销售AI相关系统源码和服务。项目集成了Tailwind CSS和Alpine.js，提供了丰富的UI组件和交互功能。

- **框架**：基于Astro构建，集成了Tailwind CSS和Alpine.js
- **主题**：AI服务平台，提供多种AI解决方案的源码和服务
- **目标用户**：需要AI系统解决方案的企业和个人

## 项目结构

### 目录结构

项目遵循标准的Astro项目结构：

```
/src
  /assets        - 图片和其他静态资源
  /components    - 网站的各个组件（Header、Footer、Features等）
  /content       - 内容集合（博客等）
  /layouts       - 页面布局组件
  /pages         - 网站的各个页面
  /scripts       - JavaScript工具和脚本
  /styles        - 全局样式文件
/public          - 静态资源目录
/.astro          - Astro配置和类型定义
/dist            - 构建输出目录
```

### 核心组件

项目包含以下核心组件：

1. **布局组件**
   - `Layout.astro` - 基础布局组件，提供所有页面的基本HTML结构

2. **页面组件**
   - `index.astro` - 网站首页
   - `ai.astro` - AI知识库产品页面
   - `human.astro` - AI数字人产品页面
   - `chat.astro` - AI聊天绘画产品页面
   - `paper.astro` - AI论文创作产品页面
   - 其他产品和服务页面

3. **通用组件**
   - `Header.astro` - 网站顶部导航栏
   - `Footer.astro` - 网站底部信息
   - `Hero.astro` - 首页顶部英雄区域
   - `Products.astro` - 产品展示组件
   - `ServiceFeatures.astro` - 服务特性展示
   - `Contact.astro` - 联系表单
   - `QRModal.astro` - 二维码弹窗组件

4. **产品相关组件**
   - `Hero/AiModule.astro` - AI模块展示
   - `Hero/DemoModule.astro` - 演示模块
   - `Hero/WorkModule.astro` - 工作流程模块
   - `Hero/Structure.astro` - 架构设计展示
   - `EnterpriseOS.astro` - 企业OS组件

## 技术栈

### 核心依赖

```json
{
  "dependencies": {
    "@astrojs/alpinejs": "^0.4.0",
    "@astrojs/tailwind": "^5.1.0",
    "alpinejs": "^3.13.5",
    "astro": "^5.2.5",
    "marked": "^15.0.7",
    "material-icons": "^1.13.14",
    "tailwindcss": "^3.4.1",
    "typed.js": "^2.1.0",
    "typewriter.js": "^0.0.7"
  }
}
```

### 主要技术栈

1. **Astro** - 静态站点生成器，支持部分水合和组件岛屿
2. **Tailwind CSS** - 实用优先的CSS框架
3. **Alpine.js** - 轻量级JavaScript框架，用于交互功能
4. **Material Icons** - 图标库
5. **Typed.js/Typewriter.js** - 打字效果库

## 产品与服务

项目展示的主要产品和服务包括：

1. **AI数字人系统** - 为企业主、个人博主打造短视频IP的数字人源码系统
2. **全能AI知识库系统** - 支持问答式和文档式知识库的企业智能客服系统
3. **AI聊天绘画系统** - 提供智能对话与创作功能
4. **AI论文创作系统** - 智能论文写作助手

这些产品均提供PHP和Java双语言版本，支持私有化部署。

## 开发规范

### 组件开发规范

1. **组件命名** - 使用PascalCase命名组件文件
2. **组件注释** - 每个组件文件顶部应包含详细的组件说明注释
3. **类型定义** - 使用TypeScript接口定义组件属性
4. **默认值** - 为可选属性提供合理的默认值

### 样式规范

1.  **使用Tailwind类** - 优先使用Tailwind提供的工具类
2.  **暗黑模式支持** - 所有组件应支持暗黑模式切换
3.  **响应式设计** - 确保在各种屏幕尺寸下正常显示

### Bento Grid / Linear 风格设计规范 (New)

项目全面采用 **Bento Grid (便当盒)** 和 **Linear (线性)** 设计风格，强调几何感、秩序感和技术专业性。

#### 1. 核心原则
*   **直角化 (Sharp Corners)**: 核心容器、卡片、按钮统一使用 `rounded-none` 或极小圆角 (`rounded-sm`)，严禁使用大圆角。
*   **边框优先 (Border-First)**: 使用边框 (`border`) 代替阴影 (`shadow`) 来定义层级。
*   **极简布局 (Minimalism)**: 减少装饰性背景，使用纯色背景 + 细边框，依靠排版和间距构建视觉流。
*   **微交互 (Micro-Interactions)**: 动效需克制且精准，如 Hover 时边框变色、图标微移、文字颜色变化。

#### 2. 通用样式类 (Utility Classes)
在 `global.css` 中定义了以下实用类，开发时请优先使用：

*   **容器类**:
    *   `.bento-card`: 基础卡片样式（直角、边框、无阴影）。
    *   `.bento-grid`: 标准网格布局容器。
*   **装饰类**:
    *   `.corner-marker`: 四角 L 形装饰，增强科技感。
    *   `.border-glow`: 边框微光效果。
*   **排版类**:
    *   `.font-mono`: 标签、代码片段、技术参数使用等宽字体。

#### 3. 组件设计模式
*   **卡片 (Cards)**:
    *   Default: `border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-none`
    *   Hover: `hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300`
*   **按钮 (Buttons)**:
    *   Primary: `bg-blue-600 text-white rounded-none hover:bg-blue-700`
    *   Secondary: `border border-gray-300 text-gray-700 rounded-none hover:bg-gray-50`
*   **标签 (Tags)**:
    *   Style: `font-mono text-xs border rounded-none px-2 py-0.5`

### SEO优化

1. **元数据设置** - 每个页面应设置适当的标题、描述和关键词
2. **Open Graph标签** - 添加社交媒体分享所需的Open Graph标签
3. **结构化数据** - 适当使用结构化数据标记

## 构建与部署

### 开发环境

```bash
npm run dev  # 启动开发服务器
```

### 生产构建

```bash
npm run build  # 构建生产版本
npm run preview  # 预览生产构建
```

### 部署

项目使用Vercel进行部署，配置文件为`vercel.json`。

## 项目维护

### 文件组织

- 保持组件目录结构清晰，相关组件应放在同一目录下
- 公共资源应放在`public`目录，组件特定资源放在`src/assets`

### 代码质量

- 遵循TypeScript类型检查
- 保持组件简洁，单一职责
- 重用现有组件，避免代码重复

### 性能优化

- 优化图片资源，使用适当的格式和大小
- 使用Astro的部分水合功能，减少JavaScript负载
- 利用Astro的视图转换功能提升页面切换体验
