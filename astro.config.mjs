// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import icon from "astro-icon"

import node from "@astrojs/node"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://wdiazdev.github.io",
  base: "/wdiazdev-astro",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react()],

  adapter: node({
    mode: "standalone",
  }),
})
