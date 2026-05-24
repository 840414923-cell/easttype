import type { ConstitutionId } from "./types"

export interface PoolOption {
  s: Partial<Record<ConstitutionId, number>>
  en: string
  "zh-TW": string
  ja: string
}

export interface PoolQuestion {
  q: {
    en: string
    "zh-TW": string
    ja: string
  }
  opts: [PoolOption, PoolOption, PoolOption, PoolOption]
}

export const CATEGORIES = [
  { range: [0, 11] as const, pick: 2 },
  { range: [12, 23] as const, pick: 2 },
  { range: [24, 35] as const, pick: 1 },
  { range: [36, 47] as const, pick: 1 },
  { range: [48, 59] as const, pick: 1 },
  { range: [60, 71] as const, pick: 1 },
  { range: [72, 81] as const, pick: 1 },
  { range: [82, 91] as const, pick: 1 },
  { range: [92, 96] as const, pick: 2 },
  { range: [97, 106] as const, pick: 2 },
]

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function pickRandomIndices(): number[] {
  const picked: number[] = []
  for (const cat of CATEGORIES) {
    const [lo, hi] = cat.range
    const pool = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i)
    for (let i = 0; i < cat.pick && pool.length > 0; i++) {
      const idx = Math.floor(Math.random() * pool.length)
      picked.push(pool.splice(idx, 1)[0])
    }
  }
  return picked.sort(() => Math.random() - 0.5)
}
