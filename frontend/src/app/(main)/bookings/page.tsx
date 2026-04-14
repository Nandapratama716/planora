import BookingCard from "@/components/bookings/BookingCard";

const bookings = [
  {
    id: "BK-001",
    eventName: "Wedding Organizer Premium",
    status: "confirmed",
  },
  {
    id: "BK-002",
    eventName: "Corporate Gathering",
    status: "pending",
  },
];

export default function BookingsPage() {
  return (
    <section className="space-y-6 py-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-brand-900">Daftar Pemesanan</h1>
        <p className="text-slate-600">Pantau status booking kamu secara real-time.</p>
      </header>
      <div className="space-y-3">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            id={booking.id}
            eventName={booking.eventName}
            status={booking.status}
          />
        ))}
      </div>
    </section>
  );
}