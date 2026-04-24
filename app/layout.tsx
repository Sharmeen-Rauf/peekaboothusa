import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peekabooth PK | Premium Photo Booth Rentals",
  description: "Elevate your events with our high-end, immersive photo booth experiences. Serving luxury weddings, corporate events, and exclusive parties in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased min-h-screen flex flex-col selection:bg-brand-neon/30 selection:text-white`}>
          <SiteShell>{children}</SiteShell>
        </body>
      </html>
    </ClerkProvider>
  );
}
