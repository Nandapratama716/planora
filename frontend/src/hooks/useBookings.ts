"use client";

import { useMemo } from "react";
import type { Booking } from "@/types/booking";

const mockBookings: Booking[] = [
  {
    id: "BK-001",
    eventId: "EV-001",
    eventName: "Wedding Organizer Premium",
    status: "confirmed",
  },
];

export default function useBookings() {
  const bookings = useMemo(() => mockBookings, []);

  return {
    bookings,
    isLoading: false,
  };
}