"use client"

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

        <div className="space-y-10 text-[0.95rem] text-text2 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Who We Are
            </h2>
            <p className="mb-4">
              We&apos;re a small team that believes wellness wisdom shouldn&apos;t be locked behind a language barrier. Traditional Chinese Medicine has spent 3,000 years observing how different bodies respond to food, seasons, stress, and rest. That&apos;s a pretty incredible knowledge base. But most of it isn&apos;t available in English, and what little exists reads like a medical textbook.
            </p>
            <p>
              EastType exists to change that. We translate Eastern body wisdom into language that actually makes sense to someone who just wants to know why they&apos;re always tired, always cold, or can&apos;t seem to sleep through the night.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Our Mission
            </h2>
            <p className="mb-4">
              Help English-speaking people understand their bodies through a framework that&apos;s been tested across centuries, not just the last clinical trial.
            </p>
            <p>
              We don&apos;t start with jargon like &quot;Qi Deficiency&quot; or &quot;Yang Deficiency.&quot; We start with how you actually feel. Tired. Cold. Anxious. Bloated. Then we connect those real experiences to Eastern wellness concepts in a way that feels like talking to a knowledgeable friend, not reading Wikipedia.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              How EastType Works
            </h2>
            <p className="mb-4">
              It starts with a 5-minute quiz. You answer questions about how your body actually behaves: how you sleep, what happens after you eat, how you handle stress, what your energy looks like on a normal Tuesday. No lab work. No doctor visits. Just honest answers about your everyday experience.
            </p>
            <p className="mb-4">
              Behind the scenes, your answers map to one of 9 body constitutions identified by Traditional Chinese Medicine. This framework was formalized by Professor Wang Qi at Beijing University of Chinese Medicine, building on foundations from the Yellow Emperor&apos;s Inner Canon, one of the oldest medical texts in existence. The Chinese government has included body constitution identification in its national public health policy since 2009. This isn&apos;t folklore. It&apos;s a structured system used by millions of practitioners.
            </p>
            <p className="mb-4">
              While Ayurveda identifies 3 body types, Chinese medicine identifies 9. Each one describes a unique pattern of how your body processes energy, food, emotions, and the world around you. Your type explains why certain foods make you feel great and others leave you sluggish. Why you sleep soundly in some seasons and toss all night in others. Why your friend can drink coffee at 9pm and you can&apos;t touch it after noon.
            </p>
            <p>
              After the quiz, you get a free body type profile. If you want the full picture, including personalized food maps, seasonal guidance, daily rhythm suggestions, and a 30-day plan tailored to your constitution, that&apos;s what the detailed report is for.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Contact Us
            </h2>
            <p className="mb-3">
              Questions, feedback, or just want to say hi? We read every email.
            </p>
            <p>
              <a href="mailto:support@myeasterntype.com" className="text-accent no-underline hover:underline">
                support@myeasterntype.com
              </a>
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
              We&apos;re confident you&apos;ll find your EastType report genuinely useful. If for any reason you don&apos;t, email us within 30 days and we&apos;ll refund you in full. No questions asked.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
