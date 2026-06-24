# EastType Content Expansion Plan — Phase 1

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 20 high-quality pages over 30 days to capture missed keyword traffic (especially "Chinese medicine" / TCM terms) and fill content gaps identified in keyword analysis.

**Architecture:** Follow existing codebase patterns — each page gets a `page.tsx` (metadata + JSON-LD) and `article.tsx` (content). New data files for pillar pages. Update sitemap + submit to IndexNow after each batch.

**Tech Stack:** Next.js 16, TypeScript, Zod, existing components (FaqSection, SymptomCta, buildArticleJsonLd)

---

## Content Calendar (1-2 pages per day, 5 days/week)

### Week 1: High-Volume Pillar Pages (capture missed "Chinese medicine" traffic)

| Day | Page | Target Keyword | Est. Volume |
|-----|------|---------------|-------------|
| 1 | Chinese Medicine Body Types pillar | "chinese medicine body types" | 18K/mo |
| 2 | What Is Qi / Chi Energy | "what is qi" / "what is chi" | 14K/mo |
| 3 | TCM Tongue Diagnosis Guide | "chinese medicine tongue diagnosis" | 12K/mo |
| 4 | Cooling Foods in Chinese Medicine | "cooling foods chinese medicine" | 6K/mo |
| 5 | Eastern vs Western Medicine | "eastern medicine vs western medicine" | 6K/mo |

### Week 2: Women's Health + High-Intent Symptom Pages

| Day | Page | Target Keyword | Est. Volume |
|-----|------|---------------|-------------|
| 6 | PCOS and Chinese Medicine | "pcos chinese medicine" | 8K/mo |
| 7 | Menopause Natural Remedies (food combo) | "menopause natural remedies" | 8K/mo |
| 8 | Herbal Tea for Sleep | "herbal tea for sleep" | 6K/mo |
| 9 | Why Do I Have Dry Mouth? | "why do i have dry mouth" | 10K/mo |
| 10 | Why Do I Have Chest Tightness? | "chest tightness chinese medicine" | 6K/mo |

### Week 3: Missing Food Combo Pages + Seasonal Content

| Day | Page | Target Keyword | Est. Volume |
|-----|------|---------------|-------------|
| 11 | Foods for Night Sweats | "foods for night sweats" | 4K/mo |
| 12 | Foods for Headaches | "foods for headaches natural" | 5K/mo |
| 13 | Foods for PMS / Period Cramps | "foods for period cramps" | 5K/mo |
| 14 | Seasonal Eating Guide (Spring/Summer) | "seasonal eating chinese medicine" | 4K/mo |
| 15 | Seasonal Eating Guide (Autumn/Winter) | "winter foods chinese medicine" | 4K/mo |

### Week 4: Comparison + Glossary + More Food Combos

| Day | Page | Target Keyword | Est. Volume |
|-----|------|---------------|-------------|
| 16 | Ayurveda vs Chinese Medicine Body Types | "ayurveda vs tcm" | 12K/mo |
| 17 | Dampness in the Body Explained | "dampness in the body tcm" | 8K/mo |
| 18 | Foods for Eczema | "foods for eczema natural" | 5K/mo |
| 19 | Foods for Joint Pain | "foods for joint pain natural" | 4K/mo |
| 20 | Eastern Wellness Glossary | "chinese medicine terms" | 6K/mo |

---

## File Structure

Each page follows the existing pattern:

### Pillar / Comparison / Glossary Pages (new section: `/wellness/`)
- `src/app/wellness/{slug}/page.tsx` — metadata + JSON-LD
- `src/app/wellness/{slug}/article.tsx` — content
- Data inline in article (same as existing wellness pages)

### New Symptom Pages
- `src/app/symptoms/{slug}/page.tsx`
- `src/app/symptoms/{slug}/article.tsx`
- Add entry to `src/lib/symptoms-data.ts`
- Add FAQs to `src/lib/symptom-faqs.ts`

