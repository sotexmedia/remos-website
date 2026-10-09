import {
  Bell,
  CalendarDays,
  Camera,
  CreditCard,
  Globe,
  LayoutDashboard,
  LineChart,
  ListChecks,
  MessageSquare,
  Package,
  Search,
  Settings,
  UserRound,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar, Bars, Kpi, Panel, StatusPill, type Status } from "./bits";

// The admin dashboard, modelled on the real Rem.os navigation and screens,
// filled with sample data.

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Camera, label: "Orders" },
  { icon: CalendarDays, label: "Schedule" },
  { icon: ListChecks, label: "Tasks" },
  { icon: Users, label: "Clients" },
  { icon: CreditCard, label: "Invoices" },
  { icon: MessageSquare, label: "Texts" },
  { icon: Package, label: "Services" },
  { icon: Globe, label: "Property sites" },
  { icon: LineChart, label: "Metrics" },
  { icon: UserRound, label: "Team" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar({ compact, className }: { compact?: boolean; className?: string }) {
  return (
    <aside className={cn("flex shrink-0 flex-col border-r border-border/70 bg-[#081830] py-3", compact ? "w-12 items-center" : "w-40 px-2.5", className)}>
      <div className={cn("mb-4 flex items-center gap-2", compact ? "justify-center" : "px-1.5")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remos-mark.svg" alt="" className="size-5" />
        {!compact && <span className="text-[12px] font-semibold tracking-tight">Rem.os</span>}
      </div>
      <nav className="flex flex-col gap-0.5">
        {NAV.map(({ icon: Icon, label, active }) => (
          <span
            key={label}
            className={cn(
              "flex items-center gap-2 rounded-md text-[11px]",
              compact ? "size-8 justify-center" : "px-2 py-1.5",
              active ? "bg-accent/15 text-fg" : "text-fg-muted",
            )}
          >
            <Icon className={cn("size-3.5", active && "text-accent-hover")} />
            {!compact && label}
          </span>
        ))}
      </nav>
    </aside>
  );
}

const SHOOTS: { time: string; addr: string; who: string; services: string; status: Status }[] = [
  { time: "9:00", addr: "418 Lakeview Dr", who: "Maya Chen", services: "Photos · Drone", status: "scheduled" },
  { time: "10:45", addr: "72 Harbor Point", who: "Luis Ortega", services: "Photos · Video", status: "scheduled" },
  { time: "13:30", addr: "1200 Oak Ridge Ln", who: "Maya Chen", services: "Photos · 3D tour", status: "scheduled" },
  { time: "15:15", addr: "9 Willow Ct", who: "Jordan Lee", services: "Photos", status: "requested" },
];

const ORDERS: { addr: string; client: string; amount: string; status: Status }[] = [
  { addr: "55 Bay St", client: "Dana Reyes", amount: "$385", status: "editing" },
  { addr: "8 Summit Ave", client: "Coastal Realty", amount: "$520", status: "delivered" },
  { addr: "310 Pine Hollow", client: "Sam Patel", amount: "$295", status: "editing" },
];

export function DashboardMockup() {
  return (
    <div className="flex h-[560px] text-left @xl:h-[600px]">
      <Sidebar className="hidden @2xl:flex" />
      <Sidebar compact className="hidden @xl:flex @2xl:hidden" />
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="flex h-11 items-center justify-between border-b border-border/70 px-4">
          <div>
            <p className="text-[13px] font-semibold tracking-tight">Good morning, Alex</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden h-6 w-40 items-center gap-1.5 rounded-md border border-border/80 bg-card/60 px-2 text-[10px] text-fg-muted @4xl:flex">
              <Search className="size-3" /> Search orders, clients…
            </span>
            <span className="relative">
              <Bell className="size-4 text-fg-muted" />
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-accent" />
            </span>
            <Avatar name="Alex Morgan" />
          </div>
        </div>

        <div className="grid gap-3 p-3 @xl:p-4 @4xl:grid-cols-[1fr_15rem]">
          <div className="min-w-0 space-y-3">
            <div className="grid grid-cols-2 gap-2.5 @xl:grid-cols-4">
              <Kpi label="Shoots today" value="4" delta="2 tomorrow" />
              <Kpi label="Collected this month" value="$18,640" delta="+12% vs last month" />
              <Kpi label="Unpaid" value="$1,240" className="hidden @xl:block" />
              <Kpi label="Needs action" value="3" className="hidden @xl:block" />
            </div>

            <div className="grid gap-3 @5xl:grid-cols-[1.4fr_1fr]">
              <Panel title="Today's shoots" action="Thu, Oct 9">
                <ul className="divide-y divide-border/60">
                  {SHOOTS.map((s) => (
                    <li key={s.addr} className="flex items-center gap-2.5 px-3 py-2">
                      <span className="w-9 shrink-0 font-mono text-[10px] text-fg-muted">{s.time}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[11px] font-medium">{s.addr}</p>
                        <p className="truncate text-[10px] text-fg-muted">{s.services}</p>
                      </div>
                      <Avatar name={s.who} className="hidden @xl:inline-flex" />
                      <StatusPill status={s.status} />
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel title="Payments collected" action="Last 12 months" className="hidden flex-col @xl:flex">
                <div className="flex-1 px-3 pb-2 pt-3">
                  <div className="h-28">
                    <Bars values={[38, 45, 41, 52, 49, 60, 58, 66, 62, 71, 78, 86]} />
                  </div>
                  <div className="mt-1.5 flex justify-between font-mono text-[9px] text-fg-muted/70">
                    <span>Nov</span>
                    <span>Feb</span>
                    <span>May</span>
                    <span>Aug</span>
                    <span>Oct</span>
                  </div>
                </div>
              </Panel>
            </div>

            <div className="grid gap-3 @xl:grid-cols-2">
              <Panel title="In production" action="12 open">
                <div className="space-y-2 p-3">
                  {[
                    ["Requested", 2, "bg-pending"],
                    ["Scheduled", 6, "bg-sky"],
                    ["Editing", 3, "bg-violet"],
                    ["Delivered this week", 9, "bg-ok"],
                  ].map(([label, n, color]) => (
                    <div key={label as string} className="flex items-center gap-2 text-[10px]">
                      <span className="w-24 shrink-0 text-fg-muted">{label}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                        <div className={cn("h-full rounded-full", color as string)} style={{ width: `${(n as number) * 10}%` }} />
                      </div>
                      <span className="w-4 text-right font-mono text-fg">{n}</span>
                    </div>
                  ))}
                </div>
              </Panel>
              <Panel title="Recent orders" className="hidden @xl:block">
                <ul className="divide-y divide-border/60">
                  {ORDERS.map((o) => (
                    <li key={o.addr} className="flex items-center gap-2 px-3 py-2 text-[11px]">
                      <span className="min-w-0 flex-1 truncate">{o.addr}</span>
                      <span className="font-mono text-[10px] text-fg-muted">{o.amount}</span>
                      <StatusPill status={o.status} />
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>

          <div className="hidden space-y-3 @4xl:block">
            <Panel title="October">
              <MiniCalendar />
            </Panel>
            <Panel title="Activity">
              <ul className="space-y-2.5 p-3">
                {[
                  ["Coastal Realty paid INV-1042", "2m"],
                  ["Media delivered · 8 Summit Ave", "18m"],
                  ["Maya is on her way · ETA 9:02", "41m"],
                  ["New booking · 9 Willow Ct", "1h"],
                ].map(([t, ago]) => (
                  <li key={t} className="flex gap-2 text-[10px]">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="min-w-0 flex-1 text-fg-muted">{t}</span>
                    <span className="font-mono text-fg-muted/60">{ago}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniCalendar({ className }: { className?: string }) {
  // October 2026 starts on a Thursday.
  const busy = new Set([2, 6, 7, 9, 10, 14, 15, 16, 21, 23]);
  return (
    <div className={cn("p-3", className)}>
      <div className="grid grid-cols-7 gap-y-1 text-center font-mono text-[9px] text-fg-muted/70">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <span key={`b${i}`} />
        ))}
        {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
          <span
            key={d}
            className={cn(
              "mx-auto flex size-5 items-center justify-center rounded-full text-[9px]",
              d === 9 ? "bg-accent font-semibold text-white" : busy.has(d) ? "text-fg" : "text-fg-muted/60",
            )}
          >
            {d}
            {busy.has(d) && d !== 9 && <span className="sr-only"> (shoots)</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

/** The small notifications that float around the hero dashboard. */
export function Toast({
  icon,
  title,
  body,
  tone = "accent",
  className,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  tone?: "accent" | "ok" | "violet" | "sky";
  className?: string;
}) {
  const tones = {
    accent: "bg-accent/15 text-accent-hover",
    ok: "bg-ok/15 text-ok",
    violet: "bg-violet/15 text-violet",
    sky: "bg-sky/15 text-sky",
  };
  return (
    <div
      className={cn(
        "flex w-60 items-center gap-3 rounded-xl border border-white/10 bg-card/90 p-3 text-left shadow-[0_20px_50px_-12px_#000000cc] backdrop-blur-md",
        className,
      )}
    >
      <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg", tones[tone])}>{icon}</span>
      <div className="min-w-0">
        <p className="text-[12px] font-medium text-fg">{title}</p>
        <p className="truncate text-[11px] text-fg-muted">{body}</p>
      </div>
    </div>
  );
}
