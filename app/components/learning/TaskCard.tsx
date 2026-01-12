"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2, Circle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Task = {
    text: string;
    status: "completed" | "in-progress" | "todo";
};

type TaskCardProps = {
    title: string;
    tasks: Task[];
    defaultExpanded?: boolean;
};

export function TaskCard({ title, tasks, defaultExpanded = false }: TaskCardProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const completedCount = tasks.filter((t) => t.status === "completed").length;
    const totalCount = tasks.length;

    return (
        <div className="border border-zinc-800 rounded-lg bg-zinc-900/50 overflow-hidden">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-zinc-800/30 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
                    <span className="text-xs text-zinc-500">
                        {completedCount}/{totalCount}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-zinc-500" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 py-4 pt-0 space-y-2">
                            {tasks.map((task, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 group hover:bg-zinc-800/20 p-2 rounded transition-colors"
                                >
                                    {task.status === "completed" && (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    )}
                                    {task.status === "in-progress" && (
                                        <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                    )}
                                    {task.status === "todo" && (
                                        <Circle className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" />
                                    )}
                                    <span
                                        className={`text-sm flex-1 ${task.status === "completed"
                                                ? "text-zinc-400 line-through"
                                                : task.status === "in-progress"
                                                    ? "text-zinc-300"
                                                    : "text-zinc-500"
                                            }`}
                                    >
                                        {task.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
