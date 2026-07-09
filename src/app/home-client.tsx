"use client"

import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import Reveal from "@/components/reveal"

const STEPS = [
  {
    num: "01",
    char: "问",
    pinyin: "Wèn",
    title: "Ask",
    desc: "27 questions based on 3,000 years of TCM inquiry diagnosis.",
  },
  {
    num: "02",
    char: "辨",
    pinyin: "Biàn",
    title: "Identify",
    desc: "9 body types mapped to your unique constitution.",
  },
  {
    num: "03",
    char: "调",
    pinyin: "Tiáo",
    title: "Adjust",
    desc: "Personalized food, herbs, and lifestyle guidance.",
  },
]

const STATS = [
  { number: "9", label: "Body Types", link: "/types/balanced" },
  { number: "70", label: "Symptom Guides", link: "/symptoms" },
  { number: "116", label: "Herb Profiles", link: "/herbs" },
  { number: "53", label: "Wellness Articles", link: "/wellness" },
  { number: "10", label: "Food Guides", link: "/foods-for" },
  { number: "5", label: "Solution Programs", link: "/solutions" },
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

        {/* ── Hero ── */}
        <section className="relative mesh-hero overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="lotus-divider mb-6 justify-center lg:justify-start">
                  <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">EastType</span>
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-hero text-text mb-5">
                  What&apos;s Your Chinese Medicine Body Type?
                </h1>
                <p className="text-text2 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Why are you always tired, cold, or bloated? Your body type has the answer. Take a free 5-minute quiz based on 3,000 years of Eastern body wisdom.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link
                    href="/quiz"
                    className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #C8102E, #DC2626, #C8102E)", color: "#FFFFFF" }}
                  >
                    Take the Free Quiz
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                  </Link>
                  <p className="text-xs text-text2/60">5 min &middot; No sign-up</p>
                </div>
              </div>

              {/* Hero image placeholder */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F9F6F1] border border-[rgba(200,16,46,0.12)]">
                <Image
                  src="/images/home/body-types.png"
                  alt="Chinese medicine body types"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Three-step flow: 问 辨 调 ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">How It Works</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                The ancient art of asking your body
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Chinese medicine uses four diagnostic methods. We modernized the most important one.
              </p>
            </div>

            {/* Step flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {STEPS.map((s, i) => (
                <div key={s.num} className="relative text-center">
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-[rgba(200,16,46,0.2)]" />
                  )}

                  <div className="relative inline-flex flex-col items-center mb-4">
                    <span className="font-[family-name:var(--font-display)] text-xs text-accent/40 font-bold mb-1">{s.num}</span>
                    <span className="font-[family-name:var(--font-display)] text-5xl text-text font-bold leading-none">{s.char}</span>
                    <span className="text-[10px] text-text2/40 uppercase tracking-wider mt-1">{s.pinyin}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-text font-semibold mb-2">{s.title}</h3>
                  <p className="text-text2 text-sm leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/quiz"
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #C8102E, #DC2626, #C8102E)", color: "#FFFFFF" }}
              >
                Start with the Quiz
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 辨: Body Types ── */}
        <section className="mesh-section py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">辨 &middot; Identify</p>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                  9 body types,
                  <br />
                  <span className="text-accent">1 is yours</span>
                </h2>
                <p className="text-text2 text-sm sm:text-base leading-relaxed mb-6">
                  Each type has distinct patterns in energy, temperature, digestion, and emotions. From the gentle Qi Deficient to the balanced Clear Stream, your constitution shapes how you feel every day.
                </p>
                <Link
                  href="/wellness/chinese-medicine-body-types"
                  className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline tracking-wide no-underline"
                >
                  Explore Body Types
                  <span>&#8594;</span>
                </Link>
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden card-elevated">
                <Image
                  src="/images/home/body-types.png"
                  alt="Nine Chinese medicine body types"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 调: Stats / Library ── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">调 &middot; Adjust</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
                A complete wellness library
              </h2>
              <p className="text-text2 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Personalized guidance backed by 3,000 years of Chinese medicine wisdom, organized for your body type.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={stat.link}
                    className="block text-center group no-underline"
                  >
                    <div className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs text-text2 leading-tight">{stat.label}</div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Content blocks ── */}
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

        {/* ── Final CTA ── */}
        <section className="mesh-hero py-20 sm:py-28">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-text mb-4 tracking-tight">
              Your body has been talking.
              <br />
              <span className="text-accent">Are you ready to listen?</span>
            </h2>
            <p className="text-text2 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Take the free 5-minute quiz. Discover your Chinese medicine body type. Get personalized food therapy, daily rhythm, and seasonal guidance.
            </p>
            <Link
              href="/quiz"
              className="group inline-flex items-center justify-center px-10 py-4 rounded-full font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #C8102E, #DC2626, #C8102E)", color: "#FFFFFF" }}
            >
              Take the Free Quiz
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <p className="text-xs text-text2/60 mt-3">5 min &middot; No sign-up &middot; Free results</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
