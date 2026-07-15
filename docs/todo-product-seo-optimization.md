# 待办:产品 + SEO/GEO 优化清单

> 生成时间:2026-07-15
> 来源:深度产品审计(产品经理 + SEO/GEO 视角)

---

## 🔴 高优先(影响收入或数据决策)

### 1. 加 GA4 + 转化追踪
- **现状:** 只有 Vercel Analytics(基础PV) + Microsoft Clarity(热力图),无 GA4
- **问题:** 看不到 quiz 流失率、result 付费转化率、checkout 转化率
- **方案:** 加 GA4,追踪 3 个关键事件:quiz 完成、result 查看、checkout 点击/成功
- **工作量:** ~1-2 小时
- **文件:** `src/app/layout.tsx`(加 GA4 脚本),quiz/result/checkout 页面加事件

### 2. 付费墙 cookie 绕过修复
- **现状:** `report-v2` 只检查 `et_plan` cookie,用户可在控制台 `document.cookie="et_plan=pro"` 绕过
- **方案:** report-v2 页面加服务端验证,检查 Upstash Redis 是否有对应购买记录
- **工作量:** ~2-3 小时
- **文件:** `src/app/report-v2/report-client.tsx`, `src/lib/checkout-auth.ts`

### 3. Creem 支付转化事件追踪
- **现状:** 支付成功后无 purchase 事件发送到任何分析工具
- **方案:** 在 success 页面和 webhook 中发送 purchase 事件(GA4 + 可选 Facebook Pixel)
- **工作量:** ~1 小时
- **文件:** `src/app/success/`, `src/app/webhook/creem/route.ts`

---

## 🟡 中优先(影响 SEO 和分发)

### 4. 启用站内搜索(代码已写好,从未使用)
- **现状:** `components/search-bar.tsx` 是完整的全局搜索组件(130+ 条目索引,键盘导航,自动补全),但从未被任何页面引用
- **方案:** 把 SearchBar 放进 `components/nav.tsx` 导航栏
- **工作量:** ~1 小时(代码已写好,只需接入)
- **文件:** `src/components/nav.tsx`, `src/components/search-bar.tsx`, `src/lib/search-index.ts`
- **注意:** search-index.ts 里的 wellness 列表是硬编码的(44 条),需要和实际 51 篇同步

### 5. 修复 WebSite schema 的 SearchAction
- **现状:** 首页 WebSite JSON-LD 声明了 SearchAction,target 指向 `/quiz`(不是搜索页面)
- **方案 A:** 启用站内搜索后,把 target 改为搜索页 URL
- **方案 B:** 如果不启用搜索,删掉 SearchAction
- **工作量:** ~30 分钟
- **文件:** `src/app/page.tsx`

### 6. 加 Pinterest "Save" 按钮
- **现状:** Pinterest 是主营销渠道,但站内无 Pinterest Save 按钮
- **方案:** 在药材页和 wellness 文章页加 Pinterest 官方 Save 按钮
- **工作量:** ~30 分钟
- **文件:** `src/app/herbs/[slug]/page.tsx`, wellness article 页面
- **参考:** https://developers.pinterest.com/tools/widget-builder/

---

## 🟢 低优先(锦上添花)

### 7. 专属 OG 图片
- **现状:** 全站共享一张 `/og-image.png`
- **方案:** 后续为高流量页面生成专属 OG 图(显示标题+核心信息)
- **工作量:** 后期再做,等流量上来
- **可参考:** Next.js OG image generation (next/og)

### 8. Quiz 中途流失挽回
- **现状:** 用户开始 quiz 但没做完就离开,无挽回机制
- **方案:** mid-reveal 阶段加可选邮箱输入("输入邮箱获取完整结果")
- **工作量:** ~2-3 小时
- **文件:** `src/app/quiz/mid-reveal.tsx`
- **需要:** 邮件发送 API(已有 Resend)

---

## 执行顺序建议

1. GA4 + 转化追踪(第 1 项) - 先看到数据才能做决策
2. 启用站内搜索(第 4 项) - 代码已写好,1 小时搞定,SEO + UX 双赢
3. 修复 SearchAction schema(第 5 项) - 搜索启用后顺手修
4. Pinterest 按钮(第 6 项) - 30 分钟,加分销渠道
5. Cookie 付费墙修复(第 2 项) - 重要但不紧急,等有付费用户再优先
6. 转化事件追踪(第 3 项) - GA4 装好后一起做
7. Quiz 流失挽回(第 8 项) - 有 GA4 数据后才知道流失率多高
8. 专属 OG 图(第 7 项) - 最后做,等流量起来

---

## 今天的已完成清单(2026-07-15)

- [x] P0:3 页 CTR 优化(title/desc) - commit ee242cd
- [x] P2:76 个药材 slug 修复 + 301 - commit a8f6f16
- [x] 全代码库 7 维度审计(全部通过)
- [x] 审计修复:condition 去重 + 6 处内链 - commit 19babee
- [x] Xuan Shen 英文名修正 - commit 03f0d59
- [x] 2 个异常 slug 修复 + 301 - commit 6794822
- [x] 10 个新药材上线(herbs 122->132) - commit 882638d
- [x] 首页计数更新(122->132, 242->252) - commit bc22ad0
