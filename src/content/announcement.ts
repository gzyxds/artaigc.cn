/**
 * 公告弹窗内容配置
 * 用于管理网站公告弹窗的所有内容和配置
 */

export interface AnnouncementConfig {
  title: string;
  content: string;
  actionUrl: string;
  actionText: string;
  closeText: string;
  closeUrl: string;
  autoShowInterval: number;
  isOpen: boolean;
}

/**
 * 当前活动公告配置
 * 限时特惠活动公告内容
 */
export const currentAnnouncement: AnnouncementConfig = {
  title: "🎉 重要公告",
  content: `
    <div style="text-align: center;">
      <div style="padding: 10px; margin-bottom: 15px;">
        <h2 style="margin: 0; color: #1f2937;">🎉 限时特惠活动公告 🎉</h2>
      </div>
    </div>
    <div style="text-align: center; margin-bottom: 15px;">
      <h3 style="color: #1f2937; margin-bottom: 10px;">💫 产品优势</h3>
      <div>• 一次购买，终身免费更新升级</div>
      <div>• 企业商用首选，完善售后保障</div>
      <div>• AI智能聊天系统，绘画创作无限可能</div>
      <div>• 大模型知识库，专业训练开发</div>
    </div>
    
    <div style="text-align: center; margin-bottom: 15px;">
      <h3 style="color: #1f2937; margin-bottom: 10px;">💎 优惠详情</h3>
      <div style="border-bottom: 1px solid #d1d5db; margin: 10px 0;"></div>
      
      <div style="margin: 8px 0;">
        📌 1、<span style="color: #3598db;"><strong>AI数字人</strong></span> 原价: ¥<span style="text-decoration: line-through; color: #e03e2d;"><strong>6800</strong></span> / 特惠价: ¥<span style="color: #e03e2d;"><strong>4999</strong></span> 优惠码: <span style="color: #e03e2d;"><strong>oXu3x1IZD</strong></span>
      </div>
      
      <div style="margin: 8px 0;">
        📌 2、<span style="color: #e03e2d;"><strong>AI知识库</strong></span> 原价: ¥<span style="text-decoration: line-through; color: #e03e2d;"><strong>9800</strong></span> / 特惠价: ¥<span style="color: #e03e2d;"><strong>6600</strong></span> 优惠码: <span style="color: #e03e2d;"><strong>Ju9han9Z6</strong></span>
      </div>
      
      <div style="margin: 8px 0;">
        📌 3、<span style="color: #169179;"><strong>AI聊天绘画</strong></span> 原价: ¥<span style="text-decoration: line-through; color: #e03e2d;"><strong>3800</strong></span> / 特惠价: ¥<span style="color: #e03e2d;"><strong>2999</strong></span> 优惠码: <span style="color: #e03e2d;"><strong>4ZKgZfv9M</strong></span>
      </div>
      
      <div style="margin: 8px 0;">
        📌 4、<span style="color: #236fa1;"><strong>AI论文写作</strong></span> 原价: ¥<span style="text-decoration: line-through; color: #e03e2d;"><strong>4698</strong></span> / 特惠价: ¥<span style="color: #e03e2d;"><strong>3200</strong></span> 优惠码: <span style="color: #e03e2d;"><strong>lbCG2L0Fq</strong></span>
      </div>
      
      <div style="margin-top: 15px; padding: 8px; background-color: #fef2f2; border-radius: 6px; color: #dc2626; font-weight: 600;">
        📌 名额限制: 每个优惠码仅限10个，抢完即止！
      </div>
    </div>
    
    <div style="text-align: center;">
      <h3 style="color: #1f2937; margin-bottom: 10px;">🌟 核心特色</h3>
      <div>◆ 技术实力雄厚 &nbsp;&nbsp;&nbsp;&nbsp; ◆ 支持私有化部署</div>
      <div>◆ 开源代码支持二开 &nbsp;&nbsp; ◆ 配套安装教程文档</div>
    </div>
  `,
  actionUrl: "https://auth.cnai.art/regist.htm",
  actionText: "立即抢购",
  closeText: "联系客服",
  closeUrl: "/kefu",
  autoShowInterval: 30,
  isOpen: false
};

/**
 * 获取当前公告配置
 * @returns 当前活动的公告配置对象
 */
export function getCurrentAnnouncement(): AnnouncementConfig {
  return currentAnnouncement;
}

/**
 * 历史公告配置示例
 * 可用于存储之前的公告内容，便于切换或回滚
 */
export const historicalAnnouncements: AnnouncementConfig[] = [
  {
    title: "🎉 重要公告",
    content: `
      <h2>艺创AI系统源码限时优惠</h2>
      <div class="divider"></div>
      <ul>
        <li><strong>AI数字人系统</strong> - 打造短视频IP的数字人源码系统</li>
        <li><strong>全能AI知识库系统</strong> - 企业智能客服解决方案</li>
        <li><strong>AI聊天绘画系统</strong> - 智能对话与创作功能</li>
        <li><strong>AI论文创作系统</strong> - 智能论文写作助手</li>
      </ul>
      <div class="divider"></div>
      <p><span class="highlight">限时优惠</span>：所有系统均提供 <strong>PHP</strong> 和 <strong>Java</strong> 双语言版本</p>
      <p>支持私有化部署，专业团队售后无忧！</p>
    `,
    actionUrl: "/pricing",
    actionText: "查看价格",
    closeText: "联系客服",
    closeUrl: "https://work.weixin.qq.com/ca/cawcde4e8c8b4c2c4c",
    autoShowInterval: 30,
    isOpen: false
  }
];