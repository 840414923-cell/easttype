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

  const emojiY = wide ? H * 0.14 : H * 0.15
  const emojiSize = wide ? 70 * s : 120 * s
  if (content.emoji) {
    drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.3)
    drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)
  }

  const headlineY = emojiY + (wide ? 60 * s : 100 * s)
  const headlineSize = wide ? 36 * s : 56 * s
  ctx.font = `bold ${headlineSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = makeGoldGradient(ctx, W * 0.1, W * 0.9, headlineY)
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

  const dividerY = headlineY + headlineLines.length * lineH + (wide ? 15 * s : 35 * s)
  drawGoldDivider(ctx, dividerY, size)

  const subtextY = dividerY + (wide ? 15 * s : 35 * s)
  const subtextSize = wide ? 16 * s : 21 * s
  ctx.font = `${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 160 * s, subtextSize, subtextSize * 1.55, size)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
