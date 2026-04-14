import DataTable from "@/components/admin/DataTable";

export default function AdminUsersPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-brand-900">Manajemen User</h1>
      <DataTable
        columns={["Nama", "Email", "Role"]}
        rows={[
          ["Nanda", "nanda@email.com", "admin"],
          ["Rani", "rani@email.com", "user"],
        ]}
      />
    </section>
  );
}