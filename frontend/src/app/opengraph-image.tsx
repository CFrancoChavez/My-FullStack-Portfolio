import { ImageResponse } from "next/og"

export const alt = "Franco Chávez — Custom Software & Automation"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadInter(weight: 500 | 700) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
        },
      })
    ).text()
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1]
    if (!url) return null
    return await (await fetch(url)).arrayBuffer()
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const [bold, medium] = await Promise.all([loadInter(700), loadInter(500)])

  const fonts = [
    bold && { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const },
    medium && { name: "Inter", data: medium, weight: 500 as const, style: "normal" as const },
  ].filter((font): font is NonNullable<typeof font> => Boolean(font))

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111827",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 96, height: 8, background: "#2563eb" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Franco Chávez
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 52, fontWeight: 500, color: "#60a5fa", lineHeight: 1.2 }}>
            Custom Software & Automation
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 500, color: "#9ca3af" }}>
          francochavez.dev
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}