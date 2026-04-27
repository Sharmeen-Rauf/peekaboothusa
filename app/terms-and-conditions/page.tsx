import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions | Peek-A-Booth PK",
  description: "Read Peek-A-Booth PK's Terms and Conditions for photo booth rental services in Pakistan. Understand our booking policy, cancellations, liability, and more.",
};

export default function TermsPage() {
  return <TermsClient />;
}
