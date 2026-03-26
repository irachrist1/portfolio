import { Mail, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { Card } from "../../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:info@spcstech.com",
		label: "Email",
		handle: "info@spcstech.com",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/irachrist1/",
		label: "LinkedIn",
		handle: "Christian Tonny",
	},
	{
		icon: <MapPin size={20} />,
		href: "#location",
		label: "Location",
		handle: "Kigali, Rwanda",
	},
];

export const dynamic = "force-static";

export default function ContactPage() {
	return (
		<div className="px-6 py-10 mx-auto max-w-3xl lg:px-8">
			<div className="mb-10">
				<h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-3">
					Contact
				</h1>
				<p className="text-zinc-400">
					Reach out by email or LinkedIn — I&apos;ll get back when I can.
				</p>
			</div>

			<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
				{socials.map((s, index) => (
					<Card key={index}>
						<Link
							href={s.href}
							target={s.label !== "Location" ? "_blank" : undefined}
							className="p-6 relative flex flex-col items-center gap-4 duration-700 group"
						>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
								{s.icon}
							</span>
							<div className="z-10 flex flex-col items-center">
								<span className="text-sm font-medium duration-150 text-zinc-200 group-hover:text-white text-center">
									{s.handle}
								</span>
								<span className="mt-1 text-xs text-center duration-1000 text-zinc-500 group-hover:text-zinc-300">
									{s.label}
								</span>
							</div>
						</Link>
					</Card>
				))}
			</div>

			<div className="mt-10">
				<Link
					href="mailto:info@spcstech.com"
					className="inline-flex px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-white transition-colors duration-200"
				>
					Send an email
				</Link>
			</div>
		</div>
	);
}
