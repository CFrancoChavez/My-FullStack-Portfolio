import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Franco Chávez | Custom Software & Automation",
  description:
    "Custom software development, business process automation, system integrations and internal applications that help companies work more efficiently.",
  keywords: [
    "custom software development",
    "software automation",
    "business process automation",
    "system integration",
    "full stack developer",
    "backend developer",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "sql",
    "dashboard development",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
