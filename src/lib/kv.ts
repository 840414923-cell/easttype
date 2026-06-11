import { Redis } from "@upstash/redis"

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

let _redis: Redis | null = null

export function getRedis(): Redis {
  if (!_redis) {
    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
      throw new Error("Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN")
    }
    _redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    })
  }
  return _redis
}

export interface InviteCode {
  code: string
  channel: string
  status: "unused" | "used"
  usedByType?: string
  usedBySex?: string
  usedAt?: string
  createdAt: string
}

const PREFIX = "invite:"

export async function getInviteCode(code: string): Promise<InviteCode | null> {
  const redis = getRedis()
  const data = await redis.get<InviteCode>(`${PREFIX}${code}`)
  return data
}

export async function setInviteCode(invite: InviteCode): Promise<void> {
  const redis = getRedis()
  await redis.set(`${PREFIX}${invite.code}`, JSON.stringify(invite))
}

export async function redeemInviteCode(
  code: string,
  userType: string,
  userSex: string
): Promise<{ success: boolean; error?: string }> {
  const redis = getRedis()
  const key = `${PREFIX}${code}`

  const raw = await redis.get(key)
  if (!raw) {
    return { success: false, error: "Invalid code" }
  }

  const invite: InviteCode =
    typeof raw === "string" ? JSON.parse(raw as string) : (raw as InviteCode)

  if (!invite || !invite.code) {
    return { success: false, error: "Invalid code data" }
  }

  if (invite.status === "used") {
    return { success: false, error: "This code has already been used" }
  }

  invite.status = "used"
  invite.usedByType = userType
  invite.usedBySex = userSex
  invite.usedAt = new Date().toISOString()

  await redis.set(key, JSON.stringify(invite))
  return { success: true }
}

export async function generateCodes(
  channel: string,
  count: number
): Promise<string[]> {
  const redis = getRedis()
  const codes: string[] = []

  for (let i = 0; i < count; i++) {
    let code = ""
    let exists = true

    while (exists) {
      code = `ET-${generateRandomChars(8)}`
      const existing = await redis.get(`${PREFIX}${code}`)
      exists = existing !== null
    }

    const invite: InviteCode = {
      code,
      channel,
      status: "unused",
      createdAt: new Date().toISOString(),
    }

    await redis.set(`${PREFIX}${code}`, JSON.stringify(invite))
    codes.push(code)
  }

  return codes
}

export async function getAllCodes(): Promise<InviteCode[]> {
  const redis = getRedis()
  const keys = await redis.keys(`${PREFIX}*`)
  if (keys.length === 0) return []

  const values = await redis.mget<InviteCode[]>(...keys)
  return values
    .filter((v): v is InviteCode => v !== null)
    .map((v) => (typeof v === "string" ? JSON.parse(v) : v))
}

export async function getChannelStats(): Promise<
  Record<string, { total: number; used: number; unused: number }>
> {
  const allCodes = await getAllCodes()
  const stats: Record<string, { total: number; used: number; unused: number }> = {}

  for (const code of allCodes) {
    if (!stats[code.channel]) {
      stats[code.channel] = { total: 0, used: 0, unused: 0 }
    }
    stats[code.channel].total++
    if (code.status === "used") {
      stats[code.channel].used++
    } else {
      stats[code.channel].unused++
    }
  }

  return stats
}

function generateRandomChars(length: number): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
