import api from "@/lib/api";

export async function getBookings() {
  const { data } = await api.get("/bookings");
  return data;
}

export async function getBookingById(id: string) {
  const { data } = await api.get(`/bookings/${id}`);
  return data;
}