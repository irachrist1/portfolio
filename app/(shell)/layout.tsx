import { getPublishedArticles } from "@/app/data/writing";
import { projects } from "@/app/data/projects";
import { Sidebar } from "./components/sidebar/Sidebar";
import { MobileTabBar } from "./components/sidebar/MobileTabBar";
import { CommandPaletteProvider } from "./components/command-palette/CommandPaletteProvider";
import { ShellContainer } from "./components/ShellContainer";

const writingSearchItems = getPublishedArticles().map((article) => ({
  title: article.title,
  slug: article.slug,
  excerpt: article.previewText,
}));

const projectSearchItems = projects.map((project) => ({
  title: project.title,
  slug: project.slug,
  description: project.description,
}));

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommandPaletteProvider writing={writingSearchItems} projects={projectSearchItems}>
      <ShellContainer sidebar={<Sidebar />} mobileTabBar={<MobileTabBar />}>
        {children}
      </ShellContainer>
    </CommandPaletteProvider>
  );
}
