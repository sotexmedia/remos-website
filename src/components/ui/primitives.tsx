import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Reveal } from "./motion";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** Every call to action is a link; destinations come from src/config/site.ts. */
export function Button({ href, variant = "primary", size = "md", arrow, className, children }: ButtonProps) {
  const Tag = href.startsWith("/") ? Link : "a";
  return (
    <Tag
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200",
        size === "md" ? "h-9 px-4 text-sm" : "h-12 px-6 text-[15px]",
        variant === "primary" &&
          "bg-accent text-white shadow-[0_1px_0_0_#ffffff33_inset,0_8px_24px_-8px_#438bffaa] hover:bg-accent-hover hover:shadow-[0_1px_0_0_#ffffff44_inset,0_10px_32px_-8px_#438bffcc]",
        variant === "secondary" && "border border-border bg-white/[0.03] text-fg hover:border-[#3a5577] hover:bg-white/[0.06]",
        variant === "ghost" && "text-fg-muted hover:text-fg",
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-hover", className)}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-relaxed text-fg-muted text-pretty">{body}</p>}
    </Reveal>
  );
}

/** A soft blurred light, used sparingly behind key visuals. */
export function Glow({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute rounded-full blur-[120px]", className)} />;
}

/** Marks a product visual as a mockup so it is never mistaken for a real screenshot. */
export function MockupNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-center font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted/60", className)}>
      Illustrative mockup · sample data
    </p>
  );
}
