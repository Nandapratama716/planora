type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-bold text-brand-900">{value}</p>
    </article>
  );
}