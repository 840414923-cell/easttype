export const SAMPLE_QUESTIONS = [
  "Do you feel tired even after a full night of sleep?",
  "Are your hands and feet often cold, even in warm weather?",
  "Do you tend to worry or overthink things?",
]

export const BODY_TYPES = [
  { name: "Qi Deficient", slug: "qi_deficient", desc: "Like a phone that never charges past half", char: "气", pct: "8.3%" },
  { name: "Yang Deficient", slug: "yang_deficient", desc: "An inner heater that never turns on", char: "阳", pct: "7.5%" },
  { name: "Yin Deficient", slug: "yin_deficient", desc: "An engine running hot without coolant", char: "阴", pct: "8.2%" },
  { name: "Qi Stagnant", slug: "qi_stagnant", desc: "A traffic jam where energy should flow", char: "郁", pct: "8.7%" },
  { name: "Phlegm Damp", slug: "phlegm_damp", desc: "Walking through deep mud, everything heavy", char: "痰", pct: "6.3%" },
  { name: "Damp Heat", slug: "damp_heat", desc: "A humid summer day trapped inside", char: "湿", pct: "9.1%" },
  { name: "Blood Stasis", slug: "blood_stasis", desc: "A stream frozen still in places", char: "瘀", pct: "7.3%" },
  { name: "Sensitive", slug: "sensitive", desc: "An alarm system set a touch too high", char: "特", pct: "4.2%" },
  { name: "Balanced", slug: "balanced", desc: "A well-tuned instrument in perfect harmony", char: "平", pct: "32.8%" },
]

export const TYPE_COLORS: Record<string, string> = {
  qi_deficient: "#B45309",
  yang_deficient: "#C2410C",
  yin_deficient: "#0369A1",
  qi_stagnant: "#6D28D9",
  phlegm_damp: "#047857",
  damp_heat: "#B91C1C",
  blood_stasis: "#BE123C",
  sensitive: "#4338CA",
  balanced: "#15803D",
}

export const QUIZ_DIMENSIONS = ["Energy", "Temperature", "Digestion", "Sleep", "Emotions"]
