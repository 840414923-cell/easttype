"use client"

import { useEffect } from "react"
import { SearchBar } from "@/components/search-bar"

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handler)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
      onClick={onClose}
    >
      <div className="w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
        <SearchBar autoFocus onNavigate={onClose} />
      </div>
    </div>
  )
}
