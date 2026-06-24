# Project

MyEasternType (EastType)

English-only wellness platform. www.myeasterntype.com. Next.js 16 + React 19 + Tailwind v4.

Vercel deploy. Repo: github.com/840414923-cell/easttype.

Brand: gold accent #C9A355, dark backgrounds. Conversational tone, no AI words.

Not medical advice. No diagnosis, treatment, cure. Hedge everything: may, might, can be associated with.

---

# North Star

用户搜索症状关键词 -> 落地症状页 -> 发现相关模式 -> 了解自身体质 -> 完成测试转化。

整个站点围绕这条路径构建。每一页都服务于此目标。

核心流量来源：自然搜索 (SEO + AEO)。

不做付费推广，不做社交分发，不做联盟营销。先建内容资产，等搜索引擎索引和排名。

---

# Architecture

```
Google Search
  | (long-tail symptom keywords)
/symptoms/* ---> /patterns/* ---> /types/* ---> /quiz
  ^ cross-links    ^ cross-links    ^ cross-links     |
  +- <-> symptoms  +- <-> symptoms    +- -> wellness   v
                                                    /result -> /report-v2 -> /success
```

四层结构，每层有明确职责：

**Symptoms** — 搜索入口。用问题格式做 URL：why-am-i-always-tired。捕获长尾关键词。回答"我为什么有这个症状"。每页必须链接到对应 pattern。

**Patterns** — 知识桥梁。把相关症状聚类成可识别的模式。用日常英语命名：Low Vitality, Stuck Energy。引入 TCM 概念但不使用术语作为标题。每页必须链接回相关症状 + 对应体质。

**Types** — 完整体质档案。9 种体质，每种有食物地图、生活方式建议。通过动态路由 /types/[id] 渲染。

**Quiz** — 转化漏斗。/quiz -> /result -> /report-v2 -> /success。三层产品：Free（类型揭示 + 症状共鸣）-> $4.99 Basic（身份 + 食物地图 + 日常节奏）-> $12.99 Pro（完整生活方式系统）。

### 链接规则

- 症状页必须链接到对应模式（双向）
- 模式页必须链接到对应症状 + 体质
- 模式页之间交叉链接（Related Patterns）
- 禁止症状页直接链接到体质页（必须经过模式层）
- 每页底部有 SymptomCta 组件指向 /quiz
- Transactional 页面 (result, success, report-v2, checkout, webhook) 设 noindex

### JSON-LD

只用 Article, FAQPage, BreadcrumbList。不用 MedicalWebPage。

### Paywall

Cookie-based。success 页写 et_plan cookie，report-v2 检查它。

### Navigation

Layout.tsx wrappers provide Nav + Footer to all content sections:
- src/app/symptoms/layout.tsx
- src/app/patterns/layout.tsx
- src/app/wellness/layout.tsx

### Theme

Light/dark mode toggle. Dark = default. CSS variables in :root (light) and .dark (dark). ThemeToggle component in Nav. Anti-flash script in root layout. User preference persisted in localStorage (key: et-theme).

---

# Domain

**Production:** www.myeasterntype.com

Vercel Production domain is www. All canonical URLs, sitemap URLs, metadata, and JSON-LD use www. Non-www 307 redirects to www.

---

# Current Counts

| Layer | Count | Status |
|---|---|---|
| Symptoms | 70 | Active, Sprint 13 expanded from 40 to 70 |
| Patterns | 9 | Complete (9/9 types covered) |
| Types | 9 | Complete |
| Wellness | 10 (7 redirected) | Active: 10 unique pillar/guide pages. 7 old duplicates 301 to symptoms |
| Food Combos | 10 | `/foods-for/[slug]` dynamic route |
| Sitemap URLs | 113 | Hand-maintained |
| Total static pages | 125+ | Build verified |

### Published Symptoms (70)

