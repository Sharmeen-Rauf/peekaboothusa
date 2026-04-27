import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You! | Peek-A-Booth PK ΓÇö We've Received Your Enquiry",
  description: "Thank you for contacting Peek-A-Booth PK! We've received your enquiry and will be in touch within 24 hours. We look forward to making your event unforgettable!",
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
