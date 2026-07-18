# Journal 文章标准化创作手册

> 基于第一篇标杆文章 "Heatwave Survival by Body Type" 总结。后续每篇文章按此标准创作。
> 每篇 journal 文章必须同时服务三个目标：AI 抓取、媒体引用、搜索流量。

---

## 1. 文章结构模板

标杆文章的 14 个 section 按以下顺序排列，后续文章按需调整但保持核心节奏：

| 序号 | Section 类型 | 作用 | 标杆文章对应 |
|---|---|---|---|
| 1 | text | 导语：场景化开头，引入主题 + 关键词 | "Why Heat Hits Different Bodies Differently" |
| 2 | image | 配图：视觉总览信息图 | 9体质热反应矩阵图 |
| 3 | table | 表格：结构化对比矩阵（含五星评级） | 9体质 × 热耐受度 × 感受 × 风险 |
| 4 | barchart | 条形图：数据可视化 + 可引用金句 | 热耐受度 2-9/10 条形图 |
| 5 | cta | 引导卡片：链到 /quiz | "Want to know your body type?" |
| 6 | text | 分组介绍：高风险/核心群体 | "The High-Risk Types" |
| 7-8 | text × 2-3 | 详解：带趣味标签 + 带入感描述 | "Yin Deficient: The Human Furnace" |
| 9 | text | 分组介绍：低风险/对比群体 | "The Low-Risk Types" |
| 10-11 | text × 1-2 | 详解：带趣味标签 | "Yang Deficient: The One Who Enjoys It" |
| 12 | image | 配图：法则/实操信息图 | 5条通用法则图 |
| 13 | list | 法则清单：粗体标题 + 说明 | 5条降温法则 |
| 14 | steps | 步骤教程：具体到用量/时间/工具 | 绿豆汤8步食谱 |
| 15 | list | 补充注意事项 | 绿豆汤4条注意事项 |
| 16 | image | 配图：禁忌/避坑信息图 | 6个禁忌图 |
| 17 | list | 禁忌清单：粗体标题 + 说明 | 7个热浪禁忌 |
| - | relatedLinks | 内链区：3-4条链到 wellness/symptoms/herbs | 4条内链 |
| - | faqs | FAQ：5-7问，覆盖长尾搜索词 | 7个FAQ |

**核心节奏**：场景引入 -> 数据总览 -> 引导测试 -> 分组详解 -> 实操法则 -> 食谱教程 -> 避坑指南 -> 内链 -> FAQ

> **硬规则(2026-07-18 新增):quiz CTA 必须在文章 40% 位置之前出现。**
> 理由:用户读到 30-40% 时已看完背景和数据总览,正是"想知道自己什么体质"的钩子最强时机;放在结尾(80%+)浪费转化窗口。
> 计算:CTA 之前的 section 数 ÷ 总 section 数 ≤ 0.40。例如 17 个 section 的文章,CTA 应在第 6 个位置或更早。
> 反例:`summer-travel-by-body-type` 初版把 CTA 放在第 16/17 位(94%),已修正为第 6 位(35%)。

---

## 2. 数据结构字段标准

每篇文章在 `src/lib/journal-data.ts` 中按以下结构填写：

```typescript
{
  slug: "heatwave-survival-by-body-type",        // URL slug，英文短横线连接
  title: "Heatwave Survival: How Your Body...",  // SEO标题，含热点词+差异化词
  description: "When the next heatwave hits...",  // meta description，含关键词，>= 40字符
  date: "2026-07-11",                             // 发布日期 YYYY-MM-DD
  category: "weather",                            // seasonal | holiday | event | weather
  tags: ["heatwave", "summer", "body-type"],      // 搜索标签
  excerpt: "A 40 degree day feels different...",  // hub页列表摘要，1-2句
  thumbnail: "/images/journal/heatwave-cover.jpg",// hub页缩略图路径
  sections: [ ... ],                              // 正文内容（见第3节）
  relatedLinks: [                                 // 内链，3-4条
    { title: "Cooling Foods in Chinese Medicine", slug: "cooling-foods-chinese-medicine", type: "wellness" },
    { title: "Why Am I So Sensitive to Heat", slug: "why-am-i-so-sensitive-to-heat", type: "symptoms" },
  ],
  faqs: [                                         // FAQ，5-7个
    { q: "Which body type is most at risk?", a: "Yin Deficient and Damp Heat types tend to..." },
  ],
}
```

