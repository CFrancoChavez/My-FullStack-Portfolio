"use client"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
    </div>
  )
}