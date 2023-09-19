import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    remarkPlugins: [[remarkMath]],
    rehypePlugins: [[rehypeMathJax]]
  }), react(), vue()]
});