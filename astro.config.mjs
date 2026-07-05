import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://khipu-ai.vercel.app',
  compressHTML: true,
  build: {
    format: 'file',
    assets: '_assets'
  }
});
