# Current Sprint

Sprint 19 - Conversion Infrastructure + Symptom Page Upgrade Framework

Status: Complete

Start Date: 2026-07-15

End Date: 2026-07-16

---

## Sprint 19 Completed

### A. Herb library expansion + count sync

| Task | Status |
|---|---|
| 10 new herb pages (cordyceps, snow lotus, knotweed, achyranthes, spatholobus, psoralea, cynomorium, radish seed, belamcanda, acorus) - herbs 122 -> 132 | Done |
| Homepage count sync (herbs 122 -> 132, total guides 242 -> 252) | Done |
| Sitemap 293 -> 303 URLs | Done |

### B. Product + SEO optimization todo (docs/todo-product-seo-optimization.md)

| Task | Status |
|---|---|
| GA4 analytics with consent-gated loading + conversion tracking (quiz / result / checkout events) | Done |
| Site search enabled: nav modal + Cmd+K, search index synced wellness 44 -> 51 | Done |
| Removed invalid SearchAction from WebSite JSON-LD (was pointing to /quiz) | Done |
| Pinterest Save button on herb pages (lightweight link, no script) | Done |
| Report access secured with HMAC-signed cookie (replaces plain et_plan cookie that was bypassable from console) | Done |
| Quiz mid-reveal email capture (optional email for full results, via Resend) | Done |

### C. Symptom page upgrade framework

| Task | Status |
|---|---|
| 5 upgrade modules added to symptom-article component (backward compatible, conditional render): matchHint, checklist, relatedSymptoms, relatedSolution, howIsItDifferent | Done |
| Upgraded 5 high-impression symptom pages: why-am-i-always-tired, why-do-i-always-catch-colds, why-do-i-crave-sweets, why-do-i-have-acid-reflux, why-do-i-have-seasonal-allergies | Done |

---

## Key Metrics

| Metric | Before (Sprint 18 end) | After (Sprint 19) |
|---|---|---|
| Herb pages | 122 | 132 |
| Sitemap URLs | 293 | 303 |
| Symptom pages with upgrade modules | 0 | 5 / 70 |
| Analytics tools | Vercel Analytics + Clarity | + GA4 (consent-gated) |
| Site search | Written, unused | Live (nav + Cmd+K) |
| Report access control | Plain cookie (bypassable) | HMAC-signed cookie |
| Pinterest Save button | None | Herb pages |

---

## What Was Not Completed

| Task | Reason |
|---|---|
| Creem purchase event -> GA4 | GA4 conversion tracking added; purchase event on success / webhook not yet wired |
| Pinterest Save on wellness article pages | Done on herbs only; wellness deferred |
| Symptom upgrade rollout (65 remaining pages) | Ongoing initiative, 2-3 pages/day per docs/symptom-page-upgrade-plan.md |
| Training camp | MVP built locally in Sprint 18, not pushed (waiting for traffic threshold) |

---

## New Risks Introduced

| Risk | Severity | Mitigation |
|---|---|---|
| GA4 loads with consent gate - may undercount if users decline | Low | Compare with Vercel Analytics baseline; TCM audience skews accepting |
| HMAC cookie changes report access flow | Medium | Existing paid users with old cookie need re-auth; monitor support requests |
| Symptom upgrade modules conditional - 65 pages still on old layout | Low | Backward compatible; no canonical / URL / title risk; gradual rollout |
| Quiz mid-reveal email capture may add friction | Low | Optional field; review GA4 funnel data next sprint |

---

## Key Learnings

1. **The todo-product-seo-optimization.md audit was high-leverage.** One afternoon cleared 6 of 8 items that had been sitting (search bar written but unused for weeks, GA4 missing, cookie bypass known). A structured audit plus prioritized list converts known debt into shipped work.
2. **Backward-compatible conditional modules beat big-bang rewrites.** Adding 5 upgrade modules with conditional render let 5 pages go live immediately while 65 stay unchanged. No canonical / URL / title risk, no build breakage, incremental rollout.
3. **HMAC cookie is stronger than plain cookie for paywall.** The plain et_plan=pro cookie was bypassable from the browser console. HMAC signature prevents forgery without needing a Redis lookup on every request.
4. **Search index drift is a recurring trap.** search-index.ts had wellness hardcoded at 44 while actual was 51. Any time a content type grows, its search index must sync in the same commit.

---

## Next Sprint: Sprint 20

Goal: Conversion data review + symptom upgrade rollout + brand consistency

Tasks:
1. Continue symptom page upgrades - next batch of high-impression pages (2-3/day)
2. Wire Creem purchase event to GA4 (complete quiz -> result -> checkout -> purchase funnel)
3. Add Pinterest Save button to wellness article pages
4. Rebrand quiz / result / report visible text from "Eastern Body Type" to "Chinese medicine" (consistency with homepage)
5. Review first GA4 funnel data: quiz completion rate, result -> checkout drop-off
6. Submit 10 new herb URLs (132 total) to GSC + IndexNow
7. Monitor GSC + AI citation (Bing Copilot / Perplexity / ChatGPT) for new herb pages
