import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Two Things Every App Needs",
	description: "AI is making the barrier to building software nearly zero. So how do you stand out? Essays on product development, AI, and building in public.",
	openGraph: {
		title: "Two Things Every App Needs",
		description: "AI is making the barrier to building software nearly zero. So how do you stand out? The answer lies in two simple things: a changelog and a feedback page.",
		url: "https://christian-tonny.vercel.app/writing",
		images: [
			{
				url: "https://christian-tonny.vercel.app/og-writing.png",
				width: 1200,
				height: 630,
				alt: "Two Things Every App Needs",
			},
		],
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "Two Things Every App Needs",
		description: "AI is making the barrier to building software nearly zero. So how do you stand out? The answer lies in two simple things.",
		images: ["https://christian-tonny.vercel.app/og-writing.png"],
	},
};

export const dynamic = "force-static";

// Helper to render text with inline links [text](url)
function renderWithLinks(text: string) {
	const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const parts: (string | JSX.Element)[] = [];
	let lastIndex = 0;
	let match;

	while ((match = linkRegex.exec(text)) !== null) {
		// Add text before the link
		if (match.index > lastIndex) {
			parts.push(text.slice(lastIndex, match.index));
		}
		// Add the link
		parts.push(
			<a
				key={match.index}
				href={match[2]}
				target="_blank"
				rel="noopener noreferrer"
				className="text-zinc-100 underline decoration-zinc-600 hover:decoration-zinc-400 transition-colors"
			>
				{match[1]}
			</a>
		);
		lastIndex = match.index + match[0].length;
	}
	// Add remaining text
	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}
	return parts.length > 0 ? parts : text;
}

