import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Get a Photo Booth Rental Quote in Pakistan | Free Quote | Peek-A-Booth PK",
  description: "Get a free, custom photo booth rental quote for your event in Pakistan. Tell us about your event and we'll plan the perfect experience. Available in Karachi, Lahore, Islamabad & Multan.",
};

export default function GetAQuotePage() {
  return <QuoteClient />;
}
