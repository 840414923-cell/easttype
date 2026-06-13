import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawWrappedText,
  initCanvas, canvasToJpg, wrapLines,
} from "./shared"

export async function renderFactCard(
  content: SocialContent,
  size: PlatformSize,
  code?: string,
): Promise<string | null> {
  const { canvas, ctx } = initCanvas(size) ?? {}
  if (!canvas || !ctx) return null

  const W = size.width
  const H = size.height
  const s = isWideFormat(size) ? Math.min(size.width / 1000, size.height / 1500) : size.width / 1000

  if (content.bgType) {
    const bgImg = await loadBgImage(content.bgType)
    drawBackground(ctx, bgImg, size)
    drawOverlay(ctx, size)
  } else {
    drawGradientBg(ctx, size)
  }

  drawBrandHeader(ctx, size)

  const contentTop = isWideFormat(size) ? H * 0.1 : H * 0.15
  const emojiY = contentTop + 60 * s
  const emojiSize = isWideFormat(size) ? 100 * s : 180 * s
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const headlineY = emojiY + (isWideFormat(size) ? 70 * s : 120 * s)
  ctx.font = `bold ${52 * s}px "Playfair Display", Georgia, serif`
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 15 * s
  ctx.shadowOffsetY = 4 * s
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  const headlineLines = wrapLines(ctx, content.headline, W - 160 * s)
  const lineH = isWideFormat(size) ? 50 * s : 68 * s
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const subtextY = headlineY + headlineLines.length * lineH + 30 * s
  ctx.font = `${24 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.75)"
  drawWrappedText(ctx, content.subtext, W / 2, subtextY, W - 180 * s, 24 * s, 36 * s)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
