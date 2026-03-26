import repositories from "./repositories.json";
import { projects } from "./projects";
import { assertChangelogIntegrity } from "./changelog-validation";

// ========================================
// UNIFIED CHANGELOG DATA MODEL
// Using discriminated unions for type safety
// ========================================

// Base fields shared by all entry types
type BaseEntry = {
  id: string;
  date: string;
  projectSlug: string;
  projectTitle: string;
  title: string;
  description: string;
};

// "Currently Building" entries - shown in hero section
export type CurrentEntry = BaseEntry & {
  type: "current";
  progress: number; // 0-100
  eta: string; // "This week", "End of January"
  tasks: string[]; // What's left to do (Remaining Tasks)
  completedTasks?: string[]; // What's already done
  extendedDescription?: string; // 2-3 sentences for modal
  techStack?: string[]; // Technology badges
  lastUpdated: string; // For staleness detection
  links?: {
    github?: string;
    live?: string;
    project?: string; // Link to /projects/[slug]
  };
};

// Major milestone releases
export type ReleaseEntry = BaseEntry & {
  type: "release";
  tags: string[];
  link?: string;
};

// Project version updates
export type UpdateEntry = BaseEntry & {
  type: "update";
  version: string;
  changes: string[];
};

// Union type for timeline entries (excludes current work)
export type TimelineEntry = ReleaseEntry | UpdateEntry;

// All entry types
export type AnyEntry = CurrentEntry | ReleaseEntry | UpdateEntry;

// ========================================
// CURRENT WORK (Hero Section)
// What you're actively building right now
// ========================================
export const currentWork: CurrentEntry[] = [
  {
    id: "current-daylens-desktop",
    date: "2026-03-26",
    type: "current",
    projectSlug: "daylens",
    projectTitle: "Daylens",
    title: "Mac + Windows Patch Train",
    description:
      "Shipping rapid iterations on local-first AI time tracking: auto-update hardening, fullscreen playback edge cases, and Windows release polish alongside the Mac menubar app.",
    extendedDescription:
      "Daylens is the most active line right now. Recent work centered on trustworthy updates (strip quarantine after install, always resolve latest release URL), hiding noisy apps/sites, and fixing fullscreen tracking so time attribution stays accurate. The Windows build cut 1.0.10 with workflow fixes and bundled font polish; the web companion keeps pace for mobile review.",
    progress: 78,
    eta: "This month",
    completedTasks: [
      "Shipped v1.0.18–v1.0.19 on Mac with fullscreen playback tracking fixes",
      "Hardened Sparkle/update path: latest release URL, quarantine cleanup, backup cleanup",
      "Windows 1.0.10 with release workflow secret gating and layout polish",
      "Bundled app font on Windows and refined update banner UX",
      "Daylens web companion updates for dashboard flows",
    ],
    tasks: [
      "Continue patch cadence across Mac and Windows channels",
      "Tighten activity classification and privacy boundaries",
      "Align web companion with desktop feature parity where it matters",
    ],
    techStack: ["Swift", "Tauri", "Rust", "TypeScript", "GitHub Actions"],
    lastUpdated: "2026-03-26",
    links: {
      github: "https://github.com/irachrist1/daylens",
      project: "/projects/daylens",
    },
  },
  {
    id: "current-sync-blogs-v2",
    date: "2026-03-26",
    type: "current",
    projectSlug: "sync-blogs",
    projectTitle: "Sync Blogs",
    title: "AI Studio + Migration Track",
    description:
      "Express 5 / TypeScript writing studio with AI drafting and syndication — executing the Next.js + Convex + Clerk migration while fixing auth and editor UX.",
    extendedDescription:
      "After the v2 rebuild shipped in mid-March, focus shifted to migration planning, auth error clarity, and mobile responsiveness on long editor flows. SSE tasks and clarify-questions UX are in motion so writers get reliable streaming feedback while the stack moves toward the target architecture.",
    progress: 62,
    eta: "This month",
    completedTasks: [
      "Documented comprehensive migration plan (Next.js + Convex + Clerk + Tailwind)",
      "Surfaced real login errors instead of generic session expiry on auth endpoints",
      "Improved mobile layout on clarify-questions and SSE-backed tasks",
    ],
    tasks: [
      "Execute staged migration without breaking publishing",
      "Finish streaming task reliability across browsers",
      "Tighten editor performance on large drafts",
    ],
    techStack: ["Node.js", "Express 5", "TypeScript", "Anthropic"],
    lastUpdated: "2026-03-26",
    links: {
      github: "https://github.com/irachrist1/sync-blogs",
      project: "/projects/sync-blogs",
    },
  },
  {
    id: "current-ocr-extractor",
    date: "2026-03-26",
    type: "current",
    projectSlug: "ocr-extractor",
    projectTitle: "OCR Extractor",
    title: "Tests + Frontend Bindings",
    description:
      "Collaborator work on a document OCR pipeline — hardening pytest coverage, refactoring frontend action bindings, and removing stale engine references.",
    extendedDescription:
      "Contributions emphasize reliability: clean pytest runs, safer frontend wiring under edge cases, and housekeeping so the stack matches the current OCR path. The goal is predictable behavior for users while the feature set grows.",
    progress: 58,
    eta: "Soon",
    completedTasks: [
      "Restored clean pytest runs and expanded regression coverage",
      "Delegated and hardened frontend review bindings",
      "Removed stale legacy OCR references",
    ],
    tasks: [
      "Extend coverage for remaining extraction paths",
      "Validate end-to-end flows after binding refactors",
      "Coordinate with maintainers on release tagging",
    ],
    techStack: ["Python", "pytest", "Frontend stack per repo"],
    lastUpdated: "2026-03-26",
    links: {
      github: "https://github.com/kanmwangi2/ocr-extractor",
      project: "/projects/ocr-extractor",
    },
  },
];

