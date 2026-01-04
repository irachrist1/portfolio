"use client";

import { useState } from "react";
import Link from "next/link";
import { CurrentEntry, getStalenessLabel, isStale } from "@/app/data/changelog";
import { ArrowUpRight, Clock, AlertCircle, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { CurrentWorkModal } from "./CurrentWorkModal";

type CurrentWorkProps = {
  entries: CurrentEntry[];
};

export function CurrentWork({ entries }: CurrentWorkProps) {
  const [selectedEntry, setSelectedEntry] = useState<CurrentEntry | null>(null);

  if (entries.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </div>
          <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            Currently Building
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entries.map((entry) => (
          <CurrentWorkCard
            key={entry.id}
            entry={entry}
            onClick={() => setSelectedEntry(entry)}
          />
        ))}
      </div>

      <CurrentWorkModal
        entry={selectedEntry}
        isOpen={!!selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </section>
  );
}

function CurrentWorkCard({
  entry,
  onClick,
}: {
  entry: CurrentEntry;
  onClick: () => void;
}) {
  const stalenessLabel = getStalenessLabel(entry);
  const stale = isStale(entry);

  return (
    <article
      onClick={onClick}
      className={`
        relative p-5 rounded-xl border transition-all duration-200 cursor-pointer group
        ${stale
          ? "border-amber-800/50 bg-amber-900/10 hover:bg-amber-900/20"
          : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/70 hover:border-zinc-700"
        }
      `}
    >
      {/* Expand icon hint */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 className="w-4 h-4 text-zinc-500" />
      </div>

      {/* Project badge and dates */}
      <div className="flex flex-col gap-1.5 mb-3">
        <div className="flex items-center justify-between">
          <div
            onClick={(e) => e.stopPropagation()}
            className="z-10"
          >
            <Link
              href={`/projects/${entry.projectSlug}`}
              className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              {entry.projectTitle}
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          {stalenessLabel && (
            <span className={`text-xs flex items-center gap-1 ${stale ? "text-amber-500" : "text-zinc-500"}`}>
              {stale ? <AlertCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {stalenessLabel}
            </span>
          )}
        </div>
        <span className="text-xs text-zinc-600">
          Started {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>

      {/* Title and description */}
      <h3 className="text-lg font-semibold text-zinc-100 mb-1">
        {entry.title}
      </h3>
      <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
        {entry.description}
      </p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-zinc-500">Progress</span>
          <span className="text-zinc-400 font-medium">{entry.progress}%</span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${entry.progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative z-10"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${entry.progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 bg-emerald-500/20 blur-sm rounded-full"
          />
        </div>
      </div>

      {/* Tasks remaining */}
      {entry.tasks.length > 0 && (
        <div className="space-y-2">
          <span className="text-xs text-zinc-500">Remaining tasks</span>
          <ul className="space-y-1.5">
            {entry.tasks.slice(0, 2).map((task, index) => (
              <li
                key={index}
                className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:border before:border-zinc-600 before:rounded-sm truncate"
              >
                {task}
              </li>
            ))}
            {entry.tasks.length > 2 && (
              <li className="text-xs text-zinc-500 pl-4">
                + {entry.tasks.length - 2} more tasks...
              </li>
            )}
          </ul>
        </div>
      )}

      {/* ETA */}
      <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between">
        <span className="text-xs text-zinc-500">Target</span>
        <span className="text-xs font-medium text-zinc-400">{entry.eta}</span>
      </div>
    </article>
  );
}

