import { Navigation } from "../components/nav";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import Link from "next/link";

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

export const dynamic = "force-static";

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
