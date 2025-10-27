"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from "@/hooks/useTranslation"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t("hero.greeting")} <span className="text-blue-600">{t("hero.title")}</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16">
              <span>{t("hero.animation.nextjs")}</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t("hero.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                {t("hero.viewProjects")}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                {t("hero.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("hero.greeting")} <span className="text-blue-600">{t("hero.title")}</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16">
            <TypeAnimation
              sequence={[
                t("hero.animation.nextjs"),
                2000,
                t("hero.animation.express"),
                2000,
                t("hero.animation.mongodb"),
                2000,
                t("hero.animation.solutions"),
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">{t("hero.description")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t("hero.viewProjects")}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              {t("hero.contact")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
