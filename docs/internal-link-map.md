# Internal Link Map

Complete audit of all internal links across the site. Direction: FROM → TO.

## Symptoms → Patterns

| Symptom Page | Links To Pattern |
|---|---|
| /symptoms/why-am-i-always-tired | /patterns/low-vitality |
| /symptoms/why-am-i-always-cold | /patterns/cold-sensitivity |
| /symptoms/why-do-i-wake-up-at-3am | /patterns/internal-heat |
| /symptoms/always-bloated-after-eating | /patterns/heavy-and-sluggish |
| /symptoms/why-am-i-always-sleepy | /patterns/heavy-and-sluggish |
| /symptoms/why-do-i-have-night-sweats | /patterns/internal-heat |
| /symptoms/why-do-i-feel-anxious | /patterns/stuck-energy |
| /symptoms/why-do-i-have-brain-fog | /patterns/heavy-and-sluggish |
| /symptoms/why-cant-i-fall-asleep | /patterns/internal-heat |
| /symptoms/why-do-i-keep-gaining-weight | /patterns/heavy-and-sluggish |
| /symptoms/why-are-my-moods-all-over-the-place | /patterns/stuck-energy |
| /symptoms/why-do-i-get-sick-so-often | /patterns/low-vitality |
| /symptoms/why-do-my-hands-and-feet-go-numb | /patterns/cold-sensitivity |
| /symptoms/why-is-my-skin-so-dry | /patterns/internal-heat |
| /symptoms/why-do-i-crave-sweets | /patterns/heavy-and-sluggish |
| /symptoms/why-do-i-overthink-everything | /patterns/stuck-energy |

## Symptoms → Symptoms (cross-link)

| Symptom Page | Links To Symptoms |
|---|---|
| /symptoms/why-am-i-always-tired | sleepy, anxious |
| /symptoms/why-am-i-always-cold | tired, 3AM |
| /symptoms/why-do-i-wake-up-at-3am | tired, bloated |
| /symptoms/always-bloated-after-eating | tired, sleepy |
| /symptoms/why-am-i-always-sleepy | tired, bloated |
| /symptoms/why-do-i-have-night-sweats | 3AM |
| /symptoms/why-do-i-feel-anxious | 3AM |
| /symptoms/why-do-i-have-brain-fog | sleepy, bloated |
| /symptoms/why-cant-i-fall-asleep | 3AM, night-sweats |
| /symptoms/why-do-i-keep-gaining-weight | bloated, tired |
| /symptoms/why-are-my-moods-all-over-the-place | anxious, 3AM |
| /symptoms/why-do-i-get-sick-so-often | tired, cold |
| /symptoms/why-do-my-hands-and-feet-go-numb | cold, tired |
| /symptoms/why-is-my-skin-so-dry | night-sweats, 3AM |
| /symptoms/why-do-i-crave-sweets | bloated, weight |
| /symptoms/why-do-i-overthink-everything | anxious, moods |

## Symptoms → Types

| Symptom Page | Links To Types |
|---|---|
| /symptoms/why-am-i-always-tired | qi_deficient, yang_deficient |
| /symptoms/why-am-i-always-cold | yang_deficient, qi_deficient |
| /symptoms/why-do-i-wake-up-at-3am | yin_deficient, qi_stagnant |
| /symptoms/always-bloated-after-eating | qi_deficient, phlegm_damp |
| /symptoms/why-am-i-always-sleepy | qi_deficient, phlegm_damp |
| /symptoms/why-do-i-have-night-sweats | yin_deficient |
| /symptoms/why-do-i-feel-anxious | qi_stagnant |
| /symptoms/why-do-i-have-brain-fog | phlegm_damp, qi_deficient |
| /symptoms/why-cant-i-fall-asleep | yin_deficient, qi_stagnant |
| /symptoms/why-do-i-keep-gaining-weight | phlegm_damp, qi_deficient |
| /symptoms/why-are-my-moods-all-over-the-place | qi_stagnant |
| /symptoms/why-do-i-get-sick-so-often | qi_deficient, yang_deficient |
| /symptoms/why-do-my-hands-and-feet-go-numb | yang_deficient, qi_deficient |
| /symptoms/why-is-my-skin-so-dry | yin_deficient |
| /symptoms/why-do-i-crave-sweets | phlegm_damp, qi_deficient |
| /symptoms/why-do-i-overthink-everything | qi_stagnant |

