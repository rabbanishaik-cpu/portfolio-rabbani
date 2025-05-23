"use client"

import type React from "react"

import { useEffect, useState, memo } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
  sectionId?: string // Optional: the ID of the section for hash matching
}

export const LazySection = memo(function LazySection({ children, threshold = 0.1, sectionId }: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (isInView) {
      console.log(`LazySection ${sectionId}: rendered due to being in view`)
      setShouldRender(true)
    }
  }, [isInView, sectionId])

  // Simple: if there's any hash in the URL, render this section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        console.log(`LazySection ${sectionId}: rendering due to initial hash: ${hash}`)
        setShouldRender(true)
      }
    }
  }, [sectionId])

  // Listen for hash changes and render
  useEffect(() => {
    const handleHashChange = () => {
      console.log(`LazySection ${sectionId}: rendering due to hash change: ${window.location.hash}`)
      setShouldRender(true)
    }

    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [sectionId])

  // Debug when section actually renders
  useEffect(() => {
    if (shouldRender) {
      console.log(`LazySection ${sectionId}: shouldRender is now true`)
    }
  }, [shouldRender, sectionId])

  return (
    <div ref={ref} className="min-h-[100px]">
      {shouldRender ? children : null}
    </div>
  )
})
