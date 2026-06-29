"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { searchContent, type SearchItem } from "@/lib/search-index"

const CATEGORY_COLORS: Record<string, string> = {
  "Symptom": "text-orange-600",
  "Wellness Guide": "text-accent",
  "Food Guide": "text-green-600",
  "Pattern": "text-purple-600",
  "Quiz": "text-accent",
  "Browse": "text-text2",
}

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim()) {
      setResults(searchContent(query))
      setIsOpen(true)
      setActiveIndex(-1)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || results.length === 0) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault()
      window.location.href = results[activeIndex].url
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search symptoms, foods, body types..."
          className="w-full px-5 py-3.5 pl-12 rounded-xl border border-[rgba(168,135,64,0.2)] bg-card-bg text-text placeholder:text-text2/50 text-sm focus:outline-none focus:border-[rgba(168,135,64,0.5)] focus:shadow-[0_0_20px_rgba(168,135,64,0.1)] transition-all"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text2/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-[rgba(168,135,64,0.2)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.map((item, i) => (
            <Link
              key={`${item.url}-${i}`}
              href={item.url}
              onClick={() => {
                setIsOpen(false)
                setQuery("")
              }}
              className={`flex items-center justify-between px-4 py-3 no-underline transition-colors ${
                i === activeIndex ? "bg-[rgba(168,135,64,0.08)]" : "hover:bg-[rgba(168,135,64,0.04)]"
              }`}
            >
              <div className="flex-1 min-w-0">
                <span className="text-sm text-text block truncate">{item.title}</span>
              </div>
              <span className={`text-[10px] font-semibold uppercase tracking-wider ml-3 flex-shrink-0 ${CATEGORY_COLORS[item.category] || "text-text2"}`}>
                {item.category}
              </span>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card-bg border border-[rgba(168,135,64,0.2)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-4 py-6 text-center z-50">
          <span className="text-sm text-text2">No results found. Try another keyword.</span>
        </div>
      )}
    </div>
  )
}
