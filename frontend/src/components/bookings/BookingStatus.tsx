import Badge from "@/components/ui/Badge";

type BookingStatusProps = {
  status: string;
};

export default function BookingStatus({ status }: BookingStatusProps) {
  if (status === "confirmed") {
    return <Badge tone="success">Confirmed</Badge>;
  }

  if (status === "pending") {
    return <Badge tone="warning">Pending</Badge>;
  }

  return <Badge tone="neutral">{status}</Badge>;
}