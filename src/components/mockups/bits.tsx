import { cn } from "@/lib/cn";

// Small pieces shared by the product mockups. All names, addresses and
// amounts in the mockups are sample data.

export type Status = "requested" | "scheduled" | "editing" | "delivered" | "paid" | "unpaid" | "overdue";

const STATUS: Record<Status, { label: string; cls: string }> = {
  requested: { label: "Requested", cls: "bg-pending/12 text-pending" },
  scheduled: { label: "Scheduled", cls: "bg-sky/12 text-sky" },
  editing: { label: "Editing", cls: "bg-violet/12 text-violet" },
  delivered: { label: "Delivered", cls: "bg-ok/12 text-ok" },
  paid: { label: "Paid", cls: "bg-ok/12 text-ok" },
  unpaid: { label: "Unpaid", cls: "bg-pending/12 text-pending" },
  overdue: { label: "Overdue", cls: "bg-[#f87171]/12 text-[#f87171]" },
};

export function StatusPill({ status, className }: { status: Status; className?: string }) {
  const s = STATUS[status];
  return <span className={cn("inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-medium", s.cls, className)}>{s.label}</span>;
}

export function Panel({ title, action, className, children }: { title?: string; action?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-lg border border-border/80 bg-card/70", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-border/70 px-3 py-2">
          <span className="text-[11px] font-medium text-fg">{title}</span>
          {action && <span className="text-[10px] text-fg-muted">{action}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

export function Kpi({ label, value, delta, className }: { label: string; value: string; delta?: string; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border/80 bg-card/70 px-3 py-2.5", className)}>
      <p className="text-[10px] text-fg-muted">{label}</p>
      <p className="mt-0.5 text-[15px] font-semibold tracking-tight text-fg">{value}</p>
      {delta && <p className="mt-0.5 text-[10px] text-ok">{delta}</p>}
    </div>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 4;
  const colors = ["bg-[#438bff]/25 text-[#9cc3ff]", "bg-violet/20 text-violet", "bg-ok/15 text-ok", "bg-pending/15 text-pending"];
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span className={cn("inline-flex size-6 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold", colors[hue], className)}>
      {initials}
    </span>
  );
}

/** Simple bar chart drawn with divs. Values are relative heights 0–100. */
export function Bars({ values, highlight, className }: { values: number[]; highlight?: number; className?: string }) {
  return (
    <div className={cn("flex h-full items-end gap-[3px]", className)}>
      {values.map((v, i) => (
        <div
          key={i}
          className={cn("flex-1 rounded-t-[3px]", i === (highlight ?? values.length - 1) ? "bg-accent" : "bg-accent/30")}
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}

const PHOTOS = [
  // Twilight exterior
  "linear-gradient(180deg,#1b2a55 0%,#5b4a8a 38%,#e79a6c 62%,#2b2420 63%,#3b3026 100%)",
  // Bright living room
  "linear-gradient(180deg,#e9e2d6 0%,#d8cbb6 55%,#a8876a 56%,#8d6d52 100%)",
  // Kitchen
  "linear-gradient(160deg,#f1f0ec 0%,#c9ccd0 50%,#4a5562 51%,#2f3842 100%)",
  // Pool & sky
  "linear-gradient(180deg,#7fb5e6 0%,#bfdcf3 45%,#e9e5da 46%,#4fb3c9 70%,#2e8fae 100%)",
  // Aerial
  "linear-gradient(135deg,#3f6b3a 0%,#6c8f4e 40%,#9aa58a 41%,#c8c2ae 60%,#5e7d47 100%)",
  // Bedroom
  "linear-gradient(180deg,#d9d4cc 0%,#b9b0a2 60%,#6e6152 61%,#564a3e 100%)",
];

/** A stand-in for a listing photo: soft gradients, no stock imagery. */
export function Photo({ variant = 0, className, children }: { variant?: number; className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden", className)} style={{ background: PHOTOS[variant % PHOTOS.length] }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      {children}
    </div>
  );
}
