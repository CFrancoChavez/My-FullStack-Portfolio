import { NextResponse } from "next/server"
import { getApiUrl, HUGGINGFACE_SPACE_URL } from "@/lib/config"

// Esta ruta se ejecutará automáticamente según el schedule configurado en vercel.json
export async function GET() {
  try {
    console.log("[v0] Cron job: Pinging backend and Hugging Face Space to prevent cold start...")

    const [backendResponse, hfResponse] = await Promise.all([
      // Ping backend
      fetch(getApiUrl("/api/health"), {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job",
        },
      }),
      // Ping Hugging Face Space
      fetch(HUGGINGFACE_SPACE_URL, {
        method: "GET",
        headers: {
          "User-Agent": "Vercel-Cron-Job",
        },
      }),
    ])

    const backendOk = backendResponse.ok
    const hfOk = hfResponse.ok

    if (backendOk) {
      const backendData = await backendResponse.json()
      console.log("[v0] Backend is alive:", backendData)
    } else {
      console.error("[v0] Backend returned error:", backendResponse.status)
    }

    if (hfOk) {
      console.log("[v0] Hugging Face Space is alive")
    } else {
      console.error("[v0] Hugging Face Space returned error:", hfResponse.status)
    }

    return NextResponse.json({
      success: backendOk && hfOk,
      message: "Services pinged",
      timestamp: new Date().toISOString(),
      services: {
        backend: {
          status: backendOk ? "alive" : "error",
          statusCode: backendResponse.status,
        },
        huggingface: {
          status: hfOk ? "alive" : "error",
          statusCode: hfResponse.status,
        },
      },
    })
  } catch (error) {
    console.error("[v0] Error pinging services:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to ping services",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
