# Portfolio Codebase Instructions

## Architecture Overview

This is a **fully static Next.js 13+ App Router portfolio** for Christian Iradukunda - a Software Engineer & AI Implementation Consultant. The site emphasizes measurable business impact over technical complexity, following Ogilvy-style long-form content principles.

**Critical Design Decision**: No MDX/Contentlayer dependencies. Project content lives in `app/data/projects.ts` as typed TypeScript data, rendered through a lightweight custom markdown parser (`app/components/markdown.tsx`). This eliminates build complexity while maintaining type safety.

## Development Workflow

### Running Locally
```bash
npm install
npm run dev          # Development server on localhost:3000
npm run build        # Production build (validates static generation)
```

### Deployment
- **Primary**: Vercel (auto-deploy on push to main)
- **Config**: `vercel.json` specifies security headers and caching rules
- **Static Output**: Every page exports `export const dynamic = "force-static"` for guaranteed static generation

## Content Management Pattern

### Adding/Editing Projects
1. **Data Source**: Edit `app/data/projects.ts` directly
2. **Type**: Follow the `Project` type definition (slug, title, description, body, optional links)
3. **Body Format**: Plain markdown strings (no frontmatter) - supports `##` headings, `- lists`, `1.` numbered lists
4. **Routing**: Slugs auto-generate routes via `generateStaticParams()` in `app/projects/[slug]/page.tsx`

**Example**:
```typescript
{
  slug: "project-name",
  title: "Project Title",
  description: "One-line hook with metrics",
  body: `## Challenge\n\nProblem description...\n\n## Solution\n\nWhat was built...`
}
```

### Markdown Rendering
Custom lightweight parser in `app/components/markdown.tsx`:
- Splits on `\n\n+` for blocks
- Handles `##`/`###` headings, `- ` unordered lists, `1. ` ordered lists, plain paragraphs
- No external dependencies - keeps bundle size minimal
- Does **not** support inline formatting (bold/italic/links) - keep project body simple

## Styling Conventions

### Color Palette (Tailwind)
- **Background**: `bg-black`, gradients with `zinc-600/20`
- **Text**: `text-zinc-100` (primary), `text-zinc-400` (secondary), `text-zinc-500` (tertiary)
- **Interactive**: `hover:text-zinc-300`, `hover:bg-zinc-800`, duration-200 transitions
- **Cards**: `border-zinc-600`, hover effects via Framer Motion in `app/components/card.tsx`

### Animation System
- **Custom Keyframes**: Defined in `tailwind.config.js` - `fade-in`, `fade-left`, `fade-right`
- **Particle Background**: `app/components/particles.tsx` - canvas-based animated particles with mouse interaction
- **Card Hover**: Framer Motion radial gradient mask follows cursor - see `card.tsx`

### Typography
- **Headings**: CalSans font (`--font-calsans`, defined in `app/layout.tsx`)
- **Body**: Inter font (`--font-inter`)
- **Emphasis**: Metrics use `text-4xl font-bold`, headlines use `text-3xl md:text-5xl lg:text-6xl`

## Component Patterns

### Navigation
- **Homepage**: Inline navigation in `app/page.tsx` (no separate component)
- **Other Pages**: `app/components/nav.tsx` - sticky header with IntersectionObserver for scroll effects
- **Back Navigation**: Project headers use `ArrowLeft` icon from `lucide-react`

### Layout Structure
```
<div className="flex flex-col w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
  <Particles />  // Background animation
  {/* Content sections */}
</div>
```

### Cards (`app/components/card.tsx`)
- Framer Motion wrapper with mouse-tracking gradient
- Used for metrics, project previews, contact cards
- Always wrap content: `<Card><div className="p-6">...</div></Card>`

## Business Impact Focus

### Content Philosophy
- Lead with **quantifiable results** ($120K leads, 90% accuracy, 50+ employees)
- Structure: Challenge → Solution → Technical Details → Results → Lessons
- Every technical decision explained through business value lens
- Long-form content (500+ words per project) - proven conversion pattern

### Contact Information
**Critical**: Update before deployment:
- `app/contact/page.tsx` line 10: Email href
- `app/contact/page.tsx` line 16: LinkedIn href
- `app/layout.tsx`: Metadata URLs and descriptions

## File Organization

```
app/
  page.tsx              # Homepage with hero, metrics, featured projects
  layout.tsx            # Root layout, fonts, metadata, analytics
  about/page.tsx        # Origin story, mission, track record
  skills/page.tsx       # Categorized skills with proof points
  writing/page.tsx      # Thought leadership showcase
  contact/page.tsx      # Multiple engagement options
  projects/
    page.tsx            # Projects listing
    [slug]/
      page.tsx          # Dynamic project pages (statically generated)
      header.tsx        # Project page header with back navigation
  components/
    card.tsx            # Framer Motion hover card
    markdown.tsx        # Custom markdown parser (replace-only if broken)
    nav.tsx             # Sticky navigation for non-homepage pages
    particles.tsx       # Canvas particle animation
  data/
    projects.ts         # Single source of truth for project content
```

## Testing Checklist

Before committing content changes:
- [ ] `npm run build` succeeds (validates static generation)
- [ ] All slugs in `projects.ts` are URL-safe (lowercase, hyphens only)
- [ ] Markdown body properly escaped (use backticks for template strings)
- [ ] No TypeScript errors (`app/data/projects.ts` is fully typed)

## Common Modifications

### Adding a New Page
1. Create `app/newpage/page.tsx`
2. Add `export const dynamic = "force-static";`
3. Import `Navigation` from `@/app/components/nav`
4. Update navigation links in `app/page.tsx` and `app/components/nav.tsx`

### Updating Metrics
Global search/replace across:
- `app/page.tsx` (homepage metrics cards)
- Project bodies in `app/data/projects.ts`
- `app/about/page.tsx` (track record section)

### Changing Visual Effects
- **Particle density**: `app/page.tsx` - `<Particles quantity={100} />`
- **Animation speed**: `tailwind.config.js` - keyframe durations
- **Card hover**: `app/components/card.tsx` - motion template radius

## What NOT to Change

- `app/components/markdown.tsx` - fragile regex-based parser, tested against existing content
- `tailwind.config.js` animation keyframes - used across multiple pages
- `force-static` exports - breaks static generation if removed
- `generateStaticParams()` in `[slug]/page.tsx` - required for build

## SEO & Performance

- **Metadata**: Defined in `app/layout.tsx` - includes Open Graph, Twitter Cards, robots
- **Static Generation**: All pages pre-rendered at build time (no server)
- **Image Optimization**: Use Next.js `<Image>` component when adding images
- **Font Loading**: Managed via `next/font` - Inter and CalSans pre-configured
- **Security Headers**: Configured in `vercel.json` (CSP, X-Frame-Options, etc.)

## Debugging

### Build Failures
```bash
rm -rf .next          # Clear Next.js cache
npm run build         # Rebuild from scratch
```

### Type Errors in projects.ts
- Ensure `body` field is a template string (backticks)
- Check `ProjectLink` array format for `links` field
- Validate `slug` matches pattern in `generateStaticParams()`

### Style Not Applying
- Tailwind scans `app/**/*.{js,ts,jsx,tsx}` - file must be in app directory
- Custom utilities in `global.css` under `@layer utilities`
- Ensure no conflicting inline styles override Tailwind classes
