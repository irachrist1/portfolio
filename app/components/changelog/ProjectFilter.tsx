"use client";

type ProjectFilterProps = {
  projects: { slug: string; title: string }[];
  selectedProject: string | null;
  onSelect: (slug: string | null) => void;
};

export function ProjectFilter({ projects, selectedProject, onSelect }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* All button */}
      <button
        onClick={() => onSelect(null)}
        className={`
          px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200
          ${selectedProject === null
            ? "bg-zinc-100 text-zinc-900 border-zinc-100"
            : "bg-zinc-900/30 text-zinc-400 border-zinc-800 hover:bg-zinc-900/50 hover:text-zinc-300 hover:border-zinc-700"
          }
        `}
      >
        All
      </button>

      {/* Project buttons */}
      {projects.map((project) => (
        <button
          key={project.slug}
          onClick={() => onSelect(project.slug)}
          className={`
            px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200
            ${selectedProject === project.slug
              ? "bg-zinc-100 text-zinc-900 border-zinc-100"
              : "bg-zinc-900/30 text-zinc-400 border-zinc-800 hover:bg-zinc-900/50 hover:text-zinc-300 hover:border-zinc-700"
            }
          `}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
}
