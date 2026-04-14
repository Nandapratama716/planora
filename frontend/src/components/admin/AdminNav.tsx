import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/bookings", label: "Bookings" },
];

export default function AdminNav() {
  return (
    <nav className="space-y-2">
      {adminLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-brand-800"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}