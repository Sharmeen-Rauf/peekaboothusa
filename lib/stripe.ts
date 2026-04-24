import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16" as any,
  typescript: true,
});

export async function createCheckoutSession(bookingId: string, amount: number, customerEmail: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr",
            product_data: {
              name: `Peekabooth Rental - ${bookingId}`,
              description: "Premium Photo Booth Experience",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/portal/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/portal/dashboard`,
      customer_email: customerEmail,
      metadata: {
        bookingId,
      },
    });

    return session.url;
  } catch (error) {
    console.error("Stripe Error:", error);
    return null;
  }
}
