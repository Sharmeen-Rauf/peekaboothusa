import type { Metadata } from "next";
import ThreeSixtyClient from "./ThreeSixtyClient";

export const metadata: Metadata = {
  title: "360 Photo Booth Rental in Pakistan | Slow-Motion Video Booth | Peek-A-Booth PK",
  description:
    "Rent Pakistan's most exciting 360 photo booth for your wedding, event, or brand activation. Stunning slow-motion video, custom overlays & instant sharing. Book your 360 booth rental today!",
};

export default function BoothPage360() {
  return <ThreeSixtyClient />;
}
