import type { Metadata } from "next";
import MultanClient from "./MultanClient";

export const metadata: Metadata = {
  title: "Photo Booth Rental Multan | Premium Photo Booth in Multan | Peek-A-Booth PK",
  description: "Premium photo booth rental in Multan for weddings, birthdays & corporate events. Open Air, 360, Vogue & Digital booths. Book your Multan photo booth rental today with Peek-A-Booth PK!",
};

export default function MultanPage() {
  return <MultanClient />;
}
