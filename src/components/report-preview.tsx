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

function PageContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="h-full flex flex-col items-center justify-center text-center px-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#C8102E] mb-4">Personalized Report</div>
          <div className="w-12 h-px bg-[#C8102E] mb-4" />
          <div className="text-xl font-bold text-[#1a1a1a] mb-1 leading-tight">The Gentle Breeze</div>
          <div className="text-xs text-[#7a6535] mb-5">Qi Deficient</div>
          <div className="w-12 h-px bg-[#C8102E] mb-4" />
          <p className="text-[11px] text-[#666] leading-relaxed max-w-[240px] mb-5">
            Your personalized guide to food therapy, daily rhythm, recipes, acupressure, and seasonal wellness based on your unique constitution.
          </p>
          <div className="grid grid-cols-2 gap-2 w-full max-w-[260px] text-left">
            {["Constitution Identity", "Food Therapy Guide", "Daily Meridian Schedule", "Recommended Recipes", "Seasonal Protocol", "Acupoint Massage Guide", "30-Day Lifestyle Plan", "Printable PDF"].map((x) => (
              <div key={x} className="flex items-center gap-1.5 text-[9px] text-[#444]">
                <span className="text-[#C8102E]">&#10003;</span>
                <span>{x}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto pt-4 text-[9px] text-[#bbb] uppercase tracking-wider">Sample Report</div>
        </div>
      )
    case 1:
      return (
        <div className="space-y-3">
          <div className="text-center pb-2 border-b border-[#f0ebe3]">
            <div className="text-sm font-bold text-[#1a1a1a]">The Gentle Breeze</div>
            <div className="text-[10px] text-[#7a6535]">Qi Deficient (Qi Xu)</div>
          </div>
          <p className="text-[10px] text-[#444] leading-[1.7]">
            Your energy tank is elegantly smaller. You are a hybrid car, not a truck. Incredibly efficient, but with a smaller battery. In Chinese medicine, your type is called Qi Deficiency. Qi is your body&apos;s life energy, the invisible force that powers everything from your heartbeat to your thoughts.
          </p>
          <p className="text-[10px] text-[#444] leading-[1.7]">
            &quot;Deficiency&quot; doesn&apos;t mean broken. It means you notice things others miss. You can&apos;t afford to waste energy, so you&apos;ve become a master of efficiency and observation. You likely prefer smaller gatherings, thoughtful conversation, and a good book over a night out.
          </p>
          <div>
            <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-wider mb-1.5">Your Natural Strengths</div>
            <ul className="space-y-1">
              {[
                "Deep perception: you see layers others miss",
                "Empathic intuition: you feel what others feel",
                "Efficiency mastery: doing more with less",
                "Emotional intelligence: exceptional listener",
                "Creative depth: rich inner world",
              ].map((x) => (
                <li key={x} className="text-[10px] text-[#444] leading-[1.5] flex gap-1.5">
                  <span className="text-[#C8102E] shrink-0">&#9670;</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#b85450] uppercase tracking-wider mb-1.5">What Drains You Fastest</div>
            <ul className="space-y-1">
              {[
                "Skipping meals: no reserves to draw from",
                "Over-committing: saying yes to everything",
                "Raw, cold foods: digestive system overworks",
                "Arguments: emotional stress hits harder",
                "Late nights: one costs you three days",
              ].map((x) => (
                <li key={x} className="text-[10px] text-[#444] leading-[1.5] flex gap-1.5">
                  <span className="text-[#b85450] shrink-0">&#10005;</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="space-y-3">
          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider">Recommended Foods</div>
          <div className="space-y-2">
            {[
              { f: "Chinese Yam", a: "Tonifies Spleen & Lung Qi", d: "The #1 Qi-building food. Steam it, add to soup, or slice into congee. Mild, slightly sweet, deeply nourishing." },
              { f: "Red Dates (Jujube)", a: "Nourishes Blood & Qi", d: "Snack on 3-5 dates daily, or steep in hot water. Especially supportive around your period." },
              { f: "Chicken", a: "Tonifies Qi & Blood", d: "Most accessible Qi-replenishing protein. Dark meat is better than breast. Slow-cooked is ideal." },
              { f: "Millet", a: "Strengthens Spleen & Stomach", d: "Easier to digest than rice or wheat. A bowl of millet congee is one of the oldest Qi-building breakfasts." },
              { f: "Goji Berries", a: "Nourishes Liver Blood", d: "Supports your eyes and gently nourishes the Blood that your period depletes each month." },
              { f: "Pumpkin", a: "Tonifies Spleen, warms middle", d: "Warming and gentle on digestion. Pumpkin soup is comfort food that rebuilds energy." },
            ].map((row) => (
              <div key={row.f} className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold text-[#1a1a1a]">{row.f}</span>
                  <span className="text-[9px] text-[#C8102E] font-medium">{row.a}</span>
                </div>
                <div className="text-[9px] text-[#666] leading-[1.5]">{row.d}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#b85450] uppercase tracking-wider mb-1">Foods to Limit</div>
            <div className="space-y-0.5">
              {[
                "Raw vegetables in large quantities",
                "Watermelon and cucumber (cooling)",
                "Ice-cold drinks with meals",
                "Bitter gourd (strongly cooling)",
                "Crash dieting or fasting",
              ].map((x) => (
                <div key={x} className="text-[9px] text-[#666] flex gap-1.5">
                  <span className="text-[#b85450] shrink-0">&#10005;</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    case 3:
      return (
        <div className="space-y-3">
          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider">Meridian Clock Schedule</div>
          <div className="space-y-2">
            {[
              { t: "7-8 AM", m: "Stomach", d: "Wake slowly. Start with warm water with 2-3 red dates steeped in it. Your body needs a gentle on-ramp." },
              { t: "8-9 AM", m: "Spleen", d: "Most important meal. Congee with yam and red dates. Warm, cooked, easy to digest. Do not skip." },
              { t: "9-11 AM", m: "Spleen (peak)", d: "Peak performance window. Spleen converts food into energy. Do your most important focused work now." },
              { t: "1-3 PM", m: "Small Intestine", d: "Afternoon dip hits harder. A 15-20 min nap or quiet rest can change your entire afternoon." },
              { t: "5-7 PM", m: "Kidney", d: "Dinner: early, warm, not too heavy. Nothing raw after 6 PM. Keep it simple." },
              { t: "10 PM", m: "Triple Heater", d: "Asleep. You need 8-9 hours. Body does deepest repair 10 PM-2 AM. Missing this costs you days." },
            ].map((row) => (
              <div key={row.t} className="flex items-start gap-2.5 pb-2 border-b border-[#f0ebe3]">
                <div className="shrink-0 w-[60px] bg-[rgba(200,16,46,0.08)] rounded px-1.5 py-0.5 text-center">
                  <div className="text-[9px] font-bold text-[#C8102E]">{row.t}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-[#1a1a1a]">{row.m}</div>
                  <div className="text-[9px] text-[#666] leading-[1.5] mt-0.5">{row.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded bg-[rgba(200,16,46,0.06)] border border-[rgba(200,16,46,0.12)]">
            <div className="text-[9px] text-[#7a6535] leading-[1.6] font-medium">
              Your peak performance window is 9-11 AM. Schedule demanding tasks here. After this, energy starts its slow decline.
            </div>
          </div>
        </div>
      )
    case 4:
      return (
        <div className="space-y-3">
          <div className="text-center pb-2 border-b border-[#f0ebe3]">
            <div className="text-sm font-bold text-[#1a1a1a]">Red Date &amp; Yam Recovery Congee</div>
            <div className="text-[9px] text-[#7a6535] mt-0.5">Qi-Building Breakfast</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-1.5">Ingredients (2 servings)</div>
            <div className="space-y-0">
              {[
                { n: "White Rice", a: "80 g" },
                { n: "Chinese Yam (fresh)", a: "150 g" },
                { n: "Red Dates (dried)", a: "8 pieces, pitted" },
                { n: "Goji Berries", a: "10 g" },
                { n: "Fresh Ginger", a: "1 slice" },
                { n: "Water", a: "1200 ml" },
              ].map((ing) => (
                <div key={ing.n} className="flex justify-between text-[10px] py-1 border-b border-[#f5f2ed]">
                  <span className="text-[#1a1a1a]">{ing.n}</span>
                  <span className="text-[#7a6535] font-medium">{ing.a}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-1.5">Method</div>
            <ol className="space-y-1.5 text-[10px] text-[#444] leading-[1.6]">
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">1.</span><span>Rinse rice under cold water 2-3 times until water runs clear. Drain.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">2.</span><span>Peel Chinese yam, cut into 2cm cubes. Wear gloves: the sap can irritate skin.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">3.</span><span>Place rice in pot with 1200ml water and ginger. Bring to rolling boil.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">4.</span><span>Reduce heat to low. Simmer 30 minutes, stirring every 5 minutes.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">5.</span><span>Add yam cubes and red dates. Simmer 20 more minutes until creamy.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">6.</span><span>Add goji berries, stir gently. Cook 2 more minutes. Do not overcook.</span></li>
              <li className="flex gap-2"><span className="text-[#C8102E] font-bold shrink-0">7.</span><span>Remove ginger. Serve warm. Reheats beautifully with a splash of water.</span></li>
            </ol>
          </div>
          <div className="p-2 rounded bg-[rgba(200,16,46,0.06)] border border-[rgba(200,16,46,0.12)]">
            <div className="text-[9px] text-[#7a6535] leading-[1.5]">
              <span className="font-bold">TCM Principle:</span> Combines four Qi-building ingredients: rice strengthens Spleen, yam tonifies Spleen and Lung Qi, red dates nourish Blood, ginger warms the middle.
            </div>
          </div>
        </div>
      )
    case 5:
      return (
        <div className="space-y-3">
          <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider">Four Seasons Wellness Guide</div>
          <div className="space-y-2.5">
            {[
              { s: "Spring", c: "#7ec8a0", d: "Your recovery season. The world wakes up, your energy starts to rebuild. Protect against wind (your defensive Qi is thin). Add fresh ginger to meals. Take gentle walks in sunlight, not exhausting hikes.", drink: "Rose & Longan Tea: 5 rose buds + 5 longan, steeped 5 min. Moves Liver Qi, nourishes blood." },
              { s: "Summer", c: "#e8a838", d: "Your easiest season, but don&apos;t overdo it. Avoid excessive sweating (it drains Qi). Choose light, warm meals over cold salads. Rest during hottest hours (1-3 PM). Hydrate with warm water.", drink: "Mung Bean & Lily Bulb Tea: Clears summer heat gently. Drink at room temperature." },
              { s: "Autumn", c: "#c87850", d: "Your warning season. Start building reserves early. Yam congee, red date tea, warm stews. Your energy naturally dips. Get ahead of it with warm, cooked foods.", drink: "Snow Pear & Rock Sugar Tea: Moistens Lungs during dry autumn, soothes throat." },
              { s: "Winter", c: "#5a8ab5", d: "Your hardest season and deepest rebuilding time. Warm stews, chicken soup, root vegetables. Slow down intentionally. Extra sleep is not lazy. It is medicine for your type.", drink: "Ginger, Red Date & Brown Sugar Tea: Warms uterus, strengthens Spleen, supports menstrual flow." },
            ].map((x) => (
              <div key={x.s} className="border-l-[3px] pl-2.5 py-0.5" style={{ borderColor: x.c }}>
                <div className="text-[10px] font-bold text-[#1a1a1a] mb-0.5">{x.s}</div>
                <div className="text-[9px] text-[#666] leading-[1.5] mb-1" dangerouslySetInnerHTML={{ __html: x.d }} />
                <div className="text-[9px] text-[#7a6535] leading-[1.4]"><span className="font-medium">Drink: </span><span dangerouslySetInnerHTML={{ __html: x.drink }} /></div>
              </div>
            ))}
          </div>
        </div>
      )
    case 6:
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider">Acupressure Points</div>
            <span className="px-2 py-0.5 rounded bg-[rgba(200,16,46,0.1)] text-[8px] font-bold text-[#C8102E] uppercase tracking-wider">Full Report</span>
          </div>
          <div className="space-y-2">
            {[
              { n: "Zusanli (Leg Three Miles)", loc: "4 finger-widths below kneecap, 1 finger-width outside shinbone", m: "Press firmly with thumb 3 min each leg, morning and evening. Feel a deep ache.", e: "The #1 acupoint for Qi Deficiency. Strengthens Spleen and Stomach, boosts energy, improves digestion. Also supports healthy menstrual cycles and reduces period pain." },
              { n: "Sanyinjiao (Three Yin Crossing)", loc: "4 finger-widths above inner ankle bone, back edge of shinbone", m: "Gentle circular pressure with index finger 2-3 min each side, ideally before bed.", e: "The most important point for women&apos;s health. Crossing of three Yin meridians (Spleen, Liver, Kidney). Regulates menstruation, reduces cramps, improves sleep." },
              { n: "Guanyuan (Gate of Origin)", loc: "3 finger-widths below navel, on the midline", m: "Place palm flat on point, rub gently in circles 5 min each morning before getting up.", e: "Primary energy reservoir for women. Strengthens uterus, warms lower body, builds original Qi. Powerful for cold hands/feet, irregular periods." },
              { n: "Xuehai (Sea of Blood)", loc: "With knee bent, place palm on kneecap, thumb rests on inner thigh", m: "Press firmly 2 min each side, once daily.", e: "Master point for blood issues. Helps Spleen generate and hold blood. Excellent for heavy periods, pale complexion, dizziness." },
              { n: "Taixi (Great Ravine)", loc: "Depression between inner ankle bone and Achilles tendon", m: "Press and hold with thumb 2 min each side, preferably evening.", e: "Nourishes Kidney Yin and Yang. Helps chronic fatigue, lower back weakness, night sweats, and feeling your energy tank never fills." },
            ].map((x) => (
              <div key={x.n} className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                <div className="text-[10px] font-bold text-[#1a1a1a]">{x.n}</div>
                <div className="text-[9px] text-[#C8102E] mt-0.5"><span className="font-medium">Location: </span><span dangerouslySetInnerHTML={{ __html: x.loc }} /></div>
                <div className="text-[9px] text-[#7a6535] mt-0.5"><span className="font-medium">Method: </span><span dangerouslySetInnerHTML={{ __html: x.m }} /></div>
                <div className="text-[9px] text-[#666] mt-0.5 leading-[1.5]"><span dangerouslySetInnerHTML={{ __html: x.e }} /></div>
              </div>
            ))}
          </div>
        </div>
      )
    case 7:
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider">30-Day Lifestyle Plan</div>
            <span className="px-2 py-0.5 rounded bg-[rgba(200,16,46,0.1)] text-[8px] font-bold text-[#C8102E] uppercase tracking-wider">Full Report</span>
          </div>
          <div className="overflow-hidden rounded">
            <table className="w-full text-[9px] border-collapse">
              <thead>
                <tr className="bg-[#f8f6f2]">
                  <th className="text-left px-2 py-1.5 border border-[#e0d8cc] font-bold text-[#1a1a1a]">Day</th>
                  <th className="text-left px-2 py-1.5 border border-[#e0d8cc] font-bold text-[#1a1a1a]">Wake</th>
                  <th className="text-left px-2 py-1.5 border border-[#e0d8cc] font-bold text-[#1a1a1a]">Breakfast</th>
                  <th className="text-left px-2 py-1.5 border border-[#e0d8cc] font-bold text-[#1a1a1a]">Exercise</th>
                  <th className="text-left px-2 py-1.5 border border-[#e0d8cc] font-bold text-[#1a1a1a]">Bed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { d: 1, w: "7:00", b: "Congee", e: "Walk 20m", bed: "10:00" },
                  { d: 3, w: "6:50", b: "Congee", e: "Tai Chi", bed: "9:50" },
                  { d: 7, w: "7:00", b: "Congee", e: "Yoga", bed: "10:00" },
                  { d: 10, w: "6:50", b: "Oatmeal", e: "Walk 25m", bed: "9:50" },
                  { d: 14, w: "6:45", b: "Congee", e: "Walk 30m", bed: "9:45" },
                  { d: 21, w: "6:40", b: "Congee", e: "Tai Chi", bed: "9:40" },
                  { d: 30, w: "6:30", b: "Congee", e: "Tai Chi", bed: "9:30" },
                ].map((row) => (
                  <tr key={row.d} className={row.d % 2 === 0 ? "bg-[#fcfaf7]" : "bg-white"}>
                    <td className="px-2 py-1 border border-[#e0d8cc] font-bold text-center text-[#1a1a1a]">{row.d}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.w}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.b}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.e}</td>
                    <td className="px-2 py-1 border border-[#e0d8cc] text-[#444]">{row.bed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[9px] text-[#666] leading-[1.5]">
            Your plan gradually shifts wake time from 7:00 to 6:30 AM, builds gentle exercise habits (walking, Tai Chi, yoga), and establishes a consistent early bedtime. Never HIIT. Never cold drinks.
          </p>
          <div>
            <div className="text-[10px] font-bold text-[#C8102E] uppercase tracking-wider mb-1.5">Daily Non-Negotiables</div>
            <div className="grid grid-cols-1 gap-0.5">
              {[
                "Warm water or red date tea within 10 min of waking",
                "Warm, cooked breakfast. No cold smoothies, no skipping",
                "One Qi-building food at lunch (yam, chicken, dates)",
                "15-20 min rest after lunch. Even sitting quietly counts",
                "No cold drinks. Carry a thermos of warm water",
                "Gentle movement only: walking, yoga, stretching",
                "Warm dinner before 7 PM. Nothing raw after 6 PM",
                "In bed by 10 PM. Non-negotiable for your type",
              ].map((x) => (
                <div key={x} className="text-[9px] text-[#444] flex gap-1.5 leading-[1.4]">
                  <span className="text-[#C8102E] shrink-0">&#10003;</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

function A4Page({
  section,
  children,
  variant,
}: {
  section: string
  children: React.ReactNode
  variant: "thumb" | "modal"
}) {
  if (variant === "thumb") {
    return (
      <div
        className="w-[180px] sm:w-[200px] bg-white rounded-lg shadow-lg border border-[#e0d8cc] overflow-hidden flex flex-col"
        style={{ aspectRatio: "210 / 297" }}
      >
        <div className="bg-[#f8f6f2] px-3 py-1.5 border-b border-[#e0d8cc] flex items-center justify-between shrink-0">
          <span className="text-[8px] font-bold text-[#C8102E] uppercase tracking-wider">EastType</span>
          <span className="text-[7px] text-[#bbb]">{section}</span>
        </div>
        <div className="flex-1 px-3 py-2 overflow-hidden">{children}</div>
        <div className="bg-[#f8f6f2] px-3 py-0.5 text-center text-[6px] text-[#C8102E] font-semibold tracking-wider border-t border-[#e0d8cc] shrink-0">
          www.myeasterntype.com
        </div>
      </div>
    )
  }
  return (
    <div
      className="w-full max-w-[500px] mx-auto bg-white rounded-xl shadow-2xl border border-[#e0d8cc] overflow-hidden flex flex-col"
      style={{ height: "82vh", maxHeight: "760px" }}
    >
      <div className="bg-[#f8f6f2] px-5 py-3 border-b border-[#e0d8cc] flex items-center justify-between shrink-0">
        <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">EastType</span>
        <span className="text-[10px] text-[#bbb]">{section}</span>
      </div>
      <div className="flex-1 px-5 py-4 overflow-y-auto overscroll-contain">
        {children}
      </div>
      <div className="bg-[#f8f6f2] px-5 py-2 text-center text-[9px] text-[#C8102E] font-semibold tracking-wider border-t border-[#e0d8cc] shrink-0">
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
          Hover to zoom. Click any page to read in full.
        </p>

        <div className="flex gap-3 overflow-x-auto pb-4 justify-center max-w-2xl mx-auto flex-wrap">
          {PAGES.map((page, i) => (
            <div
              key={i}
              onClick={() => setModal(i)}
              className="shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.15] hover:z-20 relative"
            >
              <A4Page section={page.section} variant="thumb">
                <PageContent index={i} />
              </A4Page>
              <div className="text-center text-[10px] text-text2 mt-1.5 font-medium">
                {page.label}
              </div>
            </div>
          ))}
        </div>

        {modal !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Close"
            >
              &#10005;
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevPage() }}
              className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextPage() }}
              className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
              aria-label="Next"
            >
              &#8250;
            </button>
            <div onClick={(e) => e.stopPropagation()} className="py-6 my-auto">
              <A4Page section={PAGES[modal].section} variant="modal">
                <PageContent index={modal} />
              </A4Page>
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
