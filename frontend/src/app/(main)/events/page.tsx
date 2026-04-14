import EventFilter from "@/components/events/EventFilter";
import EventList from "@/components/events/EventList";

export default function EventsPage() {
  return (
    <section className="space-y-6 py-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-brand-900">Temukan Event</h1>
        <p className="text-slate-600">Cari dan jelajahi event terbaik untuk kebutuhanmu.</p>
      </header>
      <EventFilter />
      <EventList />
    </section>
  );
}