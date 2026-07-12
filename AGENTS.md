# AGENTS.md — EastType AI 协作规则

## 强制执行项（任何页面改动前必读）

### 0. 改动前影响分析（最高优先级）

**任何对已上线页面的改动，AI 必须先向用户提交影响分析，经用户确认后才能动手。**

格式如下：

```
📋 改动影响分析

改动内容：（具体改什么）
涉及页面：（哪些页面受影响，数量）

影响评估：
- URL/canonical：是否改变？是/否
- 标题(title)：是否改变？是/否
- 描述(description)：是否改变？是/否
- 正文内容：是否改变？是/否
- 结构化数据(JSON-LD)：是否改变？是/否
- 已收录状态：是否会被打断？是/否

SEO风险等级：
🟢 低风险 — 纯视觉/CSS改动，不影响收录
🟡 中风险 — 改了标题或描述，Google需要重新评估
🔴 高风险 — 改了URL/canonical/批量操作，可能影响收录

建议：（改还是不改，为什么）
```

**规则：**
- 🔴 高风险改动：必须逐条说明哪些页面会受影响，用户明确说"改"才能动手
- 🟡 中风险改动：说明改的原因和预期效果，用户确认后才动
- 🟢 低风险改动：告知用户即可，不需要等待确认
- **如果用户说"不改"，立即停止，不要尝试说服**

### 1. 批量操作禁令

**禁止用脚本/批量方式生成 page.tsx 文件中的以下字段：**
- `const URL` — canonical URL
- `const TITLE` — SEO 标题
- `const DESC` — meta description
- `openGraph.description` / `twitter.description`

如果必须批量操作，生成后**必须立即运行验证脚本**：
```bash
node scripts/verify-pages.mjs
```

### 2. 模板字符串规则

JavaScript 模板字符串（含 `${variable}`）**必须用反引号**，禁止用双引号或单引号：

```typescript
// ✅ 正确
const URL = `https://www.myeasterntype.com/symptoms/${SLUG}`

// ❌ 错误 — ${SLUG} 不会被解析
const URL = "https://www.myeasterntype.com/symptoms/${SLUG}"
```

### 3. 撇号（Apostrophe）规则

英文标题/描述中含撇号（Won't, Can't, Doesn't, It's 等）时，**必须用双引号包裹字符串**（TypeScript 中双引号内撇号无需转义）：

```typescript
// ✅ 正确 — 双引号内撇号正常
const TITLE = "Seasonal Allergies Won't Stop? Your Body Type Overreacts"

// ❌ 危险 — 单引号内撇号会截断字符串
const TITLE = 'Seasonal Allergies Won't Stop?...'
// 结果: TITLE = 'Seasonal Allergies Won' （截断！）
```

### 4. 提交前验证清单

每次修改/新增页面后，**必须完成以下全部步骤才能提交**：

```bash
# 步骤 1: 运行页面验证脚本（0 issues 才能继续）
node scripts/verify-pages.mjs

# 步骤 2: 构建验证（必须 272/272 页面无错误）
pnpm build

# 步骤 3: 确认无警告
```

验证脚本检查项：
- 所有 page.tsx 的 URL 字段是否用了正确的模板字符串
- 所有 TITLE 是否 ≥ 25 字符（防止截断）
- 所有 DESC 是否 ≥ 40 字符（防止截断）
- 所有 OG/Twitter description 是否完整
- 是否存在 `"${...}"` 错误模式

### 5. 新页面规则

新建任何页面时，必须包含：
- 唯一的 canonical URL（用反引号 + ${SLUG}）
- 完整的 TITLE（≥ 25 字符，含目标关键词）
- 完整的 DESC（≥ 100 字符，含目标关键词，末尾有行动号召）
- openGraph 完整配置（title + description + url）
- twitter 完整配置（title + description）
- JSON-LD 结构化数据
- 医疗免责声明（健康类页面）

### 6. 禁止的 AI 词汇

网站内容中禁止使用：moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize

禁止使用破折号（em dash）。

模糊限制语：may, might, can be associated with

### 7. 频繁修改禁令

**已上线页面不要频繁修改标题/描述/URL。** Google 需要时间重新抓取和评估。每次修改后至少等 2 周再考虑下一次优化。

如果是批量修复 bug，可以一次性修完，但修完后不要再动。

### 8. 提交信息规范

```
<type>: <description>
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

### 9. 新页面上线前检查清单（最高优先级）

**新建任何页面（药材、wellness文章、症状页、solutions等）后，push 之前必须完成以下全部检查，经用户确认后才能 push。**

#### 检查 1: URL 格式一致性

