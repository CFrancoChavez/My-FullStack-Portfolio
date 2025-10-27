// // Configuración de URLs del backend según el ambiente
// export const API_CONFIG = {
//   // En desarrollo usa localhost, en producción usa la URL de Render
//   baseURL:
//     process.env.NEXT_PUBLIC_API_URL ||
//     (process.env.NODE_ENV === "development" 
//       ? "http://localhost:5000" 
//       : "https://my-fullstack-portfolio-znq1.onrender.com"),

//   endpoints: {
//     contact: "/api/contact",
//     health: "/api/health",
//   },
// }

// // Helper para construir URLs completas
// export function getApiUrl(endpoint: string): string {
//   return `${API_CONFIG.baseURL}${endpoint}`
// }
// Configuración de URLs del backend según el ambiente
export const API_CONFIG = {
  // En desarrollo usa localhost, en producción usa la URL de Render
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://my-fullstack-portfolio-znq1.onrender.com"),

  endpoints: {
    contact: "/api/contact",
    health: "/api/health",
  },
}

console.log("[v0] API Configuration Debug:")
console.log("[v0] NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL)
console.log("[v0] NODE_ENV:", process.env.NODE_ENV)
console.log("[v0] Final baseURL:", API_CONFIG.baseURL)

// Helper para construir URLs completas
export function getApiUrl(endpoint: string): string {
  const fullUrl = `${API_CONFIG.baseURL}${endpoint}`
  console.log("[v0] getApiUrl called with endpoint:", endpoint, "-> Full URL:", fullUrl)
  return fullUrl
}

export const HUGGINGFACE_SPACE_URL =
  process.env.NEXT_PUBLIC_HUGGINGFACE_SPACE_URL || "https://huggingface.co/spaces/FrancoCH/ocr-marcacion"