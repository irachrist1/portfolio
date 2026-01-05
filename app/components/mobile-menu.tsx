"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ href: "/projects", label: "Projects" },
	{ href: "/changelog", label: "Changelog" },
	{ href: "/about", label: "About" },
	{ href: "/skills", label: "Skills" },
	{ href: "/writing", label: "Writing" },
	{ href: "/contact", label: "Contact" },
];

export const MobileMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden fixed top-6 right-6 z-50">
			<button
				className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors w-10 h-10 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				<AnimatePresence mode="wait" initial={false}>
					{isOpen ? (
						<motion.div
							key="close"
							initial={{ opacity: 0, rotate: -90 }}
							animate={{ opacity: 1, rotate: 0 }}
							exit={{ opacity: 0, rotate: 90 }}
							transition={{ duration: 0.2 }}
						>
							<X className="w-6 h-6" />
						</motion.div>
					) : (
						<motion.div
							key="menu"
							initial={{ opacity: 0, rotate: 90 }}
							animate={{ opacity: 1, rotate: 0 }}
							exit={{ opacity: 0, rotate: -90 }}
							transition={{ duration: 0.2 }}
						>
							<Menu className="w-6 h-6" />
						</motion.div>
					)}
				</AnimatePresence>
			</button>

			{/* Mobile Dropdown Menu */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop to close menu */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-40 bg-black/20"
							onClick={() => setIsOpen(false)}
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: -10 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: -10 }}
							transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
							className="absolute right-0 top-full mt-2 w-48 z-50 rounded-xl border border-zinc-700/50 shadow-2xl overflow-hidden"
							style={{ 
								backgroundColor: 'rgba(24, 24, 27, 0.85)',
								backdropFilter: 'blur(24px) saturate(180%)',
								WebkitBackdropFilter: 'blur(24px) saturate(180%)'
							}}
						>
							<nav className="flex flex-col py-2">
								{navLinks.map((link, index) => (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.03, duration: 0.2 }}
									>
										<Link
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="block px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700/50 transition-colors"
										>
											{link.label}
										</Link>
									</motion.div>
								))}
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};
