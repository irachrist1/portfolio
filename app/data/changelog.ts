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
    id: "current-mnotes-launch",
    date: "2026-01-03",
    type: "current",
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    title: "Launch Preparation",
    description:
      "Finalizing MNotes for public launch - waitlist integration and final polish",
    extendedDescription:
      "MNotes is a privacy-first note-taking application designed for speed and simplicity. We're currently in the final stretch of preparing for a public beta launch, focusing on robust waitlist management and a seamless onboarding experience.",
    progress: 85,
    eta: "This week",
    completedTasks: [
      "Core editor implementation",
      "Local-first sync engine",
      "Privacy-focused encryption layer",
    ],
    tasks: [
      "Email waitlist integration with Resend",
      "Final landing page polish",
      "Launch announcement preparation",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Supabase"],
    lastUpdated: "2026-01-04",
    links: {
      live: "https://mnotes.io",
      github: "https://github.com/irachrist1/mnotes",
    },
  },
  {
    id: "current-portfolio-changelog",
    date: "2026-01-04",
    type: "current",
    projectSlug: "portfolio",
    projectTitle: "Portfolio",
    title: "Changelog Timeline",
    description:
      "Building unified timeline view with year grouping and project filters",
    extendedDescription:
      "The portfolio changelog is evolving from a simple list into a rich, interactive timeline. This update introduces project-based filtering, year grouping, and deep-dive modals to provide a transparent view of my development process.",
    progress: 90,
    eta: "Today",
    completedTasks: [
      "Unified timeline architecture",
      "Year grouping logic",
      "Project filter chips",
    ],
    tasks: [
      "Interactive project deep-dive modals",
      "Mobile interaction optimization",
    ],
    techStack: ["Next.js", "Framer Motion", "Radix UI", "Tailwind CSS"],
    lastUpdated: "2026-01-04",
    links: {
      github: "https://github.com/irachrist1/portfolio",
    },
  },
  {
    id: "current-opportunitymap-v3",
    date: "2025-12-11",
    type: "current",
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    title: "Next.js 16 + React 19 Upgrade",
    description:
      "Major framework upgrade with enhanced mentor profiles and assessment redesign",
    extendedDescription:
      "OpportunityMap is a platform connecting talent with mentorship. We're undergoing a significant technical migration to Next.js 16 and React 19 to leverage the latest performance improvements and server components features.",
    progress: 60,
    eta: "Next week",
    completedTasks: [
      "React 19 compiler integration",
      "Server Actions migration",
      "Database schema optimization",
    ],
    tasks: [
      "Mentor profile usability improvements",
      "Assessment page redesign with research-backed questions",
      "Google Calendar integration for sessions",
    ],
    techStack: ["Next.js 16", "React 19", "Prisma", "PostgreSQL", "Google API"],
    lastUpdated: "2025-12-16",
    links: {
      live: "https://opportunitymap.com",
    },
  },
];

// ========================================
// TIMELINE ENTRIES (Releases + Updates)
// Sorted newest first
// ========================================
export const timelineEntries: TimelineEntry[] = [
  // 2026
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
    link: "/projects/mnotes",
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
    link: "/projects/rgi",
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
    link: "/projects/opportunitymap",
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
    link: "/projects/beacon-skyway",
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
export function getUniqueProjects(): { slug: string; title: string }[] {
  const seen = new Set<string>();
  const projects: { slug: string; title: string }[] = [];

  for (const entry of timelineEntries) {
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
// TODO: Remove these after migration is complete
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

export const projectChangelogs: ProjectChangelog[] = [
  {
    projectSlug: "opportunitymap",
    projectTitle: "OpportunityMap",
    githubRepo: "irachrist1/spark",
    updates: timelineEntries
      .filter(
        (e): e is UpdateEntry =>
          e.type === "update" && e.projectSlug === "opportunitymap"
      )
      .map((e) => ({
        version: e.version,
        date: e.date,
        description: e.description,
        changes: e.changes,
      })),
  },
  {
    projectSlug: "mnotes",
    projectTitle: "MNotes",
    githubRepo: "irachrist1/mnotes",
    updates: timelineEntries
      .filter(
        (e): e is UpdateEntry =>
          e.type === "update" && e.projectSlug === "mnotes"
      )
      .map((e) => ({
        version: e.version,
        date: e.date,
        description: e.description,
        changes: e.changes,
      })),
  },
  {
    projectSlug: "rgi",
    projectTitle: "RGI - Rwanda Government Intelligence",
    githubRepo: "ChristianTonny/rgi",
    updates: timelineEntries
      .filter(
        (e): e is UpdateEntry => e.type === "update" && e.projectSlug === "rgi"
      )
      .map((e) => ({
        version: e.version,
        date: e.date,
        description: e.description,
        changes: e.changes,
      })),
  },
  {
    projectSlug: "beacon-skyway",
    projectTitle: "Beacon Skyway",
    githubRepo: "irachrist1/beacon-skyway",
    updates: timelineEntries
      .filter(
        (e): e is UpdateEntry =>
          e.type === "update" && e.projectSlug === "beacon-skyway"
      )
      .map((e) => ({
        version: e.version,
        date: e.date,
        description: e.description,
        changes: e.changes,
      })),
  },
  {
    projectSlug: "contentflow",
    projectTitle: "ContentFlow",
    githubRepo: "irachrist1/andersen-content-dashboard",
    updates: timelineEntries
      .filter(
        (e): e is UpdateEntry =>
          e.type === "update" && e.projectSlug === "contentflow"
      )
      .map((e) => ({
        version: e.version,
        date: e.date,
        description: e.description,
        changes: e.changes,
      })),
  },
];
