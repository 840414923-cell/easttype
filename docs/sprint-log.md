# Sprint Log

## Sprint 17 (2026-07-06)

Goal: Fix mobile navigation + site-wide color system

Completed:

- **Critical CSS bug discovered and fixed**: All 16 custom theme colors were in `:root` instead of `@theme`. Tailwind v4 silently dropped 8,865 color utility classes across 289 pages. Mobile hamburger menu was invisible (`bg-text` generated no CSS). Fix: 1 line change `:root {` to `@theme {` in globals.css.
- Verified: 289-page build passed, verify-pages 0 issues, all utilities confirmed in compiled CSS, `.dark` overrides working.
- Commit: fac94f6

Key metrics:
- Total pages: 289 (110 herbs + 7 solutions + 70 symptoms + 48 wellness + 9 patterns + 9 types + 10 foods + core)
- Sitemap URLs: 274
- Color classes fixed: 8,865 occurrences across entire codebase

Learnings:

- Tailwind v4 only generates color utilities from `@theme`, NOT from `:root`. This is a breaking change from v3 that is easy to miss.
- The `@theme inline` directive inlines values (static colors), while `@theme` (without inline) generates `var()` references (needed for light/dark switching).
- A site can appear "functional" with completely broken CSS colors if body text/bg are set via regular CSS rules — but interactive elements like hamburger menus become invisible.
- Always verify compiled CSS output, not just source code.

---

## Sprint 16 (2026-07-04 to 2026-07-05)

Goal: Visual polish + content expansion

Completed:

- Symptom hub page redesigned: Hero section + 6 featured symptom cards (flat design) + 11 category SVG icons + full list with alternating rows
- 6 hub pages unified to max-w-5xl (solutions, herbs, patterns, wellness, foods-for, solutions detail)
- Wellness hub upgraded: emoji to 8 SVG icons, alternating row backgrounds, deeper borders
- CTA button optimized: persistent shadow, larger radius, bold font, "Take the Free Quiz"
- Font sizes increased to match Healthline/WebMD standards
- Anxiety & Stress solution added (6th): 3 formulas, 4 images
- 5 new herbs added (105 to 110): Dandelion, Euryale Seed, Burdock Root, Pumpkin Seeds, Black Jujube
- 5 new wellness articles added (43 to 48): Depression, Migraines, Eczema, Hair Loss, PMS
- Symptom canonical URL bug fixed (111 occurrences across 69 pages)

Commits: 0088dc6, 9b4f2d4, 548da4f, ef59786, + visual polish commits

---

Completed:

- Homepage optimization
- Symptoms Hub
- 5 Symptom Pages

Learnings:

- Need stronger internal linking
- Need Pattern Layer

---

## Sprint 02

Goals:

- Pattern Hub
- 5 Pattern Pages

---

## Sprint 15

Goal: Rebrand site positioning from "Eastern wellness" to "Chinese medicine" + create pillar pages

Completed:

- Homepage meta fully rebranded: title, description, OG, Twitter, schema → "Chinese Medicine Body Types"
- layout.tsx default meta updated to Chinese Medicine
- home-client.tsx visible text: badge, subtitle, connect section, SEO section all changed from "Eastern wellness" to "Chinese medicine"
- What Is Chinese Medicine pillar page created (110K/mo keyword, ~1800 words, 3 tables, 5 unique FAQs)
- Chinese Medicine for Beginners guide created (5K/mo keyword, ~2000 words, 7-day starter plan, 2 tables, 4 unique FAQs)
- Wellness hub expanded from 3 to 8 articles, meta updated to "Chinese Medicine Wellness Guides"
- 9 unique FAQs added to wellness-faqs.ts
- Sitemap: 111 → 113 URLs (2 new pages at priority 0.9)
- Push to Vercel: commit d925732

Key metrics:
- Total keyword volume targeted this sprint: ~115K/mo (110K + 5K)
- Wellness pages: 8 → 10 active
- Total content added: ~3,800 words across 2 new pages
- Commit: d925732

Learnings:

- Brand positioning (how Google categorizes your site) matters more than incremental content volume
- "Chinese medicine" has 20x more search volume than "Eastern wellness" (110K vs 5K/mo)
- Pillar pages (what is X) and beginner guides (how to start X) serve fundamentally different user intents and should both exist
- Wellness hub pages should always list all available articles — was listing 3 of 8 existing
- Content quality rules (unique intros, tables, FAQs, disclaimers, 1500+ words) are now institutionalized and working well

---

## Sprint 14

Goal: CTR optimization + food combo pages + internal linking + IndexNow + content expansion Week 1

Completed:

- CTR optimization of all 70 symptom pages (metaTitle + metaDesc rewritten)
- 10 symptom+food combo pages created (/foods-for/[slug] dynamic route)
- Internal linking fixes (nav hamburger menu, homepage Browse All Guides, footer hub links)
- IndexNow integration (113 URLs submitted to Bing/Yandex, 202 Accepted)
- 5 pillar pages published (body types, qi, tongue diagnosis, cooling foods, eastern vs western)
- 70 symptom card Word doc generated for Pinterest

---

## Sprint 13

Completed:

- 30 new symptom pages (batches A-G: women's health, digestion, skin, pain, cognitive, respiratory, urinary/sensory/sleep)
- 7 missing older symptom pages rebuilt (page.tsx + article.tsx)
- Natural-balance pattern page (9/9 types covered)
- 70 symptom titles differentiated (removed "Eastern Body Type Insights" programmatic SEO pattern)
- 7 duplicate wellness pages 301 redirected to corresponding symptom pages
- Sitemap expanded and cleaned (69 → 100 URLs)
- Symptom count: 40 → 70
- Total build pages: 86 → 115

Learnings:

- Never update sitemap without pushing code to Vercel first (Google found 404s, de-indexed pages)
- Programmatic SEO title patterns risk bulk demotion — every title must be unique
- Duplicate content across URL paths causes keyword cannibalization — 301 redirect, don't coexist
- Pattern pages indexed first because their titles contained 3 specific symptom keywords each
- Content depth matters — pattern pages (208 lines) indexed before symptom pages (141 lines)
