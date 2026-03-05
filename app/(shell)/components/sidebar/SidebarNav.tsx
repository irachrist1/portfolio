"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
  collapsible?: boolean;
  icon?: React.ReactNode;
};

function SidebarNavInner({ groups }: { groups: NavGroup[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const fullUrl = currentCategory
    ? `${pathname}?category=${currentCategory}`
    : pathname;

  // Determine which groups should start expanded based on current route
  const getInitialCollapsed = () => {
    const state: Record<string, boolean> = {};
    groups.forEach((group) => {
      if (!group.collapsible) return;
      // Expand if any item in this group is active
      const hasActiveItem = group.items.some((item) => {
        const hasQuery = item.href.includes("?");
        if (hasQuery) return fullUrl === item.href;
        return (
          pathname === item.href ||
          (item.href !== "/" && !currentCategory && pathname.startsWith(item.href))
        );
      });
      state[group.label] = !hasActiveItem; // collapsed = true when no active item
    });
    return state;
  };

  const [collapsed, setCollapsed] = useState(getInitialCollapsed);

  // Update collapsed state when route changes
  useEffect(() => {
    setCollapsed(getInitialCollapsed());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, currentCategory]);

  const toggleGroup = (label: string) => {
    setCollapsed((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
      {groups.map((group, i) => (
        <div key={group.label || `group-${i}`}>
          {group.label && group.collapsible ? (
            <button
              onClick={() => toggleGroup(group.label)}
              className="flex items-center gap-2.5 w-full px-3 py-1.5 text-[13px] rounded-lg transition-all duration-150 text-[#6e6e73] dark:text-zinc-400 hover:text-[#1d1d1f] dark:hover:text-zinc-200 hover:bg-[#f5f5f7] dark:hover:bg-zinc-800/50"
            >
              {group.icon && (
                <span className="w-4 h-4 flex-shrink-0">{group.icon}</span>
              )}
              <span className="flex-1 text-left">{group.label}</span>
              <ChevronRight
                className={`w-3.5 h-3.5 text-[#aeaeb2] dark:text-zinc-600 transition-transform duration-200 ${
                  collapsed[group.label] ? "" : "rotate-90"
                }`}
              />
            </button>
          ) : group.label ? (
            <h3 className="px-3 mb-1 text-[11px] font-semibold tracking-wider text-[#86868b] dark:text-zinc-500 uppercase">
              {group.label}
            </h3>
          ) : null}

          {/* Items — hidden when collapsed */}
          {(!group.collapsible || !collapsed[group.label]) && (
            <ul className={`space-y-px ${group.collapsible ? "pl-3" : ""}`}>
              {group.items.map((item) => {
                const hasQuery = item.href.includes("?");
                let isActive: boolean;

                if (hasQuery) {
                  isActive = fullUrl === item.href;
                } else {
                  isActive =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      !currentCategory &&
                      pathname.startsWith(item.href));
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2.5 px-3 py-1.5 text-[13px] rounded-lg transition-all duration-150 ${
                        isActive
                          ? "bg-[#e8e8ed] dark:bg-zinc-800 text-[#1d1d1f] dark:text-zinc-100 font-medium"
                          : "text-[#6e6e73] dark:text-zinc-400 hover:text-[#1d1d1f] dark:hover:text-zinc-200 hover:bg-[#f5f5f7] dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      {item.icon && (
                        <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}

export function SidebarNav({ groups }: { groups: NavGroup[] }) {
  return (
    <Suspense
      fallback={
        <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto" />
      }
    >
      <SidebarNavInner groups={groups} />
    </Suspense>
  );
}
