import type { PlatformSize } from "./platform-sizes"
import { isWideFormat } from "./platform-sizes"

export async function loadBgImage(typeId: string): Promise<HTMLImageElement> {
  await document.fonts.ready
  const img = new window.Image()
  img.crossOrigin = "anonymous"
  img.src = `/types/${typeId}.png`
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load ${typeId}`))
  })
}

export function drawBackground(ctx: CanvasRenderingContext2D, bgImg: HTMLImageElement, size: PlatformSize) {
  const W = size.width
  const H = size.height
  ctx.fillStyle = "#0a0805"
  ctx.fillRect(0, 0, W, H)

  const imgRatio = bgImg.width / bgImg.height
  const canvasRatio = W / H
  let sx = 0, sy = 0, sw = bgImg.width, sh = bgImg.height
  if (imgRatio > canvasRatio) {
    sw = bgImg.height * canvasRatio
    sx = (bgImg.width - sw) / 2
  } else {
    sh = bgImg.width / canvasRatio
    sy = (bgImg.height - sh) / 2
  }
  ctx.drawImage(bgImg, sx, sy, sw, sh, 0, 0, W, H)
}

export function drawOverlay(ctx: CanvasRenderingContext2D, size: PlatformSize) {
  const W = size.width
  const H = size.height
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, "rgba(10,8,5,0.3)")
  grad.addColorStop(0.3, "rgba(10,8,5,0.5)")
  grad.addColorStop(0.5, "rgba(10,8,5,0.72)")
  grad.addColorStop(0.7, "rgba(10,8,5,0.88)")
  grad.addColorStop(1, "rgba(10,8,5,0.95)")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)
}

export function drawGradientBg(ctx: CanvasRenderingContext2D, size: PlatformSize) {
  const W = size.width
  const H = size.height
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, "#1a1610")
  grad.addColorStop(0.5, "#0f0d0a")
  grad.addColorStop(1, "#080604")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)

  const accent = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.3, W * 0.7)
  accent.addColorStop(0, "rgba(201,163,85,0.06)")
  accent.addColorStop(1, "rgba(201,163,85,0)")
  ctx.fillStyle = accent
  ctx.fillRect(0, 0, W, H)
}

export function drawGoldBorder(ctx: CanvasRenderingContext2D, size: PlatformSize) {
  const W = size.width
  const H = size.height
  const s = size.width / 1000
  const inset = 24 * s
  const cornerLen = 50 * s

  ctx.strokeStyle = "rgba(201,163,85,0.35)"
  ctx.lineWidth = 1

  ctx.strokeRect(inset, inset, W - inset * 2, H - inset * 2)

  ctx.strokeStyle = "rgba(201,163,85,0.7)"
  ctx.lineWidth = 2 * s

  const corners = [
    { x: inset, y: inset, dx: 1, dy: 1 },
    { x: W - inset, y: inset, dx: -1, dy: 1 },
    { x: inset, y: H - inset, dx: 1, dy: -1 },
    { x: W - inset, y: H - inset, dx: -1, dy: -1 },
  ]
  for (const c of corners) {
    ctx.beginPath()
    ctx.moveTo(c.x, c.y + c.dy * cornerLen)
    ctx.lineTo(c.x, c.y)
    ctx.lineTo(c.x + c.dx * cornerLen, c.y)
    ctx.stroke()
  }
}

export function drawEmojiGlow(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  const glow = ctx.createRadialGradient(x, y, 0, x, y, radius)
  glow.addColorStop(0, "rgba(201,163,85,0.15)")
  glow.addColorStop(0.5, "rgba(201,163,85,0.05)")
  glow.addColorStop(1, "rgba(201,163,85,0)")
  ctx.fillStyle = glow
  ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
}

export function drawGoldDivider(ctx: CanvasRenderingContext2D, y: number, size: PlatformSize) {
  const W = size.width
  const s = size.width / 1000
  const left = W * 0.15
  const right = W * 0.85
  const mid = W / 2

  ctx.strokeStyle = "rgba(201,163,85,0.3)"
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(left, y)
  ctx.lineTo(mid - 20 * s, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(mid + 20 * s, y)
  ctx.lineTo(right, y)
  ctx.stroke()

  ctx.fillStyle = "rgba(201,163,85,0.5)"
  ctx.font = `${12 * s}px serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("\u25C7", mid, y)
}

export function drawSubtextCard(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number,
  size: PlatformSize,
): number {
  const s = size.width / 1000
  const pad = 30 * s
  const lines = wrapLines(ctx, text, maxWidth - pad * 2)
  const cardH = lines.length * lineHeight + pad * 2

  ctx.fillStyle = "rgba(10,8,5,0.55)"
  roundRect(ctx, x - maxWidth / 2, y - pad, maxWidth, cardH, 12 * s)
  ctx.fill()
  ctx.strokeStyle = "rgba(201,163,85,0.12)"
  ctx.lineWidth = 1
  roundRect(ctx, x - maxWidth / 2, y - pad, maxWidth, cardH, 12 * s)
  ctx.stroke()

  ctx.fillStyle = "rgba(255,255,255,0.8)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + i * lineHeight)
  }
  return y + cardH
}

