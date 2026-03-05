"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";

export function SearchTrigger() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="px-4 py-3">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#86868b] dark:text-zinc-500" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          readOnly
          className="w-full bg-[#f5f5f7] dark:bg-zinc-800/50 border border-[#e8e8ed] dark:border-zinc-700/50 rounded-lg py-1.5 pl-8 pr-12 text-[13px] text-[#424245] dark:text-zinc-300 placeholder:text-[#aeaeb2] dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#d2d2d7] dark:focus:border-zinc-600 cursor-pointer transition-colors"
        />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[#aeaeb2] dark:text-zinc-500 bg-white dark:bg-zinc-800 border border-[#d2d2d7] dark:border-zinc-700 rounded px-1.5 py-0.5 font-sans">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
