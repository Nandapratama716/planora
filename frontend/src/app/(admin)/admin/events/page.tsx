import DataTable from "@/components/admin/DataTable";

export default function AdminEventsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-brand-900">Manajemen Event</h1>
      <DataTable
        columns={["Nama Event", "Kategori", "Status"]}
        rows={[
          ["Wedding Organizer", "Pernikahan", "aktif"],
          ["Live Music Package", "Hiburan", "draft"],
        ]}
      />
    </section>
  );
}