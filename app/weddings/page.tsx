import type { Metadata } from "next";
import WeddingsClient from "./WeddingsClient";

export const metadata: Metadata = {
  title: "Wedding Photo Booth Rental | Peekabooth USA",
  description:
    "Wow your guests with the ultimate wedding photo booth. Rent our original selfie booth or luxury Glam Booth for your wedding, complete with elegant backdrops and unlimited prints.",
};

export default function WeddingsPage() {
  return <WeddingsClient />;
}
