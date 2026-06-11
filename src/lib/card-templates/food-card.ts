import { W, H, loadBgImage, drawBackground, drawOverlay, drawBrandFooter, drawWrappedText, initCanvas, canvasToJpg } from "./shared"
import { getJsonReport, t } from "@/lib/reports-json"
import type { ConstitutionId } from "@/lib/types"
import { TYPES } from "@/lib/constitution-data"

export async function renderFoodCard(typeId: ConstitutionId, code: string): Promise<string | null> {
  const report = await getJsonReport(typeId, "female")
  if (!report) return null

  const { canvas, ctx } = initCanvas() ?? {}
  if (!canvas || !ctx) return null

  const bgImg = await loadBgImage(typeId)
  drawBackground(ctx, bgImg)
  drawOverlay(ctx, 0.05)

  const ct = TYPES[typeId]

  ctx.fillStyle = "rgba(201,163,85,0.08)"
  ctx.fillRect(0, 60, W, 120)
  ctx.font = `bold 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText(`EASTTYPE · BODY TYPE FOOD GUIDE`, W / 2, 75)

  ctx.font = `bold 44px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 10
  ctx.shadowOffsetY = 3
  ctx.fillText(`Top Foods for`, W / 2, 120)
  ctx.fillStyle = ct.color
  ctx.fillText(`${ct.en}`, W / 2, 172)
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.5)"
  ctx.fillText(`${ct.zh} · ${ct.zhPy}`, W / 2, 228)

  const foods = report.ch2FoodsLove.slice(0, 5)
  const foodEmojis = ["🌿", "🍵", "🫚", "🍠", "🍯"]
  let y = 300

  for (let i = 0; i < foods.length; i++) {
    const food = foods[i]
    ctx.fillStyle = i % 2 === 0 ? "rgba(201,163,85,0.06)" : "rgba(255,255,255,0.02)"
    ctx.fillRect(60, y, W - 120, 100)

    ctx.strokeStyle = "rgba(201,163,85,0.15)"
    ctx.lineWidth = 1
    ctx.strokeRect(60, y, W - 120, 100)

    ctx.font = `bold 24px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "#FFFFFF"
    ctx.textAlign = "left"
    ctx.textBaseline = "top"
    ctx.fillText(`${foodEmojis[i]}  ${t(food.name)}`, 90, y + 16)

    ctx.font = `400 18px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = ct.color
    ctx.fillText(t(food.tcmAction), 90, y + 50)

    ctx.font = `400 16px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.5)"
    const descText = t(food.desc)
    drawWrappedText(ctx, descText, 90, y + 76, W - 180, 16, 22)

    y += 110
  }

  ctx.textAlign = "center"
  drawBrandFooter(ctx, code, y + 40)

  return canvasToJpg(canvas)
}
