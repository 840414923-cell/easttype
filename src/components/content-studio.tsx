"use client"

import { useState, useCallback } from "react"
import {
  PLATFORM_SIZES,
  type PlatformSize,
} from "@/lib/card-templates/platform-sizes"
import {
  SOCIAL_CONTENT,
  TEMPLATE_META,
  getContentByType,
  type TemplateType,
  type SocialContent,
} from "@/lib/card-templates/social-content"
import { renderFactCard } from "@/lib/card-templates/template-fact"
import { renderSymptomCard } from "@/lib/card-templates/template-symptom"
import { renderFoodCard } from "@/lib/card-templates/template-food"
import { renderWhichCard } from "@/lib/card-templates/template-which"
import { renderQuoteCard } from "@/lib/card-templates/template-quote"
import { generateCopy } from "@/lib/pinterest-copy"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"

const BG_OPTIONS: Array<{ id: ConstitutionId | "gradient"; label: string }> = [
  { id: "gradient", label: "\u7EDF\u8272\u6E10\u53D8" },
  ...Object.values(TYPES).map((t) => ({ id: t.id, label: `${t.zh} (${t.en})` })),
]

const TEMPLATE_RENDERERS: Record<TemplateType, (c: SocialContent, s: PlatformSize, code?: string) => Promise<string | null>> = {
  fact: renderFactCard,
  symptom: renderSymptomCard,
  food: renderFoodCard,
  which: renderWhichCard,
  quote: renderQuoteCard,
}

interface GeneratedResult {
  contentIdx: number
  platformId: string
  dataUrl: string
  content: SocialContent
}

interface Props {
  unusedCodes: string[]
}

