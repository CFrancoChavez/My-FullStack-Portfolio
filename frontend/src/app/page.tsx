"use client"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Technologies />
      <Projects />
    </div>
  )
}