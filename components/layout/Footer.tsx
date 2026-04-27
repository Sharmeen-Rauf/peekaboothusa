"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Star } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      {/* Top subtle glow behind logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/" className="mb-6 relative z-10 hover:scale-105 transition-transform duration-300">
          <Image 
            src="/2.png" 
            alt="Peek-A-Booth PK" 
            width={400}
            height={141}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          />
        </Link>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-center mb-16 tracking-tight drop-shadow-lg leading-tight">
          Your Premium Photo Booth <br className="hidden md:block" /> Partner
        </h2>

        {/* Links & Socials Grid/Row */}
        <div className="w-full max-w-6xl border border-border rounded-xl overflow-hidden flex flex-col lg:flex-row items-stretch justify-center bg-card mb-12 shadow-2xl">
          
          <Link href="/privacy-policy" className="flex items-center justify-center px-8 py-5 md:py-6 text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors border-b lg:border-b-0 lg:border-r border-border w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Privacy Policy
          </Link>
          
          {/* Social Icons Row */}
          <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center border-b lg:border-b-0 lg:border-r border-border w-full lg:w-auto grid grid-cols-3 md:flex">
            <a href="https://www.facebook.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-brand-neon hover:bg-white/5 transition-colors border-r border-b md:border-b-0 border-border min-w-[60px]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-brand-neon hover:bg-white/5 transition-colors border-r border-b md:border-b-0 border-border min-w-[60px]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-brand-neon hover:bg-white/5 transition-colors border-b md:border-b-0 border-border min-w-[60px]">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <Link href="/blogs" className="flex items-center justify-center px-8 py-5 md:py-6 text-foreground/80 hover:text-brand-neon hover:bg-foreground/5 transition-colors border-b lg:border-b-0 lg:border-r border-border w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Blog
          </Link>
          <Link href="/get-a-quote" className="flex items-center justify-center px-8 py-5 md:py-6 text-foreground/80 hover:text-brand-neon hover:bg-foreground/5 transition-colors border-b lg:border-b-0 lg:border-r border-border w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Get a Quote
          </Link>
          <Link href="/terms-and-conditions" className="flex items-center justify-center px-8 py-5 md:py-6 text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Terms &amp; Conditions
          </Link>

        </div>


        {/* Giant Glowing Text */}
        <div className="w-full text-center select-none overflow-hidden flex justify-center mb-6">
          <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none text-foreground/5 md:text-foreground/10 text-foreground md:hover:text-foreground drop-shadow-[0_0_30px_rgba(247,54,168,0.3)] md:drop-shadow-none md:hover:drop-shadow-[0_0_50px_rgba(247,54,168,0.6)] transition-all duration-700 cursor-default">
            PEEK-A-BOOTH PK
          </h1>
        </div>

        {/* Copyright */}
        <p className="text-foreground/30 text-[10px] md:text-xs font-medium text-center">
          Copyright © {new Date().getFullYear()} PeekABooth PK. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
