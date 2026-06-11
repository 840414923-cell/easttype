import { W, H, loadBgImage, drawBackground, drawOverlay, drawBrandFooter, drawWrappedText, initCanvas, canvasToJpg } from "./shared"
import { getJsonReport, t } from "@/lib/reports-json"
import type { ConstitutionId } from "@/lib/types"
import { TYPES } from "@/lib/constitution-data"

export async function renderDailyTipCard(typeId: ConstitutionId, code: string): Promise<string | null> {
  const report = await getJsonReport(typeId, "female")
  if (!report) return null

  const { canvas, ctx } = initCanvas() ?? {}
  if (!canvas || !ctx) return null

  const bgImg = await loadBgImage(typeId)
  drawBackground(ctx, bgImg)
  drawOverlay(ctx, 0.05)

  const ct = TYPES[typeId]
  const rhythm = report.ch4DailyRhythm

  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("EASTTYPE · DAILY BODY CLOCK", W / 2, 80)

  ctx.font = `bold 44px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 10
  ctx.shadowOffsetY = 3
  ctx.fillText(`Your Ideal Day`, W / 2, 120)
  ctx.fillStyle = ct.color
  ctx.fillText(`as ${ct.en}`, W / 2, 172)
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillText(`${ct.zh} · Personalized Meridian Schedule`, W / 2, 228)

  let y = 310
  for (let i = 0; i < rhythm.length; i++) {
    const row = rhythm[i]
    const isHighlight = i <= 2

    ctx.fillStyle = isHighlight ? "rgba(201,163,85,0.08)" : "rgba(255,255,255,0.02)"
    ctx.fillRect(60, y, W - 120, 105)
    if (isHighlight) {
      ctx.strokeStyle = "rgba(201,163,85,0.3)"
      ctx.lineWidth = 1.5
      ctx.strokeRect(60, y, W - 120, 105)
    }

    ctx.textAlign = "left"
    ctx.font = `bold 28px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "#C9A355"
    ctx.fillText(row.time, 90, y + 14)

    ctx.font = `bold 20px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = ct.color
    ctx.fillText(t(row.meridian), 280, y + 18)

    ctx.font = `400 18px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.7)"
    const desc = t(row.desc).replace(/\*\*/g, "")
    drawWrappedText(ctx, desc, 90, y + 55, W - 200, 18, 24)

    y += 118
  }

  ctx.textAlign = "center"
  drawBrandFooter(ctx, code, y + 20)

  return canvasToJpg(canvas)
}
