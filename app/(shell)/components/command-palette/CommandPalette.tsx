"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, FolderOpen, Home, Search } from "lucide-react";
import type {
  CommandPaletteProjectItem,
  CommandPaletteWritingItem,
} from "./CommandPaletteProvider";

type ResultType = "writing" | "projects" | "pages";

type PaletteResult = {
  id: string;
  title: string;
  href: string;
  subtitle: string;
  type: ResultType;
  score: number;
};

type ResultGroup = {
  type: ResultType;
  label: string;
  items: PaletteResult[];
};

const PAGE_ITEMS = [
  { title: "Home", href: "/", subtitle: "Main landing page" },
  { title: "Writing", href: "/writing", subtitle: "Articles and newsletters" },
  { title: "Projects", href: "/projects", subtitle: "Project archive" },
  { title: "Changelog", href: "/changelog", subtitle: "Recent updates" },
  { title: "About", href: "/about", subtitle: "Background and journey" },
  { title: "Skills", href: "/skills", subtitle: "Technical capabilities" },
  { title: "Contact", href: "/contact", subtitle: "Ways to reach out" },
] as const;

const EMPTY_QUERY_LIMIT: Record<ResultType, number> = {
  writing: 6,
  projects: 6,
  pages: PAGE_ITEMS.length,
};

function getMatchScore(query: string, values: string[]) {
  if (!query) {
    return 1;
  }

  let best = 0;

  values.forEach((value, index) => {
    const normalized = value.toLowerCase();

    if (normalized.startsWith(query)) {
      best = Math.max(best, 6 - index);
      return;
    }

    if (normalized.includes(query)) {
      best = Math.max(best, 3 - index * 0.2);
    }
  });

  return best;
}

function sortResults(a: PaletteResult, b: PaletteResult) {
  if (b.score !== a.score) {
    return b.score - a.score;
  }

  return a.title.localeCompare(b.title);
}

