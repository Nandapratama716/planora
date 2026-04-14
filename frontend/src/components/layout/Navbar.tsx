import Link from "next/link";

const links = [
  { href: "/events", label: "Events" },
  { href: "/bookings", label: "Bookings" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold text-brand-900">
          Planora
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-800">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}