"use client"

import { useState } from "react"
import Link from "next/link"
import { WellnessIcon } from "./wellness-icons"

interface Article {
  slug: string
  title: string
  excerpt: string
  tag: string
  readTime: string
}

const FILTERS = [
  "All",
  "Overview",
  "Qi Deficient",
  "Yang Deficient",
  "Yin Deficient",
  "Phlegm Damp",
  "Damp Heat",
  "Qi Stagnant",
  "Nutrition",
]

const tagColors: Record<string, string> = {
  "Overview": "bg-[rgba(168,135,64,0.12)] text-accent",
  "Qi Deficient": "bg-amber-900/10 text-amber-600",
  "Yang Deficient": "bg-sky-900/10 text-sky-600",
  "Yin Deficient": "bg-red-900/10 text-red-600",
  "Phlegm Damp": "bg-emerald-900/10 text-emerald-600",
  "Damp Heat": "bg-orange-900/10 text-orange-600",
  "Qi Stagnant": "bg-purple-900/10 text-purple-600",
  "Nutrition": "bg-lime-900/10 text-lime-600",
}

const tagIconColors: Record<string, string> = {
  "Overview": "text-[rgb(168,135,64)]",
  "Qi Deficient": "text-amber-600",
  "Yang Deficient": "text-sky-600",
  "Yin Deficient": "text-red-600",
  "Phlegm Damp": "text-emerald-600",
  "Damp Heat": "text-orange-600",
  "Qi Stagnant": "text-purple-600",
  "Nutrition": "text-lime-600",
}

const tagBgColors: Record<string, string> = {
  "Overview": "rgba(168,135,64,0.08)",
  "Qi Deficient": "rgba(217,119,6,0.08)",
  "Yang Deficient": "rgba(2,132,199,0.08)",
  "Yin Deficient": "rgba(220,38,38,0.08)",
  "Phlegm Damp": "rgba(5,150,105,0.08)",
  "Damp Heat": "rgba(234,88,12,0.08)",
  "Qi Stagnant": "rgba(147,51,234,0.08)",
  "Nutrition": "rgba(132,204,22,0.08)",
}

export function WellnessList({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? articles : articles.filter((a) => a.tag === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all no-underline ${
              filter === cat
                ? "bg-[rgba(168,135,64,0.15)] text-accent border border-[rgba(168,135,64,0.4)]"
                : "bg-card-bg text-text2 border border-[rgba(168,135,64,0.2)] hover:border-[rgba(168,135,64,0.4)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((article, index) => (
          <Link
            key={article.slug}
            href={`/wellness/${article.slug}`}
            className={`group flex gap-4 border border-[rgba(168,135,64,0.2)] rounded-xl p-5 hover:border-[rgba(168,135,64,0.4)] hover:shadow-[0_4px_20px_rgba(168,135,64,0.08)] transition-all duration-300 no-underline ${
              index % 2 === 0 ? "bg-card-bg" : "bg-[rgba(168,135,64,0.03)]"
            }`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: tagBgColors[article.tag] || tagBgColors["Overview"] }}>
              <WellnessIcon name={article.tag} className={`w-6 h-6 ${tagIconColors[article.tag] || tagIconColors["Overview"]}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${tagColors[article.tag] || tagColors["Overview"]}`}>
                  {article.tag}
                </span>
                <span className="text-xs text-text2/50">{article.readTime} read</span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-base sm:text-lg text-text group-hover:text-accent transition-colors mb-1 leading-snug">
                {article.title}
              </h2>
              <p className="text-text2 text-sm leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-xs text-text2/50 mt-8">
        Showing {filtered.length} of {articles.length} guides
      </p>
    </div>
  )
}
