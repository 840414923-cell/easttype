# Sprint Log

## Sprint 19 (2026-07-15 to 2026-07-16)

Goal: Conversion infrastructure + symptom page upgrade framework

Completed:

- **Herb library expansion:** 10 new herb pages (cordyceps, snow lotus, knotweed, achyranthes, spatholobus, psoralea, cynomorium, radish seed, belamcanda, acorus). Herbs 122 -> 132, sitemap 293 -> 303.
- **Product + SEO todo cleared (6 of 8 items in docs/todo-product-seo-optimization.md):**
  - GA4 analytics with consent-gated loading + conversion tracking (quiz / result / checkout events)
  - Site search enabled (nav modal + Cmd+K); search index synced wellness 44 -> 51
  - Removed invalid SearchAction from WebSite JSON-LD (was pointing to /quiz)
  - Pinterest Save button on herb pages (lightweight link, no script)
  - Report access secured with HMAC-signed cookie (replaces bypassable plain et_plan cookie)
  - Quiz mid-reveal email capture (optional email for full results, via Resend)
- **Symptom page upgrade framework:** 5 conditional modules added to symptom-article component (matchHint, checklist, relatedSymptoms, relatedSolution, howIsItDifferent). Backward compatible. 5 high-impression pages upgraded (tired, colds, sweets, acid-reflux, seasonal-allergies).

Key metrics:
- Sitemap URLs: 293 -> 303
- Herb pages: 122 -> 132
- Symptom pages upgraded: 0 -> 5 / 70
- Analytics: + GA4 (consent-gated)

Learnings:

- A structured audit (todo-product-seo-optimization.md) plus prioritized list converts known debt into shipped work. 6 of 8 items cleared in one afternoon.
- Backward-compatible conditional modules beat big-bang rewrites: 5 pages live immediately, 65 unchanged, no canonical / URL risk.
- HMAC cookie prevents paywall bypass from the browser console without per-request Redis lookup.
- Search index drift is recurring: search-index.ts had wellness at 44 while actual was 51.

Commits: 882638d, bc22ad0, c57ba88, 4443b24, 9a001f7, b6cffc4, a9de909, 706346e, d66b708, 74b6539

---

## Sprint 18 (2026-07-07 to 2026-07-13)

Goal: Visual identity overhaul + herb content anti-template rewrite + journal/email infrastructure

Completed:

- **Site-wide color scheme:** gold -> Chinese red (#8C2D2A) + cream. Homepage redesigned through 3 iterations (split hero, trust bar, scrolling testimonials, body type cards with images and population percentages, hero image with edge fade, compressed 2.5MB -> 186KB).
- **Quiz + report redesign:** quiz intro page with pricing tiers, report preview as 8-page A4 carousel with keyboard nav, visual upgrade layers 1-3 (mesh gradients, card depth, scroll reveal), inline quiz CTA added after body types on all 70 symptom pages.
- **Herb content anti-template rewrite:** all 119 herb pages rewritten so actionDetails / dietaryAdvice / commonlyUsedFor are unique per page (4 P0 + 30 + 29 + 37 batches). Anti-template rules added to AGENTS.md (section 11). Classical source + safety rating added to all herb pages.
- **Content expansion:** +12 herbs (110 -> 122), +3 wellness (48 -> 51: high-blood-pressure, tcm-body-clock, chinese-face-mapping), +3 solutions detail (acne, PMS, hair-loss), solutions/constipation 301 redirected to wellness/constipation to resolve keyword cannibalization.
- **Journal + email system:** journal module (hub + [slug] + subscribe), monthly digest via Resend + Vercel Cron, welcome email on subscribe, email system unified. Journal link added to top nav. Favicon added for Bing search result icon.
- **Analytics:** Microsoft Clarity (session recordings + heatmaps) added.
- **Herb slug cleanup:** 76 duplicate herb slugs renamed + 301 redirects + internal links updated, 2 malformed slugs fixed, Xuan Shen English name corrected (Red Ginseng -> Scrophularia), herb conditions deduplicated, 6 internal links fixed.
- **SEO fixes:** 3 page-1 pages with 0 CTR had title / desc optimized. Removed medicinal / cure medical claims site-wide; synced doc counts; added lessons 12-15 to AGENTS.md.
- **Pricing update:** Basic $4.99, Pro $12.99.
- **Training camp MVP:** Supabase auth, 7-day Qi Deficient energy recovery plan, dashboard with check-in (LOCAL ONLY, not pushed to main).

Key metrics:
- Sitemap URLs: 274 -> 293
- Herb pages: 110 -> 122
- Wellness pages: 48 -> 51
- Solutions detail: 5 -> 8
- Herb pages with unique content: 119 / 119

Learnings:

- Templated content across 119 pages (same sentence structure, only herb name swapped) risks a programmatic-content penalty. Full rewrite to unique per-page content was necessary and is now enforced by AGENTS.md section 11.
- Keyword cannibalization between sections (solutions/constipation vs wellness/constipation) is resolved by 301 redirect, not by coexistence.
- Color scheme is a brand signal: shifting from gold to Chinese red aligns the visual identity with the "Chinese medicine" rebrand from Sprint 15.

Commits: f4c67a2 (Sprint 17 tail), 382d331, f7a507d, 27e1a00, 74cc997, 08242d9, 74cf9f5, 417f68f, 1b15f9b, a0971f0, 73b7d0a, d5ce2b7, 1401d76, 9b5c2b7, 8bd0463, f26c2a5, ed2f4f6, cf99442, 43ea6da, 327b5cb, 7c6ef76, a4e1f91, c02b6a8, 6b05673, 47bd16f, 2da36d5, fd63d3b, 5ec4488, 80a1aca, eaa2421, d946502, 571da99, 938a91a, 15a84a6, 2ef6bc8, 502a54f, e1e78f4, 1b532fb, 80c49bf, fe03795, d5da344, 2ab8595, 3eaed55, c956d78, 594babf, d8ee7eb, d9fff2c, e597771, ea2c776, 68a95e1, f8449de, b854f2a, 28c6399, 8ea45cc, d542cd6, 7d9564d, 0134f1e, 1f29adc, ee242cd, a8f6f16, 19babee, 03f0d59, 6794822

---

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
