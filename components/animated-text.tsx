"use client"

import { m } from "framer-motion"
import { useAnimationContext } from "./animation-provider"
import { memo } from "react"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export const AnimatedText = memo(function AnimatedText({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedTextProps) {
  const { shouldReduceMotion } = useAnimationContext()

  // Create a component based on the 'as' prop
  const Component = m[as]

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 0.8 } : { opacity: 0, y: 10 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.4,
        delay: shouldReduceMotion ? delay / 2 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </Component>
  )
})
