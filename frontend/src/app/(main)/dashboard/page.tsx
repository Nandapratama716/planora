import StatsCard from "@/components/admin/StatsCard";

export default function DashboardPage() {
  return (
    <section className="space-y-6 py-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-brand-900">Dashboard</h1>
        <p className="text-slate-600">Ringkasan aktivitas akun dan performa pemesanan.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard title="Event Dilihat" value="24" />
        <StatsCard title="Booking Aktif" value="6" />
        <StatsCard title="Transaksi" value="Rp 7.250.000" />
      </div>
    </section>
  );
}