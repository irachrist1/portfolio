# Changelog Feature Documentation

## What Was Built

A professional changelog page (`/changelog`) with three sections:

1. **Weekly Git Activity** - Auto-generated commit data from tracked repositories
2. **Featured Releases** - Major milestones and launches
3. **Project Updates** - Version history organized by project

## Architecture

### File Structure
```
app/
  changelog/page.tsx          # Main page
  components/changelog/
    WeeklyActivity.tsx        # Auto-generated weekly git summary
  data/changelog.ts           # All changelog data
  data/repositories.json      # Tracked repo registry
  data/weekly-activity.generated.json # Generated weekly activity data
scripts/
  generate-weekly-activity.mjs # Generator script
```

### Key Features
- **No emojis** - Professional design only
- **Automated weekly activity** - Scheduled GitHub Action updates commit stats
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

Edit `app/data/changelog.ts` - add to top of `timelineEntries` (releases):

```typescript
{
  date: "2026-01-10",
  title: "Your Launch Title",
  description: "What you shipped and why it matters. Include metrics if possible.",
  link: "https://github.com/username/repo/commits/main",  // REQUIRED: GitHub repo or specific commit
  tags: ["Product Launch", "Category"],
}
```

**CRITICAL**: Every timeline entry MUST have a `link` field pointing to:
- Specific commit: `https://github.com/username/repo/commit/abc1234`
- Repo commits page: `https://github.com/username/repo/commits/main`
- Live project (if no public repo): `/projects/slug`

This provides transparency and allows viewers to see actual code changes, not just words.

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

Also register the repository in `app/data/repositories.json` so weekly activity includes it.

## GitHub Integration

### How It Works
- GitHub Action runs weekly (`.github/workflows/weekly-activity.yml`)
- Runs `node scripts/generate-weekly-activity.mjs --days=7`
- Writes `app/data/weekly-activity.generated.json`
- Changelog and Projects pages consume this generated file

### Setup (Optional)
Set `GH_ACTIVITY_TOKEN` in GitHub Actions secrets for higher API rate limits:
```
GH_ACTIVITY_TOKEN=your_github_personal_access_token
```

## Design Guidelines

- **No emojis** - Use professional language only
- **Concise** - Keep descriptions under 2-3 sentences
- **Metrics** - Include numbers when possible ("100+ careers", "8+ datasets")
- **Professional** - Write like you're reporting to investors
- **GitHub Links Required** - Every timeline entry must link to actual code (repo/commit) for transparency

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

**Good (professional, specific, with GitHub link):**
```typescript
{
  date: "2026-01-04",
  title: "MNotes Landing Page Launch",
  description: "Complete landing page implementation with 11 new components. Smooth scroll animations, email waitlist integration, and mobile-responsive design.",
  link: "https://github.com/irachrist1/mnotes/commits/main",  // Links to actual code
  tags: ["Product Launch"],
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

Weekly activity is auto-generated by CI, not manually edited.
