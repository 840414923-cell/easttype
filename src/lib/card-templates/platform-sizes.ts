export interface PlatformSize {
  id: string
  label: string
  width: number
  height: number
}

export const PLATFORM_SIZES: PlatformSize[] = [
  { id: "pinterest", label: "Pinterest", width: 1000, height: 1500 },
  { id: "ig-reels", label: "IG Reels", width: 1080, height: 1920 },
  { id: "ig-post", label: "IG Post", width: 1080, height: 1080 },
  { id: "fb-twitter", label: "FB / X", width: 1200, height: 630 },
]

export function getScale(size: PlatformSize): number {
  return size.width / 1000
}

export function getScaleY(size: PlatformSize): number {
  return size.height / 1500
}

export function isWideFormat(size: PlatformSize): boolean {
  return size.width / size.height > 1.5
}
