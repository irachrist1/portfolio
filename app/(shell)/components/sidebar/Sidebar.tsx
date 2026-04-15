import Link from "next/link";
import { Home, PenLine, FolderOpen, Activity, User } from "lucide-react";
import { SidebarMobileToggle } from "./SidebarMobileToggle";
import { SidebarNav, type NavGroup } from "./SidebarNav";
import { SearchTrigger } from "./SearchTrigger";
import { ThemeToggle } from "./ThemeToggle";

const navGroups: NavGroup[] = [
  {
    label: "",
    items: [
      { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
      {
        href: "/writing",
        label: "Writing",
        icon: <PenLine className="w-4 h-4" />,
      },
      {
        href: "/projects",
        label: "Projects",
        icon: <FolderOpen className="w-4 h-4" />,
      },
      {
        href: "/changelog",
        label: "Changelog",
        icon: <Activity className="w-4 h-4" />,
      },
      {
        href: "/about",
        label: "About",
        icon: <User className="w-4 h-4" />,
      },
    ],
  },
];

export function Sidebar() {
  return (
    <SidebarMobileToggle>
      {/* Logo */}
      <div className="px-5 pt-6 pb-2">
        <Link
          href="/"
          className="text-lg font-display text-[#1d1d1f] dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors"
        >
          Christian Tonny
        </Link>
      </div>

      {/* Navigation */}
      <SidebarNav groups={navGroups} />

      {/* Bottom actions */}
      <div className="mt-auto px-4 py-4 border-t border-[#e8e8ed] dark:border-zinc-800 flex items-center gap-3">
        <SearchTrigger compact />
        <ThemeToggle compact />
      </div>
    </SidebarMobileToggle>
  );
}
