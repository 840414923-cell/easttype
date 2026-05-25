# EastType — Project Context & Progress

## Quick Reference
- **Stack**: Next.js 16 + React 19 + TypeScript + Tailwind v4 + pnpm
- **Dev**: `pnpm dev --port 3001`
- **Build**: `pnpm build` (must pass with zero errors)
- **Languages**: en / zh-TW / ja (all user-facing text must be trilingual)

## Architecture
```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout (metadata, fonts)
│   ├── quiz/page.tsx         # Two-phase quiz (15 + 12 = 27 questions)
│   ├── result/page.tsx       # Result page (share buttons, pricing CTAs)
│   ├── report-v2/page.tsx    # Basic/Pro report viewer (reads ?plan=pro)
│   ├── report/page.tsx       # Legacy report page
│   └── about/page.tsx        # About page
├── components/
│   ├── locale-provider.tsx   # Language switcher context
│   └── mid-reveal.tsx        # Mid-reveal page (radar chart + phase 2 quiz)
├── lib/
│   ├── types.ts              # ConstitutionId, QuizResult, etc.
│   ├── constitution-data.ts  # TYPES map (9 constitutions with colors, names, pcts)
│   ├── quiz-27.ts            # Full 27-question quiz + calculate27Scores + getPrimaryAndSecondary
│   ├── quiz-15.ts            # Phase 1 (15 questions) + Phase 2 (12 questions) scoring
│   ├── i18n/
│   │   ├── types.ts          # LocaleData interface (all UI string keys)
│   │   ├── en.ts             # English locale
│   │   ├── zh-TW.ts          # Traditional Chinese locale
│   │   └── ja.ts             # Japanese locale
│   ├── reports-json/
│   │   ├── index.ts          # REPORT_MAP + PRO_MAP, getJsonReport() + getProJsonReport()
│   │   ├── schema.ts         # ReportBasic, ReportPro, ProScheduleRow, etc.
│   │   ├── balanced-female.json ... sensitive-male.json   (9 basic × 2 sexes = 18 files)
│   │   └── pro-balanced-female.json ... pro-sensitive-male.json (18 pro files)
│   └── questions/            # Old quiz question pool (used by i18n locales)
```

## Constitution Types (ConstitutionId)
`balanced`, `qi_deficient`, `yang_deficient`, `yin_deficient`, `phlegm_damp`, `damp_heat`, `blood_stasis`, `qi_stagnant`, `sensitive`

## Current Feature: Two-Phase Quiz
### Flow
1. **Sex select** → 2. **Phase 1: 15 questions** (~3 min, "Quick Scan") → 3. **Mid-Reveal page** → 4. **Phase 2: 12 questions** (~2 min, "Deep Analysis") → 5. **Completion animation** → 6. **Result page**

### Question Selection (15 from 27)
- Original indices (0-based): 0, 3, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 21, 23, 24
- Coverage: 1 balanced, 2× qi_def, 2× yang_def, 2× yin_def, 2× phlegm_damp, 2× damp_heat, 1× blood_stasis, 2× qi_stagnant, 1× sensitive
- Remaining 12 (Phase 2): indices 1, 2, 4, 8, 11, 14, 17, 19, 20, 22, 25, 26

### Mid-Reveal Page
- SVG radar chart (8 axes, animated, primary constitution color)
- Shows preliminary primary type (name + color + tagline)
- Hook: "Answer 12 more to unlock full blueprint"
- Skip option → navigates to result with 15-question scores only
- Suspense share button (Twitter, links to homepage)
- Phase 2 quiz runs inside mid-reveal component

### Scoring
- `calculate15Scores()` — scores from 15 questions only (for mid-reveal preview)
- `calculate27Scores()` — full 27-question scores (for final result)
- `buildFullScores()` in quiz page — merges phase1 + phase2 answers into full 27 array
- `getPrimaryAndSecondary()` — shared algorithm, works with any score set
- Gender weights applied: female +10% blood_stasis/qi_stagnant/qi_deficient, male +10% yang_deficient/phlegm_damp

## Monetization
- **Basic report**: $4.99 — Body Profile Report
- **Pro report**: $12.99 — Full Transformation Kit (28-day recipe plan + grocery lists)
- Report page reads `?plan=pro` URL param to show Pro vs Basic sections
- Result page has pricing cards with CTAs; Pro buttons pass `&plan=pro`

## Git Tags
- `v1-quiz-27-direct` — snapshot before two-phase refactor (single 27-question flow)
- `v1.0`, `v1.1.0`, etc. — earlier releases