// ========================================
// TIMELINE ENTRIES (Releases + Updates)
// Sorted newest first
// ========================================
export const timelineEntries: TimelineEntry[] = [
  // 2026 - March
  {
    id: "daylens-mac-v1019-march",
    date: "2026-03-25",
    type: "release",
    projectSlug: "daylens",
    projectTitle: "Daylens",
    title: "Mac v1.0.19 — Updates + Fullscreen Tracking",
    description:
      "Patch train on the Swift menubar app: preserve fullscreen playback tracking, harden Sparkle updates (latest release URL, quarantine strip, backup cleanup), and hide selected apps/sites from noise.",
    tags: ["Desktop", "macOS"],
    link: "https://github.com/irachrist1/daylens/commits/main",
  },
  {
    id: "daylens-windows-1010-release",
    date: "2026-03-24",
    type: "release",
    projectSlug: "daylens",
    projectTitle: "Daylens",
    title: "Windows 1.0.10 + Release Pipeline",
    description:
      "Windows channel: bundled app font, polished update banner, refined release layout, and GitHub Actions workflow fixes for secret gating on shipping builds.",
    tags: ["Desktop", "Windows"],
    link: "https://github.com/irachrist1/daylens-windows/commits/main",
  },
  {
    id: "ocr-extractor-march-hardening",
    date: "2026-03-15",
    type: "update",
    projectSlug: "ocr-extractor",
    projectTitle: "OCR Extractor",
    title: "Tests + Binding Refactors",
    version: "v0.x",
    description: "Reliability pass on collaborator repo",
    changes: [
      "Hardened pytest runs and expanded regression coverage",
      "Refactored frontend review and action bindings",
      "Removed stale legacy OCR engine references",
    ],
  },
  {
    id: "sync-blogs-v2-rebuild",
    date: "2026-03-17",
    type: "release",
    projectSlug: "sync-blogs",
    projectTitle: "Sync Blogs",
    title: "Sync Blogs v2 Rebuild",
    description:
      "Rebuilt Sync Blogs into a live AI writing studio with Anthropic-backed drafting, five-persona review, auth, a new landing page, freshness workflows, and a more serious editor experience for iterative writing.",
    tags: ["Product Rebuild", "AI Writing"],
    link: "https://github.com/irachrist1/sync-blogs/commits/main",
  },
  {
    id: "rwanda-tech-cluster-tender-workflow",
    date: "2026-03-16",
    type: "release",
    projectSlug: "rwanda-tech-cluster",
    projectTitle: "Rwanda Tech Cluster",
    title: "BZ Intelligence Tender Workflow",
    description:
      "Extended the merged Rwanda Tech Cluster and BZ Intelligence stream with tender discovery, onboarding gates, AI fit scoring, RPPA scraping, and verification scripts for high-match opportunities.",
    tags: ["MVP Expansion", "Tenders"],
    link: "https://github.com/irachrist1/bz-intelligence/commits/main",
  },
  {
    id: "opportunitymap-skills-engine",
    date: "2026-03-16",
    type: "release",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "Skills Engine + Mentor Handoff",
    description:
      "Expanded the OpportunityMap product stream with a dedicated skills route, server-side skill analysis, curated Rwanda jobs and learning resources, and mentor handoff from skill gaps to relevant mentors. Added unit, integration, and E2E coverage to harden the new matching flow.",
    tags: ["Career Discovery", "AI Matching"],
    link: "https://github.com/ChristianTonny/spark/commits/feature/skillsync-merge",
  },
  {
    id: "opportunitymap-skills-engine-update",
    date: "2026-03-16",
    type: "update",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "Skills Layer Expansion",
    version: "v2.2",
    description: "AI skill analysis, Rwanda data seeds, and test-backed mentor handoff",
    changes: [
      "Added a dedicated /skills experience with skill selection, gap analysis, and job match UI",
      "Seeded Rwanda job listings, skill taxonomy, and learning resources for local recommendations",
      "Built server-side skill analysis with legacy data compatibility fixes",
      "Passed career and skill context into the mentors page for targeted mentor discovery",
      "Added Vitest coverage and Playwright E2E scaffolding for the new skills workflow",
    ],
  },
  {
    id: "rwanda-tech-cluster-investor-rebuild",
    date: "2026-03-01",
    type: "release",
    projectSlug: "rwanda-tech-cluster",
    projectTitle: "Rwanda Tech Cluster",
    title: "Investor Intelligence Platform Rebuild",
    description:
      "Rebuilt Rwanda Tech Cluster into an investor-facing ecosystem intelligence platform with Convex ingestion, live APIs, executive briefs, company profiles, and a trust-centered methodology surface. The product shifted from static market-share views toward explainable, data-backed exploration.",
    tags: ["Platform Rebuild", "Analytics"],
    link: "https://github.com/irachrist1/rwanda-tech-cluster/commits/main",
  },
  {
    id: "rwanda-tech-cluster-investor-update",
    date: "2026-03-01",
    type: "update",
    projectSlug: "rwanda-tech-cluster",
    projectTitle: "Rwanda Tech Cluster",
    title: "Investor Intelligence Rebuild",
    version: "v0.2.0",
    description: "Convex ingestion, live investor APIs, and a new research surface",
    changes: [
      "Added Convex schema, ingestion pipeline, HTTP endpoints, seed tooling, and smoke tests",
      "Shipped investor-facing executive brief, explorer, company profile, and methodology pages",
      "Connected investor and admin UIs to live Convex APIs instead of static mock flows",
      "Introduced quality-gated scoring and an investor API surface for explainable metrics",
      "Added deployment docs, runbooks, and product contracts to support rollout",
    ],
  },

  // 2026 - February
  {
    id: "mnotes-design-system",
    date: "2026-02-12",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Premium Design System",
    description:
      "Complete visual overhaul with sky blue gradient palette, Framer Motion animations, animated stat cards with counting numbers, spring-physics sidebar, and dot grid background patterns. Inspired by Vercel, Linear, Airbnb, and Apple.",
    tags: ["Design System", "UI/UX"],
    link: "https://github.com/irachrist1/mnotes/commits/fix/jarvis-feb11",
  },
  {
    id: "mnotes-design-system-update",
    date: "2026-02-12",
    type: "update",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Design System Implementation",
    version: "v0.2.0",
    description: "Premium design system with animations and sky blue palette",
    changes: [
      "Sky blue color palette with gradient tokens and CSS custom properties",
      "Framer Motion sidebar with animated active indicator (layoutId spring)",
      "StatCard component with counting number animations (useMotionValue)",
      "Dot grid and gradient mesh background patterns",
      "Card components with rounded-xl, hover lift, and sky-blue glow",
      "SlideOver with spring-physics animation and backdrop blur",
      "Staggered page entrance animations for all dashboard panels",
      "All buttons migrated to gradient primary style",
    ],
  },
  {
    id: "mnotes-analytics-rebuild",
    date: "2026-02-12",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Analytics Dashboard Rebuild",
    description:
      "Completely rebuilt analytics page with 6 interactive chart panels: revenue by category, ideas pipeline funnel, revenue efficiency ranking ($/hour), streams by status, top revenue streams, and mentorship overview with topic aggregation.",
    tags: ["Feature Release", "Analytics"],
    link: "https://github.com/irachrist1/mnotes/commits/fix/jarvis-feb11",
  },
  {
    id: "mnotes-ai-foundations",
    date: "2026-02-11",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Server-Side AI Foundations",
    description:
      "Moved all AI calls to Convex server-side actions. Deleted 768 lines of broken client-side AI code. Added persistent insights with unread/read/dismissed status, settings page for provider and model selection, and proper error boundaries.",
    tags: ["Architecture", "AI"],
    link: "https://github.com/irachrist1/mnotes/commits/fix/jarvis-feb11",
  },
  {
    id: "mnotes-convex-migration",
    date: "2026-02-11",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Convex Migration + UI Redesign",
    description:
      "Migrated entire backend from Supabase to Convex with 5 tables and full CRUD. Redesigned dashboard UI with sidebar navigation, stat cards, and mobile-responsive layout. 89 files changed in a single commit.",
    tags: ["Migration", "UI Redesign"],
    link: "https://github.com/irachrist1/mnotes/commits/fix/jarvis-feb11",
  },
  {
    id: "mnotes-convex-update",
    date: "2026-02-11",
    type: "update",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Convex Migration + AI Overhaul",
    version: "v0.1.0",
    description: "Complete backend migration and AI architecture overhaul",
    changes: [
      "Migrated from Supabase to Convex (5 tables with indexes and CRUD)",
      "Deleted old ai.service.ts (768 lines of fake insights with Math.random)",
      "Built server-side AI via Convex actions (OpenRouter + Google AI Studio)",
      "Added userSettings table for per-user AI configuration",
      "Added aiInsights table with persistent unread/read/dismissed status",
      "Created Settings page with model selector and API key management",
      "Redesigned dashboard with sidebar navigation and stat cards",
      "Added mobile hamburger menu and responsive card layouts",
      "Fixed Convex function name mismatches (getAll to list, arg types)",
      "Created product vision document with 7-sprint roadmap",
    ],
  },
  {
    id: "mnotes-multi-agent",
    date: "2026-02-12",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Multi-Agent Development Strategy",
    description:
      "Set up three AI agents working in parallel: Jarvis (design system + dashboard), Claude Code (landing page redesign), and Codex (auth, testing, CI/CD). Created detailed prompt documents for each agent in the repo.",
    tags: ["Development", "AI Agents"],
    link: "https://github.com/irachrist1/mnotes/tree/fix/jarvis-feb11/docs",
  },

  // 2026 - January (existing entries below)
  {
    id: "portfolio-learning-page-overhaul",
    date: "2026-01-18",
    type: "release",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Learning Page Overhaul",
    description:
      "Launched a new interactive learning page highlighting the Flutter health app and R programming coursework. Refined layout, iconography, and typography for a cleaner educational narrative.",
    tags: ["Feature Release", "Design"],
    link: "https://github.com/irachrist1/portfolio/commits/main",
  },
  {
    id: "portfolio-v3-1",
    date: "2026-01-18",
    type: "update",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Learning Page Refinement",
    version: "v3.1",
    description: "Interactive learning page and visual cleanup",
    changes: [
      "Added interactive learning page for Flutter health app and R programming course",
      "Removed header links and resolved JSX layout issues",
      "Replaced emoji accents with lucide iconography",
      "Simplified gradients and shifted to zinc-based palette",
    ],
  },
  {
    id: "portfolio-v3-release",
    date: "2026-01-12",
    type: "release",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Portfolio v3.0 Release",
    description:
      "Major feature release with unified changelog timeline, social preview images, and comprehensive mobile UX improvements. Enhanced navigation, interactive modals, and standardized layouts across all pages.",
    tags: ["Feature Release", "UX Improvement"],
    link: "https://github.com/irachrist1/portfolio/commits/main",
  },
  {
    id: "portfolio-social-previews",
    date: "2026-01-06",
    type: "release",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Social Preview Images",
    description:
      "Implemented social media preview images (og.png) for improved link sharing on platforms like LinkedIn and Twitter. Custom previews for writing page featuring essay titles and professional branding.",
    tags: ["Feature Release", "SEO"],
    link: "https://github.com/irachrist1/portfolio/commit/ac9e993",
  },
  {
    id: "essay-two-things-every-app-needs",
    date: "2026-01-05",
    type: "release",
    projectSlug: "writing",
    projectTitle: "Writing",
    title: "Two Things Every App Needs",
    description:
      "New essay on product development philosophy. Explores why changelogs and feedback pages are essential for building trust in the AI era, with analysis of Arc, Perplexity, Raycast, and lessons from high-profile product failures.",
    tags: ["Essay", "Product Strategy"],
    link: "/writing",
  },
  {
    id: "mnotes-landing-launch",
    date: "2026-01-04",
    type: "release",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Landing Page Launch",
    description:
      "Complete landing page implementation with 11 new components. Smooth scroll animations, email waitlist integration, and mobile-responsive design. Over 3,200 lines of code added to prepare MNotes for public launch.",
    tags: ["Product Launch", "Landing Page"],
    link: "https://github.com/irachrist1/mnotes/commits/main",
  },
  {
    id: "portfolio-v3",
    date: "2026-01-12",
    type: "update",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Major Feature Release",
    version: "v3.0",
    description: "Changelog timeline, social previews, and mobile improvements",
    changes: [
      "Social preview images (og.png) for improved link sharing on social platforms",
      "Published essay: Two Things Every App Needs with citations and hyperlinks",
      "Mobile navigation dropdown with improved backdrop effects",
      "Interactive deep-dive modals for currently building cards",
      "Unified changelog timeline with year grouping and project filters",
      "Mobile UI refinements (auto-close menu on scroll, vertical project headers)",
      "Page width standardization to max-w-7xl for consistent left-aligned layouts",
    ],
  },
  {
    id: "mnotes-phase-3",
    date: "2026-01-04",
    type: "update",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Phase 3.0",
    version: "Phase 3.0",
    description: "Public launch preparation with complete landing page",
    changes: [
      "Built 11 landing page components (Hero, Features, FAQ, Waitlist, etc.)",
      "Integrated Framer Motion for smooth scroll animations",
      "Added email waitlist form with react-hook-form validation",
      "Implemented FAQ accordion with Radix UI",
      "Upgraded to latest Next.js and React versions",
      "Added lucide-react icon system",
    ],
  },

  // 2025
  {
    id: "rgi-hackathon",
    date: "2025-01-15",
    type: "release",
    projectSlug: "rgi",
    projectTitle: "RGI",
    title: "Rwanda Government Intelligence",
    description:
      "NISR 2025 Big Data Hackathon finalist. Built AI-powered government intelligence platform integrating 8+ official datasets. Reduced policy analysis time from weeks to 30 seconds for Rwanda's 23 ministries.",
    tags: ["Hackathon Finalist", "AI Platform"],
    link: "https://github.com/ChristianTonny/rgi",
  },
  {
    id: "rgi-v1",
    date: "2025-01-15",
    type: "update",
    projectSlug: "rgi",
    projectTitle: "RGI",
    title: "Initial Platform Launch",
    version: "v1.0",
    description: "Initial platform launch for NISR hackathon",
    changes: [
      "Integrated 8+ official NISR datasets (EICV7, Labour Force, Census 2022)",
      "Built AI assistant for natural language policy queries",
      "Created executive dashboard for budget tracking and KPIs",
      "Implemented instant policy brief generation",
    ],
  },
  {
    id: "ai-strategy-article",
    date: "2025-01-10",
    type: "release",
    projectSlug: "writing",
    projectTitle: "Writing",
    title: "AI Implementation & Business Strategy",
    description:
      "Published comprehensive guide on practical AI implementation for businesses. Shared real-world frameworks and strategies from enterprise work. Reached 5K+ views in first week.",
    tags: ["Writing", "AI Strategy"],
    link: "https://www.linkedin.com/posts/irachrist1_ai-implementation-businessstrategy-activity-7310186247170199553-3CUF",
  },

  // 2024
  {
    id: "opportunitymap-v2-1-launch",
    date: "2024-12-28",
    type: "release",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "OpportunityMap V2.1 Launch",
    description:
      "Launched career discovery platform for Rwandan students. 100+ African tech career paths with salary data, AI-powered matching via 15-question assessment, and mobile-optimized PWA for offline access.",
    tags: ["Product Launch", "Education"],
    link: "https://github.com/irachrist1/spark",
  },
  {
    id: "opportunitymap-v2-1",
    date: "2024-12-28",
    type: "update",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "Major Feature Expansion",
    version: "v2.1",
    description: "Major feature expansion and AI improvements",
    changes: [
      "Added 100+ African tech career paths with salary data",
      "Built AI career matching engine with 15-question assessment",
      "Implemented progressive web app for offline access",
      "Integrated Calendly for mentor booking system",
    ],
  },
  {
    id: "mnotes-phase-2-5",
    date: "2024-12-01",
    type: "update",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Frontend Integration",
    version: "Phase 2.5",
    description: "Frontend integration nearly complete",
    changes: [
      "Built business intelligence dashboard with real-time KPI tracking",
      "Implemented income stream management system",
      "Added mentor session tracking with notes and follow-ups",
      "Created ideas repository with organization tools",
    ],
  },
  {
    id: "beacon-skyway-launch",
    date: "2024-11-20",
    type: "release",
    projectSlug: "beacon-skyway",
    projectTitle: "Beacon Skyway",
    title: "Beacon Skyway Launch",
    description:
      "Ground handling operations platform for African aviation. Real-time flight dashboard, automated staff assignment, and mobile-first design for tarmac access.",
    tags: ["Product Launch", "Aviation"],
    link: "https://github.com/irachrist1/beacon-skyway",
  },
  {
    id: "beacon-skyway-v1",
    date: "2024-11-20",
    type: "update",
    projectSlug: "beacon-skyway",
    projectTitle: "Beacon Skyway",
    title: "Initial Platform Launch",
    version: "v1.0",
    description: "Initial platform launch for ground handling operations",
    changes: [
      "Built real-time flight dashboard with live status tracking",
      "Implemented automated staff assignment based on availability",
      "Created incident management with stakeholder notifications",
      "Designed mobile-first interface for tarmac operations",
    ],
  },
  {
    id: "opportunitymap-v2",
    date: "2024-11-15",
    type: "update",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "Platform Redesign",
    version: "v2.0",
    description: "Platform redesign and core feature release",
    changes: [
      "Rebuilt frontend with Next.js 14 and TypeScript",
      "Integrated Convex for real-time database and auth",
      "Launched student dashboard with saved careers",
      "Implemented neobrutalist design system",
    ],
  },
  {
    id: "contentflow-v1",
    date: "2024-11-01",
    type: "update",
    projectSlug: "contentflow",
    projectTitle: "ContentFlow",
    title: "Production Release",
    version: "v1.0",
    description: "Production release for Andersen Rwanda",
    changes: [
      "Built visual Kanban board with drag-drop workflow",
      "Implemented CRUD operations for content management",
      "Added status tracking (Inbox to Pending Review to Scheduled to Done)",
      "Integrated backend API for real-time team sync",
    ],
  },
  {
    id: "mnotes-phase-2",
    date: "2024-10-20",
    type: "update",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Backend Infrastructure",
    version: "Phase 2.0",
    description: "Backend infrastructure and data models",
    changes: [
      "Set up Supabase with PostgreSQL database",
      "Implemented authentication and user management",
      "Built React Query for server state management",
      "Added dark/light theme support",
    ],
  },
  {
    id: "rti-launch",
    date: "2024-09-01",
    type: "release",
    projectSlug: "rti",
    projectTitle: "RTI",
    title: "Rwanda Tech Index",
    description:
      "Investment intelligence dashboard tracking Rwanda's tech ecosystem. Market share analysis, compliance scoring, and regulatory AI assistant for investors and analysts.",
    tags: ["Product Launch", "Analytics"],
    link: "/projects/rti",
  },
];

