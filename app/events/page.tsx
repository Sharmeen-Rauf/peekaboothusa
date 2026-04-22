import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Photo Booth Events | Peekabooth USA",
  description:
    "Elevate any event with our premium photo booths. From weddings and birthdays to corporate activations and private parties, Peekabooth USA delivers unforgettable interactive experiences.",
};

export default function EventsPage() {
  return <EventsClient />;
}
