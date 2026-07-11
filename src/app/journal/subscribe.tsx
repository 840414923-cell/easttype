"use client"

import { useState } from "react"

export default function JournalSubscribe() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "journal" }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section className="mt-12 border border-accent/20 rounded-2xl p-8 text-center bg-accent/5">
        <p className="text-text font-medium text-sm">
          You are subscribed. Watch your inbox for our monthly journal digest.
        </p>
      </section>
    )
  }

  return (
    <section className="mt-12 border border-accent/20 rounded-2xl p-8 bg-accent/5">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-2">
            Monthly Journal Digest
          </h2>
          <p className="text-sm text-text2 leading-relaxed">
            Get our latest TCM insights delivered once a month. No spam, just seasonal wisdom for your body type.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 sm:w-64 px-4 py-2.5 rounded-lg border border-border bg-white text-sm text-text placeholder:text-text2/40 focus:outline-none focus:border-accent/40"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="flex-shrink-0 px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500 mt-3 text-center sm:text-left">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  )
}
