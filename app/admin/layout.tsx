"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu
} from "lucide-react";

const sidebarLinks = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
  { name: "Clients CRM", href: "/admin/clients", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* ── SIDEBAR (Desktop) ── */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-[#0a0a0a] fixed h-full z-20">
        <div className="p-6">
          <Link href="/" className="text-xl font-extrabold tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-brand-neon flex items-center justify-center text-white text-sm">P</span>
            Peekabooth
          </Link>
          <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1 ml-10">Admin OS</p>
        </div>

        <nav className="flex-1 px-4 mt-8 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative block">
                {isActive && (
                  <motion.div layoutId="activeNav" className="absolute inset-0 bg-brand-neon/10 border border-brand-neon/30 rounded-xl z-0" />
                )}
                <div className={`relative z-10 flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? "text-brand-neon font-bold" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-white/70" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-64 focus-within:border-brand-neon/50 transition-colors">
              <Search className="w-4 h-4 text-white/40" />
              <input type="text" placeholder="Search bookings or clients..." className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-white/40" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-neon rounded-full border-2 border-[#0a0a0a]" />
            </button>
            <div className="flex items-center gap-3 pl-5 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-neon to-brand-glow p-[2px]">
                <div className="w-full h-full bg-[#111] rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32" alt="Admin" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight">Admin User</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8 flex-1 overflow-x-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
