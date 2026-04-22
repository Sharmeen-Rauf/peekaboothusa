"use client";

import { motion } from "framer-motion";
import { Search, Mail, Phone, ExternalLink } from "lucide-react";

const clients = [
  { id: "C-001", name: "Ayesha Malik", email: "ayesha.m@example.com", phone: "0300-1234567", events: 1, totalSpent: "PKR 65,000", lastActive: "Oct 24, 2024" },
  { id: "C-002", name: "TechCorp Inc.", email: "events@techcorp.pk", phone: "042-9876543", events: 3, totalSpent: "PKR 250,000", lastActive: "Nov 02, 2024" },
  { id: "C-003", name: "Zain Ali", email: "zainali88@gmail.com", phone: "0321-7654321", events: 1, totalSpent: "PKR 45,000", lastActive: "Oct 28, 2024" },
  { id: "C-004", name: "Fatima Noor", email: "fatima.noor@hotmail.com", phone: "0333-1122334", events: 2, totalSpent: "PKR 90,000", lastActive: "Nov 15, 2024" },
  { id: "C-005", name: "Hassan Raza", email: "hassan.r@yahoo.com", phone: "0301-9988776", events: 1, totalSpent: "PKR 50,000", lastActive: "Oct 29, 2024" },
];

export default function ClientsCRM() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Clients CRM</h1>
          <p className="text-white/50">Manage your customer relationships and history</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2 w-full md:w-64 focus-within:border-brand-neon/50 transition-colors">
            <Search className="w-4 h-4 text-white/40" />
            <input type="text" placeholder="Search clients..." className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-white/40" />
          </div>
          <button className="bg-brand-neon text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-glow transition-colors whitespace-nowrap">
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/70">
            <thead className="bg-black/40 text-white/40 text-xs uppercase font-bold tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Total Events</th>
                <th className="px-6 py-4">Lifetime Value</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clients.map((client, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={client.id} 
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="font-bold text-white">{client.name}</div>
                    <div className="text-[10px] text-white/30">{client.id}</div>
                  </td>
                  <td className="px-6 py-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs"><Mail className="w-3 h-3 text-brand-neon" /> {client.email}</div>
                    <div className="flex items-center gap-2 text-xs"><Phone className="w-3 h-3 text-brand-neon" /> {client.phone}</div>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <span className="bg-white/10 px-2 py-1 rounded text-white">{client.events}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-emerald-400">
                    {client.totalSpent}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    {client.lastActive}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-white/40 hover:text-brand-neon transition-colors p-2">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
