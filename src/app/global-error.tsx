"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0F1E",
        color: "#E8E2D6",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}>
        <div>
          <h1 style={{ fontSize: "1.5rem", color: "#C9A96E", marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#8B95A8", marginBottom: "2rem" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => unstable_retry()}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              border: "none",
              background: "linear-gradient(to right, #C9A96E, #D4B87A)",
              color: "#0A0F1E",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.875rem",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
