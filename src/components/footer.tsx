import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-center py-12 px-6 border-t border-[rgba(185,28,28,0.12)] text-sm text-text2 leading-relaxed">
      <div className="mb-4">
        <span className="font-[family-name:var(--font-display)] text-base text-accent tracking-widest">
          ◇ East<span className="text-accent2">Type</span> ◇
        </span>
      </div>
      <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs">
        <Link href="/symptoms" className="text-text2 hover:text-accent transition-colors no-underline">
          Symptoms
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/foods-for" className="text-text2 hover:text-accent transition-colors no-underline">
          Food Guides
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/patterns" className="text-text2 hover:text-accent transition-colors no-underline">
          Patterns
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/wellness" className="text-text2 hover:text-accent transition-colors no-underline">
          Body Types
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/quiz" className="text-text2 hover:text-accent transition-colors no-underline">
          Free Quiz
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/privacy" className="text-text2 hover:text-accent transition-colors no-underline">
          Privacy
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/terms" className="text-text2 hover:text-accent transition-colors no-underline">
          Terms
        </Link>
        <span className="text-[rgba(200,16,46,0.2)]">·</span>
        <Link href="/refund" className="text-text2 hover:text-accent transition-colors no-underline">
          Refund
        </Link>
      </div>
      EastType · Based on traditional Eastern dietary philosophy. Not medical advice.
      <br />
      © 2026 EastType. All rights reserved.
    </footer>
  )
}
