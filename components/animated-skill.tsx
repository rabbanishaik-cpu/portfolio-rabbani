"use client"

import { m } from "framer-motion"
import { useAnimationContext } from "./animation-provider"
import { memo } from "react"
import type { ReactNode } from "react"

interface AnimatedSkillProps {
  children: ReactNode
  className?: string
  index: number
}

export const AnimatedSkill = memo(function AnimatedSkill({ children, className, index }: AnimatedSkillProps) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.3,
        delay: shouldReduceMotion ? 0.05 * index : 0.1 * index,
        ease: "easeOut",
      }}
      whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </m.div>
  )
})
