import type { ImageMetadata } from 'astro';

// 获取 src/assets/product 下的所有图片
// 使用 eager: false (默认) 实现懒加载，返回一个 Promise
const productImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/product/*.{jpeg,jpg,png,gif,webp,svg,JPG,PNG,JPEG}');

export function getProductImage(imagePath: string) {
  if (!imagePath) return null;

  // 1. 处理外部链接
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // 2. 处理本地路径
  // imagePath 例如 "/product/saas.webp" -> 提取文件名 "saas.webp"
  const filename = imagePath.split('/').pop();
  if (!filename) return null;

  const path = `/src/assets/product/${filename}`;
  
  const loader = productImages[path];
  
  if (!loader) {
    console.warn(`[Image Utils] Image not found: ${path} (Original: ${imagePath})`);
    return null;
  }
  
  return loader();
}
