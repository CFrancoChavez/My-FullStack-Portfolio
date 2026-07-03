"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t, isLoading } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isLoading) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 rounded mb-6 max-w-2xl mx-auto"></div>
            <div className="h-8 bg-gray-200 rounded mb-8 max-w-xl mx-auto"></div>
            <div className="h-6 bg-gray-200 rounded mb-8 max-w-3xl mx-auto"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-40 bg-gray-200 rounded"></div>
              <div className="h-12 w-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
          >
            
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-500 mb-6 font-normal">
            {t("hero.subtitle")}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {t("hero.cta.primary")}
            </Link>
            <Link
              href="#projects"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {t("hero.cta.secondary")}
            </Link>
          </div>

          {/* Social proof / metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t border-gray-100"
          >
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{t("hero.highlights.0.value")}</p>
              <p className="text-sm text-gray-500 mt-1">{t("hero.highlights.0.label")}</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{t("hero.highlights.1.value")}</p>
              <p className="text-sm text-gray-500 mt-1">{t("hero.highlights.1.label")}</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">{t("hero.highlights.2.value")}</p>
              <p className="text-sm text-gray-500 mt-1">{t("hero.highlights.2.label")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}