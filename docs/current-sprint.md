# Current Sprint

Sprint 15 — Brand Repositioning to Chinese Medicine + Pillar Pages

Status: Complete

Start Date: 2026-06-24

End Date: 2026-06-24

---

## Sprint 15 Completed

| Task | Status |
|---|---|
| Homepage meta rebrand: "Eastern Body Type" → "Chinese Medicine Body Types" | Done |
| layout.tsx default meta updated to Chinese Medicine | Done |
| home-client.tsx visible text: all "Eastern wellness" → "Chinese medicine" | Done |
| What Is Chinese Medicine pillar page (110K/mo, ~1800 words, 3 tables) | Done |
| Chinese Medicine for Beginners guide (5K/mo, ~2000 words, 7-day plan) | Done |
| Wellness hub expanded: 3 → 8 articles + meta updated | Done |
| 9 unique FAQs added (5 for pillar, 4 for beginners) | Done |
| Sitemap updated: 111 → 113 URLs | Done |
| Push to Vercel (commit d925732) | Done |

---

## What Was Not Completed

| Task | Reason |
|---|---|
| GSC URL submission for new pages | User does this manually (~10/day quota) |
| IndexNow batch submission | Script exists, run after Vercel deploy confirmed |
| Content expansion Week 2 (PCOS, Menopause, etc.) | Next sprint |
| Bing Webmaster Tools setup | User needs to set up manually |
| Google Indexing API automation | Needs GOOGLE_INDEXING_TOKEN env var |

---

## New Risks Introduced

| Risk | Severity | Mitigation |
|---|---|---|
| Brand positioning shift mid-site (Eastern → Chinese) | Medium | New pages use "Chinese medicine", old pages retain "Eastern wellness". Google needs time to understand the shift. Monitor GSC keyword changes |
| Homepage title change on already-indexed page | Low | Google re-crawls and updates title within days. Old title wasn't generating clicks anyway (3 clicks total) |
| Wellness freeze decision overridden | Low | Old "freeze" decision was made when site had no data. Now 34 pages indexed, data supports expansion. Documented in decisions.md |
| Pillar page targets 110K/mo keyword — high competition | Medium | Page is comprehensive (1800 words, 3 tables, 5 FAQ, JSON-LD). Will take time to rank. Long-term play |

---

## Key Learnings

1. **Brand positioning matters more than content volume.** Adding pages is incremental; changing how Google categorizes your site is transformative. The homepage meta change is the single highest-impact SEO action this sprint.
2. **"Chinese medicine" has 20x more search volume than "Eastern wellness".** 110K/mo vs ~5K/mo. Aligning site language with search behavior is critical.
3. **Pillar pages and beginner guides serve different users.** Pillar = comprehensive reference (what is it). Beginner = actionable starter (how to start). Both are needed.
4. **Wellness hub page was underutilized.** Only 3 articles listed when 7 existed. Hub pages should always list all available content.
5. **Content quality rules working well.** All new pages follow: unique intro, at least one table, unique FAQs, medical disclaimer, no banned words, 1500+ words.

---

## Next Sprint: Sprint 16

Goal: Index submission + Content expansion Week 2

Tasks:
1. Submit new URLs to GSC + IndexNow
2. PCOS and Chinese Medicine (8K/mo)
3. Menopause Natural Remedies food combo (8K/mo)
4. Herbal Tea for Sleep (6K/mo)
5. Why Do I Have Dry Mouth (10K/mo)
6. Why Do I Have Chest Tightness (6K/mo)
7. Monitor GSC for "Chinese medicine" keyword appearances
