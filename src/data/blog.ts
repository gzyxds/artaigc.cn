/**
 * 可用的博客封面图片列表
 * 从public/assets/blog目录中随机选择
 */
export const blogImages = [
  '/assets/blog/blog.jpg',
  '/assets/blog/blog1.jpg',
  '/assets/blog/blog2.jpg',
  '/assets/blog/blog3.jpg',
  '/assets/blog/blog4.jpg',
  '/assets/blog/blog5.jpg',
  '/assets/blog/blog6.jpg',
  '/assets/blog/blog7.jpg',
  '/assets/blog/blog8.jpg'
];

/**
 * 随机选择封面图片的函数
 * @param {string} postId - 文章ID，用于确保同一文章始终使用相同图片
 * @returns {string} 图片路径
 */
export function getRandomImage(postId: string): string {
  // 使用文章ID生成一个简单的哈希值，确保同一文章始终使用相同图片
  let hash = 0;
  for (let i = 0; i < postId.length; i++) {
    const char = postId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 转换为32位整数
  }
  // 使用哈希值选择图片索引
  const index = Math.abs(hash) % blogImages.length;
  return blogImages[index];
}
