# Decisions

Every major product decision goes here.

Format: Date, Decision, Reason.

---

## 2026-06

Decision: Use symptom-first architecture.

Reason: English users search symptoms, not TCM terminology. We meet them where they are.

---

## 2026-06

Decision: Build Pattern Layer before TCM Layer.

Reason: Patterns bridge symptom language and TCM language. Users need this middle step before encountering concepts like Qi Deficiency.

---

## 2026-06

Decision: Focus on AEO + SEO.

Reason: Long-term traffic strategy. Build content assets first, promotion second. Search engines reward accumulated content.

---

## 2026-06

Decision: Educational content only.

Reason: We are not a medical platform. No diagnosis, treatment, cure, or medical advice. Use hedging language: may, might, can be associated with.

---

## 2026-06

Decision: Build assets before promotion.

Reason: Promotion without content is wasted effort. First build a library that has real value, then drive traffic to it.

---

## 2026-06

Decision: Freeze /wellness/ URLs. Do not migrate or restructure.

Reason: Site is newly launched. No indexing, impression, or ranking data yet. Premature URL restructuring risks losing whatever authority exists. Continue building /symptoms/ and /patterns/ instead. Migration planned but not scheduled. Documented in content-architecture.md.

---

## 2026-06

Decision: Content layer architecture: Symptoms -> Patterns -> Types -> Quiz. Wellness becomes resource-only layer.

Reason: Each layer has a clear role. Symptoms capture search traffic. Patterns bridge to TCM concepts. Types provide full profiles. Quiz converts. Wellness serves as a food guide and topic resource. No layer should duplicate another layer's purpose. Documented in content-architecture.md.

---

## 2026-06-02

Decision: Verification sprint before content sprint.

Reason: Full project audit found 4 P0 issues (broken link, missing sitemap entries, MedicalWebPage violation, no noindex on transactional pages). These would undermine all content work. Fix infrastructure first, then resume content.

---

## 2026-06-02

Decision: Cookie-based paywall (not URL parameter).

Reason: URL parameter (?plan=pro) allowed anyone to access paid content. Cookie verification raises the bar — only users who complete checkout get the cookie. Not bulletproof (can be manually set) but sufficient for current stage.

---

## 2026-06-02

Decision: Use Vercel Analytics (not Plausible).

Reason: Site is deployed on Vercel. Vercel Analytics is free, zero-config, and requires no third-party signup. Plausible requires a paid plan ($9/month minimum).

---

## 2026-06-02

Decision: Add wellness -> symptom/pattern cross-links.

Reason: 10 wellness articles were content silos with zero connection to symptoms or patterns. This broke the user journey (wellness readers had no path to discover their body type). Cross-links are navigational, not duplicate content — they point to different pages with different angles.

---

## 2026-06-02

Decision: Wait for data before Sprint 05.

Reason: 30 content pages published in one day with zero real-user data. Continuing to write content without knowing what works is guessing. Need at least 1-2 weeks of Vercel Analytics + Search Console data to make informed decisions.

Note: This decision was overridden. Content expansion continued (Sprint 06-10) based on keyword research and coverage gap analysis rather than live search data. 33 symptoms and 8 patterns were published before Search Console data became available.

---

## 2026-06-02

Decision: Expand to 8 pattern pages (from 5).

Reason: 3 additional types (damp_heat, blood_stasis, sensitive) had no pattern page representation. Users landing on those type pages had no bridge content. Adding damp-heat, blood-stasis, and high-sensitivity pattern pages closes the gap to 8/9 types covered.

---

## 2026-06-02

Decision: Homepage Scheme B — fewer sections, clearer narrative.

Reason: Original homepage had 11 sections including feature lists. Scheme B reduced to 8 sections with a narrative flow: Hero -> Symptoms -> Connect the Dots -> Types -> Pricing -> CTA -> FAQ. Connect the Dots explains the unique value proposition in 3 steps. Net reduction of 72 lines.

---

## 2026-06-02

Decision: Unified Nav via layout.tsx wrappers.

Reason: 51 content pages lacked consistent navigation. Adding Nav + Footer to each article.tsx would require editing 51 files. Layout.tsx wrappers for symptoms/, patterns/, and wellness/ sections achieve the same result with 3 new files and zero content file changes.

---

## 2026-06-02

Decision: About page references ZYYXH/T157-2009 standard.

Reason: Trust signals require academic grounding. The 2009 Standard for Classification and Diagnosis of TCM Constitutions (Zhongguo Zhongyiyao Xuehui) is the authoritative source for the 9-type system used by EastType. Citing this gives credibility without making medical claims. No individual names are mentioned.

---

## 2026-06-02

Decision: Honest AI disclosure on About page.

Reason: Content is AI-assisted. Hiding this would erode trust if discovered. Bold disclaimer upfront is better than buried fine print. Users respect transparency over false authority.

---

## 2026-06-02

Decision: Pause content expansion at 33 symptoms.

Reason: 33 symptom pages across 8 patterns provides strong topical authority. Without Search Console data, further expansion is guessing. Need 1-2 weeks of indexing data to identify which queries drive impressions before writing more content.

---

## 2026-06-02

Decision: Light/dark mode toggle approved.

Reason: User preference. Dark mode remains default. Implementation via Tailwind CSS variables to replace hardcoded dark colors in nav.tsx, home-client.tsx, share-card.tsx, and report-client.tsx.

---

## 2026-06-02

Decision: Use www.myeasterntype.com as canonical domain.

Reason: Vercel Production domain is www.myeasterntype.com. Non-www 307 redirects to www. All canonical URLs, sitemap URLs, metadata, and JSON-LD must use www to match Vercel domain. This resolves Google Search Console "无法抓取" issue caused by www/non-www mismatch.

---

## 2026-06-02

Decision: Never use PowerShell for UTF-8 .tsx file edits.

Reason: PowerShell Get-Content/WriteAllText corrupts Chinese characters in UTF-8 files. Use Node.js scripts (fs.readFileSync/writeFileSync with utf8 encoding) instead.

---

## 2026-06-02

Decision: Never use var() self-reference in Tailwind v4 @theme inline.

Reason: `--color-bg: var(--color-bg)` creates circular reference that causes CSS parsing failure and Vercel 502 error. Theme variables must be defined in :root/.dark blocks outside @theme inline. @theme inline only contains fixed values (fonts, color constants).

---

## 2026-06-02

Decision: Always confirm Vercel Production domain before setting URLs.

Reason: Set canonical URLs, sitemap URLs, and metadata to non-www, but Vercel Production domain was www. This mismatch caused Google Search Console to fail sitemap crawling on the non-www resource. Always check Vercel Domain settings first.