- 新 URL 的 slug 格式是否与同类型现有页面一致？
- 例如药材页格式：`english-name-pinyin`（如 `burdock-root-niu-bang-gen`）
- 验证方法：列出同类页面 slug，对比格式

#### 检查 2: 关键词蚕食检测（Keyword Cannibalization）

**这是最重要的检查。** 新页面的目标关键词是否与现有页面冲突？

验证步骤：
1. 提取新页面的核心关键词（title, summary, actions 中的主要英文词）
2. 在整个 `src/` 目录搜索这些关键词
3. 确认没有现有页面已经针对同一关键词优化
4. 特别注意跨栏目冲突（herbs vs wellness vs symptoms vs solutions）

判定标准：
- 新页面主关键词在现有页面仅"提及"（1-2句）= **低风险**，安全
- 新页面主关键词在现有页面有独立章节或表格行 = **中高风险**，需要处理
- 新页面与现有页面针对完全相同的搜索意图 = **高风险**，必须修改或取消

如果发现中高风险冲突：
- 方案 A：修改新页面的关键词定位，与现有页面差异化
- 方案 B：在现有页面添加一行内链指向新页面，帮助 Google 区分
- 方案 C：如果两个页面完全重叠，取消新页面

#### 检查 3: Sitemap 更新

- 新 URL 是否已添加到 `public/sitemap.xml`？
- lastmod 日期是否正确？

#### 检查 4: 图片验证

- 图片是否已复制到 `public/images/` 对应目录？
- 图片是否经过 sharp 压缩（目标 < 200KB）？
- JSON/data 中的 image 路径是否正确？

#### 检查 5: 构建验证

```bash
node scripts/verify-pages.mjs    # 0 issues
pnpm build                        # 编译成功，新页面 HTML 已生成
```

#### 检查 6: 内链机会

- 列出可以从现有页面指向新页面的内链机会
- 这些内链可以在后续逐步添加（不需要本次 push 就加）

---

## 10. 批量改动安全规则（防止 canonical 事故重演）

**背景：2026-07-02，70 个症状页转为共享组件时，canonical URL 被弄坏 2 天，导致 Google 大规模去索引。此规则防止同类事故。**

### 核心禁令

- **禁止一次性修改超过 5 个已上线页面的 canonical URL / title / description / JSON-LD**
- 如果必须批量修改（如组件迁移、数据结构变更），必须分批：
  1. 先改 1 个页面 -> `verify-pages` + `pnpm build` 通过
  2. 再改 5 个页面 -> `verify-pages` + `pnpm build` 通过
  3. 最后改剩余页面 -> `verify-pages` + `pnpm build` 通过
- **push 前必须抽查 5+ 个页面的线上 canonical 是否正确**（用 curl 或浏览器检查）

### 组件迁移专项规则

- 将页面迁移到共享组件时，必须逐页验证 metadata（title / description / canonical / openGraph）正确渲染
- 迁移后必须对比迁移前后的 HTML 输出，确认 `<link rel="canonical">` 和 `<title>` 没有变化
- **禁止在迁移同一次提交中修改 canonical URL**（迁移是迁移，改 URL 是改 URL，分开做）

---

## 11. 内容反模板化规则（防止程序化内容判定）

**背景：119 个药材页的 actionDetails / dietaryAdvice / commonlyUsedFor 使用了固定句式模板，只替换药材名。Google 可能判定为程序化低质量内容，导致去索引。此规则防止同类问题。**

### 核心禁令

- **禁止跨页面复用相同句式结构**，即使只换了名字/关键词
- 以下内容必须每页完全独特：
  - `actionDetails` 的 `explanation`（禁止 "In Chinese medicine, this action relates to the herb X..." 这种模板开头）
  - `dietaryAdvice`（禁止 "X is neutral in temperature and can be taken..." 这种固定句式）
  - `commonlyUsedFor` 的 `condition`（不同药材不能用完全相同的 condition 描述）
  - `summary`（每页概述必须有独特角度和措辞）
  - `cautions`（不能多个药材共享完全相同的注意事项文本）
- **新增页面时**，不得从现有页面复制句式结构再替换关键词
- **批量生成内容时**，每条必须有独特的信息角度，而非模板填充

### 查重检查

- 提交前运行内容查重：检查任意两个页面的 `actionDetails[0].explanation` 开头 20 词是否相同
- 检查任意两个页面的 `dietaryAdvice` 开头 10 词是否相同
- 检查任意两个页面的 `commonlyUsedFor[0].condition` 是否完全相同
- 发现重复必须修改后才可提交

---

## 12. 文档与实际同步（防止文档失信）

