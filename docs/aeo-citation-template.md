# AEO Citation Template

> Generated 2026-07-16 from analysis of 11 pages cited by Bing AI (22 total citations).
> Use this template for every new wellness/content page to maximize AI citation chances.

---

## The AI Citation Formula (5 Elements)

Based on reverse-engineering 11 Bing AI-cited pages, these are the structural and content patterns that make pages "AI-citable":

### 1. Quick Answer Box (100-150 words) — THE most cited element

AI lifts this paragraph verbatim as the citation. It must be:
- Self-contained (answer the query completely without reading the rest)
- Name **2+ TCM patterns** (e.g., Spleen Qi Deficiency, Liver Qi Stagnation)
- Name **3+ specific foods** (e.g., ginger tea, fennel, well-cooked vegetables)
- One continuous paragraph, not bullet points

**Example (from bloating page, 4 citations):**
> Bloating in Chinese medicine usually means the Spleen cannot properly process food and fluids, so gas builds up in the middle. Two common patterns stand out. Spleen Qi Deficiency brings bloating after eating, fatigue, and loose stools, while Liver Qi Stagnation brings bloating that fluctuates with mood and gets worse with stress. Warm, gently moving foods such as ginger tea, fennel, and well-cooked vegetables may help settle the gut and ease the pressure.

### 2. Pattern-to-Foods Mapping Table (4 columns)

A table where rows map each TCM pattern to its symptoms and food direction. AI can extract any individual row as a targeted answer.

Columns: **Pattern | Key Signs | Mechanism | Food Direction**

Example:
| Pattern | Key Signs | Mechanism | Food Direction |
|---|---|---|---|
| Spleen Qi Deficiency | Full and tired after eating | Spleen cannot process food | Warm, cooked foods |
| Liver Qi Stagnation | Bloating shifts with mood | Energy flow blocked | Aromatic, warming foods |

### 3. FAQ Section with FAQPage JSON-LD (4-5 Q&As)

Each FAQ answer must be self-contained (1-2 sentences, answerable without the full article). The FAQPage schema is explicitly designed for AI extraction.

Key: questions should mirror what users and AI actually ask (e.g., "What foods help X in Chinese medicine?", "Which body type is prone to X?").

### 4. Named Food Lists with TCM Properties (8-9 rows)

Not vague "eat healthy" but specific items with TCM attributes.

Columns: **Food | TCM Property | How It May Help | How to Prepare**

Example:
| Food | TCM Property | How It May Help | How to Prepare |
|---|---|---|---|
| Ginger | Warm, pungent | Warms the Spleen, moves energy | Fresh in tea or cooking |
| Fennel | Warm, pungent | Moves Qi, eases gas | Seeds steeped as tea |

### 5. Body Type Attribution

Every answer connects the symptom/food to a named body type (e.g., "This pattern can be associated with the Qi Deficient body type"). This creates unique EastType value that makes citations non-generic, plus includes an internal link to `/types/[type]` and `/quiz`.

---

## Cited vs Non-Cited: Key Differences

| Factor | Cited Pages (22 citations) | Non-Cited Pages |
|---|---|---|
| Quick Answer | Standalone 100-150 word box, answers fully | Answer buried in prose, not self-contained |
| Data presentation | Tables (4 columns, structured) | Paragraphs only |
| Food specificity | 8-9 named foods with TCM properties | 2-3 vague mentions |
| H1 format | `[Keyword]: [TCM patterns] and [Foods] That May [Verb]` | Generic titles |
| Word count | 1,600-1,900 | Varies widely |
| Hedging language | Consistent ("may help", "can be associated with") | Inconsistent |

---

## Page Template (follow this for every new page)

