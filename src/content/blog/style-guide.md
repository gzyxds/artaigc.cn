---
title: "Markdown 样式指南与排版测试"
excerpt: "本文档用于展示和测试博客详情页面的所有 Markdown 元素样式，包括标题层级、列表、表格、代码块、引用和图片等。"
date: "2024-01-01"
author: "Design System"
authorRole: "System Admin"
authorAvatar: "https://ui-avatars.com/api/?name=DS"
category: "Design System"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
draft: false
---

# 一级标题 H1 (通常由文章标题处理，正文很少用)

这是正文段落。我们的设计系统采用了**Enterprise Minimalist**理念，强调内容的清晰度和阅读体验。正文文本应该具有良好的可读性，行高适中。

## 二级标题 H2：主要章节

这是二级标题下的内容。我们来测试一下各种文本样式：
- **加粗文本 (Bold)**
- *斜体文本 (Italic)*
- ~~删除线 (Strikethrough)~~
- [链接样式 (Link)](https://artaigc.cn)
- `行内代码 (Inline Code)`

### 三级标题 H3：子章节

这里测试无序列表：
- 列表项 1
- 列表项 2
  - 嵌套列表项 A
  - 嵌套列表项 B
- 列表项 3

#### 四级标题 H4：微标题

这里测试有序列表：
1. 第一步操作
2. 第二步操作
3. 第三步操作

## 引用区块 (Blockquotes)

> 这是一个标准的引用区块。设计系统中的引用样式应该醒目但不喧宾夺主，通常用于引用名言、强调重点或提供额外信息。
>
> 支持多行引用。

## 代码块 (Code Blocks)

下面是一个 TypeScript 代码示例：

```typescript
interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

function getUser(id: number): User {
  // 模拟数据库查询
  return {
    id,
    name: "John Doe",
    role: "admin"
  };
}
```

下面是一个 CSS 代码示例：

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
```

## 表格 (Tables)

| 功能特性 | 免费版 | 专业版 | 企业版 |
| :--- | :---: | :---: | :---: |
| 基础生成 | ✅ | ✅ | ✅ |
| 高级模型 | ❌ | ✅ | ✅ |
| API 访问 | ❌ | ✅ | ✅ |
| 专属支持 | ❌ | ❌ | ✅ |

## 任务列表 (Task Lists)

- [x] 已完成的任务
- [ ] 待处理的任务
- [ ] 正在进行的任务

## 分割线

---

以上就是样式指南的全部内容。
