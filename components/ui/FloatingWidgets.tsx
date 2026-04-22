"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Phone } from "lucide-react";

export default function FloatingWidgets() {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 I'm Peekabooth's AI assistant. How can I help you plan your event?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate AI typing and response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: Date.now() + 1, text: "Thanks for reaching out! Our team will connect with you soon. For an instant quote, check out our Get a Quote page!", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* ── AI CHAT WINDOW ── */}
      <AnimatePresence>
        {isBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-24 right-4 md:right-6 w-[350px] max-w-[calc(100vw-2rem)] h-[450px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-neon px-5 py-4 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-neon" />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">Peekabooth AI</h3>
                  <p className="text-white/80 text-[10px] uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsBotOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-black/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#0a0a0a] to-black scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map(msg => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "user" 
                      ? "bg-white/10 text-white rounded-br-sm" 
                      : "bg-white text-black rounded-bl-sm shadow-md"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-[#0a0a0a]">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-neon text-white flex items-center justify-center hover:bg-brand-glow transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING BUTTONS ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        
        {/* AI Bot Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBotOpen(!isBotOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors border ${
            isBotOpen 
              ? "bg-white/10 text-white border-white/20" 
              : "bg-white text-black border-transparent hover:bg-brand-neon hover:text-white"
          }`}
        >
          {isBotOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </motion.button>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/18007098579"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-colors relative group"
        >
          <Phone className="w-6 h-6" />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Chat on WhatsApp
          </span>
        </motion.a>
        
      </div>
    </>
  );
}
