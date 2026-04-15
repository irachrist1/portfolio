import { getPublishedArticles } from "@/app/data/writing";
import { projects } from "@/app/data/projects";
import { currentWork } from "@/app/data/changelog";

export const KNOWLEDGE = {
  bio: `Christian Tonny is a software engineer and writer based in Kigali, Rwanda. He works at Andersen Rwanda and builds his own products on the side.`,

  work: `At Andersen Rwanda, he builds AI automation tools for research, compliance, and market analysis. His work centers on turning complex business processes into working AI-powered systems.`,

  projects: `His main personal project is Daylens — a local-first, AI-powered time tracking app for Mac, Windows, and web. It runs entirely on your machine, tracks what you work on automatically, and lets you query your own time data using AI. He is also working on Sync Blogs, an AI writing studio for cross-platform content syndication, and an OCR Extractor pipeline for document processing.`,

  writing: `He writes a newsletter called Rwanda's Tech Insider about AI, building products, and technology. Published issues cover AI tools and workflows, the state of AI in 2026, time tracking, and building in public. The newsletter is practical — tools you can set up this week, not theory.`,

  availability: `Christian is not actively looking for new opportunities. He is focused on Daylens and his work at Andersen Rwanda. He is open to interesting conversations.`,

  contact: `[ctonny111@gmail.com](mailto:ctonny111@gmail.com) | [linkedin.com/in/irachrist1](https://linkedin.com/in/irachrist1) | [github.com/irachrist1](https://github.com/irachrist1)`,

  location: `Kigali, Rwanda (GMT+2)`,

  personality: `Direct, curious, and genuinely invested in making things work. Not interested in hype. Interested in what actually ships.`,
};

export type WidgetType =
  | { type: "article-list"; props: { articles: { title: string; slug: string; publishedAt: string | null }[] } }
  | { type: "project-card"; props: { slug: string; title: string; description: string; tagline?: string; links?: { label: string; href: string }[] } }
  | { type: "contact-card"; props: { email: string; linkedin: string; github: string; location: string } }
  | { type: "now-card"; props: { items: { title: string; description: string; progress: number; projectTitle: string }[] } };

export function detectWidget(message: string): WidgetType | null {
  const lower = message.toLowerCase();

  // Contact card
  if (/\b(contact|email|reach out|get in touch|hire|linkedin|github)\b/.test(lower)) {
    return {
      type: "contact-card",
      props: {
        email: "ctonny111@gmail.com",
        linkedin: "https://linkedin.com/in/irachrist1",
        github: "https://github.com/irachrist1",
        location: "Kigali, Rwanda (GMT+2)",
      },
    };
  }

  // Now / current work card
  if (/\b(now|current|working on|building now|what.*doing|active|right now)\b/.test(lower)) {
    return {
      type: "now-card",
      props: {
        items: currentWork.slice(0, 3).map((entry) => ({
          title: entry.title,
          description: entry.description,
          progress: entry.progress,
          projectTitle: entry.projectTitle,
        })),
      },
    };
  }

  // Article list
  if (/\b(writing|articles?|newsletter|essays?|written|read|what.*written|latest)\b/.test(lower)) {
    const articles = getPublishedArticles().slice(0, 5).map((a) => ({
      title: a.title,
      slug: a.slug,
      publishedAt: a.publishedAt,
    }));
    return {
      type: "article-list",
      props: { articles },
    };
  }

  // Project card — Daylens
  if (/\bdaylens\b/.test(lower)) {
    const project = projects.find((p) => p.slug === "daylens");
    if (project) {
      return {
        type: "project-card",
        props: {
          slug: project.slug,
          title: project.title,
          description: project.description,
          tagline: project.tagline,
          links: project.links,
        },
      };
    }
  }

  // Project card — Sync Blogs
  if (/\b(sync.?blogs?|sync blogs)\b/.test(lower)) {
    const project = projects.find((p) => p.slug === "sync-blogs");
    if (project) {
      return {
        type: "project-card",
        props: {
          slug: project.slug,
          title: project.title,
          description: project.description,
          tagline: project.tagline,
          links: project.links,
        },
      };
    }
  }

  // Project card — show me work / projects
  if (/\b(show.*work|his work|show.*project|project.*card)\b/.test(lower)) {
    const project = projects.find((p) => p.slug === "daylens");
    if (project) {
      return {
        type: "project-card",
        props: {
          slug: project.slug,
          title: project.title,
          description: project.description,
          tagline: project.tagline,
          links: project.links,
        },
      };
    }
  }

  return null;
}

