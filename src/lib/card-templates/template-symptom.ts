import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawWrappedText,
  initCanvas, canvasToJpg, wrapLines, roundRect,
} from "./shared"

export async function renderSymptomCard(
  content: SocialContent,
  size: PlatformSize,
  code?: string,
): Promise<string | null> {
  const { canvas, ctx } = initCanvas(size) ?? {}
  if (!canvas || !ctx) return null

  const W = size.width
  const H = size.height
  const s = isWideFormat(size) ? Math.min(size.width / 1000, size.height / 1500) : size.width / 1000
  const wide = isWideFormat(size)

  if (content.bgType) {
    const bgImg = await loadBgImage(content.bgType)
    drawBackground(ctx, bgImg, size)
    drawOverlay(ctx, size)
  } else {
    drawGradientBg(ctx, size)
  }

  drawBrandHeader(ctx, size)

  const headlineY = wide ? H * 0.1 : H * 0.2
  const headlineSize = wide ? 44 * s : 68 * s
  ctx.font = `bold ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  const goldGrad = ctx.createLinearGradient(W * 0.2, 0, W * 0.8, 0)
  goldGrad.addColorStop(0, "#C9A355")
  goldGrad.addColorStop(0.5, "#E0C878")
  goldGrad.addColorStop(1, "#C9A355")
  ctx.fillStyle = goldGrad
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 12 * s
  ctx.shadowOffsetY = 3 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 160 * s)
  const lineH = wide ? 48 * s : 85 * s
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const subtextY = headlineY + headlineLines.length * lineH + (wide ? 20 * s : 50 * s)
  const subtextSize = wide ? 18 * s : 24 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.8)"
  const subBottom = drawWrappedText(ctx, content.subtext, W / 2, subtextY, W - 180 * s, subtextSize, subtextSize * 1.5)

  if (!wide) {
    const tipY = subBottom + 40 * s
    ctx.fillStyle = "rgba(201,163,85,0.12)"
    const tipBoxY = tipY - 15 * s
    const tipBoxH = 90 * s
    roundRect(ctx, 80 * s, tipBoxY, W - 160 * s, tipBoxH, 16 * s)
    ctx.fill()
    ctx.strokeStyle = "rgba(201,163,85,0.25)"
    ctx.lineWidth = 1
    roundRect(ctx, 80 * s, tipBoxY, W - 160 * s, tipBoxH, 16 * s)
    ctx.stroke()

    ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "#C9A355"
    ctx.textAlign = "center"
    ctx.fillText("\u2728 QUICK TIP", W / 2, tipY + 5 * s)
  }

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
