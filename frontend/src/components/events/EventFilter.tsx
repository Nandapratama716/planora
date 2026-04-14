import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function EventFilter() {
  return (
    <form className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[1fr_220px_auto]">
      <Input placeholder="Cari event atau vendor..." />
      <Input placeholder="Kategori" />
      <Button type="submit">Filter</Button>
    </form>
  );
}