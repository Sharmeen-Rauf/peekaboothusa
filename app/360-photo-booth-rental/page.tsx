import type { Metadata } from "next";
import ThreeSixtyClient from "./ThreeSixtyClient";

export const metadata: Metadata = {
  title: "360 Photo Booth Rental | Peekabooth USA",
  description:
    "Experience the viral 360 video photo booth! Stunning slow-motion videos for weddings, corporate events and more. Book Peekabooth USA today.",
};

export default function BoothPage360() {
  return <ThreeSixtyClient />;
}
