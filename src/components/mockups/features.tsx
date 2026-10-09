import {
  Box,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Home,
  Lock,
  Mail,
  MapPin,
  Phone,
  Play,
  Plus,
  Send,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar, Bars, Kpi, Panel, Photo, StatusPill, type Status } from "./bits";

// One mockup per feature in the showcase. Each mirrors a real Rem.os screen;
// names, addresses and amounts are sample data.

/* 01 · Online booking (mobile) */
export function BookingMockup({ step = "services" }: { step?: "services" | "time" }) {
  return (
    <div className="flex h-full flex-col bg-deep pt-8 text-left">
      <div className="flex items-center justify-between px-4 pb-3">
        <ChevronLeft className="size-4 text-fg-muted" />
        <p className="text-[12px] font-semibold">Book a shoot</p>
        <span className="font-mono text-[10px] text-fg-muted">{step === "services" ? "2/4" : "3/4"}</span>
      </div>
      <div className="mx-4 mb-3 h-1 overflow-hidden rounded-full bg-white/5">
        <div className={cn("h-full rounded-full bg-accent", step === "services" ? "w-1/2" : "w-3/4")} />
      </div>
      {step === "services" ? (
        <div className="flex-1 space-y-2 px-4">
          <p className="text-[11px] text-fg-muted">55 Bay St · 2,400 sq ft</p>
          {[
            ["Essentials", "25 photos, MLS ready", "$225", true],
            ["Drone add-on", "Aerial photos", "$95", true],
            ["Walkthrough video", "60–90 sec", "$195", false],
            ["3D tour", "Interactive tour", "$150", false],
          ].map(([name, desc, price, on]) => (
            <div
              key={name as string}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-3",
                on ? "border-accent/60 bg-accent/10" : "border-border bg-card/60",
              )}
            >
              <span className={cn("flex size-4 items-center justify-center rounded-[5px] border", on ? "border-accent bg-accent" : "border-border")}>
                {on && <Check className="size-3 text-white" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-medium">{name}</p>
                <p className="text-[10px] text-fg-muted">{desc}</p>
              </div>
              <span className="font-mono text-[11px]">{price}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 px-4">
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <span className="font-medium">October 2026</span>
            <span className="flex gap-1 text-fg-muted">
              <ChevronLeft className="size-3.5" />
              <ChevronRight className="size-3.5" />
            </span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="text-fg-muted/70">{d}</span>
            ))}
            {Array.from({ length: 4 }, (_, i) => <span key={`x${i}`} />)}
            {Array.from({ length: 21 }, (_, i) => i + 1).map((d) => {
              const open = d > 9 && d % 7 !== 3;
              return (
                <span
                  key={d}
                  className={cn(
                    "rounded-md py-1",
                    d === 14 ? "bg-accent font-semibold text-white" : open ? "bg-accent/10 text-fg" : "text-fg-muted/40",
                  )}
                >
                  {d}
                </span>
              );
            })}
          </div>
          <p className="mb-2 mt-4 text-[11px] text-fg-muted">Tue, Oct 14</p>
          <div className="grid grid-cols-3 gap-1.5">
            {["8:30", "9:30", "11:00", "12:30", "14:00", "15:30"].map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-lg border py-1.5 text-center font-mono text-[10px]",
                  t === "9:30" ? "border-accent bg-accent/15 text-fg" : "border-border text-fg-muted",
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="mt-3 border-t border-border/70 bg-[#0a1a30] p-4">
        <div className="mb-2 flex justify-between text-[11px]">
          <span className="text-fg-muted">Total</span>
          <span className="font-semibold">$320.00</span>
        </div>
        <div className="rounded-xl bg-accent py-2.5 text-center text-[12px] font-medium text-white">
          {step === "services" ? "Choose a time" : "Book Tue 9:30"}
        </div>
      </div>
    </div>
  );
}

/* 02 · Scheduling: the day by photographer */
const DAY = [
  { name: "Maya Chen", shoots: [[0, 2, "418 Lakeview"], [2.6, 1.6, "1200 Oak Ridge"], [5.2, 1.4, "23 Elm St"]] },
  { name: "Luis Ortega", shoots: [[1, 2.2, "72 Harbor Point"], [4.2, 1.8, "8 Summit Ave"]] },
  { name: "Jordan Lee", shoots: [[0.5, 1.4, "310 Pine Hollow"], [3.4, 1.4, "9 Willow Ct"], [6, 1.2, "5 Birch Ln"]] },
  { name: "Priya Shah", shoots: [[2, 2.4, "Studio · Headshots"]] },
] as const;

export function ScheduleMockup() {
  const hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4"];
  return (
    <div className="p-4 text-left">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <p className="text-[13px] font-semibold">Thursday, October 9</p>
          <span className="flex text-fg-muted">
            <ChevronLeft className="size-4" />
            <ChevronRight className="size-4" />
          </span>
        </div>
        <div className="flex rounded-md border border-border p-0.5 text-[10px]">
          <span className="rounded bg-accent/20 px-2 py-0.5 text-fg">Day</span>
          <span className="px-2 py-0.5 text-fg-muted">Month</span>
        </div>
      </div>
      <div className="grid grid-cols-[5.5rem_1fr] gap-y-2">
        <span />
        <div className="grid grid-cols-9 font-mono text-[9px] text-fg-muted/70">
          {hours.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {DAY.map((p) => (
          <div key={p.name} className="contents">
            <div className="flex items-center gap-1.5 pr-2">
              <Avatar name={p.name} />
              <span className="truncate text-[10px] text-fg-muted">{p.name.split(" ")[0]}</span>
            </div>
            <div className="relative h-10 rounded-md bg-white/[0.025] [background-image:linear-gradient(to_right,#ffffff0a_1px,transparent_1px)] [background-size:11.11%_100%]">
              {p.shoots.map(([start, len, label], i) => (
                <div key={label}>
                  {i > 0 && (
                    <span
                      className="absolute top-1/2 flex -translate-y-1/2 items-center gap-0.5 font-mono text-[8px] text-fg-muted/70"
                      style={{ left: `${((p.shoots[i - 1][0] + p.shoots[i - 1][1]) / 9) * 100 + 0.6}%` }}
                    >
                      <Car className="size-2.5" />
                    </span>
                  )}
                  <div
                    className="absolute inset-y-1 overflow-hidden rounded-[5px] border-l-2 border-accent bg-accent/20 px-1.5 py-1"
                    style={{ left: `${(start / 9) * 100}%`, width: `${(len / 9) * 100}%` }}
                  >
                    <p className="truncate text-[9px] font-medium text-fg">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-lg border border-pending/30 bg-pending/10 p-2.5 text-[10px] text-pending">
        <Clock className="mt-px size-3.5 shrink-0" />
        Luis needs 35 min to get to 9 Willow Ct from the previous shoot. Try 3:30 or later.
      </div>
    </div>
  );
}

/* 03 · Order management */
const ORDER_ROWS: { id: string; addr: string; client: string; date: string; photographer: string; total: string; status: Status }[] = [
  { id: "1084", addr: "55 Bay St", client: "Dana Reyes", date: "Oct 14", photographer: "Maya Chen", total: "$320", status: "scheduled" },
  { id: "1083", addr: "9 Willow Ct", client: "Sam Patel", date: "Oct 9", photographer: "Jordan Lee", total: "$225", status: "requested" },
  { id: "1081", addr: "310 Pine Hollow", client: "Coastal Realty", date: "Oct 8", photographer: "Jordan Lee", total: "$410", status: "editing" },
  { id: "1079", addr: "72 Harbor Point", client: "Nina Brooks", date: "Oct 8", photographer: "Luis Ortega", total: "$540", status: "editing" },
  { id: "1076", addr: "8 Summit Ave", client: "Coastal Realty", date: "Oct 7", photographer: "Luis Ortega", total: "$520", status: "delivered" },
  { id: "1072", addr: "14 Cedar Row", client: "Dana Reyes", date: "Oct 6", photographer: "Maya Chen", total: "$295", status: "delivered" },
];

export function OrdersMockup() {
  return (
    <div className="p-4 text-left">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[13px] font-semibold">Orders</p>
        <span className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-1 text-[10px] font-medium text-white">
          <Plus className="size-3" /> New order
        </span>
      </div>
      <div className="mb-3 flex gap-1 overflow-hidden text-[10px]">
        {[
          ["All open", 12, true],
          ["Requested", 2],
          ["Scheduled", 6],
          ["Editing", 3],
          ["Delivered", 41],
        ].map(([label, n, on]) => (
          <span
            key={label as string}
            className={cn("shrink-0 rounded-full border px-2.5 py-1", on ? "border-accent/50 bg-accent/15 text-fg" : "border-border text-fg-muted")}
          >
            {label} <span className="font-mono text-fg-muted">{n}</span>
          </span>
        ))}
      </div>
      <Panel>
        <div className="grid grid-cols-[1fr_auto] gap-x-3 border-b border-border/70 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-fg-muted/70 @xl:grid-cols-[2.5rem_1fr_5rem_4rem_auto]">
          <span className="hidden @xl:block">#</span>
          <span>Property</span>
          <span className="hidden @xl:block">Shoot</span>
          <span className="hidden @xl:block">Total</span>
          <span>Status</span>
        </div>
        <ul className="divide-y divide-border/60">
          {ORDER_ROWS.map((o) => (
            <li key={o.id} className="grid grid-cols-[1fr_auto] items-center gap-x-3 px-3 py-2 @xl:grid-cols-[2.5rem_1fr_5rem_4rem_auto]">
              <span className="hidden font-mono text-[10px] text-fg-muted @xl:block">{o.id}</span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium">{o.addr}</p>
                <p className="truncate text-[10px] text-fg-muted">{o.client} · {o.photographer}</p>
              </div>
              <span className="hidden text-[10px] text-fg-muted @xl:block">{o.date}</span>
              <span className="hidden font-mono text-[10px] @xl:block">{o.total}</span>
              <StatusPill status={o.status} />
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

/* 04 · Client management */
export function ClientMockup() {
  return (
    <div className="p-4 text-left">
      <div className="mb-4 flex items-center gap-3">
        <Avatar name="Dana Reyes" className="size-10 text-[12px]" />
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-semibold">Dana Reyes</p>
          <p className="text-[10px] text-fg-muted">Coastal Realty · Client since 2024</p>
        </div>
        <span className="hidden rounded-md border border-border px-2 py-1 text-[10px] text-fg-muted @xl:inline">Their order page</span>
      </div>
      <div className="mb-3 grid grid-cols-4 gap-2">
        <Kpi label="Orders" value="38" />
        <Kpi label="Paid" value="$11,420" />
        <Kpi label="Owed" value="$320" />
        <Kpi label="Credit" value="$50" />
      </div>
      <div className="grid gap-3 @xl:grid-cols-[1fr_11rem]">
        <Panel title="Orders">
          <ul className="divide-y divide-border/60">
            {[
              ["55 Bay St", "Oct 14", "scheduled"],
              ["14 Cedar Row", "Oct 6", "delivered"],
              ["2 Marina Way", "Sep 28", "delivered"],
              ["77 Grove St", "Sep 19", "delivered"],
            ].map(([a, d, s]) => (
              <li key={a} className="flex items-center gap-2 px-3 py-2 text-[11px]">
                <span className="min-w-0 flex-1 truncate">{a}</span>
                <span className="text-[10px] text-fg-muted">{d}</span>
                <StatusPill status={s as Status} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Contact details">
          <div className="space-y-2 p-3 text-[10px] text-fg-muted">
            <p className="flex items-center gap-1.5"><Mail className="size-3" /> dana@example.com</p>
            <p className="flex items-center gap-1.5"><Phone className="size-3" /> (555) 014-2290</p>
            <p className="flex items-center gap-1.5"><MapPin className="size-3" /> Coastal Realty</p>
            <div className="mt-2 rounded-md bg-ok/10 p-2 text-ok">Repeat-client pricing on</div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

/* 05 · Media delivery */
export function GalleryMockup() {
  return (
    <div className="text-left">
      <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
        <div>
          <p className="text-[13px] font-semibold">1200 Oak Ridge Lane</p>
          <p className="text-[10px] text-fg-muted">32 photos · video · 3D tour · floor plan</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1.5 text-[10px] font-medium text-white">
          <Lock className="size-3" /> Pay $425 to download
        </span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3">
        <Photo variant={0} className="col-span-2 row-span-2 aspect-[4/3] h-full rounded-md">
          <Watermark />
        </Photo>
        {[1, 2, 3, 5].map((v) => (
          <Photo key={v} variant={v} className="aspect-[4/3] rounded-md">
            <Watermark small />
          </Photo>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-3 text-[10px]">
        <Photo variant={4} className="flex aspect-video items-center justify-center rounded-md">
          <span className="relative flex size-7 items-center justify-center rounded-full bg-white/90 text-deep">
            <Play className="size-3.5 translate-x-px fill-current" />
          </span>
        </Photo>
        <div className="flex aspect-video flex-col items-center justify-center gap-1 rounded-md border border-border bg-card text-fg-muted">
          <Box className="size-4" /> 3D tour
        </div>
        <div className="flex aspect-video flex-col items-center justify-center gap-1 rounded-md border border-border bg-card text-fg-muted">
          <FileText className="size-4" /> Floor plan
        </div>
      </div>
      <div className="flex gap-2 border-t border-border/70 px-4 py-3 text-[10px]">
        <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-fg-muted">
          <Download className="size-3" /> Full size
        </span>
        <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-fg-muted">
          <Download className="size-3" /> MLS size
        </span>
        <span className="ml-auto inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-fg-muted">
          <Home className="size-3" /> Property website
        </span>
      </div>
    </div>
  );
}

function Watermark({ small }: { small?: boolean }) {
  return (
    <span className={cn("absolute inset-0 flex items-center justify-center font-semibold tracking-[0.2em] text-white/35", small ? "text-[7px]" : "text-[11px]")}>
      PREVIEW
    </span>
  );
}

/* 06 · Invoicing & payments */
export function InvoiceMockup() {
  return (
    <div className="grid gap-3 p-4 text-left @lg:grid-cols-[1fr_12rem]">
      <div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          <Kpi label="Paid this month" value="$18,640" />
          <Kpi label="Unpaid" value="$1,240" />
          <Kpi label="Overdue" value="$410" />
        </div>
        <Panel title="Invoices" action="Remind all overdue">
          <ul className="divide-y divide-border/60">
            {[
              ["INV-1042", "Coastal Realty", "$425.00", "paid"],
              ["INV-1041", "Dana Reyes", "$320.00", "unpaid"],
              ["INV-1039", "Nina Brooks", "$540.00", "paid"],
              ["INV-1036", "Sam Patel", "$410.00", "overdue"],
              ["INV-1033", "Coastal Realty", "$520.00", "paid"],
            ].map(([n, c, a, s]) => (
              <li key={n} className="flex items-center gap-2 px-3 py-2 text-[11px]">
                <span className="w-14 font-mono text-[10px] text-fg-muted">{n}</span>
                <span className="min-w-0 flex-1 truncate">{c}</span>
                <span className="font-mono text-[10px]">{a}</span>
                <StatusPill status={s as Status} />
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div className="hidden rounded-lg bg-[#f8fafc] p-3 text-[#0b1d35] @lg:block">
        <div className="mb-3 flex items-start justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/remos-logo-horizontal-navy.svg" alt="" className="h-3" />
          <span className="font-mono text-[9px] text-[#64748b]">INV-1041</span>
        </div>
        <p className="text-[9px] text-[#64748b]">Bill to</p>
        <p className="text-[10px] font-medium">Dana Reyes</p>
        <div className="my-3 space-y-1 border-y border-[#e2e8f0] py-2 text-[9px]">
          <p className="flex justify-between"><span>Essentials · 55 Bay St</span><span>$225.00</span></p>
          <p className="flex justify-between"><span>Drone add-on</span><span>$95.00</span></p>
        </div>
        <p className="flex justify-between text-[11px] font-semibold"><span>Total</span><span>$320.00</span></p>
        <div className="mt-3 rounded-md bg-[#438bff] py-1.5 text-center text-[10px] font-medium text-white">Pay by card</div>
      </div>
    </div>
  );
}

/* 07 · Team management */
export function TeamMockup() {
  const team = [
    { name: "Maya Chen", role: "Photographer", hours: "Mon–Fri · 8:00–17:00", areas: ["North Shore", "Downtown"], today: 3 },
    { name: "Luis Ortega", role: "Photographer · Video", hours: "Tue–Sat · 9:00–18:00", areas: ["Downtown", "Westside"], today: 2 },
    { name: "Jordan Lee", role: "Photographer · Drone", hours: "Mon–Sat · 7:30–16:00", areas: ["Lakes", "North Shore"], today: 3 },
    { name: "Priya Shah", role: "Editor", hours: "3 open tasks", areas: [], today: 0 },
  ];
  return (
    <div className="space-y-2 p-4 text-left">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[13px] font-semibold">Team</p>
        <span className="rounded-md border border-border px-2 py-1 text-[10px] text-fg-muted">Invite</span>
      </div>
      {team.map((m) => (
        <div key={m.name} className="flex items-center gap-3 rounded-lg border border-border/80 bg-card/70 p-3">
          <Avatar name={m.name} className="size-8 text-[10px]" />
          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-medium">{m.name}</p>
            <p className="truncate text-[10px] text-fg-muted">{m.role} · {m.hours}</p>
            {m.areas.length > 0 && (
              <div className="mt-1.5 flex gap-1">
                {m.areas.map((a) => (
                  <span key={a} className="rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-fg-muted">{a}</span>
                ))}
              </div>
            )}
          </div>
          {m.today > 0 ? (
            <span className="shrink-0 rounded-full bg-sky/12 px-2 py-0.5 text-[10px] text-sky">{m.today} shoots today</span>
          ) : (
            <span className="shrink-0 rounded-full bg-violet/12 px-2 py-0.5 text-[10px] text-violet">Editing</span>
          )}
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/40 p-2.5 text-[10px] text-fg-muted">
        <Send className="size-3.5 text-accent-hover" /> Maya: &ldquo;On my way to 418 Lakeview, ETA 9:02&rdquo;
      </div>
    </div>
  );
}

/* 08 · Reporting & insights */
export function ReportsMockup() {
  return (
    <div className="space-y-3 p-4 text-left">
      <div className="grid grid-cols-2 gap-2 @xl:grid-cols-4">
        <Kpi label="Collected this month" value="$18,640" delta="+12% vs last month" />
        <Kpi label="Last 12 months" value="$184,200" />
        <Kpi label="Shoots, 12 months" value="612" />
        <Kpi label="Average per shoot" value="$301" />
      </div>
      <div className="grid gap-3 @xl:grid-cols-2">
        <Panel title="Payments collected" action="By month">
          <div className="h-32 px-3 pb-3 pt-3">
            <Bars values={[42, 48, 44, 56, 52, 63, 60, 70, 66, 74, 81, 88]} />
          </div>
        </Panel>
        <Panel title="Shoots" action="By shoot date">
          <div className="h-32 px-3 pb-3 pt-3">
            <Bars values={[50, 55, 47, 61, 66, 72, 69, 76, 70, 79, 85, 74]} highlight={10} />
          </div>
        </Panel>
      </div>
    </div>
  );
}
