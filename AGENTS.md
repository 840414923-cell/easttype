# AGENTS.md — EastType AI 协作规则

## 强制执行项（任何页面改动前必读）

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

---

## 项目概况

- **单一代码库**：Next.js 16 + React 19 + Tailwind 4 + pnpm
- **部署**：Vercel（push main 自动部署）
- **域名**：`www.myeasterntype.com`（所有 canonical/sitemap 必须用 www）
- **语言**：网站内容仅限英语
- **沟通**：用中文
- **品牌色**：金色 #C9A355，浅色模式默认
