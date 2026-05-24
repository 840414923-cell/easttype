import type { ConstitutionId } from "../types"
import type { ReportBasic, ReportPro, Sex } from "./schema"

// Each JSON is loaded via a separate dynamic import() so only the needed
// files enter the client bundle. Paths must be string literals for bundler analysis.
const loaders: Record<string, () => Promise<unknown>> = {
  "qi_deficient-female": () => import("./qi-deficient-female.json"),
  "qi_deficient-male":   () => import("./qi-deficient-male.json"),
  "yang_deficient-female": () => import("./yang-deficient-female.json"),
  "yang_deficient-male":   () => import("./yang-deficient-male.json"),
  "yin_deficient-female": () => import("./yin-deficient-female.json"),
  "yin_deficient-male":   () => import("./yin-deficient-male.json"),
  "phlegm_damp-female": () => import("./phlegm-damp-female.json"),
  "phlegm_damp-male":   () => import("./phlegm-damp-male.json"),
  "damp_heat-female": () => import("./damp-heat-female.json"),
  "damp_heat-male":   () => import("./damp-heat-male.json"),
  "blood_stasis-female": () => import("./blood-stasis-female.json"),
  "blood_stasis-male":   () => import("./blood-stasis-male.json"),
  "qi_stagnant-female": () => import("./qi-stagnant-female.json"),
  "qi_stagnant-male":   () => import("./qi-stagnant-male.json"),
  "sensitive-female": () => import("./sensitive-female.json"),
  "sensitive-male":   () => import("./sensitive-male.json"),
  "balanced-female": () => import("./balanced-female.json"),
  "balanced-male":   () => import("./balanced-male.json"),

  "pro-qi_deficient-female": () => import("./pro-qi-deficient-female.json"),
  "pro-qi_deficient-male":   () => import("./pro-qi-deficient-male.json"),
  "pro-yang_deficient-female": () => import("./pro-yang-deficient-female.json"),
  "pro-yang_deficient-male":   () => import("./pro-yang-deficient-male.json"),
  "pro-yin_deficient-female": () => import("./pro-yin-deficient-female.json"),
  "pro-yin_deficient-male":   () => import("./pro-yin-deficient-male.json"),
  "pro-phlegm_damp-female": () => import("./pro-phlegm-damp-female.json"),
  "pro-phlegm_damp-male":   () => import("./pro-phlegm-damp-male.json"),
  "pro-damp_heat-female": () => import("./pro-damp-heat-female.json"),
  "pro-damp_heat-male":   () => import("./pro-damp-heat-male.json"),
  "pro-blood_stasis-female": () => import("./pro-blood-stasis-female.json"),
  "pro-blood_stasis-male":   () => import("./pro-blood-stasis-male.json"),
  "pro-qi_stagnant-female": () => import("./pro-qi-stagnant-female.json"),
  "pro-qi_stagnant-male":   () => import("./pro-qi-stagnant-male.json"),
  "pro-sensitive-female": () => import("./pro-sensitive-female.json"),
  "pro-sensitive-male":   () => import("./pro-sensitive-male.json"),
  "pro-balanced-female": () => import("./pro-balanced-female.json"),
  "pro-balanced-male":   () => import("./pro-balanced-male.json"),
}

async function load(key: string): Promise<unknown> {
  const loader = loaders[key]
  if (!loader) return null
  const mod = await loader()
  return (mod as any).default ?? mod
}

export async function getJsonReport(
  typeId: ConstitutionId,
  sex: Sex,
): Promise<ReportBasic | null> {
  const data = await load(`${typeId}-${sex}`)
  return data as ReportBasic | null
}

export async function getProJsonReport(
  typeId: ConstitutionId,
  sex: Sex,
): Promise<ReportPro | null> {
  const data = await load(`pro-${typeId}-${sex}`)
  return data as ReportPro | null
}

export { t } from "./schema"
export type { LText, ReportBasic, ReportPro, Sex } from "./schema"