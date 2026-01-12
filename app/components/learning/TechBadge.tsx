type TechBadgeProps = {
    name: string;
    type?: "language" | "framework" | "tool";
};

export function TechBadge({ name, type = "framework" }: TechBadgeProps) {
    const colors = {
        language: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        framework: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        tool: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border ${colors[type]} hover:scale-105 transition-transform cursor-default`}
        >
            {name}
        </span>
    );
}
