import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"
import type { SocialContent } from "./social-content"
import {
  loadBgImage, drawBackground, drawOverlay, drawGradientBg,
  drawFooter, drawGoldBorder, drawGoldDivider,
  initCanvas, canvasToJpg, wrapLines, makeGoldGradient,
} from "./shared"

export async function renderQuoteCard(
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

  const quoteSize = wide ? 36 * s : 56 * s
  ctx.font = `italic ${quoteSize}px "Playfair Display", Georgia, serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"

  ctx.fillStyle = makeGoldGradient(ctx, W * 0.12, W * 0.88, H / 2)
  ctx.shadowColor = "rgba(0,0,0,0.4)"
  ctx.shadowBlur = 10 * s
  ctx.shadowOffsetY = 3 * s

  const quoteLines = wrapLines(ctx, `"${content.headline}"`, W - 200 * s)
  const lineH = quoteSize * 1.55
  const totalQuoteHeight = quoteLines.length * lineH
  const quoteStartY = (H - totalQuoteHeight) / 2 - 55 * s

  const topDividerY = quoteStartY - 35 * s
  drawGoldDivider(ctx, topDividerY, size)

  for (let i = 0; i < quoteLines.length; i++) {
    ctx.fillText(quoteLines[i], W / 2, quoteStartY + i * lineH)
  }
  ctx.shadowBlur = 0
  ctx.shadowOffsetY = 0

  const bottomDividerY = quoteStartY + totalQuoteHeight + 18 * s
  drawGoldDivider(ctx, bottomDividerY, size)

  const attrY = bottomDividerY + (wide ? 18 * s : 40 * s)
  ctx.font = `${wide ? 14 * s : 20 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.5)"
  ctx.letterSpacing = `${5 * s}px`
  ctx.fillText("\u2014  EASTERN MEDICINE", W / 2, attrY)
  ctx.letterSpacing = "0px"

  drawFooter(ctx, size, code)
  return canvasToJpg(canvas)
}
