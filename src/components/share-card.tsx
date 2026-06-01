"use client"

import { useRef, useCallback } from "react"
import { toPng } from "html-to-image"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { TYPES } from "@/lib/constitution-data"
import { TYPE_VIRAL } from "@/lib/type-viral"
import type { ConstitutionId } from "@/lib/types"

export function ShareCardImage({
  typeId,
  onBack,
}: {
  typeId: ConstitutionId
  onBack?: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const t = TYPES[typeId] ?? TYPES.balanced
  const viral = TYPE_VIRAL[typeId] ?? TYPE_VIRAL.balanced
  const imgSrc = `/types/${typeId}.png`

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return
    try {
      const el = cardRef.current
      const rect = el.getBoundingClientRect()
      const dataUrl = await toPng(el, {
        width: rect.width,
        height: rect.height,
        pixelRatio: 2,
      })
      const link = document.createElement("a")
      link.download = `easttype-${typeId}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error("Failed to generate image:", err)
    }
  }, [typeId])

  return (
    <div>
      <div className="mx-auto overflow-hidden" style={{ maxWidth: "100%" }}>
        <div
          ref={cardRef}
          className="rounded-xl overflow-hidden relative w-full"
          style={{
            aspectRatio: "3/5",
            padding: "3px",
            background: `linear-gradient(145deg, #C9A355, #E0C878, #C9A355, #A88740, #C9A355)`,
          }}
        >
          <div
            className="relative w-full h-full rounded-[9px] overflow-hidden"
            style={{ background: "#1A1410" }}
          >
            <Image
              src={imgSrc}
              alt={t.en}
              fill
              className="object-cover opacity-75"
              unoptimized
            />

            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />

            <div className="absolute top-0 left-0 right-0 flex items-center justify-center pt-3.5 z-10">
              <div className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-white/70">
                ◇ EASTTYPE ◇
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div
                className="px-5 pt-6 pb-3"
                style={{
                  background: "linear-gradient(to top, rgba(26,20,16,0.95) 50%, rgba(26,20,16,0.7) 75%, transparent 100%)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-[family-name:var(--font-display)] text-lg font-bold"
                    style={{ color: t.color }}
                  >
                    {t.en}
                  </span>
                  <span className="text-sm text-white/50">
                    {viral.nickname}
                  </span>
                </div>

                <div
                  className="font-[family-name:var(--font-display)] text-[22px] sm:text-[28px] font-bold text-white leading-[1.15] mb-2"
                >
                  {viral.cardHeadline}
                </div>

                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span
                    className="font-[family-name:var(--font-display)] text-xl font-bold"
                    style={{ color: t.color }}
                  >
                    {t.pct}
                  </span>
                  <span className="text-sm text-white/60 font-medium">
                    of people share your type
                  </span>
                </div>

                <div className="text-sm text-white/75 font-medium italic">
                  {viral.predictions[0]}
                </div>

                <div className="flex items-center gap-2.5 pt-2 mt-2 border-t border-white/8">
                  <div className="bg-white rounded p-1 flex-shrink-0">
                    <QRCodeSVG
                      value="https://myeasterntype.com"
                      size={40}
                      level="M"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-[family-name:var(--font-display)] text-sm text-white/80 tracking-wide">
                      myeasterntype.com
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">
                      Take the free quiz →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-accent to-accent2 text-bg font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,163,85,0.2)] hover:-translate-y-0.5"
        >
          Save Image
        </button>
      </div>
    </div>
  )
}
