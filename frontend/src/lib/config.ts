// Configuración de URLs del backend según el ambiente
export const API_CONFIG = {
  // En desarrollo usa localhost, en producción usa la URL de Render
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "development" 
      ? "http://localhost:5000" 
      : "https://tu-backend.onrender.com"),

  endpoints: {
    contact: "/api/contact",
    health: "/api/health",
  },
}

// Helper para construir URLs completas
export function getApiUrl(endpoint: string): string {
  return `${API_CONFIG.baseURL}${endpoint}`
}