### 字段填写规则
- **slug**：全小写，短横线连接，含热点词
- **title**：不超过 60 字符，格式为"热点词 + 差异化角度"
- **description**：不超过 155 字符，含热点词 + 长尾词，末尾不加点
- **excerpt**：1-2 句，hub 页卡片显示，要有画面感
- **thumbnail**：杂志封面风格图，3:4 比例，路径 `/images/journal/{slug}-cover.jpg`
- **tags**：3-5 个，含热点词 + 差异化词 + 长尾词

---

## 3. Section 类型标准

共 7 种 section 类型，每种有固定字段和渲染效果：

### text（默认，可省略 type）
纯文字段落，用于导语、体质详解、分组介绍。
```typescript
{
  heading: "Why Heat Hits Different Bodies Differently",
  body: "When the temperature hits 40 degrees and the air feels like..."
}
```
**写作要求**：开头要有画面感，体质详解要有带入感（"If you..."句式），heading 可含趣味标签（如 "Yin Deficient: The Human Furnace"）。

### table
结构化数据表格，用于对比矩阵。表格可用五星字符（★★★★★）做视觉化评级。
```typescript
{
  heading: "The Nine Body Types in a Heatwave",
  type: "table",
  table: {
    headers: ["Body Type", "Heat Tolerance", "How It Feels", "Heat Risk"],
    rows: [
      ["Yin Deficient", "Very Low", "Internal heat compounds...", "★★★★★"],
      ["Balanced", "High", "Adapts well...", "★☆☆☆☆"],
    ]
  }
}
```

### barchart
CSS 水平条形图，用于可视化数据。body 字段放可引用金句。颜色自动按值分配（红/琥珀/绿）。
```typescript
{
  heading: "Heat Tolerance by Body Type: The Full Spectrum",
  body: "Across the nine body types, nearly two-thirds face moderate to high risk...",
  type: "barchart",
  barchart: {
    items: [
      { label: "Yin Deficient", value: 2, displayValue: "2/10" },
      { label: "Balanced", value: 9, displayValue: "9/10" },
    ]
  }
}
```
**value 范围**：0-10。<=3 红色（高风险），4-6 琥珀色（中风险），>=7 绿色（低风险）。

### steps
有序步骤列表，用于食谱、教程。每步有粗体标题 + 详细说明。
```typescript
{
  heading: "How to Make Mung Bean Soup: A Step-by-Step Cooling Recipe",
  body: "Mung bean soup is arguably the most iconic of all Chinese cooling drinks...",
  type: "steps",
  steps: [
    { title: "Pick the right beans", detail: "Choose mung beans that are plump..." },
    { title: "Soak before cooking", detail: "Rinse the beans thoroughly..." },
  ]
}
```
**写作要求**：具体到用量、时间、工具。指出常见错误（如"煮过头汤变红就失去清热效果"）。

### list
无序列表，用于法则、禁忌、注意事项。每项有粗体标题 + 说明。
```typescript
{
  heading: "Heatwave Mistakes to Avoid",
  type: "list",
  list: [
    { bold: "Drinking ice water after sun exposure.", text: "The cold shocks the Spleen..." },
    { bold: "Standing in front of blasting AC while sweating.", text: "The sudden cold..." },
  ]
}
```

### image
配图。有 imagePath 显示真实图片，无则显示虚线占位框 + 描述文字。
```typescript
{
  heading: "The Nine Body Types in a Heatwave",
  type: "image",
  imageAlt: "Heatwave body type risk matrix",
  imageDescription: "An infographic showing all nine body types...",
  imagePath: "/images/journal/heatwave-body-type-matrix.jpg"  // 画好后填写
}
```
**配图标准**：统一 16:9 比例，JPG < 200KB，路径 `/images/journal/{slug}-{描述}.jpg`。未画好时只填 imageDescription，不填 imagePath。

