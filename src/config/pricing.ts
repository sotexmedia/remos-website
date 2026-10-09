// Pricing plans. Prices and inclusions are NOT final: until they are, every
// plan shows "Contact us" and the inclusions below are the capabilities
// Rem.os has today, not plan limits.
//
// To publish prices: set `monthly` / `yearly` (numbers, per month) on each
// plan. The monthly/yearly toggle appears as soon as any plan has both.

export type Plan = {
  name: string;
  audience: string;
  /** Price per month, or null for "Contact us". */
  monthly: number | null;
  /** Price per month when billed yearly, or null. */
  yearly: number | null;
  cta: string;
  /** Highlights the plan. */
  featured?: boolean;
  /** Optional label over a plan, e.g. "Most popular". Only use once it's true. */
  badge?: string;
  features: string[];
};

export const pricingIsPlaceholder = true;

export const plans: Plan[] = [
  {
    name: "Solo",
    audience: "For the independent photographer",
    monthly: null,
    yearly: null,
    cta: "Get Started",
    features: [
      "Online booking with live prices",
      "Scheduling with real drive times",
      "Branded delivery and pay-to-download",
      "Invoices and card payments",
    ],
  },
  {
    name: "Team",
    audience: "For growing media teams",
    monthly: null,
    yearly: null,
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Solo",
      "Multiple photographers and editors",
      "Service areas and travel fees",
      "Photographer mobile portal and texting",
      "Editor task workspace",
    ],
  },
  {
    name: "Company",
    audience: "For established media companies",
    monthly: null,
    yearly: null,
    cta: "Talk to us",
    features: [
      "Everything in Team",
      "Custom order pages per client",
      "Business metrics and reporting",
      "API and AI assistant connection",
      "CRM workflows through webhooks",
    ],
  },
];
