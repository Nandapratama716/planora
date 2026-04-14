export default function ForgotPasswordPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-brand-900">Lupa Password</h1>
      <p className="text-sm text-slate-600">
        Masukkan email terdaftar untuk menerima instruksi reset password.
      </p>
      <form className="space-y-3">
        <label className="block text-sm font-medium text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="nama@email.com"
        />
        <button type="submit" className="w-full rounded-lg bg-brand-700 px-4 py-2 font-semibold text-white">
          Kirim Link Reset
        </button>
      </form>
    </div>
  );
}