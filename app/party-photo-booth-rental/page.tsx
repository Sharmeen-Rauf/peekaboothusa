import type { Metadata } from "next";
import PartyClient from "./PartyClient";

export const metadata: Metadata = {
  title: "Party Photo Booth Rental in Pakistan | Portable Party Booth | Peek-A-Booth PK",
  description: "Hire a premium photo booth for your next party in Pakistan. Portable setups, instant prints, GIFs & boomerangs for all party types. Book your party photo booth rental today!",
};

export default function PartyBoothPage() {
  return <PartyClient />;
}

