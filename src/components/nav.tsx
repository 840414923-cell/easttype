"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

function LocaleSelect({ localeCode, setLocaleCode, localeKeys, locales }: {
  localeCode: string
  setLocaleCode: (code: any) => void
  localeKeys: string[]
  locales: Record<string, { label: string }>
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-[rgba(201,163,85,0.15)] bg-[rgba(201,163,85,0.05)] text-text2 hover:text-accent hover:border-[rgba(201,163,85,0.3)] cursor-pointer transition-all duration-200"
      >
        <span>🌐</span>
        <span className="font-medium">{locales[localeCode].label}</span>
        <span className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 min-w-[120px] py-1.5 rounded-xl border border-[rgba(201,163,85,0.15)] bg-[rgba(26,20,16,0.95)] backdrop-blur-xl shadow-lg shadow-black/30 z-50">
          {localeKeys.map((key) => (
            <button
              key={key}
              onClick={() => { setLocaleCode(key); setOpen(false) }}
              className={`w-full text-left px-4 py-2 text-xs cursor-pointer transition-colors ${
                localeCode === key
                  ? "text-accent font-semibold bg-[rgba(201,163,85,0.1)]"
                  : "text-text2 hover:text-accent hover:bg-[rgba(201,163,85,0.06)]"
              }`}
            >
              {locales[key].label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Nav({ right }: { right?: React.ReactNode }) {
  const { locale, localeCode, setLocaleCode, localeKeys, locales } = useLocale()

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(26,20,16,0.92)] backdrop-blur-xl border-b border-[rgba(201,163,85,0.15)] px-6 py-4 flex justify-between items-center" style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}>
      <Link
        href="/"
        className="font-[family-name:var(--font-display)] text-xl font-bold text-text no-underline tracking-wider"
      >
        <span className="text-accent">East</span><span className="text-accent2">Type</span>
      </Link>
      <div className="flex items-center gap-3">
        <LocaleSelect localeCode={localeCode} setLocaleCode={setLocaleCode} localeKeys={localeKeys} locales={locales} />
        {right || (
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-5 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_20px_rgba(201,163,85,0.2)]"
          >
            {locale.ui.startQuiz}
          </Link>
        )}
      </div>
    </nav>
  )
}
