import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sveltiaCms from "astro-sveltia-cms";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), sveltiaCms(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});