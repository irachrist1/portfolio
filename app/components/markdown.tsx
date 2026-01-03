"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

type MarkdownProps = {
  content: string;
  className?: string;
};

const components: Partial<Components> = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-zinc-100 mt-10 mb-4 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4 pb-2 border-b border-zinc-800">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-zinc-200 mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-zinc-300 mt-4 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-zinc-400 leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-zinc-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-zinc-400">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-zinc-400 leading-relaxed">
      {children}
    </li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors duration-200"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-200">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-zinc-300">
      {children}
    </em>
  ),
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-emerald-400 text-sm font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 mb-4 bg-zinc-900/50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="border-zinc-800 my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-zinc-800 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-800">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left text-zinc-200 font-semibold border-b border-zinc-700">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-zinc-400 border-b border-zinc-800">
      {children}
    </td>
  ),
  // Task list items (checkboxes)
  input: ({ type, checked }) => {
    if (type === "checkbox") {
      return (
        <span className={`inline-flex items-center justify-center w-4 h-4 mr-2 rounded border ${checked
            ? "bg-emerald-500 border-emerald-500 text-white"
            : "border-zinc-600 bg-zinc-800"
          }`}>
          {checked && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </span>
      );
    }
    return <input type={type} checked={checked} readOnly />;
  },
};

export function Markdown({ content, className = "" }: MarkdownProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
