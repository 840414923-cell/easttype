# Project

MyEasternType (EastType)

English-only wellness platform. www.myeasterntype.com. Next.js 16 + React 19 + Tailwind v4.

Vercel deploy. Repo: github.com/840414923-cell/easttype.

Brand: gold accent #C9A355, light mode default. Conversational tone, no AI words.

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

Content sections:
/symptoms (70)  - 搜索入口
/patterns (9)   - 知识桥梁
/types (9)      - 完整体质档案
/wellness (43)  - TCM深度内容
/foods-for (10) - 食疗指南
/herbs (100)    - 中药库
/solutions (2)  - 方剂专题 (新增)
```

四层核心结构 + 三个扩展板块。每层有明确职责：

**Symptoms** — 搜索入口。用问题格式做 URL：why-am-i-always-tired。捕获长尾关键词。回答"我为什么有这个症状"。每页必须链接到对应 pattern。

**Patterns** — 知识桥梁。把相关症状聚类成可识别的模式。用日常英语命名：Low Vitality, Stuck Energy。引入 TCM 概念但不使用术语作为标题。每页必须链接回相关症状 + 对应体质。

**Types** — 完整体质档案。9 种体质，每种有食物地图、生活方式建议。通过动态路由 /types/[id] 渲染。

**Quiz** — 转化漏斗。/quiz -> /result -> /report-v2 -> /success。三层产品：Free（类型揭示 + 症状共鸣）-> $4.99 Basic（身份 + 食物地图 + 日常节奏）-> $12.99 Pro（完整生活方式系统）。

**Herbs** — 中药库。100味药材，实拍照片，含性味归经、功效、用法、饮食建议。11个分类。面向 "chinese herb" 类搜索词。

**Solutions** — 方剂专题。按健康问题组织（减肥、疲劳、失眠等），每个专题含3个配方对应3种体质。药食同源only，无动物原料，材料易获得。含古方出处、详细份量、熬煮步骤、禁忌。引导测试转化。

### 链接规则

- 症状页必须链接到对应模式（双向）
- 模式页必须链接到对应症状 + 体质
- 模式页之间交叉链接（Related Patterns）
- 禁止症状页直接链接到体质页（必须经过模式层）
- 每页底部有 SymptomCta 组件指向 /quiz
- Solutions 配方中的药材链接到 /herbs/[slug]
- Transactional 页面 (result, success, report-v2, checkout, webhook) 设 noindex

### Navigation

Nav bar: Guides dropdown (Herbal Solutions / Symptoms 70 / Wellness 43 / Food Guides 10 / Patterns 9) + Start Quiz + Herbs + About + ThemeToggle

Dropdown background must use `bg-[var(--color-card-bg)]` (not `bg-card-bg`) for Tailwind v4 compatibility.

### JSON-LD

用 Article, FAQPage, BreadcrumbList, HowTo。不用 MedicalWebPage。Solutions 页同时使用 Article + HowTo + FAQPage + BreadcrumbList。

### Paywall

Cookie-based。success 页写 et_plan cookie，report-v2 检查它。

### Theme

Light/dark mode toggle. **Light = default.** CSS variables in :root (light) and .dark (dark). ThemeToggle component in Nav. Anti-flash script in root layout. User preference persisted in localStorage (key: et-theme).

---

# Domain

**Production:** www.myeasterntype.com

Vercel Production domain is www. All canonical URLs, sitemap URLs, metadata, and JSON-LD use www. Non-www 307 redirects to www.

---

# Current Counts

| Layer | Count | Status |
|---|---|---|
| Symptoms | 70 | Active |
| Patterns | 9 | Complete (9/9 types covered) |
| Types | 9 | Complete |
| Wellness | 43 (+ 7 redirected) | 43 active guides, 7 old duplicates 301 to symptoms |
| Food Combos | 10 | `/foods-for/[slug]` dynamic route |
| Herbs | 100 | `/herbs/[slug]` dynamic route, real photos |
| Solutions | 2 | Hub + 1 detail (weight loss). More planned |
| Sitemap URLs | 254 | Hand-maintained |
| Total static pages | 268 | Build verified |

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

---

# Brand Positioning

站点定位已从 "Eastern wellness" 转向 "Chinese medicine / TCM"。原因：用户搜索量集中在 "Chinese medicine"（110K/mo），而非 "Eastern wellness"。所有新页面直接使用 "Chinese medicine" 关键词。

首页 title/description/schema 全部使用 "Chinese Medicine Body Types"。

旧页面（quiz/result/success）仍保留 "Eastern Body Type" 措辞，待后续统一。

---

# Homepage Narrative

Hero (symptoms-first search bar) -> 4 feature blocks (Body Types / Symptoms / Food Guides / Wellness) -> TCM vs Western comparison -> SEO/FAQ

---

# Solutions Section Requirements

- 药食同源only：无动物内脏、无争议植物
- 材料易获得：超市或亚洲杂货店可购
- 详细份量 + 熬煮步骤 + 服用时长 + 禁忌
- 古方出处（如《丹溪心法》《太平惠民和剂局方》）
- 每个专题3个配方对应3种体质
- 积极引导测试（quiz CTA）
- 医疗免责声明
- Schema: Article + HowTo + FAQPage + BreadcrumbList
- 一次只做一个专题
- 计划10-12个专题：减肥(done) / 疲劳 / 失眠 / 消化不良 / 怕冷 / 便秘 / 皮肤 / 水肿 / 经期 / 焦虑 / 脱发 / 盗汗

---

# Content Quality Rules

- 页面间不得复制粘贴段落
- 每页 FAQ 独特
- 至少一个表格或有序列表
- 所有新健康页面需要医疗免责声明
- 不使用 em dash（用冒号或句号代替）

---

# Performance

| Metric | Value |
|---|---|
| Type images | 946KB WebP (was 13.1MB PNG) |
| Noto_Serif_SC font | Removed (saved 1-2MB) |
| Article components | Server components (was "use client") |
| html-to-image | Lazy loaded (was eager 50KB) |
| Image optimization | Vercel auto WebP/AVIF (was unoptimized) |

---

# Google Indexing

- Sitemap: 254 URLs
- First indexing request: 2026-06-02
- 60+ pages indexed by 2026-06-30
- Keywords appearing at positions 60-96
- First clicks generated
- Search Console resource: www.myeasterntype.com
- Strategy: organic search only, no paid ads

---

# Frozen

7 篇与症状页重复的 wellness 文章保持 301 重定向。不要恢复。

---

# Data Assets

- 方剂数据库：`D:\EastType\【A04】中医方剂数据库\中医方剂Excel数据表.xlsx`（84,295条方剂，14MB）
- 中药图片库：`D:\EastType\图片参考\中药图片\A017-中医药材图片`（200+种药材实拍图）
- 方剂配图：`D:\EastType\图片参考\方剂配图\`（用户用 image2 生成，1536x864 16:9）

---

# Do Not Do

**不要重建已 301 的 wellness 页。** 7 篇与症状页重复的 wellness 文章已 301 重定向。不要恢复。

**不要国际化。** zh-TW 和 ja 已完全移除。产品定位是 English-only。

**不要增加新产品。** 当前产品结构是 Free / Basic / Pro。不做第四层，不做订阅制，不做 App。

**不要用 AI 词汇。** 禁止：moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize。不用 em dash。

**不要用医疗术语。** 禁止：药/治疗/medicinal/healing/remedy/cure/treat。不做诊断、不做治疗建议。

**不要在类型页用 MedicalWebPage。** 只用 Article。

**不要做付费推广。** 流量策略是自然搜索。不买广告。

**不要在没有模式页的情况下直接从症状链接到体质。** 架构是 Symptoms -> Patterns -> Types。

**不要用模板化标题。** 每个页面标题必须独特。

**不要让重复内容共存。** 发现重复必须 301 重定向。

**不要用 PowerShell 处理 UTF-8 .tsx 文件。** 会损坏编码。用 Node.js 脚本或 Write 工具代替。

**不要在 @theme inline 里用 var() 自引用。** 会造成循环引用导致 502。

**不要在没有医疗免责声明的情况下发布 wellness 页。** 所有新健康页面必须包含免责声明。

**不要在 nav dropdown 用 bg-card-bg。** Tailwind v4 不生成此工具类。必须用 `bg-[var(--color-card-bg)]`。

**不要一次性加太多内容。** Google 收录速度有限，慢慢增加效果更好。

---

# Key Files

| File | Purpose |
|---|---|
| src/lib/symptoms-data.ts | 70 症状页元数据 |
| src/lib/symptom-faqs.ts | 70 x 4 FAQ |
| src/lib/pattern-data.ts | 9 模式页元数据 |
| src/lib/pattern-faqs.ts | 9 x 4 FAQ |
| src/lib/type-details.ts | 9 类型 + relatedPatterns + relatedSymptoms |
| src/lib/types.ts | ConstitutionId type (9 types) |
| src/lib/food-combo-data.ts | 10 食物组合页数据 |
| src/lib/food-map.ts | 各体质食物推荐列表 |
| src/lib/herbs-data.json | 100味中药完整数据 |
| src/lib/herbs-data.ts | HerbData接口 + HERBS map + HERB_CATEGORIES (11分类) |
| src/lib/solutions-data.ts | Solution/SolutionFormula接口 + SOLUTIONS map |
| src/lib/wellness-faqs.ts | Wellness 页 FAQ |
| src/lib/free-layer-data.ts | 免费层症状信号 + 摘要 |
| src/lib/json-ld.ts | Article / FAQPage / BreadcrumbList 构建器 |
| src/lib/search-index.ts | 站内搜索索引 |
| src/app/globals.css | CSS 变量 (light/dark theme, light=default) |
| src/components/nav.tsx | 共享导航 + Guides下拉 + ThemeToggle |
| src/components/footer.tsx | 共享页脚 |
| src/components/theme-toggle.tsx | 浅色/深色切换组件 |
| src/app/home-client.tsx | 首页 (Chinese Medicine 定位, 搜索栏, 4 feature blocks) |
| src/app/layout.tsx | 根布局 + 防闪烁脚本 + 默认 meta |
| src/app/page.tsx | 首页 metadata + schema |
| src/app/herbs/herbs-list.tsx | 中药列表组件 (繁简转换+分类计数+彩色标签) |
| src/app/herbs/[slug]/page.tsx | 药材详情页 |
| src/app/solutions/page.tsx | Solutions hub 页 |
| src/app/solutions/[slug]/page.tsx | Solutions 详情页 (对比表/体质解释/配方/FAQ) |
| src/app/foods-for/[slug]/page.tsx | 食物组合页动态路由 |
| public/sitemap.xml | 254 URLs (www), 手动维护 |
| public/62b701021d242b39a739ee629f462a69.txt | IndexNow key |
| public/images/herbs/ | 101张药材实拍图 (100已用) |
| public/images/solutions/ | 方剂配图 (4张JPG) |

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

---

# Next Steps

1. Solutions 专栏继续添加专题（疲劳 -> 失眠 -> 消化不良...）
2. 继续 Pinterest Pin 发布 + 短视频制作
3. 定期提交新 URL 到 GSC
4. 清理老内容中的 em dash
5. 统一 quiz/result 页面的品牌措辞
6. AI 在线问诊功能（之后再做）
