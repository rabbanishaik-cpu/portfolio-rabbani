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
    // Only attempt to load the image if src is provided
    if (src) {
      const img = new Image()
      img.src = src

      // Set up onload handler before setting src
      img.onload = () => {
        setIsLoaded(true)
      }

      // Handle error case
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`)
        setIsLoaded(true) // Still mark as loaded to avoid showing loading state forever
      }
    } else {
      // If no src is provided, consider it loaded
      setIsLoaded(true)
    }

    // No cleanup needed for image loading
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
