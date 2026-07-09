"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex-1 max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-4xl mb-4 text-accent">
        Something went wrong
      </h1>
      <p className="text-text2 mb-10">
        An unexpected error occurred. Please try again.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-r from-accent to-accent2 text-white"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold no-underline border border-accent text-accent transition-all duration-300 hover:bg-[rgba(200,16,46,0.1)]"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
