import type { Metadata } from "next";
import DigitalClient from "./DigitalClient";

export const metadata: Metadata = {
  title: "Digital Photo Booth Rental | Peekabooth USA",
  description:
    "Our Digital Photo Booth Rental offers instant GIFs, boomerangs, and photos with instant social sharing, custom overlays & virtual props. Perfect for any modern event.",
};

export default function DigitalBoothPage() {
  return <DigitalClient />;
}
