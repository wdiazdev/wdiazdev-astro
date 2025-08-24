import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  schema: z.object({
    name: z.string(),
    img: z.string(),
    repository: z.string().url(),
    live: z.string().url(),
  }),
})

export const collections = { projects }
