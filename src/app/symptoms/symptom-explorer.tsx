"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

interface SymptomItem {
  slug: string
  title: string
  tag: string
  readTime: string
  metaDesc: string
}

interface CategoryGroup {
  name: string
  anchor: string
  tags: string[]
}

export function SymptomExplorer({
  symptoms,
  categories,
}: {
  symptoms: SymptomItem[]
  categories: CategoryGroup[]
}) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categoryCounts = categories.map((c) => ({
    ...c,
    count: symptoms.filter((s) => c.tags.includes(s.tag)).length,
  }))

  const filtered = useMemo(() => {
    let result = symptoms
    if (activeCategory) {
      const cat = categories.find((c) => c.anchor === activeCategory)
      if (cat) {
        result = result.filter((s) => cat.tags.includes(s.tag))
      }
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.tag.toLowerCase().includes(q) ||
          s.metaDesc.toLowerCase().includes(q)
      )
    }
    return result
  }, [symptoms, categories, activeCategory, query])

  const grouped = useMemo(() => {
    if (query.trim() || activeCategory) return null
    return categories
      .map((c) => ({
        ...c,
        items: symptoms.filter((s) => c.tags.includes(s.tag)),
      }))
      .filter((c) => c.items.length > 0)
  }, [symptoms, categories, query, activeCategory])

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all no-underline ${
            !activeCategory
              ? "bg-accent text-bg"
              : "border border-[rgba(201,163,85,0.2)] bg-card-bg text-text2 hover:border-[rgba(201,163,85,0.5)]"
          }`}
        >
          All <span className="opacity-60">{symptoms.length}</span>
        </button>
        {categoryCounts.map((c) =>
          c.count === 0 ? null : (
            <button
              key={c.anchor}
              onClick={() =>
                setActiveCategory(c.anchor === activeCategory ? null : c.anchor)
              }
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === c.anchor
                  ? "bg-accent text-bg"
                  : "border border-[rgba(201,163,85,0.2)] bg-card-bg text-text2 hover:border-[rgba(201,163,85,0.5)]"
              }`}
            >
              {c.name} <span className="opacity-60">{c.count}</span>
            </button>
          )
        )}
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search symptoms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pl-11 rounded-xl border border-[rgba(201,163,85,0.15)] bg-card-bg text-text placeholder:text-text2/40 outline-none focus:border-[rgba(201,163,85,0.4)] transition-colors text-sm"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text2/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text2/40 hover:text-text2 text-lg leading-none"
          >
            ✕
          </button>
        )}
      </div>

      <p className="text-sm text-text2/50 mb-4">
        {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
        {activeCategory && !query && (
          <> in {categoryCounts.find((c) => c.anchor === activeCategory)?.name}</>
        )}
      </p>

      {grouped ? (
        <div className="space-y-8">
          {grouped.map((g) => (
            <div key={g.anchor}>
              <h2 className="font-[family-name:var(--font-display)] text-sm font-semibold text-text2/70 uppercase tracking-wider mb-3">
                {g.name} <span className="text-text2/40 normal-case font-normal">({g.items.length})</span>
              </h2>
              <div className="rounded-2xl border border-[rgba(201,163,85,0.15)] overflow-hidden">
                {g.items.map((s, index) => (
                  <Link
                    key={s.slug}
                    href={`/symptoms/${s.slug}`}
                    className={`group flex items-center justify-between gap-4 py-3 px-4 no-underline hover:bg-[rgba(201,163,85,0.08)] transition-colors ${
                      index % 2 === 0 ? "bg-card-bg" : "bg-[rgba(201,163,85,0.07)]"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-sm text-text group-hover:text-accent transition-colors truncate">
                        {s.title}
                      </h3>
                      <p className="text-xs text-text2/50 truncate mt-0.5">{s.metaDesc}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] text-accent/80 uppercase tracking-wider font-medium whitespace-nowrap">{s.tag}</span>
                      <span className="text-[10px] text-text2/30">{s.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[rgba(201,163,85,0.15)] overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-text2/50 text-sm">No symptoms found. Try a different search.</p>
              <button
                onClick={() => { setQuery(""); setActiveCategory(null) }}
                className="mt-3 text-accent text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filtered.map((s, index) => (
              <Link
                key={s.slug}
                href={`/symptoms/${s.slug}`}
                className={`group flex items-center justify-between gap-4 py-3 px-4 no-underline hover:bg-[rgba(201,163,85,0.08)] transition-colors ${
                  index % 2 === 0 ? "bg-card-bg" : "bg-[rgba(201,163,85,0.07)]"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-[family-name:var(--font-display)] text-sm text-text group-hover:text-accent transition-colors truncate">
                    {s.title}
                  </h3>
                  <p className="text-xs text-text2/50 truncate mt-0.5">{s.metaDesc}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] text-accent/80 uppercase tracking-wider font-medium whitespace-nowrap">{s.tag}</span>
                  <span className="text-[10px] text-text2/30">{s.readTime}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </>
  )
}
