"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BrowserFrame, PhoneFrame } from "@/components/mockups/frames";
import {
  BookingMockup,
  ClientMockup,
  GalleryMockup,
  InvoiceMockup,
  OrdersMockup,
  ReportsMockup,
  ScheduleMockup,
  TeamMockup,
} from "@/components/mockups/features";
import { ease } from "@/components/ui/motion";
import { ScaleBox } from "@/components/ui/scale-box";
import { Container, Glow, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

// Every claim here is something Rem.os does today. Check the app before
// adding a feature or benefit.
const FEATURES = [
  {
    id: "booking",
    label: "Online Booking",
    title: "Make booking effortless.",
    body: "Agents choose a package or individual services, see the live price with travel fees, referral codes and repeat-client discounts already applied, and pick a time your team can actually make.",
    points: ["Live prices, no quotes back and forth", "Only times that fit your team's real day", "Private order pages with an agent's own prices"],
    visual: (
      <ScaleBox width={540} height={560}>
        <div className="flex h-full items-start justify-center gap-6 pt-2">
          <PhoneFrame className="w-[250px] -rotate-2">
            <div className="h-[490px]">
              <BookingMockup step="services" />
            </div>
          </PhoneFrame>
          <PhoneFrame className="w-[250px] translate-y-8 rotate-2">
            <div className="h-[490px]">
              <BookingMockup step="time" />
            </div>
          </PhoneFrame>
        </div>
      </ScaleBox>
    ),
  },
  {
    id: "scheduling",
    label: "Smart Scheduling",
    title: "Your team's schedule, perfectly organized.",
    body: "Rem.os fits every shoot into each photographer's real day: their home base, working hours and Google Maps drive times. When a booking doesn't fit, you see exactly why, in plain English.",
    points: ["Day view by photographer, with one-tap routes", "Service areas decide who covers each address", "Shoots sync to your photographers' Google Calendars"],
    visual: <ScreenVisual><ScheduleMockup /></ScreenVisual>,
  },
  {
    id: "orders",
    label: "Order Management",
    title: "Every project. Every stage. One clear view.",
    body: "Each order moves from Requested to Scheduled, Editing and Delivered, with its services, files, team chat and complete history in one place. Filter by stage to see exactly what needs you.",
    points: ["Add or remove services and the invoice follows", "Every change logged, with who made it", "Each step can trigger your CRM workflows"],
    visual: <ScreenVisual><OrdersMockup /></ScreenVisual>,
  },
  {
    id: "clients",
    label: "Client Management",
    title: "Build stronger relationships with every client.",
    body: "Every client has a profile with their orders, invoices, what they've paid and owe, and account credit. Clients get their own portal with every order, upcoming shoot and balance due.",
    points: ["A client portal for every agent", "Custom pricing and order pages per client", "Referral codes and account credit"],
    visual: <ScreenVisual><ClientMockup /></ScreenVisual>,
  },
  {
    id: "delivery",
    label: "Media Delivery",
    title: "Deliver an experience as polished as your work.",
    body: "Send one branded link. Clients see watermarked previews, pay by card, then download everything at full size or MLS size. If something needs a tweak, they tap the photo to request a change.",
    points: ["Payment before download, automatically", "Photos, video, 3D tours and floor plans together", "Property websites in five designs"],
    visual: <ScreenVisual><GalleryMockup /></ScreenVisual>,
  },
  {
    id: "payments",
    label: "Invoicing & Payments",
    title: "Get paid without the back-and-forth.",
    body: "Numbered invoices carry your logo, colors, payment instructions and terms. Clients pay by card through Stripe or print to PDF, and overdue invoices get reminders one at a time or all at once.",
    points: ["Card payments through Stripe", "Paid, unpaid and overdue at a glance", "Branded invoices that print beautifully"],
    visual: <ScreenVisual><InvoiceMockup /></ScreenVisual>,
  },
  {
    id: "team",
    label: "Team Management",
    title: "Keep everyone working in sync.",
    body: "Photographers get a mobile portal with today's shoots, directions, access notes and uploads straight from their phone. Editors get tasks with the files they need, and nothing they don't.",
    points: ["“On my way” texts to clients, with an ETA", "A team chat on every shoot", "Roles keep prices and client details private"],
    visual: <ScreenVisual><TeamMockup /></ScreenVisual>,
  },
  {
    id: "insights",
    label: "Reporting & Insights",
    title: "Understand your business at a glance.",
    body: "See payments collected, shoots and average revenue per shoot, month by month across the last year, alongside a dashboard of what needs your attention today.",
    points: ["Revenue and shoot trends by month", "Month-over-month change", "Dashboard numbers link to the orders behind them"],
    visual: <ScreenVisual><ReportsMockup /></ScreenVisual>,
  },
];

function ScreenVisual({ children }: { children: React.ReactNode }) {
  return <BrowserFrame>{children}</BrowserFrame>;
}

export function FeatureShowcase() {
  const [active, setActive] = useState(FEATURES[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  // Highlight the feature currently in the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id.replace("feature-", ""));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const f of FEATURES) {
      const el = document.getElementById(`feature-${f.id}`);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Keep the active tab visible in the scrollable tab bar on small screens.
  useEffect(() => {
    const tab = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    const bar = tabsRef.current;
    if (tab && bar) bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your business runs on, finally in one place."
          body="Eight connected tools that replace the spreadsheets, calendars, file links and payment chasing."
        />
      </Container>

      <div className="sticky top-16 z-30 mt-14 border-y border-border/50 bg-night/80 backdrop-blur-xl">
        <Container>
          <div ref={tabsRef} className="-mx-4 overflow-x-auto px-4 py-2.5 [scrollbar-width:none] sm:mx-0 sm:px-0">
            <div className="mx-auto flex w-max gap-0.5">
            {FEATURES.map((f, i) => (
              <a
                key={f.id}
                href={`#feature-${f.id}`}
                data-tab={f.id}
                aria-current={active === f.id ? "true" : undefined}
                className={cn(
                  "relative shrink-0 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors",
                  active === f.id ? "text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {active === f.id && (
                  <motion.span layoutId="feature-tab" className="absolute inset-0 rounded-lg bg-raised/80" transition={{ duration: 0.35, ease }} />
                )}
                <span className="relative">
                  <span className="mr-1.5 font-mono text-[11px] text-accent-hover">0{i + 1}</span>
                  {f.label}
                </span>
              </a>
            ))}
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-8 space-y-6 sm:mt-12">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.id} feature={f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureRow({ feature: f, index }: { feature: (typeof FEATURES)[number]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article id={`feature-${f.id}`} className="scroll-mt-36 py-12 sm:py-20" aria-labelledby={`feature-${f.id}-title`}>
      <div className={cn("grid items-center gap-12 lg:gap-20", flip ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]")}>
        <motion.div
          initial={{ opacity: 0, x: flip ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className={cn(flip && "lg:order-2")}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-hover">
            0{index + 1} — {f.label}
          </p>
          <h3 id={`feature-${f.id}-title`} className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-balance sm:text-4xl">
            {f.title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{f.body}</p>
          <ul className="mt-8 space-y-3">
            {f.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check className="size-3 text-accent-hover" />
                </span>
                <span className="text-fg/90">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className={cn("relative", flip && "lg:order-1")}
        >
          <Glow className="inset-x-10 inset-y-10 bg-accent/15" />
          <div className="relative">{f.visual}</div>
          <p className="relative mt-4 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted/50">
            Illustrative mockup · sample data
          </p>
        </motion.div>
      </div>
    </article>
  );
}
