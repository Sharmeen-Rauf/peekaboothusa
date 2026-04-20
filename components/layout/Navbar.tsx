"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500 ${
          isScrolled ? "glass-panel shadow-lg" : "bg-transparent"
        }`}>
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/PeekABooth-LOGO-2025-600x212.png" 
              alt="Peekabooth USA Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              title="Change 'invert' to make it black if needed"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" variant="primary">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-xl z-0 flex flex-col items-center justify-center gap-8 md:hidden pointer-events-none"
        style={{ pointerEvents: isMobileOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-2xl font-bold text-white hover:text-brand-neon transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button size="lg" className="mt-4" onClick={() => setIsMobileOpen(false)}>
          Book Now
        </Button>
      </motion.div>
    </motion.header>
  );
}