**背景：2026-07-12 复盘发现 AI_CONTEXT.md 显示 257 URL/271 页，实际已 274/314；herbs 计数 100 vs 实际 122，偏差严重。文档自称"真相源"但已过时。**

### 核心规则

- **每次有计数变化的改动（新增/删除页面、URL），必须同步更新相关文档**：
  - `docs/AI_CONTEXT.md`（Current Counts 表）
  - `docs/PROJECT_STATE.md`（Content Counts 表 + Published URLs 标题）
  - `public/sitemap.xml`（URL 列表）
- 同一次提交内完成代码改动 + 文档更新，**不要"下次再补"**
- 提交信息里注明计数变化（如 "herbs 119→122"）

### 验证方法

每月月初跑一次计数核对：
- `git log` 统计实际页面数 vs 文档声称数
- build 输出的页面总数 vs 文档
- 发现偏差立即修文档

---

## 13. 功能性死链检查（防止"假表单"事故重演）

**背景：2026-07-12 发现首页 NewsletterForm 是假表单（setDone(true) 显示"Check your inbox"但从不调 API），上线数周未被发现。同类风险：exit-intent 订阅者进了 Redis 却永远收不到邮件（邮件死胡同）。**

### 核心规则

- **任何表单（订阅、联系、checkout、quiz 提交）上线前，必须验证它真的调用了后端 API**
- 验证方法：提交后检查（1）网络请求发出（2）数据写入存储（3）预期的下游动作（邮件/数据库）触发
- **不能只看 UI 成功状态就判定通过**——UI 显示 success 不代表后端真的执行了
- 新增任何"用户留资/付费/提交"入口，必须本地跑通完整链路再上线

### 定期排查

每月检查一次所有 `fetch("/api/...")` 调用点：
- 是否每个表单都有真实 API 调用（grep 假的 `setDone(true)` / `setSubmitted(true)` 但无 fetch）
- 是否每个收集到的数据都有明确的下游用途（不要"收了不用"的死数据）

---

## 14. AEO 优先（答案引擎优化是新站的弯道赛道）

**背景：截至 2026-07-12，EastType 在 Bing AI 引用中拿到 19 次引用，这是不依赖外链和域名年龄的赛道。Google 沙盒期可能持续 6-12 个月，但 AI 搜索引擎（Bing Copilot、ChatGPT、Perplexity、Claude）更愿意引用结构清晰、答案明确的内容，对域名权威度要求较低。**

### 核心策略

- **每周去 ChatGPT / Perplexity / Bing Copilot 搜索核心症状和体质问题，检查是否被引用**
- 被 AI 引用的内容通常具备：清晰的问题陈述（h1 问句）、结构化答案（列表/表格）、明确的 TCM 体质归因
- **AEO 优化方向**：
  - 症状页 h1 已是问句格式（"Why Am I Always Tired?"）——继续保持，这对 AI 引用极友好
  - 每页应有可直接被摘录的"一句话答案"（放在开头摘要）
  - JSON-LD 结构化数据（FAQPage / Article）帮助 AI 解析
- **不要为了 SEO 堆砌关键词而破坏 AI 可读性**——两者在症状页设计上是一致的

### 记录

- AI 引用次数（Bing Copilot / Perplexity / ChatGPT）应纳入每周运营检查
- 当某页被 AI 引用，分析其内容特征，复制到其他页

---

## 15. 提交前必须本地渲染验证（静态校验不够）

**背景：2026-07-12 新增 3 个药材页，verify-pages + build 全过，但实际渲染才发现标题重复 bug（"Cardamom (Sha Ren) (sha ren)"）。静态校验查不出的 bug：标题拼接重复、数据字段冲突、内容显示异常。**

### 核心规则

- **新增任何动态渲染页面（药材、症状、wellness 等），提交前必须本地 `pnpm dev` 启动并用 curl 抓取实际 HTML**
- 检查项：
  - `<title>` 是否正确（无重复、无截断）
  - `<link rel="canonical">` 是否正确
  - JSON-LD 是否输出
  - 图片路径是否能加载（检查 HTML 里 image src）
  - 关键内容是否渲染（不能是空白）
- `verify-pages` 和 `pnpm build` 是必要条件，但**不是充分条件**

---

## 项目概况

- **单一代码库**：Next.js 16 + React 19 + Tailwind 4 + pnpm
- **部署**：Vercel（push main 自动部署）
- **域名**：`www.myeasterntype.com`（所有 canonical/sitemap 必须用 www）
- **语言**：网站内容仅限英语
- **沟通**：用中文
- **品牌色**：金色 #C9A355，浅色模式默认
