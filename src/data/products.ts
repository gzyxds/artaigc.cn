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
  category?: string; // Optional, added logic in component previously
}

export const products: Product[] = [
  {
    image: "/product/saas.webp",
    title: "数字分身IP数字人SaaS系统",
    subtitle: "[PHP源码版]",
    description: "为企业主、个人博主打造短视频IP的数字人聊天系统，支持真人音+形象定制...",
    features: ["声音克隆", "形象定制", "视频生成", "AI交谈", "热点话题"],
    price: 4999,
    originalPrice: 6800,
    link: "/demo",
    rating: 4.8,
    sales: 2156,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/work.webp",
    title: "企业级全能AI知识库系统",
    subtitle: "[PHP源码版]",
    description: "全能AI知识库系统(PHP版，基于前后端分离架构)以及Vue3、uni-app...",
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
    title: "艺创AI智能聊天绘画系统",
    subtitle: "[PHP源码版]",
    description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发...",
    features: ["Python架构", "向量检索", "多源接入", "智能问答"],
    price: 2999,
    originalPrice: 3800.00,
    link: "/demo",
    rating: 4.9,
    sales: 3178,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/lw.svg",
    title: "论文创作写作系统",
    subtitle: "[全新升级]",
    description: "你只需要输入论文关键词，AI即可快速为您生成论文大纲...",
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
    title: "全能AI知识库系统Python源码版",
    subtitle: "[Python源码版]",
    description: "基于Java开发的企业级AI知识库系统，高性能、高并发，支持大规模部署...",
    features: ["Java架构", "高并发", "企业级", "多端支持"],
    price: 6600,
    originalPrice: 9800,
    link: "/demo",
    rating: 4.9,
    sales: 1165,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/saas.svg",
    title: "艺创AI数字分身2.0",
    subtitle: "[PHP源码版]",
    description: "基于Java开发的AI聊天绘画系统，高性能架构，支持多种绘画模型和聊天场景...",
    features: ["Java架构", "多模型支持", "高性能", "场景定制"],
    price: 6600,
    originalPrice: 9800,
    link: "/demo",
    rating: 4.8,
    sales: 4108,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/ai.svg",
    title: "艺创AI聊天绘画系统Java",
    subtitle: "[Java源码版]",
    description: "实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...",
    features: ["AI绘画", "智能聊天", "场景定制", "一键部署"],
    price: 2999,
    originalPrice: 3800,
    link: "/demo",
    rating: 4.7,
    sales: 2389,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/buidai.svg",
    title: "企业级开源智能体部署服务",
    subtitle: "[PHP源码版]",
    description: "零代码搭建具备智能体、MCP、RAG管道、知识库、大模型聚合、上下文工程等原生AI能力...",
    features: ["MCP", "知识库", "大模型聚合", "扣子"],
    price: 500,
    originalPrice: 1500,
    link: "/demo",
    rating: 4.6,
    sales: 3134,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
  },
  {
    image: "/product/buidai.webp",
    title: "BuidAl部署服务",
    subtitle: "[独立系统]",
    description: "官方技术专家，帮您部署 BuildAl 平台框架，支持本地部署或服务器部署",
    features: ["私有化部署", "企业级", "源码交付", "技术支持"],
    price: 500,
    originalPrice: 1398,
    link: "/demo",
    rating: 4.9,
    sales: 856,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: false
  },
  {
    image: "/product/Sora2短剧视频创作.png",
    title: "Sora2短剧视频创作",
    subtitle: "[图像视频]",
    description: "Sora2短剧视频创作是一款聚焦高效优质短剧创作的AI智能生成工具，它能深度理解用户输入的文字提示词，将创意转化为精彩视频。",
    features: ["Sora模型", "短剧生成", "剧本转视频", "创意转化"],
    price: 699,
    originalPrice: 1398,
    link: "/demo",
    rating: 4.8,
    sales: 1243,
    buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
    isPlugin: true
  },
  {
    image: "/product/Nanobanana.png",
    title: "Nanobanana",
    subtitle: "[图像视频]",
    description: "香蕉绘画预置多个模版，开箱即用。结合gemini-3-pro-image-preview的生图能力，能够有效保持角色一致性。",
    features: ["AI绘画", "角色一致性", "模板生成", "开箱即用"],
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
    title: "AI简历",
    subtitle: "[效率工具]",
    description: "AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。",
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
    title: "思维导图",
    subtitle: "[效率工具]",
    description: "各种结构的思维导图，支持自由导图样式，修改前台显示名称，帮助您理清思路，激发创意。",
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
    title: "AI证件照",
    subtitle: "[图像视频]",
    description: "各种证件照类型，尺寸自定义，生成图片导出。无需跑照相馆，在家即可轻松制作专业证件照。",
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
    subtitle: "[智能写作]",
    description: "在线编辑，支持AI改写，自定义模板助手。无论是文案创作还是日常写作，都能助您一臂之力。",
    features: ["文案创作", "AI改写", "多场景模板", "在线编辑"],
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
    subtitle: "[效率工具]",
    description: "智能生成PPT，一键排版，海量模板，让演示更出彩。告别繁琐的排版工作，专注于内容创作。",
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
    title: "AI合同",
    subtitle: "[企业工具]",
    description: "智能合同审查与生成，降低法律风险，提高签约效率。专业的法律助手，为您的商业合作保驾护航。",
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
    title: "AI商图秀",
    subtitle: "[图像视频]",
    description: "电商主图智能生成，模特替换，场景合成，提升点击率。无需专业摄影，也能制作出高质量的商品展示图。",
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
    title: "AI直播短视频数字人",
    subtitle: "[图像视频]",
    description: "7x24小时无人直播，数字人带货，低成本高回报。打造永不休息的超级主播，抢占直播红利。",
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
    title: "AI短剧小说创作",
    subtitle: "[智能写作]",
    description: "辅助短剧剧本创作，小说续写，激发创作灵感。从灵感到剧本，AI全程陪伴，让创作变得简单有趣。",
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
    title: "GEO优化排名工具",
    subtitle: "[企业工具]",
    description: "基于地理位置的SEO优化工具，提升本地搜索排名。精准锁定目标客户，让生意自动找上门。",
    features: ["本地SEO", "排名优化", "精准获客", "流量增长"],
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
    title: "即梦AI绘画",
    subtitle: "[图像视频]",
    description: "文本生成图片，艺术创作，风格迁移，释放你的想象力。无论是二次元还是写实风，都能轻松驾驭。",
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
    title: "即梦AI视频",
    subtitle: "[图像视频]",
    description: "文本生成视频，静态图转视频，轻松制作创意短片。让静态的画面动起来，讲述更生动的故事。",
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
    subtitle: "[企业工具]",
    description: "主流大模型能力评测与对比，助你选择最适合的模型。客观公正的评测数据，助您做出明智的技术选型。",
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
    subtitle: "[智能写作]",
    description: "一键提取爆款笔记文案，智能仿写，快速产出高质量内容。轻松掌握流量密码，打造爆款账号。",
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
    subtitle: "[图像视频]",
    description: "AI服装设计与展示，虚拟试衣，缩短设计周期。无需制作样衣，即可预览穿着效果，降低设计成本。",
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
    subtitle: "[图像视频]",
    description: "智能抓取热门素材，自动混剪，快速生成短视频。紧跟热点趋势，轻松制作出爆款短视频。",
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
    title: "爆款文章自动配图",
    subtitle: "[智能写作]",
    description: "根据文章内容自动匹配高质量图片，提升阅读体验。图文并茂，让您的文章更具吸引力。",
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
    title: "AI音乐",
    subtitle: "[图像视频]",
    description: "AI音乐是一款以文本/歌词/哼唱/乐谱为输入，快速生成完整歌曲、伴奏、人声或纯音乐的创作与生产工具，旨在降低门槛、提升效率，支持个人娱乐与商用配乐的“人机协同”",
    features: ["文本生歌", "AI作曲", "人机协同", "多模态输入"],
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
