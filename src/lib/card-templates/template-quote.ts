import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawWrappedText,
  initCanvas, canvasToJpg, wrapLines,
} from "./shared"

export async function renderQuoteCard(
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

  const quoteSize = wide ? 32 * s : 46 * s
  ctx.font = `italic ${quoteSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  const goldGrad = ctx.createLinearGradient(W * 0.15, 0, W * 0.85, 0)
  goldGrad.addColorStop(0, "#C9A355")
  goldGrad.addColorStop(0.5, "#E0C878")
  goldGrad.addColorStop(1, "#C9A355")
  ctx.fillStyle = goldGrad
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 10 * s
  ctx.shadowOffsetY = 2 * s

  const quoteLines = wrapLines(ctx, `"${content.headline}"`, W - 200 * s)
  const lineH = wide ? 40 * s : 62 * s
  const totalQuoteHeight = quoteLines.length * lineH
  const quoteStartY = (H - totalQuoteHeight) / 2 - (wide ? 20 * s : 40 * s)

  for (let i = 0; i < quoteLines.length; i++) {
    ctx.fillText(quoteLines[i], W / 2, quoteStartY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const attrY = quoteStartY + totalQuoteHeight + (wide ? 20 * s : 50 * s)
  ctx.font = `${wide ? 12 * s : 16 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.4)"
  ctx.letterSpacing = `${3 * s}px`
  ctx.fillText("\u2014 EASTERN MEDICINE", W / 2, attrY)
  ctx.letterSpacing = "0px"

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
