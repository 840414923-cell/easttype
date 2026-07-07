"use client"

import { useState, useEffect, useCallback } from "react"
import Reveal from "@/components/reveal"

const PAGES = [
  { section: "COVER", label: "Cover" },
  { section: "IDENTITY", label: "Identity" },
  { section: "FOOD THERAPY", label: "Food Therapy" },
  { section: "DAILY RHYTHM", label: "Daily Rhythm" },
  { section: "RECIPE", label: "Recipe" },
  { section: "SEASONAL", label: "Seasonal Guide" },
  { section: "ACUPRESSURE", label: "Acupressure" },
  { section: "30-DAY PLAN", label: "30-Day Plan" },
]

function PageBody({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="text-[9px] uppercase tracking-[0.3em] text-[#C9A96E] mb-3">Personalized Report</div>
          <div className="w-10 h-px bg-[#C9A96E] mb-3" />
          <div className="text-base font-bold text-[#1a1a1a] mb-0.5 leading-tight">The Gentle Breeze</div>
          <div className="text-[11px] text-[#7a6535] mb-4">Qi Deficient</div>
          <div className="w-10 h-px bg-[#C9A96E] mb-3" />
          <p className="text-[10px] text-[#666] leading-relaxed max-w-[200px]">
            Your personalized guide to food, daily rhythm, recipes, and seasonal wellness based on your unique constitution.
          </p>
          <div className="mt-auto pt-4 text-[8px] text-[#bbb] uppercase tracking-wider">Sample Report</div>
        </div>
      )
    case 1:
      return (
        <>
          <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Constitution Identity</div>
          <div className="text-center mb-3 pb-2 border-b border-[#f0ebe3]">
            <div className="text-sm font-bold text-[#1a1a1a]">The Gentle Breeze</div>
            <div className="text-[10px] text-[#7a6535]">Qi Deficient (Qi Xu)</div>
          </div>
          <div className="space-y-2 text-[10px] text-[#444] leading-[1.6]">
            <p>Your energy tank is elegantly smaller. You are a hybrid car, not a truck. Efficient, but with a smaller battery.</p>
            <p>You prefer smaller gatherings, thoughtful conversation, and a good book over a night out.</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {[
              { l: "Strength", v: "Deep perception" },
              { l: "Drains Fast", v: "Skipping meals" },
              { l: "Gift", v: "Empathic intuition" },
              { l: "Avoid", v: "Late nights" },
            ].map((x) => (
              <div key={x.l} className="border border-[#e0d8cc] rounded p-1.5 bg-[#fcfaf7]">
                <div className="text-[9px] font-bold text-[#C9A96E] uppercase">{x.l}</div>
                <div className="text-[10px] text-[#444] mt-0.5">{x.v}</div>
              </div>
            ))}
          </div>
        </>
      )
    case 2:
      return (
        <>
          <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Recommended Foods</div>
          <div>
            {[
              { f: "Chinese Yam", a: "Tonifies Spleen Qi" },
              { f: "Red Dates", a: "Nourishes Blood & Qi" },
              { f: "Chicken", a: "Tonifies Qi & Blood" },
              { f: "Millet", a: "Strengthens Spleen" },
              { f: "Sweet Potato", a: "Builds Spleen Qi" },
              { f: "Shiitake", a: "Strengthens immunity" },
              { f: "Goji Berries", a: "Nourishes Liver Blood" },
              { f: "Pumpkin", a: "Warms the Middle" },
            ].map((row) => (
              <div key={row.f} className="flex items-center justify-between text-[10px] py-1 border-b border-[#f0ebe3]">
                <span className="font-semibold text-[#1a1a1a]">{row.f}</span>
                <span className="text-[#7a6535] text-right text-[9px]">{row.a}</span>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <div className="text-[10px] font-bold text-[#b85450] uppercase tracking-wider mb-1">Foods to Limit</div>
            <div className="text-[9px] text-[#666] leading-[1.5]">Raw salads, ice-cold drinks, watermelon, bitter gourd, excessive peppermint, crash dieting</div>
          </div>
        </>
      )
    case 3:
      return (
        <>
          <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Meridian Clock</div>
          <div className="space-y-1.5">
            {[
              { t: "7-8 AM", m: "Stomach", d: "Warm water with red dates" },
              { t: "8-9 AM", m: "Spleen", d: "Congee with yam" },
              { t: "9-11 AM", m: "Spleen (peak)", d: "Best focus window" },
              { t: "11-1 PM", m: "Heart", d: "Warm lunch" },
              { t: "1-3 PM", m: "Sm. Intestine", d: "Rest or nap 15 min" },
              { t: "5-7 PM", m: "Kidney", d: "Early warm dinner" },
              { t: "10 PM", m: "Wind-down", d: "Asleep by 10:30" },
            ].map((row) => (
              <div key={row.t} className="flex items-start gap-2 text-[10px] border-b border-[#f5f2ed] pb-1">
                <span className="font-bold text-[#C9A96E] w-16 shrink-0 text-[9px]">{row.t}</span>
                <div className="flex-1">
                  <span className="font-semibold text-[#1a1a1a]">{row.m}</span>
                  <span className="text-[#666]"> {row.d}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 rounded bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.12)]">
            <div className="text-[9px] text-[#7a6535] leading-[1.5]">
              Peak window: 9-11 AM. Deep repair: 10 PM - 2 AM.
            </div>
          </div>
        </>
      )
    case 4:
      return (
        <>
          <div className="text-center mb-2 pb-2 border-b border-[#f0ebe3]">
            <div className="text-sm font-bold text-[#1a1a1a]">Red Date &amp; Yam Recovery Congee</div>
            <div className="text-[9px] text-[#7a6535] mt-0.5">Qi-Building Breakfast, 2 servings</div>
          </div>
          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-1.5">Ingredients</div>
          <div>
            {[
              { n: "White Rice", a: "80 g" },
              { n: "Chinese Yam (fresh)", a: "150 g" },
              { n: "Red Dates (dried)", a: "8 pieces" },
              { n: "Goji Berries", a: "10 g" },
              { n: "Fresh Ginger", a: "1 slice" },
              { n: "Water", a: "1200 ml" },
            ].map((ing) => (
              <div key={ing.n} className="flex justify-between text-[10px] py-0.5 border-b border-[#f5f2ed]">
                <span className="text-[#1a1a1a]">{ing.n}</span>
                <span className="text-[#7a6535]">{ing.a}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-1">Method</div>
          <ol className="space-y-1 text-[9px] text-[#444] leading-[1.5] list-decimal list-inside">
            <li>Rinse rice, peel yam and cut into cubes.</li>
            <li>Boil rice with water and ginger 30 min on low.</li>
            <li>Add yam and red dates, simmer 20 min more.</li>
            <li>Add goji berries, cook 2 min. Serve warm.</li>
          </ol>
        </>
      )
    case 5:
      return (
        <>
          <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Four Seasons Guide</div>
          <div className="space-y-2">
            {[
              { s: "Spring", c: "#7ec8a0", d: "Recovery season. Add fresh ginger. Gentle walks in sunlight." },
              { s: "Summer", c: "#e8a838", d: "Easiest season. Avoid excessive sweating. Rest 1-3 PM." },
              { s: "Autumn", c: "#c87850", d: "Warning season. Yam congee, red date tea, warm stews." },
              { s: "Winter", c: "#5a8ab5", d: "Deepest rebuilding. Warm stews, chicken soup. Extra sleep is medicine." },
            ].map((x) => (
              <div key={x.s} className="border-l-2 pl-2" style={{ borderColor: x.c }}>
                <div className="text-[10px] font-bold text-[#1a1a1a]">{x.s}</div>
                <div className="text-[9px] text-[#666] leading-[1.4]">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 rounded bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.12)]">
            <div className="text-[9px] text-[#7a6535] leading-[1.5]">
              Spring: Rose &amp; Longan Tea. Winter: Ginger, Red Date &amp; Brown Sugar Tea.
            </div>
          </div>
        </>
      )
    case 6:
      return (
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider">Key Pressure Points</div>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(201,169,110,0.1)] text-[8px] font-bold text-[#C9A96E] uppercase tracking-wider">Pro</span>
          </div>
          <div className="space-y-2">
            {[
              { n: "Zusanli (Leg Three Miles)", loc: "4 finger-widths below kneecap", d: "The #1 point for Qi Deficiency. Press firmly 3 min each leg." },
              { n: "Sanyinjiao (Three Yin Crossing)", loc: "4 finger-widths above inner ankle", d: "Most important point for women. Regulates menstruation." },
              { n: "Guanyuan (Gate of Origin)", loc: "3 finger-widths below navel", d: "Primary energy reservoir. Rub gently 5 min each morning." },
            ].map((x) => (
              <div key={x.n} className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                <div className="text-[10px] font-bold text-[#1a1a1a]">{x.n}</div>
                <div className="text-[9px] text-[#7a6535] mt-0.5">{x.loc}</div>
                <div className="text-[9px] text-[#666] mt-0.5 leading-[1.4]">{x.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-[8px] text-[#bbb] italic">Full report includes 5 points with detailed instructions.</div>
        </>
      )
    case 7:
      return (
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider">Lifestyle Tracker</div>
            <span className="px-1.5 py-0.5 rounded bg-[rgba(201,169,110,0.1)] text-[8px] font-bold text-[#C9A96E] uppercase tracking-wider">Pro</span>
          </div>
          <div className="overflow-hidden rounded">
            <table className="w-full text-[9px]">
              <thead>
                <tr className="bg-[#f8f6f2]">
                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Day</th>
                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Wake</th>
                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Breakfast</th>
                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Exercise</th>
                  <th className="text-left px-1.5 py-1 border border-[#e0d8cc] font-semibold text-[#1a1a1a]">Bed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { d: 1, w: "7:00", b: "Congee", e: "Walk 20m", bed: "10:00" },
                  { d: 2, w: "7:00", b: "Oatmeal", e: "Stretch", bed: "10:00" },
                  { d: 3, w: "6:50", b: "Congee", e: "Tai Chi", bed: "9:50" },
                  { d: 7, w: "7:00", b: "Congee", e: "Yoga", bed: "10:00" },
                  { d: 14, w: "6:45", b: "Congee", e: "Walk 30m", bed: "9:45" },
                  { d: 21, w: "6:40", b: "Congee", e: "Tai Chi", bed: "9:40" },
                  { d: 30, w: "6:30", b: "Congee", e: "Tai Chi", bed: "9:30" },
                ].map((row) => (
                  <tr key={row.d} className={row.d % 2 === 0 ? "bg-[#fcfaf7]" : "bg-white"}>
                    <td className="px-1.5 py-1 border border-[#e0d8cc] font-bold text-center text-[#1a1a1a]">{row.d}</td>
                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.w}</td>
                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.b}</td>
                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.e}</td>
                    <td className="px-1.5 py-1 border border-[#e0d8cc] text-[#444]">{row.bed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[9px] text-[#666] leading-[1.4]">
            Gradually shifts wake time earlier, builds gentle exercise habits, consistent bedtime.
          </div>
          <div className="mt-2 p-1.5 rounded bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.12)]">
            <div className="text-[8px] font-bold text-[#C9A96E] uppercase">Daily Checklist</div>
            <div className="text-[9px] text-[#666] mt-0.5">Warm water on waking, cooked breakfast, no cold drinks, gentle movement, bed by 10 PM.</div>
          </div>
        </>
      )
    default:
      return null
  }
}

function A4Frame({
  section,
  children,
  size,
}: {
  section: string
  children: React.ReactNode
  size: "thumb" | "full"
}) {
  const w = size === "thumb" ? "w-[170px] sm:w-[200px]" : "w-full max-w-[520px]"
  return (
    <div
      className={`${w} bg-white rounded-lg shadow-xl border border-[#e0d8cc] overflow-hidden flex flex-col mx-auto`}
      style={{ aspectRatio: "210 / 297" }}
    >
      <div className="bg-[#f8f6f2] px-4 py-2 border-b border-[#e0d8cc] flex items-center justify-between shrink-0">
        <span className="text-[10px] font-bold text-[#C9A96E] uppercase tracking-wider">EastType</span>
        <span className="text-[9px] text-[#bbb]">{section}</span>
      </div>
      <div className="flex-1 px-4 py-3 overflow-hidden">{children}</div>
      <div className="bg-[#f8f6f2] px-4 py-1 text-center text-[8px] text-[#C9A96E] font-semibold tracking-wider border-t border-[#e0d8cc] shrink-0">
        www.myeasterntype.com
      </div>
    </div>
  )
}

export default function ReportPreview() {
  const [modal, setModal] = useState<number | null>(null)

  const closeModal = useCallback(() => setModal(null), [])
  const prevPage = useCallback(() => setModal((p) => (p === null ? p : (p - 1 + PAGES.length) % PAGES.length)), [])
  const nextPage = useCallback(() => setModal((p) => (p === null ? p : (p + 1) % PAGES.length)), [])

  useEffect(() => {
    if (modal === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft") prevPage()
      if (e.key === "ArrowRight") nextPage()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [modal, closeModal, prevPage, nextPage])

  return (
    <Reveal delay={1}>
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text text-center mb-1">
          Report Preview
        </h2>
        <p className="text-center text-xs text-text2 mb-6">
          Hover to zoom. Click any page to read the full report.
        </p>

        {/* Thumbnail row */}
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x justify-center max-w-2xl mx-auto flex-wrap">
          {PAGES.map((page, i) => (
            <div
              key={i}
              onClick={() => setModal(i)}
              className="shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:z-20 relative group"
            >
              <A4Frame section={page.section} size="thumb">
                <PageBody index={i} />
              </A4Frame>
              <div className="text-center text-[10px] text-text2 mt-1.5 font-medium">
                {page.label}
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {modal !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Close"
            >
              &#10005;
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPage() }}
              className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Previous page"
            >
              &#8249;
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextPage() }}
              className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Next page"
            >
              &#8250;
            </button>

            {/* Full page */}
            <div
              className="relative py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <A4Frame section={PAGES[modal].section} size="full">
                <PageBody index={modal} />
              </A4Frame>
              <div className="text-center text-sm text-white/70 mt-3">
                {modal + 1} / {PAGES.length} &middot; {PAGES[modal].label}
              </div>
            </div>
          </div>
        )}
      </div>
    </Reveal>
  )
}
