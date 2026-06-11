"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { TYPES } from "@/lib/constitution-data"
import { PROMO_CAPTIONS } from "@/lib/promo-captions"
import { TCM_FACTS } from "@/lib/tcm-facts"
import { SYMPTOM_MAPPINGS } from "@/lib/card-templates/symptom-card"
import { renderFoodCard } from "@/lib/card-templates/food-card"
import { renderSymptomCard } from "@/lib/card-templates/symptom-card"
import { renderDailyTipCard } from "@/lib/card-templates/daily-tip-card"
import { renderTcmFactCard } from "@/lib/card-templates/tcm-fact-card"
import { generateFoodCopy, generateSymptomCopy, generateDailyTipCopy, generateFactCopy, generatePromoCopy } from "@/lib/pinterest-copy"
import type { ConstitutionId } from "@/lib/types"

type CardType = "food" | "symptom" | "daily" | "fact"

const CARD_TYPES: { id: CardType; label: string; desc: string }[] = [
  { id: "food", label: "食物推荐", desc: "每种体质的 Top 5 推荐食物" },
  { id: "symptom", label: "症状→体质", desc: "一个症状引出2-3种可能的体质" },
  { id: "daily", label: "每日养生", desc: "时辰养生节律卡片" },
  { id: "fact", label: "中医知识", desc: "\"你知道吗\" 风格 TCM 小知识" },
]

const TYPE_IDS: ConstitutionId[] = [
  "qi_deficient", "yang_deficient", "yin_deficient",
  "phlegm_damp", "damp_heat", "blood_stasis",
  "qi_stagnant", "sensitive", "balanced",
]

interface GeneratedItem {
  typeId: ConstitutionId
  dataUrl: string
  copy: { title: string; description: string; hashtags: string[] }
}

interface Props {
  unusedCodes: string[]
}

