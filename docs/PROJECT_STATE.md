# Project State

Last updated: 2026-07-12

---

## Domain

**Production URL:** https://www.myeasterntype.com

Vercel Production domain is `www.myeasterntype.com`. All canonical URLs, sitemap URLs, and metadata use www. Non-www redirects (307) to www.

---

## Published URLs (293 in sitemap, 314 build pages)

### Core Pages (8)

| URL | Priority |
|---|---|
| / | 1.0 |
| /quiz | 0.9 |
| /symptoms | 0.8 |
| /patterns | 0.8 |
| /wellness | 0.8 |
| /foods-for | 0.8 |
| /herbs | 0.8 |
| /solutions | 0.8 |

### Symptom Pages (70)

70 individual symptom pages. Format: `/symptoms/why-am-i-always-tired`, etc.

**Architecture upgrade (2026-07-02):** All 70 symptom pages converted from hand-written article.tsx files to structured data + shared SymptomArticle component. Content extracted into `symptom-articles-data.ts` (523KB). Each page now renders: tag badge, body type cards (colored badges + keySigns pills), TCM explanation, metaphor box, TCM vs Western comparison table, whatMayHelp card grid, whenToSeeDoctor warning box, related links cards, FAQ, food guide link, CTA, disclaimer. Alternating bg colors for visual rhythm.

### Pattern Pages (9)

| URL | TCM Concept | Type |
|---|---|---|
| /patterns/low-vitality | Qi Deficiency | qi_deficient |
| /patterns/cold-sensitivity | Yang Deficiency | yang_deficient |
| /patterns/internal-heat | Yin Deficiency | yin_deficient |
| /patterns/heavy-and-sluggish | Phlegm Damp | phlegm_damp |
| /patterns/stuck-energy | Qi Stagnation | qi_stagnant |
| /patterns/damp-heat | Damp Heat | damp_heat |
| /patterns/blood-stasis | Blood Stasis | blood_stasis |
| /patterns/high-sensitivity | High Sensitivity | sensitive |
| /patterns/natural-balance | Balanced | balanced |

### Type Pages (9)

balanced, qi_deficient, yang_deficient, yin_deficient, phlegm_damp, damp_heat, blood_stasis, qi_stagnant, sensitive

### Wellness Pages (48)

48 in-depth wellness guides covering TCM patterns, concepts, conditions, and remedies. Organized in 4 clusters:
- TCM Organ Patterns (10): spleen-qi-deficiency, kidney-yin-deficiency, liver-qi-stagnation, etc.
- Chinese Medicine For X (17): chinese-medicine-for-insomnia, -anxiety, -weight-loss, -acne, -fatigue, -depression, -migraines, -eczema, -hair-loss, -pms, etc.
- TCM Fundamentals (6): what-is-qi, what-is-shen, what-is-jing, yin-and-yang, five-elements-theory, etc.
- Long-tail Supplements (15): chinese-herbs-for-energy, tcm-diet, cooling-foods-chinese-medicine, etc.

7 old duplicate wellness pages are 301 redirected to corresponding symptom pages.

### Food Combo Pages (10)

`/foods-for/[slug]` dynamic route. 10 food therapy guides matching ingredients to body type.

### Herb Pages (110)

`/herbs/[slug]` dynamic route. 110 TCM herbs with real photos, each containing:
- Properties (temperature, flavor, meridian entry)
- Benefits and action details
- Commonly used for (conditions)
- Preparation notes
- Dietary advice
- Safety information
- Simplified + Traditional Chinese names
- Botanical name
- 11 categories: Tonifying, Calming, Heat Clearing, Digestive Support, etc.

### Solutions Pages (7)

TCM herbal formula guides by health concern.
- `/solutions` hub page (left-image right-text layout, alternating bg colors)
- `/solutions/chinese-medicine-weight-loss` — 3 formulas (Lotus Leaf & Hawthorn, Coix Seed & Poria, Rose & Cassia Seed)
- `/solutions/chinese-medicine-for-energy` — 3 formulas (Ginseng & Jujube, Astragalus & Ginger, American Ginseng & Ophiopogon)
- `/solutions/chinese-medicine-for-sleep` — 3 formulas (Sour Jujube & Longan, Lily & Lotus, Rose & Chrysanthemum)
- `/solutions/chinese-medicine-for-digestion` — 3 formulas (Yam & Poria, Dendrobium & Ophiopogon, Tangerine Peel & Hawthorn)
- `/solutions/chinese-medicine-for-constipation` — 3 formulas
- `/solutions/chinese-medicine-for-anxiety` — 3 formulas (Rose & Citrus Bloom, Lily & Lotus Heart-Calming, Jujube & Longan Serenity)

Each formula includes classical source citation, ingredients with amounts, step-by-step preparation, dosage, duration, taste profile, cautions, and body type matching.

