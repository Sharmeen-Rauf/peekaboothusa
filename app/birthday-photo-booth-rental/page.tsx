import type { Metadata } from "next";
import BirthdayClient from "./BirthdayClient";

export const metadata: Metadata = {
  title: "Birthday Photo Booth Rental in Pakistan | Birthday Party Booth | Peek-A-Booth PK",
  description: "Make every birthday unforgettable with a premium photo booth rental in Pakistan. Custom birthday themes, GIFs, instant prints & selfie booth fun for all ages. Book your birthday photo booth today!",
};

export default function BirthdayBoothPage() {
  return <BirthdayClient />;
}

