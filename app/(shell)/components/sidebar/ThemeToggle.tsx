"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle({ compact }: { compact?: boolean } = {}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (compact) {
    if (!mounted) return <div className="w-8 h-8" />;

    const nextTheme =
      theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
    const icon =
      theme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : theme === "light" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Monitor className="w-4 h-4" />
      );

    return (
      <button
        onClick={() => setTheme(nextTheme)}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-[#86868b] dark:text-zinc-500 hover:text-[#1d1d1f] dark:hover:text-zinc-300 hover:bg-[#f5f5f7] dark:hover:bg-zinc-800 transition-colors"
        aria-label="Toggle theme"
      >
        {icon}
      </button>
    );
  }

  const options = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "Auto" },
  ] as const;

  if (!mounted) {
    return (
      <div className="flex items-center gap-0.5 bg-[#e8e8ed] dark:bg-zinc-800/50 rounded-lg p-0.5">
        {options.map((opt) => (
          <div
            key={opt.value}
            className="flex-1 text-[11px] py-1.5 rounded-md text-center text-[#86868b] dark:text-zinc-500"
          >
            {opt.label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 bg-[#e8e8ed] dark:bg-zinc-800/50 rounded-lg p-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          className={`flex-1 text-[11px] py-1.5 rounded-md transition-all duration-200 ${
            theme === opt.value
              ? "bg-white dark:bg-zinc-700 text-[#1d1d1f] dark:text-zinc-200 font-medium shadow-sm"
              : "text-[#86868b] dark:text-zinc-500 hover:text-[#6e6e73] dark:hover:text-zinc-400"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