### Utility Pages (4)

/about, /privacy, /terms, /refund

### Dynamic Pages (5, noindex)

/result, /success, /report-v2, /checkout, /webhook/creem

---

## Content Counts

| Metric | Count |
|---|---|
| Symptom pages | 70 (all converted to structured data + shared component) |
| Pattern pages | 9 |
| Type pages | 9 |
| Wellness pages | 51 (+ 7 redirected) |
| Food combo pages | 10 |
| Herb pages | 122 |
| Solutions pages | 7 (hub + 6 detail) |
| Hub pages | 6 (symptoms, patterns, wellness, foods-for, herbs, solutions) |
| Utility pages | 4 |
| Sitemap URLs | 293 |
| Total build pages | 314 |
| Product tiers | 3 (Free / $4.99 / $12.99) |
| Pattern coverage | 9/9 types (complete) |

---

## Symptoms Hub Page (2026-07-02 redesign)

`/symptoms` redesigned with:
- 11 category filter tags (clickable, with symptom counts)
- Real-time search box (client component, filters by title/tag/description)
- Default view: symptoms grouped by category sections
- Filtered view: flat list with result count
- max-w-3xl, clean row-based layout

---

## Symptom Detail Page Architecture (2026-07-02)

All 70 symptom pages use shared rendering:

| File | Purpose |
|---|---|
| `src/lib/symptom-article-types.ts` | TypeScript interfaces (SymptomArticleData, etc.) |
| `src/lib/symptom-articles-data.ts` | 70 entries structured data (523KB) |
| `src/components/symptom-article.tsx` | Shared rendering component |
| `src/app/symptoms/[slug]/page.tsx` | Each page imports data + renders SymptomArticle |

Page structure: tag badge + readTime → intro → body type cards (dark bg block) → TCM explanation → metaphor box (gradient bg) → TCM vs Western table (dark bg block) → whatMayHelp card grid → whenToSeeDoctor (amber box) → related links cards → FAQ → food guide link → CTA → disclaimer (dark bg).

**Upgrade plan documented:** `docs/symptom-page-upgrade-plan.md` — 5 modules to surpass meandqi (self-check checklist, match hints, related symptoms grid, solutions/foods recommendation, comparison collapsibles). Edit 2-3 pages/day, ~4-5 weeks.

---

## Performance

| Metric | Before | Current |
|---|---|---|
| Type images total | 13.1MB (PNG) | 946KB (WebP) |
| Herb images total | 850MB | 6.7MB (99.2% reduction, sharp) |
| Noto_Serif_SC font | 1-2MB loaded | Removed |
| Article components | 55 "use client" | 55 server components |
| html-to-image | Eager import (50KB) | Lazy dynamic import |
| OG image | SVG (incompatible) | PNG 53KB |
| Image optimization | unoptimized flag | Vercel auto WebP/AVIF |
| Symptom pages | 70 individual article.tsx | 1 shared component + structured data |

---

## Critical CSS Fix (2026-07-06)

**Root cause:** All custom theme colors (`--color-text`, `--color-accent`, `--color-nav-bg`, `--color-card-bg`, etc.) were defined in `:root` but NOT registered in `@theme`. Tailwind v4 only generates utilities for colors in `@theme`. Result: **8,865 color utility classes silently dropped** across the entire site.

**Symptoms:** Mobile hamburger menu invisible (3 lines used `bg-text` with no generated CSS), all gold accent colors missing, card backgrounds transparent, button gradients absent. Site was readable (body CSS set base text/bg colors) but completely unstyled.

**Fix:** Changed `:root {` to `@theme {` in `globals.css` (1 line). All 16 dynamic colors now registered. Utilities use `var()` references, `.dark` overrides work correctly. Commit: fac94f6.

**Verification:** 289-page build passed, verify-pages 0 issues, confirmed all utilities (`bg-text`, `text-accent`, `bg-card-bg`, `bg-nav-bg`, `from-accent`, etc.) exist in compiled CSS. `.dark` block confirmed after `:root` in cascade.

---

## Google Indexing Status

- Search Console resource: https://www.myeasterntype.com (www)
- Sitemap submitted: 257 URLs
- First indexing request submitted: 2026-06-02
- Indexing progress: 7 pages (6/2) -> 15 -> 23 -> 34 -> 44 -> 60+ (6/30) -> 70 (7/2)
- GSC metrics (early July 2026): 70 pages indexed, 124 queries matching, 283 monthly impressions, 1 click, avg position 65
- Top impression page: /symptoms/kidney-yin-deficiency (62 impressions)
- Best ranking page: /patterns/low-vitality at position 5.5 (page 1!)
- First click: /symptoms/why-do-i-have-seasonal-allergies
- Bing: sitemap + 100 URLs submitted, waiting for indexing
- IndexNow integrated: key file live, batch submission needs local run
- IndexNow key: 62b701021d242b39a739ee629f462a69

