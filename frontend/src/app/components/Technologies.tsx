"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/useTranslation"

export default function Technologies() {
  const { t } = useTranslation()

  const technologies = [
    { name: "Next.js", icon: "⚛️", color: "bg-black" },
    { name: "React", icon: "⚛️", color: "bg-blue-500" },
    { name: "Node.js", icon: "🟢", color: "bg-green-600" },
    { name: "Express", icon: "🚀", color: "bg-gray-700" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-500" },
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700" },
    { name: "SQL Server", icon: "💾", color: "bg-red-600" },
    { name: "JavaScript", icon: "📜", color: "bg-yellow-400" },
    { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-500" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
    { name: "Python", icon: "🐍", color: "bg-yellow-500" },
  ]

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("technologies.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("technologies.description")}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-200 ${tech.color}`}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
