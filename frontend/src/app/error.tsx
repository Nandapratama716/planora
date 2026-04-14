"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-xl space-y-4 rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
        <h1 className="text-2xl font-bold">Terjadi kesalahan</h1>
        <p className="text-sm">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-red-700 px-4 py-2 font-semibold text-white"
        >
          Coba Lagi
        </button>
      </div>
    </main>
  );
}