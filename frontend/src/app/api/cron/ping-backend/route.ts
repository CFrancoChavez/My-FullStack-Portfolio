import { NextResponse } from "next/server"
import { getApiUrl, HUGGINGFACE_SPACE_URL } from "@/lib/config"

// Esta ruta se ejecutará automáticamente según el schedule configurado en vercel.json
export async function GET() {
  try {
    console.log("[v0] Cron job: Pinging backend and Hugging Face Space to prevent cold start...")

    const BACKEND_URL = getApiUrl("/api/health")
    const HUGGINGFACE_URL = HUGGINGFACE_SPACE_URL

    console.log("[v0] Backend URL:", BACKEND_URL)
    console.log("[v0] Hugging Face URL:", HUGGINGFACE_URL)

    const [backendResponse, hfResponse] = await Promise.all([
      // Ping backend
      fetch(BACKEND_URL, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job",
        },
      }).catch((error) => {
        console.error("[v0] Backend fetch error:", error.message)
        return { ok: false, status: 500, statusText: error.message }
      }),
      // Ping Hugging Face Space
      fetch(HUGGINGFACE_URL, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job",
        },
      }).catch((error) => {
        console.error("[v0] Hugging Face fetch error:", error.message)
        return { ok: false, status: 500, statusText: error.message }
      }),
    ])

    const backendOk = backendResponse.ok
    const hfOk = hfResponse.ok

    if (backendOk) {
      try {
        const backendData = backendResponse instanceof Response ? await backendResponse.json() : null
        console.log("[v0] ✅ Backend is alive:", backendData)
      } catch {
        console.log("[v0] ✅ Backend is alive (non-JSON response)")
      }
    } else {
      console.error(
        "[v0] ❌ Backend returned error:",
        backendResponse.status,
        backendResponse.statusText || "Unknown error",
      )
    }

    if (hfOk) {
      console.log("[v0] ✅ Hugging Face Space is alive")
    } else {
      console.error(
        "[v0] ❌ Hugging Face Space returned error:",
        hfResponse.status,
        hfResponse.statusText || "Unknown error",
      )
    }

    return NextResponse.json({
      success: backendOk || hfOk,
      message: "Services pinged",
      timestamp: new Date().toISOString(),
      services: {
        backend: {
          url: BACKEND_URL,
          status: backendOk ? "alive" : "error",
          statusCode: backendResponse.status,
          statusText: backendResponse.statusText,
        },
        huggingface: {
          url: HUGGINGFACE_URL,
          status: hfOk ? "alive" : "error",
          statusCode: hfResponse.status,
          statusText: hfResponse.statusText,
        },
      },
    })
  } catch (error) {
    console.error("[v0] ❌ Error pinging services:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to ping services",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