## Symptoms → Quiz

| Symptom Page | Quiz Link |
|---|---|
| All 16 symptom pages | Via SymptomCta component → /quiz |

## Patterns → Symptoms (bidirectional check)

| Pattern Page | Links To Symptoms |
|---|---|
| /patterns/low-vitality | tired, sleepy, sick-often |
| /patterns/cold-sensitivity | cold, 3AM, numb |
| /patterns/internal-heat | 3AM, night-sweats, can't-sleep, dry-skin |
| /patterns/heavy-and-sluggish | bloated, sleepy, brain-fog, weight, sweets |
| /patterns/stuck-energy | anxious, 3AM, moods, overthinking |

## Patterns → Types

| Pattern Page | Links To Type |
|---|---|
| /patterns/low-vitality | qi_deficient |
| /patterns/cold-sensitivity | yang_deficient |
| /patterns/internal-heat | yin_deficient |
| /patterns/heavy-and-sluggish | phlegm_damp |
| /patterns/stuck-energy | qi_stagnant |

## Patterns → Quiz

| Pattern Page | Quiz Link |
|---|---|
| All 5 pattern pages | Via SymptomCta component → /quiz |

## Types → Downstream

| Type Page | Links To |
|---|---|
| All 9 type pages | /wellness/* (dynamic), /quiz |

## Hub Pages

| Hub | Links To |
|---|---|
| /symptoms | All 16 symptom pages |
| /patterns | All 5 pattern pages, /symptoms, /wellness |
| /wellness | All 10 wellness articles |

## Wellness → Downstream

| Wellness Article | Links To Symptoms/Patterns |
|---|---|
| All 10 wellness articles | "Related Symptoms & Patterns" section (added Sprint 04) |

## Link Flow Diagram

```
Google Search
  ↓
/symptoms/* (16 pages) ──→ /patterns/* (5 pages) ──→ /types/* (9 pages)
  ↑ cross-links               ↑ cross-links              ↓
  └── symptoms ←→ symptoms    └──→ symptoms                └→ /quiz
        ↓                         ↓                         ↓
     SymptomCta ─────────────→ /quiz ←── SymptomCta ←── detail CTA
```

## Bidirectional Verification

| Link Pair | Forward | Reverse | Status |
|---|---|---|---|
| tired → low-vitality | ✅ | ✅ low-vitality → tired | OK |
| cold → cold-sensitivity | ✅ | ✅ cold-sensitivity → cold | OK |
| 3AM → internal-heat | ✅ | ✅ internal-heat → 3AM | OK |
| bloated → heavy-and-sluggish | ✅ | ✅ heavy-and-sluggish → bloated | OK |
| sleepy → heavy-and-sluggish | ✅ | ✅ heavy-and-sluggish → sleepy | OK |
| night-sweats → internal-heat | ✅ | ✅ internal-heat → night-sweats | OK |
| anxious → stuck-energy | ✅ | ✅ stuck-energy → anxious | OK |
| brain-fog → heavy-and-sluggish | ✅ | ✅ heavy-and-sluggish → brain-fog | OK |
| can't-sleep → internal-heat | ✅ | ✅ internal-heat → can't-sleep | OK |
| weight → heavy-and-sluggish | ✅ | ✅ heavy-and-sluggish → weight | OK |
| moods → stuck-energy | ✅ | ✅ stuck-energy → moods | OK |
| sick-often → low-vitality | ✅ | ✅ low-vitality → sick-often | OK |
| numb → cold-sensitivity | ✅ | ✅ cold-sensitivity → numb | OK |
| dry-skin → internal-heat | ✅ | ✅ internal-heat → dry-skin | OK |
| sweets → heavy-and-sluggish | ✅ | ✅ heavy-and-sluggish → sweets | OK |
| overthinking → stuck-energy | ✅ | ✅ stuck-energy → overthinking | OK |

## Island Pages (no outbound internal links)

None found. All pages have at least one internal link.

## Weakness Summary

| Issue | Detail |
|---|---|
| Type pages don't link to patterns | One-way: patterns → types, but types → patterns missing |
| Type pages don't link to symptoms | Types only link to wellness + quiz |
| Pattern pages don't cross-link | No pattern-to-pattern links exist |
| night-sweats and anxious have only 1 related symptom | All other pages have 2 |
