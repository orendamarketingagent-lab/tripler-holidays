import type { Metadata } from "next";
import HolidayToursClient from "@/components/HolidayToursClient";

export const metadata: Metadata = {
  title: "Triple R Holidays | Holiday Tours",
  description:
    "Explore premium in-country Sri Lanka tours and international holiday packages with Triple R Holidays."
};

export default function HolidayToursPage() {
  return <HolidayToursClient />;
}
