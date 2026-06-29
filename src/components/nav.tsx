"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Nav({ right }: { right?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/symptoms", label: "Symptoms" },
    { href: "/foods-for", label: "Food Guides" },
    { href: "/patterns", label: "Patterns" },
    { href: "/wellness", label: "Body Types" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-xl border-b border-[rgba(168,135,64,0.12)] px-6 py-4 flex justify-between items-center shadow-[0_1px_20px_rgba(168,135,64,0.05)]" style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold text-text no-underline tracking-wider"
        >
          <span className="text-accent">East</span><span className="text-accent2">Type</span>
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-text2 no-underline hover:text-accent transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        {right || (
          <Link
            href="/quiz"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_20px_rgba(201,163,85,0.2)]"
          >
            Start Quiz
          </Link>
        )}
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
        <div className="absolute top-full left-0 right-0 bg-nav-bg border-b border-[rgba(201,163,85,0.15)] px-6 py-4 flex flex-col gap-3 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text2 no-underline hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="text-sm font-semibold text-accent no-underline"
            onClick={() => setMobileOpen(false)}
          >
            Start Quiz →
          </Link>
        </div>
      )}
    </nav>
  )
}
