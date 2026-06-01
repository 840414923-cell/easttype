import type { FaqItem } from "@/lib/wellness-faqs"

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="mb-10">
      <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-border rounded-xl bg-cream/20">
            <summary className="flex items-center justify-between cursor-pointer p-4 text-text font-medium text-[0.95rem] leading-relaxed list-none">
              <span>{faq.q.en}</span>
              <span className="text-accent/60 ml-3 shrink-0 transition-transform duration-200 group-open:rotate-45 text-lg">+</span>
            </summary>
            <div className="px-4 pb-4 text-text2 text-sm leading-relaxed">
              {faq.a.en}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
