import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Calendar, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { formatPKR } from "@/lib/bookingStore";

export default async function StaffDashboard() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  // Fetch assignments for the logged-in staff member
  const assignments = await prisma.staffAssignment.findMany({
    where: {
      staff: {
        email: user.emailAddresses[0].emailAddress
      }
    },
    include: {
      booking: {
        include: {
          booth: true
        }
      }
    },
    orderBy: {
      booking: {
        date: "asc"
      }
    }
  });

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Staff <span className="text-brand-neon">Portal</span></h1>
            <p className="text-white/50">Welcome back, {user.firstName || "Team Member"}. Here are your assigned events.</p>
          </div>
        </div>

        {assignments.length === 0 ? (
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white/20" />
            </div>
            <h2 className="text-xl font-bold mb-2">No Assignments Yet</h2>
            <p className="text-white/40 max-w-sm mx-auto">You don't have any events assigned to you right now. Check back later or contact your manager.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {assignments.map((assignment) => {
              const b = assignment.booking;
              return (
                <div key={assignment.id} className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-brand-neon/30 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          assignment.status === "COMPLETED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                          assignment.status === "ARRIVED" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                          "bg-brand-neon/10 text-brand-neon border border-brand-neon/20"
                        }`}>
                          {assignment.status}
                        </span>
                        <span className="text-white/30 text-xs font-medium">#{b.bookingId}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold">{b.eventType} at {b.venue}</h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Calendar className="w-4 h-4 text-brand-neon" />
                          {new Date(b.date).toLocaleDateString("en-PK", { dateStyle: "long" })}
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Clock className="w-4 h-4 text-brand-neon" />
                          {b.startTime} ({b.hours} Hours)
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin className="w-4 h-4 text-brand-neon" />
                          {b.city}
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-neon" />
                          {b.booth.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 shrink-0">
                      <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
                        View Setup Instructions
                      </button>
                      <button className="bg-brand-neon hover:bg-brand-glow text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(247,54,168,0.3)]">
                        Mark Arrival
                      </button>
                    </div>
                  </div>
                  
                  {b.notes && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="flex items-start gap-2 text-yellow-500/80 bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/10">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs leading-relaxed"><span className="font-bold uppercase tracking-wider text-[10px] mr-2">Client Notes:</span> {b.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
