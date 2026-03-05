"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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
