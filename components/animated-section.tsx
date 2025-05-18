"use client"

import { m } from "framer-motion"
import { useAnimationContext } from "./animation-provider"
import { memo } from "react"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const AnimatedSection = memo(function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.5,
        delay: shouldReduceMotion ? delay / 2 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </m.div>
  )
})
