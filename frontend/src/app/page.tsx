import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-6 py-20">
      <span className="w-fit rounded-full bg-brand-contrast px-3 py-1 text-sm font-medium text-brand-700">
        Planora Marketplace
      </span>
      <h1 className="max-w-2xl text-4xl font-bold leading-tight text-brand-900 md:text-5xl">
        Cari vendor event, kelola pemesanan, dan pantau status dalam satu platform.
      </h1>
      <p className="max-w-2xl text-lg text-slate-600">
        Struktur frontend sudah menggunakan App Router dan siap dikembangkan menjadi aplikasi produksi.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/events"
          className="rounded-lg bg-brand-700 px-5 py-3 font-semibold text-white transition hover:bg-brand-800"
        >
          Jelajahi Event
        </Link>
        <Link
          href="/login"
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400"
        >
          Masuk
        </Link>
      </div>
    </main>
  );
}