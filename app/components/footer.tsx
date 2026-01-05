"use client";
import Link from "next/link";
import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";

const quickLinks = [
	{ href: "/projects", label: "Projects" },
	{ href: "/changelog", label: "Changelog" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

const socialLinks = [
	{ href: "https://github.com/irachrist1", label: "GitHub", icon: Github },
	{ href: "https://linkedin.com/in/irachrist1", label: "LinkedIn", icon: Linkedin },
	{ href: "https://x.com/irachrist01", label: "X", icon: Twitter },
	{ href: "mailto:ctonny111@gmail.com", label: "Email", icon: Mail },
];

export const Footer: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="border-t border-zinc-800/50 bg-transparent">
			<div className="px-6 py-12 md:py-16 mx-auto max-w-7xl lg:px-8">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
					{/* Brand / Description */}
					<div className="md:col-span-1">
						<Link href="/" className="text-xl font-bold text-zinc-100 hover:text-white transition-colors">
							Christian Tonny
						</Link>
						<p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xs">
							Software Engineer & AI Implementation Consultant building tools that deliver measurable business impact.
						</p>
					</div>

					{/* Quick Links */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
							Navigation
						</h3>
						<nav className="flex flex-col gap-2">
							{quickLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors w-fit"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Social Links */}
					<div className="md:col-span-1">
						<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider mb-4">
							Connect
						</h3>
						<div className="flex gap-4">
							{socialLinks.map((link) => {
								const Icon = link.icon;
								return (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg transition-colors"
										aria-label={link.label}
									>
										<Icon className="w-5 h-5" />
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-zinc-500">
						{new Date().getFullYear()} Christian Tonny. All rights reserved.
					</p>
					
					{/* Back to Top */}
					<button
						onClick={scrollToTop}
						className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors group"
					>
						<span>Back to top</span>
						<ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</footer>
	);
};
