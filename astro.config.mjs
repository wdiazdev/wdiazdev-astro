// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://wdiazdev.github.io",
  base: "/wdiazdev-astro",
  output: "static",
  vite: { plugins: [tailwindcss()] },
  integrations: [icon(), react()],
})
