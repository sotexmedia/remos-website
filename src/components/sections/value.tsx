import { ArrowRight, Check, Layers, MapPin, Timer, TrendingUp, Zap } from "lucide-react";
import { Avatar, StatusPill, type Status } from "@/components/mockups/bits";
import { Reveal } from "@/components/ui/motion";
import { Container, SectionHeading } from "@/components/ui/primitives";

export function ValueProps() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Rem.os"
          title={
            <>
              Less busywork. <span className="text-fg-muted">More business.</span>
            </>
          }
          body="Everything you need to run your real estate media company, connected in one place."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <Card
            delay={0}
            icon={<Layers className="size-4" />}
            title="Stay Organized"
            body="Every order, appointment, client, and deliverable in one organized workspace."
            visual={<OrganizedVisual />}
          />
          <Card
            delay={0.08}
            icon={<Timer className="size-4" />}
            title="Save Valuable Time"
            body="Reduce repetitive tasks, automate your workflows, and focus on the work that matters."
            visual={<TimeVisual />}
          />
          <Card
            delay={0.16}
            icon={<TrendingUp className="size-4" />}
            title="Scale With Confidence"
            body="From solo photographers to established media teams, manage your growing operation without unnecessary complexity."
            visual={<ScaleVisual />}
          />
        </div>
      </Container>
    </section>
  );
}

function Card({ icon, title, body, visual, delay }: { icon: React.ReactNode; title: string; body: string; visual: React.ReactNode; delay: number }) {
  return (
    <Reveal delay={delay} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-colors duration-300 hover:border-[#35517a]">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-56 overflow-hidden border-b border-border/60 bg-deep/60 p-5 [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
        <div className="transition-transform duration-500 group-hover:-translate-y-1">{visual}</div>
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent/12 text-accent-hover">{icon}</span>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="mt-3 leading-relaxed text-fg-muted">{body}</p>
      </div>
    </Reveal>
  );
}

function OrganizedVisual() {
  const rows: [string, string, Status][] = [
    ["418 Lakeview Dr", "Photos · Drone", "scheduled"],
    ["310 Pine Hollow", "Photos · Video", "editing"],
    ["8 Summit Ave", "32 photos · 3D tour", "delivered"],
    ["9 Willow Ct", "Photos", "requested"],
  ];
  return (
    <div className="space-y-2" aria-hidden>
      {rows.map(([a, s, st]) => (
        <div key={a} className="flex items-center gap-3 rounded-lg border border-border/70 bg-card/80 px-3 py-2.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-medium">{a}</p>
            <p className="truncate text-[10px] text-fg-muted">{s}</p>
          </div>
          <StatusPill status={st} />
        </div>
      ))}
    </div>
  );
}

function TimeVisual() {
  const steps = [
    ["Order delivered", "8 Summit Ave"],
    ["Delivery email sent", "with your CRM"],
    ["Invoice paid", "$520.00 by card"],
    ["Download unlocked", "Full size + MLS"],
  ];
  return (
    <div className="relative space-y-2.5 pl-5" aria-hidden>
      <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />
      {steps.map(([t, s], i) => (
        <div key={t} className="relative flex items-center gap-3">
          <span className="absolute -left-5 flex size-3.5 items-center justify-center rounded-full border border-accent bg-night">
            {i < 3 ? <Check className="size-2 text-accent-hover" /> : <Zap className="size-2 text-accent-hover" />}
          </span>
          <div className="flex flex-1 items-center justify-between rounded-lg border border-border/70 bg-card/80 px-3 py-2">
            <span className="text-[12px] font-medium">{t}</span>
            <span className="text-[10px] text-fg-muted">{s}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ScaleVisual() {
  const people = ["Maya Chen", "Luis Ortega", "Jordan Lee", "Priya Shah", "Sam Rivera"];
  return (
    <div className="space-y-3" aria-hidden>
      <div className="flex items-center justify-between rounded-lg border border-border/70 bg-card/80 px-3 py-2.5">
        <div className="flex -space-x-1.5">
          {people.map((p) => (
            <Avatar key={p} name={p} className="size-7 ring-2 ring-card" />
          ))}
        </div>
        <span className="text-[11px] text-fg-muted">5 on the team</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["North Shore", "Downtown", "Westside", "Lakes"].map((a) => (
          <div key={a} className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/80 px-3 py-2 text-[11px]">
            <MapPin className="size-3 text-accent-hover" /> {a}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-lg border border-accent/30 bg-accent/10 px-3 py-2.5 text-[11px]">
        <span>1 photographer</span>
        <ArrowRight className="size-3 text-accent-hover" />
        <span>a full team</span>
      </div>
    </div>
  );
}
