import type { Metadata } from "next";
import OutboundToursClient from "@/components/OutboundToursClient";

export const metadata: Metadata = {
  title: "Triple R Holidays | Outbound Tours",
  description:
    "Plan your next international getaway with Triple R Holidays. Curated packages for Kuala Lumpur, Singapore, Maldives, and Thailand."
};

export default function OutboundToursPage() {
  return <OutboundToursClient />;
}
