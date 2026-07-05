import type { ReactElement } from "react"

interface IconProps {
  className?: string
}

type IconComponent = (p: IconProps) => ReactElement

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, IconComponent> = {
    energy: EnergyIcon,
    sleep: SleepIcon,
    digestion: DigestionIcon,
    skin: SkinIcon,
    mood: MoodIcon,
    temperature: TemperatureIcon,
    pain: PainIcon,
    womens: WomensIcon,
    immunity: ImmunityIcon,
    circulation: CirculationIcon,
    senses: SensesIcon,
  }

  const Icon = icons[name]
  if (!Icon) return null
  return <Icon className={className} />
}

export function EnergyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 6 L12 26 H22 L20 42 L36 20 H26 L26 6 Z" />
    </svg>
  )
}

export function SleepIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M34 28 C38 26 41 22 41 17 C41 11 36 6 30 6 C32 10 32 15 29 19 C26 23 21 25 16 24 C18 31 25 36 32 36 C36 36 39 34 41 32 C39 33 36 33 34 32 C34 31 34 29 34 28 Z" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="7" cy="20" r="0.8" fill="currentColor" />
      <circle cx="12" cy="26" r="0.8" fill="currentColor" />
    </svg>
  )
}

export function DigestionIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 10 C14 8 16 6 18 6 C20 6 22 8 22 10 V16" />
      <path d="M22 16 C22 22 18 26 14 28 C10 30 8 34 8 38 C8 42 12 44 16 44 C22 44 28 42 34 38 C38 35 40 30 40 24 C40 16 34 12 26 12 C22 12 22 14 22 16 Z" />
      <path d="M16 32 C18 31 19 31 21 32" />
    </svg>
  )
}

export function SkinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8 L14 20 C10 25 10 32 14 37 C18 42 30 42 34 37 C38 32 38 25 34 20 L24 8 Z" />
      <path d="M20 26 C21 24 23 24 24 26 C25 24 27 24 28 26" />
    </svg>
  )
}

export function MoodIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <path d="M18 20 C18 19 18.5 18 19 18 C19.5 18 20 19 20 20" />
      <path d="M28 20 C28 19 28.5 18 29 18 C29.5 18 30 19 30 20" />
      <path d="M18 30 C20 33 28 33 30 30" />
    </svg>
  )
}

export function TemperatureIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 8 C22 6 23 5 24 5 C25 5 26 6 26 8 V30 C28 32 28 36 26 38 C24 40 20 40 18 38 C16 36 16 32 18 30 V8 Z" />
      <circle cx="22" cy="34" r="3" fill="currentColor" stroke="none" />
      <path d="M30 12 H36" />
      <path d="M30 18 H33" />
    </svg>
  )
}

export function PainIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 8 C16 8 12 14 12 22 C12 28 16 32 16 36 C16 39 18 41 20 41 C22 41 23 40 24 38 C25 40 26 41 28 41 C30 41 32 39 32 36 C32 32 36 28 36 22 C36 14 32 8 24 8 Z" />
      <path d="M20 20 C21 18 23 18 24 20 C25 18 27 18 28 20" />
      <path d="M24 24 V28" />
    </svg>
  )
}

export function WomensIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="16" r="10" />
      <path d="M24 26 V42" />
      <path d="M18 36 H30" />
    </svg>
  )
}

export function ImmunityIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6 L36 11 V22 C36 32 30 38 24 42 C18 38 12 32 12 22 V11 L24 6 Z" />
      <path d="M19 23 L23 27 L30 19" />
    </svg>
  )
}

export function CirculationIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42 C24 42 8 30 8 20 C8 14 12 10 18 10 C21 10 23 12 24 14 C25 12 27 10 30 10 C36 10 40 14 40 20 C40 30 24 42 24 42 Z" />
      <path d="M32 16 C34 16 35 18 34 20" />
    </svg>
  )
}

export function SensesIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}
