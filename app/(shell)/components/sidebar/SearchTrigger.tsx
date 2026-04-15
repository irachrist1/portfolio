"use client";

import { Search } from "lucide-react";
import { useCommandPalette } from "../command-palette/CommandPaletteProvider";

export function SearchTrigger({ compact }: { compact?: boolean } = {}) {
  const { open } = useCommandPalette();

  if (compact) {
    return (
      <button
        type="button"
        onClick={open}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-[#86868b] dark:text-zinc-500 hover:text-[#1d1d1f] dark:hover:text-zinc-300 hover:bg-[#f5f5f7] dark:hover:bg-zinc-800 transition-colors"
        aria-label="Open search"
      >
        <Search className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="px-4 py-3">
      <button
        type="button"
        onClick={open}
        className="relative flex w-full items-center bg-[#f5f5f7] dark:bg-zinc-800/50 border border-[#e8e8ed] dark:border-zinc-700/50 rounded-lg py-1.5 pl-8 pr-16 text-[13px] text-[#424245] dark:text-zinc-300 hover:border-[#d2d2d7] dark:hover:border-zinc-600 transition-colors"
        aria-label="Open search"
      >
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#86868b] dark:text-zinc-500" />
        <span className="text-[#aeaeb2] dark:text-zinc-500">Search...</span>
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#aeaeb2] dark:text-zinc-500 bg-white dark:bg-zinc-800 border border-[#d2d2d7] dark:border-zinc-700 rounded px-1.5 py-0.5 font-sans">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}
