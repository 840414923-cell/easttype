import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { energyRecoveryCamp } from "@/lib/camp/energy-recovery/meta"

const TITLE = "30-Day TCM Wellness Camps — Guided Recovery Programs"
const DESC = "Join a 30-day guided wellness camp based on Chinese medicine food therapy. Personalized daily meal plans, wellness teas, and lifestyle guidance tailored to your body type."
const URL = "https://www.myeasterntype.com/camp"

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: { title: TITLE, description: DESC, url: URL, type: "website", siteName: "EastType" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  alternates: { canonical: URL },
}

export default function CampLanding() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <nav className="text-xs text-text2/60 mb-8">
            <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
            <span className="mx-1.5">{'>'}</span>
            <span className="text-text2">Camp</span>
          </nav>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">EastType Camps</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
            30-Day Guided Wellness Camps
          </h1>
          <p className="text-text2 text-base sm:text-lg max-w-2xl leading-relaxed mb-12">
            Not sure what to eat, when to rest, or how to actually use Chinese medicine in your daily life?
            These guided camps give you a day-by-day plan: meals, teas, lifestyle tips, and progress tracking,
            all tailored to your body type.
          </p>

          {/* Available camps */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {/* Energy Recovery Camp */}
            <div className="bg-[var(--color-card-bg)] rounded-2xl border border-[rgba(140,45,42,0.12)] overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-[rgba(140,45,42,0.08)] px-3 py-1 rounded-full">
                    Now Available
                  </span>
                  <span className="text-xs text-text2/50">30 Days</span>
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-3 tracking-wide">
                  {energyRecoveryCamp.title}
                </h2>
                <p className="text-text2 text-sm leading-relaxed mb-6">
                  {energyRecoveryCamp.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Daily meal plans (Western-friendly with Chinese alternatives)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Wellness tea recipe for each day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Lifestyle and sleep guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Daily check-in and progress tracking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Shopping list for preparation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">{'\u2713'}</span>
                    <span className="text-sm text-text2">Weekly summaries based on your check-ins</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="flex-1 bg-[rgba(140,45,42,0.04)] rounded-xl p-4 border border-[rgba(140,45,42,0.1)]">
                    <p className="text-xs text-text2/60 uppercase tracking-wider mb-1">Already know your type</p>
                    <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">
                      ${energyRecoveryCamp.priceWithoutQuiz}
                    </p>
                    <p className="text-xs text-text2/50 mt-1">30-day access, one-time payment</p>
                  </div>
                  <div className="flex-1 bg-[rgba(140,45,42,0.08)] rounded-xl p-4 border-2 border-[rgba(140,45,42,0.2)]">
                    <p className="text-xs text-accent uppercase tracking-wider mb-1">Need the quiz first</p>
                    <p className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">
                      ${energyRecoveryCamp.priceWithQuiz}
                    </p>
                    <p className="text-xs text-text2/50 mt-1">Includes Pro body type assessment ($24.99 value)</p>
                  </div>
                </div>

                <Link
                  href="/camp/energy-recovery"
                  className="group inline-flex items-center justify-center w-full px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
                >
                  Explore the Camp
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{'\u2192'}</span>
                </Link>
              </div>

              {/* Week structure */}
              <div className="border-t border-[rgba(140,45,42,0.08)] px-8 py-6 bg-[var(--color-bg2)]">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Camp Structure</p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {energyRecoveryCamp.weeks.map((w) => (
                    <div key={w.week}>
                      <p className="text-sm font-semibold text-text mb-1">Week {w.week}</p>
                      <p className="text-xs text-text2 leading-relaxed">{w.theme}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-text mb-8 tracking-wide">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Know Your Type", desc: "Take the 5-minute quiz or use your existing result to get a personalized camp plan." },
                { num: "02", title: "Prepare", desc: "Receive a shopping list. Pick your start date and gather your ingredients." },
                { num: "03", title: "Daily Practice", desc: "Each day unlocks a meal plan, tea recipe, and lifestyle tip. Check in as you go." },
                { num: "04", title: "Track Progress", desc: "Weekly summaries show your consistency. After 30 days, get a completion report." },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-accent/30 block mb-2">{step.num}</span>
                  <h3 className="font-[family-name:var(--font-display)] text-sm text-text font-semibold mb-2">{step.title}</h3>
                  <p className="text-text2 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-text2/40">
              Camp content is for educational purposes only and is not medical advice.
              Always consult a qualified healthcare provider for medical concerns.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
