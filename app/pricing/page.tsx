import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental Pricing in Pakistan | Packages & Rates | Peek-A-Booth PK",
  description:
    "Explore Peek-A-Booth PK's photo booth rental pricing in Pakistan. Flexible packages for weddings, birthdays & corporate events in Karachi, Lahore, Islamabad & Multan. Get a free quote today!",
};

export default function PricingPage() {
  return <PricingClient />;
}
