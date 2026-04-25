"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Desktop } from "@/components/os/desktop"
import { WindowBlock } from "@/components/os/window-block"
import {
  Mail,
  Github,
  Terminal as TerminalIcon,
  Send,
} from "lucide-react"

const SERVICE_ID  = "service_ef7i5yf"   // ← replace
const TEMPLATE_ID = "template_yk4s8ov"  // ← replace
const PUBLIC_KEY  = "v1w9Y7IBf9__94mKd"   // ← replace

export default function ContactPage() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus("sending")
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY,
      )
      setStatus("sent")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const buttonLabel =
    status === "sending" ? "transmitting..." :
    status === "sent"    ? "transmitted ✓"  :
    status === "error"   ? "error — retry"  :
    "transmit"

  return (
    <Desktop>
      <div className="mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="text-primary">~/portfolio</span>
        <span>/</span>
        <span className="text-accent">contact</span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {/* Composer */}
        <WindowBlock
          title="new_message.sh"
          subtitle="stdin open"
          icon={<TerminalIcon className="h-3 w-3" />}
          status={status === "sent" ? "transmitted" : "awaiting input"}
          accent="pink"
          glow
          className="col-span-12 lg:col-span-7"
          bodyClassName="p-0"
        >
          <div className="p-5 font-mono text-[13px]">
            <p className="text-muted-foreground">
              <span className="text-accent">$</span> ./send --to=haileyjcristobal@gmail.com
            </p>
            <p className="mt-2 text-muted-foreground">
              {"> fields: "}
              <span className="text-primary">name, email, message</span>
            </p>

            <div className="mt-5 space-y-4">
              <TermField
                label="name"
                name="name"
                placeholder="your name"
                value={form.name}
                onChange={handleChange}
              />
              <TermField
                label="email"
                name="email"
                placeholder="youremailadd@email.com"
                type="email"
                value={form.email}
                onChange={handleChange}
              />

              <label className="block">
                <span className="mb-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">▸</span> message
                </span>
                <div className="group relative rounded-md border border-border/60 bg-background/60 transition-colors focus-within:border-primary/60 focus-within:shadow-[0_0_20px_oklch(0.72_0.2_340/0.18)]">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="type your message here...⋆ ° ꩜.ᐟ"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-md bg-transparent px-3 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  comp 009 · bsit 2-1
                </p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending" || status === "sent"}
                  className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-gradient-to-r from-primary/25 to-secondary/25 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground transition-all hover:border-primary hover:shadow-[0_0_20px_oklch(0.72_0.2_340/0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden /> {buttonLabel}
                </button>
              </div>

              {status === "error" && (
                <p className="font-mono text-[11px] text-red-400">
                  ✗ something went wrong — please try again or email directly.
                </p>
              )}
            </div>
          </div>
        </WindowBlock>

        {/* Channels */}
        <WindowBlock
          title="channels.cfg"
          subtitle="available links"
          icon={<Mail className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-5"
        >
          <ul className="space-y-2.5">
            {[
              { icon: Mail,   label: "email",  value: "haileyjcristobal@gmail.com", accent: "pink"   as const },
              { icon: Github, label: "github", value: "@mei111-s",                  accent: "violet" as const },
            ].map((item) => {
              const Icon   = item.icon
              const border = item.accent === "pink" ? "border-primary/40" : "border-secondary/40"
              const bg     = item.accent === "pink"
                ? "bg-primary/10 text-primary"
                : "bg-secondary/15 text-secondary-foreground"
              return (
                <li
                  key={item.label}
                  className={`group flex items-center gap-3 rounded-lg border ${border} bg-background/40 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_16px_oklch(0.72_0.2_340/0.18)]`}
                >
                  <span className={`grid h-9 w-9 place-items-center rounded-md ${bg}`}>
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="truncate font-sans text-sm text-foreground">{item.value}</p>
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  >
                    →
                  </span>
                </li>
              )
            })}
          </ul>
        </WindowBlock>
      </div>
    </Desktop>
  )
}

function TermField({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">▸</span> {label}
      </span>
      <div className="group relative flex items-center rounded-md border border-border/60 bg-background/60 transition-colors focus-within:border-primary/60 focus-within:shadow-[0_0_20px_oklch(0.72_0.2_340/0.18)]">
        <span className="select-none px-3 font-mono text-sm text-accent">{">"}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent py-2.5 pr-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
    </label>
  )
}