"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TimelineEntry as TimelineEntryType, ReleaseEntry, UpdateEntry } from "@/app/data/changelog";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type TimelineEntryProps = {
  entry: TimelineEntryType;
};

export function TimelineEntry({ entry }: TimelineEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (entry.type === "release") {
    return (
      <ReleaseEntryCard
        entry={entry}
        formattedDate={formattedDate}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
    );
  }

  return (
    <UpdateEntryCard
      entry={entry}
      formattedDate={formattedDate}
      isExpanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    />
  );
}

// Release entries - larger visual treatment
function ReleaseEntryCard({
  entry,
  formattedDate,
  isExpanded,
  onToggle,
}: {
  entry: ReleaseEntry;
  formattedDate: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative pl-8 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#1d1d1f] dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-900 z-10" />

      {/* Card */}
      <article
        className={`
          p-5 rounded-xl border transition-all duration-200 cursor-pointer
          ${isExpanded
            ? "border-zinc-700 bg-zinc-900/70"
            : "border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700"
          }
        `}
        onClick={onToggle}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            {/* Date and project */}
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs font-medium text-zinc-500">
                {formattedDate}
              </time>
              <span className="text-zinc-700">|</span>
              <span className="text-xs text-zinc-500">{entry.projectTitle}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {entry.title}
            </h3>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1"
          >
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </motion.div>
        </div>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {entry.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description - always visible but truncated when collapsed */}
        <p className={`text-sm text-zinc-400 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
          {entry.description}
        </p>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {entry.link && (
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <Link
                    href={entry.link}
                    target={entry.link.startsWith("http") ? "_blank" : undefined}
                    rel={entry.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-100 hover:text-white transition-colors group/link"
                  >
                    {entry.link.startsWith("http") ? "View on GitHub" : "View project"}
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </div>
  );
}

// Update entries - compact visual treatment
function UpdateEntryCard({
  entry,
  formattedDate,
  isExpanded,
  onToggle,
}: {
  entry: UpdateEntry;
  formattedDate: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative pl-8 group">
      {/* Timeline dot - smaller for updates */}
      <div className="absolute left-0.5 top-2.5 w-2 h-2 rounded-full bg-[#86868b] dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-900 z-10" />

      {/* Card */}
      <article
        className={`
          p-4 rounded-lg border transition-all duration-200 cursor-pointer
          ${isExpanded
            ? "border-zinc-700 bg-zinc-900/50"
            : "border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-800"
          }
        `}
        onClick={onToggle}
      >
        {/* Header row - more compact */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Version badge */}
            <span className="px-2 py-0.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
              {entry.version}
            </span>

            {/* Project and date */}
            <span className="text-sm text-zinc-300 truncate">{entry.projectTitle}</span>
            <span className="text-xs text-zinc-600 hidden sm:inline">{formattedDate}</span>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </motion.div>
        </div>

        {/* Title - shown inline when collapsed */}
        {!isExpanded && (
          <p className="mt-2 text-sm text-zinc-500 truncate">{entry.title}</p>
        )}

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-zinc-800/50">
                {/* Title and description */}
                <h4 className="text-sm font-medium text-zinc-200 mb-1">
                  {entry.title}
                </h4>
                <p className="text-sm text-zinc-500 mb-3">
                  {entry.description}
                </p>

                {/* Changes list */}
                <ul className="space-y-1.5">
                  {entry.changes.map((change, index) => (
                    <li
                      key={index}
                      className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-zinc-600 before:rounded-full"
                    >
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </div>
  );
}
