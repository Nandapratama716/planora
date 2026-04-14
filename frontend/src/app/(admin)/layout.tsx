import AdminNav from "@/components/admin/AdminNav";
import Sidebar from "@/components/layout/Sidebar";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-slate-100 lg:grid-cols-[260px_1fr]">
      <Sidebar>
        <AdminNav />
      </Sidebar>
      <main className="p-6 lg:p-10">{children}</main>
    </div>
  );
}