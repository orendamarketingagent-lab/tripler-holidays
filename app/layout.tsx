import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: "Triple R Holidays | Sri Lanka Tours & Holiday Packages",
  description:
    "Triple R Holidays creates seamless Sri Lanka tours, outbound holiday packages, hotel bookings, events, destination weddings and transportation."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
          <WhatsAppFab />
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
