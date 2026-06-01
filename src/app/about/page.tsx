"use client"

import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-8 text-center">
          About EastType
        </h1>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              What is EastType?
            </h2>
            <p className="mb-4">
              EastType is a body constitution discovery platform based on Traditional Chinese Medicine (TCM) — a wellness framework that has been refined over 3,000 years.
            </p>
            <p>
              While Ayurveda identifies 3 body types (doshas), Chinese medicine identifies 9. Each type describes a unique pattern of how your body processes energy, food, emotions, and the world around you.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Where does this come from?
            </h2>
            <p className="mb-4">
              The 9 body constitution framework was formalized by Professor Wang Qi at Beijing University of Chinese Medicine, building on foundations from the Yellow Emperor&apos;s Inner Canon, one of the oldest medical texts in the world, dating back over two millennia.
            </p>
            <p>
              This isn&apos;t folklore — the Chinese government has included body constitution identification in its national public health policy since 2009. It&apos;s a framework used by millions of practitioners worldwide.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Important Disclaimer
            </h2>
            <div className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
              <p className="mb-3">
                EastType is based on traditional Chinese dietary philosophy and is provided for informational and self-discovery purposes only.
              </p>
              <p className="mb-3">
                This is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for any medical concerns.
              </p>
              <p>
                Individual results may vary.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              30-Day Money-Back Guarantee
            </h2>
            <p>
              We&apos;re confident you&apos;ll love your EastType report. If for any reason you&apos;re not satisfied, email us within 30 days for a full refund. No questions asked.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
