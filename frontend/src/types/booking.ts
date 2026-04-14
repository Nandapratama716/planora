export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type Booking = {
  id: string;
  eventId: string;
  eventName: string;
  status: BookingStatus;
};