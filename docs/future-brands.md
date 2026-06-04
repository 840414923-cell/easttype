# Future Brands — Vertical Health Micro-Sites

Status: Backlog (not started, not scheduled)

Prerequisite: EastType must achieve at least 10 paying customers first. Only then replicate the model.

---

## Core Insight

People search embarrassing health problems in plain language, not medical terms. The symptom-first architecture works especially well for topics people won't discuss with friends or doctors.

High search volume + low quality competition + privacy-sensitive = monetization opportunity.

---

## Brand Candidates

### 1. Male Performance Health

**Working name:** TBD (example: PeakStand, IronPulse)

| Symptom Examples | Pattern Examples | Type Examples |
|---|---|---|
| Why can't I get hard | Blood Flow Issues | Stress-dominant |
| Why do I finish too fast | Nerve Sensitivity | Circulation-dominant |
| Why did I lose my drive | Hormone Decline | Hormone-dominant |
| Why is my morning wood gone | Stress Response | Stress-dominant |
| Why can't I stay hard | Circulation Gap | Lifestyle-dominant |

**Why it works:**
- Massive search volume, very few quality English resources
- Users won't discuss with friends → search is the only channel
- Privacy = willingness to pay for anonymous digital products
- Same quiz → report → paywall model as EastType
- Affiliate opportunities (supplements, devices) if paywall underperforms

**Revenue model:**
- Same 3-tier as EastType (Free quiz / $4.99 report / $12.99 full guide)
- Higher willingness-to-pay than general wellness (embarrassment premium)
- Possible: monthly subscription for ongoing guidance ($9.99/mo)

---

### 2. Female Intimate Health

**Working name:** TBD (example: InnerBloom, SilkBalance)

| Symptom Examples | Pattern Examples | Type Examples |
|---|---|---|
| Why does it hurt during sex | Tension Pattern | Stress-dominant |
| Why is everything dry down there | Moisture Decline | Hormone-dominant |
| Why does my libido disappear | Desire Gap | Hormone-dominant |
| Why do I keep getting infections | Microbiome Shift | Immunity-dominant |
| Why is my cycle so irregular | Cycle Disruption | Hormone-dominant |

**Why it works:**
- Same dynamics as male health — high search, low quality resources
- Even stronger repeat-visit potential (cyclical issues)
- Community/content marketing works better for female audiences (Pinterest, forums)

---

### 3. Other Verticals (lower priority)

| Vertical | Symptom Examples | Notes |
|---|---|---|
| Skin problems | Why won't my acne stop / Why is my skin so oily | Highly visual, Pinterest-friendly |
| Sleep issues | Why can't I stay asleep / Why do I wake up exhausted | Broad but underserved in TCM angle |
| Gut/digestion | Why am I always bloated / Why does food make me sick | Already partially covered in EastType |

---

## Reusable Architecture

All brands share the same technical stack and content model:

```
Symptom Pages → Pattern Pages → Type Pages → Quiz → Report → Paywall
```

**Reusable from EastType:**
- Next.js 16 + React 19 + Tailwind v4 setup
- Quiz engine + scoring system
- Report template + paywall (cookie-based)
- Server component architecture
- SEO infrastructure (sitemap, JSON-LD, canonical URLs)
- Theme toggle (light/dark)
- 404 page, Nav/Footer layout pattern

**Brand-specific per site:**
- Domain + Vercel project
- Color palette + typography
- Content data files (symptoms, patterns, types, FAQs)
- Quiz questions + scoring logic
- Report content
- Legal pages (privacy, terms, refund)

---

## Estimated Effort Per Brand

| Phase | Time | Notes |
|---|---|---|
| Content creation (15-20 symptom pages, 5-8 patterns, 5-8 types) | 2-3 days | Template-based, same as EastType |
| Quiz + scoring | 1 day | Adapt EastType quiz |
| Report + paywall | 1 day | Copy EastType structure |
| Brand design (logo, colors, OG images) | 0.5 day | Simple, text-based like EastType |
| SEO setup (sitemap, robots, Search Console) | 0.5 day | Same pattern |
| Legal pages | 0.5 day | Template from EastType |
| **Total** | **5-7 days** | After EastType model is proven |

---

## Key Risks

| Risk | Mitigation |
|---|---|
| Content policy (adult/medical) | Stay educational, no explicit imagery, same hedging language as EastType |
| Ad network rejection | Don't rely on ads — use direct paywall model |
| Trust harder to build | Same academic sourcing strategy (cite standards, honest AI disclosure) |
| Competition from established sites | They use clinical language. We use symptom-first, conversational tone. Differentiator. |

---

## Decision Log

- 2026-06-02: Idea captured. Will not start until EastType hits 10 paying customers.
- Minimum validation: 10 paying customers on EastType proves the model works. Then replicate.
