"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Mail, Phone, ExternalLink } from "lucide-react";
import { getBookings, BookingSubmission, formatPKR } from "@/lib/bookingStore";

export default function ClientsCRM() {
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);

  useEffect(() => {
    setBookings(getBookings());
    const interval = setInterval(() => setBookings(getBookings()), 5000);
    return () => clearInterval(interval);
  }, []);

  // Group bookings by email to create "Clients"
  const clientsMap = new Map<string, {
    name: string;
    email: string;
    phone: string;
    events: number;
    totalSpent: number;
    lastActive: string;
  }>();

  bookings.forEach(b => {
    if (!clientsMap.has(b.email)) {
      clientsMap.set(b.email, {
        name: `${b.firstName} ${b.lastName}`,
        email: b.email,
        phone: b.phone,
        events: 0,
        totalSpent: 0,
        lastActive: b.date || b.submittedAt
      });
    }
    const client = clientsMap.get(b.email)!;
    client.events += 1;
    // Only count confirmed or completed towards lifetime value for CRM
    if (b.status === "confirmed" || b.status === "completed") {
      client.totalSpent += b.estimatedTotal;
    }
    // Update last active if this booking is newer (simple string comparison works for ISO dates/YYYY-MM-DD)
    if (b.date && b.date > client.lastActive) {
      client.lastActive = b.date;
    }
  });

  const clients = Array.from(clientsMap.values());

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
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-white/40">
                    No clients yet. Bookings from the website will appear here.
                  </td>
                </tr>
              ) : (
                clients.map((client, i) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={client.email} 
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="font-bold text-white">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs"><Mail className="w-3 h-3 text-brand-neon" /> {client.email}</div>
                      <div className="flex items-center gap-2 text-xs"><Phone className="w-3 h-3 text-brand-neon" /> {client.phone}</div>
                    </td>
                    <td className="px-6 py-4 font-medium">
                      <span className="bg-white/10 px-2 py-1 rounded text-white">{client.events}</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-emerald-400">
                      PKR {formatPKR(client.totalSpent)}
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {client.lastActive ? new Date(client.lastActive).toLocaleDateString() : "Unknown"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-white/40 hover:text-brand-neon transition-colors p-2" title="View details">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
