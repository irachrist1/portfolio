"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Clock, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { CurrentEntry, getStalenessLabel, isStale } from "@/app/data/changelog";
import Link from "next/link";

interface CurrentWorkModalProps {
  entry: CurrentEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const scrollbarHiddenStyle: React.CSSProperties = {
  scrollbarWidth: "none",
  msOverflowStyle: "none",
};

export function CurrentWorkModal({ entry, isOpen, onClose }: CurrentWorkModalProps) {
  if (!entry) return null;

  const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const stalenessLabel = getStalenessLabel(entry);
  const stale = isStale(entry);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                  style={scrollbarHiddenStyle}
                  className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl cursor-default [&::-webkit-scrollbar]:hidden"
                >
                  {/* Header Image/Pattern Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-400 via-transparent to-transparent" />
                    {stalenessLabel && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 backdrop-blur-md border ${
                        stale 
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/20" 
                          : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                      }`}>
                        {stale ? <AlertCircle size={14} /> : <Clock size={14} />}
                        {stalenessLabel}
                      </div>
                    )}
                    <Dialog.Close asChild>
                      <button
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-zinc-400 hover:text-zinc-100 transition-colors z-10"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="p-6 md:p-8 -mt-12 relative">
                    {/* Project Info */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                      <div>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 mb-3">
                          {entry.projectTitle}
                        </div>
                        <Dialog.Title className="text-3xl font-bold text-zinc-100 mb-2">
                          {entry.title}
                        </Dialog.Title>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            Started {formattedDate}
                          </span>
                          {entry.eta && (
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} />
                              ETA: {entry.eta}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="text-sm font-medium text-zinc-400">
                          Progress: {entry.progress}%
                        </div>
                        <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${entry.progress}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-zinc-100"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                      <section>
                        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                          What I'm Building
                        </h3>
                        <p className="text-zinc-300 leading-relaxed">
                          {entry.extendedDescription || entry.description}
                        </p>
                      </section>

                      {/* Tasks Grid */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {entry.completedTasks && entry.completedTasks.length > 0 && (
                          <section>
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                              Recent Progress
                            </h3>
                            <ul className="space-y-2.5">
                              {entry.completedTasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                  <CheckCircle2 size={16} className="text-zinc-500 mt-0.5 shrink-0" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}

                        <section>
                          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                            Remaining Work
                          </h3>
                          <ul className="space-y-2.5">
                            {entry.tasks.map((task, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                <Circle size={16} className="text-zinc-600 mt-0.5 shrink-0" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      </div>

                      {/* Tech Stack */}
                      {entry.techStack && (
                        <section>
                          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {entry.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </section>
                      )}

                      {/* Footer Links */}
                      <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4">
                        {entry.links?.github && (
                          <Link
                            href={entry.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium transition-colors"
                          >
                            <Github size={18} />
                            View Source
                          </Link>
                        )}
                        {entry.links?.live && (
                          <Link
                            href={entry.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium transition-colors"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </Link>
                        )}
                        {entry.links?.project && (
                          <Link
                            href={entry.links.project}
                            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors underline underline-offset-4"
                          >
                            View Project Details
                          </Link>
                        )}
                      </div>

                      {entry.lastUpdated && (
                        <div className="text-xs text-zinc-600 italic">
                          Last activity recorded on {new Date(entry.lastUpdated).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
