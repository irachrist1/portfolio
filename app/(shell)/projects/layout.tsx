import { projects, categories } from "@/app/data/projects";
import { ThreeColumnShell } from "../components/ThreeColumnShell";
import {
  ContentList,
  type ContentListItem,
} from "../components/ContentList";

export const dynamic = "force-static";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  const items: ContentListItem[] = sortedCategories.flatMap((category) =>
    projects
      .filter((p) => p.category === category.id)
      .map((project) => ({
        href: `/projects/${project.slug}`,
        title: project.title,
        subtitle: category.name,
      }))
  );

  return (
    <ThreeColumnShell
      middleColumn={<ContentList title="All Projects" items={items} />}
    >
      {children}
    </ThreeColumnShell>
  );
}
