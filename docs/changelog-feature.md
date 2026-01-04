# Changelog Feature Documentation

## What Was Built

A professional changelog page (`/changelog`) with three sections:

1. **Live Activity** - Real-time GitHub commit data showing active projects
2. **Featured Releases** - Major milestones and launches
3. **Project Updates** - Version history organized by project

## Architecture

### File Structure
```
app/
  changelog/page.tsx          # Main page
  components/changelog/
    ActiveProjectsPulse.tsx   # GitHub integration
    FeaturedReleases.tsx      # Major releases
    ProjectUpdates.tsx        # Project versions
  data/changelog.ts           # All changelog data
  lib/github.ts               # GitHub API utilities
```

### Key Features
- **No emojis** - Professional design only
- **Live GitHub data** - Auto-updates from repos
- **Hybrid structure** - Featured + project-specific
- **Grid layouts** - Better space utilization
- **Collapsible sections** - Clean UX

## Data Structure

```typescript
// Featured releases (major milestones)
type FeaturedRelease = {
  date: string;           // "2026-01-04"
  title: string;          // "Product Launch"
  description: string;    // What shipped
  link?: string;          // /projects/slug or external
  tags?: string[];        // ["Launch", "Article"]
}

// Project updates (version history)
type ProjectUpdate = {
  version: string;        // "v2.1" or "Phase 3.0"
  date: string;
  description: string;
  changes: string[];      // Bullet points (no emojis)
}
```

## How to Add New Entries

### 1. Featured Release (Major Milestone)

Edit `app/data/changelog.ts` - add to top of `featuredReleases`:

```typescript
{
  date: "2026-01-10",
  title: "Your Launch Title",
  description: "What you shipped and why it matters. Include metrics if possible.",
  link: "/projects/your-slug",
  tags: ["Product Launch", "Category"],
}
```

### 2. Project Update (Version)

Edit `app/data/changelog.ts` - add to top of project's `updates` array:

```typescript
{
  version: "v3.0",
  date: "2026-01-10",
  description: "Brief version summary",
  changes: [
    "First major change or feature",
    "Second improvement",
    "Third addition",
  ],
}
```

### 3. New Project Changelog

Add entire project to `projectChangelogs`:

```typescript
{
  projectSlug: "your-project",      // Must match projects.ts
  projectTitle: "Your Project",
  githubRepo: "username/repo",      // For live activity
  updates: [
    {
      version: "v1.0",
      date: "2026-01-10",
      description: "Initial release",
      changes: ["Feature 1", "Feature 2"],
    }
  ],
}
```

## GitHub Integration

### How It Works
- Fetches commits from last 7 days on page load
- Maps repos to projects via `githubRepo` field
- Caches for 1 hour (server-side)
- Shows active/quiet status with visual indicators

### Setup (Optional)
Add `GITHUB_TOKEN` to `.env.local` for higher rate limits:
```
GITHUB_TOKEN=your_github_personal_access_token
```

## Design Guidelines

- **No emojis** - Use professional language only
- **Concise** - Keep descriptions under 2-3 sentences
- **Metrics** - Include numbers when possible ("100+ careers", "8+ datasets")
- **Professional** - Write like you're reporting to investors

## Example Entry

**Bad (emoji-heavy, vague):**
```typescript
{
  date: "2026-01-04",
  title: "New Feature! 🎉",
  description: "Added some cool stuff to the app 🚀 Check it out!",
  changes: [
    "🎨 Made it pretty",
    "✨ Added features",
  ]
}
```

**Good (professional, specific):**
```typescript
{
  date: "2026-01-04",
  title: "MNotes Landing Page Launch",
  description: "Complete landing page implementation with 11 new components. Smooth scroll animations, email waitlist integration, and mobile-responsive design.",
  changes: [
    "Built 11 landing page components (Hero, Features, FAQ, Waitlist)",
    "Integrated Framer Motion for smooth scroll animations",
    "Added email waitlist form with react-hook-form validation",
  ]
}
```

## Build Time: 60 Seconds

1. Open `app/data/changelog.ts`
2. Add entry at top of relevant array
3. Save - auto-deploys on push

No manual GitHub updates needed - live activity pulls automatically.
