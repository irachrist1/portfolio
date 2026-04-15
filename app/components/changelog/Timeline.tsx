"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TimelineEntry as TimelineEntryType,
  ReleaseEntry,
  UpdateEntry,
} from "@/app/data/changelog";
import { ChevronDown } from "lucide-react";

type TimelineProps = {
  entries: TimelineEntryType[];
};

const INITIAL_VISIBLE = 12;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatYear(dateStr: string) {
  return new Date(dateStr).getFullYear();
}

export function Timeline({ entries }: TimelineProps) {
  const [showAll, setShowAll] = useState(false);

  const sorted = useMemo(
    () =>
      [...entries].sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime() ||
          a.id.localeCompare(b.id)
      ),
    [entries]
  );

  const visible = showAll ? sorted : sorted.slice(0, INITIAL_VISIBLE);
  const hidden = sorted.length - INITIAL_VISIBLE;

  // Group by year for quiet separators
  let lastYear: number | null = null;

  return (
    <section>
      <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-5">
        Timeline
      </span>

      <div className="space-y-0">
        {visible.map((entry, idx) => {
          const year = formatYear(entry.date);
          const showYearSep = year !== lastYear;
          lastYear = year;

          return (
            <div key={entry.id}>
              {showYearSep && idx > 0 && (
                <div className="flex items-center gap-3 py-3">
                  <span className="text-[11px] text-zinc-700 font-mono">{year}</span>
                  <div className="flex-1 h-px bg-zinc-800/50" />
                </div>
              )}
              <FeedRow entry={entry} />
            </div>
          );
        })}
      </div>

      {!showAll && hidden > 0 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <ChevronDown className="w-3.5 h-3.5" />
          {hidden} more entries
        </button>
      )}
    </section>
  );
}

function FeedRow({ entry }: { entry: TimelineEntryType }) {
  const [expanded, setExpanded] = useState(false);

  const badge =
    entry.type === "update" ? (
      <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 shrink-0">
        {(entry as UpdateEntry).version}
      </span>
    ) : (
      <span className="text-[10px] font-mono text-emerald-600 bg-emerald-950/30 border border-emerald-900/40 rounded px-1.5 py-0.5 shrink-0">
        release
      </span>
    );

  const hasDetail =
    entry.type === "release"
      ? !!(entry as ReleaseEntry).description || !!(entry as ReleaseEntry).link
      : !!(entry as UpdateEntry).description ||
        ((entry as UpdateEntry).changes?.length ?? 0) > 0;

  return (
    <div
      className="group border-b border-zinc-800/40 last:border-0"
    >
      <button
        onClick={() => hasDetail && setExpanded((v) => !v)}
        disabled={!hasDetail}
        className={`w-full flex items-center gap-3 py-2.5 text-left ${hasDetail ? "cursor-pointer" : "cursor-default"}`}
      >
        {/* Date — fixed width, quiet */}
        <span className="text-[11px] text-zinc-600 font-mono w-12 shrink-0">
          {formatDate(entry.date)}
        </span>

        {/* Badge */}
        {badge}

        {/* Title */}
        <span className="flex-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors truncate">
          {entry.title}
        </span>

        {/* Project */}
        <span className="text-[11px] text-zinc-600 shrink-0 hidden sm:block">
          {entry.projectTitle}
        </span>

        {hasDetail && (
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.15 }}
            className="shrink-0"
          >
            <ChevronDown className="w-3.5 h-3.5 text-zinc-700" />
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {expanded && hasDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-28 pr-4">
              {entry.type === "release" && (entry as ReleaseEntry).description && (
                <p className="text-xs text-zinc-500 leading-relaxed mb-2">
                  {(entry as ReleaseEntry).description}
                </p>
              )}
              {entry.type === "update" && (entry as UpdateEntry).description && (
                <p className="text-xs text-zinc-500 leading-relaxed mb-2">
                  {(entry as UpdateEntry).description}
                </p>
              )}
              {entry.type === "update" &&
                (entry as UpdateEntry).changes?.length > 0 && (
                  <ul className="space-y-0.5">
                    {(entry as UpdateEntry).changes.slice(0, 4).map((c, i) => (
                      <li key={i} className="text-xs text-zinc-600 flex gap-2">
                        <span className="text-zinc-700 shrink-0">—</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              {entry.type === "release" && (entry as ReleaseEntry).link && (
                <Link
                  href={(entry as ReleaseEntry).link!}
                  target={
                    (entry as ReleaseEntry).link!.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    (entry as ReleaseEntry).link!.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View →
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