// Featured Essay
const featuredEssay = {
	title: "Two Things Every App Needs",
	date: "January 5, 2026",
	readTime: "6 min read",
	excerpt: "AI is making the barrier to building software nearly zero. So how do you stand out? The answer lies in two simple things: a changelog and a feedback page.",
	content: `AI is slowly making the barrier to building software nearly zero. Which means if you're a solo developer or a SaaS startup, you're competing with thousands of other people who can also ship some basic version of what you're doing using Lovable faster than you sometimes.

So how do you stand out?

For a while now, developers have been slowly turning into content creators. You used to just ship code and not have to deal with marketing and sales because there were teams for that (mostly). This has been changing because it's now easier than ever to get started on social media, and more importantly, building in public is the new way of building anything. It's easier than ever to see small and large organizations shipping so-called beta's of whatever product it is.

We're in a strange period. It's become normal for companies to ship things that don't work yet. The Fisker car that Marques Brownlee reviewed had so many issues he titled it ["the worst car I've ever reviewed."](https://youtu.be/6xWXRk3yaSw?si=JFvMGm9O69odsA8O) The Rabbit R1 didn't work as a device and it's slowly dying. The Humane AI pin is already dead and sold to HP. But this isn't only apparent in physical products - it's in software too. It feels more than ever as if all software is broken. Cursor, my favorite IDE, [crashes on my machine constantly](https://forum.cursor.com/t/performance-degradation-and-ai-editing-issues-in-cursor-ide/61928). I'm pretty sure you're familiar with the Cloudflare stories. Even big orgs like Google and Microsoft constantly ships things that don't work according to their promises.

It used to be that products had to work fully out of the box. Now? Companies ship the dream first, then build toward it publicly. WhatsApp (of all things), which used to be rock solid, has bugs now. Everyone's shipping more code, and everyone's dealing with more bugs because of it.

So what separates the products that gain users from the ones that don't? Simple. TRUST and a Great Dream of what your product could be. The ones winning are inviting users into the journey and showing them that they are here to stay through commercials and ads that show how amazing the product could be or is (although half the features usually don't work as expected). Users are doing more work shaping what products evolve to be and if you want to do the same as well the best way to do this is to show two things: you're committed and shipping regularly, and you welcome feedback and iterate quickly based on it. Let's dive deeper.`,
	sections: [
		{
			title: "1. Changelog",
			content: `The Browser Company (makers of Arc) probably brought this to life. They did weekly videos showing what they shipped, and they had a changelog page that pops up every time you opened Arc. It built a community of people who flocked to Arc because those guys were shipping like crazy, and people genuinely loved seeing that.

Perplexity does this every other week. Zen browser does it. OpenAI with CODEX does it. Many more have changelog pages now. It's become a thing, especially in this AI era, because it shows "hey, we're actively working on this thing and we hope to make it better. Here's what we're doing, here's what we've done, here's how we're getting you closer to the dream of what this application will eventually do."

A changelog essentially shows everyone you're moving. One thing is for sure: we like companies that ship and innovate. Everyone loves to see their favorite company or startup do weekly updates showing what they shipped because we relate progress to positivity. Add a changelog to every single idea you build from now on because it's the easiest way to become a "code-influencer" without having a mic and camera.`
		},
		{
			title: "2. Feedback Page",
			content: `A feedback page shows you're not just building what YOU want. It shows "hey, you want this? that's what I'm gonna do." Make it visible - what's done, what's pending, what people are asking for. Users don't always know what they want, but they love knowing you listened.

It's also a great way to build community around your product because users can meet in one place where they all need the same thing, so discussions flow naturally. Raycast is a master of this. Their feedback system lets users vote on what gets built next. Linear does this too - their roadmap is public, you can see what's being worked on, what just shipped. Google used to do this with Google Labs, where they'd test different ideas publicly and build communities around mini-apps before deciding what to fully develop.

In this age, there are a lot of factors that make a product go viral. Two of which are above and fairly easy to do. The most important one: "having a product that sucks less and delivers on the core functionality that it promises." If your product does those two things, it's not guaranteed to fail (unless you're solving for a really niche set of people or something that isn't worthwhile), but you're guaranteed to learn either way.`
		}
	],
	closingQuote: {
		text: "Products fail, founders don't.",
		context: "The lessons you learn from failure are far more important than ones you learn from successes. Products fail, but founders don't. So ship it and show it. Someone will see."
	},
	citations: [
		{ label: "Lovable AI Platform", url: "https://lovable.dev", description: "AI-powered app development" },
		{ label: "MKBHD Fisker Review", url: "https://www.teslarati.com/mkbhd-fisker-ocean-worst-car/", description: "\"The worst car I've ever reviewed\"" },
		{ label: "Rabbit R1 Failures", url: "https://museumoffailure.com/exhibition/rabbit-r1", description: "Museum of Failure entry" },
		{ label: "Humane AI Pin Shutdown", url: "https://techcrunch.com/2025/02/18/humanes-ai-pin-is-dead-as-hp-buys-startups-assets-for-116m/", description: "HP acquires Humane for $116M" },
		{ label: "Arc Browser Changelog", url: "https://resources.arc.net/hc/en-us/articles/22513842649623-Arc-for-Windows-2023-2025-Release-Notes", description: "Arc's release notes approach" },
		{ label: "Perplexity Changelog", url: "https://docs.perplexity.ai/changelog/changelog", description: "Regular shipping updates" },
		{ label: "Raycast Feedback System", url: "https://www.raycast.com/blog/feedback", description: "User voting on features" },
		{ label: "Linear Public Roadmap", url: "https://productlane.com/public-roadmap", description: "Transparent development" },
	]
};

const articles = [
	{
		title: "AI Implementation & Business Strategy",
		date: "January 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/posts/irachrist1_ai-implementation-businessstrategy-activity-7310186247170199553-3CUF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADabeDIBOQhatOqtEozzbCzV4WwaWj_O280",
		excerpt: "Practical insights on implementing AI in business. Real-world strategies, frameworks, and lessons from working with companies adopting AI technology.",
	},
	{
		title: "The State of AI in 2025",
		date: "March 25, 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/pulse/state-ai-2025-christian-tonny-iradukunda-tzdqc/",
		excerpt: "Vibe coding, model breakthroughs, and a practical framework for implementing AI in business.",
	},
	{
		title: "12 Key Insights from The Psychology of Money",
		date: "March 18, 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/pulse/12-key-insights-from-psychology-money-christian-tonny-iradukunda-u0bqc/",
		excerpt: "Financial mental models and the power of compounding. Lessons from Morgan Housel's masterpiece.",
	}
];

