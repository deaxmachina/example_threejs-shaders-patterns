import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import vitePluginString from 'vite-plugin-string'
import pages from 'vite-plugin-pages-svelte';
import sveltePreprocess from 'svelte-preprocess'
import * as sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    vitePluginString.default(),
    pages()
  ],
  preprocess: sveltePreprocess({
    sass: {
      sync: true,
      implementation: sass,
    },
  })
})
