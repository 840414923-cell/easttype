"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-4xl mb-2 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-text2 text-sm mb-10">
          Last updated: May 2026
        </p>

        <div className="space-y-8 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Quiz answers — your responses to the body constitution questionnaire, stored only in your browser&apos;s local storage</li>
              <li>Language preference — stored in your browser&apos;s local storage</li>
              <li>Consent preference — whether you accepted or declined cookies, stored in local storage</li>
              <li>Payment information — processed securely by Creem; we never store your card details</li>
              <li>Analytics data — page views and quiz completion rates (anonymized, no personally identifiable information)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              2. Legal Basis for Processing (GDPR)
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Consent — analytics cookies and payment processing are processed only after you give explicit consent</li>
              <li>Contract — processing your payment and delivering your purchased report</li>
              <li>Legitimate interest — improving our service through anonymized analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Generate your personalized body constitution report</li>
              <li>Deliver purchased reports and process payments</li>
              <li>Improve quiz accuracy and user experience via anonymized analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              4. Data Storage &amp; Retention
            </h2>
            <p className="mb-3">
              EastType is a static website — we do not maintain user accounts or a server-side database. Your quiz results and preferences are stored only in your browser&apos;s local storage and remain there until you clear your browser data.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Quiz data: retained in your browser until you clear it (no server-side retention)</li>
              <li>Payment records: retained by Creem for 7 years per financial regulations</li>
              <li>Analytics: anonymized and aggregated; retained for 26 months</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              5. Third-Party Services
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Vercel — website hosting and delivery (privacy policy: vercel.com/legal/privacy-policy)</li>
              <li>Creem — payment processing (privacy policy: lemonsqueezy.com/privacy)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              6. Cookies
            </h2>
            <p className="mb-3">
              We use minimal analytics cookies to understand general usage patterns. Your language and consent preferences are stored in your browser&apos;s local storage. We do not use advertising cookies or tracking pixels.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              7. Your Rights Under GDPR
            </h2>
            <p className="mb-3">
              If you are in the European Economic Area (EEA), you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Right of Access (Art. 15) — request a copy of your personal data</li>
              <li>Right to Rectification (Art. 16) — request correction of inaccurate data</li>
              <li>Right to Erasure (Art. 17) — request deletion of your personal data</li>
              <li>Right to Restrict Processing (Art. 18) — request limitation of how your data is used</li>
              <li>Right to Data Portability (Art. 20) — receive your data in a structured, machine-readable format</li>
              <li>Right to Object (Art. 21) — object to processing based on legitimate interest</li>
              <li>Right to Withdraw Consent (Art. 7) — withdraw consent at any time without affecting the lawfulness of prior processing</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at 840414923@qq.com. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              8. Age Restriction
            </h2>
            <p>
              EastType is not intended for use by individuals under the age of 16. If we learn that we have collected personal data from a child under 16, we will delete it promptly. If you are a parent or guardian and believe your child has used our service, please contact us at 840414923@qq.com.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              9. International Data Transfers
            </h2>
            <p>
              Our website is hosted on Vercel (United States) and payments are processed by Creem (United States). Data may be transferred to and processed in the United States. Both Vercel and Creem comply with EU-US Data Privacy Framework standards. By using EastType, you acknowledge that your data may be processed in jurisdictions with different data protection laws.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              10. Supervisory Authority
            </h2>
            <p>
              If you are in the EEA and believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.
            </p>
          </section>

          <section className="bg-cream border border-border rounded-xl p-6 text-sm">
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, or wish to exercise your data protection rights, please email us at 840414923@qq.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
