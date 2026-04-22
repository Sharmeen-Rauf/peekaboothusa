"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, CheckSquare, MoreHorizontal } from "lucide-react";

const columns = [
  { id: "pending", title: "Pending Inquiry", icon: Clock, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { id: "confirmed", title: "Confirmed / Deposit Paid", icon: CheckCircle2, color: "text-brand-neon", bg: "bg-brand-neon/10" },
  { id: "completed", title: "Completed Events", icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-400/10" }
];

const mockBookings = [
  { id: "BKG-101", client: "Ayesha Malik", event: "Wedding", date: "Oct 25", booth: "Mirror Booth", status: "pending" },
  { id: "BKG-102", client: "Zain Ali", event: "Birthday", date: "Oct 27", booth: "360 Video Booth", status: "pending" },
  { id: "BKG-103", client: "Hassan Raza", event: "Corporate", date: "Oct 29", booth: "Classic Booth", status: "confirmed" },
  { id: "BKG-104", client: "Sana Tariq", event: "Bridal Shower", date: "Nov 05", booth: "Vintage Booth", status: "confirmed" },
  { id: "BKG-105", client: "TechX Summit", event: "Corporate", date: "Oct 10", booth: "Registration Booth", status: "completed" },
];

export default function BookingsBoard() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Bookings Pipeline</h1>
          <p className="text-white/50">Manage your leads and upcoming events</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-white/90 transition-colors">
          + New Manual Booking
        </button>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {columns.map((col, i) => {
          const Icon = col.icon;
          const colBookings = mockBookings.filter(b => b.status === col.id);
          
          return (
            <div key={col.id} className="bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col h-full overflow-hidden">
              {/* Column Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${col.bg}`}>
                    <Icon className={`w-4 h-4 ${col.color}`} />
                  </div>
                  <h2 className="font-bold text-sm">{col.title}</h2>
                </div>
                <span className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-full font-bold">
                  {colBookings.length}
                </span>
              </div>

              {/* Cards */}
              <div className="p-4 flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {colBookings.map((bkg, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + index * 0.05 }}
                    key={bkg.id} 
                    className="bg-[#111] border border-white/10 p-4 rounded-xl hover:border-white/20 transition-colors cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-white/40">{bkg.id}</span>
                      <button className="text-white/40 hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                    <h3 className="font-bold text-base mb-1">{bkg.client}</h3>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{bkg.event}</span>
                      <span className="bg-white/5 px-2 py-1 rounded border border-white/5">{bkg.date}</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-brand-neon">
                      {bkg.booth}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
