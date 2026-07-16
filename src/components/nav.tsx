"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchModal } from "@/components/search-modal"

const GUIDE_LINKS = [
  { href: "/solutions", label: "Herbal Solutions", count: "Formulas" },
  { href: "/symptoms", label: "Symptoms", count: "70 guides" },
  { href: "/wellness", label: "Wellness Guides", count: "51 guides" },
  { href: "/foods-for", label: "Food Guides", count: "10 guides" },
  { href: "/patterns", label: "Patterns", count: "9 patterns" },
]

export function Nav({ right }: { right?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-xl border-b border-[rgba(140,45,42,0.12)] px-6 py-3 flex justify-between items-center shadow-[0_1px_20px_rgba(140,45,42,0.05)]"
      style={{ paddingTop: "max(0.875rem, env(safe-area-inset-top))" }}
    >
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold text-text no-underline tracking-wider"
        >
          <span className="text-accent">East</span>
          <span className="text-accent2">Type</span>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <div
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              className="text-sm text-text2 no-underline hover:text-accent transition-colors tracking-wide font-medium flex items-center gap-1 cursor-pointer bg-transparent border-none"
              onClick={() => setGuidesOpen(!guidesOpen)}
            >
              Guides
              <svg className={`w-3 h-3 transition-transform ${guidesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {guidesOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-[var(--color-card-bg)] border border-[rgba(140,45,42,0.15)] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
                  {GUIDE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 no-underline hover:bg-[rgba(140,45,42,0.06)] transition-colors"
                    >
                      <span className="text-sm text-text font-medium">{link.label}</span>
                      <span className="text-[10px] text-text2/50">{link.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/journal"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors tracking-wide font-medium"
          >
            Journal
          </Link>

          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white hover:shadow-[0_0_20px_rgba(140,45,42,0.2)] whitespace-nowrap"
          >
            Start Quiz
          </Link>

          <Link
            href="/herbs"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors tracking-wide font-medium"
          >
            Herbs
          </Link>

          <Link
            href="/about"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors tracking-wide font-medium"
          >
            About
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
          className="text-text2 hover:text-accent transition-colors p-1 cursor-pointer bg-transparent border-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
        <ThemeToggle />
        {right}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-text transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-text transition-all ${mobileOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-5 h-0.5 bg-text transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-nav-bg border-b border-[rgba(140,45,42,0.15)] px-6 py-4 flex flex-col gap-3 sm:hidden">
          <button
            onClick={() => { setSearchOpen(true); setMobileOpen(false) }}
            className="flex items-center gap-2 text-sm text-text2 no-underline hover:text-accent transition-colors pl-2 pb-3 border-b border-[rgba(140,45,42,0.1)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            Search articles...
          </button>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] text-text2/50 uppercase tracking-wider font-semibold">Guides</span>
            {GUIDE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text2 no-underline hover:text-accent transition-colors pl-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/journal"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Journal
          </Link>
          <Link
            href="/herbs"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Herbs
          </Link>
          <Link
            href="/about"
            className="text-sm text-text2 no-underline hover:text-accent transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-semibold text-accent no-underline mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Start Quiz {'>'}
          </Link>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  )
}
