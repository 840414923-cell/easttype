const W = 1000
const H = 1500

export { W, H }

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

export function drawBackground(ctx: CanvasRenderingContext2D, bgImg: HTMLImageElement) {
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

export function drawOverlay(ctx: CanvasRenderingContext2D) {
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, "rgba(10,8,5,0.25)")
  grad.addColorStop(0.3, "rgba(10,8,5,0.45)")
  grad.addColorStop(0.5, "rgba(10,8,5,0.7)")
  grad.addColorStop(0.7, "rgba(10,8,5,0.88)")
  grad.addColorStop(1, "rgba(10,8,5,0.95)")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)
}

export function drawFooter(ctx: CanvasRenderingContext2D, code?: string, y?: number) {
  const footerY = y ?? H - 220

  ctx.strokeStyle = "rgba(201,163,85,0.4)"
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(W * 0.12, footerY)
  ctx.lineTo(W * 0.88, footerY)
  ctx.stroke()

  ctx.font = `bold 26px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("Free 5-min quiz → myeasterntype.com", W / 2, footerY + 20)

  if (code) {
    ctx.font = `bold 36px "DM Sans", monospace`
    ctx.shadowColor = "rgba(201,163,85,0.35)"
    ctx.shadowBlur = 20
    ctx.fillText(code, W / 2, footerY + 65)
    ctx.shadowBlur = 0

    ctx.font = `400 16px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.4)"
    ctx.fillText("Use this code to unlock your free report", W / 2, footerY + 108)
  }

  ctx.font = `600 14px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.3)"
  ctx.fillText("◇  EastType · Based on 3,000 years of TCM wisdom", W / 2, H - 45)
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

export function initCanvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  const canvas = document.createElement("canvas")
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext("2d")
  if (!ctx) return null
  return { canvas, ctx }
}

export function canvasToJpg(canvas: HTMLCanvasElement): string {
  return canvas.toDataURL("image/jpeg", 0.92)
}
