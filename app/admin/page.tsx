"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "PKR 1,250,000", change: "+12.5%", icon: DollarSign },
  { label: "Active Bookings", value: "24", change: "+4", icon: Calendar },
  { label: "Total Clients", value: "156", change: "+12", icon: Users },
  { label: "Conversion Rate", value: "32%", change: "+2.4%", icon: TrendingUp },
];

const recentBookings = [
  { id: "BKG-001", client: "Ali Khan", event: "Wedding", date: "Oct 24, 2024", amount: "PKR 65,000", status: "Confirmed" },
  { id: "BKG-002", client: "Sara Ahmed", event: "Birthday", date: "Oct 28, 2024", amount: "PKR 45,000", status: "Pending" },
  { id: "BKG-003", client: "TechCorp Inc.", event: "Corporate", date: "Nov 02, 2024", amount: "PKR 110,000", status: "Completed" },
  { id: "BKG-004", client: "Fatima Noor", event: "Baby Shower", date: "Nov 15, 2024", amount: "PKR 40,000", status: "Confirmed" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Overview</h1>
        <p className="text-white/50">Welcome back! Here&apos;s what&apos;s happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-neon" />
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-md">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-white/50 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart (Mocked with CSS) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold">Revenue Overview</h2>
            <select className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/70 outline-none">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          
          <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 pt-10 h-[250px]">
            {/* Bars */}
            {[
              { month: "May", height: "40%" },
              { month: "Jun", height: "55%" },
              { month: "Jul", height: "35%" },
              { month: "Aug", height: "70%" },
              { month: "Sep", height: "85%" },
              { month: "Oct", height: "60%" },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center group">
                <div className="w-full relative flex justify-center">
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: d.height }} transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="w-full max-w-[40px] bg-white/5 group-hover:bg-brand-neon/80 rounded-t-sm transition-colors relative"
                    style={{ height: d.height }}
                  >
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 text-xs px-2 py-1 rounded">
                      {d.height}
                    </div>
                  </motion.div>
                </div>
                <span className="text-xs text-white/40 mt-3">{d.month}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Recent Bookings</h2>
            <button className="text-brand-neon text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-5">
            {recentBookings.map(bkg => (
              <div key={bkg.id} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div>
                  <p className="font-bold text-sm">{bkg.client}</p>
                  <p className="text-white/40 text-xs mt-0.5">{bkg.event} • {bkg.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">{bkg.amount}</p>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-1 ${
                    bkg.status === "Confirmed" ? "bg-emerald-500/10 text-emerald-400" :
                    bkg.status === "Pending" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-white/10 text-white/70"
                  }`}>
                    {bkg.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
