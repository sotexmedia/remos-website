"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ease } from "@/components/ui/motion";
import { Button, Container, SectionHeading } from "@/components/ui/primitives";
import { plans, pricingIsPlaceholder, type Plan } from "@/config/pricing";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

type Billing = "monthly" | "yearly";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const hasToggle = plans.some((p) => p.monthly !== null && p.yearly !== null);

  return (
    <section id="pricing" className="relative border-t border-border/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing. Powerful possibilities."
          body={
            pricingIsPlaceholder
              ? "Plans are being finalized. Book a demo and we'll talk through what fits your business."
              : "Pick the plan that fits today. Change it as you grow."
          }
        />

        {hasToggle && (
          <div className="mt-10 flex justify-center">
            <div role="radiogroup" aria-label="Billing period" className="relative flex rounded-full border border-border bg-deep p-1">
              {(["monthly", "yearly"] as const).map((b) => (
                <button
                  key={b}
                  type="button"
                  role="radio"
                  aria-checked={billing === b}
                  onClick={() => setBilling(b)}
                  className={cn("relative rounded-full px-5 py-1.5 text-sm capitalize transition-colors", billing === b ? "text-white" : "text-fg-muted")}
                >
                  {billing === b && <motion.span layoutId="billing" className="absolute inset-0 rounded-full bg-accent" transition={{ duration: 0.3, ease }} />}
                  <span className="relative">{b}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} delay={i * 0.08} />
          ))}
        </div>

        {pricingIsPlaceholder && (
          <p className="mt-8 text-center text-sm text-fg-muted/80">
            Plan names and inclusions are a preview and may change before launch.
          </p>
        )}
      </Container>
    </section>
  );
}

function PlanCard({ plan, billing, delay }: { plan: Plan; billing: Billing; delay: number }) {
  const price = billing === "yearly" ? plan.yearly ?? plan.monthly : plan.monthly;
  const href = plan.cta === "Get Started" ? site.links.getStarted : site.links.demo;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-colors duration-300",
        plan.featured
          ? "border-accent/50 bg-gradient-to-b from-raised/80 to-card/60 shadow-[0_30px_80px_-30px_#438bff66]"
          : "border-border/70 bg-card/40 hover:border-[#35517a]",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">{plan.badge}</span>
      )}
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <p className="mt-1 text-sm text-fg-muted">{plan.audience}</p>
      <div className="mt-8 flex h-12 items-end gap-1.5">
        {price === null ? (
          <span className="text-3xl font-semibold tracking-tight">Let&apos;s talk</span>
        ) : (
          <>
            <span className="text-5xl font-semibold tracking-tight">${price}</span>
            <span className="mb-1.5 text-sm text-fg-muted">/ month{billing === "yearly" ? ", billed yearly" : ""}</span>
          </>
        )}
      </div>
      <Button href={href} variant={plan.featured ? "primary" : "secondary"} className="mt-8 h-11 w-full">
        {plan.cta}
      </Button>
      <ul className="mt-8 space-y-3 border-t border-border/60 pt-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-accent-hover" />
            <span className="text-fg/90">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
