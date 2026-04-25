import { FileText, Download, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface PdfEmbedProps {
  /** Public path to PDF, e.g. "/pdfs/quiz-01.pdf". Leave empty to render a placeholder. */
  src?: string
  filename: string
  pages?: number
  size?: string
  className?: string
  height?: string
}

/**
 * PDF placeholder / embed block.
 * - If `src` is provided, renders a real <iframe> to the PDF.
 * - If not, renders a styled "drop pdf here" placeholder that matches the OS aesthetic.
 */
export function PdfEmbed({
  src,
  filename,
  pages,
  size,
  className,
  height = "h-80",
}: PdfEmbedProps) {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-lg border border-border/60 bg-background/30",
        className,
      )}
    >
      {/* PDF toolbar */}
      <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-3 py-2 font-mono text-[11px]">
        <span className="grid h-5 w-5 place-items-center rounded-sm bg-primary/15 text-primary">
          <FileText className="h-3 w-3" aria-hidden />
        </span>
        <span className="truncate text-foreground">{filename}</span>
        <span className="flex items-center gap-2 text-muted-foreground">
          {pages !== undefined && <span>· {pages}p</span>}
          {size && <span>· {size}</span>}
        </span>
        <div className="ml-auto flex items-center gap-1.5 text-muted-foreground">
          <button
            type="button"
            aria-label="Download"
            className="rounded p-1 hover:bg-primary/15 hover:text-foreground"
          >
            <Download className="h-3 w-3" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Fullscreen"
            className="rounded p-1 hover:bg-primary/15 hover:text-foreground"
          >
            <Maximize2 className="h-3 w-3" aria-hidden />
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div className={cn("relative w-full", height)}>
        {src ? (
          <iframe
            src={src}
            title={filename}
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <Placeholder filename={filename} />
        )}
      </div>
    </div>
  )
}

function Placeholder({ filename }: { filename: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Mock "page" surfaces stacked */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[85%] w-[62%] max-w-[260px]">
          <span
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-secondary/10 ring-1 ring-inset ring-secondary/20"
          />
          <span
            aria-hidden
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-primary/10 ring-1 ring-inset ring-primary/25"
          />
          <div className="relative flex h-full w-full flex-col rounded-md border border-border/60 bg-background/70 p-3 shadow-[0_8px_24px_-8px_oklch(0_0_0/0.5)]">
            <div className="mb-2 flex items-center gap-1 border-b border-border/50 pb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-secondary/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            </div>
            <div className="space-y-1.5">
              <span className="block h-1.5 w-3/4 rounded bg-muted-foreground/25" />
              <span className="block h-1.5 w-full rounded bg-muted-foreground/20" />
              <span className="block h-1.5 w-5/6 rounded bg-muted-foreground/20" />
              <span className="block h-1.5 w-2/3 rounded bg-muted-foreground/15" />
              <span className="block h-1.5 w-4/5 rounded bg-muted-foreground/20" />
              <span className="block h-1.5 w-1/2 rounded bg-muted-foreground/15" />
            </div>
            <div className="mt-auto flex items-center justify-between pt-2 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
              <span>pdf</span>
              <span>page 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay hint */}
      <div className="relative z-10 flex flex-col items-center gap-1 rounded-md border border-dashed border-primary/40 bg-background/70 px-3 py-2 text-center backdrop-blur-sm">
        <FileText className="h-4 w-4 text-primary" aria-hidden />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
          embed pdf here
        </p>
        <p className="max-w-[200px] font-mono text-[9px] leading-relaxed text-muted-foreground">
          pass <span className="text-accent">src=&quot;/pdfs/{filename}&quot;</span>
        </p>
      </div>
    </div>
  )
}
