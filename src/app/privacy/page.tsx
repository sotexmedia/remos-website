import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false }, alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <LegalPlaceholder title="Privacy Policy" />;
}
