"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ChatBot from "./ChatBot"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <LanguageProvider>
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-gray-900">Portfolio</div>
              <div className="hidden md:flex space-x-8">
                <span className="text-gray-700">Inicio</span>
                <span className="text-gray-700">Tecnologías</span>
                <span className="text-gray-700">Proyectos</span>
                <span className="text-gray-700">Contacto</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Mi Portfolio. Desarrollado con Next.js y Tailwind CSS.</p>
          </div>
        </footer>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ChatBot />
    </LanguageProvider>
  )
}
