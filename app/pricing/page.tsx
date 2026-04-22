import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental Pricing | Peekabooth USA",
  description:
    "Explore the perfect photo booth rental plans for your needs. View pricing for Open Air Booths, 360 Video Booths, Vogue Magazine Booths, and Digital Selfie Stations.",
};

export default function PricingPage() {
  return <PricingClient />;
}
