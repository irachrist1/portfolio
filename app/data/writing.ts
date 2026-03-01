export type ArticleId = "48" | "49" | "50";

export type Article = {
  id: ArticleId;
  slug: string;
  title: string;
  subtitle?: string;
  previewText: string;
  contentMarkdown: string;
  published: boolean;
  publishedAt: string | null;
  scheduledOrder: number;
  tags: string[];
  coverImage: string;
  inlineImages?: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    twitterImage: string;
    canonicalPath: string;
  };
  readWithAI: {
    summaryGoal: string;
    applyGoal: string;
  };
};

type RawArticle = Omit<Article, "previewText"> & {
  previewText?: string;
};

const SITE_URL = "https://christian-tonny.vercel.app";

const RAW_ARTICLES: RawArticle[] = [
  {
    id: "48",
    slug: "48-before-we-get-started",
    title: "Before We Get Started - A Quick Note From Me",
    subtitle: "Issue #48",
    previewText: "You are in. Weekly practical AI workflows, no hype, no noise. Just setups you can use immediately and a direct line back to me.",
    contentMarkdown: `# Before we get started - a quick note from me

You are in.

Before the first issue lands in your inbox, here is what you actually signed up for.

Every week I will walk you through one or two things you can set up that week to work faster with AI. Not more theory, not generic news, and not hype about what is coming. Just practical tools and workflows, tested by me, explained step by step.

Issues drop every week. When something genuinely urgent comes up between issues, you will get a short Signal Alert, but I keep those rare. The point is that you do not have to be glued to updates. I am watching so you do not have to.

If you ever have a question, want to share something you are trying, or just want to say hi, reply directly to any issue. I read everything.

One last thing. I want every issue to be useful to you specifically.

What do you currently use AI for, and what is one thing you wish it could help you do better?

Two sentences is enough.

See you in your inbox soon.

CT`,
    published: false,
    scheduledOrder: 1,
    tags: ["Newsletter", "AI Workflows", "Issue #48"],
    coverImage: "/writing/48-before-we-get-started/cover.png",
    seo: {
      metaTitle: "Before We Get Started - A Quick Note From Me (Issue #48)",
      metaDescription: "A quick note from Christian Tonny on what to expect each week: practical AI workflows, rare signal alerts, and direct feedback loops.",
      ogImage: "/writing/48-before-we-get-started/cover.png",
      twitterImage: "/writing/48-before-we-get-started/cover.png",
      canonicalPath: "/writing/48-before-we-get-started",
    },
    readWithAI: {
      summaryGoal: "Summarize this onboarding note into the core promises and cadence.",
      applyGoal: "Help me define how I should use this newsletter in my weekly workflow.",
    },
  },
  {
    id: "49",
    slug: "49-these-two-tools",
    title: "These Two Tools Will Change How Fast You Think, Act, and Get Things Done",
    subtitle: "Issue #49",
    contentMarkdown: `# These two tools will change how fast you think, act, and get things done

The thing about AI right now is that most people are using it the same way they used Google in 2005. They type a question, get an answer, and move on.

That works, but it leaves most of the value on the table.

This week I am running a series called **Get AI Native in 2026**. Not a course and definitely not theory. In each issue I will walk you through one or two things you can set up this week to change how you work, step by step.

![Road to Getting AI Native in 2026](/writing/49-these-two-tools/inline-1.png)

This issue covers two tools that genuinely changed how fast I work:

- one tool that changes how you input
- one tool that changes what runs in the background

## Tool 1: Typeless

**What it does**

Typeless lets you control AI with your voice, including editing selected text, fixing prompts, translating, rewriting, searching, and answering without touching the keyboard.

**How I tested it**

I ran a full email thread through it. Instead of typing instructions into Claude, I selected the incoming email, held the shortcut (Alt or Fn), and said:

> Draft a response to this email based on the selected thread. Address the issues raised, keep it direct, and cut the last paragraph.

Done in seconds.

**Verdict**

If you spend more than 30 minutes per day in Claude or ChatGPT, this is one of the highest ROI installs right now. The unlock is not transcription. The unlock is editing with voice over selected text anywhere on screen.

**Use it this week**

Install it, complete setup in 10 minutes, and force yourself to use voice for one full day whenever you open an AI tool. It feels awkward for about an hour. Then it stops feeling awkward.

## Tool 2: Claude Skills

**What it does**

Claude Skills lets you save instruction packs that Claude follows automatically for repeated tasks. Think of it as teaching Claude your operating style.

**How I tested it**

I built a brand-guideline skill for company documentation. Before that, I spent 20 minutes per session repeating context around tone, structure, visual language, and formatting rules.

Now I provide raw input (email thread, rough notes, loose bullet points) and ask:

> Process these thoughts into a document.

Because the skill is trained on our style, Claude knows what to include, what to skip, and how to structure output to stay on brand.

**Verdict**

This is the closest thing to an assistant that remembers how you work. Setup takes about 45 minutes once. After that, every repeated workflow gets faster.

The best fit: recurring outputs like reports, briefs, meeting summaries, content drafts.

**Use it this week**

Pick one repeated task. Write exactly how you want it done. That is your first skill. Ask Claude to help you build it.

## This week assignment

Do only these two things:

1. Install Typeless (free tier is enough)
2. Build one Claude Skill for a task you repeat at least twice a week

Do not automate everything at once. One well-built skill is enough to show what is possible.

## What I am watching

- **Notion Agents**: custom agents for recurring team workflows
- **Claude Cowork**: desktop agent that can operate your computer for bounded tasks
- **Perplexity Computer**: strong retrieval angle for research-heavy workflows
- **ChatGPT Connectors**: improving native integrations across work tools

## The pattern

The people who move fastest with AI do not just ask better prompts. They build small systems that remove repeated decisions.

Skills do that for Claude. Voice input does that for prompting. Neither requires technical depth. Both require one focused setup session.

That is what this series is about.

See you next week.

CT`,
    published: false,
    publishedAt: null,
    scheduledOrder: 2,
    tags: ["AI Tools", "Productivity", "Issue #49"],
    coverImage: "/writing/49-these-two-tools/cover.png",
    inlineImages: ["/writing/49-these-two-tools/inline-1.png"],
    seo: {
      metaTitle: "These Two Tools Will Change How Fast You Think, Act, and Get Things Done (Issue #49)",
      metaDescription: "A practical breakdown of Typeless and Claude Skills, two tools that reduce AI workflow friction and speed up repeated work.",
      ogImage: "/writing/49-these-two-tools/cover.png",
      twitterImage: "/writing/49-these-two-tools/cover.png",
      canonicalPath: "/writing/49-these-two-tools",
    },
    readWithAI: {
      summaryGoal: "Summarize how Typeless and Claude Skills change workflow speed.",
      applyGoal: "Build a concrete this-week setup plan using one voice workflow and one reusable skill.",
    },
  },
  {
    id: "50",
    slug: "50-state-of-ai-2026",
    title: "State of AI 2026: What Actually Works",
    subtitle: "Issue #50",
    contentMarkdown: `# State of AI 2026: What Actually Works

The definitive guide for people who pay attention.

After years of hype, AI is now colliding with operational reality. The gap between demo and deployment is narrowing. LLMs are writing production code, autonomous systems are running live operations, and physical AI is moving from staged videos to measurable rollout.

This is the current frontier: models, infrastructure, open source, physical-world systems, agents, AGI trajectory, and business models.

## Models: conversational vs agentic

Most people still blur two categories when they say AI:

- **Conversational AI**: text-in, text-out analyst mode
- **Agentic AI**: persistent execution across multi-step tasks

Most benchmark discourse covers the first category. The second category is where operational leverage and risk are both rising.

## Which model for what

| Model | Best for | Context window | Coding |
| --- | --- | --- | --- |
| Claude Sonnet / Opus 4.6 | Writing, coding, docs, daily driver | 200K | Best in class |
| ChatGPT (GPT-5 / 5.2) | Long research conversations, synthesis | 128K | Very strong |
| Gemini 3.1 Pro | Massive docs, cost-sensitive workloads | 1M+ | Competitive |
| Perplexity | Fact-checking and web-first search | Web-native | N/A |

Context window is working memory. 200K tokens is roughly a large non-fiction book section. 1M+ tokens handles very large corpora.

## Claude: the enterprise bet

Anthropic executed on reliability and enterprise trust. Enterprise adoption accelerated because first-pass output quality reduced revision cycles.

The enterprise strategy was focused:

1. Keep model behavior stable and predictable
2. Embed where work already exists
3. Optimize for professional output quality over novelty

That made Claude a default choice for document-heavy workflows where consistency beats flash.

## ChatGPT: the ecosystem strategy

OpenAI is not only shipping a model. It is building an AI operating surface across workflows (research, coding, browsing, shopping, and app integrations).

The moat is stack lock-in. If one assistant sits across browsing, coding, notes, and scheduling, switching costs increase even if single-task quality differs across competitors.

## Google: deep assets, uneven product execution

Google has world-class infrastructure, chips, and research depth. But product coherence still lags in day-to-day conversational UX compared to top competitors.

Infrastructure, however, is a major story:

- TPU efficiency gains
- stronger cost-performance profile in specific training/inference workloads
- expanding third-party TPU access

That shift matters because model economics are now a strategy layer, not just an engineering detail.

## Open source and China

China-origin open models now drive major adoption, especially where pricing constraints matter. The value proposition is practical:

- sufficient capability at lower cost
- faster release cycles
- broad deployability in budget-sensitive markets

The strategic takeaway: for many use cases, 80% performance at much lower cost wins.

## What this means by role

### Professionals (legal, finance, consulting, accounting)

AI is no longer just drafting support. It is workflow compression for document-heavy operations:

- proposal generation from structured briefs
- contract risk triage
- scenario modeling scaffolds
- research synthesis over internal and external sources

The quality hinge is context specificity. Better input context reduces post-edit cycles.

### Developers

The bottleneck moved from syntax generation to decision quality and product clarity.

High leverage today:

- scaffolding and boilerplate automation
- migration and refactor acceleration
- bounded debugging loops

Still human-led:

- architecture strategy
- tradeoff design
- product judgment

### Non-developers

Desktop and automation agents now make repetitive, rule-bound tasks feasible without code. The risk profile rises with access breadth, so staged adoption matters:

1. start low-stakes
2. keep scopes narrow
3. expand only after reliability is proven

### Students and researchers

AI can accelerate formatting and structure, but overuse during core learning loops weakens understanding. Use AI to accelerate what you already know, not replace what you are still learning.

## Infrastructure wars

NVIDIA remains dominant, but alternatives are no longer theoretical. TPU and Trainium progress shifts cost curves and opens route diversity for labs and product teams.

The key trend: competition is moving from raw capability to capability per dollar per watt.

## Scaling law: task length progression

A practical way to track frontier progress is autonomous task length at acceptable success rates. Growth in this dimension suggests stronger execution range, but it does not equal general intelligence.

Longer tasks solved reliably is meaningful progress. It is not AGI by default.

## Physical world deployment

Humanoid robotics and robotaxi systems have crossed from prototype theater into constrained real deployments. The major questions now are:

- cost structure
- safety and reliability at scale
- data flywheel advantage
- regulatory adaptation

## Agents: capability vs security

Agent systems are increasingly useful in narrow, structured workflows. They are also frequently deployed with weak security posture.

The operational rule is simple:

- use agents for specific, bounded tasks
- keep human approvals in critical paths
- assume configuration mistakes are common

## AGI reality check

AGI remains a long-horizon target. Current systems show strong narrow competence, not stable general reasoning across arbitrary domains with persistent learning.

Progress is real. Hype remains ahead of capability.

## Ads in AI interfaces

As ad models enter AI surfaces, incentive structures shift. The core risk is optimization for session depth over answer quality. Users and teams should track this closely because it affects trust and recommendation neutrality.

## Conclusion

2026 is an inflection year because enough systems now work in production, not because everything is solved.

What is clear:

1. Multiple strategies can win simultaneously (enterprise reliability vs ecosystem breadth)
2. Efficiency can beat brute-force scale in many markets
3. Infra competition is reshaping AI economics
4. Deployment is now real across software and physical systems

AI is no longer just chatbot UX. It is becoming execution infrastructure.

The right posture now is practical: test, measure, deploy where value is clear, and stay rigorous about safety, cost, and outcome quality.

CT`,
    published: false,
    publishedAt: null,
    scheduledOrder: 3,
    tags: ["AI Strategy", "Industry Analysis", "Issue #50"],
    coverImage: "/writing/50-state-of-ai-2026/cover.png",
    seo: {
      metaTitle: "State of AI 2026: What Actually Works (Issue #50)",
      metaDescription: "A grounded analysis of the AI frontier in 2026: models, agents, infra economics, robotics, open source momentum, and what actually works.",
      ogImage: "/writing/50-state-of-ai-2026/cover.png",
      twitterImage: "/writing/50-state-of-ai-2026/cover.png",
      canonicalPath: "/writing/50-state-of-ai-2026",
    },
    readWithAI: {
      summaryGoal: "Summarize what is actually working in AI in 2026 across models, infrastructure, and deployment.",
      applyGoal: "Map the article to a practical 5-day action plan I can execute this week.",
    },
  },
];

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`>~-]/g, "")
    .replace(/\|/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function autoPreview(markdown: string, maxLength = 165): string {
  const plain = stripMarkdown(markdown);
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength - 1).trim()}...`;
}