export default function WritingPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen flex flex-col">
			<Navigation />
			<div className="px-6 pt-28 mx-auto space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32 pb-16 flex-grow">
				<div className="max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
						Writing
					</h1>
					<p className="text-xl text-zinc-400">
						Thoughts on AI implementation, technology trends, and business strategy
					</p>
				</div>

				{/* Newsletter */}
				<Card>
					<div className="p-8">
						<h2 className="text-2xl font-bold text-zinc-100 mb-4">
							Rwanda's Tech Insider
						</h2>
						<p className="text-zinc-400 mb-6">
							Weekly newsletter covering technology trends, AI breakthroughs, and business insights.
						</p>
						<Link
							href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
							target="_blank"
							className="inline-block px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
						>
							Subscribe on LinkedIn &rarr;
						</Link>
					</div>
				</Card>

				{/* Featured Essay */}
				<div>
					<div className="flex items-center gap-3 mb-6">
						<span className="text-xs px-2.5 py-1 bg-zinc-100 text-zinc-900 rounded font-medium">
							Featured
						</span>
						<h2 className="text-2xl font-bold text-zinc-100">Latest Essay</h2>
					</div>
					
					<Card>
						<article className="p-8 md:p-10">
							{/* Essay Header */}
							<header className="mb-8 pb-6 border-b border-zinc-800">
								<div className="flex items-center gap-3 mb-4">
									<span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
										Essay
									</span>
									<span className="text-xs text-zinc-500">{featuredEssay.date}</span>
									<span className="text-xs text-zinc-600">•</span>
									<span className="text-xs text-zinc-500">{featuredEssay.readTime}</span>
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">
									{featuredEssay.title}
								</h3>
								<p className="text-lg text-zinc-400 leading-relaxed">
									{featuredEssay.excerpt}
								</p>
							</header>

							{/* Essay Content */}
							<div className="prose prose-invert max-w-none">
								{/* Main content paragraphs */}
								<div className="space-y-4 text-zinc-300 leading-relaxed">
									{featuredEssay.content.split('\n\n').map((paragraph, idx) => (
										<p key={idx}>{renderWithLinks(paragraph)}</p>
									))}
								</div>

								{/* Sections */}
								{featuredEssay.sections.map((section, idx) => (
									<div key={idx} className="mt-10">
										<h4 className="text-xl font-bold text-zinc-100 mb-4">
											{section.title}
										</h4>
										<div className="space-y-4 text-zinc-300 leading-relaxed">
											{section.content.split('\n\n').map((paragraph, pIdx) => (
												<p key={pIdx}>{renderWithLinks(paragraph)}</p>
											))}
										</div>
									</div>
								))}

								{/* Closing Quote */}
								<blockquote className="mt-10 pl-6 border-l-2 border-zinc-600">
									<p className="text-xl italic text-zinc-200 mb-3">
										"{featuredEssay.closingQuote.text}"
									</p>
									<p className="text-zinc-400">
										{featuredEssay.closingQuote.context}
									</p>
								</blockquote>
							</div>

							{/* Citations */}
							<footer className="mt-10 pt-6 border-t border-zinc-800">
								<h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
									Sources & References
								</h4>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{featuredEssay.citations.map((citation, idx) => (
										<a
											key={idx}
											href={citation.url}
											target="_blank"
											rel="noopener noreferrer"
											className="group flex items-start gap-3 p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
										>
											<span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded bg-zinc-700 text-xs text-zinc-400 font-mono">
												{idx + 1}
											</span>
											<div className="flex-1 min-w-0">
												<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
													{citation.label}
												</p>
												<p className="text-xs text-zinc-500 truncate">
													{citation.description}
												</p>
											</div>
											<ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-400 flex-shrink-0 mt-0.5" />
										</a>
									))}
								</div>
							</footer>
						</article>
					</Card>
				</div>

				{/* Articles */}
				<div>
					<h2 className="text-2xl font-bold text-zinc-100 mb-8">Recent Articles</h2>
					<div className="space-y-6">
						{articles.map((article, index) => (
							<Card key={index}>
								<Link href={article.url} target="_blank" className="block p-6 group">
									<div className="flex items-center gap-3 mb-3">
										<span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
											{article.platform}
										</span>
										<span className="text-xs text-zinc-500">{article.date}</span>
									</div>
									<h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
										{article.title}
									</h3>
									<p className="text-zinc-400 leading-relaxed">
										{article.excerpt}
									</p>
									<div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors mt-4">
										Read more &rarr;
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>

				{/* Social Links */}
				<div className="text-center">
					<h2 className="text-xl font-bold text-zinc-100 mb-6">
						Connect
					</h2>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link
							href="https://www.linkedin.com/in/irachrist1/"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							LinkedIn
						</Link>
						<Link
							href="https://twitter.com/irachrist01"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							Twitter
						</Link>
						<Link
							href="https://medium.com/@irachrist1"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							Medium
						</Link>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	);
}
