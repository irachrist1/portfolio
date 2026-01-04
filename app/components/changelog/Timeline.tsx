"use client";

import { useState, useMemo } from "react";
import { TimelineEntry as TimelineEntryType, groupEntriesByYear, getUniqueProjects } from "@/app/data/changelog";
import { TimelineEntry } from "./TimelineEntry";
import { ProjectFilter } from "./ProjectFilter";
import { ChevronDown } from "lucide-react";

type TimelineProps = {
  entries: TimelineEntryType[];
};

export function Timeline({ entries }: TimelineProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showEarlier, setShowEarlier] = useState(false);

  // Get unique projects for filter
  const projects = useMemo(() => getUniqueProjects(), []);

  // Filter entries by selected project
  const filteredEntries = useMemo(() => {
    if (!selectedProject) return entries;
    return entries.filter((entry) => entry.projectSlug === selectedProject);
  }, [entries, selectedProject]);

  // Group entries by year
  const groupedByYear = useMemo(() => {
    return groupEntriesByYear(filteredEntries);
  }, [filteredEntries]);

  // Sort years descending
  const sortedYears = useMemo(() => {
    return Array.from(groupedByYear.keys()).sort((a, b) => b - a);
  }, [groupedByYear]);

  // Determine which years to show
  const currentYear = new Date().getFullYear();
  const recentYears = sortedYears.filter((year) => year >= currentYear - 1);
  const earlierYears = sortedYears.filter((year) => year < currentYear - 1);

  const yearsToShow = showEarlier ? sortedYears : recentYears;

  return (
    <div className="space-y-8">
      {/* Filter chips */}
      <ProjectFilter
        projects={projects}
        selectedProject={selectedProject}
        onSelect={setSelectedProject}
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-zinc-800 to-transparent" />

        {/* Year groups */}
        <div className="space-y-12">
          {yearsToShow.map((year) => {
            const yearEntries = groupedByYear.get(year) || [];

            return (
              <section key={year} className="relative">
                {/* Year header */}
                <div className="relative pl-8 mb-6">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-zinc-900 z-10" />
                  <h3 className="text-2xl font-bold text-zinc-200">{year}</h3>
                </div>

                {/* Entries for this year */}
                <div className="space-y-4">
                  {yearEntries.map((entry) => (
                    <TimelineEntry key={entry.id} entry={entry} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Show earlier button */}
        {earlierYears.length > 0 && !showEarlier && (
          <div className="relative pl-8 mt-8">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-zinc-900 z-10" />
            <button
              onClick={() => setShowEarlier(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:bg-zinc-900/70 hover:text-zinc-300 hover:border-zinc-700 transition-all duration-200"
            >
              <span>Show {earlierYears.length === 1 ? `${earlierYears[0]}` : `${earlierYears[earlierYears.length - 1]} - ${earlierYears[0]}`}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredEntries.length === 0 && (
          <div className="relative pl-8 py-12">
            <p className="text-zinc-500 text-center">No entries found for this project.</p>
          </div>
        )}
      </div>
    </div>
  );
}