why-am-i-always-tired, why-am-i-always-cold, why-do-i-wake-up-at-3am, always-bloated-after-eating, why-am-i-always-sleepy, why-do-i-have-night-sweats, why-do-i-feel-anxious, why-do-i-have-brain-fog, why-cant-i-fall-asleep, why-do-i-keep-gaining-weight, why-are-my-moods-all-over-the-place, why-do-i-get-sick-so-often, why-do-my-hands-and-feet-go-numb, why-is-my-skin-so-dry, why-do-i-crave-sweets, why-do-i-overthink-everything, why-am-i-always-unmotivated, why-do-i-keep-breaking-out, why-is-my-hair-falling-out, why-am-i-so-irritable, why-cant-i-lose-weight, why-do-i-have-acid-reflux, why-do-i-have-headaches, why-do-i-feel-dizzy, why-am-i-always-thirsty, why-do-i-have-lower-back-pain, why-do-i-have-eczema, why-do-i-sweat-so-much, why-do-i-have-joint-pain, why-am-i-always-thirsty-at-night, why-do-i-have-hot-flashes, why-do-i-have-water-retention, why-am-i-always-constipated, why-is-my-libido-low, why-do-i-have-pms, why-is-my-metabolism-so-slow, why-do-i-have-poor-circulation, why-do-i-have-seasonal-allergies, why-do-i-have-dark-circles, why-am-i-always-hungry, why-do-i-have-period-cramps, why-is-my-period-irregular, why-is-my-period-so-heavy, why-do-i-have-breast-tenderness, why-do-i-have-menopause-symptoms, why-do-i-have-nausea, why-do-i-have-diarrhea, why-do-i-feel-sick-after-eating, why-do-i-have-bad-breath, why-is-my-face-so-oily, why-do-i-have-rosacea, why-do-i-have-brittle-nails, why-is-my-complexion-dull, why-do-i-have-cellulite, why-do-i-have-neck-pain, why-are-my-shoulders-always-tense, why-do-i-have-stomach-pain, why-am-i-always-stiff, why-do-i-keep-forgetting-things, why-cant-i-focus, why-do-i-cry-so-easily, why-do-i-have-no-patience, why-do-i-have-a-chronic-cough, why-do-i-always-have-a-sore-throat, why-do-i-have-post-nasal-drip, why-do-i-wake-up-to-pee, why-do-i-have-tinnitus, why-am-i-so-sensitive-to-heat, why-do-i-wake-up-tired, why-do-i-have-cold-sweats

### Published Patterns (9)

low-vitality (Qi Deficiency -> qi_deficient)
cold-sensitivity (Yang Deficiency -> yang_deficient)
internal-heat (Yin Deficiency -> yin_deficient)
heavy-and-sluggish (Phlegm Damp -> phlegm_damp)
stuck-energy (Qi Stagnation -> qi_stagnant)
damp-heat (Damp Heat -> damp_heat)
blood-stasis (Blood Stasis -> blood_stasis)
high-sensitivity (High Sensitivity -> sensitive)
natural-balance (Balanced -> balanced)

### Coverage Gaps

无。所有 9 种体质都有模式页。Wellness 层已从 3 页扩展到 10 页，覆盖核心 TCM 关键词。

---

# Brand Positioning (Updated 2026-06-24)

站点定位已从 "Eastern wellness" 转向 "Chinese medicine / TCM"。原因：用户搜索量集中在 "Chinese medicine"（110K/mo），而非 "Eastern wellness"。所有新页面直接使用 "Chinese medicine" 关键词。现有旧页面保留原措辞，不回溯修改。

首页 title/description/schema 全部使用 "Chinese Medicine Body Types"。

---

# Homepage Narrative (Scheme B)

Hero (symptoms-first) -> Common Symptoms Grid -> Connect the Dots (3-step) -> Body Types -> Pricing -> CTA -> SEO/FAQ

8 sections total. Connect the Dots explains the unique value: symptoms -> patterns -> types.

---

# Performance (Sprint 11)

