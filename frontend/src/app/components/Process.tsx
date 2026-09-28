"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"

function IconSearch() {
  return (
    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function IconWrench() {
  return (
    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4.5a3.5 3.5 0 114.596 4.596L20 13.5l-2.5 2.5-4.404-4.404A3.5 3.5 0 0111 4.5zM6 20l2-2m-2 2l-2-2m2 2v-4" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg className="w-4 h-4 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

const icons = {
  search: IconSearch,
  wrench: IconWrench,
  check: IconCheck,
}

export default function Process() {
  const { t, tObject, isLoading } = useLanguage()

  if (isLoading) {
    return null
  }

  const flow = tObject<string[]>("process.flow") ?? []

  const steps = [0, 1, 2].map((index) => ({
    icon: icons[t(`process.steps.${index}.icon`) as keyof typeof icons],
    title: t(`process.steps.${index}.title`),
    description: t(`process.steps.${index}.description`),
  }))

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("process.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("process.intro")}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            {t("process.aiLine")}
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-12 text-sm text-gray-500 dark:text-gray-400">
          {flow.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="font-medium">{step}</span>
              {index < flow.length - 1 && <IconArrow />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-950 rounded-lg mb-4">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}