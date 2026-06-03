import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "Triple R Holidays | About",
  description:
    "Dedicated to creating unforgettable travel experiences, we combine local expertise with exceptional service to help you explore Sri Lanka and beyond."
};

export default function AboutPage() {
  return <AboutClient />;
}