function withComputedPreview(article: RawArticle): Article {
  return {
    ...article,
    previewText: article.previewText?.trim().length
      ? article.previewText.trim()
      : autoPreview(article.contentMarkdown),
  };
}

export const writingArticles: Article[] = RAW_ARTICLES
  .map(withComputedPreview)
  .sort((a, b) => a.scheduledOrder - b.scheduledOrder);

export function getPublishedArticles(): Article[] {
  return writingArticles
    .filter((article) => article.published)
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) {
        return a.scheduledOrder - b.scheduledOrder;
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export function getArticleBySlug(
  slug: string,
  options?: { includeUnpublished?: boolean }
): Article | undefined {
  const includeUnpublished = options?.includeUnpublished ?? false;
  const article = writingArticles.find((item) => item.slug === slug);
  if (!article) return undefined;
  if (!includeUnpublished && !article.published) return undefined;
  return article;
}

export function getAbsoluteArticleUrl(article: Article): string {
  return `${SITE_URL}${article.seo.canonicalPath}`;
}

export function buildReadWithAIPrompt(article: Article): string {
  return [
    "You are my AI reading partner. Summarize this article and help me apply it this week.",
    `Article title: ${article.title}`,
    `Article URL: ${getAbsoluteArticleUrl(article)}`,
    "What I need:",
    "1) A concise summary (7 bullets max).",
    "2) The 3 most important ideas for practical execution.",
    "3) Where this applies in my work this week (specific examples).",
    "4) A 5-day action plan with effort level and expected outcome.",
    "5) If your memory has relevant context about me, tailor recommendations to it; otherwise ask 3 clarifying questions first.",
    `Summary focus: ${article.readWithAI.summaryGoal}`,
    `Application focus: ${article.readWithAI.applyGoal}`,
  ].join("\n");
}

export function getWritingCollectionMetadata() {
  const title = "Writing | Christian Tonny";
  const description =
    "Practical writing on AI workflows, product thinking, and implementation strategy.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/writing`,
      siteName: "Christian Tonny",
      images: [
        {
          url: `${SITE_URL}/og-writing.png`,
          width: 1200,
          height: 630,
          alt: "Christian Tonny Writing",
        },
      ],
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [`${SITE_URL}/og-writing.png`],
      creator: "@irachrist01",
    },
  };
}

export const WRITING_SITE_URL = SITE_URL;
