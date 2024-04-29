import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/BskyShareButton.svelte',
      formats: ['es', 'umd'],
      name: 'BskyShareButton',
      fileName: (format) => `bsky-share-button.${format}.js`,
    },
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    },
  })],
})
