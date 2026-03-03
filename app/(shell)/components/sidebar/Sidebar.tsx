import Link from "next/link";
import {
  Home,
  User,
  Mail,
  PenLine,
  FolderOpen,
  Activity,
  Sparkles,
} from "lucide-react";
import { SidebarMobileToggle } from "./SidebarMobileToggle";
import { SidebarNav, type NavGroup } from "./SidebarNav";
import { SearchTrigger } from "./SearchTrigger";

const navGroups: NavGroup[] = [
  {
    label: "Main",
    items: [
      { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
      { href: "/about", label: "About", icon: <User className="w-4 h-4" /> },
      {
        href: "/contact",
        label: "Contact",
        icon: <Mail className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Writing",
    items: [
      {
        href: "/writing",
        label: "All Posts",
        icon: <PenLine className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Projects",
    items: [
      {
        href: "/projects",
        label: "All Projects",
        icon: <FolderOpen className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "More",
    items: [
      {
        href: "/changelog",
        label: "Changelog",
        icon: <Activity className="w-4 h-4" />,
      },
      {
        href: "/skills",
        label: "Skills",
        icon: <Sparkles className="w-4 h-4" />,
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
          className="text-lg font-display text-zinc-100 hover:text-white transition-colors"
        >
          Christian Tonny
        </Link>
      </div>

      {/* Search */}
      <SearchTrigger />

      {/* Navigation */}
      <SidebarNav groups={navGroups} />

      {/* Theme toggle placeholder */}
      <div className="px-4 py-4 border-t border-zinc-800">
        <div className="flex items-center gap-1 bg-zinc-800/50 rounded-lg p-1">
          <button className="flex-1 text-xs py-1.5 rounded-md bg-zinc-700 text-zinc-200 font-medium">
            Dark
          </button>
          <button className="flex-1 text-xs py-1.5 rounded-md text-zinc-500 hover:text-zinc-400 transition-colors">
            Light
          </button>
          <button className="flex-1 text-xs py-1.5 rounded-md text-zinc-500 hover:text-zinc-400 transition-colors">
            Auto
          </button>
        </div>
      </div>
    </SidebarMobileToggle>
  );
}
