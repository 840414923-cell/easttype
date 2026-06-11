import { W, H, loadBgImage, drawBackground, drawOverlay, drawBrandFooter, drawWrappedText, initCanvas, canvasToJpg } from "./shared"
import { TCM_FACTS } from "@/lib/tcm-facts"
import type { ConstitutionId } from "@/lib/types"

export async function renderTcmFactCard(factIdx: number, bgTypeId: ConstitutionId, code: string): Promise<string | null> {
  const fact = TCM_FACTS[factIdx]
  if (!fact) return null

  const { canvas, ctx } = initCanvas() ?? {}
  if (!canvas || !ctx) return null

  const bgImg = await loadBgImage(bgTypeId)
  drawBackground(ctx, bgImg)
  drawOverlay(ctx, 0.1)

  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("EASTTYPE · TCM WISDOM", W / 2, 80)

  const badgeW = 320
  const badgeH = 60
  ctx.fillStyle = "rgba(201,163,85,0.12)"
  ctx.beginPath()
  ctx.roundRect(W / 2 - badgeW / 2, 140, badgeW, badgeH, 30)
  ctx.fill()
  ctx.strokeStyle = "rgba(201,163,85,0.3)"
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.font = `bold 28px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#C9A355"
  ctx.fillText("Did You Know?", W / 2, 152)

  ctx.font = `bold 44px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 12
  ctx.shadowOffsetY = 3
  const textBottom = drawWrappedText(ctx, fact.en, W / 2, 280, W - 140, 44, 60)
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  ctx.font = `400 22px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillText("— Traditional Chinese Medicine", W / 2, textBottom + 40)

  ctx.font = `bold 24px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.fillText("Discover your body type → Free 5-min quiz", W / 2, textBottom + 100)

  drawBrandFooter(ctx, code, textBottom + 150)

  return canvasToJpg(canvas)
}
