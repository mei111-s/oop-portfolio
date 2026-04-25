"use client"

import { useEffect, useState } from "react"

/**
 * Full-screen boot loader: 8 panels fly in from the edges and converge
 * into a centered logo grid, then the whole layer fades out.
 */
export function LoadingScreen() {
  const [mounted, setMounted] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setHidden(true), 2500)
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-background ${
        mounted ? "loader-fade" : ""
      }`}
      style={{
        backgroundImage:
          "radial-gradient(at 50% 50%, oklch(0.22 0.16 320 / 0.6) 0px, oklch(0.1 0.06 300) 70%)",
      }}
    >
      {/* Center converging grid */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-2.5">
          {/* Row 1 */}
          <Tile anim="conv-tl" tone="violet" />
          <Tile anim="conv-t"  tone="pink" />
          <Tile anim="conv-tr" tone="violet" />
          {/* Row 2 */}
          <Tile anim="conv-l"  tone="pink" />
          <Tile anim="conv-center" tone="core" />
          <Tile anim="conv-r"  tone="pink" />
          {/* Row 3 */}
          <Tile anim="conv-bl" tone="violet" />
          <Tile anim="conv-b"  tone="pink" />
          <Tile anim="conv-br" tone="violet" />
        </div>

        {/* Label + progress bar */}
        <div className="mt-7 flex flex-col items-center gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            booting portfolio.os
          </p>
          <div className="h-0.5 w-44 overflow-hidden rounded-full bg-border/40">
            <div className="bar-load h-full rounded-full bg-gradient-to-r from-secondary via-primary to-accent" />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/80">
            comp 009 · oop
          </p>
        </div>
      </div>
    </div>
  )
}

function Tile({
  anim,
  tone,
}: {
  anim:
    | "conv-tl"
    | "conv-t"
    | "conv-tr"
    | "conv-l"
    | "conv-r"
    | "conv-bl"
    | "conv-b"
    | "conv-br"
    | "conv-center"
  tone: "pink" | "violet" | "core"
}) {
  const classes =
    tone === "core"
      ? "bg-gradient-to-br from-primary to-secondary border-primary/60 shadow-[0_0_24px_oklch(0.72_0.22_340/0.6)]"
      : tone === "pink"
        ? "bg-primary/25 border-primary/40"
        : "bg-secondary/25 border-secondary/40"

  const animClass = anim === "conv-center" ? "" : anim

  return (
    <span
      className={`block h-9 w-9 rounded-md border backdrop-blur-sm sm:h-11 sm:w-11 ${classes} ${animClass}`}
    />
  )
}
