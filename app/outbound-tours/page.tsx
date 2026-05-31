import type { Metadata } from "next";
import OutboundToursClient from "@/components/OutboundToursClient";

export const metadata: Metadata = {
  title: "Outbound Tours | Triple R Holidays",
  description:
    "Plan your next international getaway with Triple R Holidays. Curated packages for Kuala Lumpur, Singapore, Maldives, and Thailand."
};

export default function OutboundToursPage() {
  return <OutboundToursClient />;
}
