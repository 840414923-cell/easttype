#!/usr/bin/env node

/**
 * EastType Page Verification Script
 *
 * Run this BEFORE committing any page changes:
 *   node scripts/verify-pages.mjs
 *
 * Exits with code 1 if any issues found.
 */

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

const ROOT = process.cwd()
const APP_DIR = join(ROOT, "src", "app")
const MIN_TITLE_LEN = 25
const MIN_DESC_LEN = 40
const LEGAL_SHORT_TITLES = ["Refund Policy — EastType", "Privacy Policy — EastType", "Terms of Service — EastType"]

let issues = []
let pagesScanned = 0

function scanDir(dir) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      scanDir(fullPath)
    } else if (entry === "page.tsx" || entry === "article.tsx") {
      scanPage(fullPath)
    }
  }
}

function scanPage(filePath) {
  pagesScanned++
  const content = readFileSync(filePath, "utf8")
  const rel = filePath.replace(APP_DIR + "\\", "").replace(/\\/g, "/")

  // 1. Check for "${...}" pattern (double-quoted template strings)
  // Skip admin pages (CSV export uses legitimate string concatenation)
  if (!rel.startsWith("admin/")) {
    const badTemplatePattern = /"\$\{[^}]+\}"/g
    const badMatches = content.match(badTemplatePattern)
    if (badMatches) {
      issues.push(`[BAD TEMPLATE STRING] ${rel}: Found "${badMatches[0]}" — use backticks instead of double quotes`)
    }
  }

  // 2. Check TITLE
  const titleMatch = content.match(/const TITLE\s*=\s*"([^"]*)"/)
  if (titleMatch) {
    const title = titleMatch[1]
    if (title.length < MIN_TITLE_LEN && !LEGAL_SHORT_TITLES.includes(title)) {
      issues.push(`[SHORT TITLE len=${title.length}] ${rel}: "${title}"`)
    }
    // Check for common truncation patterns
    const truncationPattern = /"(Won|Can|Doesn|Don|Isn|Aren|Wasn|Wer|Haven|Hasn|Couldn|Wouldn|Shouldn)"(?:[,\s)])/g
    const truncMatch = content.match(truncationPattern)
    if (truncMatch) {
      issues.push(`[TRUNCATED AT APOSTROPHE] ${rel}: Found "${truncMatch[0]}" — string was cut at apostrophe`)
    }
  }

  // 3. Check DESC
  const descMatch = content.match(/const DESC\s*=\s*"([^"]*)"/)
  if (descMatch) {
    const desc = descMatch[1]
    if (desc.length < MIN_DESC_LEN) {
      issues.push(`[SHORT DESC len=${desc.length}] ${rel}: "${desc.substring(0, 50)}..."`)
    }
  }

  // 4. Check openGraph description (inline strings, not DESC reference)
  const ogLines = content.split("\n")
  let inOpenGraph = false
  let inTwitter = false
  for (let i = 0; i < ogLines.length; i++) {
    const line = ogLines[i].trim()

    if (line.startsWith("openGraph:")) inOpenGraph = true
    if (line.startsWith("twitter:")) inTwitter = true
    if (line.startsWith("alternates:")) {
      inOpenGraph = false
      inTwitter = false
    }

    // Check inline description fields inside OG/Twitter
    if ((inOpenGraph || inTwitter) && line.includes("description:") && line.includes('"')) {
      const inlineDesc = line.match(/description:\s*"([^"]*)"/)
      if (inlineDesc && inlineDesc[1].length < MIN_DESC_LEN) {
        const section = inOpenGraph ? "openGraph" : "twitter"
        issues.push(`[SHORT ${section.toUpperCase()} DESC len=${inlineDesc[1].length}] ${rel}:${i + 1}: "${inlineDesc[1]}"`)
      }
    }
  }

  // 5. Check URL uses backticks when it contains ${}
  const urlLineMatch = content.match(/const URL\s*=\s*(.+)/)
  if (urlLineMatch) {
    const urlValue = urlLineMatch[1].trim()
    if (urlValue.includes("${") && !urlValue.startsWith("`")) {
      issues.push(`[URL NOT BACKTICK] ${rel}: URL contains $\\{...\} but does not use backticks`)
    }
  }
}

// Run scan
console.log("EastType Page Verification")
console.log("=" .repeat(50))
console.log(`Scanning: ${APP_DIR}\n`)

scanDir(APP_DIR)

console.log(`Pages scanned: ${pagesScanned}`)
console.log(`Issues found: ${issues.length}\n`)

if (issues.length === 0) {
  console.log("All pages passed verification. Safe to commit.")
  process.exit(0)
} else {
  console.log("ISSUES FOUND:")
  console.log("-".repeat(50))
  for (const issue of issues) {
    console.log(`  ${issue}`)
  }
  console.log("-".repeat(50))
  console.log(`\nFix all ${issues.length} issue(s) before committing.`)
  console.log("Or run: node scripts/verify-pages.mjs after fixing.")
  process.exit(1)
}
