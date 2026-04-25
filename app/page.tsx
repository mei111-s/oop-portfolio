import { Desktop } from "@/components/os/desktop"
import { WindowBlock } from "@/components/os/window-block"
import { User, BookOpen, GraduationCap, Info } from "lucide-react"

export default function HomePage() {
  return (
    <Desktop>
      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="text-primary">~/portfolio</span>
        <span className="text-accent">$</span>
        <span>open --page=home</span>
        <span className="cursor-blink text-primary">▊</span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {/* Identity hero */}
        <WindowBlock
          title="identity.card"
          subtitle="student profile"
          icon={<User className="h-3 w-3" />}
          status="ready"
          accent="pink"
          glow
          className="col-span-12 lg:col-span-8"
          bodyClassName="p-0"
        >
          <div className="relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.72 0.22 340 / 0.5), transparent 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full opacity-40 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.58 0.22 300 / 0.5), transparent 60%)",
              }}
            />

            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary text-glow-pink">
              // e-portfolio
            </p>
            <h1 className="mt-4 text-balance font-sans text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              OOP <span className="text-glow-pink text-primary">Portfolio</span>
              <br />
              <span className="text-glow-violet text-secondary"> ദ്ദി/ᐠ｡‸｡ᐟ\ </span> ₊˚⊹♡
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              
              
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-border/60 pt-5 font-mono sm:grid-cols-3">
              <InfoField label="student" value="CRISTOBAL, HAILEY JADE" hint="" />
              <InfoField label="section/school" value="BSIT 2-1" hint="POLYTECHNIC UNIVERSITY OF THE PHILIPPINES - MANILA" />
              <InfoField label="course" value="COMP 009" hint="Object-Oriented Programming" />
            </div>
          </div>
        </WindowBlock>

        {/* Course info */}
        <WindowBlock
          title="course.info"
          subtitle="comp 009"
          icon={<BookOpen className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <div className="space-y-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                subject
              </p>
              <p className="mt-1 font-sans text-base text-foreground">
                Object-Oriented Programming
              </p>
            </div>
            <div className="h-px bg-border/60" />
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  code
                </p>
                <p className="mt-0.5 text-foreground">COMP 009</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  section
                </p>
                <p className="mt-0.5 text-foreground">BSIT 2-1</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  language
                </p>
                <p className="mt-0.5 text-foreground">Java</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  units
                </p>
                <p className="mt-0.5 text-foreground">3.0</p>
              </div>
            </div>
          </div>
        </WindowBlock>

        {/* Intro / about */}
        <WindowBlock
          title="about.md"
          subtitle="introduction"
          icon={<Info className="h-3 w-3" />}
          accent="pink"
          className="col-span-12 lg:col-span-7"
        >
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              I am Jade, from BSIT 2-1 ! This portfolio documents my learning process and technical skill-building in Object-Oriented Programming. It features all of my Midterm and Final Java outputs, paired with reflections on the logic and problem-solving involved in each task.

            </p>
            <p className="text-muted-foreground">
              Designed with both identity and functionality in mind, this site is structured to meet all grading criteria: from OOP application and code clarity to detailed explanations of my work.
            </p>
            <div className="rounded-md border-l-2 border-primary bg-primary/5 px-3 py-2 font-mono text-xs text-foreground/90">
              {'"With every mistake we must surely be learning." — While My Guitar Gently Weeps by The Beatles'}
            </div>
          </div>
        </WindowBlock>

        {/* Quick nav */}
        <WindowBlock
          title="nav.map"
          subtitle="jump to section"
          icon={<GraduationCap className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-5"
        >
          <ul className="space-y-2 font-mono text-xs">
            {[
              { n: "01", label: "Midterm", desc: "quizzes · activities · exam", href: "/midterm" },
              { n: "02", label: "Final", desc: "final project · reflections", href: "/final" }, // Added Final
              { n: "03", label: "Contact", desc: "reach out", href: "/contact" },
            ].map((i) => (
              <li key={i.n}>
                <a
                  href={i.href}
                  className="group flex items-center gap-3 rounded-md border border-border/60 bg-background/30 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
                    {i.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-sm text-foreground">{i.label}</p>
                    <p className="truncate text-[10px] uppercase tracking-widest text-muted-foreground">
                      {i.desc}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </WindowBlock>
      </div>
    </Desktop>
  )
}

function InfoField({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-sans text-sm text-foreground">{value}</p>
      {hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}
    </div>
  )
}
