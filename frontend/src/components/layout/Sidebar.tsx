import type { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="border-r border-slate-200 bg-white p-6 lg:p-8">
      <div className="sticky top-6 space-y-6">
        <h2 className="text-xl font-bold text-brand-900">Admin</h2>
        {children}
      </div>
    </aside>
  );
}