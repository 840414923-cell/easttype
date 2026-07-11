# Journal 高流量写作规则

> 每篇 journal 文章必须同时服务三个目标：AI 抓取、媒体引用、搜索流量。

---

## 1. 必须包含的数据化元素

每篇文章至少包含以下 3 种：

| 元素 | 作用 | AI引用 | 媒体引用 | 搜索流量 |
|---|---|---|---|---|
| 表格/矩阵 | 结构化对比，可截图 | 直接抓取 | 直接截图 | 中 |
| 条形图(barchart) | 可视化数据，直观 | 数据可解析 | 可截图 | 中 |
| 步骤列表(steps) | 具体可操作 | 直接抓取 | 引用步骤 | 高(recipe类词) |
| FAQ | 问答式，匹配搜索意图 | 直接抓取 | 中 | 高(长尾词) |
| 五星评级 | 视觉化判断 | 数据可解析 | 可截图 | 低 |
| 配图占位(image) | 信息图，供后续绘制 | - | 可截图 | - |

---

## 2. 可引用金句规则

每篇至少 2-3 句"可引用金句"。金句的标准：
- 果断判断（带对冲语言，但语感果断）
- 包含具体数字或比例
- 独家观点（只有这篇文章能说的）

示例：
- ✅ "In TCM theory, Yin Deficient types have the lowest heat tolerance of all nine constitutions."
- ✅ "Across the nine body types, nearly two-thirds face moderate to high risk during a heatwave."
- ❌ "Yin Deficient types may experience some discomfort in heat."（太模糊，没人引用）

---

## 3. 关键词策略

每篇必须覆盖三类词：

| 类型 | 数量 | 作用 | 示例 |
|---|---|---|---|
| 热点词 | 1个 | 抓时效性流量 | heatwave, back to school, Christmas |
| 体质差异化词 | 1-2个 | 抓独家角度 | heat intolerance, body type |
| 长尾搜索词 | 2-3个 | 抓持续流量 | how to cool down, cooling drinks, mung bean soup recipe |

长尾词必须自然融入正文至少 1 次，不要堆砌。

---

## 4. AI 抓取优化

AI 搜索（Google AI Overviews, Bing Chat）引用内容的特点：
- 偏好结构化内容（表格 > 列表 > 段落）
- 偏好问答式（FAQ 直接匹配用户提问）
- 偏好有明确判断的内容
- 偏好有数据的判断（"nearly two-thirds" 比 "many" 更容易被引用）

每篇必须：
- 至少 1 个表格或条形图
- 至少 5 个 FAQ
- 至少 2-3 句金句

---

## 5. 媒体引用优化

媒体引用内容的特点：
- 需要可截图的视觉化内容
- 需要独家角度（别人没有的）
- 需要权威感（中医理论 + 具体数据）

每篇必须：
- 至少 1 个独家数据化内容（如 9 体质矩阵、热耐受度条形图）
- 至少 2-3 个配图占位（信息图，供后续绘制）
- 配图描述要详细（画什么、每个元素代表什么）

---

## 6. 内链策略

每篇至少 3-4 条内链到现有页面：
- wellness 页（深度资源）
- symptoms 页（搜索入口）
- herbs 页（具体草药）
- patterns 页（TCM 桥接）

内链放在 Related Articles 区。

---

## 7. 写作风格

### 既有规则（AGENTS.md）
- 禁用 AI 套话词（moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize）
- 禁用破折号（em dash）
- 健康表述用对冲语言（may / might / can be associated with）
- 禁用诊疗词（treat, cure, healing, remedy, medicinal）

### Journal 特有规则
- 开头要有画面感（具体场景，不要泛泛而谈）
- 每段长短交替（短句 + 长句，有节奏感）
- 金句要果断（带对冲语言但语感果断）
- 食谱/步骤要非常详细（具体到用量、时间、工具）
- 避免"教科书感"（像一个懂中医的人在跟你聊天）

---

## 8. 发布前检查清单

- [ ] 至少 1 个表格或条形图
- [ ] 至少 2-3 句可引用金句
- [ ] 至少 5 个 FAQ
- [ ] 覆盖热点词 + 差异化词 + 长尾词
- [ ] 至少 3-4 条内链
- [ ] 至少 2-3 个配图占位
- [ ] 食谱/步骤详细到可操作
- [ ] 遵守 AGENTS.md 写作规则
- [ ] verify-pages 0 issues
- [ ] pnpm build 无错误
