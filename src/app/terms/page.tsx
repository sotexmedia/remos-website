import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of Service", robots: { index: false }, alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <LegalPlaceholder title="Terms of Service" />;
}
