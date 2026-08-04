"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import WebScraperIcon from "./icons/WebScraperIcon"
import OcrIcon from "./icons/OcrIcon"

export default function Projects() {
  const { t, isLoading } = useLanguage()

  if (isLoading) {
    return null
  }

  const projects = [
    {
      title: t("projects.items.webScraper.title"),
      description: t("projects.items.webScraper.description"),
      icon: WebScraperIcon,
      github: "https://github.com/CFrancoChavez/Mi-App-Webscraper",
      demo: "https://youtu.be/_TcldXJD1Xc?si=eD0JcLLVqF-R5DN2",
    },
    {
      title: t("projects.items.ocr.title"),
      description: t("projects.items.ocr.description"),
      icon: OcrIcon,
      github: "https://github.com/CFrancoChavez/OCR-Marcacion",
      demo: "https://huggingface.co/spaces/FrancoCH/ocr-marcacion",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 dark:border-gray-700 max-w-md mx-auto w-full"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6 flex items-center justify-center min-h-[320px]">
                    <div className="w-52 h-52">
                      <IconComponent />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                 
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.github === "#") {
                          e.preventDefault()
                        }
                      }}
                      className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      {t("projects.buttons.github")}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.demo === "#") {
                          e.preventDefault()
                        }
                      }}
                      className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      {t("projects.buttons.demo")}
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}