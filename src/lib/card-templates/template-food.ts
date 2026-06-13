import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawEmojiGlow,
  drawGoldBorder, drawGoldDivider, drawSubtextCard,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient,
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

  const emojiY = wide ? H * 0.16 : H * 0.18
  const emojiSize = wide ? 110 * s : 170 * s
  drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.5)
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const labelY = emojiY + emojiSize * 0.6
  ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.6)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = `${5 * s}px`
  ctx.fillText("FOOD AS MEDICINE", W / 2, labelY)
  ctx.letterSpacing = "0px"

  const dividerY1 = labelY + 32 * s
  drawGoldDivider(ctx, dividerY1, size)

  const headlineY = dividerY1 + (wide ? 22 * s : 45 * s)
  const headlineSize = wide ? 40 * s : 58 * s
  ctx.font = `italic ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = makeGoldGradient(ctx, W * 0.12, W * 0.88, headlineY)
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 12 * s
  ctx.shadowOffsetY = 3 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 180 * s)
  const lineH = headlineSize * 1.35
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const subtextY = headlineY + headlineLines.length * lineH + (wide ? 18 * s : 40 * s)
  const subtextSize = wide ? 20 * s : 28 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 140 * s, subtextSize, subtextSize * 1.6, size)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
