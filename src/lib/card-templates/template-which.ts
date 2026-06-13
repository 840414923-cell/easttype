import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawWrappedText,
  initCanvas, canvasToJpg, wrapLines,
} from "./shared"

export async function renderWhichCard(
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

  const emojis = content.emoji.split(" ").filter(Boolean)
  const emojiSize = wide ? 60 * s : 100 * s
  const emojiGap = wide ? 80 * s : 120 * s
  const totalEmojiWidth = emojis.length * emojiSize + (emojis.length - 1) * emojiGap
  const emojiStartX = (W - totalEmojiWidth) / 2 + emojiSize / 2
  const emojiY = wide ? H * 0.12 : H * 0.2

  for (let i = 0; i < emojis.length; i++) {
    drawEmoji(ctx, emojis[i], emojiStartX + i * (emojiSize + emojiGap), emojiY, emojiSize)
  }

  const headlineY = emojiY + (wide ? 60 * s : 100 * s)
  const headlineSize = wide ? 36 * s : 48 * s
  ctx.font = `bold ${headlineSize}px "Playfair Display", Georgia, serif`
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

  const listY = headlineY + headlineLines.length * lineH + (wide ? 20 * s : 60 * s)
  const items = content.subtext.split(" \u00B7 ")
  const itemSize = wide ? 18 * s : 24 * s
  ctx.font = `${itemSize}px "DM Sans", system-ui, sans-serif`
  ctx.textAlign = "left"
  ctx.textBaseline = "top"

  for (let i = 0; i < items.length; i++) {
    const itemY = listY + i * (wide ? 32 * s : 48 * s)
    ctx.fillStyle = "#C9A355"
    ctx.fillText("\u25C6", W * 0.18, itemY)
    ctx.fillStyle = "rgba(255,255,255,0.8)"
    ctx.fillText(items[i], W * 0.18 + 36 * s, itemY)
  }

  const ctaY = listY + items.length * (wide ? 32 * s : 48 * s) + (wide ? 15 * s : 50 * s)
  ctx.font = `bold ${wide ? 14 * s : 20 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.letterSpacing = `${3 * s}px`
  ctx.fillText("WHICH ONE ARE YOU?", W / 2, ctaY)
  ctx.letterSpacing = "0px"

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
