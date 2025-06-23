"use client"

import { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { X, Bot, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  // For now, disable reduced motion to avoid build issues
  const shouldReduceMotion = false
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, ease: "easeOut" }}
            className="fixed bottom-10 right-2 left-2 h-[80vh] md:bottom-20 md:right-4 md:left-auto md:w-[32rem] md:h-[35rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Rabbani's AI</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Ask anything about my skils, projects, and more</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 overflow-hidden">
              <iframe 
                src="https://rabbanaiai-rabbani-ai-bot.hf.space"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="microphone; camera"
                title="AI Assistant"
              />
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button (New Avatar) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen((v) => !v)}
        >
          {/* Persistent Welcome Tooltip */}
          {!isOpen && (
            <div
              className={
                "absolute bottom-0 right-16 mb-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm px-4 py-3 rounded-xl shadow-lg whitespace-nowrap max-w-xs flex flex-col items-start hidden md:flex"
              }
            >
              <div className="font-medium mb-1">👋 Welcome!</div>
              <div className="text-zinc-600 dark:text-zinc-400">Ask anything about me</div>
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white dark:border-l-zinc-800"></div>
            </div>
          )}

          {/* Main Avatar Container */}
          <div className="relative">
            {/* Pulse Animation Ring */}
            <div className="absolute -inset-2 bg-blue-500 rounded-full animate-ping opacity-20 -z-10"></div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Main Button */}
            <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              {/* AI Sparkle Effect */}
              <div className="absolute top-0.5 right-0.5">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              </div>

              {/* Bot Icon */}
              <Bot className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
