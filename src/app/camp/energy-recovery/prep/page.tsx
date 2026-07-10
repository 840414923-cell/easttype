import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { energyRecoveryShoppingList } from "@/lib/camp/energy-recovery/meta"

export const metadata: Metadata = {
  title: "Shopping List — Energy Recovery Camp",
  description: "Everything you need to prepare for the 30-day Energy Recovery Camp.",
  alternates: { canonical: "https://www.myeasterntype.com/camp/energy-recovery/prep" },
}

export default function PrepPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/camp" className="hover:text-accent transition-colors no-underline text-text2/60">Camp</Link>
          <span className="mx-1.5">{'>'}</span>
          <Link href="/camp/energy-recovery" className="hover:text-accent transition-colors no-underline text-text2/60">Energy Recovery</Link>
          <span className="mx-1.5">{'>'}</span>
          <span className="text-text2">Shopping List</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Camp Preparation</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-text mb-4 tracking-tight">
          Shopping List
        </h1>
        <p className="text-text2 text-sm leading-relaxed mb-8">
          Gather these ingredients before your camp starts. The list is organized by where to buy each item.
          Items marked as optional will enhance your results but are not required for the Western-style meal plans.
        </p>

        <div className="space-y-6">
          {energyRecoveryShoppingList.map((cat) => (
            <div key={cat.category} className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.12)] overflow-hidden">
              <div className="px-6 py-4 border-b border-[rgba(140,45,42,0.08)] bg-[var(--color-bg2)]">
                <h2 className="font-[family-name:var(--font-display)] text-lg text-text font-semibold">{cat.category}</h2>
                <p className="text-xs text-text2/50 mt-0.5">{cat.store}</p>
              </div>
              <div className="divide-y divide-[rgba(140,45,42,0.06)]">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-start gap-3 px-6 py-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded border-2 border-[rgba(140,45,42,0.15)] mt-0.5 flex-shrink-0">
                      {"\u2610"}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm text-text font-medium">{item.name}</span>
                        <span className="text-xs text-text2/60 flex-shrink-0">{item.amount}</span>
                      </div>
                      {item.note && (
                        <p className="text-xs text-text2/50 mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/camp/energy-recovery/day/1"
            className="group inline-flex items-center justify-center w-full px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
          >
            I&apos;m Ready — Start Day 1
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{'\u2192'}</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
