"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, ChevronDown, Phone, Mail, Youtube, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";

const boothDropdown = [
  {
    name: "Open Air Photo Booth",
    href: "/open-air-photo-booth-rental",
    desc: "Sleek, modern, open-concept booth for any event.",
    image: "/booth-setup-3.jpg",
  },
  {
    name: "360° Photo Booth",
    href: "/360-photo-booth-rental",
    desc: "Viral slow-motion 360° video experience.",
    image: "/booth-setup-4.jpg",
  },
  {
    name: "Vogue Magazine Box",
    href: "/vogue-magazine-photo-booth-box",
    desc: "Life-size magazine cover — the ultimate showstopper.",
    image: "/booth-setup-5.jpg",
  },
  {
    name: "Digital Photo Booth",
    href: "/digital-photo-booth-rental",
    desc: "Instant GIFs, boomerangs & digital delivery.",
    image: "/booth-setup-6.jpg",
  },
];



const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PHOTO BOOTHS", href: "#services", hasDropdown: true },
  { name: "AI STUDIO ✨", href: "/ai-studio" },
  { name: "EVENTS", href: "/events" },
  { name: "BRAND/CORPORATE", href: "/brand-corporate" },
  { name: "PRICING", href: "/pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileBoothOpen, setIsMobileBoothOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* TOP BAR */}
      <div 
        className={`w-full bg-surface transition-all duration-300 overflow-hidden flex items-center border-b border-white/5 ${
          isScrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-full">
          <div className="flex items-center gap-6 text-[11px] md:text-xs text-foreground/80 font-medium tracking-wide">
            <a href="tel:+923260760786" className="flex items-center gap-2 hover:text-brand-neon transition-colors">
              <Phone size={12} className="text-brand-neon" />
              +92 326 0760786
            </a>
            <a href="mailto:info@peekaboothpk.com" className="hidden sm:flex items-center gap-2 hover:text-brand-neon transition-colors">
              <Mail size={12} className="text-brand-neon" />
              info@peekaboothpk.com
            </a>
          </div>
          <div className="flex items-center h-full">
            <div className="flex items-center gap-2 mr-4">
              <a href="https://www.facebook.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Facebook size={10} className="md:w-3 md:h-3" />
              </a>
              <a href="https://www.instagram.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Instagram size={10} className="md:w-3 md:h-3" />
              </a>
              <a href="#" className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-white hover:text-brand-neon transition-colors">
                <Youtube size={10} className="md:w-3 md:h-3" />
              </a>
            </div>
            <a 
              href="/get-a-quote" 
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
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2 md:py-3 border-b border-border" : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo & Toggle */}
            <div className="flex items-center gap-4 relative z-10">
              <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/PeekABooth-LOGO-2025-600x212.png" 
                  alt="Peekabooth USA Logo" 
                  width={300}
                  height={106}
                  className="h-9 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 dark:invert-0 light:invert"
                  id="navbar-logo"
                />
              </Link>
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="text-xs xl:text-sm font-bold tracking-widest text-foreground hover:text-brand-neon transition-colors flex items-center gap-1 group relative py-2">
                      {link.name}
                      <ChevronDown size={14} className={`mt-0.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-brand-neon" : ""}`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-neon transition-all duration-300 ${dropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-3 w-72 bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-50 py-2"
                        >
                          {boothDropdown.map((booth, i) => (
                            <Link key={booth.name} href={booth.href} onClick={() => setDropdownOpen(false)}
                              className={`flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all group ${i !== boothDropdown.length - 1 ? "border-b border-white/5" : ""}`}
                            >
                              <span className="group-hover:text-brand-neon transition-colors tracking-wide">{booth.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-neon group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs xl:text-sm font-bold tracking-widest text-foreground hover:text-brand-neon transition-colors flex items-center gap-1 group relative py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-neon transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-10 text-foreground hover:text-brand-neon transition-colors p-2 -mr-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial="hidden"
        animate={isMobileOpen ? "show" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
          show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 0.4,
              staggerChildren: 0.08,
              delayChildren: 0.2
            } 
          }
        }}
        className="absolute top-0 left-0 w-full h-screen bg-black/98 backdrop-blur-2xl z-40 flex flex-col overflow-y-auto pt-28 pb-12 px-8 lg:hidden"
        style={{ pointerEvents: isMobileOpen ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            className="border-b border-white/5"
          >
            {link.hasDropdown ? (
              <div>
                <button
                  onClick={() => setIsMobileBoothOpen(!isMobileBoothOpen)}
                  className="w-full text-left py-5 text-xl font-bold tracking-widest text-white hover:text-brand-neon transition-colors flex items-center justify-between uppercase"
                >
                  {link.name}
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileBoothOpen ? "rotate-180 text-brand-neon" : ""}`} />
                </button>
                <AnimatePresence>
                  {isMobileBoothOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pb-4 pl-4 flex flex-col gap-1">
                        {boothDropdown.map((booth) => (
                          <Link key={booth.name} href={booth.href}
                            onClick={() => { setIsMobileOpen(false); setIsMobileBoothOpen(false); }}
                            className="flex items-center gap-3 py-3 px-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0">
                              <Image src={booth.image} alt={booth.name} fill sizes="40px" className="object-cover" />
                            </div>
                            <span className="text-white/70 group-hover:text-white font-semibold text-sm transition-colors">{booth.name}</span>
                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-neon ml-auto transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            ) : (
              <Link
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-5 text-xl font-bold tracking-widest text-white hover:text-brand-neon transition-colors uppercase"
              >
                {link.name}
              </Link>
            )}
          </motion.div>
        ))}
        
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col text-center leading-tight">
            <span className="text-sm font-medium text-white/60 mb-2 uppercase tracking-widest">Call Us Today</span>
            <a href="tel:+923260760786" className="text-brand-neon font-bold text-2xl tracking-wide">
              +92 326 0760786
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4">
             <a href="https://www.facebook.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Facebook size={18} />
             </a>
             <a href="https://www.instagram.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Instagram size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-brand-neon hover:text-white transition-colors">
               <Youtube size={18} />
             </a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