### cta
引导测试的横条卡片，链到 /quiz。
```typescript
{
  heading: "",
  type: "cta",
  body: "Want to know which of the nine body types you are? Take the free 5-minute quiz..."
}
```
**位置**：放在表格/条形图之后，读者刚看完数据时引导测试。

---

## 4. 关键词策略

每篇必须覆盖三类词：

| 类型 | 数量 | 作用 | 标杆文章示例 |
|---|---|---|---|
| 热点词 | 1个 | 抓时效性流量 | heatwave |
| 体质差异化词 | 1-2个 | 抓独家角度 | heat intolerance, body type |
| 长尾搜索词 | 2-3个 | 抓持续流量 | how to cool down, cooling drinks, mung bean soup |

**填写位置**：
- 热点词：title + tags + 导语
- 差异化词：title + description + 导语 + 详解
- 长尾词：tags + 正文自然融入（section heading 或 body）

长尾词必须自然融入正文至少 1 次，不要堆砌。

---

## 5. 可引用金句规则

每篇至少 2-3 句"可引用金句"。金句放在 barchart 的 body 或重要 section 的 body 中。

金句标准：
- 果断判断（带对冲语言，但语感果断）
- 包含具体数字或比例
- 独家观点（只有这篇文章能说的）

示例：
- ✅ "In TCM theory, Yin Deficient types have the lowest heat tolerance of all nine constitutions."
- ✅ "Across the nine body types, nearly two-thirds face moderate to high risk during a heatwave."
- ❌ "Yin Deficient types may experience some discomfort in heat."（太模糊）

---

## 6. 带入感写作技巧

体质详解要用"如果你..."句式，让读者对号入座：

**标杆示例（阴虚）**：
> "If you wake up at 3 AM drenched in sweat, if your throat feels dry no matter how much water you drink, and if the mere thought of a hot summer night makes you dread bedtime, you may well belong to this group."

**标杆示例（湿热）**：
> "If your skin breaks out the moment the weather turns hot and sticky, if you feel irritable and heavy for no clear reason, and if your body feels like it is wrapped in a hot, damp cloth that will not come off, this may be your pattern."

### 体质趣味标签
每个详解 section 的 heading 加趣味标签：
- Yin Deficient: The Human Furnace
- Damp Heat: The Summer Sticky Trap
- Yang Deficient: The One Who Enjoys It
- Balanced: The Naturally Adaptable

后续文章的标签按主题重新设计，保持"体质名: 趣味标签"格式。

---

## 7. 配图标准（2026-07-18 重新定型）

每篇 journal 需要 4 张图：1 张封面（水墨手绘） + 3 张内页（PPT 说明图）。**两种风格不可混用**，确保跨文章视觉统一。

### 通用规则（所有 4 张都遵守）

- **人物必须穿衣**：所有人物明确写 `fully clothed, wearing long-sleeved shirt and trousers`，避免 AI 生成裸体或不当图像
- **英文文字标注**：用户的绘图模型支持文字渲染，图里该有的标签、callout、标题直接用英文写进 prompt（**不要写 "No text"**）
- **无水印、无 logo、无第三方品牌**
- **文件格式**：JPG，路径 `public/images/journal/`
- **命名**：`{slug}-{描述}.jpg`（如 `summer-travel-cover.jpg`、`summer-travel-jetlag-timeline.jpg`）

### 封面缩略图（1 张，3:4 竖图）

- **风格**：**水墨手绘插画**（Chinese ink wash painting / 水墨画 / sumi-e）
- **比例**：3:4（1000×1333 px 或 1200×1600 px）
- **文件大小**：目标 < 80KB
- **命名**：`{slug}-cover.jpg`
- **用途**：hub 页 `/journal` 列表卡片缩略图

