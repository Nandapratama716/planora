import Link from "next/link";
import BookingStatus from "@/components/bookings/BookingStatus";

type BookingCardProps = {
  id: string;
  eventName: string;
  status: string;
};

export default function BookingCard({ id, eventName, status }: BookingCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-brand-900">{eventName}</h3>
          <p className="text-sm text-slate-500">Kode: {id}</p>
        </div>
        <BookingStatus status={status} />
      </div>
      <div className="mt-4">
        <Link href={`/bookings/${id}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}