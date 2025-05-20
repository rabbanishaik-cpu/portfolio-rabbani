"use client"

import { Github, Linkedin, Mail, ExternalLink, CalendarIcon, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedSkill } from "@/components/animated-skill"
import { AnimatedTimelineItem } from "@/components/animated-timeline-item"
import { LazySection } from "@/components/lazy-section"
import { OptimizedImage } from "@/components/optimized-image"
import { m } from "framer-motion"
import { useAnimationContext } from "@/components/animation-provider"
import { memo, useState, useCallback } from "react"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

// Mock data for projects
const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "A chatbot that uses natural language processing to understand and respond to user queries.",
    image: "/placeholder.svg?height=200&width=300",
    link: "",
    tags: ["nlp", "chatbot", "ai"],
    category: "nlp",
  },
  {
    title: "Image Recognition System",
    description: "A system that uses computer vision to identify objects in images.",
    image: "/placeholder.svg?height=200&width=300",
    link: "",
    tags: ["computer vision", "image recognition", "ai"],
    category: "cv",
  },
  {
    title: "Reinforcement Learning Agent",
    description: "An agent that learns to play games using reinforcement learning.",
    image: "/placeholder.svg?height=200&width=300",
    link: "",
    tags: ["reinforcement learning", "ai", "games"],
    category: "rl",
  }
]

// Mock data for blog posts
const blogPosts = [
  {
    title: "7 Best AI Code Editors in 2025",
    excerpt: "A review of best available AI code editors",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://www.f22labs.com/blogs/7-best-ai-code-editors-in-2025/",
    date: "2025-05-09",
    readTime: "8 min",
    category: "Code Editors",
  },
  {
    title: "Chain of draft: Thinking faster by writing less",
    excerpt: "A new prompting techique which explores reducing token usage with same effiency",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://www.f22labs.com/blogs/chain-of-draft-thinking-faster-by-writing-less/",
    date: "2025-04-15",
    readTime: "12 min",
    category: "prompting",
  }
]

// Memoized card components
const ProjectCard = memo(function ProjectCard({ project }: { project: any }) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-video w-full overflow-hidden">
        <OptimizedImage
          src={project.image || "/placeholder.svg?height=200&width=300"}
          alt={project.title}
          width={300}
          height={200}
          className="w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, index: number) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.05 * index }}
            >
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            </m.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <m.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="w-full"
        >
          <Button variant="outline" className="w-full" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View Project <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </m.div>
      </CardFooter>
    </Card>
  )
})

const BlogCard = memo(function BlogCard({ post }: { post: any }) {
  const { shouldReduceMotion } = useAnimationContext()

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="aspect-video w-full overflow-hidden">
        <OptimizedImage
          src={post.image || "/placeholder.svg?height=200&width=300"}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-full"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-2">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-1">
          <Tag className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400 capitalize">{post.category}</span>
        </div>
      </CardContent>
      <CardFooter>
        <m.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="w-full"
        >
          <Button variant="outline" className="w-full" asChild>
            <a href={post.link} className="flex items-center gap-2">
              Read Article <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </m.div>
      </CardFooter>
    </Card>
  )
})

