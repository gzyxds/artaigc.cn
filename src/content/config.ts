import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    authorRole: z.string(),
    authorAvatar: z.string().url(),
    category: z.string(),
    image: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
}; 