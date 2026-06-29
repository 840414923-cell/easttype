"use client"

import Link from "next/link"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"

const SYMPTOM_LIST = [
  "Why are you always tired?",
  "Why do you wake up at 3 AM?",
  "Why are you always cold?",
  "Why do you feel bloated?",
  "Why do you crave sweets?",
  "Why is your skin breaking out?",
  "Why do you have night sweats?",
  "Why do you feel anxious?",
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
    heading: "43 TCM Wellness Guides",
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

        <section className="relative max-w-4xl mx-auto px-6 pt-16 pb-12 text-center hero-radial dunhuang-border-top">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl mb-4 leading-[1.15] tracking-wide text-text max-w-2xl mx-auto">
            What&apos;s Your Chinese Medicine Body Type?
          </h1>

          <p className="text-base sm:text-lg text-text2 max-w-xl mx-auto mb-8 leading-relaxed">
            {SYMPTOM_LIST.join("  ·  ")}
          </p>

          <SearchBar />

          <div className="mt-6">
            <Link
              href="/quiz"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-[family-name:var(--font-body)] text-base font-bold cursor-pointer no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,135,64,0.25)] shadow-[0_4px_20px_rgba(168,135,64,0.1)] border border-[rgba(168,135,64,0.2)]"
              style={{ background: "linear-gradient(135deg, #C9A355, #E0C878, #C9A355)", color: "#1A1410" }}
            >
              Take the Free Quiz
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </Link>
            <p className="text-xs text-text2/60 mt-2">5 minutes · No sign-up required</p>
          </div>
        </section>

        {CONTENT_BLOCKS.map((block, i) => (
          <section key={i} className="max-w-4xl mx-auto px-6 py-10 sm:py-14">
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${block.reverse ? "sm:grid-flow-col-dense" : ""}`}>
              <div className={block.reverse ? "sm:col-start-2 sm:row-start-1" : ""}>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent block mb-2">
                  {block.title}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-text mb-4 leading-tight tracking-wide">
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
                <div className="aspect-square rounded-2xl overflow-hidden border border-[rgba(168,135,64,0.15)]">
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
        ))}

      </main>
      <Footer />
    </>
  )
}