---

## Recent Commits (2026-07-02)

| Hash | Message |
|---|---|
| bd1d806 | docs: add symptom page upgrade plan for surpassing meandqi |
| 61b438b | fix: replace all corrupted Chinese parentheses across 70 symptom articles |
| 6f5a946 | fix: remove corrupted unicode chars (FFFD and stray ?) in symptom data |
| 046924e | feat: convert all 70 symptom pages to structured data + shared SymptomArticle component |
| 28896a9 | fix: add alternating bg colors to symptom article sections for visual rhythm |
| 9d29294 | feat: structured symptom article component with sample page (why-am-i-always-tired) |
| 597b3f5 | refactor: symptoms hub with search and category filter tags |
| 57f5509 | refactor: redesign symptoms hub with category groups and quick nav |
| 574e5c7 | fix: digestion solution hero image |
| 01e2701 | feat: digestion solution (chinese-medicine-for-digestion) |

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| Custom colors not in @theme (site unstyled) | Critical | **FIXED 2026-07-06** (fac94f6) |
| Symptom canonical bug (111 URLs affected) | Critical | **FIXED 2026-07-04**, waiting Google recrawl |
| Google ranking still page 5-10 | Monitoring | Needs backlinks and domain age. Sandbox effect |
| Bing: 25 impressions, 4 AI citations (7/3-4) | Promising | Acid reflux page cited by Bing Copilot 4x |
| Brand positioning shift mid-site | Medium | Homepage + new pages use "Chinese medicine", quiz/result pages still say "Eastern Body Type" |
| Quiz page not rebranded | Medium | quiz-client.tsx body text, result badge still say "Eastern" |
| Basic report access control gap | High | report-v2 only checks cookie for pro plan |
| IndexNow 403 from server IP | Medium | Key file live (200). User must run script locally |
| No purchase recovery mechanism | Low | If user clears cookies, reports are lost |
| No conversion tracking | Medium | Need quiz-to-checkout funnel analytics |
| Pinterest content pipeline | Active | Daily 3 pins scheduled |
| Domain authority very low | High | Domain age <1 year, backlinks ~0. Biggest SEO bottleneck |

---

## Competitive Position (July 2026)

**EastType score: 5.8/10** (see analysis below)

### Top 5 TCM English sites
1. sacredlotus.com (~500K/mo) — 40yr clinical, deep formula/acupoint DB, practitioner-focused
2. yinyanghouse.com (~300K/mo) — largest acupuncture/formula encyclopedia, academic
3. meandqi.com (~150K/mo) — modern structured DB, practitioner+patient
4. shen-nong.com (~100K/mo) — legacy TCM education, outdated UI
5. tcmwiki.com (~80K/mo) — wiki community, mixed quality

### EastType advantages (moat)
- Body Type Quiz with paid tiers — no competitor has this
- Solutions column (food-grade recipes with images) — actionable, not theoretical
- Conversational tone for non-practitioners — competitors can't/won't do this
- 100-herb database with real photos + cross-linking
- Problem-format URLs ("why-am-i-always-tired") targeting long-tail search intent

### Key gaps to close
- Domain authority (need backlinks + time)
- Content scale (271 pages vs 5000-20000)
- Content depth per page (upgrade plan in docs/symptom-page-upgrade-plan.md)
- Acupressure content missing (high search volume, not covered)

### Strategy
Don't compete on database size. Compete on accessibility: "user searches symptom in plain English -> gets TCM perspective in plain English -> finds body type -> gets actionable recipe." No competitor serves this path.

---

## Next Steps

### Content
1. **Symptom page upgrades** — 2-3 pages/day per `docs/symptom-page-upgrade-plan.md`, starting with highest GSC impression pages
2. **Solutions section** — continue adding topics (next: cold sensitivity, constipation, skin, anxiety)
3. Continue Pinterest pin publishing (3/day)
4. Consider acupressure content as future expansion

### SEO
1. Submit new URLs to GSC regularly
2. Run IndexNow batch submission locally for all 257 URLs
3. Monitor GSC for keyword appearances and ranking changes
4. Start Reddit/Quora backlink building
5. Check ChatGPT/Perplexity for citation presence weekly

### Product
1. AI online consultation feature (RAG + DeepSeek, $9.99/session) - deferred
2. Rebrand quiz/result pages to "Chinese medicine" consistently
3. Training camp planning (Phase 5, target: 3000+ monthly traffic + 50+ daily quiz completions)

### Data Assets
- 84,295 formula database at `D:\EastType\【A04】中医方剂数据库`
- 332 unused herb photos at `D:\EastType\图片参考\中药图片\A017-中医药材图片`
- Formula illustration source: `D:\EastType\图片参考\方剂配图\`
