"use client"

import { useState } from "react"
import Image from "next/image"
import { TYPES } from "@/lib/constitution-data"
import { SYMPTOM_CARDS, renderSymptomCard } from "@/lib/card-templates/symptom-card"
import type { ConstitutionId } from "@/lib/types"

const TYPE_IDS: ConstitutionId[] = [
  "qi_deficient", "yang_deficient", "yin_deficient",
  "phlegm_damp", "damp_heat", "blood_stasis",
  "qi_stagnant", "sensitive", "balanced",
]

interface GeneratedItem {
  idx: number
  dataUrl: string
  card: typeof SYMPTOM_CARDS[0]
}

interface Props {
  unusedCodes: string[]
}

export default function ContentStudio({ unusedCodes }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [selectedCode, setSelectedCode] = useState("")
  const [useCode, setUseCode] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [items, setItems] = useState<GeneratedItem[]>([])
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  async function generateSingle() {
    setGenerating(true)
    try {
      const code = useCode ? selectedCode : undefined
      const dataUrl = await renderSymptomCard(selectedIdx, code)
      if (dataUrl) {
        setItems([{ idx: selectedIdx, dataUrl, card: SYMPTOM_CARDS[selectedIdx] }])
      }
    } catch (err) {
      console.error("生成失败:", err)
    } finally {
      setGenerating(false)
    }
  }

  async function generateAll() {
    setGenerating(true)
    setItems([])
    const results: GeneratedItem[] = []
    for (let i = 0; i < SYMPTOM_CARDS.length; i++) {
      try {
        const code = useCode && unusedCodes[i] ? unusedCodes[i] : undefined
        const dataUrl = await renderSymptomCard(i, code)
        if (dataUrl) {
          results.push({ idx: i, dataUrl, card: SYMPTOM_CARDS[i] })
        }
      } catch {
        continue
      }
    }
    setItems(results)
    setGenerating(false)
  }

  function downloadItem(item: GeneratedItem) {
    const a = document.createElement("a")
    a.href = item.dataUrl
    const slug = item.card.question.replace(/[^a-zA-Z ]/g, "").split(" ").slice(0, 4).join("-").toLowerCase()
    a.download = `EastType-${slug}.jpg`
    a.click()
  }

  function copyPinText(item: GeneratedItem) {
    const q = item.card.question
    const text = `${q}\n\n${item.card.insight}\n\n💡 ${item.card.tip}\n\nTake the free 5-min body type quiz → myeasterntype.com\n\n#TCM #ChineseMedicine #BodyType #Wellness #EasternMedicine #EastType #${q.replace(/[^a-zA-Z]/g, "").slice(0, 20)}`
    navigator.clipboard.writeText(text)
    setCopiedIdx(item.idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-1">选择症状</h2>
        <p className="text-xs text-[#7a6e5e] mb-3">外国人只关心"我为什么会累"，不关心什么体质。每张图 = 一个症状问题 + 一个解释 + 一个实用建议</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SYMPTOM_CARDS.map((card, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              className={`p-3 rounded-lg text-left cursor-pointer transition-all border-2 ${
                selectedIdx === i
                  ? "border-[#C9A355] bg-[rgba(201,163,85,0.08)]"
                  : "border-[#2a2418] hover:border-[#3a3428] bg-[#1e1a14]"
              }`}
            >
              <div className="text-sm font-bold text-[#e8dcc8]">{card.question}</div>
              <div className="text-[10px] text-[#7a6e5e] mt-1 line-clamp-1">{card.insight}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            id="useCode"
            checked={useCode}
            onChange={(e) => setUseCode(e.target.checked)}
            className="accent-[#C9A355]"
          />
          <label htmlFor="useCode" className="text-sm text-[#e8dcc8] cursor-pointer">在图片上添加激活码</label>
        </div>
        {useCode && (
          <div>
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
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={generateSingle}
          disabled={generating}
          className="flex-1 py-3 rounded-lg bg-[#C9A355] text-[#0f0d0a] font-bold cursor-pointer hover:bg-[#d4a853] disabled:opacity-50 text-sm"
        >
          {generating ? "生成中..." : "生成这张"}
        </button>
        <button
          onClick={generateAll}
          disabled={generating}
          className="flex-1 py-3 rounded-lg bg-[#2a2418] text-[#C9A355] font-bold cursor-pointer hover:bg-[#3a3428] border border-[#3a3428] disabled:opacity-50 text-sm"
        >
          {generating ? "批量中..." : `全部生成 (${SYMPTOM_CARDS.length}张)`}
        </button>
      </div>

      {items.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-3">
            生成结果（{items.length} 张）— 点击图片下载，点击「复制文案」获取 Pinterest 文字
          </h3>
          <div className={`grid ${items.length > 2 ? "grid-cols-3" : items.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
            {items.map((item) => (
              <div key={item.idx} className="space-y-2">
                <button
                  onClick={() => downloadItem(item)}
                  className="w-full cursor-pointer bg-transparent border-0 p-0"
                >
                  <img
                    src={item.dataUrl}
                    alt={item.card.question}
                    className="w-full h-auto rounded-lg border border-[#2a2418] hover:border-[#C9A355] transition-colors"
                  />
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadItem(item)}
                    className="flex-1 py-1.5 rounded text-xs bg-[#2a2418] text-[#e8dcc8] cursor-pointer hover:bg-[#3a3428]"
                  >
                    下载 JPG
                  </button>
                  <button
                    onClick={() => copyPinText(item)}
                    className="flex-1 py-1.5 rounded text-xs bg-[#2a2418] text-[#C9A355] cursor-pointer hover:bg-[#3a3428]"
                  >
                    {copiedIdx === item.idx ? "已复制 ✓" : "复制文案"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {generating && (
        <div className="text-center text-[#C9A355] text-sm py-8">正在生成，请稍候...</div>
      )}
    </div>
  )
}
