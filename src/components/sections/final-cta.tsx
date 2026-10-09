import { Reveal } from "@/components/ui/motion";
import { Button, Container } from "@/components/ui/primitives";
import { site } from "@/config/site";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,black,transparent)]" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[26rem] w-[50rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl">
            Your business deserves a <span className="text-gradient">better way to run.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Bring your bookings, team, clients, and media delivery together with {site.name}.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={site.links.getStarted} size="lg" arrow>
              Get Started
            </Button>
            <Button href={site.links.demo} size="lg" variant="secondary">
              Book a Demo
            </Button>
          </div>
          {site.contactEmail && (
            <p className="mt-8 text-sm text-fg-muted">
              Or email us at{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent">
                {site.contactEmail}
              </a>
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
