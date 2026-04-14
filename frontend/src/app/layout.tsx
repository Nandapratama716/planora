import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Planora",
  description: "Platform marketplace layanan event",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}