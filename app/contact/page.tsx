import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact | Triple R Holidays",
  description: "Contact section moved to the About page."
};

export default function ContactPage() {
  redirect("/about#contact");
}
