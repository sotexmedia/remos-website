// Everything the website links to lives here. Most of it comes from
// environment variables (Vercel → Settings → Environment Variables, see
// .env.example) so links can change without touching code.

// Each variable is named in full: Next.js only bakes NEXT_PUBLIC_* values
// into the browser bundle when they are written out literally like this.
const clean = (value: string | undefined) => (value ?? "").trim();

const appUrl = (clean(process.env.NEXT_PUBLIC_APP_URL) || "https://app.remos.media").replace(/\/+$/, "");
const contactEmail = clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL);

const demoUrl =
  clean(process.env.NEXT_PUBLIC_DEMO_URL) ||
  (contactEmail ? `mailto:${contactEmail}?subject=${encodeURIComponent("Rem.os demo")}` : "#contact");

export const site = {
  name: "Rem.os",
  tagline: "The operating system for real estate media",
  description:
    "Booking, scheduling, production, delivery and payments for real estate media businesses, in one platform.",

  /** The public address of this website, for metadata and the sitemap. */
  url:
    clean(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/+$/, "") ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),

  contactEmail: contactEmail || null,

  links: {
    /** "Log In": the app's sign-in page. */
    login: `${appUrl}/login`,
    /** "Book a Demo": a scheduling link, else email, else the contact section. */
    demo: demoUrl,
    /** "Get Started": the app's sign-up page. */
    getStarted: clean(process.env.NEXT_PUBLIC_GET_STARTED_URL) || "https://app.remos.media/start",
    contact: contactEmail ? `mailto:${contactEmail}` : "#contact",
  },

  /** Social profiles. Leave a value empty to hide its icon. */
  social: {
    instagram: clean(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: clean(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    youtube: clean(process.env.NEXT_PUBLIC_YOUTUBE_URL),
    x: clean(process.env.NEXT_PUBLIC_X_URL),
  },
};

export const nav = [
  { label: "Product", href: "/#product" },
  { label: "Features", href: "/#features" },
  { label: "AI", href: "/#ai" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faq" },
];
