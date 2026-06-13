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
  grad.addColorStop(0, "rgba(10,8,5,0.25)")
  grad.addColorStop(0.3, "rgba(10,8,5,0.45)")
  grad.addColorStop(0.5, "rgba(10,8,5,0.7)")
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

export function drawFooter(ctx: CanvasRenderingContext2D, size: PlatformSize, code?: string) {
  const W = size.width
  const H = size.height
  const s = size.width / 1000
  const wide = isWideFormat(size)

  const footerH = wide ? 90 * s : 220 * s
  const footerY = H - footerH

  ctx.strokeStyle = "rgba(201,163,85,0.4)"
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(W * 0.08, footerY)
  ctx.lineTo(W * 0.92, footerY)
  ctx.stroke()

  const textS = wide ? 0.65 : 1

  ctx.font = `bold ${26 * s * textS}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("Free 5-min quiz \u2192 myeasterntype.com", W / 2, footerY + 12 * s * textS)

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
    ctx.fillText(`Code: ${code}`, W / 2, footerY + 40 * s * textS)
    ctx.shadowBlur = 0
  }

  const brandS = wide ? 0.55 : 1
  ctx.font = `${14 * s * brandS}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.3)"
  ctx.fillText("\u25C7  EastType \u00B7 Based on 3,000 years of TCM wisdom", W / 2, H - 20 * s * brandS)
}

export function drawBrandHeader(ctx: CanvasRenderingContext2D, size: PlatformSize) {
  const W = size.width
  const s = size.width / 1000
  const wide = isWideFormat(size)
  const topY = wide ? 30 * s : 100 * s
  ctx.font = `bold ${14 * s}px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(201,163,85,0.7)"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.letterSpacing = `${3 * s}px`
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
