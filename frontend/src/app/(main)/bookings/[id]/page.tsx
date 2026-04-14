type BookingDetailPageProps = {
  params: { id: string };
};

export default function BookingDetailPage({ params }: BookingDetailPageProps) {
  return (
    <section className="space-y-3 py-8">
      <h1 className="text-3xl font-bold text-brand-900">Detail Booking #{params.id}</h1>
      <p className="text-slate-600">Status, jadwal, dan detail pembayaran booking ditampilkan di halaman ini.</p>
    </section>
  );
}