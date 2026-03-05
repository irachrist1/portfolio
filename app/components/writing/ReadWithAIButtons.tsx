"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  buildReadWithAIUrl,
  getReadWithAIProviders,
  type ReadWithAIProvider,
} from "@/app/lib/read-with-ai";

function ProviderIcon({ provider }: { provider: ReadWithAIProvider }) {
  const iconClasses =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border";

  if (provider === "chatgpt") {
    return (
      <span
        aria-hidden="true"
        className={[
          iconClasses,
          "border-emerald-400/60 bg-gradient-to-br from-emerald-500/25 via-emerald-400/20 to-emerald-300/15",
        ].join(" ")}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-emerald-100">
          <path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" />
        </svg>
      </span>
    );
  }

  if (provider === "claude") {
    return (
      <span
        aria-hidden="true"
        className={[
          iconClasses,
          "border-amber-400/70 bg-gradient-to-br from-amber-500/25 via-amber-400/20 to-amber-300/15",
        ].join(" ")}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-amber-50">
          <path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" />
        </svg>
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={[
        iconClasses,
        "border-sky-400/70 bg-gradient-to-br from-sky-500/25 via-sky-400/20 to-sky-300/15",
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-sky-50">
        <path d="M22.398 7.09h-2.31V.068l-7.51 6.354V.158h-1.156v6.196L4.49 0v7.09H1.602v10.397H4.49V24l6.933-6.36v6.201h1.155v-6.047l6.932 6.181v-6.488h2.888zm-3.466-4.531v4.53h-5.355zm-13.286.067l4.869 4.464h-4.87zM2.758 16.332V8.245h7.847L4.49 14.36v1.972zm2.888 5.04v-6.534l5.776-5.776v7.011zm12.708.025l-5.776-5.15V9.061l5.776 5.776zm2.889-5.065H19.51V14.36l-6.115-6.115h7.848z" />
      </svg>
    </span>
  );
}

type Props = {
  prefillPrompt: string;
  fullPrompt: string;
};

export function ReadWithAIButtons({ prefillPrompt, fullPrompt }: Props) {
  const [notice, setNotice] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showNotice = useCallback((message: string) => {
    setNotice(message);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setNotice(null);
      timeoutRef.current = null;
    }, 2500);
  }, []);

  const handleProviderClick = useCallback(
    async (provider: ReadWithAIProvider) => {
      const targetUrl = buildReadWithAIUrl(provider, prefillPrompt);

      try {
        await navigator.clipboard.writeText(fullPrompt);
        showNotice("Full prompt copied. Paste it if the provider cannot load the article directly.");
      } catch (_error) {
        showNotice("Couldn't copy prompt automatically.");
      }

      const link = document.createElement("a");
      link.href = targetUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    [prefillPrompt, fullPrompt, showNotice]
  );

  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap items-center gap-2.5">
        {getReadWithAIProviders().map((item) => (
          <button
            key={item.provider}
            type="button"
            onClick={() => handleProviderClick(item.provider)}
            className="group/ai px-2.5 py-1.5 text-sm font-medium text-zinc-100 bg-zinc-900/60 border border-zinc-700/80 rounded-full hover:bg-zinc-800/80 transition-all duration-200 inline-flex items-center gap-0"
          >
            <ProviderIcon provider={item.provider} />
            <span className="max-w-0 overflow-hidden opacity-0 group-hover/ai:max-w-[80px] group-hover/ai:opacity-100 group-hover/ai:ml-2 transition-all duration-300 ease-out whitespace-nowrap text-xs">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {notice && <p className="text-xs text-zinc-400">{notice}</p>}
    </div>
  );
}
