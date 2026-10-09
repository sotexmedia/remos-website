# REM.OS website

The public product website for REM.OS: one page (`src/app/page.tsx`) built
with Next.js and Tailwind, in the same dark navy look as the app. It has no
database or secrets, so it deploys anywhere Next.js runs.

The app itself lives in a separate repository (`sotexmedia/remos`).

## Settings

Set these in Vercel → Project → Settings → Environment Variables (see
`.env.example`), then redeploy:

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_APP_URL` | The app's address, e.g. `https://app.example.com`. Shows "Sign in" and "See the booking page". |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Where "Book a demo" emails. Without it the button goes to the app's sign-in. |

## Working on it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```
