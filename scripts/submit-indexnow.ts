import { readFileSync, read } from "node:fs"
import { join } from "node:path"

const INDEXNOW_KEY = "62b701021d242b39a739ee629f462a69"
const HOST = "www.myeasterntype.com"
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

async function main() {
  const sitemapPath = join(process.cwd(), "public", "sitemap.xml")
  const sitemap = readFileSync(sitemapPath, "utf-8")

  const urls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1])

  console.log(`Found ${urls.length} URLs in sitemap`)

  const body = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  })

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/indexnow",
  ]

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body,
      })
      console.log(`${endpoint}: ${res.status} ${res.statusText}`)
      if (res.status === 200 || res.status === 202) {
        console.log(`  Successfully submitted ${urls.length} URLs`)
      } else if (res.status === 422) {
        const text = await res.text()
        console.log(`  Error: ${text}`)
      }
    } catch (err) {
      console.log(`${endpoint}: Failed - ${err}`)
    }
  }
}

main()
