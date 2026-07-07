"use client"

import { useState } from "react"
import Reveal from "@/components/reveal"

const PAGE_COUNT = 8

function A4Page({
  section,
  children,
}: {
  section: string
  children: React.ReactNode
}) {
  return (
    <div className="px-1" style={{ width: `${100 / PAGE_COUNT}%` }}>
      <div
        className="bg-white rounded-lg shadow-xl border border-[#e0d8cc] overflow-hidden flex flex-col"
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
    </div>
  )
}

export default function ReportPreview() {
  const [slide, setSlide] = useState(0)

  return (
    <Reveal delay={1}>
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-lg text-text text-center mb-1">
          Report Preview
        </h2>
        <p className="text-center text-xs text-text2 mb-6">
          Use arrows to flip through 8 real report pages.
        </p>

        <div className="relative max-w-[380px] mx-auto">
          <button
            onClick={() => setSlide((p) => (p - 1 + PAGE_COUNT) % PAGE_COUNT)}
            className="absolute left-[-16px] sm:left-[-28px] top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-card-bg border border-card-border flex items-center justify-center cursor-pointer transition-all hover:border-accent hover:text-accent text-text2 shadow-sm"
            aria-label="Previous page"
          >
            &#8249;
          </button>
          <button
            onClick={() => setSlide((p) => (p + 1) % PAGE_COUNT)}
            className="absolute right-[-16px] sm:right-[-28px] top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-card-bg border border-card-border flex items-center justify-center cursor-pointer transition-all hover:border-accent hover:text-accent text-text2 shadow-sm"
            aria-label="Next page"
          >
            &#8250;
          </button>

          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="flex" style={{ width: `${PAGE_COUNT * 100}%` }}>

                {/* Page 1: Cover */}
                <A4Page section="BODY PROFILE REPORT">
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
                </A4Page>

                {/* Page 2: Constitution Identity */}
                <A4Page section="IDENTITY">
                  <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Constitution Identity</div>
                  <div className="text-center mb-3 pb-2 border-b border-[#f0ebe3]">
                    <div className="text-sm font-bold text-[#1a1a1a]">The Gentle Breeze</div>
                    <div className="text-[10px] text-[#7a6535]">Qi Deficient (Qi Xu)</div>
                  </div>
                  <div className="space-y-2 text-[10px] text-[#444] leading-[1.6]">
                    <p>Your energy tank is elegantly smaller. You are a hybrid car, not a truck. Efficient, but with a smaller battery.</p>
                    <p>You prefer smaller gatherings, thoughtful conversation, and a good book over a night out. Your body forces you to be selective about where you spend energy.</p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-1.5">
                    <div className="border border-[#e0d8cc] rounded p-1.5 bg-[#fcfaf7]">
                      <div className="text-[9px] font-bold text-[#C9A96E] uppercase">Strength</div>
                      <div className="text-[10px] text-[#444] mt-0.5">Deep perception</div>
                    </div>
                    <div className="border border-[#e0d8cc] rounded p-1.5 bg-[#fcfaf7]">
                      <div className="text-[9px] font-bold text-[#C9A96E] uppercase">Drains Fast</div>
                      <div className="text-[10px] text-[#444] mt-0.5">Skipping meals</div>
                    </div>
                    <div className="border border-[#e0d8cc] rounded p-1.5 bg-[#fcfaf7]">
                      <div className="text-[9px] font-bold text-[#C9A96E] uppercase">Gift</div>
                      <div className="text-[10px] text-[#444] mt-0.5">Empathic intuition</div>
                    </div>
                    <div className="border border-[#e0d8cc] rounded p-1.5 bg-[#fcfaf7]">
                      <div className="text-[9px] font-bold text-[#C9A96E] uppercase">Avoid</div>
                      <div className="text-[10px] text-[#444] mt-0.5">Late nights</div>
                    </div>
                  </div>
                </A4Page>

                {/* Page 3: Food Therapy */}
                <A4Page section="FOOD THERAPY">
                  <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Recommended Foods</div>
                  <div className="space-y-0">
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
                </A4Page>

                {/* Page 4: Daily Meridian Rhythm */}
                <A4Page section="DAILY RHYTHM">
                  <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Meridian Clock Schedule</div>
                  <div className="space-y-1.5">
                    {[
                      { t: "7-8 AM", m: "Stomach", d: "Warm water with red dates" },
                      { t: "8-9 AM", m: "Spleen", d: "Congee with yam" },
                      { t: "9-11 AM", m: "Spleen (peak)", d: "Best focus window" },
                      { t: "11 AM-1 PM", m: "Heart", d: "Warm lunch" },
                      { t: "1-3 PM", m: "Small Intestine", d: "Rest or nap 15 min" },
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
                      Your peak performance window is 9-11 AM. Your body does its deepest repair between 10 PM and 2 AM.
                    </div>
                  </div>
                </A4Page>

                {/* Page 5: Recipe */}
                <A4Page section="RECIPE">
                  <div className="text-center mb-2 pb-2 border-b border-[#f0ebe3]">
                    <div className="text-sm font-bold text-[#1a1a1a]">Red Date &amp; Yam Recovery Congee</div>
                    <div className="text-[9px] text-[#7a6535] mt-0.5">Qi-Building Breakfast, 2 servings</div>
                  </div>
                  <div className="text-[10px] font-bold text-[#7a6535] uppercase tracking-wider mb-1.5">Ingredients</div>
                  <div className="space-y-0">
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
                </A4Page>

                {/* Page 6: Seasonal Wellness */}
                <A4Page section="SEASONAL">
                  <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider mb-2">Four Seasons Guide</div>
                  <div className="space-y-2">
                    <div className="border-l-2 border-[#7ec8a0] pl-2">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Spring</div>
                      <div className="text-[9px] text-[#666] leading-[1.4]">Your recovery season. Add fresh ginger. Gentle walks in sunlight, not exhausting hikes.</div>
                    </div>
                    <div className="border-l-2 border-[#e8a838] pl-2">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Summer</div>
                      <div className="text-[9px] text-[#666] leading-[1.4]">Easiest season. Avoid excessive sweating. Light warm meals over cold salads. Rest 1-3 PM.</div>
                    </div>
                    <div className="border-l-2 border-[#c87850] pl-2">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Autumn</div>
                      <div className="text-[9px] text-[#666] leading-[1.4]">Warning season. Start building reserves. Yam congee, red date tea, warm stews.</div>
                    </div>
                    <div className="border-l-2 border-[#5a8ab5] pl-2">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Winter</div>
                      <div className="text-[9px] text-[#666] leading-[1.4]">Hardest season, deepest rebuilding. Warm stews, chicken soup, root vegetables. Extra sleep is medicine.</div>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.12)]">
                    <div className="text-[9px] text-[#7a6535] leading-[1.5]">
                      Spring drink: Rose &amp; Longan Tea. Winter warmer: Ginger, Red Date &amp; Brown Sugar Tea.
                    </div>
                  </div>
                </A4Page>

                {/* Page 7: Acupressure Points */}
                <A4Page section="ACUPRESSURE">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[11px] font-bold text-[#7a6535] uppercase tracking-wider">Key Pressure Points</div>
                    <span className="px-1.5 py-0.5 rounded bg-[rgba(201,169,110,0.1)] text-[8px] font-bold text-[#C9A96E] uppercase tracking-wider">Pro</span>
                  </div>
                  <div className="space-y-2">
                    <div className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Zusanli (Leg Three Miles)</div>
                      <div className="text-[9px] text-[#7a6535] mt-0.5">4 finger-widths below kneecap, 1 outside shinbone</div>
                      <div className="text-[9px] text-[#666] mt-0.5 leading-[1.4]">The #1 point for Qi Deficiency. Press firmly 3 min each leg, morning and evening.</div>
                    </div>
                    <div className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Sanyinjiao (Three Yin Crossing)</div>
                      <div className="text-[9px] text-[#7a6535] mt-0.5">4 finger-widths above inner ankle bone</div>
                      <div className="text-[9px] text-[#666] mt-0.5 leading-[1.4]">Most important point for women. Regulates menstruation, reduces cramps.</div>
                    </div>
                    <div className="border border-[#e0d8cc] rounded p-2 bg-[#fcfaf7]">
                      <div className="text-[10px] font-bold text-[#1a1a1a]">Guanyuan (Gate of Origin)</div>
                      <div className="text-[9px] text-[#7a6535] mt-0.5">3 finger-widths below navel, midline</div>
                      <div className="text-[9px] text-[#666] mt-0.5 leading-[1.4]">Primary energy reservoir for women. Rub gently 5 min each morning.</div>
                    </div>
                  </div>
                  <div className="mt-2 text-[8px] text-[#bbb] italic">Full report includes 5 points with detailed instructions.</div>
                </A4Page>

                {/* Page 8: 30-Day Plan */}
                <A4Page section="30-DAY PLAN">
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
                    Your 30-day plan gradually shifts your wake time earlier, builds gentle exercise habits, and establishes a consistent bedtime.
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 p-1.5 rounded bg-[rgba(201,169,110,0.06)] border border-[rgba(201,169,110,0.12)]">
                      <div className="text-[8px] font-bold text-[#C9A96E] uppercase">Daily Checklist</div>
                      <div className="text-[9px] text-[#666] mt-0.5">Warm water on waking, cooked breakfast, no cold drinks, gentle movement only, bed by 10 PM.</div>
                    </div>
                  </div>
                </A4Page>

              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: PAGE_COUNT }, (_, i) => i).map((i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === slide ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-border hover:bg-text2"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <div className="text-center text-xs text-text2 mt-2">{slide + 1} / {PAGE_COUNT}</div>
        </div>
      </div>
    </Reveal>
  )
}
