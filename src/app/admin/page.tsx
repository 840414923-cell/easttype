"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const PromoImageGenerator = dynamic(() => import("@/components/promo-image-generator"), { ssr: false })

const CHANNELS: Record<string, string> = {
  A7: "Instagram",
  B3: "Reddit",
  C1: "TikTok",
  D5: "Twitter / X",
  E9: "YouTube",
  F2: "Other / Manual",
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const [genChannel, setGenChannel] = useState("A7")
  const [genCount, setGenCount] = useState("5")
  const [generating, setGenerating] = useState(false)
  const [generatedCodes, setGeneratedCodes] = useState<string[]>([])

  const [stats, setStats] = useState<Record<string, { total: number; used: number; unused: number }> | null>(null)
  const [codes, setCodes] = useState<Array<{
    code: string
    channel: string
    status: string
    usedByType?: string
    usedBySex?: string
    usedAt?: string
    createdAt: string
  }> | null>(null)
  const [loading, setLoading] = useState(false)

  const [tab, setTab] = useState<"codes" | "images">("codes")

  const headers = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${password}` })

  function handleLogin() {
    setLoginError("")
    if (!password) {
      setLoginError("Enter password")
      return
    }
    setAuthed(true)
    fetchData()
  }

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch("/api/admin/stats", { headers: headers() })
      if (res.status === 401) {
        setAuthed(false)
        setLoginError("Wrong password")
        return
      }
      const data = await res.json()
      setStats(data.stats || {})
      setCodes(data.codes || [])
    } catch {
      console.error("Failed to fetch stats")
    } finally {
      setLoading(false)
    }
  }

  async function handleGenerate() {
    setGenerating(true)
    setGeneratedCodes([])
    try {
      const res = await fetch("/api/admin/generate", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ channel: genChannel, count: Number(genCount) }),
      })
      if (res.status === 401) {
        setAuthed(false)
        return
      }
      const data = await res.json()
      setGeneratedCodes(data.codes || [])
      await fetchData()
    } catch {
      console.error("Failed to generate")
    } finally {
      setGenerating(false)
    }
  }

  function copyCodes() {
    navigator.clipboard.writeText(generatedCodes.join("\n"))
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0d0a]">
        <div className="w-80 space-y-4">
          <h1 className="text-xl font-bold text-[#e8dcc8] text-center">EastType Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            className="w-full px-4 py-2.5 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C9A355]"
          />
          {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
          <button
            onClick={handleLogin}
            className="w-full py-2.5 rounded bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853]"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f0d0a] text-[#e8dcc8] p-6">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#C9A355]">EastType Admin</h1>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#1e1a14] rounded-lg border border-[#2a2418] overflow-hidden">
              <button
                onClick={() => setTab("codes")}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${tab === "codes" ? "bg-[#C9A355] text-[#0f0d0a] font-bold" : "text-[#7a6e5e] hover:text-[#e8dcc8]"}`}
              >
                Invite Codes
              </button>
              <button
                onClick={() => setTab("images")}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${tab === "images" ? "bg-[#C9A355] text-[#0f0d0a] font-bold" : "text-[#7a6e5e] hover:text-[#e8dcc8]"}`}
              >
                Promo Images
              </button>
            </div>
            <button
              onClick={fetchData}
              className="px-4 py-2 rounded bg-[#2a2418] text-sm cursor-pointer hover:bg-[#3a3428]"
            >
              Refresh
            </button>
          </div>
        </div>

        {tab === "codes" && (
        <>
        {stats && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Channel Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(stats).map(([ch, s]) => (
                <div key={ch} className="bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
                  <div className="text-sm text-[#7a6e5e]">{ch} ({CHANNELS[ch] || "Unknown"})</div>
                  <div className="text-2xl font-bold text-[#C9A355] mt-1">{s.used} / {s.total}</div>
                  <div className="text-xs text-[#7a6e5e] mt-1">{s.unused} remaining</div>
                </div>
              ))}
              {Object.keys(stats).length === 0 && (
                <p className="text-[#7a6e5e] col-span-3">No codes yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Generate */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Generate Codes</h2>
          <div className="flex gap-3 items-end">
            <div>
              <label className="text-xs text-[#7a6e5e] block mb-1">Channel</label>
              <select
                value={genChannel}
                onChange={(e) => setGenChannel(e.target.value)}
                className="px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none"
              >
                {Object.entries(CHANNELS).map(([code, name]) => (
                  <option key={code} value={code}>{code} ({name})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-[#7a6e5e] block mb-1">Count</label>
              <input
                type="number"
                min="1"
                max="50"
                value={genCount}
                onChange={(e) => setGenCount(e.target.value)}
                className="w-20 px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="px-6 py-2 rounded bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50"
            >
              {generating ? "..." : "Generate"}
            </button>
          </div>

          {generatedCodes.length > 0 && (
            <div className="mt-4 bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Generated ({genChannel}):</span>
                <button onClick={copyCodes} className="text-xs text-[#C9A355] cursor-pointer hover:underline">Copy all</button>
              </div>
              <div className="space-y-1">
                {generatedCodes.map((c) => (
                  <div key={c} className="font-mono text-sm text-[#e8dcc8]">{c}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* All codes */}
        {codes && (
          <div>
            <h2 className="text-lg font-semibold mb-3">All Codes ({codes.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#7a6e5e] text-left border-b border-[#2a2418]">
                    <th className="py-2 px-3">Code</th>
                    <th className="py-2 px-3">Channel</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Used By</th>
                    <th className="py-2 px-3">Used At</th>
                  </tr>
                </thead>
                <tbody>
                  {codes
                    .sort((a, b) => {
                      if (a.status !== b.status) return a.status === "unused" ? -1 : 1
                      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    })
                    .map((c) => (
                      <tr key={c.code} className="border-b border-[#1e1a14]">
                        <td className="py-2 px-3 font-mono">{c.code}</td>
                        <td className="py-2 px-3 text-[#7a6e5e]">{c.channel}</td>
                        <td className="py-2 px-3">
                          <span className={c.status === "used" ? "text-red-400" : "text-green-400"}>
                            {c.status}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-[#7a6e5e]">
                          {c.usedByType ? `${c.usedByType} / ${c.usedBySex}` : "—"}
                        </td>
                        <td className="py-2 px-3 text-[#7a6e5e]">
                          {c.usedAt ? new Date(c.usedAt).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {loading && <p className="text-[#7a6e5e] text-center">Loading...</p>}
        </>
        )}

        {tab === "images" && (
          <PromoImageGenerator unusedCodes={codes ? codes.filter((c) => c.status === "unused").map((c) => c.code) : []} />
        )}
      </div>
    </div>
  )
}