**风格关键词**（写进 prompt）：
- `Contemporary Chinese ink wash painting (水墨手绘), hand-painted with traditional brush`
- `fluid black ink strokes with subtle grey wash gradients`
- `generous white space (留白) in the upper portion`
- `visible rice paper (宣纸) texture`
- `accents of cinnabar red (朱砂) and warm gold ink`
- `small red seal mark (印章) in the lower corner`
- `contemporary ink illustration blending traditional brushwork with modern editorial composition`
- `evocative, calm, sophisticated wellness brand aesthetic`

**配色**：black ink 为主，grey wash 渐变，cinnabar red + warm gold 点缀

**Prompt 模板**：
```
Contemporary Chinese ink wash painting (水墨手绘) illustration, hand-painted with traditional brush, 3:4 portrait aspect ratio. [场景：一个穿衣的人物 + 旅行/季节元素 + 中医元素]. Composition: [具体构图]. Generous white space (留白) in the upper third. Visible rice paper (宣纸) texture throughout. A small red seal mark (印章) in the lower right corner. Color palette: primarily black ink with soft grey gradients, accents of cinnabar red and warm gold. Style: contemporary Chinese ink illustration blending traditional 水墨 brushwork with modern editorial composition, evocative, calm and sophisticated. Visible brushwork, no outlines, hand-painted feel. High quality, highly detailed. No text other than the small red seal mark.
```

### 内页配图（3 张，16:9 横图）

- **风格**：**PPT 说明图 / 详细教育信息图**（detailed educational infographic, presentation slide style）
- **比例**：16:9（1600×900 px 或 1536×864 px）
- **文件大小**：目标 < 200KB
- **命名**：`{slug}-{描述}.jpg`

**风格关键词**（写进 prompt）：
- `Detailed educational infographic, presentation slide style`
- `information-dense but readable`
- `clear visual hierarchy, professional presentation design`
- `background: clean off-white`
- **包含具体英文文字内容**（直接写进 prompt：标题、callout 标签、时间标签、体质名称等）

**3 张图的标准位置节奏**：
1. **开篇钩子图**（导语 text 之后）：对比图、概念图、视觉总览
2. **中段工具图**（核心数据/步骤之后）：时间线、矩阵、流程图、数据可视化（Pinterest 友好，可保存）
3. **结尾场景图**（场景化 section 之前/之后）：多场景对比、案例集

**Prompt 模板**：
```
Detailed educational infographic, presentation slide style, 16:9 horizontal aspect ratio. Title at top in clean modern sans-serif font: "[英文标题]". [主体结构：对比/时间线/矩阵/流程]. [具体元素：图标、穿衣人物、callout 标签]. [英文文字内容：标签、体质名称、指令短语]. Background: clean off-white [with subtle dotted grid]. Style: detailed educational infographic, presentation slide design, information-dense but readable, professional, all figures fully clothed. High quality.
```

### 配图流程

1. **写文章时**：在数据里加 `image` section，填 `imageAlt` + `imageDescription`，**不填 imagePath**（渲染时自动显示虚线占位框）
2. **封面字段**：画完图后填 `thumbnail` 字段路径
3. **生成 prompt**：按上面的封面/内页模板，填入具体场景和英文文字内容
4. **用户画图**：用 image2 或同类模型生成（**注意比例**：封面 3:4，内页 16:9）
5. **文件放到** `public/images/journal/`，文件名 `{slug}-{描述}.png`（临时）
6. **压缩 + 转 JPG**：用临时 sharp 脚本（封面 maxWidth 1000 quality 82，内页 maxWidth 1600 quality 80，mozjpeg）
7. **填路径**：`thumbnail` 字段 + 3 个 `imagePath` 字段，渲染自动从占位切换为真图
8. **verify + build**：确认图片正常渲染

### 已完成配图参考（风格基准）

