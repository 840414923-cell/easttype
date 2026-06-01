import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-center py-12 px-6 border-t border-[rgba(201,163,85,0.12)] text-sm text-text2 leading-relaxed">
      <div className="mb-4">
        <span className="font-[family-name:var(--font-display)] text-base text-accent tracking-widest">
          ◇ East<span className="text-accent2">Type</span> ◇
        </span>
      </div>
      <div className="mb-4 flex items-center justify-center gap-3 text-xs">
        <Link href="/privacy" className="text-text2 hover:text-accent transition-colors no-underline">
          Privacy Policy
        </Link>
        <span className="text-[rgba(201,163,85,0.2)]">·</span>
        <Link href="/terms" className="text-text2 hover:text-accent transition-colors no-underline">
          Terms of Service
        </Link>
        <span className="text-[rgba(201,163,85,0.2)]">·</span>
        <Link href="/refund" className="text-text2 hover:text-accent transition-colors no-underline">
          Refund Policy
        </Link>
      </div>
      EastType · Based on traditional Eastern dietary philosophy. Not medical advice.
      <br />
      © 2026 EastType. All rights reserved.
    </footer>
  )
}
