import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const articles = [
	{
		title: "AI Implementation & Business Strategy",
		date: "January 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/posts/irachrist1_ai-implementation-businessstrategy-activity-7310186247170199553-3CUF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADabeDIBOQhatOqtEozzbCzV4WwaWj_O280",
		excerpt: "Practical insights on implementing AI in business. Real-world strategies, frameworks, and lessons from working with companies adopting AI technology.",
		topics: ["AI Implementation", "Business Strategy", "Digital Transformation"]
	},
	{
		title: "The State of AI in 2025",
		date: "March 25, 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/pulse/state-ai-2025-christian-tonny-iradukunda-tzdqc/",
		excerpt: "Vibe coding, model breakthroughs, and a practical framework for implementing AI in business. A comprehensive look at where we are and where we're going.",
		topics: ["Vibe Coding", "AI Implementation", "Model Landscape"]
	},
	{
		title: "12 Key Insights from The Psychology of Money",
		date: "March 18, 2025",
		platform: "LinkedIn",
		url: "https://www.linkedin.com/pulse/12-key-insights-from-psychology-money-christian-tonny-iradukunda-u0bqc/",
		excerpt: "Financial mental models and the power of compounding. Lessons from Morgan Housel's masterpiece on wealth, behavior, and long-term thinking.",
		topics: ["Financial Psychology", "Compounding", "Wealth Building"]
	}
];

export const dynamic = "force-static";

export default function WritingPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-16 max-w-5xl lg:px-8 md:pt-24 lg:pt-32 pb-24">
				{/* Hero Section */}
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
						Writing
					</h1>
					<p className="text-xl text-zinc-400 mb-4">
						Thoughts on AI, technology trends, and building products
					</p>
					<p className="text-base text-zinc-500">
						Published on LinkedIn, Kit, and Substack
					</p>
				</div>

				{/* Newsletter Signup */}
				<Card>
					<div className="p-8 md:p-12 text-center">
						<h2 className="text-2xl font-bold text-zinc-100 mb-4">
							Rwanda's Tech Insider
						</h2>
						<p className="text-zinc-400 mb-6">
							Weekly newsletter covering technology trends, AI breakthroughs, and business insights. 7 editions published, 49 broadcasts sent.
						</p>
						<div className="flex gap-4 justify-center flex-wrap">
							<Link
								href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
								target="_blank"
								className="px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
							>
								LinkedIn Newsletter &rarr;
							</Link>
							<Link
								href="https://sunday-scoops.kit.com/"
								target="_blank"
								className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
							>
								Kit Newsletter &rarr;
							</Link>
						</div>
					</div>
				</Card>

				{/* Featured Articles */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">Featured Articles</h2>
					<div className="space-y-6">
						{articles.map((article, index) => (
							<Card key={index}>
								<Link href={article.url} target="_blank" className="block p-6 md:p-8 group">
									<div className="flex items-start justify-between mb-4">
										<div className="flex-1">
											<div className="flex items-center gap-3 mb-3">
												<span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
													{article.platform}
												</span>
												<span className="text-xs text-zinc-500">{article.date}</span>
											</div>
											<h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors">
												{article.title}
											</h3>
											<p className="text-zinc-400 leading-relaxed mb-4">
												{article.excerpt}
											</p>
											<div className="flex flex-wrap gap-2">
												{article.topics.map((topic, i) => (
													<span key={i} className="text-xs px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full">
														{topic}
													</span>
												))}
											</div>
										</div>
									</div>
									<div className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
										Read article &rarr;
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>

				{/* Writing Topics */}
				<div>
					<h2 className="text-3xl font-bold text-zinc-100 mb-8">What I Write About</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">🤖</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Artificial Intelligence</h3>
								<p className="text-zinc-400 text-sm">
									Practical AI implementation, model breakthroughs, and how businesses can actually use this technology.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">💻</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Technology Trends</h3>
								<p className="text-zinc-400 text-sm">
									Automation, infrastructure, cybersecurity, and the tools shaping how we work.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">💡</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Business Insights</h3>
								<p className="text-zinc-400 text-sm">
									Strategy, implementation, and what actually works when introducing new technology.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">�</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Book Lessons</h3>
								<p className="text-zinc-400 text-sm">
									Key insights from founder biographies, business classics, and psychology of success.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">�️</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Podcast Insights</h3>
								<p className="text-zinc-400 text-sm">
									Takeaways from Acquired, Founders, and conversations about company building.
								</p>
							</div>
						</Card>
						<Card>
							<div className="p-6">
								<div className="text-3xl mb-3">🛠️</div>
								<h3 className="text-lg font-bold text-zinc-100 mb-2">Personal Development</h3>
								<p className="text-zinc-400 text-sm">
									Productivity, learning strategies, and building products that feel like magic.
								</p>
							</div>
						</Card>
					</div>
				</div>

				{/* Writing Philosophy */}
				<Card>
					<div className="p-8 md:p-12">
						<h2 className="text-2xl font-bold text-zinc-100 mb-6 text-center">
							Writing Philosophy
						</h2>
						<div className="max-w-2xl mx-auto space-y-4 text-zinc-400 text-center">
							<p className="text-lg">
								I write to clarify my own thinking. If I can't explain something clearly, I don't understand it well enough.
							</p>
							<p>
								My style: concise, actionable tech breakdowns with practical business advice. No fluff. No hype. Just clear thinking about technology and how to use it.
							</p>
							<p className="text-zinc-300 font-semibold">
								Every article should teach something specific that readers can apply immediately.
							</p>
						</div>
					</div>
				</Card>

				{/* More Platforms */}
				<div className="text-center">
					<h2 className="text-2xl font-bold text-zinc-100 mb-6">
						Find Me On
					</h2>
					<div className="flex gap-4 justify-center flex-wrap">
						<Link
							href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							More Articles &rarr;
						</Link>
						<Link
							href="https://www.linkedin.com/in/irachrist1/"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							LinkedIn
						</Link>
						<Link
							href="https://substack.com/@christiantonny"
							target="_blank"
							className="px-6 py-3 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
						>
							Substack
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


