import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
}