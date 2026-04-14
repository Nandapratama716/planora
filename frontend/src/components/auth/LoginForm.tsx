"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-brand-900">Masuk</h1>
        <p className="text-sm text-slate-600">Gunakan akunmu untuk mengakses Planora.</p>
      </header>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Masuk
        </Button>
      </form>
      <p className="text-sm text-slate-600">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold text-brand-700 hover:text-brand-800">
          Daftar
        </Link>
      </p>
    </div>
  );
}