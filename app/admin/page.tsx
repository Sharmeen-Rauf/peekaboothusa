"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users, Calendar, TrendingUp, RefreshCw } from "lucide-react";
import { getBookings, BookingSubmission, formatPKR } from "@/lib/bookingStore";
import Link from "next/link";

export default function AdminOverview() {
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);

  const loadData = () => {
    setBookings(getBookings());
  };

  useEffect(() => {
    loadData();
    // Refresh every 5 seconds to catch new submissions
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalRevenue = bookings.reduce((sum, b) => sum + b.estimatedTotal, 0);
  const pendingCount = bookings.filter(b => b.status === "pending").length;
  const confirmedCount = bookings.filter(b => b.status === "confirmed").length;
  const conversionRate = bookings.length ? Math.round((confirmedCount / bookings.length) * 100) : 0;

  // Revenue by booth
  const boothRevenue: Record<string, number> = {};
  bookings.forEach(b => {
    boothRevenue[b.booth] = (boothRevenue[b.booth] || 0) + b.estimatedTotal;
  });
  const topBooth = Object.entries(boothRevenue).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  const stats = [
    { label: "Total Est. Revenue", value: `PKR ${formatPKR(totalRevenue)}`, change: `${bookings.length} bookings`, icon: DollarSign },
    { label: "New Inquiries", value: String(pendingCount), change: "Pending review", icon: Calendar },
    { label: "Total Clients", value: String(bookings.length), change: "All time", icon: Users },
    { label: "Conversion Rate", value: `${conversionRate}%`, change: "Confirmed vs total", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
          <p className="text-white/50">Live data from your website quote form.</p>
        </div>
        <button onClick={loadData} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm border border-white/10 px-3 py-2 rounded-lg hover:border-white/30">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-neon" />
                </div>
                <div className="flex items-center gap-1 text-brand-neon text-xs font-bold bg-brand-neon/10 px-2 py-1 rounded-md">
                  <ArrowUpRight className="w-3 h-3" />{stat.change}
                </div>
              </div>
              <h3 className="text-white/50 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-xl font-bold break-all">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Booths */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="lg:col-span-1 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-6">Revenue by Booth</h2>
          {Object.keys(boothRevenue).length === 0 ? (
            <p className="text-white/30 text-sm text-center py-10">No bookings yet. Submit a quote form to see data here.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(boothRevenue).sort((a, b) => b[1] - a[1]).map(([booth, rev]) => {
                const pct = Math.round((rev / totalRevenue) * 100);
                return (
                  <div key={booth}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70 font-medium">{booth}</span>
                      <span className="text-white font-bold">PKR {formatPKR(rev)}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-brand-neon rounded-full" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Recent Submissions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Recent Submissions</h2>
            <Link href="/admin/bookings" className="text-brand-neon text-sm hover:underline">View All →</Link>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">📋</div>
              <p className="text-white/40 text-sm">No bookings yet.</p>
              <p className="text-white/20 text-xs mt-1">Submit a quote from the website to see it here.</p>
              <Link href="/get-a-quote" className="inline-flex mt-4 text-brand-neon text-sm hover:underline">
                Go to Get a Quote →
              </Link>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[400px] pr-1">
              {[...bookings].reverse().slice(0, 8).map(bkg => (
                <div key={bkg.id} className="flex items-start justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0 gap-4">
                  <div className="min-w-0">
                    <p className="font-bold text-sm">{bkg.firstName} {bkg.lastName}</p>
                    <p className="text-white/40 text-xs mt-0.5 truncate">{bkg.booth} • {bkg.eventType} • {bkg.city}</p>
                    <p className="text-white/30 text-[10px] mt-0.5">{bkg.date || "Date TBD"} — {bkg.venue || "Venue TBD"}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-sm text-brand-neon">PKR {formatPKR(bkg.estimatedTotal)}</p>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 ${
                      bkg.status === "confirmed" ? "bg-emerald-500/10 text-emerald-400" :
                      bkg.status === "pending" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-white/10 text-white/70"
                    }`}>{bkg.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
