"use client";

import { useMemo } from "react";
import type { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: "EV-001",
    name: "Wedding Organizer Premium",
    category: "Pernikahan",
    description: "Paket event pernikahan all-in.",
    priceLabel: "Mulai Rp 15.000.000",
  },
];

export default function useEvents() {
  const events = useMemo(() => mockEvents, []);

  return {
    events,
    isLoading: false,
  };
}