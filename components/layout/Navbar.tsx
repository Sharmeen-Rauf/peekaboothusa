"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Menu, X, Facebook, Instagram, ChevronDown, Phone, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PHOTO BOOTHS", href: "#services", hasDropdown: true },
  { name: "GALLERY", href: "#gallery" },
  { name: "CORPORATE", href: "#corporate" },
  { name: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* TOP BAR */}
      <div 
        className={`w-full bg-[#111] transition-all duration-300 overflow-hidden flex items-center border-b border-white/5 ${
          isScrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
          {/* Top Bar Left: Contact Info */}
          <div className="flex items-center gap-6 text-[11px] md:text-xs text-white/80 font-medium tracking-wide">
            <a href="tel:1-800-709-8579" className="flex items-center gap-2 hover:text-brand-neon transition-colors">
              <Phone size={12} className="text-brand-neon" />
              +1-800-709-8579
            </a>
            <a href="mailto:hello@peekaboothusa.com" className="hidden sm:flex items-center gap-2 hover:text-brand-neon transition-colors">
              <Mail size={12} className="text-brand-neon" />
              hello@peekaboothusa.com
            </a>
          </div>

          {/* Top Bar Right: Socials & CTA */}
          <div className="flex items-center h-full">
            <div className="flex items-center gap-2 mr-4">
              <a href="#" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Facebook size={10} className="md:w-3 md:h-3" />
              </a>
              <a href="#" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Instagram size={10} className="md:w-3 md:h-3" />
              </a>
              <a href="#" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Youtube size={10} className="md:w-3 md:h-3" />
              </a>
            </div>
            <a 
              href="#contact" 
              className="h-full px-4 md:px-6 bg-brand-neon flex items-center justify-center text-[10px] md:text-xs font-bold text-white hover:bg-white hover:text-brand-neon transition-colors tracking-widest uppercase"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg py-2 md:py-3 border-b border-white/5" : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center hover:scale-105 transition-transform duration-300">
              <Image 
                src="/PeekABooth-LOGO-2025-600x212.png" 
                alt="Peekabooth USA Logo" 
                width={300}
                height={106}
                className="h-9 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold tracking-widest text-white hover:text-brand-neon transition-colors flex items-center gap-1 group relative py-2"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-neon transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-10 text-white hover:text-brand-neon transition-colors p-2 -mr-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden pointer-events-none"
        style={{ pointerEvents: isMobileOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            className="text-xl md:text-2xl font-bold tracking-widest text-white hover:text-brand-neon transition-colors flex items-center gap-2 uppercase"
          >
            {link.name}
            {link.hasDropdown && <ChevronDown size={20} />}
          </Link>
        ))}
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center leading-tight">
            <span className="text-sm font-medium text-white/60 mb-2 uppercase tracking-widest">Call Us Today</span>
            <a href="tel:1-800-709-8579" className="text-brand-neon font-bold text-2xl tracking-wide">
              1-800-709-8579
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Facebook size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Instagram size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Youtube size={18} />
             </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
