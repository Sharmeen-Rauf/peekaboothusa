import type { Metadata } from "next";
import MagazineClient from "./MagazineClient";

export const metadata: Metadata = {
  title: "Vogue Magazine Photo Booth Box Rental | Peekabooth USA",
  description:
    "Our iconic life-size Vogue Magazine Photo Booth Box creates stunning magazine-style portraits. Custom cover design, LED lighting & instant sharing. Perfect for weddings, parties & corporate events.",
};

export default function MagazinePage() {
  return <MagazineClient />;
}
