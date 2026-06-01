import Link from "next/link"

export default function WellnessLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[rgba(26,20,16,0.92)] backdrop-blur-xl border-b border-[rgba(201,163,85,0.15)] px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-bold text-text no-underline tracking-wider"
        >
          <span className="text-accent">East</span><span className="text-accent2">Type</span>
        </Link>
        <Link
          href="/quiz"
          className="inline-flex items-center justify-center px-5 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold cursor-pointer no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg"
        >
          Free Quiz
        </Link>
      </nav>
      {children}
      <footer className="text-center py-10 px-6 border-t border-[rgba(201,163,85,0.12)] text-xs text-text2/60 leading-relaxed">
        Based on traditional Chinese dietary philosophy. For informational purposes only — not medical advice. © 2026 EastType
      </footer>
    </>
  )
}
