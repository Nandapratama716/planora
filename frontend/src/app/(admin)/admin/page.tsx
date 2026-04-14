import StatsCard from "@/components/admin/StatsCard";

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-brand-900">Admin Overview</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard title="Total User" value="1.284" />
        <StatsCard title="Total Event" value="325" />
        <StatsCard title="Total Booking" value="782" />
      </div>
    </section>
  );
}