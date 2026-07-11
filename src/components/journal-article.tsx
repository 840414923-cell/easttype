import Link from "next/link"
import Image from "next/image"
import FaqSection from "@/components/faq-section"
import SymptomCta from "@/components/symptom-cta"
import type { JournalArticle, JournalSection as JSection, JournalRelatedLink } from "@/lib/journal-data"

const CATEGORY_LABELS: Record<string, string> = {
  seasonal: "Seasonal",
  holiday: "Holiday",
  event: "Event",
  weather: "Weather",
}

function RelatedLinkCard({ link }: { link: JournalRelatedLink }) {
  return (
    <Link
      href={`/${link.type}/${link.slug}`}
      className="block bg-cream/30 border border-border rounded-xl p-4 hover:bg-cream/50 transition-colors no-underline"
    >
      <h3 className="text-text font-medium text-sm">{link.title} {'->'}</h3>
    </Link>
  )
}

function SectionView({ section }: { section: JSection }) {
  if (section.type === "image") {
    return (
      <section className="mb-10">
        <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
          {section.heading}
        </h2>
        {section.imagePath ? (
          <div className="relative w-full rounded-xl overflow-hidden border border-border">
            <Image
              src={section.imagePath}
              alt={section.imageAlt || section.heading}
              width={1600}
              height={900}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, 848px"
            />
          </div>
        ) : (
          <div className="border-2 border-dashed border-accent/20 rounded-xl p-8 bg-accent/5 text-center">
            <p className="text-xs text-accent/50 font-medium uppercase tracking-wider mb-3">Image Placeholder</p>
            <p className="text-sm text-text2 leading-relaxed max-w-md mx-auto">
              {section.imageDescription}
            </p>
          </div>
        )}
      </section>
    )
  }

  if (section.type === "table" && section.table) {
    return (
      <section className="mb-10">
        <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
          {section.heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card-bg border-b border-border">
                {section.table.headers.map((header, i) => (
                  <th key={i} className="text-left px-3 py-2 text-text font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-text2">
              {section.table.rows.map((row, i) => (
                <tr key={i} className={`border-b border-border/50 ${i % 2 === 1 ? "bg-card-bg/30" : ""}`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-3 py-2 ${j === 0 ? "font-medium text-text" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  if (section.type === "list" && section.list) {
    return (
      <section className="mb-10">
        <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
          {section.heading}
        </h2>
        <ul className="space-y-3 text-text2">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 flex-shrink-0">{'\u2022'}</span>
              <span className="leading-relaxed text-sm">
                {item.bold && <strong className="text-text">{item.bold} </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  if (section.type === "barchart" && section.barchart) {
    return (
      <section className="mb-10">
        <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
          {section.heading}
        </h2>
        {section.body && (
          <p className="text-text2 leading-relaxed mb-6 text-[0.95rem]">{section.body}</p>
        )}
        <div className="space-y-2.5">
          {section.barchart.items.map((item, i) => {
            const pct = (item.value / 10) * 100
            const barColor = item.value <= 3 ? "bg-red-500/60" : item.value <= 6 ? "bg-amber-500/60" : "bg-green-500/60"
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-text2 w-28 flex-shrink-0 text-right">{item.label}</span>
                <div className="flex-1 h-5 bg-border/20 rounded-full overflow-hidden">
                  <div className={`h-full ${barColor} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-text2/60 w-10 flex-shrink-0 font-medium">{item.displayValue}</span>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  if (section.type === "cta") {
    return (
      <section className="mb-10 print:hidden">
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[rgba(140,45,42,0.15)] bg-[rgba(140,45,42,0.06)] p-5">
          <p className="text-sm text-text2 leading-relaxed flex-1 text-center sm:text-left">
            {section.body}
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

  if (section.type === "steps" && section.steps) {
    return (
      <section className="mb-10">
        <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
          {section.heading}
        </h2>
        {section.body && (
          <p className="text-text2 leading-relaxed mb-6 text-[0.95rem]">{section.body}</p>
        )}
        <ol className="space-y-5">
          {section.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <h3 className="font-[family-name=var(--font-display)] text-base text-text mb-1 font-semibold">
                  {step.title}
                </h3>
                <p className="text-text2 text-sm leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    )
  }

  return (
    <section className="mb-10">
      <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-4">
        {section.heading}
      </h2>
      <p className="text-text2 leading-relaxed">
        {section.body}
      </p>
    </section>
  )
}

export default function JournalArticleView({ article }: { article: JournalArticle }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const faqs = article.faqs?.map((f) => ({
    q: { en: f.q, "zh-TW": f.q, ja: f.q },
    a: { en: f.a, "zh-TW": f.a, ja: f.a },
  })) ?? []

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <nav className="text-xs text-text2/60 mb-8">
        <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
        <span className="mx-1.5">{'>'}</span>
        <Link href="/journal" className="hover:text-accent transition-colors no-underline text-text2/60">Journal</Link>
        <span className="mx-1.5">{'>'}</span>
        <span className="text-text2">{article.title}</span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent">
          {CATEGORY_LABELS[article.category]}
        </span>
        <span className="text-xs text-text2/50">{formattedDate}</span>
      </div>

      <h1 className="font-[family-name=var(--font-display)] text-3xl sm:text-4xl text-text mb-6 leading-tight">
        {article.title}
      </h1>

      <p className="text-text2 leading-relaxed mb-10 text-[0.95rem]">
        {article.excerpt}
      </p>

      {article.sections.map((section, i) => (
        <SectionView key={i} section={section} />
      ))}

      {article.relatedLinks && article.relatedLinks.length > 0 && (
        <section className="mb-10">
          <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-3">Related Articles</h2>
          <div className="space-y-3">
            {article.relatedLinks.map((link, i) => (
              <RelatedLinkCard key={i} link={link} />
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      <SymptomCta />

      <div className="mt-8 mb-4 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
        <p className="text-[10px] text-text2 leading-relaxed text-center">
          This article is for informational and educational purposes only and is not medical advice. Always consult a qualified healthcare professional for medical concerns.
        </p>
      </div>
    </main>
  )
}
