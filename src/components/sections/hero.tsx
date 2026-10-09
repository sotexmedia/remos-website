"use client";

import { ArrowRight, CalendarClock, CalendarPlus, CircleDollarSign, Send } from "lucide-react";
import { motion } from "motion/react";
import { DashboardMockup, Toast } from "@/components/mockups/dashboard";
import { BrowserFrame } from "@/components/mockups/frames";
import { ease } from "@/components/ui/motion";
import { Button, Container, Glow, MockupNote } from "@/components/ui/primitives";
import { site } from "@/config/site";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const TOASTS = [
  { icon: <CalendarPlus className="size-4" />, title: "New booking", body: "55 Bay St · Tue 9:30", tone: "accent", pos: "-left-12 -top-7", delay: 1.1 },
  { icon: <CircleDollarSign className="size-4" />, title: "Payment received", body: "$425.00 · Coastal Realty", tone: "ok", pos: "-right-12 -top-7", delay: 1.3 },
  { icon: <Send className="size-4" />, title: "Media delivered", body: "8 Summit Ave · 32 photos", tone: "violet", pos: "-left-16 bottom-[12%]", delay: 1.5 },
  { icon: <CalendarClock className="size-4" />, title: "Schedule updated", body: "Luis · 72 Harbor Point → 11:15", tone: "sky", pos: "-right-14 bottom-[12%]", delay: 1.7 },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      <Glow className="left-1/2 top-[-18rem] h-[40rem] w-[70rem] -translate-x-1/2 bg-accent/20" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.a
            {...rise(0)}
            href="#ai"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 py-1 pl-1 pr-3 text-xs text-fg/90 transition-colors hover:border-violet/60"
          >
            <span className="rounded-full bg-violet/25 px-2 py-0.5 font-medium text-violet">New</span>
            Connect Rem.os to ChatGPT, Claude and any AI assistant
            <ArrowRight className="size-3.5 text-fg-muted" aria-hidden />
          </motion.a>
          <motion.p {...rise(0.04)} className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent-hover sm:text-xs">
            The operating system for real estate media
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.045em] text-balance sm:text-6xl lg:text-[5.25rem]"
          >
            Your entire <span className="text-gradient">media business.</span> One powerful platform.
          </motion.h1>
          <motion.p {...rise(0.16)} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty sm:text-xl">
            From booking and scheduling to managing your team, collecting payments, and delivering media — {site.name} brings your
            entire operation together in one seamless platform.
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={site.links.getStarted} size="lg" arrow>
              Get Started
            </Button>
            <Button href={site.links.demo} size="lg" variant="secondary">
              Book a Demo
            </Button>
          </motion.div>
          <motion.p {...rise(0.3)} className="mt-6 text-sm text-fg-muted/80">
            Built for real estate photographers, media teams, and growing studios.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="relative mx-auto mt-16 max-w-6xl sm:mt-20"
        >
          <div aria-hidden className="absolute -inset-x-10 -top-10 bottom-1/3 rounded-[3rem] bg-gradient-to-b from-accent/25 via-accent/5 to-transparent blur-3xl" />
          <div aria-hidden className="absolute -inset-px rounded-xl bg-gradient-to-b from-white/25 via-white/5 to-transparent" />
          <BrowserFrame className="relative">
            <DashboardMockup />
          </BrowserFrame>

          {TOASTS.map((t) => (
            <motion.div
              key={t.title}
              aria-hidden
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: t.delay },
                y: { duration: 6, delay: t.delay, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute hidden xl:block ${t.pos}`}
            >
              <Toast icon={t.icon} title={t.title} body={t.body} tone={t.tone} />
            </motion.div>
          ))}

          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
        </motion.div>
        <MockupNote className="relative -mt-6 pb-4" />
      </Container>
    </section>
  );
}
