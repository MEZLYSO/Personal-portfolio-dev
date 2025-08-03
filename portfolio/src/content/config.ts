import { defineCollection, z } from 'astro:content'

const proyects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
})

export const collections = { proyects }
