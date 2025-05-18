"use client"

import { m } from "framer-motion"
import { useAnimationContext } from "./animation-provider"
import { memo } from "react"
import type { ReactNode } from "react"

interface AnimatedTimelineItemProps {
  children: ReactNode
  className?: string
  index: number
}

export const AnimatedTimelineItem = memo(function AnimatedTimelineItem({
  children,
  className,
  index,
}: AnimatedTimelineItemProps) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, x: -10 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.4,
        delay: shouldReduceMotion ? 0.1 * index : 0.2 * index,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </m.div>
  )
})
