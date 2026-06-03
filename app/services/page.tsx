import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Triple R Holidays | Services",
  description:
    "Inbound tours, outbound tours, hotel bookings, conferences and events, destination weddings and transportation services."
};

export default function ServicesPage() {
  return <ServicesClient />;
}
