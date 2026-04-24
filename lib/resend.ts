import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function sendBookingConfirmationEmail(email: string, bookingId: string, name: string) {
  try {
    await resend.emails.send({
      from: "Peekabooth PK <info@peekaboothpk.com>",
      to: email,
      subject: `Booking Confirmed: ${bookingId}`,
      html: `
        <h1>Hi ${name},</h1>
        <p>Your booking <strong>${bookingId}</strong> has been successfully received and is currently being processed.</p>
        <p>You can track your event status in your <a href="https://peekaboothpk.com/portal">Client Portal</a>.</p>
        <p>Thank you for choosing Peekabooth!</p>
      `,
    });
    return true;
  } catch (error) {
    console.error("Resend Error:", error);
    return false;
  }
}
