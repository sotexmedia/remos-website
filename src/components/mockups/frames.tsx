import { cn } from "@/lib/cn";

/** A desktop browser window around a product view. */
export function BrowserFrame({ url = "Rem.os", className, children }: { url?: string; className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-deep shadow-[0_0_0_1px_#071426,0_40px_120px_-30px_#000000,0_20px_60px_-20px_#438bff40]",
        className,
      )}
    >
      <div className="flex h-9 items-center gap-2 border-b border-border/70 bg-[#0a1a30] px-3.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <div className="mx-auto flex h-5 w-full max-w-64 items-center justify-center rounded-md bg-white/[0.04] font-mono text-[10px] text-fg-muted/70">
          {url}
        </div>
        <span className="w-12" />
      </div>
      <div className="@container">{children}</div>
    </div>
  );
}

/** A phone around a mobile view. Width is set by the caller. */
export function PhoneFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-white/15 bg-[#050d1a] p-2 shadow-[0_30px_80px_-20px_#000000,0_0_0_1px_#071426]",
        className,
      )}
    >
      <div className="@container relative overflow-hidden rounded-[1.7rem] bg-deep">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

/** A tablet in landscape. */
export function TabletFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-[1.6rem] border border-white/15 bg-[#050d1a] p-2.5 shadow-[0_30px_80px_-20px_#000000]", className)}>
      <div className="@container overflow-hidden rounded-[1.1rem] bg-deep">{children}</div>
    </div>
  );
}
