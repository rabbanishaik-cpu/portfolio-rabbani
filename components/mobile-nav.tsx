"use client"

import { memo, useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAnimationContext } from "./animation-provider"

interface MobileNavProps {
  items: {
    name: string
    href: string
  }[]
}

type SocialIconType = "Github" | "Linkedin" | "Mail"

const SocialLink = memo(function SocialLink({
  href,
  icon,
}: {
  href: string
  icon: SocialIconType
}) {
  const { shouldReduceMotion } = useAnimationContext()

  const icons = {
    Github: <Github className="h-5 w-5" />,
    Linkedin: <Linkedin className="h-5 w-5" />,
    Mail: <Mail className="h-5 w-5" />,
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

export const MobileNav = memo(function MobileNav({ items }: MobileNavProps) {
  const { shouldReduceMotion } = useAnimationContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b dark:border-zinc-800">
        <div className="flex-1 font-bold">Rabbani Shaik</div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bottom-0 z-50 bg-white dark:bg-zinc-900 p-4 overflow-y-auto"
          >
            <m.nav className="flex flex-col space-y-4">
              {items.map((item, index) => (
                <m.a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-zinc-600 dark:hover:text-zinc-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0.05 * index : 0.1 * index,
                    duration: 0.2,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </m.a>
              ))}
            </m.nav>
            <div className="mt-8 flex justify-center space-x-4">
              <SocialLink href="https://github.com/rabbanishaik-cpu" icon="Github" />
              <SocialLink href="https://www.linkedin.com/in/rabbani-shaik-ind/" icon="Linkedin" />
              <SocialLink href="mailto:rabbanishaik998@gmail.com" icon="Mail" />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
})
