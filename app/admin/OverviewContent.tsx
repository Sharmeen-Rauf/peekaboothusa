"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { formatPKR } from "@/lib/bookingStore";

type Stat = {
  label: string;
  value: string;
  change: string;
  icon: any;
};

export default function OverviewContent({ 
  stats, 
  boothRevenue, 
  totalRevenue, 
  recentBookings 
}: { 
  stats: Stat[], 
  boothRevenue: Record<string, number>, 
  totalRevenue: number,
  recentBookings: any[]
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
          <p className="text-white/50">SaaS Dashboard: Real-time business analytics.</p>
        </div>
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
            <p className="text-white/30 text-sm text-center py-10">No bookings yet.</p>
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

          {recentBookings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/40 text-sm">No bookings yet.</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto max-h-[400px] pr-1">
              {recentBookings.map(bkg => (
                <div key={bkg.id} className="flex items-start justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0 gap-4">
                  <div className="min-w-0">
                    <p className="font-bold text-sm">{bkg.client.name}</p>
                    <p className="text-white/40 text-xs mt-0.5 truncate">{bkg.booth.name} • {bkg.eventType} • {bkg.city}</p>
                    <p className="text-white/30 text-[10px] mt-0.5">{new Date(bkg.date).toLocaleDateString()} — {bkg.venue}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-sm text-brand-neon">PKR {formatPKR(bkg.totalPrice)}</p>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 ${
                      bkg.status === "CONFIRMED" ? "bg-emerald-500/10 text-emerald-400" :
                      bkg.status === "PENDING" ? "bg-yellow-500/10 text-yellow-400" :
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
