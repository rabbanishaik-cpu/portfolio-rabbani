"use client"

import { useState, useEffect, useCallback } from "react"
import { m, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimationContext } from "./animation-provider"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { shouldReduceMotion } = useAnimationContext()

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const threshold = 500 // Show button after scrolling down 500px

    setIsVisible(scrollY > threshold)
  }, [])

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    if (shouldReduceMotion) {
      // Instant scroll for reduced motion preference
      window.scrollTo({
        top: 0,
      })
    } else {
      // Smooth scroll for everyone else
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [shouldReduceMotion])

  useEffect(() => {
    // Add scroll event listener with throttling for performance
    let timeoutId: NodeJS.Timeout | null = null

    const onScroll = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener("scroll", onScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [handleScroll])

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
        >
          <Button
            size="icon"
            className="h-10 w-10 rounded-full shadow-lg bg-zinc-800/80 hover:bg-zinc-700 dark:bg-zinc-200/80 dark:hover:bg-zinc-300 backdrop-blur-sm"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white dark:text-zinc-800" />
          </Button>
        </m.div>
      )}
    </AnimatePresence>
  )
}
