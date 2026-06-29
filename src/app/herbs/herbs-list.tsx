"use client"

import { useState } from "react"
import Link from "next/link"
import { HERB_CATEGORIES } from "@/lib/herbs-data"
import type { HerbData } from "@/lib/herbs-data"

const CATEGORY_ICONS: Record<string, string> = {
  "Qi Tonic": "\u26A1",
  "Blood Tonic": "\u2764",
  "Yin Tonic": "\u263E",
  "Yang Tonic": "\u2600",
  "Warming Herb": "\u2668",
  "Cooling Herb": "\u2744",
  "Dampness Draining": "\u2609",
  "Qi Regulating": "\u2742",
  "Calming Herb": "\u2728",
}

const CATEGORY_BG: Record<string, string> = {
  "Qi Tonic": "rgba(217,119,6,0.08)",
  "Blood Tonic": "rgba(220,38,38,0.08)",
  "Yin Tonic": "rgba(2,132,199,0.08)",
  "Yang Tonic": "rgba(234,88,12,0.08)",
  "Warming Herb": "rgba(239,68,68,0.08)",
  "Cooling Herb": "rgba(34,211,238,0.08)",
  "Dampness Draining": "rgba(5,150,105,0.08)",
  "Qi Regulating": "rgba(147,51,234,0.08)",
  "Calming Herb": "rgba(168,135,64,0.08)",
}

const CATEGORY_COLORS: Record<string, string> = {
  "Qi Tonic": "bg-amber-900/10 text-amber-700",
  "Blood Tonic": "bg-red-900/10 text-red-700",
  "Yin Tonic": "bg-sky-900/10 text-sky-700",
  "Yang Tonic": "bg-orange-900/10 text-orange-700",
  "Warming Herb": "bg-orange-900/10 text-orange-700",
  "Cooling Herb": "bg-teal-900/10 text-teal-700",
  "Dampness Draining": "bg-emerald-900/10 text-emerald-700",
  "Qi Regulating": "bg-purple-900/10 text-purple-700",
}

export function HerbsList({ herbs }: { herbs: HerbData[] }) {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? herbs : herbs.filter((h) => h.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {HERB_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all no-underline ${
              filter === cat
                ? "bg-[rgba(168,135,64,0.15)] text-accent border border-[rgba(168,135,64,0.4)]"
                : "bg-card-bg text-text2 border border-[rgba(168,135,64,0.1)] hover:border-[rgba(168,135,64,0.3)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((herb) => (
          <Link
            key={herb.slug}
            href={`/herbs/${herb.slug}`}
            className="flex gap-4 border border-[rgba(168,135,64,0.15)] rounded-xl p-5 bg-card-bg hover:border-[rgba(168,135,64,0.4)] hover:shadow-[0_4px_20px_rgba(168,135,64,0.08)] transition-all duration-300 no-underline"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: CATEGORY_BG[herb.category] || "rgba(168,135,64,0.08)" }}>
              {CATEGORY_ICONS[herb.category] || "\u269B"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${CATEGORY_COLORS[herb.category] || "bg-accent/10 text-accent"}`}>
                  {herb.category}
                </span>
                <span className="text-[10px] text-text2/50">{herb.temperature}</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-base sm:text-lg text-text mb-0.5 tracking-wide">
                {herb.nameEn}
              </h3>
              <p className="text-xs text-text2/60 mb-1.5">{herb.nameZh} &middot; {herb.pinyin}</p>
              <p className="text-xs sm:text-sm text-text2 leading-relaxed line-clamp-2">
                {herb.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-text2/50 mt-8">
        Showing {filtered.length} of {herbs.length} herbs
      </p>
    </div>
  )
}
