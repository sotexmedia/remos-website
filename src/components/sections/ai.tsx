"use client";

import {
  ArrowUp,
  CalendarClock,
  CalendarSearch,
  Check,
  FileText,
  KeyRound,
  ListChecks,
  ListPlus,
  Plug,
  Receipt,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UserSearch,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { ease, Reveal } from "@/components/ui/motion";
import { Container, Glow, MockupNote, SectionHeading } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

// Rem.os has an MCP server (/api/mcp) and a REST API (/api/v1) with an
// OpenAPI description. Everything below maps to one of its operations:
// listOrders, createOrder, getOrder, updateOrder, addOrderService,
// removeOrderService, getAvailability, listClients, createClient, getClient,
// listServices, listTeam, listInvoices, getInvoice, setInvoiceStatus,
// listTasks, updateTask. Don't advertise anything the API can't do.

const WORKS_WITH = ["Claude", "ChatGPT", "Cursor", "Any MCP-compatible assistant", "n8n", "Zapier", "Make"];

const CAPABILITIES: { icon: LucideIcon; title: string; body: string; prompt: string }[] = [
  {
    icon: CalendarSearch,
    title: "Check availability",
    body: "Open times on any day, counting working hours, other shoots and drive time.",
    prompt: "“What's open Thursday afternoon near the lake?”",
  },
  {
    icon: ListPlus,
    title: "Book shoots",
    body: "Create orders for new or existing clients with the right services and prices.",
    prompt: "“Book Dana for photos and drone at 55 Bay St on Tuesday.”",
  },
  {
    icon: CalendarClock,
    title: "Reschedule and update",
    body: "Move a shoot, change its status or move it to another client, with the same scheduling checks as the app.",
    prompt: "“Push the Harbor Point shoot to 11:15.”",
  },
  {
    icon: FileText,
    title: "Change what's ordered",
    body: "Add or remove services on an order. The total and any unpaid invoice update with it.",
    prompt: "“Add a 3D tour to 1200 Oak Ridge.”",
  },
  {
    icon: UserSearch,
    title: "Find clients",
    body: "Search clients and see their orders, invoices and what they've paid or owe.",
    prompt: "“How much has Coastal Realty spent this year?”",
  },
  {
    icon: Receipt,
    title: "Track invoices",
    body: "See what's unpaid, share payment links, and mark invoices paid by check, cash or Zelle.",
    prompt: "“Who still owes us from September?”",
  },
  {
    icon: ListChecks,
    title: "Run editing tasks",
    body: "See tasks across orders and change their status, assignee, due date or notes.",
    prompt: "“What's Priya editing today?”",
  },
  {
    icon: Users,
    title: "Know your team and services",
    body: "Your photographers, editors, services and packages, with prices and durations.",
    prompt: "“What does our luxury package include?”",
  },
];

const TRUST = [
  { icon: KeyRound, text: "Read-only or read & write keys. Only a hash is stored." },
  { icon: ShieldCheck, text: "Revoke a key any time from Settings." },
  { icon: ScrollText, text: "Every change shows in the order history with the key's name." },
];

export function AiSection() {
  return (
    <section id="ai" className="relative overflow-hidden border-t border-border/50 py-24 sm:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_70%_30%,black,transparent)]" />
      <Glow className="right-[-10rem] top-20 h-[34rem] w-[46rem] bg-violet/15" />
      <Glow className="left-[-12rem] bottom-0 h-[28rem] w-[40rem] bg-accent/10" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-medium text-violet">
                <Sparkles className="size-3.5" /> Rem.os AI
              </p>
            </Reveal>
            <SectionHeading
              align="left"
              className="mt-6"
              title={
                <>
                  Connect Rem.os to <span className="text-gradient">any AI you use.</span>
                </>
              }
              body="Rem.os works with ChatGPT, Claude and any assistant that supports the Model Context Protocol. Your AI sees your real calendar, clients and invoices, and handles the busywork when you ask in plain English."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Works with">
                {WORKS_WITH.map((name) => (
                  <li key={name} className="rounded-full border border-border/70 bg-white/[0.03] px-3 py-1.5 text-sm text-fg/85">
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <ol className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Create a key", "In Settings → API keys, read-only or read & write."],
                  ["Connect", "Paste the connector link into your assistant."],
                  ["Just ask", "Book, reschedule, look up and update in plain English."],
                ].map(([t, b], i) => (
                  <li key={t} className="rounded-xl border border-border/70 bg-card/40 p-4">
                    <p className="font-mono text-xs text-violet">0{i + 1}</p>
                    <p className="mt-1.5 font-medium">{t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">{b}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div>
            <ChatDemo />
            <MockupNote className="mt-4" />
          </div>
        </div>

        <div className="mt-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">What your AI can do in Rem.os</h3>
            <p className="mt-3 text-fg-muted">The same actions as the app, with the same rules behind them.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(({ icon: Icon, title, body, prompt }, i) => (
              <Reveal
                key={title}
                delay={(i % 4) * 0.06}
                className="group flex flex-col rounded-2xl border border-border/70 bg-card/40 p-6 transition-colors duration-300 hover:border-violet/40 hover:bg-card/70"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-violet/12 text-violet">
                  <Icon className="size-4" />
                </span>
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{body}</p>
                <p className="mt-4 border-t border-border/60 pt-4 text-sm italic text-fg/75">{prompt}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col justify-center rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent/12 text-accent-hover">
                <Workflow className="size-4" />
              </span>
              <h4 className="font-semibold">Automations, too</h4>
            </div>
            <p className="mt-3 leading-relaxed text-fg-muted">
              The same actions are an open REST API with an OpenAPI description, so n8n, Zapier, Make and ChatGPT custom actions
              can import it directly. Connect Rem.os to your CRM, your spreadsheets or anything else your automations reach.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-ok/12 text-ok">
                <Plug className="size-4" />
              </span>
              <h4 className="font-semibold">You stay in control</h4>
            </div>
            <ul className="mt-4 space-y-3">
              {TRUST.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-fg/85">
                  <Icon className="mt-0.5 size-4 shrink-0 text-fg-muted" />
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- The chat demo ---------- */

type Line =
  | { kind: "user"; text: string }
  | { kind: "tool"; name: string; detail: string }
  | { kind: "ai"; text: React.ReactNode };

const SCRIPT: Line[] = [
  { kind: "user", text: "Book Dana Reyes for photos + drone at 55 Bay St, next Tuesday morning." },
  { kind: "tool", name: "getAvailability", detail: "Tue Oct 14 · 55 Bay St" },
  { kind: "tool", name: "createOrder", detail: "Essentials + Drone · 9:30" },
  {
    kind: "ai",
    text: (
      <>
        Done. Dana is booked for <strong className="font-medium text-fg">Tuesday at 9:30</strong> with Maya Chen: Essentials + Drone,
        $320. It&apos;s on her schedule and in Dana&apos;s client portal.
      </>
    ),
  },
  { kind: "user", text: "Who still owes us from September?" },
  { kind: "tool", name: "listInvoices", detail: "unpaid · Sep 2026" },
  {
    kind: "ai",
    text: (
      <>
        Three invoices, <strong className="font-medium text-fg">$1,240</strong> in total. Sam Patel&apos;s INV-1036 ($410) is the
        oldest. Want the payment links to send?
      </>
    ),
  },
  { kind: "user", text: "Sam just paid INV-1036 by check." },
  { kind: "tool", name: "setInvoiceStatus", detail: "INV-1036 → paid · check" },
  { kind: "ai", text: "Marked INV-1036 paid by check. $830 left outstanding from September." },
];

// When each line appears, in seconds after the chat scrolls into view.
const DELAYS = SCRIPT.reduce<number[]>((acc, line) => {
  const gap = line.kind === "tool" ? 0.35 : line.kind === "ai" ? 0.5 : 0.7;
  return [...acc, (acc.at(-1) ?? 0.3) + gap];
}, []);

function ChatDemo() {

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet/40 via-white/5 to-accent/40" />
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-120px" }}
        className="relative overflow-hidden rounded-2xl bg-deep shadow-[0_40px_100px_-30px_#000000]"
      >
        <div className="flex items-center justify-between border-b border-border/70 bg-[#0a1a30] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet/40 to-accent/40">
              <Sparkles className="size-3.5 text-white" />
            </span>
            <div>
              <p className="text-[13px] font-medium">Your AI assistant</p>
              <p className="flex items-center gap-1.5 text-[11px] text-fg-muted">
                <span className="size-1.5 rounded-full bg-ok" /> Connected to Rem.os
              </p>
            </div>
          </div>
          <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-fg-muted">MCP</span>
        </div>

        <div className="space-y-3 p-4 sm:p-5" aria-label="Example conversation">
          {SCRIPT.map((line, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 8 },
                shown: { opacity: 1, y: 0, transition: { delay: DELAYS[i], duration: 0.45, ease } },
              }}
            >
              <ChatLine line={line} />
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border/70 px-4 py-3">
          <div className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2.5 text-sm text-fg-muted/70">
            Ask about your bookings, clients or invoices…
            <span className="flex size-6 items-center justify-center rounded-md bg-accent text-white">
              <ArrowUp className="size-3.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ChatLine({ line }: { line: Line }) {
  if (line.kind === "user") {
    return (
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2 text-[13px] leading-relaxed text-white">
        {line.text}
      </div>
    );
  }
  if (line.kind === "tool") {
    return (
      <div className="flex items-center gap-2 pl-1 font-mono text-[11px]">
        <span className="flex size-4 items-center justify-center rounded-full bg-ok/15">
          <Check className="size-2.5 text-ok" />
        </span>
        <span className="text-violet">{line.name}</span>
        <span className="truncate text-fg-muted">{line.detail}</span>
      </div>
    );
  }
  return (
    <div className={cn("w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.05] px-3.5 py-2 text-[13px] leading-relaxed text-fg-muted")}>
      {line.text}
    </div>
  );
}
