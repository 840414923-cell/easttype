"use client"

import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import Reveal from "@/components/reveal"

const BODY_TYPES = [
  { slug: "qi_deficient", name: "Qi Deficient", nickname: "The Gentle Breeze", color: "#D4A84B", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  { slug: "yang_deficient", name: "Yang Deficient", nickname: "The Quiet Flame", color: "#5B8FB9", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  { slug: "yin_deficient", name: "Yin Deficient", nickname: "The Still Pool", color: "#5BA88A", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  { slug: "qi_stagnant", name: "Qi Stagnant", nickname: "The Held Breath", color: "#9B7EBD", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  { slug: "phlegm_damp", name: "Phlegm Damp", nickname: "The Mossy Stone", color: "#5BA8A0", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  { slug: "damp_heat", name: "Damp Heat", nickname: "The Summer Storm", color: "#D17B4B", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  { slug: "blood_stasis", name: "Blood Stasis", nickname: "The Frozen River", color: "#C76B7E", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  { slug: "special_diathesis", name: "Sensitive", nickname: "The Sensitive Bloom", color: "#7B6BA8", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  { slug: "balanced", name: "Balanced", nickname: "The Clear Stream", color: "#6BA85B", bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
]

const STATS = [
  { number: "9", label: "Body Types", link: "/types/balanced" },
  { number: "70", label: "Symptom Guides", link: "/symptoms" },
  { number: "116", label: "Herb Profiles", link: "/herbs" },
  { number: "53", label: "Wellness Articles", link: "/wellness" },
  { number: "10", label: "Food Therapy Guides", link: "/foods-for" },
  { number: "5", label: "Solution Programs", link: "/solutions" },
]

const STEPS = [
  {
    step: "01",
    chinese: "问",
    pinyin: "Wèn",
    title: "Ask",
    heading: "3000 years of asking the right questions",
    description: "In Chinese medicine, wen (inquiry) is one of the four diagnostic methods. Our 27-question quiz modernizes this ancient practice, asking about your energy, digestion, sleep, and emotional patterns to identify what your body is telling you.",
  },
  {
    step: "02",
    chinese: "辨",
    pinyin: "Biàn",
    title: "Identify",
    heading: "9 body types, 1 is yours",
    description: "Chinese medicine identifies 9 distinct constitutional patterns. Each type has unique tendencies in energy, digestion, temperature, and emotional balance. Your results reveal your primary and secondary types, with a personalized report.",
  },
  {
    step: "03",
    chinese: "调",
    pinyin: "Tiáo",
    title: "Adjust",
    heading: "Personalized guidance for your type",
    description: "Get food therapy maps, daily rhythm schedules, seasonal protocols, acupressure guides, and 28-day recipe plans tailored to your body type. No generic advice, just what may work for your specific constitution.",
  },
]

const CONTENT_BLOCKS = [
  {
    title: "Body Types",
    heading: "9 Chinese Medicine Body Types",
    description: "Chinese medicine identifies 9 constitutional patterns. Each type has unique tendencies in energy, digestion, sleep, and emotional balance. Discover yours and get personalized food guidance.",
    link: "/wellness/chinese-medicine-body-types",
    linkText: "Explore Body Types",
    image: "/images/home/body-types.png",
    alt: "Nine Chinese medicine body type stones on an open book with tea",
    reverse: false,
  },
  {
    title: "Symptoms",
    heading: "70 Symptom Guides Explained",
    description: "Why are you always tired? Why do you wake up at 3 AM? Why do you crave sweets? Each symptom has a Chinese medicine explanation that connects it to your body type and offers food-based approaches.",
    link: "/symptoms",
    linkText: "Browse All Symptoms",
    image: "/images/home/symptoms.png",
    alt: "Lotus leaf with herbal tea and Chinese medicine ingredients on slate stone",
    reverse: true,
  },
  {
    title: "Food Guides",
    heading: "10 Food Therapy Guides",
    description: "What to eat when you are always tired, always cold, or struggling with sleep. Chinese medicine food therapy matches ingredients to your constitution for gentle, gradual support.",
    link: "/foods-for",
    linkText: "Browse Food Guides",
    image: "/images/home/food-guides.png",
    alt: "Rice congee bowl with ginger, red dates, and goji berries on linen",
    reverse: false,
  },
  {
    title: "Wellness Guides",
    heading: "53 TCM Wellness Guides",
    description: "From Spleen Qi Deficiency to Yin and Yang, explore in-depth guides on Chinese medicine patterns, concepts, and remedies. Each guide includes food recommendations, daily habits, and FAQs.",
    link: "/wellness",
    linkText: "Browse Wellness Guides",
    image: "/images/home/wellness.png",
    alt: "Traditional Chinese medicine apothecary shelf with dried herbs",
    reverse: true,
  },
]

export default function HomeClient() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Hero - split layout */}
        <section className="relative mesh-hero overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="lotus-divider mb-6 justify-center lg:justify-start">
                  <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">EastType</span>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-hero text-text mb-5">
                  What&apos;s Your Chinese Medicine Body Type?
                </h1>
                <p className="text-sm sm:text-base text-text2 max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Why are you always tired, cold, or bloated? Your body type has the answer. Take a free 5-minute quiz based on 3,000 years of Eastern body wisdom.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link
                    href="/quiz"
                    className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(168,135,64,0.2)] hover:shadow-[0_12px_40px_rgba(168,135,64,0.3)]"
                    style={{ background: "linear-gradient(135deg, #C9A355, #E0C878, #C9A355)", color: "#1A1410" }}
                  >
                    Take the Free Quiz
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                  </Link>
                  <p className="text-xs text-text2/60">5 minutes &middot; No sign-up required</p>
                </div>
              </div>

              {/* Hero image placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-elevated bg-gradient-to-br from-[rgba(201,163,85,0.08)] to-[rgba(201,163,85,0.02)] border border-[rgba(201,163,85,0.15)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex flex-wrap gap-2 justify-center mb-4 max-w-xs mx-auto">
                    {BODY_TYPES.map((bt) => (
                      <div
                        key={bt.slug}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                        style={{ backgroundColor: bt.color }}
                        title={bt.name}
                      >
                        {bt.name.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-text2/50">9 Body Types &middot; Hero image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three-step narrative: 问 -> 辨 -> 调 */}
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">How It Works</p>
            <h2 className="font-[family-name:var(--font-display)] text-display text-text mb-3">
              The ancient art of asking your body
            </h2>
            <p className="text-text2 text-sm max-w-xl mx-auto leading-relaxed">
              Chinese medicine uses four diagnostic methods. We modernized the most important one: asking the right questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card-elevated rounded-2xl p-6 h-full bg-[var(--color-card-bg)] border border-[rgba(201,163,85,0.12)]">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-[family-name:var(--font-display)] text-4xl text-accent/30 font-bold">{s.step}</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-[family-name:var(--font-display)] text-2xl text-text font-bold">{s.chinese}</span>
                      <span className="text-xs text-text2/50 uppercase tracking-wider">{s.pinyin}</span>
                    </div>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-text mb-2">
                    {s.title} <span className="text-text2/40">&middot;</span> <span className="text-accent text-sm">{s.heading}</span>
                  </h3>
                  <p className="text-text2 text-sm leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 9 Body Types grid */}
        <section className="mesh-section py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">辨 &middot; Identify</p>
              <h2 className="font-[family-name:var(--font-display)] text-display text-text mb-3">
                9 body types, 1 is yours
              </h2>
              <p className="text-text2 text-sm max-w-xl mx-auto leading-relaxed">
                Each type has distinct patterns in energy, temperature, digestion, and emotions. Which one sounds like you?
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {BODY_TYPES.map((bt, i) => (
                <Reveal key={bt.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={`/types/${bt.slug}`}
                    className={`block rounded-xl border ${bt.border} ${bt.bg} p-4 sm:p-5 no-underline hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: bt.color }} />
                      <span className={`text-sm font-bold ${bt.text}`}>{bt.name}</span>
                    </div>
                    <p className="text-xs text-text2 leading-relaxed">{bt.nickname}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats / Authority section */}
        <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">调 &middot; Adjust</p>
            <h2 className="font-[family-name:var(--font-display)] text-display text-text mb-3">
              A complete wellness library
            </h2>
            <p className="text-text2 text-sm max-w-xl mx-auto leading-relaxed">
              Personalized guidance backed by 3,000 years of Chinese medicine wisdom, organized for your body type.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link
                  href={stat.link}
                  className="block text-center card-elevated rounded-xl p-5 no-underline bg-[var(--color-card-bg)] border border-[rgba(201,163,85,0.12)]"
                >
                  <div className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-text2 leading-tight">{stat.label}</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Content blocks - existing */}
        {CONTENT_BLOCKS.map((block, i) => (
          <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <section className="max-w-4xl mx-auto px-6 py-10 sm:py-14">
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${block.reverse ? "sm:grid-flow-col-dense" : ""}`}>
                <div className={block.reverse ? "sm:col-start-2 sm:row-start-1" : ""}>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-2">
                    {block.title}
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-display text-text mb-4">
                    {block.heading}
                  </h2>
                  <p className="text-text2 text-sm sm:text-base leading-relaxed mb-6">
                    {block.description}
                  </p>
                  <Link
                    href={block.link}
                    className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline tracking-wide no-underline"
                  >
                    {block.linkText}
                    <span>&#8594;</span>
                  </Link>
                </div>
                <div className={block.reverse ? "sm:col-start-1 sm:row-start-1" : ""}>
                  <div className="aspect-square rounded-2xl overflow-hidden card-elevated">
                    <Image
                      src={block.image}
                      alt={block.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        ))}

        {/* Final CTA */}
        <section className="mesh-hero py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-display text-text mb-4">
              Your body has been talking.
              <br />
              <span className="text-accent">Are you ready to listen?</span>
            </h2>
            <p className="text-text2 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Take the free 5-minute quiz. Discover your Chinese medicine body type. Get personalized food therapy, daily rhythm, and seasonal guidance.
            </p>
            <Link
              href="/quiz"
              className="group relative inline-flex items-center justify-center px-12 py-4 rounded-2xl font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(168,135,64,0.2)] hover:shadow-[0_12px_40px_rgba(168,135,64,0.3)]"
              style={{ background: "linear-gradient(135deg, #C9A355, #E0C878, #C9A355)", color: "#1A1410" }}
            >
              Take the Free Quiz
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <p className="text-xs text-text2/60 mt-3">5 minutes &middot; No sign-up required &middot; Free results</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
