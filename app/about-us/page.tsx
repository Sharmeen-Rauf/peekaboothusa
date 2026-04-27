import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Peek-A-Booth PK | Pakistan's #1 Photo Booth Rental Company",
  description: "Learn about Peek-A-Booth PK — Pakistan's leading photo booth rental company. Our story, mission, and the team behind unforgettable event experiences in Karachi, Lahore, Islamabad & Multan.",
};

export default function AboutUsPage() {
  return <AboutClient />;
}
