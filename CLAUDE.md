# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## What This Is

Personal portfolio site for Christian Tonny, deployed at christian-tonny.dev. Fully static Next.js site — no database, no CMS. All content lives in TypeScript data files.

## Commands

```bash
npm run dev                    # Dev server at localhost:3000
npm run build                  # Production build (static output)
npm start                      # Serve production build
npm test                       # Run tests
npm run activity:generate      # Generate weekly GitHub activity data
npm run activity:check         # Validate weekly activity data
npm run publish:article        # Publish article to changelog
```

## Architecture

### Tech Stack
- Next.js 16 (App Router, static output via `force-static`)
- React 18, TypeScript 5
- Tailwind CSS 3 (with typography + line-clamp plugins)
- Framer Motion (hero animations only)
- React Markdown + Remark GFM (article rendering)
- Deployed on Vercel

### Routes
- `/` — Hero homepage
- `/projects` — Portfolio projects by category
- `/projects/[slug]` — Project case studies
- `/writing` — Published essays + Kit archive + LinkedIn newsletter
- `/writing/[slug]` — Individual article pages
- `/changelog` — Currently building + timeline + weekly activity
- `/about` — Origin story
- `/skills` — Technical/business skills
- `/contact` — Contact options
- `/llms.txt` — Route handler for LLM access

### Content System
All content is centralized in `app/data/`:
- `writing.ts` — 50+ articles with markdown, SEO metadata
- `projects.ts` — Portfolio projects by category
- `changelog.ts` — Discriminated unions: CurrentEntry (with progress %), ReleaseEntry, UpdateEntry
- `weekly-activity.generated.json` — Auto-generated commit data from tracked repos

### Key Components
- `components/nav.tsx` — Responsive nav with scroll detection
- `components/particles.tsx` — Animated particle background
- `components/changelog/` — CurrentWork, Timeline, WeeklyActivity
- `components/writing/` — ArticleCover, ReadWithAIButtons
- `components/markdown.tsx` — Custom markdown renderer

## Key Patterns

- **Static content model**: All data in TypeScript files, type-safe with discriminated unions
- **Mobile-first**: Tailwind responsive classes, safe area insets
- **SEO**: Metadata generation from content data, Open Graph + Twitter cards, canonical URLs
- **Lazy loading**: Framer Motion only on hero, not globally imported

## Environment Variables

```
UPSTASH_REDIS_REST_URL=       # Optional: Redis cache
UPSTASH_REDIS_REST_TOKEN=     # Optional: Redis auth
NEXT_PUBLIC_SITE_URL          # Custom domain (defaults to christian-tonny.dev)
```

## Current State

Production portfolio, fully functional. Content updated regularly via TypeScript data files. Weekly GitHub activity auto-generation working. No known bugs.
