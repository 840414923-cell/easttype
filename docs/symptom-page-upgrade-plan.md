# Symptom Pages Upgrade Plan

## Goal
Make EastType symptom pages better than meandqi.com's pattern pages in both SEO and user experience.

## Current State (as of July 2026)
- 70 symptom pages converted from hand-written articles to structured data + shared SymptomArticle component
- Visual structure: tag badge, body type cards, TCM explanation, metaphor box, TCM vs Western table, help cards, doctor warning, related links, FAQ, food guide link, CTA, disclaimer
- Alternating bg colors (card-bg / bg2 / gradient) for visual rhythm
- All URLs unchanged, JSON-LD preserved

## meandqi Strengths (our benchmark)
1. Dense internal link network — every symptom/herb/formula/pattern is clickable
2. "How Is This Different From..." comparison sections
3. Structured as database entries, not blog posts
4. Formula cards with images, herb cards with images
5. Acupuncture point cards with images
6. Four examinations framework (tongue, pulse, etc.)
7. "What You Can Do at Home" — diet, lifestyle, qigong sections
8. "If Left Untreated" progression section
9. "What Western Medicine Calls This" — biomedical cross-reference

## meandqi Weaknesses (our opportunities)
1. Content is too academic — full of pinyin, Chinese characters, classical quotes; not accessible to general public
2. No personalization — no quiz, no body type test, no conversion path
3. No actionable recipes — tells you "use this formula" but no shopping/prep guide
4. Pages are too long (20+ sections) — information overload
5. No food therapy landing pages
6. No body type quiz funnel

## EastType Unique Advantages
1. Body Type Quiz ($4.99/$12.99) — core differentiator, meandqi has none
2. Solutions column — food-grade herbal tea recipes with images, steps, cautions
3. Foods-for pages — specific daily meal plans for 10 symptoms
4. 100-herb database with compressed images and cross-linking
5. Conversational tone that resonates with non-practitioners
6. 9 body types framework — accessible, not academic

## 5 Upgrade Modules

### Module 1: Symptom Self-Check Checklist
**New field:** `checklist?: string[]`

Add after intro, before body type cards. A "Does this sound like you?" checklist with 5-8 items. If user matches 3+, naturally leads to body type cards and quiz.

```
┌─────────────────────────────────────┐
│  Does this sound like you?           │
│  ☐ Still tired after 8 hours sleep   │
│  ☐ Crashes around 2-3 PM            │
│  ☐ Gets winded climbing 2 flights    │
│  ☐ Soft voice, easy sweating        │
│  ☐ Catches colds more than others   │
│  3+ matches? Your body type may be..│
└─────────────────────────────────────┘
```

**Why better than meandqi:** Their symptoms are passive pill lists. Ours creates engagement and quiz conversion.

### Module 2: Body Type Card Match Hint
**New field on bodyTypes:** `matchHint?: string`

Add a "If 4+ signs match → Take the Quiz" CTA button inside each body type card.

**Why better than meandqi:** They list patterns without personalization. We guide users to discover their own type.

### Module 3: Related Symptoms Cross-Link Grid
**Upgrade field:** `relatedSymptoms: { slug: string; title: string; tag: string }[]`

Add `tag` field for color-coded category labels. Render as card grid instead of text links.

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Always Sleepy?│ │ Feel Anxious?│ │ Bloated?     │
│ [Energy]      │ │ [Anxiety]    │ │ [Digestion]  │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Why better than meandqi:** Color-coded tags, not plain text links.

### Module 4: Related Solutions/Foods Recommendation
**New field:** `relatedSolution?: { slug: string; title: string; image: string }`

After "What May Help" section, show a visual recipe card if the symptom has a matching Solutions formula or foods-for page.

```
┌──────────────────────────────────────────┐
│  Try This: Herbal Tea for Your Type       │
│  [image]  Ginseng & Jujube Tea            │
│           四君子汤 · For Qi Deficient      │
│           3 ingredients · 10 min prep     │
│           [Get the recipe →]              │
└──────────────────────────────────────────┘
```

**Why better than meandqi:** They have theory only. We have executable recipes with images and steps.

### Module 5: "How Is This Different From..." Comparison
**New field:** `howIsItDifferent?: { from: string; difference: string }[]`

Collapsible comparison cards (2-3 items max) after the "When to See a Doctor" section.

```
▶ Is this different from just being tired?
  ▼ Yes. Normal tiredness goes away with rest...

▶ Is this the same as chronic fatigue syndrome?
  ▼ Not necessarily. CFS is a specific diagnosis...
```

**Why better than meandqi:** 2-3 concise items vs their 6+ long comparisons.

## Final Page Structure (Upgraded)
1. Title + tag + readTime
2. Intro paragraphs
3. **[NEW] Symptom self-check checklist**
4. Body type cards (upgraded: match hint + quiz CTA)
5. TCM explanation paragraphs
6. Metaphor box
7. TCM vs Western comparison table
8. What May Help card grid
9. **[NEW] Related Solutions/foods recommendation card**
10. When to See a Doctor
11. **[NEW] "How is this different from..." collapsible cards**
12. Related links (upgraded: pill card grid with tags)
13. FAQ
14. Food guide link box
15. CTA
16. Disclaimer

## Implementation
- Each module adds an optional field to `SymptomArticleData` interface
- Component renders the section only if data exists (backward compatible)
- Pages without new fields render exactly as they do now
- Edit 2-3 pages per day, ~20-25 min per page
- 70 pages total, ~4-5 weeks to complete all

## Priority Order (by GSC impressions)
1. why-am-i-always-tired (62 impressions)
2. why-am-i-always-cold
3. why-do-i-have-seasonal-allergies (first click received)
4. why-do-i-crave-sweets
5. why-do-i-have-acid-reflux
6. Continue by GSC impression descending order

## Files to Modify
- `src/lib/symptom-article-types.ts` — add new optional fields
- `src/components/symptom-article.tsx` — add rendering for new sections
- `src/lib/symptom-articles-data.ts` — add data per page (manual, 2-3/day)
