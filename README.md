# Rem.os website

The public marketing website for Rem.os, the all-in-one platform for real
estate media businesses. The app itself lives in `sotexmedia/remos`; this
site has no database or secrets and deploys on its own.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion for
React, Lucide icons and the Geist font.

## Editing content

| What | Where |
|---|---|
| Button destinations, contact email, social links | `src/config/site.ts` (values come from environment variables, below) |
| Pricing plans, prices, monthly/yearly | `src/config/pricing.ts` |
| FAQ questions and answers | `src/config/faq.ts` |
| Customer logos (social proof strip) | `customerLogos` in `src/components/sections/proof.tsx` |
| Feature showcase copy | `FEATURES` in `src/components/sections/features.tsx` |
| Terms and Privacy pages | `src/app/terms`, `src/app/privacy` (placeholders until the real policies exist) |

Only describe what the app actually does. The product visuals are mockups
built in code (`src/components/mockups`) with sample data and are labelled
"Illustrative mockup"; swap them for real screenshots when available.

### Pricing

Prices are not final, so every plan shows "Let's talk" and links to a demo.
To publish prices set `monthly` (and optionally `yearly`) on each plan and
`pricingIsPlaceholder = false`. The monthly/yearly toggle appears when any
plan has both. Add `badge: "Most popular"` to a plan only once it's true.

## Settings

Set these in Vercel → Project → Settings → Environment Variables, then
redeploy. See `.env.example`.

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_APP_URL` | The app's address (default `https://app.remos.media`). "Log In" goes to its `/login`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Where "Book a Demo" emails, and the Contact link. |
| `NEXT_PUBLIC_DEMO_URL` | Optional scheduling link (Calendly, Cal.com, ...) for "Book a Demo" instead of email. |
| `NEXT_PUBLIC_GET_STARTED_URL` | Optional override for "Get Started". Defaults to the sign-up page, `https://app.remos.media/start`. |
| `NEXT_PUBLIC_SITE_URL` | This site's address once it has a domain (for link previews and the sitemap). |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `_LINKEDIN_URL`, `_YOUTUBE_URL`, `_X_URL` | Footer social icons; empty ones are hidden. |

## Working on it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```
