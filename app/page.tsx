"use client"

import { Github, Linkedin, Mail, Phone, Download, Mic, Brain, TrendingUp, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedSkill } from "@/components/animated-skill"
import { AnimatedTimelineItem } from "@/components/animated-timeline-item"
import { LazySection } from "@/components/lazy-section"
import { m } from "framer-motion"
import { useAnimationContext } from "@/components/animation-provider"
import ChatbotAvatar from "@/components/aibot"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/rabbani-shaik-ind/",
    label: "LinkedIn",
  },
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/rabbanishaik-cpu",
    label: "GitHub",
  },
]

const expertiseAreas = [
  {
    title: "Voice AI Systems",
    description:
      "Built realtime STT-LLM-TTS workflows with LiveKit Agents, SIP telephony, interruption handling, and controlled conversation flows.",
    icon: "microphone",
  },
  {
    title: "LLM Application Engineering",
    description:
      "Worked on structured outputs, tool calling, prompt engineering, RAG pipelines, and production LLM integrations across multiple providers.",
    icon: "brain",
  },
  {
    title: "Reliability And Evaluation",
    description:
      "Focused on latency instrumentation, provider comparison, response quality analysis, debugging, and practical cost-performance tradeoffs.",
    icon: "trending",
  },
  {
    title: "Automation Foundation",
    description:
      "Bringing 3.5 years of QA automation background across Selenium, API validation, Jenkins, and large regression suites into AI product engineering.",
    icon: "cog",
  },
]

const skillGroups = [
  {
    title: "AI / LLM",
    items: [
      "OpenAI API",
      "Anthropic API",
      "Groq API",
      "Function Calling",
      "Structured Outputs",
      "RAG Pipelines",
      "Embeddings",
      "Prompt Engineering",
      "LLM Response Evaluation",
    ],
  },
  {
    title: "Voice AI",
    items: [
      "LiveKit Agents SDK",
      "Deepgram STT",
      "Cartesia TTS",
      "ElevenLabs TTS",
      "SIP Telephony",
      "Plivo",
      "Twilio",
      "Interruption Handling",
      "Call Flow Design",
    ],
  },
  {
    title: "Backend And Data",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Async Programming",
      "Supabase",
      "SQL",
      "Qdrant",
      "Pinecone",
    ],
  },
  {
    title: "Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "LLM Evals",
      "RAG Evaluation",
      "Latency Analysis",
      "Cost Optimization",
      "n8n",
      "Playwright",
      "Selenium",
      "Jenkins",
      "MCP Server",
      "Skills",
    ],
  },
]

const selectedWork = [
  {
    title: "Voxi",
    eyebrow: "AI voice and video agent platform",
    description:
      "Helped build Voxi from scratch as one of the founding engineers. Delivered realtime voice and video agents with provider-swappable LLM, STT, and TTS pipelines, SIP telephony, RAG workflows, function calling, structured outputs, and configurable agent behavior for business use cases.",
    tags: [
      "LiveKit Agents",
      "OpenAI API",
      "Anthropic Claude API",
      "Groq API",
      "Deepgram STT",
      "Cartesia TTS",
      "ElevenLabs TTS",
      "SIP Telephony",
      "RAG",
      "Function Calling",
      "Structured Outputs",
      "Interruption Handling",
      "Latency Optimization"
    ],
  },
  {
    title: "Production Prompt Engineering & LLM Evals",
    eyebrow: "Model-specific prompts and automated evaluation workflows",
    description:
      "Created and optimized production prompts for AI interview agents across voice, video, and role-specific workflows. Tuned prompts separately for OpenAI, Anthropic Claude, and Ultravox-style models based on model behavior, reasoning ability, latency, and instruction-following reliability. Used OpenAI Evals to detect prompt regressions, identify conversation bugs, and improve agent behavior before production release.",
    tags: [
      "Prompt Engineering",
      "OpenAI Evals",
      "LLM Evaluation",
      "OpenAI API",
      "Anthropic Claude API",
      "Ultravox",
      "Voice Agents",
      "Interview Agents",
      "Function Calling",
      "Structured Outputs",
      "Agent Reliability"
    ],
  },
  {
    title: "AI Interview Agent",
    eyebrow: "Realtime candidate screening workflow",
    description:
      "Built AI-led interview workflows that conduct structured candidate conversations, ask role-based questions, handle interruptions, trigger tools, capture responses, and generate structured summaries and evaluation outputs.",
    tags: [
      "Voice AI",
      "LiveKit Agents",
      "STT-LLM-TTS",
      "Prompt Engineering",
      "Function Calling",
      "Structured Outputs",
      "Conversation Flow",
      "Candidate Screening"
    ],
  },
  {
    title: "RAG Document Intelligence",
    eyebrow: "Document QA and knowledge retrieval system",
    description:
      "Built document intelligence workflows for extracting, chunking, embedding, and retrieving content from documents, then using LLMs to generate grounded answers and structured outputs for downstream automation.",
    tags: [
      "RAG",
      "Embeddings",
      "Vector DB",
      "Qdrant",
      "Pinecone",
      "Document QA",
      "LLM APIs",
      "Structured Outputs"
    ],
  },
]

