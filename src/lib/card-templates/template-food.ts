import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawWrappedText,
  initCanvas, canvasToJpg, wrapLines,
} from "./shared"

export async function renderFoodCard(
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

  const emojiY = wide ? H * 0.15 : H * 0.22
  const emojiSize = wide ? 100 * s : 180 * s
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const headlineY = emojiY + (wide ? 70 * s : 120 * s)
  const headlineSize = wide ? 36 * s : 48 * s
  ctx.font = `italic ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 12 * s
  ctx.shadowOffsetY = 3 * s
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  const headlineLines = wrapLines(ctx, content.headline, W - 160 * s)
  const lineH = wide ? 44 * s : 64 * s
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const subtextY = headlineY + headlineLines.length * lineH + (wide ? 20 * s : 50 * s)
  const subtextSize = wide ? 18 * s : 24 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.75)"
  drawWrappedText(ctx, content.subtext, W / 2, subtextY, W - 180 * s, subtextSize, subtextSize * 1.5)

  const labelY = wide ? H * 0.7 : H * 0.62
  ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.6)"
  ctx.textAlign = "center"
  ctx.letterSpacing = `${4 * s}px`
  ctx.fillText("FOOD AS MEDICINE", W / 2, labelY)
  ctx.letterSpacing = "0px"

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
