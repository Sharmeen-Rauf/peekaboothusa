import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Calendar, CreditCard, Image as ImageIcon, Package, CheckCircle2, Clock } from "lucide-react";
import { formatPKR } from "@/lib/bookingStore";
import Link from "next/link";

export default async function ClientDashboard() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  // Fetch bookings for the logged-in client
  const bookings = await prisma.booking.findMany({
    where: {
      client: {
        email: user.emailAddresses[0].emailAddress
      }
    },
    include: {
      booth: true,
      invoice: true
    },
    orderBy: {
      date: "desc"
    }
  });

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Client <span className="text-brand-neon">Dashboard</span></h1>
            <p className="text-white/50">Manage your events, view invoices, and access your media galleries.</p>
          </div>
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-brand-neon hover:bg-brand-glow text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(247,54,168,0.3)]">
            Book New Event
          </Link>
        </div>

        {bookings.length === 0 ? (
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-16 text-center">
            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-10 h-10 text-white/20" />
            </div>
            <h2 className="text-2xl font-bold mb-3">No Bookings Found</h2>
            <p className="text-white/40 max-w-sm mx-auto mb-10">You haven't booked any events with us yet. Ready to make some memories?</p>
            <Link href="/get-a-quote" className="text-brand-neon font-bold hover:underline">Start a Quote →</Link>
          </div>
        ) : (
          <div className="grid gap-8">
            {bookings.map((b) => (
              <div key={b.id} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:border-brand-neon/30 transition-all group overflow-hidden relative">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[100px] pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                  {/* Event Summary */}
                  <div className="flex-grow space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                        b.status === "CONFIRMED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                        b.status === "PENDING" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                        "bg-white/10 text-white/50 border border-white/20"
                      }`}>
                        {b.status}
                      </span>
                      <span className="text-white/30 text-xs font-bold">EVENT ID: #{b.bookingId}</span>
                    </div>

                    <div>
                      <h2 className="text-3xl font-black mb-2">{b.eventType}</h2>
                      <p className="text-white/60 font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-brand-neon" /> {new Date(b.date).toLocaleDateString("en-PK", { dateStyle: "full" })}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <Package className="w-5 h-5 text-brand-neon" />
                        </div>
                        <div>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Booth Experience</p>
                          <p className="font-bold">{b.booth.name}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <CreditCard className="w-5 h-5 text-brand-neon" />
                        </div>
                        <div>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Total Amount</p>
                          <p className="font-bold">PKR {formatPKR(b.totalPrice)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Status */}
                  <div className="lg:w-80 flex flex-col gap-4 justify-center border-l border-white/5 lg:pl-10">
                    <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                      <CreditCard className="w-4 h-4" /> View Invoice
                    </button>
                    {b.status === "COMPLETED" ? (
                      <button className="w-full bg-brand-neon hover:bg-brand-glow text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(247,54,168,0.4)] flex items-center justify-center gap-2">
                        <ImageIcon className="w-4 h-4" /> Access Gallery
                      </button>
                    ) : (
                      <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Status Update</p>
                        <p className="text-xs text-white/70 font-medium">Your event is scheduled. Gallery will be available after the event.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
