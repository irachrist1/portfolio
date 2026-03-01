"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  buildReadWithAIUrl,
  getReadWithAIProviders,
  type ReadWithAIProvider,
} from "@/app/lib/read-with-ai";

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
            className="px-3.5 py-2 text-sm font-medium text-zinc-100 bg-zinc-800 border border-zinc-700 rounded-md hover:bg-zinc-700 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-zinc-500">
        Full article prompt is copied automatically when possible.
      </p>

      {notice && <p className="text-xs text-zinc-400">{notice}</p>}
    </div>
  );
}
