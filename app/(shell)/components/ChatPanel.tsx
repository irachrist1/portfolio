"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { X, ArrowUp, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { WidgetType } from "@/app/lib/ai-knowledge";

const WIDGET_MARKER = "__WIDGET__:";

const PROMPT_CHIPS = [
  "Tell me about his writing",
  "What is Daylens?",
  "What's he working on now?",
];

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  widget?: WidgetType | null;
};

// ── Tilt wrapper ──────────────────────────────────────────────────────────────

function TiltSurface({
  children,
  className,
  maxAngle = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * maxAngle * 2);
    rotateX.set(-y * maxAngle * 2);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Outer wrapper sets perspective on the parent so transforms don't clip.
  // The padding + negative margin give the card breathing room against any
  // overflow:auto ancestor (the chat scroll container) without shifting layout.
  return (
    <div style={{ perspective: "800px", padding: "10px", margin: "-10px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Streaming text — word-by-word float animation ─────────────────────────────

function stripMarkdownSymbols(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\+\+(.+?)\+\+/g, "$1");
}

function StreamingText({ content }: { content: string }) {
  const words = stripMarkdownSymbols(content).split(/(\s+)/);
  return (
    <span>
      {words.map((chunk, i) =>
        chunk.trim() ? (
          <motion.span
            key={`${chunk}-${i}`}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            style={{ display: "inline" }}
          >
            {chunk}
          </motion.span>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </span>
  );
}

// ── Widget Renderers ──────────────────────────────────────────────────────────

function ArticleListWidget({
  articles,
}: {
  articles: { title: string; slug: string; publishedAt: string | null }[];
}) {
  return (
    <TiltSurface maxAngle={6}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="mt-3 rounded-xl border border-zinc-700 bg-zinc-900/60 overflow-hidden"
      >
        {articles.map((a, i) => (
          <Link
            key={a.slug}
            href={`/writing/${a.slug}`}
            className={`flex items-baseline justify-between gap-3 px-4 py-3 hover:bg-zinc-800/60 border-l-2 border-l-transparent hover:border-l-zinc-600 transition-colors ${
              i < articles.length - 1 ? "border-b border-zinc-700/60" : ""
            }`}
          >
            <span className="text-sm text-zinc-100 leading-snug">{a.title}</span>
            {a.publishedAt && (
              <span className="text-xs text-zinc-600 shrink-0">
                {new Date(a.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            )}
          </Link>
        ))}
      </motion.div>
    </TiltSurface>
  );
}

function ProjectCardWidget({
  slug,
  title,
  description,
  tagline,
  links,
}: {
  slug: string;
  title: string;
  description: string;
  tagline?: string;
  links?: { label: string; href: string }[];
}) {
  return (
    <TiltSurface maxAngle={6}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="mt-3 rounded-xl border border-zinc-700 border-l-2 border-l-zinc-500 bg-zinc-900/60 p-4"
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
            {tagline && <p className="text-xs text-zinc-400 mt-0.5">{tagline}</p>}
          </div>
          <Link
            href={`/projects/${slug}`}
            className="shrink-0 text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed">{description}</p>
        {links && links.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {links.slice(0, 3).map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700 text-xs text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-colors flex items-center gap-1"
              >
                {l.label}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </TiltSurface>
  );
}

function ContactCardWidget({
  email,
  linkedin,
  github,
  location,
}: {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}) {
  return (
    <TiltSurface maxAngle={6}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="mt-3 rounded-xl border border-zinc-700 bg-zinc-900/60 p-4 space-y-2"
      >
        <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-[13px] font-medium text-zinc-300 mb-3">
          CT
        </div>
        <p className="text-sm font-medium text-zinc-200 -mt-1 mb-3">Christian Tonny</p>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-sm text-zinc-200 hover:text-zinc-100 transition-colors"
        >
          {email}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          LinkedIn <ExternalLink className="w-3 h-3" />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          GitHub <ExternalLink className="w-3 h-3" />
        </a>
        <p className="text-xs text-zinc-500 pt-1">{location}</p>
      </motion.div>
    </TiltSurface>
  );
}

function NowCardWidget({
  items,
}: {
  items: {
    title: string;
    description: string;
    progress: number;
    projectTitle: string;
  }[];
}) {
  return (
    <TiltSurface maxAngle={6}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="mt-3 rounded-xl border border-zinc-700 bg-zinc-800/50 p-3 space-y-2"
      >
        {items.map((item, i) => (
          <div
            key={item.title}
            className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-4 py-4"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[15px] font-medium text-zinc-100">
                {item.projectTitle}
              </span>
              <span className="text-xs text-zinc-300">{item.progress}%</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-2">
              {item.description}
            </p>
            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.progress}%` }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  delay: 0.1 * i,
                }}
                className="h-full bg-zinc-300 rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </TiltSurface>
  );
}

function WidgetRenderer({ widget }: { widget: WidgetType }) {
  if (widget.type === "article-list") return <ArticleListWidget {...widget.props} />;
  if (widget.type === "project-card") return <ProjectCardWidget {...widget.props} />;
  if (widget.type === "contact-card") return <ContactCardWidget {...widget.props} />;
  if (widget.type === "now-card") return <NowCardWidget {...widget.props} />;
  return null;
}

// ── Chat Bubble ───────────────────────────────────────────────────────────────

function ChatBubble({
  message,
  streaming,
}: {
  message: Message;
  streaming?: boolean;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`${isUser ? "max-w-[80%]" : "w-full"}`}>
        <div
          className={`text-sm leading-relaxed ${
            isUser
              ? "bg-zinc-800 text-zinc-100 px-4 py-2.5 rounded-2xl rounded-br-sm"
              : "text-zinc-300"
          }`}
        >
          {streaming && !isUser ? (
            <StreamingText content={message.content} />
          ) : !isUser ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="text-zinc-100 font-medium">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => (
                  <code className="bg-zinc-800 px-1 rounded text-[13px] font-mono text-zinc-200">
                    {children}
                  </code>
                ),
                ul: ({ children }) => <ul className="space-y-1 pl-4 list-disc mb-3">{children}</ul>,
                ol: ({ children }) => <ol className="space-y-1 pl-4 list-decimal mb-3">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-zinc-300 underline underline-offset-2 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            message.content
          )}
        </div>
        {message.widget && !isUser && (
          <WidgetRenderer widget={message.widget} />
        )}
      </div>
    </motion.div>
  );
}

// ── Main ChatPanel ────────────────────────────────────────────────────────────

interface ChatPanelProps {
  open: boolean;
  onClose: () => void;
}

export function ChatPanel({ open, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Auto-grow textarea
  const autoGrow = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
  };

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      // Reset textarea height
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }

      const assistantId = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "", widget: null },
      ]);
      setIsStreaming(true);
      setStreamingId(assistantId);
      abortRef.current = new AbortController();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
          signal: abortRef.current.signal,
        });

        if (!res.ok || !res.body) throw new Error("Bad response");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          accumulated += decoder.decode(value, { stream: true });

          const markerIdx = accumulated.indexOf(WIDGET_MARKER);
          if (markerIdx !== -1) {
            const textPart = accumulated.slice(0, markerIdx).trim();
            const widgetJson = accumulated.slice(markerIdx + WIDGET_MARKER.length);
            let widget: WidgetType | null = null;
            try {
              widget = JSON.parse(widgetJson) as WidgetType;
            } catch {
              // malformed
            }
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: textPart, widget } : m
              )
            );
          } else {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: accumulated } : m
              )
            );
          }
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: "Something went sideways — give it another try.",
                }
              : m
          )
        );
      } finally {
        setIsStreaming(false);
        setStreamingId(null);
        abortRef.current = null;
      }
    },
    [messages, isStreaming]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleClose = () => {
    abortRef.current?.abort();
    onClose();
  };

  const isEmpty = messages.length === 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-zinc-950/92 backdrop-blur-md flex flex-col"
        >
          {/* Close */}
          <div className="flex justify-end px-6 pt-6 shrink-0">
            <button
              onClick={handleClose}
              className="text-zinc-600 hover:text-zinc-300 transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30, delay: 0.05 }}
            className="flex-1 overflow-hidden flex flex-col mx-auto w-full max-w-2xl px-6 pb-6"
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-4 space-y-5 scrollbar-hidden">
              {isEmpty ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="flex flex-col items-start gap-3 pt-8"
                >
                  <p className="text-zinc-100 font-serif-display text-2xl mb-4">
                    What would you like to know?
                  </p>
                  <div className="flex flex-col gap-2">
                    {PROMPT_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => sendMessage(chip)}
                        className="px-4 py-2.5 rounded-xl border border-zinc-800 text-sm text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 transition-all duration-200 text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <>
                  {messages.map((message) => (
                    <ChatBubble
                      key={message.id}
                      message={message}
                      streaming={isStreaming && message.id === streamingId}
                    />
                  ))}

                  {/* Typing dots — only while streaming but no content yet */}
                  {isStreaming &&
                    messages[messages.length - 1]?.role === "assistant" &&
                    messages[messages.length - 1]?.content === "" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-1.5 py-1"
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block"
                          />
                        ))}
                      </motion.div>
                    )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input — vertically centered textarea + button */}
            <div className="shrink-0 pt-2">
              <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-3 focus-within:border-zinc-600 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    autoGrow(e.target);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything…"
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-500 resize-none outline-none leading-5 scrollbar-hidden"
                  style={{ minHeight: "20px", maxHeight: "128px" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isStreaming}
                  className="shrink-0 w-8 h-8 rounded-xl bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center self-center"
                >
                  <ArrowUp className="w-4 h-4 text-zinc-200" />
                </button>
              </div>
              <p className="text-center text-[10px] text-zinc-700 mt-2">
                esc to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
