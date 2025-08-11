import { z } from "zod"

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
})

export const env = envSchema.parse(import.meta.env)
