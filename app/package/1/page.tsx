import type { Metadata } from "next";
import PackageBookingClient from "@/components/PackageBookingClient";

export const metadata: Metadata = {
  title: "Triple R Holidays | Sri Lanka Grand Multi-City Tour",
  description:
    "View the Sri Lanka Grand Multi-City Tour package and send a booking inquiry to Triple R Holidays."
};

export default function PackageBookingPage() {
  return <PackageBookingClient />;
}
