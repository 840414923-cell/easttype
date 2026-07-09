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
  getContentByBgType,
  type TemplateType,
  type SocialContent,
} from "@/lib/card-templates/social-content"
import { renderFactCard } from "@/lib/card-templates/template-fact"
import { renderSymptomCard } from "@/lib/card-templates/template-symptom"
import { renderFoodCard } from "@/lib/card-templates/template-food"
import { renderWhichCard } from "@/lib/card-templates/template-which"
import { renderQuoteCard } from "@/lib/card-templates/template-quote"
import { renderChinglishCard } from "@/lib/card-templates/template-chinglish"
import { generateCopy } from "@/lib/pinterest-copy"
import { TYPES } from "@/lib/constitution-data"
import type { ConstitutionId } from "@/lib/types"

type BrowseMode = "template" | "bodytype"

const BG_OPTIONS: Array<{ id: ConstitutionId | "gradient"; label: string }> = [
  { id: "gradient", label: "纯色渐变" },
  ...Object.values(TYPES).map((t) => ({ id: t.id, label: `${t.zh} (${t.en})` })),
]

const TEMPLATE_RENDERERS: Record<TemplateType, (c: SocialContent, s: PlatformSize, code?: string) => Promise<string | null>> = {
  fact: renderFactCard,
  symptom: renderSymptomCard,
  food: renderFoodCard,
  which: renderWhichCard,
  quote: renderQuoteCard,
  chinglish: renderChinglishCard,
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
  const [browseMode, setBrowseMode] = useState<BrowseMode>("template")
  const [templateType, setTemplateType] = useState<TemplateType>("fact")
  const [selectedBgType, setSelectedBgType] = useState<ConstitutionId | "all">("all")
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

  const displayedContent = browseMode === "template"
    ? (selectedBgType === "all" ? getContentByType(templateType) : getContentByType(templateType).filter((c) => c.bgType === selectedBgType))
    : (selectedBgType === "all" ? SOCIAL_CONTENT : getContentByBgType(selectedBgType as ConstitutionId))

  const currentContent = customMode
    ? { type: templateType, headline: customHeadline, subtext: customSubtext, emoji: customEmoji, bgType: undefined as ConstitutionId | undefined, zh: "自定义" }
    : displayedContent[selectedIdx]

  const effectiveBg = bgOverride ?? currentContent?.bgType ?? "gradient"
  const code = useCode ? selectedCode : undefined

  const handleBrowseModeChange = useCallback((m: BrowseMode) => {
    setBrowseMode(m)
    setSelectedIdx(0)
    setResults([])
    setCustomMode(false)
  }, [])

  const handleTemplateChange = useCallback((t: TemplateType) => {
    setTemplateType(t)
    setSelectedIdx(0)
    setResults([])
    setCustomMode(false)
  }, [])

  const handleBgTypeChange = useCallback((bt: ConstitutionId | "all") => {
    setSelectedBgType(bt)
    setSelectedIdx(0)
    setResults([])
  }, [])

  async function generateSelected() {
    if (!currentContent) return
    setGenerating(true)
    setResults([])
    try {
      const content = bgOverride && bgOverride !== (currentContent.bgType ?? "gradient")
        ? { ...currentContent, bgType: bgOverride === "gradient" ? undefined : bgOverride }
        : currentContent
      const renderer = TEMPLATE_RENDERERS[content.type]
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
      console.error("生成失败:", err)
    } finally {
      setGenerating(false)
    }
  }

  async function generateAll() {
    setGenerating(true)
    setResults([])
    const allContent = displayedContent
    const newResults: GeneratedResult[] = []
    for (let i = 0; i < allContent.length; i++) {
      const content = allContent[i]
      const renderer = TEMPLATE_RENDERERS[content.type]
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
      {/* Browse mode: template or bodytype */}
      <div>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => handleBrowseModeChange("template")}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-all ${browseMode === "template" ? "bg-[#C8102E] text-[#0f0d0a] font-bold" : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"}`}
          >
            按模板浏览
          </button>
          <button
            onClick={() => handleBrowseModeChange("bodytype")}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition-all ${browseMode === "bodytype" ? "bg-[#C8102E] text-[#0f0d0a] font-bold" : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"}`}
          >
            按体质浏览
          </button>
        </div>

        {browseMode === "template" && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(Object.entries(TEMPLATE_META) as [TemplateType, typeof TEMPLATE_META[TemplateType]][]).map(([id, meta]) => (
              <button
                key={id}
                onClick={() => handleTemplateChange(id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer transition-all whitespace-nowrap ${
                  templateType === id
                    ? "bg-[#C8102E] text-[#0f0d0a] font-bold"
                    : "bg-[#1e1a14] text-[#7a6e5e] hover:text-[#e8dcc8] border border-[#2a2418]"
                }`}
              >
                <span className="text-lg">{meta.icon}</span>
                <span className="text-sm">{meta.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Body type filter */}
      <div>
        <h2 className="text-sm font-semibold mb-2 text-[#7a6e5e]">体质筛选</h2>
        <div className="flex gap-1.5 overflow-x-auto pb-2">
          <button
            onClick={() => handleBgTypeChange("all")}
            className={`px-3 py-1.5 rounded text-xs cursor-pointer transition-all whitespace-nowrap ${selectedBgType === "all" ? "bg-[#C8102E] text-[#0f0d0a] font-bold" : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"}`}
          >
            全部
          </button>
          {Object.values(TYPES).map((t) => (
            <button
              key={t.id}
              onClick={() => handleBgTypeChange(t.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs cursor-pointer transition-all whitespace-nowrap ${selectedBgType === t.id ? "bg-[#C8102E] text-[#0f0d0a] font-bold" : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"}`}
            >
              {t.zh}
            </button>
          ))}
        </div>
      </div>

      {/* Content picker */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">选择内容 ({displayedContent.length} 条)</h2>
          <button
            onClick={() => setCustomMode(!customMode)}
            className={`px-3 py-1.5 rounded text-sm cursor-pointer transition-all ${
              customMode
                ? "bg-[#C8102E] text-[#0f0d0a] font-bold"
                : "bg-[#1e1a14] text-[#7a6e5e] border border-[#2a2418] hover:text-[#e8dcc8]"
            }`}
          >
            自定义文字
          </button>
        </div>

        {customMode ? (
          <div className="space-y-3 bg-[#1e1a14] border border-[#2a2418] rounded-lg p-4">
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">标题 (headline)</label>
              <input
                type="text"
                value={customHeadline}
                onChange={(e) => setCustomHeadline(e.target.value)}
                placeholder="Ginger isn't good for everyone."
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C8102E] text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">解释 (subtext)</label>
              <input
                type="text"
                value={customSubtext}
                onChange={(e) => setCustomSubtext(e.target.value)}
                placeholder="If your body runs hot, ginger can make things worse."
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C8102E] text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-[#7a6e5e] mb-1 block">Emoji</label>
              <input
                type="text"
                value={customEmoji}
                onChange={(e) => setCustomEmoji(e.target.value)}
                placeholder="🫚"
                className="w-20 px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none focus:border-[#C8102E] text-sm"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-1">
            {displayedContent.map((card, i) => (
              <button
                key={`${card.type}-${i}`}
                onClick={() => setSelectedIdx(i)}
                className={`p-3 rounded-lg text-left cursor-pointer transition-all border-2 ${
                  selectedIdx === i
                    ? "border-[#C8102E] bg-[rgba(200,16,46,0.08)]"
                    : "border-[#2a2418] hover:border-[#3a3428] bg-[#1e1a14]"
                }`}
              >
                <div className="flex items-center gap-2">
                  {card.emoji && <span className="text-lg">{card.emoji.split(" ")[0]}</span>}
                  <div className="text-sm font-bold text-[#e8dcc8] line-clamp-2">{card.headline}</div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#2a2418] text-[#C8102E]">{TEMPLATE_META[card.type].label}</span>
                  <span className="text-[10px] text-[#7a6e5e] line-clamp-1">{card.zh}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Background selector */}
      <div>
        <h2 className="text-sm font-semibold mb-2 text-[#7a6e5e]">背景</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {BG_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setBgOverride(opt.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer transition-all whitespace-nowrap ${
                effectiveBg === opt.id
                  ? "border-2 border-[#C8102E] bg-[rgba(200,16,46,0.08)] text-[#C8102E] font-semibold"
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
            className="accent-[#C8102E]"
          />
          <label htmlFor="useCode2" className="text-sm text-[#e8dcc8] cursor-pointer">在图片上添加激活码</label>
        </div>
        {useCode && (
          <div>
            {unusedCodes.length > 0 ? (
              <select
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#C8102E] border border-[#3a3428] outline-none font-mono text-sm"
              >
                <option value="">选择激活码</option>
                {unusedCodes.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            ) : (
              <p className="text-xs text-[#7a6e5e]">请先在「激活码管理」中生成码</p>
            )}
          </div>
        )}
      </div>

      {/* Generate buttons */}
      <div className="flex gap-3">
        <button
          onClick={generateSelected}
          disabled={generating || !currentContent?.headline}
          className="flex-1 py-3 rounded-lg bg-[#C8102E] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50 text-sm"
        >
          {generating ? "生成中..." : "生成 (4种尺寸)"}
        </button>
        {!customMode && (
          <button
            onClick={generateAll}
            disabled={generating}
            className="flex-1 py-3 rounded-lg bg-[#2a2418] text-[#C8102E] font-bold cursor-pointer hover:bg-[#3a3428] border border-[#3a3428] disabled:opacity-50 text-sm"
          >
            {generating ? "批量中..." : `全部生成 (${displayedContent.length}×4)`}
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">
              生成结果 ({results.length} 图)
            </h3>
            <button
              onClick={downloadAll}
              className="px-3 py-1.5 rounded text-xs bg-[#C8102E] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853]"
            >
              一键下载全部
            </button>
          </div>

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
                      <div className="text-xs text-[#C8102E] font-semibold">
                        {PLATFORM_SIZES.find((p) => p.id === item.platformId)?.label}
                      </div>
                      <button
                        onClick={() => downloadItem(item)}
                        className="w-full cursor-pointer bg-transparent border-0 p-0"
                      >
                        <img
                          src={item.dataUrl}
                          alt={item.content.headline}
                          className="w-full h-auto rounded border border-[#2a2418] hover:border-[#C8102E] transition-colors"
                        />
                      </button>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => downloadItem(item)}
                          className="flex-1 py-1 rounded text-xs bg-[#2a2418] text-[#e8dcc8] cursor-pointer hover:bg-[#3a3428]"
                        >
                          下载
                        </button>
                        <button
                          onClick={() => copyPlatformCopy(item)}
                          className="flex-1 py-1 rounded text-xs bg-[#2a2418] text-[#C8102E] cursor-pointer hover:bg-[#3a3428]"
                        >
                          {copiedKey === `${item.contentIdx}-${item.platformId}` ? "已复制 ✓" : "复制文案"}
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
        <div className="text-center text-[#C8102E] text-sm py-8">
          正在生成，请稍候...
        </div>
      )}
    </div>
  )
}
