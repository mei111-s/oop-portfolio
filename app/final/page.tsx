import { Desktop } from "@/components/os/desktop"
import { WindowBlock } from "@/components/os/window-block"
import { PdfEmbed } from "@/components/os/pdf-embed"
import {
  GraduationCap,
  FileCode,
  ListChecks,
  NotebookPen,
  FlaskConical,
  ClipboardCheck,
} from "lucide-react"

export default function FinalPage() {
  return (
    <Desktop>
      <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="text-primary">~/portfolio</span>
        <span>/</span>
        <span className="text-accent">final</span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {/* Banner */}
        <WindowBlock
          title="final.index"
          subtitle="outputs"
          icon={<GraduationCap className="h-3 w-3" />}
          status="ready"
          accent="pink"
          glow
          className="col-span-12"
          bodyClassName="p-0"
        >
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent text-glow-pink">
                // comp 009 · oop
              </p>
              <h1 className="mt-3 text-balance font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Final <span className="text-glow-pink text-primary">Outputs</span>
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                ｡ﾟﾟ･｡･ﾟﾟ｡　　　　　　｡ﾟﾟ･｡･ﾟﾟ｡
ﾟ。Documentation of my quizzes,
                seatworks, activities, and final exam. ｡ ˚
　ﾟ･｡･　　　　　　　･ ｡･
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-widest">
              {[
                { k: "quizzes", v: "01" },
                { k: "seatwork", v: "01" },
                { k: "activities", v: "01" },
                { k: "exam", v: "01" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-foreground"
                >
                  <span className="text-muted-foreground">{s.k}:</span>{" "}
                  <span className="text-primary">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </WindowBlock>

        {/* Quiz */}
        <WindowBlock
          title="quizzes.dir"
          subtitle="01 file"
          icon={<ListChecks className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-7"
          bodyClassName="p-4"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <PdfEmbed filename="final-quiz-01.pdf" src="/pdfs/final-quiz-01.pdf" pages={2} size="180kb" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reflection for Quiz 1 
            </p>
          </div>
        </WindowBlock>

        {/* Seatwork */}
        <WindowBlock
          title="seatwork.dir"
          subtitle="01 file"
          icon={<ClipboardCheck className="h-3 w-3" />}
          accent="pink"
          className="col-span-12 lg:col-span-5"
          bodyClassName="p-4"
        >
          <div className="grid grid-cols-1 gap-3">
            <PdfEmbed filename="final-seatwork-01.pdf" src="/pdfs/final-seatwork-01.pdf" pages={2} size="160kb" height="h-60" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reflection for Seatwork 1 
            </p>
          </div>
        </WindowBlock>

        {/* Activity */}
        <WindowBlock
          title="activities.dir"
          subtitle="01 java program"
          icon={<FlaskConical className="h-3 w-3" />}
          accent="violet"
          className="col-span-12"
          bodyClassName="p-4"
        >
          <div className="grid grid-cols-1 gap-3">
            <PdfEmbed filename="final-activity-01.pdf" src="/pdfs/final-activity-01.pdf" pages={2} size="210kb" height="h-60" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reflection for Activity 1 
            </p>
          </div>
        </WindowBlock>

        {/* Exam */}
        <WindowBlock
          title="exam.pdf"
          subtitle="final exam"
          icon={<FileCode className="h-3 w-3" />}
          status="submitted"
          accent="pink"
          className="col-span-12 lg:col-span-7"
          bodyClassName="p-4"
        >
          <PdfEmbed filename="final-exam.pdf" src="/pdfs/final-exam.pdf" pages={4} size="412kb" height="h-[420px]" />
        </WindowBlock>

        {/* Reflection */}
        <WindowBlock
          title="reflection.md"
          subtitle="personal log"
          icon={<NotebookPen className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-5"
        >
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              ▸ takeaway
            </p>
            <p>
              Reflection 
            </p>
            <p className="text-muted-foreground">
              Reflection
            </p>
            <div className="rounded-md border-l-2 border-primary bg-primary/5 px-3 py-2 font-mono text-xs text-foreground/90">
              {'⋆࿔♡ ₊⊹⋆˚✿˖°⊹₊♡࿔⋆'}
            </div>
          </div>
        </WindowBlock>
      </div>
    </Desktop>
  )
}