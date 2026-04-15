# christian-tonny.dev — Full Site Redesign Brief

## Who This Is For

Christian Tonny. Software engineer and writer, Kigali, Rwanda. Works at Andersen Rwanda building AI automation tools. Building Daylens — a local-first AI time tracking app. Writes a newsletter about AI and building things. This should feel like a personal space on the internet, not a resume or a pitch.

---

## The Core Concept

Two layers. One experience.

**Layer 1 — The surface:** A nearly empty page. Your name, three words, a cursor that makes the darkness feel alive. Nothing else. Calm, confident, unhurried.

**Layer 2 — The depth:** A chat interface. When someone gets curious and wants more, it's there. It knows everything about you and responds with text — and occasionally, when it genuinely helps, a widget.

The key insight: the minimal surface creates the desire for more. The emptiness is not a problem — it is the setup. The chat is the payoff. On a nearly empty page, a project card appearing in the chat feels like magic. On a busy page, it would just be noise.

---

## Codebase

- **Framework:** Next.js 16, React 18, TypeScript, Tailwind CSS
- **Location:** `~/Dev-Personal/portfolio`
- **Fonts already loaded:** Inter (`var(--font-inter)`, `font-sans`), CalSans (`var(--font-calsans)`, `font-display`)
- **Animation:** Framer Motion already installed
- **Theme:** Dark zinc — `zinc-950` background, `zinc-100` primary text
- **Content:** All in TypeScript data files — `app/data/writing.ts`, `app/data/projects.ts`, `app/data/changelog.ts`
- **Routes:** All pages in `app/(shell)/` wrapped by sidebar shell layout
- **AI:** Use Claude API (Anthropic). Model: `claude-sonnet-4-6` with cunjuction with haiku 4.5 for lighter easier tasks. Enable prompt caching on the system prompt (`cache_control: { type: "ephemeral" }`). Stream all responses in a very smooth and beautiful way possible. Refer to how companies like Dia browser from the browser company does it or Arc browser too. 

---

## Design Language

**Typography:** DM Serif Display (already loaded as `--font-serif-display`, `font-serif-display`) for the name on the landing. Inter for all body text. The name should feel typeset, not generated.

**Color:** Respect system theme — dark zinc (`zinc-950` background, `zinc-100` text) for dark mode, the existing Apple-inspired light palette for light mode. No new colors. The cursor light: a very subtle warm white radial gradient, `rgba(255,255,255,0.03–0.04)`. Barely there.

**Motion philosophy — this is the core of the experience:**

Everything on this site should feel like it has *physical mass*. Not transitions — reactions. The difference: a transition changes a value over time. A reaction responds to pressure, has overshoot, has resistance. Every interactive element should behave like a physical object, not a CSS property.

Three specific feelings to nail:

1. **Tilt and depth.** Every interactive surface — the name, the three words, the chat widgets — should tilt in 3D as the cursor moves across it. `rotateX` and `rotateY` driven by cursor position relative to the element center. 8–12 degrees max. Subtle enough that you feel it before you notice it. This makes flat elements feel like they're sitting on a surface that responds to you. Reference: iOS home screen icons, Telegram premium sticker previews.

2. **Spring with weight.** Nothing eases linearly. Everything has spring physics — stiffness, damping, slight overshoot on arrival. When a chat bubble arrives, it should land, not fade. When the three words' hover preview expands, it should open like a physical card deck, not dissolve.

3. **Alive at rest.** Even when nothing is happening, the page should feel present. The cursor light is one layer of this. The name can have a very slow, almost imperceptible letter-spacing breathing animation. The `ask anything` trigger pulses. Nothing is completely still.

**Principle:** Every element earns its place. If removing it makes the page feel emptier rather than cleaner, keep it. If removing it makes the page feel calmer, remove it.

---

## Layer 1 — The Landing Page

**File:** `app/(shell)/page.tsx` + `app/(shell)/HomeInteractive.tsx` (client component)

The entire page is one viewport. No scroll.

```
[cursor light follows mouse across the dark background]

        Christian Tonny

        engineer · writer · kigali


        Writing        Work        Now
```