// ========================================
// HELPER FUNCTIONS
// ========================================

// Get unique projects for filter chips
export function getUniqueProjects(
  entries: TimelineEntry[]
): { slug: string; title: string }[] {
  const seen = new Set<string>();
  const projects: { slug: string; title: string }[] = [];

  for (const entry of entries) {
    if (!seen.has(entry.projectSlug)) {
      seen.add(entry.projectSlug);
      projects.push({
        slug: entry.projectSlug,
        title: entry.projectTitle,
      });
    }
  }

  return projects;
}

// Group entries by year
export function groupEntriesByYear(
  entries: TimelineEntry[]
): Map<number, TimelineEntry[]> {
  const grouped = new Map<number, TimelineEntry[]>();

  for (const entry of entries) {
    const year = new Date(entry.date).getFullYear();
    if (!grouped.has(year)) {
      grouped.set(year, []);
    }
    grouped.get(year)!.push(entry);
  }

  return grouped;
}

// Check if a "current" entry is stale (> 14 days since lastUpdated)
export function isStale(entry: CurrentEntry): boolean {
  const lastUpdated = new Date(entry.lastUpdated);
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diffDays > 14;
}

// Get staleness label
export function getStalenessLabel(entry: CurrentEntry): string | null {
  const lastUpdated = new Date(entry.lastUpdated);
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays <= 7) return null;
  if (diffDays <= 14) return `Updated ${diffDays} days ago`;
  return `Last updated ${diffDays} days ago`;
}

