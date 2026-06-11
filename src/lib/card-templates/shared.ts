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

export function drawOverlay(ctx: CanvasRenderingContext2D, startRatio = 0.15) {
  const grad = ctx.createLinearGradient(0, H * startRatio, 0, H)
  grad.addColorStop(0, "rgba(10,8,5,0)")
  grad.addColorStop(0.25, "rgba(10,8,5,0.4)")
  grad.addColorStop(0.4, "rgba(10,8,5,0.75)")
  grad.addColorStop(0.55, "rgba(10,8,5,0.88)")
  grad.addColorStop(1, "rgba(10,8,5,0.97)")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)
}

export function drawBrandFooter(ctx: CanvasRenderingContext2D, code: string, y: number) {
  ctx.strokeStyle = "rgba(201,163,85,0.6)"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(W * 0.08, y)
  ctx.lineTo(W * 0.92, y)
  ctx.stroke()

  ctx.font = `bold 30px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "#C9A355"
  ctx.textAlign = "center"
  ctx.textBaseline = "top"
  ctx.fillText("◇  EastType · Free Body Type Quiz", W / 2, y + 20)

  if (code) {
    ctx.font = `bold 48px "DM Sans", monospace`
    ctx.shadowColor = "rgba(201,163,85,0.4)"
    ctx.shadowBlur = 30
    ctx.fillText(code, W / 2, y + 65)
    ctx.shadowBlur = 0

    ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
    ctx.fillStyle = "rgba(255,255,255,0.5)"
    ctx.fillText("Use this code to unlock your free report", W / 2, y + 120)
  }

  ctx.font = `600 24px "DM Sans", system-ui, sans-serif`
  ctx.fillStyle = "rgba(255,255,255,0.6)"
  ctx.fillText("myeasterntype.com", W / 2, H - 70)
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
