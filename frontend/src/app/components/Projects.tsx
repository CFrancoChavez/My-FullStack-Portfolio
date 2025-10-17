"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Web Scraper Avanzado",
      description:
        "Sistema de scraping automatizado para extracción de datos web con Node.js, Puppeteer y SQL Server. Incluye interface web con React para gestión de productos.",
      image: "/img-webscraperR.png?height=300&width=400",
      technologies: ["Node.js", "Puppeteer", "SQL Server", "React", "Express"],
      status: "Completado",
      github: "https://github.com/CFrancoChavez/Mi-App-Webscraper",
      demo: "https://github.com/CFrancoChavez/Mi-App-Webscraper#readme",
    },
    {
      title: "Portfolio Full Stack",
      description:
        "Portfolio profesional con Next.js en el frontend y Express.js + SQL Server en el backend. Incluye formulario de contacto funcional y chatbot interactivo.",
      image: "/img-portfolioR.png?height=300&width=400",
      technologies: ["Next.js", "Express", "SQL Server", "Tailwind", "Framer Motion"],
      status: "Completado",
      github: "#",
      demo: "#",
    },
    {
      title: "API REST Escalable",
      description: "API robusta con autenticación JWT, validaciones y documentación completa",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Express", "SQL Server", "JWT", "Swagger"],
      status: "En desarrollo",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Completado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                    className={`flex-1 text-center bg-gray-900 text-white py-2 rounded-lg transition-colors ${
                      project.github !== "#" ? "hover:bg-gray-800" : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (project.github === "#") {
                        e.preventDefault()
                      }
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                    className={`flex-1 text-center border-2 border-blue-600 text-blue-600 py-2 rounded-lg transition-colors ${
                      project.demo !== "#" ? "hover:bg-blue-600 hover:text-white" : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={(e) => {
                      if (project.demo === "#") {
                        e.preventDefault()
                      }
                    }}
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}