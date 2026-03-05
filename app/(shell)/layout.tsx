import { Sidebar } from "./components/sidebar/Sidebar";

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-zinc-950">
      <Sidebar />
      <main className="flex-1 min-h-screen lg:ml-[250px]">{children}</main>
    </div>
  );
}
