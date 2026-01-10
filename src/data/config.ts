/**
 * 优化的图标定义 - 使用更简洁的路径
 */
export const icons = {
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  brain: "M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v1a3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3-3V8a3 3 0 0 0-3-3 3 3 0 0 0-3-3z",
  chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  edit: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
  target: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  monitor: "M2 3h20v14H2zM8 21h8M12 17v4",
  lightbulb: "M9 21h6M12 17v4M12 3a6 6 0 0 1 6 6c0 3-2 5.5-2 8H8c0-2.5-2-5-2-8a6 6 0 0 1 6-6z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  chevron: "M19 9l-7 7-7-7",
  arrow: "M9 5l7 7-7 7",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 18L18 6M6 6l12 12",
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  moon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
};

/**
 * 优化的菜单项接口 - 移除未使用的color字段
 */
export interface MenuItem {
  name: string;
  url: string;
  icon: keyof typeof icons;
  desc: string;
  target?: string;
}

/**
 * 菜单数据 - 合并相似配置，减少重复
 */
export const menuData = {
  products: [
    { name: "产品中心", url: "/shop", icon: "target", desc: "全部产品导航" },
    { name: "数字分身", url: "/human", icon: "monitor", desc: "智能数字人解决方案" },
    { name: "全能知识库", url: "/ai", icon: "lightbulb", desc: "企业级全能AI平台" },
    { name: "聊天绘画", url: "/chat", icon: "chat", desc: "智能对话与创作" },
    { name: "论文创作", url: "/paper", icon: "edit", desc: "智能论文写作助手" },
     { name: "产品演示", url: "/demo", icon: "monitor", desc: "在线体验中心" },
    { name: "AI提示词", url: "/tips", icon: "lightbulb", desc: "AI提示词大全" },
    { name: "授权中心", url: "https://console.cloudcvm.com/home.htm", icon: "shield", desc: "授权管理与使用", target: "_blank" },
  ],
  docs: [
    { name: "项目文档", url: "https://doc.artaigc.cn/", icon: "lightbulb", desc: "5分钟快速上手", target: "_blank" },
    { name: "飞书文档", url: "https://rwm01l8tn3x.feishu.cn/wiki/VqNCwBO0KiqWIWkSfdHcDigGnZg?from=from_copylink", icon: "monitor", desc: "详细功能说明", target: "_blank" },
    { name: "数字分身", url: "https://doc.artaigc.cn/human/", icon: "user", desc: "数字人部署文档", target: "_blank" },
    { name: "全能知识库", url: "https://doc.artaigc.cn/work/deployment/demo.html", icon: "brain", desc: "企业知识库数文档", target: "_blank" },
    { name: "聊天绘画", url: "https://doc.artaigc.cn/chat/", icon: "chat", desc: "聊天绘画企业知识库数文档", target: "_blank" },
    { name: "论文创作", url: "https://doc.artaigc.cn/Paper/deployment/bt.html", icon: "edit", desc: "论文创作文档", target: "_blank" },
  ],
  support: [
    { name: "更新日志", url: "/changelog", icon: "shield", desc: "获取最新更新" },
    { name: "联系我们", url: "/contact", icon: "chat", desc: "获取专业支持服务" },
    { name: "集成与API", url: "/integrations", icon: "monitor", desc: "连接您喜爱的工具" },
    { name: "合作伙伴", url: "/cooperate", icon: "user", desc: "查看合作机会" },
    { name: "渠道合作", url: "/channel", icon: "target", desc: "渠道合作与加盟" },
    { name: "APP下载", url: "/app", icon: "lightbulb", desc: "多终端APP下载" },
  ]
} as const;
