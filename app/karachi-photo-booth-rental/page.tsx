import type { Metadata } from "next";
import KarachiClient from "./KarachiClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental in Karachi | Premium Event Experiences | Peek-A-Booth PK",
  description: "Looking for the best photo booth rental in Karachi? Peek-A-Booth PK offers high-end 360, digital, and open-air booths for weddings, corporate events, and parties in Karachi.",
};

export default function KarachiPage() {
  return <KarachiClient />;
}
