import type { Metadata } from "next";
import MagazineClient from "./MagazineClient";

export const metadata: Metadata = {
  title: "Vogue Magazine Photo Booth Rental in Pakistan | Magazine Booth | Peek-A-Booth PK",
  description:
    "Hire Pakistan's most glamorous Vogue Magazine Photo Booth for your wedding, event, or brand activation. Custom covers, instant prints & red carpet vibes. Book your magazine photo booth rental today!",
};

export default function MagazinePage() {
  return <MagazineClient />;
}
