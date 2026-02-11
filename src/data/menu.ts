/**
 * 优化的菜单项接口 - 移除未使用的color字段
 */
export interface MenuItem {
  name: string;
  url: string;
  icon: string;
  desc: string;
  target?: string;
}

/**
 * 菜单数据 - 合并相似配置，减少重复
 */
export const menuData = {
  products: [
    { name: "产品中心", url: "/shop", icon: "lucide:shopping-bag", desc: "全部产品导航" },
    { name: "数字分身", url: "/human", icon: "lucide:user", desc: "智能数字人解决方案" },
    { name: "全能知识库", url: "/ai", icon: "lucide:brain", desc: "企业级全能AI平台" },
    { name: "聊天绘画", url: "/chat", icon: "lucide:message-square", desc: "智能对话与创作" },
    { name: "论文创作", url: "/paper", icon: "lucide:edit", desc: "智能论文写作助手" },
    { name: "产品演示", url: "/demo", icon: "lucide:monitor", desc: "在线体验中心" },
    { name: "AI提示词", url: "/tips", icon: "lucide:lightbulb", desc: "AI提示词大全" },
    { name: "授权中心", url: "https://console.cloudcvm.com/home.htm", icon: "lucide:shield", desc: "授权管理与使用", target: "_blank" },
  ],
  solutions: [
    { name: "香蕉绘画", url: "/solution/banana", icon: "lucide:palette", desc: "AI 绘画与图像生成" },
    { name: "剧本创作", url: "/solution/drama", icon: "lucide:edit", desc: "AI 辅助剧本写作" },
    { name: "GEO排名", url: "/solution/geo", icon: "lucide:trending-up", desc: "AI 搜索引擎优化" },
    { name: "即梦视频", url: "/solution/jimeng", icon: "lucide:video", desc: "AI 视频生成平台" },
    { name: "即梦绘画", url: "/solution/jmdraw", icon: "lucide:brush", desc: "创意绘画工具" },
    { name: "试衣换装", url: "/solution/model", icon: "lucide:shirt", desc: "虚拟模特试衣" },
    { name: "AI音乐", url: "/solution/music", icon: "lucide:music", desc: "AI 音乐创作" },
    { name: "AI PPT", url: "/solution/ppt", icon: "lucide:presentation", desc: "智能演示文稿生成" },
    { name: "AI简历", url: "/solution/resume", icon: "lucide:file-text", desc: "智能简历优化" },
    { name: "Sora视频", url: "/solution/sora", icon: "lucide:video", desc: "Sora 视频生成" },
    { name: "视频混剪", url: "/solution/videoclip", icon: "lucide:film", desc: "智能视频剪辑" },
    { name: "AI漫剧", url: "/solution/wanclipg", icon: "lucide:clapperboard", desc: "AI 漫剧创作" },
    { name: "小红书助手", url: "/solution/xhs", icon: "lucide:heart", desc: "社媒内容创作" },
  ],
  docs: [
    { name: "官方文档", url: "https://docs.buidai.com/", icon: "lucide:lightbulb", desc: "5分钟快速上手", target: "_blank" },
    { name: "飞书文档", url: "https://rwm01l8tn3x.feishu.cn/wiki/VqNCwBO0KiqWIWkSfdHcDigGnZg?from=from_copylink", icon: "lucide:monitor", desc: "详细功能说明", target: "_blank" },
    { name: "数字分身", url: "https://docs.buidai.com/digital", icon: "lucide:user", desc: "数字人部署文档", target: "_blank" },
    { name: "全能知识库", url: "https://docs.buidai.com/ai", icon: "lucide:brain", desc: "企业知识库数文档", target: "_blank" },
    { name: "聊天绘画", url: "https://docs.buidai.com/art", icon: "lucide:message-square", desc: "聊天绘画企业知识库数文档", target: "_blank" },
    { name: "论文创作", url: "https://docs.buidai.com/article", icon: "lucide:edit", desc: "论文创作文档", target: "_blank" },
  ],
  support: [
    { name: "更新日志", url: "/changelog", icon: "lucide:shield", desc: "获取最新更新" },
    { name: "联系我们", url: "/contact", icon: "lucide:message-circle", desc: "获取专业支持服务" },
    { name: "集成与API", url: "/integrations", icon: "lucide:webhook", desc: "连接您喜爱的工具" },
    { name: "合作伙伴", url: "/cooperate", icon: "lucide:users", desc: "查看合作机会" },
    { name: "渠道合作", url: "/channel", icon: "lucide:handshake", desc: "渠道合作与加盟" },
    { name: "APP下载", url: "/app", icon: "lucide:smartphone", desc: "多终端APP下载" },
  ]
} as const;