export default function ContentStudio({ unusedCodes }: Props) {
  const [templateType, setTemplateType] = useState<TemplateType>("fact")
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [bgOverride, setBgOverride] = useState<ConstitutionId | "gradient" | undefined>(undefined)
  const [useCode, setUseCode] = useState(false)
  const [selectedCode, setSelectedCode] = useState("")
  const [generating, setGenerating] = useState(false)
  const [results, setResults] = useState<GeneratedResult[]>([])
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [customMode, setCustomMode] = useState(false)
  const [customHeadline, setCustomHeadline] = useState("")
  const [customSubtext, setCustomSubtext] = useState("")
  const [customEmoji, setCustomEmoji] = useState("")

  const filteredContent = getContentByType(templateType)
  const currentContent = customMode
    ? { type: templateType, headline: customHeadline, subtext: customSubtext, emoji: customEmoji, bgType: undefined as ConstitutionId | undefined, zh: "\u81EA\u5B9A\u4E49" }
    : filteredContent[selectedIdx]
  const effectiveBg = bgOverride ?? currentContent?.bgType ?? "gradient"
  const code = useCode ? selectedCode : undefined

  const handleTemplateChange = useCallback((t: TemplateType) => {
    setTemplateType(t)
    setSelectedIdx(0)
    setResults([])
    setCustomMode(false)
  }, [])

  async function generateSelected() {
    if (!currentContent) return
    setGenerating(true)
    setResults([])
    try {
      const content = bgOverride && bgOverride !== (currentContent.bgType ?? "gradient")
        ? { ...currentContent, bgType: bgOverride === "gradient" ? undefined : bgOverride }
        : currentContent
      const renderer = TEMPLATE_RENDERERS[templateType]
      const newResults: GeneratedResult[] = []
      for (const size of PLATFORM_SIZES) {
        const dataUrl = await renderer(content, size, code)
        if (dataUrl) {
          newResults.push({
            contentIdx: customMode ? -1 : selectedIdx,
            platformId: size.id,
            dataUrl,
            content,
          })
        }
      }
      setResults(newResults)
    } catch (err) {
      console.error("\u751F\u6210\u5931\u8D25:", err)
    } finally {
      setGenerating(false)
    }
  }

  async function generateAll() {
    setGenerating(true)
    setResults([])
    const allContent = getContentByType(templateType)
    const newResults: GeneratedResult[] = []
    for (let i = 0; i < allContent.length; i++) {
      const content = allContent[i]
      const renderer = TEMPLATE_RENDERERS[templateType]
      for (const size of PLATFORM_SIZES) {
        try {
          const dataUrl = await renderer(content, size, code)
          if (dataUrl) {
            newResults.push({
              contentIdx: i,
              platformId: size.id,
              dataUrl,
              content,
            })
          }
        } catch {
          continue
        }
      }
    }
    setResults(newResults)
    setGenerating(false)
  }

  function downloadItem(item: GeneratedResult) {
    const a = document.createElement("a")
    a.href = item.dataUrl
    const slug = item.content.headline.replace(/[^a-zA-Z ]/g, "").split(" ").slice(0, 4).join("-").toLowerCase()
    a.download = `EastType-${item.platformId}-${slug}.jpg`
    a.click()
  }

  function downloadAll() {
    for (const item of results) {
      downloadItem(item)
    }
  }

  function copyPlatformCopy(item: GeneratedResult) {
    const copy = generateCopy(item.content, item.platformId)
    const text = `${copy.title}\n\n${copy.body}\n\n${copy.hashtags.join(" ")}`
    navigator.clipboard.writeText(text)
    setCopiedKey(`${item.contentIdx}-${item.platformId}`)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Template type selector */}
      <div>
        <h2 className="text-lg font-semibold mb-3">\u6A21\u7248\u7C7B\u578B</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(Object.entries(TEMPLATE_META) as [TemplateType, typeof TEMPLATE_META[TemplateType]][]).map(([id, meta]) => (
            <button
              key={id}
              onClick={() => handleTemplateChange(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer transition-all whitespace-nowrap ${
                templateType === id
                  ? "bg-[#C9A355] text-[#0f0d0a] font-bold"
                  : "bg-[#1e1a14] text-[#7a6e5e] hover:text-[#e8dcc8] border border-[#2a2418]"
              }`}
            >
              <span className="text-lg">{meta.icon}</span>
              <span className="text-sm">{meta.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content picker */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">\u5185\u5BB9\u9009\u62E9</h2>
          <button
            onClick={() => setCustomMode(!customMode)}
            className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-all ${
              customMode
                ? "bg-[#C9A355] text-[#0f0d0a] font-bold"
                : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
            }`}
          >
            \u81EA\u5B9A\u4E49\u6587\u5B57
          </button>
        </div>

        {customMode ? (
          <div className="space-y-3 bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">\u6807\u9898 (headline)</label>
              <input
                type="text"
                value={customHeadline}
                onChange={(e) => setCustomHeadline(e.target.value)}
                placeholder="Ginger isn't good for everyone."
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C9A355] text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">\u89E3\u91CA (subtext)</label>
              <input
                type="text"
                value={customSubtext}
                onChange={(e) => setCustomSubtext(e.target.value)}
                placeholder="If your body runs hot, ginger can make things worse."
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C9A355] text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">Emoji</label>
              <input
                type="text"
                value={customEmoji}
                onChange={(e) => setCustomEmoji(e.target.value)}
                placeholder="\uD83E\uDEDA"
                className="w-20 px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C9A355] text-sm"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredContent.map((card, i) => (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                className={`p-3 rounded-lg text-left cursor-pointer transition-all border-2 ${
                  selectedIdx === i
                    ? "border-[#C9A355] bg-[rgba(201,163,85,0.08)]"
                    : "border-[#2a2418] hover:border-[#3a3428] bg-[#1e1a14]"
                }`}
              >
                <div className="flex items-center gap-2">
                  {card.emoji && <span className="text-xl">{card.emoji.split(" ")[0]}</span>}
                  <div className="text-sm font-bold text-[#e8dcc8]">{card.headline}</div>
                </div>
                <div className="text-[10px] text-[#7a6e5e] mt-1 line-clamp-1">{card.zh}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Background selector */}
      <div>
        <h2 className="text-lg font-semibold mb-3">\u80CC\u666F</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {BG_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setBgOverride(opt.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer transition-all whitespace-nowrap ${
                effectiveBg === opt.id
                  ? "border-2 border-[#C9A355] bg-[rgba(201,163,85,0.08)] text-[#C9A355] font-semibold"
                  : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
              }`}
            >
              {opt.id !== "gradient" && (
                <img
                  src={`/types/${opt.id}.png`}
                  alt={opt.label}
                  className="w-8 h-8 rounded object-cover"
                />
              )}
              <span className="text-xs">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Invite code */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            id="useCode2"
            checked={useCode}
            onChange={(e) => setUseCode(e.target.checked)}
            className="accent-[#C9A355]"
          />
          <label htmlFor="useCode2" className="text-sm text-[#e8dcc8] cursor-pointer">\u5728\u56FE\u7247\u4E0A\u6DFB\u52A0\u6FC0\u6C3B\u7801</label>
        </div>
        {useCode && (
          <div>
            {unusedCodes.length > 0 ? (
              <select
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#C9A355] border border-[#3a3428] outline-none font-mono text-sm"
              >
                <option value="">\u9009\u62E9\u6FC0\u6C3B\u7801</option>
                {unusedCodes.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            ) : (
              <p className="text-xs text-[#7a6e5e]">\u8BF7\u5148\u5728\u300C\u6FC0\u6C3B\u7801\u7BA1\u7406\u300D\u4E2D\u751F\u6210\u7801</p>
            )}
          </div>
        )}
      </div>

      {/* Generate buttons */}
      <div className="flex gap-3">
        <button
          onClick={generateSelected}
          disabled={generating || !currentContent?.headline}
          className="flex-1 py-3 rounded-lg bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50 text-sm"
        >
          {generating ? "\u751F\u6210\u4E2D..." : `\u751F\u6210 (4\u79CD\u5C3A\u5BF8)`}
        </button>
        {!customMode && (
          <button
            onClick={generateAll}
            disabled={generating}
            className="flex-1 py-3 rounded-lg bg-[#2a2418] text-[#C9A355] font-bold cursor-pointer hover:bg-[#3a3428] border border-[#3a3428] disabled:opacity-50 text-sm"
          >
            {generating ? "\u6279\u91CF\u4E2D..." : `\u5168\u90E8\u751F\u6210 (${filteredContent.length}\u00D74)`}
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">
              \u751F\u6210\u7ED3\u679C ({results.length} \u56FE)
            </h3>
            <button
              onClick={downloadAll}
              className="px-3 py-1.5 rounded text-xs bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853]"
            >
              \u4E00\u952E\u4E0B\u8F7D\u5168\u90E8
            </button>
          </div>

          {/* Group by content, show 4 sizes per content */}
          {(() => {
            const groups: Map<number, GeneratedResult[]> = new Map()
            for (const r of results) {
              const key = r.contentIdx
              const arr = groups.get(key) ?? []
              arr.push(r)
              groups.set(key, arr)
            }

            return Array.from(groups.entries()).map(([contentIdx, items]) => (
              <div key={contentIdx} className="mb-6">
                <div className="text-xs text-[#7a6e5e] mb-2">
                  {items[0].content.emoji} {items[0].content.headline}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {items.map((item) => (
                    <div key={item.platformId} className="space-y-1.5">
                      <div className="text-xs text-[#C9A355] font-semibold">
                        {PLATFORM_SIZES.find((p) => p.id === item.platformId)?.label}
                      </div>
                      <button
                        onClick={() => downloadItem(item)}
                        className="w-full cursor-pointer bg-transparent border-0 p-0"
                      >
                        <img
                          src={item.dataUrl}
                          alt={item.content.headline}
                          className="w-full h-auto rounded border border-[#2a2418] hover:border-[#C9A355] transition-colors"
                        />
                      </button>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => downloadItem(item)}
                          className="flex-1 py-1 rounded text-xs bg-[#2a2418] text-[#e8dcc8] cursor-pointer hover:bg-[#3a3428]"
                        >
                          \u4E0B\u8F7D
                        </button>
                        <button
                          onClick={() => copyPlatformCopy(item)}
                          className="flex-1 py-1 rounded text-xs bg-[#2a2418] text-[#C9A355] cursor-pointer hover:bg-[#3a3428]"
                        >
                          {copiedKey === `${item.contentIdx}-${item.platformId}` ? "\u5DF2\u590D\u5236 \u2713" : "\u590D\u5236\u6587\u6848"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          })()}
        </div>
      )}

      {generating && (
        <div className="text-center text-[#C9A355] text-sm py-8">
          \u6B63\u5728\u751F\u6210\uFF0C\u8BF7\u7A0D\u5019...
        </div>
      )}
    </div>
  )
}
