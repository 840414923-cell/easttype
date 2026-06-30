"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HERB_CATEGORIES } from "@/lib/herbs-data"
import type { HerbData } from "@/lib/herbs-data"

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
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((herb) => (
          <Link
            key={herb.slug}
            href={`/herbs/${herb.slug}`}
            className="group block border border-[rgba(168,135,64,0.15)] rounded-2xl overflow-hidden bg-card-bg hover:border-[rgba(168,135,64,0.4)] hover:shadow-[0_8px_30px_rgba(168,135,64,0.12)] transition-all duration-300 no-underline"
          >
            {herb.image ? (
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[rgba(168,135,64,0.04)]">
                <Image
                  src={herb.image}
                  alt={herb.nameEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[herb.category] || "bg-accent/10 text-accent"} backdrop-blur-md`}>
                    {herb.category}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-[16/10] bg-[rgba(168,135,64,0.04)] flex items-center justify-center">
                <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[herb.category] || "bg-accent/10 text-accent"}`}>
                  {herb.category}
                </span>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-text group-hover:text-accent transition-colors tracking-wide">
                  {herb.nameEn}
                </h3>
                <span className="text-xs text-text2/40 flex-shrink-0 ml-2">{herb.temperature}</span>
              </div>
              <p className="text-sm text-text2/50 mb-4">{herb.nameZh} &middot; {herb.pinyin}</p>
              <p className="text-sm text-text2 leading-relaxed line-clamp-2 mb-4">
                {herb.summary}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {herb.actions.slice(0, 3).map((action, i) => (
                  <span key={i} className="text-[10px] text-text2/60 bg-[rgba(168,135,64,0.05)] border border-[rgba(168,135,64,0.08)] px-2.5 py-1 rounded-md">
                    {action.length > 35 ? action.substring(0, 35) + "..." : action}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-text2/50 mt-10">
        Showing {filtered.length} of {herbs.length} herbs
      </p>
    </div>
  )
}
