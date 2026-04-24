import prisma from "@/lib/prisma";
import OverviewContent from "./OverviewContent";
import { DollarSign, Calendar, Users, TrendingUp } from "lucide-react";
import { formatPKR } from "@/lib/bookingStore";

export default async function AdminOverview() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        client: true,
        booth: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    const totalRevenue = bookings.reduce((sum: number, b: any) => sum + (b.totalPrice || 0), 0);
    const pendingCount = bookings.filter((b: any) => b.status === "PENDING").length;
    const confirmedCount = bookings.filter((b: any) => b.status === "CONFIRMED").length;
    const conversionRate = bookings.length ? Math.round((confirmedCount / bookings.length) * 100) : 0;

    const boothRevenue: Record<string, number> = {};
    bookings.forEach((b: any) => {
      const name = b.booth?.name || "Unknown Booth";
      boothRevenue[name] = (boothRevenue[name] || 0) + (b.totalPrice || 0);
    });

    const stats = [
      { label: "Total Revenue", value: `PKR ${formatPKR(totalRevenue)}`, change: `${bookings.length} bookings`, icon: "revenue" },
      { label: "Pending Inquiries", value: String(pendingCount), change: "Action required", icon: "pending" },
      { label: "Total Clients", value: String(bookings.length), change: "In DB", icon: "clients" },
      { label: "Conversion Rate", value: `${conversionRate}%`, change: "Confirmed vs total", icon: "conversion" },
    ];

    return (
      <OverviewContent 
        stats={stats} 
        boothRevenue={boothRevenue} 
        totalRevenue={totalRevenue} 
        recentBookings={bookings.slice(0, 8)}
      />
    );
  } catch (error: any) {
    console.error("ADMIN_DASHBOARD_ERROR:", error);
    return (
      <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
        <h2 className="text-xl font-bold text-red-500 mb-2">Database Error</h2>
        <p className="text-white/60 text-sm">Could not connect to the database. Please check your DATABASE_URL in Vercel.</p>
        <pre className="mt-4 p-4 bg-black/50 rounded text-xs text-left overflow-auto max-w-full">
          {error.message}
        </pre>
      </div>
    );
  }
}
