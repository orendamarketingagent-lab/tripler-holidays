import type { Metadata } from "next";
import HolidayToursClient from "@/components/HolidayToursClient";

export const metadata: Metadata = {
  title: "Holiday Tours | Triple R Holidays",
  description:
    "Explore premium in-country Sri Lanka tours and international holiday packages with Triple R Holidays."
};

export default function HolidayToursPage() {
  return <HolidayToursClient />;
}
