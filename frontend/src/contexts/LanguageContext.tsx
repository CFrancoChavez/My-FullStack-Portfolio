"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  tObject: <T = unknown>(key: string) => T | null
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, unknown>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/locales/${language}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error("[v0] Error loading translations:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTranslations()
  }, [language])

  // Initialize language from localStorage or browser
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase()
      const detectedLang = browserLang.startsWith("es") ? "es" : "en"
      setLanguageState(detectedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    if (isLoading) return ""

    const keys = key.split(".")
    let value: unknown = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        console.warn(`[v0] Translation key not found: ${key}`)
        return key // Return the key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  const tObject = <T = unknown>(key: string): T | null => {
    if (isLoading) return null

    const keys = key.split(".")
    let value: unknown = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        console.warn(`[v0] Translation key not found: ${key}`)
        return null
      }
    }

    return value as T
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tObject, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
