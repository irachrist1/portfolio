import { buildArticleCoverTheme } from "@/app/lib/article-cover-theme";

type ArticleCoverProps = {
  id: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
};

export function ArticleCover({ id, title, subtitle: _subtitle, compact = false }: ArticleCoverProps) {
  const theme = buildArticleCoverTheme(`${id}:${title}`);

  const meshBackgrounds = [
    `radial-gradient(120% 110% at 10% 15%, hsla(${theme.hueA} ${theme.saturation}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 55%), radial-gradient(115% 120% at 90% 75%, hsla(${theme.hueB} ${theme.saturation}% ${theme.lightness - 6}% / ${theme.accentAlpha}) 0%, transparent 60%), linear-gradient(155deg, hsl(230 20% 8%), hsl(235 24% 10%))`,
    `radial-gradient(130% 120% at 80% 20%, hsla(${theme.hueA} ${theme.saturation}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 58%), radial-gradient(120% 130% at 20% 85%, hsla(${theme.hueC} ${theme.saturation - 6}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 60%), linear-gradient(135deg, hsl(228 18% 9%), hsl(236 22% 11%))`,
    `radial-gradient(110% 110% at 18% 70%, hsla(${theme.hueB} ${theme.saturation}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 58%), radial-gradient(120% 120% at 84% 24%, hsla(${theme.hueC} ${theme.saturation - 4}% ${theme.lightness - 2}% / ${theme.accentAlpha}) 0%, transparent 62%), linear-gradient(160deg, hsl(230 22% 8%), hsl(240 20% 11%))`,
    `radial-gradient(125% 120% at 50% 18%, hsla(${theme.hueA} ${theme.saturation}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 56%), radial-gradient(115% 115% at 30% 85%, hsla(${theme.hueB} ${theme.saturation - 8}% ${theme.lightness}% / ${theme.accentAlpha}) 0%, transparent 58%), linear-gradient(145deg, hsl(228 18% 9%), hsl(238 22% 10%))`,
  ] as const;

  const ringColor = `hsla(${theme.hueA} ${theme.saturation}% ${theme.lightness}% / 0.28)`;
  const grainOpacity = theme.grainAlpha;

  return (
    <div
      className={[
        "relative overflow-hidden border-b border-zinc-800/80",
        compact ? "h-44" : "h-64 md:h-72 rounded-xl border border-zinc-800/80",
      ].join(" ")}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: meshBackgrounds[theme.meshVariant] }}
      />
      <div
        className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,#ffffff26_0%,transparent_44%),radial-gradient(circle_at_80%_70%,#ffffff1f_0%,transparent_38%)]"
        style={{ opacity: grainOpacity }}
      />

      <div
        className={[
          "relative z-10 h-full p-5 md:p-7",
          "flex flex-col justify-between",
          "ring-1",
        ].join(" ")}
        style={{ boxShadow: `inset 0 0 0 1px ${ringColor}` }}
      >
        <div className="space-y-2">
          <h3
            className={[
              "font-bold text-zinc-100 leading-tight",
              compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
