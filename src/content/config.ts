import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  schema: z.object({
    id: z.number(),
    name: z.string(),
    cover: z.string(),
    repository: z.string().url(),
    live: z.string().url(),
    fullstack: z.boolean(),
    frontend: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
        }),
      )
      .optional(),
    backend: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
        }),
      )
      .optional(),
    baas: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
        }),
      )
      .optional(),
    images: z.array(z.string()).optional(),
    user: z
      .object({
        username: z.string(),
        password: z.string(),
      })
      .optional(),
  }),
})

export const collections = { projects }
