import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { loadEnv } from "vite";
import vercel from '@astrojs/vercel';

const { PUBLIC_SERVER_URL } = loadEnv(process.env.PUBLIC_SERVER_URL, process.cwd(), "");
const { PUBLIC_FE_URL } = loadEnv(process.env.PUBLIC_FE_URL, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  legacy: {
    collectionsBackwardsCompat: true,
  },
  site: 'https://jaydot.org',
  integrations: [
    (await import("astro-compress")).default(),
    icon({
      include: {
        iconDir: "src/assets/icons",
      },
    }),
    sitemap()
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => { },
          },
        },
      },
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  image: {
    domains: [PUBLIC_SERVER_URL, PUBLIC_FE_URL]
  }
})