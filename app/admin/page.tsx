import prisma from "@/lib/prisma";
import OverviewContent from "./OverviewContent";
import { DollarSign, Calendar, Users, TrendingUp } from "lucide-react";
import { formatPKR } from "@/lib/bookingStore";

export default async function AdminOverview() {
  const bookings = await prisma.booking.findMany({
    include: {
      client: true,
      booth: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const totalRevenue = bookings.reduce((sum: number, b) => sum + b.totalPrice, 0);
  const pendingCount = bookings.filter(b => b.status === "PENDING").length;
  const confirmedCount = bookings.filter(b => b.status === "CONFIRMED").length;
  const conversionRate = bookings.length ? Math.round((confirmedCount / bookings.length) * 100) : 0;

  // Revenue by booth
  const boothRevenue: Record<string, number> = {};
  bookings.forEach(b => {
    boothRevenue[b.booth.name] = (boothRevenue[b.booth.name] || 0) + b.totalPrice;
  });

  const stats = [
    { label: "Total Revenue", value: `PKR ${formatPKR(totalRevenue)}`, change: `${bookings.length} bookings`, icon: DollarSign },
    { label: "Pending Inquiries", value: String(pendingCount), change: "Action required", icon: Calendar },
    { label: "Total Clients", value: String(bookings.length), change: "In DB", icon: Users },
    { label: "Conversion Rate", value: `${conversionRate}%`, change: "Confirmed vs total", icon: TrendingUp },
  ];

  return (
    <OverviewContent 
      stats={stats} 
      boothRevenue={boothRevenue} 
      totalRevenue={totalRevenue} 
      recentBookings={bookings.slice(0, 8)}
    />
  );
}
