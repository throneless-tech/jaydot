import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import compress from 'astro-compress'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@astrojs/netlify';
import { loadEnv } from "vite";

const { PUBLIC_SERVER_URL } = loadEnv(process.env.PUBLIC_SERVER_URL, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://jaydot.org',
  integrations: [
    compress(),
    icon({
      include: {
        iconDir: "./src/assets/icons",
      },
    }),
    mdx(),
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
        '@post-images': fileURLToPath(new URL('./public/posts', import.meta.url)),
        '@project-images': fileURLToPath(new URL('./public/projects', import.meta.url)),
      },
    },
  },
  output: 'server',
  adapter: netlify({
    imageCDN: false,
  }),
  image: {
    domains: [PUBLIC_SERVER_URL]
  }
})