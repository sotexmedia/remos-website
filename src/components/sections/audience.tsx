import { Building2, Camera, Users } from "lucide-react";
import { Reveal } from "@/components/ui/motion";
import { Container, SectionHeading } from "@/components/ui/primitives";

const SEGMENTS = [
  {
    icon: Camera,
    title: "Solo Photographers",
    body: "Spend less time managing logistics and more time creating.",
    points: ["Online booking that fills your calendar", "Pay-to-download delivery", "Invoices and card payments built in"],
  },
  {
    icon: Users,
    title: "Growing Media Teams",
    body: "Coordinate photographers, editors, and orders without the chaos.",
    points: ["Routes built from real drive times", "A mobile portal for every photographer", "Editing tasks with the right files"],
  },
  {
    icon: Building2,
    title: "Established Media Companies",
    body: "Bring operations, customer relationships, and business performance into one central system.",
    points: ["Service areas and travel fees", "Custom order pages per client", "Metrics, API and CRM connections"],
  },
];

export function Audience() {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Solutions" title="One platform. Built for every stage of growth." />
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {SEGMENTS.map(({ icon: Icon, title, body, points }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card/80 to-deep/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#35517a] hover:shadow-[0_24px_60px_-24px_#438bff55]"
            >
              <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
              <span className="relative flex size-11 items-center justify-center rounded-xl border border-border bg-raised/60 text-accent-hover">
                <Icon className="size-5" />
              </span>
              <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="relative mt-3 leading-relaxed text-fg-muted">{body}</p>
              <ul className="relative mt-6 space-y-2.5 border-t border-border/60 pt-6">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-fg/85">
                    <span className="size-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
