# GitHub API Issue - Debug Notes

## Problem
Recent Activity widget shows:
- 0 commits this week
- 0 active projects
- Projects listed but no activity data

## Screenshot Evidence
See: `Screenshot 2026-01-04 231214.png`
- Widget renders but displays zeros
- No error messages visible to user
- Silent failure

## Root Cause Analysis

### Issue 1: Static Export + Server-Side API
```typescript
// app/changelog/page.tsx
export const dynamic = "force-static";

export default async function ChangelogPage() {
  const projectActivities = await getProjectsActivity(projectChangelogs);
  // This tries to fetch at BUILD time
  // GitHub API likely fails or rate-limits
  // Returns empty array
}
```

**Problem:** `force-static` means Next.js generates HTML at build time. GitHub API calls happen once during build, not on each request.

### Issue 2: Silent Error Handling
```typescript
// app/lib/github.ts
export async function fetchRepoCommits(repo: string) {
  try {
    // ... fetch logic
  } catch (error) {
    console.error(`Error fetching commits for ${repo}:`, error);
    return []; // ← Returns empty array, no user feedback
  }
}
```

**Problem:** Errors are logged but not shown to user. Widget displays zeros instead of error state.

### Issue 3: No GitHub Token
```typescript
headers: {
  'Accept': 'application/vnd.github.v3+json',
  ...(process.env.GITHUB_TOKEN && {
    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
  }),
}
```

**Problem:** No `GITHUB_TOKEN` in environment = lower rate limit (60 req/hour). Build might exceed this.

## Possible Solutions

### Option A: Dynamic Rendering
```typescript
export const dynamic = "force-dynamic"; // or remove force-static
```
Pros: API calls happen on each request
Cons: Slower page loads, more API calls

### Option B: Client-Side Fetch
Move GitHub fetching to client component with SWR/React Query
Pros: Better error handling, loading states
Cons: Requires client-side data fetching setup

### Option C: Incremental Static Regeneration (ISR)
```typescript
export const revalidate = 3600; // Revalidate every hour
```
Pros: Best of both worlds - static + fresh data
Cons: Next.js 15 App Router complexity

### Option D: Pre-Generate from Git History
Don't use GitHub API at all - generate from local git log during build
Pros: No API dependency, always works
Cons: Only shows portfolio repo, not other projects

### Option E: Remove It
If we can't make it work reliably, remove Recent Activity widget
Pros: No broken features
Cons: Loses live data concept

## Recommendation for AI Evaluator
Evaluate which approach best fits:
1. User's goal (show live activity)
2. Technical constraints (Next.js 15, static preferred)
3. Maintenance burden (simplicity > features)
4. User experience (useful > flashy)

## Test Commands
```bash
# Test GitHub API manually
gh api repos/irachrist1/mnotes/commits --jq '.[:5] | .[] | .sha[:7]'

# Check environment
echo $GITHUB_TOKEN

# Test build
npm run build

# Check build logs for API errors
```

## Expected Behavior
Widget should show:
- Real commit count from last 7 days
- Active projects with recent commits
- Project names as clickable links
- Relative timestamps ("2h ago")
- Error state if API fails (not just zeros)

## Current Behavior
- Shows hardcoded zeros
- No data fetched
- No error state
- Silently broken