export function buildSystemPrompt(): string {
  const articles = getPublishedArticles()
    .slice(0, 8)
    .map(
      (a) =>
        `- "${a.title}" — https://christian-tonny.dev/writing/${a.slug} (${a.publishedAt ? new Date(a.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "unpublished"}): ${a.previewText}`
    )
    .join("\n");

  const featuredProjects = projects
    .filter((p) => ["daylens", "sync-blogs", "ocr-extractor", "contentflow", "ai-pages"].includes(p.slug))
    .map((p) => `- ${p.title} — https://christian-tonny.dev/projects/${p.slug}: ${p.description}`)
    .join("\n");

  const currentItems = currentWork
    .slice(0, 3)
    .map((e) => `- ${e.projectTitle}: ${e.description} (${e.progress}% done)`)
    .join("\n");

  return `You are the AI assistant for Christian Tonny's personal website at christian-tonny.dev. You know everything about Christian and respond on his behalf.

## Who you're representing

${KNOWLEDGE.bio}

${KNOWLEDGE.work}

${KNOWLEDGE.projects}

${KNOWLEDGE.writing}

${KNOWLEDGE.availability}

${KNOWLEDGE.contact}

Location: ${KNOWLEDGE.location}

## Current work

${currentItems}

## Published writing

${articles}

## Projects

${featuredProjects}

## How to respond

Your voice is Trevor Noah — sharp, warm, self-aware, genuinely funny without trying too hard. Kigali meets the world.

**When you know the answer** (it's in the knowledge above):
Be direct. Specific. Short. Warm but not performatively friendly. No filler.

**When you don't know** (outside the knowledge):
Lead with a dry, self-aware aside — a pun or witty deflection that acknowledges the gap with humor. One sentence, maybe two. Then redirect to what you do know or offer something useful.

Example of what NOT to say: "I'm sorry, I don't have information about that. As an AI assistant for this portfolio, I only have access to information about Christian's professional work."

Example of what to say: "Restaurant recommendations are above my pay grade — I'm more of a 'knows his GitHub' kind of assistant. He's in Kigali though, if that helps."

**Never:**
- "Great question!" / "Certainly!" / "Of course!"
- Long paragraphs on conversational questions
- Bullet lists for conversational answers (use prose)
- Apologize excessively
- Repeat what the user just said back to them

**Keep responses short.** Two to four sentences for most questions. Only go longer if the question genuinely requires depth.

**Formatting rules — follow exactly:**
- Never use em-dashes (—). Use commas or separate sentences instead.
- Never use ++text++ markup.
- Never use ### headers, horizontal rules, or nested bullet lists.
- You may use **bold** sparingly for proper nouns or key terms only.
- Conversational answers must read like sentences, not documents.

**Links and URLs:**
- You have the direct URL for every article and project listed above. Give them when asked.
- Format all URLs, emails, and links as markdown: [text](url). Never output bare URLs or bare email addresses.
- When sharing contact info in a text response, put each item on its own line, not as a run-on sentence.

**When a widget will appear in your response:**
- Write exactly one short sentence introducing it, then stop. The widget carries all the detail.
- Do not describe the widget content in your text. Example: "Here's what he's building right now." — nothing more.`;
}
