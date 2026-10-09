import { CalendarCheck, CalendarDays, Clapperboard, Send } from "lucide-react";
import { RevealItem } from "@/components/ui/motion";
import { Container, SectionHeading } from "@/components/ui/primitives";

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Get Booked",
    body: "Clients book their shoots through your online booking experience, with live prices and real availability.",
  },
  {
    icon: CalendarDays,
    title: "Stay Scheduled",
    body: "Organize appointments and coordinate your team. Every shoot lands on the right photographer's route.",
  },
  {
    icon: Clapperboard,
    title: "Manage Production",
    body: "Keep every project moving from shoot to finished media, with uploads, editing tasks and team chat.",
  },
  {
    icon: Send,
    title: "Deliver & Get Paid",
    body: "Deliver media professionally and streamline payment collection with pay-to-download and card payments.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-y border-border/50 bg-deep/50 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="How it works" title="From first booking to final delivery. Simplified." />
        <div className="relative mt-16">
          <div aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 md:block" />
          <div aria-hidden className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-accent/50 to-accent/0 md:hidden" />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <RevealItem key={title} delay={i * 0.1} className="relative flex gap-5 md:block">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-night text-accent-hover shadow-[0_0_30px_-6px_#438bff88]">
                  <Icon className="size-5" />
                </span>
                <div className="md:mt-6">
                  <p className="font-mono text-xs text-fg-muted">0{i + 1}</p>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{body}</p>
                </div>
            </RevealItem>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