export function drawFooter(ctx: CanvasRenderingContext2D, size: PlatformSize, code?: string) {
  const W = size.width
  const H = size.height
  const s = size.width / 1000
  const wide = isWideFormat(size)

  const footerH = wide ? 90 * s : 200 * s
  const footerY = H - footerH

  drawGoldDivider(ctx, footerY, size)

  const textS = wide ? 0.65 : 1

  ctx.font = `bold ${24 * s * textS}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("Free 5-min quiz \u2192 myeasterntype.com", W / 2, footerY + 20 * s * textS)

  if (code && !wide) {
    ctx.font = `bold ${36 * s}px "DM Sans", monospace`
    ctx.shadowColor = "rgba(201,163,85,0.35)"
    ctx.shadowBlur = 20
    ctx.fillText(code, W / 2, footerY + 65 * s)
    ctx.shadowBlur = 0

    ctx.font = `${16 * s}px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.4)"
    ctx.fillText("Use this code to unlock your free report", W / 2, footerY + 108 * s)
  } else if (code && wide) {
    ctx.font = `bold ${20 * s}px "DM Sans", monospace`
    ctx.shadowColor = "rgba(201,163,85,0.35)"
    ctx.shadowBlur = 12
    ctx.fillText(`Code: ${code}`, W / 2, footerY + 45 * s * textS)
    ctx.shadowBlur = 0
  }

  const brandS = wide ? 0.55 : 1
  ctx.font = `${13 * s * brandS}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.25)"
  ctx.fillText("\u25C7  EastType  \u00B7  3,000 years of TCM wisdom", W / 2, H - 25 * s * brandS)
}

export function drawBrandHeader(ctx: CanvasRenderingContext2D, size: PlatformSize) {
  const W = size.width
  const s = size.width / 1000
  const wide = isWideFormat(size)
  const topY = wide ? 35 * s : 80 * s

  ctx.fillStyle = "rgba(201,163,85,0.5)"
  ctx.font = `${10 * s}px serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("\u25C7", W / 2, topY - 18 * s)

  ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.7)"
  ctx.letterSpacing = `${4 * s}px`
  ctx.fillText("EASTTYPE", W / 2, topY)
  ctx.letterSpacing = "0px"
}

export function drawEmoji(ctx: CanvasRenderingContext2D, emoji: string, x: number, y: number, fontSize: number) {
  ctx.font = `${fontSize}px sans-serif`
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(emoji, x, y)
}

export function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight?: number,
): number {
  const lh = lineHeight || fontSize * 1.4
  const lines = text.split("\n")
  const wrapped: string[] = []
  for (const line of lines) {
    if (ctx.measureText(line).width <= maxWidth) {
      wrapped.push(line)
    } else {
      const words = line.split(" ")
      let current = ""
      for (const word of words) {
        const test = current ? `${current} ${word}` : word
        if (ctx.measureText(test).width > maxWidth && current) {
          wrapped.push(current)
          current = word
        } else {
          current = test
        }
      }
      if (current) wrapped.push(current)
    }
  }
  for (let i = 0; i < wrapped.length; i++) {
    ctx.fillText(wrapped[i], x, y + i * lh)
  }
  return y + wrapped.length * lh
}

export function initCanvas(size: PlatformSize): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  const canvas = document.createElement("canvas")
  canvas.width = size.width
  canvas.height = size.height
  const ctx = canvas.getContext("2d")
  if (!ctx) return null
  return { canvas, ctx }
}

export function canvasToJpg(canvas: HTMLCanvasElement): string {
  return canvas.toDataURL("image/jpeg", 0.92)
}

export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

export function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const allLines = text.split("\n")
  const result: string[] = []
  for (const line of allLines) {
    if (ctx.measureText(line).width <= maxWidth) {
      result.push(line)
    } else {
      const words = line.split(" ")
      let current = ""
      for (const word of words) {
        const test = current ? `${current} ${word}` : word
        if (ctx.measureText(test).width > maxWidth && current) {
          result.push(current)
          current = word
        } else {
          current = test
        }
      }
      if (current) result.push(current)
    }
  }
  return result
}

export function makeGoldGradient(ctx: CanvasRenderingContext2D, x1: number, x2: number, y: number) {
  const grad = ctx.createLinearGradient(x1, y, x2, y)
  grad.addColorStop(0, "#C9A355")
  grad.addColorStop(0.5, "#E0C878")
  grad.addColorStop(1, "#C9A355")
  return grad
}
