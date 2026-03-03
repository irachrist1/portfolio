export function ThreeColumnShell({
  middleColumn,
  children,
}: {
  middleColumn: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Middle column: article/project list */}
      <div className="hidden xl:flex flex-col w-[300px] flex-shrink-0 border-r border-zinc-800 overflow-y-auto h-screen sticky top-0">
        {middleColumn}
      </div>

      {/* Right column: main content */}
      <div className="flex-1 min-w-0 overflow-y-auto">{children}</div>
    </div>
  );
}
