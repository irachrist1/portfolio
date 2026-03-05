import { projects, categories } from "@/app/data/projects";
import { getWeeklyCommitCountByProject } from "@/app/data/weekly-activity";
import { ProjectsFilter } from "./ProjectsFilter";

export default function ProjectsPage() {
  const weeklyCommitCounts = getWeeklyCommitCountByProject();

  return (
    <ProjectsFilter
      projects={projects}
      categories={categories}
      weeklyCommitCounts={weeklyCommitCounts}
    />
  );
}
