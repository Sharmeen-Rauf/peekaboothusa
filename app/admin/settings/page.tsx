"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function AdminSettings() {
  const [whatsapp, setWhatsapp] = useState("18007098579");
  const [businessName, setBusinessName] = useState("Peekabooth");
  const [bookingSlots, setBookingSlots] = useState(["Oct 24", "Oct 28", "Nov 02"]);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
          <p className="text-white/50">Configure your business preferences</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-5">
          <h2 className="font-bold text-lg flex items-center gap-2"><Shield className="w-5 h-5 text-brand-neon" /> Business Info</h2>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">Business Name</label>
            <input value={businessName} onChange={e => setBusinessName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-neon transition-colors" />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">WhatsApp Number</label>
            <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-neon transition-colors" />
            <p className="text-white/30 text-[11px] mt-1">Include country code, no dashes (e.g., 923001234567)</p>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-5">
          <h2 className="font-bold text-lg">Booked Out Dates</h2>
          <p className="text-white/50 text-sm">These dates will show as unavailable in the booking form.</p>
          <div className="flex flex-wrap gap-2">
            {bookingSlots.map((d, i) => (
              <div key={i} className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-sm">
                {d}
                <button type="button" onClick={() => setBookingSlots(prev => prev.filter((_, idx) => idx !== i))} className="ml-1 text-white/40 hover:text-red-400">&times;</button>
              </div>
            ))}
          </div>
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all ${saved ? "bg-emerald-500 shadow-[0_0_25px_rgba(52,211,153,0.4)]" : "bg-brand-neon hover:bg-brand-glow shadow-[0_0_25px_rgba(247,54,168,0.4)]"}`}
        >
          {saved ? "✓ Saved Successfully!" : "Save Changes"}
        </motion.button>
      </form>

      <div className="border-t border-white/5 pt-6">
        <Link href="/admin" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
