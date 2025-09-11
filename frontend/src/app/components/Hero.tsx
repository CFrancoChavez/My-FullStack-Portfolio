"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

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
              Hola, soy <span className="text-blue-600">Desarrollador Full Stack</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16">
              <span>Especializado en Next.js</span>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Desarrollador apasionado por crear aplicaciones web modernas y escalables. Especializado en tecnologías como
              React, Next.js, Node.js y MongoDB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Contactar
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
            Hola, soy <span className="text-blue-600">Desarrollador Full Stack</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16">
            <TypeAnimation
              sequence={[
                "Especializado en Next.js",
                2000,
                "Experto en Express.js",
                2000,
                "Trabajando con MongoDB",
                2000,
                "Creando soluciones innovadoras",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Desarrollador apasionado por crear aplicaciones web modernas y escalables. Especializado en tecnologías como
            React, Next.js, Node.js y MongoDB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Ver Proyectos
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}