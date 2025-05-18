"use client"

import { useState, useCallback, memo } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAnimationContext } from "./animation-provider"

interface MobileNavProps {
  items: {
    name: string
    href: string
  }[]
}

export const MobileNav = memo(function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { shouldReduceMotion } = useAnimationContext()

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50 text-zinc-700 dark:text-zinc-300"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence initial={false} mode="wait">
          {isOpen ? (
            <m.div
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </m.div>
          ) : (
            <m.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </m.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              transition={{ duration: 0.15 }}
            />
            <m.div
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white dark:bg-zinc-900 z-40 flex flex-col overflow-y-auto shadow-xl"
              initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={shouldReduceMotion ? { duration: 0.2 } : { type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <nav className="flex flex-col space-y-6">
                  {items.map((item, index) => (
                    <m.a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-zinc-600 dark:hover:text-zinc-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0.05 * index : 0.1 * index,
                        duration: 0.2,
                      }}
                      onClick={closeMenu}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </m.a>
                  ))}
                </nav>
                <div className="flex flex-col space-y-4 mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex space-x-4 justify-center">
                    <SocialLink href="https://github.com" icon="github" />
                    <SocialLink href="https://linkedin.com" icon="linkedin" />
                    <SocialLink href="mailto:alex.chen@example.com" icon="mail" />
                  </div>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
})

const SocialLink = memo(function SocialLink({ href, icon }: { href: string; icon: "github" | "linkedin" | "mail" }) {
  const { shouldReduceMotion } = useAnimationContext()

  const icons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    mail: <Mail className="h-5 w-5" />,
  }

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300"
      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
    >
      {icons[icon]}
    </m.a>
  )
})