```
H1: [Search Query Keyword]: [2-3 TCM Pattern Names] and [Food Category] That May [Benefit]

+---------------------------------------------------------+
| Quick Answer Box (100-150 words)                        |
| "[Symptom] in Chinese medicine usually means            |
| [organ] cannot [function]. [Pattern A] brings           |
| [symptoms], while [Pattern B] brings [symptoms].        |
| [Temperature] foods such as [Food 1], [Food 2],         |
| and [Food 3] may help [mechanism]."                     |
| + Link to body type page + Link to quiz                 |
+---------------------------------------------------------+

H2: How Chinese Medicine Views [Symptom]     (200-300 words, 2-3 paragraphs)

H2: [Symptom] Patterns
  Table: Pattern | Key Signs | Mechanism | Food Direction
  (4 rows, one per TCM pattern)

H2: What Causes [Symptom]
  H3: [Cause 1] (1 paragraph)
  H3: [Cause 2] (1 paragraph)
  H3: [Cause 3] (1 paragraph)
  H3: [Cause 4] (1 paragraph)
  H3: [Cause 5] (1 paragraph)

H2: Foods That May Help
  Table: Food | TCM Property | How It May Help | How to Prepare
  (8-9 rows)

H2: Foods to Limit          (6 bulleted items)

H2: Daily Habits            (7 numbered items)

H2: When to See a Doctor    (disclaimer + red flags)

FAQ                         (FaqSection, 4-5 Q&As with FAQPage JSON-LD)

Medical disclaimer footer
```

---

## Critical Rules

1. Quick Answer must name **at least 2 patterns** and **at least 3 specific foods** in one paragraph
2. Tables are mandatory, not optional prose substitutes
3. Each FAQ answer must be **self-contained** (1-2 sentences)
4. Every page must link to **at least 1 body type** + the quiz
5. Target word count: **1,600-1,900**
6. H1 format: `[Primary keyword]: [2-3 TCM pattern names], and [Food category] That May [Verb]`
7. Use hedging language: "may help", "can be associated with", "tends to"
8. No banned AI words, no em dashes (see AGENTS.md)

---

## The 11 Cited Pages (Reference Data)

| Page | Citations | Type | Top Pattern Named |
|---|---|---|---|
| /wellness/chinese-medicine-for-bloating | 4 | Wellness (for-X) | Spleen Qi Def + Liver Qi Stagnation |
| /wellness/chinese-medicine-for-acid-reflux | 4 | Wellness (for-X) | Stomach Heat + Liver Fire |
| /wellness/chinese-medicine-for-cold-hands | 3 | Wellness (for-X) | Yang Deficiency |
| / | 2 | Homepage | 9 body types overview |
| /wellness/tcm-diet | 2 | Wellness (concept) | Spleen + food temperature |
| /herbs/lotus-seed-lian-zi | 2 | Herb | Spleen/Heart calming |
| /herbs/dandelion-pu-gong-ying | 1 | Herb | Damp Heat clearing |
| /herbs/wu-hua-guo-wu-hua-guo | 1 | Herb | Lung Yin moistening |
| /herbs/tao-jiao-tao-jiao | 1 | Herb | Yin nourishing (skin) |
| /wellness/yin-and-yang | 1 | Wellness (concept) | Yin/Yang balance |
| /herbs/gui-hua-gui-hua | 1 | Herb | Warming middle |

**Observation:** "chinese-medicine-for-X" wellness pages get the most citations (11 of 22). Concept pages and herb pages also get cited but less frequently. The pattern is clear: **condition-focused pages with structured answers win.**

---

## Content Strategy Implications

1. **Prioritize "chinese-medicine-for-X" wellness pages** — proven highest citation rate
2. **Every new page must have a Quick Answer box** — non-negotiable for AEO
3. **Tables over prose** — AI extracts structured data far more easily
4. **FAQ quality matters** — self-contained answers, not "see above"
5. **Body type attribution is the differentiator** — makes citations uniquely EastType
6. **Concept pages (yin-yang, what-is-X) also work** — Bing ranks them on page 1-2

---

## Monthly AEO Check

1. Search core symptoms + conditions on Bing Copilot, ChatGPT, Perplexity
2. Record which pages are cited and citation count
3. Compare with previous month — are citations growing?
4. Analyze newly cited pages: what content feature triggered the citation?
5. Apply findings to new page creation
