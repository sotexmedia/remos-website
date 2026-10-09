// Links out of the website. Set these in Vercel → Settings → Environment
// Variables (see .env.example); they are read at build time.

const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "").trim().replace(/\/+$/, "");
const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "").trim();

export const site = {
  /** The app's sign-in page, or null until NEXT_PUBLIC_APP_URL is set. */
  signIn: appUrl ? `${appUrl}/login` : null,
  /** The app's public booking page, or null until NEXT_PUBLIC_APP_URL is set. */
  booking: appUrl ? `${appUrl}/book` : null,
  /** "Book a demo": email if set, else sign-in, else the FAQ. */
  demo: contactEmail
    ? `mailto:${contactEmail}?subject=${encodeURIComponent("REM.OS demo")}`
    : appUrl
      ? `${appUrl}/login`
      : "#faq",
};
