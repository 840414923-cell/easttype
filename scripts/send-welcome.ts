import { readFileSync } from "node:fs"

function loadEnv() {
  try {
    const env = readFileSync(".env.local", "utf8")
    for (const line of env.split("\n")) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith("#")) continue
      const eq = trimmed.indexOf("=")
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let val = trimmed.slice(eq + 1).trim()
      val = val.replace(/^["']|["']$/g, "")
      process.env[key] = val
    }
  } catch {
    /* noop */
  }
}

async function main() {
  loadEnv()

  const email = process.argv[2]
  if (!email) {
    console.error("Usage: tsx scripts/send-welcome.ts <email>")
    process.exit(1)
  }

  const { sendWelcomeEmail } = await import("../src/lib/emails/welcome-email")
  console.log(`Sending welcome email to ${email}...`)
  const result = await sendWelcomeEmail(email)
  console.log(JSON.stringify(result, null, 2))
  process.exit(result.success ? 0 : 1)
}

main()
