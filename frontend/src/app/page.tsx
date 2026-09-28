"use client"
import { useEffect } from "react"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Process from "./components/Process"
import Projects from "./components/Projects"

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    }
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Process />
      <Projects />
    </div>
  )
}