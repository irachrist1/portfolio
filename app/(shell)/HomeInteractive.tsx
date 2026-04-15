"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { MessageCircle, ChevronRight } from "lucide-react";
import { ChatPanel } from "./components/ChatPanel";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ArticleItem {
  title: string;
  slug: string;
  publishedAt: string | null;
}

interface ProjectItem {
  title: string;
  slug: string;
  tagline: string;
}

interface HomeInteractiveProps {
  recentArticles: ArticleItem[];
  featuredProjects: ProjectItem[];
}

// ── Tilt hook ─────────────────────────────────────────────────────────────────

function useTilt(maxAngle = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 320, damping: 30, mass: 0.5 });
  const rotateY = useSpring(0, { stiffness: 320, damping: 30, mass: 0.5 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * maxAngle * 2);
      rotateX.set(-y * maxAngle * 2);
    },
    [rotateX, rotateY, maxAngle]
  );

  const onLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return { ref, rotateX, rotateY, onMove, onLeave };
}

// ── TiltSurface ───────────────────────────────────────────────────────────────

function TiltSurface({
  children,
  className,
  maxAngle = 10,
}: {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number;
}) {
  const { ref, rotateX, rotateY, onMove, onLeave } = useTilt(maxAngle);
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stack card components ─────────────────────────────────────────────────────

function ArticleCard({ article, isFront = false }: { article: ArticleItem; isFront?: boolean }) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className={`block w-full px-4 py-3 rounded-xl bg-zinc-900 border transition-colors ${
        isFront
          ? "border-zinc-700 ring-1 ring-zinc-700 hover:bg-zinc-800/70"
          : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/70"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-[13px] text-zinc-200 leading-snug line-clamp-2 mb-1">
        {article.title}
      </p>
      {article.publishedAt && (
        <p className="text-[11px] text-zinc-600">
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </p>
      )}
    </Link>
  );
}

function ProjectCard({ project, isFront = false }: { project: ProjectItem; isFront?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`block w-full px-4 py-3 rounded-xl bg-zinc-900 border transition-colors ${
        isFront
          ? "border-zinc-700 ring-1 ring-zinc-700 hover:bg-zinc-800/70"
          : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/70"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-[13px] font-medium text-zinc-200 mb-0.5">
        {project.title}
      </p>
      {project.tagline && (
        <p className="text-[11px] text-zinc-600 line-clamp-1">{project.tagline}</p>
      )}
    </Link>
  );
}

// ── Card Stack — iOS notification-style stacked cards ─────────────────────────

const STACK_DEPTHS = [
  { scale: 1,    y: 0,  opacity: 1,   zIndex: 3 },
  { scale: 0.96, y: 8,  opacity: 0.7, zIndex: 2 },
  { scale: 0.92, y: 14, opacity: 0.4, zIndex: 1 },
];

function CardStack({
  type,
  articles,
  projects,
}: {
  type: "writing" | "work";
  articles?: ArticleItem[];
  projects?: ProjectItem[];
}) {
  const [front, setFront] = useState(0);

  const items = type === "writing" ? (articles ?? []) : (projects ?? []);
  const n = items.length;
  if (n === 0) return null;

  const VISIBLE = Math.min(n, 3);
  const visibleIndices = Array.from({ length: VISIBLE }, (_, d) => (front + d) % n);
  const isArticle = type === "writing";

  const advance = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFront((f) => (f + 1) % n);
  };

  return (
    <div className="relative w-52 flex flex-col items-center">
      {/* Stack area — height accommodates front card + offset of cards behind */}
      <div className="relative w-full" style={{ height: 86 }}>
        <AnimatePresence>
          {visibleIndices.map((itemIdx, depth) => {
            const props = STACK_DEPTHS[depth];
            const item = items[itemIdx];
            return (
              <motion.div
                key={itemIdx}
                className="absolute inset-x-0 top-0 origin-top"
                style={{ pointerEvents: depth === 0 ? "auto" : "none" }}
                initial={
                  depth === VISIBLE - 1
                    ? { scale: props.scale - 0.04, y: props.y + 8, opacity: 0 }
                    : false
                }
                animate={{ scale: props.scale, y: props.y, opacity: props.opacity, zIndex: props.zIndex }}
                exit={{ y: -22, opacity: 0, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              >
                <TiltSurface maxAngle={5} className="w-full">
                  {isArticle ? (
                    <ArticleCard article={item as ArticleItem} isFront={depth === 0} />
                  ) : (
                    <ProjectCard project={item as ProjectItem} isFront={depth === 0} />
                  )}
                </TiltSurface>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Advance button */}
      {n > 1 && (
        <button
          onClick={advance}
          className="mt-2 flex items-center gap-0.5 text-zinc-600 hover:text-zinc-400 transition-colors py-1 px-2"
          aria-label="Next card"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}

// ── Word with stack ───────────────────────────────────────────────────────────

interface WordConfig {
  label: string;
  href: string;
  type: "writing" | "work" | "about";
}

const WORDS: WordConfig[] = [
  { label: "Writing", href: "/writing", type: "writing" },
  { label: "Work", href: "/projects", type: "work" },
  { label: "About", href: "/about", type: "about" },
];

// "About" is a plain link — no stack

function WordWithStack({
  word,
  articles,
  projects,
}: {
  word: WordConfig;
  articles: ArticleItem[];
  projects: ProjectItem[];
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, rotateX, rotateY, onMove, onLeave: onTiltLeave } = useTilt(8);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  // "About" is a plain link — no stack reveal
  if (word.type === "about") {
    return (
      <div className="relative flex flex-col items-center">
        <Link
          href={word.href}
          className="text-[15px] tracking-wide transition-colors duration-200 text-zinc-400 hover:text-zinc-300"
        >
          {word.label}
        </Link>
      </div>
    );
  }

  // Hover-intent pattern: short grace period so cursor can travel word→stack
  const enter = () => {
    clearTimeout(leaveTimer.current);
    setHovered(true);
  };

  const leave = () => {
    leaveTimer.current = setTimeout(() => {
      setHovered(false);
      onTiltLeave();
    }, 60);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  return (
    <div className="relative flex flex-col items-center">
      {/* The word itself — tilts on hover */}
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={enter}
        onMouseLeave={leave}
        style={{ rotateX, rotateY, transformPerspective: 600 }}
      >
        <Link
          href={word.href}
          className={`text-[15px] tracking-wide transition-colors duration-200 ${
            hovered ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-300"
          }`}
        >
          {word.label}
        </Link>
      </motion.div>

      {/* Stack that appears below — onMouseEnter cancels the leave timer */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute top-full mt-4 z-30"
            style={{ left: "50%", x: "-50%" }}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <CardStack
              type={word.type as "writing" | "work"}
              articles={articles}
              projects={projects}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function HomeInteractive({
  recentArticles,
  featuredProjects,
}: HomeInteractiveProps) {
  const [chatOpen, setChatOpen] = useState(false);

  // Cursor light
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });
  const background = useMotionTemplate`radial-gradient(350px circle at ${springX}px ${springY}px, rgba(255,255,255,0.04) 0%, transparent 100%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Tilt for name
  const nameTilt = useTilt(6);

  return (
    <>
      {/* Full screen dark canvas */}
      <div className="fixed inset-0 bg-zinc-950" />

      {/* Cursor light */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen select-none">
        {/* Name — tilts, uses serif-display */}
        <motion.div
          ref={nameTilt.ref}
          onMouseMove={nameTilt.onMove}
          onMouseLeave={nameTilt.onLeave}
          style={{
            rotateX: nameTilt.rotateX,
            rotateY: nameTilt.rotateY,
            transformPerspective: 600,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif-display text-5xl sm:text-6xl text-zinc-100 tracking-tight mb-3 cursor-default">
            Christian Tonny
          </h1>
        </motion.div>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          className="text-sm text-zinc-500 tracking-[0.2em] lowercase mb-24 cursor-default"
        >
          engineer · writer · kigali
        </motion.p>

        {/* Three words — each with stack reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.36, ease: "easeOut" }}
          className="flex items-start gap-14 sm:gap-20 md:gap-28"
        >
          {WORDS.map((word) => (
            <WordWithStack
              key={word.label}
              word={word}
              articles={recentArticles}
              projects={featuredProjects}
            />
          ))}
        </motion.div>
      </div>

      {/* Chat trigger — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="fixed bottom-8 inset-x-0 flex justify-center z-20"
      >
        <button
          onClick={() => setChatOpen(true)}
          className="group flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200 py-1.5 px-3"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <MessageCircle className="w-4 h-4" />
          </motion.span>
          <span className="tracking-wide">ask anything</span>
        </button>
      </motion.div>

      {/* Chat panel */}
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
