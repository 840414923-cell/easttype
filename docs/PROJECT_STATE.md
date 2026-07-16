# Project State

Last updated: 2026-07-16

---

## Domain

**Production URL:** https://www.myeasterntype.com

Vercel Production domain is `www.myeasterntype.com`. All canonical URLs, sitemap URLs, and metadata use www. Non-www redirects (307) to www.

---

## Published URLs (306 in sitemap, 327 build pages)

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

### Wellness Pages (51)

51 in-depth wellness guides covering TCM patterns, concepts, conditions, and remedies. Organized in 4 clusters:
- TCM Organ Patterns (10): spleen-qi-deficiency, kidney-yin-deficiency, liver-qi-stagnation, etc.
- Chinese Medicine For X (18): chinese-medicine-for-insomnia, -anxiety, -weight-loss, -acne, -fatigue, -depression, -migraines, -eczema, -hair-loss, -pms, -high-blood-pressure, etc.
- TCM Fundamentals (7): what-is-qi, what-is-shen, what-is-jing, yin-and-yang, five-elements-theory, tcm-body-clock, etc.
- Long-tail Supplements (16): chinese-herbs-for-energy, tcm-diet, cooling-foods-chinese-medicine, chinese-face-mapping, etc.

7 old duplicate wellness pages are 301 redirected to corresponding symptom pages.

### Food Combo Pages (10)

`/foods-for/[slug]` dynamic route. 10 food therapy guides matching ingredients to body type.

### Herb Pages (132)

`/herbs/[slug]` dynamic route. 132 TCM herbs with real photos, each containing:
- Properties (temperature, flavor, meridian entry)
- Benefits and action details
- Commonly used for (conditions)
- Preparation notes
- Dietary advice
- Safety information
- Simplified + Traditional Chinese names
- Botanical name
- 11 categories: Tonifying, Calming, Heat Clearing, Digestive Support, etc.

### Solutions Pages (9)

TCM herbal formula guides by health concern.
- `/solutions` hub page (left-image right-text layout, alternating bg colors)
- `/solutions/chinese-medicine-weight-loss` - 3 formulas (Lotus Leaf & Hawthorn, Coix Seed & Poria, Rose & Cassia Seed)
- `/solutions/chinese-medicine-for-energy` - 3 formulas (Ginseng & Jujube, Astragalus & Ginger, American Ginseng & Ophiopogon)
- `/solutions/chinese-medicine-for-sleep` - 3 formulas (Sour Jujube & Longan, Lily & Lotus, Rose & Chrysanthemum)
- `/solutions/chinese-medicine-for-digestion` - 3 formulas (Yam & Poria, Dendrobium & Ophiopogon, Tangerine Peel & Hawthorn)
- `/solutions/chinese-medicine-for-anxiety` - 3 formulas (Rose & Citrus Bloom, Lily & Lotus Heart-Calming, Jujube & Longan Serenity)
- `/solutions/chinese-herbs-for-acne` - 3 formulas (added Sprint 18)
- `/solutions/chinese-herbs-for-pms` - 3 formulas (added Sprint 18)
- `/solutions/chinese-herbs-for-hair-loss` - 3 formulas (added Sprint 18)

Note: `/solutions/chinese-medicine-for-constipation` was 301 redirected to `/wellness/chinese-medicine-for-constipation` (2026-07-07) to resolve keyword cannibalization.

Each formula includes classical source citation, ingredients with amounts, step-by-step preparation, dosage, duration, taste profile, cautions, and body type matching.

### Journal Pages (2)

`/journal` hub + `/journal/heatwave-survival-by-body-type`. Monthly digest email via Resend + Vercel Cron (added Sprint 18).

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
| Wellness pages | 54 (+ 7 redirected) |
| Food combo pages | 10 |
| Herb pages | 132 |
| Solutions pages | 9 (hub + 8 detail) |
| Hub pages | 7 (symptoms, patterns, wellness, foods-for, herbs, solutions, journal) |
| Journal pages | 2 (hub + 1 article) |
| Utility pages | 4 |
| Sitemap URLs | 306 |
| Total build pages | 327 |
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

**Upgrade framework implemented (2026-07-16):** 5 conditional modules added to `symptom-article.tsx` (matchHint, checklist, relatedSymptoms, relatedSolution, howIsItDifferent). 5 of 70 pages upgraded so far (tired, colds, sweets, acid-reflux, seasonal-allergies). Rollout continues at 2-3 pages/day per `docs/symptom-page-upgrade-plan.md`.

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

## Search Engine Performance (updated 2026-07-16, data from 7/8-7/14)

