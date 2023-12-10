import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sveltiaCms from "astro-sveltia-cms";
import react from "@astrojs/react";
import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://devopsick.pages.dev',
  integrations: [mdx(), sitemap(), sveltiaCms(), react()],
  output: "hybrid",
  adapter: cloudflare()
});