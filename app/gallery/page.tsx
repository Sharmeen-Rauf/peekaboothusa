import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Booth Gallery | Peekabooth USA",
  description:
    "Browse Peek A Booth's photo booth gallery to see our photo booths in action at weddings, birthdays, and events, creating unforgettable memories nationwide.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
