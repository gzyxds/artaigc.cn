# 艺创AI - 专业AI系统源码解决方案

![艺创AI](src/assets/logo.png)

艺创AI是一个专注于提供AI系统源代码解决方案的技术平台，为企业和个人提供多种AI系统源码产品，包括AI数字人系统、企业全能AI知识库、AI聊天绘画系统和AI论文写作系统。本项目基于Astro框架构建，集成了Tailwind CSS和Alpine.js，提供现代化、响应式的用户界面和流畅的交互体验。

## 🚀 在线预览

[访问艺创AI官网](https://artaigc.cn)

## ✨ 产品与服务

艺创AI提供以下核心产品和服务：

### 1. AI数字人系统
为企业主、个人博主打造短视频IP的数字人源码系统，支持声音克隆和数字人合成。

### 2. 全能AI知识库系统
支持问答式和文档式知识库的企业智能客服系统，帮助企业构建专属知识库。

### 3. AI聊天绘画系统
提供智能对话与创作功能，支持多种AI模型和绘画风格。

### 4. AI论文创作系统
智能论文写作助手，快速生成论文大纲和内容。

所有产品均提供PHP和Java双语言版本，支持私有化部署。

## 🛠️ 技术栈全面分析

### 1. 核心框架 (Core Framework)
- **[Astro](https://astro.build/) (v5.14.1)**: 项目的基础框架。
  - **渲染模式**: **SSG (静态站点生成)**。目前配置为静态 HTML 构建。
  - **语言**: **TypeScript**。严格模式配置，确保类型安全。
  - **构建工具**: **Vite**。Astro 内置，配置了路径别名 `@` 指向 `/src`。

### 2. 样式与 UI (Styling & UI)
- **[Tailwind CSS](https://tailwindcss.com/) (v3.4.1)**: 主要样式解决方案。
  - **集成**: 通过 `@astrojs/tailwind` 集成。
  - **配置**: 自定义色彩系统（蓝/灰/亮蓝/黄）、暗黑模式支持、自定义动画（如 fade-in, slide-up）。
  - **字体**: Inter (正文) 和 Lexend (展示)。
- **Material Icons (v1.13.14)**: 用于项目中的图标展示。

### 3. 交互与动态效果 (Interactivity)
- **[Alpine.js](https://alpinejs.dev/) (v3.13.5)**: 轻量级客户端交互。
  - **集成**: 通过 `@astrojs/alpinejs` 集成，符合 Astro 的“岛屿架构”。
- **Typed.js (v2.1.0) & Typewriter.js**: 用于实现着陆页的打字机文字特效。

### 4. 内容管理 (Content Management)
- **Marked (v15.0.7)**: 用于解析和渲染 Markdown 内容。
- **Content Collections**: 使用 Astro 的内容集合功能组织结构化内容（如博客）。

### 5. 构建与部署 (Build & Deployment)
- **平台**: **Vercel**。
- **配置**: 使用 `vercel.json` 和自定义构建脚本 `npm run vercel-build`。

## 📦 项目结构

```
/
├── public/                 # 静态资源目录
│   ├── assets/             # 图片和图标资源
│   ├── fonts/              # 字体文件
│   └── favicon.ico         # 网站图标
├── src/                    # 源代码目录
│   ├── assets/             # 组件使用的资源
│   ├── components/         # 可复用组件
│   │   ├── Hero/           # 首页英雄区域相关组件
│   │   └── ...             # 其他组件
│   ├── content/            # 内容集合（博客等）
│   ├── layouts/            # 页面布局组件
│   ├── pages/              # 网站页面
│   ├── scripts/            # JavaScript脚本
│   └── styles/             # 全局样式
├── astro.config.mjs        # Astro配置文件
├── tailwind.config.mjs     # Tailwind CSS配置
└── package.json            # 项目依赖
```

## 🎨 设计特点

- **响应式设计** - 适配PC、移动端、平板等多种设备
- **深色模式支持** - 提供亮色和暗色两种主题模式
- **现代UI组件** - 包含丰富的现代化UI组件和交互效果
- **平滑过渡动画** - 页面切换和元素加载时的平滑过渡效果
- **SEO优化** - 针对搜索引擎优化的元数据和结构

## 🧞 常用命令

所有命令需在项目根目录下执行：

| 命令                   | 作用                      |
| :-------------------- | :----------------------- |
| `npm install`         | 安装项目依赖              |
| `npm run dev`         | 启动本地开发服务器        |
| `npm run build`       | 构建生产环境代码          |
| `npm run preview`     | 预览构建结果              |
| `npm run astro`       | 运行Astro CLI命令         |

## 🚀 快速开始

1. 克隆本仓库
   ```bash
   git clone https://github.com/yourusername/artaigc.git
   cd artaigc
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 在浏览器中访问 `http://localhost:4321` 查看效果

## 📱 主要功能

- **多产品展示** - 展示多种AI系统产品和解决方案
- **全模型支持** - 支持OpenAI和多种国内外大模型
- **多端适配** - 适配PC、移动端、平板等设备
- **源码开放** - 提供完全开放的系统源码
- **私有部署** - 支持本地私有化部署
- **双语言版本** - 提供PHP和Java两种语言版本

## 🔧 定制指南

### 颜色配置

模板包含预定义的配色方案（位于 `tailwind.config.mjs`）：

- 主色系：蓝色系
- 辅色系：石板灰系
- 强调色：青柠色系

可通过修改 `tailwind.config.mjs` 文件自定义颜色。

### 字体配置

使用以下字体组合：

- 无衬线字体：Inter（带系统备用字体）
- 展示字体：Lexend（带系统备用字体）

## 🌐 部署

项目使用Vercel进行部署，配置文件为`vercel.json`：

```json
{
  "buildCommand": "npm run vercel-build",
  "outputDirectory": "dist",
  "framework": "astro",
  "installCommand": "npm install"
}
```

## 📝 许可协议

本项目采用 [MIT 许可协议](LICENSE)

## 📞 联系我们

- 官方网站：[https://artaigc.cn](https://artaigc.cn)
- 电子邮件：contact@artaigc.cn
- QQ群：123456789

## 👀 扩展学习

- [Astro 文档](https://docs.astro.build)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Alpine.js 文档](https://alpinejs.dev/start-here)