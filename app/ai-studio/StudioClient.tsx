"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ThreeDVisualizer = dynamic(() => import("./ThreeDVisualizer"), { ssr: false });
import { Sparkles, Palette, MonitorPlay, Zap, ArrowRight, CheckCircle2, ChevronRight, MessageSquare, Phone, Mic, Image as ImageIcon } from "lucide-react";

// --- Data ---
const eventTypes = ["Wedding", "Corporate", "Birthday", "Brand Activation", "Private Party"];
const boothStyles = ["Mirror Booth", "360 Video Booth", "Classic Booth", "Vintage Booth"];
const lightingColors = [
  { id: "neon-pink", name: "Neon Pink", hex: "#f736a8", shadow: "rgba(247,54,168,0.6)" },
  { id: "cyber-blue", name: "Cyber Blue", hex: "#00f0ff", shadow: "rgba(0,240,255,0.6)" },
  { id: "emerald", name: "Emerald", hex: "#10b981", shadow: "rgba(16,185,129,0.6)" },
  { id: "gold", name: "Warm Gold", hex: "#fbbf24", shadow: "rgba(251,191,36,0.6)" },
  { id: "purple", name: "Deep Purple", hex: "#8b5cf6", shadow: "rgba(139,92,246,0.6)" },
];
const backdrops = [
  { id: "sequin-silver", name: "Silver Sequin", bg: "bg-gradient-to-br from-gray-300 via-gray-100 to-gray-400" },
  { id: "velvet-black", name: "Black Velvet", bg: "bg-gradient-to-br from-[#111] to-[#000]" },
  { id: "floral-white", name: "White Floral", bg: "bg-[url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" },
  { id: "neon-wall", name: "Neon Grid", bg: "bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" },
];

