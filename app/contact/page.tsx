import { Desktop } from "@/components/os/desktop"
import { WindowBlock } from "@/components/os/window-block"
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Terminal as TerminalIcon,
  Send,
} from "lucide-react"

export default function ContactPage() {
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
          status="awaiting input"
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

            <form className="mt-5 space-y-4">
              <TermField label="name" placeholder="your name" />
              <TermField label="email" placeholder="youremailadd@email.com" type="email" />

              <label className="block">
                <span className="mb-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">▸</span> message
                </span>
                <div className="group relative rounded-md border border-border/60 bg-background/60 transition-colors focus-within:border-primary/60 focus-within:shadow-[0_0_20px_oklch(0.72_0.2_340/0.18)]">
                  <textarea
                    rows={5}
                    placeholder="type your message here...⋆ ° ꩜.ᐟ"
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
                  className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-gradient-to-r from-primary/25 to-secondary/25 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-foreground transition-all hover:border-primary hover:shadow-[0_0_20px_oklch(0.72_0.2_340/0.35)]"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden /> transmit
                </button>
              </div>
            </form>
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
              { icon: Mail, label: "email", value: "haileyjcristobal@gmail.com", accent: "pink" as const },
              { icon: Github, label: "github", value: "@mei111-s", accent: "violet" as const },
            ].map((item) => {
              const Icon = item.icon
              const border = item.accent === "pink" ? "border-primary/40" : "border-secondary/40"
              const bg =
                item.accent === "pink"
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
                    <p className="truncate font-sans text-sm text-foreground">
                      {item.value}
                    </p>
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
  placeholder,
  type = "text",
}: {
  label: string
  placeholder: string
  type?: string
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
          placeholder={placeholder}
          className="w-full bg-transparent py-2.5 pr-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
    </label>
  )
}
