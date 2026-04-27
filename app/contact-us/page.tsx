import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Peek-A-Booth PK | Photo Booth Rental Pakistan | Get in Touch",
  description: "Contact Peek-A-Booth PK for photo booth rentals in Pakistan. Reach us via phone, WhatsApp, or email. We're here to help plan your perfect event in Karachi, Lahore, Islamabad & Multan.",
};

export default function ContactUsPage() {
  return <ContactClient />;
}
