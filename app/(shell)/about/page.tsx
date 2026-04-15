import Link from "next/link";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="px-6 py-10 mx-auto max-w-2xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-10">
        About
      </h1>

      <div className="space-y-5 text-[15px] text-zinc-400 leading-relaxed mb-12">
        <p>
          Software engineer and writer based in Kigali, Rwanda. At{" "}
          <span className="text-zinc-200">Andersen Rwanda</span>, I build AI
          automation tools for research, compliance, and market analysis — the
          kind of work that turns a business process into something that runs
          itself. I care about things that ship and things that work.
        </p>
        <p>
          On the side, I&apos;m building{" "}
          <Link
            href="/projects/daylens"
            className="text-zinc-200 hover:text-zinc-100 underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-500 transition-colors"
          >
            Daylens
          </Link>{" "}
          — a local-first time tracking app for Mac and Windows that uses AI to
          make sense of where your hours actually go. I also write a newsletter
          about AI and building products. Not theory. Practical tools, real
          workflows, once a week.
        </p>
      </div>

      {/* Current — plain lines, no bullets, no headers */}
      <div className="space-y-2 text-sm text-zinc-500 mb-16">
        <p>
          Building{" "}
          <Link
            href="/projects/daylens"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Daylens
          </Link>{" "}
          — v1 on Mac and Windows, web companion live
        </p>
        <p>
          Building{" "}
          <Link
            href="/projects/sync-blogs"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Sync Blogs
          </Link>{" "}
          — AI writing studio for cross-platform syndication
        </p>
        <p>AI automation at Andersen Rwanda — research, compliance, market intel</p>
        <p>
          Writing{" "}
          <Link
            href="/writing"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Rwanda&apos;s Tech Insider
          </Link>
          , weekly
        </p>
      </div>

      {/* Contact — plain text links */}
      <div className="space-y-1 text-sm">
        <a
          href="mailto:ctonny111@gmail.com"
          className="block text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          ctonny111@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/irachrist1"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          linkedin.com/in/irachrist1
        </a>
      </div>
    </div>
  );
}
