import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import compress from 'astro-compress'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://jaydot.org',
  srcDir: './src/app/(frontend)/',
  integrations: [
    compress(),
    icon({
      include: {
        iconDir: "./src/app/(frontend)/assets/icons",
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
        '@components': fileURLToPath(new URL('./src/app/(frontend)/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/app/(frontend)/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/app/(frontend)/assets', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/app/(frontend)/content', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/app/(frontend)/pages', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
        '@post-images': fileURLToPath(new URL('./public/posts', import.meta.url)),
        '@project-images': fileURLToPath(new URL('./public/projects', import.meta.url)),
      },
    },
  },
})
