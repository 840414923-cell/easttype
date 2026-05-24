"use client"

import { useRef, useCallback } from "react"
import { toPng } from "html-to-image"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { TYPES } from "@/lib/constitution-data"
import { useLocale } from "@/components/locale-provider"
import type { ConstitutionId } from "@/lib/types"

export function ShareCardImage({
  typeId,
  onBack,
}: {
  typeId: ConstitutionId
  onBack?: () => void
}) {
  const { locale } = useLocale()
  const cardRef = useRef<HTMLDivElement>(null)
  const t = TYPES[typeId] ?? TYPES.balanced
  const viral = locale.types[typeId] ?? locale.types.balanced
  const imgSrc = `/types/${typeId}.png`

  const l = (en: string, zh: string, ja: string) =>
    locale.code === "en" ? en : locale.code === "zh-TW" ? zh : ja

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
          {/* Inner card */}
          <div
            className="relative w-full h-full rounded-[9px] overflow-hidden"
            style={{ background: "#1A1410" }}
          >
            {/* Background image — fully visible */}
            <Image
              src={imgSrc}
              alt={t.en}
              fill
              className="object-cover opacity-75"
              unoptimized
            />

            {/* Top gradient for branding */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent" />

            {/* Top branding */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center pt-3.5 z-10">
              <div className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.2em] text-white/70">
                ◇ EASTTYPE ◇
              </div>
            </div>

            {/* Bottom overlay — compact bar only */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div
                className="px-4 pt-3 pb-3"
                style={{
                  background: "linear-gradient(to top, rgba(26,20,16,0.92) 60%, transparent 100%)",
                }}
              >
                {/* Type name */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="font-[family-name:var(--font-display)] text-xl font-bold"
                    style={{ color: t.color }}
                  >
                    {locale.code === "en" ? t.en : locale.code === "zh-TW" ? t.zh.replace("质", "質") : t.zh}
                  </span>
                  <span className="text-[11px] text-white/45">
                    {locale.code === "en" ? `${t.zh} · ${t.zhPy}` : `${t.en} · ${t.zhPy}`}
                  </span>
                </div>

                {/* Percentage badge — eye-catching */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="font-[family-name:var(--font-display)] text-2xl font-bold"
                    style={{ color: t.color }}
                  >
                    {t.pct}
                  </span>
                  <span className="text-[10px] text-white/50 font-medium">
                    {l("of people share your type", "的人和你一樣體質", "の人が同じタイプ")}
                  </span>
                </div>

                {/* Tagline */}
                <div className="text-[12px] text-white/85 font-medium leading-snug">
                  &ldquo;{viral.cardHeadline}&rdquo;
                </div>

                {/* QR + URL */}
                <div className="flex items-center gap-2.5 pt-2.5 mt-2 border-t border-white/8">
                  <div className="bg-white rounded p-1 flex-shrink-0">
                    <QRCodeSVG
                      value="https://easttype.com"
                      size={40}
                      level="M"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-[family-name:var(--font-display)] text-xs text-white/80 tracking-wide">
                      easttype.com
                    </div>
                    <div className="text-[9px] text-white/35 mt-0.5">
                      {l("Scan to discover your type", "掃碼測測你的體質", "スキャンしてタイプを発見")}
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
          {l("Save Image", "儲存圖片", "画像を保存")}
        </button>
      </div>
    </div>
  )
}
