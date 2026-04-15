"use client";

import { usePathname } from "next/navigation";

interface ShellContainerProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  mobileTabBar: React.ReactNode;
}

export function ShellContainer({
  children,
  sidebar,
  mobileTabBar,
}: ShellContainerProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-white dark:bg-zinc-950">
      {sidebar}
      <main className="flex-1 min-h-screen lg:ml-[250px] pb-24 lg:pb-0">
        {children}
      </main>
      {mobileTabBar}
    </div>
  );
}