// ========================================
// LEGACY EXPORTS (for backwards compatibility during migration)
// ========================================
export type FeaturedRelease = {
  date: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

export type ProjectUpdate = {
  version: string;
  date: string;
  description: string;
  changes: string[];
};

export type ProjectChangelog = {
  projectSlug: string;
  projectTitle: string;
  githubRepo?: string;
  updates: ProjectUpdate[];
};

// Legacy arrays - derived from new structure
export const featuredReleases: FeaturedRelease[] = timelineEntries
  .filter((e): e is ReleaseEntry => e.type === "release")
  .map((e) => ({
    date: e.date,
    title: e.title,
    description: e.description,
    link: e.link,
    tags: e.tags,
  }));

export const projectChangelogs: ProjectChangelog[] = repositories.map((project) => ({
  projectSlug: project.projectSlug,
  projectTitle: project.projectTitle,
  githubRepo: project.githubRepo,
  updates: timelineEntries
    .filter(
      (entry): entry is UpdateEntry =>
        entry.type === "update" && entry.projectSlug === project.projectSlug
    )
    .map((entry) => ({
      version: entry.version,
      date: entry.date,
      description: entry.description,
      changes: entry.changes,
    })),
}));

assertChangelogIntegrity({
  projects,
  repositories,
  currentWork,
  timelineEntries,
});
