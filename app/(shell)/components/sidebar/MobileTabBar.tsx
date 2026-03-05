"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, PenLine, FolderOpen, User, Activity } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: Home, exact: true },
  { href: "/writing", label: "Writing", icon: PenLine, exact: false },
  { href: "/projects", label: "Projects", icon: FolderOpen, exact: false },
  { href: "/changelog", label: "Changelog", icon: Activity, exact: false },
  { href: "/about", label: "About", icon: User, exact: false },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden flex justify-center items-end px-4"
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)",
      }}
    >
      <nav
        className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-[24px]"
        style={{
          background: "rgba(22, 22, 24, 0.82)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          // Single box-shadow for the outline — avoids border anti-aliasing fringe
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.08)",
        }}
      >
        {tabs.map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact
            ? pathname === href
            : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className="relative flex flex-col items-center gap-1 px-3.5 py-2 rounded-[18px] min-w-[62px]"
            >
              {/* Active pill — no border, no overflow:hidden, uses box-shadow only */}
              {isActive && (
                <motion.div
                  layoutId="glass-pill"
                  className="absolute inset-0 rounded-[18px]"
                  style={{
                    background: "rgba(255,255,255,0.09)",
                    // inset top: subtle specular; spread ring: clean pill outline
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.18), 0 0 0 0.5px rgba(255,255,255,0.10)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                    mass: 0.8,
                  }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="relative z-10 flex flex-col items-center gap-1"
              >
                <Icon
                  className={`w-[22px] h-[22px] transition-all duration-200 ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                  strokeWidth={isActive ? 2.2 : 1.5}
                />
                <span
                  className={`text-[10px] font-medium leading-none tracking-wide transition-all duration-200 ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
