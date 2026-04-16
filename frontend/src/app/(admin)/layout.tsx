import type { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-[#F9FAFB] font-sans overflow-hidden relative">
      <AdminSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#FAFAFC]">
        {children}
      </main>
    </div>
  );
}