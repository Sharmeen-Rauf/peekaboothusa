"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Upload, Camera, Sparkles, X, Palette, Type, Image as ImageIcon } from "lucide-react";

export default function VirtualBooth() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Customizer State
  const [eventType, setEventType] = useState("wedding");
  const [background, setBackground] = useState("bg-white");
  const [themeColor, setThemeColor] = useState("#000000");
  const [customText, setCustomText] = useState("Just Married");
  const [subtitle, setSubtitle] = useState("The Perfect Day");

  // Handle Preset Selection
  const applyPreset = (type: string) => {
    setEventType(type);
    if (type === "wedding") {
      setBackground("bg-white");
      setThemeColor("#000000"); // Black text on white background looks elegant
      setCustomText("Just Married");
      setSubtitle("The Perfect Day");
    } else if (type === "birthday") {
      setBackground("bg-gradient-to-tr from-[#f736a8] via-[#8b5cf6] to-[#3b82f6]");
      setThemeColor("#ffffff"); // White text on neon background
      setCustomText("Happy Birthday!");
      setSubtitle("Let's Celebrate");
    } else if (type === "corporate") {
      setBackground("bg-[#0a0a0a]");
      setThemeColor("#FFD700"); // Gold text on black background
      setCustomText("Annual Gala");
      setSubtitle("Peekabooth USA");
    }
  };

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

  const backgrounds = [
    { id: "white", class: "bg-white", name: "Classic White" },
    { id: "black", class: "bg-[#0a0a0a]", name: "Studio Black" },
    { id: "gold", class: "bg-gradient-to-tr from-[#FFD700] via-[#FDB931] to-[#9f7928]", name: "Luxury Gold" },
    { id: "neon", class: "bg-gradient-to-tr from-[#f736a8] via-[#8b5cf6] to-[#3b82f6]", name: "Neon Party" },
  ];

  const themeColors = [
    { id: "white", hex: "#ffffff" },
    { id: "black", hex: "#000000" },
    { id: "pink", hex: "#f736a8" },
    { id: "gold", hex: "#FFD700" },
    { id: "blue", hex: "#3b82f6" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-neon/5 via-black to-black opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <SectionHeader 
          title="Build-A-Booth Studio" 
          subtitle="Be your own designer. Select your event, customize the colors, and see your digital print live!"
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-center">
          
          {/* Controls Side */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8">
            
            {/* Upload Button */}
            <div className="flex items-center justify-between bg-[#111] border border-white/10 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon">
                  {image ? <img src={image} className="w-full h-full object-cover rounded-full opacity-80" alt="thumb" /> : <Camera className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{image ? "Selfie Uploaded!" : "Step 1: Upload Selfie"}</h4>
                  <p className="text-white/40 text-xs">{image ? "Looking great." : "Add a photo to see the live preview."}</p>
                </div>
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
              >
                {image ? "Change Photo" : "Upload"}
              </button>
              <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
            </div>

            {/* Studio Panel */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                
                {/* Event Presets */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-neon" /> Select Event Theme
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["wedding", "birthday", "corporate"].map((type) => (
                      <button
                        key={type}
                        onClick={() => applyPreset(type)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold tracking-wide transition-all border ${
                          eventType === type 
                            ? "bg-brand-neon/20 border-brand-neon text-white shadow-[0_0_15px_rgba(247,54,168,0.2)]" 
                            : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Selector */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-brand-neon" /> Booth Backdrop
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {backgrounds.map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setBackground(bg.class)}
                        className={`w-12 h-12 rounded-full border-2 transition-all shadow-lg ${bg.class} ${
                          background === bg.class ? "border-brand-neon scale-110" : "border-white/20 hover:scale-105"
                        }`}
                        title={bg.name}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Theme Colors */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-brand-neon" /> Theme Color
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {themeColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setThemeColor(color.hex)}
                        style={{ backgroundColor: color.hex }}
                        className={`w-10 h-10 rounded-full border-2 transition-all shadow-lg ${
                          themeColor === color.hex ? "border-brand-neon scale-125" : "border-white/20 hover:scale-110"
                        }`}
                        title={color.id}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Custom Text */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Type className="w-4 h-4 text-brand-neon" /> Custom Text
                  </h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder="Main Heading"
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors text-sm font-bold"
                    />
                    <input 
                      type="text" 
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      placeholder="Subtitle"
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors text-xs tracking-widest uppercase"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Live Preview Side */}
          <div className="w-full lg:w-[45%] flex justify-center items-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${background}-${themeColor}`}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`w-full max-w-[400px] aspect-[3/4] relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center p-6 md:p-8 transition-colors duration-500 ${background}`}
              >
                {/* Photo Frame Container */}
                <div 
                  className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 bg-black/10 backdrop-blur-sm"
                  style={{ border: `4px solid ${themeColor}` }}
                >
                  {!image ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Camera className="w-12 h-12 mb-2 opacity-50" style={{ color: themeColor }} />
                      <span className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: themeColor }}>Upload Photo</span>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={image} 
                      alt="User Live Preview" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* Subtle glare effect on the photo frame */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Typography Overlay */}
                <div className="flex-1 w-full flex flex-col items-center justify-center text-center pt-6">
                  <h2 
                    className="text-4xl md:text-5xl font-serif font-black tracking-tighter leading-none mb-2 drop-shadow-lg transition-colors duration-500" 
                    style={{ color: themeColor }}
                  >
                    {customText || "Your Text"}
                  </h2>
                  <p 
                    className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase drop-shadow-md transition-colors duration-500" 
                    style={{ color: themeColor }}
                  >
                    {subtitle || "Subtitle"}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
