import Link from "next/link"

export default function SymptomCta() {
  return (
    <section className="mt-12 mb-4 border border-[rgba(201,163,85,0.2)] rounded-2xl p-8 text-center bg-[rgba(201,163,85,0.04)]">
      <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-text mb-3 tracking-wide">
        Discover Your Eastern Type
      </h2>
      <p className="text-sm text-text2 leading-relaxed max-w-md mx-auto mb-6">
        Take our free 5-minute assessment to explore which body type best matches your current wellness patterns.
      </p>
      <Link
        href="/quiz"
        className="group relative inline-flex items-center justify-center px-8 py-3 rounded font-[family-name:var(--font-body)] text-base font-semibold cursor-pointer no-underline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,163,85,0.2)] bg-gradient-to-r from-accent to-accent2 text-bg"
      >
        Take the Assessment
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
      </Link>
    </section>
  )
}