const experience = [
  {
    title: "AI Engineer",
    company: "F22 Labs",
    location: "Chennai, India",
    period: "Jan 2025 - May 2026",
    bullets: [
      "Worked on Voxi, an AI voice and video agent platform with configurable LLM, STT, TTS, SIP telephony, tool calling, and RAG workflows.",
      "Built realtime STT-LLM-TTS orchestration, reaching sub-2-second best-case end-to-end response latency.",
      "Created and optimized production prompts for voice/video interview agents across OpenAI, Anthropic Claude, and Ultravox-style models, tuning instructions based on model behavior, latency, reasoning ability, and instruction-following reliability.",
      "Built automated prompt evaluation workflows using OpenAI Evals to detect prompt regressions, identify conversation-flow bugs, and improve agent behavior before production release.",
      "Implemented provider selection, interruption handling, structured outputs, call summaries, analytics, and production reliability fixes.",
      "Debugged skipped questions, delayed responses, incorrect tool calls, unwanted meta-text, and unreliable end-call behavior.",
    ],
  },
  {
    title: "QA Automation Engineer",
    company: "F22 Labs",
    location: "Client projects",
    period: "Jul 2023 - Jan 2025",
    bullets: [
      "Designed and maintained Selenium automation for frankdarling.com, LuxUnlock.com, and JW Pepper.",
      "Covered functional, regression, cross-browser, mobile responsiveness, and API scenarios with selenium, Java, TestNG, Maven, and Cucumber.",
      "Validated backend APIs with Postman and RestAssured and integrated suites into Jenkins CI.",
    ],
  },
  {
    title: "Software Test Analyst",
    company: "Fidelity National Information Services Inc. (FIS)",
    location: "Bengaluru, India",
    period: "Aug 2021 - Feb 2023",
    bullets: [
      "Worked on banking payment automation for OPF NACHA and Silicon Valley Bank across ACH/NACHA and SWIFT MT workflows.",
      "Contributed to an ACH payment product planned for rollout across 200+ banks.",
      "Maintained Selenium automation and executed a regression suite covering about 4,000 test cases.",
    ],
  },
]

const credentials = [
  {
    degree: "B.Tech, Computer Science and Engineering, Sir C R Reddy College of Engineering (2017-2021)",
    cgpa: "7.0",
  },
]

export default function Portfolio() {
  const { shouldReduceMotion } = useAnimationContext()

  const handleNavigation = (targetId: string) => {
    window.location.hash = targetId

    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 250)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black pb-16 md:pb-0">
      <m.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 w-full border-b bg-white/85 backdrop-blur-sm dark:bg-zinc-950/85 dark:border-zinc-800"
      >
        <div className="container flex h-16 items-center justify-between">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-xl"
          >
            Rabbani Shaik
          </m.div>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item, index) => (
              <m.button
                key={item.name}
                onClick={() => handleNavigation(item.href.replace("#", ""))}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer bg-transparent border-none"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                {item.name}
              </m.button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.map((item, index) => (
                <m.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.1 }}
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </m.a>
              ))}
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </m.header>

      <main>
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_360px] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <AnimatedText as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                    Rabbani Shaik
                  </AnimatedText>
                  <AnimatedText delay={0.1} className="text-zinc-500 md:text-xl dark:text-zinc-400">
                    AI Engineer
                  </AnimatedText>
                </div>

                <AnimatedText
                  delay={0.2}
                  as="div"
                  className="max-w-[720px] text-base leading-7 text-zinc-600 md:text-lg dark:text-zinc-400"
                >
