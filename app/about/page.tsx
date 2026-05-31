import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About | Triple R Holidays",
  description:
    "Triple R Holidays is a Sri Lankan travel startup backed by 20+ years of combined tourism, hospitality and customer service experience. Contact our team for curated travel planning."
};

export default function AboutPage() {
  return <AboutClient />;
}
