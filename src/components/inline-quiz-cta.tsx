import Link from "next/link"

export default function InlineQuizCta() {
  return (
    <section className="mb-10 print:hidden">
      <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[rgba(140,45,42,0.15)] bg-[rgba(140,45,42,0.06)] p-5">
        <p className="text-sm text-text2 leading-relaxed flex-1 text-center sm:text-left">
          Curious which body type you are? Take the free 5-minute quiz.
        </p>
        <Link
          href="/quiz"
          className="flex-shrink-0 inline-flex items-center px-6 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-accent to-accent2 text-white"
        >
          Take the Free Quiz <span className="ml-1.5">&#8594;</span>
        </Link>
      </div>
    </section>
  )
}