- **Name:** Large display serif (Editorial New or similar via Google Fonts or `next/font`). `text-5xl` or `text-6xl`. `text-zinc-100`. Tight tracking.
- **Descriptor:** `engineer · writer · kigali`. Small, `text-zinc-500`, lowercase, no punctuation at end. `text-sm`, generous letter-spacing.
- **Three words:** `Writing`, `Work`, `About`. These are links. Spaced far apart horizontally — not a nav bar, more like three points on a map. `text-zinc-400` by default. ("Now" was renamed to "About" — it navigated to /about anyway, and "About" is clearer.)

**Hover interaction on the three words — stack reveal:**

This is the core discovery mechanic. When the cursor approaches or hovers one of the three words, a small stack of content fans out *below* it — like iOS 26 notification grouping, or a hand of cards being lifted from the table. The user feels like they're discovering what's behind each word.

- `Writing` → a stack of 3–4 recent article titles, most recent on top, slightly overlapping, with dates barely visible. Each card in the stack is slightly offset down and back (lower z, smaller scale). Hovering the stack fans the cards apart so titles become readable. Clicking any card navigates directly to that article. Clicking the word "Writing" navigates to `/writing`.

- `Work` → same stack mechanic with 3–4 project names. Daylens is the front card. Others (Sync Blogs, ContentFlow, etc.) are stacked behind it. Hovering fans them out. Each card has the project name and a one-line tagline. Clicking navigates to that project. Clicking the word "Work" navigates to `/projects`.

- `About` → a single quiet card (not a stack), appearing below, showing 2 lines: what he does + location. Clicking navigates to `/about`.

**Stack behavior specifics:**
- Cards in the stack are `rounded-xl`, dark zinc surface (`zinc-900`), very thin border (`zinc-800`)
- In resting hover state: cards slightly overlap, creating visible depth through subtle shadows and scale differences
- On hover-within-stack: cards spread apart with spring physics — they fan open, not slide
- Each card tilts slightly in 3D as cursor moves across it (the tilt principle from the design language section)
- The entire stack arrives with spring physics when the parent word is first hovered — it should feel like lifting something, not opening a dropdown

On click, navigates to `/writing`, `/projects`, `/about`.

**Cursor light:**
A `div` positioned absolutely, `pointer-events-none`, `mix-blend-mode: screen` or just a radial gradient background following `mousemove`. Radius ~300px. Opacity very low — `0.04` max. It should make the background feel warm without being visible as a literal circle.

**Chat trigger:**
Bottom of the page, centered. Small but not tiny — large enough to click comfortably on mobile. A `MessageCircle` icon + the text "ask anything". `text-xs` to `text-sm`, `text-zinc-500`. The icon pulses very slowly. Clicking opens the chat.

The trigger should feel like a whisper, not a button. It's there when you look for it. It's not competing for attention.

**No sidebar on this page.** The shell layout needs a prop or condition to hide the sidebar on the home route specifically. The home page is a standalone experience — the sidebar ruins the effect.

---

## Layer 2 — The Chat

**Files:**
- `app/api/chat/route.ts` — streaming API route
- `app/(shell)/components/ChatPanel.tsx` — the panel UI
- `app/lib/ai-knowledge.ts` — the knowledge base

### Chat panel behavior

**Closed state:** Only the `ask anything` trigger visible at the bottom of the landing.

**Open state:** Full-screen overlay. `bg-zinc-950/90 backdrop-blur-md`. The landing page — the name, the three words — should remain faintly visible through the blur behind the chat. You are going *deeper into the same space*, not opening a new screen. The overlay should feel like frosted glass laid over the landing, not a modal replacing it.

The chat content is centered at `max-w-2xl`. Close with Escape or the `×` button.

**The opening animation:** The overlay fades in (opacity 0→1). The chat content rises from slightly below center with spring physics — stiffness ~280, damping ~30. It should feel like something surfacing, not a window opening.

**Input box:**
The textarea and send button must be vertically centered on the same baseline. The input area should have generous padding — `py-3 px-4` minimum. The textarea auto-grows with content. The send button is a rounded square (`w-8 h-8`), vertically centered with the first line of text, not the bottom of the textarea. The placeholder text must align exactly with where typed text appears.

**Prompt chips:** Before the first message, show three chips:
- "Tell me about his writing"
- "What is Daylens?"
- "What's he working on now?"