export default function ContentStudio({ unusedCodes }: Props) {
  const [cardType, setCardType] = useState<CardType>("food")
  const [selectedType, setSelectedType] = useState<ConstitutionId>("qi_deficient")
  const [symptomIdx, setSymptomIdx] = useState(0)
  const [factIdx, setFactIdx] = useState(0)
  const [captionIdx, setCaptionIdx] = useState(0)
  const [selectedCode, setSelectedCode] = useState(unusedCodes[0] || "")
  const [generating, setGenerating] = useState(false)
  const [items, setItems] = useState<GeneratedItem[]>([])
  const [expandedCopy, setExpandedCopy] = useState<number | null>(null)

  const nextCode = useCallback((offset: number) => {
    if (unusedCodes.length === 0) return ""
    const baseIdx = unusedCodes.indexOf(selectedCode)
    const idx = Math.max(0, baseIdx >= 0 ? baseIdx : 0)
    return unusedCodes[(idx + offset) % unusedCodes.length]
  }, [unusedCodes, selectedCode])

  async function generateSingle() {
    setGenerating(true)
    setItems([])
    try {
      const code = selectedCode || "ET-DEMO001"
      let dataUrl: string | null = null
      let copy: any = null

      switch (cardType) {
        case "food":
          dataUrl = await renderFoodCard(selectedType, code)
          copy = generateFoodCopy(selectedType, ["ginger", "sweet potato"])
          break
        case "symptom":
          dataUrl = await renderSymptomCard(symptomIdx, selectedType, code)
          copy = generateSymptomCopy(
            SYMPTOM_MAPPINGS[symptomIdx]?.question || "",
            SYMPTOM_MAPPINGS[symptomIdx]?.types.map((t) => TYPES[t.id].en) || []
          )
          break
        case "daily":
          dataUrl = await renderDailyTipCard(selectedType, code)
          copy = generateDailyTipCopy(selectedType, "Daily meridian schedule")
          break
        case "fact":
          dataUrl = await renderTcmFactCard(factIdx, selectedType, code)
          const fact = TCM_FACTS[factIdx]
          copy = generateFactCopy(fact?.en || "", fact?.tags || [])
          break
      }

      if (dataUrl && copy) {
        setItems([{ typeId: selectedType, dataUrl, copy }])
      }
    } catch (err) {
      console.error("生成失败:", err)
    } finally {
      setGenerating(false)
    }
  }

  async function generateBatch() {
    setGenerating(true)
    setItems([])
    try {
      const results: GeneratedItem[] = []
      for (let i = 0; i < TYPE_IDS.length; i++) {
        const tid = TYPE_IDS[i]
        const code = unusedCodes[i] || `ET-DEMO${String(i + 1).padStart(3, "0")}`
        let dataUrl: string | null = null
        let copy: any = null

        switch (cardType) {
          case "food":
            dataUrl = await renderFoodCard(tid, code)
            copy = generateFoodCopy(tid, ["food"])
            break
          case "symptom":
            dataUrl = await renderSymptomCard(symptomIdx, tid, code)
            copy = generateSymptomCopy(
              SYMPTOM_MAPPINGS[symptomIdx]?.question || "",
              SYMPTOM_MAPPINGS[symptomIdx]?.types.map((t) => TYPES[t.id].en) || []
            )
            break
          case "daily":
            dataUrl = await renderDailyTipCard(tid, code)
            copy = generateDailyTipCopy(tid, "Daily schedule")
            break
          case "fact":
            dataUrl = await renderTcmFactCard(factIdx, tid, code)
            const fact = TCM_FACTS[factIdx]
            copy = generateFactCopy(fact?.en || "", fact?.tags || [])
            break
        }

        if (dataUrl && copy) {
          results.push({ typeId: tid, dataUrl, copy })
        }
      }
      setItems(results)
    } catch (err) {
      console.error("批量生成失败:", err)
    } finally {
      setGenerating(false)
    }
  }

  function downloadItem(item: GeneratedItem, idx: number) {
    const a = document.createElement("a")
    a.href = item.dataUrl
    a.download = `EastType-${cardType}-${item.typeId}-${idx + 1}.jpg`
    a.click()
  }

  function copyText(text: string) {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-3">选择卡片类型</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CARD_TYPES.map((ct) => (
            <button
              key={ct.id}
              onClick={() => setCardType(ct.id)}
              className={`p-3 rounded-lg text-left cursor-pointer transition-all border-2 ${
                cardType === ct.id
                  ? "border-[#C9A355] bg-[rgba(201,163,85,0.08)]"
                  : "border-[#2a2418] hover:border-[#3a3428] bg-[#1e1a14]"
              }`}
            >
              <div className="text-sm font-bold text-[#e8dcc8]">{ct.label}</div>
              <div className="text-[10px] text-[#7a6e5e] mt-0.5">{ct.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <div>
            <label className="text-xs text-[#7a6e5e] block mb-2">选择体质背景</label>
            <div className="grid grid-cols-3 gap-1.5">
              {TYPE_IDS.map((id) => {
                const t = TYPES[id]
                const sel = id === selectedType
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedType(id)}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all border-2 ${
                      sel ? "border-[#C9A355] shadow-[0_0_12px_rgba(201,163,85,0.3)]" : "border-transparent hover:border-[#3a3428]"
                    }`}
                  >
                    <Image src={`/types/${id}.webp`} alt={t.en} width={120} height={150} className="w-full h-auto block" />
                    <div className="absolute bottom-0 left-0 right-0 bg-[rgba(10,8,5,0.75)] px-1 py-0.5 text-[7px] text-[#e8dcc8] text-center truncate">{t.en}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {cardType === "symptom" && (
            <div>
              <label className="text-xs text-[#7a6e5e] block mb-2">选择症状</label>
              <select
                value={symptomIdx}
                onChange={(e) => setSymptomIdx(Number(e.target.value))}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none text-sm"
              >
                {SYMPTOM_MAPPINGS.map((m, i) => (
                  <option key={i} value={i}>{m.question}</option>
                ))}
              </select>
            </div>
          )}

          {cardType === "fact" && (
            <div>
              <label className="text-xs text-[#7a6e5e] block mb-2">选择知识条目</label>
              <select
                value={factIdx}
                onChange={(e) => setFactIdx(Number(e.target.value))}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#e8dcc8] border border-[#3a3428] outline-none text-sm"
              >
                {TCM_FACTS.map((f, i) => (
                  <option key={i} value={i}>#{i + 1}: {f.en.slice(0, 60)}...</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="text-xs text-[#7a6e5e] block mb-2">激活码</label>
            {unusedCodes.length > 0 ? (
              <select
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#2a2418] text-[#C9A355] border border-[#3a3428] outline-none font-mono text-sm"
              >
                {unusedCodes.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            ) : (
              <p className="text-xs text-[#7a6e5e]">请先在「激活码管理」中生成码</p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={generateSingle}
              disabled={generating}
              className="flex-1 py-2.5 rounded bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50 text-sm"
            >
              {generating ? "生成中..." : "生成单张"}
            </button>
            <button
              onClick={generateBatch}
              disabled={generating}
              className="flex-1 py-2.5 rounded bg-[#2a2418] text-[#C9A355] font-bold cursor-pointer hover:bg-[#3a3428] border border-[#3a3428] disabled:opacity-50 text-sm"
            >
              {generating ? "批量中..." : "批量生成9张"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <label className="text-xs text-[#7a6e5e] block mb-2">
            预览（{items.length} 张） {items.length > 1 && "— 点击图片下载"}
          </label>
          {items.length === 0 && !generating && (
            <div className="bg-[#1e1a14] border border-[#2a2418] rounded-lg p-12 text-center text-[#7a6e5e] text-sm">
              选择类型和参数后，点击「生成单张」或「批量生成9张」
            </div>
          )}
          {generating && (
            <div className="bg-[#1e1a14] border border-[#2a2418] rounded-lg p-12 text-center text-[#C9A355] text-sm">
              正在生成，请稍候...
            </div>
          )}
          <div className={`grid ${items.length > 1 ? "grid-cols-3" : "grid-cols-1"} gap-2`}>
            {items.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <button
                  onClick={() => downloadItem(item, idx)}
                  className="w-full cursor-pointer bg-transparent border-0 p-0"
                >
                  <img
                    src={item.dataUrl}
                    alt={`${TYPES[item.typeId].en} card`}
                    className="w-full h-auto rounded-lg border border-[#2a2418] hover:border-[#C9A355] transition-colors"
                  />
                </button>
                <div className="bg-[#1e1a14] border border-[#2a2418] rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#C9A355]">{TYPES[item.typeId].en}</span>
                    <div className="flex gap-1">
                      <button onClick={() => downloadItem(item, idx)} className="text-[9px] text-[#7a6e5e] cursor-pointer hover:text-[#C9A355] px-1">下载</button>
                      <button onClick={() => setExpandedCopy(expandedCopy === idx ? null : idx)} className="text-[9px] text-[#7a6e5e] cursor-pointer hover:text-[#C9A355] px-1">文案</button>
                    </div>
                  </div>
                  {expandedCopy === idx && (
                    <div className="space-y-1.5 mt-1 pt-1.5 border-t border-[#2a2418]">
                      <div>
                        <div className="text-[8px] text-[#7a6e5e] mb-0.5">Pinterest 标题</div>
                        <div className="text-[10px] text-[#e8dcc8] leading-relaxed cursor-pointer hover:text-[#C9A355]" onClick={() => copyText(item.copy.title)}>{item.copy.title}</div>
                      </div>
                      <div>
                        <div className="text-[8px] text-[#7a6e5e] mb-0.5">Pinterest 描述</div>
                        <div className="text-[10px] text-[#e8dcc8] leading-relaxed cursor-pointer hover:text-[#C9A355]" onClick={() => copyText(item.copy.description)}>{item.copy.description.slice(0, 200)}...</div>
                      </div>
                      <div>
                        <div className="text-[8px] text-[#7a6e5e] mb-0.5">标签（点击复制）</div>
                        <div className="text-[10px] text-[#C9A355] cursor-pointer hover:underline" onClick={() => copyText(item.copy.hashtags.join(" "))}>{item.copy.hashtags.join(" ")}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