## Key Decisions
- No chart libraries — radar chart is pure SVG
- Pro JSON files are tracked in git; all 18 exist with full trilingual content
- URL params: `primary`, `secondary`, `scores` (comma-separated id:val), `lang`, `sex`, `plan`
- `quiz_mode=classic` feature flag available for A/B rollback (not yet implemented)
- Constitution IDs use underscores in code/URLs

## Known Issues / TODO
- Landing page and locale files still reference "12 questions" / "14 questions" in some places (zh-TW readySubtitle, ja readySubtitle) — needs consistency update
- `quiz_mode=classic` feature flag not yet wired up
- No analytics/tracking on mid-reveal conversion rate yet
- Pro report purchase/payment flow not implemented (currently free access via URL param)

---

## Pre-Launch Checklist (完成清单)

### A. 内容 & 素材（你的部分）
| # | 任务 | 状态 | 说明 |
|---|------|------|------|
| A1 | 9张体质卡片图片 | ❌ 待做 | 只有 balanced.png，其余8张缺失。方案：东方神兽碎片风格，统一暗纹边框 |
| A2 | 域名 DNS 配置 | ❌ 待做 | 已购 myeasterntype.com，等部署后指向 Vercel |
| A3 | LemonSqueezy 注册 + 创建产品 | ❌ 待做 | PayPal 已注册，需注册 LemonSqueezy 并创建 Basic/Pro 两个产品 |
| A4 | 隐私政策 & 服务条款页面 | ❌ 待做 | Privacy Policy + Terms of Service + Refund Policy，付费产品必须有 |
| A5 | Favicon / OG 图片 | ❌ 待做 | 网站图标、社交媒体分享预览图 |

### B. 功能开发（我的部分）
| # | 任务 | 状态 | 说明 |
|---|------|------|------|
| B1 | 支付集成（LemonSqueezy） | ❌ 待做 | 嵌入式支付 + webhook + 报告解锁逻辑 |
| B2 | 报告访问控制 | ❌ 待做 | 未付款用户只能看预览，付款后解锁完整报告 |
| B3 | 报告下载/打印功能 | ⚠️ 部分 | 页面已有，但需确认 PDF 导出质量 |

### C. 视觉优化（我们的部分）
| # | 任务 | 状态 | 说明 |
|---|------|------|------|
| C1 | 首页 Hero 文案优化 | ❌ 待做 | 改为两阶段描述（"3分钟快速扫描"），加病毒式钩子 |
| C2 | 首页文案统一 | ❌ 待做 | zh-TW/ja 的 readySubtitle 还写着旧数字，需更新 |
| C3 | 9宫格卡片 hover 效果 | ❌ 待做 | hover 时显示一条病毒式预测，制造好奇心 |
| C4 | Bottom CTA 文案优化 | ❌ 待做 | 改为紧迫感文案 |
| C5 | 中间揭晓页分享图片卡 | ❌ 待做 | 需等你提供9张背景图后加 html2canvas 生成分享图 |

### D. 部署（最后阶段）
| # | 任务 | 状态 | 说明 |
|---|------|------|------|
| D1 | 代码 commit + push | ❌ 待做 | 当前有未提交的更改（两阶段测验 + 折叠解释 + 语言切换器） |
| D2 | GitHub 仓库创建 | ❌ 待做 | 当前 remote 指向 jihulab，需创建新 GitHub 仓库 |
| D3 | Vercel 部署 | ❌ 待做 | Import GitHub 仓库 → 自动部署 |
| D4 | 域名 DNS 指向 Vercel | ❌ 待做 | Namecheap 后台配置 |
| D5 | 生产环境测试 | ❌ 待做 | 全流程测试：测验 → 中间揭示 → 结果 → 付款 → 报告 |

### E. 未提交的代码更改（当前本地）
- `src/app/quiz/page.tsx` — 两阶段流程 + 折叠解释 + 语言切换器
- `src/components/mid-reveal.tsx` — 新文件，中间揭晓页
- `src/lib/quiz-15.ts` — 新文件，15题/12题评分
- `src/lib/i18n/en.ts` / `zh-TW.ts` / `ja.ts` / `types.ts` — mid-reveal i18n 字串

## Recent Commits
- `5935b82` — feat: pro report integration, share buttons, copy fixes — pre-quiz-refactor snapshot
- `decef36` — feat: EastType v1.0 — complete TCM constitution quiz with 18 trilingual reports
