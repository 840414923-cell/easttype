"use client"

import Link from "next/link"

export function Nav({ right }: { right?: React.ReactNode }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/symptoms", label: "Symptoms" },
    { href: "/patterns", label: "Patterns" },
    { href: "/wellness", label: "Body Types" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(26,20,16,0.92)] backdrop-blur-xl border-b border-[rgba(201,163,85,0.15)] px-6 py-4 flex justify-between items-center" style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}>
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
        {right || (
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-5 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_20px_rgba(201,163,85,0.2)]"
          >
            Start Quiz
          </Link>
        )}
      </div>
    </nav>
  )
}
