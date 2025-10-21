import React from "react";

type MarkdownProps = {
  content: string;
};

const paragraphRegex = /\n\n+/g;

export function Markdown({ content }: MarkdownProps) {
  const blocks = content.split(paragraphRegex);
  return (
    <div className="space-y-6 leading-relaxed text-zinc-700">
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-semibold text-zinc-900">
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold text-zinc-900">
              {trimmed.replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split(/\n-/).map((item) => item.replace(/^\s*-\s*/, ""));
          return (
            <ul key={index} className="list-disc space-y-2 pl-6 text-zinc-700">
              {items.map((item, liIndex) => (
                <li key={liIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split(/\n\d+\.\s*/)
            .map((item) => item.replace(/^\d+\.\s*/, ""))
            .filter(Boolean);
          return (
            <ol key={index} className="list-decimal space-y-2 pl-6 text-zinc-700">
              {items.map((item, liIndex) => (
                <li key={liIndex}>{item}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index} className="text-base text-zinc-700">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
