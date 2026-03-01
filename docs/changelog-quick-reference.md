# Changelog Quick Reference

## Verifying This Week's Work

Use GitHub CLI to confirm commits:
```bash
# Check MNotes
gh api repos/irachrist1/mnotes/commits --jq '.[:3] | .[] | "\(.sha[:7]) | \(.commit.message | split("\n")[0])"'

# Check Portfolio
git log --oneline --since="7 days ago"

# Check Beacon Skyway
gh api repos/irachrist1/beacon-skyway/commits --jq '.[:3] | .[] | "\(.sha[:7]) | \(.commit.message | split("\n")[0])"'
```

## Files to Edit
`app/data/changelog.ts`
`app/data/repositories.json` (only when adding a newly tracked repo)

## Add Featured Release (30 seconds)
Go to `timelineEntries`, add at top of array:
```typescript
{
  date: "YYYY-MM-DD",
  title: "Launch Title",
  description: "What shipped and why it matters.",
  link: "https://github.com/username/repo/commits/main",  // REQUIRED: GitHub link
  tags: ["Launch", "Category"],
},
```

## Add Project Update (30 seconds)
Add an `update` entry in `timelineEntries` (the project updates list is derived automatically):
```typescript
{
  version: "v2.0",
  date: "YYYY-MM-DD",
  description: "Version summary",
  changes: [
    "Change 1",
    "Change 2",
  ],
},
```

## Rules
- No emojis
- Use metrics ("100+ users", "8 datasets")
- Keep descriptions concise
- Professional tone
- **GitHub links required** - Every timeline entry must link to repo/commit

## Weekly Activity
Auto-generated weekly by GitHub Actions into `app/data/weekly-activity.generated.json`.
To run locally:

```bash
npm run activity:generate
```
