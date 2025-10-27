"use client"

import { useTranslation } from "@/hooks/useTranslation"

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <button
        onClick={() => setLanguage("en")}
        className={`transition-all ${
          language === "en" ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-700"
        }`}
      >
        EN
      </button>
      <span className="text-slate-300">|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`transition-all ${
          language === "es" ? "text-slate-900 font-bold" : "text-slate-500 hover:text-slate-700"
        }`}
      >
        ES
      </button>
    </div>
  )
}
