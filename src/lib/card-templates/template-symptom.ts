import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawGoldBorder, drawGoldDivider,
  drawSubtextCard, drawEmojiGlow, drawEmoji,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient,
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

  const emojiY = wide ? H * 0.12 : H * 0.13
  const emojiSize = wide ? 80 * s : 130 * s
  if (content.emoji) {
    drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.3)
    drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)
  }

  const headlineY = emojiY + (wide ? 65 * s : 110 * s)
  const headlineSize = wide ? 40 * s : 68 * s
  ctx.font = `bold ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = makeGoldGradient(ctx, W * 0.1, W * 0.9, headlineY)
  ctx.shadowColor = "rgba(0,0,0,0.5)"
  ctx.shadowBlur = 12 * s
  ctx.shadowOffsetY = 4 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 180 * s)
  const lineH = headlineSize * 1.3
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const dividerY = headlineY + headlineLines.length * lineH + (wide ? 18 * s : 40 * s)
  drawGoldDivider(ctx, dividerY, size)

  const subtextY = dividerY + (wide ? 18 * s : 40 * s)
  const subtextSize = wide ? 20 * s : 28 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 140 * s, subtextSize, subtextSize * 1.6, size)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