- `summer-travel-by-body-type`（2026-07-18，**定型基准**）
  - 封面 `summer-travel-cover.jpg`：水墨，旅行者背影 + 茶壶/姜/红枣 + 朱砂印章
  - 内页 1 `summer-travel-two-travelers.jpg`：两人并排对比 + callout 标签（Yin Deficient vs Balanced）
  - 内页 2 `summer-travel-jetlag-timeline.jpg`：36 小时时间线 + 7 站点 + 英文时间标签
  - 内页 3 `summer-travel-three-holidays.jpg`：三场景矩阵 + 9 体质响应 + 绿/黄/红圆点
  - **后续 journal 都按这套风格规范创作**
- `heatwave-survival-by-body-type`（2026-07-11，初版，扁平化无文字标注，**已过时，不再参考**）

---

## 8. 内链策略

每篇至少 3-4 条内链，放在 relatedLinks 字段：
- wellness 页（深度资源）
- symptoms 页（搜索入口）
- herbs 页（具体草药）
- patterns 页（TCM 桥接）

```typescript
relatedLinks: [
  { title: "Cooling Foods in Chinese Medicine", slug: "cooling-foods-chinese-medicine", type: "wellness" },
  { title: "Kidney Yin Deficiency", slug: "kidney-yin-deficiency", type: "wellness" },
  { title: "Why Am I So Sensitive to Heat", slug: "why-am-i-so-sensitive-to-heat", type: "symptoms" },
  { title: "Why Do I Sweat So Much", slug: "why-do-i-sweat-so-much", type: "symptoms" },
]
```

---

## 9. 写作风格规则

### 既有规则（AGENTS.md，必须遵守）
- 禁用 AI 套话词：moreover, furthermore, additionally, in conclusion, delve, embark, journey, tapestry, vibrant, realm, harness, unlock, cultivate, nurture, elevate, transform, discover, revolutionize
- 禁用破折号（em dash）
- 健康表述用对冲语言：may / might / can be associated with
- 禁用诊疗词：treat, cure, healing, remedy, medicinal

### Journal 特有规则
- 开头要有画面感（具体场景，不要泛泛而谈）
- 每段长短交替（短句 + 长句，有节奏感）
- 体质详解要有带入感（"If you..."句式）
- heading 可含趣味标签（"体质名: 趣味标签"）
- 食谱/步骤要非常详细（具体到用量、时间、工具）
- 指出常见错误（增加含金量和可信度）
- 避免"教科书感"（像一个懂中医的人在跟你聊天）

---

## 10. 创作流程

1. **选题讨论**：每周与用户讨论，结合当下热点（季节/节日/事件/天气）
2. **关键词规划**：确定 1 个热点词 + 1-2 个差异化词 + 2-3 个长尾词
3. **结构设计**：按第1节模板设计 sections 顺序
4. **内容写作**：在 `journal-data.ts` 中填写文章数据，遵守第9节风格规则
5. **配图规划**：标注 image section，写详细 imageDescription
6. **验证**：`node scripts/verify-pages.mjs`（0 issues）+ `pnpm build`（无错误）
7. **本地预览**：`pnpm dev`，用户确认效果
8. **配图替换**：用户画图后，压缩为 JPG，在数据里填 imagePath
9. **更新 sitemap**：在 `public/sitemap.xml` 加新文章 URL
10. **发布**：`git add` + `git commit` + `git push`

---

## 11. 发布前检查清单

- [ ] 至少 1 个表格或条形图
- [ ] 至少 2-3 句可引用金句
- [ ] 至少 5 个 FAQ
- [ ] 覆盖热点词 + 差异化词 + 长尾词
- [ ] 至少 3-4 条内链
- [ ] 至少 2-3 个配图（image section）
- [ ] 体质详解有带入感（"If you..."句式）+ 趣味标签
- [ ] 食谱/步骤详细到可操作
- [ ] 遵守 AGENTS.md 写作规则（禁用词、对冲语言、无破折号）
- [ ] canonical URL 用反引号模板字符串
- [ ] verify-pages 0 issues
- [ ] pnpm build 无错误
- [ ] sitemap.xml 已更新
- [ ] 配图 < 200KB
