import type { Metadata } from "next";
import CooperateClient from "@/components/CooperateClient";

export const metadata: Metadata = {
  title: "Cooperate | Triple R Holidays",
  description:
    "B2B partnership options for agencies and corporate travel teams with Triple R Holidays."
};

export default function CooperatePage() {
  return <CooperateClient />;
}
