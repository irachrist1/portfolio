import { ReactNode } from "react";

export function SidebarMobileToggle({ children }: { children: ReactNode }) {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[250px] bg-[#fbfbfd] dark:bg-zinc-900 border-r border-[#e8e8ed] dark:border-zinc-800 z-50 overflow-y-auto">
      {children}
    </aside>
  );
}
