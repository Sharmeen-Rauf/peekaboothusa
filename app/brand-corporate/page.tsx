import type { Metadata } from "next";
import BrandClient from "./BrandClient";

export const metadata: Metadata = {
  title: "Brand & Corporate Photo Booth Rental | Peekabooth USA",
  description:
    "Elevate your brand activations with our corporate photo booth rental. Custom branding, digital selfie stations, and 360 video booths trusted by leading brands nationwide.",
};

export default function BrandCorporatePage() {
  return <BrandClient />;
}
