"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CurrentEntry, getStalenessLabel, isStale } from "@/app/data/changelog";
import { AlertCircle } from "lucide-react";

type CurrentWorkProps = {
  entries: CurrentEntry[];
};

export function CurrentWork({ entries }: CurrentWorkProps) {
  if (entries.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-2 mb-5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs text-zinc-500 uppercase tracking-wider">
          Building now
        </span>
      </div>

      <div className="space-y-4">
        {entries.map((entry, idx) => (
          <CurrentWorkRow key={entry.id} entry={entry} delay={idx * 0.06} />
        ))}
      </div>
    </section>
  );
}

function CurrentWorkRow({
  entry,
  delay,
}: {
  entry: CurrentEntry;
  delay: number;
}) {
  const stale = isStale(entry);
  const staleness = getStalenessLabel(entry);

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-2 min-w-0">
          <Link
            href={`/projects/${entry.projectSlug}`}
            className="text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors shrink-0"
          >
            {entry.projectTitle}
          </Link>
          <span className="text-sm text-zinc-600 truncate">{entry.title}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {stale && staleness && (
            <span className="flex items-center gap-1 text-xs text-amber-500">
              <AlertCircle className="w-3 h-3" />
              {staleness}
            </span>
          )}
          <span className="text-xs text-zinc-600 font-mono">{entry.progress}%</span>
        </div>
      </div>

      {/* Progress bar — thin, understated */}
      <div className="h-px bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${entry.progress}%` }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${stale ? "bg-amber-600/50" : "bg-emerald-600/50"}`}
        />
      </div>
    </motion.div>
  );
}
