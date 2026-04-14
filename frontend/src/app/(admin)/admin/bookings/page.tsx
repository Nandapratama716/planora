import DataTable from "@/components/admin/DataTable";

export default function AdminBookingsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-brand-900">Manajemen Booking</h1>
      <DataTable
        columns={["Kode", "Customer", "Status"]}
        rows={[
          ["BK-001", "Dina", "confirmed"],
          ["BK-002", "Fauzan", "pending"],
        ]}
      />
    </section>
  );
}