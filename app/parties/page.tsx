import type { Metadata } from "next";
import PartiesClient from "./PartiesClient";

export const metadata: Metadata = {
  title: "Party Photo Booth Rental | Peekabooth USA",
  description:
    "Photo booths for any party or event. We offer print, digital, 360 video booths, and glam booths to capture unforgettable moments at your next celebration.",
};

export default function PartiesPage() {
  return <PartiesClient />;
}
