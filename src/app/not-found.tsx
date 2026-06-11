import Link from "next/link"

export default function NotFound() {
  const links = [
    { href: "/quiz", label: "Take the Quiz", desc: "Discover your Eastern body type in 5 minutes" },
    { href: "/symptoms", label: "Browse Symptoms", desc: "70 symptom guides with pattern insights" },
    { href: "/patterns", label: "Explore Patterns", desc: "8 body patterns explained in plain English" },
  ]

  return (
    <main className="flex-1 max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-4xl mb-4 tracking-wide">
        Page Not Found
      </h1>
      <p className="text-text2 mb-10 leading-relaxed">
        The page you are looking for does not exist.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border border-[rgba(201,163,85,0.12)] rounded-xl px-5 py-4 bg-card-bg hover:border-[rgba(201,163,85,0.35)] transition-all duration-300 no-underline"
          >
            <span className="font-[family-name:var(--font-display)] text-lg text-text tracking-wide block mb-1">
              {link.label}
            </span>
            <span className="text-sm text-text2 leading-relaxed block">
              {link.desc}
            </span>
          </Link>
        ))}
      </div>
    </main>
  )
}
