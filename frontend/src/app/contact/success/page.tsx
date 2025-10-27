"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"

export default function ContactSuccess() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md mx-auto px-4"
      >
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.success.title")}</h1>

        <p className="text-gray-600 mb-8">{t("contact.success.description")}</p>

        <div className="space-y-4">
          <Link
            href="/contact"
            className="block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {t("contact.success.sendAnother")}
          </Link>

          <Link
            href="/"
            className="block bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            {t("contact.success.backHome")}
          </Link>

          <p className="text-sm text-gray-500">{t("contact.success.responseTime")}</p>
        </div>
      </motion.div>
    </div>
  )
}
