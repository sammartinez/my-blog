---
title: 'Why I Switched to Astro for Static Sites'
description: 'After years of reaching for Next.js for everything, I tried Astro for a content site. I will not go back.'
pubDate: '2024-01-22'
tags: ['astro', 'web-dev', 'jamstack']
---

I have a confession: I used to reach for Next.js every time I needed to build anything. API routes? Client components? SSR? Useful sometimes. But for a blog with a few dozen pages of Markdown? Overkill by a wide margin.

Then I tried Astro.

## What makes Astro different

Astro's key idea is **zero JavaScript by default**. Components render to static HTML at build time. You only ship JavaScript when you explicitly opt in with client directives like `client:load` or `client:idle`.

For content-heavy sites, this means:

- Faster page loads (no hydration overhead)
- Better Core Web Vitals scores out of the box
- Simpler mental model — it's just HTML, CSS, and the occasional script

## The content collections API

My favourite feature is [Content Collections](https://docs.astro.build/en/guides/content-collections/). You define a schema for your Markdown frontmatter and Astro validates it at build time.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

If a post is missing a required field, the build fails with a clear error. No more typos silently producing broken pages.

## The GitHub Pages deploy

Deploying to GitHub Pages is a single workflow file. Astro even has [official docs](https://docs.astro.build/en/guides/deploy/github/) for it. The `withastro/action` handles install and build; you just push to `main`.

## Would I use something else?

For a full application with auth, a database, or complex client interactivity — yes, probably Next.js or SvelteKit. But for a blog, documentation site, or marketing page? Astro every time.

The tool fits the job.
