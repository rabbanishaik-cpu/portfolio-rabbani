"use client"

import { useState, useEffect, memo } from "react"
import { useAnimationContext } from "./animation-provider"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { shouldReduceMotion } = useAnimationContext()

  useEffect(() => {
    // Default to loaded if no src is provided
    if (!src) {
      setIsLoaded(true)
      return
    }

    // Create a new image object to preload
    const img = new Image()

    // Set up event handlers before setting src
    img.onload = () => {
      setIsLoaded(true)
    }

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`)
      setIsLoaded(true) // Still mark as loaded to avoid showing loading state forever
    }

    // Set the source to trigger loading
    img.src = src

    // Cleanup function
    return () => {
      // Remove event handlers to prevent memory leaks
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return (
    <div className={`relative ${className || ""}`} style={{ width, height }}>
      {/* Loading placeholder */}
      <div
        className={`absolute inset-0 bg-zinc-200 dark:bg-zinc-800 ${
          isLoaded ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />

      {/* Actual image */}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
})
