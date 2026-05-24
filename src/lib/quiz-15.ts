import type { ConstitutionId } from "./types"
import { QUIZ_27, getPrimaryAndSecondary } from "./quiz-27"

export const QUIZ_15_INDICES = [0, 3, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 21, 23, 24]

export const QUIZ_15 = QUIZ_15_INDICES.map((i) => QUIZ_27[i])

export const QUIZ_12_INDICES = [1, 2, 4, 8, 11, 14, 17, 19, 20, 22, 25, 26]

export const QUIZ_12 = QUIZ_12_INDICES.map((i) => QUIZ_27[i])

export function calculate15Scores(answers: number[]): Record<ConstitutionId, number> {
  const raw: Record<ConstitutionId, number[]> = {
    balanced: [], qi_deficient: [], yang_deficient: [], yin_deficient: [],
    phlegm_damp: [], damp_heat: [], blood_stasis: [], qi_stagnant: [], sensitive: [],
  }

  QUIZ_15.forEach((q, i) => {
    if (i < answers.length) {
      let score = answers[i]
      if (q.reverse) score = 6 - score
      raw[q.constitution].push(score)
    }
  })

  const result: Record<ConstitutionId, number> = {} as Record<ConstitutionId, number>
  for (const id of Object.keys(raw) as ConstitutionId[]) {
    const items = raw[id]
    if (items.length === 0) { result[id] = 0; continue }
    const sum = items.reduce((a, b) => a + b, 0)
    result[id] = Math.round(((sum - items.length) / (items.length * 4)) * 100)
  }

  return result
}

export { getPrimaryAndSecondary }
