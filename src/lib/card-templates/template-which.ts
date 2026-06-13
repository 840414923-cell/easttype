import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawEmojiGlow,
  drawGoldBorder, drawGoldDivider, drawSubtextCard,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient, roundRect,
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
  const wide = isWideFormat(size)
  const s = wide ? Math.min(size.width / 1000, size.height / 1500) : size.width / 1000

  if (content.bgType) {
    const bgImg = await loadBgImage(content.bgType)
    drawBackground(ctx, bgImg, size)
    drawOverlay(ctx, size)
  } else {
    drawGradientBg(ctx, size)
  }

  drawGoldBorder(ctx, size)
  drawBrandHeader(ctx, size)

  const emojis = content.emoji.split(" ").filter(Boolean)
  const emojiSize = wide ? 60 * s : 90 * s
  const emojiGap = wide ? 70 * s : 100 * s
  const totalEmojiWidth = emojis.length * emojiSize + (emojis.length - 1) * emojiGap
  const emojiStartX = (W - totalEmojiWidth) / 2 + emojiSize / 2
  const emojiY = wide ? H * 0.14 : H * 0.16

  for (let i = 0; i < emojis.length; i++) {
    const ex = emojiStartX + i * (emojiSize + emojiGap)
    drawEmojiGlow(ctx, ex, emojiY, emojiSize)
    drawEmoji(ctx, emojis[i], ex, emojiY, emojiSize)
  }

  const headlineY = emojiY + (wide ? 55 * s : 90 * s)
  const headlineSize = wide ? 34 * s : 44 * s
  ctx.font = `bold ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = makeGoldGradient(ctx, W * 0.15, W * 0.85, headlineY)
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 10 * s
  ctx.shadowOffsetY = 3 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 200 * s)
  const lineH = headlineSize * 1.3
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const dividerY = headlineY + headlineLines.length * lineH + (wide ? 12 * s : 30 * s)
  drawGoldDivider(ctx, dividerY, size)

  const listY = dividerY + (wide ? 12 * s : 30 * s)
  const items = content.subtext.split(" \u00B7 ")
  const itemSize = wide ? 18 * s : 24 * s
  const itemH = wide ? 30 * s : 42 * s

  const listPad = 24 * s
  const listW = W - 140 * s
  const listH = items.length * itemH + listPad * 2
  const listX = (W - listW) / 2

  ctx.fillStyle = "rgba(10,8,5,0.5)"
  roundRect(ctx, listX, listY - listPad, listW, listH, 12 * s)
  ctx.fill()
  ctx.strokeStyle = "rgba(201,163,85,0.12)"
  ctx.lineWidth = 1
  roundRect(ctx, listX, listY - listPad, listW, listH, 12 * s)
  ctx.stroke()

  ctx.font = `${itemSize}px "DM Sans", system-ui, sans-serif`
  ctx.textAlign = "left"
  ctx.textBaseline = "top"

  for (let i = 0; i < items.length; i++) {
    const itemY = listY + i * itemH
    ctx.fillStyle = "#C9A355"
    ctx.fillText("\u25C6", listX + 30 * s, itemY)
    ctx.fillStyle = "rgba(255,255,255,0.85)"
    ctx.fillText(items[i], listX + 55 * s, itemY)
  }

  const ctaY = listY + listH + (wide ? 10 * s : 30 * s)
  ctx.font = `bold ${wide ? 14 * s : 18 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.letterSpacing = `${3 * s}px`
  ctx.fillText("WHICH ONE ARE YOU?", W / 2, ctaY)
  ctx.letterSpacing = "0px"

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
