import { SITE_URL } from "@/app/lib/site-url";

export type ArticleId = string;

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

const DEFAULT_COVER_IMAGE = "/og-writing.png";

const RAW_ARTICLES: RawArticle[] = [
  {
    id: "47",
    slug: "47-two-things-every-app-needs",
    title: "Two Things Every App Needs",
    subtitle: "Issue #47",
    previewText:
      "In a world where everyone can ship quickly with AI, trust becomes the moat: ship in public with a changelog and make feedback visible.",
    contentMarkdown: `# Two Things Every App Needs

AI is making the barrier to building software close to zero. Shipping is faster than ever. Competition is noisier than ever.

So what makes users trust you enough to stay?

For most teams, two things are non-negotiable:

## 1) A public changelog

A changelog proves movement. It shows users you are alive, listening, and improving in the open.

When people can see consistent shipping, they stop guessing whether your product is abandoned.

Practical rule:

- Publish updates frequently.
- Keep entries clear and concrete.
- Explain what changed and why it matters.

## 2) A visible feedback loop

A feedback page tells users they can shape the product, not just consume it.

When people see what is requested, what is planned, and what is shipped, trust compounds.

Practical rule:

- Track requested features publicly.
- Mark statuses clearly (planned, in progress, shipped).
- Close the loop by referencing shipped requests in your changelog.

## Why this matters now

The market rewards velocity, but users stay for reliability and responsiveness.

If your product is early, that is fine. If your communication is missing, trust collapses.

## Sources

- [MKBHD Fisker Review](https://youtu.be/6xWXRk3yaSw?si=JFvMGm9O69odsA8O)
- [Cursor performance issues thread](https://forum.cursor.com/t/performance-degradation-and-ai-editing-issues-in-cursor-ide/61928)
- [Arc release notes](https://resources.arc.net/hc/en-us/articles/22513842649623-Arc-for-Windows-2023-2025-Release-Notes)
- [Perplexity changelog](https://docs.perplexity.ai/changelog/changelog)
- [Raycast feedback system](https://www.raycast.com/blog/feedback)

Products fail. Founders do not.

CT`,
    published: true,
    publishedAt: "2026-01-05T00:00:00.000Z",
    scheduledOrder: 0,
    tags: ["Product Strategy", "Building in Public", "Issue #47"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle: "Two Things Every App Needs (Issue #47)",
      metaDescription:
        "Why every product needs a public changelog and a visible feedback page to build trust in the AI era.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
      canonicalPath: "/writing/47-two-things-every-app-needs",
    },
    readWithAI: {
      summaryGoal:
        "Summarize why changelog discipline and feedback loops create trust and retention.",
      applyGoal:
        "Design a weekly operating cadence that combines changelog updates with actionable user feedback review.",
    },
  },
  {
    id: "48",
    slug: "48-before-we-get-started",
    title: "Before We Get Started - A Quick Note From Me",
    subtitle: "Issue #48",
    previewText: "You are in. Weekly practical AI workflows, no hype, no noise. Just setups you can use immediately and a direct line back to me.",
    contentMarkdown: `# Before we get started - a quick note from me

![Before we get started](/writing/48-before-we-get-started/cover.png)

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
    published: true,
    publishedAt: "2026-02-14T12:00:00.000Z",
    scheduledOrder: 1,
    tags: ["Newsletter", "AI Workflows", "Issue #48"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle: "Before We Get Started - A Quick Note From Me (Issue #48)",
      metaDescription: "A quick note from Christian Tonny on what to expect each week: practical AI workflows, rare signal alerts, and direct feedback loops.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
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
    subtitle: "Two tools that changed my speed",
    previewText:
      "This week I'm walking you through the two tools that changed how fast I work — one that cuts the friction of every AI conversation and one......",
    contentMarkdown: `# These two tools will change how fast you think, act, and get things done

👋

The thing about AI right now is that most people are using it the same way they used Google in 2005. They type a question. They get an answer. They move on.

That is fine. But it is leaving most of the value on the table.

This week, I am running a series called **Get AI Native in 2026**. Not a course and definitely not theory. Every issue, I will walk you through one or two things you can actually set up this week that will change how you work. Step by step.

This issue is about two tools that genuinely changed how fast I work. One is about how you input. The other is about what runs in the background so you do not have to.

Let us get into it.

CT


### [Typeless](https://www.typeless.com/refer?code=CR32LFJ) — Cut time writing, refining, searching and copy-pasting

**What it does:** Lets you control AI with your voice, including editing selected text, fixing prompts, translating, rewriting, searching, answering — all without touching the keyboard.

**I tested it by:** running a full email thread through it. Instead of typing instructions into Claude, I selected the email I received, held the shortcut (Alt or Fn), and said:

> Draft a response to this email based on the thread selected addressing issues raised, keep it direct and cut the last paragraph.

Done in about four seconds.

**The verdict:** If you are spending more than 30 minutes a day in Claude or ChatGPT, this is the highest ROI thing you can install right now. The real unlock is not transcription. It is being able to edit with your voice. You can select any text on your screen and speak the change you want. It removes the friction of figuring out how to phrase your prompt. You just say what you mean.

**If you use it this week:** install it, do the 10-minute setup, and then spend one day forcing yourself to use voice instead of typing every single time you open an AI tool. It feels awkward for about an hour. Then it does not.

### [Claude Skills](https://claude.com/skills) — Teach Claude your way of working

**What it does:** lets you save a set of instructions that Claude will follow automatically every time you ask it to do a specific task. Think of it as teaching Claude how you do things.

**I tested it by:** streamlining my workflow by telling Claude to be a skill specifically for my company’s brand guidelines.

Previously, I would spend at least 20 minutes every session providing repetitive context—explaining our color palette, design style, and the specific tone we use for documentation. It was a tedious process of manual alignment every time I started a new project.

Now, with skills, I simply provide my raw input—whether that is an email thread, a rough file, or a quick list of ideas—and say:

> Process these thoughts into a document.

Because the skill is trained on our brand identity, Claude immediately knows exactly what to include, what to omit, and how to format the output to be perfectly on-brand.

**The verdict:** this is the closest thing to having an assistant who actually remembers how you work. The setup takes about 45 minutes the first time. After that, every repetitive task you hand off to Claude gets faster every week because the skill gets better as you continue using it.

The people who will get the most out of this are anyone doing the same type of output repeatedly: reports, client briefs, content drafts, meeting summaries.

**If you use it this week:** pick the one thing you ask Claude to help with most often. Write down exactly how you want it done. That is your first skill. Ask Claude to help you create that skill and you will see it come to life.

## This week

Install Typeless (the free tier is enough) and build one Claude Skill for a task you repeat at least twice a week. That is it. Do not try to automate everything at once. One skill, done properly, will show you exactly what is possible.

## What I am watching

- **Notion Agents** — custom agents that can automate recurring work for your entire team.
- **Claude Cowork** — Anthropic’s desktop agent that can actually operate your computer on your behalf. I will dedicate a full issue to this soon.
- **Perplexity Computer** — similar concept, different approach. The knowledge retrieval angle makes it interesting for research-heavy work. I am testing it now.
- **ChatGPT Connectors** — native integrations with your existing tools are getting better, especially if you are deep in the Microsoft ecosystem.

## The Plug’s Note

The pattern I keep seeing with people who are genuinely fast and adaptive with AI versus people who just use it sometimes is this: they set up systems. Not complicated systems. Just small things that mean they do not have to make the same decision twice.

Skills are that for Claude. Voice input is that for prompting. Neither of them requires you to learn anything technical. They just require you to spend 10 minutes one afternoon setting them up instead of starting from scratch every time.

That is what this series is about.

See you next week.

CT

---

**Get AI Native in 2026 — Issue 1 of 12** is a weekly series running through Q1. Each issue covers one phase of going from basic AI user to someone whose workflows actually run on it. No coding required.`,
    published: true,
    publishedAt: "2026-02-21T12:00:00.000Z",
    scheduledOrder: 2,
    tags: ["AI Tools", "Productivity", "Get AI Native", "Issue #49"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle:
        "These Two AI Tools Will Change How Fast You Think, Act, and Get Things Done (Issue #49)",
      metaDescription:
        "Get AI Native in 2026, Issue #49: a practical breakdown of Typeless and Claude Skills — two AI tools that radically speed up how you write, delegate, and run repeated workflows.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
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
    subtitle: undefined,
    previewText:
      "A practical frontier map for 2026: models, agents, infrastructure, robotics, and where AI is actually delivering production value right now.",
    contentMarkdown: `# State of AI 2026: What Actually Works

After three years of hype, AI is finally meeting reality.

The gap between a cool demo and a working business is closing fast. LLMs are writing production code, robots are landing on doorsteps, and autonomous taxis are actually turning a profit. We have moved from “what if” to “what is.”

Here is the current state of the frontier: from the infrastructure of open source to the rise of physical world agents, and the inevitable shift toward AGI and monetization.

## The models

Most people still conflate two very different things when they say “AI.”

**Conversational AI** is a smart analyst. You ask it something, it responds. Text in, text out. This is what 99% of people use.

**Agentic AI** is a persistent worker. It clicks buttons, runs code, executes multi-step tasks over hours or days without hand-holding. This is where things are getting interesting.

Most of the model comparisons below are about the first kind. Agents get their own section.

## Which model for what

Before the full breakdown, here is the quick version based on benchmarks and months of real usage:

| Model | Best For | Context Window | Coding |
| --- | --- | --- | --- |
| Claude Sonnet / Opus 4.6 | Writing, coding, document generation, daily driver | 200K tokens | Best in class |
| ChatGPT (GPT-5 / 5.2) | Long research conversations, information synthesis | 128K tokens | Very strong |
| Gemini 3.1 Pro | Massive documents, cost-sensitive work | 1M+ tokens | Competitive |
| Perplexity | Fact-checking, replacing Google | Web-native | N/A |

_Context window_ = how much text the model can hold in “working memory” at once. 200K tokens is roughly 150,000 words. 1M tokens is most of a novel.

I do not use Grok anymore. Perplexity replaced Google for me.

## Claude: the enterprise bet

Anthropic did one thing right. They made a model calm and reliable enough that companies would feed it real data and sign real contracts.

The numbers: zero enterprise customers in 2023 to 300,000 by mid-2025. Revenue from $1B to $5B in eight months. Now a $350B company.

Why it worked: Claude’s first draft almost always holds. You ask for a pitch deck, you get a pitch deck. You ask for a contract review, it finds what matters. Other models require three rounds of refinement to get there. That difference is what enterprise buyers pay for.

The deals followed: Snowflake brought Claude to 12,600 customers for $200M. Accenture trained 30,000 people on it. The US Department of Defense signed a $200M contract (now on hold). Even Google uses Claude models in their Antigravity IDE.

The strategy was simple: do not build seventeen products. Just be the best conversational AI and embed yourself where work already happens. It worked.

## ChatGPT: the everything app

OpenAI went the opposite direction and it is also working. They are building an operating system for AI, not just a model.

Recent launches: Prism (a free LaTeX workspace for scientists that drafts entire papers). Atlas (an AI-native browser). Codex App (multi-agent coding on autopilot). ChatGPT Go (an $8/month tier). Shopping integration with Shopify.

The moat is ecosystem lock-in. If ChatGPT is your browser, your code editor, your research tool, and your calendar, you are not switching to Claude even if Claude is technically better at one task.

They are also launching ads. Free and Go tier users will see ads at the bottom of responses. They are charging around $60 per thousand impressions, similar to NFL streaming. The pitch: the most targeted ads ever created because the AI knows exactly what you asked about.

## Google: everything they need, not using it

Google makes their own chips, owns the internet, and employs more AI researchers than almost anyone. Gemini still feels one step behind.

It wins benchmarks. The context window is over a million tokens. But it does not have the conversational fluency that Claude and ChatGPT nailed. The Antigravity IDE launched in November, it is free, and most users run it specifically to access Anthropic’s models at no cost. That says everything.

The hardware story is more impressive. Their TPU v7 (Ironwood) delivers 4,614 teraflops per chip. Two to three times better performance per watt than GPUs. Four to ten times more cost-effective for large-scale training. And they just opened TPU access to third parties for the first time. Anthropic is now running Claude on Google TPUs.

Google has all the pieces. They are just slow to execute.

## Open source and China

Most people still think Chinese AI is knockoff models trained on stolen data. That was maybe true two years ago.

Since August 2025, Chinese AI models have had more cumulative open-source downloads than western models. Not because they are free. Because they are good.

Moonshot AI’s Kimi K2.5 beats Gemini 3 Pro on SWE-Bench Verified. Outperforms GPT-5.2 on multilingual coding. Beats Claude Opus 4.5 on video understanding. Trained with roughly 1% of the resources top US labs use.

The strategy: efficiency plus open source. Train smaller, faster, cheaper models and release them publicly. It is driving adoption across the Global South where OpenAI and Anthropic pricing is prohibitive. That builds ecosystem lock-in at a geopolitical scale.

Western labs are spending billions to squeeze out marginal gains. Chinese labs are spending millions to get 80% of the performance. For most use cases, 80% is enough.

## What you can actually do with this: by role

### For professionals (accounting, legal, consulting, finance)

You have used AI to write emails faster. That is fine. It is also about 5% of what it can do.

**Document automation.** Give Claude a client brief with the problem, scope, deliverables, timeline, and budget, and it generates a full proposal. You edit instead of build from scratch. The time savings are real: two hours of editing versus eight hours of drafting.

For legal work, Claude is particularly strong at contract review. Upload the contract, ask it to flag unusual clauses and identify risk areas. It will not replace a lawyer. It will save the lawyer from reading 50 pages of boilerplate to find the three paragraphs that matter.

For financial models, describe what you need in plain language: revenue projections, scenario analysis, sensitivity tables. The model writes the formulas and structures the sheets.

**Research workflows.** ChatGPT with search integration wins for breadth: summarize recent industry developments, compare competitor strategies, pull regulatory updates. Claude wins when you already have the documents: upload five analyst reports, ask for consensus view on market size and key trends.

The key discipline: be specific. Do not ask it to “write a proposal.” Tell it the client name, the problem, the scope, the deliverables, the timeline, the budget, and give examples of past work. The more context you provide, the less you edit.

One rule on data: if you are handling sensitive client information, use paid enterprise tiers with data retention policies. Free tiers train on your inputs.

### For developers

The last two years shifted the bottleneck. It used to be writing code. Now it is knowing what to build.

The three tools that matter:

- **Cursor** (\$20/month) is the best all-purpose agentic IDE. Uses Claude Opus 4.6 under the hood. Best autocomplete in the industry. Strong at understanding large codebases across multiple files. Downside: \$20 burns fast on complex refactors.
- **Windsurf** (\$15/month) has faster context retrieval and handles large codebases better. Best choice for monorepos or legacy systems with sprawling, undocumented code. Less polished than Cursor, more cost-effective for heavy use.
- **Claude Code** (free with Anthropic Pro) is exceptional for agentic tasks. You describe what you want to build, it writes the code, tests it, debugs it, iterates. The catch: it consumes tokens aggressively and you will hit rate limits on complex projects.

What you can automate right now:

- boilerplate code generation: fully automated — CRUD operations, API endpoints, database migrations, test scaffolding
- refactoring: mostly automated — converting class components to hooks, migrating frameworks, adding TypeScript types
- debugging: partially automated — works well for clear errors, struggles with race conditions and memory leaks
- architecture and system design: not automated — the agent implements what you describe, it cannot make strategic decisions for you

The real cost: these tools are expensive at scale. Claude Opus 4.6 costs roughly \$15 per million input tokens and \$75 per million output tokens. A complex feature generation might cost \$7.50 per run. Do that ten times a day and you are spending hundreds monthly before subscription fees.

The honest tradeoff: an 8-hour task costs the agent 2 hours and about \$20. If your time is worth more than \$10/hour, it pays. If you are a student on nights and weekends, it is prohibitive.

### For non-developers

This is the most interesting category because the tools are making real automation accessible to people who do not code.

**Cowork** (Anthropic, launched January 2026) gives Claude access to your desktop. You grant folder permissions and it reads files, moves things, organizes downloads, creates documents, updates spreadsheets, drafts emails.

Practical use cases: planning travel by researching and outputting an itinerary directly to a Google Doc. Cleaning up your downloads folder by categorizing and moving files. Updating a budget spreadsheet by reading receipts from email. These are not demos. They work.

The security consideration is real: you are giving an AI access to your file system. Use it for low-stakes tasks first. Automate your downloads folder before your client communications. Build trust gradually.

**Zapier Agents** connect to 8,000+ apps and run 24/7 on natural language instructions. Strong use cases: lead research that scrapes LinkedIn and adds contacts to your CRM. Invoice reminders that check for overdue payments and send follow-ups. Content repurposing that turns a blog post into Twitter threads and LinkedIn drafts.

The limitation: these agents are narrow. They are excellent at repetitive tasks with clear rules. They break down when tasks require judgment or context that changes frequently.

### For students and researchers

The challenge with AI for learning is that it makes it too easy to skip the hard parts. The hard parts are where learning happens.

**Prism** (OpenAI, 2025) is a free LaTeX-native workspace that drafts entire papers. You provide the research question, methods, data, and findings. It generates the full paper with introduction, literature review, methodology, results, and discussion.

For researchers, it is genuinely useful for the tedious parts: formatting equations, managing citations, structuring sections to journal guidelines. The intellectual work still requires humans.

For students, this is dangerous. If you use it to write your thesis without understanding the underlying research, you have learned nothing. You have outsourced the part of the process that builds critical thinking.

The right framework: use AI to accelerate tasks you already know how to do. Do not use it to replace tasks you are trying to learn. Use it after you have done the research. Not instead of.

## The infrastructure wars

### Nvidia’s cracking monopoly

Nvidia generated \$200B in AI chip revenue in 2025. Their H100 delivers 156 teraflops. They have dominated for years.

That is changing.

**Google’s TPU v7 (Ironwood):** 192GB HBM memory, 7.2 TB/s bandwidth, 4,614 teraflops per chip. Two to three times better performance per watt than GPUs. Four to ten times more cost-effective for large-scale training. And now open to third parties for the first time. Anthropic is running Claude on Google TPUs.

**Amazon Trainium** generated multiple billions in 2025, growing at 150% per quarter. Trainium 3 just launched with a 50% cost reduction versus alternatives. Anthropic invested \$4B in Amazon and is running Claude on Trainium chips in Indiana data centers.

The non-Nvidia alternatives market is growing faster than Nvidia’s market itself. The monopoly is not broken. It is bending.

### Scaling laws and the four-month doubling

In October 2025, Andrej Karpathy said on Dwarkesh’s podcast: “It is the decade of agents, not the year of agents. They just do not work.”

He was right about the present. He underestimated the trajectory.

The length of tasks that AI agents can complete at 50% success rate has been doubling every 7 months from 2019 to 2025. In 2024 and 2025, that rate accelerated to every 4 months.

When ChatGPT launched in late 2022, it could handle 30-second tasks. Today, agents reliably complete tasks that take humans a few minutes, and can handle 2-hour tasks at reasonable success rates.

If the 4-month doubling continues: agents doing month-long tasks by 2027.

This is already starting. Cursor ran agents for close to a week building a browser. Over a million lines of code across a thousand files. Hundreds of agents working on a single codebase. Anthropic gave an agent control of a vending machine business and let it run for months managing cash flow and procurement. OpenAI is running agents continuously for two weeks to see what unlocks when you do not shut the model off.

Microsoft’s CEO called it “a new scaling law.” Not just bigger models. Longer inference time. More compute during the task itself, not just during training.

## The physical world

### Robots shipping to homes

For years, humanoid robots were impressive Twitter videos. That is changing in 2026.

Figure AI is targeting home robot shipments by end of year. OpenAI invested \$5M. Their founder Brett Adcock predicts humanoids will perform unsupervised, multi-day tasks in new homes using entirely neural networks by end of 2026.

Tesla Optimus Gen 3 is launching in Q1 2026, targeting a million units of annual production. Right now it does simple factory tasks trained on footage of workers. By end of 2027, Musk says they will start selling to the public.

Boston Dynamics Atlas went fully electric in April 2024. 56 degrees of freedom. 7.5-foot reach. Lifts 110 pounds. Partnering with Google DeepMind’s Gemini Robotics AI. Deploying at Hyundai’s metaplant in Georgia in 2026.

**1X Neo** is the most interesting. You can pre-order it now. \$20,000 upfront or \$499/month. 5’6”, weighs 66 pounds, lifts 150 pounds. Runs at 22 decibels, quieter than a whisper. Autonomous for basic tasks (opening doors, fetching items, scheduling chores). Human takes over via VR telepresence for complex tasks. Ships to the US in 2026.

The wildest detail: 1X signed a deal to ship 10,000 units to industrial companies. They explicitly said their goal is collecting training data. With 10,000 robots running in homes, they will amass more daily data than YouTube uploads. They are making customers pay to be their R&D lab.

### China’s robotaxi lead

China is not testing robotaxis. They are profitable.

**Baidu Apollo Go:** 1,000+ fully driverless robotaxis across 15 cities. 11 million completed rides. Per-vehicle profitability achieved in Wuhan. Expanding to Dubai, Germany, and the UK in 2026.

**Weride:** 1,023 vehicles. Fully driverless in Guangzhou. Deploying 1,200 robotaxis with Uber in the Middle East. Cut their autonomous kit cost by 50%.

**Pony.ai:** 1,159 vehicles. Operating in Shenzhen and Beijing. Partnership with Toyota. Per-vehicle profitability in Guangzhou in late 2025.

Goldman Sachs estimates the robotaxi market at \$25B by 2030. Chinese companies are years ahead. They are not in beta. They are running a business.

## Agents and what is next

### Agents that work (sort of)

Simple definition: agents are AI models smart enough to predictably do anything on your laptop that a human would do. Mimicking clicks, typing, navigating apps, executing tasks over hours without supervision.

The most remarkable agent story of 2026 is **OpenClaw**. An Austrian developer named Peter Steinberger built an open-source agent that connects to Claude or ChatGPT and runs locally. It integrates with WhatsApp, Telegram, Discord, iMessage and more. Persistent memory. Feels like a digital employee. It got 145,000 GitHub stars and 20,000 forks in weeks.

Then the security researchers arrived. Palo Alto Networks called it a “lethal trifecta”: private data access, exposure to unreliable web content, and ability to communicate externally. They found tens of thousands of publicly exposed instances. The vast majority had critical authentication bypass vulnerabilities and were running outdated versions. Cisco’s summary: “the capability is groundbreaking, the security is a nightmare.”

So that is the current state of agents. Incredible potential. Massive adoption. Catastrophic security posture.

The enterprise-grade alternatives are safer but narrower. ChatGPT’s agent (launched July 2025) runs on a virtual computer, can work for up to an hour, and asks for confirmation before anything consequential. Zapier Agents connect to 8,000 apps and run 24/7. Both work well for repetitive, well-defined tasks.

The rule: agents work best when the task is specific and the stakes of failure are low. “Build a REST API with JWT authentication and rate limiting” works. “Make the app better” does not.

## AGI: where we actually stand

AGI means AI capable of the full range of human-level intellectual tasks. Fluid movement between domains. Abstract reasoning. Learning from novel experience. Solving problems it was never trained on.

We are not there. Not close.

What we have: Claude Opus 4.6 approaching human-level at coding. AI performing junior-intern-level work across most knowledge fields. Agents completing multi-step tasks autonomously over hours.

What is missing: genuine continual learning (you cannot tell a model something once and expect it to remember). Reliable computer use across arbitrary interfaces. Consistent reasoning outside the training distribution. True multimodal integration.

The scaling law of task length doubling every four months is real and measurable. If it holds, we will see month-long autonomous tasks by 2027. But task completion is not general intelligence. Getting better at longer tasks is still narrow AI getting better at longer tasks.

Honest timeline: AGI is probably a decade away. Maybe more. The progress is real. The hype is ahead of the reality. Both things are true.

## Ads coming to AI

OpenAI is launching ads. Free and Go tier users will start seeing them at the bottom of responses. Charging \$60 per thousand impressions, the same as NFL streaming, triple what Meta charges.

The pitch: the most targeted, contextually relevant ads ever built, because the AI knows exactly what you asked about.

The concern: this changes the incentive structure. Right now, ChatGPT tries to give you the best answer as fast as possible. With ads, there is pressure to keep you in the interface longer. To give partial answers. To link to the advertiser’s source instead of the best source.

Google Search went through this exact transition. It started trying to get you off their site as fast as possible. Then ads became the business model and results got longer, more ambiguous, designed to keep you clicking.

ChatGPT could go the same way. Anthropic and Google are both exploring ads too. Anthropic needs a path to profitability. Google already runs the world’s largest ad network.

The question is not whether AI ads are coming. They are. The question is whether users will pay for ad-free access the same way they pay for YouTube Premium and Spotify. We are about to find out.

## Conclusion

2026 is the inflection point. Not because everything suddenly works. Because enough works that the gap between demo and deployment is closing across every category at once.

Here is what the evidence shows:

1. Multiple strategies are winning simultaneously. Anthropic’s enterprise embedding and OpenAI’s consumer ecosystem are both working. Being the best at one thing and showing up where work already happens is sufficient.
2. Efficiency beats scale. Chinese labs are proving you do not need infinite resources. 1% of the compute to reach 80% of the performance is enough for most use cases.
3. The four-month doubling is the most important number in AI right now. If it holds, the capabilities in 2027 will look unrecognizable from today.
4. Custom silicon is viable. Google’s TPUs and Amazon’s Trainium are real alternatives to Nvidia. The chip monopoly is bending.
5. Deployment is real. Robots, robotaxis, coding tools. Not beta. Production.

The bottom line: we are still in the junior intern phase. The models are good enough to be genuinely useful and not good enough to replace expertise. The next three years will determine whether we get to Karpathy’s decade of agents or something faster.

What is certain: AI is no longer just chatbots. It is in our code, our cars, our factories, and soon, our homes.

The hype was early. The reality is catching up.

CT`,
    published: true,
    publishedAt: "2026-02-28T12:00:00.000Z",
    scheduledOrder: 3,
    tags: ["AI Strategy", "Industry Analysis", "State of AI 2026", "Issue #50"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle:
        "State of AI 2026: What Actually Works Across Models, Agents, Infra, and Robotics (Issue #50)",
      metaDescription:
        "The definitive 2026 AI report for people who pay attention: models, agents, open source China, infra wars, robots, robotaxis, AGI trajectory, and what actually works in production.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
      canonicalPath: "/writing/50-state-of-ai-2026",
    },
    readWithAI: {
      summaryGoal: "Summarize what is actually working in AI in 2026 across models, infrastructure, and deployment.",
      applyGoal: "Map the article to a practical 5-day action plan I can execute this week.",
    },
  },
  {
    id: "51",
    slug: "51-you-have-no-idea-where-your-time-goes",
    title: "You Have No Idea Where Your Time Goes",
    subtitle: "Issue #51",
    previewText:
      "The average knowledge worker switches between apps and tabs over 1,200 times per day. Most people have no idea where their time actually goes. What if you did?",
    contentMarkdown: `# you have no idea where your time goes

every developer i know has had this moment. you close your laptop at the end of the day, you know you were busy, you have the fatigue to prove it — but if someone asked you to account for the last 8 hours in any real detail, you couldn't. not because you didn't work. because the specifics just evaporate.

i went looking for whether this was just me. it's not. in 2022, a [Harvard Business Review study](https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications) tracked 137 workers across three Fortune 500 companies and found the average person switches between apps and websites over 1,200 times a day. one switch every 24 seconds in an 8-hour workday. i read that and thought it had to be wrong. then i started paying attention to myself.

so i went looking for a tool that could actually show me what my day looked like. not roughly — precisely. not which apps were open. what i was actually doing.

## what i tried

i tried Pomodoro. doesn't work for me. 25 minutes, 5 minutes, four rounds, and i'm like what the hell am i doing? i can do better than a kitchen timer. then there's Forest — "you can't kill this tree!" — yes i can. i have tabs to check. these blockers are built on willpower, and willpower isn't actually the problem. the problem is i have no idea what happened to my time after the day is over.

so i went deeper and tried the trackers.

![macOS Screen Time showing 13h 33m total screen time for the day, broken into Productivity & Finance 6h 55m, Other 4h 25m, and Entertainment 16m. App list below: Dia 4h 19m, Codex 2h 20m, cmux 1h 12m, ChatGPT Atlas 51m, Cursor 42m, Microsoft Outlook 29m. App names and durations — nothing about what you were actually doing.](/writing/51/screen-time.png)

**Screen Time** is the obvious first stop. already there, free, no setup. but here's what you get: app names and total durations. "Dia: 4 hours 19 minutes." okay Apple, let me ask you something — why was i in Dia for 4 hours? it's like going to the doctor and they tell you "you have a problem somewhere in your body, i just can't tell where." cool, thank you, very helpful. Screen Time counts containers. not what's inside them.

**[RescueTime](https://rescuetime.com)** tries harder. been around since 2008, runs in the background, categorizes your apps into productive vs. distracting, and generates a daily score. there's a reason it still has users. but the categories are global and blunt. YouTube is "distracting" by default, even if you're watching a conference talk relevant to what you're building. VS Code is "productive" even when you've been staring at the same function for 45 minutes, completely stuck. and everything goes to their servers. it's productivity theater with categorical logic: VS Code = good, Chrome = bad. you'd have to manually recategorize everything yourself, at which point what is the app even doing?

**[Rize](https://rize.io)** is more recent, uses AI to categorize sessions automatically, and has a cleaner interface. it genuinely tries harder. but in practice the auto-categorization is wrong about 30% of the time. it's $15/month, and if you stop paying, your historical data is deleted. that last part bothered me more than anything else.

**[StayFree](https://stayfreeapps.com)** has 30 million users and is well-designed, but it's a blocker. it's built to help you spend less time on your phone. their browser extension is solid and syncing works well, but something's just off. the data stays vague and without going deep you're stuck staring at the screen asking the same questions you started with.

none of them could tell me what i was actually doing between 2pm and 4pm on a given day. they all answered a different, easier question.

## let me show you daylens

[Daylens](https://christian-tonny.dev/daylens) watches your apps and browser activity natively and builds your day as a timeline of labeled work blocks. no extensions, no screenshots, nothing leaves your machine.

![Daylens timeline for March 30 showing four named sessions: Tax Filing and Email 2h 50m in the morning, Mixed Development 3h 26m in the afternoon, X.com and YouTube 15m, Mixed Work 4h 6m in the evening](/writing/51/timeline.png)

that's a real day of mine. not too productive, but hey — don't judge. four sessions. not "apps that were open" but what i was actually doing and for how long. you can navigate to any day and see this same breakdown.

click on any block and you get the full picture.

![Work block detail for Mixed Development and Research Work, 3h 26m, 219 context switches detected. Breakdown shows sites visited with time, supporting apps like Codex and cmux, and key pages that were open during the session. AI tag indicates automatic analysis.](/writing/51/timeline-popover.png)

that "Mixed Development And Research Work" block isn't just a label i created. Daylens analyzed the session and understood what was happening: Codex as the primary tool for 1 hour 7 minutes, cmux for development work, Claude and Odoo pages open in the background. 219 context switches detected in that one session. the analysis runs on every block automatically, not sitting in a separate feature you have to go find and turn on.

the stats view shows the day in numbers. sort of what Screen Time should've been.

![Daylens stats dashboard showing 14h 1m active today, 62% focus score, time allocation bar breaking down browsing vs development vs productivity, and an intelligence insight noting you've spent a lot of time browsing](/writing/51/stats.png)

the focus score is based on your own switching behavior relative to your own history, not some external benchmark. the intelligence insight reads your actual data and surfaces what's worth knowing. it's not a generic tip generator.

everything stays on your machine. no account needed, nothing leaves your device unless you choose to enable the web companion. the whole thing is [open source](https://github.com/irachrist1/daylens), so you can read exactly what it does.

## one more thing

![Daylens insights tab showing a conversation: asking about focus patterns across the week, getting back a structured table with focus score and top category per day, and a follow-up question about where the user is most focused](/writing/51/insights.png)

once your days are tracked, you can ask questions across all of it. that's the Insights tab.

but here's the thing i'm actually building toward. and i want to address something directly first, because the obvious pushback is: ChatGPT has memory. Claude has Projects. there are connectors to Gmail, Google Drive, calendars. so what's actually different here?

here's what those tools know: what you've told them.

ChatGPT's memory saves facts it picks up from your conversations — your job, your preferences, things you mention in passing. Claude Projects stores files you manually upload and keeps them available across sessions. the connectors to your calendar and email can fetch data, but only when you ask. none of these tools are passively watching what you're doing. they have no window into your screen, your apps, or how your actual day unfolded. every conversation still starts with the same implicit question — *what are you working on right now?* — and you're the one who has to answer it.

Cursor and GitHub Copilot do something more passive: they index your codebase automatically when you open a project. but they only see your code. they don't know you spent two hours reading documentation before touching a file. they don't know your focus dropped after lunch. they don't know you switched contexts 219 times in one session. they see one slice of your day.

what none of these tools have is a record of your actual day — across all your apps, all your browser tabs, organized into what you were doing and for how long. that's the gap. and that's what Daylens captures.

the direction i'm building toward: an assistant that already has the picture before you open your mouth. not because you told it. because it was there. you don't explain your context. you don't catch it up. you just ask.

the tracking is step one. the insights are step two. what comes after, the kind of help that starts informed, is what i'm working toward.

free, open source, and i'd love feedback from anyone who's been thinking about this.

[GitHub](https://github.com/irachrist1/daylens) | [Try Daylens](https://christian-tonny.dev/daylens)

CT`,
    published: true,
    publishedAt: "2026-03-30T12:00:00.000Z",
    scheduledOrder: 4,
    tags: ["Daylens", "Time Tracking", "AI Productivity", "Open Source", "Issue #51"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle:
        "You Have No Idea Where Your Time Goes (Issue #51)",
      metaDescription:
        "The average knowledge worker switches apps 1,200 times a day. Most have no idea where their time goes. What if you did? Introducing Daylens: open-source, privacy-first time tracking.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
      canonicalPath: "/writing/51-you-have-no-idea-where-your-time-goes",
    },
    readWithAI: {
      summaryGoal:
        "Summarize the core argument for why passive activity tracking is the missing foundation for useful AI assistants.",
      applyGoal:
        "Help me evaluate my own time-tracking habits and identify where Daylens could provide the most value.",
    },
  },
  {
    id: "52",
    slug: "52-what-daylens-does",
    title: "What Daylens Does: A Complete Tour",
    subtitle: "Issue #52",
    previewText:
      "A walkthrough of every feature in Daylens — from the timeline to AI analysis to the web companion — and how it all fits together.",
    contentMarkdown: `# what daylens does: a complete tour

this is not a sales pitch. it's a walkthrough. if you heard about Daylens and want to know exactly what it does before downloading it, this is the piece for you.

[Daylens](https://christian-tonny.dev/daylens) is a local-first, open-source time tracker for macOS and Windows. it watches your apps and browser activity natively, groups everything into labeled work sessions, and lets you ask questions about your day. no account, no extensions, no cloud.

here's every feature, in the order you'll encounter it.

## the timeline

the first thing you see when you open Daylens is your day as a timeline of labeled sessions.

![Daylens timeline for March 30 showing four named sessions: Tax Filing and Email 2h 50m in the morning, Mixed Development 3h 26m in the afternoon, X.com and YouTube 15m, Mixed Work 4h 6m in the evening](/writing/51/timeline.png)

these aren't buckets you configure manually. Daylens watches what you're doing across all your apps and browser tabs, detects when the work shifts, and groups the activity into sessions with descriptive names. "Tax Filing and Email." "Mixed Development." "Mixed Work." the names reflect what actually happened, not a category someone assigned ahead of time.

you can navigate to any past day. the timeline is always there.

## session detail

click on any block in the timeline and you get the full picture of what happened inside it.

![Work block detail for Mixed Development and Research Work, 3h 26m, 219 context switches detected. Breakdown shows sites visited with time, supporting apps like Codex and cmux, and key pages that were open during the session. AI tag indicates automatic analysis.](/writing/51/timeline-popover.png)

every page that was open, time spent on each, which apps were running alongside, and how many times you switched contexts. 219 context switches in one session, in my case. the AI analysis tag means this breakdown was generated automatically, not by manual categorization.

this is the part no other tool gets right. not "VS Code was open for 3 hours" but what you were actually doing inside those 3 hours.

## stats view

the stats view translates your day into numbers.

![Daylens stats dashboard showing 14h 1m active today, 62% focus score, time allocation bar breaking down browsing vs development vs productivity, and an intelligence insight noting you've spent a lot of time browsing](/writing/51/stats.png)

the **focus score** is calculated from your own switching behavior relative to your own history. it's not a universal benchmark. a 62% focus day for you might look different than a 62% for someone else. the score moves based on how fragmented your attention was compared to your own average.

the **time allocation bar** shows how your day split across categories at a glance.

the **intelligence insight** reads your actual data and surfaces the one thing worth knowing that day. it's not pulling from a library of generic tips. it's reading your data and generating something specific to what happened.

## AI analysis

every session in the timeline gets analyzed automatically.

this runs without you doing anything. no prompt, no button. when Daylens groups a session, the AI goes through what happened and writes a description of the actual work. the session names themselves come from this analysis. "Mixed Development And Research Work" wasn't typed by you. Daylens read the activity and named it.

the analysis understands which tools were primary versus supporting, which sites were the focus versus background noise, and how context switches mapped to different tasks within the session.

## insights: ask questions about your week

![Daylens insights tab showing a conversation: asking about focus patterns across the week, getting back a structured table with focus score and top category per day, and a follow-up question about where the user is most focused](/writing/51/insights.png)

the Insights tab is a chat interface that already has all your data. you can ask questions in plain language across any timeframe.

- what was I doing Thursday afternoon?
- where did my focus go this week?
- which days did I have the most context switches?
- what was I researching on Wednesday?

the answers are grounded in your actual activity, not generated from memory. follow-up questions work. the conversation builds on itself.

## reports

Daylens generates daily and weekly reports automatically. the weekly review summarizes your patterns across the full week: focus trends, where time went, what shifted compared to previous weeks. the reports are readable in the app or exportable.

## web companion

the web companion lets you view your data from any device.

connect your desktop app once using a QR code from Settings. no email, no password. once connected, you can check your dashboard, browse history, and chat with AI about your habits from your phone or any browser.

all data still originates on your machine. the web companion reads what the desktop app syncs. nothing is stored on a server independently of you.

## privacy and data

everything Daylens records stays on your device by default. no telemetry, no usage analytics, no screenshots, no keylogging. the app watches window titles and browser tab titles, which is enough to understand what you're working on without capturing what you're typing or seeing.

the web companion sync uses end-to-end encryption. your recovery phrase is the only key. Daylens doesn't hold it.

the whole thing is [open source](https://github.com/irachrist1/daylens). you can read every line of what it does.

## getting started

1. download Daylens for [macOS or Windows](https://christian-tonny.dev/daylens)
2. open the app and let it run in the background
3. check your timeline at the end of the day

there's no configuration required to get value from it. the tracking starts immediately. the AI analysis runs on sessions as they're completed. by the end of your first day you'll have a labeled timeline with focus scores and session breakdowns.

the web companion is optional. if you want to check your data from your phone, go to Settings, tap Connect to Web, and scan the QR code.

---

that's everything. free, open source, and i'd love to hear what you think.

[GitHub](https://github.com/irachrist1/daylens) | [Try Daylens](https://christian-tonny.dev/daylens)

CT`,
    published: true,
    publishedAt: "2026-03-31T12:00:00.000Z",
    scheduledOrder: 5,
    tags: ["Daylens", "Time Tracking", "AI Productivity", "Open Source", "Issue #52"],
    coverImage: DEFAULT_COVER_IMAGE,
    seo: {
      metaTitle: "What Daylens Does: A Complete Tour (Issue #52)",
      metaDescription:
        "A walkthrough of every feature in Daylens — timeline, session detail, AI analysis, Insights chat, web companion, and privacy — so you know exactly what you're downloading.",
      ogImage: DEFAULT_COVER_IMAGE,
      twitterImage: DEFAULT_COVER_IMAGE,
      canonicalPath: "/writing/52-what-daylens-does",
    },
    readWithAI: {
      summaryGoal:
        "Summarize what Daylens does and which features would be most useful for someone who tracks their own productivity.",
      applyGoal:
        "Walk me through how to get the most value from Daylens on my first day using it.",
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
  const plainContent = stripMarkdown(article.contentMarkdown);
  const excerpt = plainContent.slice(0, 1200).trim();
  const excerptSuffix =
    plainContent.length > excerpt.length
      ? "\n\nNote: full article text was copied to clipboard for reliability."
      : "";

  return [
    "You are my AI reading partner. Summarize this article and help me apply it this week.",
    `Article title: ${article.title}`,
    `Article URL: ${getAbsoluteArticleUrl(article)}`,
    "Article excerpt:",
    `\"\"\"\n${excerpt}\n\"\"\"`,
    "What I need:",
    "1) A concise summary (7 bullets max).",
    "2) The 3 most important ideas for practical execution.",
    "3) Where this applies in my work this week (specific examples).",
    "4) A 5-day action plan with effort level and expected outcome.",
    "5) If your memory has relevant context about me, tailor recommendations to it; otherwise ask 3 clarifying questions first.",
    `Summary focus: ${article.readWithAI.summaryGoal}`,
    `Application focus: ${article.readWithAI.applyGoal}`,
    excerptSuffix,
  ].join("\n");
}

export function buildReadWithAIFullPrompt(article: Article): string {
  const plainContent = stripMarkdown(article.contentMarkdown);
  return [
    "You are my AI reading partner. Summarize this article and help me apply it this week.",
    `Article title: ${article.title}`,
    `Article URL: ${getAbsoluteArticleUrl(article)}`,
    "Full article text:",
    `\"\"\"\n${plainContent}\n\"\"\"`,
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
  const keywords = [
    "AI workflows",
    "AI tools",
    "product strategy",
    "automation",
    "software engineering",
    "Christian Tonny",
  ];

  return {
    title,
    description,
    keywords,
    category: "Technology",
    alternates: {
      canonical: `${SITE_URL}/writing`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
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
      site: "@irachrist01",
    },
  };
}

export const WRITING_SITE_URL = SITE_URL;
