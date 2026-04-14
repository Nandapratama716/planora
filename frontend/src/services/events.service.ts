import api from "@/lib/api";

export async function getEvents() {
  const { data } = await api.get("/events");
  return data;
}

export async function getEventById(id: string) {
  const { data } = await api.get(`/events/${id}`);
  return data;
}