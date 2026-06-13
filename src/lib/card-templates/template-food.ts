import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawEmojiGlow,
  drawGoldBorder, drawGoldDivider, drawSubtextCard,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient, roundRect,
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

  const emojiY = wide ? H * 0.17 : H * 0.2
  const emojiSize = wide ? 100 * s : 160 * s
  drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.5)
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const labelY = emojiY + emojiSize * 0.65
  ctx.font = `bold ${12 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.6)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = `${4 * s}px`
  ctx.fillText("FOOD AS MEDICINE", W / 2, labelY)
  ctx.letterSpacing = "0px"

  const dividerY1 = labelY + 30 * s
  drawGoldDivider(ctx, dividerY1, size)

  const headlineY = dividerY1 + (wide ? 20 * s : 40 * s)
  const headlineSize = wide ? 34 * s : 44 * s
  ctx.font = `italic ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = makeGoldGradient(ctx, W * 0.15, W * 0.85, headlineY)
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 10 * s
  ctx.shadowOffsetY = 2 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 200 * s)
  const lineH = headlineSize * 1.35
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const subtextY = headlineY + headlineLines.length * lineH + (wide ? 15 * s : 35 * s)
  const subtextSize = wide ? 16 * s : 21 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 160 * s, subtextSize, subtextSize * 1.55, size)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