| Metric | Value |
|---|---|
| Type images | 946KB WebP (was 13.1MB PNG) |
| Noto_Serif_SC font | Removed (saved 1-2MB) |
| Article components | 55 server components (was "use client") |
| html-to-image | Lazy loaded (was eager 50KB) |
| Image optimization | Vercel auto WebP/AVIF (was unoptimized) |

---

# Google Indexing

- Sitemap: 100 URLs (expanded Sprint 13, cleaned duplicate wellness)
- First indexing request: 2026-06-02
- 4 pages indexed by 2026-06-03: homepage, /patterns/low-vitality, /patterns/stuck-energy, /wellness/anxiety-chinese-medicine
- Dropped to 1 page (homepage only) by 2026-06-04 — likely caused by deploying sitemap with URLs that returned 404 (code was not pushed to Vercel)
- Re-pushed all content 2026-06-04, sitemap resubmitted
- Search Console resource: www.myeasterntype.com

---

# Frozen

/wellness 路径冻结已于 Sprint 15 解除。Wellness 层现在是内容扩展主阵地。

7 篇与症状页重复的 wellness 文章仍保持 301 重定向到对应 symptoms 页：
- why-am-i-always-tired → /symptoms/why-am-i-always-tired
- cold-hands-and-feet → /symptoms/why-am-i-always-cold
- night-sweats-chinese-medicine → /symptoms/why-do-i-have-night-sweats
- bloating-chinese-medicine → /symptoms/always-bloated-after-eating
- acne-chinese-medicine → /symptoms/why-do-i-keep-breaking-out
- anxiety-chinese-medicine → /symptoms/why-do-i-feel-anxious
- insomnia-chinese-medicine → /symptoms/why-cant-i-fall-asleep

10 篇活跃 wellness 页面：
- chinese-medicine-body-types (optimized, 18K/mo)
- chinese-medicine-foods-for-energy
- foods-that-warm-your-body
- what-is-qi (14K/mo)
- tcm-tongue-diagnosis (12K/mo)
- cooling-foods-chinese-medicine (6K/mo)
- eastern-vs-western-medicine (6K/mo)
- what-is-chinese-medicine (110K/mo) — 新增支柱页
- chinese-medicine-for-beginners (5K/mo) — 新增入门指南
- chinese-medicine-body-types (已优化)

---

# Current Sprint

Sprint 15 — Brand Repositioning to Chinese Medicine + Pillar Pages

Done:
1. 首页 meta 全部从 "Eastern Body Type" 改为 "Chinese Medicine Body Types" ✅
2. layout.tsx 默认 meta 同步更新 ✅
3. home-client.tsx 可见文字改为 "Chinese medicine" ✅
4. What Is Chinese Medicine 支柱页 (110K/mo) — ~1800词，3个表格，5个FAQ ✅
5. Chinese Medicine for Beginners 入门指南 (5K/mo) — ~2000词，2个表格，7天计划，4个FAQ ✅
6. Wellness hub 页面扩展到 8 篇文章 + meta 更新 ✅
7. Sitemap 更新 (100 → 113 URLs) ✅
8. Push 到 Vercel (commit d925732) ✅

Pending:
- 提交新 URL 到 GSC + IndexNow
- 继续 content-expansion-plan.md Week 2 (PCOS, Menopause, etc.)
- 监控 GSC 是否出现 "Chinese medicine" 关键词

---

# Do Not Do

**不要重建已 301 的 wellness 页。** 7 篇与症状页重复的 wellness 文章已 301 重定向。不要恢复。

**不要国际化。** zh-TW 和 ja 已完全移除（Sprint 05）。不加回。产品定位是 English-only。所有面向用户的文案、SEO、内容都是英文。接口仍需 { en; "zh-TW"; ja } 形状（新页面传入空字符串）。

**不要增加新产品。** 当前产品结构是 Free / Basic / Pro。不做第四层，不做订阅制，不做 App，不做社区。等产品验证后再考虑扩展。

**不要用 AI 词汇。** 禁止：moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize。不用 em dash。

