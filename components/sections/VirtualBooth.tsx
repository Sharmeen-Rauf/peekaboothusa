"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Upload, Camera, Sparkles, Image as ImageIcon, X } from "lucide-react";

export default function VirtualBooth() {
  const [image, setImage] = useState<string | null>(null);
  const [activeTemplate, setActiveTemplate] = useState("glam");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const templates = [
    { id: "glam", name: "The Glam Filter", icon: <Sparkles className="w-4 h-4" /> },
    { id: "strip", name: "Classic Print Strip", icon: <ImageIcon className="w-4 h-4" /> },
    { id: "magazine", name: "Magazine Cover", icon: <Camera className="w-4 h-4" /> },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-neon/5 via-black to-black opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionHeader 
          title="Virtual Booth Try-On" 
          subtitle="Upload a selfie right now and see how you'd look inside our premium photo booths!"
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-center">
          
          {/* Controls Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {!image ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-64 md:h-80 border-2 border-dashed border-white/20 hover:border-brand-neon/50 rounded-3xl flex flex-col items-center justify-center cursor-pointer bg-white/5 hover:bg-brand-neon/5 transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-neon/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(247,54,168,0.2)]">
                  <Upload className="w-8 h-8 text-white/50 group-hover:text-brand-neon transition-colors" />
                </div>
                <h3 className="text-white font-extrabold text-xl mb-2 tracking-wide">Upload a Selfie</h3>
                <p className="text-white/40 text-sm text-center px-8 font-medium">Tap to select a picture directly from your camera roll.</p>
                <input 
                  type="file" 
                  accept="image/*" 
                  ref={fileInputRef} 
                  className="hidden" 
                  onChange={handleFileUpload} 
                />
              </div>
            ) : (
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/10 rounded-full blur-[50px]"></div>
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-white font-extrabold text-xl tracking-tight">Select Filter</h3>
                  <button 
                    onClick={() => setImage(null)}
                    className="text-white/40 hover:text-white transition-colors flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                </div>
                
                <div className="flex flex-col gap-3 relative z-10">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTemplate(t.id)}
                      className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all border ${
                        activeTemplate === t.id 
                          ? "bg-brand-neon/20 border-brand-neon shadow-[0_0_15px_rgba(247,54,168,0.2)] text-white" 
                          : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeTemplate === t.id ? 'bg-brand-neon text-white shadow-[0_0_10px_rgba(247,54,168,0.5)]' : 'bg-black/50 border border-white/10'}`}>
                        {t.icon}
                      </div>
                      <span className="font-bold text-sm tracking-wide">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preview Side */}
          <div className="w-full lg:w-2/3 flex justify-center items-center">
            <div className="w-full max-w-[360px] aspect-[3/4] bg-[#111] rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative flex items-center justify-center">
              
              {!image ? (
                <div className="text-center p-8 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border border-white/5 bg-black flex items-center justify-center mb-6 shadow-inner">
                    <Camera className="w-10 h-10 text-white/10" />
                  </div>
                  <h4 className="text-white/20 text-lg font-bold tracking-widest uppercase">Live Preview</h4>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTemplate}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    
                    {/* Glam Booth Template */}
                    {activeTemplate === "glam" && (
                      <div className="w-full h-full relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={image} 
                          alt="User Preview" 
                          className="w-full h-full object-cover grayscale contrast-[1.2] brightness-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                          <Sparkles className="w-4 h-4 text-white" />
                          <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Peekabooth Glam</span>
                        </div>
                      </div>
                    )}

                    {/* Classic Print Strip Template */}
                    {activeTemplate === "strip" && (
                      <div className="w-full h-full bg-[#f8f8f8] p-5 flex flex-col items-center shadow-inner relative">
                        <div className="flex-1 w-full flex flex-col gap-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={image} alt="User 1" className="w-full h-[30%] object-cover shadow-sm grayscale-[30%] sepia-[15%] contrast-110" />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={image} alt="User 2" className="w-full h-[30%] object-cover shadow-sm grayscale-[30%] sepia-[15%] contrast-110 scale-x-[-1]" />
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={image} alt="User 3" className="w-full h-[30%] object-cover shadow-sm grayscale-[30%] sepia-[15%] contrast-110 brightness-[1.15]" />
                        </div>
                        <div className="h-16 w-full flex items-center justify-center mt-4 border-t-2 border-gray-200">
                          <span className="text-black font-black text-xl tracking-[0.3em] uppercase opacity-80">PEEKABOOTH</span>
                        </div>
                      </div>
                    )}

                    {/* Magazine Box Template */}
                    {activeTemplate === "magazine" && (
                      <div className="w-full h-full relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={image} 
                          alt="User Preview" 
                          className="w-full h-full object-cover saturate-[1.2] contrast-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>
                        <div className="absolute inset-0 border-[16px] border-white z-10 pointer-events-none"></div>
                        
                        {/* Fake text behind subject (simulated via mix-blend) */}
                        <h1 className="absolute top-10 w-full text-center text-white font-serif font-black text-[5rem] md:text-[6rem] leading-none tracking-tighter z-0 mix-blend-overlay opacity-60">
                          GLAMOUR
                        </h1>
                        
                        {/* Foreground text */}
                        <div className="absolute bottom-12 right-8 text-right z-20 drop-shadow-md">
                          <p className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-none mb-2">WEDDING<br/>EDITION</p>
                          <p className="text-white/90 font-bold text-[10px] uppercase tracking-[0.3em]">Peekabooth USA</p>
                        </div>

                        {/* Barcode / Details */}
                        <div className="absolute bottom-12 left-8 z-20 opacity-80">
                           <div className="flex flex-col gap-1">
                             <div className="w-12 h-1 bg-white mb-1"></div>
                             <div className="w-16 h-0.5 bg-white"></div>
                             <div className="w-10 h-0.5 bg-white"></div>
                             <div className="w-14 h-0.5 bg-white"></div>
                           </div>
                           <p className="text-white font-mono text-[8px] mt-2 tracking-widest">VOL. 01</p>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
