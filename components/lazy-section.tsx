"use client"

import type React from "react"

import { useEffect, useState, memo } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
}

export const LazySection = memo(function LazySection({ children, threshold = 0.1 }: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (isInView) {
      setShouldRender(true)
    }
  }, [isInView])

  return (
    <div ref={ref} className="min-h-[100px]">
      {shouldRender ? children : null}
    </div>
  )
})
