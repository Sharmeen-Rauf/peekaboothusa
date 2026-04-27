import type { Metadata } from "next";
import BrandClient from "./BrandClient";

export const metadata: Metadata = {
  title: "Corporate Event Photo Booth Rental in Pakistan | Branded Booth | Peek-A-Booth PK",
  description: "Elevate your brand with a premium corporate photo booth rental in Pakistan. Branded booths, instant social sharing & professional setups for corporate events & brand activations. Book today!",
};

export default function BrandCorporatePage() {
  return <BrandClient />;
}

