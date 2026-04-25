"use client"

import { useEffect, useState } from "react"
import { Battery, Wifi, Signal } from "lucide-react"

export function MenuBar() {
  const [time, setTime] = useState<string>("--:--")
  const [date, setDate] = useState<string>("")

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
      setDate(
        d.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      )
    }
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="glass-panel-soft flex h-9 items-center gap-4 border-x-0 border-t-0 px-4 font-mono text-[11px] text-foreground/85">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-primary shadow-[0_0_10px_oklch(0.72_0.2_340/0.7)]" />
            <span className="h-2 w-2 rounded-sm bg-secondary shadow-[0_0_10px_oklch(0.58_0.2_300/0.7)]" />
          </span>
          <span className="font-semibold uppercase tracking-[0.22em] text-foreground">
            portfolio<span className="text-primary">.os</span>
          </span>
          <span className="hidden h-4 w-px bg-border md:inline-block" />
          <span className="hidden text-muted-foreground md:inline">
            comp 009 · <span className="text-foreground">oop</span>
          </span>
        </div>

        {/* Right: system icons + clock */}
        <div className="ml-auto flex items-center gap-3 text-muted-foreground">
          <Signal className="h-3.5 w-3.5" aria-hidden />
          <Wifi className="h-3.5 w-3.5" aria-hidden />
          <Battery className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">{date}</span>
          <span className="tabular-nums text-foreground">{time}</span>
        </div>
      </div>
    </div>
  )
}
