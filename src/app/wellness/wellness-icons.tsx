import type { ReactElement } from "react"

interface IconProps {
  className?: string
}

type IconComponent = (p: IconProps) => ReactElement

const icons: Record<string, IconComponent> = {
  Overview: OverviewIcon,
  "Qi Deficient": QiDeficientIcon,
  "Yang Deficient": YangDeficientIcon,
  "Yin Deficient": YinDeficientIcon,
  "Phlegm Damp": PhlegmDampIcon,
  "Damp Heat": DampHeatIcon,
  "Qi Stagnant": QiStagnantIcon,
  Nutrition: NutritionIcon,
}

export function WellnessIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] || icons["Overview"]
  return <Icon className={className} />
}

function OverviewIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 14 L24 24 L31 28" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function QiDeficientIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 6 L12 26 H22 L20 42 L36 20 H26 L26 6 Z" />
    </svg>
  )
}

function YangDeficientIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42 M11 11 L15 15 M33 33 L37 37 M11 37 L15 33 M33 15 L37 11" />
    </svg>
  )
}

function YinDeficientIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 10 C36 12 39 17 39 23 C39 31 33 38 25 38 C21 38 17 36 15 33 C22 33 28 27 28 20 C28 16 27 12 25 10 C27 9 30 9 32 10 Z" />
      <circle cx="10" cy="14" r="0.8" fill="currentColor" />
      <circle cx="8" cy="20" r="0.6" fill="currentColor" />
    </svg>
  )
}

function PhlegmDampIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 C24 6 12 22 12 31 C12 38 17 42 24 42 C31 42 36 38 36 31 C36 22 24 6 24 6 Z" />
      <path d="M18 31 C18 34 21 36 24 36" />
    </svg>
  )
}

function DampHeatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 C24 6 16 16 16 25 C16 31 20 34 24 34 C28 34 32 31 32 25 C32 16 24 6 24 6 Z" />
      <path d="M24 20 C24 20 21 24 21 27 C21 29 22 30 24 30 C26 30 27 29 27 27 C27 24 24 20 24 20 Z" />
    </svg>
  )
}

function QiStagnantIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 V28" />
      <path d="M24 28 C18 28 14 22 14 16 C14 10 18 6 18 6" />
      <path d="M24 28 C30 28 34 22 34 16 C34 10 30 6 30 6" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="30" cy="6" r="2" />
      <circle cx="24" cy="42" r="2" />
    </svg>
  )
}

function NutritionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 C14 42 8 36 8 28 C8 20 16 14 24 14 C32 14 40 20 40 28 C40 36 34 42 24 42 Z" />
      <path d="M24 14 C24 10 26 6 30 4" />
      <path d="M24 20 V36" />
      <path d="M24 26 C20 26 17 24 17 21" />
      <path d="M24 26 C28 26 31 24 31 21" />
    </svg>
  )
}
