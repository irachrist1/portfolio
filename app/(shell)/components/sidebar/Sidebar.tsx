import Link from "next/link";
import {
  Home,
  User,
  Mail,
  PenLine,
  FolderOpen,
  Activity,
  Sparkles,
  Cpu,
  TrendingUp,
  Hammer,
  ExternalLink as ExternalLinkIcon,
  Rocket,
  Users,
  PieChart,
  Hash,
} from "lucide-react";
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
        label: "Articles",
        icon: <PenLine className="w-4 h-4" />,
      },
      { href: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    ],
  },
  {
    label: "Topics",
    collapsible: true,
    icon: <Hash className="w-4 h-4" />,
    items: [
      {
        href: "/writing?category=ai",
        label: "AI & Tools",
        icon: <Cpu className="w-4 h-4" />,
      },
      {
        href: "/writing?category=strategy",
        label: "Strategy",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        href: "/writing?category=building",
        label: "Building in Public",
        icon: <Hammer className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Projects",
    collapsible: true,
    icon: <FolderOpen className="w-4 h-4" />,
    items: [
      {
        href: "/projects?category=personal",
        label: "Apps",
        icon: <FolderOpen className="w-4 h-4" />,
      },
      {
        href: "/projects?category=career",
        label: "Growth",
        icon: <Rocket className="w-4 h-4" />,
      },
      {
        href: "/projects?category=community",
        label: "Community",
        icon: <Users className="w-4 h-4" />,
      },
      {
        href: "/projects?category=analytics",
        label: "Analytics",
        icon: <PieChart className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Resources",
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
      {
        href: "/contact",
        label: "Contact",
        icon: <Mail className="w-4 h-4" />,
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

      {/* Search */}
      <SearchTrigger />

      {/* Navigation */}
      <SidebarNav groups={navGroups} />

      {/* Newsletter subscribe */}
      <div className="px-4 py-3">
        <Link
          href="https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-medium text-white dark:text-zinc-900 bg-[#1d1d1f] dark:bg-zinc-100 rounded-lg hover:bg-black dark:hover:bg-white transition-colors"
        >
          Subscribe to newsletter
          <ExternalLinkIcon className="w-3 h-3" />
        </Link>
      </div>

      {/* Theme toggle */}
      <div className="px-4 py-4 border-t border-[#e8e8ed] dark:border-zinc-800">
        <ThemeToggle />
      </div>
    </SidebarMobileToggle>
  );
}
