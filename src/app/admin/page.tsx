"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { SYMPTOMS } from "@/lib/symptoms-data"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"
import {
  generateSymptomCard,
  generateVideoScript,
  getRandomUnusedSlug,
  getSlugsByType,
  type CtaType,
  type AspectRatio,
  type ScriptType,
  type GeneratedCard,
  type GeneratedScript,
} from "@/lib/prompt-generator"

const ContentStudio = dynamic(() => import("@/components/content-studio"), { ssr: false })

const CHANNELS: Record<string, string> = {
  A7: "Instagram",
  B3: "Reddit",
  C1: "TikTok",
  D5: "Twitter / X",
  E9: "YouTube",
  F2: "其他/手动",
}

type Tab = "codes" | "studio" | "leads" | "cardgen"

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

  const [tab, setTab] = useState<Tab>("codes")

  const [leads, setLeads] = useState<Array<{ email: string; source: string; timestamp: string }> | null>(null)
  const [leadsLoading, setLeadsLoading] = useState(false)

  const [genCta, setGenCta] = useState<CtaType>("none")
  const [genRatio, setGenRatio] = useState<AspectRatio>("9:16")
  const [genFilter, setGenFilter] = useState<ConstitutionId | "all">("all")
  const [genResult, setGenResult] = useState<GeneratedCard | null>(null)
  const [genScriptType, setGenScriptType] = useState<ScriptType>("daily")
  const [genScript, setGenScript] = useState<GeneratedScript | null>(null)
  const [genDone, setGenDone] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set()
    try {
      const s = localStorage.getItem("et_cardgen_done")
      return s ? new Set(JSON.parse(s)) : new Set()
    } catch {
      return new Set()
    }
  })
  const [genFoodHistory, setGenFoodHistory] = useState<Record<string, string[]>>(() => {
    if (typeof window === "undefined") return {}
    try {
      const s = localStorage.getItem("et_cardgen_foods")
      return s ? JSON.parse(s) : {}
    } catch {
      return {}
    }
  })
  const [copiedGen, setCopiedGen] = useState<string | null>(null)
  const [genError, setGenError] = useState<string | null>(null)

  const headers = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${password}` })

  function handleLogin() {
    setLoginError("")
    if (!password) {
      setLoginError("请输入密码")
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
        setLoginError("密码错误")
        return
      }
      const data = await res.json()
      setStats(data.stats || {})
      setCodes(data.codes || [])
    } catch {
      console.error("获取数据失败")
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
      console.error("生成失败")
    } finally {
      setGenerating(false)
    }
  }

  function copyCodes() {
    navigator.clipboard.writeText(generatedCodes.join("\n"))
  }

  async function fetchLeads() {
    setLeadsLoading(true)
    try {
      const res = await fetch("/api/lead-magnet", { headers: headers() })
      if (res.status === 401) {
        setAuthed(false)
        return
      }
      const data = await res.json()
      setLeads(data.emails || [])
    } catch {
      console.error("获取邮件失败")
    } finally {
      setLeadsLoading(false)
    }
  }

  function exportLeadsCsv() {
    if (!leads || leads.length === 0) return
    const csv = [
      "Email,Source,Date",
      ...leads.map((l) =>
        `"${l.email}","${l.source || ""}","${new Date(l.timestamp).toLocaleString("zh-CN")}"`
      ),
    ].join("\n")
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  function switchTab(t: Tab) {
    setTab(t)
    if (t === "leads" && leads === null) {
      fetchLeads()
    }
  }

  function markCardDone(slug: string, foods: string[]) {
    setGenDone((prev) => {
      const next = new Set(prev)
      next.add(slug)
      try {
        localStorage.setItem("et_cardgen_done", JSON.stringify([...next]))
      } catch {
        /* noop */
      }
      return next
    })
    setGenFoodHistory((prev) => {
      const next = { ...prev, [slug]: foods }
      try {
        localStorage.setItem("et_cardgen_foods", JSON.stringify(next))
      } catch {
        /* noop */
      }
      return next
    })
  }

  function handleGenerateCard() {
    setGenError(null)
    try {
      let slug: string | null = null
      if (genFilter === "all") {
        slug = getRandomUnusedSlug(genDone)
      } else {
        const slugs = getSlugsByType(genFilter as ConstitutionId, genDone)
        if (slugs.length > 0) {
          slug = slugs[Math.floor(Math.random() * slugs.length)]
        }
      }
      if (!slug) {
        setGenResult(null)
        setGenError("该筛选下没有未完成的症状了，试试其他体质或重置进度")
        return
      }
      const excludeFoods = genFoodHistory[slug] || []
      const result = generateSymptomCard(slug, genCta, genRatio, excludeFoods)
      if (!result) {
        setGenError("生成失败：找不到症状数据")
        return
      }
      setGenResult(result)
      const script = generateVideoScript(slug, genScriptType)
      setGenScript(script)
    } catch (err: any) {
      setGenError(`生成出错：${err?.message || err}`)
    }
  }

  function handleCopyGen(label: string, text: string) {
    navigator.clipboard.writeText(text)
    setCopiedGen(label)
    setTimeout(() => setCopiedGen(null), 2000)
  }

  useEffect(() => {
    if (tab === "cardgen" && !genResult && !genError && genDone.size < Object.keys(SYMPTOMS).length) {
      handleGenerateCard()
    }
  }, [tab])

  const unusedCodes = codes ? codes.filter((c) => c.status === "unused").map((c) => c.code) : []

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0d0a]">
        <div className="w-80 space-y-4">
          <h1 className="text-xl font-bold text-[#e8dcc8] text-center">EastType 后台管理</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="输入密码"
            className="w-full px-4 py-2.5 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C9A355]"
          />
          {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
          <button
            onClick={handleLogin}
            className="w-full py-2.5 rounded bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853]"
          >
            登录
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f0d0a] text-[#e8dcc8] p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-2xl font-bold text-[#C9A355]">EastType 后台管理</h1>
          <div className="flex items-center gap-3">
            <div className="flex bg-[#1e1a14] rounded-lg border border-[#2a2418] overflow-hidden">
              {([
                ["codes", "激活码管理"],
                ["studio", "内容工厂"],
                ["leads", "邮件列表"],
                ["cardgen", "症状卡生成器"],
              ] as [Tab, string][]).map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => switchTab(id)}
                  className={`px-5 py-2.5 text-sm cursor-pointer transition-colors ${tab === id ? "bg-[#C9A355] text-[#0f0d0a] font-bold" : "text-[#7a6e5e] hover:text-[#e8dcc8]"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={fetchData}
              className="px-4 py-2 rounded bg-[#2a2418] text-sm cursor-pointer hover:bg-[#3a3428]"
            >
              刷新
            </button>
          </div>
        </div>

        {tab === "codes" && (
        <>
        {stats && (
          <div>
            <h2 className="text-lg font-semibold mb-3">渠道统计</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(stats).map(([ch, s]) => (
                <div key={ch} className="bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
                  <div className="text-sm text-[#7a6e5e]">{ch} ({CHANNELS[ch] || "未知"})</div>
                  <div className="text-2xl font-bold text-[#C9A355] mt-1">已用 {s.used} / 总计 {s.total}</div>
                  <div className="text-xs text-[#7a6e5e] mt-1">剩余 {s.unused} 个</div>
                </div>
              ))}
              {Object.keys(stats).length === 0 && (
                <p className="text-[#7a6e5e] col-span-3">暂无激活码</p>
              )}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold mb-3">生成激活码</h2>
          <div className="flex gap-3 items-end">
            <div>
              <label className="text-xs text-[#7a6e5e] block mb-1">渠道</label>
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
              <label className="text-xs text-[#7a6e5e] block mb-1">数量</label>
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
              {generating ? "生成中..." : "生成"}
            </button>
          </div>

          {generatedCodes.length > 0 && (
            <div className="mt-4 bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">已生成 ({genChannel})：</span>
                <button onClick={copyCodes} className="text-xs text-[#C9A355] cursor-pointer hover:underline">复制全部</button>
              </div>
              <div className="space-y-1">
                {generatedCodes.map((c) => (
                  <div key={c} className="font-mono text-sm text-[#e8dcc8]">{c}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        {codes && (
          <div>
            <h2 className="text-lg font-semibold mb-3">全部激活码 ({codes.length})</h2>
            {(() => {
              const sorted = [...codes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              const groups: Record<string, Array<typeof codes[0]>> = {}
              for (const c of sorted) {
                const date = new Date(c.createdAt).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" })
                if (!groups[date]) groups[date] = []
                groups[date].push(c)
              }
              return Object.entries(groups).map(([date, group]) => (
                <div key={date} className="mb-4">
                  <div className="flex items-center justify-between mb-2 px-3">
                    <span className="text-sm font-bold text-[#C9A355]">{date}</span>
                    <span className="text-xs text-[#7a6e5e]">
                      {group.filter((c) => c.status === "unused").length} 未使用 / {group.length} 总计
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-[#7a6e5e] text-left border-b border-[#2a2418]">
                          <th className="py-1.5 px-3">激活码</th>
                          <th className="py-1.5 px-3">渠道</th>
                          <th className="py-1.5 px-3">状态</th>
                          <th className="py-1.5 px-3">使用者</th>
                          <th className="py-1.5 px-3">使用时间</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.map((c) => (
                          <tr key={c.code} className={`border-b border-[#1e1a14] ${c.status === "used" ? "opacity-50" : ""}`}>
                            <td className="py-1.5 px-3 font-mono">{c.code}</td>
                            <td className="py-1.5 px-3 text-[#7a6e5e]">{c.channel}</td>
                            <td className="py-1.5 px-3">
                              <span className={c.status === "used" ? "text-red-400" : "text-green-400"}>
                                {c.status === "used" ? "已使用" : "未使用"}
                              </span>
                            </td>
                            <td className="py-1.5 px-3 text-[#7a6e5e]">
                              {c.usedByType ? `${c.usedByType} / ${c.usedBySex}` : "—"}
                            </td>
                            <td className="py-1.5 px-3 text-[#7a6e5e]">
                              {c.usedAt ? new Date(c.usedAt).toLocaleDateString("zh-CN") : "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            })()}
          </div>
        )}

        {loading && <p className="text-[#7a6e5e] text-center">加载中...</p>}
        </>
        )}

        {tab === "leads" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">
                邮件列表 {leads && <span className="text-[#7a6e5e] text-sm">({leads.length})</span>}
              </h2>
              <div className="flex gap-2">
                {leads && leads.length > 0 && (
                  <button
                    onClick={exportLeadsCsv}
                    className="px-4 py-2 rounded bg-[#C9A355] text-[#0f0d0a] text-sm font-bold cursor-pointer hover:bg-[#d4a853]"
                  >
                    导出 CSV
                  </button>
                )}
                <button
                  onClick={fetchLeads}
                  className="px-4 py-2 rounded bg-[#2a2418] text-sm cursor-pointer hover:bg-[#3a3428]"
                >
                  刷新
                </button>
              </div>
            </div>

            {leadsLoading && <p className="text-[#7a6e5e] text-center py-8">加载中...</p>}

            {!leadsLoading && leads && leads.length === 0 && (
              <p className="text-[#7a6e5e] text-center py-8">暂无邮件</p>
            )}

            {leads && leads.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[#7a6e5e] text-left border-b border-[#2a2418]">
                      <th className="py-2 px-3">邮箱</th>
                      <th className="py-2 px-3">来源</th>
                      <th className="py-2 px-3">时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l, i) => (
                      <tr key={i} className="border-b border-[#1e1a14]">
                        <td className="py-2 px-3 text-[#e8dcc8]">{l.email}</td>
                        <td className="py-2 px-3 text-[#7a6e5e]">{l.source || "—"}</td>
                        <td className="py-2 px-3 text-[#7a6e5e]">
                          {new Date(l.timestamp).toLocaleString("zh-CN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === "cardgen" && (() => {
          const totalSymptoms = Object.keys(SYMPTOMS).length
          const doneCount = genDone.size
          const remaining = totalSymptoms - doneCount
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  症状卡生成器
                  <span className="text-[#7a6e5e] text-sm ml-2">
                    已完成 {doneCount}/{totalSymptoms} · 剩余 {remaining}
                  </span>
                </h2>
                {doneCount > 0 && (
                  <button
                    onClick={() => {
                      setGenDone(new Set())
                      setGenFoodHistory({})
                      try {
                        localStorage.removeItem("et_cardgen_done")
                        localStorage.removeItem("et_cardgen_foods")
                      } catch { /* noop */ }
                    }}
                    className="text-xs text-[#7a6e5e] cursor-pointer hover:text-[#C9A355]"
                  >
                    重置进度
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-[#7a6e5e] mb-2 block">CTA 类型</label>
                  <div className="flex gap-2">
                    {([
                      ["none", "纯价值图", "70%"],
                      ["brand", "品牌图", "20%"],
                      ["cta", "CTA图", "10%"],
                    ] as [CtaType, string, string][]).map(([val, label, pct]) => (
                      <button
                        key={val}
                        onClick={() => setGenCta(val)}
                        className={`flex-1 py-2 rounded-lg text-xs cursor-pointer transition-all ${
                          genCta === val
                            ? "bg-[#C9A355] text-[#0f0d0a] font-bold"
                            : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
                        }`}
                      >
                        {label}
                        <span className="block text-[9px] opacity-60">{pct}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#7a6e5e] mb-2 block">图片比例</label>
                  <div className="flex gap-2">
                    {([
                      ["9:16", "9:16", "IG Story"],
                      ["2:3", "2:3", "Pinterest"],
                      ["1:1", "1:1", "IG Post"],
                    ] as [AspectRatio, string, string][]).map(([val, label, hint]) => (
                      <button
                        key={val}
                        onClick={() => setGenRatio(val)}
                        className={`flex-1 py-2 rounded-lg text-xs cursor-pointer transition-all ${
                          genRatio === val
                            ? "bg-[#C9A355] text-[#0f0d0a] font-bold"
                            : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
                        }`}
                      >
                        {label}
                        <span className="block text-[9px] opacity-60">{hint}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#7a6e5e] mb-2 block">体质筛选</label>
                  <select
                    value={genFilter}
                    onChange={(e) => setGenFilter(e.target.value as ConstitutionId | "all")}
                    className="w-full px-3 py-2 rounded-lg bg-[#1e1a14] text-[#e8dcc8] border border-[#2a2418] outline-none text-sm"
                  >
                    <option value="all">全部（随机）</option>
                    {Object.values(TYPES).map((t) => (
                      <option key={t.id} value={t.id}>{t.zh} ({t.en})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-[#7a6e5e] mb-2 block">口播稿类型</label>
                <div className="flex gap-2">
                  {([
                    ["daily", "日常解读型", "症状→道理→茶饮→金句"],
                    ["mythbust", "认知颠覆型", "同一症状两种体质两种解法"],
                  ] as [ScriptType, string, string][]).map(([val, label, hint]) => (
                    <button
                      key={val}
                      onClick={() => setGenScriptType(val)}
                      className={`flex-1 py-2 rounded-lg text-xs cursor-pointer transition-all ${
                        genScriptType === val
                          ? "bg-[#C9A355] text-[#0f0d0a] font-bold"
                          : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
                      }`}
                    >
                      {label}
                      <span className="block text-[9px] opacity-60">{hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleGenerateCard}
                  className="flex-1 py-3 rounded-lg bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] text-sm"
                >
                  {remaining === 0 ? "全部已完成！" : "换一条"}
                </button>
              </div>

              {genError && (
                <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 text-sm text-red-300">
                  {genError}
                </div>
              )}

              {genResult && (
                <div className="space-y-4 bg-[#1e1a14] border border-[#2a2418] rounded-lg p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#C9A355]">{genResult.title}</h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#2a2418] text-[#7a6e5e]">{genResult.slug}</span>
                  </div>

                  <div className="text-xs text-[#7a6e5e] space-y-1">
                    <p><span className="text-[#C9A355] font-bold">Cause:</span> {genResult.cause}</p>
                    <p><span className="text-[#C9A355] font-bold">Symptoms:</span> {genResult.symptoms.join(" · ")}</p>
                    <p><span className="text-[#C9A355] font-bold">Foods:</span> {genResult.foods.map((f) => `${f.en} (${f.zh})`).join(", ")}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#C9A355] uppercase tracking-wider">Image2 画图提示词</span>
                      <button
                        onClick={() => handleCopyGen("prompt", genResult.imagePrompt)}
                        className="text-[10px] text-[#C9A355] cursor-pointer hover:underline"
                      >
                        {copiedGen === "prompt" ? "已复制 ✓" : "复制"}
                      </button>
                    </div>
                    <pre className="text-xs text-[#b5a890] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap max-h-[200px] overflow-y-auto">
                      {genResult.imagePrompt}
                    </pre>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#C9A355] uppercase tracking-wider">Pinterest 文案</span>
                      <button
                        onClick={() => handleCopyGen("pin", `${genResult.caption}\n\n${genResult.hashtags}`)}
                        className="text-[10px] text-[#C9A355] cursor-pointer hover:underline"
                      >
                        {copiedGen === "pin" ? "已复制 ✓" : "复制"}
                      </button>
                    </div>
                    <pre className="text-xs text-[#b5a890] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap">
                      {genResult.caption}
                    </pre>
                    <p className="text-[10px] text-[#7a6e5e] mt-1">{genResult.hashtags}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#C9A355] uppercase tracking-wider">Instagram 文案</span>
                      <button
                        onClick={() => handleCopyGen("ig", `${genResult.igCaption}\n\n${genResult.igHashtags}`)}
                        className="text-[10px] text-[#C9A355] cursor-pointer hover:underline"
                      >
                        {copiedGen === "ig" ? "已复制 ✓" : "复制"}
                      </button>
                    </div>
                    <pre className="text-xs text-[#b5a890] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap">
                      {genResult.igCaption}
                    </pre>
                    <p className="text-[10px] text-[#7a6e5e] mt-1">{genResult.igHashtags}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#C9A355] uppercase tracking-wider">X (Twitter) 文案</span>
                      <button
                        onClick={() => handleCopyGen("x", `${genResult.xCaption}\n\n${genResult.xHashtags}`)}
                        className="text-[10px] text-[#C9A355] cursor-pointer hover:underline"
                      >
                        {copiedGen === "x" ? "已复制 ✓" : "复制"}
                      </button>
                    </div>
                    <pre className="text-xs text-[#b5a890] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap">
                      {genResult.xCaption}
                    </pre>
                    <p className="text-[10px] text-[#7a6e5e] mt-1">{genResult.xHashtags}</p>
                  </div>

                  {genScript && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-[#C9A355] uppercase tracking-wider">
                          口播稿 {genScript.type === "daily" ? "（日常解读型）" : "（认知颠覆型）"}
                        </span>
                        <button
                          onClick={() => handleCopyGen("script", `${genScript.en}\n\n---\n\n${genScript.zh}`)}
                          className="text-[10px] text-[#C9A355] cursor-pointer hover:underline"
                        >
                          {copiedGen === "script" ? "已复制 ✓" : "复制全文"}
                        </button>
                      </div>
                      <pre className="text-xs text-[#b5a890] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap mb-2">
{genScript.en}
                      </pre>
                      <pre className="text-xs text-[#7a6e5e] bg-[#0f0d0a] rounded p-3 leading-relaxed whitespace-pre-wrap">
{genScript.zh}
                      </pre>
                    </div>
                  )}

                  <button
                    onClick={() => markCardDone(genResult.slug, genResult.foods.map((f) => f.en))}
                    className="w-full py-2 rounded-lg bg-green-800 text-green-200 font-bold cursor-pointer hover:bg-green-700 text-sm"
                  >
                    标记已完成 ✓
                  </button>
                </div>
              )}

              {doneCount > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">已完成 ({doneCount})</h3>
                  <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto">
                    {[...genDone].map((slug) => (
                      <span key={slug} className="text-[9px] px-2 py-1 rounded bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] opacity-60">
                        {slug.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })()}

        {tab === "studio" && (
          <ContentStudio unusedCodes={unusedCodes} />
        )}
      </div>
    </div>
  )
}
