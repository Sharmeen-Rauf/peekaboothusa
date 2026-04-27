import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo Booth Gallery | Event Photos & Videos | Peek-A-Booth PK",
  description:
    "Browse Peek-A-Booth PK's gallery of stunning photos and videos from weddings, birthdays, corporate events & parties across Pakistan. See our photo booths in action!",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
