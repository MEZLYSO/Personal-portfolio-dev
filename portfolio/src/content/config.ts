import { defineCollection, z } from "astro:content";
// z -> nos permite evaluar esquemas de datos 

const proyects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    teckstack: z.object({
      one: z.string().optional(),
      two: z.string().optional()
    })
  })
})

export const collections = { proyects }