function filterResults({
  type,
  query,
  items,
}: {
  type: ResultType;
  query: string;
  items: PaletteResult[];
}) {
  const filtered = items
    .map((item) => {
      const score = getMatchScore(query, [item.title, item.subtitle, item.href]);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort(sortResults);

  if (!query) {
    return filtered.slice(0, EMPTY_QUERY_LIMIT[type]);
  }

  return filtered;
}

export function CommandPalette({
  isOpen,
  onClose,
  writing,
  projects,
}: {
  isOpen: boolean;
  onClose: () => void;
  writing: CommandPaletteWritingItem[];
  projects: CommandPaletteProjectItem[];
}) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  const groups = useMemo<ResultGroup[]>(() => {
    const trimmedQuery = query.trim().toLowerCase();

    const writingResults = filterResults({
      type: "writing",
      query: trimmedQuery,
      items: writing.map((article) => ({
        id: `writing-${article.slug}`,
        title: article.title,
        href: `/writing/${article.slug}`,
        subtitle: article.excerpt,
        type: "writing",
        score: 0,
      })),
    });

    const projectResults = filterResults({
      type: "projects",
      query: trimmedQuery,
      items: projects.map((project) => ({
        id: `project-${project.slug}`,
        title: project.title,
        href: `/projects/${project.slug}`,
        subtitle: project.description,
        type: "projects",
        score: 0,
      })),
    });

    const pageResults = filterResults({
      type: "pages",
      query: trimmedQuery,
      items: PAGE_ITEMS.map((page) => ({
        id: `page-${page.href}`,
        title: page.title,
        href: page.href,
        subtitle: page.subtitle,
        type: "pages",
        score: 0,
      })),
    });

    const allGroups: ResultGroup[] = [
      { type: "writing", label: "Writing", items: writingResults },
      { type: "projects", label: "Projects", items: projectResults },
      { type: "pages", label: "Pages", items: pageResults },
    ];

    return allGroups.filter((group) => group.items.length > 0);
  }, [projects, query, writing]);

  const flatResults = useMemo(
    () => groups.flatMap((group) => group.items),
    [groups]
  );
  const resultIndexById = useMemo(() => {
    const map = new Map<string, number>();
    flatResults.forEach((result, index) => {
      map.set(result.id, index);
    });
    return map;
  }, [flatResults]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setQuery("");
    setActiveIndex(0);

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (flatResults.length === 0) {
      setActiveIndex(-1);
      return;
    }

    if (activeIndex >= flatResults.length || activeIndex < 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, flatResults.length]);

  useEffect(() => {
    if (!isOpen || activeIndex < 0) {
      return;
    }

    const element = resultRefs.current.get(activeIndex);
    element?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, isOpen]);

  const moveSelection = (direction: 1 | -1) => {
    if (flatResults.length === 0) {
      return;
    }

    setActiveIndex((current) => {
      if (current < 0) {
        return 0;
      }

      const next = current + direction;

      if (next < 0) {
        return flatResults.length - 1;
      }

      if (next >= flatResults.length) {
        return 0;
      }

      return next;
    });
  };

  const navigateToResult = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveSelection(1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveSelection(-1);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex < 0 || !flatResults[activeIndex]) {
        return;
      }
      navigateToResult(flatResults[activeIndex].href);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] p-4 md:p-6"
          onClick={onClose}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(8, 8, 10, 0.62)",
              backdropFilter: "blur(34px) saturate(165%)",
              WebkitBackdropFilter: "blur(34px) saturate(165%)",
            }}
          />

          <div className="relative mx-auto flex h-full w-full max-w-2xl items-start justify-center pt-[10vh]">
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-label="Search"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.8 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-100 shadow-[0_25px_90px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="relative border-b border-zinc-800 px-4 py-3">
                <Search className="pointer-events-none absolute left-7 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search writing, projects, and pages..."
                  className="h-10 w-full rounded-lg bg-zinc-950/60 pl-9 pr-14 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none ring-1 ring-zinc-800 focus:ring-zinc-600"
                />
                <kbd className="absolute right-7 top-1/2 -translate-y-1/2 rounded border border-zinc-700 bg-zinc-800/80 px-1.5 py-0.5 text-[10px] text-zinc-400">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto py-2">
                {flatResults.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-zinc-500">
                    No results found.
                  </div>
                ) : (
                  groups.map((group) => {
                    const GroupIcon =
                      group.type === "writing"
                        ? FileText
                        : group.type === "projects"
                          ? FolderOpen
                          : Home;

                    return (
                      <div key={group.type} className="px-2 pb-2">
                        <div className="px-2 py-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                          <span className="inline-flex items-center gap-2">
                            <GroupIcon className="h-3.5 w-3.5" />
                            {group.label}
                          </span>
                        </div>

                        {group.items.map((item) => {
                          const resultIndex = resultIndexById.get(item.id) ?? -1;
                          const isActive = resultIndex === activeIndex;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              ref={(element) => {
                                if (resultIndex < 0) {
                                  return;
                                }
                                if (!element) {
                                  resultRefs.current.delete(resultIndex);
                                  return;
                                }
                                resultRefs.current.set(resultIndex, element);
                              }}
                              onMouseEnter={() => setActiveIndex(resultIndex)}
                              onClick={() => navigateToResult(item.href)}
                              className={`w-full rounded-lg px-3 py-2 text-left transition-colors ${
                                isActive
                                  ? "bg-zinc-800 text-zinc-100"
                                  : "text-zinc-300 hover:bg-zinc-800/70"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <p className="truncate text-sm font-medium">{item.title}</p>
                                  <p className="mt-1 truncate text-xs text-zinc-500">{item.subtitle}</p>
                                </div>
                                <span className="shrink-0 text-xs text-zinc-500">{item.href}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                )}
              </div>
            </motion.section>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
