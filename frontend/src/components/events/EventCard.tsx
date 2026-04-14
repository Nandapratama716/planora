import type { Event } from "@/types/event";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card title={event.name}>
      <div className="space-y-2">
        <p className="text-sm text-slate-600">{event.description}</p>
        <div className="flex items-center justify-between">
          <Badge tone="neutral">{event.category}</Badge>
          <span className="text-sm font-semibold text-brand-800">{event.priceLabel}</span>
        </div>
      </div>
    </Card>
  );
}