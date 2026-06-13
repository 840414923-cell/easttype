import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawBrandHeader, drawEmoji, drawEmojiGlow,
  drawGoldBorder, drawGoldDivider, drawSubtextCard,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient, roundRect,
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

  const emojiY = wide ? H * 0.13 : H * 0.15
  const emojiSize = wide ? 80 * s : 130 * s
  drawEmojiGlow(ctx, W / 2, emojiY, emojiSize * 1.4)
  drawEmoji(ctx, content.emoji, W / 2, emojiY, emojiSize)

  const chinglishTagY = emojiY + emojiSize * 0.55
  ctx.font = `bold ${11 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.5)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = `${3 * s}px`
  ctx.fillText("CHINGLISH HEALTH TIP", W / 2, chinglishTagY)
  ctx.letterSpacing = "0px"

  const headlineY = chinglishTagY + (wide ? 18 * s : 35 * s)
  const headlineSize = wide ? 30 * s : 40 * s
  ctx.font = `bold ${headlineSize}px "DM Sans", system-ui, sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillStyle = "#FFFFFF"
  ctx.shadowColor = "rgba(0,0,0,0.6)"
  ctx.shadowBlur = 10 * s
  ctx.shadowOffsetY = 3 * s

  const headlineLines = wrapLines(ctx, content.headline, W - 180 * s)
  const lineH = headlineSize * 1.45
  for (let i = 0; i < headlineLines.length; i++) {
    ctx.fillText(headlineLines[i], W / 2, headlineY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const dividerY = headlineY + headlineLines.length * lineH + (wide ? 12 * s : 30 * s)
  drawGoldDivider(ctx, dividerY, size)

  const subtextY = dividerY + (wide ? 12 * s : 28 * s)
  const subtextSize = wide ? 16 * s : 20 * s
  ctx.font = `italic ${subtextSize}px "DM Sans", system-ui, sans-serif`
  drawSubtextCard(ctx, content.subtext, W / 2, subtextY, W - 160 * s, subtextSize, subtextSize * 1.55, size)

  const zhLabelY = wide ? H * 0.72 : H * 0.66
  ctx.font = `${16 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.3)"
  ctx.textAlign = "center"
  ctx.fillText(content.zh, W / 2, zhLabelY)

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
