import type { Metadata } from "next"
import { Wrench, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Under Maintenance - Rabbani Shaik Portfolio",
  description: "Site is temporarily down for maintenance.",
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-sm w-full text-center relative z-10 space-y-6 p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-md shadow-xl">
        {/* Minimal Icon */}
        <div className="mx-auto w-14 h-14 rounded-full bg-muted/50 border border-border/60 flex items-center justify-center text-foreground/80">
          <Wrench className="w-6 h-6" />
        </div>

        {/* Heading & Text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Under Maintenance
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The site is currently undergoing updates and will be back online shortly.
          </p>
        </div>

        {/* Minimal Contact Link */}
        <div className="pt-2 text-xs text-muted-foreground">
          <a
            href="mailto:rabbanishaik998@gmail.com"
            className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors underline underline-offset-4"
          >
            <Mail className="w-3.5 h-3.5" /> Contact via email
          </a>
        </div>
      </div>
    </main>
  )
}

