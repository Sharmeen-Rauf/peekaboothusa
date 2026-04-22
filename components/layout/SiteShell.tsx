"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import Loader from "@/components/ui/Loader";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppRoute = pathname.startsWith("/admin") || pathname.startsWith("/portal");

  if (isAppRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Loader />
      <Navbar />
      <main className="flex-grow flex flex-col relative z-10">{children}</main>
      <FloatingWidgets />
      <Footer />
    </>
  );
}
