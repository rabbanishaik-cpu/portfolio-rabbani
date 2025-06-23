import type React from "react"
import type { Metadata, Viewport } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationProvider } from "@/components/animation-provider"

export const metadata: Metadata = {
  title: "Rabbani Shaik - AI Engineer Portfolio",
  description: "Portfolio website for Rabbani Shaik",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimationProvider>{children}</AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
