"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function RefundContent() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          Refund Policy
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          Last updated: May 2026
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section className="bg-cream border border-border rounded-xl p-6 text-sm leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              30-Day Money-Back Guarantee
            </h2>
            <p>
              We&apos;re confident you&apos;ll love your EastType report. If for any reason you&apos;re not satisfied, contact us within 30 days of purchase for a full refund. No questions asked.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              How to Request a Refund
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Email 840414923@qq.com with your order number</li>
              <li>Include the email address used for your purchase</li>
              <li>No specific reason required — our policy is genuinely no questions asked</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Processing Time
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Refunds are processed within 5–10 business days</li>
              <li>Refunded to the original payment method</li>
              <li>You&apos;ll receive a confirmation email once the refund is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Eligibility
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Refund request must be within 30 days of purchase</li>
              <li>One refund per report type (to prevent abuse)</li>
              <li>Digital access to the report may be revoked after refund</li>
            </ul>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Contact Us
            </h2>
            <p>
              For refund requests or questions, please email 840414923@qq.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
