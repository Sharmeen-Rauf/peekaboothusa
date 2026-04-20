"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, Facebook, Instagram, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PHOTO BOOTHS", href: "#services", hasDropdown: true },
  { name: "GALLERY", href: "#gallery" },
  { name: "CONTACT", href: "#contact" },
  { name: "CORPORATE", href: "#corporate" },
  { name: "GET QUOTE", href: "#contact" },
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
              className="h-10 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
              title="Change 'invert' to make it black if needed"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest text-white hover:text-brand-neon transition-colors relative group flex items-center gap-1 uppercase"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/20 pr-6">
              <a href="#" className="text-white hover:text-brand-neon transition-transform hover:scale-110">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-white hover:text-brand-neon transition-transform hover:scale-110">
                <Instagram size={22} />
              </a>
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="text-xs font-semibold text-white/80 tracking-wider uppercase mb-0.5">Call Us Today -</span>
              <a href="tel:1-800-709-8579" className="text-brand-neon font-black text-lg hover:text-brand-glow transition-colors tracking-wide">
                1-800-709-8579
              </a>
            </div>
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
            className="text-2xl font-bold text-white hover:text-brand-neon transition-colors flex items-center gap-2"
          >
            {link.name}
            {link.hasDropdown && <ChevronDown size={20} />}
          </Link>
        ))}
        
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center leading-tight">
            <span className="text-sm font-medium text-white/80 mb-1">Call Us Today -</span>
            <a href="tel:1-800-709-8579" className="text-brand-neon font-bold text-xl">
              1-800-709-8579
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-brand-neon transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-brand-neon transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
