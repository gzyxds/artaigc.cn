---
alwaysApply: true
---
# 艺创AI (Artaigc) 项目开发规范

## 1. 项目概述

艺创AI是一个基于 Astro 框架构建的专业 AI 系统源码服务平台。项目采用 "Enterprise Minimalist" (企业级极简) 设计理念，融合 Linear 美学与 Bento Grid 布局，旨在提供高性能、高可维护性的现代化 Web 应用。

- **核心框架**: Astro v5+ (SSG Mode)
- **样式系统**: Tailwind CSS v3 + 自定义设计系统
- **交互逻辑**: Alpine.js v3 (Islands Architecture)
- **开发语言**: TypeScript

## 2. 目录结构

```
/src
  /assets        - 静态资源 (img, logos, blog)
  /components    - UI 组件库
    /common      - 通用组件 (Header, Footer, BackgroundGrid...)
    /home        - 首页特定组件 (Carousel, Aisd, EnterpriseOS...)
    /product     - 产品展示组件 (ProductCards, ShopModule...)
    /sections    - 功能区块组件 (Pricing, Contact, FQA...)
  /content       - 内容集合 (Markdown/MDX 博客文章)
  /data          - 数据配置文件 (products.ts, features.ts...)
  /layouts       - 页面布局模板 (Layout.astro)
  /pages         - 路由页面 (index, shop, demo, blog/...)
  /scripts       - 客户端脚本 (transitions.js)
  /styles        - 全局样式 (global.css, transitions.css)
```

## 3. 技术栈规范

### 核心依赖
- **Astro**: `^5.14.1` - 静态站点生成，零 JS 默认
- **Tailwind CSS**: `^3.4.1` (via `@astrojs/tailwind` `^6.0.2`) - 实用优先 CSS
- **Alpine.js**: `^3.13.5` (via `@astrojs/alpinejs` `^0.4.9`) - 轻量级交互
- **TypeScript**: `^5.9.3` - 类型安全
- **Marked**: `^15.0.7` - Markdown 解析

### 编码规范
1. **组件命名**: PascalCase (e.g., `ProductCard.astro`)
2. **文件结构**:
   - Imports
   - Props Interface (TypeScript)
   - Component Logic
   - Template (HTML)
   - Styles (Scoped CSS or Tailwind)
3. **类型安全**: 所有组件 Props 必须定义 TypeScript 接口。
4. **图像优化**: 使用 Astro `<Image />` 组件或标准的 `img` 标签配合 `lazy` loading。

## 4. 设计系统 (Design System)

项目严格遵循 **Linear & Bento Grid** 设计规范。

### 4.1 核心原则
*   **直角化 (Sharp Corners)**: 容器、按钮统一使用 `rounded-none` 或 `rounded-sm` (2px)。
*   **边框优先 (Border-First)**: 使用高精度边框 (`border-border`) 代替阴影定义层级。
*   **克制动效**: 使用 `duration-200` 或 `duration-300` 的 `ease-out` 动画。

### 4.2 语义化色彩
**禁止硬编码颜色值**。必须使用 `global.css` 定义的语义变量：
*   `bg-background` / `bg-surface`
*   `border-border`
*   `text-brand-600` / `bg-brand-600`

### 4.3 排版系统 (Fluid Typography)
使用 `clamp()` 函数实现流体响应，严禁使用固定 `px` 字号：
*   **Display**: `clamp(32px, 2.5vw + 1rem, 48px)`
*   **H1/H2**: `clamp(24px, 1.5vw + 0.5rem, 36px)`
*   **Body**: `clamp(16px, 0.8vw + 0.5rem, 18px)`

### 4.4 常用组件类
*   `.bento-grid`: 网格布局容器
*   `.bento-card`: 标准卡片样式
*   `.btn`, `.btn-primary`, `.btn-ghost`: 按钮样式
*   `.corner-marker`: 装饰性角落标记

## 5. 开发流程

### 常用命令
```bash
npm run dev        # 启动开发服务器
npm run build      # 构建生产版本
npm run preview    # 预览构建结果
npm run vercel-build # Vercel 部署命令
```

### 部署
项目配置为 Vercel 部署 (`vercel.json`)，输出目录为 `dist`。

## 6. 维护指南
*   **单一职责**: 保持组件小而专注。
*   **数据驱动**: 产品列表、特性等数据应从 `/src/data` 导入，避免硬编码在组件中。
*   **暗黑模式**: 所有新组件必须测试 Dark Mode 适配。
