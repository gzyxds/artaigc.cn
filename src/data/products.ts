export interface Product {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: number;
  originalPrice: number;
  link: string;
  rating: number;
  sales: number;
  buyLink: string;
  isPlugin?: boolean;
  category?: string;
}

export const products: Product[] = [
  {
    image: "/product/saas.webp",
    title: "数字分身 SaaS 系统",
    subtitle: "PHP 源码版",
    description: "企业级数字人解决方案。支持真人声音克隆与形象定制，快速打造短视频 IP 矩阵。",
    features: ["声音克隆", "形象定制", "视频生成", "AI 交谈", "热点话题"],
    price: 4999,
    originalPrice: 6800,
    link: "/demo",
    rating: 4.8,
    sales: 2156,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/work.webp",
    title: "全能 AI 知识库",
    subtitle: "PHP 源码版",
    description: "基于 PHP + Vue3 构建的企业级 AI 知识库。支持多端适配与向量检索，私有化部署首选。",
    features: ["多模式输入", "向量检索", "智能问答", "多端支持"],
    price: 6600,
    originalPrice: 9800,
    link: "/demo",
    rating: 4.9,
    sales: 5203,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/ai.webp",
    title: "智能聊天绘画系统",
    subtitle: "PHP 源码版",
    description: "集成 Vue3、uni-app 与 ThinkPHP6 的全栈 AI 系统。融合对话与绘图功能，开箱即用。",
    features: ["Python 架构", "向量检索", "多源接入", "智能问答"],
    price: 2999,
    originalPrice: 3800.00,
    link: "/demo",
    rating: 4.9,
    sales: 3178,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/lw.svg",
    title: "论文创作系统",
    subtitle: "全新升级",
    description: "输入关键词即可生成完整论文大纲。支持期刊、科普、报告等多种格式，大幅提升写作效率。",
    features: ["期刊论文", "科普文章", "学生作业", "商业报告"],
    price: 3200,
    originalPrice: 4698,
    link: "/demo",
    rating: 4.8,
    sales: 3132,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/picture/Python.png",
    title: "全能 AI 知识库",
    subtitle: "Python 源码版",
    description: "基于 Java/Python 架构的高性能 AI 知识库。专为高并发场景设计，支持大规模企业级部署。",
    features: ["Java 架构", "高并发", "企业级", "多端支持"],
    price: 6600,
    originalPrice: 9800,
    link: "/demo",
    rating: 4.9,
    sales: 1165,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/saas.svg",
    title: "数字分身 2.0",
    subtitle: "PHP 源码版",
    description: "高性能 AI 聊天与绘图系统。支持多模型接入与场景深度定制，满足多样化运营需求。",
    features: ["Java 架构", "多模型支持", "高性能", "场景定制"],
    price: 6600,
    originalPrice: 9800,
    link: "/demo",
    rating: 4.8,
    sales: 4108,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/ai.svg",
    title: "聊天绘画系统 Java",
    subtitle: "Java 源码版",
    description: "深度融合 AI 对话与创作能力。提供一键部署方案，支持灵活的场景配置与扩展。",
    features: ["AI 绘画", "智能聊天", "场景定制", "一键部署"],
    price: 2999,
    originalPrice: 3800,
    link: "/demo",
    rating: 4.7,
    sales: 2389,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/知识库.png",
    title: "开源智能体部署",
    subtitle: "PHP 源码版",
    description: "零代码构建原生 AI 能力。集成 MCP、RAG 管道与知识库，快速聚合主流大模型。",
    features: ["MCP", "知识库", "模型聚合", "扣子"],
    price: 500,
    originalPrice: 1500,
    link: "/demo",
    rating: 4.6,
    sales: 3134,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  
  {
    image: "/product/Sora2短剧视频创作.png",
    title: "Sora2 短剧创作",
    subtitle: "图像视频",
    description: "聚焦高效短剧创作的 AI 工具。深度理解文本提示词，将创意瞬间转化为精彩视频。",
    features: ["Sora 模型", "短剧生成", "剧本转视频", "创意转化"],
    price: 699,
    originalPrice: 1398,
    link: "/demo",
    rating: 4.8,
    sales: 1243,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/漫剧短剧.png",
    title: "AI漫剧短剧创作",
    subtitle: "漫剧短剧",
    description: "漫剧是一款智能AI视频生成工具，服务于创作者、动画爱好者及视觉工作者，能够根据用户输入的文字提示词，快速生成符合需求的视频内容。",
    features: ["AI 绘画", "角色一致性", "模板生成", "开箱即用"],
    price: 699,
    originalPrice: 1398,
    link: "/demo",
    rating: 4.7,
    sales: 982,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },  
  {
    image: "/product/Nanobanana.png",
    title: "Nanobanana",
    subtitle: "图像视频",
    description: "开箱即用的绘画模板库。结合 Gemini-3 生图能力，精准保持角色一致性。",
    features: ["AI 绘画", "角色一致性", "模板生成", "开箱即用"],
    price: 699,
    originalPrice: 1398,
    link: "/demo",
    rating: 4.7,
    sales: 982,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI简历.png",
    title: "AI 简历",
    subtitle: "效率工具",
    description: "智能生成与深度优化个人简历。提升简历质量与专业度，助力职场进阶。",
    features: ["简历生成", "智能优化", "求职辅助", "效率提升"],
    price: 799,
    originalPrice: 1598,
    link: "/demo",
    rating: 4.9,
    sales: 2103,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/思维导图.png",
    title: "AI 思维导图",
    subtitle: "效率工具",
    description: "智能生成多种结构导图。支持自由样式调整，帮助理清思路，激发无限创意。",
    features: ["头脑风暴", "结构化思维", "多格式导出", "自由样式"],
    price: 499,
    originalPrice: 899,
    link: "/demo",
    rating: 4.8,
    sales: 1567,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI证件照.png",
    title: "AI 证件照",
    subtitle: "图像视频",
    description: "自定义尺寸与底色，智能抠图。足不出户即可制作专业级证件照。",
    features: ["智能抠图", "尺寸裁剪", "底色更换", "便捷制作"],
    price: 299,
    originalPrice: 599,
    link: "/demo",
    rating: 4.9,
    sales: 3421,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/智能写作助手.png",
    title: "智能写作助手",
    subtitle: "智能写作",
    description: "支持 AI 改写与多场景模板。无论是文案创作还是日常写作，皆能得心应手。",
    features: ["文案创作", "AI 改写", "多场景模板", "在线编辑"],
    price: 499,
    originalPrice: 999,
    link: "/demo",
    rating: 4.7,
    sales: 1890,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/aippt.png",
    title: "AI PPT",
    subtitle: "效率工具",
    description: "智能生成与排版，海量模板可选。告别繁琐设计，专注于内容表达。",
    features: ["一键生成", "智能排版", "海量模板", "演示增强"],
    price: 599,
    originalPrice: 1299,
    link: "/demo",
    rating: 4.8,
    sales: 2341,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI合同.png",
    title: "AI 合同",
    subtitle: "企业工具",
    description: "智能审查与起草，降低法律风险。您的专业法律助手，为商业合作保驾护航。",
    features: ["合同审查", "风险规避", "智能起草", "签约效率"],
    price: 1499,
    originalPrice: 2999,
    link: "/demo",
    rating: 4.9,
    sales: 876,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI商图秀.png",
    title: "AI 商图秀",
    subtitle: "图像视频",
    description: "智能生成电商主图。支持模特替换与场景合成，低成本制作高质量商品展示。",
    features: ["电商主图", "场景合成", "模特替换", "点击率提升"],
    price: 399,
    originalPrice: 899,
    link: "/demo",
    rating: 4.7,
    sales: 1543,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI直播短视频数字人.png",
    title: "AI 直播数字人",
    subtitle: "图像视频",
    description: "7x24 小时无人直播带货。打造永不休息的超级主播，抢占直播红利。",
    features: ["无人直播", "数字人带货", "短视频制作", "降本增效"],
    price: 1999,
    originalPrice: 3999,
    link: "/demo",
    rating: 4.8,
    sales: 2109,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI短剧小说创作.png",
    title: "AI 短剧小说",
    subtitle: "智能写作",
    description: "辅助剧本创作与小说续写。从灵感到剧本，AI 全程陪伴，激发创作潜能。",
    features: ["剧本创作", "小说续写", "灵感激发", "创作辅助"],
    price: 349,
    originalPrice: 699,
    link: "/demo",
    rating: 4.6,
    sales: 1120,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/GEO优化排名工具.png",
    title: "GEO 排名优化",
    subtitle: "企业工具",
    description: "基于地理位置的 SEO 优化工具。精准锁定本地目标客户，提升搜索排名。",
    features: ["本地 SEO", "排名优化", "精准获客", "流量增长"],
    price: 799,
    originalPrice: 1599,
    link: "/demo",
    rating: 4.8,
    sales: 654,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/即梦AI绘画.png",
    title: "即梦 AI 绘画",
    subtitle: "图像视频",
    description: "文本生成图片与风格迁移。无论是二次元还是写实风，释放你的无限想象力。",
    features: ["以文生图", "风格迁移", "艺术创作", "多风格支持"],
    price: 499,
    originalPrice: 999,
    link: "/demo",
    rating: 4.7,
    sales: 1876,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/即梦AI视频.png",
    title: "即梦 AI 视频",
    subtitle: "图像视频",
    description: "文本生成视频，静态图转动态短片。让画面动起来，讲述更生动的故事。",
    features: ["图生视频", "文生视频", "创意短片", "动态效果"],
    price: 749,
    originalPrice: 1499,
    link: "/demo",
    rating: 4.8,
    sales: 1432,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/大模型擂台.png",
    title: "大模型擂台",
    subtitle: "企业工具",
    description: "主流大模型能力评测与对比。提供客观公正的评测数据，助您做出明智的技术选型。",
    features: ["模型评测", "能力对比", "选型参考", "数据分析"],
    price: 0,
    originalPrice: 0,
    link: "/demo",
    rating: 4.9,
    sales: 5432,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/小红书内容复刻.png",
    title: "小红书内容复刻",
    subtitle: "智能写作",
    description: "一键提取爆款笔记文案并智能仿写。轻松掌握流量密码，快速产出高质量内容。",
    features: ["爆款文案", "智能仿写", "内容生成", "流量密码"],
    price: 299,
    originalPrice: 599,
    link: "/demo",
    rating: 4.7,
    sales: 2987,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/模绘衣境.png",
    title: "模绘衣境",
    subtitle: "图像视频",
    description: "AI 服装设计与虚拟试衣。无需制作样衣即可预览穿着效果，大幅降低设计成本。",
    features: ["虚拟试衣", "服装设计", "效果预览", "成本降低"],
    price: 999,
    originalPrice: 1999,
    link: "/demo",
    rating: 4.8,
    sales: 765,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/热门视频混剪.png",
    title: "热门视频混剪",
    subtitle: "图像视频",
    description: "智能抓取素材并自动混剪。紧跟热点趋势，快速生成爆款短视频。",
    features: ["智能混剪", "热点抓取", "短视频生成", "爆款制造"],
    price: 449,
    originalPrice: 899,
    link: "/demo",
    rating: 4.6,
    sales: 1654,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/爆款文章自动配图.png",
    title: "文章自动配图",
    subtitle: "智能写作",
    description: "根据文章内容智能匹配高质量图片。图文并茂，显著提升阅读体验。",
    features: ["智能配图", "图文匹配", "内容增强", "阅读体验"],
    price: 249,
    originalPrice: 499,
    link: "/demo",
    rating: 4.7,
    sales: 1980,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/AI音乐.png",
    title: "AI 音乐创作",
    subtitle: "图像视频",
    description: "多模态输入的音乐创作工具。支持文本、哼唱生成完整歌曲，降低创作门槛。",
    features: ["文本生歌", "AI 作曲", "人机协同", "多模态输入"],
    price: 699,
    originalPrice: 1399,
    link: "/demo",
    rating: 4.9,
    sales: 1200,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  }
]; 

// 辅助函数：根据 subtitle 获取分类 ID
export const getCategory = (subtitle: string) => {
  const sub = (subtitle || '').toLowerCase();
  if (sub.includes('图像视频') || sub.includes('数字人') || sub.includes('聊天绘画')) return 'video';
  if (sub.includes('智能写作') || sub.includes('论文')) return 'writing';
  if (sub.includes('企业工具') || sub.includes('知识库')) return 'enterprise';
  if (sub.includes('效率工具') || sub.includes('ppt') || sub.includes('简历')) return 'efficiency';
  if (sub.includes('独立系统') || sub.includes('源码版')) return 'independent';
  return 'independent'; // 默认为独立系统
};
