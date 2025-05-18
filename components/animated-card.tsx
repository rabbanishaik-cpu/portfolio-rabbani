"use client"

import { m } from "framer-motion"
import { useAnimationContext } from "./animation-provider"
import { memo } from "react"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const AnimatedCard = memo(function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, scale: 0.97 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.4,
        delay: shouldReduceMotion ? delay / 2 : delay,
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </m.div>
  )
})
