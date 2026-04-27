import type { Metadata } from "next";
import LahoreClient from "./LahoreClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental in Lahore | Premium Event Experiences | Peek-A-Booth PK",
  description: "Experience the best photo booth rental in Lahore. Peek-A-Booth PK offers high-end 360, digital, and open-air booths for weddings, corporate events, and parties in Lahore.",
};

export default function LahorePage() {
  return <LahoreClient />;
}
