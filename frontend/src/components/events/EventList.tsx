import EventCard from "@/components/events/EventCard";
import type { Event } from "@/types/event";

const events: Event[] = [
  {
    id: "EV-001",
    name: "Wedding Organizer Premium",
    category: "Pernikahan",
    description: "Paket full service untuk pernikahan intimate hingga skala besar.",
    priceLabel: "Mulai Rp 15.000.000",
  },
  {
    id: "EV-002",
    name: "Corporate Event Setup",
    category: "Perusahaan",
    description: "Penyelenggaraan acara corporate gathering dengan tim profesional.",
    priceLabel: "Mulai Rp 10.500.000",
  },
];

export default function EventList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}