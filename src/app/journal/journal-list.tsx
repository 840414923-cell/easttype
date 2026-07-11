"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import type { JournalArticle, JournalCategory } from "@/lib/journal-data"

const CATEGORIES: { value: JournalCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "seasonal", label: "Seasonal" },
  { value: "holiday", label: "Holiday" },
  { value: "event", label: "Event" },
  { value: "weather", label: "Weather" },
]

const CATEGORY_LABELS: Record<string, string> = {
  seasonal: "Seasonal",
  holiday: "Holiday",
  event: "Event",
  weather: "Weather",
}

export default function JournalList({ articles }: { articles: JournalArticle[] }) {
  const [filter, setFilter] = useState<JournalCategory | "all">("all")

  const filtered = filter === "all" ? articles : articles.filter((a) => a.category === filter)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === cat.value
                ? "bg-accent text-white"
                : "bg-card-bg text-text2 border border-border hover:border-accent/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((article) => {
          const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
          return (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="flex gap-4 border border-border rounded-xl p-4 bg-card-bg hover:border-accent/30 transition-all no-underline"
            >
              <div className="flex-shrink-0 w-24 h-32 rounded-lg overflow-hidden relative border border-accent/10">
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center">
                    <span className="text-[10px] text-accent/30 font-medium uppercase tracking-wider">Image</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <h2 className="font-bold text-text text-sm leading-snug mb-1.5">
                  {article.title}
                </h2>
                <p className="text-text2/60 text-xs leading-relaxed line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-[10px] text-text2/40">{formattedDate}</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="text-[10px] text-text2/40">{CATEGORY_LABELS[article.category]}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
