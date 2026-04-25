"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Mail, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const apps = [
  { href: "/", label: "Home", icon: Home },
  { href: "/midterm", label: "Midterm", icon: BookOpen },
  { href: "/final",    label: "Final",   icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Dock() {
  const pathname = usePathname()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 sm:pb-6">
      <nav
        aria-label="Primary"
        className="pointer-events-auto glass-panel flex items-end gap-1.5 rounded-2xl px-2.5 py-2"
      >
        {apps.map((app) => {
          const Icon = app.icon
          const isActive = pathname === app.href

          return (
            <Link
              key={app.label}
              href={app.href}
              aria-label={app.label}
              className={cn(
                "group relative flex h-11 items-center gap-2 rounded-xl border border-transparent px-3 transition-all",
                "hover:-translate-y-0.5 hover:border-primary/40",
                isActive
                  ? "border-primary/50 bg-primary/20 text-foreground shadow-[0_0_18px_oklch(0.72_0.2_340/0.35)]"
                  : "bg-background/30 text-foreground/80 hover:bg-primary/10",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                {app.label}
              </span>

              {isActive && (
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_oklch(0.72_0.2_340/0.9)]"
                />
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