These are not buttons — they are quiet suggestions. `border border-zinc-800`, `text-zinc-400`. Hover brightens the border and text together.

**Streaming text behavior:**
As Claude streams tokens, each new word should arrive with a tiny upward float animation (2–4px, 100ms, ease-out). The effect is subtle — like thoughts forming rather than text being typed. The leading edge of the stream should feel slightly alive. This is the difference between a log being printed and a person thinking out loud.

**Widget cards:**
When a widget appears (article list, project card, etc.), it should arrive with spring physics — sliding up from 8px below, with a very slight overshoot. Each card should tilt in 3D as the cursor moves over it (tilt principle from Design Language). Cards should feel like physical objects you could pick up, not table rows that appeared.

Consider integrating the Vercel AI SDK (`ai` package) where it simplifies streaming — particularly `useChat` for the client state and streaming primitives for the API route.

### AI knowledge base

Create `app/lib/ai-knowledge.ts`. Hand-write this carefully — it's the source of truth.

```ts
export const KNOWLEDGE = {
  bio: `Christian Tonny is a software engineer and writer based in Kigali, Rwanda.`,
  work: `At Andersen Rwanda, he builds AI automation tools for research, compliance, and market analysis.`,
  projects: `His main personal project is Daylens — a local-first, AI-powered time tracking app for Mac, Windows, and web. He is also building Spark, a career mentoring tool for students in Africa.`,
  writing: `He writes a newsletter about AI, building products, and technology. Published issues include essays on AI tools, time tracking, and building in public.`,
  availability: `Christian is not actively looking for new opportunities. He is open to interesting conversations.`,
  contact: `Email: ctonny111@gmail.com | LinkedIn: linkedin.com/in/irachrist1 | GitHub: github.com/irachrist1`,
  location: `Kigali, Rwanda (GMT+2)`,
};
```

The system prompt fed to Claude combines this knowledge base with summaries of articles (from `writing.ts`) and projects (from `projects.ts`). Claude responds strictly from this — no speculation, no hallucination.

### Models

Use two models depending on the complexity of the question. Route in `app/api/chat/route.ts` before calling the API:

**Claude Haiku 4.5** (`claude-haiku-4-5-20251001`) — default for everything:
- Simple factual questions ("what does he do", "where is he based", "show me his articles")
- Widget-triggering questions (the answer is structured data, not reasoning)
- Follow-up questions in an ongoing conversation

**Claude Sonnet 4.6** (`claude-sonnet-4-6`) — escalate when:
- The question requires synthesis or opinion ("what's his take on AI", "explain his philosophy")
- Multi-part questions ("compare his projects and tell me which one to look at first")
- The question is ambiguous and needs careful interpretation
- Haiku's previous response in the thread was shallow or missed the point

Simple routing heuristic — check before calling:
```ts
const isComplex = message.length > 120
  || /compar|explain|opinion|think|philosoph|best|why|how does|what's the difference/i.test(message)
  || conversationDepth > 4; // longer conversations get Sonnet

const model = isComplex ? "claude-sonnet-4-6" : "claude-haiku-4-5-20251001";
```

Both models use the same system prompt and knowledge base. Prompt caching (`cache_control: { type: "ephemeral" }`) applies to both — it cuts latency significantly on Haiku especially.

### Personality & Tone

The voice is **Trevor Noah** — sharp, warm, self-aware, genuinely funny without trying too hard. Kigali meets the world. Smart about everything, humble about nothing he actually knows.

**Two modes depending on what was asked:**