### Google Search Console

- Pages indexed: 242 / 303 (80%) as of 2026-07-10
- Indexing progress: 7 (6/2) -> 15 -> 23 -> 34 -> 44 -> 60+ (6/30) -> 70 (7/2) -> 242 (7/10)
- GSC metrics (7/8-7/14): 450 impressions, 2 clicks, avg position 75.9 (page 7-8)
- Top impression pages: /wellness/kidney-yin-deficiency (80), /solutions/chinese-medicine-for-constipation (44), /wellness/chinese-medicine-for-constipation (43), /herbs/luo-han-guo-luo-han-guo (37), /wellness/chinese-face-mapping (27)
- Clicks from: /herbs/he-shou-wu-he-shou-wu, /symptoms/why-do-i-keep-gaining-weight, /herbs/hong-jing-tian-hong-jing-tian
- Google sandbox effect active (position 75.9). Domain authority is the bottleneck

### Bing

- Bing metrics (7/9-7/14): 165 impressions, 5 clicks, positions 3-8 (page 1-2)
- Top Bing pages: /wellness/yin-and-yang (21 imp, pos 5.6), /wellness/cooling-foods-chinese-medicine (11 imp, pos 5.0), /wellness/what-is-jing (pos 4.67), /about (pos 3.67)
- Bing ranks EastType on page 1-2 while Google has it on page 7-8. Content quality is sufficient, the gap is domain authority

### Bing AI / AEO Citations

- 22 citations across 11 pages (as of 2026-07-14)
- Most cited: /wellness/chinese-medicine-for-bloating (4), /wellness/chinese-medicine-for-acid-reflux (4), /wellness/chinese-medicine-for-cold-hands (3)
- Pattern: "chinese-medicine-for-X" wellness pages with structured Q&A get cited most
- Also cited: homepage (2), /wellness/tcm-diet (2), herbs: lotus-seed (2), dandelion (1), wu-hua-guo (1), tao-jiao (1), gui-hua (1), /wellness/yin-and-yang (1)

### Infrastructure

- Search Console resource: https://www.myeasterntype.com (www)
- Sitemap submitted: 303 URLs
- IndexNow integrated: key file live, key 62b701021d242b39a739ee629f462a69

---

## Recent Commits (2026-07-16)

| Hash | Message |
|---|---|
| 74b6539 | feat: upgrade 4 high-impression symptom pages with 5 content modules |
| d66b708 | feat: upgrade why-am-i-always-tired with 5 content modules |
| 706346e | feat: add 5 upgrade modules to symptom article framework (backward compatible) |
| a9de909 | feat: secure report access with HMAC-signed cookie + quiz mid-reveal email capture |
| b6cffc4 | feat: add Pinterest Save button to herb pages |
| 9a001f7 | feat: enable site search with nav modal + Cmd+K, sync wellness index to 51 |
| 4443b24 | feat: add GA4 analytics with consent-gated loading and conversion tracking |
| 882638d | feat: add 10 new herb pages (herbs 122->132, sitemap 293->303) |
| a8f6f16 | fix: rename 76 duplicate herb slugs + add 301 redirects |
| d5da344 | fix: complete anti-template rewrite for all 119 herb pages (unique content) |

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| Custom colors not in @theme (site unstyled) | Critical | **FIXED 2026-07-06** (fac94f6) |
| Symptom canonical bug (111 URLs affected) | Critical | **FIXED 2026-07-04**, waiting Google recrawl |
| Google ranking page 7-8 (position 75.9) | Monitoring | Needs backlinks and domain age. Bing already page 1-2, Google will follow |
| Bing: 165 imp/week, 22 AI citations / 11 pages (7/14) | Growing | Bing page 1-2 vs Google page 7-8. AEO working, wellness-for-X format strongest |
| Brand positioning shift mid-site | Medium | Homepage + new pages use "Chinese medicine", quiz/result pages still say "Eastern Body Type" |
| Quiz page not rebranded | Medium | quiz-client.tsx body text, result badge still say "Eastern" |
| Basic report access control gap | High | **FIXED 2026-07-16** (HMAC-signed cookie replaces bypassable plain cookie) |
| IndexNow 403 from server IP | Medium | Key file live (200). User must run script locally |
| No purchase recovery mechanism | Low | If user clears cookies, reports are lost |
| Conversion tracking | Medium | **FIXED 2026-07-16** (GA4 with consent-gated loading + conversion events) |
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
- Content scale (303 pages vs 5000-20000)
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
2. Run IndexNow batch submission locally for all 303 URLs
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
