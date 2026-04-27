import type { Metadata } from "next";
import DigitalClient from "./DigitalClient";

export const metadata: Metadata = {
  title: "Digital Photo Booth Rental in Pakistan | DSLR & iPad Booth | Peek-A-Booth PK",
  description: "Rent a modern digital photo booth in Pakistan for your event. GIFs, boomerangs, instant WhatsApp sharing & sleek DSLR or iPad setup. Available in Karachi, Lahore, Islamabad & Multan. Book now!",
};

export default function DigitalBoothPage() {
  return <DigitalClient />;
}

