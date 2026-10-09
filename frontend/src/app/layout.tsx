import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://francochavez.dev"),
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
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Franco Chávez",
    title: "Franco Chávez | Custom Software & Automation",
    description:
      "Custom software development, business process automation, system integrations and internal applications that help companies work more efficiently.",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franco Chávez | Custom Software & Automation",
    description:
      "Custom software development, business process automation, system integrations and internal applications that help companies work more efficiently.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
