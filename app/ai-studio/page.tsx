import type { Metadata } from "next";
import StudioClient from "./StudioClient";

export const metadata: Metadata = {
  title: "AI Studio ✨ | Peekabooth USA",
  description: "Experience the future of event planning. Use our AI to generate smart packages, create event moodboards, and build a live preview of your photo booth setup.",
};

export default function AIStudioPage() {
  return <StudioClient />;
}