export default function StudioClient() {
  const [activeTab, setActiveTab] = useState<"package" | "theme" | "preview" | "template">("package");

  // Voice AI State
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState("");

  // Template State
  const [tmplLayout, setTmplLayout] = useState<"strip" | "polaroid">("strip");
  const [tmplText1, setTmplText1] = useState("Ayesha & Bilal");
  const [tmplText2, setTmplText2] = useState("12.04.2024");
  const [tmplBg, setTmplBg] = useState("#ffffff");

  // Package State
  const [packEvent, setPackEvent] = useState("");
  const [packGuests, setPackGuests] = useState("");
  const [packBudget, setPackBudget] = useState("");
  const [isAnalyzingPack, setIsAnalyzingPack] = useState(false);
  const [generatedPack, setGeneratedPack] = useState<any>(null);

  // Theme State
  const [themeEvent, setThemeEvent] = useState("");
  const [isAnalyzingTheme, setIsAnalyzingTheme] = useState(false);
  const [generatedTheme, setGeneratedTheme] = useState<any>(null);

  // Preview State
  const [prevBooth, setPrevBooth] = useState(boothStyles[0]);
  const [prevLight, setPrevLight] = useState(lightingColors[0]);
  const [prevBackdrop, setPrevBackdrop] = useState(backdrops[1]);

  // Handlers
  const handleGeneratePackage = () => {
    setIsAnalyzingPack(true);
    setGeneratedPack(null);
    setTimeout(() => {
      setIsAnalyzingPack(false);
      setGeneratedPack({
        booth: parseInt(packBudget) > 60000 ? "Mirror Booth" : "Classic Booth",
        hours: parseInt(packGuests) > 200 ? 6 : 4,
        addons: ["Guest Book", "Premium Props"],
        total: parseInt(packBudget) > 60000 ? "PKR 65,000" : "PKR 50,000",
        reason: `Based on your ${packEvent} for ${packGuests} guests, we recommend the ${parseInt(packBudget) > 60000 ? "Mirror Booth" : "Classic Booth"}. It handles large crowds efficiently and fits perfectly within your budget!`
      });
    }, 2500);
  };

  const handleGenerateTheme = () => {
    setIsAnalyzingTheme(true);
    setGeneratedTheme(null);
    setTimeout(() => {
      setIsAnalyzingTheme(false);
      let t;
      if (themeEvent.includes("Wedding") || themeEvent.includes("luxury")) {
        t = {
          name: "Ethereal Romance",
          palette: ["#ffffff", "#fdfbf7", "#e5e7eb", "#d1d5db", "#fbbf24"],
          moodImages: [
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=400&auto=format&fit=crop"
          ],
          suggestion: "Pair the Mirror Booth with a White Floral backdrop and warm gold LED lighting for a cinematic, luxurious feel."
        };
      } else if (themeEvent.includes("Corporate") || themeEvent.includes("tech")) {
        t = {
          name: "Cyber Professional",
          palette: ["#000000", "#111827", "#3b82f6", "#00f0ff", "#ffffff"],
          moodImages: [
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop"
          ],
          suggestion: "The 360 Video Booth with a Neon Grid backdrop and Cyber Blue lighting will make your brand pop!"
        };
      } else {
        t = {
          name: "Neon Party Vibes",
          palette: ["#050505", "#f736a8", "#8b5cf6", "#ec4899", "#fcd34d"],
          moodImages: [
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470229722913-7c092db62220?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop"
          ],
          suggestion: "Use the Party Box with Neon Pink lighting and a Black Velvet backdrop so the neon props really glow!"
        };
      }
      setGeneratedTheme(t);
    }, 2500);
  };

  const getWhatsAppLink = (type: string, data?: any) => {
    let msg = "";
    if (type === "package") {
      msg = `Hi Peekabooth! I used your AI Studio and generated this package:\nEvent: ${packEvent}\nGuests: ${packGuests}\nBudget: ${packBudget}\n\nAI Recommendation:\nBooth: ${data?.booth}\nHours: ${data?.hours}\n\nCan we discuss booking this?`;
    } else if (type === "theme") {
      msg = `Hi Peekabooth! I love the "${data?.name}" theme generated by your AI Studio for my ${themeEvent}!\nCan we discuss how to bring this to life?`;
    } else if (type === "preview") {
      msg = `Hi Peekabooth! I built my custom booth in the AI Studio:\nBooth: ${prevBooth}\nLighting: ${prevLight.name}\nBackdrop: ${prevBackdrop.name}\n\nCan I get a quote for this exact setup?`;
    } else if (type === "template") {
      msg = `Hi Peekabooth! I designed a custom template in the AI Studio:\nLayout: ${tmplLayout}\nText: ${tmplText1} - ${tmplText2}\n\nCan we use this for my event?`;
    }
    return `https://wa.me/923260760786?text=${encodeURIComponent(msg)}`;
  };

  const handleVoiceInput = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Voice AI.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    setIsListening(true);
    setVoiceText("");

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      setVoiceText(transcript);
      setIsListening(false);
      
      // Basic AI matching logic
      if (transcript.includes("wedding")) setPackEvent("Wedding");
      else if (transcript.includes("corporate")) setPackEvent("Corporate");
      else if (transcript.includes("birthday")) setPackEvent("Birthday");
      else setPackEvent(transcript);

      const nums = transcript.match(/\d+/g);
      if (nums && nums.length > 0) {
        // Simple heuristic: if it's a huge number, it's budget. If smaller, guests.
        const sorted = nums.map(Number).sort((a: number, b: number) => b - a);
        if (sorted[0] > 1000) {
          setPackBudget(sorted[0].toString());
          if (sorted[1]) setPackGuests(sorted[1].toString());
        } else {
          setPackGuests(sorted[0].toString());
        }
      }
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-1000" style={{ backgroundColor: generatedTheme ? generatedTheme.palette[1] + '40' : undefined }} />

      {/* Dynamic Theme Particles */}
      {generatedTheme && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${generatedTheme.name}-${i}`}
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0, scale: 0 }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 1.5 + 0.5, 0]
              }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
              className="absolute w-2 h-2 rounded-full blur-[1px]"
              style={{ backgroundColor: generatedTheme.palette[i % generatedTheme.palette.length] }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(247,54,168,0.2)]">
            <Sparkles className="w-3.5 h-3.5" /> AI Studio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Design The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white">Future</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Let our AI generate the perfect package, design a stunning moodboard, or build your setup live in 3D.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "package", name: "Smart Package", icon: Zap },
            { id: "theme", name: "Theme Generator", icon: Palette },
            { id: "preview", name: "Live Preview", icon: MonitorPlay },
            { id: "template", name: "Print Designer", icon: ImageIcon },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105" 
                  : "bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" /> {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* ── 1. SMART PACKAGE GENERATOR ── */}
            {activeTab === "package" && (
              <motion.div key="pkg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold tracking-tight">AI Package Generator</h2>
                  <p className="text-white/50 text-sm">Tell us about your event, and our AI will calculate the optimal booth, duration, and add-ons to maximize impact within your budget.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Event Type</label>
                      <input value={packEvent} onChange={e=>setPackEvent(e.target.value)} placeholder="e.g. Wedding, Corporate Gala" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Total Guests</label>
                        <input type="number" value={packGuests} onChange={e=>setPackGuests(e.target.value)} placeholder="e.g. 250" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors" />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Budget (PKR)</label>
                        <input type="number" value={packBudget} onChange={e=>setPackBudget(e.target.value)} placeholder="e.g. 75000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={handleVoiceInput}
                      className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-all ${isListening ? "bg-red-500 text-white animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]" : "bg-white/10 text-white hover:bg-white/20"}`}
                      title="Speak your event details"
                    >
                      <Mic className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleGeneratePackage} 
                      disabled={!packEvent || !packGuests || !packBudget || isAnalyzingPack}
                      className="flex-1 bg-brand-neon hover:bg-brand-glow text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:hover:bg-brand-neon"
                    >
                      {isAnalyzingPack ? "Analyzing Event Data..." : "Generate Smart Package"} <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {voiceText && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/40 italic">
                      "Heard: {voiceText}"
                    </motion.p>
                  )}
                </div>

                <div className="bg-black/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
                  {isAnalyzingPack && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10">
                      <motion.div className="w-16 h-16 border-4 border-white/10 border-t-brand-neon rounded-full mb-4" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                      <p className="text-brand-neon font-bold tracking-widest uppercase text-sm animate-pulse">Running AI Algorithm</p>
                    </motion.div>
                  )}

                  {!generatedPack && !isAnalyzingPack && (
                    <div className="text-center text-white/30 space-y-4">
                      <Zap className="w-16 h-16 mx-auto opacity-50" />
                      <p>Awaiting inputs...</p>
                    </div>
                  )}

                  {generatedPack && !isAnalyzingPack && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                      <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-2">
                        Match Found
                      </div>
                      <h3 className="text-3xl font-black text-white">{generatedPack.booth}</h3>
                      
                      <div className="bg-white/5 rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center"><span className="text-white/60">Duration</span><span className="font-bold">{generatedPack.hours} Hours</span></div>
                        <div className="flex justify-between items-center"><span className="text-white/60">Add-ons</span><span className="font-bold text-right">{generatedPack.addons.join(", ")}</span></div>
                        <div className="flex justify-between items-center pt-3 border-t border-white/10"><span className="text-white/60">Est. Budget</span><span className="font-extrabold text-brand-neon text-lg">{generatedPack.total}</span></div>
                      </div>

                      <div className="bg-brand-neon/5 border border-brand-neon/20 rounded-xl p-4">
                        <p className="text-sm text-brand-neon/80 italic">" {generatedPack.reason} "</p>
                      </div>

                      <a href={getWhatsAppLink("package", generatedPack)} target="_blank" className="block w-full text-center bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                        Book This Package →
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── 2. THEME GENERATOR ── */}
            {activeTab === "theme" && (
              <motion.div key="thm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl font-extrabold tracking-tight mb-2">AI Theme & Moodboard</h2>
                  <p className="text-white/50 text-sm mb-6">Describe your event vibe (e.g. "Luxury Winter Wedding" or "Neon Tech Startup Party") and watch the AI build a stunning visual identity.</p>
                  
                  <div className="flex gap-2">
                    <input value={themeEvent} onChange={e=>setThemeEvent(e.target.value)} placeholder="Enter your event vibe..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-brand-neon transition-colors" />
                    <button 
                      onClick={handleGenerateTheme}
                      disabled={!themeEvent || isAnalyzingTheme}
                      className="bg-brand-neon hover:bg-brand-glow text-white px-8 rounded-full font-bold uppercase tracking-widest text-sm transition-all disabled:opacity-50"
                    >
                      {isAnalyzingTheme ? "Thinking..." : "Generate"}
                    </button>
                  </div>
                </div>

                <div className="min-h-[300px] relative">
                  {isAnalyzingTheme && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm z-10 rounded-3xl">
                      <div className="flex gap-2 mb-4">
                        {[0,1,2].map(i => <motion.div key={i} className="w-3 h-3 bg-brand-neon rounded-full" animate={{ y: [-10, 0, -10] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />)}
                      </div>
                      <p className="text-brand-neon font-bold tracking-widest uppercase text-sm">Curating Aesthetics...</p>
                    </motion.div>
                  )}

                  {generatedTheme && !isAnalyzingTheme && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                      <div className="text-center">
                        <h3 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 mb-2">{generatedTheme.name}</h3>
                        <p className="text-brand-neon text-sm">{generatedTheme.suggestion}</p>
                      </div>

                      {/* Palette */}
                      <div className="flex justify-center gap-2 md:gap-4">
                        {generatedTheme.palette.map((color: string, i: number) => (
                          <motion.div key={color} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }} className="group relative">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/10 shadow-xl cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: color }} />
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-white/50">{color}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Moodboard */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {generatedTheme.moodImages.map((img: string, i: number) => (
                          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }} className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                            <img src={img} alt="Mood" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                          </motion.div>
                        ))}
                      </div>

                      <div className="text-center pt-4">
                        <a href={getWhatsAppLink("theme", generatedTheme)} target="_blank" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_25px_rgba(37,211,102,0.4)]">
                          <MessageSquare className="w-4 h-4" /> Share with Team
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── 3. LIVE EVENT PREVIEW ── */}
            {activeTab === "preview" && (
              <motion.div key="prv" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[600px]">
                
                {/* Controls (Left) */}
                <div className="lg:col-span-4 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">1. Select Booth</h3>
                    <div className="space-y-2">
                      {boothStyles.map(b => (
                        <button key={b} onClick={() => setPrevBooth(b)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${prevBooth === b ? "bg-white text-black border-white font-bold" : "bg-[#111] border-white/10 text-white/70 hover:bg-white/5"}`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">2. Select Backdrop</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {backdrops.map(bg => (
                        <button key={bg.id} onClick={() => setPrevBackdrop(bg)} className={`relative h-20 rounded-xl border-2 transition-all overflow-hidden ${prevBackdrop.id === bg.id ? "border-white" : "border-transparent"}`}>
                          <div className={`absolute inset-0 ${bg.bg}`} />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center">
                            <span className="text-[10px] font-bold leading-tight drop-shadow-md">{bg.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">3. LED Lighting</h3>
                    <div className="flex flex-wrap gap-2">
                      {lightingColors.map(c => (
                        <button key={c.id} onClick={() => setPrevLight(c)} className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${prevLight.id === c.id ? "border-white scale-110" : "border-white/10"}`} style={{ backgroundColor: c.hex, boxShadow: prevLight.id === c.id ? `0 0 20px ${c.shadow}` : 'none' }} title={c.name} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preview Window (Right) */}
                <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] flex flex-col">
                  {/* Dynamic 3D Stage */}
                  <div className="flex-1 relative bg-black">
                    <ThreeDVisualizer 
                      booth={prevBooth} 
                      backdrop={{ name: prevBackdrop.name }} 
                      lightingHex={prevLight.hex} 
                    />

                    {/* Live Preview Text Overlay */}
                    <div className="absolute top-6 left-6 z-30 pointer-events-none">
                       <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                         <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: prevLight.hex, boxShadow: `0 0 10px ${prevLight.hex}` }} />
                         <span className="text-xs font-bold uppercase tracking-widest text-white">3D Live Simulation</span>
                       </div>
                    </div>
                  </div>

                  {/* CTA Bar */}
                  <div className="bg-black border-t border-white/10 p-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-30">
                    <div>
                      <p className="text-sm font-bold">{prevBooth} + {prevBackdrop.name}</p>
                      <p className="text-xs text-white/50">Lit with {prevLight.name}</p>
                    </div>
                    <a href={getWhatsAppLink("preview")} target="_blank" className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full font-bold text-sm transition-colors flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Book This Setup
                    </a>
                  </div>
                </div>

              </motion.div>
            )}

            {/* ── 4. LIVE PRINT TEMPLATE DESIGNER ── */}
            {activeTab === "template" && (
              <motion.div key="tpl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold tracking-tight">Print Template Designer</h2>
                  <p className="text-white/50 text-sm">Design the physical printout your guests will take home. Update the text, layout, and colors to match your event perfectly.</p>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Select Layout</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button onClick={() => setTmplLayout("strip")} className={`py-4 rounded-xl font-bold transition-all border ${tmplLayout === "strip" ? "bg-brand-neon/20 border-brand-neon text-brand-neon" : "bg-white/5 border-white/10 text-white/50"}`}>3-Photo Strip</button>
                        <button onClick={() => setTmplLayout("polaroid")} className={`py-4 rounded-xl font-bold transition-all border ${tmplLayout === "polaroid" ? "bg-brand-neon/20 border-brand-neon text-brand-neon" : "bg-white/5 border-white/10 text-white/50"}`}>1-Photo Polaroid</button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Main Text (e.g. Names)</label>
                      <input value={tmplText1} onChange={e=>setTmplText1(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon" />
                    </div>
                    
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Subtext (e.g. Date)</label>
                      <input value={tmplText2} onChange={e=>setTmplText2(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon" />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Background Color</label>
                      <div className="flex gap-3">
                        {["#ffffff", "#000000", "#fdfbf7", "#f736a8", "#10b981", "#fbbf24"].map(c => (
                          <button key={c} onClick={() => setTmplBg(c)} className={`w-8 h-8 rounded-full border-2 transition-all ${tmplBg === c ? "border-brand-neon scale-110" : "border-white/20"}`} style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <a href={getWhatsAppLink("template")} target="_blank" className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all flex justify-center items-center gap-2 hover:bg-gray-200 mt-4 block text-center">
                    Lock In This Design
                  </a>
                </div>

                {/* Template Preview Side */}
                <div className="bg-[#111] rounded-3xl p-8 flex items-center justify-center border border-white/5 min-h-[500px]">
                   {tmplLayout === "strip" ? (
                     // 3-Photo Strip Preview
                     <motion.div layout className="w-40 shadow-2xl p-2 pb-6 relative transition-colors duration-500" style={{ backgroundColor: tmplBg, color: tmplBg === "#000000" ? "white" : "black" }}>
                       <div className="space-y-2 mb-4">
                         <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=200&auto=format&fit=crop" className="opacity-80 object-cover w-full h-full" alt="1" /></div>
                         <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=200&auto=format&fit=crop" className="opacity-80 object-cover w-full h-full" alt="2" /></div>
                         <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden"><img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=200&auto=format&fit=crop" className="opacity-80 object-cover w-full h-full" alt="3" /></div>
                       </div>
                       <div className="text-center">
                         <h4 className="font-serif text-sm font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>{tmplText1}</h4>
                         <p className="text-[8px] uppercase tracking-widest mt-1 opacity-70">{tmplText2}</p>
                       </div>
                     </motion.div>
                   ) : (
                     // 1-Photo Polaroid Preview
                     <motion.div layout className="w-64 shadow-2xl p-4 pb-12 relative transition-colors duration-500" style={{ backgroundColor: tmplBg, color: tmplBg === "#000000" ? "white" : "black" }}>
                       <div className="aspect-square bg-gray-300 mb-6 relative overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop" className="opacity-80 object-cover w-full h-full" alt="main" />
                       </div>
                       <div className="text-center">
                         <h4 className="font-serif text-xl font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>{tmplText1}</h4>
                         <p className="text-[10px] uppercase tracking-widest mt-2 opacity-70">{tmplText2}</p>
                       </div>
                     </motion.div>
                   )}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
