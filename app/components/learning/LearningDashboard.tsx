"use client";

import { useState } from "react";
import { ProgressCircle } from "./ProgressCircle";
import { TaskCard } from "./TaskCard";
import { TechBadge } from "./TechBadge";
import { Calendar, Target, BookOpen } from "lucide-react";

export function LearningDashboard() {
    const [activeTab, setActiveTab] = useState<"flutter" | "r">("flutter");

    return (
        <div className="space-y-8">
            {/* Degree Context Banner */}
            <div className="p-6 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100 mb-1">University Degree Program</h3>
                        <p className="text-zinc-300">
                            <span className="font-medium text-blue-400">AI/ML Specialization</span>
                            {" > "}
                            <span className="font-medium text-purple-400">Software Engineering Degree</span>
                        </p>
                        <p className="text-sm text-zinc-500 mt-2">
                            All learning activities below are part of my university curriculum and degree requirements
                        </p>
                    </div>
                </div>
            </div>

            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50">
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-zinc-400">Started</span>
                    </div>
                    <p className="text-2xl font-bold text-zinc-100">January 2026</p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50">
                    <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium text-zinc-400">Active Projects</span>
                    </div>
                    <p className="text-2xl font-bold text-zinc-100">2</p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50">
                    <div className="flex items-center gap-3 mb-2">
                        <Target className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-zinc-400">Focus Areas</span>
                    </div>
                    <p className="text-2xl font-bold text-zinc-100">Mobile + Data</p>
                </div>
            </div>

            {/* Progress Overview */}
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <h2 className="text-lg font-semibold text-zinc-100 mb-6">Learning Progress</h2>
                <div className="flex flex-wrap justify-around gap-8">
                    <ProgressCircle progress={20} title="Flutter Health App" color="text-blue-500" />
                    <ProgressCircle progress={30} title="R Programming" color="text-emerald-500" />
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-zinc-800">
                <div className="flex gap-1">
                    <button
                        onClick={() => setActiveTab("flutter")}
                        className={`px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === "flutter"
                            ? "text-blue-400"
                            : "text-zinc-500 hover:text-zinc-300"
                            }`}
                    >
                        Flutter Health App
                        {activeTab === "flutter" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("r")}
                        className={`px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === "r"
                            ? "text-emerald-400"
                            : "text-zinc-500 hover:text-zinc-300"
                            }`}
                    >
                        R Programming Course
                        {activeTab === "r" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
                        )}
                    </button>
                </div>
            </div>

            {/* Flutter Content */}
            {activeTab === "flutter" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                All-in-One Health Tracker
                            </h3>
                            <p className="text-zinc-400">
                                Building a comprehensive health tracking app using Flutter that combines
                                features from MyFitnessPal and Whoop. Learning cross-platform mobile
                                development while creating a practical, real-world application.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-sm font-medium text-zinc-400 mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                <TechBadge name="Flutter" type="framework" />
                                <TechBadge name="Dart" type="language" />
                                <TechBadge name="iOS" type="tool" />
                                <TechBadge name="Android" type="tool" />
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">📅 Calendar</h5>
                                <p className="text-sm text-zinc-500">Track daily routines and activities</p>
                            </div>
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">🍎 Nutrition</h5>
                                <p className="text-sm text-zinc-500">Log meals and monitor intake</p>
                            </div>
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">📍 Activities</h5>
                                <p className="text-sm text-zinc-500">Location-based recommendations</p>
                            </div>
                        </div>

                        {/* Tasks */}
                        <div className="space-y-3">
                            <TaskCard
                                title="Completed"
                                tasks={[
                                    { text: "Flutter development environment setup", status: "completed" },
                                    { text: "Understanding Flutter basics and widget system", status: "completed" },
                                    { text: "Research on state management patterns", status: "completed" },
                                ]}
                            />
                            <TaskCard
                                title="In Progress"
                                defaultExpanded
                                tasks={[
                                    { text: "Designing app architecture and data models", status: "in-progress" },
                                    { text: "Planning calendar integration approach", status: "in-progress" },
                                    { text: "Researching nutrition database APIs", status: "in-progress" },
                                ]}
                            />
                            <TaskCard
                                title="Next Steps"
                                tasks={[
                                    { text: "Build calendar integration for schedule tracking", status: "todo" },
                                    { text: "Implement nutrition and diet tracking features", status: "todo" },
                                    { text: "Create activity recommendation system with location services", status: "todo" },
                                    { text: "Learn state management (Provider/Riverpod)", status: "todo" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* R Programming Content */}
            {activeTab === "r" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                                Coursera Data Science Course
                            </h3>
                            <p className="text-zinc-400">
                                Taking a structured R programming course on Coursera as part of my school
                                curriculum. Focusing on statistical computing, data visualization, and
                                analysis techniques for academic and professional applications.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-sm font-medium text-zinc-400 mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                <TechBadge name="R" type="language" />
                                <TechBadge name="RStudio" type="tool" />
                                <TechBadge name="ggplot2" type="framework" />
                                <TechBadge name="dplyr" type="framework" />
                                <TechBadge name="tidyverse" type="framework" />
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">📊 Statistics</h5>
                                <p className="text-sm text-zinc-500">Statistical computing and analysis</p>
                            </div>
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">📈 Visualization</h5>
                                <p className="text-sm text-zinc-500">Creating charts and graphs</p>
                            </div>
                            <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/30">
                                <h5 className="font-medium text-zinc-200 mb-1">🔍 Analysis</h5>
                                <p className="text-sm text-zinc-500">Data manipulation techniques</p>
                            </div>
                        </div>

                        {/* Tasks */}
                        <div className="space-y-3">
                            <TaskCard
                                title="Completed"
                                tasks={[
                                    { text: "Enrolled in Coursera R programming course", status: "completed" },
                                    { text: "Completed initial R syntax and data structures modules", status: "completed" },
                                    { text: "Set up RStudio development environment", status: "completed" },
                                ]}
                            />
                            <TaskCard
                                title="In Progress"
                                defaultExpanded
                                tasks={[
                                    { text: "Working through data visualization modules", status: "in-progress" },
                                    { text: "Learning ggplot2 for advanced graphics", status: "in-progress" },
                                    { text: "Practicing with sample datasets", status: "in-progress" },
                                ]}
                            />
                            <TaskCard
                                title="Next Steps"
                                tasks={[
                                    { text: "Complete data visualization modules", status: "todo" },
                                    { text: "Learn statistical analysis with R", status: "todo" },
                                    { text: "Apply R to school project requirements", status: "todo" },
                                    { text: "Master data manipulation with dplyr", status: "todo" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Learning Philosophy */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-gradient-to-br from-blue-500/5 to-emerald-500/5">
                <h3 className="text-lg font-semibold text-zinc-100 mb-3">Learning Philosophy</h3>
                <p className="text-zinc-400 leading-relaxed">
                    I believe in <span className="text-blue-400 font-medium">learning by building</span>.
                    Both these activities represent hands-on approaches to skill development: the Flutter
                    project provides practical application development experience, while the R course
                    offers structured learning with academic rigor. This combination of project-based
                    and course-based learning helps solidify concepts through both theory and practice.
                </p>
            </div>
        </div>
    );
}
