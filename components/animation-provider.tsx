"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

type AnimationContextType = {
  prefersReducedMotion: boolean
  isLowPowerMode: boolean
  shouldReduceMotion: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  isLowPowerMode: false,
  shouldReduceMotion: false,
})

export function useAnimationContext() {
  return useContext(AnimationContext)
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLowPowerMode, setIsLowPowerMode] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    // Check for low power mode (battery < 20% as a heuristic)
    if ("getBattery" in navigator) {
      // @ts-ignore - getBattery is not in the TypeScript types
      navigator
        .getBattery()
        .then((battery: any) => {
          setIsLowPowerMode(battery.level < 0.2 && !battery.charging)

          const handleBatteryChange = () => {
            setIsLowPowerMode(battery.level < 0.2 && !battery.charging)
          }

          battery.addEventListener("levelchange", handleBatteryChange)
          battery.addEventListener("chargingchange", handleBatteryChange)

          return () => {
            battery.removeEventListener("levelchange", handleBatteryChange)
            battery.removeEventListener("chargingchange", handleBatteryChange)
          }
        })
        .catch(() => {
          // Battery API not available
          setIsLowPowerMode(false)
        })
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const shouldReduceMotion = prefersReducedMotion || isLowPowerMode

  return (
    <AnimationContext.Provider value={{ prefersReducedMotion, isLowPowerMode, shouldReduceMotion }}>
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </AnimationContext.Provider>
  )
}