I build realtime voice/video AI platforms and GenAI-enabled systems. My work focuses on LLM integrations, STT–LLM–TTS pipelines, RAG workflows, function calling, and low-latency conversational AI experiences used in production.
                </AnimatedText>

                <div className="flex flex-wrap gap-2">
                  {["5 Years Software", "1.4+ Years GenAI", "Realtime Voice AI", "LLM + RAG Workflows"].map((item) => (
                    <Badge key={item} variant="secondary" className="px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-3 min-[480px]:flex-row">
                  <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <Button onClick={() => handleNavigation("contact")}>Get in Touch</Button>
                  </m.div>
                  <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <Button variant="outline" asChild>
                      <a href="/Rabbani_Shaik_AI_Engineer_Resume.pdf" download className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </m.div>
                </div>
              </div>

              <m.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 w-[300px] h-[360px] dark:border-zinc-800 dark:bg-zinc-900">
                  <img src="/dp.jpg" alt="Rabbani Shaik" width={300} height={360} className="w-full h-full object-cover" />
                </div>
              </m.div>
            </div>
          </div>
        </section>

        <LazySection sectionId="about">
          <section id="about" className="py-12 md:py-24 bg-white dark:bg-zinc-950">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    About Me
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400"
                  >
I care about building AI systems that work reliably outside demos. My approach is instrumentation-first: measure latency, understand failure points, compare providers, and improve the conversation flow until the user experience feels natural.

I started with QA automation, which shaped how I debug and ship software. Today, I apply that same reliability mindset to AI engineering — building voice agents, LLM workflows, and production systems where speed, accuracy, and predictable behavior matter.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {expertiseAreas.map((item, index) => (
                  <AnimatedSkill
                    key={item.title}
                    index={index}
                    className="rounded-lg border p-5 text-center dark:border-zinc-800 flex flex-col items-center"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                      {item.icon === "microphone" && <Mic className="h-6 w-6" />}
                      {item.icon === "brain" && <Brain className="h-6 w-6" />}
                      {item.icon === "trending" && <TrendingUp className="h-6 w-6" />}
                      {item.icon === "cog" && <Settings className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </AnimatedSkill>
                ))}
              </div>

              <div className="mx-auto mt-12 space-y-12">
                <AnimatedSection delay={0.2}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">Technical Skills</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {skillGroups.map((group) => (
                        <Card key={group.title} className="border-zinc-200 dark:border-zinc-800">
                          <CardHeader>
                            <CardTitle className="text-lg">{group.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {group.items.map((item) => (
                                <Badge key={item} variant="outline">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">Education</h3>
                    <div className="mx-auto max-w-2xl">
                      <Card className="border-zinc-200 dark:border-zinc-800">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {credentials.map((item, index) => (
                            <div key={index} className="flex items-start justify-between gap-6">
                              <m.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.08 * index }}
                                className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                              >
                                {item.degree}
                              </m.div>
                              <m.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 + 0.08 * index }}
                                className="shrink-0 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded"
                              >
                                CGPA: {item.cgpa}
                              </m.div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection sectionId="work">
          <section id="work" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Selected Work
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400"
                  >
                    A selection of my recent work in AI.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {selectedWork.map((item, index) => (
                  <AnimatedCard key={item.title} delay={0.1 * index}>
                    <Card className="h-full border-zinc-200 dark:border-zinc-800">
                      <CardHeader>
                        <CardDescription>{item.eyebrow}</CardDescription>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection sectionId="experience">
          <section id="experience" className="py-12 md:py-24 bg-white dark:bg-zinc-950">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Experience
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400"
                  >
                    My professional journey.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto mt-12 max-w-4xl space-y-10">
                {experience.map((job, index) => (
                  <AnimatedTimelineItem
                    key={job.title + job.company}
                    index={index}
                    className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 -translate-x-1/2 dark:bg-zinc-800">
                      <m.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 * index + 0.2 }}
                        className="h-2 w-2 rounded-full bg-zinc-600 dark:bg-zinc-400"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-zinc-700 dark:text-zinc-300">{job.company}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.location}</p>
                        </div>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{job.period}</span>
                      </div>
                      <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedTimelineItem>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection sectionId="contact">
          <section id="contact" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Contact
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400"
                  >
                    Available for AI engineering roles focused on LLM systems, voice agents, and applied automation.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto mt-12 max-w-3xl">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      icon: <Phone className="h-5 w-5" />,
                      label: "Phone",
                      text: "+91 8790023424",
                      href: "tel:+918790023424",
                    },
                    {
                      icon: <Mail className="h-5 w-5" />,
                      label: "Email",
                      text: "rabbanishaik998@gmail.com",
                      href: "mailto:rabbanishaik998@gmail.com",
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      label: "LinkedIn",
                      text: "linkedin.com/in/rabbani-shaik-ind",
                      href: "https://www.linkedin.com/in/rabbani-shaik-ind/",
                    },
                    {
                      icon: <Github className="h-5 w-5" />,
                      label: "GitHub",
                      text: "github.com/rabbanishaik-cpu",
                      href: "https://github.com/rabbanishaik-cpu",
                    },
                  ].map((item, index) => (
                    <AnimatedCard key={item.label} delay={0.1 * index}>
                      <Card className="h-full border-zinc-200 dark:border-zinc-800">
                        <CardContent className="flex items-center gap-4 pt-6">
                          <div className="rounded-full bg-zinc-100 p-3 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</p>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-all font-medium text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-white"
                            >
                              {item.text}
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>

                <AnimatedSection delay={0.4}>
                  <div className="mt-8 flex justify-center">
                    <m.div whileHover={shouldReduceMotion ? {} : { scale: 1.04 }} whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}>
                      <Button size="lg" variant="outline" asChild>
                        <a href="/Rabbani_Shaik_AI_Engineer_Resume.pdf" download className="flex items-center gap-2">
                          <Download className="h-5 w-5" />
                          Download Resume
                        </a>
                      </Button>
                    </m.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </LazySection>
      </main>

      <m.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t bg-white py-6 dark:bg-zinc-950 dark:border-zinc-800"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Copyright 2026 Rabbani Shaik. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                ...socialLinks,
                { icon: <Mail className="h-5 w-5" />, href: "mailto:rabbanishaik998@gmail.com", label: "Email" },
              ].map((item) => (
                <m.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.1 }}
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </m.a>
              ))}
            </div>
          </div>
        </div>
      </m.footer>

      <MobileNav items={navItems} onNavigate={handleNavigation} />
      <ChatbotAvatar />
    </div>
  )
}
