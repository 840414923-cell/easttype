"use client"

import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-7xl mb-4 gold-gradient-text">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-display)] text-2xl mb-6 text-text">
          Page Not Found
        </h2>
        <p className="text-text2 mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-[family-name:var(--font-body)] text-sm font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-bg"
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </>
  )
}
