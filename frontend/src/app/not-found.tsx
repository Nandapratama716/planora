import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-brand-900">Halaman tidak ditemukan</h1>
        <p className="text-slate-600">URL yang kamu akses tidak tersedia di Planora.</p>
        <Link href="/" className="inline-block rounded-lg bg-brand-700 px-4 py-2 font-semibold text-white">
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}