**Mode 1 — Knows the answer (it's in the knowledge base):**
Direct, specific, no filler. Warm but not performatively friendly. Short.

> "He's building Daylens — a time tracking app that runs locally on your Mac or Windows machine and lets you chat with your own data using AI. Think of it as a diary that actually remembers what you did."

**Mode 2 — Doesn't know (outside the knowledge base):**
Lead with a pun or a witty deflection — something that acknowledges the gap with humor — then still try to give something useful or redirect cleanly. The joke should feel natural, not forced. Think Trevor Noah finding the absurdity in a situation before addressing it.

> User: "What's his favorite restaurant in Kigali?"
> Response: "Now that's the kind of classified information that would require a security clearance — or at least a dinner invitation. I genuinely don't have that one. What I *can* tell you is he's based in Kigali if you're ever looking to find out in person."

> User: "What does he think about the Rwandan Premier League?"
> Response: "Football and I have a complicated relationship — mostly because Christian hasn't briefed me on his. I'm well-informed on his AI work and writing, less so on his Saturday afternoons. Anything about his actual work I can help with?"

The joke should:
- Be a pun, a self-aware observation, or a dry aside — not a dad joke
- Be one sentence, maybe two — never a whole paragraph
- Always be followed by a genuine attempt to help or redirect
- Never be mean, never punch at the visitor

What to never do regardless of mode:
- "Great question!" / "Certainly!" / "Of course!"
- Long paragraphs
- Bullet lists for conversational answers
- Apologize excessively ("I'm so sorry, I don't have that information")
- Repeat what the user just said back to them

**Tone examples — the difference:**

Bad: `"I'm sorry, I don't have information about Christian's restaurant preferences. As an AI assistant for this portfolio, I only have access to information about his professional work and projects."`

Good: `"Restaurant recommendations are above my pay grade — I'm more of a 'knows his GitHub' kind of assistant. He's in Kigali though, if that helps narrow it down."`

Bad: `"Christian Tonny is a highly accomplished software engineer with expertise in AI implementation..."`

Good: `"He builds AI systems for businesses — mostly at Andersen Rwanda, where the work is research automation, compliance tools, that kind of thing. On the side he's building Daylens."`

### Widget system

**The rule:** Widgets appear only when they replace something that would take multiple clicks to access otherwise, or when structured information is meaningfully better than prose. Default is always text.

**The four widgets — nothing else:**

**1. Article List**
Triggers: "writing", "articles", "what has he written", "newsletter"
Shows: up to 5 articles — title, date, link. Nothing more.

**2. Project Card**
Triggers: specific project name, "what is Daylens", "show me his work"
Shows: project name, one-paragraph description, tech used, GitHub/live link.
One card at a time. Not a grid.

**3. Contact Card**
Triggers: "contact", "email", "reach out", "get in touch"
Shows: email (mailto link), LinkedIn, GitHub, location.
Always identical. Never proactive.

**4. Now Card**
Triggers: "what are you working on", "what's he doing now", "current projects"
Shows: 2–3 current work items pulled from `changelog.ts` currentWork entries.

**Widget format in API response:**
```ts
// API returns:
{
  text: "Here's what he's been writing lately.",
  widget: { type: "article-list", props: { articles: [...] } } | null
}
```

Widget renders below the text bubble, not instead of it.

---

## All Other Pages

These pages still exist and are full. The minimal landing doesn't replace them — it's the front door. Once inside, the site is complete.

### Sidebar (all pages except home)

Reduce to five items, no labels, no collapsibles:

```
Home
Writing
Projects
Changelog
About
```

Search trigger and theme toggle stay — move them to the bottom of the sidebar as small icons only.

### Writing page

Clean article list. Title left, date right, thin border below each row. No category filter tabs — if filtering is needed, small text links at top. No section headers. Page title: just `Writing`.

### Projects page

List view: project name + one-line tagline. No GitHub icons, no commit counts, no badges on the list. Category headers in small quiet text. Details on the individual project page.

### About page

Two paragraphs. Then a quiet list of current things — no headers, no bullets, just plain lines of text. Any project name mentioned in the current-things list should be a link to its project page (e.g. "Daylens" → `/projects/daylens`). Do not include timezone or GMT offset — that's noise. Contact info at the bottom: email + LinkedIn only, small plain text links. No "Get In Touch" button.

### Changelog page

Redesign to feel like a GitHub activity view — sparse, scannable, the feeling that things are actively shipping. The visitor should feel "this person is active" in two seconds, not "I need to read all of this."

Structure:
- Current work at the top: compact, one line per project, progress bar below each. No extended descriptions visible by default — expand on click if needed.
- Below that: a timeline that reads like a commit feed. Date on the left (small, quiet), entry title on the right, one line. No task lists, no tech stack badges, no walls of text in the timeline view.
- The weekly activity graph stays — it's the best visual proof of activity — but it should be a subtle, compact bar chart, not a data table.

The Changelog is the most "alive" page. Its job is to show momentum, not document everything.

### Skills page

Merge into About, or reduce to plain comma-separated lists per category. No gradient cards, no icons.

---

## Implementation Order

**Phase 1 — The landing**
1. New font (Editorial New or Canela) via `next/font`
2. Cursor light effect
3. Three-word hover interaction
4. `_ ask anything` trigger
5. Hide sidebar on home route

**Phase 2 — The chat**
1. `app/lib/ai-knowledge.ts` — write the knowledge base carefully
2. `app/api/chat/route.ts` — streaming Claude API route with prompt caching
3. `ChatPanel.tsx` — panel UI, all states (closed, open, active)
4. Prompt chips
5. Text responses working correctly

**Phase 3 — Widgets**
1. Article List widget
2. Project Card widget
3. Contact Card widget
4. Now Card widget
5. Intent detection in API route (lightweight — regex or small heuristic, not a second LLM call)

**Phase 4 — Rest of site**
Simplify sidebar, writing page, projects page, about page, changelog page per specs above.

---

## What Success Feels Like

Someone arrives. Almost nothing. A name. The darkness breathes around their cursor. Three words. They hover over "Work" — one line appears. They click the blinking `_ ask anything`. They type "what is Daylens?" A project card slides up. They click the GitHub link. They never had to navigate anywhere, read a wall of text, or figure out where to look. The page met them exactly where they were.

That's it.

---

## Phase 5 — Refinements (post-initial-build)

The following issues were identified after the first build and need to be addressed. These are refinements, not new features.

### Chat Input Box
The input area in `ChatPanel.tsx` has alignment issues. The placeholder text, the live typed text, and the send button are not on the same vertical baseline. The textarea sits too high relative to the send button. The whole input area is undersized — increase padding and minimum height so it feels like a proper input, not a text label. The `ask anything` trigger button on the landing is too small — increase its visual weight slightly (larger text, slightly more spacing) while keeping it subtle.

### Landing — Hover Previews on Writing and Work
Currently `Writing` shows one article title on hover and `Work` shows one project name. This is too thin.

**Writing hover:** Instead of a single line, show a small stack of articles — like iOS 26 notification grouping at the bottom of the screen. 3–4 article titles stacked with the most recent on top, slightly overlapping. The user can hover over the stack to fan it out and scroll through titles. Keeps the minimal feel but shows there's substance.

**Work hover:** Same principle — show 3–4 project names stacked, not just Daylens. Daylens is the lead but it shouldn't look like a one-project portfolio. The stack fans out on hover.

Both stacks should animate in gently when hovering the parent word and disappear when the cursor leaves. They appear below the word, the same way the single-line description did before.

### Landing — Navigation Labels
Rename the third word from `Now` → `About`. The `Now` label was confusing — it navigated to `/about` anyway. `About` is clearer without breaking the landing's sparse aesthetic.

The three words are now: `Writing` · `Work` · `About`

Update hover description for `About` to something like: "Based in Kigali, building things" instead of "Building at Andersen Rwanda."

### About Page
The current about page has plain text for project names and current work items that should be clickable. Fix:
- "Daylens" → link to `/projects/daylens`
- "Sync Blogs" → link to `/projects/sync-blogs`
- Any other project names mentioned in the current-work list → link to their project page
- Remove the location line that says "Based in Kigali, GMT+2" — the GMT+2 reads as noise
- Only email and LinkedIn should be contact links at the bottom (already the case — just verify)

### Changelog Page
The current changelog is information-dense and reads like a log dump. Redesign it to feel like GitHub's contribution/activity view — sparse, scannable, alive.

The principle: show that things are shipping, not every detail of what shipped. A visitor should feel "this person is active" not "I need to read all of this."
- Lead with current work (already done) but make each item compact — one line each
- The timeline should feel like a GitHub commit graph or activity feed: dates on the left, short entry on the right, no walls of text
- Remove extended descriptions, task lists, tech stack badges from the timeline view
- Weekly activity stays but should be a subtle graph, not a table

### Projects Page
Some project detail pages (`/projects/[slug]`) still render with heavy old-style layouts that weren't updated during Phase 4. Audit every project slug and ensure the individual project view matches the clean minimal aesthetic of the list view. Fix any broken or mismatched internal links.
