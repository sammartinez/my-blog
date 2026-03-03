# My Blog

A personal blog built with [Astro](https://astro.build) and deployed to GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
my-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   └── FormattedDate.astro
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── blog/               # ← Your blog posts go here (.md or .mdx)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Shared HTML shell
│   │   └── BlogPost.astro      # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About page
│   │   ├── 404.astro
│   │   ├── rss.xml.js          # RSS feed
│   │   └── blog/
│   │       ├── index.astro     # Blog listing
│   │       └── [...slug].astro # Post pages
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## ✍️ Writing a Post

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```markdown
---
title: 'My New Post'
description: 'A short description for SEO and post cards.'
pubDate: '2024-03-01'
tags: ['tag1', 'tag2']
heroImage: '/path/to/optional-image.jpg'
draft: false
---

Your content here...
```

## 🌐 Deploying to GitHub Pages

### First-time setup

1. **Update `astro.config.mjs`** with your GitHub Pages URL:
   ```js
   const SITE_URL = 'https://your-username.github.io';
   // For a project site (not user/org site):
   const BASE_PATH = '/my-blog';  // set to your repo name
   ```

2. **Push to GitHub** and create a new repository.

3. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**

4. **Push to `main`** — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically.

### User/Org site vs Project site

| Type | URL | `site` | `base` |
|------|-----|--------|--------|
| User site | `https://username.github.io` | `https://username.github.io` | `/` |
| Project site | `https://username.github.io/my-blog` | `https://username.github.io` | `/my-blog` |

## 🛠 Customising

- **Site name & nav links** → `src/components/Header.astro`
- **Footer links** → `src/components/Footer.astro`
- **Colours & fonts** → `src/styles/global.css` (CSS variables at the top)
- **About page** → `src/pages/about.astro`
- **RSS title/description** → `src/pages/rss.xml.js`
