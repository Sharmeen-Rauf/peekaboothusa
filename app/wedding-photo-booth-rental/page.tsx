import type { Metadata } from "next";
import WeddingsClient from "./WeddingsClient";

export const metadata: Metadata = {
  title: "Wedding Photo Booth Rental in Pakistan | Shaadi Photo Booth | Peek-A-Booth PK",
  description: "Make your Pakistani wedding unforgettable with a premium photo booth rental. 360 booth, Vogue magazine booth & open air setups for mehndi, baraat & walima. Book your wedding photo booth today!",
};

export default function WeddingsPage() {
  return <WeddingsClient />;
}

