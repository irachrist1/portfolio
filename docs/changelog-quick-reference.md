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

## File to Edit
`app/data/changelog.ts`

## Add Featured Release (30 seconds)
Go to line 28, add at top of array:
```typescript
{
  date: "YYYY-MM-DD",
  title: "Launch Title",
  description: "What shipped and why it matters.",
  link: "/projects/slug",
  tags: ["Launch", "Category"],
},
```

## Add Project Update (30 seconds)
Find your project in `projectChangelogs`, add at top of `updates`:
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

## Live Activity
Auto-updates from GitHub - no manual work needed.
