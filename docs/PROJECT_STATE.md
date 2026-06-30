# Project State

Last updated: 2026-06-30

---

## Domain

**Production URL:** https://www.myeasterntype.com

Vercel Production domain is `www.myeasterntype.com`. All canonical URLs, sitemap URLs, and metadata use www. Non-www redirects (307) to www.

---

## Published URLs (254 in sitemap)

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

### Wellness Pages (43)

43 in-depth wellness guides covering TCM patterns, concepts, conditions, and remedies. Organized in 4 clusters:
- TCM Organ Patterns (10): spleen-qi-deficiency, kidney-yin-deficiency, liver-qi-stagnation, etc.
- Chinese Medicine For X (12): chinese-medicine-for-insomnia, -anxiety, -weight-loss, -acne, -fatigue, etc.
- TCM Fundamentals (6): what-is-qi, what-is-shen, what-is-jing, yin-and-yang, five-elements-theory, etc.
- Long-tail Supplements (15): chinese-herbs-for-energy, tcm-diet, cooling-foods-chinese-medicine, etc.

7 old duplicate wellness pages are 301 redirected to corresponding symptom pages.

### Food Combo Pages (10)

`/foods-for/[slug]` dynamic route. 10 food therapy guides matching ingredients to body type.

### Herb Pages (100)

`/herbs/[slug]` dynamic route. 100 TCM herbs with real photos, each containing:
- Properties (temperature, flavor, meridian entry)
- Benefits and action details
- Commonly used for (conditions)
- Preparation notes
- Dietary advice
- Safety information
- Simplified + Traditional Chinese names
- Botanical name
- 11 categories: Tonifying, Calming, Heat Clearing, Digestive Support, etc.

### Solutions Pages (2)

New section: TCM herbal formula guides by health concern.
- `/solutions` hub page
- `/solutions/chinese-medicine-weight-loss` detail page with 3 formulas (Lotus Leaf & Hawthorn Tea, Coix Seed & Poria Soup, Rose & Cassia Seed Tea)

Each formula includes classical source citation, ingredients with amounts, step-by-step preparation, dosage, duration, taste profile, cautions, and body type matching.

### Utility Pages (4)

/about, /privacy, /terms, /refund

### Dynamic Pages (5, noindex)

/result, /success, /report-v2, /checkout, /webhook/creem

---

## Content Counts

| Metric | Count |
|---|---|
| Symptom pages | 70 |
| Pattern pages | 9 |
| Type pages | 9 |
| Wellness pages | 43 (+ 7 redirected) |
| Food combo pages | 10 |
| Herb pages | 100 |
| Solutions pages | 2 (hub + 1 detail) |
| Hub pages | 5 (symptoms, patterns, wellness, foods-for, herbs) |
| Utility pages | 4 |
| Sitemap URLs | 254 |
| Total build pages | 268 |
| Product tiers | 3 (Free / $4.99 / $12.99) |
| Pattern coverage | 9/9 types (complete) |

---

## Performance

| Metric | Before Sprint 11 | Current |
|---|---|---|
| Type images total | 13.1MB (PNG) | 946KB (WebP) |
| Noto_Serif_SC font | 1-2MB loaded | Removed |
| Article components | 55 "use client" | 55 server components |
| html-to-image | Eager import (50KB) | Lazy dynamic import |
| OG image | SVG (incompatible) | PNG 53KB |
| Image optimization | unoptimized flag | Vercel auto WebP/AVIF |

---

## Google Indexing Status

- Search Console resource: https://www.myeasterntype.com (www)
- Sitemap submitted: 254 URLs
- First indexing request submitted: 2026-06-02
- Indexing progress: 7 pages (6/2) -> 15 -> 23 -> 34 -> 44 pages (6/24) -> 60+ pages (6/30)
- GSC keywords showing: "crave sweets", "craving sweets why", growing
- GSC metrics: clicks increasing, impressions growing steadily
- IndexNow integrated: key file live, batch submission needs local run
- IndexNow key: 62b701021d242b39a739ee629f462a69
- Ranking: keywords appearing at positions 60-96, first clicks generated

---

## Recent Commits

| Hash | Message |
|---|---|
| d455658 | fix: dropdown menu background was transparent, use CSS variable directly |
| ea5cf59 | fix: add 4 missing URLs to sitemap (herbs hub + 3 wellness pages) |
| 2a3d738 | feat: replace placeholder images with real formula photos |
| acefaf4 | fix: use async params for Next.js 16 in solutions detail page |
| cd63d55 | fix: add Herbal Solutions to nav Guides dropdown |
| 06bacb2 | feat: add TCM Solutions section with weight loss formula guide |
| a8a5767 | fix: update herbs page to show 100 herbs with category counts |
| c251b70 | feat: expand herb library from 51 to 100 herbs with real photos |
| cc3124d | feat: massively expand herb detail pages with 5 new content sections |
| 1900085 | feat: add botanical names, expand meta descriptions and FAQs for all 51 herbs |
| b1428fd | feat: add 30 new herbs with real photos, total 51 herbs |

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| Google indexing growing (60+ pages, 6/30) | Monitoring | Accelerating, ~10/mo new pages indexed |
| Brand positioning shift mid-site | Medium | Homepage + new pages use "Chinese medicine", quiz/result pages still say "Eastern Body Type" |
| Quiz page not rebranded | Medium | quiz/page.tsx title, quiz-client.tsx body text, result badge all still say "Eastern" |
| Basic report access control gap | High | report-v2 only checks cookie for pro plan. Anyone with URL can see basic report |
| IndexNow 403 from server IP | Medium | Key file is live (200). Server/datacenter IP blocked by IndexNow. User must run script locally |
| No purchase recovery mechanism | Low | If user clears cookies, reports are lost |
| No conversion tracking | Medium | Need to set up quiz-to-checkout funnel analytics |
| Em dashes in older content | Low | layout.tsx, older article.tsx files contain em dashes. New content is clean |
| Google ranking still page 8-10 | Monitoring | Needs backlinks and domain age. Organic growth strategy in progress |
| Pinterest content pipeline | Active | 49 food pins + 30 recipe pins + 20 short video scripts in progress |

---

## Next Steps

### Content
1. Solutions section: add more topics (fatigue, insomnia, digestion, cold sensitivity, constipation, skin, water retention, menstrual, anxiety, hair loss, night sweats) - one at a time
2. Continue Pinterest pin publishing + short video creation
3. Consider cleaning up em dashes in older content

### SEO
1. Submit new URLs to GSC regularly
2. Run IndexNow batch submission locally for all 254 URLs
3. Monitor GSC for "Chinese medicine" keyword appearances
4. Continue building organic backlinks

### Product
1. AI online consultation feature (RAG + DeepSeek, $9.99/session) - deferred
2. Rebrand quiz/result pages to "Chinese medicine" consistently

### Data Assets
- 84,295 formula database available at `D:\EastType\【A04】中医方剂数据库` for future Solutions content
- 200+ herb reference photos at `D:\EastType\图片参考\中药图片`
