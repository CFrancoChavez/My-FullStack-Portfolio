"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<ChatStep>("welcome")
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte?",
    },
  ])

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
      { text: "💼 Ver mis proyectos", action: "projects" },
      { text: "🛠️ Conocer mis habilidades", action: "skills" },
      { text: "📧 Contactar conmigo", action: "contact" },
      { text: "📄 Descargar CV", action: "cv" },
    ],
    projects: [
      { text: "🕷️ Web Scraper", action: "scraper" },
      { text: "📊 Sistema de Gestión", action: "management" },
      { text: "🔗 API REST", action: "api" },
      { text: "👀 Ver todos los proyectos", action: "view-projects" },
      { text: "⬅️ Volver al menú", action: "welcome" },
    ],
    skills: [
      { text: "⚛️ Frontend (React/Next.js)", action: "frontend" },
      { text: "🖥️ Backend (Node.js/Express)", action: "backend" },
      { text: "🗄️ Bases de datos", action: "database" },
      { text: "👀 Ver todas las tecnologías", action: "view-technologies" },
      { text: "⬅️ Volver al menú", action: "welcome" },
    ],
    contact: [],
  }

  const responses: Record<string, string> = {
    projects: "🚀 Aquí tienes mis proyectos principales. ¿Cuál te interesa más?",
    skills: "💪 Estas son mis principales áreas de expertise. ¿Sobre cuál quieres saber más?",
    scraper:
      "🕷️ Mi Web Scraper puede extraer datos de múltiples sitios web de forma automatizada usando Puppeteer y Node.js.",
    management:
      "📊 Sistema completo de gestión empresarial con dashboard interactivo, reportes en tiempo real y autenticación segura.",
    api: "🔗 API REST escalable con autenticación JWT, validaciones robustas y documentación completa con Swagger.",
    frontend:
      "⚛️ Especializado en React, Next.js, Tailwind CSS y TypeScript para crear interfaces modernas y responsivas.",
    backend:
      "🖥️ Experto en Node.js, Express.js, APIs REST y arquitecturas escalables. Enfocado en rendimiento y seguridad.",
    database:
      "🗄️ Trabajo con MongoDB, diseño de esquemas eficientes y optimización de consultas para máximo rendimiento.",
    contact: "📧 ¡Perfecto! Te puedo ayudar a contactarme de varias formas:",
    cv: "📄 Mi CV está disponible para descarga. Contáctame y te enviaré la versión más actualizada con todos mis proyectos.",
  }

  const handleOptionClick = (action: string) => {
    if (action === "view-projects") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: "Ver todos los proyectos" },
        { type: "bot", content: "¡Perfecto! Te llevo a la sección de proyectos 🚀" },
      ])
      setTimeout(() => scrollToSection("projects"), 500)
      return
    }

    if (action === "view-technologies") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: "Ver todas las tecnologías" },
        { type: "bot", content: "¡Excelente! Te muestro todas mis habilidades técnicas 💪" },
      ])
      setTimeout(() => scrollToSection("technologies"), 500)
      return
    }

    if (action === "contact") {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: "Contactar contigo" },
        { type: "bot", content: responses.contact },
      ])
      setCurrentStep("contact")
      return
    }

    if (responses[action]) {
      const userText = chatOptions[currentStep]?.find((opt) => opt.action === action)?.text || ""
      setMessages((prev) => [...prev, { type: "user", content: userText }, { type: "bot", content: responses[action] }])
    }

    if (chatOptions[action as ChatStep]) {
      setCurrentStep(action as ChatStep)
    }
  }

  const resetToWelcome = () => {
    setCurrentStep("welcome")
    setMessages((prev) => [...prev, { type: "bot", content: "¿En qué más puedo ayudarte?" }])
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
              <h3 className="font-semibold">Asistente Virtual</h3>
              <p className="text-sm opacity-90">¿En qué puedo ayudarte?</p>
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
                    📧 Enviar email
                  </button>
                  <button
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    onClick={() => window.open("https://linkedin.com/in/tu-perfil", "_blank")}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    💼 LinkedIn
                  </button>
                  <button
                    onClick={resetToWelcome}
                    className="w-full text-left p-2 text-sm bg-white border rounded hover:bg-gray-50 transition-colors"
                  >
                    ⬅️ Volver al menú
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
