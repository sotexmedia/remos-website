import {
  ArrowRight,
  Bot,
  CalendarDays,
  Camera,
  Check,
  CreditCard,
  Globe,
  MessageSquare,
  Receipt,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/site";

// The REM.OS product website: one page of static marketing copy. Where the
// buttons point (the app, the contact email) is set in src/site.ts.

export default function Home() {
  const demo = site.demo;
  return (
    <div className="overflow-x-clip bg-chrome text-ink">
      <Header demo={demo} />
      <main>
        <Hero demo={demo} />
        <Proof />
        <Features />
        <AiSection />
        <Lifecycle />
        <Roles />
        <Faq />
        <FinalCta demo={demo} />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header({ demo }: { demo: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-chrome/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/remos-logo-horizontal.svg" alt="REM.OS" className="h-5 w-auto sm:h-6" />
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#ai" className="hover:text-ink">AI</a>
          <a href="#workflow" className="hover:text-ink">Workflow</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          {site.signIn && (
            <a href={site.signIn} className="whitespace-nowrap rounded-lg px-2 py-2 text-sm text-ink-soft hover:text-ink sm:px-3">
              Sign in
            </a>
          )}
          <a href={demo} className="whitespace-nowrap rounded-lg bg-[#2f54ff] px-3 py-2 text-sm font-medium text-white sm:px-4 shadow-[0_0_24px_#2f54ff55] hover:bg-[#2443d9]">
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero({ demo }: { demo: string }) {
  return (
    <section className="relative">
      <Glow className="left-1/2 top-[-12rem] h-[36rem] w-[60rem] -translate-x-1/2 bg-[#2f54ff]/30" />
      <Grid />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
        <a href="#ai" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ink-soft hover:border-white/20">
          <Sparkles className="size-3.5 text-[#7d93ff]" />
          New: run your business from Claude or ChatGPT
          <ArrowRight className="size-3.5" />
        </a>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          The operating system for{" "}
          <span className="bg-gradient-to-r from-[#7d93ff] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">real estate media</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft text-pretty">
          Booking, scheduling, delivery and payments in one place. Agents book in a minute, your photographers know where to be,
          and the money is in before the photos leave.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={demo} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f54ff] px-6 py-3 font-medium text-white shadow-[0_0_40px_#2f54ff66] hover:bg-[#2443d9] sm:w-auto">
            Book a demo <ArrowRight className="size-4" />
          </a>
          {site.booking && (
            <a href={site.booking} className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:bg-white/10 sm:w-auto">
              See the booking page
            </a>
          )}
        </div>
        <HeroMock />
      </div>
    </section>
  );
}

function HeroMock() {
  const rows = [
    { time: "9:00", addr: "418 Lakeview Dr", who: "Pat", status: "Scheduled", tone: "bg-[#3b82f624] text-info" },
    { time: "11:30", addr: "72 Harbor Point", who: "Sam", status: "Editing", tone: "bg-accent-soft text-accent" },
    { time: "14:00", addr: "1200 Oak Ridge Ln", who: "Pat", status: "Delivered", tone: "bg-good-soft text-good" },
    { time: "16:15", addr: "9 Willow Ct", who: "Jo", status: "Requested", tone: "bg-warn-soft text-warn" },
  ];
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 to-white/0" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-canvas text-left shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-line bg-chrome px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 truncate text-xs text-muted">app.remos / dashboard</span>
        </div>
        <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[1fr_18rem]">
          <div className="min-w-0">
            <div className="grid grid-cols-3 gap-3">
              <MockStat label="Today" value="4 shoots" />
              <MockStat label="Unpaid" value="$1,240" />
              <MockStat label="This month" value="$18.6k" />
            </div>
            <div className="mt-4 rounded-xl border border-line bg-surface">
              <div className="flex items-center justify-between border-b border-line px-4 py-3 text-sm font-medium">
                Today&apos;s shoots <span className="text-xs font-normal text-muted">Thu, Oct 9</span>
              </div>
              <ul className="divide-y divide-line">
                {rows.map((r) => (
                  <li key={r.addr} className="flex items-center gap-3 px-4 py-3 text-sm">
                    <span className="w-11 shrink-0 tabular-nums text-muted">{r.time}</span>
                    <span className="min-w-0 flex-1 truncate">{r.addr}</span>
                    <span className="hidden text-muted sm:inline">{r.who}</span>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs ${r.tone}`}>{r.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden flex-col gap-3 md:flex">
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Route className="size-4 text-[#7d93ff]" /> Pat&apos;s route
              </div>
              <div className="mt-3 space-y-2 text-xs text-ink-soft">
                <p>Home → Lakeview · 18 min</p>
                <p>Lakeview → Oak Ridge · 24 min</p>
                <p className="text-good">Back home by 17:10</p>
              </div>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CreditCard className="size-4 text-good" /> Paid
              </div>
              <p className="mt-2 text-xs text-ink-soft">INV-1042 · 1200 Oak Ridge Ln</p>
              <p className="mt-1 text-xl font-semibold">$425.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface px-3 py-3 sm:px-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 truncate text-base font-semibold sm:text-lg">{value}</p>
    </div>
  );
}

/* ---------- Proof strip ---------- */

function Proof() {
  const items = [
    ["1 min", "for an agent to book a shoot"],
    ["0", "unpaid downloads: pay, then download"],
    ["5", "property website designs, built in"],
    ["24/7", "online booking with live prices"],
  ];
  return (
    <section className="border-y border-white/5 bg-canvas/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {items.map(([n, t]) => (
          <div key={t}>
            <p className="text-3xl font-semibold tracking-tight">{n}</p>
            <p className="mt-1 text-sm text-muted">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Features ---------- */

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: CalendarDays,
    title: "Online booking that knows your day",
    body: "Agents pick a package, see the live price and choose a time that actually fits: drive times, photographer hours and service areas all counted.",
  },
  {
    icon: Route,
    title: "Scheduling with real drive times",
    body: "Every shoot is fitted into a real route from Google Maps. When a booking doesn't fit, you get the reason in plain English.",
  },
  {
    icon: Camera,
    title: "Delivery that gets you paid",
    body: "Send one link: watermarked previews, pay by card, then download full size or MLS-sized. Agents tap a photo to request a change.",
  },
  {
    icon: Receipt,
    title: "Invoices and payments",
    body: "Numbered invoices with your logo and terms, card payments through Stripe, and one-click reminders for everything overdue.",
  },
  {
    icon: Globe,
    title: "Property websites",
    body: "A listing site for every shoot in five designs, with price, features, open house, video, 3D tour and a full-screen gallery.",
  },
  {
    icon: Workflow,
    title: "Connected to your CRM",
    body: "Every step can fire your GoHighLevel workflows, so emails and texts go out from the tools you already use.",
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionTitle
          eyebrow="Everything in one place"
          title="From the first booking to the final payment"
          body="Stop stitching together a calendar, a form builder, a file host and an invoicing tool. REM.OS does the whole job."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group bg-canvas p-7 transition-colors hover:bg-surface">
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-[#2f54ff]/15 text-[#7d93ff] transition-colors group-hover:bg-[#2f54ff]/25">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AI ---------- */

function AiSection() {
  const points = [
    "Works with Claude, ChatGPT, Cursor and any MCP-compatible assistant",
    "Book, reschedule and add services to orders by just asking",
    "Check availability, unpaid invoices and today's tasks",
    "Read-only or read & write keys, revocable any time; every change is logged",
  ];
  return (
    <section id="ai" className="relative scroll-mt-20 border-y border-white/5 bg-canvas">
      <Glow className="right-[-10rem] top-10 h-[28rem] w-[40rem] bg-[#8b5cf6]/20" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-[#a78bfa]">
            <Bot className="size-4" /> REM.OS AI
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Run your studio by just asking</h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Connect REM.OS to the AI assistant you already use. It sees your real calendar, clients and invoices, and does the
            busywork for you.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-ink-soft">
                <Check className="mt-0.5 size-4 shrink-0 text-good" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Prefer automations? The same actions are an open REST API with an OpenAPI description, ready for n8n, Zapier and Make.
          </p>
        </div>
        <ChatMock />
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#a78bfa]/40 via-white/5 to-[#2f54ff]/40" aria-hidden />
      <div className="relative space-y-4 rounded-2xl bg-surface p-5 sm:p-6">
        <div className="flex items-center gap-2 border-b border-line pb-4 text-sm text-muted">
          <MessageSquare className="size-4" /> Your assistant · connected to REM.OS
        </div>
        <Bubble side="right">Book Dana Reyes for photos + drone at 55 Bay St, next Tuesday morning.</Bubble>
        <ToolCall name="getAvailability" detail="Tue Oct 14 · 55 Bay St" />
        <ToolCall name="createOrder" detail="Photos + Drone · 9:30 · Pat" />
        <Bubble side="left">
          Done. Dana is booked for <strong className="text-ink">Tuesday at 9:30</strong> with Pat (photos + drone, $385). She&apos;ll
          get the confirmation email from your CRM.
        </Bubble>
        <Bubble side="right">Who still owes us money from September?</Bubble>
        <ToolCall name="listInvoices" detail="unpaid · Sep 2026" />
        <Bubble side="left">Three invoices, $1,240 in total. Want me to send reminders?</Bubble>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "left" | "right"; children: React.ReactNode }) {
  return side === "right" ? (
    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#2f54ff] px-4 py-2.5 text-sm text-white">{children}</div>
  ) : (
    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-2.5 text-sm text-ink-soft">{children}</div>
  );
}

function ToolCall({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted">
      <span className="size-1.5 rounded-full bg-good" />
      <span className="text-[#a78bfa]">{name}</span>
      <span className="truncate">{detail}</span>
    </div>
  );
}

/* ---------- Lifecycle ---------- */

function Lifecycle() {
  const steps = [
    { n: "01", title: "Requested", body: "The agent books online, or you book for them. The price, travel fee and discounts are worked out for you." },
    { n: "02", title: "Scheduled", body: "The shoot lands on the right photographer's route and their Google Calendar, with access notes attached." },
    { n: "03", title: "Editing", body: "Uploads go straight from the phone. Editors get a task with the files and nothing they shouldn't see." },
    { n: "04", title: "Delivered", body: "The agent gets one link. They pay, they download, and the property website goes live." },
  ];
  return (
    <section id="workflow" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="How it works" title="One shoot, four steps, zero chasing" />
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rounded-2xl border border-white/10 bg-canvas p-6">
              {i < steps.length - 1 && (
                <span className="absolute right-[-1.25rem] top-9 hidden h-px w-5 bg-gradient-to-r from-white/20 to-transparent md:block" aria-hidden />
              )}
              <p className="font-mono text-sm text-[#7d93ff]">{s.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Roles ---------- */

function Roles() {
  const roles: { icon: LucideIcon; who: string; body: string }[] = [
    { icon: Users, who: "For agents", body: "Book in a minute, see every order and balance, pay by card and download in one place." },
    { icon: Smartphone, who: "For photographers", body: "Today's shoots with navigation, tap-to-call, \"On my way\" texts with ETA, and uploads from the phone." },
    { icon: ShieldCheck, who: "For you", body: "A dashboard of what needs you today, metrics, team and settings, with every change in the activity log." },
  ];
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-24 sm:px-6 md:grid-cols-3">
        {roles.map(({ icon: Icon, who, body }) => (
          <div key={who} className="rounded-2xl border border-white/10 bg-gradient-to-b from-surface to-canvas p-7">
            <Icon className="size-6 text-[#7d93ff]" />
            <h3 className="mt-4 text-lg font-semibold">{who}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

const FAQ = [
  {
    q: "Can I use my own brand?",
    a: "Yes. Upload your logo and pick your color in Settings; the booking pages, delivery links, invoices and property websites all use it.",
  },
  {
    q: "Which payment providers do you support?",
    a: "Card payments run through Stripe. Invoices can also show your own payment instructions for checks or bank transfers.",
  },
  {
    q: "How does the AI connection work?",
    a: "Create an API key in Settings and paste the connector link into Claude, ChatGPT or any MCP-compatible tool. Read-only keys can only look things up.",
  },
  {
    q: "Can I keep my existing data?",
    a: "Yes. REM.OS was built to move over an existing business, including clients, orders and invoices.",
  },
  {
    q: "Do my photographers need training?",
    a: "Not really. Their portal is one screen: today's shoots, directions, and buttons for \"I'm here\" and \"Shoot done\".",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/5 bg-canvas">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="FAQ" title="Questions, answered" />
        <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface/50">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}
                <span className="text-xl leading-none text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA & footer ---------- */

function FinalCta({ demo }: { demo: string }) {
  return (
    <section className="relative px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#2f54ff] to-[#1a2fa0] px-6 py-16 text-center sm:px-12">
        <Grid className="opacity-40" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl">
            Spend your time shooting, not chasing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            See how REM.OS runs bookings, routes, delivery and payments for your business.
          </p>
          <a href={demo} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-[#1a2fa0] hover:bg-white/90">
            Book a demo <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remos-logo-horizontal.svg" alt="REM.OS" className="h-5 w-auto opacity-80" />
        <nav className="flex gap-6">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#ai" className="hover:text-ink">AI</a>
          {site.booking && <a href={site.booking} className="hover:text-ink">Book a shoot</a>}
          {site.signIn && <a href={site.signIn} className="hover:text-ink">Sign in</a>}
        </nav>
        <p>© {new Date().getFullYear()} REM.OS</p>
      </div>
    </footer>
  );
}

/* ---------- Shared bits ---------- */

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium text-[#7d93ff]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-ink-soft text-pretty">{body}</p>}
    </div>
  );
}

function Glow({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

function Grid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] ${className}`}
    />
  );
}
