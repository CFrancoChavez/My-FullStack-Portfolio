"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "@/hooks/useTranslation"

type ChatStep = "welcome" | "projects" | "skills" | "contact"

interface Message {
  type: "bot" | "user"
  content: string
}

interface ChatOption {
  text: string
  action: string
}

export default function ChatBot() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<ChatStep>("welcome")
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          type: "bot",
          content: t("chatbot.welcome.greeting"),
        },
      ])
    }
  }, [t, messages.length])

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
  }

  const getResponse = (action: string): string => {
    const responseMap: Record<string, string> = {
      projects: t("chatbot.projects.title"),
      skills: t("chatbot.skills.title"),
      webscraper: t("chatbot.responses.webscraper"),
      portfolio: t("chatbot.responses.portfolio"),
      ocr: t("chatbot.responses.ocr"),
      frontend: t("chatbot.responses.frontend"),
      backend: t("chatbot.responses.backend"),
      database: t("chatbot.responses.database"),
      python: t("chatbot.responses.python"),
      contact: t("chatbot.contact.title"),
    }
    return responseMap[action] || ""
  }

  const handleOptionClick = (action: string) => {
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
    }
  }

  const resetToWelcome = () => {
    setCurrentStep("welcome")
    setMessages((prev) => [...prev, { type: "bot", content: t("chatbot.responses.helpMore") }])
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
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">{t("chatbot.title")}</h3>
              <p className="text-sm opacity-90">{t("chatbot.welcome.question")}</p>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
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
            </div>

            <div className="p-4 border-t bg-gray-50 rounded-b-lg">
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
