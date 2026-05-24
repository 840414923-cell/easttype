import { PART1 } from "./pool-1"
import { PART2 } from "./pool-2"
import type { PoolQuestion } from "../question-pool"

export const POOL: PoolQuestion[] = [...PART1, ...PART2]
export { pickRandomIndices } from "../question-pool"