// Main component
export default function Portfolio() {
  const { shouldReduceMotion } = useAnimationContext()
  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      {/* Header */}
      <m.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-800 will-change-transform"
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
              <m.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                {item.name}
              </m.a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden md:flex items-center gap-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/rabbani-shaik-ind/", label: "LinkedIn" },
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/rabbanishaik-cpu", label: "GitHub" },
              ].map((item, index) => (
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
            <MobileNav items={navItems} />
          </div>
        </div>
      </m.header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <AnimatedText as="h1" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Rabbani Shaik
                  </AnimatedText>
                  <AnimatedText delay={0.1} className="text-zinc-500 md:text-xl dark:text-zinc-400">
                    AI Engineer
                  </AnimatedText>
                </div>
                <AnimatedText
                  delay={0.2}
                  as="div"
                  className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
                >
                  I build intelligent systems that combine language, voice, and vision. My current focus is on LLM-powered agents, speech pipelines, and deploying practical AI solutions.
                </AnimatedText>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Button asChild>
                      <a href="#contact">Get in Touch</a>
                    </Button>
                  </m.div>
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button variant="outline" asChild>
                      <a href="#projects">View Projects</a>
                    </Button>
                  </m.div>
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button variant="outline" asChild>
                      <a href="/rabbani-shaik.pdf" download className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
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
                <div className="relative aspect-square overflow-hidden rounded-full border border-zinc-200 w-[280px] h-[280px] sm:w-[280px] sm:h-[280px] max-w-full dark:border-zinc-800">
                  <OptimizedImage
                    src="/dp.jpg"
                    alt="Rabbani Shaik"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <LazySection>
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
                    className="max-w-[85%] leading-normal text-zinc-500 sm:text-lg sm:leading-7 dark:text-zinc-400"
                  >
                    I&apos;m an AI Engineer with 5+ years of experience building and deploying machine learning models
                    at scale. My expertise spans across various domains of artificial intelligence, from natural
                    language processing to computer vision and reinforcement learning.</AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
                {[
                  {
                    title: "NLP",
                    description: "Experimenting with LLMs, speech-to-text, and conversational AI using tools like Whisper and LangChain.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M4 12a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4Z"></path>
                        <path d="M8 12v4"></path>
                        <path d="M12 16v4"></path>
                        <path d="M4 16h8"></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Multimodal AI",
                    description: "Working with audio + text pipelines, combining modalities to build more intelligent agents.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Machine Learning",
                    description: "Getting hands-on with traditional ML, deep learning, and real-world applications.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    ),
                  },
                  {
                    title: "MLOps (Beginner)",
                    description: "Learning about model deployment, APIs, and inference optimization.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      </svg>
                    ),
                  },
                ].map((skill, index) => (
                  <AnimatedSkill
                    key={index}
                    index={index}
                    className="flex flex-col items-center space-y-2 rounded-lg border p-4 dark:border-zinc-800"
                  >
                    <div className="rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">{skill.icon}</div>
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">{skill.description}</p>
                  </AnimatedSkill>
                ))}
              </div>

              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
                <AnimatedSection delay={0.2}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Java",
                        "Prompt Engineering",
                        "Hugging Face",
                        "Whisper",
                        "OpenAI API",
                        "LangChain",
                        "PyTorch",
                        "Streamlit",
                        "Git",
                        "SQL",
                        "Selenium",
                        "TestNG",
                        "Agile",
                        "Jira",
                        "Clickup",
                      ].map((skill, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.05 * index }}
                          whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.05 }}
                        >
                          <Badge variant="outline">{skill}</Badge>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Education</h3>
                    <div className="space-y-2">
                      {[
                        {
                          degree: "B.Tech in Computer Science and Engineering",
                          school: "Sir C R Reddy College of Engineering, 2017-2021",
                        }
                      ].map((edu, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                        >
                          <h4 className="font-medium">{edu.degree}</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.school}</p>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Projects Section */}
        <LazySection>
          <section id="projects" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Projects
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-normal text-zinc-500 sm:text-lg sm:leading-7 dark:text-zinc-400"
                  >
                    A selection of my recent work in AI and machine learning.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Tabs
                  defaultValue="all"
                  className="mt-12 w-full max-w-4xl mx-auto"
                  value={activeTab}
                  onValueChange={handleTabChange}
                >
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="nlp">NLP</TabsTrigger>
                    <TabsTrigger value="cv">Computer Vision</TabsTrigger>
                    <TabsTrigger value="rl">Reinforcement Learning</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {projects.map((project, index) => (
                        <AnimatedCard key={index} delay={0.1 * index}>
                          <ProjectCard project={project} />
                        </AnimatedCard>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="nlp" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {projects
                        .filter((p) => p.category === "nlp")
                        .map((project, index) => (
                          <AnimatedCard key={index} delay={0.1 * index}>
                            <ProjectCard project={project} />
                          </AnimatedCard>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="cv" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {projects
                        .filter((p) => p.category === "cv")
                        .map((project, index) => (
                          <AnimatedCard key={index} delay={0.1 * index}>
                            <ProjectCard project={project} />
                          </AnimatedCard>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="rl" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {projects
                        .filter((p) => p.category === "rl")
                        .map((project, index) => (
                          <AnimatedCard key={index} delay={0.1 * index}>
                            <ProjectCard project={project} />
                          </AnimatedCard>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>
          </section>
        </LazySection>

        {/* Blog Section */}
        <LazySection>
          <section id="blog" className="py-12 md:py-24 bg-white dark:bg-zinc-950">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Blog
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-normal text-zinc-500 sm:text-lg sm:leading-7 dark:text-zinc-400"
                  >
                    Thoughts, insights, and explorations in AI.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Tabs defaultValue="all" className="mt-12 w-full max-w-4xl mx-auto">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All Posts</TabsTrigger>
                    <TabsTrigger value="nlp">NLP & Language</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts.map((post, index) => (
                        <AnimatedCard key={index} delay={0.1 * index}>
                          <BlogCard post={post} />
                        </AnimatedCard>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="nlp" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts
                        .filter((p) => p.category === "nlp" || p.category === "multimodal")
                        .map((post, index) => (
                          <AnimatedCard key={index} delay={0.1 * index}>
                            <BlogCard post={post} />
                          </AnimatedCard>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="technical" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {blogPosts
                        .filter((p) => p.category === "mlops" || p.category === "cv" || p.category === "rl")
                        .map((post, index) => (
                          <AnimatedCard key={index} delay={0.1 * index}>
                            <BlogCard post={post} />
                          </AnimatedCard>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex justify-center mt-10">
                  <m.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  >
                    <Button variant="outline" asChild>
                      <a href="#" className="flex items-center gap-2">
                        View All Articles <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </m.div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </LazySection>

        {/* Experience Section */}
        <LazySection>
          <section id="experience" className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Experience
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-normal text-zinc-500 sm:text-lg sm:leading-7 dark:text-zinc-400"
                  >
                    My professional journey.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto mt-12 max-w-3xl space-y-8">
                {[
                  {
                    title: "AI/ML Engineer",
                    company: "F22 Labs",
                    period: "2025 Jan - Present",
                    description:
                      "Learning and building AI applications using OpenAI, Whisper, and multimodal workflows. Prototyping voice agents and LLM-powered tools.",
                  },
                  {
                    title: "AI Intern",
                    company: "F22 Labs",
                    period: "2023 July - 2024 Dec",
                    description:
                      "Learnt core AI concepts by working on real-world projects involving LLMs, Whisper, LangChain, and voice agents. Explored model inference, prompt engineering, and speech-to-text pipelines.",
                  },
                  {
                    title: "Software Engineer E",
                    company: "Fidelity National Information Services Inc (FIS)",
                    period: "2021 Aug - 2023 Feb",
                    description:
                      "Worked on Automation projects",
                  },
                ].map((job, index) => (
                  <AnimatedTimelineItem
                    key={index}
                    index={index}
                    className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800"
                  >
                    <div className="absolute left-0 top-0 flex w-6 h-6 items-center justify-center rounded-full bg-zinc-100 -translate-x-1/2 dark:bg-zinc-800">
                      <m.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 * index + 0.3 }}
                        className="h-2 w-2 rounded-full bg-zinc-600 dark:bg-zinc-400"
                      ></m.div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{job.period}</span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-300">{job.company}</p>
                      <p className="text-zinc-500 dark:text-zinc-400">{job.description}</p>
                    </div>
                  </AnimatedTimelineItem>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* Contact Section */}
        <LazySection>
          <section id="contact" className="py-12 md:py-24 bg-white dark:bg-zinc-950">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                  <AnimatedText as="h2" className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                    Get in Touch
                  </AnimatedText>
                  <AnimatedText
                    delay={0.1}
                    as="div"
                    className="max-w-[85%] leading-normal text-zinc-500 sm:text-lg sm:leading-7 dark:text-zinc-400"
                  >
                  Feel free to reach out.
                  </AnimatedText>
                </div>
              </AnimatedSection>

              <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
                <AnimatedSection delay={0.2}>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Mail className="h-5 w-5" />,
                        text: "rabbanishaik998@gmail.com",
                        href: "mailto:rabbanishaik998@gmail.com",
                      },
                      {
                        icon: <Github className="h-5 w-5" />,
                        text: "github.com/rabbanishaik-cpu",
                        href: "https://github.com/rabbanishaik-cpu",
                      },
                      {
                        icon: <Linkedin className="h-5 w-5" />,
                        text: "linkedin.com/in/rabbani-shaik-ind",
                        href: "https://linkedin.com/in/rabbani-shaik-ind/",
                      },
                    ].map((contact, index) => (
                      <m.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-zinc-500 dark:text-zinc-400">{contact.icon}</span>
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                        >
                          {contact.text}
                        </a>
                      </m.div>
                    ))}
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div className="space-y-4">
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="grid gap-2"
                    >
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                        placeholder="Your name"
                      />
                    </m.div>
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="grid gap-2"
                    >
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                        placeholder="Your email"
                      />
                    </m.div>
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="grid gap-2"
                    >
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                        placeholder="Your message"
                      ></textarea>
                    </m.div>
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      <Button className="w-full">Send Message</Button>
                    </m.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </LazySection>
      </main>

      {/* Footer */}
      <m.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t bg-white py-6 dark:bg-zinc-950 dark:border-zinc-800"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">© 2025 Rabbani Shaik. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/rabbanishaik-cpu", label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/rabbani-shaik-ind/", label: "LinkedIn" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:rabbanishaik998@gmail.com", label: "Email" },
              ].map((item, index) => (
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

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}
