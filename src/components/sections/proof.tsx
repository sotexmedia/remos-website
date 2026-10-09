import { Reveal } from "@/components/ui/motion";
import { Container } from "@/components/ui/primitives";

// Customer logos go here once customers agree to be featured: add
// { name, src } entries (SVGs in /public/customers). Until then the strip
// names the kinds of businesses Rem.os is built for. Never add logos,
// ratings or counts that aren't real.
export const customerLogos: { name: string; src: string }[] = [];

const BUILT_FOR = ["Real estate photographers", "Videographers", "Drone operators", "3D tour providers", "Media teams", "Studios"];

export function SocialProof() {
  return (
    <section aria-labelledby="proof-heading" className="border-y border-border/50 bg-deep/40">
      <Container className="py-14 sm:py-16">
        <Reveal>
          <h2 id="proof-heading" className="text-center text-sm font-medium text-fg-muted">
            Built for the businesses behind every great listing.
          </h2>
          {customerLogos.length > 0 ? (
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
              {customerLogos.map((logo) => (
                <li key={logo.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.name} className="h-7 w-auto opacity-60 grayscale transition hover:opacity-100" />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {BUILT_FOR.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-border/70 bg-white/[0.02] px-4 py-2 text-sm text-fg/80 transition-colors hover:border-accent/50 hover:text-fg"
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
