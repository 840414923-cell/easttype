"use client"

import { useState } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export default function CampAuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      setError("Camp authentication requires Supabase setup. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local")
      return
    }

    setLoading(true)
    try {
      const { createClient } = await import("@/lib/camp/supabase-client")
      const supabase = createClient()

      if (mode === "register") {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setError("Check your email for a confirmation link.")
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        window.location.href = "/camp/dashboard"
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-md mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-2xl text-text mb-2 tracking-tight">
            {mode === "register" ? "Create Your Camp Account" : "Welcome Back"}
          </h1>
          <p className="text-text2 text-sm">
            {mode === "register"
              ? "Sign up to join the 30-day Energy Recovery Camp"
              : "Log in to continue your camp journey"}
          </p>
        </div>

        <div className="bg-[var(--color-card-bg)] rounded-2xl border border-[rgba(140,45,42,0.12)] p-6">
          {/* Mode toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                mode === "register"
                  ? "bg-[rgba(140,45,42,0.1)] text-accent border border-[rgba(140,45,42,0.3)]"
                  : "text-text2 border border-transparent hover:text-text"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                mode === "login"
                  ? "bg-[rgba(140,45,42,0.1)] text-accent border border-[rgba(140,45,42,0.3)]"
                  : "text-text2 border border-transparent hover:text-text"
              }`}
            >
              Log In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-text2/60 uppercase tracking-wider block mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[rgba(140,45,42,0.12)] text-text text-sm focus:outline-none focus:border-[rgba(140,45,42,0.4)]"
              />
            </div>
            <div>
              <label className="text-xs text-text2/60 uppercase tracking-wider block mb-1.5">Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[rgba(140,45,42,0.12)] text-text text-sm focus:outline-none focus:border-[rgba(140,45,42,0.4)]"
              />
            </div>

            {error && (
              <p className="text-xs text-orange-600 bg-[rgba(180,80,40,0.06)] border border-[rgba(180,80,40,0.12)] rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full font-bold text-sm cursor-pointer no-underline transition-all hover:shadow-lg disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #A63A3A, #B84A4A, #A63A3A)", color: "#FFFFFF" }}
            >
              {loading ? "Please wait..." : mode === "register" ? "Create Account" : "Log In"}
            </button>
          </form>

          <p className="text-xs text-text2/40 text-center mt-4">
            By signing up, you agree to receive camp-related emails. No spam.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link href="/camp/energy-recovery" className="text-sm text-text2 hover:text-accent no-underline">
            {"\u2190"} Back to camp details
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
