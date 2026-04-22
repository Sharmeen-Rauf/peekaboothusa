"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, CheckSquare, MoreHorizontal, Trash2, RefreshCw, Phone, Mail } from "lucide-react";
import { getBookings, updateBookingStatus, deleteBooking, BookingSubmission, formatPKR } from "@/lib/bookingStore";
import Link from "next/link";

const columns: { id: BookingSubmission["status"]; title: string; icon: React.ElementType; color: string; bg: string }[] = [
  { id: "pending", title: "Pending Inquiry", icon: Clock, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { id: "confirmed", title: "Confirmed", icon: CheckCircle2, color: "text-brand-neon", bg: "bg-brand-neon/10" },
  { id: "completed", title: "Completed", icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-400/10" }
];

export default function BookingsBoard() {
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const load = () => setBookings(getBookings());

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleStatus = (id: string, status: BookingSubmission["status"]) => {
    updateBookingStatus(id, status);
    load();
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this booking?")) {
      deleteBooking(id);
      load();
    }
  };

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Bookings Pipeline</h1>
          <p className="text-white/50">All submissions from the Get a Quote form appear here automatically.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="flex items-center gap-2 text-white/50 hover:text-white text-sm border border-white/10 px-3 py-2 rounded-lg hover:border-white/30 transition-colors">
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
          <Link href="/get-a-quote" target="_blank" className="bg-brand-neon text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-glow transition-colors">
            + New Quote Form
          </Link>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-24">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-xl font-bold mb-2">No Bookings Yet</h2>
          <p className="text-white/40 text-sm max-w-md">When visitors submit the quote form on your website, their details will automatically appear here in real-time.</p>
          <Link href="/get-a-quote" target="_blank" className="mt-6 bg-brand-neon text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-glow transition-colors">
            Submit a Test Quote →
          </Link>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {columns.map((col) => {
            const Icon = col.icon;
            const colBookings = bookings.filter(b => b.status === col.id);

            return (
              <div key={col.id} className="bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col overflow-hidden">
                {/* Column Header */}
                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${col.bg}`}>
                      <Icon className={`w-4 h-4 ${col.color}`} />
                    </div>
                    <h2 className="font-bold text-sm">{col.title}</h2>
                  </div>
                  <span className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-full font-bold">{colBookings.length}</span>
                </div>

                {/* Cards */}
                <div className="p-3 flex-1 overflow-y-auto space-y-3">
                  {colBookings.length === 0 && (
                    <p className="text-white/20 text-xs text-center py-8">No bookings here</p>
                  )}
                  {colBookings.map((bkg, index) => (
                    <motion.div
                      key={bkg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-[#111] border border-white/10 p-4 rounded-xl hover:border-white/20 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold tracking-wider text-white/40">{bkg.id}</span>
                        <div className="flex items-center gap-1">
                          <button onClick={() => handleDelete(bkg.id)} className="text-white/20 hover:text-red-400 p-1 transition-colors">
                            <Trash2 className="w-3 h-3" />
                          </button>
                          <button onClick={() => setExpandedId(expandedId === bkg.id ? null : bkg.id)} className="text-white/40 hover:text-white p-1">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <h3 className="font-bold text-sm mb-1">{bkg.firstName} {bkg.lastName}</h3>
                      <div className="flex flex-wrap gap-1 text-xs text-white/60 mb-2">
                        <span className="bg-white/5 px-2 py-0.5 rounded">{bkg.eventType}</span>
                        <span className="bg-white/5 px-2 py-0.5 rounded">{bkg.city}</span>
                        <span className="bg-white/5 px-2 py-0.5 rounded">{bkg.date || "Date TBD"}</span>
                      </div>

                      <div className="text-brand-neon font-bold text-xs mb-3">{bkg.booth} • {bkg.hours}hrs</div>

                      {expandedId === bkg.id && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-white/5 pt-3 mt-2 space-y-2 text-xs text-white/60">
                          <div className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-brand-neon" /> {bkg.email}</div>
                          <div className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-brand-neon" /> {bkg.phone}</div>
                          {bkg.venue && <div>📍 {bkg.venue}</div>}
                          {bkg.addons?.length > 0 && <div>➕ {bkg.addons.join(", ")}</div>}
                          {bkg.notes && <div className="text-white/40 italic">"{bkg.notes}"</div>}
                          <div className="font-bold text-white">PKR {formatPKR(bkg.estimatedTotal)}</div>
                        </motion.div>
                      )}

                      {/* Status Actions */}
                      <div className="flex gap-1 mt-3">
                        {col.id !== "confirmed" && (
                          <button onClick={() => handleStatus(bkg.id, "confirmed")}
                            className="flex-1 text-[10px] font-bold py-1.5 rounded-lg bg-brand-neon/10 text-brand-neon hover:bg-brand-neon hover:text-white transition-colors">
                            Confirm
                          </button>
                        )}
                        {col.id !== "completed" && (
                          <button onClick={() => handleStatus(bkg.id, "completed")}
                            className="flex-1 text-[10px] font-bold py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors">
                            Complete
                          </button>
                        )}
                        {col.id !== "pending" && (
                          <button onClick={() => handleStatus(bkg.id, "pending")}
                            className="flex-1 text-[10px] font-bold py-1.5 rounded-lg bg-white/5 text-white/50 hover:bg-white/10 transition-colors">
                            Revert
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
