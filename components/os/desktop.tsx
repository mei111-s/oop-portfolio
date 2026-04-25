import type React from "react"
import { MenuBar } from "./menu-bar"
import { Dock } from "./dock"
import { LoadingScreen } from "./loading-screen"

export function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[100svh]">
      <LoadingScreen />
      <MenuBar />
      <main className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-32 pt-6 sm:px-6 sm:pb-40 sm:pt-8">
        {children}
      </main>
      <Dock />
    </div>
  )
}
