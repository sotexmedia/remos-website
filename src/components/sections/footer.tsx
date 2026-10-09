import { Container } from "@/components/ui/primitives";
import { site } from "@/config/site";

const SOCIAL_ICONS: Record<keyof typeof site.social, { label: string; path: string }> = {
  instagram: {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.8a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-9.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  },
  linkedin: {
    label: "LinkedIn",
    path: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.5V9h3.6v11.5z",
  },
  youtube: {
    label: "YouTube",
    path: "M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z",
  },
  x: {
    label: "X",
    path: "M18.2 2.3h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.8 2.3h7l4.8 6.4 5.6-6.4zm-1.2 18h1.9L7.1 4.2H5.1L17 20.3z",
  },
};

export function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "/#product" },
        { label: "Features", href: "/#features" },
        { label: "Solutions", href: "/#solutions" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact", href: site.links.contact },
        { label: "Book a Demo", href: site.links.demo },
        ...(site.links.login ? [{ label: "Log In", href: site.links.login }] : []),
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];
  const socials = (Object.keys(site.social) as (keyof typeof site.social)[]).filter((k) => site.social[k]);

  return (
    <footer className="border-t border-border/60 bg-deep/30">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/remos-logo-horizontal.svg" alt={site.name} width={160} height={23} className="h-[22px] w-auto" />
            <p className="mt-5 leading-relaxed text-fg-muted">
              The all-in-one platform for real estate media businesses: booking, scheduling, production, delivery and payments.
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {socials.map((k) => (
                  <li key={k}>
                    <a
                      href={site.social[k]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={SOCIAL_ICONS[k].label}
                      className="flex size-9 items-center justify-center rounded-lg border border-border/70 text-fg-muted transition-colors hover:border-accent/60 hover:text-fg"
                    >
                      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                        <path d={SOCIAL_ICONS[k].path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-sm font-medium">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border/50 pt-8 text-sm text-fg-muted/80 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Made for real estate media.</p>
        </div>
      </Container>
    </footer>
  );
}
