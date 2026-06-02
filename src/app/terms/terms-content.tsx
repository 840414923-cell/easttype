
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function TermsContent() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          Terms of Service
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          Last updated: May 2026
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using EastType (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Description of Service
            </h2>
            <p>
              EastType provides a body constitution quiz based on Traditional Chinese Medicine (TCM), personalized reports with food therapy recommendations, seasonal wellness guides, and lifestyle suggestions. The Service includes free and paid report tiers.
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Important Disclaimer — Not Medical Advice
            </h2>
            <p className="mb-3">
              EastType is based on traditional Chinese dietary philosophy and is provided for informational and self-discovery purposes only.
            </p>
            <p className="mb-3">
              This is not medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider for any medical concerns.
            </p>
            <p>
              Individual results may vary.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Purchases and Payments
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>All prices are listed in US Dollars (USD).</li>
              <li>Payments are processed securely via Creem.</li>
              <li>All reports are digital products delivered instantly upon payment.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>All content, reports, and materials on EastType are owned by EastType.</li>
              <li>Reports are for personal use only — no redistribution, reselling, or commercial use.</li>
              <li>Quiz questions and scoring methodology are proprietary.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Limitation of Liability
            </h2>
            <p className="mb-3">
              The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. EastType shall not be liable for any decisions made based on the reports provided.
            </p>
            <p>
              EastType is not responsible for any allergic reactions, health outcomes, or adverse effects resulting from food or lifestyle suggestions in our reports.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Refunds
            </h2>
            <p>
              For our full refund policy, please see our <Link href="/refund" className="text-accent hover:underline">Refund Policy</Link> page. We offer a 30-day money-back guarantee on all purchases.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Continued use of the Service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Age Restriction
            </h2>
            <p>
              You must be at least 16 years of age to use this Service. If you are under 16, you may not access or use EastType.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Taiwan, without regard to conflict of law principles. For EU consumers, the mandatory provisions of your local law remain applicable.
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please email us at 840414923@qq.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
