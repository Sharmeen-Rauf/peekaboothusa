import type { Metadata } from "next";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = {
  title: "Get A Quote | Peekabooth USA",
  description: "Request a personalized photo booth rental quote for your wedding, corporate event, or private party. Choose your booth and tell us about your event.",
};

export default function GetAQuotePage() {
  return <QuoteClient />;
}
