import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { energyRecoveryCamp, energyRecoveryShoppingList } from "@/lib/camp/energy-recovery/meta"
import { BODY_TYPE_LABELS } from "@/lib/camp/types"

const TITLE = "Energy Recovery Camp — 30-Day Guided TCM Wellness Program"
const DESC = "A 30-day guided wellness camp for chronic fatigue based on Chinese medicine. Daily meal plans, wellness teas, and lifestyle tips personalized to your body type."
const URL = "https://www.myeasterntype.com/camp/energy-recovery"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: URL },
}

export default function CampDetailPage() {
  const camp = energyRecoveryCamp

  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <Link href="/camp" className="hover:text-accent transition-colors no-underline text-text2/60">Camp</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">Energy Recovery</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">30-Day Camp</p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-4 tracking-tight">
            {camp.title}
          </h1>
          <p className="text-text2 text-base leading-relaxed mb-8">{camp.description}</p>

          {/* Pricing */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="flex-1 bg-[rgba(140,45,42,0.04)] rounded-xl p-5 border border-[rgba(140,45,42,0.1)]">
              <p className="text-xs text-text2/60 uppercase tracking-wider mb-1">Already know your type</p>
              <p className="font-[family-name:var(--font-display)] text-3xl text-text font-bold">${camp.priceWithoutQuiz}</p>
              <p className="text-xs text-text2/50 mt-1">30-day access, one-time payment</p>
            </div>
            <div className="flex-1 bg-[rgba(140,45,42,0.08)] rounded-xl p-5 border-2 border-[rgba(140,45,42,0.2)]">
              <p className="text-xs text-accent uppercase tracking-wider mb-1">Includes Pro Quiz</p>
              <p className="font-[family-name:var(--font-display)] text-3xl text-text font-bold">${camp.priceWithQuiz}</p>
              <p className="text-xs text-text2/50 mt-1">For new users who need body type assessment</p>
            </div>
          </div>

          <Link
            href="/camp/dashboard"
            className="group inline-flex items-center justify-center w-full px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg mb-12"
            style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
          >
            Get Started
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{'\u2192'}</span>
          </Link>

          {/* Weekly breakdown */}
          <div className="space-y-6 mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text tracking-wide">
              What to Expect Each Week
            </h2>
            {camp.weeks.map((w) => (
              <div key={w.week} className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-[family-name:var(--font-display)] text-2xl text-accent font-bold">
                    Week {w.week}
                  </span>
                  <span className="text-sm text-text font-semibold">{w.theme}</span>
                </div>
                <p className="text-text2 text-sm leading-relaxed">{w.description}</p>
                <p className="text-xs text-text2/50 mt-3">
                  Unlocks on Day {w.unlockDay}
                </p>
              </div>
            ))}
          </div>

          {/* Shopping list preview */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2 tracking-wide">
              What You Will Need
            </h2>
            <p className="text-text2 text-sm mb-6">
              Before the camp starts, you will receive a full shopping list organized by store.
              Here is a preview of the main categories:
            </p>
            <div className="grid grid-cols-1 gap-4">
              {energyRecoveryShoppingList.map((cat) => (
                <div key={cat.category} className="bg-[var(--color-card-bg)] rounded-xl border border-[rgba(140,45,42,0.1)] p-5">
                  <p className="text-sm font-semibold text-text mb-1">{cat.category}</p>
                  <p className="text-xs text-text2/50 mb-3">{cat.store}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.slice(0, 5).map((item) => (
                      <span key={item.name} className="text-xs text-text2 bg-[rgba(140,45,42,0.04)] border border-[rgba(140,45,42,0.08)] px-2.5 py-1 rounded">
                        {item.name}
                      </span>
                    ))}
                    {cat.items.length > 5 && (
                      <span className="text-xs text-text2/50 px-2.5 py-1">
                        +{cat.items.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body type support */}
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-2 tracking-wide">
              Personalized to Your Body Type
            </h2>
            <p className="text-text2 text-sm mb-4">
              The meal plans, teas, and daily tips are adapted to your specific body type.
              Each type gets a unique version of the 30-day plan.
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(BODY_TYPE_LABELS).map(([slug, info]) => (
                <div
                  key={slug}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs"
                  style={{ borderColor: `${info.color}30`, background: `${info.color}08` }}
                >
                  <span style={{ color: info.color }}>{info.char}</span>
                  <span className="text-text2">{info.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 px-4 py-3 rounded-xl bg-[rgba(140,45,42,0.03)] border border-[rgba(140,45,42,0.1)]">
            <p className="text-[10px] text-text2 leading-relaxed text-center">
              This camp is for educational and wellness purposes only. It is not a medical treatment.
              If you have severe or worsening fatigue, consult a licensed healthcare provider.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
