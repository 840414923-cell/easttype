import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawEmojiGlow,
  drawGoldBorder, drawGoldDivider, drawSubtextCard,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient,
} from "./shared"

export async function renderChinglishCard(
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

  const emojiY = wide ? H * 0.12 : H * 0.14
  const emojiSize = wide ? 90 * s : 140 * s
  drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.4)
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const tagY = emojiY + emojiSize * 0.55
  ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(200,16,46,0.5)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = `${4 * s}px`
  ctx.fillText("CHINGLISH HEALTH TIP", W / 2, tagY)
  ctx.letterSpacing = "0px"

  const headlineY = tagY + (wide ? 22 * s : 40 * s)
  const headlineSize = wide ? 36 * s : 52 * s
  ctx.font = `bold ${headlineSize}px "DM Sans", system-ui, sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 12 * s
  ctx.shadowOffsetY = 4 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 160 * s)
  const lineH = headlineSize * 1.45
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const dividerY = headlineY + headlineLines.length * lineH + (wide ? 14 * s : 32 * s)
  drawGoldDivider(ctx, dividerY, size)

  const subtextY = dividerY + (wide ? 14 * s : 32 * s)
  const subtextSize = wide ? 20 * s : 28 * s
  ctx.font = `italic ${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 140 * s, subtextSize, subtextSize * 1.6, size)

  const zhLabelY = wide ? H * 0.74 : H * 0.68
  ctx.font = `${20 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(200,16,46,0.35)"
  ctx.textAlign = "center"
  ctx.fillText(content.zh, W / 2, zhLabelY)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
