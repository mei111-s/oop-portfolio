import type React from "react"
import { cn } from "@/lib/utils"

type Accent = "pink" | "violet" | "magenta" | "none"

interface WindowBlockProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  accent?: Accent
  glow?: boolean
  className?: string
  bodyClassName?: string
  children: React.ReactNode
  /** Badge shown on the right of the titlebar (e.g. "READY", "LIVE") */
  status?: string
}

const accentDot: Record<Accent, string> = {
  pink: "bg-[oklch(0.75_0.28_340)]",
  violet: "bg-[oklch(0.6_0.3_295)]",
  magenta: "bg-[oklch(0.68_0.3_320)]",
  none: "bg-muted-foreground/40",
}

export function WindowBlock({
  title,
  subtitle,
  icon,
  accent = "pink",
  glow = false,
  className,
  bodyClassName,
  children,
  status,
}: WindowBlockProps) {
  return (
    <section
      className={cn(
        "glass-panel relative flex flex-col overflow-hidden rounded-xl",
        glow && (accent === "violet" ? "neon-glow-violet" : "neon-glow-pink"),
        className,
      )}
    >
      {/* Titlebar */}
      <header className="titlebar-gradient relative flex items-center gap-3 border-b border-border/70 px-3 py-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.3_355)] shadow-[0_0_8px_oklch(0.7_0.3_355/0.7)]"
          />
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.22_85)] shadow-[0_0_8px_oklch(0.78_0.22_85/0.5)]"
          />
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.25_150)] shadow-[0_0_8px_oklch(0.7_0.25_150/0.5)]"
          />
        </div>

        {/* Title */}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {icon && (
            <span className="grid h-5 w-5 place-items-center rounded-sm bg-primary/15 text-primary">
              {icon}
            </span>
          )}
          <div className="min-w-0 leading-tight">
            <p className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/90">
              {title}
            </p>
            {subtitle && (
              <p className="truncate font-mono text-[10px] text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Status */}
        {status && (
          <span className="flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/80">
            <span className={cn("h-1.5 w-1.5 rounded-full pulse-glow", accentDot[accent])} />
            {status}
          </span>
        )}
      </header>

      {/* Body */}
      <div className={cn("relative flex-1 p-4 sm:p-5", bodyClassName)}>{children}</div>

      {/* Decorative corner brackets */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-2 top-10 h-3 w-3 border-r border-t border-primary/40"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-accent/40"
      />
    </section>
  )
}
