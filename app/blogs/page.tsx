import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blog | Photo Booth Tips, Ideas & Event Inspiration | Peek-A-Booth PK",
  description: "Read Peek-A-Booth PK's blog for photo booth tips, event ideas, wedding inspiration, and the latest trends in photo booth entertainment across Pakistan.",
};

export default function BlogsPage() {
  return <BlogsClient />;
}
