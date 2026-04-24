"use server";

import prisma from "@/lib/prisma";
import { calculatePrice } from "@/lib/pricing";
import { revalidatePath } from "next/cache";

import { sendBookingConfirmationEmail } from "@/lib/resend";

export async function createBooking(formData: any) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      startTime,
      venue,
      notes,
      eventType,
      city,
      boothId,
      hours,
      addons
    } = formData;

    // 1. Calculate Price on Server
    const pricing = calculatePrice({
      boothId,
      hours,
      date: new Date(date),
      city,
      addons
    });

    // 2. Find or Create User (Client)
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: `${firstName} ${lastName}`,
          role: "CLIENT"
        }
      });
    }

    // 3. Create Booking
    const bookingCount = await prisma.booking.count();
    const booking = await prisma.booking.create({
      data: {
        bookingId: `BKG-${String(bookingCount + 1).padStart(3, "0")}`,
        status: "PENDING",
        eventType,
        city,
        date: new Date(date),
        startTime,
        hours,
        venue,
        notes,
        basePrice: pricing.basePrice,
        addonsPrice: pricing.addonsPrice,
        extraHoursPrice: pricing.extraHoursPrice,
        totalPrice: pricing.totalPrice,
        clientId: user.id,
        boothId: boothId || "party", 
      }
    });

    // 4. Send Confirmation Email (Async)
    await sendBookingConfirmationEmail(email, booking.bookingId, `${firstName} ${lastName}`);

    revalidatePath("/admin/bookings");
    revalidatePath("/portal/dashboard");

    return { success: true, bookingId: booking.bookingId };
  } catch (error) {
    console.error("Booking Creation Error:", error);
    return { success: false, error: "Failed to create booking" };
  }
}
