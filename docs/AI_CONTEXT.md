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
| Wellness | 3 (7 redirected) | 7 duplicate wellness pages 301 to symptoms, 3 unique remain |
| Sitemap URLs | 100 | Hand-maintained |
| Total static pages | 115 | Build verified |

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

无。所有 9 种体质都有模式页。

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

/wellness 路径部分冻结。

7 篇与症状页重复的 wellness 文章已 301 重定向到对应 symptoms 页：
- why-am-i-always-tired → /symptoms/why-am-i-always-tired
- cold-hands-and-feet → /symptoms/why-am-i-always-cold
- night-sweats-chinese-medicine → /symptoms/why-do-i-have-night-sweats
- bloating-chinese-medicine → /symptoms/always-bloated-after-eating
- acne-chinese-medicine → /symptoms/why-do-i-keep-breaking-out
- anxiety-chinese-medicine → /symptoms/why-do-i-feel-anxious
- insomnia-chinese-medicine → /symptoms/why-cant-i-fall-asleep

3 篇无重复的 wellness 文章保留：
- chinese-medicine-body-types
- chinese-medicine-foods-for-energy
- foods-that-warm-your-body

原因：7 篇与 symptoms 页争同一关键词，导致关键词自相残杀。301 重定向消除重复，保留 SEO 权重。

---

# Current Sprint

Sprint 13 — Content Expansion + SEO Fix

Done:
1. 补完第 9 个模式页（natural-balance）✅
2. 新增 30 个症状页（女性健康、消化、皮肤、疼痛、认知、呼吸、泌尿/感官/睡眠）✅
3. 补建 7 个缺失的旧症状页（always-hungry, dark-circles, PMS, poor-circulation, seasonal-allergies, libido-low, metabolism-slow）✅
4. 70 个症状页标题差异化 — 去掉统一 "Eastern Body Type Insights" 后缀 ✅
5. 7 个重复 wellness 页 301 重定向到对应 symptoms 页 ✅
6. Sitemap 从 69 → 107 → 100（移除重定向 URL）✅
7. Push 到 Vercel，重新提交 sitemap ✅

Pending:
- 等待 Google 重新收录（从 1 页恢复）
- 监控 Search Console 展示/点击数据

---

# Do Not Do

**不要重建 wellness。** /wellness/ 路径冻结。不新增、不删除、不改 URL、不重构。等数据再决定。

**不要国际化。** zh-TW 和 ja 已完全移除（Sprint 05）。不加回。产品定位是 English-only。所有面向用户的文案、SEO、内容都是英文。接口仍需 { en; "zh-TW"; ja } 形状（新页面传入空字符串）。

**不要增加新产品。** 当前产品结构是 Free / Basic / Pro。不做第四层，不做订阅制，不做 App，不做社区。等产品验证后再考虑扩展。

**不要用 AI 词汇。** 禁止：moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize。不用 em dash。

**不要用医疗术语。** 禁止：药/治疗/medicinal/healing/remedy/cure/treat。不做诊断、不做治疗建议。

**不要在类型页用 MedicalWebPage。** 只用 Article。

**不要做付费推广。** 流量策略是自然搜索。不买广告。

**不要在没有模式页的情况下直接从症状链接到体质。** 架构是 Symptoms -> Patterns -> Types。跳过 Patterns 层是被禁止的。

**不要用模板化标题。** 70 个症状页不能有统一后缀。每个标题的第二部分必须独特且与该症状相关。避免 programmatic SEO 模式被 Google 惩罚。

**不要让重复内容共存。** 同一关键词对应多个页面会造成关键词自相残杀。发现重复必须 301 重定向。

**不要用 PowerShell 处理 UTF-8 .tsx 文件。** 会损坏编码。用 Node.js 脚本代替。

**不要在 @theme inline 里用 var() 自引用。** 会造成循环引用导致 502。

**不要在没确认 Vercel Production 域名的情况下设置 canonical URL。** www vs 非 www 不匹配会阻止 Google 抓取。

---

# Key Files

| File | Purpose |
|---|---|
| src/lib/symptoms-data.ts | 70 症状页元数据 |
| src/lib/symptom-faqs.ts | 70 x 4 FAQ |
| src/lib/pattern-data.ts | 9 模式页元数据 |
| src/lib/pattern-faqs.ts | 9 x 4 FAQ |
| src/lib/type-details.ts | 9 类型 + relatedPatterns + relatedSymptoms |
| src/lib/free-layer-data.ts | 免费层症状信号 + 摘要 |
| src/lib/json-ld.ts | Article / BreadcrumbList 构建器 |
| src/app/globals.css | CSS 变量 (light/dark theme) |
| src/components/nav.tsx | 共享导航 + ThemeToggle |
| src/components/footer.tsx | 共享页脚 |
| src/components/theme-toggle.tsx | 浅色/深色切换组件 |
| src/components/share-card.tsx | 体质分享卡片 |
| src/app/home-client.tsx | 首页 |
| src/app/layout.tsx | 根布局 + 防闪烁脚本 |
| src/app/symptoms/layout.tsx | symptoms Nav + Footer wrapper |
| src/app/patterns/layout.tsx | patterns Nav + Footer wrapper |
| src/app/wellness/layout.tsx | wellness Nav + Footer wrapper |
| src/app/about/page.tsx | About 服务器组件 + Organization schema |
| src/app/about/article.tsx | About 文章内容 |
| src/app/not-found.tsx | 自定义 404 页面 |
| src/app/result/result-client.tsx | 测试结果页 |
| src/app/report-v2/report-client.tsx | 付费报告页 |
| public/sitemap.xml | 100 URLs (www), 手动维护 |
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
