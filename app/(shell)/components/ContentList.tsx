import Link from "next/link";

export type ContentListItem = {
  href: string;
  title: string;
  subtitle?: string;
  date?: string;
};

export function ContentList({
  title,
  items,
}: {
  title: string;
  items: ContentListItem[];
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-5 border-b border-zinc-800">
        <h2 className="text-sm font-semibold text-zinc-300">{title}</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-3 border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
          >
            <p className="text-sm text-zinc-200 line-clamp-2">{item.title}</p>
            {item.date && (
              <p className="text-xs text-zinc-500 mt-1">{item.date}</p>
            )}
            {item.subtitle && (
              <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                {item.subtitle}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