### New Food Combo Pages
- Add entry to `src/lib/food-combo-data.ts`
- Dynamic route handles rendering automatically

### Shared Updates (after each batch of 5 pages)
- `public/sitemap.xml` — add new URLs
- Run `npx tsx scripts/submit-indexnow.ts` — submit to Bing/Yandex
- Submit new URLs to GSC manually

---

## Quality Rules (avoid duplicate/low-quality flagging)

1. **Zero copy-paste paragraphs** across pages — every intro, every section must be unique
2. **Vary page structure** — not every page must have the same sections in the same order
3. **Different analogies per page** — no repeated metaphors
4. **Unique FAQs** — no question should appear on more than one page
5. **Hedge language** — use "may help", "might be associated with", "in Eastern wellness"
6. **Banned words** — no: moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize. No em dashes.
7. **Meta descriptions** — include "Free quiz" or "Free assessment" CTA
8. **Minimum 1500 words** per page for pillar pages, 1200 for symptom/food pages
9. **Include at least one table or ordered list** per page (AI snippet optimization)

---

## Implementation Tasks

### Task 1: Chinese Medicine Body Types Pillar Page

**Files:**
- Create: `src/app/wellness/chinese-medicine-body-types/page.tsx`
- Create: `src/app/wellness/chinese-medicine-body-types/article.tsx`
- Modify: `public/sitemap.xml`

This is the single highest-impact page. Targets "chinese medicine body types" (18K/mo). The existing `/wellness/chinese-medicine-body-types` page already exists but may need a review — check if it's the same URL. If so, enhance it instead of creating a new one.

- [ ] **Step 1: Check if page already exists**
  Run: check if `src/app/wellness/chinese-medicine-body-types/` directory exists
  If exists: read current article.tsx and evaluate quality/keyword targeting
  If not: proceed to create

- [ ] **Step 2: Create page.tsx** with metadata targeting "chinese medicine body types" + related keywords

- [ ] **Step 3: Create article.tsx** with unique content covering:
  - What are Chinese medicine body types (9 types overview)
  - Comparison table of all 9 types
  - How to identify your type
  - Link to free quiz
  - Unique FAQs

- [ ] **Step 4: Update sitemap** if URL is new

- [ ] **Step 5: Build + typecheck + commit**

### Task 2: What Is Qi / Chi Energy Page

**Files:**
- Create: `src/app/wellness/what-is-qi/page.tsx`
- Create: `src/app/wellness/what-is-qi/article.tsx`
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Create page.tsx** targeting "what is qi", "what is chi energy", "qi energy explained"

- [ ] **Step 2: Create article.tsx** with unique content:
  - Definition of qi in plain English
  - How qi moves in the body
  - Signs of qi imbalance (deficient vs stagnant)
  - Foods and practices that support qi
  - No overlap with existing pattern pages

- [ ] **Step 3: Update sitemap**

- [ ] **Step 4: Build + typecheck + commit**

### Task 3-20: Repeat pattern for each page in the calendar

Each task follows the same pattern:
1. Create page.tsx with targeted metadata
2. Create article.tsx with unique, high-quality content
3. Update sitemap
4. Build + typecheck + commit
5. Submit URL to GSC + IndexNow

---

## Weekly Batch Submission

After completing each week's 5 pages:

- [ ] Run `npx tsx scripts/submit-indexnow.ts` to submit all URLs to Bing/Yandex
- [ ] Manually submit 5 new URLs to GSC (one per day or in batch)
- [ ] Check GSC for new keyword appearances

---

## Success Metrics (check at end of 30 days)

| Metric | Current | Target |
|--------|---------|--------|
| Indexed pages | ~34 | 60-80 |
| GSC keywords shown | 2 | 20-40 |
| Monthly impressions | ~50 | 500-1000 |
| Monthly clicks | 3 | 20-50 |
| Bing indexed pages | unknown | 40-60 |
