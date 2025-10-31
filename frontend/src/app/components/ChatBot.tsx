"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

type ChatStep = "welcome" | "projects" | "skills" | "contact" | "projectDetail" | "skillDetail"

interface Message {
  type: "bot" | "user"
  content: string | JSX.Element
}

interface ChatOption {
  text: string
  action: string
}

export default function ChatBot() {
  const { t, tObject, isLoading } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<ChatStep>("welcome")
  const [currentProject, setCurrentProject] = useState<string | null>(null)
  const [currentSkill, setCurrentSkill] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!isLoading && messages.length === 0) {
      setMessages([
        {
          type: "bot",
          content: t("chatbot.welcome.greeting"),
        },
      ])
    }
  }, [t, isLoading, messages.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navigateToPage = (url: string) => {
    window.location.href = url
    setIsOpen(false)
  }

  const chatOptions: Record<ChatStep, ChatOption[]> = {
    welcome: [
      { text: t("chatbot.menu.projects"), action: "projects" },
      { text: t("chatbot.menu.skills"), action: "skills" },
      { text: t("chatbot.menu.contact"), action: "contact" },
    ],
    projects: [
      { text: t("chatbot.projects.webscraper"), action: "webscraper" },
      { text: t("chatbot.projects.portfolio"), action: "portfolio" },
      { text: t("chatbot.projects.ocr"), action: "ocr" },
      { text: t("chatbot.projects.viewAll"), action: "view-projects" },
      { text: t("chatbot.projects.back"), action: "welcome" },
    ],
    skills: [
      { text: t("chatbot.skills.frontend"), action: "frontend" },
      { text: t("chatbot.skills.backend"), action: "backend" },
      { text: t("chatbot.skills.database"), action: "database" },
      { text: t("chatbot.skills.python"), action: "python" },
      { text: t("chatbot.skills.viewAll"), action: "view-technologies" },
      { text: t("chatbot.skills.back"), action: "welcome" },
    ],
    contact: [],
    projectDetail: [{ text: t("chatbot.projects.back"), action: "projects" }],
    skillDetail: [{ text: t("chatbot.skills.back"), action: "skills" }],
  }

  const renderProjectDetail = (projectKey: string) => {
    const projectData = {
      webscraper: {
        tech: ["Node.js", "Puppeteer", "SQL Server", "React", "Express"],
        github: "https://github.com/tu-usuario/web-scraper",
        demo: "#",
      },
      portfolio: {
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
        github: "https://github.com/tu-usuario/portfolio",
        demo: "https://my-full-stack-portfolio-smoky.vercel.app/",
      },
      ocr: {
        tech: ["Python", "Flask", "OpenCV", "Tesseract", "EasyOCR"],
        github: "https://github.com/tu-usuario/ocr-marcacion",
        demo: "#",
      },
    }

    const project = projectData[projectKey as keyof typeof projectData]

    const features = tObject<string[]>(`chatbot.projectDetails.${projectKey}.featuresList`) || []

    return (
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold mb-1">{t(`chatbot.projectDetails.${projectKey}.title`)}</p>
          <p className="text-gray-700">{t(`chatbot.projectDetails.${projectKey}.description`)}</p>
        </div>

        <div>
          <p className="font-semibold mb-1">{t(`chatbot.projectDetails.${projectKey}.features`)}</p>
          <div className="text-gray-700 space-y-1">
            {features.map((feature: string, idx: number) => (
              <p key={idx}>{feature}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-1">{t(`chatbot.projectDetails.${projectKey}.tech`)}</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">{t(`chatbot.projectDetails.${projectKey}.buttons`)}</p>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-gray-800 text-white rounded text-xs hover:bg-gray-700 transition-colors"
            >
              {t(`chatbot.projectDetails.${projectKey}.github`)}
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
            >
              {t(`chatbot.projectDetails.${projectKey}.demo`)}
            </a>
          </div>
        </div>
      </div>
    )
  }

  const renderSkillDetail = (skillKey: string) => {
    const skillData = {
      frontend: {
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      backend: {
        tech: ["Node.js", "Express", "REST APIs", "JWT", "Microservices"],
      },
      database: {
        tech: ["MongoDB", "PostgreSQL", "SQL Server"],
      },
      python: {
        tech: ["Python", "Flask", "OpenCV", "Tesseract", "EasyOCR"],
      },
    }

    const skill = skillData[skillKey as keyof typeof skillData]
    const skills = tObject<string[]>(`chatbot.skillDetails.${skillKey}.skillsList`) || []

    return (
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold mb-1">{t(`chatbot.skillDetails.${skillKey}.title`)}</p>
          <p className="text-gray-700">{t(`chatbot.skillDetails.${skillKey}.description`)}</p>
        </div>

        <div>
          <p className="font-semibold mb-1">{t(`chatbot.skillDetails.${skillKey}.skills`)}</p>
          <div className="text-gray-700 space-y-1">
            {skills.map((skillItem: string, idx: number) => (
              <p key={idx}>{skillItem}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-1">{t(`chatbot.skillDetails.${skillKey}.tech`)}</p>
          <div className="flex flex-wrap gap-1">
            {skill.tech.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const getResponse = (action: string): string => {
    const responseMap: Record<string, string> = {
      projects: t("chatbot.projects.title"),
      skills: t("chatbot.skills.title"),
      frontend: t("chatbot.responses.frontend"),
      backend: t("chatbot.responses.backend"),
      database: t("chatbot.responses.database"),
      python: t("chatbot.responses.python"),
      contact: t("chatbot.contact.title"),
    }
    return responseMap[action] || ""
  }

  const handleOptionClick = (action: string) => {
    if (action === "frontend" || action === "backend" || action === "database" || action === "python") {
      const userText = chatOptions[currentStep]?.find((opt) => opt.action === action)?.text || ""
      setMessages((prev) => [
        ...prev,
        { type: "user", content: userText },
        { type: "bot", content: renderSkillDetail(action) },
      ])
      setCurrentSkill(action)
      setCurrentStep("skillDetail")
      return
    }

    if (action === "webscraper" || action === "portfolio" || action === "ocr") {
      const userText = chatOptions[currentStep]?.find((opt) => opt.action === action)?.text || ""
      setMessages((prev) => [
        ...prev,
        { type: "user", content: userText },
        { type: "bot", content: renderProjectDetail(action) },
      ])
      setCurrentProject(action)
      setCurrentStep("projectDetail")
      return
    }

    if (action === "view-projects") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: t("chatbot.projects.viewAll") },
        { type: "bot", content: t("chatbot.responses.viewProjects") },
      ])
      setTimeout(() => scrollToSection("projects"), 500)
      return
    }

    if (action === "view-technologies") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: t("chatbot.skills.viewAll") },
        { type: "bot", content: t("chatbot.responses.viewTechnologies") },
      ])
      setTimeout(() => scrollToSection("technologies"), 500)
      return
    }

    if (action === "contact") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: t("chatbot.menu.contact") },
        { type: "bot", content: getResponse("contact") },
      ])
      setCurrentStep("contact")
      return
    }

    const response = getResponse(action)
    if (response) {
      const userText = chatOptions[currentStep]?.find((opt) => opt.action === action)?.text || ""
      setMessages((prev) => [...prev, { type: "user", content: userText }, { type: "bot", content: response }])
    }

    if (chatOptions[action as ChatStep]) {
      setCurrentStep(action as ChatStep)
      if (action === "projects" || action === "welcome") {
        setCurrentProject(null)
      }
      if (action === "skills" || action === "welcome") {
        setCurrentSkill(null)
      }
    }
  }

  const resetToWelcome = () => {
    setCurrentStep("welcome")
    setCurrentProject(null)
    setCurrentSkill(null)
    setMessages((prev) => [...prev, { type: "bot", content: t("chatbot.responses.helpMore") }])
  }

  if (isLoading) {
    return null
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{t("chatbot.title")}</h3>
                <p className="text-sm opacity-90">{t("chatbot.welcome.question")}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 hover:bg-blue-700 rounded p-1 transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-64 relative">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div className="sticky bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>

            <div className="p-4 border-t bg-gray-50 rounded-b-lg max-h-48 overflow-y-auto">
              {currentStep === "contact" ? (
                <div className="space-y-2">
                  <button
                    onClick={() => navigateToPage("/contact")}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    {t("chatbot.contact.email")}
                  </button>
                  <button
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    {t("chatbot.contact.whatsapp")}
                  </button>
                  <button
                    onClick={() => window.open("https://linkedin.com/in/tu-perfil", "_blank")}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    {t("chatbot.contact.linkedin")}
                  </button>
                  <button
                    onClick={resetToWelcome}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    {t("chatbot.contact.back")}
                  </button>
                </div>
              ) : currentStep === "projectDetail" ? (
                <div className="space-y-2">{renderProjectDetail(currentProject as string)}</div>
              ) : currentStep === "skillDetail" ? (
                <div className="space-y-2">{renderSkillDetail(currentSkill as string)}</div>
              ) : (
                <div className="space-y-2">
                  {chatOptions[currentStep]?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option.action)}
                      className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
