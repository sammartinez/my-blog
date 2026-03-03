import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Replace with your GitHub Pages URL:
// https://<your-username>.github.io  (for user/org site)
// https://<your-username>.github.io/<repo-name>  (for project site)
const SITE_URL = 'https://your-username.github.io';

// If deploying to a project site (not a user/org site), set the base path:
// e.g. '/my-blog' for https://your-username.github.io/my-blog
const BASE_PATH = '/'; // Change to '/repo-name' for project sites

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
