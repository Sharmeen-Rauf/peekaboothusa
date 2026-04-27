import type { Metadata } from "next";
import IslamabadClient from "./IslamabadClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental in Islamabad | Premium Event Experiences | Peek-A-Booth PK",
  description: "Experience the best photo booth rental in Islamabad. Peek-A-Booth PK offers high-end 360, digital, and open-air booths for weddings, corporate events, and parties in Islamabad.",
};

export default function IslamabadPage() {
  return <IslamabadClient />;
}
