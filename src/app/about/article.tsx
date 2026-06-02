"use client"

import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function AboutArticle() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12">
        <nav className="text-xs text-text2/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors no-underline text-text2/60">EastType</Link>
          <span className="mx-1.5">›</span>
          <span className="text-text2">About</span>
        </nav>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-text mb-3 leading-tight">
          About EastType
        </h1>
        <p className="text-text2 text-sm mb-10">What this site is, where the content comes from, and what it cannot do</p>

        <div className="space-y-10 text-[0.95rem] text-text2 leading-relaxed">

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              What EastType Is
            </h2>
            <p className="mb-4">
              EastType is a wellness reference tool. It takes the body constitution framework from Traditional Chinese Medicine and presents it in plain English, so that someone who types &quot;why am I always tired&quot; into a search engine can find a framework that explains why certain symptoms tend to cluster together, and what foods and habits may help.
            </p>
            <p>
              The site does not diagnose, treat, or cure anything. It provides educational content based on a well-established classification system and a self-assessment quiz that maps your answers to one of nine constitutional patterns.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Where the Content Comes From
            </h2>
            <p className="mb-4">
              The nine body constitutions used on this site are not invented. They come from the <em>Traditional Chinese Medicine Constitution Classification</em>, which was formally standardized in 2009 as the Chinese Association of Chinese Medicine standard (ZYYXH/T157-2009). This is the only officially published classification standard for TCM body constitutions, and it is the framework used in Chinese medicine university textbooks and published research.
            </p>
            <p className="mb-4">
              The theoretical roots go back further. The concept that people have different constitutional tendencies appears in the <em>Yellow Emperor&apos;s Inner Canon</em> (<em>Huangdi Neijing</em>), a text compiled over two thousand years ago. The modern nine-type classification is a synthesis of that classical observation with decades of contemporary research, formalized into a standard that is now widely used in clinical practice, public health programs, and academic research in China.
            </p>
            <p className="mb-4">
              The World Health Organization&apos;s Traditional Medicine Strategy and the International Classification of Diseases (ICD-11) traditional medicine chapter both reference TCM constitution concepts, reflecting growing international recognition of this framework.
            </p>
            <p>
              EastType&apos;s symptom guides, pattern explanations, and food suggestions are based on these published sources, cross-referenced with standard TCM dietary therapy references. Content is assembled with AI assistance from these source materials and reviewed before publication. It is not written by a licensed Chinese medicine practitioner.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              How the Assessment Works
            </h2>
            <p className="mb-4">
              The 27-question quiz is a simplified adaptation of the <em>TCM Constitution Scale</em>, the standard questionnaire that accompanies the 2009 classification standard. The original scale is used in clinical and research settings to identify a person&apos;s dominant constitutional tendency.
            </p>
            <p className="mb-4">
              EastType&apos;s version reduces the question count and adapts the language for an online, English-speaking audience. It covers the same core dimensions: energy level, thermal preference, digestion, sleep quality, emotional tendency, and physical characteristics. Your answers generate a score for each of the nine constitution types, and the highest-scoring type is presented as your primary result.
            </p>
            <p>
              This is a self-reported assessment, not a clinical diagnosis. In a traditional Chinese medicine consultation, a practitioner would also observe your tongue, feel your pulse, and ask follow-up questions based on your responses. EastType&apos;s quiz captures the questionnaire portion of that process but cannot replicate the full diagnostic approach.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              What This Site Cannot Do
            </h2>
            <div className="bg-cream/30 border border-border rounded-xl p-5 text-sm leading-relaxed space-y-3">
              <p>
                EastType is for informational and educational purposes only. It is not a medical device, a clinical tool, or a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                The body type results are based on a self-reported questionnaire. They reflect constitutional tendencies, not medical conditions. If you have persistent or worsening symptoms, consult a licensed healthcare provider.
              </p>
              <p>
                Food and lifestyle suggestions are drawn from traditional Chinese dietary therapy references and are general in nature. Individual responses vary. This site does not prescribe diets, supplements, or treatments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Content Accuracy
            </h2>
            <p className="mb-4">
              Every effort has been made to ensure that the content on EastType accurately reflects published TCM constitution theory and standard dietary therapy references. However, this is a simplified, English-language presentation of a complex traditional system. Nuance is inevitably lost in translation and condensation.
            </p>
            <p>
              If you are a TCM practitioner and notice an inaccuracy, please contact us. We take content correctness seriously and will review and correct errors promptly.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              30-Day Money-Back Guarantee
            </h2>
            <p>
              If you purchase a detailed report and find it unhelpful, email us within 30 days for a full refund. No questions asked.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl text-text mb-3">
              Contact
            </h2>
            <p>
              Questions, feedback, or corrections:{" "}
              <a href="mailto:support@myeasterntype.com" className="text-accent no-underline hover:underline">
                support@myeasterntype.com
              </a>
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
