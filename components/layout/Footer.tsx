"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Star } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Top subtle glow behind logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Logo */}
        <Link href="/" className="mb-6 relative z-10 hover:scale-105 transition-transform duration-300">
          <Image 
            src="/PeekABooth-LOGO-2025-600x212.png" 
            alt="Peekabooth USA" 
            width={400}
            height={141}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          />
        </Link>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-16 tracking-tight drop-shadow-lg leading-tight">
          Your Premium Photo Booth <br className="hidden md:block" /> Partner
        </h2>

        {/* Links & Socials Grid/Row */}
        <div className="w-full max-w-6xl border border-white/10 rounded-xl overflow-hidden flex flex-col lg:flex-row items-stretch justify-center bg-[#0a0a0a] mb-12 shadow-2xl">
          
          <Link href="#" className="flex items-center justify-center px-8 py-5 md:py-6 text-white/80 hover:text-white hover:bg-white/5 transition-colors border-b lg:border-b-0 lg:border-r border-white/10 w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Privacy Policy
          </Link>

          {/* Social Icons Row */}
          <div className="flex flex-wrap md:flex-nowrap items-stretch justify-center border-b lg:border-b-0 lg:border-r border-white/10 w-full lg:w-auto grid grid-cols-3 md:flex">
            
            <a href="https://www.facebook.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-[#1877F2] hover:bg-white/5 transition-colors border-r border-b md:border-b-0 border-white/10 min-w-[60px]">
              <Facebook className="w-5 h-5" />
            </a>
            
            <a href="https://www.instagram.com/peekaboothpk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-[#E4405F] hover:bg-white/5 transition-colors border-r border-b md:border-b-0 border-white/10 min-w-[60px]">
              <Instagram className="w-5 h-5" />
            </a>
            
            <a href="#" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-brand-neon hover:bg-white/5 transition-colors border-r border-b md:border-b-0 border-white/10 min-w-[60px]">
              {/* TikTok SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
            </a>
            
            <a href="#" className="col-span-3 md:col-span-1 flex items-center justify-center gap-2 p-4 md:p-6 text-white/50 hover:text-[#00B67A] hover:bg-white/5 transition-colors border-b md:border-r md:border-b-0 border-white/10 min-w-[120px]">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-sm tracking-wide">Trustpilot</span>
            </a>
            
            <a href="#" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-[#0A66C2] hover:bg-white/5 transition-colors border-r border-white/10 min-w-[60px]">
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a href="#" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-[#FF0000] hover:bg-white/5 transition-colors border-r border-white/10 min-w-[60px]">
              <Youtube className="w-5 h-5" />
            </a>
            
            <a href="#" className="flex items-center justify-center p-4 md:p-6 text-white/50 hover:text-white hover:bg-white/5 transition-colors min-w-[60px]">
              {/* X (Twitter) SVG */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            
          </div>

          <Link href="/portal" className="flex items-center justify-center px-8 py-5 md:py-6 text-white/80 hover:text-brand-neon hover:bg-white/5 transition-colors border-b lg:border-b-0 lg:border-r border-white/10 w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Client Portal
          </Link>
          <Link href="/admin" className="flex items-center justify-center px-8 py-5 md:py-6 text-white/80 hover:text-brand-neon hover:bg-white/5 transition-colors border-b lg:border-b-0 lg:border-r border-white/10 w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Admin Panel
          </Link>
          <Link href="#" className="flex items-center justify-center px-8 py-5 md:py-6 text-white/80 hover:text-white hover:bg-white/5 transition-colors w-full lg:w-auto font-semibold whitespace-nowrap text-sm">
            Terms &amp; Conditions
          </Link>

        </div>


        {/* Giant Glowing Text */}
        <div className="w-full text-center select-none overflow-hidden flex justify-center mb-6">
          <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none text-white/5 md:text-white/10 text-white md:hover:text-white drop-shadow-[0_0_30px_rgba(247,54,168,0.3)] md:drop-shadow-none md:hover:drop-shadow-[0_0_50px_rgba(247,54,168,0.6)] transition-all duration-700 cursor-default">
            PEEKABOOTH
          </h1>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-[10px] md:text-xs font-medium text-center">
          Copyright © {new Date().getFullYear()} Peekabooth USA. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
