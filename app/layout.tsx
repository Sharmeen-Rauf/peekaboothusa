import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peekabooth USA | Premium Photo Booth Rentals",
  description: "Elevate your events with our high-end, immersive photo booth experiences. Serving luxury weddings, corporate events, and exclusive parties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col selection:bg-brand-neon/30 selection:text-white`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
