import type { ConstitutionId } from "./types"

export interface FreeLayerData {
  signals: readonly string[]
  simpleSummary: string
}

export const FREE_LAYER: Record<ConstitutionId, FreeLayerData> = {
  balanced: {
    signals: [
      "may sleep and digest well most of the time",
      "tends to recover quickly from illness",
      "often has steady energy and stable mood",
      "might take their good balance for granted",
    ],
    simpleSummary: "May enjoy natural harmony but might slowly drift toward imbalance through lifestyle habits.",
  },
  qi_deficient: {
    signals: [
      "often runs low on energy before the day ends",
      "may feel breathless from mild exertion",
      "tends to prefer quiet over socializing to conserve energy",
      "might wake up already feeling behind",
      "often feels drained after small effort",
    ],
    simpleSummary: "May tire more easily than others, with an energy tank that tends to run smaller.",
  },
  yang_deficient: {
    signals: [
      "often feels cold in hands, feet, and deep belly",
      "may experience discomfort that eases with warmth",
      "tends to prefer hot drinks and cozy environments",
      "might have digestion that slows down in cold weather",
      "often feels chilled even when others are comfortable",
    ],
    simpleSummary: "May run cold from the inside out, with an inner furnace that tends to burn low.",
  },
  yin_deficient: {
    signals: [
      "often wakes at 3 AM with a racing mind",
      "may feel hot and parched even when others feel fine",
      "tends toward night sweats and dry skin",
      "might appear composed but runs intense on the inside",
      "often finds it hard to fully switch off",
    ],
    simpleSummary: "May run hot and dry on the inside, with an internal cooling system that tends to run low.",
  },
  phlegm_damp: {
    signals: [
      "often wakes feeling heavy, like wearing a damp blanket",
      "may experience stubborn weight that resists dieting",
      "tends toward foggy thinking and sluggish mornings",
      "might feel puffy and bloated after meals",
      "often deals with oily skin and lingering breakouts",
    ],
    simpleSummary: "May feel weighed down and sluggish, with fluid metabolism that tends to pool instead of flow.",
  },
  damp_heat: {
    signals: [
      "often wakes sticky, oily, and already irritated",
      "may get acne along the jawline that keeps coming back",
      "tends toward rashes in skin folds and creases",
      "might feel a burning quality to discomfort",
      "often runs intense and quick-tempered but fast to forgive",
    ],
    simpleSummary: "May feel like living in a perpetual internal summer — hot, sticky, and easily inflamed.",
  },
  blood_stasis: {
    signals: [
      "often has dark circles that concealer can't fix",
      "may bruise easily and notice purplish tones",
      "tends to feel things profoundly and intensely",
      "might notice a dull complexion with dark spots",
      "often feels like something is stuck or not flowing",
    ],
    simpleSummary: "May experience slow circulation patterns, with blood that tends to stagnate rather than flow freely.",
  },
  qi_stagnant: {
    signals: [
      "often feels a tight chest and sighs frequently",
      "may get mood swings that shift without warning",
      "tends to feel emotions with unusual intensity",
      "might write and delete the same message 12 times",
      "often reads rooms and people with rare accuracy",
    ],
    simpleSummary: "May feel emotions intensely but energy tends to get trapped rather than flowing freely.",
  },
  sensitive: {
    signals: [
      "often reacts to pollen, dust, or pet dander quickly",
      "may rotate through skincare brands due to reactions",
      "tends toward hay fever, hives, or eczema flare-ups",
      "might discover food intolerances others don't notice",
      "often senses environmental changes before anyone else",
    ],
    simpleSummary: "May react to everyday environments more intensely, with a defense system that tends toward high alert.",
  },
}
