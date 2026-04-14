"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold text-brand-900">Form Booking</h2>
      <Input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
      <Input
        type="text"
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Catatan tambahan"
      />
      <Button type="submit">Kirim Booking</Button>
    </form>
  );
}