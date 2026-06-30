"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HERB_CATEGORIES } from "@/lib/herbs-data"
import type { HerbData } from "@/lib/herbs-data"

const CATEGORY_COLORS: Record<string, string> = {
  "Qi Tonic": "bg-amber-900/10 text-amber-700",
  "Blood Tonic": "bg-red-900/10 text-red-700",
  "Yin Tonic": "bg-sky-900/10 text-sky-700",
  "Yang Tonic": "bg-orange-900/10 text-orange-700",
  "Warming Herb": "bg-orange-900/10 text-orange-700",
  "Cooling Herb": "bg-teal-900/10 text-teal-700",
  "Dampness Draining": "bg-emerald-900/10 text-emerald-700",
  "Qi Regulating": "bg-purple-900/10 text-purple-700",
}

const NAME_ZH_SIMP: Record<string, string> = {
  "ginseng-ren-shen": "人参",
  "astragalus-huang-qi": "黄芪",
  "jujube-da-zao": "大枣",
  "goji-gou-qi-zi": "枸杞子",
  "ginger-sheng-jiang": "生姜",
  "chrysanthemum-ju-hua": "菊花",
  "chinese-yam-shan-yao": "山药",
  "longan-gui-yuan": "龙眼肉",
  "coix-seed-yi-yi-ren": "薏苡仁",
  "lotus-seed-lian-zi": "莲子",
  "lily-bulb-bai-he": "百合",
  "white-fungus-yin-er": "银耳",
  "mint-bo-he": "薄荷",
  "rose-mei-gui": "玫瑰花",
  "cinnamon-rou-gui": "肉桂",
  "dried-tangerine-chen-pi": "陈皮",
  "honeysuckle-jin-yin-hua": "金银花",
  "dong-quai-dang-gui": "当归",
  "rehmannia-di-huang": "地黄",
  "poria-fu-ling": "茯苓",
  "fennel-xiao-hui-xiang": "小茴香",
}

const NAME_ZH_TRAD: Record<string, string> = {
  "ginseng-ren-shen": "人蔘",
  "astragalus-huang-qi": "黃耆",
  "jujube-da-zao": "大棗",
  "goji-gou-qi-zi": "枸杞子",
  "ginger-sheng-jiang": "生薑",
  "chrysanthemum-ju-hua": "菊花",
  "chinese-yam-shan-yao": "山藥",
  "longan-gui-yuan": "龍眼肉",
  "coix-seed-yi-yi-ren": "薏苡仁",
  "lotus-seed-lian-zi": "蓮子",
  "lily-bulb-bai-he": "百合",
  "white-fungus-yin-er": "銀耳",
  "mint-bo-he": "薄荷",
  "rose-mei-gui": "玫瑰花",
  "cinnamon-rou-gui": "肉桂",
  "dried-tangerine-chen-pi": "陳皮",
  "honeysuckle-jin-yin-hua": "金銀花",
  "dong-quai-dang-gui": "當歸",
  "rehmannia-di-huang": "地黃",
  "poria-fu-ling": "茯苓",
  "fennel-xiao-hui-xiang": "小茴香",
}

export function HerbsList({ herbs }: { herbs: HerbData[] }) {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? herbs : herbs.filter((h) => h.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {HERB_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all no-underline ${
              filter === cat
                ? "bg-[rgba(168,135,64,0.15)] text-accent border border-[rgba(168,135,64,0.4)]"
                : "bg-card-bg text-text2 border border-[rgba(168,135,64,0.1)] hover:border-[rgba(168,135,64,0.3)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {filtered.map((herb) => {
          const simp = NAME_ZH_SIMP[herb.slug] || herb.nameZh
          const trad = NAME_ZH_TRAD[herb.slug] || herb.nameZh
          return (
            <Link
              key={herb.slug}
              href={`/herbs/${herb.slug}`}
              className="group block rounded-2xl overflow-hidden bg-card-bg border-2 border-[rgba(168,135,64,0.12)] hover:border-[rgba(168,135,64,0.4)] hover:shadow-[0_8px_30px_rgba(168,135,64,0.12)] transition-all duration-300 no-underline"
            >
              {herb.image ? (
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={herb.image}
                    alt={herb.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${CATEGORY_COLORS[herb.category] || "bg-accent/10 text-accent"} backdrop-blur-md`}>
                      {herb.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[3/2] bg-[#1a1a1a] flex items-center justify-center">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${CATEGORY_COLORS[herb.category] || "bg-accent/10 text-accent"}`}>
                    {herb.category}
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-text group-hover:text-accent transition-colors tracking-wide mb-1">
                  {herb.nameEn}
                </h3>
                <p className="text-base text-text2/60 mb-1">
                  <span className="font-[family-name:var(--font-display)]">{simp}</span>
                  <span className="mx-2 text-text2/20">|</span>
                  <span className="font-[family-name:var(--font-display)]">{trad}</span>
                  <span className="mx-2 text-text2/20">|</span>
                  <span className="italic">{herb.pinyin}</span>
                </p>
                <div className="flex items-center gap-3 mb-4 text-xs text-text2/50">
                  <span>Temperature: <strong className="text-text2/80">{herb.temperature}</strong></span>
                  <span className="text-text2/20">|</span>
                  <span>Taste: <strong className="text-text2/80">{herb.taste}</strong></span>
                </div>
                <p className="text-sm text-text2 leading-relaxed line-clamp-3 mb-5">
                  {herb.summary}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {herb.actions.slice(0, 3).map((action, i) => (
                    <span key={i} className="text-[10px] text-text2/60 bg-[rgba(168,135,64,0.05)] border border-[rgba(168,135,64,0.08)] px-2.5 py-1 rounded-md">
                      {action.length > 35 ? action.substring(0, 35) + "..." : action}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <p className="text-center text-xs text-text2/50 mt-10">
        Showing {filtered.length} of {herbs.length} herbs
      </p>
    </div>
  )
}
