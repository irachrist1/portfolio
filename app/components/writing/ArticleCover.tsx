type ArticleCoverProps = {
  id: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
};

const VARIANTS = [
  {
    shell: "from-zinc-900 via-zinc-900 to-zinc-950",
    accent: "from-sky-400/20 to-cyan-300/10",
    ring: "ring-sky-300/20",
  },
  {
    shell: "from-zinc-900 via-zinc-900 to-zinc-950",
    accent: "from-emerald-300/20 to-teal-300/10",
    ring: "ring-emerald-300/20",
  },
  {
    shell: "from-zinc-900 via-zinc-900 to-zinc-950",
    accent: "from-amber-300/20 to-yellow-300/10",
    ring: "ring-amber-300/20",
  },
] as const;

export function ArticleCover({ id, title, subtitle, compact = false }: ArticleCoverProps) {
  const numericId = Number.parseInt(id, 10);
  const variant = Number.isNaN(numericId)
    ? VARIANTS[0]
    : VARIANTS[Math.abs(numericId) % VARIANTS.length];

  return (
    <div
      className={[
        "relative overflow-hidden border-b border-zinc-800/80",
        compact ? "h-44" : "h-64 md:h-72 rounded-xl border border-zinc-800/80",
      ].join(" ")}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${variant.shell}`} />
      <div className={`absolute inset-0 bg-gradient-to-tr ${variant.accent}`} />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#ffffff20_0%,transparent_45%),radial-gradient(circle_at_80%_70%,#ffffff16_0%,transparent_40%)]" />

      <div
        className={[
          "relative z-10 h-full p-5 md:p-7",
          "flex flex-col justify-between",
          `ring-1 ${variant.ring}`,
        ].join(" ")}
      >
        <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
          Issue #{id}
        </div>
        <div className="space-y-2">
          <h3
            className={[
              "font-bold text-zinc-100 leading-tight",
              compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl",
            ].join(" ")}
          >
            {title}
          </h3>
          {subtitle ? (
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