**不要用医疗术语。** 禁止：药/治疗/medicinal/healing/remedy/cure/treat。不做诊断、不做治疗建议。

**不要在类型页用 MedicalWebPage。** 只用 Article。

**不要做付费推广。** 流量策略是自然搜索。不买广告。

**不要在没有模式页的情况下直接从症状链接到体质。** 架构是 Symptoms -> Patterns -> Types。跳过 Patterns 层是被禁止的。

**不要用模板化标题。** 70 个症状页不能有统一后缀。每个标题的第二部分必须独特且与该症状相关。避免 programmatic SEO 模式被 Google 惩罚。

**不要让重复内容共存。** 同一关键词对应多个页面会造成关键词自相残杀。发现重复必须 301 重定向。

**不要用 PowerShell 处理 UTF-8 .tsx 文件。** 会损坏编码。用 Node.js 脚本或 Write 工具代替。

**不要在 @theme inline 里用 var() 自引用。** 会造成循环引用导致 502。

**不要在没确认 Vercel Production 域名的情况下设置 canonical URL。** www vs 非 www 不匹配会阻止 Google 抓取。

**不要在没有医疗免责声明的情况下发布 wellness 页。** 所有新 wellness 页必须包含 "for informational and educational purposes only, not medical advice" 免责声明。

---

# Key Files

| File | Purpose |
|---|---|
| src/lib/symptoms-data.ts | 70 症状页元数据 (CTR-optimized metaTitle/metaDesc) |
| src/lib/symptom-faqs.ts | 70 x 4 FAQ |
| src/lib/pattern-data.ts | 9 模式页元数据 |
| src/lib/pattern-faqs.ts | 9 x 4 FAQ |
| src/lib/type-details.ts | 9 类型 + relatedPatterns + relatedSymptoms |
| src/lib/food-combo-data.ts | 10 食物组合页数据 |
| src/lib/wellness-faqs.ts | Wellness 页 FAQ (含 15+ 条目) |
| src/lib/free-layer-data.ts | 免费层症状信号 + 摘要 |
| src/lib/json-ld.ts | Article / FAQPage / BreadcrumbList 构建器 |
| src/app/globals.css | CSS 变量 (light/dark theme) |
| src/components/nav.tsx | 共享导航 + hamburger menu + Food Guides link |
| src/components/footer.tsx | 共享页脚 (含所有 hub 链接) |
| src/components/theme-toggle.tsx | 浅色/深色切换组件 |
| src/components/share-card.tsx | 体质分享卡片 |
| src/app/home-client.tsx | 首页 (Chinese Medicine 定位) |
| src/app/layout.tsx | 根布局 + 防闪烁脚本 + 默认 meta |
| src/app/page.tsx | 首页 metadata + schema |
| src/app/symptoms/layout.tsx | symptoms Nav + Footer wrapper |
| src/app/patterns/layout.tsx | patterns Nav + Footer wrapper |
| src/app/wellness/layout.tsx | wellness Nav + Footer wrapper |
| src/app/wellness/what-is-chinese-medicine/ | TCM 支柱页 (110K/mo) |
| src/app/wellness/chinese-medicine-for-beginners/ | 入门指南 (5K/mo) |
| src/app/foods-for/[slug]/ | 食物组合页动态路由 |
| public/sitemap.xml | 113 URLs (www), 手动维护 |
| public/62b701021d242b39a739ee629f462a69.txt | IndexNow key |
| scripts/submit-indexnow.ts | IndexNow 批量提交脚本 |
| public/robots.txt | 指向 www sitemap |

---

# Content Tone

对话式，像跟朋友聊天。稍微有点幽默感。

不用教科书语气，不用临床语气，不用营销语气。

用类比解释概念。用日常生活场景举例。让读者觉得"这就是我"。

示例：
- "It's like a laptop in power-saving mode."
- "Your body holds onto moisture like a sponge."
- NOT "Qi Deficiency manifests as reduced physiological vitality."
- NOT "Embark on your wellness journey today."
