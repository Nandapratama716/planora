type EventDetailPageProps = {
  params: { id: string };
};

export default function EventDetailPage({ params }: EventDetailPageProps) {
  return (
    <section className="space-y-3 py-8">
      <h1 className="text-3xl font-bold text-brand-900">Detail Event #{params.id}</h1>
      <p className="text-slate-600">Halaman ini menampilkan detail lengkap event dan opsi pemesanan.</p>
    </section>
  );
}