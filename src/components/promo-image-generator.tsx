"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { TYPES } from "@/lib/constitution-data"
import { PROMO_CAPTIONS } from "@/lib/promo-captions"
import type { ConstitutionId } from "@/lib/types"

const W = 1000
const H = 1500
const TYPE_IDS: ConstitutionId[] = [
  "qi_deficient", "yang_deficient", "yin_deficient",
  "phlegm_damp", "damp_heat", "blood_stasis",
  "qi_stagnant", "sensitive", "balanced",
]

interface Props {
  unusedCodes: string[]
}

export default function PromoImageGenerator({ unusedCodes }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedType, setSelectedType] = useState<ConstitutionId>("qi_deficient")
  const [captionIdx, setCaptionIdx] = useState(0)
  const [customText, setCustomText] = useState("")
  const [useCustom, setUseCustom] = useState(false)
  const [selectedCode, setSelectedCode] = useState(unusedCodes[0] || "")
  const [previewUrl, setPreviewUrl] = useState("")
  const [rendering, setRendering] = useState(false)

  useEffect(() => {
    if (unusedCodes.length > 0 && !unusedCodes.includes(selectedCode)) {
      setSelectedCode(unusedCodes[0])
    }
  }, [unusedCodes, selectedCode])

  const getCaption = useCallback(() => {
    if (useCustom && customText.trim()) return customText.trim()
    return PROMO_CAPTIONS[captionIdx]?.en || PROMO_CAPTIONS[0].en
  }, [useCustom, customText, captionIdx])

  const renderCanvas = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return
    setRendering(true)

    try {
      canvas.width = W
      canvas.height = H
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      await document.fonts.ready

      const bgImg = new window.Image()
      bgImg.crossOrigin = "anonymous"
      bgImg.src = `/types/${selectedType}.png`

      await new Promise<void>((resolve, reject) => {
        bgImg.onload = () => resolve()
        bgImg.onerror = () => reject(new Error("Image load failed"))
      })

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

      const grad = ctx.createLinearGradient(0, H * 0.15, 0, H)
      grad.addColorStop(0, "rgba(10,8,5,0)")
      grad.addColorStop(0.25, "rgba(10,8,5,0.4)")
      grad.addColorStop(0.4, "rgba(10,8,5,0.75)")
      grad.addColorStop(0.55, "rgba(10,8,5,0.88)")
      grad.addColorStop(1, "rgba(10,8,5,0.97)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)

      const caption = getCaption()
      const lines = caption.split("\n")
      const fontSize = lines.length > 3 ? 52 : lines.length > 2 ? 58 : 64
      const lineHeight = fontSize * 1.4
      const startY = H * 0.42

      ctx.font = `bold ${fontSize}px "Playfair Display", Georgia, serif`
      ctx.fillStyle = "#FFFFFF"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.shadowColor = "rgba(0,0,0,0.5)"
      ctx.shadowBlur = 8
      ctx.shadowOffsetY = 2

      const wrappedLines: string[] = []
      const maxWidth = W - 120
      for (const line of lines) {
        if (ctx.measureText(line).width <= maxWidth) {
          wrappedLines.push(line)
        } else {
          const words = line.split(" ")
          let current = ""
          for (const word of words) {
            const test = current ? `${current} ${word}` : word
            if (ctx.measureText(test).width > maxWidth && current) {
              wrappedLines.push(current)
              current = word
            } else {
              current = test
            }
          }
          if (current) wrappedLines.push(current)
        }
      }

      for (let i = 0; i < wrappedLines.length; i++) {
        ctx.fillText(wrappedLines[i], W / 2, startY + i * lineHeight)
      }
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0

      const textBottom = startY + wrappedLines.length * lineHeight

      ctx.strokeStyle = "rgba(201,163,85,0.6)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(W * 0.1, textBottom + 60)
      ctx.lineTo(W * 0.9, textBottom + 60)
      ctx.stroke()

      const brandY = textBottom + 100
      ctx.font = `bold 30px "DM Sans", system-ui, sans-serif`
      ctx.fillStyle = "#C9A355"
      ctx.fillText("◇  EastType", W / 2, brandY)

      ctx.font = `400 22px "DM Sans", system-ui, sans-serif`
      ctx.fillStyle = "rgba(255,255,255,0.7)"
      ctx.fillText("Free Body Type Quiz", W / 2, brandY + 40)

      if (selectedCode) {
        const codeY = brandY + 110
        ctx.font = `bold 48px "DM Sans", monospace`
        ctx.fillStyle = "#C9A355"
        ctx.shadowColor = "rgba(201,163,85,0.4)"
        ctx.shadowBlur = 30
        ctx.fillText(selectedCode, W / 2, codeY)
        ctx.shadowBlur = 0

        ctx.font = `400 20px "DM Sans", system-ui, sans-serif`
        ctx.fillStyle = "rgba(255,255,255,0.5)"
        ctx.fillText("Use this code to unlock your free report", W / 2, codeY + 56)
      }

      const urlY = H - 70
      ctx.font = `600 24px "DM Sans", system-ui, sans-serif`
      ctx.fillStyle = "rgba(255,255,255,0.6)"
      ctx.fillText("myeasterntype.com", W / 2, urlY)

      setPreviewUrl(canvas.toDataURL("image/jpeg", 0.92))
    } catch (err) {
      console.error("Render failed:", err)
    } finally {
      setRendering(false)
    }
  }, [selectedType, getCaption, selectedCode])

  useEffect(() => {
    renderCanvas()
  }, [renderCanvas])

  function handleDownload() {
    if (!previewUrl) return
    const a = document.createElement("a")
    a.href = previewUrl
    a.download = `EastType-promo-${selectedType}-${captionIdx + 1}.jpg`
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <div>
            <label className="text-xs text-[#7a6e5e] block mb-2">Background (Body Type)</label>
            <div className="grid grid-cols-3 gap-2">
              {TYPE_IDS.map((id) => {
                const t = TYPES[id]
                const sel = id === selectedType
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedType(id)}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all border-2 ${
                      sel ? "border-[#C9A355] shadow-[0_0_12px_rgba(201,163,85,0.3)]" : "border-transparent hover:border-[#3a3428]"
                    }`}
                  >
                    <Image
                      src={`/types/${id}.webp`}
                      alt={t.en}
                      width={120}
                      height={150}
                      className="w-full h-auto block"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[rgba(10,8,5,0.75)] px-1 py-0.5 text-[8px] text-[#e8dcc8] text-center truncate">
                      {t.en}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="text-xs text-[#7a6e5e] block mb-2">Caption</label>
            <select
              value={captionIdx}
              onChange={(e) => { setCaptionIdx(Number(e.target.value)); setUseCustom(false) }}
              disabled={useCustom}
              className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none text-sm mb-2 disabled:opacity-50"
            >
              {PROMO_CAPTIONS.map((c, i) => (
                <option key={i} value={i}>
                  #{i + 1}: {c.en.split("\n")[0]}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="customCheck"
                checked={useCustom}
                onChange={(e) => setUseCustom(e.target.checked)}
                className="accent-[#C9A355]"
              />
              <label htmlFor="customCheck" className="text-xs text-[#7a6e5e] cursor-pointer">Custom caption</label>
            </div>
            {useCustom && (
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your caption here... Use Enter for line breaks"
                rows={3}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none text-sm focus:border-[#C9A355] resize-none"
              />
            )}
          </div>

          <div>
            <label className="text-xs text-[#7a6e5e] block mb-2">Invite Code</label>
            {unusedCodes.length > 0 ? (
              <select
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#C9A355] border border-[#3a3428] outline-none font-mono text-sm"
              >
                {unusedCodes.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            ) : (
              <p className="text-xs text-[#7a6e5e]">Generate codes first (above), then come back here.</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={renderCanvas}
              disabled={rendering}
              className="flex-1 py-2.5 rounded bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50 text-sm"
            >
              {rendering ? "Rendering..." : "Refresh Preview"}
            </button>
            <button
              onClick={handleDownload}
              disabled={!previewUrl}
              className="flex-1 py-2.5 rounded bg-[#2a2418] text-[#C9A355] font-bold cursor-pointer hover:bg-[#3a3428] border border-[#3a3428] disabled:opacity-50 text-sm"
            >
              Download JPG
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs text-[#7a6e5e] block mb-2">Preview (1000 x 1500)</label>
          <div className="bg-[#1e1a14] border border-[#2a2418] rounded-lg overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-auto block"
              style={{ aspectRatio: `${W}/${H}` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
